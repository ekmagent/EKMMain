/**
 * build-faq-pages.js
 * Builds a /medicare-faq/ content hub from Google "People Also Ask" questions.
 *
 * Each run:
 *  1. Searches target queries via Serper — extracts PAA questions
 *  2. Deduplicates and filters against already-built pages
 *  3. Uses Claude to write a 120-word direct answer for each new question
 *  4. Writes individual Next.js page files (app/medicare-faq/[slug]/page.tsx)
 *  5. Regenerates the hub page (app/medicare-faq/page.tsx)
 *  6. Updates sitemap entries file (faq-sitemap-entries.json)
 *  7. Logs to faq-build-log.tsv
 *
 * Safe to run repeatedly — skips questions that already have pages.
 * Add to weekly workflow to continuously expand the FAQ hub.
 */

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Target queries — Serper searches these and extracts PAA questions
// Bottom-of-funnel and mid-funnel Medicare queries
// ---------------------------------------------------------------------------
const SEED_QUERIES = [
  "Medicare broker New Jersey",
  "Medicare supplement plan G New Jersey",
  "Medicare supplement vs Medicare Advantage New Jersey",
  "turning 65 Medicare enrollment",
  "how to sign up for Medicare",
  "Medicare supplement plan G vs plan N",
  "best Medicare supplement plan 2026",
  "Medicare help low income",
  "Medicare supplement broker near me",
  "do I need Medicare if I have employer insurance",
  "Medicare supplement Pennsylvania",
  "when to enroll in Medicare Part B",
  "Medicare late enrollment penalty",
  "what does Medicare cover",
  "Medicare Advantage problems",
  "switch Medicare supplement carriers",
  "can I change my Medicare supplement plan",
  "Medicare supplement rate increase what to do",
  "how to get cheaper Medicare supplement same coverage",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert a question string to a safe URL slug */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

/** Resolve path relative to repo root */
function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

/** Fetch PAA questions from Serper for a query */
async function getPAAQuestions(query, apiKey) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: { "X-API-KEY": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ q: query, gl: "us", hl: "en", num: 10 }),
  });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.peopleAlsoAsk || []).map((item) => item.question).filter(Boolean);
}

/** Strip HTML to plain text for grounding snippets */
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Fetch top search results for grounding a FAQ answer in real content */
async function researchQuestion(question, apiKey) {
  if (!apiKey) return "";
  try {
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: { "X-API-KEY": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ q: question + " medicare", gl: "us", hl: "en", num: 3 }),
    });
    if (!res.ok) return "";
    const data = await res.json();

    const snippets = [];
    for (const r of (data.organic || []).slice(0, 2)) {
      try {
        const page = await fetch(r.link, {
          signal: AbortSignal.timeout(5000),
          headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)" },
        });
        if (!page.ok) continue;
        const html = await page.text();
        snippets.push(`SOURCE: ${r.link}\n${stripHtml(html).slice(0, 800)}`);
      } catch { /* skip unreachable */ }
    }
    return snippets.length
      ? `VERIFIED SOURCES (use these to ground your answer — do NOT copy):\n\n${snippets.join("\n\n---\n\n")}`
      : "";
  } catch { return ""; }
}

/** Generate a 120-word plain-text answer via Claude, grounded in real search results */
async function generateAnswer(question, client, serperApiKey) {
  const research = await researchQuestion(question, serperApiKey);

  const prompt = `You are a licensed Medicare insurance expert writing for medicareyourself.com, run by Anthony Orner, an independent Medicare broker licensed in NJ and 34 states. Phone: 855-559-1700.

Write a plain-text answer (NO markdown, NO bullet points, NO headers) to this Medicare question in exactly 100-130 words.

${research ? research + "\n\nUse the sources above to verify your facts. Only include claims supported by these sources or medicare.gov. If you cannot verify a claim, omit it.\n" : ""}
Rules:
- Start with a direct answer to the question in the first sentence — no wind-up
- Include one specific, verifiable fact (dollar amount, date, program name)
- End with a natural call to action mentioning 855-559-1700 or medicareyourself.com
- Use active voice throughout: "You pay" not "costs are incurred by"
- Vary sentence length — at least one sentence under 10 words
- Keep 2026 figures accurate: Part B premium $185/mo, Part B deductible $257, Part A deductible $1,676
- Do NOT make state-specific regulatory claims unless the question specifically asks about a state
- NEVER use: delve, tapestry, seamless, robust, nuanced, pivotal, meticulous, intricate, landscape (as metaphor), empower, garner, foster, bolster
- NEVER use these phrases: "it's worth noting", "it is important to", "having said that", "in conclusion", "navigating Medicare", "ensuring peace of mind", "comprehensive coverage"
- Do NOT use em dashes. No "furthermore," "moreover," or "additionally" to open sentences.
- Write the way Anthony would explain this to a client on the phone — specific, helpful, no filler

Question: ${question}

Answer (100-130 words, plain text only):`;

  const msg = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 300,
    messages: [{ role: "user", content: prompt }],
  });

  return msg.content[0].text.trim();
}

