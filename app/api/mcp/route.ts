import { NextRequest, NextResponse } from "next/server";
import { getSnapshot } from "@/lib/csg-snapshot";

/**
 * MCP server for the "Medigap Rate Check" ChatGPT app (OpenAI Apps SDK).
 * Streamable-HTTP transport, JSON-RPC 2.0. Exposes only data already
 * published on medicareyourself.com (snapshot aggregates + review-page
 * facts) — never the raw licensed CSG feed — plus a callback-request tool
 * that posts to the same webhook as the site contact form.
 */

const SITE = "https://medicareyourself.com";

const DISCLOSURE =
  "This tool provides rate information only — it does not recommend a plan, provide " +
  "individualized advice, or make coverage decisions; plan selection is handled by a " +
  "licensed professional. MedicareYourself is an independent licensed insurance broker " +
  "(NPN 20586791), not affiliated with or endorsed by Medicare or any government agency. " +
  "Rate statistics are carrier filed rates from CSG Actuarial data as published " +
  "on medicareyourself.com; your exact premium depends on your ZIP, age, and household.";

// Facts below are quoted from our published carrier review pages (same
// figures, same data vintage). Update when the review pages update.
const CARRIERS: Record<string, { name: string; url: string; summary: string }> = {
  humana: {
    name: "Humana",
    url: `${SITE}/medicare-supplement/humana-medigap-review`,
    summary:
      "Humana Medigap (data as of 2026-04-24): NJ Plan G at 65 files $182.60/mo, rank 13 of 19 carriers (NJ market: $147.88 low / $179.94 median). Filed +7.01% (June 2024) and +16.22% (Aug 2025) in NJ; NJ loss ratio crossed 100% in 2025. PA: $177.02, rank 9 of 30, +19.53% filed for Nov 2025. OH: rank 25 of 34 with a +25.03% increase effective April 2026. TX: $217.63, rank 23 of 28 — 67% above the state's cheapest Plan G. Underwritten in several states by Humana Insurance Company of Kentucky.",
  },
  medico: {
    name: "Medico (Wellabe)",
    url: `${SITE}/medicare-supplement/medico-medigap-review`,
    summary:
      "Medico, a Wellabe brand (data as of 2026-04-26): NJ Plan G at 65 files $165.47/mo, rank 5 of 19 carriers — below the NJ median of $179.94. A smaller carrier that often prices aggressively; see the review for filing history and loss ratios.",
  },
  woodmenlife: {
    name: "WoodmenLife",
    url: `${SITE}/medicare-supplement/woodmenlife-medigap-review`,
    summary:
      "WoodmenLife (data as of 2026-04-26): a fraternal benefit society writing Medigap. NJ Plan G at 65 files $205.29/mo, rank 16 of 19 carriers — above the NJ median of $179.94. See the review for structure and filing detail.",
  },
  "mutual-of-omaha": {
    name: "Mutual of Omaha (family of companies)",
    url: `${SITE}/medicare-supplement/mutual-of-omaha-medigap-review`,
    summary:
      "Mutual of Omaha Medigap (data as of 2026-04-26) is four legally separate A+ (AM Best) companies sharing one brand. Escalating filings: PA +3% → +5% → +12% → +19% (2022-2025, PA Plan G $208.62 at 65, rank 24 of 30); TX +25% (June 2025); OH +30% (April 2025); loss ratios near or above 100% in most states. Not present in our NJ ZIP 08002 age-65 sample.",
  },
  "bankers-fidelity": {
    name: "Bankers Fidelity",
    url: `${SITE}/medicare-supplement/bankers-fidelity-review`,
    summary:
      "Bankers Fidelity (see review for current data): frequently among the cheapest filed Plan G rates in its states, with a paper-application process (no online e-app) that trips up self-enrollers. Writes Medicare Supplement in Pennsylvania, New Jersey, Ohio, North Carolina, and Texas.",
  },
};

const STATE_NAMES: Record<string, string> = {
  NJ: "New Jersey",
  PA: "Pennsylvania",
  OH: "Ohio",
  TX: "Texas",
};

