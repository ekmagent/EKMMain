#!/usr/bin/env node
/**
 * autoresearch-keywords.js
 *
 * Karpathy-style autoresearch loop for keyword discovery.
 * Generator (Claude) → Evaluator (Serper + Moz + regex) → Optimizer (Claude)
 *
 * Each cycle:
 *  1. Claude generates 10 keyword candidates from a mutable prompt
 *  2. Each keyword is scored on Edward Sturm's 100-point rubric using real API data
 *  3. Claude analyzes results and mutates the generation prompt for next cycle
 *
 * Rubric (100 pts):
 *   Title Gap (35) — exact phrase missing from top 3 SERP titles/URLs
 *   DA Weakness (25) — any DA < 30 in top 5
 *   Intent Match (20) — "for [group]" or solution keyword; 0 if listicle/how-to
 *   Brand Match (10) — medicareyourself.com can solve this query
 *   Search Volume (10) — Moz volume ≥ 100
 *
 * Run:  node autoresearch-keywords.js [--cycles N] [--dry-run]
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const { getUrlMetrics, getKeywordMetrics, getUsageSummary } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

const BATCH_SIZE = 10;
const SERPER_DELAY_MS = 350;
const EARLY_STOP_THRESHOLD = 80; // out of 90, AND majority must pass volume gate

const RESULTS_FILE = path.join(__dirname, "..", "autoresearch-results.jsonl");
const LOG_FILE = path.join(__dirname, "..", "autoresearch-log.tsv");
const STATE_FILE = path.join(__dirname, "..", "autoresearch-state.json");

// CLI flags
const args = process.argv.slice(2);
const flagIndex = (f) => args.indexOf(f);
const MAX_CYCLES = (() => {
  const i = flagIndex("--cycles");
  return i >= 0 && args[i + 1] ? parseInt(args[i + 1], 10) : 10;
})();
const DRY_RUN = args.includes("--dry-run");

// ---------------------------------------------------------------------------
// Frozen brand description (used by Generator + Brand Match evaluator)
// ---------------------------------------------------------------------------
const BRAND_DESCRIPTION = `medicareyourself.com is a licensed independent Medicare insurance broker \
based in New Jersey, run by Anthony Orner. The site helps people:
- Choose and enroll in Medicare Supplement (Medigap) plans, especially Plan G, Plan N, Plan F
- Compare Medicare Supplement rates by age and state
- Switch carriers when rates increase
- Navigate Medicare enrollment periods (turning 65, OEP, special enrollment)
- Find a local Medicare broker/agent in NJ and nationally
- Get help with Medicare for people with chronic conditions or pre-existing conditions
The site does NOT primarily sell Medicare Advantage, and does NOT cover Medicaid, VA, Tricare, or employer plans.`;

// ---------------------------------------------------------------------------
// Initial generator prompt (mutable — Optimizer rewrites this each cycle)
// ---------------------------------------------------------------------------
const INITIAL_GENERATION_PROMPT = `You are a keyword research specialist for a low-DA Medicare insurance broker site.

GOAL: Generate exactly ${BATCH_SIZE} keyword phrases that meet ALL of these criteria simultaneously:
1. Have REAL search volume (people actually type these into Google — Moz must return volume ≥ 1)
2. Are NOT already dominated by high-DA sites in the top 3 SERP results
3. The EXACT phrase is NOT in the top 3 Google result titles (this is the "title gap")
4. Show purchase/enrollment/comparison intent, not informational

BRAND CONTEXT:
${BRAND_DESCRIPTION}

THE SWEET SPOT — what actually works:
Keywords like "medigap rate increase" (vol=11) score perfectly because: real people search it, big sites don't target that exact phrase, and it signals a buyer ready to switch plans. This is the Compact Keywords methodology.

Think about: problems people Google when dealing with Medicare supplements, specific scenarios (rate hikes, switching, enrollment timing, coverage gaps), questions phrased as actions not learning, 3-5 word phrases that are specific enough to have a title gap but common enough to register search volume.

PATTERNS THAT WORK (confirmed volume + title gap):
- Specific Medicare problems: "medigap rate increase", "medicare supplement cost by age"
- Action + product combos: "compare medigap rates", "switch medigap plans"
- Coverage scenarios: "medicare supplement pre existing conditions", "guaranteed issue medigap"
- Product + modifier: "medigap plan g cost", "medicare plan g rates"

PATTERNS THAT FAIL (no volume in Moz):
- Hyper-local: anything with NJ town/county names → Moz returns null
- Too many words: 6+ word phrases → Moz returns null
- Too specific age combos: "plan g rates for 67 year old in nj" → null

AVOID:
- Informational "how to" / "what is" queries (title gap = 0, big sites own these)
- "Top 10" / "Best X" listicle-style keywords
- Insurance carrier brand names (AARP, Humana, Cigna, Allstate, etc.) — these are brand searches
- Keywords about Part A/B enrollment, Medicaid, VA, Tricare, employer coverage
- Generic 1-2 word keywords ("medicare supplement", "plan g") — title gap = 0
- "near me" keywords — triggers local pack, volume is misleading
- NJ-specific keywords longer than 4 words — no Moz volume data
- 6+ word keyword phrases — Moz almost never has data for these

Return ONLY a JSON array of ${BATCH_SIZE} keyword strings. No explanation, no markdown fences.`;

// ---------------------------------------------------------------------------
// Serper helper (pattern from check-keyword.js)
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

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Evaluator functions (5 components, 100 pts total)
// ---------------------------------------------------------------------------

/**
 * Title Gap — 0 or 35 pts.
 * Award 35 if the exact keyword phrase is missing from all top 3 titles AND URL slugs.
 */
