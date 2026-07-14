/**
 * find-compact-keywords.js
 * Implements the Compact Keywords SEO methodology for medicareyourself.com.
 *
 * Compact Keywords = bottom-of-funnel keywords, 0-500 monthly searches,
 * purchase intent > volume. DA 10+ sites can rank #1 with these.
 *
 * Each run:
 *  1. Pulls competitor ranking keywords via Moz v3 API (with difficulty + volume)
 *  2. Searches Serper for seed topics + high-leverage combos (Related Searches, PAA)
 *  3. Deduplicates and filters for Medicare bottom-of-funnel intent
 *  4. Filters by Moz difficulty (drops keywords with difficulty > 60)
 *  5. Enriches with SERP CTR + Priority via Moz keyword metrics API
 *  6. Scores each keyword by On-Site Relevance (1–10) with Claude
 *  7. Writes scored keywords to Keywords tab (Status = "pending")
 *  8. Logs to compact-keywords-log.tsv
 *
 * NEXT STEP: Open the Keywords tab, review rows, change "pending" → "target"
 * on keywords you want built, then run generate-blueprints.js.
 *
 * Run: node find-compact-keywords.js
 * Idempotent — skips keywords already in the sheet.
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const { getRankingKeywordsV3, getKeywordMetrics, getUsageSummary } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;

// Course sheet IDs — each serves a distinct purpose
const COMPETITORS_KEYWORD_SHEET_ID = process.env.COMPETITORS_KEYWORD_SHEET_ID; // keyword research output
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;               // page blueprints (Title/URL/H1/H2s)
const SITE_AUDIT_SHEET_ID = process.env.SITE_AUDIT_SHEET_ID;                   // existing page audits (used by audit script)
const DIRECTORY_SEO_SHEET_ID = process.env.DIRECTORY_SEO_SHEET_ID;             // directory submissions (used by backlinks script)

const LOG_FILE = path.join(__dirname, "..", "compact-keywords-log.tsv");
const STATE_FILE = path.join(__dirname, "..", "compact-keywords-state.json");

// ---------------------------------------------------------------------------
// Bottom-of-funnel seed topics — Compact Keywords style
// Each becomes a Serper "site:competitor" + related search
// ---------------------------------------------------------------------------
const SEED_TOPICS = [
  // Plan-specific purchase intent
  "medicare supplement plan g cost",
  "medicare supplement plan g vs plan n",
  "cheapest medicare supplement plan g",
  "best medicare supplement companies",
  "medicare supplement rates by age",
  // Carrier / switching
  "switch medicare supplement carriers",
  "medicare supplement rate increase",
  "best medicare supplement companies 2025",
  "mutual of omaha medicare supplement",
  "aarp medicare supplement review",
  // State / geography
  "medicare supplement new jersey",
  "medicare supplement new jersey plan g",
  "medicare broker new jersey",
  // Age / life event
  "medicare supplement turning 65",
  "medicare enrollment period new jersey",
  "medicare supplement open enrollment",
  // Comparison
  "medicare supplement vs medicare advantage",
  "original medicare vs medicare supplement",
  // Specific questions (long-tail bottom-of-funnel)
  "does medicare supplement cover dental",
  "does medicare supplement cover vision",
  "what does plan g cover",
  "medicare supplement high deductible plan g",
  "medicare supplement foreign travel coverage",
  // Cost-focused
  "how much does medicare supplement cost per month",
  "medicare supplement plan g premium 2025",
  "affordable medicare supplement plans",
  // Age-specific cost queries (from client language — Edward 07-09)
  "how much is plan g in nj for 65 year old",
  "how much is plan g in nj for 70 year old",
  "how much is plan g in nj for 72 year old",
  "how much is plan g in nj for 75 year old",
  "how much is plan g in nj for 80 year old",
  // Speed / urgency
  "how fast can i start my medicare supplement",
  "how quickly can i get medicare supplement coverage",
  "same day medicare supplement enrollment",
  // Condition-specific (Edward 07-09 "overlooked details" pattern)
  "best medicare plan for someone with parkinsons",
  "best medicare plan for someone with crohns",
  "best medicare plan for someone with diabetes",
  "best medicare plan for someone with copd",
  "best medicare plan for someone with heart disease",
  "best medicare plan for someone with cancer",
  "best medicare plan for someone with kidney disease",
  "best medicare plan for someone with arthritis",
  "best medicare plan for someone with dementia",
  "best medicare plan for someone with multiple sclerosis",
  // Condition-specific agent search
  "medicare agent that specializes in parkinsons",
  "medicare agent that specializes in crohns",
  "medicare agent that specializes in diabetes",
  "medicare agent for someone with pre-existing conditions",
  // Value / trust messaging as search queries
  "medicare broker no cost to you",
  "free medicare plan comparison",
  "independent medicare broker near me new jersey",
  "medicare agent that helps with paperwork",
];

// ---------------------------------------------------------------------------
// High-Leverage Keywords — Edward Sturm Module 07
// Formula: "Bottom of funnel keyword + for + plural modifier"
// Example: "medicare supplement for seniors turning 65"
// ---------------------------------------------------------------------------
const HIGH_LEVERAGE_BASES = [
  "medicare supplement",
  "medicare supplement plan g",
  "medicare broker",
  "medicare enrollment help",
  "medigap insurance",
];

const HIGH_LEVERAGE_MODIFIERS = [
  "for seniors turning 65",
  "for retirees",
  "for couples",
  "for self-employed",
  "for people on disability",
  "for small business owners",
  "for federal employees",
  "for teachers",
  "for union members",
  "for people with diabetes",
  "for people with pre-existing conditions",
  // Condition-specific modifiers (from Anthony's client language — Edward 07-09)
  "for people with parkinsons",
  "for people with crohns",
  "for people with copd",
  "for people with heart disease",
  "for people with cancer",
  "for people with kidney disease",
  "for people with arthritis",
  "for people with dementia",
  "for people with multiple sclerosis",
  "for people with lupus",
  "for people with osteoporosis",
  "for people with fibromyalgia",
];

// Competitors whose content surfaces low-competition Medicare keywords
const COMPETITORS = [
  "medicarefaq.com",
  "medicareguide.com",
  "boomerbenefits.com",
  "thebig65.com",
];

// Keywords already on medicareyourself.com (skip these)
const EXISTING_SLUGS = new Set([
  "medicare-supplement",
  "medicare-supplement/plan-g",
  "medicare-supplement/plan-n",
  "medicare-supplement/switch-carriers",
  "medicare-supplement/new-jersey",
  "medicare-supplement/pennsylvania",
  "medicare-advantage",
  "learn",
  "about",
  "quote",
]);

// ---------------------------------------------------------------------------
// Serper helpers
// ---------------------------------------------------------------------------
async function serperSearch(query, options = {}) {
  if (!SERPER_API_KEY) throw new Error("SERPER_API_KEY not set");
  const payload = { q: query, gl: "us", hl: "en", num: options.num || 10 };
  if (options.type === "site") payload.q = `site:${options.site} ${query}`;
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Serper error ${res.status}: ${await res.text()}`);
  return res.json();
}

/** Extract candidate keyword phrases from SERP snippets + related searches */
function extractCandidates(serpData) {
  const candidates = new Set();

  // Related searches (highest signal — Google shows these for a reason)
  for (const r of serpData.relatedSearches || []) {
    if (r.query) candidates.add(r.query.toLowerCase().trim());
  }

  // People Also Ask
  for (const p of serpData.peopleAlsoAsk || []) {
    if (p.question) {
      // Convert question → keyword phrase (strip question words)
      const kw = p.question
        .toLowerCase()
        .replace(/^(what is|what are|how (do|does|can|much|to)|is|are|can|when|where|which|why|who)\s+/i, "")
        .replace(/\?$/, "")
        .trim();
      if (kw.length > 8) candidates.add(kw);
    }
  }

  // Organic titles (approximates competitor page keywords)
  for (const r of serpData.organic || []) {
    if (r.title) {
      const title = r.title.toLowerCase()
        .replace(/\s*[-|–]\s*.+$/, "") // strip brand
        .replace(/^\d{4}\s+/, "")       // strip year prefix
        .trim();
      if (title.length > 8 && title.length < 80 && title.includes("medicare")) {
        candidates.add(title);
      }
    }
  }

  return [...candidates];
}

