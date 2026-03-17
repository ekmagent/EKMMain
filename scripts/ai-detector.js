/**
 * ai-detector.js
 * Detects AI-generated content using the GPTZero API.
 *
 * Returns:
 *  - document-level AI probability score (0–1)
 *  - sentence-level scores (for targeted humanization)
 *  - pass/fail result against configurable threshold
 *
 * Usage:
 *   node ai-detector.js app/hub/some-page/page.tsx
 *   node ai-detector.js app/hub/some-page/page.tsx --threshold 0.7
 *   node ai-detector.js              (scans all pages, reports scores)
 *
 * Exit codes:
 *   0 — all pages pass (AI score below threshold)
 *   1 — one or more pages exceed threshold (use in CI gates)
 *
 * Required env var:
 *   GPTZERO_API_KEY — get from https://app.gptzero.me/api
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const REPO_ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "app");
const GPTZERO_ENDPOINT = "api.gptzero.me";
const GPTZERO_PATH = "/v2/predict/text";

// Pages with overall_burstiness above this are flagged for humanization
const DEFAULT_THRESHOLD = 0.65;

// Sentence-level: flag sentences with AI probability >= this
const SENTENCE_THRESHOLD = 0.80;

// Minimum plain-text length to bother sending (GPTZero needs ~250 chars)
const MIN_TEXT_LENGTH = 250;

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
// Text extraction — strip JSX/TSX syntax to get plain prose
// ---------------------------------------------------------------------------
function extractPlainText(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, " ") // block comments
    .replace(/\/\/.*/g, " ") // line comments
    .replace(/import\s+.*?from\s+['"][^'"]+['"]\s*;?/g, " ") // import statements
    .replace(/export\s+(const|default|function|async)\s+[^{(]*[{(]/g, " ") // export declarations
    .replace(/const\s+metadata[^=]*=[\s\S]*?};/g, " ") // metadata object
    .replace(/<[A-Z][^>]*\/>/g, " ") // self-closing React components
    .replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, " ") // React component blocks
    .replace(/<[^>]+>/g, " ") // HTML/JSX tags
    .replace(/\{[^}]{0,300}\}/g, " ") // short JS expressions
    .replace(/["'`]/g, " ") // quotes
    .replace(/\s+/g, " ")
    .trim();
}

// ---------------------------------------------------------------------------
// GPTZero API call
// ---------------------------------------------------------------------------
function callGptzero(text, apiKey) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      document: text,
      multilingual: false,
    });

    const options = {
      hostname: GPTZERO_ENDPOINT,
      port: 443,
      path: GPTZERO_PATH,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`GPTZero: JSON parse error — ${e.message}`));
          }
        } else if (res.statusCode === 402) {
          reject(new Error("GPTZero: API quota exceeded. Check your plan at https://app.gptzero.me/api"));
        } else if (res.statusCode === 401) {
          reject(new Error("GPTZero: Invalid API key. Set GPTZERO_API_KEY env var."));
        } else {
          reject(new Error(`GPTZero: HTTP ${res.statusCode} — ${data}`));
        }
      });
    });

    req.on("error", (e) => reject(new Error(`GPTZero: Network error — ${e.message}`)));
    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Parse GPTZero response into a structured result
// ---------------------------------------------------------------------------
function parseGptzeroResponse(apiResponse, filePath, threshold) {
  const doc = apiResponse.documents?.[0];
  if (!doc) {
    throw new Error("GPTZero: Unexpected response shape — no documents array");
  }

  const score = doc.completely_generated_prob ?? 0;
  const perplexity = doc.average_generated_prob ?? null;
  const classification = doc.predicted_class ?? "unknown"; // "human", "ai", "mixed"

  // Sentence-level scores
  const flaggedSentences = [];
  if (doc.sentences && Array.isArray(doc.sentences)) {
    for (const s of doc.sentences) {
      if ((s.generated_prob ?? 0) >= SENTENCE_THRESHOLD) {
        flaggedSentences.push({
          text: s.sentence,
          score: Math.round((s.generated_prob ?? 0) * 100) / 100,
        });
      }
    }
  }

  return {
    file: filePath,
    score: Math.round(score * 100) / 100,
    classification,
    perplexity,
    flaggedSentences,
    passed: score < threshold,
    threshold,
  };
}

