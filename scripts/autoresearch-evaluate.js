#!/usr/bin/env node
/**
 * autoresearch-evaluate.js — FROZEN evaluator (do not modify).
 *
 * Reads the generation prompt from autoresearch-prompt.txt,
 * generates keywords via Claude, scores each on the 90-point rubric
 * using real Serper + Moz data, and outputs structured results.
 *
 * This is the "prepare.py" equivalent — the ground truth evaluation.
 *
 * Usage: node autoresearch-evaluate.js
 * Output: results printed to stdout as JSON, logged to autoresearch-results.jsonl
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");
const { getUrlMetrics, getKeywordMetrics, getUsageSummary } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config (frozen)
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const PROMPT_FILE = path.join(__dirname, "autoresearch-prompt.txt");
const RESULTS_FILE = path.join(__dirname, "..", "autoresearch-results.jsonl");
const RESULTS_TSV = path.join(__dirname, "..", "autoresearch-results.tsv");
const EXISTING_KW_FILE = path.join(__dirname, "existing-keywords.json");
const SERPER_DELAY_MS = 350;

// Load existing keywords from Internal SEO sheet (for dedup)
let existingKeywords = new Set();
try {
  const kwList = JSON.parse(fs.readFileSync(EXISTING_KW_FILE, "utf8"));
  existingKeywords = new Set(kwList.map((k) => k.toLowerCase().trim()));
  console.error(`Loaded ${existingKeywords.size} existing keywords for dedup`);
} catch {
  console.error("No existing-keywords.json found — skipping dedup");
}

// ---------------------------------------------------------------------------
// Serper
// ---------------------------------------------------------------------------
async function serperSearch(query) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 5 }),
  });
  if (!res.ok) throw new Error(`Serper ${res.status}: ${res.statusText}`);
  return res.json();
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ---------------------------------------------------------------------------
// Edward Sturm scoring — exact replica of check-keyword.js edwardScore()
// Max score: 12 pts. Verdict: ≥9 GO, 7-8 WORTH IT, 5-6 MAYBE, <5 SKIP
// ---------------------------------------------------------------------------

/**
 * Analyze SERP for keyword targeting (from check-keyword.js analyzeSERP).
 * Counts how many of top 5 results have the keyword's significant words
 * in their title and URL (using ≥50% word overlap threshold).
 */
function analyzeSERP(keyword, organic) {
  const stops = new Set(["the","and","for","are","with","how","what","does","can","you","your","from","that","this","have","will","about","into"]);
  const kwWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length >= 3 && !stops.has(w));
  const threshold = Math.ceil(kwWords.length / 2);

  let kwInTitles = 0, kwInUrls = 0;
  for (const r of organic) {
    const title = (r.title || "").toLowerCase();
    const url = (r.link || "").toLowerCase();
    if (kwWords.filter(w => title.includes(w)).length >= threshold) kwInTitles++;
    if (kwWords.filter(w => url.includes(w)).length >= threshold) kwInUrls++;
  }
  return { kwInTitles, kwInUrls, kwWords, threshold };
}

/**
 * Classify intent from keyword language (from check-keyword.js guessIntent).
 */
function guessIntent(kw) {
  const k = kw.toLowerCase();
  if (/broker|agent|enroll|sign up|quote|buy|cost|price|rate|how much|switch|compare and enroll/.test(k)) return "purchase";
  if (/compare|vs\.?|versus|review|best|top|rank|rating/.test(k)) return "comparison";
  return "informational";
}

/**
 * Guess relevance to medicareyourself.com (from check-keyword.js guessRelevance).
 */
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

/**
 * Edward Score — exact replica of check-keyword.js edwardScore().
 * Input: { intent, kwInTitles, kwInUrls, das, relevance, difficulty }
 * Output: { score (0-12+), reasons [], verdict }
 */
