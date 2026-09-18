import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("受け取ったデータ:", body);

  return NextResponse.json({
    message: "サーバーで受け取りました",
    received: body,
  });
}