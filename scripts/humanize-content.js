/**
 * humanize-content.js
 * Rewrites AI-flagged sentences in TSX page files using Claude.
 *
 * Strategy:
 *  1. Extracts the flagged sentences (from ai-detector output or re-scans the file)
 *  2. Sends them to Claude with specific humanization instructions
 *  3. Claude returns JSON: { original: "...", rewrite: "..." }[]
 *  4. Validates rewrites (no eval, JSON parse only)
 *  5. Applies substitutions to the file via exact string replacement
 *  6. Logs every change made
 *
 * Usage:
 *   node humanize-content.js app/hub/some-page/page.tsx
 *   node humanize-content.js app/hub/some-page/page.tsx --flagged-json '[{"text":"...","score":0.9}]'
 *
 * Required env vars:
 *   ANTHROPIC_API_KEY
 */

const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const REPO_ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "app");

// Max sentences to rewrite per run (cost + safety cap)
const MAX_SENTENCES_PER_RUN = 20;

// ---------------------------------------------------------------------------
// Path validation
// ---------------------------------------------------------------------------
function safeResolvePath(inputPath) {
  const resolved = path.resolve(REPO_ROOT, inputPath);
  if (!resolved.startsWith(APP_DIR + path.sep) && resolved !== APP_DIR) {
    throw new Error(`Path outside allowed app/ directory: ${inputPath}`);
  }
  return resolved;
}