const TOOLS = [
  {
    name: "get_medigap_rate_index",
    description:
      "Get filed-rate statistics for Medicare Supplement (Medigap) Plan G or Plan N in a supported US state: lowest and highest filed monthly premium, dollar spread, number of carriers, and household-discount availability. Data are real carrier filed rates (CSG Actuarial) as published in the MedicareYourself Rate Index. Supported states: NJ, PA, OH, TX. Ages: 65, 67, 69.",
    inputSchema: {
      type: "object",
      properties: {
        state: { type: "string", enum: ["NJ", "PA", "OH", "TX"], description: "Two-letter state code" },
        plan: { type: "string", enum: ["G", "N"], description: "Medigap plan letter" },
        age: { type: "string", enum: ["65", "67", "69"], description: "Applicant age (issue age)" },
      },
      required: ["state", "plan"],
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "get_carrier_review",
    description:
      "Get MedicareYourself's data-grounded summary of a Medicare Supplement carrier: filed rates, market rank, recent rate-increase filings, and loss-ratio trend, with a link to the full review. Carriers: humana, medico, woodmenlife, mutual-of-omaha, bankers-fidelity.",
    inputSchema: {
      type: "object",
      properties: {
        carrier: {
          type: "string",
          enum: Object.keys(CARRIERS),
          description: "Carrier slug",
        },
      },
      required: ["carrier"],
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "request_rate_comparison",
    description:
      "Request a free personalized Medigap rate comparison from Anthony Orner, a licensed independent Medicare insurance broker. Requires the user's explicit consent to be contacted. Collects name, phone, and ZIP code; the broker calls with every carrier's filed rate for their exact ZIP and age. Free, no obligation.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "User's name" },
        phone: { type: "string", description: "US phone number, 10+ digits" },
        zip: { type: "string", description: "5-digit US ZIP code" },
        notes: {
          type: "string",
          description:
            "Optional context, e.g. current plan or carrier. Never include health conditions, medical history, or other protected health information.",
        },
        consent: {
          type: "boolean",
          description:
            "Must be true. Confirms the user explicitly agreed to be contacted by phone by a licensed insurance broker about Medicare Supplement rates.",
        },
      },
      required: ["name", "phone", "zip", "consent"],
    },
    annotations: { readOnlyHint: false, openWorldHint: true, destructiveHint: false, idempotentHint: true },
  },
];

function rateIndex(state: string, plan: string, age: string) {
  const snapshot = getSnapshot();
  const st = snapshot?.states?.[state];
  const entry = st?.plans?.[plan]?.[age];
  if (!snapshot || !st || !entry) {
    return `No filed-rate data available for Plan ${plan} in ${state} at age ${age}. Supported: NJ/PA/OH/TX, plans G and N, ages 65/67/69. See ${SITE}/medicare-supplement for published guides.`;
  }
  const lines = [
    `Medigap Plan ${plan} in ${STATE_NAMES[state]} at age ${age} — filed rates as of ${snapshot.asOfDate} (sample: ZIP ${st.sampleZip}, ${st.sampleCity}, female, non-tobacco, no household discount):`,
    `- Lowest filed rate: $${entry.low.toFixed(2)}/month`,
    `- Highest filed rate: $${entry.high.toFixed(2)}/month`,
    `- Spread for identical federally standardized benefits: $${entry.spread.toFixed(2)}/month`,
    `- Carriers quoting: ${entry.carrierCount}`,
  ];
  if (entry.hhd?.low != null) {
    lines.push(
      `- Household discount: ${entry.hhd.carriersOffering} carriers offer one (${entry.hhd.minDiscountPct}%-${entry.hhd.maxDiscountPct}% off); discounted rates start at $${entry.hhd.low.toFixed(2)}`
    );
  }
  if (state === "NJ") {
    lines.push(
      "- New Jersey is community-rated: the premium does not increase with age after purchase. NJ also prohibits tobacco rate differentials during the 6-month Medigap Open Enrollment Period."
    );
  }
  lines.push(
    `Full dataset and methodology: ${SITE}/medicare-supplement/new-jersey/rate-index`,
    DISCLOSURE
  );
  return lines.join("\n");
}

