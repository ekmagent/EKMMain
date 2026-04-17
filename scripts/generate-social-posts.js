/**
 * generate-social-posts.js
 * Repurposes existing content into platform-specific social media posts.
 *
 * Strategy (Edward Sturm / "My Exact Social Media Posting Strategy"):
 *  - Record video, edit in Descript
 *  - Upload to TikTok FIRST (algorithm picks music)
 *  - 4 hashtags for TikTok, enable high-quality uploads
 *  - Keyword at beginning of description
 *  - Auto-publish via Repurpose to Snapchat, Pinterest, Google Drive
 *  - Manual YouTube Shorts upload (thumbnail, related video, keyword-focused title/description, 3 hashtags max)
 *  - Instagram via mobile (NO hashtags -- bad for long-term profile health)
 *  - LinkedIn manual upload to personal page
 *  - Post at least once daily minimum, 4+/day for fastest growth
 *
 * Source content priority (uses first found):
 *  1. Latest video-scripts/*.md file
 *  2. Latest press-releases/*.md file
 *  3. Latest expert-quotes/*.md file
 *  4. Fallback: hardcoded Medicare tip rotation
 *
 * Each run:
 *  1. Finds the most recently modified source content
 *  2. Asks Claude Opus to generate platform-specific posts
 *  3. Saves to social-posts/YYYY-MM-DD.md (copy-paste ready)
 *  4. Tracks state in social-posts-state.json
 *  5. Logs to social-posts-log.tsv
 *
 * Run: node scripts/generate-social-posts.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Fallback Medicare tips -- used when no source content exists
// Rotates through these in order via state.fallbackIndex
// ---------------------------------------------------------------------------
const FALLBACK_TIPS = [
  {
    keyword: "Medicare Supplement Plan G",
    tip: "Medicare Supplement Plan G is the most popular Medigap plan in 2026. It covers everything Original Medicare doesn't except the Part B deductible ($257/year). That means after you pay $257, Plan G picks up 100% of your approved costs for the rest of the year. Every carrier's Plan G covers the exact same benefits -- the only difference is price and rate increase history.",
  },
  {
    keyword: "Medicare turning 65",
    tip: "Turning 65 and new to Medicare? Your Medigap Open Enrollment Period starts the month your Part B begins and lasts 6 months. During this window, no insurance company can turn you down or charge you more because of health conditions. Miss this window and you may face medical underwriting, which means higher prices or denial.",
  },
  {
    keyword: "Medicare broker free",
    tip: "Working with an independent Medicare broker costs you nothing. Brokers are paid by the insurance carriers, not by you. The price of your plan is the same whether you buy direct or through a broker. The difference? A broker can compare dozens of carriers for you instead of you calling each one.",
  },
  {
    keyword: "Medicare Part B premium 2026",
    tip: "The standard Medicare Part B premium for 2026 is $185 per month. This covers doctor visits, outpatient care, and preventive services. If your income is above $106,000 (single) or $212,000 (married filing jointly), you'll pay more due to IRMAA surcharges. The Part B annual deductible is $257.",
  },
  {
    keyword: "Medicare Advantage vs Supplement",
    tip: "Medicare Advantage and Medicare Supplement are two very different approaches to Medicare coverage. Advantage plans replace Original Medicare with a private plan that often includes drug coverage and extras like dental. Supplement plans work alongside Original Medicare and cover your out-of-pocket costs. There is no one-size-fits-all answer -- it depends on your doctors, medications, and how you use healthcare.",
  },
  {
    keyword: "switch Medicare supplement carriers",
    tip: "You can switch Medicare Supplement carriers anytime, but outside of your initial enrollment window most carriers will ask health questions. If you qualify, switching can save hundreds per year because carriers raise rates differently. An independent broker can run quotes across all carriers in your state in minutes.",
  },
];

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------
const BUSINESS = {
  name: "Anthony Orner",
  title: "Licensed Independent Medicare Broker",
  company: "EasyKind Medicare",
  website: "medicareyourself.com",
  phone: "855-559-1700",
  states: "NJ and 34 states",
};

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

// ---------------------------------------------------------------------------
// Source content discovery
// ---------------------------------------------------------------------------

/** Find the most recently modified .md file in a directory */
function getLatestFile(dirName) {
  const dir = repoPath(dirName);
  if (!fs.existsSync(dir)) return null;

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const full = path.join(dir, f);
      return { name: f, path: full, mtime: fs.statSync(full).mtimeMs };
    })
    .sort((a, b) => b.mtime - a.mtime);

  if (files.length === 0) return null;
  return files[0];
}

