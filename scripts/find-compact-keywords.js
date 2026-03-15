/**
 * find-compact-keywords.js
 * Implements the Compact Keywords SEO methodology for medicareyourself.com.
 *
 * Compact Keywords = bottom-of-funnel keywords, 0-500 monthly searches,
 * purchase intent > volume. DA 10+ sites can rank #1 with these.
 *
 * Each run:
 *  1. Searches Serper for competitor pages to surface their ranking keywords
 *  2. Fetches organic results for each seed topic to find low-competition queries
 *  3. Deduplicates and filters for Medicare bottom-of-funnel intent
 *  4. Scores each keyword by On-Site Relevance (1–10) with Claude
 *  5. Generates page elements: Title, URL slug, H1, 4 H2s (keyword-first formula)
 *  6. Writes results to Google Sheets (COMPACT_KEYWORDS_SHEET_ID)
 *  7. Logs to compact-keywords-log.tsv
 *
 * Competitors analyzed:
 *   boomerbenefits.com, medicareresources.org, medicareadvantage.com
 *
 * Run: node find-compact-keywords.js
 * Idempotent — skips keywords already in the sheet.
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const { getDomainAuthority } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const MOZ_API_TOKEN = process.env.MOZ_API_TOKEN;

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
  // National Medicare content sites
  "boomerbenefits.com",
  "medicareresources.org",
  "medicareadvantage.com",
  "medicarefaq.com",
  "retireguide.com",
  "medigap.com",
  "thebig65.com",
  "medicareagentshub.com",
  // NJ-specific brokers (direct local competitors)
  "njseniorhealth.com",
  "themedicaregrp.com",
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
// Moz Domain Authority — SERP competition checker
// ---------------------------------------------------------------------------

/**
 * Extract the root domain from a URL (e.g., "https://www.boomerbenefits.com/path" → "boomerbenefits.com")
 */
