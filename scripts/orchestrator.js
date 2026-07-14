/**
 * orchestrator.js
 * Quality audit + gap-fill for medicareyourself.com pages.
 *
 * Each run:
 *  1. Reads all known page files
 *  2. Scores each against a quality rubric
 *  3. For pages below threshold, calls Claude to generate missing content
 *  4. Applies changes (regex substitution only — no eval of LLM output)
 *  5. Logs audit scores to orchestrator-log.tsv
 */

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Auto-discover all page.tsx files under app/ — no hardcoded list to maintain.
// LLM output never controls file paths; all paths come from the filesystem.
// ---------------------------------------------------------------------------
const APP_DIR = path.resolve(__dirname, "..", "app");

/** Recursively find all page.tsx files and return { urlPath → relativePath } */
function discoverPages(dir, results = {}) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || entry.name === "node_modules" || entry.name === "api") continue;
      discoverPages(fullPath, results);
    } else if (entry.name === "page.tsx") {
      const relative = path.relative(path.resolve(__dirname, ".."), fullPath);
      const urlDir = path.relative(APP_DIR, path.dirname(fullPath));
      const urlPath = urlDir === "." ? "/" : "/" + urlDir.replace(/\\/g, "/");
      results[urlPath] = relative;
    }
  }
  return results;
}

const PAGE_MAP = discoverPages(APP_DIR);

// Authoritative outbound sources we want on every content page
const GOV_SOURCES = [
  "medicare.gov",
  "cms.gov",
  "ssa.gov",
];

const STATE_SOURCES = {
  "new-jersey": ["nj.gov", "state.nj.us"],
  pennsylvania: ["pa.gov", "insurance.pa.gov"],
};

// Minimum quality thresholds
const THRESHOLDS = {
  minWords: 600,
  minFaqs: 4,
  metaDescMinLen: 130,
  metaDescMaxLen: 160,
  minInternalLinks: 2,
  minOutboundGovLinks: 1,
};

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

function resolveRepo(relative) {
  return path.resolve(__dirname, "..", relative);
}

