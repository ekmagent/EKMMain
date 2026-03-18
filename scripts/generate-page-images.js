/**
 * generate-page-images.js
 * Generates AI images for SEO landing pages using KIE.ai (nano-banana-2) or Gemini.
 *
 * Flow:
 *   1. Read approved blueprints from Page Blueprints sheet
 *   2. For each page, use Claude to generate image prompts (vector + photo styles)
 *   3. Call image API to generate images
 *   4. Convert to WebP + compress via sharp
 *   5. Save to public/images/ and update image-manifest.json
 *
 * Usage:
 *   node generate-page-images.js                   # all approved pages
 *   node generate-page-images.js --slug <slug>     # single page
 *   node generate-page-images.js --hero-only       # hero images only
 *   node generate-page-images.js --dry-run         # print prompts, no API calls
 *   node generate-page-images.js --provider gemini # use Gemini instead of KIE.ai
 *   node generate-page-images.js --skip-da-gate    # skip DA check
 *   node generate-page-images.js --assign-reuse    # batch copy source images to pages without their own
 *   node generate-page-images.js --force           # regenerate even if already in manifest
 *
 * Required env vars (in scripts/.env):
 *   ANTHROPIC_API_KEY          — Claude for generating image prompts
 *   KIE_API_KEY                — KIE.ai nano-banana-2 (primary)
 *   GOOGLE_GENAI_API_KEY       — Gemini 3.1 Flash (fallback, optional)
 *   GOOGLE_CREDENTIALS_JSON    — Google Sheets access
 *   INTERNAL_SEO_SHEET_ID      — Sheet ID
 */

require("dotenv").config({ path: __dirname + "/.env" });

const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const KIE_API_KEY = process.env.KIE_API_KEY;
const GOOGLE_GENAI_API_KEY = process.env.GOOGLE_GENAI_API_KEY;
const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

const IMAGE_DIR = path.join(__dirname, "..", "public", "images");
const MANIFEST_FILE = path.join(IMAGE_DIR, "image-manifest.json");
const LOG_FILE = path.join(__dirname, "..", "image-gen-log.tsv");

// CLI flags
const args = process.argv.slice(2);
const SLUG_FILTER = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;
const HERO_ONLY = args.includes("--hero-only");
const DRY_RUN = args.includes("--dry-run");
const FORCE = args.includes("--force");
const SKIP_DA_GATE = args.includes("--skip-da-gate");
const ASSIGN_REUSE = args.includes("--assign-reuse");
const PROVIDER = args.includes("--provider")
  ? args[args.indexOf("--provider") + 1]
  : (process.env.IMAGE_PROVIDER || "kie");

// Edward's background color palette
const HERO_BG = "#1e40af";
const SECTION_BGS = ["#f0f9ff", "#fefce8", "#f0fdf4", "#fdf2f8", "#f5f3ff", "#fff7ed"];