function edwardScore({ intent, kwInTitles, kwInUrls, das, relevance, difficulty }) {
  let score = 0;
  const reasons = [];

  // Intent: +3 purchase, +1 comparison, +0 informational
  if (intent === "purchase") { score += 3; reasons.push("+3 purchase intent"); }
  else if (intent === "comparison") { score += 1; reasons.push("+1 comparison intent"); }
  else { reasons.push("+0 informational intent"); }

  // Title targeting: ≤1 = +2, ≤2 = +1, 3+ = +0
  if (kwInTitles <= 1) { score += 2; reasons.push(`+2 low title targeting (${kwInTitles}/5)`); }
  else if (kwInTitles <= 2) { score += 1; reasons.push(`+1 moderate title targeting (${kwInTitles}/5)`); }
  else { reasons.push(`+0 high title targeting (${kwInTitles}/5)`); }

  // URL targeting: ≤1 = +1
  if (kwInUrls <= 1) { score += 1; reasons.push(`+1 low URL targeting (${kwInUrls}/5)`); }
  else { reasons.push(`+0 URL targeting (${kwInUrls}/5)`); }

  // DA: any < 30 = +2, all ≥ 70 = -3
  const validDAs = das.filter(d => d != null);
  if (validDAs.some(d => d < 30)) { score += 2; reasons.push("+2 low DA sites in SERP (beatable)"); }
  if (validDAs.length > 0 && validDAs.every(d => d >= 70)) { score -= 3; reasons.push("-3 ALL high DA (70+) — tough SERP"); }

  // Relevance: 10 = +2, 8-9 = +1
  if (relevance >= 10) { score += 2; reasons.push("+2 perfect relevance (10)"); }
  else if (relevance >= 8) { score += 1; reasons.push(`+1 high relevance (${relevance})`); }

  // Difficulty: < 35 = +1
  if (difficulty > 0 && difficulty < 35) { score += 1; reasons.push(`+1 low difficulty (${difficulty})`); }

  // Verdict
  let verdict;
  if (score >= 9) verdict = "GO! TARGET IT";
  else if (score >= 7) verdict = "WORTH TARGETING";
  else if (score >= 5) verdict = "MAYBE / LOW PRI";
  else verdict = "DEPRIORITIZE";

  return { score, reasons, verdict };
}

/**
 * Volume gate — pass/fail.
 * Edward's philosophy: compact keywords often show 0 volume in tools but still
 * get traffic through semantic overlap. If Moz has ANY data for the keyword
 * (even difficulty without volume), the keyword is real enough to target.
 */
function hasConfirmedVolume(mozMetrics) {
  if (!mozMetrics) return false;
  // Pass if Moz has volume >= 1
  if (mozMetrics.volume != null && mozMetrics.volume >= 1) return true;
  // Also pass if Moz has difficulty data (keyword exists in their index even if volume = 0)
  if (mozMetrics.difficulty != null) return true;
  return false;
}

