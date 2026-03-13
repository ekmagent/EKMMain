/**
 * citation-oracle.js
 * Queries Perplexity with target Medicare keywords.
 * Checks if medicareyourself.com appears in citations.
 * Logs to citation-log.tsv — this is our GEO share-of-voice metric.
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

async function queryPerplexity(query, apiKey) {
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
      max_tokens: 512,
      return_citations: true,
      return_related_questions: false,
    }),
  });

  if (!res.ok) {
    throw new Error(`Perplexity API error: ${res.status} ${await res.text()}`);
  }

  return res.json();
}

function checkCitation(data, domain) {
  // Citations come back in data.citations (array of URLs)
  const citations = data.citations || [];
  const cited = citations.some((url) => url.includes(domain));
  const citedUrl = citations.find((url) => url.includes(domain)) || "";

  // Also check if domain appears in the answer text itself
  const answerText = data.choices?.[0]?.message?.content || "";
  const mentionedInAnswer = answerText.toLowerCase().includes(domain);

  return { cited, citedUrl, mentionedInAnswer, allCitations: citations };
}

async function main() {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) throw new Error("PERPLEXITY_API_KEY env var is required");

  const today = new Date().toISOString().split("T")[0];
  const logPath = path.resolve(__dirname, "..", "citation-log.tsv");

  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "date\tquery\tcited\tcitation_url\tmentioned_in_answer\tall_citations\n",
      "utf8"
    );
  }

  let citedCount = 0;
  const rows = [];

  for (const query of TARGET_QUERIES) {
    try {
      console.log(`Querying: "${query}"`);
      const data = await queryPerplexity(query, apiKey);
      const { cited, citedUrl, mentionedInAnswer, allCitations } = checkCitation(data, SITE_DOMAIN);

      if (cited || mentionedInAnswer) {
        citedCount++;
        console.log(`  ✓ CITED: ${citedUrl || "(in answer text)"}`);
      } else {
        console.log(`  ✗ Not cited. Top citations: ${allCitations.slice(0, 3).join(", ")}`);
      }

      rows.push(
        [
          today,
          query,
          cited ? "yes" : "no",
          citedUrl,
          mentionedInAnswer ? "yes" : "no",
          allCitations.slice(0, 5).join("|"),
        ].join("\t")
      );

      // Rate limit: 1 req/sec
      await new Promise((r) => setTimeout(r, 1100));
    } catch (err) {
      console.error(`  Error for "${query}": ${err.message}`);
      rows.push([today, query, "error", "", "no", ""].join("\t"));
    }
  }

  fs.appendFileSync(logPath, rows.join("\n") + "\n", "utf8");

  const score = citedCount / TARGET_QUERIES.length;
  console.log(
    `\nCitation oracle complete: ${citedCount}/${TARGET_QUERIES.length} queries cited (${(score * 100).toFixed(0)}% share of voice)`
  );
}

main().catch((err) => {
  console.error("citation-oracle failed:", err.message);
  process.exit(1);
});
