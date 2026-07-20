/**
 * generate-press-release.js
 * Drafts a weekly press release for AB Newswire distribution.
 *
 * Strategy (Edward Sturm / Pareto SEO):
 *  - $500/year AB Newswire = 83 releases = $6 each
 *  - Press releases rank on Google → cited by AI Overviews, ChatGPT, Perplexity
 *  - Formula: target keyword at START of title, subheading, and first sentence
 *  - Works for branded + non-competitive long-tail keywords
 *
 * Each run:
 *  1. Picks the next keyword from the rotation list
 *  2. Checks what's new on the site this week (new FAQ pages, recent updates)
 *  3. Asks Claude to draft a 400-500 word press release
 *  4. Saves to press-releases/YYYY-MM-DD.md
 *  5. You copy/paste to AB Newswire — takes 2 minutes
 *
 * Run: node scripts/generate-press-release.js
 */

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Keyword rotation — bottom-of-funnel + branded, used one per week
// The loop cycles through these in order, repeating after the last
// ---------------------------------------------------------------------------
const KEYWORD_ROTATION = [
  "Medicare broker New Jersey",
  "EasyKind Medicare",
  "Medicare supplement plan G New Jersey",
  "Medicare broker turning 65 New Jersey",
  "compare Medicare supplement plans New Jersey",
  "independent Medicare broker New Jersey",
  "Medicare supplement plan N New Jersey",
  "Medicare help New Jersey seniors",
  "Medicare broker Anthony Orner New Jersey",
  "best Medicare supplement carrier New Jersey",
  "Medicare supplement Pennsylvania",
  "Medicare broker near me New Jersey",
  "switching Medicare supplement plans New Jersey",
  "Medicare Advantage vs supplement New Jersey",
  "Medicare open enrollment New Jersey broker",
  "free Medicare consultation New Jersey",
  "Medicare supplement quotes New Jersey",
  "Medicare broker licensed New Jersey",
  "EasyKind Medicare reviews",
  "medicareyourself.com",
];

// ---------------------------------------------------------------------------
// Press release angle templates — rotated to keep content fresh
// ---------------------------------------------------------------------------
const ANGLES = [
  "expert_guidance",     // general expertise / free help positioning
  "new_content",         // new page or FAQ published
  "client_results",      // 5-star reviews / client outcomes
  "seasonal_enrollment", // enrollment timing / open enrollment reminders
  "carrier_comparison",  // how to pick the right carrier
];

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

/** Get count of FAQ pages built so far */
function getFaqCount() {
  try {
    const index = JSON.parse(fs.readFileSync(repoPath("faq-index.json"), "utf8"));
    return index.entries?.length || 0;
  } catch { return 0; }
}

