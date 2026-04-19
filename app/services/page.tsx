import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SchemaMarkup from "@/components/SchemaMarkup";
import PhoneCTA from "@/components/PhoneCTA";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicare Services & Guides | MedicareYourself",
  description:
    "Compare Medigap, Part D & Medicare Advantage with a licensed independent broker. Free plan reviews and condition-specific guides—call 855-559-1700 today.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Medicare Services & Guides | MedicareYourself",
    description:
      "Find a Medicare broker, compare Medigap plans, get condition-specific guidance, and explore local agents near you. Free, independent help: 855-559-1700.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Services",
      item: "https://medicareyourself.com/services",
    },
  ],
};

/* ── Category rules ─────────────────────────────────────────────────────
 * Edward Module 06: group BOF pages under H2 categories.
 * Order within each category: highest-intent/volume first.
 * Slug-based pattern matching assigns each page to exactly one category.
 * ──────────────────────────────────────────────────────────────────────── */

interface HubLink {
  href: string;
  label: string;
}

interface CategoryRule {
  heading: string;
  test: (slug: string) => boolean;
}

const CATEGORY_RULES: CategoryRule[] = [
  {
    heading: "Medicare for specific health conditions",
    test: (s) =>
      /broker-for-(people-with-|alzheimers|anxiety|arthritis|asthma|atrial|back-pain|bipolar|cancer|cataracts|chronic-pain|congestive|copd|dementia|depression|diabeti|dialysis|epilepsy|fibromyalgia|glaucoma|hearing|heart-disease|high-blood|high-cholesterol|hip-replace|kidney|knee-replace|lupus|macular|multiple-sclerosis|neuropathy|obesity|osteoporosis|parkinsons|peripheral|ptsd|rheumatoid|schizophrenia|sleep-apnea|stroke|thyroid|transplant)/.test(s) ||
      /enrollment-help-for-people-with/.test(s) ||
      /best-medicare-plan-for-(chronic|dialysis|foreign)/.test(s) ||
      /supplement-insurance-for-crohns/.test(s) ||
      /best-medicare-plan-for-someone-with-diabetes/.test(s) ||
      /supplemental-plan-best-for-copd/.test(s) ||
      /supplement-if-you-are-on-disability/.test(s) ||
      /supplement-plan-if-you-have-a-pre-existing/.test(s) ||
      /supplement-for-people-on-disability/.test(s) ||
      /agent-for-someone-with-pre-existing/.test(s) ||
      /broker-for-people-on-disability/.test(s),
  },
  {
    heading: "Medicare agents in New Jersey",
    test: (s) =>
      /(insurance-agents-in-|agents-in-|specialists-in-cranford|medicare-in-monmouth).*new-jersey/.test(s) ||
      /-nj($|-)|in-.*-nj($|-)/.test(s) ||
      /find-a-medicare-agent-in-/.test(s) ||
      /local-medicare-agents-in-/.test(s) ||
      /hackensack-nj|hillsborough-nj|hoboken-nj|howell-nj|irvington-nj|jackson-nj|kearny-nj|lakewood-nj|linden-nj/.test(s) ||
      /broker-near-me-new-jersey/.test(s) ||
      /free-medicare-broker-new-jersey/.test(s) ||
      /how-to-enroll-in-medicare-in-new-jersey/.test(s) ||
      /advise-in-new-jersey/.test(s) ||
      /advisors-nj/.test(s) ||
      /how-much-is-plan-(f|g)-in-nj/.test(s) ||
      /plan-g-rates.*new-jersey/.test(s),
  },
  {
    heading: "Plan G & Plan N rates, costs, and enrollment",
    test: (s) =>
      /plan-g-cost|plan-g-rate|plan-n-rate|enroll.*plan-g|enroll.*plan-n|compare-and-enroll|quote-and-enroll|enroll-in-plan-g/.test(s) ||
      /quickest-way-to-enroll/.test(s) ||
      /same-day-medicare-supplement-enrollment/.test(s) ||
      /supplement-open-enrollment/.test(s) ||
      /best-medicare-supplement-rates-by-age/.test(s),
  },
  {
    heading: "Medicare Supplement costs and rate changes",
    test: (s) =>
      /cost-per-month|cost-of-medicare-supplement|cost-of-supplemental|medigap-cost/.test(s) ||
      /rate-jumped|rate-change|premium-hikes|premiums-increasing|save-money-on-my-medicare-supplement/.test(s) ||
      /when-can-i-change-my-medicare-supplement/.test(s) ||
      /what-time-of-year-can-you-switch|switch-medigap-plans/.test(s) ||
      /how-long-does-it-take/.test(s) ||
      /best-and-cheapest-medicare-supplement/.test(s),
  },
  {
    heading: "Find a Medicare broker or agent",
    test: (s) =>
      /broker|agent|advisor|advocate|consultant|specialist/.test(s) &&
      !/nj|new-jersey|jersey/.test(s) &&
      !/broker-for-(people|alzheimers|anxiety|arthritis|asthma|atrial|back-pain|bipolar|cancer|cataracts|chronic|congestive|copd|dementia|depression|diabeti|dialysis|epilepsy|fibromyalgia|glaucoma|hearing|heart|high-blood|high-cholesterol|hip|kidney|knee|lupus|macular|multiple|neuropathy|obesity|osteoporosis|parkinsons|peripheral|ptsd|rheumatoid|schizophrenia|sleep|stroke|thyroid|transplant)/.test(s),
  },
  {
    heading: "Medicare enrollment and decisions",
    test: (s) =>
      /enroll|turning-65|medicare-quotes|help-with-your-medicare-decision|quickest-way-to-enroll-into-medicare-advantage/.test(s),
  },
];

