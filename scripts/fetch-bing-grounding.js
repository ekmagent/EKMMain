/**
 * fetch-bing-grounding.js
 * Fetches AI grounding queries from Bing Webmaster Tools.
 *
 * Grounding queries = the actual searches LLMs run to find and cite your content.
 * Optimizing for these directly improves citations in ChatGPT, Copilot, Perplexity.
 *
 * Each run:
 *  1. Calls Bing Webmaster API for AI performance / grounding queries
 *  2. Saves to bing-grounding.json
 *  3. Logs to bing-grounding-log.tsv
 *
 * The weekly seo-research.js loop reads bing-grounding.json to prioritize
 * which queries to optimize pages for.
 */

const fs = require("fs");
const path = require("path");

const SITE_URL = process.env.BING_WEBMASTER_SITE_URL || "https://medicareyourself.com";

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

async function fetchGroundingQueries(apiKey) {
  // Bing Webmaster Tools API — AI Performance grounding queries
  const url = `https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats` +
    `?apikey=${encodeURIComponent(apiKey)}` +
    `&siteUrl=${encodeURIComponent(SITE_URL)}`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Bing API error ${res.status}: ${text.slice(0, 200)}`);
  }

  return res.json();
}

async function fetchAIPerformance(apiKey) {
  // Bing AI Performance report (grounding queries — beta endpoint)
  const url = `https://ssl.bing.com/webmaster/api.svc/json/GetAIQueryStats` +
    `?apikey=${encodeURIComponent(apiKey)}` +
    `&siteUrl=${encodeURIComponent(SITE_URL)}`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    // AI Performance is in beta — may not be available yet
    console.log(`  AI Performance endpoint not available (${res.status}) — may need beta access`);
    return null;
  }

  return res.json();
}

async function main() {
  const apiKey = process.env.BING_WEBMASTER_API_KEY;
  if (!apiKey) throw new Error("BING_WEBMASTER_API_KEY env var required");

  const today = new Date().toISOString().split("T")[0];
  const logPath = repoPath("bing-grounding-log.tsv");

  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\ttype\tquery\timpressionsClicks\tavgPosition\n", "utf8");
  }

  const output = { date: today, queries: [], aiQueries: [] };
  const logRows = [];

  // Standard query stats
  console.log("Fetching Bing query stats...");
  try {
    const data = await fetchGroundingQueries(apiKey);
    const queries = data?.d?.results || data?.Results || [];
    output.queries = queries.slice(0, 50); // top 50
    for (const q of output.queries) {
      logRows.push([today, "serp", q.Query || "", q.Clicks || 0, q.AvgPosition || ""].join("\t"));
    }
    console.log(`  Got ${output.queries.length} SERP queries`);
  } catch (err) {
    console.error(`  Query stats error: ${err.message}`);
  }

  // AI grounding queries (beta)
  console.log("Fetching Bing AI grounding queries...");
  try {
    const aiData = await fetchAIPerformance(apiKey);
    if (aiData) {
      const aiQueries = aiData?.d?.results || aiData?.Results || [];
      output.aiQueries = aiQueries.slice(0, 50);
      for (const q of output.aiQueries) {
        logRows.push([today, "ai_grounding", q.Query || "", q.Clicks || 0, q.AvgPosition || ""].join("\t"));
      }
      console.log(`  Got ${output.aiQueries.length} AI grounding queries`);
    }
  } catch (err) {
    console.error(`  AI grounding error: ${err.message}`);
  }

  // Save results
  fs.writeFileSync(repoPath("bing-grounding.json"), JSON.stringify(output, null, 2), "utf8");

  if (logRows.length > 0) {
    fs.appendFileSync(logPath, logRows.join("\n") + "\n", "utf8");
  }

  // Print top AI grounding queries if available
  if (output.aiQueries.length > 0) {
    console.log("\nTop AI grounding queries (what LLMs search to find you):");
    output.aiQueries.slice(0, 10).forEach((q, i) => {
      console.log(`  ${i + 1}. "${q.Query}" — pos ${q.AvgPosition || "?"}`);
    });
  } else {
    console.log("\nNo AI grounding queries yet — data accumulates over time as LLMs crawl the site.");
  }

  console.log(`\nBing grounding fetch complete. Results saved to bing-grounding.json`);
}

main().catch((err) => {
  console.error("fetch-bing-grounding failed:", err.message);
  process.exit(1);
});
