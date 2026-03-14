/**
 * seo-research.js
 * Karpathy-style autoresearch loop for SEO.
 *
 * Each run:
 *  1. Reads gsc-data.json (written by fetch-gsc-data.js)
 *  2. Picks the 3 lowest-CTR pages that have a file mapping
 *  3. Asks Claude to suggest: new H1, new meta title, new meta description, 2 new FAQs
 *  4. Applies the changes via regex substitution (no eval, no exec)
 *  5. Appends a row to results.tsv for tracking
 *
 * The workflow commits all changes back to the repo after this script runs.
 */

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Web research — fetch top-ranking pages to ground content in verified facts
// ---------------------------------------------------------------------------

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Fetch top-ranking pages for a query and return a brief of their content.
 * This grounds Claude's suggestions in what is actually ranking — preventing
 * hallucinated state-specific rules or outdated facts.
 */
async function researchQuery(query, serperApiKey) {
  if (!serperApiKey) return "";

  let serpResults;
  try {
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: { "X-API-KEY": serperApiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 5 }),
    });
    if (!res.ok) return "";
    serpResults = await res.json();
  } catch {
    return "";
  }

  const urls = (serpResults.organic || [])
    .slice(0, 3)
    .map((r) => r.link)
    .filter((u) => u && !u.includes("medicareyourself.com"));

  const snippets = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(6000),
        headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)" },
      });
      if (!res.ok) continue;
      const html = await res.text();
      const text = stripHtml(html).slice(0, 1200);
      snippets.push(`SOURCE: ${url}\n${text}`);
    } catch {
      // skip unreachable pages
    }
  }

  return snippets.length
    ? `TOP-RANKING COMPETITOR CONTENT FOR THIS QUERY:\n\n${snippets.join("\n\n---\n\n")}`
    : "";
}