function scoreTitleGap(keyword, organic) {
  const top3 = organic.slice(0, 3);
  const kwLower = keyword.toLowerCase();
  for (const r of top3) {
    const title = (r.title || "").toLowerCase();
    if (title.includes(kwLower)) return 0;
    const slug = (r.link || "").toLowerCase().replace(/https?:\/\/[^/]+/, "").replace(/[-_/]/g, " ");
    if (slug.includes(kwLower)) return 0;
  }
  return 35;
}

/**
 * DA Weakness — 0 to 25 pts.
 * Any DA < 30 → 25. All DA ≥ 70 → 0. Otherwise linear scale.
 */
function scoreDAWeakness(das) {
  const valid = das.filter((d) => d != null);
  if (valid.length === 0) return 12; // unknown → midpoint
  if (valid.some((d) => d < 30)) return 25;
  if (valid.every((d) => d >= 70)) return 0;
  const avgDA = valid.reduce((a, b) => a + b, 0) / valid.length;
  return Math.round(25 * Math.max(0, 1 - (avgDA - 30) / 40));
}

/**
 * Intent Match — 0 to 20 pts.
 * Listicle/how-to in SERP titles → 0.
 * "for [plural group]" in keyword → 20.
 * Direct solution keyword → 15.
 * Some purchase intent → 10.
 * Weak → 5.
 */
function scoreIntentMatch(keyword, organic) {
  const titles = organic.slice(0, 5).map((r) => (r.title || "").toLowerCase());
  if (titles.some((t) => /^(top \d+|best \d+|\d+ best|how to )/.test(t))) return 0;

  const kwLower = keyword.toLowerCase();
  if (/for\s+(seniors|retirees|patients|people|couples|sufferers|survivors|recipients|businesses|teams|veterans|disabled)\b/.test(kwLower)) return 20;
  if (/enroll|sign.?up|quote|cost|rate|price|broker|agent|find a|compare and/.test(kwLower)) return 15;
  if (/plan [a-z]|supplement|medigap|switch|change/.test(kwLower)) return 10;
  return 5;
}

/**
 * Brand Match — batch 10 keywords in one Claude Sonnet call → 0 or 10 per keyword.
 */
