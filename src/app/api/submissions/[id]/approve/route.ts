import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import type { PrismaClient } from '@prisma/client';

// widen type so TS accepts dynamic model names during LSP lag
const db = prisma as unknown as PrismaClient & { submission?: any };

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  // `geom` is an unsupported PostGIS type; the generated TypeScript definition
  // may treat it as `any` or omit it.  Cast to `any` so we can access it.
  const sub: any = await db.submission.findUnique({ where: { id } });
  if (!sub) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  await db.submission.update({
    where: { id },
    data: { status: "approved" },
  });

  // if you want to copy approved geometry into sector table, do it here
  if (sub.sector === "roads") {
    await db.$executeRaw`
      INSERT INTO asphalt(properties, geom)
      VALUES (${sub.properties}, ST_SetSRID(ST_GeomFromGeoJSON(${JSON.stringify(sub.geom)}), 4326));
    `;
  }

  return NextResponse.json({ ok: true });
}
