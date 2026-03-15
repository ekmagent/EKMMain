/**
 * competitor-keyword-analysis.js
 * Edward Sturm Module 07: Discover compact keywords by analyzing what competitors rank for.
 *
 * Process:
 *  1. Gets top pages from a competitor domain via Moz API
 *  2. For each top page, searches Serper to find what keywords it ranks for
 *  3. Extracts candidate keywords from titles, snippets, related searches
 *  4. Filters for bottom-of-funnel Medicare intent
 *  5. Checks SERP competition (DA of ranking sites) via Moz
 *  6. Uses Claude to score relevance and generate page elements
 *  7. Writes to Competitors Keyword Template Google Sheet
 *  8. Logs to competitor-analysis-log.tsv
 *
 * Run: node scripts/competitor-keyword-analysis.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");
const { getDomainAuthority, getTopPages } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SERPER_API_KEY = process.env.SERPER_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const COMPETITORS_KEYWORD_SHEET_ID = process.env.COMPETITORS_KEYWORD_SHEET_ID;

const LOG_FILE = path.join(__dirname, "..", "competitor-analysis-log.tsv");
const STATE_FILE = path.join(__dirname, "..", "competitor-analysis-state.json");

// ---------------------------------------------------------------------------
// Competitors to analyze
// ---------------------------------------------------------------------------
const COMPETITORS = [
  // National Medicare content sites
  { domain: "boomerbenefits.com", name: "Boomer Benefits" },
  { domain: "medicareresources.org", name: "MedicareResources" },
  { domain: "medicareadvantage.com", name: "MedicareAdvantage.com" },
  { domain: "medicarefaq.com", name: "MedicareFAQ" },
  { domain: "retireguide.com", name: "RetireGuide" },
  { domain: "medigap.com", name: "Medigap.com" },
  { domain: "thebig65.com", name: "The Big 65" },
  { domain: "medicareagentshub.com", name: "Medicare Agents Hub" },
  // NJ-specific brokers (direct local competitors)
  { domain: "njseniorhealth.com", name: "NJ Senior Health" },
  { domain: "themedicaregrp.com", name: "The Medicare Group" },
];

// URL path segments that indicate Medicare supplement content
const MEDICARE_URL_SIGNALS = [
  "medicare",
  "supplement",
  "medigap",
  "plan-g",
  "plan-n",
  "plan-f",
  "enrollment",
  "turning-65",
  "advantage",
  "part-d",
  "broker",
];

// ---------------------------------------------------------------------------
// Bottom-of-funnel intent filters (same as find-compact-keywords.js)
// ---------------------------------------------------------------------------
const BOF_SIGNALS = [
  /plan\s+[a-z]/i,
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
  /part [ab]\b/i,
  /medicaid/i,
  /\bva\b|\bveteran/i,
  /employer|cobra/i,
  /tricare/i,
  /how does medicare work/i,
  /what is medicare\b/i,
  /history of medicare/i,
  /medicare for all/i,
];

function isBottomOfFunnel(kw) {
  if (!kw.includes("medicare")) return false;
  if (kw.split(" ").length < 3) return false;
  for (const rx of EXCLUDE_SIGNALS) if (rx.test(kw)) return false;
  const wordCount = kw.trim().split(/\s+/).length;
  if (wordCount >= 5) return true;
  return BOF_SIGNALS.some((rx) => rx.test(kw));
}

// ---------------------------------------------------------------------------
// Rate-limit helper
// ---------------------------------------------------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

  // Related searches (highest signal)
  for (const r of serpData.relatedSearches || []) {
    if (r.query) candidates.add(r.query.toLowerCase().trim());
  }

  // People Also Ask
  for (const p of serpData.peopleAlsoAsk || []) {
    if (p.question) {
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
      const title = r.title
        .toLowerCase()
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
// Moz: filter top pages for Medicare content
// ---------------------------------------------------------------------------
function isMedicareRelevantPage(pageUrl) {
  const lower = pageUrl.toLowerCase();
  return MEDICARE_URL_SIGNALS.some((signal) => lower.includes(signal));
}

// ---------------------------------------------------------------------------
// Moz: check DA competition for SERP results
// ---------------------------------------------------------------------------
async function checkDACompetition(keyword) {
  try {
    // Search Serper for the keyword and get top ranking domains
    const serpData = await serperSearch(keyword, { num: 10 });
    const domains = [];
    for (const r of serpData.organic || []) {
      if (r.link) {
        try {
          const url = new URL(r.link);
          const domain = url.hostname.replace(/^www\./, "");
          if (!domains.includes(domain)) domains.push(domain);
        } catch { /* skip malformed URLs */ }
      }
    }

    if (domains.length === 0) return { avgDA: null, minDA: null, domains: [] };

    // Get DA for the top ranking domains (limit to 10)
    const topDomains = domains.slice(0, 10);
    const daMap = await getDomainAuthority(topDomains);

    const daValues = [];
    for (const [, da] of daMap) {
      if (da !== null && da !== undefined) daValues.push(da);
    }

    if (daValues.length === 0) return { avgDA: "unknown", minDA: "unknown", domains: topDomains };

    const avgDA = Math.round(daValues.reduce((a, b) => a + b, 0) / daValues.length);
    const minDA = Math.min(...daValues);

    return { avgDA, minDA, domains: topDomains };
  } catch (err) {
    console.warn(`  [DA check] Failed for "${keyword}": ${err.message}`);
    return { avgDA: "unknown", minDA: "unknown", domains: [] };
  }
}