async function scoreBrandMatchBatch(keywords, anthropic) {
  const prompt = `For each keyword below, answer YES or NO: can medicareyourself.com \
(a licensed independent Medicare broker specializing in Medigap plans, NJ-based, also serves nationally) \
immediately solve this query with a dedicated service page? Only answer YES if the topic is clearly within \
Medicare Supplement, Medicare enrollment, broker/agent services, or condition-specific Medicare guidance.

${keywords.map((k, i) => `${i + 1}. ${k}`).join("\n")}

Return ONLY a JSON array of booleans. Example: [true, false, true]`;

  try {
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 256,
      messages: [{ role: "user", content: prompt }],
    });
    const text = msg.content[0].text.trim().replace(/^```json?\n?/, "").replace(/\n?```$/, "");
    const arr = JSON.parse(text);
    return arr.map((v) => (v ? 10 : 0));
  } catch (err) {
    console.warn(`  Brand match call failed: ${err.message} — defaulting all to 5`);
    return keywords.map(() => 5);
  }
}

/**
 * Search Volume — hard gate, not scored.
 * Returns true if Moz confirms volume ≥ 1, false otherwise.
 */
function hasConfirmedVolume(mozMetrics) {
  return mozMetrics != null && mozMetrics.volume != null && mozMetrics.volume >= 1;
}

/**
 * Build a 2-sentence justification from sub-scores (no LLM needed).
 */
function buildJustification(r) {
  const parts = [];
  if (r.titleGap === 35) parts.push("exact phrase missing from top 3 titles (title gap present)");
  else parts.push("exact phrase found in top 3 titles (no title gap)");
  if (r.daWeakness >= 20) parts.push("weak DA competitors present");
  else if (r.daWeakness === 0) parts.push("all high-DA competitors");
  else parts.push(`moderate DA competition (${r.daWeakness} pts)`);
  if (r.intentMatch >= 15) parts.push("strong purchase/solution intent");
  else if (r.intentMatch === 0) parts.push("listicle/informational SERP");
  else parts.push("moderate intent signal");
  if (!r.volumePass) parts.push("FAIL: no confirmed search volume");
  else parts.push("PASS: confirmed search volume (Moz vol=" + (r.mozVolume ?? "?") + ")");
  return `Score ${r.totalScore}/90. ${parts.join("; ")}.`;
}

// ---------------------------------------------------------------------------
// Evaluate one keyword (Serper + Moz + regex)
// ---------------------------------------------------------------------------
async function evaluateKeyword(keyword) {
  const serpData = await serperSearch(keyword);
  const organic = (serpData.organic || []).slice(0, 5);

  // DA lookup — batch all 5 URLs in one Moz call
  const urls = organic.map((r) => r.link).filter(Boolean);
  let das = [];
  if (urls.length > 0) {
    try {
      const metrics = await getUrlMetrics(urls);
      das = metrics.map((m) => (m?.domain_authority != null ? Math.round(m.domain_authority) : null));
    } catch (err) {
      console.warn(`    DA lookup failed: ${err.message}`);
    }
  }

  // Moz keyword metrics (volume)
  let mozMetrics = null;
  try {
    mozMetrics = await getKeywordMetrics(keyword);
  } catch {}

  // Sub-scores (brand match done separately in batch)
  const titleGap = scoreTitleGap(keyword, organic);
  const daWeakness = scoreDAWeakness(das);
  const intentMatch = scoreIntentMatch(keyword, organic);
  const volumePass = hasConfirmedVolume(mozMetrics);

  return {
    keyword,
    titleGap,
    daWeakness,
    intentMatch,
    volumePass,
    brandMatch: 0, // set later in batch
    totalScore: 0, // set later
    serpTitles: organic.map((r) => r.title),
    serpDomains: organic.map((r) => {
      try { return new URL(r.link).hostname.replace(/^www\./, ""); } catch { return "?"; }
    }),
    das,
    mozVolume: mozMetrics?.volume ?? null,
    mozDifficulty: mozMetrics?.difficulty ?? null,
    justification: "",
  };
}