// ---------------------------------------------------------------------------
// Filter for bottom-of-funnel Medicare intent
// ---------------------------------------------------------------------------
const BOF_SIGNALS = [
  /plan\s+[a-z]/i,           // plan g, plan n, plan f
  /cost|price|premium|rate|cheap|afford|expensive/i,
  /best|top|compare|vs\.|versus/i,
  /switch|change|cancel|drop/i,
  /enroll|sign.?up|apply|get covered/i,
  /turning 65|age 65|retire/i,
  /new jersey|pennsylvania|nj|pa\b/i,
  /carrier|company|insurer|provider/i,
  /review|rating|recommend/i,
  /broker|agent|advisor/i,
  /for (seniors|retirees|couples|self.employed|disability|business|federal|teacher|union|diabetes|pre.existing)/i,
];

const EXCLUDE_SIGNALS = [
  /part [ab]\b/i,            // Part A/B are informational not supplement
  /medicaid/i,
  /\bva\b|\bveteran/i,
  /employer|cobra/i,
  /tricare/i,
  /how does medicare work/i, // too broad/informational
  /what is medicare\b/i,
  /history of medicare/i,
  /medicare for all/i,
  // Brand-attack / complaint content — not a broker's voice
  /worst|avoid|scam|fraud|complaint|problem|bad|terrible|horrible/i,
  // Listicle-style titles — high competition, not compact keyword style
  /^top \d+|^\d+ best|\d+ worst/i,
  // News / political / coverage debates
  /medicare cut|medicare bill|congress|legislation|reform/i,
  // Competitor brand names — not our content to produce
  /aarp|humana|cigna|anthem|wellcare|devoted|alignment|clover/i,
];