/**
 * LLM answer text is untrusted input. Two encoders, one per context:
 * - js(): JSON.stringify — always a valid JS string literal (newlines,
 *   quotes, backslashes, unicode). Raw string interpolation here is what
 *   generated 9 uncompilable pages on 2026-07-13 (answers with paragraph
 *   breaks -> unterminated string constants).
 * - jsxText(): entity-escapes & < > { } " ' for JSX text position (XSS +
 *   parse safety), plus backtick/dollar-brace escapes for this generator's
 *   own outer template literal. Newlines are safe in JSX text.
 */
function js(str) {
  return JSON.stringify(str);
}

function jsxText(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/`/g, "&#96;")
    .replace(/\$/g, "&#36;");
}

/** Write a single FAQ page file */
function writeFaqPage(question, slug, answer) {
  const escapedQuestion = jsxText(question);
  const escapedAnswer = jsxText(answer);
  const siteUrl = "https://medicareyourself.com";

  const content = `import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: ${js(question.slice(0, 55) + " | Medicare FAQ")},
  description:
    ${js(answer.slice(0, 155))},
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: ${js(question)},
      acceptedAnswer: {
        "@type": "Answer",
        text: ${js(answer)},
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "${siteUrl}" },
    { "@type": "ListItem", position: 2, name: "Medicare FAQ", item: "${siteUrl}/medicare-faq" },
    { "@type": "ListItem", position: 3, name: ${js(question.slice(0, 50))}, item: ${js(siteUrl + "/medicare-faq/" + slug)} },
  ],
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={[faqSchema, breadcrumbSchema]} />

      <nav className="max-w-3xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-faq" className="hover:text-blue-600">Medicare FAQ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">${escapedQuestion.slice(0, 50)}</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          ${escapedQuestion}
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            ${escapedAnswer}
          </p>
        </div>

        <div className="bg-[#F6FAF8] border border-[#D0E4DE] rounded-xl p-5 mb-6">
          <p className="font-semibold text-gray-900 mb-3">See what this costs in your area</p>
          <ZipCTA label="Compare My Rates" />
        </div>

        <div className="mb-10">
          <PhoneCTA label="Get a Free Answer From a Licensed Broker" />
        </div>

        <div className="bg-gray-50 rounded-xl p-5 text-sm border border-gray-100">
          <p className="font-semibold text-gray-900 mb-3">Related Medicare Questions</p>
          <ul className="space-y-1">
            <li><Link href="/medicare-faq" className="text-blue-600 hover:underline">Browse all Medicare FAQ →</Link></li>
            <li><Link href="/learn/how-to-sign-up-for-medicare" className="text-blue-600 hover:underline">How and when to sign up for Medicare</Link></li>
            <li><Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">Medicare Supplement plans in New Jersey</Link></li>
            <li><Link href="/learn/medicare-help-low-income" className="text-blue-600 hover:underline">Medicare help for people on a fixed income</Link></li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          EasyKind Medicare is an independent brokerage licensed in NJ and 34 states. Not affiliated with Medicare or any government agency.
          Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
        </p>
      </article>
    </>
  );
}
`;

  const dir = repoPath("app", "medicare-faq", slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), content, "utf8");
}

/** Regenerate the hub page from all current FAQ entries */
function writeHubPage(entries) {
  const siteUrl = "https://medicareyourself.com";

  const listItems = entries
    .map(
      (e) =>
        `        <li>\n          <Link href="/medicare-faq/${e.slug}" className="text-blue-700 hover:underline font-medium">\n            ${jsxText(e.question)}\n          </Link>\n        </li>`
    )
    .join("\n");

  const content = `import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medicare FAQ — Common Questions Answered (2026)",
  description:
    "Plain-language answers to the most common Medicare questions. Enrollment, costs, plan types, coverage, and more. Free broker help: 855-559-1700.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "${siteUrl}" },
    { "@type": "ListItem", position: 2, name: "Medicare FAQ", item: "${siteUrl}/medicare-faq" },
  ],
};