// ---------------------------------------------------------------------------
// Evaluate one keyword
// ---------------------------------------------------------------------------
async function evaluateKeyword(keyword) {
  const serpData = await serperSearch(keyword);
  const organic = (serpData.organic || []).slice(0, 5);

  const urls = organic.map((r) => r.link).filter(Boolean);
  let das = [];
  if (urls.length > 0) {
    try {
      const metrics = await getUrlMetrics(urls);
      das = metrics.map((m) => (m?.domain_authority != null ? Math.round(m.domain_authority) : null));
    } catch (err) {
      console.error(`    DA lookup failed: ${err.message}`);
    }
  }

  let mozMetrics = null;
  try { mozMetrics = await getKeywordMetrics(keyword); } catch {}

  // Edward's SERP analysis
  const serpAnalysis = analyzeSERP(keyword, organic);
  const intent = guessIntent(keyword);
  const relevance = guessRelevance(keyword);
  const difficulty = mozMetrics?.difficulty ?? 0;

  // Edward's exact scoring
  const validDAs = das.filter(d => d != null);
  const edward = edwardScore({
    intent,
    kwInTitles: serpAnalysis.kwInTitles,
    kwInUrls: serpAnalysis.kwInUrls,
    das: validDAs,
    relevance,
    difficulty,
  });

  return {
    keyword,
    edwardScore: edward.score,
    verdict: edward.verdict,
    reasons: edward.reasons,
    intent,
    relevance,
    kwInTitles: serpAnalysis.kwInTitles,
    kwInUrls: serpAnalysis.kwInUrls,
    volumePass: hasConfirmedVolume(mozMetrics),
    totalScore: edward.score,
    serpTitles: organic.map((r) => r.title),
    serpDomains: organic.map((r) => { try { return new URL(r.link).hostname.replace(/^www\./, ""); } catch { return "?"; } }),
    das,
    mozVolume: mozMetrics?.volume ?? null,
    mozDifficulty: mozMetrics?.difficulty ?? null,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!SERPER_API_KEY || !ANTHROPIC_API_KEY) {
    console.error("Missing SERPER_API_KEY or ANTHROPIC_API_KEY");
    process.exit(1);
  }

  // Read the mutable prompt
  if (!fs.existsSync(PROMPT_FILE)) {
    console.error(`Prompt file not found: ${PROMPT_FILE}`);
    process.exit(1);
  }
  const generationPrompt = fs.readFileSync(PROMPT_FILE, "utf8").trim();

  // Check Moz budget
  const usage = getUsageSummary();
  console.error(`Moz budget: ${usage.remaining} rows remaining`);

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  // ── GENERATE ──────────────────────────────────────────────
  console.error("Generating keywords...");
  let candidates;
  try {
    const msg = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      messages: [{ role: "user", content: generationPrompt }],
    });
    let text = msg.content[0].text.trim().replace(/^```json?\n?/, "").replace(/\n?```$/, "");
    const arrayStart = text.indexOf("[");
    if (arrayStart > 0) text = text.slice(arrayStart);
    candidates = JSON.parse(text);
    if (!Array.isArray(candidates)) throw new Error("Expected JSON array");
  } catch (err) {
    console.error(`Generator failed: ${err.message}`);
    // Output crash result
    const result = { status: "crash", error: err.message, keywords: [], winners: 0, avgScore: 0 };
    console.log(JSON.stringify(result));
    process.exit(1);
  }

  const allCandidates = candidates.filter((k) => typeof k === "string");
  const keywords = allCandidates.filter((k) => !existingKeywords.has(k.toLowerCase().trim()));
  const duped = allCandidates.length - keywords.length;
  if (duped > 0) console.error(`Deduped: ${duped} already in Keywords sheet, ${keywords.length} new`);
  console.error(`Evaluating ${keywords.length} keywords`);

  if (keywords.length === 0) {
    console.error("All keywords already exist in the sheet");
    const result = { status: "all_dupes", error: "all keywords already in sheet", keywords: [], winners: [], avgScore: 0, volPassRate: 0, allResults: [] };
    console.log(JSON.stringify(result));
    process.exit(0);
  }

  // ── EVALUATE ──────────────────────────────────────────────
  console.error("Evaluating...");
  const results = [];
  for (const kw of keywords) {
    try {
      process.stderr.write(`  ${kw} ... `);
      const r = await evaluateKeyword(kw);
      results.push(r);
      const vTag = r.volumePass ? `PASS(${r.mozVolume})` : "FAIL";
      console.error(`edward=${r.edwardScore} [${r.verdict}] intent=${r.intent} titles=${r.kwInTitles}/5 urls=${r.kwInUrls}/5 vol=${vTag}`);
    } catch (err) {
      console.error(`ERROR: ${err.message}`);
      results.push({ keyword: kw, edwardScore: 0, verdict: "ERROR", reasons: [err.message], intent: "unknown", relevance: 0, kwInTitles: 0, kwInUrls: 0, volumePass: false, totalScore: 0, serpTitles: [], serpDomains: [], das: [], mozVolume: null, mozDifficulty: null });
    }
    await sleep(SERPER_DELAY_MS);
  }

  // No brand match needed — Edward's score already includes relevance

  // Compute summary — Edward's verdicts: ≥9 GO, 7-8 WORTH IT, 5-6 MAYBE, <5 SKIP
  const avgScore = results.length > 0 ? Math.round(results.reduce((s, r) => s + r.edwardScore, 0) / results.length * 10) / 10 : 0;
  const winners = results.filter((r) => r.edwardScore >= 7 && r.volumePass); // WORTH TARGETING or better
  const volPassCount = results.filter((r) => r.volumePass).length;

  // ── OUTPUT ──────────────────────────────────────────────
  // Append each keyword to JSONL
  const timestamp = new Date().toISOString();
  for (const r of results) {
    fs.appendFileSync(RESULTS_FILE, JSON.stringify({ timestamp, ...r }) + "\n");
  }

  // Append to TSV (Karpathy-style results log)
  if (!fs.existsSync(RESULTS_TSV)) {
    fs.writeFileSync(RESULTS_TSV, "timestamp\tavg_score\twinners\tvol_pass\tstatus\tdescription\n");
  }
  const status = winners.length > 0 ? "has_winners" : "no_winners";
  const winnerList = winners.map((w) => `${w.keyword}(${w.edwardScore},${w.verdict})`).join(", ");
  const desc = winners.length > 0 ? winnerList : `best: ${results.sort((a, b) => b.edwardScore - a.edwardScore)[0]?.keyword || "none"}(${results[0]?.edwardScore || 0})`;
  fs.appendFileSync(RESULTS_TSV, `${timestamp}\t${avgScore}\t${winners.length}\t${volPassCount}\t${status}\t${desc}\n`);

  // Print structured result to stdout (for the agent to read)
  const output = {
    status: winners.length > 0 ? "has_winners" : "no_winners",
    avgScore,
    winners: winners.map((w) => ({
      keyword: w.keyword, edwardScore: w.edwardScore, verdict: w.verdict,
      volume: w.mozVolume, difficulty: w.mozDifficulty, reasons: w.reasons,
    })),
    volPassRate: results.length > 0 ? Math.round((volPassCount / results.length) * 100) : 0,
    allResults: results.sort((a, b) => b.edwardScore - a.edwardScore).map((r) => ({
      keyword: r.keyword,
      edwardScore: r.edwardScore,
      verdict: r.verdict,
      reasons: r.reasons,
      intent: r.intent,
      relevance: r.relevance,
      kwInTitles: r.kwInTitles,
      kwInUrls: r.kwInUrls,
      volumePass: r.volumePass,
      mozVolume: r.mozVolume,
      mozDifficulty: r.mozDifficulty,
      serpDomains: r.serpDomains,
      das: r.das,
    })),
  };

  console.log(JSON.stringify(output, null, 2));
}

main().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  const result = { status: "crash", error: err.message, keywords: [], winners: 0, avgScore: 0 };
  console.log(JSON.stringify(result));
  process.exit(1);
});