// ---------------------------------------------------------------------------
// Extract flagged sentences from source when no external list is provided.
// Uses the same heuristics as the phrase replacer — catches anything that
// survived sanitize-content.js.
// ---------------------------------------------------------------------------
function extractFlaggedSentences(source) {
  // Get plain text sentences
  const text = source
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/\/\/.*/g, " ")
    .replace(/import\s+.*?from\s+['"][^'"]+['"]\s*;?/g, " ")
    .replace(/export\s+(const|default|function|async)\s+[^{(]*[{(]/g, " ")
    .replace(/const\s+metadata[^=]*=[\s\S]*?};/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]{0,300}\}/g, " ")
    .replace(/["'`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Split into sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

  // Heuristic score: flag sentences with 2+ AI indicators
  const aiIndicators = [
    /\bdelve\b/i, /\btapestry\b/i, /\bintricate\b/i, /\bmeticulous\b/i,
    /\bmultifaceted\b/i, /\bpivotal\b/i, /\bunderscore\b/i, /\bseamless\b/i,
    /\brobust\b/i, /\bfoster\b/i, /\bgarner\b/i, /\bbolster\b/i,
    /\bit(?:'s| is) (?:important|worth noting|essential|critical)/i,
    /\bfurthermore\b/i, /\bmoreover\b/i, /\bin conclusion\b/i,
    /\bnavigating the\b/i, /\blandscape\b/i, /\bempowering\b/i,
    /\bhaving said that\b/i, /\bthat being said\b/i,
    /\bnuanced\b/i, /\bvibrant\b/i, /\binterplay\b/i,
    // Passive voice patterns common in AI
    /\bcan be (?:found|seen|used|obtained|provided)\b/i,
    /\bis (?:designed|intended) to\b/i,
    // Em dash overuse — 2+ in one sentence
  ];

  const flagged = [];
  for (const sentence of sentences) {
    const clean = sentence.trim();
    if (clean.length < 30) continue;
    const hits = aiIndicators.filter(re => re.test(clean)).length;
    const emDashCount = (clean.match(/—/g) || []).length;
    if (hits >= 2 || emDashCount >= 2) {
      flagged.push({ text: clean, score: 0.5 + hits * 0.1 });
    }
  }

  return flagged;
}

// ---------------------------------------------------------------------------
// Claude humanization prompt
// ---------------------------------------------------------------------------
function buildHumanizationPrompt(sentences, pageContext) {
  const sentenceList = sentences
    .map((s, i) => `${i + 1}. "${s.text}"`)
    .join("\n");

  return `You are an editorial rewriter for a licensed Medicare insurance broker's website (Easy Kind Medicare, NJ-based). Your job is to rewrite AI-sounding sentences into direct, specific, human expert writing.

PAGE CONTEXT:
${pageContext}

SENTENCES TO REWRITE:
${sentenceList}

REWRITING RULES — follow all of these exactly:
1. Use ACTIVE VOICE. "You pay 20%" not "20% is paid by the beneficiary."
2. Be SPECIFIC. Replace vague claims with actual Medicare facts (e.g., "$240 Part B deductible in 2026", "80% coverage after deductible", "Plan G covers Part B excess charges").
3. VARY sentence length. Short sentences (under 12 words) mixed with longer ones.
4. REMOVE all the flagged phrases: delve, tapestry, meticulous, seamless, robust, foster, it's worth noting, furthermore, in conclusion, moreover, pivotal, underscore, multifaceted, intricate, landscape, empower/empowering, garner, bolster.
5. Write as a BROKER, not a content marketer. Practical, direct, slightly conversational. No fluff.
6. Keep Medicare-specific terms accurate: plan names (Plan G, Plan N), enrollment periods (IEP, SEP, AEP), CMS terminology.
7. Do NOT change factual claims — only change the writing style. If a fact seems wrong, preserve it and flag it in a "fact_check_note" field.
8. Each rewrite must preserve the original meaning and approximate length (±30%).

Return ONLY valid JSON — an array of objects with this exact shape:
[
  {
    "original": "exact original sentence text",
    "rewrite": "rewritten sentence",
    "fact_check_note": "optional note if a fact seems incorrect, else null"
  }
]

No markdown, no explanation, no wrapper object — just the JSON array.`;
}

// ---------------------------------------------------------------------------
// Apply rewrites to file source via exact string replacement
// ---------------------------------------------------------------------------
function applyRewrites(source, rewrites) {
  let result = source;
  const applied = [];
  const skipped = [];

  for (const item of rewrites) {
    if (!item.original || !item.rewrite) continue;
    if (item.original === item.rewrite) continue; // no change

    // Find the original sentence in the file. It may appear inside JSX string literals.
    // We look for it with escaped-quote variants too.
    const escaped = item.original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(escaped);

    if (re.test(result)) {
      result = result.replace(re, item.rewrite);
      applied.push({ from: item.original.slice(0, 80), to: item.rewrite.slice(0, 80) });
    } else {
      // Try trimmed version (sentence extraction may have added/removed whitespace)
      const trimmedEscaped = item.original.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const trimmedRe = new RegExp(trimmedEscaped);
      if (trimmedRe.test(result)) {
        result = result.replace(trimmedRe, item.rewrite);
        applied.push({ from: item.original.slice(0, 80), to: item.rewrite.slice(0, 80) });
      } else {
        skipped.push(item.original.slice(0, 80));
      }
    }
  }

  return { source: result, applied, skipped };
}

// ---------------------------------------------------------------------------
// Extract a brief page context summary for the Claude prompt
// ---------------------------------------------------------------------------
function extractPageContext(source, filePath) {
  const titleMatch = source.match(/title\s*:\s*\n?\s*"([^"]+)"/);
  const descMatch = source.match(/description\s*:\s*\n?\s*"([^"]+)"/);
  const h1Match = source.match(/<h1[^>]*>([^<]+)<\/h1>/i);

  const title = titleMatch?.[1] || path.basename(path.dirname(filePath));
  const desc = descMatch?.[1] || "";
  const h1 = h1Match?.[1] || "";

  return `Title: ${title}\nDescription: ${desc}\nH1: ${h1}`;
}

// ---------------------------------------------------------------------------
// Main humanize function
// ---------------------------------------------------------------------------
async function humanizeFile(filePath, externalFlaggedSentences = null) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY environment variable not set");

  const client = new Anthropic({ apiKey });
  const source = fs.readFileSync(filePath, "utf8");

  // Get sentences to rewrite
  const sentences = externalFlaggedSentences || extractFlaggedSentences(source);

  if (sentences.length === 0) {
    return { file: filePath, applied: [], skipped: [], factCheckNotes: [], noChangesNeeded: true };
  }

  // Cap to avoid excessive API calls
  const toRewrite = sentences.slice(0, MAX_SENTENCES_PER_RUN);
  const pageContext = extractPageContext(source, filePath);

  console.log(`  Humanizing ${toRewrite.length} sentences in ${path.relative(REPO_ROOT, filePath)}…`);

  const prompt = buildHumanizationPrompt(toRewrite, pageContext);

  const message = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  const rawContent = message.content[0]?.text ?? "";

  // Parse JSON — never eval
  let rewrites;
  try {
    // Strip any accidental markdown code fences
    const cleaned = rawContent.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
    rewrites = JSON.parse(cleaned);
  } catch (e) {
    throw new Error(`Claude returned invalid JSON: ${e.message}\nRaw: ${rawContent.slice(0, 300)}`);
  }

  if (!Array.isArray(rewrites)) {
    throw new Error("Claude response was not a JSON array");
  }

  // Validate shape — each item must have original + rewrite strings
  const valid = rewrites.filter(r =>
    typeof r.original === "string" && typeof r.rewrite === "string"
  );

  // Extract fact-check notes
  const factCheckNotes = valid
    .filter(r => r.fact_check_note)
    .map(r => ({ sentence: r.original.slice(0, 100), note: r.fact_check_note }));

  // Apply to file
  const { source: newSource, applied, skipped } = applyRewrites(source, valid);

  if (newSource !== source) {
    fs.writeFileSync(filePath, newSource, "utf8");
  }

  return { file: filePath, applied, skipped, factCheckNotes };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
async function run() {
  const args = process.argv.slice(2).filter(Boolean);

  if (args.length === 0) {
    console.error("Usage: node humanize-content.js <page-file.tsx> [--flagged-json '[...]']");
    console.error("Example: node humanize-content.js app/hub/plan-g-nj/page.tsx");
    process.exit(1);
  }

  let filePath;
  let externalFlagged = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--flagged-json" && args[i + 1]) {
      try {
        externalFlagged = JSON.parse(args[i + 1]);
      } catch (e) {
        console.error("Error: --flagged-json must be valid JSON array");
        process.exit(1);
      }
      i++;
    } else {
      try {
        filePath = safeResolvePath(args[i]);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
    }
  }

  if (!filePath) {
    console.error("Error: No file path provided");
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    const result = await humanizeFile(filePath, externalFlagged);
    const rel = path.relative(REPO_ROOT, result.file);

    if (result.noChangesNeeded) {
      console.log(`✓ ${rel} — no AI sentences detected, no changes needed`);
      return;
    }

    console.log(`\n✓ ${rel}`);
    console.log(`  Applied ${result.applied.length} rewrites, skipped ${result.skipped.length}`);

    if (result.applied.length > 0) {
      console.log("\n  Changes:");
      for (const { from, to } of result.applied) {
        console.log(`    ← ${from}`);
        console.log(`    → ${to}\n`);
      }
    }

    if (result.factCheckNotes.length > 0) {
      console.log("\n  ⚠  Fact-check notes from Claude:");
      for (const note of result.factCheckNotes) {
        console.log(`    "${note.sentence}"`);
        console.log(`    Note: ${note.note}\n`);
      }
    }

    if (result.skipped.length > 0) {
      console.log(`\n  Skipped (sentence not found verbatim in file):`);
      for (const s of result.skipped) {
        console.log(`    — ${s}`);
      }
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

run();

module.exports = { humanizeFile };
