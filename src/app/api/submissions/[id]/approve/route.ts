import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const sub = await prisma.submission.findUnique({ where: { id } });
  if (!sub) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  await prisma.submission.update({
    where: { id },
    data: { status: "approved" },
  });

  // if you want to copy approved geometry into sector table, do it here
  if (sub.sector === "roads") {
    await prisma.$executeRaw`
      INSERT INTO asphalt(properties, geom)
      VALUES (${sub.properties}, ST_SetSRID(ST_GeomFromGeoJSON(${JSON.stringify(sub.geom)}), 4326));
    `;
  }

  return NextResponse.json({ ok: true });
}