// ---------------------------------------------------------------------------
// Image reuse categories (Edward allows reuse with unique filenames + alt text)
// Each category maps to source images from the original 18 pages.
// Pages without their own generated image get a copy of their category's source.
// ---------------------------------------------------------------------------
const REUSE_CATEGORIES = {
  "nj-location": {
    pattern: /find-a-medicare-agent-in-|local-medicare-agents-in-|medicare-insurance-agents-in-|-nj-medicare-insurance-agents|medicare-in-monmouth|medicare-agents-near-me$|independent-medicare-agents-(?!near)/,
    sources: [
      "free-medicare-advocate-near-me_photo.webp",
      "best-medicare-insurance-brokers-near-me_photo.webp",
      "medicare-brokers-in-my-area_photo.webp",
      "medicare-agent-that-helps-with-paperwork-near-me_photo.webp",
    ],
  },
  "condition": {
    pattern: /medicare-broker-for-(?!people-on-disability)|medicare-enrollment-help-|copd-patient|crohns|dialysis|whats-the-best-medicare-plan-for-someone-with-diabetes/,
    sources: [
      "best-medicare-plan-for-chronic-conditions_photo.webp",
      "medicare-enrollment-help-for-people-with-diabetes_photo.webp",
      "medicare-enrollment-help-for-people-with-lupus_photo.webp",
      "medicare-broker-for-people-with-parkinsons_photo.webp",
    ],
  },
  "plan-g-enroll": {
    pattern: /enroll-in-plan-|quickest-way-to-enroll|quote-and-enroll|compare-and-enroll|same-day-medicare|medicare-supplement-open-enrollment/,
    sources: [
      "how-to-enroll-in-medicare-in-new-jersey_photo.webp",
      "free-medicare-agent-that-helps-with-paperwork_photo.webp",
    ],
  },
  "plan-g-rates": {
    pattern: /plan-g-rates|plan-g-cost|how-much-is-plan-/,
    sources: [
      "best-and-cheapest-medicare-supplement_photo.webp",
      "medicare-supplement-for-seniors-turning-65_photo.webp",
    ],
  },
  "supplement-cost": {
    pattern: /average-cost|how-much-does|exploring-medicare-supplemental|best-medicare-supplement-rates|how-can-i-save/,
    sources: [
      "best-and-cheapest-medicare-supplement_photo.webp",
      "medicare-supplement-rate-jumped-why-and-what-can-i-do_photo.webp",
    ],
  },
  "supplement-general": {
    pattern: /medicare-supplement-(?!for-seniors|rate-jumped)|when-can-i-change|why-did-my-medicare|premium/,
    sources: [
      "what-time-of-year-can-you-switch-medicare-supplement-plans_photo.webp",
      "medicare-supplement-for-seniors-turning-65_photo.webp",
      "medicare-supplement-rate-jumped-why-and-what-can-i-do_photo.webp",
    ],
  },
  "agent-general": {
    pattern: /broker-near|medicare-advisor|medicare-agent(?!s-near-me$)|medicare-broker-no-cost|medicare-specialists|medicare-consultant|medicare-quotes|licensed-medicare|us-medicare|top-medicare|help-with-your|free-medicare-broker|independent-medicare-(?!advantage|supplement)|medicare-advise|medicare-insurance-agent(?!s-in)/,
    sources: [
      "free-medicare-advocate-near-me_photo.webp",
      "independent-medicare-supplement-insurance-agents_photo.webp",
      "independent-medicare-advantage-agents-near-me_photo.webp",
      "medicare-advantage-agents-near-me_vector.webp",
    ],
  },
};

function categorizeSlug(slug) {
  for (const [cat, cfg] of Object.entries(REUSE_CATEGORIES)) {
    if (cfg.pattern.test(slug)) return cat;
  }
  return "agent-general"; // fallback
}

function pickSourceImage(slug, category) {
  const sources = REUSE_CATEGORIES[category]?.sources || REUSE_CATEGORIES["agent-general"].sources;
  // Deterministic rotation based on slug hash
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  return sources[Math.abs(hash) % sources.length];
}

// ---------------------------------------------------------------------------
// Google Sheets client (reused from build-compact-pages.js)
// ---------------------------------------------------------------------------
async function getSheetsClient() {
  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  return google.sheets({ version: "v4", auth });
}

// ---------------------------------------------------------------------------
// Read approved blueprints from Page Blueprints tab
// ---------------------------------------------------------------------------
async function getApprovedBlueprints(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:R",
  });

  const rows = res.data.values || [];
  const blueprints = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const keyword = (row[0] || "").trim();
    const urlCol = (row[2] || "").trim();
    const status = (row[10] || "").toLowerCase().trim();
    const difficulty = row[12] || "";
    const beatable = (row[13] || "").toUpperCase().trim();

    if (!keyword || !urlCol) continue;
    if (status !== "approved" && status !== "built") continue;
    if (!SKIP_DA_GATE && beatable === "NO") continue;

    const slug = urlCol.replace(/^\/(services|hub)\//, "");
    if (SLUG_FILTER && slug !== SLUG_FILTER) continue;

    blueprints.push({
      keyword,
      slug,
      h1: (row[3] || "").trim(),
      h2s: [row[4], row[5], row[6], row[7]].map((h) => (h || "").trim()).filter(Boolean),
      metaDescription: (row[8] || "").trim(),
    });
  }

  return blueprints;
}

