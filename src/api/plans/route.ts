// src/app/api/plans/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();          // `any` by default

    console.log("Received:", body);

    // …do whatever you need with `body` (validation, DB, etc.)…

    return NextResponse.json(
      { message: "Saved successfully" },
      { status: 201 }                       // 201 Created is often appropriate
    );
  } catch (error) {
    console.error("POST /api/plans failed", error);

    return NextResponse.json(
      { error: "Failed to parse request" },
      { status: 500 }
    );
  }
}