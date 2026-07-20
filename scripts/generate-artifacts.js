/**
 * generate-artifacts.js
 * Generates Claude Artifact content targeting low-competition Medicare keywords.
 *
 * Strategy (Edward Sturm):
 *  - Claude Artifacts are publicly accessible pages on claude.ai (high-authority domain)
 *  - Google indexes them within hours
 *  - They show up in AI Overviews and get cited by LLMs
 *  - Each artifact targets one keyword, links back to medicareyourself.com
 *
 * What this script does:
 *  1. Picks the next keyword from the rotation
 *  2. Uses Claude API to write a fully styled HTML artifact
 *  3. Saves the HTML + a ready-to-paste Claude.ai prompt to artifacts/YYYY-MM-DD.md
 *
 * Publishing step (2 minutes, manual):
 *  1. Go to claude.ai — start a new conversation
 *  2. Paste the prompt from the saved .md file
 *  3. Claude renders the artifact — click the Share/Publish button
 *  4. Done — Google indexes it within hours
 *
 * Run: node scripts/generate-artifacts.js
 */

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Low-competition, question-based keywords ideal for Claude Artifacts
// Informational queries that LLMs frequently answer
// ---------------------------------------------------------------------------
const ARTIFACT_KEYWORDS = [
  "what is Medicare Plan G",
  "how does Medicare Supplement work",
  "Medicare Part B late enrollment penalty explained",
  "can I use Medicare outside New Jersey",
  "what does Medicare not cover",
  "Medicare Supplement vs Medicare Advantage pros and cons",
  "when can I enroll in Medicare",
  "does Medicare cover dental vision hearing",
  "what is the Medicare donut hole",
  "how to avoid Medicare Part B penalty",
  "Medicare broker vs insurance company direct",
  "is Medicare Supplement worth it",
  "what is Medigap insurance",
  "Medicare supplement plan letters explained",
  "how to compare Medicare supplement plans",
  "Medicare open enrollment New Jersey 2026",
  "what happens if I miss Medicare enrollment",
  "Medicare supplement for people turning 65",
  "how much does Plan G cost per month",
  "Medicare supplement rate increases how to avoid",
];

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

function getState() {
  const statePath = repoPath("artifact-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { keywordIndex: 0, count: 0 };
}

function saveState(state) {
  fs.writeFileSync(repoPath("artifact-state.json"), JSON.stringify(state, null, 2), "utf8");
}

async function generateArtifact(keyword, client) {
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const prompt = `You are creating a Claude Artifact — a fully self-contained, styled HTML page targeting the keyword "${keyword}".

This artifact will be published publicly on Claude.ai and indexed by Google. It must look professional and authoritative.

TARGET KEYWORD: "${keyword}"
DATE: ${today}
AUTHOR: Anthony Orner, Licensed Medicare Broker (NPI 1902584006)
WEBSITE: medicareyourself.com | EasyKind Medicare
PHONE: 855-559-1700

REQUIREMENTS:
1. The <title> tag and the H1 must START with the exact keyword "${keyword}"
2. Write 200-300 words of genuinely useful, factual content answering the keyword as a question
3. Include 2026 Medicare facts where relevant: Part B premium $202.90/mo, Part B deductible $283
4. End with a clear call to action linking to https://medicareyourself.com
5. Mention Anthony Orner and EasyKind Medicare naturally in the content
6. Do NOT make specific regulatory claims about individual states you cannot verify
7. Do NOT use em dashes

HTML REQUIREMENTS:
- Fully self-contained HTML (no external CSS frameworks — inline styles only)
- Clean, readable design with a blue (#1d4ed8) and white color scheme
- Mobile-friendly: max-width 700px, centered, good padding
- Include a small footer: "EasyKind Medicare | medicareyourself.com | 855-559-1700 | Licensed in NJ and 34 states"
- Must look like a real information page, not a template

Write ONLY the complete HTML document, nothing else:`;

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

  const keyword = ARTIFACT_KEYWORDS[state.keywordIndex % ARTIFACT_KEYWORDS.length];

  console.log(`Generating Claude Artifact #${state.count + 1}`);
  console.log(`  Keyword: "${keyword}"`);

  const html = await generateArtifact(keyword, client);

  // Save to artifacts/
  const dir = repoPath("artifacts");
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

  // The prompt to paste into Claude.ai to generate + publish the artifact
  const claudeAiPrompt = `Please create a published artifact using this exact HTML. Make it a published artifact that others can see:\n\n${html}`;

  const fileContent = `# Claude Artifact — ${today}
**Target keyword:** ${keyword}
**Artifact #:** ${state.count + 1}

## HOW TO PUBLISH (2 minutes)

1. Go to **claude.ai** — start a new conversation
2. Copy and paste the prompt below
3. Claude will render the artifact in a preview panel
4. Click **Share** → **Publish** to make it publicly accessible
5. Copy the public URL and save it below for tracking

**Published URL:** _(paste here after publishing)_

---

## PASTE THIS INTO CLAUDE.AI:

${claudeAiPrompt}

---

## RAW HTML (for reference):

\`\`\`html
${html}
\`\`\`

---
*Generated by EasyKind Medicare autoresearch loop.*
*Next keyword: ${ARTIFACT_KEYWORDS[(state.keywordIndex + 1) % ARTIFACT_KEYWORDS.length]}*
`;

  fs.writeFileSync(filepath, fileContent, "utf8");
  console.log(`\nArtifact saved: artifacts/${filename}`);

  // Update state
  saveState({
    keywordIndex: (state.keywordIndex + 1) % ARTIFACT_KEYWORDS.length,
    count: state.count + 1,
    lastRun: today,
  });

  // Log
  const logPath = repoPath("artifact-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\tkeyword\tfile\tpublishedUrl\n", "utf8");
  }
  fs.appendFileSync(logPath, [today, keyword, filename, ""].join("\t") + "\n", "utf8");

  console.log(`\n${"=".repeat(60)}`);
  console.log(`NEXT STEP: Publish this artifact to Claude.ai`);
  console.log(`File: artifacts/${filename}`);
  console.log(`Takes ~2 minutes — paste the prompt into claude.ai and hit Publish`);
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("generate-artifacts failed:", err.message);
  process.exit(1);
});
