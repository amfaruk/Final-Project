import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  // return all pending submissions for manager dashboard
  const subs = await prisma.submission.findMany({
    where: { status: "pending" },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(subs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    /*
      expected body shape:
      {
        sector: string;
        properties?: Record<string, unknown>;
        geom: GeoJSON.Geometry;
        userId?: number;               // optional, for auditing
      }
    */

    // persist the submission with pending status; use raw SQL for geom
    const geomText = JSON.stringify(body.geom);

    const inserted: Array<{ id: number }> = await prisma.$queryRaw`
      INSERT INTO "Submission" (sector, properties, geom, status)
      VALUES (
        ${body.sector},
        ${body.properties || {}},
        ST_SetSRID(ST_GeomFromGeoJSON(${geomText}), 4326),
        'pending'
      )
      RETURNING id
    `;
    const submissionId = inserted[0].id;

    // perform collision check against one or more tables.
    // for simplicity we'll just test the `infrastructure` table,
    // but you can add any of the other sector tables below.

    const collisionResult: Array<{ id: number; table_name: string }> =
      await prisma.$queryRaw`
        SELECT i.id, 'infrastructure' AS table_name
        FROM "infrastructure" i
        WHERE ST_Intersects(
          i.geom,
          ST_SetSRID(ST_GeomFromGeoJSON(${geomText}), 4326)
        )
        LIMIT 1;
      `;

    const hasCollision = collisionResult.length > 0;

    if (hasCollision) {
      await prisma.$executeRaw`
        UPDATE "Submission"
        SET hasCollision = true
        WHERE id = ${submissionId}
      `;
    }

    // simple notification record
    await prisma.notification.create({
      data: {
        submissionId,
        message: hasCollision
          ? "New submission has a spatial collision"
          : "New submission without collision",
      },
    });

    return NextResponse.json({ ok: true, hasCollision });
  } catch (err) {
    console.error("POST /api/submissions", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
