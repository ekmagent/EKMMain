/**
 * expert-quotes.js
 * Generates ready-to-submit expert quotes for link building platforms.
 *
 * Strategy (Edward Sturm / Module 12 - Link Building):
 *  - Sign up to feature.com, source-of-sources.com, qwoted.com, helpab2bwriter.com
 *  - Submit 1-2 expert quotes per day
 *  - 1 link per 5-10 submissions = 6-12 backlinks per month
 *  - Quote format: name + title + company + link
 *
 * Each run:
 *  1. Picks 2-3 topics from the rotation list (advances state)
 *  2. Generates copy-paste-ready expert quotes from Anthony Orner
 *  3. Saves to expert-quotes/YYYY-MM-DD.md
 *  4. Tracks state in expert-quotes-state.json
 *  5. Logs to expert-quotes-log.tsv
 *
 * Run: node scripts/expert-quotes.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Medicare topics journalists commonly need expert quotes on
// The loop cycles through these in order, picking 2-3 per run
// ---------------------------------------------------------------------------
const QUOTE_TOPICS = [
  "Medicare enrollment deadlines and penalties",
  "Medicare Supplement vs Medicare Advantage choosing",
  "Medicare costs and premium increases for 2026",
  "How independent brokers help Medicare beneficiaries",
  "Medicare coverage gaps and how to fill them",
  "Turning 65 and Medicare enrollment decisions",
  "Medicare Supplement rate increases and switching carriers",
  "Medicare and prescription drug coverage (Part D)",
  "Medicare fraud prevention tips",
  "New Medicare changes and policy updates",
  "Medicare for people still working at 65",
  "Medicare and pre-existing conditions",
  "How Medicare works with employer insurance",
  "Medicare open enrollment mistakes to avoid",
  "Medicare coverage for dental, vision, hearing",
];

// ---------------------------------------------------------------------------
// Platforms to submit quotes to
// ---------------------------------------------------------------------------
const PLATFORMS = [
  { name: "feature.com", url: "https://www.feature.com", note: "formerly Featured.com - browse queries in your expertise area" },
  { name: "Source of Sources", url: "https://www.source-of-sources.com", note: "sign up as a source, respond to journalist queries" },
  { name: "Qwoted", url: "https://www.qwoted.com", note: "create expert profile, respond to media pitches" },
  { name: "Help a B2B Writer", url: "https://www.helpab2bwriter.com", note: "respond to source requests from B2B writers" },
];

const BIO_LINE = "Anthony Orner is a licensed independent Medicare insurance broker and founder of EasyKind Medicare (medicareyourself.com), licensed in New Jersey and 34 states.";

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

/** Get state (topic index, count, etc.) */
function getState() {
  const statePath = repoPath("expert-quotes-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { topicIndex: 0, count: 0 };
}

function saveState(state) {
  fs.writeFileSync(repoPath("expert-quotes-state.json"), JSON.stringify(state, null, 2), "utf8");
}

/** Pick 2-3 topics starting from the current index */
function pickTopics(startIndex) {
  const count = (startIndex % 3 === 0) ? 3 : 2; // alternate between 2 and 3
  const topics = [];
  for (let i = 0; i < count; i++) {
    topics.push(QUOTE_TOPICS[(startIndex + i) % QUOTE_TOPICS.length]);
  }
  return topics;
}

async function generateQuotes(topics, client) {
  const topicList = topics.map((t, i) => `${i + 1}. ${t}`).join("\n");

  const prompt = `You are generating expert quotes for Anthony Orner to submit to journalist query platforms (feature.com, Source of Sources, Qwoted, Help a B2B Writer) for link building.

EXPERT BIO: ${BIO_LINE}

TOPICS TO WRITE QUOTES FOR:
${topicList}

For EACH topic, generate:
1. A realistic journalist headline/query that a reporter might post (e.g., "What should people turning 65 know about Medicare enrollment?")
2. A 2-3 sentence expert quote from Anthony Orner that is:
   - Factual and accurate (use 2026 Medicare facts: Part B premium $185/mo, Part B deductible $257)
   - Authoritative but approachable
   - Quotable — sounds like a real person talking to a reporter, not marketing copy
   - Includes one specific, useful detail that makes the quote stand out
3. The attribution line exactly as: Anthony Orner, Licensed Independent Medicare Broker, EasyKind Medicare (medicareyourself.com)

RULES:
- Do NOT use em dashes
- Do NOT use words like "navigate," "crucial," "comprehensive," "landscape," "empower"
- Do NOT make claims about specific state regulations you cannot verify
- Keep each quote to 2-3 sentences maximum — journalists want concise quotes
- Each quote should be different in tone and structure
- Sound like a real insurance professional, not a press release
- Include at least one concrete number, deadline, or specific fact per quote

Format each quote as:

---
### Topic: [topic name]
**Journalist query:** "[realistic headline/question]"

**Quote:**
"[2-3 sentence expert quote]"

**Attribution:** Anthony Orner, Licensed Independent Medicare Broker, EasyKind Medicare (medicareyourself.com)

**Bio for profile:** ${BIO_LINE}
---

Generate all ${topics.length} quotes now:`;

  const msg = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  return msg.content[0].text.trim();
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY env var required");

  const client = new Anthropic();
  const today = new Date().toISOString().split("T")[0];
  const state = getState();

  const topics = pickTopics(state.topicIndex);

  console.log(`Generating ${topics.length} expert quotes (batch #${state.count + 1})`);
  topics.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));

  const quotes = await generateQuotes(topics, client);

  // Build the output file
  const platformSection = PLATFORMS.map(
    (p) => `- **${p.name}** — ${p.url} (${p.note})`
  ).join("\n");

  const fileContent = `# Expert Quotes — ${today}
**Batch #${state.count + 1}** | ${topics.length} quotes generated
**Submit 1-2 per day to the platforms below**

## Target Platforms
${platformSection}

## Submission Checklist
${topics.map((t) => `- [ ] "${t}" — submitted to: ___________`).join("\n")}

## Quotes (copy-paste ready)

${quotes}

---

## How to Submit
1. Log in to one of the platforms above
2. Browse open journalist queries related to Medicare, insurance, or personal finance
3. If you find a matching query, paste the relevant quote above (edit to fit the specific question)
4. If no matching query exists, save the quote for later or submit as a general expert source pitch
5. Track which platform you submitted to in the checklist above

**Expected ROI:** 1 backlink per 5-10 submissions = 6-12 links/month at 1-2 submissions/day

---
*Generated by EasyKind Medicare autoresearch loop. Review before submitting.*
*Next topics: ${QUOTE_TOPICS[(state.topicIndex + topics.length) % QUOTE_TOPICS.length]}, ${QUOTE_TOPICS[(state.topicIndex + topics.length + 1) % QUOTE_TOPICS.length]}*
`;

  // Save to expert-quotes/
  const dir = repoPath("expert-quotes");
  fs.mkdirSync(dir, { recursive: true });

  let filename = `${today}.md`;
  let filepath = path.join(dir, filename);
  let seq = 1;
  while (fs.existsSync(filepath)) {
    filename = `${today}-${seq}.md`;
    filepath = path.join(dir, filename);
    seq++;
  }

  fs.writeFileSync(filepath, fileContent, "utf8");
  console.log(`\nQuotes saved: expert-quotes/${filename}`);

  // Update state
  const newTopicIndex = (state.topicIndex + topics.length) % QUOTE_TOPICS.length;
  saveState({
    topicIndex: newTopicIndex,
    count: state.count + 1,
    lastRun: today,
    lastTopics: topics,
  });

  // Log
  const logPath = repoPath("expert-quotes-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\tbatch\ttopics\tfile\n", "utf8");
  }
  fs.appendFileSync(
    logPath,
    [today, state.count + 1, topics.join(" | "), filename].join("\t") + "\n",
    "utf8"
  );

  console.log(`\n${"=".repeat(60)}`);
  console.log("NEXT STEPS:");
  console.log(`  1. Review expert-quotes/${filename}`);
  console.log("  2. Log in to one of these platforms:");
  PLATFORMS.forEach((p) => console.log(`     - ${p.name}: ${p.url}`));
  console.log("  3. Find matching journalist queries and paste your quote");
  console.log("  4. Submit 1-2 quotes today, repeat tomorrow");
  console.log(`  5. Track submissions in the checklist inside the file`);
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("expert-quotes failed:", err.message);
  process.exit(1);
});