async function requestComparison(args: Record<string, unknown>) {
  const name = String(args.name ?? "").trim();
  const phone = String(args.phone ?? "").trim();
  const zip = String(args.zip ?? "").trim();
  const notes = String(args.notes ?? "").trim();
  if (args.consent !== true)
    return { error: "The user must explicitly consent to a phone call from a licensed broker before this request can be submitted." };
  if (name.length < 2) return { error: "Please provide a name." };
  if (phone.replace(/\D/g, "").length < 10) return { error: "Please provide a valid US phone number." };
  if (!/^\d{5}$/.test(zip)) return { error: "Please provide a 5-digit ZIP code." };

  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) return { error: "Callback requests are temporarily unavailable. Please call 855-559-1700 directly." };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      phone,
      email: "not-collected@chatgpt-app.medicareyourself.com",
      zip,
      source: "chatgpt-app",
      referrer: notes ? `chatgpt-app note: ${notes.slice(0, 300)}` : "chatgpt-app",
      submittedAt: new Date().toISOString(),
    }),
  });
  return {
    ok: `Request received. Anthony Orner (licensed broker, NPN 20586791) will call ${phone} with a full carrier-by-carrier comparison for ZIP ${zip}. Prefer not to wait? Call 855-559-1700. ${DISCLOSURE}`,
  };
}

function toolResult(id: unknown, text: string) {
  return {
    jsonrpc: "2.0",
    id,
    result: { content: [{ type: "text", text }], isError: false },
  };
}

export async function POST(req: NextRequest) {
  let msg: { jsonrpc?: string; id?: unknown; method?: string; params?: Record<string, unknown> };
  try {
    msg = await req.json();
  } catch {
    return NextResponse.json(
      { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
      { status: 400 }
    );
  }

  const { id, method, params } = msg;

  // Notifications (no id) get an empty 202 per streamable-HTTP spec
  if (id === undefined || id === null) {
    return new NextResponse(null, { status: 202 });
  }

  switch (method) {
    case "initialize":
      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion:
            (params?.protocolVersion as string) || "2025-06-18",
          capabilities: { tools: {} },
          serverInfo: {
            name: "medigap-rate-check",
            title: "Medigap Rate Check by MedicareYourself",
            version: "1.0.0",
          },
          instructions:
            "Provides published Medicare Supplement (Medigap) filed-rate statistics for NJ, PA, OH, and TX, carrier review summaries, and an optional callback request to a licensed independent broker. Always show the data source date. Only call request_rate_comparison after the user explicitly agrees to be contacted.",
        },
      });

    case "ping":
      return NextResponse.json({ jsonrpc: "2.0", id, result: {} });

    case "tools/list":
      return NextResponse.json({ jsonrpc: "2.0", id, result: { tools: TOOLS } });

    case "tools/call": {
      const toolName = params?.name as string;
      const args = (params?.arguments ?? {}) as Record<string, unknown>;
      if (toolName === "get_medigap_rate_index") {
        const state = String(args.state ?? "");
        const plan = String(args.plan ?? "G");
        const age = String(args.age ?? "65");
        const text = rateIndex(state, plan, age);
        const snapshot = getSnapshot();
        const entry = snapshot?.states?.[state]?.plans?.[plan]?.[age];
        const res = toolResult(id, text) as {
          result: { structuredContent?: Record<string, unknown> };
        } & Record<string, unknown>;
        if (entry && snapshot) {
          res.result.structuredContent = {
            state,
            plan,
            age: Number(age),
            asOfDate: snapshot.asOfDate,
            lowMonthly: entry.low,
            highMonthly: entry.high,
            spreadMonthly: entry.spread,
            carrierCount: entry.carrierCount,
            householdDiscount: entry.hhd?.low != null
              ? {
                  carriersOffering: entry.hhd.carriersOffering,
                  minDiscountPct: entry.hhd.minDiscountPct,
                  maxDiscountPct: entry.hhd.maxDiscountPct,
                  lowMonthly: entry.hhd.low,
                }
              : null,
            sourceUrl: `${SITE}/medicare-supplement/new-jersey/rate-index`,
          };
        }
        return NextResponse.json(res);
      }
      if (toolName === "get_carrier_review") {
        const c = CARRIERS[String(args.carrier ?? "")];
        return NextResponse.json(
          toolResult(
            id,
            c
              ? `${c.summary}\nFull review: ${c.url}\n${DISCLOSURE}`
              : `Unknown carrier. Available: ${Object.keys(CARRIERS).join(", ")}.`
          )
        );
      }
      if (toolName === "request_rate_comparison") {
        const r = await requestComparison(args);
        return NextResponse.json(toolResult(id, r.error ?? r.ok!));
      }
      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        error: { code: -32602, message: `Unknown tool: ${toolName}` },
      });
    }

    default:
      return NextResponse.json({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
      });
  }
}

// Streamable HTTP: GET opens an SSE stream for server-initiated messages.
// We have none, so decline politely; clients fall back to POST-only.
export async function GET() {
  return new NextResponse(null, { status: 405 });
}