// ---------------------------------------------------------------------------
// Manifest management
// ---------------------------------------------------------------------------
function loadManifest() {
  if (fs.existsSync(MANIFEST_FILE)) {
    return JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf8"));
  }
  return { pages: {} };
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), "utf8");
}

// ---------------------------------------------------------------------------
// Claude: generate image prompts for a page
// ---------------------------------------------------------------------------
async function generateImagePrompts(blueprint, anthropic) {
  const sectionCount = HERO_ONLY ? 0 : Math.min(blueprint.h2s.length, 6);

  const prompt = `You are generating image prompts for an AI image generator (KIE.ai nano-banana-2).
The images are for a Medicare insurance landing page targeting: "${blueprint.keyword}"

Page H1: "${blueprint.h1}"
${blueprint.h2s.length > 0 ? `H2 sections:\n${blueprint.h2s.map((h, i) => `  ${i + 1}. "${h}"`).join("\n")}` : ""}

Generate image prompts for ${1 + sectionCount} image slots (1 hero + ${sectionCount} sections).
For EACH slot, generate TWO prompts — one for each style:

STYLE A — FLAT VECTOR ILLUSTRATION:
- Clean, modern flat illustration style with simple geometric shapes and bold colors
- MUST be on a solid #ffffff WHITE background (the website page background is white — the vector must blend seamlessly)
- Medicare/healthcare visual metaphors: protective shields, stethoscopes, insurance cards, calendars, pill bottles, clipboards, dollar signs, magnifying glasses
- Use brand colors for the objects: navy blue (#1e40af), teal (#0d9488), gold (#f59e0b), sky blue (#93c5fd) — NOT for the background
- NO human figures at all in vector style — objects and symbols only
- NO text, words, letters, or numbers anywhere in the image
- Professional, warm, approachable — think modern app icon or infographic element
- Each image should feel UNIQUE to the keyword's specific topic (diabetes = glucose meter + shield, Parkinson's = brain + protective umbrella, etc.)

STYLE B — PHOTOREALISTIC SCENE:
- Real-world Medicare/healthcare setting, warm natural lighting, soft focus
- People are OK but use MEDIUM or WIDE shots (waist-up or wider). Show people naturally: sitting at a desk, reviewing documents together, in a consultation. Faces are fine at medium distance.
- DO NOT use extreme close-ups of faces. DO NOT show people from behind with hair covering their face.
- MUST be on a solid or very uniform background color (${HERO_BG} dark blue preferred). The website hero section bg will be set to match, so the image must blend seamlessly at the edges.
- Professional, trustworthy, relatable — the viewer should instantly feel "this is about MY situation"
- Vary the scenes: some with a senior and advisor at a desk, some with just hands reviewing paperwork, some with a couple looking at a laptop, some with medical items on a clean desk
- NO text, words, letters, or numbers anywhere in the image

QUALITY CONTROL — CRITICAL:
- Inspect your prompts for anything that could produce "AI tells": detached limbs, melting hands, nonsensical objects, extra fingers, floating elements
- Be SPECIFIC in your descriptions — vague prompts produce generic/weird results
- The image must be DIRECTLY RELEVANT to the keyword. A searcher should see the image and instantly know they're in the right place.
- For condition-specific pages (diabetes, lupus, Parkinson's): include a visual cue to that condition (glucose meter, butterfly rash awareness ribbon, brain scan)
- For "agent near me" / broker pages: show consultation scenes, insurance documents, professional settings
- For Medigap/supplement pages: show comparison charts (as objects, not readable text), plan documents, protective imagery

BACKGROUND COLOR HACK (Edward Sturm method):
The AI generator cannot do transparent backgrounds. Instead, we generate on a solid background color and match the website section's bg to the same hex. This creates a seamless, professional look.
- Vector images: ALWAYS use #ffffff (white) — the page background is white
- Photo images: use ${HERO_BG} (dark blue) or neutral backgrounds — photos look natural with their own lighting
- Section images: use the specified pastel color per slot
- State the EXACT background hex in every prompt

Return ONLY a JSON array with this structure (no markdown fences):
[
  {
    "slot": "hero",
    "bg_hex": "${HERO_BG}",
    "vector_prompt": "...",
    "photo_prompt": "...",
    "alt_text": "${blueprint.keyword}",
    "filename_base": "${blueprint.slug}"
  }${sectionCount > 0 ? `,
  {
    "slot": "section_0",
    "bg_hex": "${SECTION_BGS[0]}",
    "vector_prompt": "...",
    "photo_prompt": "...",
    "alt_text": "descriptive text about what the image shows, relevant to the section topic (NOT the exact keyword)",
    "filename_base": "${blueprint.slug}-descriptive-name"
  }` : ""}
]

Generate exactly ${1 + sectionCount} objects. For sections, use these background colors in order: ${SECTION_BGS.slice(0, sectionCount).join(", ")}

IMAGE SEO RULES:
- Hero alt_text: MUST be the EXACT target keyword "${blueprint.keyword}" — no variations
- Section alt_text: highly descriptive of what the image shows, related to the page content, but NEVER the exact keyword (over-optimization penalty)
- filename_base: keyword with hyphens for hero, slug + 2-3 descriptive words for sections`;

  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  const text = msg.content[0].text.trim();
  const json = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  return JSON.parse(json);
}

