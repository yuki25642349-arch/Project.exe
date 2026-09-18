import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await client.responses.create({
      model: "gpt-5",
      input: `
あなたはカレンダーアプリの予定作成アシスタントです。

ユーザーの入力:
${body.text}

この予定について簡潔に返答してください。
      `,
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);

    return NextResponse.json(
      {
        error: "AIの処理中にエラーが発生しました",
      },
      {
        status: 500,
      },
    );
  }
}