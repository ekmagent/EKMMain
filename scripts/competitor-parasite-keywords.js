#!/usr/bin/env node
/**
 * competitor-parasite-keywords.js
 *
 * Pull the actual keywords a competitor ranks for (Moz v3 ranking-keywords),
 * score each for REVENUE POTENTIAL toward Medigap enrollment on healthplans.now,
 * and emit a queue compatible with scripts/parasite-artifact-draft.js.
 *
 * The question this answers: "Which of a competitor's money pages generate
 * the kind of traffic that actually converts to a Medigap sale — and can a
 * claude.ai artifact ranked alongside them siphon those clicks?"
 *
 * NOT a ranking-vanity tool. Scoring weights decision-stage commercial intent
 * (quote/enroll/cost/compare/plan-G/N/turning-65/switch) far above any other
 * signal. Informational traffic is deprioritized no matter its volume.
 *
 * Run:
 *   node scripts/competitor-parasite-keywords.js                      # default: boomerbenefits.com
 *   node scripts/competitor-parasite-keywords.js boomerbenefits.com
 *   node scripts/competitor-parasite-keywords.js medicarefaq.com --limit 200
 *   node scripts/competitor-parasite-keywords.js --all                # every incumbent + consolidated report
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");
const { getRankingKeywordsV3, getTopPages } = require("./moz-api");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const OUT_DIR = path.resolve(__dirname, "..", "artifacts", "parasite-drafts");
const QUEUE_FILE = path.join(OUT_DIR, "KEYWORD_QUEUE.md");
const CONSOLIDATED_FILE = path.join(OUT_DIR, "_revenue-targets-all.md");

const DEFAULT_DOMAIN = "boomerbenefits.com";

// Competitor list (mirrors competitor-keyword-analysis.js for consistency)
const ALL_COMPETITORS = [
  "boomerbenefits.com",
  "medicareresources.org",
  "medicareadvantage.com",
  "medicarefaq.com",
  "retireguide.com",
  "medigap.com",
  "thebig65.com",
  "medicareagentshub.com",
  "njseniorhealth.com",
  "themedicaregrp.com",
];

// URL / slug patterns that signal a revenue page (money page, not blog)
const REVENUE_URL_PATTERNS = [
  /quote|enroll|apply|compare|cost|price|premium|rate|best|cheap|affordable/i,
  /plan-g|plan-n|plan-f/i,
  /turning-65|medigap|supplement/i,
  /carrier|company|insurer|review/i,
  /switch|change|underwriting/i,
];

// Exclusions — these are not Medigap-enrollment revenue
const EXCLUDE_PATTERNS = [
  /part-?[ab]\b(?!.*supplement)/i, // Part A/B alone isn't Medigap
  /medicaid/i,
  /\btricare\b|\bva\b|veteran/i,
  /cobra|employer-coverage/i,
];

const BRANDED_SUFFIX = /\b(login|sign.in|careers|jobs|contact|about|privacy|terms)\b/i;

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);

function parseArgs() {
  let domain = null;
  let limit = 200;
  let runAll = false;
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--all") runAll = true;
    else if (a === "--limit") { limit = parseInt(args[i + 1], 10) || 200; i++; }
    else if (!a.startsWith("--") && !domain) domain = a;
  }
  return {
    domain: (domain || DEFAULT_DOMAIN).replace(/^https?:\/\//, "").replace(/\/$/, ""),
    limit,
    runAll,
  };
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

/** Keep only keywords that could plausibly produce a Medigap enrollment. */
function isCommerciallyRelevant(row, domain) {
  const kw = (row.keyword || "").toLowerCase();
  const page = (row.ranking_page || "").toLowerCase();

  // Must mention medicare / medigap / supplement or plan-letter OR have a
  // revenue-pattern URL (catches state+plan queries w/o "medicare" word)
  const hasMedicareTerm = /medicare|medigap|supplement|plan\s*[gnf]\b/i.test(kw);
  if (!hasMedicareTerm) return false;

  // Drop hard-exclude patterns
  for (const rx of EXCLUDE_PATTERNS) if (rx.test(kw) || rx.test(page)) return false;

  // Drop branded queries that are just someone searching for the competitor
  const brandWord = domain.replace(/\.(com|org|net|io)$/i, "").split(/[.\-]/)[0];
  if (brandWord && brandWord.length >= 4 && kw.includes(brandWord)) return false;

  // Drop utility pages
  if (BRANDED_SUFFIX.test(page)) return false;

  return true;
}