// ---------------------------------------------------------------------------
// Claude: score relevance + generate page elements for competitor keywords
// ---------------------------------------------------------------------------
async function scoreCompetitorKeywords(keywords, anthropic) {
  const prompt = `You are an SEO specialist for medicareyourself.com, a licensed Medicare insurance broker site serving New Jersey and 34 other states. The broker is Anthony Orner — he helps people choose Medicare Supplement (Medigap) plans, especially Plan G.

COMPACT KEYWORDS RULES (Edward Sturm methodology):
- Keyword-first Title: [Keyword | Benefit | Brand], 50-60 chars, Title Case
- URL slug: /hub/exact-keyword-hyphenated (all lowercase, hyphens only)
- H1: Keyword stated naturally, exactly 1 per page
- Word count target: 400-500 words
- Focus: bottom-of-funnel, purchase intent over search volume

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

CONTEXT: These keywords were discovered by analyzing competitor sites. Each entry includes:
- The keyword itself
- Which competitor it was found from
- DA competition data (avg/min DA of sites ranking for this keyword)
- Whether the competitor has this keyword in their page title/URL

TASK: For each keyword below, respond with a JSON array. Each object:
{
  "keyword": "original keyword",
  "relevance": 8,
  "intent": "purchase",
  "priority": "high",
  "skip": false,
  "suggestedUrl": "/hub/exact-keyword-hyphenated",
  "metaDescription": "Concise meta description under 160 chars with call to action."
}

Scoring guidelines:
- relevance (1-10): how well this keyword fits medicareyourself.com's niche
- intent: "purchase" | "comparison" | "informational"
- priority: "high" (relevance >= 8 + purchase/comparison intent), "medium" (relevance 5-7), "low" (relevance < 5)
- skip: true if too similar to existing page, not relevant, or too competitive (avgDA > 60 with no low-DA sites)

Respond ONLY with the JSON array — no preamble, no markdown fences.

KEYWORDS:
${keywords.map((k, i) => `${i + 1}. "${k.keyword}" (from: ${k.source}, avgDA: ${k.avgDA}, minDA: ${k.minDA}, in competitor title: ${k.inCompetitorTitle})`).join("\n")}`;

  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
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

const SHEET_TAB = "Competitor Keywords";

async function ensureCompetitorKeywordsSheet(sheets, spreadsheetId) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets.some((s) => s.properties.title === SHEET_TAB);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: SHEET_TAB } } }],
      },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${SHEET_TAB}'!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          "Keyword", "Source Competitor", "Avg DA", "Min DA", "Beatable",
          "Relevance", "Intent", "Priority", "Suggested URL",
          "Meta Description", "Status", "Date Added",
        ]],
      },
    });
  }
}

async function getExistingSheetKeywords(sheets, spreadsheetId) {
  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `'${SHEET_TAB}'!A:A`,
    });
    return new Set((res.data.values || []).flat().map((v) => v.toLowerCase().trim()));
  } catch {
    return new Set();
  }
}

async function appendToCompetitorSheet(sheets, spreadsheetId, rows) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${SHEET_TAB}'!A:A`,
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
    data.source || "",
    data.avgDA || "",
    data.minDA || "",
    data.relevance || "",
    data.intent || "",
    data.priority || "",
    data.skip ? "skip" : "keep",
    data.suggestedUrl || "",
  ].join("\t");
  fs.appendFileSync(LOG_FILE, row + "\n");
}

// ---------------------------------------------------------------------------
// State (deduplicate across runs, rotate competitors)
// ---------------------------------------------------------------------------
function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return {
      processedKeywords: [],
      analyzedCompetitors: [],
      rotationIndex: 0,
      lastRun: null,
    };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