// ---------------------------------------------------------------------------
// KIE.ai callback server (nano-banana-2 is callback-only, no polling endpoint)
// ---------------------------------------------------------------------------
const http = require("http");
let _callbackServer = null;
let _tunnelUrl = null;
const _pendingTasks = new Map(); // taskId → { resolve, reject, timer }

async function ensureCallbackServer() {
  if (_callbackServer && _tunnelUrl) return _tunnelUrl;
  // Tunnel dropped — clean up and recreate
  if (_callbackServer && !_tunnelUrl) {
    _callbackServer.close();
    _callbackServer = null;
    console.log("  Reconnecting tunnel...");
  }

  // Start local HTTP server to receive KIE.ai callbacks
  return new Promise((resolve, reject) => {
    _callbackServer = http.createServer((req, res) => {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          const payload = JSON.parse(body);
          const taskId = payload.data?.taskId;
          const pending = _pendingTasks.get(taskId);
          if (pending) {
            clearTimeout(pending.timer);
            _pendingTasks.delete(taskId);
            if (payload.data?.state === "success") {
              pending.resolve(payload);
            } else {
              pending.reject(new Error(`KIE task failed: ${payload.data?.failMsg || "unknown"}`));
            }
          }
        } catch (e) {
          // Ignore malformed callbacks
        }
        res.writeHead(200);
        res.end("OK");
      });
    });

    _callbackServer.listen(0, async () => {
      const port = _callbackServer.address().port;
      console.log(`  Callback server listening on port ${port}`);

      try {
        const localtunnel = require("localtunnel");
        const tunnel = await localtunnel({ port });
        _tunnelUrl = tunnel.url;
        console.log(`  Tunnel URL: ${_tunnelUrl}`);
        tunnel.on("close", () => { _tunnelUrl = null; });
        tunnel.on("error", (err) => {
          console.log(`  Tunnel error: ${err.message} — will reconnect on next image`);
          _tunnelUrl = null;
          try { tunnel.close(); } catch (_) {}
        });
        resolve(_tunnelUrl);
      } catch (err) {
        _callbackServer.close();
        _callbackServer = null;
        reject(new Error(`Failed to create tunnel: ${err.message}`));
      }
    });
  });
}