/**
 * Find the best source content, checking in priority order.
 * Returns { source, keyword, content, file } or a fallback.
 */
function findSourceContent(state) {
  const sources = [
    { dir: "video-scripts", label: "video-script" },
    { dir: "press-releases", label: "press-release" },
    { dir: "expert-quotes", label: "expert-quote" },
  ];

  for (const { dir, label } of sources) {
    const latest = getLatestFile(dir);
    if (latest) {
      const content = fs.readFileSync(latest.path, "utf8");
      // Try to extract keyword from the content
      const kwMatch = content.match(
        /(?:\*\*Target keyword:\*\*|Keyword:|TARGET KEYWORD:)\s*"?([^"\n]+)"?/i
      );
      const keyword = kwMatch ? kwMatch[1].trim() : null;
      return {
        source: label,
        keyword: keyword || "Medicare",
        content,
        file: latest.name,
      };
    }
  }

  // Fallback to hardcoded tips
  const idx = (state.fallbackIndex || 0) % FALLBACK_TIPS.length;
  const tip = FALLBACK_TIPS[idx];
  return {
    source: "fallback-tip",
    keyword: tip.keyword,
    content: tip.tip,
    file: null,
  };
}

// ---------------------------------------------------------------------------
// State management
// ---------------------------------------------------------------------------
function getState() {
  const statePath = repoPath("social-posts-state.json");
  if (fs.existsSync(statePath)) {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  }
  return { count: 0, fallbackIndex: 0 };
}

function saveState(state) {
  fs.writeFileSync(
    repoPath("social-posts-state.json"),
    JSON.stringify(state, null, 2),
    "utf8"
  );
}