function isBottomOfFunnel(kw) {
  if (!kw.includes("medicare")) return false;
  if (kw.split(" ").length < 3) return false;  // too short = too broad
  for (const rx of EXCLUDE_SIGNALS) if (rx.test(kw)) return false;
  // At least one BOF signal OR 5+ words (long-tail = inherently specific)
  const wordCount = kw.trim().split(/\s+/).length;
  if (wordCount >= 5) return true;
  return BOF_SIGNALS.some((rx) => rx.test(kw));
}

// ---------------------------------------------------------------------------
// (checkSerpCompetition removed — replaced by Moz v3 difficulty scores)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Claude: score On-Site Relevance only (no blueprint generation)
// Blueprint generation happens later in generate-blueprints.js after
// Anthony marks keywords "target" in the Keywords tab.
// ---------------------------------------------------------------------------
async function scoreKeywords(keywords, anthropic, v3KeywordData = new Map()) {
  let metricsBlock = "";
  const keywordsWithMetrics = keywords.filter((kw) => v3KeywordData.has(kw.toLowerCase()));
  if (keywordsWithMetrics.length > 0) {
    const lines = keywordsWithMetrics.map((kw) => {
      const d = v3KeywordData.get(kw.toLowerCase());
      return `- "${kw}": difficulty ${d.difficulty ?? "?"}, volume ${d.volume ?? "?"}, beatable: ${d.difficulty != null ? (d.difficulty <= 40 ? "yes" : "no") : "unknown"}`;
    });
    metricsBlock = `\nKEYWORD METRICS (Moz): Difficulty 0-100 (lower = easier to rank).\n${lines.join("\n")}\n`;
  }

  const prompt = `You are an SEO specialist for medicareyourself.com, a licensed Medicare insurance broker site in New Jersey. The broker is Anthony Orner — he helps people choose Medicare Supplement (Medigap) plans, especially Plan G.

Score each keyword for this site. Focus: bottom-of-funnel purchase intent, NJ/Medicare Supplement topics. Penalize: brand-attack content, listicles, competitor brand names, informational-only queries.

EXISTING PAGES (mark skip=true if too similar):
/medicare-supplement, /medicare-supplement/plan-g, /medicare-supplement/plan-n,
/medicare-supplement/switch-carriers, /medicare-supplement/new-jersey,
/medicare-supplement/pennsylvania, /medicare-advantage, /learn, /quote
${metricsBlock}
TASK: Return a JSON array. One object per keyword:
{
  "keyword": "original keyword",
  "relevance": 8,        // 1-10: fit for medicareyourself.com
  "intent": "purchase",  // purchase | comparison | informational
  "priority": "high",    // high | medium | low
  "skip": false          // true if duplicate, off-topic, or brand-attack content
}

Respond ONLY with the JSON array. No markdown fences, no explanation.

KEYWORDS:
${keywords.map((k, i) => `${i + 1}. ${k}`).join("\n")}`;

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  const text = msg.content[0].text.trim();
  const json = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  return JSON.parse(json);
}

