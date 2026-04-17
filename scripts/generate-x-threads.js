/**
 * generate-x-threads.js
 * Generates long-form X (Twitter) threads, Threads posts, and LinkedIn articles.
 *
 * Strategy (Edward Sturm / Long-Form X Threads Prompt):
 *  - Bold/contrarian hook grabbing attention
 *  - Personal moment/story creating emotional tension early
 *  - Mini-course structure with short punchy tweets
 *  - Clear takeaways, examples, actionable steps
 *  - Clickbait-style cliffhangrs between tweets
 *  - No emojis, no fluff
 *  - Sales pitch only in last 10-20%
 *  - Post in markdown format
 *
 * Each run:
 *  1. Picks the next topic from the rotation list
 *  2. Generates X thread (8-12 tweets), Threads version, LinkedIn article
 *  3. Saves to x-threads/YYYY-MM-DD.md
 *  4. Tracks state in x-threads-state.json
 *  5. Logs to x-threads-log.tsv
 *
 * Run: node scripts/generate-x-threads.js
 */

require("dotenv").config({ path: __dirname + "/.env" });
const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Topic rotation -- Medicare topics that work for long-form threads
// The loop cycles through these in order, repeating after the last
// ---------------------------------------------------------------------------
const TOPIC_ROTATION = [
  "The hidden cost of staying with the same Medicare Supplement carrier for 5+ years",
  "What your Medicare Advantage plan isn't telling you about network restrictions",
  "I'm a Medicare broker. Here's what I wish every person turning 65 knew.",
  "Plan G is the same at every carrier. Here's proof -- and how to find the cheapest one.",
  "The biggest Medicare enrollment mistake I see (and it costs people $1,000+/year)",
  "Why Medicare Supplement rates go up every year -- and the one move that stops the bleeding",
  "Most people don't know Medicare brokers are free. Here's how the business actually works.",
  "I've helped hundreds of NJ residents switch Medicare carriers. Here's what surprised me.",
  "The 6 things Medicare doesn't cover that shock people the most",
  "Medicare open enrollment is NOT what you think it is. Let me explain.",
  "Your Medicare Supplement plan letter matters more than the carrier name. Here's why.",
  "How I save my clients $50-100/month on Medicare Supplement -- without changing their coverage",
];

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

/** Get state (persisted in x-threads-state.json) */
function getState() {
  const statePath = repoPath("x-threads-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { topicIndex: 0, count: 0 };
}

function saveState(state) {
  fs.writeFileSync(
    repoPath("x-threads-state.json"),
    JSON.stringify(state, null, 2),
    "utf8"
  );
}

// ---------------------------------------------------------------------------
// Generate X Thread (8-12 tweets, max 280 chars each)
// ---------------------------------------------------------------------------
async function generateXThread(topic, client) {
  const prompt = `You are Anthony Orner, an independent Medicare broker in New Jersey (NPI 1902584006), licensed in NJ and 34 states. You run EasyKind Medicare (medicareyourself.com). Phone: 855-559-1700.

TOPIC: "${topic}"

Write an X (Twitter) thread of 8-12 tweets on this topic.

EDWARD STURM'S THREAD FORMULA (follow exactly):
- Tweet 1: Bold, contrarian, or surprising hook. Must stop the scroll. No filler.
- Tweet 2: Personal story or moment from your experience as a Medicare broker. Create emotional tension.
- Tweets 3-9: Mini-course structure. Each tweet teaches one actionable insight. Each tweet must stand alone and make sense if read in isolation.
- Between tweets: Use cliffhanger transitions like "But here's the thing nobody talks about -->" or "This is where it gets interesting -->" to pull readers forward.
- Tweet 10-11: Soft CTA. Mention medicareyourself.com naturally, as a resource, not a sales pitch.
- Final tweet: Clear CTA with phone number 855-559-1700. Frame as "if you want help" not "call now."

STRICT RULES:
- Each tweet MUST be 280 characters or fewer
- ZERO emojis
- ZERO filler words ("just," "really," "very," "actually," "honestly")
- No hashtags
- No marketing speak
- Must be genuinely educational, not marketing dressed as education
- 2026 Medicare facts: Part B premium $185/mo, Part B deductible $257
- Sales pitch ONLY in last 10-20% of the thread
- Write from first person as Anthony

FORMAT: Number each tweet. Write one tweet per line. Put a blank line between tweets. Do not add any commentary before or after the thread.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  return msg.content[0].text.trim();
}

// ---------------------------------------------------------------------------
// Generate Threads version (longer posts OK, up to 500 chars each)
// ---------------------------------------------------------------------------
async function generateThreadsVersion(topic, xThread, client) {
  const prompt = `You are Anthony Orner, an independent Medicare broker in New Jersey (NPI 1902584006), licensed in NJ and 34 states. You run EasyKind Medicare (medicareyourself.com). Phone: 855-559-1700.

TOPIC: "${topic}"

Below is an X thread on this topic. Adapt it for Meta's Threads platform.

X THREAD FOR REFERENCE:
${xThread}

THREADS ADAPTATION RULES:
- Posts can be up to 500 characters each (longer than X's 280)
- Expand on key points -- add more detail, examples, or explanation where the 280-char limit forced brevity
- Keep the same structure: bold hook, personal story, mini-course, soft CTA, final CTA
- Keep the same cliffhanger transitions between posts
- ZERO emojis
- ZERO filler words
- No hashtags
- Sales pitch ONLY in last 10-20%
- Write 8-12 posts
- 2026 Medicare facts: Part B premium $185/mo, Part B deductible $257

FORMAT: Number each post. Write one post per section. Put a blank line between posts. Do not add any commentary before or after.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 3072,
    messages: [{ role: "user", content: prompt }],
  });

  return msg.content[0].text.trim();
}

