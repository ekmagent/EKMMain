#!/usr/bin/env node
/**
 * fix-cross-links.js
 * Ensures every service page's "Related resources" section links to
 * real, existing sibling service pages in the same topic cluster.
 *
 * Strategy: group pages into topic clusters, then for each page,
 * ensure its Related resources links include 3-4 siblings from the same cluster
 * plus 1 link to a high-value cross-cluster page.
 */

const fs = require("fs");
const path = require("path");

const servicesDir = path.join(__dirname, "..", "app", "services");

// Get all existing slugs
const allSlugs = fs.readdirSync(servicesDir).filter(d => {
  const full = path.join(servicesDir, d);
  return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "page.tsx"));
});

// ── Topic clusters ──────────────────────────────────────────────────────
// Each cluster maps a regex pattern to a list of recommended cross-link slugs
// Pages matching the pattern should link to these slugs (if they don't already)
const clusters = [
  {
    name: "NJ city/county agents",
    match: /medicare-insurance-agents-in-|find-a-medicare-agent-in-|local-medicare-agents-in-|-nj-medicare-insurance-agents|hackensack|hillsborough|hoboken|howell|irvington|jackson|kearny|lakewood|linden|medicare-in-monmouth/,
    links: [
      "find-an-nj-medicare-broker-near-you",
      "free-medicare-broker-new-jersey",
      "independent-medicare-agents-near-me",
      "how-to-enroll-in-medicare-in-new-jersey",
    ],
  },
  {
    name: "condition-specific brokers",
    match: /medicare-broker-for-(alzheimers|arthritis|asthma|atrial|back-pain|bipolar|cataracts|chronic-pain|congestive|copd|dementia|depression|diabetics|dialysis|epilepsy|fibromyalgia|glaucoma|hearing|heart-disease|high-blood|high-cholesterol|hip-replacement|kidney|knee-replacement|lupus|macular|multiple-sclerosis|neuropathy|obesity|osteoporosis|parkinsons|peripheral|ptsd|rheumatoid|schizophrenia|sleep-apnea|stroke|thyroid|transplant)/,
    links: [
      "best-medicare-plan-for-chronic-conditions",
      "medicare-broker-for-people-with-pre-existing-conditions",
      "you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
      "help-with-your-medicare-decision",
    ],
  },
  {
    name: "condition-specific people-with",
    match: /medicare-broker-for-people-with-|medicare-enrollment-help-for-people-with-|medicare-supplement-insurance-for-crohns|whats-the-best-medicare-plan-for-someone-with|which-medicare-supplemental-plan-best-for-copd|what-is-the-best-medicare-plan-for-dialysis/,
    links: [
      "best-medicare-plan-for-chronic-conditions",
      "medicare-broker-for-people-with-pre-existing-conditions",
      "you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
      "help-with-your-medicare-decision",
    ],
  },
  {
    name: "disability",
    match: /disability|people-on-disability/,
    links: [
      "you-get-a-medicare-supplement-if-you-are-on-disability",
      "best-medicare-supplement-for-people-on-disability",
      "medicare-broker-for-people-on-disability",
      "help-with-your-medicare-decision",
    ],
  },
  {
    name: "Plan G enrollment/rates",
    match: /plan-g|enroll.*plan-g|plan-g-rates|plan-g-cost|compare-and-enroll-in-plan-g|quote-and-enroll-in-plan-g|quickest-way-to-enroll-into-plan-g|enroll-in-plan-g/,
    links: [
      "compare-and-enroll-in-plan-g-online",
      "how-much-is-plan-g-in-nj",
      "best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates",
      "quickest-way-to-enroll-into-plan-g",
    ],
  },
  {
    name: "Plan N",
    match: /plan-n|quickest-way-to-enroll-into-plan-n/,
    links: [
      "quickest-way-to-enroll-into-plan-n",
      "compare-and-enroll-in-plan-g-online",
      "best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates",
      "how-much-is-plan-g-in-nj",
    ],
  },
  {
    name: "costs/rates/savings",
    match: /cost|rate|save-money|cheapest|premium|how-much|average-cost|exploring-medicare-supplemental|price/,
    links: [
      "best-and-cheapest-medicare-supplement",
      "best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates",
      "how-much-does-medicare-supplement-cost-per-month-for-seniors",
      "how-can-i-save-money-on-my-medicare-supplement",
    ],
  },
  {
    name: "rate changes/switching",
    match: /rate-jumped|rate-change|switch|when-can-i-change|what-time-of-year|premium-hikes|premiums-increasing/,
    links: [
      "why-did-my-medicare-supplement-rate-change",
      "what-time-of-year-can-you-switch-medicare-supplement-plans",
      "when-can-i-change-my-medicare-supplement-plan-for-2026",
      "medicare-supplement-rate-jumped-why-and-what-can-i-do",
    ],
  },
  {
    name: "independent broker/agent",
    match: /independent-medicare|free-medicare-broker|free-independent|best-medicare-broker|best-medicare-insurance-broker|medicare-agents-near|medicare-agent-near|medicare-insurance-agent|medicare-brokers-in|local-medicare-agent$|licensed-medicare|us-medicare-brokers|top-medicare|medicare-advise|medicare-advisors/,
    links: [
      "independent-medicare-agents-near-me",
      "best-medicare-broker-no-cost-to-you",
      "free-medicare-broker-new-jersey",
      "help-with-your-medicare-decision",
    ],
  },
  {
    name: "enrollment help",
    match: /enroll|how-to-enroll|same-day|medicare-supplement-open-enrollment|how-long-does-it-take|quickest-way/,
    links: [
      "how-to-enroll-in-medicare-in-new-jersey",
      "how-long-does-it-take-to-enroll-in-medicare-supplements",
      "how-long-does-it-take-to-get-approved-for-a-medicare-supplement-plan",
      "same-day-medicare-supplement-enrollment-form",
    ],
  },
  {
    name: "medicare quotes",
    match: /quote|medicare-quotes/,
    links: [
      "medicare-quotes",
      "compare-and-enroll-in-plan-g-online",
      "best-and-cheapest-medicare-supplement",
      "help-with-your-medicare-decision",
    ],
  },
  {
    name: "out-of-state",
    match: /tampa|ft-lauderdale|south-carolina|abq-nm|california|texas|cranford/,
    links: [
      "us-medicare-brokers",
      "independent-medicare-agents-near-me",
      "help-with-your-medicare-decision",
      "best-medicare-plan-for-chronic-conditions",
    ],
  },
  {
    name: "foreign travel",
    match: /foreign-travel/,
    links: [
      "best-and-cheapest-medicare-supplement",
      "compare-and-enroll-in-plan-g-online",
      "help-with-your-medicare-decision",
      "independent-medicare-agents-near-me",
    ],
  },
  {
    name: "paperwork/advocacy",
    match: /paperwork|advocate|help-with/,
    links: [
      "free-medicare-advocate-near-me",
      "free-medicare-agent-that-helps-with-paperwork",
      "medicare-agent-that-helps-with-paperwork-near-me",
      "help-with-your-medicare-decision",
    ],
  },
  {
    name: "pre-existing conditions",
    match: /pre-existing/,
    links: [
      "you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
      "best-medicare-plan-for-chronic-conditions",
      "how-long-does-it-take-to-get-approved-for-a-medicare-supplement-plan",
      "help-with-your-medicare-decision",
    ],
  },
];