function shutdownCallbackServer() {
  if (_callbackServer) {
    _callbackServer.close();
    _callbackServer = null;
  }
  // Reject any remaining pending tasks
  for (const [taskId, pending] of _pendingTasks) {
    clearTimeout(pending.timer);
    pending.reject(new Error("Server shutting down"));
  }
  _pendingTasks.clear();
}

async function kieGenerateImage(prompt, aspectRatio) {
  const callbackUrl = await ensureCallbackServer();

  const res = await fetch("https://api.kie.ai/api/v1/jobs/createTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KIE_API_KEY}`,
    },
    body: JSON.stringify({
      model: "nano-banana-2",
      callBackUrl: callbackUrl,
      input: {
        prompt,
        aspect_ratio: aspectRatio,
        resolution: "1K",
        output_format: "png",
      },
    }),
  });

  const data = await res.json();
  if (data.code !== 200) {
    throw new Error(`KIE create task failed: ${JSON.stringify(data)}`);
  }

  const taskId = data.data.taskId;
  console.log(`      KIE task: ${taskId} — waiting for callback...`);

  // Wait for callback (up to 5 minutes)
  const imageUrl = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      _pendingTasks.delete(taskId);
      reject(new Error(`KIE task ${taskId} timed out after 300s`));
    }, 300000);

    _pendingTasks.set(taskId, {
      resolve: (payload) => {
        const result = JSON.parse(payload.data?.resultJson || "{}");
        const url = result.resultUrls?.[0];
        if (url) resolve(url);
        else reject(new Error("KIE callback had no image URL"));
      },
      reject,
      timer,
    });
  });

  // Download the image
  const imgRes = await fetch(imageUrl);
  if (!imgRes.ok) throw new Error(`Failed to download KIE image: ${imgRes.status}`);
  return Buffer.from(await imgRes.arrayBuffer());
}

// ---------------------------------------------------------------------------
// Gemini image generation (synchronous)
// ---------------------------------------------------------------------------
async function geminiGenerateImage(prompt) {
  const { GoogleGenAI } = require("@google/genai");
  const ai = new GoogleGenAI({ apiKey: GOOGLE_GENAI_API_KEY });

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-image-preview",
    contents: prompt,
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return Buffer.from(part.inlineData.data, "base64");
    }
  }
  throw new Error("Gemini returned no image data");
}

