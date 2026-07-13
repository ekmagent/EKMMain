/**
 * serp-tracker.js
 * Checks Google SERP positions for target keywords via Serper.dev.
 * Logs to serp-log.tsv — weekly rank tracking signal.
 */

const fs = require("fs");
const path = require("path");

const SITE_DOMAIN = "medicareyourself.com";

// Local competitors tracked head-to-head (positions logged to competitor-serp-log.tsv
// from the same API responses — no extra Serper calls).
const COMPETITOR_DOMAINS = [
  "mediplansnj.com",
  "njseniorhealth.com",
  "njlifeandhealth.com",
  "thebig65.com",
];

const TARGET_QUERIES = [
  "best medicare supplement plans new jersey 2026",
  "best medigap plans in NJ",
  "best medigap plans new jersey",
  "medigap plan g new jersey cost",
  "medicare supplement vs medicare advantage new jersey",
  "turning 65 in new jersey medicare",
  "plan g vs plan n new jersey",
  "what is medigap insurance",
  "what is medigap",
  "medicare supplement plans pennsylvania 2026",
  "best medicare supplement plans pennsylvania",
  "medicare parts a b c d explained",
  "medigap open enrollment new jersey",
  "switch medigap plans",
  "how to sign up for medicare",
  "medicare help low income",
  "irmaa medicare surcharge",
  // Carrier-review + high-intent queries — added 2026-07-10 with the new pages
  "best plan g rates in new jersey",
  "mutual of omaha medigap review",
  "humana medicare supplement review",
  "medico medicare supplement review",
  "bankers fidelity medicare supplement review",
  "woodmenlife medicare supplement review",
  "compare medigap policies",
  // Local-domination queries — added 2026-07-12 with the /medicare-broker/new-jersey cluster.
  // Watch mediplansnj.com, njseniorhealth.com, njlifeandhealth.com, thebig65.com on these.
  "medicare broker nj",
  "medicare broker new jersey",
  "medicare agent new jersey",
  "best medicare broker nj",
  "medicare broker near me new jersey",
  "cherry hill nj medicare agent",
  "medicare broker camden county nj",
  "medicare broker ocean county nj",
  "medicare broker bergen county nj",
  "medicare broker monmouth county nj",
  "medicare agent toms river nj",
  "medicare agent lakewood nj",
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

  const competitorLogPath = path.resolve(__dirname, "..", "competitor-serp-log.tsv");
  if (!fs.existsSync(competitorLogPath)) {
    fs.writeFileSync(
      competitorLogPath,
      "date\tquery\tdomain\tposition\turl\n",
      "utf8"
    );
  }

  const rows = [];
  const competitorRows = [];
  let ranked = 0;
  let top10 = 0;

  for (const query of TARGET_QUERIES) {
    try {
      console.log(`Checking SERP: "${query}"`);
      const data = await serpSearch(query, apiKey);
      const { position, url, title } = findPosition(data, SITE_DOMAIN);

      for (const domain of COMPETITOR_DOMAINS) {
        const comp = findPosition(data, domain);
        competitorRows.push(
          [today, query, domain, comp.position, comp.url].join("\t")
        );
      }

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
  if (competitorRows.length > 0) {
    fs.appendFileSync(competitorLogPath, competitorRows.join("\n") + "\n", "utf8");
  }

  console.log(
    `\nSERP tracker complete: ${ranked}/${TARGET_QUERIES.length} queries ranked, ${top10} in top 10`
  );
}

main().catch((err) => {
  console.error("serp-tracker failed:", err.message);
  process.exit(1);
});
