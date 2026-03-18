import { NextRequest, NextResponse } from "next/server";

const MOZ_API_TOKEN = process.env.MOZ_API_TOKEN || "";
const SERPER_API_KEY = process.env.SERPER_API_KEY || "";
const TOOLS_PASSWORD = process.env.TOOLS_PASSWORD || "";
const MOZ_API_BASE = "https://lsapi.seomoz.com/v2";
const MOZ_JSONRPC_URL = "https://api.moz.com/jsonrpc";

// ---------------------------------------------------------------------------
// Auth check
// ---------------------------------------------------------------------------
function isAuthed(req: NextRequest): boolean {
  const cookie = req.cookies.get("tools_auth")?.value;
  return !!TOOLS_PASSWORD && cookie === TOOLS_PASSWORD;
}

// ---------------------------------------------------------------------------
// Moz keyword metrics (v3 JSON-RPC)
// ---------------------------------------------------------------------------
async function mozKeywordMetrics(keyword: string) {
  const body = {
    jsonrpc: "2.0",
    id: crypto.randomUUID(),
    method: "data.keyword.metrics.fetch",
    params: {
      data: {
        serp_query: { keyword, locale: "en-US", device: "desktop", engine: "google" },
      },
    },
  };

  const res = await fetch(MOZ_JSONRPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-moz-token": MOZ_API_TOKEN },
    body: JSON.stringify(body),
  });

  if (!res.ok) return null;
  const data = await res.json();
  if (data.error || !data.result?.keyword_metrics) return null;
  return data.result.keyword_metrics;
}

// ---------------------------------------------------------------------------
// Moz URL metrics (v2 — for DA lookup)
// ---------------------------------------------------------------------------
async function mozUrlMetrics(targets: string[]) {
  const res = await fetch(`${MOZ_API_BASE}/url_metrics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${MOZ_API_TOKEN}`,
    },
    body: JSON.stringify({ targets }),
  });

  if (!res.ok) return targets.map(() => null);
  const data = await res.json();
  const results = Array.isArray(data.results) ? data.results : data;
  return targets.map((_, i) => {
    const e = results[i];
    return e ? { domain_authority: e.domain_authority ?? null } : null;
  });
}

// ---------------------------------------------------------------------------
// Serper search
// ---------------------------------------------------------------------------
async function serperSearch(query: string) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 5 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// SERP analysis
// ---------------------------------------------------------------------------
function analyzeSERP(keyword: string, serpData: { organic?: Array<{ title?: string; link?: string }> }) {
  const organic = (serpData.organic || []).slice(0, 5);
  const stops = new Set(["the", "and", "for", "are", "with", "how", "what", "does", "can", "you", "your", "from", "that", "this", "have", "will", "about", "into"]);
  const kwWords = keyword.toLowerCase().split(/\s+/).filter((w) => w.length >= 3 && !stops.has(w));
  const threshold = Math.ceil(kwWords.length / 2);

  let kwInTitles = 0;
  let kwInUrls = 0;
  const results: Array<{ pos: number; title: string; domain: string; url: string; titleMatch: boolean; urlMatch: boolean }> = [];

  for (const r of organic) {
    const title = (r.title || "").toLowerCase();
    const url = (r.link || "").toLowerCase();
    const titleMatch = kwWords.filter((w) => title.includes(w)).length >= threshold;
    const urlMatch = kwWords.filter((w) => url.includes(w)).length >= threshold;
    if (titleMatch) kwInTitles++;
    if (urlMatch) kwInUrls++;

    let domain = "?";
    try { domain = new URL(r.link || "").hostname.replace(/^www\./, ""); } catch { /* */ }

    results.push({ pos: results.length + 1, title: r.title || "", domain, url: r.link || "", titleMatch, urlMatch });
  }

  return { kwInTitles, kwInUrls, results, kwWords, threshold };
}

// ---------------------------------------------------------------------------
// Intent + relevance guessing
// ---------------------------------------------------------------------------
function guessIntent(kw: string) {
  const k = kw.toLowerCase();
  if (/broker|agent|enroll|sign up|quote|buy|cost|price|rate|how much|switch|compare and enroll/.test(k)) return "purchase";
  if (/compare|vs\.?|versus|review|best|top|rank|rating/.test(k)) return "comparison";
  return "informational";
}

function guessRelevance(kw: string) {
  const k = kw.toLowerCase();
  if (/new jersey|nj\b/.test(k)) return 10;
  if (/broker|agent/.test(k)) return 9;
  if (/plan g|plan n|plan f|supplement|medigap/.test(k) && /cost|rate|price|enroll|quote/.test(k)) return 9;
  if (/supplement|medigap/.test(k)) return 8;
  if (/medicare advantage/.test(k)) return 7;
  if (/medicare/.test(k)) return 6;
  return 5;
}

