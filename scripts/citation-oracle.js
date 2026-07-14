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
  // Carrier-review + high-intent queries — added 2026-07-10 with the new pages
  "best plan g rates in new jersey",
  "mutual of omaha medigap review",
  "humana medicare supplement review",
  "medico medicare supplement review",
  "bankers fidelity medicare supplement review",
  "woodmenlife medicare supplement review",
  "mutual of omaha plan g rate increase history",
  // Recommendation-phrased queries — added 2026-07-14. These measure whether the
  // AI NAMES us in the answer (see brand tracking below), not just cites us.
  // Verified 2026-07-14: Perplexity already lists Anthony Orner/MedicareYourself
  // first for the first query; MediPlansNJ wins the Cherry Hill one via her
  // Medicare Agents Hub directory profile.
  "who is the best medicare broker in new jersey",
  "recommend a medicare broker near cherry hill nj",
  "what medicare broker should I use in new jersey",
  // Broker-intent local queries — added 2026-07-12 with /medicare-broker/new-jersey.
  // These are the query classes publisher sites (MoneyGeek/NerdWallet tier) can't
  // serve: the asker wants a licensed local human, not a listicle.
  "medicare broker in new jersey",
  "best medicare broker near me nj",
  "should I use a medicare broker in new jersey",
  "medicare agent cherry hill nj",
  "medicare broker camden county nj",
  "medicare broker ocean county nj",
  "do medigap rates vary by county in new jersey",
  // AB Newswire experiment — target keyword of the 2026-07-12 Rate Index
  // release. If the release earns citations, consider the $500/yr plan.
  "new jersey medigap rates",
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

  // Also check if the domain OR our brand/agent names appear in the answer
  // text itself — a brand-name mention means the AI is RECOMMENDING us, which
  // is a stronger outcome than being a citation footnote.
  const answerText = (data.choices?.[0]?.message?.content || "").toLowerCase();
  const BRAND_TERMS = ["medicareyourself", "easykind", "anthony orner"];
  const mentionedInAnswer =
    answerText.includes(domain) ||
    BRAND_TERMS.some((term) => answerText.includes(term));

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