// ---------------------------------------------------------------------------
// Analyze a single file
// ---------------------------------------------------------------------------
async function analyzeFile(filePath, apiKey, threshold) {
  const source = fs.readFileSync(filePath, "utf8");
  const text = extractPlainText(source);

  if (text.length < MIN_TEXT_LENGTH) {
    return {
      file: filePath,
      score: null,
      classification: "skipped",
      flaggedSentences: [],
      passed: true,
      threshold,
      reason: `Text too short (${text.length} chars) — skipped`,
    };
  }

  const apiResponse = await callGptzero(text, apiKey);
  return parseGptzeroResponse(apiResponse, filePath, threshold);
}

// ---------------------------------------------------------------------------
// Discover pages
// ---------------------------------------------------------------------------
function discoverPages(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      discoverPages(full, results);
    } else if (entry.name === "page.tsx") {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Print a result
// ---------------------------------------------------------------------------
function printResult(result) {
  const rel = path.relative(REPO_ROOT, result.file);
  const scoreStr = result.score !== null ? `${(result.score * 100).toFixed(0)}%` : "N/A";
  const status = result.classification === "skipped"
    ? "⏭  SKIP"
    : result.passed
    ? "✓  PASS"
    : "✗  FAIL";

  console.log(`${status}  ${rel}  [AI: ${scoreStr}] [${result.classification ?? ""}]`);

  if (result.reason) {
    console.log(`       ${result.reason}`);
  }

  if (!result.passed && result.flaggedSentences.length > 0) {
    console.log(`       Flagged sentences (${result.flaggedSentences.length}):`);
    for (const s of result.flaggedSentences.slice(0, 5)) {
      const preview = s.text.length > 120 ? s.text.slice(0, 120) + "…" : s.text;
      console.log(`         [${(s.score * 100).toFixed(0)}%] ${preview}`);
    }
    if (result.flaggedSentences.length > 5) {
      console.log(`         … and ${result.flaggedSentences.length - 5} more`);
    }
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
async function run() {
  const apiKey = process.env.GPTZERO_API_KEY;
  if (!apiKey) {
    console.error("Error: GPTZERO_API_KEY environment variable not set.");
    console.error("Get your API key at: https://app.gptzero.me/api");
    process.exit(1);
  }

  // Parse args — support: [filePath] [--threshold N]
  const args = process.argv.slice(2).filter(Boolean);
  let filePaths = [];
  let threshold = DEFAULT_THRESHOLD;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--threshold" && args[i + 1]) {
      const t = parseFloat(args[i + 1]);
      if (isNaN(t) || t < 0 || t > 1) {
        console.error("Error: --threshold must be a number between 0 and 1");
        process.exit(1);
      }
      threshold = t;
      i++; // skip next arg
    } else {
      let resolved;
      try {
        resolved = safeResolvePath(args[i]);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
      filePaths.push(resolved);
    }
  }

  if (filePaths.length === 0) {
    filePaths = discoverPages(APP_DIR);
    console.log(`Scanning ${filePaths.length} page files under app/  [threshold: ${(threshold * 100).toFixed(0)}%]\n`);
  }

  let failCount = 0;
  const allResults = [];

  for (const filePath of filePaths) {
    try {
      const result = await analyzeFile(filePath, apiKey, threshold);
      allResults.push(result);
      printResult(result);
      if (!result.passed) failCount++;
      // Small delay to stay within API rate limits
      if (filePaths.length > 1) await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      console.error(`Error processing ${path.relative(REPO_ROOT, filePath)}: ${err.message}`);
    }
  }

  if (filePaths.length > 1) {
    const passCount = allResults.filter(r => r.passed).length;
    console.log(`\nResults: ${passCount} passed, ${failCount} failed (threshold: ${(threshold * 100).toFixed(0)}%)`);
    if (failCount > 0) {
      console.log("\nRun humanize-content.js on failing pages:");
      for (const r of allResults.filter(r => !r.passed)) {
        console.log(`  node scripts/humanize-content.js ${path.relative(REPO_ROOT, r.file)}`);
      }
    }
  }

  // Export results for editorial-pipeline.js to consume
  process.env._AI_DETECTOR_RESULTS = JSON.stringify(allResults);
  process.exitCode = failCount > 0 ? 1 : 0;
}

run().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});

module.exports = { analyzeFile, extractPlainText };
