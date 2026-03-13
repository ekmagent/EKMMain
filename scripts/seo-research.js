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

  const client = new Anthropic();
  const today = new Date().toISOString().split("T")[0];
  const resultsPath = path.resolve(__dirname, "..", "results.tsv");
  const resultsHeader = "date\tpage\timpressions\tclicks\tctr\tposition\tchange_type\tnew_value\tstatus\n";

  // Ensure results.tsv has a header
  if (!fs.existsSync(resultsPath)) {
    fs.writeFileSync(resultsPath, resultsHeader, "utf8");
  }

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

    // Build the prompt
    const topQueriesText = target.topQueries.length
      ? target.topQueries.map((q) => `"${q.query}" (avg position ${q.position.toFixed(1)})`).join(", ")
      : "no query data available";

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
        model: "claude-sonnet-4-6",
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
