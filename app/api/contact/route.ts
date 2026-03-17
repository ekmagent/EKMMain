import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, zip, page, referrer } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!zip || !/^\d{5}$/.test(zip)) {
      return NextResponse.json({ ok: false, error: "Invalid zip code." }, { status: 400 });
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ ok: false, error: "Webhook not configured." }, { status: 500 });
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        zip,
        source: page ?? "medicareyourself.com",
        referrer: referrer ?? null,
        submitted_at: new Date().toISOString(),
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong. Please call us directly." }, { status: 500 });
  }
}