// ---------------------------------------------------------------------------
// Edward score
// ---------------------------------------------------------------------------
function edwardScore(params: { intent: string; kwInTitles: number; kwInUrls: number; das: number[]; relevance: number; difficulty: number; hasMah: boolean }) {
  let score = 0;
  const reasons: string[] = [];

  if (params.intent === "purchase") { score += 3; reasons.push("+3 purchase intent"); }
  else if (params.intent === "comparison") { score += 1; reasons.push("+1 comparison intent"); }
  else reasons.push("+0 informational intent");

  if (params.kwInTitles <= 1) { score += 2; reasons.push(`+2 low title targeting (${params.kwInTitles}/5)`); }
  else if (params.kwInTitles <= 2) { score += 1; reasons.push(`+1 moderate title targeting (${params.kwInTitles}/5)`); }
  else reasons.push(`+0 high title targeting (${params.kwInTitles}/5)`);

  if (params.kwInUrls <= 1) { score += 1; reasons.push(`+1 low URL targeting (${params.kwInUrls}/5)`); }

  const hasLow = params.das.some((d) => d < 30);
  const allHigh = params.das.length > 0 && params.das.every((d) => d >= 70);
  if (hasLow) { score += 2; reasons.push("+2 low DA sites in SERP (beatable)"); }
  if (allHigh) { score -= 3; reasons.push("-3 ALL high DA (70+) — tough SERP"); }

  if (params.relevance >= 10) { score += 2; reasons.push("+2 perfect relevance (10)"); }
  else if (params.relevance >= 8) { score += 1; reasons.push(`+1 high relevance (${params.relevance})`); }

  if (params.difficulty > 0 && params.difficulty < 35) { score += 1; reasons.push(`+1 low difficulty (${params.difficulty})`); }

  if (params.hasMah) { score += 1; reasons.push("+1 medicareagentshub in SERP (DA 18, beatable)"); }

  return { score, reasons };
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { keyword } = await req.json();
  if (!keyword || typeof keyword !== "string") {
    return NextResponse.json({ error: "keyword required" }, { status: 400 });
  }

  const kw = keyword.trim();

  // Run Moz + Serper in parallel
  const [mozMetrics, serpData] = await Promise.all([
    mozKeywordMetrics(kw).catch(() => null),
    serperSearch(kw),
  ]);

  const serp = analyzeSERP(kw, serpData);

  // DA lookup
  const domains = serp.results.map((r) => r.domain);
  const daMetrics = await mozUrlMetrics(domains).catch(() => domains.map(() => null));
  const das = daMetrics.map((m: { domain_authority: number | null } | null) =>
    m?.domain_authority != null ? Math.round(m.domain_authority) : null
  );

  const intent = guessIntent(kw);
  const relevance = guessRelevance(kw);
  const validDAs = das.filter((d): d is number => d != null);
  const hasMah = domains.some((d) => d.includes("medicareagentshub"));

  const { score, reasons } = edwardScore({
    intent,
    kwInTitles: serp.kwInTitles,
    kwInUrls: serp.kwInUrls,
    das: validDAs,
    relevance,
    difficulty: mozMetrics?.difficulty ?? 0,
    hasMah,
  });

  let verdict: string;
  if (score >= 9) verdict = "GO! TARGET IT";
  else if (score >= 7) verdict = "WORTH TARGETING";
  else if (score >= 5) verdict = "MAYBE / LOW PRI";
  else verdict = "DEPRIORITIZE";

  return NextResponse.json({
    keyword: kw,
    moz: mozMetrics
      ? {
          volume: mozMetrics.volume ?? null,
          difficulty: mozMetrics.difficulty ?? null,
          ctr: mozMetrics.organic_ctr != null ? Math.round(mozMetrics.organic_ctr) : null,
          priority: mozMetrics.priority ?? null,
        }
      : null,
    serp: {
      kwInTitles: serp.kwInTitles,
      kwInUrls: serp.kwInUrls,
      kwWords: serp.kwWords,
      threshold: serp.threshold,
      results: serp.results.map((r, i) => ({
        ...r,
        da: das[i],
      })),
    },
    analysis: {
      intent,
      relevance,
      avgDA: validDAs.length ? Math.round(validDAs.reduce((a, b) => a + b, 0) / validDAs.length) : null,
      minDA: validDAs.length ? Math.min(...validDAs) : null,
      maxDA: validDAs.length ? Math.max(...validDAs) : null,
      hasMah,
      score,
      verdict,
      reasons,
    },
  });
}
