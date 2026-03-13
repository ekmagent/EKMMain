/**
 * fetch-gsc-data.js
 * Pulls the last 28 days of GSC search analytics for medicareyourself.com
 * Writes output to gsc-data.json for use by seo-research.js
 */

const { google } = require("googleapis");
const fs = require("fs");

async function main() {
  const siteUrl = process.env.SITE_URL;
  if (!siteUrl) throw new Error("SITE_URL env var is required");

  // Decode service account JSON from base64 secret
  const saJson = Buffer.from(process.env.GSC_SERVICE_ACCOUNT_JSON, "base64").toString("utf8");
  const credentials = JSON.parse(saJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  const searchconsole = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 28);

  const fmt = (d) => d.toISOString().split("T")[0];

  console.log(`Fetching GSC data for ${siteUrl} (${fmt(startDate)} → ${fmt(endDate)})`);

  // Fetch page-level data
  const pageResponse = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ["page"],
      rowLimit: 100,
      dataState: "final",
    },
  });

  // Fetch query-level data (top keywords per page)
  const queryResponse = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ["page", "query"],
      rowLimit: 500,
      dataState: "final",
    },
  });

  const output = {
    fetchedAt: new Date().toISOString(),
    period: { startDate: fmt(startDate), endDate: fmt(endDate) },
    pages: pageResponse.data.rows || [],
    queries: queryResponse.data.rows || [],
  };

  fs.writeFileSync("gsc-data.json", JSON.stringify(output, null, 2));
  console.log(`Saved ${output.pages.length} pages, ${output.queries.length} query rows to gsc-data.json`);
}

main().catch((err) => {
  console.error("GSC fetch failed:", err.message);
  process.exit(1);
});
