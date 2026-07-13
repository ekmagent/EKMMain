import { NextRequest, NextResponse } from "next/server";

const REASONS: Record<string, string> = {
  "turning-65": "Turning 65 / new to Medicare",
  "rate-increase": "Rate went up",
  "compare-rates": "Wants to compare plans & rates",
  "losing-coverage": "Losing employer coverage",
  "helping-someone": "Helping a parent or spouse",
  researching: "Just researching",
};

const SOURCES: Record<string, string> = {
  google: "Google search",
  "ai-assistant": "ChatGPT / AI assistant",
  youtube: "YouTube",
  "reddit-forum": "Reddit / forum",
  "friend-family": "Friend or family",
  other: "Other",
};

const CONTACT_PREFS: Record<string, string> = {
  call: "Call",
  text: "Text",
  email: "Email",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown, max = 300): string {
  return typeof value === "string" ? value.slice(0, max).trim() : "";
}

const GHL_API_BASE = "https://services.leadconnector.com";

// Creates/updates the contact in GHL via the free REST API (no billed
// inbound-webhook trigger). Attaches lead context as a contact note.
async function deliverToGhlApi(
  token: string,
  locationId: string,
  lead: Record<string, unknown>,
  noteBody: string
): Promise<Response> {
  const fullName = String(lead.name);
  const [firstName, ...rest] = fullName.split(/\s+/);
  const res = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locationId,
      firstName,
      lastName: rest.join(" ") || undefined,
      name: fullName,
      email: lead.email,
      phone: `+1${lead.phone}`,
      postalCode: lead.zip,
      dateOfBirth: lead.dob,
      source: "medicareyourself.com /quote",
      tags: ["website-quote"],
    }),
  });
  if (res.ok) {
    const data = await res.json().catch(() => null);
    const contactId = data?.contact?.id;
    if (contactId) {
      // Best-effort: full context as a note on the contact
      await fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Version: "2021-07-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: noteBody }),
      }).catch(() => null);
    }
  }
  return res;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const zip = clean(body.zip, 5);
  const dob = clean(body.dob, 10);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 20);
  const reason = clean(body.reason, 30);
  const source = clean(body.source, 30);
  const contactPref = clean(body.contactPref, 10);
  const attr = (body.attribution ?? {}) as Record<string, unknown>;
  const landing = clean(attr.landing, 500);
  const referrer = clean(attr.referrer, 500);
  const prevPage = clean(attr.prevPage, 500);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json({ ok: false, error: "Invalid ZIP code." }, { status: 400 });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
    return NextResponse.json({ ok: false, error: "Invalid date of birth." }, { status: 400 });
  }
  const birthYear = Number(dob.slice(0, 4));
  if (birthYear < 1920 || birthYear > 2010) {
    return NextResponse.json({ ok: false, error: "Invalid date of birth." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    return NextResponse.json({ ok: false, error: "Invalid phone number." }, { status: 400 });
  }
  if (!(reason in REASONS) || !(source in SOURCES) || !(contactPref in CONTACT_PREFS)) {
    return NextResponse.json({ ok: false, error: "Invalid selection." }, { status: 400 });
  }

  const age = Math.floor(
    (Date.now() - new Date(`${dob}T00:00:00Z`).getTime()) / (365.25 * 24 * 3600 * 1000)
  );

  const lead = {
    name,
    zip,
    dob,
    age,
    email,
    phone: phoneDigits,
    reason: REASONS[reason],
    source: SOURCES[source],
    contact_preference: CONTACT_PREFS[contactPref],
    landing_page: landing || null,
    clicked_from: prevPage || null,
    referrer: referrer || null,
    form: "quote-flow",
    site: "medicareyourself.com",
    submitted_at: new Date().toISOString(),
  };

  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  const ghlUrl = process.env.GHL_WEBHOOK_URL;
  const genericUrl = process.env.WEBHOOK_URL;
  const ghlApiToken = process.env.GHL_API_TOKEN;
  const ghlLocationId = process.env.GHL_LOCATION_ID;
  const ghlApiConfigured = Boolean(ghlApiToken && ghlLocationId);

  if (!slackUrl && !ghlUrl && !genericUrl && !ghlApiConfigured) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us at 855-559-1700." },
      { status: 500 }
    );
  }

  const slackText = [
    `🔥 *New quote request — ${name}* (age ${age}, ZIP ${zip})`,
    `*Why:* ${lead.reason}`,
    `*Found us via:* ${lead.source}`,
    `*Reach out by:* ${lead.contact_preference}`,
    `*Phone:* ${phoneDigits}  ·  *Email:* ${email}  ·  *DOB:* ${dob}`,
    `*Clicked from:* ${prevPage || "(direct to /quote)"}`,
    `*Landed on:* ${landing || "n/a"}  ·  *Referrer:* ${referrer || "none"}`,
  ].join("\n");

  const noteBody = [
    `Website quote request (${lead.submitted_at})`,
    `Why: ${lead.reason}`,
    `Found us via: ${lead.source}`,
    `Reach out by: ${lead.contact_preference}`,
    `Clicked from: ${prevPage || "(direct to /quote)"}`,
    `Landed on: ${landing || "n/a"}`,
    `Referrer: ${referrer || "none"}`,
  ].join("\n");

  const deliveries: Promise<Response>[] = [];
  if (ghlApiConfigured) {
    deliveries.push(deliverToGhlApi(ghlApiToken!, ghlLocationId!, lead, noteBody));
  }
  if (slackUrl) {
    deliveries.push(
      fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: slackText }),
      })
    );
  }
  if (ghlUrl) {
    deliveries.push(
      fetch(ghlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      })
    );
  }
  if (genericUrl) {
    deliveries.push(
      fetch(genericUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      })
    );
  }

  const results = await Promise.allSettled(deliveries);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value.ok);

  if (!delivered) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us at 855-559-1700." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