/** Strip JSX/TS syntax and extract plain-ish text for word counting */
function extractText(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "") // block comments
    .replace(/\/\/.*/g, "") // line comments
    .replace(/<[^>]+>/g, " ") // JSX tags
    .replace(/\{[^}]{0,200}\}/g, " ") // short JS expressions
    .replace(/[`"']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(source) {
  return extractText(source).split(" ").filter(Boolean).length;
}

function countFaqs(source) {
  // Count objects in faqs array: { question: "...", answer: "..." }
  const matches = source.match(/question\s*:/g);
  return matches ? matches.length : 0;
}

function getMetaDescriptionLength(source) {
  const m = source.match(/description\s*:\s*\n?\s*"([^"]*)"/);
  return m ? m[1].length : 0;
}

function countInternalLinks(source) {
  const matches = source.match(/href=["']\//g);
  return matches ? matches.length : 0;
}

function hasGovLink(source) {
  return GOV_SOURCES.some((domain) => source.includes(domain));
}

function hasStateLink(source, pagePath) {
  const segment = pagePath.split("/").find((s) =>
    Object.keys(STATE_SOURCES).includes(s)
  );
  if (!segment) return true; // no state page, skip check
  const domains = STATE_SOURCES[segment] || [];
  return domains.some((d) => source.includes(d));
}

function hasAuthorByline(source) {
  return /Anthony Orner/i.test(source);
}

function hasFaqSchema(source) {
  return source.includes("FAQPage");
}

/**
 * Audit a single page and return a score object.
 */
function auditPage(pagePath, source) {
  // Compact Keyword pages (/hub/*) follow 400-500 word rule; other pages need 600+
  const isCompactPage = pagePath.startsWith("/hub/");
  const minWords = isCompactPage ? 350 : THRESHOLDS.minWords;

  const words = countWords(source);
  const faqs = countFaqs(source);
  const metaLen = getMetaDescriptionLength(source);
  const internalLinks = countInternalLinks(source);
  const govLink = hasGovLink(source);
  const stateLink = hasStateLink(source, pagePath);
  const byline = hasAuthorByline(source);
  const faqSchema = hasFaqSchema(source);

  const gaps = [];
  if (words < minWords) gaps.push(`word_count:${words}/${minWords}`);
  if (faqs < THRESHOLDS.minFaqs) gaps.push(`faqs:${faqs}/${THRESHOLDS.minFaqs}`);
  if (metaLen < THRESHOLDS.metaDescMinLen) gaps.push(`meta_desc_short:${metaLen}/${THRESHOLDS.metaDescMinLen}`);
  if (metaLen > THRESHOLDS.metaDescMaxLen) gaps.push(`meta_desc_long:${metaLen}/${THRESHOLDS.metaDescMaxLen}`);
  if (internalLinks < THRESHOLDS.minInternalLinks) gaps.push(`internal_links:${internalLinks}/${THRESHOLDS.minInternalLinks}`);
  if (!govLink) gaps.push("missing_gov_link");
  if (!stateLink) gaps.push("missing_state_link");
  if (!byline) gaps.push("missing_byline");
  if (!faqSchema) gaps.push("missing_faq_schema");

  const score = Math.max(
    0,
    100 - gaps.length * 10
  );

  return { pagePath, words, faqs, metaLen, internalLinks, govLink, stateLink, byline, faqSchema, gaps, score };
}

// ---------------------------------------------------------------------------
// LLM gap-fill
// ---------------------------------------------------------------------------

/**
 * Build a Claude prompt that asks only for what's missing.
 * Returns a JSON object with whichever fields need filling.
 */
function buildPrompt(audit, source) {
  const gapList = audit.gaps.map((g) => `- ${g}`).join("\n");
  const isNJ = audit.pagePath.includes("new-jersey");
  const isPA = audit.pagePath.includes("pennsylvania");
  const stateNote = isNJ
    ? "New Jersey uses community rating for Medigap. The 6-month Medigap Open Enrollment Period applies. Do NOT claim NJ has year-round guaranteed issue."
    : isPA
    ? "Pennsylvania uses attained-age rating; Medigap open enrollment window is 6 months from Part B effective date."
    : "";

  return `You are an SEO content specialist for medicareyourself.com, a licensed Medicare insurance brokerage.
Broker: Anthony Orner, NPI 1902584006, licensed in NJ and 34 states.
${stateNote}

PAGE: ${audit.pagePath}
QUALITY GAPS (fix these only):
${gapList}

CURRENT PAGE SOURCE (first 4000 chars):
${source.slice(0, 4000)}

Produce a JSON object with ONLY the keys that address the gaps above. Choose from:

"byline_html": A short JSX snippet (string) to add an author byline. Use this exact format:
  <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>

"gov_links_html": A JSX snippet (string) adding 1-2 outbound links to medicare.gov or cms.gov relevant to this page's topic. Wrap in a <div className="text-sm text-gray-600 mt-4">. Use rel="noopener noreferrer" target="_blank".

"state_links_html": A JSX snippet (string) adding 1 outbound link to the relevant state insurance department or SHIP program.

"extra_faqs": Array of { "question": "...", "answer": "..." } objects. Add enough to reach ${THRESHOLDS.minFaqs} total FAQs. Max 3 new FAQs per run. Answers must be 2-4 factual sentences. No invented statistics.

"meta_description": New meta description string, ${THRESHOLDS.metaDescMinLen}-${THRESHOLDS.metaDescMaxLen} chars, includes a benefit and subtle CTA.

Rules:
- Respond with valid JSON ONLY — no markdown, no prose before or after.
- Do not include keys for gaps that are already passing.
- Do not invent, alter, or insert any specific dollar amounts, percentages, or statistics. If a figure is relevant, reference it by name only (e.g., "the Part B premium", "the Part A deductible") without citing a number — the site imports canonical 2026 figures from lib/medicare-figures.ts.
- Phone number for CTA: 855-559-1700.
- Do not mention competitor brand names.`;
}

/** Safely insert a string before the first return ( in JSX */
function insertBeforeReturn(source, snippet) {
  // Insert the byline snippet after the first <h1...>...</h1> block
  const h1End = source.search(/<\/h1>/);
  if (h1End === -1) return source;
  const insertAt = source.indexOf("\n", h1End) + 1;
  return source.slice(0, insertAt) + "        " + snippet + "\n" + source.slice(insertAt);
}

/** Insert a JSX snippet before the closing </section> or </div> of main content */
function insertBeforeMainClose(source, snippet) {
  // Find a reasonable insertion point — before the last </section> before the FAQ section
  const pos = source.lastIndexOf("</section>");
  if (pos === -1) {
    const pos2 = source.lastIndexOf("</div>\n    </main>");
    if (pos2 === -1) return source;
    return source.slice(0, pos2) + "      " + snippet + "\n    " + source.slice(pos2);
  }
  return source.slice(0, pos) + "      " + snippet + "\n      " + source.slice(pos);
}

/** Normalize a question into significant lowercase words for similarity checks */
function normalizeQuestionWords(q) {
  const STOPWORDS = new Set(["a", "an", "the", "is", "are", "do", "does", "can", "i", "my", "you", "your", "to", "of", "in", "on", "for", "with", "what", "how", "when", "will", "and", "or", "it", "if"]);
  return String(q)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

/** True if two FAQ questions are near-duplicates (same first 6 normalized words, or Jaccard word overlap > 0.6) */
function isSimilarQuestion(a, b) {
  const wordsA = normalizeQuestionWords(a);
  const wordsB = normalizeQuestionWords(b);
  if (wordsA.length === 0 || wordsB.length === 0) return false;
  if (wordsA.slice(0, 6).join(" ") === wordsB.slice(0, 6).join(" ")) return true;
  const setA = new Set(wordsA);
  const setB = new Set(wordsB);
  let overlap = 0;
  for (const w of setA) if (setB.has(w)) overlap++;
  const union = setA.size + setB.size - overlap;
  return union > 0 && overlap / union > 0.6;
}

function applyGapFill(source, suggestions) {
  let s = source;

  // 1. Byline — insert after first </h1>
  if (suggestions.byline_html) {
    const snippet = suggestions.byline_html.trim();
    if (!s.includes("Anthony Orner")) {
      s = insertBeforeReturn(s, snippet);
    }
  }

  // 2. Gov links — insert before last </section>
  if (suggestions.gov_links_html) {
    const snippet = suggestions.gov_links_html.trim();
    if (!hasGovLink(s)) {
      s = insertBeforeMainClose(s, snippet);
    }
  }

  // 3. State links — insert before last </section>
  if (suggestions.state_links_html) {
    const snippet = suggestions.state_links_html.trim();
    s = insertBeforeMainClose(s, snippet);
  }

  // 4. Extra FAQs — append before closing ] of faqs array
  if (suggestions.extra_faqs && suggestions.extra_faqs.length > 0) {
    // Dedup: skip any FAQ whose question is a near-duplicate of one already on
    // the page (or of another suggestion in this batch) — the bot used to
    // re-append the same lightly-rephrased questions run after run.
    // Hard cap: never grow a page past 12 FAQ entries via bot insertion.
    const existingQuestions = [...s.matchAll(/question\s*:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
    const room = Math.max(0, 12 - existingQuestions.length);
    const accepted = [];
    for (const f of suggestions.extra_faqs.slice(0, 3)) { // safety cap: max 3 per run
      if (accepted.length >= room) break;
      const q = String(f.question);
      if (existingQuestions.some((eq) => isSimilarQuestion(eq, q))) continue;
      if (accepted.some((a) => isSimilarQuestion(String(a.question), q))) continue;
      accepted.push(f);
    }

    const newFaqs = accepted
      .map(
        (f) =>
          `  {\n    question: "${String(f.question).replace(/"/g, '\\"')}",\n    answer:\n      "${String(f.answer).replace(/"/g, '\\"')}",\n  }`
      )
      .join(",\n");

    // Insert before the closing ]; of the faqs array, consuming any trailing
    // comma after the last existing entry — otherwise appending `,\n{...}`
    // after `},` leaves a bare `,` line (a sparse array that breaks the build).
    // IMPORTANT: use a function replacement, not a string replacement — a string
    // replacement treats `$1`, `$&`, etc. in `newFaqs` as regex backreferences,
    // which silently corrupts any FAQ answer containing dollar amounts like
    // `$185` or `$1,676`. Function replacements insert the value verbatim.
    if (newFaqs) {
      // Anchor on the faqs array itself, not "the last array before export
      // default" — any other const array declared after faqs would otherwise
      // silently receive the FAQ objects (valid JS, so it would even build).
      const faqsStart = s.search(/const faqs\s*(?::[^=]+)?=\s*\[/);
      if (faqsStart !== -1) {
        const closeRe = /,?[ \t]*\n\];/g;
        closeRe.lastIndex = faqsStart;
        const m = closeRe.exec(s);
        if (m) {
          // Only prepend a comma when the array already has entries.
          const lead = s.slice(0, m.index).trimEnd().endsWith("[") ? "" : ",";
          s =
            s.slice(0, m.index) +
            `${lead}\n${newFaqs},\n];` +
            s.slice(m.index + m[0].length);
        }
      }
    }
  }

  // 5. Meta description replacement — function callback for the same reason
  if (suggestions.meta_description) {
    const desc = String(suggestions.meta_description).replace(/"/g, '\\"');
    s = s.replace(
      /description\s*:\s*\n?\s*"[^"]*"/,
      () => `description:\n    "${desc}"`
    );
  }

  return s;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/** Strip HTML to plain text */
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Fetch top search results to ground gap-fill content in verified facts */
async function researchForGrounding(pagePath, apiKey) {
  if (!apiKey) return "";
  const query = pagePath.replace(/\//g, " ").trim() + " medicare";
  try {
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: { "X-API-KEY": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 3 }),
    });
    if (!res.ok) return "";
    const data = await res.json();
    const snippets = [];
    for (const r of (data.organic || []).slice(0, 2)) {
      if (r.link.includes("medicareyourself.com")) continue;
      try {
        const page = await fetch(r.link, {
          signal: AbortSignal.timeout(5000),
          headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)" },
        });
        if (!page.ok) continue;
        const html = await page.text();
        snippets.push(`SOURCE: ${r.link}\n${stripHtml(html).slice(0, 800)}`);
      } catch { /* skip */ }
    }
    return snippets.length
      ? `\nVERIFIED SOURCES (ground your content in these — do NOT copy):\n\n${snippets.join("\n\n---\n\n")}\n\nOnly include facts you can verify from these sources or medicare.gov.\n`
      : "";
  } catch { return ""; }
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY env var is required");
  }

  const client = new Anthropic();
  const serperApiKey = process.env.SERPER_API_KEY || "";
  const today = new Date().toISOString().split("T")[0];
  const logPath = path.resolve(__dirname, "..", "orchestrator-log.tsv");

  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "date\tpage\tscore\twords\tfaqs\tmeta_len\tgov_link\tbyline\tgaps\taction\n",
      "utf8"
    );
  }

  const logRows = [];
  let pagesFixed = 0;
  let pagesClean = 0;

  for (const [pagePath, relativePath] of Object.entries(PAGE_MAP)) {
    const absPath = resolveRepo(relativePath);

    if (!fs.existsSync(absPath)) {
      console.log(`Skipping (file not found): ${relativePath}`);
      continue;
    }

    const source = fs.readFileSync(absPath, "utf8");
    const audit = auditPage(pagePath, source);

    const gapStr = audit.gaps.join("|") || "none";
    console.log(`\n[${audit.score}/100] ${pagePath}`);

    if (audit.gaps.length === 0) {
      console.log(`  ✓ All quality checks passing`);
      pagesClean++;
      logRows.push([today, pagePath, audit.score, audit.words, audit.faqs, audit.metaLen, audit.govLink ? "yes" : "no", audit.byline ? "yes" : "no", "none", "clean"].join("\t"));
      continue;
    }

    console.log(`  Gaps: ${gapStr}`);

    // Skip pages that only fail word count (can't reliably auto-pad content)
    const fixableGaps = audit.gaps.filter((g) => !g.startsWith("word_count"));
    if (fixableGaps.length === 0) {
      console.log(`  Only word count gap — skipping auto-fix (add more content manually)`);
      logRows.push([today, pagePath, audit.score, audit.words, audit.faqs, audit.metaLen, audit.govLink ? "yes" : "no", audit.byline ? "yes" : "no", gapStr, "skipped_word_count_only"].join("\t"));
      continue;
    }

    // Research what's ranking to ground Claude's output in verified facts
    const research = await researchForGrounding(pagePath, serperApiKey);

    // Call Claude to fill gaps
    const basePrompt = buildPrompt({ ...audit, gaps: fixableGaps }, source);
    const prompt = research ? basePrompt + "\n" + research : basePrompt;
    let suggestions;

    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });
      const raw = msg.content[0].text.trim();
      suggestions = JSON.parse(raw);
    } catch (err) {
      console.error(`  Claude error: ${err.message}`);
      logRows.push([today, pagePath, audit.score, audit.words, audit.faqs, audit.metaLen, audit.govLink ? "yes" : "no", audit.byline ? "yes" : "no", gapStr, `error:${err.message}`].join("\t"));
      continue;
    }

    const updatedSource = applyGapFill(source, suggestions);

    if (updatedSource !== source) {
      // Safety net: reject updates that break the expected file shape.
      // A well-formed page.tsx has exactly one `];<ws>export default` sequence
      // (the close of the faqs array followed by the default export).
      // If our regex splice accidentally produced zero or multiple, the file
      // is corrupt — skip the write and log.
      const terminatorCount = (updatedSource.match(/\];[\s\n]*export default/g) || []).length;
      if (terminatorCount !== 1) {
        console.error(`  ✗ Aborted write: expected 1 \`];<ws>export default\` terminator, found ${terminatorCount}. Source unchanged.`);
        logRows.push([today, pagePath, audit.score, audit.words, audit.faqs, audit.metaLen, audit.govLink ? "yes" : "no", audit.byline ? "yes" : "no", gapStr, `aborted:corrupt_terminator_${terminatorCount}`].join("\t"));
        continue;
      }

      fs.writeFileSync(absPath, updatedSource, "utf8");
      console.log(`  Fixed: ${Object.keys(suggestions).join(", ")}`);
      pagesFixed++;
      logRows.push([today, pagePath, audit.score, audit.words, audit.faqs, audit.metaLen, audit.govLink ? "yes" : "no", audit.byline ? "yes" : "no", gapStr, `fixed:${Object.keys(suggestions).join(",")}`].join("\t"));
    } else {
      console.log(`  No changes applied — patterns not matched, check page format`);
      logRows.push([today, pagePath, audit.score, audit.words, audit.faqs, audit.metaLen, audit.govLink ? "yes" : "no", audit.byline ? "yes" : "no", gapStr, "no_match"].join("\t"));
    }
  }

  fs.appendFileSync(logPath, logRows.join("\n") + "\n", "utf8");

  console.log(`\nOrchestrator complete: ${pagesClean} clean, ${pagesFixed} fixed, ${Object.keys(PAGE_MAP).length - pagesClean - pagesFixed} needs manual attention`);
}

main().catch((err) => {
  console.error("orchestrator failed:", err.message);
  process.exit(1);
});
