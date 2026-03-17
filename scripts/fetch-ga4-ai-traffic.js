/**
 * fetch-ga4-ai-traffic.js
 * Pulls AI referral traffic from Google Analytics 4.
 *
 * Finds sessions that came from ChatGPT, Perplexity, Claude, Copilot, Gemini,
 * and other LLMs — showing which pages get the most AI-driven visits.
 *
 * Each run:
 *  1. Calls GA4 Data API for session source/medium + page path
 *  2. Filters to AI referrer sessions (regex on source)
 *  3. Saves to ga4-ai-traffic.json
 *  4. Logs to ga4-ai-traffic-log.tsv
 *
 * Requires:
 *  GA4_PROPERTY_ID  — numeric GA4 property ID (e.g. "123456789")
 *  GA4_SERVICE_ACCOUNT_JSON — base64-encoded service account JSON
 *                             (same pattern as GSC_SERVICE_ACCOUNT_JSON)
 *
 * Run: node scripts/fetch-ga4-ai-traffic.js
 */

const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// AI referrer sources — matches session source dimension in GA4
const AI_SOURCE_PATTERN =
  /chatgpt|openai|perplexity|claude|anthropic|copilot|gemini|mistral|meta\.ai|jasper|cohere|you\.com|phind|bing.*chat|bard/i;

function repoPath(...parts) {
  return path.resolve(__dirname, "..", ...parts);
}

async function main() {
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) throw new Error("GA4_PROPERTY_ID env var required");

  const saB64 = process.env.GA4_SERVICE_ACCOUNT_JSON;
  if (!saB64) throw new Error("GA4_SERVICE_ACCOUNT_JSON env var required");

  const credentials = JSON.parse(Buffer.from(saB64, "base64").toString("utf8"));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });

  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 28);
  const fmt = (d) => d.toISOString().split("T")[0];

  console.log(`Fetching GA4 AI traffic for property ${propertyId} (${fmt(startDate)} → ${fmt(today)})`);

  // Pull all session source/page data — filter AI sources client-side
  // GA4 regex filters have limited syntax; client-side is simpler and more maintainable
  const response = await analyticsdata.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate: fmt(startDate), endDate: fmt(today) }],
      dimensions: [
        { name: "sessionSource" },
        { name: "sessionMedium" },
        { name: "pagePath" },
      ],
      metrics: [
        { name: "sessions" },
        { name: "screenPageViews" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 1000,
    },
  });

  const rows = response.data.rows || [];

  // Filter to AI referrer sources
  const aiRows = rows.filter((row) => {
    const source = row.dimensionValues?.[0]?.value || "";
    const medium = row.dimensionValues?.[1]?.value || "";
    return AI_SOURCE_PATTERN.test(source) || AI_SOURCE_PATTERN.test(medium);
  });

  // Shape results
  const aiTraffic = aiRows.map((row) => ({
    source: row.dimensionValues[0].value,
    medium: row.dimensionValues[1].value,
    page: row.dimensionValues[2].value,
    sessions: parseInt(row.metricValues[0].value, 10),
    views: parseInt(row.metricValues[1].value, 10),
  }));

  // Aggregate by source for summary
  const bySource = {};
  for (const r of aiTraffic) {
    const key = `${r.source} / ${r.medium}`;
    bySource[key] = (bySource[key] || 0) + r.sessions;
  }

  const totalSessions = aiTraffic.reduce((s, r) => s + r.sessions, 0);

  const output = {
    fetchedAt: new Date().toISOString(),
    period: { startDate: fmt(startDate), endDate: fmt(today) },
    totalAiSessions: totalSessions,
    bySource,
    rows: aiTraffic,
  };

  // Save JSON
  fs.writeFileSync(repoPath("ga4-ai-traffic.json"), JSON.stringify(output, null, 2), "utf8");

  // Append to log
  const logPath = repoPath("ga4-ai-traffic-log.tsv");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(logPath, "date\tsource\tmedium\tpage\tsessions\tviews\n", "utf8");
  }
  const today_str = fmt(today);
  const logRows = aiTraffic.map((r) =>
    [today_str, r.source, r.medium, r.page, r.sessions, r.views].join("\t")
  );
  if (logRows.length > 0) {
    fs.appendFileSync(logPath, logRows.join("\n") + "\n", "utf8");
  }

  // Print summary
  console.log(`\nTotal AI referral sessions (last 28 days): ${totalSessions}`);
  if (Object.keys(bySource).length > 0) {
    console.log("\nBy source:");
    Object.entries(bySource)
      .sort((a, b) => b[1] - a[1])
      .forEach(([src, count]) => console.log(`  ${src}: ${count} sessions`));

    // Top pages getting AI traffic
    const byPage = {};
    for (const r of aiTraffic) {
      byPage[r.page] = (byPage[r.page] || 0) + r.sessions;
    }
    console.log("\nTop pages receiving AI traffic:");
    Object.entries(byPage)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .forEach(([page, count]) => console.log(`  ${page}: ${count} sessions`));
  } else {
    console.log("No AI referral sessions yet — data accumulates as LLMs start recommending your content.");
  }

  console.log(`\nSaved to ga4-ai-traffic.json`);
}

main().catch((err) => {
  console.error("fetch-ga4-ai-traffic failed:", err.message);
  process.exit(1);
});