// Default fallback links for pages that don't match any cluster
const defaultLinks = [
  "help-with-your-medicare-decision",
  "best-and-cheapest-medicare-supplement",
  "independent-medicare-agents-near-me",
  "compare-and-enroll-in-plan-g-online",
];

let filesModified = 0;
let linksAdded = 0;

for (const slug of allSlugs) {
  const filePath = path.join(servicesDir, slug, "page.tsx");
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // Find which cluster(s) this page belongs to
  let recommendedLinks = [];
  for (const cluster of clusters) {
    if (cluster.match.test(slug)) {
      for (const link of cluster.links) {
        if (link !== slug && !recommendedLinks.includes(link)) {
          recommendedLinks.push(link);
        }
      }
    }
  }

  // If no cluster matched, use defaults
  if (recommendedLinks.length === 0) {
    recommendedLinks = defaultLinks.filter(l => l !== slug);
  }

  // Cap at 4 links
  recommendedLinks = recommendedLinks.slice(0, 4);

  // Check which recommended links are already in the file
  const missingLinks = recommendedLinks.filter(link => {
    return !content.includes(`/services/${link}`);
  });

  if (missingLinks.length === 0) continue;

  // Only add links that point to pages that actually exist
  const validMissing = missingLinks.filter(link => allSlugs.includes(link));
  if (validMissing.length === 0) continue;

  // Find the Related resources section — match various HTML patterns
  // Pattern 1: <section ...><h2 ...>Related resources</h2><ul ...>...</ul>
  const relatedPattern = /(Related resources<\/h2>\s*<ul[^>]*>)([\s\S]*?)(<\/ul>)/;
  const match = content.match(relatedPattern);

  if (match) {
    // Detect which link class the existing links use
    const linkClass = content.includes('text-blue-700 hover:underline')
      ? 'text-blue-700 hover:underline'
      : 'text-blue-600 hover:underline';

    // Add new links before the </ul>
    const newLinks = validMissing.map(link => {
      const title = link
        .replace(/-/g, " ")
        .replace(/\bnj\b/gi, "NJ")
        .replace(/\b\w/g, c => c.toUpperCase());
      return `            <li>
              <Link
                href="/services/${link}"
                className="${linkClass}"
              >
                ${title}
              </Link>
            </li>`;
    }).join("\n");

    content = content.replace(
      relatedPattern,
      `$1$2${newLinks}\n$3`
    );
    linksAdded += validMissing.length;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    filesModified++;
  }
}

console.log(`\n✓ Added ${linksAdded} cross-links across ${filesModified} files\n`);