// ---------------------------------------------------------------------------
// Evaluate a full batch of keywords
// ---------------------------------------------------------------------------
async function evaluateBatch(keywords, anthropic) {
  const results = [];
  for (const kw of keywords) {
    try {
      process.stdout.write(`    Evaluating "${kw}" ... `);
      const result = await evaluateKeyword(kw);
      results.push(result);
      const vTag = result.volumePass ? "PASS" : "FAIL";
      console.log(`title=${result.titleGap} da=${result.daWeakness} intent=${result.intentMatch} vol=${vTag}(${result.mozVolume ?? "?"})`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      results.push({
        keyword: kw, titleGap: 0, daWeakness: 0, intentMatch: 0,
        volumePass: false, brandMatch: 0, totalScore: 0, error: err.message,
        serpTitles: [], serpDomains: [], das: [], mozVolume: null, mozDifficulty: null, justification: "",
      });
    }
    await sleep(SERPER_DELAY_MS);
  }

  // Brand match — one batched Sonnet call for all keywords
  const brandScores = await scoreBrandMatchBatch(
    keywords,
    anthropic,
  );
  for (let i = 0; i < results.length; i++) {
    results[i].brandMatch = brandScores[i] || 0;
    // Score out of 90 (title 35 + DA 25 + intent 20 + brand 10). Volume is a gate, not scored.
    results[i].totalScore =
      (results[i].titleGap || 0) +
      (results[i].daWeakness || 0) +
      (results[i].intentMatch || 0) +
      (results[i].brandMatch || 0);
    results[i].justification = buildJustification(results[i]);
  }

  return results;
}

// ---------------------------------------------------------------------------
// Optimizer — mutates the generation prompt based on scored results
// ---------------------------------------------------------------------------
async function optimizePrompt(currentPrompt, batchResults, cycleNumber, anthropic) {
  const summary = batchResults
    .map(
      (r) =>
        `- "${r.keyword}" → ${r.totalScore}/90 (title_gap=${r.titleGap}, da=${r.daWeakness}, intent=${r.intentMatch}, brand=${r.brandMatch}, vol_gate=${r.volumePass ? "PASS" : "FAIL"}[${r.mozVolume ?? "?"}]) | ${r.justification}`,
    )
    .join("\n");

  if (batchResults.length === 0) {
    // Empty batch — tell optimizer to diversify without crashing
    const diversifyPrompt = `You are optimizing a keyword generation prompt for a Medicare broker SEO campaign.

CURRENT GENERATION PROMPT:
---
${currentPrompt}
---

CYCLE ${cycleNumber}: ALL generated keywords were duplicates of previous cycles, so there are NO new results.

The prompt is exhausting its keyword space. You MUST dramatically change the approach:
- Try completely different topic angles (e.g., specific medical procedures covered by Medicare, prescription drug coverage gaps, enrollment timing, carrier comparisons)
- Try different keyword structures (shorter 2-4 word phrases, questions, comparisons)
- Try national keywords instead of NJ-specific ones
- CRITICAL: Keywords must have real search volume in Moz. Hyper-specific long-tail phrases return null. Use broader, commonly-searched phrasing.

Return ONLY the improved generation prompt text. No explanation, no markdown fences. The prompt must instruct Claude to return exactly ${BATCH_SIZE} keyword strings as a JSON array.`;

    const msg = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 2048,
      messages: [{ role: "user", content: diversifyPrompt }],
    });
    return msg.content[0].text.trim();
  }

  const avgScore = Math.round(batchResults.reduce((s, r) => s + r.totalScore, 0) / batchResults.length);
  const bestKw = batchResults.reduce((a, b) => (a.totalScore > b.totalScore ? a : b));
  const worstKw = batchResults.reduce((a, b) => (a.totalScore < b.totalScore ? a : b));

  const optimizerPrompt = `You are optimizing a keyword generation prompt for a Medicare broker SEO campaign.

CURRENT GENERATION PROMPT:
---
${currentPrompt}
---

CYCLE ${cycleNumber} RESULTS (avg score: ${avgScore}/100):
${summary}

BEST: "${bestKw.keyword}" (${bestKw.totalScore}/100)
WORST: "${worstKw.keyword}" (${worstKw.totalScore}/100)

SCORING RUBRIC (frozen — you cannot change how scoring works, max 90 pts):
1. Title Gap (35 pts): exact keyword phrase missing from top 3 Google SERP titles/URLs → 35. Present → 0.
2. DA Weakness (25 pts): any DA < 30 in top 5 → 25. All DA > 70 → 0. Scale between.
3. Intent Match (15-20 pts): listicle/how-to in SERP titles → 0. "for [plural group]" in keyword → 20. Solution action keyword → 15.
4. Brand Match (10 pts): medicareyourself.com can immediately solve this query → 10.
5. Volume Gate (PASS/FAIL): Moz must confirm volume ≥ 1. Keywords with 0 or unknown volume AUTOMATICALLY FAIL regardless of score. This is the MOST IMPORTANT constraint — a keyword with score 90 but no volume is worthless.

WHAT YOU CAN CHANGE in the prompt:
- Topic angles, verticals, niches to explore
- Modifier patterns (geographic, demographic, condition-specific, age-specific)
- Keyword structure templates and examples
- Specificity level and word count guidance
- Strategic advice about what makes a keyword rankable

WHAT YOU CANNOT CHANGE:
- The batch size (${BATCH_SIZE} keywords)
- The output format (JSON array of strings)
- The brand description
- The scoring rubric

CRITICAL SIGNAL: ${batchResults.filter((r) => !r.volumePass).length} of ${batchResults.length} keywords FAILED the volume gate (Moz volume = 0 or unknown). \
${batchResults.filter((r) => !r.volumePass).length >= batchResults.length / 2
    ? "MOST KEYWORDS HAVE NO VOLUME — this is the #1 problem. Keywords that fail the volume gate are WORTHLESS regardless of their score. The Moz API returns null for hyper-specific long-tail phrases. You MUST broaden: drop town/county names, use state-level or national phrasing, use shorter 3-5 word phrases that real people actually type into Google. Study the keywords that DID pass volume and replicate those patterns."
    : "Some keywords pass volume — lean heavily into those patterns and abandon the patterns that fail."}

ANALYZE: What patterns scored highest and why? What lost points? What new angles could yield higher scores?

Return ONLY the improved generation prompt text. No explanation, no markdown fences. The prompt must instruct Claude to return exactly ${BATCH_SIZE} keyword strings as a JSON array.`;

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 2048,
    messages: [{ role: "user", content: optimizerPrompt }],
  });

  return msg.content[0].text.trim();
}

