/**
 * generate-video-seo.js
 * Generates keyword-first video titles, descriptions, and scripts for
 * YouTube, TikTok, and Instagram Reels.
 *
 * Strategy (Edward Sturm / Module 11 — Ranking Without Using a Website):
 *  - Create 1 video per bottom-of-funnel keyword you target
 *  - Title: keyword at BEGINNING (first 3-5 words), then benefit, then brand
 *  - Description: keyword at BEGINNING (first sentence)
 *  - Post to YouTube, TikTok, Instagram Reels
 *
 * Each run:
 *  1. Picks 2-3 keywords from the rotation that haven't been done yet
 *  2. Generates YouTube title, description, 60-90s script, TikTok caption, hashtags
 *  3. Saves to video-scripts/YYYY-MM-DD.md
 *  4. Tracks state in video-seo-state.json
 *  5. Logs to video-seo-log.tsv
 *
 * Run: node scripts/generate-video-seo.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Keyword list — bottom-of-funnel keywords the site targets
// ---------------------------------------------------------------------------
const KEYWORDS = [
  "Medicare Supplement Plan G cost",
  "switch Medicare supplement carriers",
  "Medicare broker New Jersey",
  "Medicare supplement vs Medicare Advantage",
  "Medicare supplement turning 65",
  "best Medicare supplement companies",
  "Medicare supplement rate increase",
  "Medicare supplement plan G vs plan N",
  "Medicare supplement New Jersey",
  "how to compare Medicare supplement plans",
  "Medicare supplement open enrollment",
  "Medicare supplement guaranteed issue",
];

// Keywords that are too competitive for web SERP (high DA across the board)
// but can still rank on YouTube. Edward Module 07-08: "Make a YouTube short
// targeting that keyword — easier to rank fast with YouTube content."
const YOUTUBE_PRIORITY_KEYWORDS = [
  "best Medicare supplement plans",
  "Medicare supplement vs Medicare Advantage",
  "Medicare explained",
  "Medicare enrollment",
  "Medicare Part D plans",
  "Medicare supplement insurance",
  "how to choose Medicare plan",
  "Medicare open enrollment 2026",
  "Medicare supplement plan comparison",
  "what is Medicare Advantage",
];

// How many keywords to generate per run
const KEYWORDS_PER_RUN = 3;

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

// ---------------------------------------------------------------------------
// State management
// ---------------------------------------------------------------------------
function getState() {
  const statePath = repoPath("video-seo-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { completedKeywords: [], rotationIndex: 0, totalRuns: 0 };
}

function saveState(state) {
  fs.writeFileSync(
    repoPath("video-seo-state.json"),
    JSON.stringify(state, null, 2),
    "utf8"
  );
}

/** Pick the next batch of keywords that haven't been done yet.
 *  Prioritizes YOUTUBE_PRIORITY_KEYWORDS first (Edward 07-08:
 *  keywords too competitive for web but rankable on YouTube). */
function pickKeywords(state) {
  const allKeywords = [...new Set([...YOUTUBE_PRIORITY_KEYWORDS, ...KEYWORDS])];
  const remaining = allKeywords.filter(
    (kw) => !state.completedKeywords.includes(kw)
  );

  // If all keywords are done, reset and start over
  if (remaining.length === 0) {
    console.log("All keywords completed — resetting rotation.");
    state.completedKeywords = [];
    return allKeywords.slice(0, KEYWORDS_PER_RUN);
  }

  // Prioritize YouTube-priority (too-competitive-for-web) keywords first
  const priorityRemaining = remaining.filter((kw) => YOUTUBE_PRIORITY_KEYWORDS.includes(kw));
  const regularRemaining = remaining.filter((kw) => !YOUTUBE_PRIORITY_KEYWORDS.includes(kw));

  const batch = [...priorityRemaining, ...regularRemaining].slice(0, KEYWORDS_PER_RUN);

  // Log which are YouTube-priority
  for (const kw of batch) {
    if (YOUTUBE_PRIORITY_KEYWORDS.includes(kw)) {
      console.log(`  [YouTube Priority] "${kw}" — too competitive for web, targeting video SERP (Edward 07-08)`);
    }
  }

  return batch;
}

