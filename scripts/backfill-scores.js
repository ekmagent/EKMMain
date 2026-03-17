/**
 * backfill-scores.js
 * Reads all "built" rows from Page Blueprints, runs the on-page scorer
 * against each page file on disk, and writes score/date/issues to cols P–R.
 *
 * Run once after adding the score columns, or any time you want to refresh scores.
 *
 * Usage: node backfill-scores.js
 */

require("dotenv").config({ path: __dirname + "/.env" });

const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const GOOGLE_CREDENTIALS_JSON = process.env.GOOGLE_CREDENTIALS_JSON;
const INTERNAL_SEO_SHEET_ID = process.env.INTERNAL_SEO_SHEET_ID;

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

async function getSheetsClient() {
  const keyFile = GOOGLE_CREDENTIALS_JSON.replace(/^~/, process.env.HOME);
  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// ---------------------------------------------------------------------------
// On-page scorer (copy of build-compact-pages.js version)
// ---------------------------------------------------------------------------
function calculateOnPageScore(content, keyword) {
  const kwLower = keyword.toLowerCase().trim();
  const words = kwLower.split(/\s+/).filter(Boolean);
  const contentLower = content.toLowerCase();

  let score = 0;
  const missing = [];
  const details = [];

  // 1. Title contains keyword (28pts — front-loaded per Edward Sturm)
  const titleMatch = content.match(/title:\s*"([^"]+)"/) || content.match(/title:\s*'([^']+)'/);
  const titleText = (titleMatch?.[1] || "").toLowerCase();
  const titleWordMatches = words.filter((w) => titleText.includes(w)).length;
  if (titleWordMatches === words.length) {
    score += 28; details.push("+ Title contains keyword (28pts)");
  } else if (titleWordMatches >= Math.ceil(words.length * 0.6)) {
    const partial = Math.round(28 * (titleWordMatches / words.length));
    score += partial;
    details.push(`~ Title contains ${titleWordMatches}/${words.length} keyword words (${partial}pts)`);
    missing.push(`keyword in title`);
  } else {
    details.push("- Title missing keyword (0pts)"); missing.push("keyword in title");
  }

  // 2. Meta description (10pts)
  const metaMatch = content.match(/description:\s*"([^"]+)"/) || content.match(/description:\s*'([^']+)'/);
  const metaText = (metaMatch?.[1] || "").toLowerCase();
  const metaWordMatches = words.filter((w) => metaText.includes(w)).length;
  if (metaWordMatches === words.length) {
    score += 10; details.push("+ Meta description contains keyword (10pts)");
  } else if (metaWordMatches > 0) {
    const partial = Math.round(10 * (metaWordMatches / words.length));
    score += partial;
    details.push(`~ Meta description contains ${metaWordMatches}/${words.length} keyword words (${partial}pts)`);
    missing.push("keyword in meta description");
  } else {
    details.push("- Meta description missing keyword (0pts)"); missing.push("keyword in meta description");
  }

  // Meta description length (8pts — Edward Sturm target 120-158 chars)
  const metaLen = (metaMatch?.[1] || "").length;
  if (metaLen >= 120 && metaLen <= 158) {
    score += 8; details.push(`+ Meta desc length ${metaLen} chars — optimal (8pts)`);
  } else if (metaLen >= 100 && metaLen <= 170) {
    score += 5; details.push(`~ Meta desc length ${metaLen} chars — acceptable (5pts)`);
  } else {
    details.push(`- Meta desc length ${metaLen} chars (0pts)`); missing.push(`meta desc length ${metaLen} (target 120-158)`);
  }

  // 3. H1 (15pts)
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1Text = (h1Match?.[1] || "").replace(/<[^>]+>/g, "").toLowerCase();
  const h1WordMatches = words.filter((w) => h1Text.includes(w)).length;
  if (h1WordMatches === words.length) {
    score += 15; details.push("+ H1 contains keyword (15pts)");
  } else if (h1WordMatches >= Math.ceil(words.length * 0.6)) {
    const partial = Math.round(15 * (h1WordMatches / words.length));
    score += partial;
    details.push(`~ H1 contains ${h1WordMatches}/${words.length} keyword words (${partial}pts)`);
    missing.push("keyword in H1");
  } else {
    details.push("- H1 missing keyword (0pts)"); missing.push("keyword in H1");
  }

  // 4. URL slug (10pts)
  const slugMatch = content.match(/href="\/services\/([\w-]+)"/);
  const slugText = (slugMatch?.[1] || "").toLowerCase();
  const slugWordMatches = words.filter((w) => slugText.includes(w)).length;
  if (slugWordMatches >= Math.ceil(words.length * 0.5)) {
    score += 10; details.push("+ URL slug contains keyword (10pts)");
  } else {
    details.push("- URL slug missing keyword (0pts)"); missing.push("keyword in URL");
  }

  // 5. First paragraph (10pts)
  const firstParaMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const firstParaText = (firstParaMatch?.[1] || "").replace(/<[^>]+>/g, "").toLowerCase();
  const paraWordMatches = words.filter((w) => firstParaText.includes(w)).length;
  if (paraWordMatches === words.length) {
    score += 10; details.push("+ First paragraph contains keyword (10pts)");
  } else if (paraWordMatches >= Math.ceil(words.length * 0.5)) {
    const partial = Math.round(10 * (paraWordMatches / words.length));
    score += partial;
    details.push(`~ First paragraph contains ${paraWordMatches}/${words.length} keyword words (${partial}pts)`);
    missing.push("keyword in first paragraph");
  } else {
    details.push("- First paragraph missing keyword (0pts)"); missing.push("keyword in first paragraph");
  }

  // 6. Image alt text (10pts)
  const imgAltMatch = content.match(/alt=["']([^"']+)["']/i);
  const altText = (imgAltMatch?.[1] || "").toLowerCase();
  const altWordMatches = words.filter((w) => altText.includes(w)).length;
  if (altWordMatches === words.length) {
    score += 10; details.push("+ Image alt text contains keyword (10pts)");
  } else if (altWordMatches > 0) {
    score += 7; details.push(`~ Image alt text partially matches keyword (7pts)`);
  } else {
    details.push("- Image alt text missing keyword (0pts)"); missing.push("keyword in image alt");
  }

  // 7. Header structure (5pts)
  const h1Count = (content.match(/<h1/gi) || []).length;
  const h2Count = (content.match(/<h2/gi) || []).length;
  if (h1Count === 1 && h2Count >= 3) {
    score += 5; details.push(`+ Header structure: ${h1Count} H1, ${h2Count} H2s (5pts)`);
  } else {
    details.push(`- Header structure: ${h1Count} H1, ${h2Count} H2s (0pts)`);
    missing.push("header structure (need 1 H1 + 3+ H2s)");
  }

  // 8. Internal links (3pts)
  const internalLinks = (content.match(/href="\/(?!\/)/g) || []).length;
  if (internalLinks >= 3) {
    score += 3; details.push(`+ ${internalLinks} internal links (3pts)`);
  } else {
    details.push(`- Only ${internalLinks} internal links (0pts)`);
    missing.push("internal links (need 3+)");
  }

  // 9. Content length (2pts)
  const textOnly = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const wordCount = textOnly.trim().split(/\s+/).length;
  if (wordCount >= 400) {
    score += 2; details.push(`+ Content length ~${wordCount} words (2pts)`);
  } else {
    details.push(`- Content length ~${wordCount} words — below 400 target (0pts)`);
    missing.push(`content length ~${wordCount} words (target 400+)`);
  }

  score = Math.min(Math.max(score, 0), 100);
  return { score, missing, details };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  if (!INTERNAL_SEO_SHEET_ID) { console.error("INTERNAL_SEO_SHEET_ID not set"); process.exit(1); }
  if (!GOOGLE_CREDENTIALS_JSON) { console.error("GOOGLE_CREDENTIALS_JSON not set"); process.exit(1); }

  const sheets = await getSheetsClient();
  const today = new Date().toISOString().slice(0, 10);

  // Ensure headers for cols M–R
  const headerRes = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!M1:R1",
  });
  const existingHeaders = (headerRes.data.values || [[]])[0] || [];
  const headers = [
    existingHeaders[0] || "Difficulty",
    existingHeaders[1] || "Beatable",
    existingHeaders[2] || "Content Notes",
    existingHeaders[3] || "On-Page Score",
    existingHeaders[4] || "Score Date",
    existingHeaders[5] || "Score Issues",
  ];
  await sheets.spreadsheets.values.update({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!M1",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [headers] },
  });
  console.log("✓ Headers written to cols M–R");

  // Read all blueprints
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: INTERNAL_SEO_SHEET_ID,
    range: "Page Blueprints!A:R",
  });
  const rows = res.data.values || [];
  console.log(`Found ${rows.length - 1} blueprint rows\n`);

  const updates = [];
  let scored = 0;
  let skipped = 0;

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const keyword = (row[0] || "").trim();
    const urlCol = (row[2] || "").trim(); // col C = URL (/services/slug)
    const status = (row[10] || "").toLowerCase().trim(); // col K

    if (!keyword || !urlCol) { skipped++; continue; }

    // Derive slug from URL col
    const slug = urlCol.replace(/^\/(services|hub)\//, "");
    const pageFile = repoPath("app", "services", slug, "page.tsx");

    if (!fs.existsSync(pageFile)) {
      console.log(`  SKIP: ${slug} — no page.tsx on disk`);
      skipped++;
      continue;
    }

    const content = fs.readFileSync(pageFile, "utf8");
    const result = calculateOnPageScore(content, keyword);

    console.log(`  ${keyword}`);
    console.log(`    Score: ${result.score}/100${result.missing.length ? ` — missing: ${result.missing.join(", ")}` : " ✓"}`);

    updates.push({
      range: `Page Blueprints!P${i + 1}`,
      values: [[`${result.score}/100`, today, result.missing.join(", ")]],
    });
    scored++;
  }

  if (updates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: INTERNAL_SEO_SHEET_ID,
      resource: { valueInputOption: "USER_ENTERED", data: updates },
    });
    console.log(`\n✓ Scores written for ${scored} pages (cols P–R)`);
  }

  if (skipped > 0) console.log(`  Skipped ${skipped} rows (no file on disk or empty keyword)`);
}

run().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});