function extractDomain(url) {
  try {
    const hostname = new URL(url).hostname;
    // Strip leading "www."
    return hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/**
 * Check whether keyword words appear in a string (title or URL slug).
 * Uses the "main words" of the keyword (drops stop words).
 */
function keywordWordsIn(keyword, text) {
  const stopWords = new Set(["a", "an", "the", "is", "are", "of", "for", "to", "in", "on", "and", "or", "vs", "how", "what", "does", "do"]);
  const kwWords = keyword.toLowerCase().split(/\s+/).filter((w) => !stopWords.has(w) && w.length > 2);
  const lowerText = (text || "").toLowerCase();
  // At least half the main words must appear
  const matches = kwWords.filter((w) => lowerText.includes(w));
  return matches.length >= Math.ceil(kwWords.length / 2);
}

/**
 * Check SERP competition for a keyword by looking up Domain Authority
 * of the top-ranking sites.
 *
 * Returns: { keyword, domains: [...], avgDa, minDa, maxDa, beatable }
 */
async function checkSerpCompetition(keyword) {
  // Get top 10 organic results
  const serpData = await serperSearch(keyword);
  const organicResults = (serpData.organic || []).slice(0, 10);

  if (organicResults.length === 0) {
    return { keyword, domains: [], avgDa: 0, minDa: 0, maxDa: 0, beatable: true };
  }

  // Extract unique domains
  const domainMap = new Map(); // domain → first result info
  for (const result of organicResults) {
    const domain = extractDomain(result.link || result.url || "");
    if (domain && !domainMap.has(domain)) {
      domainMap.set(domain, {
        title: result.title || "",
        url: result.link || result.url || "",
      });
    }
  }

  const domainList = [...domainMap.keys()].slice(0, 10);

  // Fetch DA from Moz
  let daResults = {};
  try {
    daResults = await getDomainAuthority(domainList);
  } catch (err) {
    console.warn(`    Moz API error for "${keyword}": ${err.message}`);
    // Return with unknown DA — don't crash
    return {
      keyword,
      domains: domainList.map((d) => ({
        domain: d,
        da: null,
        title: domainMap.get(d).title,
        url: domainMap.get(d).url,
        hasKeywordInTitle: keywordWordsIn(keyword, domainMap.get(d).title),
        hasKeywordInUrl: keywordWordsIn(keyword, domainMap.get(d).url),
      })),
      avgDa: null,
      minDa: null,
      maxDa: null,
      beatable: null, // unknown
    };
  }

  // Build enriched domain list
  const domains = domainList.map((domain) => {
    const info = domainMap.get(domain);
    const da = daResults.get(domain) != null ? daResults.get(domain) : null;
    return {
      domain,
      da,
      title: info.title,
      url: info.url,
      hasKeywordInTitle: keywordWordsIn(keyword, info.title),
      hasKeywordInUrl: keywordWordsIn(keyword, info.url),
    };
  });

  // Calculate stats (only from domains where DA is known)
  const knownDas = domains.map((d) => d.da).filter((da) => da != null);
  const avgDa = knownDas.length > 0 ? Math.round(knownDas.reduce((a, b) => a + b, 0) / knownDas.length) : null;
  const minDa = knownDas.length > 0 ? Math.min(...knownDas) : null;
  const maxDa = knownDas.length > 0 ? Math.max(...knownDas) : null;

  // Determine beatability:
  // beatable = at least 2 of the top 5 results have DA < 40 OR minDa < 20
  const top5Das = domains.slice(0, 5).map((d) => d.da).filter((da) => da != null);
  const lowDaInTop5 = top5Das.filter((da) => da < 40).length;
  const beatable = lowDaInTop5 >= 2 || (minDa != null && minDa < 20);

  return { keyword, domains, avgDa, minDa, maxDa, beatable };
}

// ---------------------------------------------------------------------------
// Claude: score On-Site Relevance + generate page elements
// ---------------------------------------------------------------------------
async function scoreAndGeneratePages(keywords, anthropic, daDataMap = {}) {
  // Build SERP competition context if DA data is available
  let serpCompetitionBlock = "";
  const keywordsWithDa = keywords.filter((kw) => daDataMap[kw]);
  if (keywordsWithDa.length > 0) {
    const daLines = keywordsWithDa.map((kw) => {
      const d = daDataMap[kw];
      return `- "${kw}": avg DA ${d.avgDa ?? "unknown"}, min DA ${d.minDa ?? "unknown"}, max DA ${d.maxDa ?? "unknown"}, beatable: ${d.beatable ?? "unknown"}`;
    });
    serpCompetitionBlock = `
SERP COMPETITION DATA: For each keyword, I've checked the Domain Authority of the top-ranking sites. Use this to adjust priority — keywords where top results have low DA (< 40) should be prioritized higher.
${daLines.join("\n")}
`;
  }

  const prompt = `You are an SEO specialist for medicareyourself.com, a licensed Medicare insurance broker site serving New Jersey and 34 other states. The broker is Anthony Orner — he helps people choose Medicare Supplement (Medigap) plans, especially Plan G.

COMPACT KEYWORDS RULES (Edward Sturm methodology):
- Keyword-first Title: [Keyword | Benefit | Brand], 50-60 chars, Title Case
- URL slug: /hub/exact-keyword-hyphenated (all lowercase, hyphens only)
- H1: Keyword stated naturally, exactly 1 per page
- Word count target: 400-500 words
- Optimization score target: 96/100 (NOT 100)
- Focus: bottom-of-funnel, purchase intent over search volume
- 4 H2s planned per page (outline only, not full content)

SITE PAGES THAT ALREADY EXIST (do NOT suggest these as new pages):
- /medicare-supplement
- /medicare-supplement/plan-g
- /medicare-supplement/plan-n
- /medicare-supplement/switch-carriers
- /medicare-supplement/new-jersey
- /medicare-supplement/pennsylvania
- /medicare-advantage
- /learn
- /quote
${serpCompetitionBlock}
TASK: For each keyword below, respond with a JSON array. Each object:
{
  "keyword": "original keyword",
  "relevance": 8,           // On-Site Relevance 1-10: how well this fits medicareyourself.com
  "intent": "purchase",     // purchase | comparison | informational
  "priority": "high",       // high | medium | low (based on relevance + intent + SERP competition if available)
  "skip": false,            // true if too similar to existing page OR not relevant
  "title": "Plan G Medicare Supplement Cost | Save on Medigap | MedicareYourself",
  "slug": "plan-g-medicare-supplement-cost",
  "h1": "Plan G Medicare Supplement Cost: What You'll Actually Pay",
  "h2s": [
    "How Plan G Premiums Are Calculated",
    "Average Plan G Cost by Age in 2025",
    "Why Rates Vary Between Carriers",
    "How to Get the Lowest Plan G Rate"
  ],
  "meta_description": "See real Plan G Medicare Supplement costs by age. Anthony Orner compares top carriers and finds you the lowest rate. Free quote in 2 minutes."
}

Respond ONLY with the JSON array — no preamble, no markdown fences.

KEYWORDS:
${keywords.map((k, i) => `${i + 1}. ${k}`).join("\n")}`;

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const text = msg.content[0].text.trim();
  // Strip markdown fences if Claude added them
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
          "Avg DA", "Beatable",
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

async function appendToSheet(sheets, spreadsheetId, rows) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Keywords!A:A",
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

  // Also search competitor sites directly for their top content
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

  console.log(`  Found ${allCandidates.size} raw candidates (including high-leverage)`);

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

  // Step 2b: Check SERP competition with Moz Domain Authority
  const daDataMap = {}; // keyword → checkSerpCompetition result
  const MOZ_KEYWORD_LIMIT = 35; // Starter Medium: 3,000 rows/month — ~350 rows per weekly run

  if (!MOZ_API_TOKEN) {
    console.error("❌ MOZ_API_TOKEN is required. Cannot run keyword research without Domain Authority validation.");
    process.exit(1);
  }

  const daSubset = filtered.slice(0, MOZ_KEYWORD_LIMIT);
  console.log(`\n🏋️ Checking SERP competition (Moz DA) for ${daSubset.length} keywords...`);

  for (const kw of daSubset) {
    try {
      const result = await checkSerpCompetition(kw);
      daDataMap[kw] = result;

      // Log findings
      if (result.avgDa != null) {
        const label = result.beatable ? "BEATABLE" : "COMPETITIVE, deprioritizing";
        console.log(`  Keyword "${kw}": avg DA ${result.avgDa}, min DA ${result.minDa} — ${label}`);
      } else {
        console.log(`  Keyword "${kw}": DA data unavailable`);
      }

      // 1-second delay between Moz API calls to respect rate limits
      await new Promise((r) => setTimeout(r, 1000));
    } catch (err) {
      console.warn(`  ⚠️  DA check failed for "${kw}": ${err.message}`);
    }
  }

  // Drop keywords that were DA-checked and found non-beatable
  const preFilterCount = filtered.length;
  const checkedAndNonBeatable = new Set();
  for (const [kw, data] of Object.entries(daDataMap)) {
    if (data.beatable === false) checkedAndNonBeatable.add(kw);
  }
  const beatableFiltered = filtered.filter((kw) => !checkedAndNonBeatable.has(kw));
  const dropped = preFilterCount - beatableFiltered.length;
  if (dropped > 0) {
    console.log(`\n🚫 Dropped ${dropped} non-beatable keyword(s) (DA too high).`);
  }
  // Replace filtered with only beatable keywords
  filtered.length = 0;
  filtered.push(...beatableFiltered);

  // Sort remaining keywords: beatable first, then by relevance order
  filtered.sort((a, b) => {
    const aDa = daDataMap[a];
    const bDa = daDataMap[b];
    // Keywords with DA data and beatable come first
    const aBeatable = aDa?.beatable === true ? 1 : aDa?.beatable === false ? -1 : 0;
    const bBeatable = bDa?.beatable === true ? 1 : bDa?.beatable === false ? -1 : 0;
    return bBeatable - aBeatable;
  });

  // Step 3: Score and generate page elements in batches of 15 (Claude context)
  const BATCH_SIZE = 15;
  const allResults = [];

  for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
    const batch = filtered.slice(i, i + BATCH_SIZE);
    console.log(`\n📊 Scoring batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(filtered.length / BATCH_SIZE)} (${batch.length} keywords)...`);
    try {
      const results = await scoreAndGeneratePages(batch, anthropic, daDataMap);
      // Attach DA data to each result
      for (const r of results) {
        const da = daDataMap[r.keyword];
        if (da) {
          r.avgDa = da.avgDa;
          r.beatable = da.beatable;
        }
      }
      allResults.push(...results);
      // Mark as processed regardless of skip status
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
      // Stores all candidate keywords with scoring (what to target)
      if (COMPETITORS_KEYWORD_SHEET_ID) {
        await ensureKeywordsSheet(sheets, COMPETITORS_KEYWORD_SHEET_ID);
        const existing = await getExistingSheetKeywords(sheets, COMPETITORS_KEYWORD_SHEET_ID);

        const kwRows = keepResults
          .filter((r) => !existing.has(r.keyword.toLowerCase()))
          .map((r) => [
            r.keyword,
            r.relevance,
            r.intent,
            r.priority,
            r.slug ? `/hub/${r.slug}` : "",
            r.meta_description || "",
            r.avgDa != null ? r.avgDa : "",
            r.beatable != null ? (r.beatable ? "YES" : "NO") : "",
            "pending",
            today,
          ]);

        if (kwRows.length > 0) {
          await appendToSheet(sheets, COMPETITORS_KEYWORD_SHEET_ID, kwRows);
          console.log(`  📊 Competitors Keyword Template: added ${kwRows.length} keywords`);
        } else {
          console.log("  📊 Competitors Keyword Template: all already present");
        }
      }

      // ── Internal SEO Template ─────────────────────────────────────────────
      // Stores page blueprints: Title / URL / H1 / 4 H2s (what to build)
      if (INTERNAL_SEO_SHEET_ID) {
        await ensureInternalSeoSheet(sheets, INTERNAL_SEO_SHEET_ID);
        const existingPages = await getExistingSheetKeywords(sheets, INTERNAL_SEO_SHEET_ID, "Page Blueprints");

        const pageRows = keepResults
          .filter((r) => r.title && r.slug && !existingPages.has(r.keyword.toLowerCase()))
          .map((r) => [
            r.keyword,
            r.title || "",
            r.slug ? `/hub/${r.slug}` : "",
            r.h1 || "",
            (r.h2s || [])[0] || "",
            (r.h2s || [])[1] || "",
            (r.h2s || [])[2] || "",
            (r.h2s || [])[3] || "",
            r.meta_description || "",
            r.priority,
            "not built",
            today,
            r.avgDa != null ? r.avgDa : "",
            r.beatable != null ? (r.beatable ? "YES" : "NO") : "",
          ]);

        if (pageRows.length > 0) {
          await appendToSheet(sheets, INTERNAL_SEO_SHEET_ID, pageRows);
          console.log(`  📊 Internal SEO Template: added ${pageRows.length} page blueprints`);
        } else {
          console.log("  📊 Internal SEO Template: all already present");
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
      console.log(`  [${r.relevance}/10] ${r.keyword}`);
      console.log(`         → /hub/${r.slug}`);
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
