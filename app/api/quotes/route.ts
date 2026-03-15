import { NextRequest, NextResponse } from "next/server";

const CSG_BASE = process.env.CSG_BASE_URL || "https://api.csgactuarial.com/v1";
const CSG_API_KEY = process.env.CSG_API_KEY || "";
const CSG_PORTAL = process.env.CSG_PORTAL_NAME || "csg_individual";

// Validated allowed plan letters
const ALLOWED_PLANS = new Set(["A","B","C","D","F","G","HDF","K","L","M","N"]);

// --- Token cache (in-memory, refreshes automatically) ---
let cachedToken: string | null = null;
let tokenExpires: number = 0; // unix ms

async function getToken(): Promise<string> {
  // Reuse cached token if still valid (with 15 min buffer)
  const now = Date.now();
  const buffer = 15 * 60 * 1000; // 15 minutes
  if (cachedToken && tokenExpires > now + buffer) {
    return cachedToken;
  }

  // Also support legacy CSG_API_TOKEN for backwards compatibility
  const staticToken = process.env.CSG_API_TOKEN;
  if (!CSG_API_KEY && staticToken) {
    return staticToken;
  }

  if (!CSG_API_KEY) {
    throw new Error("CSG_API_KEY not configured");
  }

  // Auth flow: POST to /auth.json with API key → get token
  const res = await fetch(`${CSG_BASE}/auth.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: CSG_API_KEY, portal_name: CSG_PORTAL }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CSG auth failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  cachedToken = data.token;
  // Parse expiry date and cache it
  const expiresDate = new Date(data.expires_date).getTime();
  tokenExpires = isNaN(expiresDate) ? now + 3600000 : expiresDate; // fallback 1 hour

  return cachedToken!;
}

export async function POST(req: NextRequest) {
  let token: string;
  try {
    token = await getToken();
  } catch (err) {
    console.error("CSG auth failed:", err);
    return NextResponse.json({ error: "Quote service unavailable" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { zip, age, gender, tobacco, plan = "G" } = body as Record<string, unknown>;

  // --- Input validation (never pass raw user input to CSG) ---
  if (typeof zip !== "string" || !/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: "Invalid zip code" }, { status: 400 });
  }
  const ageNum = Number(age);
  if (!Number.isInteger(ageNum) || ageNum < 65 || ageNum > 85) {
    return NextResponse.json({ error: "Age must be between 65 and 85" }, { status: 400 });
  }
  if (gender !== "M" && gender !== "F") {
    return NextResponse.json({ error: "Gender must be M or F" }, { status: 400 });
  }
  const tobaccoNum = Number(tobacco);
  if (tobaccoNum !== 0 && tobaccoNum !== 1) {
    return NextResponse.json({ error: "Tobacco must be 0 or 1" }, { status: 400 });
  }
  const planStr = String(plan).toUpperCase();
  if (!ALLOWED_PLANS.has(planStr)) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  // --- Call CSG API (server-side only) ---
  const params = new URLSearchParams({
    zip5: zip,
    age: String(ageNum),
    gender: gender as string,
    tobacco: String(tobaccoNum),
    plan: planStr,
    apply_discounts: "0",
  });

  let csgData: unknown[];
  try {
    let res = await fetch(`${CSG_BASE}/med_supp/quotes.json?${params}`, {
      headers: { "x-api-token": token },
      next: { revalidate: 3600 }, // cache 1 hour
    });

    // Token expired mid-request — refresh and retry once
    if (res.status === 401 || res.status === 403) {
      cachedToken = null;
      tokenExpires = 0;
      const freshToken = await getToken();
      res = await fetch(`${CSG_BASE}/med_supp/quotes.json?${params}`, {
        headers: { "x-api-token": freshToken },
        next: { revalidate: 3600 },
      });
    }

    if (!res.ok) {
      throw new Error(`CSG API error: ${res.status}`);
    }
    csgData = await res.json();
  } catch (err) {
    console.error("CSG API fetch failed:", err);
    return NextResponse.json({ error: "Quote service temporarily unavailable" }, { status: 502 });
  }

  // --- Shape the response (whitelist fields — don't return raw CSG data) ---
  const quotes = (csgData as Record<string, unknown>[])
    .filter((q) => {
      // Only show sans_hhd (individual) or universal rates
      const vt = (q.view_type as string[]) ?? [];
      return !vt.includes("with_hhd");
    })
    .map((q) => {
      const cb = q.company_base as Record<string, unknown>;
      const rate = q.rate as Record<string, number>;
      const rateIncreases = (q.rate_increases as Array<Record<string, unknown>>) ?? [];
      const lastIncrease = rateIncreases.length > 0 ? rateIncreases[rateIncreases.length - 1] : null;

      return {
        carrier: cb?.name as string ?? "Unknown",
        amBestRating: cb?.ambest_rating as string ?? "NR",
        amBestOutlook: cb?.ambest_outlook as string ?? "",
        monthlyRate: Math.round((rate?.month ?? 0) / 100 * 100) / 100, // pennies → dollars
        rateType: q.rate_type as string ?? "",
        lastRateIncrease: lastIncrease
          ? { pct: lastIncrease.rate_increase, date: lastIncrease.date }
          : null,
        hasPdfApp: q.has_pdf_app as boolean ?? false,
        plan: q.plan as string,
      };
    })
    .sort((a, b) => a.monthlyRate - b.monthlyRate)
    .slice(0, 10); // top 10 lowest rates

  return NextResponse.json({ quotes, plan: planStr, zip, age: ageNum });
}