/** Get which keyword index we're on (persisted in press-release-state.json) */
function getState() {
  const statePath = repoPath("press-release-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { keywordIndex: 0, angleIndex: 0, count: 0 };
}

function saveState(state) {
  fs.writeFileSync(repoPath("press-release-state.json"), JSON.stringify(state, null, 2), "utf8");
}

async function generatePressRelease(keyword, angle, faqCount, client) {
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const angleInstructions = {
    expert_guidance: `Angle: Position Anthony Orner / EasyKind Medicare as the go-to free resource for NJ residents choosing Medicare. Mention the free consultation offer and 855-559-1700.`,
    new_content: `Angle: EasyKind Medicare has published new free Medicare guidance resources online, including ${faqCount > 0 ? `${faqCount} answered Medicare questions` : "guides on Medicare enrollment and plan selection"}. Position as a service to the NJ/PA community.`,
    client_results: `Angle: EasyKind Medicare has helped hundreds of New Jersey residents choose the right Medicare supplement plan with zero pressure. Mention 5-star Google reviews and the free service model.`,
    seasonal_enrollment: `Angle: As Medicare open enrollment approaches, NJ residents turning 65 have important decisions to make. EasyKind Medicare is offering free guidance to help avoid costly enrollment mistakes like the Part B late penalty.`,
    carrier_comparison: `Angle: EasyKind Medicare explains that Medicare Supplement plan letters are federally standardized — the same Plan G at every carrier covers identical benefits, but prices and rate increase histories vary significantly. Free comparisons available.`,
  };

  const prompt = `You are writing a press release for EasyKind Medicare (medicareyourself.com), an independent Medicare insurance brokerage in New Jersey run by Anthony Orner (NPI 1902584006), licensed in NJ and 34 states.

TARGET KEYWORD: "${keyword}"
DATE: ${today}
${angleInstructions[angle]}

PRESS RELEASE FORMULA (follow exactly):
1. Title: Start with the exact target keyword. 8-12 words total. No quotes around keyword.
2. Subheading (For Immediate Release line): Start with the target keyword or a close variant. 1 sentence.
3. Opening paragraph: Start the FIRST SENTENCE with the target keyword. 2-3 sentences establishing who, what, where.
4. Body (3-4 paragraphs): Expand on the angle. Include these facts naturally:
   - Anthony Orner is a licensed independent Medicare broker, not tied to any single carrier
   - Medicare Supplement plan letters are federally standardized (same benefits at every carrier)
   - The service is free to consumers — brokers are compensated by carriers
   - Phone: 855-559-1700
   - Website: medicareyourself.com
5. Boilerplate (About EasyKind Medicare): 2-3 sentences. Include NJ + 34 states, independent broker, free service, 855-559-1700.
6. Contact block: Anthony Orner / EasyKind Medicare / 855-559-1700 / medicareyourself.com

RULES:
- Total length: 400-500 words
- Do NOT use em dashes
- Do NOT use words like "navigate," "crucial," "comprehensive," "landscape"
- Write in third person throughout
- Sound like a real press release, not marketing copy
- Do NOT make specific claims about NJ state insurance regulations you cannot verify
- Do NOT mention specific competitor names
- Keep 2026 Medicare facts accurate: Part B $202.90/mo, Part B deductible $283

Write the complete press release now, ready to paste into AB Newswire:`;

  const msg = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
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

  const keyword = KEYWORD_ROTATION[state.keywordIndex % KEYWORD_ROTATION.length];
  const angle = ANGLES[state.angleIndex % ANGLES.length];
  const faqCount = getFaqCount();

  console.log(`Generating press release #${state.count + 1}`);
  console.log(`  Keyword: "${keyword}"`);
  console.log(`  Angle: ${angle}`);

  const pressRelease = await generatePressRelease(keyword, angle, faqCount, client);

  // Save to press-releases/
  const dir = repoPath("press-releases");
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

  const fileContent = `# Press Release — ${today}
**Target keyword:** ${keyword}
**Angle:** ${angle}
**Distribute via:** AB Newswire (abnewswire.com) — copy the content below into their submission form

---

${pressRelease}

---

*Draft generated by EasyKind Medicare autoresearch loop. Review before publishing.*
*Next keyword in rotation: ${KEYWORD_ROTATION[(state.keywordIndex + 1) % KEYWORD_ROTATION.length]}*
`;

  fs.writeFileSync(filepath, fileContent, "utf8");
  console.log(`\nPress release saved: press-releases/${filename}`);

  // Update state
  saveState({
    keywordIndex: (state.keywordIndex + 1) % KEYWORD_ROTATION.length,
    angleIndex: (state.angleIndex + 1) % ANGLES.length,
    count: state.count + 1,
    lastRun: today,
  });

  // Log
  const logPath = repoPath("press-release-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\tkeyword\tangle\tfile\n", "utf8");
  }
  fs.appendFileSync(logPath, [today, keyword, angle, filename].join("\t") + "\n", "utf8");

  console.log(`\n${"=".repeat(60)}`);
  console.log(`NEXT STEP: Copy press-releases/${filename} to AB Newswire`);
  console.log(`URL: abnewswire.com — takes ~2 minutes to submit`);
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("generate-press-release failed:", err.message);
  process.exit(1);
});