// ---------------------------------------------------------------------------
// Provider dispatcher with retry
// ---------------------------------------------------------------------------
async function generateImage(prompt, aspectRatio, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      if (PROVIDER === "gemini") {
        return await geminiGenerateImage(prompt);
      }
      return await kieGenerateImage(prompt, aspectRatio);
    } catch (err) {
      console.log(`      Attempt ${attempt + 1} failed: ${err.message}`);
      if (attempt < maxRetries - 1) {
        const delay = 1000 * (attempt + 1);
        await new Promise((r) => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Image processing: convert to WebP + compress via sharp
// ---------------------------------------------------------------------------
async function processImage(imageBuffer, outputPath, width, height) {
  await sharp(imageBuffer)
    .resize(width, height, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  return stats.size;
}

// ---------------------------------------------------------------------------
// TSV logging
// ---------------------------------------------------------------------------
function initLog() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "date\tslug\tslot\tstyle\tfilename\tsize_kb\tstatus\n", "utf8");
  }
}

function appendLog(entries) {
  const lines = entries.map((e) =>
    [new Date().toISOString().slice(0, 10), e.slug, e.slot, e.style, e.filename, e.sizeKb, e.status].join("\t")
  );
  fs.appendFileSync(LOG_FILE, lines.join("\n") + "\n", "utf8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  if (!ANTHROPIC_API_KEY) { console.error("ANTHROPIC_API_KEY not set"); process.exit(1); }
  if (!INTERNAL_SEO_SHEET_ID) { console.error("INTERNAL_SEO_SHEET_ID not set"); process.exit(1); }
  if (!GOOGLE_CREDENTIALS_JSON) { console.error("GOOGLE_CREDENTIALS_JSON not set"); process.exit(1); }

  if (!DRY_RUN) {
    if (PROVIDER === "kie" && !KIE_API_KEY) {
      console.error("KIE_API_KEY not set (required for --provider kie)");
      process.exit(1);
    }
    if (PROVIDER === "gemini" && !GOOGLE_GENAI_API_KEY) {
      console.error("GOOGLE_GENAI_API_KEY not set (required for --provider gemini)");
      process.exit(1);
    }
  }

  const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const sheets = await getSheetsClient();

  initLog();

  // Ensure image directory exists
  if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

  // 1. Load blueprints and manifest
  console.log("Reading approved blueprints...");
  const blueprints = await getApprovedBlueprints(sheets);
  const manifest = loadManifest();

  if (blueprints.length === 0) {
    console.log("No approved blueprints found" + (SLUG_FILTER ? ` matching --slug ${SLUG_FILTER}` : ""));
    return;
  }

  // --assign-reuse: batch copy source images to pages that don't have their own
  if (ASSIGN_REUSE) {
    console.log("=== Assign Reuse Mode ===\n");
    const catCounts = {};
    let copied = 0;
    let skipped = 0;

    for (const bp of blueprints) {
      // Skip pages that already have images on disk
      const hasImage = fs.readdirSync(IMAGE_DIR).some(
        (f) => f.startsWith(bp.slug) && f.endsWith(".webp") && !f.endsWith(".svg")
      );
      if (hasImage) {
        skipped++;
        continue;
      }

      const cat = categorizeSlug(bp.slug);
      catCounts[cat] = (catCounts[cat] || 0) + 1;
      const sourceFile = pickSourceImage(bp.slug, cat);
      const sourcePath = path.join(IMAGE_DIR, sourceFile);

      if (!fs.existsSync(sourcePath)) {
        console.log(`  SKIP ${bp.slug} — source not found: ${sourceFile}`);
        continue;
      }

      // Copy source image with new keyword-based filename (Edward: unique filename per page)
      const destFile = `${bp.slug}.webp`;
      const destPath = path.join(IMAGE_DIR, destFile);
      fs.copyFileSync(sourcePath, destPath);

      // Update manifest
      manifest.pages[bp.slug] = {
        keyword: bp.keyword,
        hero: {
          candidates: [{ filename: destFile, style: "reuse", status: "approved" }],
          selected: destFile,
          alt: bp.keyword,
          bg_hex: "#ffffff",
          reused_from: sourceFile,
        },
        sections: [],
      };

      console.log(`  ${bp.slug} [${cat}] <- ${sourceFile}`);
      copied++;
    }

    saveManifest(manifest);
    console.log(`\n=== Summary ===`);
    console.log(`  Copied: ${copied}`);
    console.log(`  Skipped (already has image): ${skipped}`);
    console.log(`  By category:`);
    for (const [cat, count] of Object.entries(catCounts).sort((a, b) => b[1] - a[1])) {
      console.log(`    ${cat}: ${count}`);
    }
    console.log(`\nManifest updated. Images ready for deployment.`);
    return;
  }

  console.log(`Found ${blueprints.length} blueprints to process`);
  console.log(`Provider: ${PROVIDER} | Hero only: ${HERO_ONLY} | Dry run: ${DRY_RUN}\n`);

  let totalGenerated = 0;
  let totalSkipped = 0;

  for (const bp of blueprints) {
    console.log(`\n--- ${bp.keyword} (${bp.slug}) ---`);

    // Check if images already exist in manifest
    const existing = manifest.pages[bp.slug];
    if (!FORCE && existing && existing.hero?.candidates?.length > 0) {
      const allSlotsExist = HERO_ONLY
        ? true
        : (existing.sections?.length >= Math.min(bp.h2s.length, 6));
      if (allSlotsExist) {
        console.log("  Already in manifest — skipping (use --force to regenerate)");
        totalSkipped++;
        continue;
      }
    }

    // 2. Generate image prompts via Claude
    console.log("  Generating image prompts via Claude...");
    let prompts;
    try {
      prompts = await generateImagePrompts(bp, anthropic);
    } catch (err) {
      console.log(`  ERROR generating prompts: ${err.message}`);
      continue;
    }

    console.log(`  Got ${prompts.length} image slots (${prompts.length * 2} total candidates)`);

    if (DRY_RUN) {
      for (const p of prompts) {
        console.log(`\n  [${p.slot}] ${p.filename_base}`);
        console.log(`    Vector: ${p.vector_prompt}`);
        console.log(`    Photo:  ${p.photo_prompt}`);
        console.log(`    Alt:    ${p.alt_text}`);
      }
      continue;
    }

    // 3. Generate images for each slot
    const pageManifest = {
      keyword: bp.keyword,
      hero: null,
      sections: [],
    };
    const logEntries = [];

    for (const p of prompts) {
      const isHero = p.slot === "hero";
      const width = isHero ? 800 : 600;
      const height = isHero ? 400 : 400;
      const aspectRatio = isHero ? "16:9" : "3:2";

      const candidates = [];

      for (const style of ["vector", "photo"]) {
        const prompt = style === "vector" ? p.vector_prompt : p.photo_prompt;
        const filename = `${p.filename_base}_${style}.webp`;
        const outputPath = path.join(IMAGE_DIR, filename);

        console.log(`    Generating ${p.slot} [${style}]...`);

        try {
          const imageBuffer = await generateImage(prompt, aspectRatio);
          const fileSize = await processImage(imageBuffer, outputPath, width, height);
          const sizeKb = (fileSize / 1024).toFixed(1);
          console.log(`      Saved: ${filename} (${sizeKb} KB)`);

          candidates.push({
            filename,
            style,
            status: "pending_review",
          });

          logEntries.push({
            slug: bp.slug,
            slot: p.slot,
            style,
            filename,
            sizeKb,
            status: "generated",
          });

          totalGenerated++;
        } catch (err) {
          console.log(`      FAILED: ${err.message}`);
          logEntries.push({
            slug: bp.slug,
            slot: p.slot,
            style,
            filename,
            sizeKb: "0",
            status: `error: ${err.message}`,
          });
        }

        // Rate limit between API calls
        if (PROVIDER === "gemini") {
          await new Promise((r) => setTimeout(r, 15000));
        }
      }

      const slotData = {
        candidates,
        selected: null,
        alt: p.alt_text,
        bg_hex: p.bg_hex,
      };

      if (isHero) {
        pageManifest.hero = slotData;
      } else {
        slotData.h2_index = parseInt(p.slot.replace("section_", ""), 10);
        pageManifest.sections.push(slotData);
      }
    }

    // Update manifest
    manifest.pages[bp.slug] = pageManifest;
    saveManifest(manifest);
    appendLog(logEntries);

    console.log(`  Manifest updated for ${bp.slug}`);
  }

  // Final summary
  console.log(`\n${"=".repeat(50)}`);
  console.log(`  Images generated: ${totalGenerated}`);
  console.log(`  Pages skipped:    ${totalSkipped}`);
  if (!DRY_RUN && totalGenerated > 0) {
    console.log(`\nNext steps:`);
    console.log(`  1. Review images in public/images/`);
    console.log(`  2. Edit image-manifest.json — set "selected" to your preferred filename`);
    console.log(`  3. Run: node build-compact-pages.js --force-rebuild --skip-da-gate`);
  }
}

run()
  .catch((err) => {
    console.error(`Fatal: ${err.message}`);
    process.exit(1);
  })
  .finally(() => {
    shutdownCallbackServer();
  });
