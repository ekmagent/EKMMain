/**
 * serp-tracker.js
 * Checks Google SERP positions for target keywords via Serper.dev.
 * Logs to serp-log.tsv — weekly rank tracking signal.
 */

const fs = require("fs");
const path = require("path");

const SITE_DOMAIN = "medicareyourself.com";

const TARGET_QUERIES = [
  "best medicare supplement plans new jersey 2026",
  "medigap plan g new jersey cost",
  "medicare supplement vs medicare advantage new jersey",
  "turning 65 in new jersey medicare",
  "plan g vs plan n new jersey",
  "what is medigap insurance",
  "medicare supplement plans pennsylvania 2026",
  "best medicare supplement plans pennsylvania",
  "medicare parts a b c d explained",
  "medigap open enrollment new jersey",
];

async function serpSearch(query, apiKey) {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: query,
      gl: "us",
      hl: "en",
      num: 20,
    }),
  });

  if (!res.ok) {
    throw new Error(`Serper API error: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

function findPosition(data, domain) {
  const organic = data.organic || [];
  for (let i = 0; i < organic.length; i++) {
    const result = organic[i];
    if (result.link && result.link.includes(domain)) {
      return { position: i + 1, url: result.link, title: result.title };
    }
  }

  // Check featured snippet / answer box
  if (data.answerBox?.link?.includes(domain)) {
    return { position: 0, url: data.answerBox.link, title: data.answerBox.title || "Answer Box" };
  }

  return { position: -1, url: "", title: "" };
}

async function main() {
  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) throw new Error("SERPER_API_KEY env var is required");

  const today = new Date().toISOString().split("T")[0];
  const logPath = path.resolve(__dirname, "..", "serp-log.tsv");

  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "date\tquery\tposition\turl\ttitle\n",
      "utf8"
    );
  }

  const rows = [];
  let ranked = 0;
  let top10 = 0;

  for (const query of TARGET_QUERIES) {
    try {
      console.log(`Checking SERP: "${query}"`);
      const data = await serpSearch(query, apiKey);
      const { position, url, title } = findPosition(data, SITE_DOMAIN);

      if (position === -1) {
        console.log(`  ✗ Not in top 20`);
      } else if (position === 0) {
        console.log(`  ★ Answer Box / Featured Snippet`);
        ranked++;
        top10++;
      } else {
        console.log(`  Position ${position}: ${url}`);
        ranked++;
        if (position <= 10) top10++;
      }

      rows.push([today, query, position, url, title].join("\t"));

      // Small delay to be polite
      await new Promise((r) => setTimeout(r, 500));
    } catch (err) {
      console.error(`  Error for "${query}": ${err.message}`);
      rows.push([today, query, "error", "", ""].join("\t"));
    }
  }

  fs.appendFileSync(logPath, rows.join("\n") + "\n", "utf8");

  console.log(
    `\nSERP tracker complete: ${ranked}/${TARGET_QUERIES.length} queries ranked, ${top10} in top 10`
  );
}

main().catch((err) => {
  console.error("serp-tracker failed:", err.message);
  process.exit(1);
});
