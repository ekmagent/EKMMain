/**
 * generate-competitor-videos.js
 * Generates video content targeting competitor Medicare supplement brand names.
 *
 * Strategy (Edward Sturm — "Target Competitor Brand Names Using Video"):
 *  - Free alternative to paying for competitor-targeted Google Ads
 *  - Google prioritizes user-generated video regardless of view count
 *  - Video SEO success factors: Relevance (brand at beginning), Recency,
 *    Trustworthiness, Conciseness
 *  - Post through YouTube mobile app
 *  - Use titles like "[Competitor Name] Alternative - [Your Advantage]"
 *  - Create How-To videos positioning your company as alternative
 *  - Release to every platform for maximum coverage
 *
 * Each run:
 *  1. Picks the next 2 competitors from the rotation list
 *  2. Asks Claude to generate YouTube Shorts title, description, 45-60s video
 *     script, TikTok caption, and Instagram Reels caption for each
 *  3. Saves to competitor-videos/YYYY-MM-DD.md
 *  4. You record the videos and post — takes ~30 minutes total
 *
 * Run: node scripts/generate-competitor-videos.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Competitor brand rotation — large companies/brands people search for
// Only brands with significant search volume; NOT individual agents
// ---------------------------------------------------------------------------
const COMPETITORS = [
  "AARP Medicare Supplement",
  "Mutual of Omaha Medicare Supplement",
  "Cigna Medicare Supplement",
  "Aetna Medicare Supplement",
  "Blue Cross Medicare Supplement",
  "Humana Medicare Supplement",
  "United American Medicare Supplement",
  "Colonial Penn Medicare",
  "Bankers Life Medicare",
  "Globe Life Medicare",
];

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

/** Get state (which competitor index we're on) */
function getState() {
  const statePath = repoPath("competitor-videos-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { competitorIndex: 0, count: 0 };
}

function saveState(state) {
  fs.writeFileSync(
    repoPath("competitor-videos-state.json"),
    JSON.stringify(state, null, 2),
    "utf8"
  );
}

async function generateVideoContent(competitor, client) {
  const prompt = `You are creating short-form video content for EasyKind Medicare (medicareyourself.com), an independent Medicare insurance brokerage run by Anthony Orner, licensed in NJ and 34 states. Phone: 855-559-1700.

TARGET COMPETITOR: "${competitor}"

Generate ALL of the following for a YouTube Shorts video targeting people searching for "${competitor}":

---

## 1. YouTube Shorts Title
- Format: "[Competitor] Medicare Supplement Alternative | Compare Rates Free | EasyKind Medicare"
- The competitor brand name MUST appear at the very beginning
- Keep under 60 characters total (truncate "EasyKind Medicare" if needed to fit)
- Keyword-first for SEO

## 2. YouTube Description
- Start with the competitor brand name in the first sentence
- Explain why independent brokers compare ALL carriers including ${competitor}
- Include medicareyourself.com and 855-559-1700
- 3-5 sentences max
- End with 5 relevant hashtags

## 3. Video Script (45-60 seconds)
- Write a script for Anthony to read on camera
- Opening hook (first 3 seconds): Address the viewer directly about ${competitor}
- Frame: "If you have ${competitor}, here's how to check if you're getting the best rate"
- Position as helpful comparison, NOT attacking the competitor
- Key message: "Your ${competitor} Plan G covers the exact same benefits as Plan G from any other carrier"
- Explain that Plan G is federally standardized — same coverage everywhere, but rates vary
- Position EasyKind Medicare as comparing ALL carriers including ${competitor}
- Focus on rate comparison, not quality
- CTA: free rate comparison at medicareyourself.com or call 855-559-1700
- Include natural pauses / delivery notes in brackets
- Keep conversational, not scripted-sounding

## 4. TikTok Caption
- Short, punchy, 1-2 sentences
- Include exactly 4 hashtags

## 5. Instagram Reels Caption
- Slightly longer, 2-3 sentences
- NO hashtags (Instagram algorithm prefers no hashtags in Reels)

---

RULES:
- NEVER disparage ${competitor} — always respectful
- Position as "we compare ALL carriers including ${competitor}"
- Focus on rate comparison, not quality differences
- Emphasize Plan G is federally standardized — same coverage everywhere
- Include: "Your ${competitor} Plan G covers the exact same benefits as Plan G from any other carrier"
- CTA: free rate comparison at medicareyourself.com or 855-559-1700
- Do NOT use em dashes
- Do NOT use words like "navigate," "crucial," "comprehensive," "landscape"
- Sound natural and conversational, like a real person talking to camera

Generate all 5 sections now:`;

  const msg = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1500,
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

  // Pick 2 competitors per run
  const idx1 = state.competitorIndex % COMPETITORS.length;
  const idx2 = (state.competitorIndex + 1) % COMPETITORS.length;
  const picks = [COMPETITORS[idx1], COMPETITORS[idx2]];

  console.log(`Generating competitor video content (batch #${state.count + 1})`);
  console.log(`  Competitor 1: ${picks[0]}`);
  console.log(`  Competitor 2: ${picks[1]}`);

  // Generate content for both competitors
  const results = [];
  for (const competitor of picks) {
    console.log(`\n  Generating content for "${competitor}"...`);
    const content = await generateVideoContent(competitor, client);
    results.push({ competitor, content });
  }

  // Save to competitor-videos/
  const dir = repoPath("competitor-videos");
  fs.mkdirSync(dir, { recursive: true });

  let filename = `${today}.md`;
  let filepath = path.join(dir, filename);
  let seq = 1;
  while (fs.existsSync(filepath)) {
    filename = `${today}-${seq}.md`;
    filepath = path.join(dir, filename);
    seq++;
  }

  const nextIdx = (state.competitorIndex + 2) % COMPETITORS.length;
  const nextCompetitors = [
    COMPETITORS[nextIdx],
    COMPETITORS[(nextIdx + 1) % COMPETITORS.length],
  ];

  let fileContent = `# Competitor Video Content — ${today}
**Competitors targeted:** ${picks.join(", ")}
**Post to:** YouTube Shorts (mobile app), TikTok, Instagram Reels

---

`;

  for (const { competitor, content } of results) {
    fileContent += `## ${competitor}

${content}

---

`;
  }

  fileContent += `*Draft generated by EasyKind Medicare autoresearch loop. Review before recording.*
*Next competitors in rotation: ${nextCompetitors.join(", ")}*

## Posting Checklist
- [ ] Record Video 1 (${picks[0]}) — 45-60 seconds vertical
- [ ] Record Video 2 (${picks[1]}) — 45-60 seconds vertical
- [ ] Upload to YouTube Shorts via mobile app
- [ ] Post to TikTok with caption
- [ ] Post to Instagram Reels with caption
- [ ] Cross-post to Facebook Reels
`;

  fs.writeFileSync(filepath, fileContent, "utf8");
  console.log(`\nVideo content saved: competitor-videos/${filename}`);

  // Update state
  saveState({
    competitorIndex: (state.competitorIndex + 2) % COMPETITORS.length,
    count: state.count + 1,
    lastRun: today,
  });

  // Log
  const logPath = repoPath("competitor-videos-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "date\tcompetitor_1\tcompetitor_2\tfile\n",
      "utf8"
    );
  }
  fs.appendFileSync(
    logPath,
    [today, picks[0], picks[1], filename].join("\t") + "\n",
    "utf8"
  );

  console.log(`\n${"=".repeat(60)}`);
  console.log(`NEXT STEPS:`);
  console.log(`  1. Review competitor-videos/${filename}`);
  console.log(`  2. Record both videos (vertical, 45-60 sec each)`);
  console.log(`  3. Upload to YouTube Shorts via mobile app`);
  console.log(`  4. Cross-post to TikTok + Instagram Reels + Facebook Reels`);
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("generate-competitor-videos failed:", err.message);
  process.exit(1);
});