/** Cheap heuristic: does this ranking signal point at a revenue page? */
function quickRevenueSignal(row) {
  const page = (row.ranking_page || "").toLowerCase();
  const kw = (row.keyword || "").toLowerCase();
  let signal = 0;
  for (const rx of REVENUE_URL_PATTERNS) {
    if (rx.test(page)) signal += 1;
    if (rx.test(kw)) signal += 1;
  }
  // Top-3 position = they own this SERP; crowding matters
  if (row.rank_position && row.rank_position <= 3) signal += 2;
  else if (row.rank_position && row.rank_position <= 10) signal += 1;
  // Volume floor so we don't waste scoring budget on dead queries
  if (row.volume && row.volume >= 100) signal += 1;
  return signal;
}

// ---------------------------------------------------------------------------
// Claude: revenue scoring
// ---------------------------------------------------------------------------
async function scoreForRevenue({ domain, candidates }) {
  const client = new Anthropic();

  const prompt = `You are scoring keywords for REVENUE POTENTIAL. We operate healthplans.now, a Medicare Supplement (Medigap) enrollment site from EasyKind Medicare. We make money ONLY when someone enrolls in a Medigap plan (Plan G and Plan N are our highest-LTV products). Ranking for a keyword is worthless unless the resulting click is likely to convert to an enrollment.

The candidates below are keywords ${domain} currently ranks for in the top 50, scraped via Moz's ranking-keywords API. For each candidate, estimate how likely traffic from that query would convert to a Medigap enrollment if intercepted by a claude.ai parasite artifact linking to healthplans.now.

REVENUE SCORING WEIGHTS (highest to lowest):
- DECISION STAGE queries (quote, enroll, apply, cost, price, premium, cheapest, compare, "vs", best, review, switch, underwriting, "without questions", specific plan letter + modifier) — these are people about to buy
- COMPARISON STAGE queries (Plan G vs Plan N, carrier vs carrier, Medigap vs Medicare Advantage) — actively shopping
- LOCALIZED commercial queries (state/city + plan/quote/cost) — high intent + local trust
- TURNING-65 / NEW TO MEDICARE commercial queries — peak conversion window (6-month OEP)
- INFORMATIONAL queries ("what is medigap", "how does medicare work") — LOW revenue unless explicitly buying-stage
- AWARENESS / EDUCATIONAL queries ("history of medicare", "medicare for all") — near-zero revenue
- NON-MEDIGAP queries (Medicare Advantage without switch intent, Part D only, Medicaid) — lower commission / different product / deprioritize

IMPORTANT:
- A query with volume 10,000 that produces informational traffic is worth less than a query with volume 200 that produces decision-stage traffic. Revenue > volume.
- Penalize queries where the ranking URL looks like a blog post (e.g., /blog/, /guides/, /what-is/) vs. a money page (e.g., /quote, /plan-g, /enrollment).
- Plan G and Plan N keywords > generic Medigap keywords > Medicare Advantage / Part D / Medicaid keywords.

FOR EACH CANDIDATE, return a JSON object with this exact shape:
{
  "keyword": "verbatim keyword",
  "revenue_score": 0-100 integer,
  "intent_stage": "decision" | "comparison" | "awareness" | "informational" | "unrelated",
  "product_fit": "medigap" | "medicare-advantage" | "part-d" | "other",
  "money_page": true | false,
  "rationale": "one tight sentence on why this score — name the conversion path"
}

Return ONLY a JSON array, same order as input. No markdown fences, no preamble.

CANDIDATES from ${domain}:
${candidates.map((c, i) => `${i + 1}. "${c.keyword}" — pos ${c.rank_position ?? "?"} | vol ${c.volume ?? "?"} | difficulty ${c.difficulty ?? "?"} | URL: ${c.ranking_page || "?"}`).join("\n")}`;

  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = msg.content[0].text.trim();
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "");
  return JSON.parse(cleaned);
}