/**
 * Reads all /services/[slug]/page.tsx at build time, extracts H1 or title,
 * and assigns each to a category based on slug patterns.
 */
function getCategorizedPages(): { heading: string; links: HubLink[] }[] {
  const hubDir = path.join(process.cwd(), "app", "services");

  let entries: string[];
  try {
    entries = fs.readdirSync(hubDir).sort();
  } catch {
    return [];
  }

  const categorized: Map<string, HubLink[]> = new Map();
  for (const rule of CATEGORY_RULES) {
    categorized.set(rule.heading, []);
  }
  const uncategorized: HubLink[] = [];

  for (const entry of entries) {
    const pagePath = path.join(hubDir, entry, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    const source = fs.readFileSync(pagePath, "utf8");

    // Extract H1 (preferred anchor text per Edward Module 06)
    const h1Match = source.match(/<h1[^>]*>\s*([^<]+?)\s*<\/h1>/i);
    const titleMatch = source.match(/title:\s*"([^"]+)"/);
    const label =
      h1Match?.[1]?.trim() ||
      titleMatch?.[1]?.replace(/\s*\|.*$/, "").trim() ||
      entry.replace(/-/g, " ");

    const link: HubLink = { href: `/services/${entry}`, label };

    // Assign to first matching category
    let matched = false;
    for (const rule of CATEGORY_RULES) {
      if (rule.test(entry)) {
        categorized.get(rule.heading)!.push(link);
        matched = true;
        break;
      }
    }
    if (!matched) {
      uncategorized.push(link);
    }
  }

  // Build result — only include categories that have pages
  const result: { heading: string; links: HubLink[] }[] = [];
  for (const rule of CATEGORY_RULES) {
    const links = categorized.get(rule.heading)!;
    if (links.length > 0) {
      result.push({ heading: rule.heading, links });
    }
  }
  if (uncategorized.length > 0) {
    result.push({ heading: "More Medicare guides", links: uncategorized });
  }

  return result;
}

/* ── Static categories — hand-curated pages outside /services ─────────── */