// ---------------------------------------------------------------------------
// Generate LinkedIn article version (single long-form post)
// ---------------------------------------------------------------------------
async function generateLinkedInArticle(topic, xThread, client) {
  const prompt = `You are Anthony Orner, an independent Medicare broker in New Jersey (NPI 1902584006), licensed in NJ and 34 states. You run EasyKind Medicare (medicareyourself.com). Phone: 855-559-1700.

TOPIC: "${topic}"

Below is an X thread on this topic. Turn it into a single LinkedIn article.

X THREAD FOR REFERENCE:
${xThread}

LINKEDIN ARTICLE RULES:
- 500-800 words, single long-form post
- Professional tone but still personal and direct
- Open with the same bold hook from the thread
- Include the personal story/moment early
- Expand the mini-course points into flowing paragraphs with more depth
- Add context and nuance that short tweets couldn't carry
- Close with a clear but professional CTA: mention medicareyourself.com and 855-559-1700
- ZERO emojis
- ZERO filler words ("just," "really," "very," "actually," "honestly")
- No marketing speak or LinkedIn buzzwords ("thrilled to announce," "game-changer," "excited to share")
- Must be genuinely educational
- 2026 Medicare facts: Part B premium $185/mo, Part B deductible $257
- Sales pitch ONLY in the final paragraph
- Write from first person as Anthony

FORMAT: Write the article as continuous prose with paragraph breaks. No numbered lists unless they genuinely serve the content. Do not add any commentary before or after the article.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  return msg.content[0].text.trim();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY env var required");

  const client = new Anthropic();
  const today = new Date().toISOString().split("T")[0];
  const state = getState();

  const topic = TOPIC_ROTATION[state.topicIndex % TOPIC_ROTATION.length];

  console.log(`Generating X thread content #${state.count + 1}`);
  console.log(`  Topic: "${topic}"`);

  // Step 1: Generate X thread (primary content)
  console.log("\n  [1/3] Generating X thread (8-12 tweets)...");
  const xThread = await generateXThread(topic, client);

  // Step 2: Generate Threads version (adapted from X thread)
  console.log("  [2/3] Generating Threads version...");
  const threadsVersion = await generateThreadsVersion(topic, xThread, client);

  // Step 3: Generate LinkedIn article (adapted from X thread)
  console.log("  [3/3] Generating LinkedIn article...");
  const linkedInArticle = await generateLinkedInArticle(topic, xThread, client);

  // Save to x-threads/
  const dir = repoPath("x-threads");
  fs.mkdirSync(dir, { recursive: true });

  // Avoid overwriting if run twice on same day
  let filename = `${today}.md`;
  let filepath = path.join(dir, filename);
  let seq = 1;
  while (fs.existsSync(filepath)) {
    filename = `${today}-${seq}.md`;
    filepath = path.join(dir, filename);
    seq++;
  }

  const fileContent = `# X Thread Content -- ${today}
**Topic:** ${topic}
**Topic index:** ${state.topicIndex % TOPIC_ROTATION.length + 1} of ${TOPIC_ROTATION.length}

---

## X Thread (Twitter)
*Copy each numbered tweet as a separate post in the thread. Max 280 chars each.*

${xThread}

---

## Threads (Meta)
*Copy each numbered post as a separate reply in the thread. Max 500 chars each.*

${threadsVersion}

---

## LinkedIn Article
*Copy as a single post on LinkedIn.*

${linkedInArticle}

---

*Draft generated by EasyKind Medicare autoresearch loop. Review before publishing.*
*Next topic in rotation: ${TOPIC_ROTATION[(state.topicIndex + 1) % TOPIC_ROTATION.length]}*
`;

  fs.writeFileSync(filepath, fileContent, "utf8");
  console.log(`\nContent saved: x-threads/${filename}`);

  // Update state
  saveState({
    topicIndex: (state.topicIndex + 1) % TOPIC_ROTATION.length,
    count: state.count + 1,
    lastRun: today,
    lastTopic: topic,
  });

  // Log
  const logPath = repoPath("x-threads-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\ttopic\tfile\n", "utf8");
  }
  fs.appendFileSync(
    logPath,
    [today, topic, filename].join("\t") + "\n",
    "utf8"
  );

  console.log(`\n${"=".repeat(60)}`);
  console.log(`NEXT STEPS:`);
  console.log(`  1. Review x-threads/${filename}`);
  console.log(`  2. Post X thread on twitter.com/compose/tweet`);
  console.log(`  3. Post Threads version on threads.net`);
  console.log(`  4. Post LinkedIn article on linkedin.com`);
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("generate-x-threads failed:", err.message);
  process.exit(1);
});