/** Pick the next 2 competitors based on rotation index */
function pickCompetitors(state) {
  const idx = state.rotationIndex || 0;
  const picked = [];
  for (let i = 0; i < 2; i++) {
    picked.push(COMPETITORS[(idx + i) % COMPETITORS.length]);
  }
  // Advance rotation for next run
  state.rotationIndex = (idx + 2) % COMPETITORS.length;
  return picked;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!SERPER_API_KEY) { console.error("SERPER_API_KEY not set"); process.exit(1); }
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const state = loadState();
  const processedSet = new Set(state.processedKeywords.map((k) => k.toLowerCase()));

  // Step 1: Pick 2 competitors for this run
  const selectedCompetitors = pickCompetitors(state);
  console.log(`\n--- Competitor Keyword Analysis ---`);
  console.log(`Analyzing: ${selectedCompetitors.map((c) => c.name).join(", ")}`);
  console.log(`Rotation index: ${state.rotationIndex}`);

  const allCandidatesWithSource = []; // { keyword, source, inCompetitorTitle }

  for (const competitor of selectedCompetitors) {
    console.log(`\n[${competitor.name}] Fetching top pages via Moz...`);

    // Step 2: Get top pages from Moz
    let topPages = [];
    try {
      topPages = await getTopPages(competitor.domain, { limit: 30 });
      await sleep(1000); // rate limit Moz
    } catch (err) {
      console.warn(`  Moz getTopPages failed for ${competitor.domain}: ${err.message}`);
    }

    // Filter for Medicare-relevant pages
    const relevantPages = topPages.filter((p) => isMedicareRelevantPage(p.page));
    console.log(`  ${topPages.length} total pages, ${relevantPages.length} Medicare-relevant`);

    if (relevantPages.length === 0 && topPages.length > 0) {
      // If no pages matched the URL filter, take all of them
      console.log(`  No URL-filtered pages — using all ${topPages.length} pages`);
      relevantPages.push(...topPages);
    }

    // Step 3: For each top page, reverse-engineer keywords
    for (const page of relevantPages.slice(0, 15)) { // cap at 15 pages per competitor
      // Extract keyword from page title (strip brand suffix)
      const titleKeyword = (page.title || "")
        .toLowerCase()
        .replace(/\s*[-|–—]\s*.+$/, "")
        .replace(/^\d{4}\s+/, "")
        .trim();

      if (titleKeyword.length > 8 && titleKeyword.includes("medicare")) {
        allCandidatesWithSource.push({
          keyword: titleKeyword,
          source: competitor.name,
          inCompetitorTitle: true,
        });
      }

      // Search Serper with the page title to find related keywords
      if (titleKeyword.length > 8) {
        try {
          const serpData = await serperSearch(titleKeyword, { num: 10 });
          const candidates = extractCandidates(serpData);
          for (const c of candidates) {
            allCandidatesWithSource.push({
              keyword: c,
              source: competitor.name,
              inCompetitorTitle: false,
            });
          }
          await sleep(1000); // rate limit Serper
        } catch (err) {
          console.warn(`  Serper failed for "${titleKeyword}": ${err.message}`);
        }
      }
    }

    // Track that we analyzed this competitor
    if (!state.analyzedCompetitors.includes(competitor.domain)) {
      state.analyzedCompetitors.push(competitor.domain);
    }
  }

  console.log(`\nRaw candidates collected: ${allCandidatesWithSource.length}`);

  // Step 4: Deduplicate and filter for BOF intent
  const seenKeywords = new Set();
  const filtered = [];

  for (const entry of allCandidatesWithSource) {
    const kwLower = entry.keyword.toLowerCase().trim();
    if (seenKeywords.has(kwLower)) continue;
    if (processedSet.has(kwLower)) continue;
    if (!isBottomOfFunnel(kwLower)) continue;
    seenKeywords.add(kwLower);
    filtered.push(entry);
  }

  console.log(`After BOF filter + dedup: ${filtered.length} keywords`);

  if (filtered.length === 0) {
    console.log("No new keywords to process this run.");
    state.lastRun = new Date().toISOString();
    saveState(state);
    return;
  }

  // Step 5: Check DA competition for ALL filtered keywords (not just top 15)
  if (!process.env.MOZ_API_TOKEN) {
    console.error("❌ MOZ_API_TOKEN is required. Cannot run competitor analysis without Domain Authority validation.");
    process.exit(1);
  }

  console.log(`\nChecking DA competition for all ${filtered.length} keywords...`);

  for (const entry of filtered) {
    const daData = await checkDACompetition(entry.keyword);
    entry.avgDA = daData.avgDA;
    entry.minDA = daData.minDA;
    entry.beatable = daData.minDA !== "unknown" && daData.minDA !== null
      ? (daData.minDA < 30 ? "yes" : daData.minDA < 50 ? "maybe" : "no")
      : "unknown";
    await sleep(1000); // rate limit between DA checks (Serper + Moz calls)
  }

  // Drop keywords that are definitively non-beatable (minDA >= 50)
  const preCount = filtered.length;
  const beatable = filtered.filter((e) => e.beatable !== "no");
  const dropped = preCount - beatable.length;
  if (dropped > 0) {
    console.log(`🚫 Dropped ${dropped} non-beatable keyword(s) (minDA >= 50).`);
  }
  filtered.length = 0;
  filtered.push(...beatable);

  // Step 6: Score with Claude in batches
  const BATCH_SIZE = 15;
  const allResults = [];

  for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
    const batch = filtered.slice(i, i + BATCH_SIZE);
    console.log(`\nScoring batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(filtered.length / BATCH_SIZE)} (${batch.length} keywords)...`);
    try {
      const results = await scoreCompetitorKeywords(batch, anthropic);
      // Merge DA data back onto results
      for (let j = 0; j < results.length; j++) {
        const src = batch[j];
        results[j].source = src.source;
        results[j].avgDA = src.avgDA;
        results[j].minDA = src.minDA;
        results[j].beatable = src.beatable;
        results[j].inCompetitorTitle = src.inCompetitorTitle;
      }
      allResults.push(...results);
      // Mark as processed
      for (const kw of batch) processedSet.add(kw.keyword.toLowerCase());
    } catch (err) {
      console.warn(`  Claude batch failed: ${err.message}`);
    }
  }

  // Step 7: Write to Google Sheets
  const keepResults = allResults.filter((r) => !r.skip && r.relevance >= 5);
  console.log(`\n${keepResults.length} keywords to add to sheet (relevance >= 5, not skipped)`);

  if (keepResults.length > 0 && COMPETITORS_KEYWORD_SHEET_ID) {
    try {
      const sheets = await getSheetsClient();
      const today = new Date().toISOString().slice(0, 10);

      await ensureCompetitorKeywordsSheet(sheets, COMPETITORS_KEYWORD_SHEET_ID);
      const existing = await getExistingSheetKeywords(sheets, COMPETITORS_KEYWORD_SHEET_ID);

      const rows = keepResults
        .filter((r) => !existing.has(r.keyword.toLowerCase()))
        .map((r) => [
          r.keyword,
          r.source || "",
          r.avgDA ?? "",
          r.minDA ?? "",
          r.beatable || "",
          r.relevance,
          r.intent,
          r.priority,
          r.suggestedUrl || "",
          r.metaDescription || "",
          "pending",
          today,
        ]);

      if (rows.length > 0) {
        await appendToCompetitorSheet(sheets, COMPETITORS_KEYWORD_SHEET_ID, rows);
        console.log(`  Competitor Keywords sheet: added ${rows.length} keywords`);
      } else {
        console.log("  Competitor Keywords sheet: all keywords already present");
      }
    } catch (err) {
      console.warn(`  Google Sheets write failed: ${err.message}`);
      console.warn("  (Results still logged to TSV)");
    }
  } else if (!COMPETITORS_KEYWORD_SHEET_ID) {
    console.log("  COMPETITORS_KEYWORD_SHEET_ID not set — skipping Sheet write");
  }

  // Step 8: Log to TSV
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(
      LOG_FILE,
      "date\tkeyword\tsource\tavgDA\tminDA\trelevance\tintent\tpriority\tstatus\tsuggestedUrl\n"
    );
  }
  for (const r of allResults) logRow(r);

  // Print high-priority keywords to console
  const highPriority = keepResults
    .filter((r) => r.priority === "high" && r.relevance >= 7)
    .sort((a, b) => b.relevance - a.relevance);

  if (highPriority.length > 0) {
    console.log("\nTOP COMPETITOR KEYWORDS (high priority, relevance >= 7):");
    for (const r of highPriority.slice(0, 10)) {
      console.log(`  [${r.relevance}/10] ${r.keyword} (from ${r.source}, avgDA: ${r.avgDA}, minDA: ${r.minDA})`);
      console.log(`         -> ${r.suggestedUrl || "(no URL)"}`);
    }
  }

  // Step 9: Save state
  state.processedKeywords = [...processedSet];
  state.lastRun = new Date().toISOString();
  state.totalKeywordsFound = (state.totalKeywordsFound || 0) + keepResults.length;
  saveState(state);

  console.log(`\nDone. ${keepResults.length} keywords added. Log: competitor-analysis-log.tsv`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