// ---------------------------------------------------------------------------
// Google Sheets output
// ---------------------------------------------------------------------------
async function getSheetsClient() {
  if (!GOOGLE_CREDENTIALS_JSON) throw new Error("GOOGLE_CREDENTIALS_JSON not set");
  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

async function writeWinnersToSheet(winners) {
  if (!INTERNAL_SEO_SHEET_ID) {
    console.log("  No INTERNAL_SEO_SHEET_ID set — skipping Sheets write");
    return;
  }
  const sheets = await getSheetsClient();
  const today = new Date().toISOString().slice(0, 10);

  // Check existing keywords to avoid duplicates
  let existing = new Set();
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: INTERNAL_SEO_SHEET_ID,
      range: "Keywords!A:A",
    });
    existing = new Set((res.data.values || []).flat().map((v) => v.toLowerCase().trim()));
  } catch {}

  const rows = winners
    .filter((r) => !existing.has(r.keyword.toLowerCase()))
    .map((r) => [
      r.keyword,
      "",                            // Category 1
      "",                            // Category 2
      r.mozVolume ?? "",             // Avg Volume
      r.mozDifficulty ?? "",         // Difficulty
      "",                            // SERP CTR
      "",                            // Moz Priority
      r.totalScore,                  // On-Site Relevance (using autoresearch score)
      `autoresearch:${r.totalScore}`, // Notes — tag the source + score
      "",                            // Min Volume
      "",                            // Max Volume
      "pending",                     // Targeted? — HITL review
    ]);

  if (rows.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: INTERNAL_SEO_SHEET_ID,
      range: "Keywords!A:A",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: rows },
    });
    console.log(`  Sheets: added ${rows.length} winning keywords to Keywords tab`);
  } else {
    console.log("  Sheets: all winners already present");
  }
}