// ---------------------------------------------------------------------------
// Google Sheets helpers
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

async function getExistingSheetKeywords(sheets, spreadsheetId, tabName = "Keywords") {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${tabName}!A:A`,
    });
    return new Set((res.data.values || []).flat().map((v) => v.toLowerCase().trim()));
  } catch {
    return new Set();
  }
}

async function ensureInternalSeoSheet(sheets, spreadsheetId) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets.some((s) => s.properties.title === "Page Blueprints");
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: "Page Blueprints" } } }],
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Page Blueprints!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          "Keyword", "Title (50-60 chars)", "URL Slug", "H1",
          "H2-1", "H2-2", "H2-3", "H2-4",
          "Meta Description", "Priority", "Status", "Date Added",
          "Difficulty", "Beatable (diff≤40)",
          // HITL columns (Edward Module 07 — YOU fill these manually)
          "SERP Checked?", "DA Range (manual)", "Page Score Range",
          "KW in Titles?", "KW in URLs?", "Content Type (Product/List/How-to)",
          "SERP Overlap With", "SERP Notes (manual)",
        ]],
      },
    });
  }
}

async function ensureKeywordsSheet(sheets, spreadsheetId) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets.some((s) => s.properties.title === "Keywords");
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: "Keywords" } } }],
      },
    });
    // Write header row
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Keywords!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          "Keyword", "Relevance", "Intent", "Priority", "Skip",
          "Title", "Slug", "H1", "H2-1", "H2-2", "H2-3", "H2-4",
          "Meta Description", "Avg DA", "Beatable", "Status", "Date Added",
          // HITL columns (Edward Module 07 — YOU fill these manually)
          "SERP Checked?", "Your Relevance (1-10)", "SERP Notes (manual)",
        ]],
      },
    });
  }
}

async function appendToSheet(sheets, spreadsheetId, rows, tab = "Keywords") {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A:A`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: rows },
  });
}

// ---------------------------------------------------------------------------
// TSV logger
// ---------------------------------------------------------------------------
function logRow(data) {
  const row = [
    new Date().toISOString().slice(0, 10),
    data.keyword,
    data.relevance,
    data.intent,
    data.priority,
    data.skip ? "skip" : "keep",
    data.slug || "",
  ].join("\t");
  fs.appendFileSync(LOG_FILE, row + "\n");
}

