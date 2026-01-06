// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "نام، ایمیل و پیام لازم است." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "ایمیل نامعتبر است." }, { status: 400 });
    }

    // TODO: اینجا می‌تونی ادغام با SendGrid/SMTP/Sheets/Notion را اضافه کنی.
    // فعلاً فقط لاگ می‌کنیم و موفقیت برمی‌گردانیم.
    console.log("Contact form received:", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: "پیام با موفقیت دریافت شد." }, { status: 201 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "خطای داخلی سرور." }, { status: 500 });
  }
}