// ---------------------------------------------------------------------------
// State + logging
// ---------------------------------------------------------------------------
function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return { cyclesCompleted: 0, bestPrompt: null, bestAvgScore: 0, allKeywordsSeen: [] };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function appendJsonl(obj) {
  fs.appendFileSync(RESULTS_FILE, JSON.stringify(obj) + "\n");
}

function logCycleTsv(cycle, avgScore, bestKeyword, mozRowsUsed) {
  const today = new Date().toISOString().slice(0, 10);
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "date\tcycle\tavg_score\tbest_score\tbest_keyword\tmoz_rows_used\n");
  }
  const best = bestKeyword || { totalScore: 0, keyword: "" };
  fs.appendFileSync(LOG_FILE, `${today}\t${cycle}\t${avgScore}\t${best.totalScore}\t${best.keyword}\t${mozRowsUsed}\n`);
}

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------
async function main() {
  console.log("=== AUTORESEARCH KEYWORD LOOP ===");
  console.log(`Config: ${MAX_CYCLES} cycles, batch size ${BATCH_SIZE}, early stop at ${EARLY_STOP_THRESHOLD}`);
  if (DRY_RUN) console.log("DRY RUN — will not write to Google Sheets");
  console.log("");

  // Validate env
  if (!SERPER_API_KEY) { console.error("SERPER_API_KEY not set"); process.exit(1); }
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }

  // Check Moz budget
  const usage = getUsageSummary();
  const estimatedCost = MAX_CYCLES * BATCH_SIZE * 6; // ~6 Moz rows per keyword (5 URL metrics + 1 keyword metrics)
  console.log(`Moz budget: ${usage.remaining} rows remaining. Estimated cost: ~${estimatedCost} rows.`);
  let effectiveCycles = MAX_CYCLES;
  if (usage.remaining < estimatedCost) {
    effectiveCycles = Math.max(1, Math.floor(usage.remaining / (BATCH_SIZE * 6)));
    console.warn(`Budget only allows ~${effectiveCycles} cycles. Reducing from ${MAX_CYCLES}.`);
  }
  console.log("");

  // Load state (resume support)
  const state = loadState();
  const seenKeywords = new Set((state.allKeywordsSeen || []).map((k) => k.toLowerCase()));
  let bestPrompt = state.bestPrompt || INITIAL_GENERATION_PROMPT;
  let bestAvgScore = state.bestAvgScore || 0;
  let bestWinnerCount = state.bestWinnerCount || 0;

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const allWinners = [];
  let totalMozRows = 0;
  let consecutiveRejects = 0;

  for (let cycle = 1; cycle <= effectiveCycles; cycle++) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`  CYCLE ${cycle}/${effectiveCycles}  (best so far: ${bestWinnerCount} winners, avg ${bestAvgScore}/90)`);
    console.log("=".repeat(60));

    // ── MUTATE ────────────────────────────────────────────────
    // Karpathy pattern: mutate from best known prompt, then accept/reject
    let candidatePrompt;
    if (cycle === 1) {
      candidatePrompt = bestPrompt;
      console.log("\n  [MUTATE] Using seed prompt.");
    } else {
      console.log("\n  [MUTATE] Generating candidate prompt from best known...");
      candidatePrompt = await optimizePrompt(bestPrompt, state.lastResults || [], cycle - 1, anthropic);
      console.log("  Candidate prompt ready.");
    }

    // ── GENERATE ──────────────────────────────────────────────
    console.log("\n  [GENERATE] Asking Claude for keywords...");
    let candidates;
    try {
      const genMsg = await anthropic.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 1024,
        messages: [{ role: "user", content: candidatePrompt }],
      });
      let text = genMsg.content[0].text.trim().replace(/^```json?\n?/, "").replace(/\n?```$/, "");
      const arrayStart = text.indexOf("[");
      if (arrayStart > 0) text = text.slice(arrayStart);
      candidates = JSON.parse(text);
      if (!Array.isArray(candidates)) throw new Error("Expected JSON array");
    } catch (err) {
      console.warn(`  Generator returned invalid output: ${err.message}`);
      console.warn("  REJECT — keeping best prompt.");
      consecutiveRejects++;
      if (consecutiveRejects >= 3) {
        console.log("  3 consecutive rejects — forcing diversify on best prompt.");
        candidatePrompt = await optimizePrompt(bestPrompt, [], cycle, anthropic);
        consecutiveRejects = 0;
      }
      state.cyclesCompleted = cycle;
      state.allKeywordsSeen = [...seenKeywords];
      saveState(state);
      continue;
    }

    // Deduplicate
    const fresh = candidates.filter((kw) => typeof kw === "string" && !seenKeywords.has(kw.toLowerCase()));
    const dupes = candidates.length - fresh.length;
    if (dupes > 0) console.log(`  Deduped: ${dupes} already seen, ${fresh.length} new`);
    for (const kw of fresh) seenKeywords.add(kw.toLowerCase());

    if (fresh.length === 0) {
      consecutiveRejects++;
      if (consecutiveRejects >= 3) {
        // Karpathy-style reset: clear seen keywords so generator can re-explore new territory
        console.log("  All dupes + 3 consecutive rejects — RESETTING seen keywords to allow re-exploration.");
        seenKeywords.clear();
        // Re-add only the winning keywords (protect the best finds)
        for (const w of allWinners) seenKeywords.add(w.keyword.toLowerCase());
        consecutiveRejects = 0;
      } else {
        console.log("  All keywords already seen — REJECT.");
      }
      state.cyclesCompleted = cycle;
      state.allKeywordsSeen = [...seenKeywords];
      saveState(state);
      continue;
    }

    console.log(`  Generated ${fresh.length} keywords:`);
    for (const kw of fresh) console.log(`    - ${kw}`);

    // ── EVALUATE ──────────────────────────────────────────────
    console.log("\n  [EVALUATE] Scoring keywords with real SERP + Moz data...");
    const results = await evaluateBatch(fresh, anthropic);
    totalMozRows += fresh.length * 6;

    const avgScore = results.length > 0
      ? Math.round(results.reduce((s, r) => s + r.totalScore, 0) / results.length)
      : 0;
    const bestInBatch = results.reduce((a, b) => (a.totalScore > b.totalScore ? a : b), results[0]);
    const winners = results.filter((r) => r.totalScore >= 70 && r.volumePass);
    const highScoreNoVol = results.filter((r) => r.totalScore >= 70 && !r.volumePass);

    console.log(`\n  Batch results (avg: ${avgScore}/90):`);
    for (const r of results.sort((a, b) => b.totalScore - a.totalScore)) {
      const vTag = r.volumePass ? `PASS(${r.mozVolume})` : "FAIL";
      console.log(`    [${String(r.totalScore).padStart(2)}/90] ${r.keyword}  vol=${vTag}`);
      console.log(`           title=${r.titleGap} da=${r.daWeakness} intent=${r.intentMatch} brand=${r.brandMatch}`);
    }

    // Log to JSONL (always — even rejected cycles are data)
    for (const r of results) {
      appendJsonl({ cycle, ...r, prompt_version: cycle });
    }
    logCycleTsv(cycle, avgScore, bestInBatch, totalMozRows);

    if (winners.length > 0) {
      console.log(`\n  WINNERS (score >= 70 + volume PASS): ${winners.length}`);
      for (const w of winners) console.log(`    [${w.totalScore}/90] ${w.keyword} (vol=${w.mozVolume})`);
    }
    if (highScoreNoVol.length > 0) {
      console.log(`\n  High score but NO VOLUME (rejected): ${highScoreNoVol.length}`);
      for (const r of highScoreNoVol) console.log(`    [${r.totalScore}/90] ${r.keyword} — volume gate FAIL`);
    }

    // Winners are always kept regardless of accept/reject
    allWinners.push(...winners);

    // ── ACCEPT / REJECT (Karpathy pattern) ────────────────────
    // Accept if: more winners, OR same winners but higher avg score
    const improved = winners.length > bestWinnerCount
      || (winners.length === bestWinnerCount && avgScore > bestAvgScore);

    if (improved) {
      console.log(`\n  ✓ ACCEPT — prompt kept (winners: ${bestWinnerCount}→${Math.max(winners.length, bestWinnerCount)}, avg: ${bestAvgScore}→${avgScore})`);
      bestPrompt = candidatePrompt;
      bestAvgScore = avgScore;
      bestWinnerCount = Math.max(winners.length, bestWinnerCount);
      consecutiveRejects = 0;
    } else {
      console.log(`\n  ✗ REJECT — reverting to best prompt (winners: ${winners.length} vs ${bestWinnerCount}, avg: ${avgScore} vs ${bestAvgScore})`);
      // Do NOT update bestPrompt — revert
      consecutiveRejects++;
      if (consecutiveRejects >= 3) {
        console.log("  3 consecutive rejects — RESETTING seen keywords for fresh exploration.");
        seenKeywords.clear();
        for (const w of allWinners) seenKeywords.add(w.keyword.toLowerCase());
        consecutiveRejects = 0;
      }
    }

    // Store last results for optimizer context in next cycle
    state.lastResults = results;

    // ── EARLY STOP ────────────────────────────────────────────
    // Only stop on an ACCEPTED cycle with enough data (Karpathy: never stop prematurely)
    const volPassRate = results.filter((r) => r.volumePass).length / results.length;
    if (improved && results.length >= BATCH_SIZE / 2 && avgScore >= EARLY_STOP_THRESHOLD && volPassRate >= 0.5) {
      console.log(`\n  EARLY STOP: avg score ${avgScore}/90 >= ${EARLY_STOP_THRESHOLD} AND ${Math.round(volPassRate * 100)}% pass volume gate`);
      state.cyclesCompleted = cycle;
      break;
    }

    // Save state after each cycle (crash recovery)
    state.cyclesCompleted = cycle;
    state.bestAvgScore = bestAvgScore;
    state.bestPrompt = bestPrompt;
    state.bestWinnerCount = bestWinnerCount;
    state.allKeywordsSeen = [...seenKeywords];
    saveState(state);
  }

  // ── FINAL OUTPUT ──────────────────────────────────────────
  // Save final state
  state.bestAvgScore = bestAvgScore;
  state.bestPrompt = bestPrompt;
  state.bestWinnerCount = bestWinnerCount;
  state.allKeywordsSeen = [...seenKeywords];
  saveState(state);

  // Write winners to Google Sheets
  if (allWinners.length > 0 && !DRY_RUN) {
    console.log("\n  Writing winners to Google Sheets...");
    try {
      await writeWinnersToSheet(allWinners);
    } catch (err) {
      console.warn(`  Sheets write failed: ${err.message}`);
      console.warn("  (Results still saved in JSONL)");
    }
  }

  // Print summary
  console.log(`\n${"=".repeat(60)}`);
  console.log("  AUTORESEARCH COMPLETE");
  console.log("=".repeat(60));
  console.log(`  Cycles completed: ${state.cyclesCompleted}`);
  console.log(`  Best avg score:   ${bestAvgScore}/90`);
  console.log(`  Total winners:    ${allWinners.length} (score >= 70 + volume PASS)`);
  console.log(`  Moz rows used:    ~${totalMozRows}`);
  console.log(`  Results:          ${RESULTS_FILE}`);
  console.log(`  Best prompt:      ${STATE_FILE}`);
  console.log("");

  if (allWinners.length > 0) {
    console.log("  TOP KEYWORDS (score + confirmed volume):");
    for (const w of allWinners.sort((a, b) => b.totalScore - a.totalScore).slice(0, 15)) {
      console.log(`    [${w.totalScore}/90] ${w.keyword} (vol: ${w.mozVolume}, diff: ${w.mozDifficulty ?? "?"})`);
    }
  }
  console.log("");
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
