#!/usr/bin/env node
/**
 * check-keyword.js — Quick single-keyword checker.
 *
 * Usage: node check-keyword.js "medicare broker for diabetics"
 *
 * Pulls Moz metrics, Serper SERP analysis, DA scores for top 5,
 * and gives an Edward Sturm framework go/no-go verdict.
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { getKeywordMetrics, getUrlMetrics } = require("./moz-api");

const SERPER_KEY = process.env.SERPER_API_KEY;

// ---------------------------------------------------------------------------
// Serper
// ---------------------------------------------------------------------------
async function serperSearch(query) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 5 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}: ${res.statusText}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// SERP analysis
// ---------------------------------------------------------------------------
function analyzeSERP(keyword, serpData) {
  const organic = (serpData.organic || []).slice(0, 5);
  const stops = new Set(["the","and","for","are","with","how","what","does","can","you","your","from","that","this","have","will","about","into"]);
  const kwWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length >= 3 && !stops.has(w));
  const threshold = Math.ceil(kwWords.length / 2);

  let kwInTitles = 0, kwInUrls = 0;
  const results = [];

  for (const r of organic) {
    const title = (r.title || "").toLowerCase();
    const url   = (r.link  || "").toLowerCase();
    const titleMatch = kwWords.filter(w => title.includes(w)).length >= threshold;
    const urlMatch   = kwWords.filter(w => url.includes(w)).length >= threshold;
    if (titleMatch) kwInTitles++;
    if (urlMatch) kwInUrls++;

    let domain = "?";
    try { domain = new URL(r.link).hostname.replace(/^www\./, ""); } catch {}

    results.push({ pos: results.length + 1, title: r.title, domain, url: r.link, titleMatch, urlMatch });
  }

  return { kwInTitles, kwInUrls, results, kwWords, threshold };
}

// ---------------------------------------------------------------------------
// Edward score
// ---------------------------------------------------------------------------
function edwardScore({ intent, kwInTitles, kwInUrls, das, relevance, difficulty }) {
  let score = 0;
  const reasons = [];

  if (intent === "purchase") { score += 3; reasons.push("+3 purchase intent"); }
  else if (intent === "comparison") { score += 1; reasons.push("+1 comparison intent"); }
  else { reasons.push("+0 informational intent"); }

  if (kwInTitles <= 1) { score += 2; reasons.push(`+2 low title targeting (${kwInTitles}/5)`); }
  else if (kwInTitles <= 2) { score += 1; reasons.push(`+1 moderate title targeting (${kwInTitles}/5)`); }
  else { reasons.push(`+0 high title targeting (${kwInTitles}/5)`); }

  if (kwInUrls <= 1) { score += 1; reasons.push(`+1 low URL targeting (${kwInUrls}/5)`); }

  const hasLow  = das.some(d => d < 30);
  const allHigh = das.length > 0 && das.every(d => d >= 70);
  if (hasLow)  { score += 2; reasons.push("+2 low DA sites in SERP (beatable)"); }
  if (allHigh) { score -= 3; reasons.push("-3 ALL high DA (70+) — tough SERP"); }

  if (relevance >= 10) { score += 2; reasons.push("+2 perfect relevance (10)"); }
  else if (relevance >= 8) { score += 1; reasons.push(`+1 high relevance (${relevance})`); }

  if (difficulty > 0 && difficulty < 35) { score += 1; reasons.push(`+1 low difficulty (${difficulty})`); }

  const hasMah = das.some((_, i) => false); // placeholder — checked separately
  return { score, reasons };
}

// ---------------------------------------------------------------------------
// Classify intent from keyword language
// ---------------------------------------------------------------------------
function guessIntent(kw) {
  const k = kw.toLowerCase();
  if (/broker|agent|enroll|sign up|quote|buy|cost|price|rate|how much|switch|compare and enroll/.test(k)) return "purchase";
  if (/compare|vs\.?|versus|review|best|top|rank|rating/.test(k)) return "comparison";
  return "informational";
}

// ---------------------------------------------------------------------------
// Guess relevance to medicareyourself.com
// ---------------------------------------------------------------------------
function guessRelevance(kw) {
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
// Main
// ---------------------------------------------------------------------------
async function main() {
  const keyword = process.argv.slice(2).join(" ").trim();
  if (!keyword) {
    console.log('Usage: node check-keyword.js "your keyword here"');
    process.exit(1);
  }

  console.log(`\n  Checking: "${keyword}"\n`);
  console.log("─".repeat(70));

  // 1. Moz keyword metrics
  process.stdout.write("  Moz metrics...  ");
  let volume = null, difficulty = null, ctr = null, priority = null;
  try {
    const moz = await getKeywordMetrics(keyword);
    if (moz) {
      volume     = moz.volume ?? null;
      difficulty = moz.difficulty ?? null;
      ctr        = moz.organic_ctr != null ? Math.round(moz.organic_ctr) : null;
      priority   = moz.priority ?? null;
      console.log("✓");
    } else {
      console.log("no data (long-tail)");
    }
  } catch (err) {
    console.log(`error: ${err.message}`);
  }

  // 2. Serper SERP analysis
  process.stdout.write("  SERP analysis... ");
  let serpAnalysis;
  try {
    const serpData = await serperSearch(keyword);
    serpAnalysis = analyzeSERP(keyword, serpData);
    console.log("✓");
  } catch (err) {
    console.log(`error: ${err.message}`);
    process.exit(1);
  }

  // 3. DA lookup for top 5 domains
  process.stdout.write("  DA lookup...     ");
  const domains = serpAnalysis.results.map(r => r.domain);
  let das = [];
  try {
    const metrics = await getUrlMetrics(domains);
    das = metrics.map(m => m?.domain_authority != null ? Math.round(m.domain_authority) : null);
    console.log("✓");
  } catch (err) {
    console.log(`error: ${err.message}`);
  }

  console.log("─".repeat(70));

  // 4. Display results
  const intent    = guessIntent(keyword);
  const relevance = guessRelevance(keyword);

  console.log("\n  MOZ METRICS");
  console.log("  ┌────────────┬────────────┬──────────┬──────────────┐");
  console.log(`  │ Volume: ${String(volume ?? "—").padEnd(3)}│ Diff: ${String(difficulty ?? "—").padEnd(4)} │ CTR: ${String(ctr ?? "—").padEnd(3)} │ Priority: ${String(priority ?? "—").padEnd(3)} │`);
  console.log("  └────────────┴────────────┴──────────┴──────────────┘");

  console.log("\n  SERP RESULTS");
  console.log("  ┌────┬──────────────────────────────────────────────────────┬────┬────┐");
  console.log("  │ #  │ Domain                                               │ DA │ KW │");
  console.log("  ├────┼──────────────────────────────────────────────────────┼────┼────┤");
  for (let i = 0; i < serpAnalysis.results.length; i++) {
    const r = serpAnalysis.results[i];
    const da = das[i] != null ? String(das[i]).padStart(2) : " ?";
    const kw = r.titleMatch ? "T" : " ";
    const kwu = r.urlMatch ? "U" : " ";
    console.log(`  │ ${r.pos}  │ ${r.domain.padEnd(53).slice(0, 53)}│ ${da} │${kw}${kwu}  │`);
  }
  console.log("  └────┴──────────────────────────────────────────────────────┴────┴────┘");
  console.log(`  KW in Titles: ${serpAnalysis.kwInTitles}/5  |  KW in URLs: ${serpAnalysis.kwInUrls}/5`);
  console.log(`  Matching words (≥${serpAnalysis.threshold} of ${serpAnalysis.kwWords.length}): ${serpAnalysis.kwWords.join(", ")}`);

  // Show titles
  console.log("\n  PAGE TITLES");
  for (const r of serpAnalysis.results) {
    const mark = r.titleMatch ? "→" : " ";
    console.log(`  ${mark} ${r.pos}. ${r.title}`);
  }

  // 5. Edward's verdict
  const validDAs = das.filter(d => d != null);
  const { score, reasons } = edwardScore({
    intent,
    kwInTitles: serpAnalysis.kwInTitles,
    kwInUrls: serpAnalysis.kwInUrls,
    das: validDAs,
    relevance,
    difficulty: difficulty || 0,
  });

  const hasMah = domains.some(d => d.includes("medicareagentshub"));
  let finalScore = score;
  const finalReasons = [...reasons];
  if (hasMah) { finalScore += 1; finalReasons.push("+1 medicareagentshub in SERP (DA 18, beatable)"); }

  console.log("\n  EDWARD STURM ANALYSIS");
  console.log("  ─────────────────────");
  console.log(`  Intent:    ${intent}`);
  console.log(`  Relevance: ${relevance}/10`);
  console.log(`  Avg DA:    ${validDAs.length ? Math.round(validDAs.reduce((a,b) => a+b, 0) / validDAs.length) : "?"}`);
  console.log(`  Min DA:    ${validDAs.length ? Math.min(...validDAs) : "?"}`);
  console.log(`  Max DA:    ${validDAs.length ? Math.max(...validDAs) : "?"}`);
  console.log("");

  for (const r of finalReasons) {
    console.log(`    ${r}`);
  }

  console.log("");
  console.log("  ╔════════════════════════════════╗");
  if (finalScore >= 9) {
    console.log(`  ║  SCORE: ${finalScore.toString().padStart(2)}  —  GO! TARGET IT    ║`);
  } else if (finalScore >= 7) {
    console.log(`  ║  SCORE: ${finalScore.toString().padStart(2)}  —  WORTH TARGETING  ║`);
  } else if (finalScore >= 5) {
    console.log(`  ║  SCORE: ${finalScore.toString().padStart(2)}  —  MAYBE / LOW PRI  ║`);
  } else {
    console.log(`  ║  SCORE: ${finalScore.toString().padStart(2)}  —  DEPRIORITIZE     ║`);
  }
  console.log("  ╚════════════════════════════════╝");
  console.log("");
}

main().catch(err => { console.error("Fatal:", err.message); process.exit(1); });