// ---------------------------------------------------------------------------
// Hardcoded URL → file path map (no path traversal from LLM output possible)
// ---------------------------------------------------------------------------
const PAGE_MAP = {
  "/": "app/page.tsx",
  "/medicare-supplement/new-jersey": "app/medicare-supplement/new-jersey/page.tsx",
  "/medicare-supplement/new-jersey/plan-g-vs-plan-n": "app/medicare-supplement/new-jersey/plan-g-vs-plan-n/page.tsx",
  "/medicare-supplement/new-jersey/cost": "app/medicare-supplement/new-jersey/cost/page.tsx",
  "/medicare-supplement/new-jersey/vs-medicare-advantage": "app/medicare-supplement/new-jersey/vs-medicare-advantage/page.tsx",
  "/medicare-supplement/new-jersey/turning-65": "app/medicare-supplement/new-jersey/turning-65/page.tsx",
  "/medicare-advantage/new-jersey": "app/medicare-advantage/new-jersey/page.tsx",
  "/medicare-supplement/pennsylvania": "app/medicare-supplement/pennsylvania/page.tsx",
  "/learn/what-is-medigap": "app/learn/what-is-medigap/page.tsx",
  "/learn/medicare-parts-explained": "app/learn/medicare-parts-explained/page.tsx",
  "/learn/how-to-sign-up-for-medicare": "app/learn/how-to-sign-up-for-medicare/page.tsx",
  "/learn/medicare-help-low-income": "app/learn/medicare-help-low-income/page.tsx",
  "/medicare-supplement/switch-carriers": "app/medicare-supplement/switch-carriers/page.tsx",
  "/medicare-supplement": "app/medicare-supplement/page.tsx",
  "/quote": "app/quote/page.tsx",
  "/about": "app/about/page.tsx",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Normalise a GSC page URL to a relative path key */
function urlToPath(pageUrl) {
  try {
    const u = new URL(pageUrl);
    // Strip trailing slash except for root
    return u.pathname === "/" ? "/" : u.pathname.replace(/\/$/, "");
  } catch {
    return pageUrl.replace(/\/$/, "") || "/";
  }
}

/** Resolve absolute file path from repo-relative path */
function repoFile(relativePath) {
  // __dirname is scripts/, parent is repo root
  return path.resolve(__dirname, "..", relativePath);
}

/** Escape string for use in a RegExp */
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Safely replace first occurrence of pattern in source */
function safeReplace(source, pattern, replacement) {
  const re = new RegExp(pattern);
  return re.test(source) ? source.replace(re, replacement) : source;
}

/**
 * Apply Claude's suggestions to the page source code.
 * All substitutions are regex-only — we never eval LLM output.
 */
function applyChanges(source, suggestions) {
  let s = source;

  // 1. Replace meta title
  if (suggestions.title) {
    s = safeReplace(
      s,
      /title:\s*"[^"]*"/,
      `title: "${suggestions.title.replace(/"/g, '\\"')}"`
    );
  }

  // 2. Replace meta description
  if (suggestions.description) {
    // Description may span a line continuation — match the whole string value
    s = safeReplace(
      s,
      /description:\s*\n?\s*"[^"]*"/,
      `description:\n    "${suggestions.description.replace(/"/g, '\\"')}"`
    );
  }

  // 3. Replace h1 text (inside JSX — first <h1 ...> ... </h1>)
  if (suggestions.h1) {
    s = safeReplace(
      s,
      /(<h1[^>]*>)([\s\S]*?)(<\/h1>)/,
      `$1\n          ${suggestions.h1.replace(/"/g, '\\"')}\n        $3`
    );
  }

  // 4. Append new FAQ entries before the closing ] of the faqs array
  if (suggestions.faqs && suggestions.faqs.length > 0) {
    const newFaqs = suggestions.faqs
      .map(
        (f) =>
          `  {\n    question: "${f.question.replace(/"/g, '\\"')}",\n    answer:\n      "${f.answer.replace(/"/g, '\\"')}",\n  }`
      )
      .join(",\n");

    // Find the last }; that closes the faqs array and insert before it
    s = safeReplace(s, /(\];[\s\n]*export default)/, `,\n${newFaqs}\n];\n\nexport default`);
  }

  return s;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY env var is required");
  }

  // Load GSC data
  const gscPath = path.resolve(__dirname, "..", "gsc-data.json");
  if (!fs.existsSync(gscPath)) {
    console.log("gsc-data.json not found — nothing to do.");
    return;
  }

  const gsc = JSON.parse(fs.readFileSync(gscPath, "utf8"));
  const pages = gsc.pages || [];

  if (pages.length === 0) {
    console.log("No GSC page data — nothing to do.");
    return;
  }

  // Build a query map: path → top queries
  const queryMap = {};
  for (const row of gsc.queries || []) {
    const p = urlToPath(row.keys[0]);
    if (!queryMap[p]) queryMap[p] = [];
    queryMap[p].push({ query: row.keys[1], ctr: row.ctr, position: row.position });
  }

  // Map each GSC page to a local file and compute a score
  const candidates = pages
    .map((row) => {
      const pagePath = urlToPath(row.keys[0]);
      const filePath = PAGE_MAP[pagePath];
      return {
        pagePath,
        filePath,
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position,
        topQueries: (queryMap[pagePath] || []).slice(0, 5),
      };
    })
    .filter((c) => c.filePath) // only pages we have a file for
    .sort((a, b) => a.ctr - b.ctr); // lowest CTR first

  // Take up to 3 worst performers
  const targets = candidates.slice(0, 3);

  if (targets.length === 0) {
    console.log("No matching pages to optimise.");
    return;
  }

  // ---------------------------------------------------------------------------
  // Edward Module 07-04: GSC Position-Based Keyword Opportunities
  //
  // Positions 6-13  → optimize the EXISTING page (add keyword mentions)
  // Positions 13+   → flag as NEW dedicated page candidate
  //
  // This surfaces keywords the site is accidentally ranking for and categorizes
  // them into "optimize existing" vs "create new page" buckets.
  // Results go to gsc-keyword-opportunities.tsv for HITL review.
  // ---------------------------------------------------------------------------
  const opportunitiesPath = path.resolve(__dirname, "..", "gsc-keyword-opportunities.tsv");
  const oppHeader = "date\tquery\tposition\timpressions\tclicks\tctr\tcurrent_page\taction\n";
  if (!fs.existsSync(opportunitiesPath)) {
    fs.writeFileSync(opportunitiesPath, oppHeader, "utf8");
  }

  const allQueries = gsc.queries || [];
  const oppRows = [];

  for (const row of allQueries) {
    const query = row.keys?.[1] || row.keys?.[0] || "";
    const position = row.position || 0;
    const impressions = row.impressions || 0;
    const clicks = row.clicks || 0;
    const ctr = row.ctr || 0;
    const pageUrl = row.keys?.[0] || "";
    const pagePath = urlToPath(pageUrl);

    // Only care about positions 6-25 (not already #1-5, not buried beyond 25)
    if (position < 6 || position > 25) continue;
    // Only care about queries with some impressions
    if (impressions < 5) continue;
    // Skip branded queries
    if (/medicareyourself|medicare yourself/i.test(query)) continue;

    const action = position <= 13
      ? "OPTIMIZE_EXISTING — add keyword mentions to current page"
      : "NEW_PAGE_CANDIDATE — consider dedicated landing page";

    oppRows.push(
      [today, query, position.toFixed(1), impressions, clicks, ctr.toFixed(4), pagePath, action].join("\t")
    );
  }

  if (oppRows.length > 0) {
    fs.appendFileSync(opportunitiesPath, oppRows.join("\n") + "\n", "utf8");
    console.log(`\nGSC Keyword Opportunities (Edward 07-04):`);
    console.log(`  Positions 6-13 (optimize existing): ${oppRows.filter((r) => r.includes("OPTIMIZE_EXISTING")).length}`);
    console.log(`  Positions 13-25 (new page candidates): ${oppRows.filter((r) => r.includes("NEW_PAGE_CANDIDATE")).length}`);
    console.log(`  Written to gsc-keyword-opportunities.tsv — review during Monday HITL check`);
  }

  const client = new Anthropic();
  const today = new Date().toISOString().split("T")[0];
  const resultsPath = path.resolve(__dirname, "..", "results.tsv");
  const resultsHeader = "date\tpage\timpressions\tclicks\tctr\tposition\tchange_type\tnew_value\tstatus\n";

  // Ensure results.tsv has a header
  if (!fs.existsSync(resultsPath)) {
    fs.writeFileSync(resultsPath, resultsHeader, "utf8");
  }

  const serperApiKey = process.env.SERPER_API_KEY || "";

  for (const target of targets) {
    const absFile = repoFile(target.filePath);
    if (!fs.existsSync(absFile)) {
      console.log(`File not found: ${absFile} — skipping`);
      continue;
    }

    const currentSource = fs.readFileSync(absFile, "utf8");

    console.log(`\nOptimising: ${target.pagePath}`);
    console.log(`  CTR: ${(target.ctr * 100).toFixed(2)}% | Position: ${target.position.toFixed(1)} | Impressions: ${target.impressions}`);
    console.log(`  Top queries: ${target.topQueries.map((q) => q.query).join(", ")}`);

    // Research what's actually ranking before asking Claude to generate anything
    const topQueriesText = target.topQueries.length
      ? target.topQueries.map((q) => `"${q.query}" (avg position ${q.position.toFixed(1)})`).join(", ")
      : "no query data available";

    const researchQuery_ = target.topQueries[0]?.query || target.pagePath.replace(/\//g, " ").trim();
    console.log(`  Researching competitor content for: "${researchQuery_}"`);
    const competitorResearch = await researchQuery(researchQuery_, serperApiKey);

    const prompt = `You are an SEO specialist for medicareyourself.com, a Medicare insurance brokerage licensed in New Jersey and 34 other states. The site earns revenue through phone calls to 855-559-1700 and redirects to a quoting tool.

PAGE: ${target.pagePath}
CURRENT PERFORMANCE (last 28 days):
- Impressions: ${target.impressions}
- Clicks: ${target.clicks}
- CTR: ${(target.ctr * 100).toFixed(2)}%
- Average position: ${target.position.toFixed(1)}

TOP SEARCH QUERIES REACHING THIS PAGE:
${topQueriesText}

CURRENT PAGE SOURCE (first 3000 chars):
${currentSource.slice(0, 3000)}

${competitorResearch ? competitorResearch + "\n\nUse the above competitor content to verify facts and identify gaps. Do NOT copy — rewrite in our voice. Only include claims you can verify from these sources or from medicare.gov. If a competitor makes a state-specific claim you cannot verify, omit it.\n" : ""}
Your task: suggest improvements to increase CTR (click-through rate from search results).

Respond ONLY with a valid JSON object with these exact keys:
{
  "title": "<new meta title, max 60 chars, include year 2026>",
  "description": "<new meta description, 140-155 chars, include a benefit and a call to action>",
  "h1": "<new H1 heading text, conversational and keyword-rich>",
  "faqs": [
    { "question": "<question that matches a search query above>", "answer": "<2-4 sentence answer, factual, mentions NJ>"},
    { "question": "<another common Medicare question>", "answer": "<2-4 sentence answer>"}
  ],
  "rationale": "<1-2 sentences explaining why these changes improve CTR>"
}

Rules:
- Keep all 2026 figures accurate (Part B premium $185/mo, Part B deductible $257, Part A deductible $1,676)
- NJ has year-round guaranteed issue for Medigap — mention where relevant
- Do not invent statistics. Do not mention competitor brand names.
- The phone number is 855-559-1700. Do not include it in title/description/h1.
- Respond with JSON only — no markdown, no prose before or after.`;

    let suggestions;
    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });

      const raw = msg.content[0].text.trim();
      suggestions = JSON.parse(raw);
    } catch (err) {
      console.error(`  Claude API error for ${target.pagePath}: ${err.message}`);
      continue;
    }

    console.log(`  Rationale: ${suggestions.rationale}`);

    // Apply changes to the source
    const updatedSource = applyChanges(currentSource, suggestions);

    if (updatedSource === currentSource) {
      console.log(`  No changes applied (patterns not matched) — check page format`);
    } else {
      fs.writeFileSync(absFile, updatedSource, "utf8");
      console.log(`  Written: ${target.filePath}`);
    }

    // Log to results.tsv
    const rows = [
      [today, target.pagePath, target.impressions, target.clicks, target.ctr.toFixed(4), target.position.toFixed(1), "title", suggestions.title || "", "pending"].join("\t"),
      [today, target.pagePath, target.impressions, target.clicks, target.ctr.toFixed(4), target.position.toFixed(1), "description", suggestions.description || "", "pending"].join("\t"),
      [today, target.pagePath, target.impressions, target.clicks, target.ctr.toFixed(4), target.position.toFixed(1), "h1", suggestions.h1 || "", "pending"].join("\t"),
    ];

    for (const faq of suggestions.faqs || []) {
      rows.push(
        [today, target.pagePath, target.impressions, target.clicks, target.ctr.toFixed(4), target.position.toFixed(1), "faq", faq.question || "", "pending"].join("\t")
      );
    }

    fs.appendFileSync(resultsPath, rows.join("\n") + "\n", "utf8");
  }

  console.log("\nSEO research loop complete. Changes committed by workflow.");
}

main().catch((err) => {
  console.error("seo-research failed:", err.message);
  process.exit(1);
});