// ---------------------------------------------------------------------------
// Claude generation
// ---------------------------------------------------------------------------
async function generateSocialPosts(sourceContent, client) {
  const prompt = `You are a social media content strategist for EasyKind Medicare (medicareyourself.com), run by Anthony Orner -- a licensed independent Medicare broker in NJ and 34 states. Phone: 855-559-1700. The service is free to consumers (brokers are paid by carriers).

SOURCE CONTENT TO REPURPOSE:
---
${sourceContent.content}
---

SOURCE TYPE: ${sourceContent.source}
PRIMARY KEYWORD: "${sourceContent.keyword}"

Generate social media posts for ALL 6 platforms below. Follow each platform's rules EXACTLY.

---

## 1. TIKTOK CAPTION
Rules (Edward Sturm strategy):
- Start with the primary keyword
- 150 characters MAX (not including hashtags)
- Hook in the FIRST line -- question or surprising fact
- Exactly 4 hashtags on a separate line
- Mix of broad (#Medicare) and specific hashtags
- Include #EasyKindMedicare as one of the 4

## 2. YOUTUBE SHORTS TITLE
Rules:
- Start with the primary keyword
- 60 characters MAX
- No clickbait, no ALL CAPS
- Benefit or hook after the keyword

## 3. YOUTUBE SHORTS DESCRIPTION
Rules:
- First sentence MUST start with the primary keyword
- 300-500 characters
- Include medicareyourself.com and 855-559-1700
- Include a call to action (free consultation)
- Exactly 3 hashtags at the end on their own line
- Include #EasyKindMedicare as one of the 3

## 4. INSTAGRAM REELS CAPTION
Rules (Edward Sturm strategy -- NO hashtags, they hurt long-term profile health):
- Start with the primary keyword
- 150-200 characters
- ZERO hashtags -- do NOT include any hashtags
- Include a CTA (call, visit site, or DM)
- Conversational and engaging tone

## 5. LINKEDIN POST
Rules:
- Professional tone, first-person from Anthony Orner
- Start the opening sentence with the primary keyword or a close variant
- 200-300 words
- Include a link to medicareyourself.com
- Include 855-559-1700
- End with a question to encourage engagement
- No hashtags in the body (optional: 3 max at the very end)

## 6. FACEBOOK POST
Rules:
- Conversational, friendly tone, first-person from Anthony
- Start with the primary keyword or close variant
- 100-200 words
- Include 855-559-1700
- Include medicareyourself.com
- End with a question or CTA
- No hashtags

GLOBAL RULES:
- Do NOT use em dashes
- Do NOT use words like "navigate," "crucial," "comprehensive," "landscape," "empower"
- Do NOT make specific claims about state regulations you cannot verify
- Keep 2026 Medicare facts accurate: Part B $185/mo, Part B deductible $257
- Each platform post should feel native to that platform, not copy-pasted
- Sound like a real person, not marketing copy

Output in clean markdown with the section headers above. Each section should be clearly separated and copy-paste ready. Do NOT wrap the entire output in a code block.`;

  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 3000,
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

  // Find source content
  const sourceContent = findSourceContent(state);

  console.log(`Social posts run #${state.count + 1} -- ${today}`);
  console.log(`  Source: ${sourceContent.source}`);
  console.log(`  Keyword: "${sourceContent.keyword}"`);
  if (sourceContent.file) {
    console.log(`  File: ${sourceContent.file}`);
  }
  console.log();

  // Generate posts
  console.log("Generating platform-specific social posts...");
  const posts = await generateSocialPosts(sourceContent, client);
  console.log("  Done.\n");

  // Build output markdown
  const fileContent = `# Social Media Posts -- ${today}
**Run #${state.count + 1}** | Source: ${sourceContent.source}${sourceContent.file ? ` (${sourceContent.file})` : ""}
**Primary keyword:** ${sourceContent.keyword}

> Edward Sturm posting strategy:
> 1. Upload to TikTok FIRST (algorithm picks music, enable high-quality uploads)
> 2. Auto-publish via Repurpose to Snapchat, Pinterest, Google Drive
> 3. Manual YouTube Shorts upload (set thumbnail, link related video)
> 4. Instagram Reels via mobile (NO hashtags)
> 5. LinkedIn manual upload to personal page
> 6. Facebook post
> Goal: at least 1 post/day minimum, 4+/day for fastest growth

---

${posts}

---

## Posting Checklist

- [ ] **TikTok** -- Upload video first, paste caption, add 4 hashtags, enable high-quality upload
- [ ] **Repurpose.io** -- Auto-publish to Snapchat, Pinterest, Google Drive
- [ ] **YouTube Shorts** -- Upload manually, set title/description/hashtags, pick thumbnail, link related video
- [ ] **Instagram Reels** -- Upload via mobile, paste caption, NO hashtags
- [ ] **LinkedIn** -- Upload to personal page, paste post
- [ ] **Facebook** -- Paste post to business page

---
*Generated by EasyKind Medicare autoresearch loop. Review before posting.*
*Source content: ${sourceContent.source}${sourceContent.file ? ` / ${sourceContent.file}` : ""}*
`;

  // Save to social-posts/
  const dir = repoPath("social-posts");
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
  console.log(`Social posts saved: social-posts/${filename}`);

  // Update state
  const newState = {
    count: state.count + 1,
    fallbackIndex:
      sourceContent.source === "fallback-tip"
        ? ((state.fallbackIndex || 0) + 1) % FALLBACK_TIPS.length
        : state.fallbackIndex || 0,
    lastRun: today,
    lastSource: sourceContent.source,
    lastKeyword: sourceContent.keyword,
    lastFile: sourceContent.file,
  };
  saveState(newState);

  // Log to TSV
  const logPath = repoPath("social-posts-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "date\trun\tsource\tkeyword\tsource_file\toutput_file\n",
      "utf8"
    );
  }
  fs.appendFileSync(
    logPath,
    [
      today,
      state.count + 1,
      sourceContent.source,
      sourceContent.keyword,
      sourceContent.file || "fallback",
      filename,
    ].join("\t") + "\n",
    "utf8"
  );

  console.log(`\n${"=".repeat(60)}`);
  console.log("NEXT STEPS (Edward Sturm posting order):");
  console.log(`  1. Open social-posts/${filename}`);
  console.log("  2. Record/edit video in Descript (if not already done)");
  console.log("  3. Upload to TikTok FIRST (enable high-quality upload)");
  console.log("  4. Set up Repurpose.io auto-publish (Snapchat, Pinterest, Google Drive)");
  console.log("  5. Manual upload to YouTube Shorts (thumbnail + related video)");
  console.log("  6. Instagram Reels via mobile -- NO hashtags");
  console.log("  7. LinkedIn -- upload to personal page");
  console.log("  8. Facebook -- post to business page");
  console.log(`${"=".repeat(60)}\n`);
}

main().catch((err) => {
  console.error("generate-social-posts failed:", err.message);
  process.exit(1);
});