// ---------------------------------------------------------------------------
// Claude generation
// ---------------------------------------------------------------------------
async function generateVideoContent(keyword, client) {
  const prompt = `You are a video SEO content strategist for EasyKind Medicare (medicareyourself.com), run by Anthony Orner — a licensed independent Medicare broker in NJ and 34 states. Phone: 855-559-1700. The service is free to consumers (brokers are paid by carriers).

TARGET KEYWORD: "${keyword}"

Generate ALL of the following for this keyword. Follow the rules exactly.

---

## 1. YOUTUBE TITLE
Rules:
- Start with the exact target keyword in the first 3-5 words
- Then add a benefit or hook
- End with brand if space allows (EasyKind Medicare)
- 60 characters max
- No clickbait, no ALL CAPS

## 2. YOUTUBE DESCRIPTION
Rules:
- First sentence MUST start with the exact target keyword
- 300-500 characters total
- Include medicareyourself.com link and 855-559-1700
- Include a call to action (free consultation)
- Add 3-5 relevant keywords naturally in the body

## 3. VIDEO SCRIPT (60-90 seconds, talking head)
This is for Anthony to record himself talking to camera. Write it as a natural spoken script, NOT a teleprompter read. Format:

**[0:00-0:05] HOOK**
(Grab attention with the keyword topic — question or surprising fact)

**[0:05-0:20] THE PROBLEM**
(What confusion or pain point does this keyword address?)

**[0:20-0:50] THE ANSWER**
(Give the actual useful information — be specific, not vague)

**[0:50-1:05] THE EASY NEXT STEP**
(Mention EasyKind Medicare, free service, 855-559-1700, medicareyourself.com)

**[1:05-1:15] CTA**
(Subscribe, like, drop a question in comments)

Rules for the script:
- Write the way a real person talks, not corporate speak
- Use short sentences
- Do NOT use "navigate," "crucial," "comprehensive," "landscape," "empower"
- Include specific facts where possible (Part B = $185/mo in 2026, Part B deductible = $257)
- Anthony should sound helpful and knowledgeable, not salesy
- First-person perspective — Anthony is speaking

## 4. TIKTOK / REELS CAPTION
Rules:
- Start with the target keyword
- 150 characters max
- Punchy, conversational
- Include a hook or question

## 5. HASHTAGS
- Exactly 5 hashtags
- Mix of broad (#Medicare) and specific (#MedicareSupplement)
- Include #EasyKindMedicare

---

Output everything in clean markdown with the section headers above. Do NOT wrap the entire output in a code block.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-6",
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

  const keywords = pickKeywords(state);
  console.log(`Video SEO run #${state.totalRuns + 1} — ${today}`);
  console.log(`Generating content for ${keywords.length} keywords:`);
  keywords.forEach((kw) => console.log(`  - "${kw}"`));
  console.log();

  // Generate content for each keyword
  const sections = [];
  for (const keyword of keywords) {
    console.log(`Generating video content for: "${keyword}" ...`);
    const content = await generateVideoContent(keyword, client);
    sections.push({ keyword, content });
    console.log(`  Done.`);
  }

  // Build the output markdown
  const outputLines = [
    `# Video SEO Scripts — ${today}`,
    ``,
    `> Generated by the EasyKind Medicare autoresearch loop.`,
    `> Anthony: record these as talking-head videos, then post to YouTube, TikTok, and Instagram Reels.`,
    ``,
    `---`,
    ``,
  ];

  for (const { keyword, content } of sections) {
    outputLines.push(`# Keyword: "${keyword}"`);
    outputLines.push(``);
    outputLines.push(content);
    outputLines.push(``);
    outputLines.push(`---`);
    outputLines.push(``);
  }

  outputLines.push(`## Posting Checklist`);
  outputLines.push(``);
  outputLines.push(`For each video above:`);
  outputLines.push(``);
  outputLines.push(`- [ ] Record talking-head video (60-90 seconds)`);
  outputLines.push(`- [ ] Upload to YouTube with the title and description above`);
  outputLines.push(`- [ ] Post to TikTok with the TikTok caption and hashtags`);
  outputLines.push(`- [ ] Post to Instagram Reels with the TikTok caption and hashtags`);
  outputLines.push(`- [ ] Add YouTube link to the matching page on medicareyourself.com`);
  outputLines.push(``);
  outputLines.push(
    `*Next keywords in rotation: ${KEYWORDS.filter(
      (kw) => !state.completedKeywords.includes(kw) && !keywords.includes(kw)
    )
      .slice(0, 3)
      .map((kw) => `"${kw}"`)
      .join(", ") || "rotation will reset next run"}*`
  );
  outputLines.push(``);

  const markdown = outputLines.join("\n");

  // Save to video-scripts/
  const dir = repoPath("video-scripts");
  fs.mkdirSync(dir, { recursive: true });

  let filename = `${today}.md`;
  let filepath = path.join(dir, filename);
  let seq = 1;
  while (fs.existsSync(filepath)) {
    filename = `${today}-${seq}.md`;
    filepath = path.join(dir, filename);
    seq++;
  }

  fs.writeFileSync(filepath, markdown, "utf8");
  console.log(`\nVideo scripts saved: video-scripts/${filename}`);

  // Update state
  const updatedCompleted = [...state.completedKeywords, ...keywords];
  saveState({
    completedKeywords: updatedCompleted,
    rotationIndex: (state.rotationIndex + keywords.length) % KEYWORDS.length,
    totalRuns: state.totalRuns + 1,
    lastRun: today,
    lastKeywords: keywords,
  });

  // Log to TSV
  const logPath = repoPath("video-seo-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "date\tkeywords\tfile\tkeyword_count\n",
      "utf8"
    );
  }
  fs.appendFileSync(
    logPath,
    [today, keywords.join("; "), filename, keywords.length].join("\t") + "\n",
    "utf8"
  );

  console.log(`\n${"=".repeat(60)}`);
  console.log(`NEXT STEPS:`);
  console.log(`  1. Open video-scripts/${filename}`);
  console.log(`  2. Record each video (60-90 sec talking head)`);
  console.log(`  3. Upload to YouTube / TikTok / Reels`);
  console.log(`  4. Copy the YouTube link to the matching site page`);
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("generate-video-seo failed:", err.message);
  process.exit(1);
});