// ---------------------------------------------------------------------------
// State (deduplicate across runs)
// ---------------------------------------------------------------------------
function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return { processedKeywords: [] };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!SERPER_API_KEY) { console.error("❌ SERPER_API_KEY not set"); process.exit(1); }
  if (!ANTHROPIC_API_KEY) { console.error("❌ ANTHROPIC_API_KEY not set"); process.exit(1); }

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const state = loadState();
  const processedSet = new Set(state.processedKeywords.map((k) => k.toLowerCase()));

  console.log("🔍 Fetching competitor SERPs for compact keyword discovery...");

  // Step 1: Collect candidate keywords from Serper
  const allCandidates = new Set();

  for (const topic of SEED_TOPICS) {
    try {
      const data = await serperSearch(topic);
      for (const c of extractCandidates(data)) allCandidates.add(c);
      // Small delay to avoid rate limits
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.warn(`  ⚠️  Serper failed for "${topic}": ${err.message}`);
    }
  }

  // Also search competitor sites directly for their top content (via Serper)
  for (const competitor of COMPETITORS) {
    try {
      const data = await serperSearch("medicare supplement", {
        type: "site",
        site: competitor,
        num: 10,
      });
      for (const c of extractCandidates(data)) allCandidates.add(c);
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.warn(`  ⚠️  Competitor search failed for ${competitor}: ${err.message}`);
    }
  }

  // ── Step 1b: Pull ranking keywords from Moz v3 for each competitor ─────
  // This is the primary keyword source — returns actual ranked keywords with
  // difficulty + volume already attached (replaces old DA-based checking).
  const v3KeywordData = new Map(); // keyword (lowercase) → { volume, difficulty, rank_position, ranking_page, organic_ctr, priority }

  const usage = getUsageSummary();
  const maxPages = usage.remaining < 3000 ? 2 : 4; // reduce pages if budget is low
  console.log(`\n🔬 Pulling competitor ranking keywords via Moz v3 (${usage.remaining} rows remaining)...`);

  for (const competitor of COMPETITORS) {
    try {
      const keywords = await getRankingKeywordsV3(competitor, { limit: 50, maxPages });
      let added = 0;
      for (const kw of keywords) {
        const key = kw.keyword.toLowerCase().trim();
        allCandidates.add(key);
        // Keep the entry with the best (lowest) rank position if seen from multiple competitors
        if (!v3KeywordData.has(key) || kw.rank_position < v3KeywordData.get(key).rank_position) {
          v3KeywordData.set(key, {
            volume: kw.volume != null ? Math.round(kw.volume) : null,
            difficulty: kw.difficulty ?? null,
            rank_position: kw.rank_position,
            ranking_page: kw.ranking_page,
            organic_ctr: null, // filled later by keyword metrics enrichment
            priority: null,    // filled later by keyword metrics enrichment
          });
        }
        added++;
      }
      console.log(`  ${competitor}: ${added} keywords (${keywords.length} from Moz v3)`);
      // 2-second delay between competitors to respect rate limits
      await new Promise((r) => setTimeout(r, 2000));
    } catch (err) {
      console.warn(`  ⚠️  Moz v3 failed for ${competitor}: ${err.message}`);
    }
  }

  console.log(`  Total v3 keywords: ${v3KeywordData.size} unique`);

  // ── High-Leverage Keywords (Module 07) ──────────────────────────────────
  // Combine base keywords with audience modifiers, search a subset per run
  const highLeverageCombinations = [];
  for (const base of HIGH_LEVERAGE_BASES) {
    for (const mod of HIGH_LEVERAGE_MODIFIERS) {
      highLeverageCombinations.push(`${base} ${mod}`);
    }
  }

  // Shuffle and pick 12 combinations per run to stay under rate limits
  const shuffled = highLeverageCombinations.sort(() => Math.random() - 0.5);
  const hlSubset = shuffled.slice(0, 12);

  console.log(`\n🎯 Searching ${hlSubset.length} high-leverage keyword combinations (Module 07)...`);

  for (const query of hlSubset) {
    try {
      // Add the combination itself as a candidate
      allCandidates.add(query.toLowerCase());
      // Also search Serper to find related/adjacent keywords
      const data = await serperSearch(query);
      for (const c of extractCandidates(data)) allCandidates.add(c);
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.warn(`  ⚠️  High-leverage search failed for "${query}": ${err.message}`);
    }
  }

  console.log(`  Found ${allCandidates.size} raw candidates (Serper + v3 + high-leverage)`);

  // Step 2: Filter for bottom-of-funnel intent + deduplicate
  const filtered = [...allCandidates].filter((kw) => {
    if (processedSet.has(kw.toLowerCase())) return false;
    return isBottomOfFunnel(kw);
  });

  console.log(`  ${filtered.length} bottom-of-funnel candidates after filtering`);

  if (filtered.length === 0) {
    console.log("✅ No new keywords to process this run.");
    return;
  }

  // Step 2b: Filter by Moz difficulty (replaces old DA-based competition check)
  const preFilterCount = filtered.length;
  const tooCompetitive = new Set();
  for (const kw of filtered) {
    const data = v3KeywordData.get(kw.toLowerCase());
    if (data && data.difficulty != null && data.difficulty > 60) {
      tooCompetitive.add(kw);
    }
  }
  const beatableFiltered = filtered.filter((kw) => !tooCompetitive.has(kw));
  const dropped = preFilterCount - beatableFiltered.length;
  if (dropped > 0) {
    console.log(`\n🚫 Dropped ${dropped} keyword(s) with difficulty > 60.`);
  }
  filtered.length = 0;
  filtered.push(...beatableFiltered);

  // Sort: keywords with v3 data and low difficulty first
  filtered.sort((a, b) => {
    const aData = v3KeywordData.get(a.toLowerCase());
    const bData = v3KeywordData.get(b.toLowerCase());
    const aDiff = aData?.difficulty ?? 50; // unknown = middle
    const bDiff = bData?.difficulty ?? 50;
    return aDiff - bDiff; // easiest first
  });

  // Step 2c: Enrich with keyword metrics (SERP CTR + Priority) from Moz v3
  // Only for keywords that passed filtering — budget-gated
  const enrichUsage = getUsageSummary();
  if (enrichUsage.remaining > 1000) {
    const toEnrich = filtered.filter((kw) => v3KeywordData.has(kw.toLowerCase())).slice(0, 50);
    if (toEnrich.length > 0) {
      console.log(`\n📈 Enriching ${toEnrich.length} keywords with SERP CTR + Priority (Moz v3)...`);
      let enriched = 0;
      for (const kw of toEnrich) {
        try {
          const metrics = await getKeywordMetrics(kw);
          if (metrics) {
            const existing = v3KeywordData.get(kw.toLowerCase());
            existing.organic_ctr = metrics.organic_ctr;
            existing.priority = metrics.priority;
            // Update volume/difficulty with more current data if available
            if (metrics.volume != null) existing.volume = metrics.volume;
            if (metrics.difficulty != null) existing.difficulty = metrics.difficulty;
            enriched++;
          }
          await new Promise((r) => setTimeout(r, 500));
        } catch (err) {
          // Silently skip — expected for many long-tail keywords
        }
      }
      console.log(`  Enriched ${enriched}/${toEnrich.length} keywords with CTR + Priority`);
    }
  } else {
    console.log(`\n⚠️  Skipping keyword metrics enrichment (${enrichUsage.remaining} rows remaining)`);
  }

  // Step 3: Score keywords in batches of 15
  const BATCH_SIZE = 15;
  const allResults = [];

  for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
    const batch = filtered.slice(i, i + BATCH_SIZE);
    console.log(`\n📊 Scoring batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(filtered.length / BATCH_SIZE)} (${batch.length} keywords)...`);
    try {
      const results = await scoreKeywords(batch, anthropic, v3KeywordData);
      allResults.push(...results);
      for (const kw of batch) processedSet.add(kw.toLowerCase());
    } catch (err) {
      console.warn(`  ⚠️  Claude batch failed: ${err.message}`);
    }
  }

  // Step 4: Write to Google Sheets
  const keepResults = allResults.filter((r) => !r.skip && r.relevance >= 5);
  console.log(`\n✅ ${keepResults.length} keywords to add to sheets (relevance ≥ 5, not skipped)`);

  if (keepResults.length > 0 && (COMPETITORS_KEYWORD_SHEET_ID || INTERNAL_SEO_SHEET_ID)) {
    try {
      const sheets = await getSheetsClient();
      const today = new Date().toISOString().slice(0, 10);

      // ── Competitors Keyword Template ──────────────────────────────────────
      if (COMPETITORS_KEYWORD_SHEET_ID) {
        await ensureKeywordsSheet(sheets, COMPETITORS_KEYWORD_SHEET_ID);
        const existing = await getExistingSheetKeywords(sheets, COMPETITORS_KEYWORD_SHEET_ID);

        const kwRows = keepResults
          .filter((r) => !existing.has(r.keyword.toLowerCase()))
          .map((r) => {
            const metrics = v3KeywordData.get(r.keyword.toLowerCase());
            return [
              r.keyword,
              r.relevance,
              r.intent,
              r.priority,
              r.slug ? `/hub/${(r.slug || "").replace(/^\/?(hub\/)?/, "")}` : "",
              r.meta_description || "",
              metrics?.difficulty ?? "",
              metrics?.difficulty != null ? (metrics.difficulty <= 40 ? "YES" : "NO") : "",
              "pending",
              today,
            ];
          });

        if (kwRows.length > 0) {
          await appendToSheet(sheets, COMPETITORS_KEYWORD_SHEET_ID, kwRows);
          console.log(`  📊 Competitors Keyword Template: added ${kwRows.length} keywords`);
        } else {
          console.log("  📊 Competitors Keyword Template: all already present");
        }
      }

      // ── Internal SEO Template — Keywords Tab ──────────────────────────────
      if (INTERNAL_SEO_SHEET_ID) {
        await ensureInternalSeoSheet(sheets, INTERNAL_SEO_SHEET_ID);

        const existingKw = await getExistingSheetKeywords(sheets, INTERNAL_SEO_SHEET_ID, "Keywords");
        const kwDataRows = keepResults
          .filter((r) => !existingKw.has(r.keyword.toLowerCase()))
          .map((r) => {
            const metrics = v3KeywordData.get(r.keyword.toLowerCase());
            return [
              r.keyword,
              "",                             // Category 1 (HITL)
              "",                             // Category 2 (HITL)
              metrics?.volume ?? "",          // Avg Volume
              metrics?.difficulty ?? "",      // Difficulty
              metrics?.organic_ctr ?? "",     // SERP CTR
              metrics?.priority ?? "",        // Moz Priority
              r.relevance || "",              // On-Site Relevance (Claude)
              r.intent || "",                 // Notes
              "",                             // Min Volume
              "",                             // Max Volume
              "no",                           // Targeted? — change to "yes" to queue for blueprint generation
            ];
          });

        if (kwDataRows.length > 0) {
          await appendToSheet(sheets, INTERNAL_SEO_SHEET_ID, kwDataRows, "Keywords");
          console.log(`  📊 Internal SEO Template (Keywords tab): added ${kwDataRows.length} keywords`);
          console.log(`     → Open the Keywords tab, review rows, change "pending" → "target" on keywords you want built`);
          console.log(`     → Then run: node generate-blueprints.js`);
        }
      }
    } catch (err) {
      console.warn(`  ⚠️  Google Sheets write failed: ${err.message}`);
      console.warn("     (Results still logged to TSV)");
    }
  } else if (!COMPETITORS_KEYWORD_SHEET_ID && !INTERNAL_SEO_SHEET_ID) {
    console.log("  ⚠️  No sheet IDs set — skipping Sheet write");
  }

  // Step 5: Log all results to TSV
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "date\tkeyword\trelevance\tintent\tpriority\tstatus\tslug\n");
  }
  for (const r of allResults) logRow(r);

  // Step 6: Print high-priority keywords to console for review
  const highPriority = keepResults
    .filter((r) => r.priority === "high" && r.relevance >= 7)
    .sort((a, b) => b.relevance - a.relevance);

  if (highPriority.length > 0) {
    console.log("\n🎯 TOP COMPACT KEYWORDS (high priority, relevance ≥ 7):");
    for (const r of highPriority.slice(0, 10)) {
      const metrics = v3KeywordData.get(r.keyword.toLowerCase());
      console.log(`  [${r.relevance}/10] ${r.keyword} (diff: ${metrics?.difficulty ?? "?"}, vol: ${metrics?.volume ?? "?"})`);
      console.log(`         → /hub/${(r.slug || "").replace(/^\/?(hub\/)?/, "")}`);
      console.log(`         → ${r.title}`);
    }
  }

  // Save state
  state.processedKeywords = [...processedSet];
  state.lastRun = new Date().toISOString();
  state.totalKeywordsFound = (state.totalKeywordsFound || 0) + keepResults.length;
  saveState(state);

  console.log(`\n✅ Done. ${keepResults.length} keywords added. Log: compact-keywords-log.tsv`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
