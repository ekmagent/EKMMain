import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, zip } = body;

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

    const toEmail = process.env.CONTACT_EMAIL ?? "anthony@medicareyourself.com";

    await resend.emails.send({
      from: "MedicareYourself <no-reply@medicareyourself.com>",
      to: toEmail,
      replyTo: email.trim(),
      subject: `New Medicare lead — ${zip}`,
      text: [
        "New lead from MedicareYourself.com",
        "",
        `Name:  ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Email: ${email.trim()}`,
        `Zip:   ${zip}`,
        "",
        "Reply directly to this email to reach them.",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Something went wrong. Please call us directly." }, { status: 500 });
  }
}