const STATIC_CATEGORIES = [
  {
    heading: "Plan comparisons and education",
    links: [
      { href: "/medicare-supplement/new-jersey/plan-g-vs-plan-n", label: "Medigap Plan G vs Plan N in New Jersey (2026)" },
      { href: "/medicare-supplement/new-jersey/vs-medicare-advantage", label: "Medigap vs Medicare Advantage in New Jersey (2026)" },
      { href: "/learn/what-is-medigap", label: "What Is Medigap? Medicare Supplement Insurance Explained" },
      { href: "/learn/medicare-parts-explained", label: "Medicare Parts A, B, C, and D Explained Simply" },
      { href: "/medicare-supplement/new-jersey/cost", label: "How Much Does Medicare Cost in New Jersey in 2026?" },
      { href: "/learn/medicare-help-low-income", label: "Medicare Help for People on a Fixed Income" },
      { href: "/medicare-supplement/switch-carriers", label: "How to Switch Medicare Supplement Carriers" },
    ],
  },
  {
    heading: "Enrollment guides",
    links: [
      { href: "/medicare-supplement/new-jersey/turning-65", label: "Turning 65 in New Jersey: Your Medicare Checklist" },
      { href: "/learn/how-to-sign-up-for-medicare", label: "How and When to Sign Up for Medicare (2026)" },
      { href: "/learn/ssa-online-enrollment-walkthrough", label: "SSA.gov Online Enrollment: Step-by-Step Walkthrough" },
    ],
  },
  {
    heading: "Medicare by state",
    links: [
      { href: "/medicare-supplement/new-jersey", label: "Best Medicare Supplement Plans in New Jersey (2026)" },
      { href: "/medicare-supplement/pennsylvania", label: "Best Medicare Supplement Plans in Pennsylvania (2026)" },
      { href: "/medicare-advantage/new-jersey", label: "Best Medicare Advantage Plans in New Jersey (2026)" },
    ],
  },
,
  {
    question: "What services does a Medicare broker provide?",
    answer:
      "An independent Medicare broker helps you compare Medigap, Medicare Advantage, and Part D plans from multiple carriers based on your doctors, medications, and budget. The service is free to you because brokers are paid by the insurance companies after you enroll. A licensed broker can also assist with enrollment paperwork and annual plan reviews.",
  },
  {
    question: "How much does Medicare cost in 2026?",
    answer:
      "In 2026, the standard Part B premium is ,
  {
    question: "What does it cost to work with an independent Medicare broker?",
    answer:
      "There is no cost to you. Licensed Medicare brokers are compensated by the insurance carriers, so plan premiums are the same whether you enroll through a broker or directly with the carrier. You get personalized plan comparisons and ongoing support at no charge.",
  },
  {
    question: "How do I compare Medigap, Part D, and Medicare Advantage plans?",
    answer:
      "Medigap supplements Original Medicare by covering out-of-pocket costs like the Part A ,
  {
    question: "What does it cost to work with an independent Medicare broker?",
    answer:
      "Working with a licensed independent Medicare broker is free to you. Brokers are paid directly by the insurance carriers, and the commission is already built into the plan premium, so you pay the same rate whether you enroll through a broker or on your own. Call 855-559-1700 for a no-cost plan review.",
  },
  {
    question: "How much are Medicare Part A and Part B costs in 2026?",
    answer:
      "In 2026, the standard Part B premium is ];

export default85 per month with an annual deductible of $257. Part A has a hospital deductible of ];

export default,676 per benefit period, and most people pay no Part A premium if they have enough work history. Higher-income beneficiaries may pay an income-related adjustment on Part B and Part D.",
  },
  {
    question: "What's the difference between Medigap, Medicare Advantage, and Part D?",
    answer:
      "Medigap (Medicare Supplement) plans work alongside Original Medicare to help pay your share of costs like deductibles and coinsurance. Medicare Advantage (Part C) replaces Original Medicare with a private plan that typically includes drug coverage and extra benefits. Part D is standalone prescription drug coverage you add to Original Medicare or a Medigap plan.",
  }
];

export default,676 deductible and Part B 20% coinsurance. Part D covers prescription drugs, while Medicare Advantage (Part C) bundles Parts A, B, and usually D into one plan. A licensed broker can run a side-by-side comparison based on your doctors, medications, and budget.",
  },
  {
    question: "When can I enroll in or change my Medicare plan?",
    answer:
      "Your Initial Enrollment Period spans seven months around your 65th birthday. After that, the Annual Enrollment Period runs October 15 to December 7 for Part D and Medicare Advantage changes. Medigap has its own six-month open enrollment window starting when you're 65 and enrolled in Part B. Call 855-559-1700 to review your options.",
  }
];

export default85 per month with a $257 annual deductible, and the Part A hospital deductible is ];

export default,676 per benefit period. Most people pay no premium for Part A if they or a spouse paid Medicare taxes for at least 10 years. Medigap, Medicare Advantage, and Part D premiums vary by plan and ZIP code.",
  },
  {
    question: "Can I get help enrolling in Medicare for free?",
    answer:
      "Yes. Licensed independent brokers offer no-cost guidance and enrollment help, and you can also contact Medicare directly at 1-800-MEDICARE or your State Health Insurance Assistance Program (SHIP). Call 855-559-1700 to speak with a licensed broker for a plan comparison tailored to your needs.",
  }
];

export default function ServicesHubPage() {
  const dynamicCategories = getCategorizedPages();

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-gray-900 font-medium">Medicare Services</span>
      </nav>

      {/* Hero — H1 + intro (Edward Module 06) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Medicare Services
        </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          We help Medicare beneficiaries find the right coverage with free,
          unbiased guidance from a licensed independent broker. Here are the
          most common ways people use our services:
        </p>
      </section>

      {/* Static categories (hand-curated pages outside /services) */}
      <section className="max-w-6xl mx-auto px-4 pb-8 space-y-10">
        {STATIC_CATEGORIES.map((category) => (
          <div key={category.heading}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category.heading}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Dynamic categories (auto-categorized /services/[slug] pages) */}
      <section className="max-w-6xl mx-auto px-4 pb-12 space-y-10">
        {dynamicCategories.map((category) => (
          <div key={category.heading}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category.heading}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA (Edward Module 06) */}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Have a Medicare Question Not Covered Here?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Call Anthony directly for a free, no-pressure conversation about
            your Medicare options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA size="lg" label="Call 855-559-1700" />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Free &middot; Independent &middot; Licensed in NJ and 34 states
          </p>
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/" rel="noopener noreferrer" target="_blank">Medicare.gov</a> · <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank">Find &amp; compare plans</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: see the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/shipp.htm" rel="noopener noreferrer" target="_blank">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </>
  );
}