export default function MedicareFAQHub() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema]} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Medicare FAQ</h1>
        <p className="text-gray-600 mb-2">
          Plain-language answers to the questions people ask most about Medicare.
          Written by Anthony Orner, licensed Medicare broker in NJ and 34 states.
        </p>
        <p className="text-sm text-gray-400 mb-8">${entries.length} questions answered · Updated ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>

        <ul className="space-y-3 mb-10">
${listItems}
        </ul>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-sm">
          <p className="font-semibold text-gray-900 mb-1">Don&apos;t see your question?</p>
          <p className="text-gray-600 mb-3">Call 855-559-1700 for a free answer from a licensed Medicare broker. No pressure, no obligation.</p>
          <a href="tel:8555591700" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg transition">
            Call 855-559-1700
          </a>
        </div>
      </div>
    </>
  );
}
`;

  const hubDir = repoPath("app", "medicare-faq");
  fs.mkdirSync(hubDir, { recursive: true });
  fs.writeFileSync(path.join(hubDir, "page.tsx"), content, "utf8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const serperApiKey = process.env.SERPER_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (!serperApiKey) throw new Error("SERPER_API_KEY env var required");
  if (!anthropicKey) throw new Error("ANTHROPIC_API_KEY env var required");

  const client = new Anthropic();
  const today = new Date().toISOString().split("T")[0];

  // Load existing FAQ index
  const indexPath = repoPath("faq-index.json");
  const existing = fs.existsSync(indexPath)
    ? JSON.parse(fs.readFileSync(indexPath, "utf8"))
    : { entries: [] };

  const existingSlugs = new Set(existing.entries.map((e) => e.slug));
  const newEntries = [];

  // Log file
  const logPath = repoPath("faq-build-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\tquery\tquestion\tslug\tstatus\n", "utf8");
  }

  const logRows = [];

  // Collect PAA questions from all seed queries
  const allQuestions = new Map(); // slug -> question (deduplicated)

  console.log(`Fetching PAA questions for ${SEED_QUERIES.length} queries...`);
  for (const query of SEED_QUERIES) {
    try {
      const questions = await getPAAQuestions(query, serperApiKey);
      console.log(`  "${query}" → ${questions.length} PAA questions`);
      for (const q of questions) {
        const slug = slugify(q);
        if (slug.length > 10 && !allQuestions.has(slug)) {
          allQuestions.set(slug, q);
        }
      }
      await new Promise((r) => setTimeout(r, 400));
    } catch (err) {
      console.error(`  Error fetching PAA for "${query}": ${err.message}`);
    }
  }

  console.log(`\nTotal unique PAA questions: ${allQuestions.size}`);
  console.log(`Already built: ${existingSlugs.size}`);

  // Process new questions only
  let built = 0;
  let skipped = 0;

  for (const [slug, question] of allQuestions) {
    if (existingSlugs.has(slug)) {
      skipped++;
      continue;
    }

    // Cap at 20 new pages per run to control API costs
    if (built >= 20) {
      console.log(`\nCap of 20 new pages reached — remaining questions queued for next run`);
      break;
    }

    console.log(`\nBuilding: "${question}"`);

    try {
      const answer = await generateAnswer(question, client, serperApiKey);
      writeFaqPage(question, slug, answer);
      newEntries.push({ slug, question, date: today });
      logRows.push([today, "paa", question, slug, "built"].join("\t"));
      built++;
      console.log(`  Written: /medicare-faq/${slug}/`);
    } catch (err) {
      console.error(`  Error generating answer: ${err.message}`);
      logRows.push([today, "paa", question, slug, `error:${err.message}`].join("\t"));
    }
  }

  // Update index and regenerate hub
  if (newEntries.length > 0) {
    existing.entries.push(...newEntries);
    fs.writeFileSync(indexPath, JSON.stringify(existing, null, 2), "utf8");
    writeHubPage(existing.entries);
    console.log(`\nHub page regenerated with ${existing.entries.length} total questions`);
  }

  if (logRows.length > 0) {
    fs.appendFileSync(logPath, logRows.join("\n") + "\n", "utf8");
  }

  console.log(`\nFAQ build complete: ${built} new pages, ${skipped} skipped (already exist)`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error("build-faq-pages failed:", err.message);
    process.exit(1);
  });
}

module.exports = { writeFaqPage, jsxText, js };