// ---------------------------------------------------------------------------
// Per-competitor pipeline
// ---------------------------------------------------------------------------
async function analyzeCompetitor(domain, limit) {
  console.log(`\n=== ${domain} ===`);

  // 1. Ranking keywords (v3) — actual SERP positions
  console.log(`  Fetching Moz ranking-keywords (up to ${limit})...`);
  let ranking = [];
  try {
    ranking = await getRankingKeywordsV3(domain, {
      limit: 50,
      maxPages: Math.ceil(limit / 50),
    });
  } catch (err) {
    console.warn(`  getRankingKeywordsV3 failed: ${err.message}`);
  }
  console.log(`  Got ${ranking.length} ranking keywords`);

  // 2. Fallback: if v3 returned nothing, use top_pages titles (old path)
  if (ranking.length === 0) {
    console.log("  Falling back to getTopPages title-scraping...");
    try {
      const pages = await getTopPages(domain, { limit: 50 });
      ranking = pages
        .filter((p) => p.title && p.page)
        .map((p) => ({
          keyword: (p.title || "").toLowerCase()
            .replace(/\s*[-|–—:]\s*.+$/, "")
            .replace(/^\d{4}\s+/, "")
            .trim(),
          ranking_page: p.page,
          rank_position: null,
          volume: null,
          difficulty: null,
          _fallback: true,
        }))
        .filter((r) => r.keyword.length >= 8);
      console.log(`  Fallback produced ${ranking.length} candidates`);
    } catch (err) {
      console.warn(`  Fallback also failed: ${err.message}`);
      return null;
    }
  }

  if (ranking.length === 0) {
    console.warn(`  No data for ${domain} — skipping.`);
    return null;
  }

  // 3. Filter to commercially relevant
  const relevant = ranking.filter((r) => isCommerciallyRelevant(r, domain));
  console.log(`  ${relevant.length} commercially relevant after filter`);
  if (relevant.length === 0) return null;

  // 4. Pre-rank by quick heuristic, take top 40 for Claude scoring
  const preRanked = relevant
    .map((r) => ({ ...r, _prescore: quickRevenueSignal(r) }))
    .sort((a, b) => b._prescore - a._prescore || (b.volume || 0) - (a.volume || 0))
    .slice(0, 40);

  // 5. Claude revenue scoring
  console.log(`  Scoring top ${preRanked.length} with Claude...`);
  let scores;
  try {
    scores = await scoreForRevenue({ domain, candidates: preRanked });
  } catch (err) {
    console.warn(`  Claude scoring failed: ${err.message}`);
    return null;
  }

  // 6. Merge back
  const merged = preRanked.map((c, i) => {
    const s = (scores[i] && scores[i].keyword === c.keyword)
      ? scores[i]
      : scores.find((x) => x.keyword === c.keyword) || {};
    return {
      keyword: c.keyword,
      domain,
      ranking_page: c.ranking_page,
      rank_position: c.rank_position,
      volume: c.volume,
      difficulty: c.difficulty,
      revenue_score: typeof s.revenue_score === "number" ? s.revenue_score : 0,
      intent_stage: s.intent_stage || "unknown",
      product_fit: s.product_fit || "unknown",
      money_page: s.money_page === true,
      rationale: s.rationale || "",
    };
  }).sort((a, b) => b.revenue_score - a.revenue_score);

  return merged;
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------
function renderPerCompetitor({ domain, scored, generatedAt }) {
  const top = scored.slice(0, 20);
  const lines = [];
  lines.push(`# Revenue Targets — ${domain}`);
  lines.push("");
  lines.push(`**Generated:** ${generatedAt}`);
  lines.push(`**Source:** Moz v3 ranking-keywords for ${domain} → Claude revenue-potential scoring`);
  lines.push(`**Candidates scored:** ${scored.length}`);
  lines.push("");
  lines.push("Top 20 keywords ranked by likelihood of producing a Medigap enrollment if we intercept traffic with a claude.ai parasite artifact.");
  lines.push("");
  lines.push("| # | Keyword | Rev Score | Stage | Product | Pos | Vol | Money Page | Rationale |");
  lines.push("|---|---------|-----------|-------|---------|-----|-----|------------|-----------|");
  for (let i = 0; i < top.length; i++) {
    const r = top[i];
    lines.push(
      `| ${i + 1} | ${r.keyword} | ${r.revenue_score} | ${r.intent_stage} | ${r.product_fit} | ${r.rank_position ?? "—"} | ${r.volume ?? "—"} | ${r.money_page ? "✓" : ""} | ${r.rationale} |`
    );
  }
  lines.push("");
  lines.push("## Top-20 source URLs on " + domain);
  lines.push("");
  for (const r of top) {
    lines.push(`- [${r.keyword}](${r.ranking_page || "#"}) — score ${r.revenue_score}`);
  }
  lines.push("");
  return lines.join("\n");
}

function renderQueueAppend({ domain, scored, generatedAt }) {
  const strong = scored.filter((r) =>
    r.revenue_score >= 60 &&
    r.product_fit === "medigap" &&
    (r.intent_stage === "decision" || r.intent_stage === "comparison")
  ).slice(0, 20);
  if (!strong.length) return null;

  const lines = [];
  lines.push("");
  lines.push(`## ${domain} — revenue targets imported ${generatedAt.slice(0, 10)}`);
  lines.push("");
  for (const r of strong) {
    lines.push(`- [ ] ${r.keyword}  _(rev ${r.revenue_score} · ${r.intent_stage} · pos ${r.rank_position ?? "?"} · vol ${r.volume ?? "?"})_`);
  }
  lines.push("");
  return lines.join("\n");
}

function renderConsolidated({ allResults, generatedAt }) {
  // Flatten, keep best score per keyword if dupes across competitors
  const bestByKeyword = new Map();
  for (const { domain, scored } of allResults) {
    for (const r of scored) {
      const existing = bestByKeyword.get(r.keyword);
      if (!existing || r.revenue_score > existing.revenue_score) {
        bestByKeyword.set(r.keyword, { ...r, domain });
      }
    }
  }
  const all = [...bestByKeyword.values()]
    .filter((r) => r.product_fit === "medigap")
    .sort((a, b) => b.revenue_score - a.revenue_score);

  const lines = [];
  lines.push(`# Consolidated Medigap Revenue Targets — All Competitors`);
  lines.push("");
  lines.push(`**Generated:** ${generatedAt}`);
  lines.push(`**Competitors analyzed:** ${allResults.map((r) => r.domain).join(", ")}`);
  lines.push(`**Unique Medigap keywords:** ${all.length}`);
  lines.push("");
  lines.push("Ranked by revenue potential. These are the specific queries where intercepting an incumbent's traffic is most likely to produce a Medigap enrollment on healthplans.now.");
  lines.push("");
  lines.push("## Top 50 decision + comparison stage (build these first)");
  lines.push("");
  lines.push("| # | Keyword | Rev | Stage | Owned By | Pos | Vol | Rationale |");
  lines.push("|---|---------|-----|-------|----------|-----|-----|-----------|");
  const decisionComp = all.filter((r) =>
    r.intent_stage === "decision" || r.intent_stage === "comparison"
  ).slice(0, 50);
  for (let i = 0; i < decisionComp.length; i++) {
    const r = decisionComp[i];
    lines.push(
      `| ${i + 1} | ${r.keyword} | ${r.revenue_score} | ${r.intent_stage} | ${r.domain} | ${r.rank_position ?? "—"} | ${r.volume ?? "—"} | ${r.rationale} |`
    );
  }
  lines.push("");
  lines.push("## All Medigap candidates (top 100)");
  lines.push("");
  for (const r of all.slice(0, 100)) {
    lines.push(`- **${r.revenue_score}** · ${r.keyword} _(${r.intent_stage} · ${r.domain} · pos ${r.rank_position ?? "?"} · vol ${r.volume ?? "?"})_ — ${r.rationale}`);
  }
  lines.push("");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  if (!ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not set in scripts/.env");
  ensureDir(OUT_DIR);

  const { domain, limit, runAll } = parseArgs();
  const generatedAt = new Date().toISOString();

  const domains = runAll ? ALL_COMPETITORS : [domain];
  if (runAll) console.log(`--all mode: analyzing ${domains.length} competitors`);

  const allResults = [];
  for (const d of domains) {
    const scored = await analyzeCompetitor(d, limit);
    if (!scored) continue;

    // Per-competitor report
    const reportFile = path.join(OUT_DIR, `${slugify(d)}-revenue.md`);
    fs.writeFileSync(reportFile, renderPerCompetitor({ domain: d, scored, generatedAt }), "utf8");
    console.log(`  Wrote ${path.relative(process.cwd(), reportFile)}`);

    // Per-competitor JSON (for machine-readable downstream use)
    const jsonFile = path.join(OUT_DIR, `${slugify(d)}-revenue.json`);
    fs.writeFileSync(jsonFile, JSON.stringify({ domain: d, generatedAt, scored }, null, 2), "utf8");

    // Queue append
    const queueAppend = renderQueueAppend({ domain: d, scored, generatedAt });
    if (queueAppend && fs.existsSync(QUEUE_FILE)) {
      fs.appendFileSync(QUEUE_FILE, queueAppend, "utf8");
    }

    allResults.push({ domain: d, scored });

    if (runAll) await sleep(1500); // rate-limit pause between competitors
  }

  if (allResults.length === 0) {
    console.error("\nNo competitors produced results. Check MOZ_API_TOKEN.");
    process.exit(1);
  }

  // Consolidated report (only meaningful for --all, but always write)
  fs.writeFileSync(CONSOLIDATED_FILE, renderConsolidated({ allResults, generatedAt }), "utf8");
  console.log(`\nConsolidated report: ${path.relative(process.cwd(), CONSOLIDATED_FILE)}`);

  // Quick console summary
  const allFlat = allResults.flatMap((r) => r.scored).filter((r) => r.product_fit === "medigap");
  allFlat.sort((a, b) => b.revenue_score - a.revenue_score);
  console.log("\nTop 10 Medigap revenue targets across all analyzed competitors:");
  for (let i = 0; i < Math.min(10, allFlat.length); i++) {
    const r = allFlat[i];
    console.log(`  ${String(r.revenue_score).padStart(3)} | [${r.intent_stage.padEnd(12)}] ${r.keyword}  (${r.domain}, pos ${r.rank_position ?? "?"})`);
  }
}

main().catch((err) => {
  console.error("competitor-parasite-keywords failed:", err.message);
  process.exit(1);
});
