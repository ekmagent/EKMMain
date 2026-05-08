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
    "Compare Medigap, Medicare Advantage & Part D with a licensed independent broker in 35 states. Free, unbiased plan reviews — call 855-559-1700.",
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
    question: "What services does a Medicare insurance broker provide?",
    answer:
      "A licensed Medicare broker helps you compare Medigap (Medicare Supplement), Medicare Advantage, and Part D drug plans across multiple carriers. Brokers can explain eligibility, enrollment windows, and plan differences, and they submit your application at no cost to you. Carriers pay the broker directly, so the consultation is free.",
  },
  {
    question: "Is there a cost to use MedicareYourself for plan help?",
    answer:
      "No. Our guidance, plan comparisons, and enrollment assistance are free to consumers. Insurance carriers compensate licensed brokers when a policy is issued, so you pay the same premium whether you enroll with a broker or directly with the carrier.",
  },
  {
    question: "Can you help with Medicare in states outside New Jersey?",
    answer:
      "Yes. Anthony Orner is licensed in New Jersey and 34 additional states, so we can help with plan selection and enrollment in most of the country. Call 855-559-1700 to confirm availability in your state and review plans in your ZIP code.",
  }
,
  {
    question: "Does it cost anything to work with a Medicare broker?",
    answer:
      "No. Licensed Medicare brokers are paid directly by the insurance carriers, so there is no cost to you for plan comparisons, enrollment help, or ongoing support. You pay the same premium whether you enroll through a broker or on your own. Working with an independent broker gives you access to multiple carriers in one conversation.",
  },
  {
    question: "What's the difference between a Medigap plan and a Medicare Advantage plan?",
    answer:
      "Medigap (Medicare Supplement) plans work alongside Original Medicare to help cover out-of-pocket costs like coinsurance and deductibles, and they let you see any provider that accepts Medicare. Medicare Advantage (Part C) plans replace Original Medicare with a private plan that usually uses provider networks and may include extra benefits. You cannot have both at the same time, so choosing the right path matters.",
  },
  {
    question: "When can I enroll in or change my Medicare plan?",
    answer:
      "Most people first enroll during their Initial Enrollment Period around their 65th birthday. After that, the Annual Enrollment Period (October 15 – December 7) lets you change Medicare Advantage and Part D plans, and Medigap can often be applied for year-round, subject to medical underwriting outside of guaranteed-issue windows. You can verify current enrollment windows at medicare.gov.",
  }
,
  {
    question: "What does a licensed Medicare broker help with?",
    answer:
      "A licensed independent Medicare broker helps you compare Medigap, Medicare Advantage, and Part D plans across multiple carriers. They explain enrollment windows, eligibility rules, and coverage differences so you can choose a plan that fits your health needs and budget. Working with an independent broker is free to you — carriers pay the broker directly.",
  },
  {
    question: "Is there a cost to use MedicareYourself's services?",
    answer:
      "No. Our services are free to consumers. Licensed brokers are compensated by insurance carriers, so your premium is the same whether you enroll on your own or with our help. Call 855-559-1700 to speak with a licensed broker at no cost.",
  },
  {
    question: "Which states does MedicareYourself serve?",
    answer:
      "Anthony Orner is a licensed Medicare insurance broker in New Jersey and 34 additional states. We help beneficiaries compare plans, review carriers available in their ZIP code, and enroll during their Initial Enrollment Period, Open Enrollment, or a qualifying Special Enrollment Period.",
  }
,
  {
    question: "What does an independent Medicare broker do?",
    answer:
      "An independent Medicare broker is licensed to compare plans from multiple insurance carriers and help you choose coverage that fits your health needs and budget. There is no cost to you for working with a broker — carriers pay a standard commission set by CMS. You can also get free, unbiased counseling from your State Health Insurance Assistance Program (SHIP) at any time.",
  },
  {
    question: "Which Medicare plan types can I compare on this site?",
    answer:
      "We help you compare Medicare Supplement (Medigap) plans, Medicare Advantage (Part C) plans, and stand-alone Part D prescription drug plans. Each plan type works differently with Original Medicare, so the right choice depends on your doctors, prescriptions, and travel needs. Call 855-559-1700 to walk through the options with a licensed broker.",
  },
  {
    question: "When can I enroll or switch Medicare plans?",
    answer:
      "Most people first enroll during their seven-month Initial Enrollment Period around their 65th birthday. After that, the Annual Enrollment Period (October 15–December 7) and the Medicare Advantage Open Enrollment Period (January 1–March 31) allow plan changes. Medigap can often be applied for year-round, though medical underwriting may apply outside your Open Enrollment window.",
  }
,
  {
    question: "What does an independent Medicare broker do?",
    answer:
      "An independent Medicare broker is a licensed agent appointed with multiple insurance carriers, which means they can compare Medigap, Medicare Advantage, and Part D plans across companies on your behalf. There is no cost to you for using a broker — carriers pay a standardized commission set by CMS. Call 855-559-1700 to get unbiased help comparing your options.",
  },
  {
    question: "Which Medicare plans can you help me compare?",
    answer:
      "We help you compare Medicare Supplement (Medigap) plans like Plan G and Plan N, Medicare Advantage (Part C) plans, and stand-alone Part D prescription drug plans. We review your doctors, prescriptions, and budget to narrow the field. You can also compare plans yourself at Medicare.gov before scheduling a call.",
  },
  {
    question: "Do I have to switch plans every year?",
    answer:
      "No, but it is wise to review your coverage every year during the Medicare Annual Enrollment Period (October 15 – December 7) because plan benefits, networks, and drug formularies can change. Medigap policies are guaranteed renewable, but Advantage and Part D plans are renewed annually. We offer free annual reviews at 855-559-1700.",
  }
,
  {
    question: "What does an independent Medicare broker do?",
    answer:
      "An independent Medicare broker is licensed to compare plans from multiple insurance carriers and help you choose coverage that fits your health needs and budget. Brokers explain the differences between Original Medicare, Medigap, Medicare Advantage, and Part D drug plans. There is no cost to work with a broker — carriers pay the commission directly. You can reach our office at 855-559-1700.",
  },
  {
    question: "Are your Medicare services free to use?",
    answer:
      "Yes. Working with our licensed broker costs you nothing out of pocket, and your plan premium is the same whether you enroll through us or directly with the carrier. We are paid by the insurance company after you enroll, not by you. You can review official plan details anytime at Medicare.gov.",
  },
  {
    question: "Which states does MedicareYourself serve?",
    answer:
      "Anthony Orner (NPI 1902584006) is a licensed Medicare insurance broker based in New Jersey and appointed in 34 additional states. We help beneficiaries compare Medigap, Medicare Advantage, and Part D options across our service area. Call 855-559-1700 to confirm coverage in your state.",
  }
,
  {
    question: "What Medicare services does an independent broker help with?",
    answer:
      "A licensed independent broker can help you compare Medigap (Medicare Supplement), Medicare Advantage, and Part D prescription drug plans across multiple carriers. Brokers also assist with enrollment timing, switching plans during the Annual Enrollment Period, and answering questions about what Original Medicare covers. There is no cost to you for working with a broker.",
  },
  {
    question: "Is there a fee to use MedicareYourself for plan comparisons?",
    answer:
      "No. Our guidance is free to consumers because licensed brokers are compensated by the insurance carriers when a policy is issued. You pay the same premium whether you enroll directly with the carrier or through a broker. Call 855-559-1700 to get unbiased comparisons across the carriers we represent.",
  },
  {
    question: "How do I know which Medicare plan type is right for me?",
    answer:
      "The right plan depends on your doctors, prescriptions, travel habits, and budget for premiums versus out-of-pocket costs. Medigap plans pair with Original Medicare and offer broad provider access nationwide, while Medicare Advantage plans typically use networks and may include extra benefits. A broker can walk you through the trade-offs based on your specific situation.",
  }
,
  {
    question: "What does an independent Medicare broker do?",
    answer:
      "An independent Medicare broker is licensed to compare plans from multiple insurance carriers and help you choose coverage that fits your health and budget. The service is free to you because brokers are compensated by the carriers, not by clients. Anthony Orner is licensed in New Jersey and 34 additional states and works with most major Medicare carriers.",
  },
  {
    question: "Are there any fees for using MedicareYourself's services?",
    answer:
      "No. There is no charge to compare plans, get quotes, or enroll through our office. Medicare brokers are paid directly by the insurance company you choose, and the rate you pay for a plan is the same whether you enroll through a broker, the carrier, or on your own.",
  },
  {
    question: "How do I get started comparing Medicare plans?",
    answer:
      "Call 855-559-1700 to speak with Anthony Orner, a licensed Medicare insurance broker. He'll review your prescriptions, doctors, and budget, then walk you through Medigap, Medicare Advantage, and Part D options available in your ZIP code. You can also use the official plan finder at Medicare.gov to research on your own first.",
  }
,
  {
    question: "What does an independent Medicare broker actually do?",
    answer:
      "An independent Medicare broker compares plans from multiple insurance carriers to help you find coverage that fits your health needs and budget. Brokers are licensed by each state's Department of Banking and Insurance and contracted with carriers to enroll you at no extra cost. You pay the same premium whether you enroll directly with a carrier or through a broker.",
  },
  {
    question: "Is there a fee to work with MedicareYourself?",
    answer:
      "No. Our services are free to you because licensed brokers are compensated directly by the insurance carriers when a plan is issued. You will never receive a bill from us, and your premium is not increased by working with a broker. Call 855-559-1700 to get unbiased plan comparisons.",
  },
  {
    question: "What's the difference between Medicare Advantage, Medigap, and Part D?",
    answer:
      "Medicare Advantage (Part C) bundles your Part A, Part B, and usually Part D into a single private plan, often with extra benefits and network rules. Medigap (Medicare Supplement) works alongside Original Medicare to help cover out-of-pocket costs like deductibles and coinsurance. Part D is standalone prescription drug coverage paired with Original Medicare or a Medigap plan.",
  }
,
  {
    question: "What types of Medicare plans can a licensed broker help me compare?",
    answer:
      "A licensed independent Medicare broker can help you compare Medicare Supplement (Medigap) plans, Medicare Advantage (Part C) plans, and standalone Part D prescription drug plans. The goal is to match your doctors, prescriptions, and budget to a plan that fits. You can also get help understanding Original Medicare Parts A and B before adding coverage.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker?",
    answer:
      "No. Working with a licensed Medicare broker is free to you — brokers are paid a standard commission by the insurance carrier when you enroll, and that commission does not change your premium. You pay the same rate whether you enroll directly with the carrier or through a broker. Call 855-559-1700 to get unbiased plan comparisons at no cost.",
  },
  {
    question: "How do I know if a Medicare agent is licensed and trustworthy?",
    answer:
      "You can verify any agent's license through your state's Department of Banking and Insurance and confirm their National Producer Number (NPN) on NIPR.com. Anthony Orner is licensed in NJ and 34 additional states under NPN 1902584006. Medicare.gov also offers free, official guidance if you'd like to cross-check plan details.",
  }
,
  {
    question: "What does a licensed Medicare broker do?",
    answer:
      "A licensed Medicare broker helps you compare Medigap, Medicare Advantage, and Part D plans from multiple carriers so you can choose coverage that fits your health needs and budget. Brokers are appointed with insurance companies and must be licensed in your state. There is no cost to you for using a broker — carriers pay the broker directly. Call 855-559-1700 to speak with a licensed broker.",
  },
  {
    question: "Are Medicare broker services really free?",
    answer:
      "Yes. Independent Medicare brokers are compensated by the insurance carriers when a client enrolls, so you pay the same premium whether you enroll on your own or with a broker. Working with a broker also gives you ongoing support during the Annual Enrollment Period and when life changes affect your coverage. You can also get free, unbiased counseling from your State Health Insurance Assistance Program (SHIP).",
  },
  {
    question: "When can I enroll in or change a Medicare plan?",
    answer:
      "Most people first become eligible during their Initial Enrollment Period, a 7-month window around their 65th birthday. After that, the Annual Enrollment Period (October 15 – December 7) lets you change Medicare Advantage and Part D plans. Medigap has its own one-time Open Enrollment Period that begins when you're 65 and enrolled in Part B. Special Enrollment Periods may also apply if you lose other coverage.",
  }
,
  {
    question: "What does an independent Medicare broker do?",
    answer:
      "An independent Medicare broker is a licensed insurance professional who can compare plans from multiple carriers on your behalf, including Medigap, Medicare Advantage, and Part D drug plans. There is no fee to you for using a broker — carriers compensate brokers directly. The goal is to match you with a plan that fits your doctors, prescriptions, and budget.",
  },
  {
    question: "Is there a cost to get help from MedicareYourself?",
    answer:
      "No. Our plan reviews, quotes, and enrollment assistance are free to you. Brokers are paid by the insurance carrier when an enrollment is completed, and the premium you pay is the same whether you use a broker or enroll directly. Call 855-559-1700 to speak with a licensed broker.",
  },
  {
    question: "Can I switch Medicare plans after I enroll?",
    answer:
      "Yes, but the rules depend on the plan type. Medicare Advantage and Part D plans can typically be changed during the Annual Enrollment Period each fall or during a Special Enrollment Period if you qualify. Medigap plan changes may require medical underwriting outside of your initial enrollment window, so timing matters.",
  }
,
  {
    question: "What types of Medicare plans can a licensed broker help me compare?",
    answer:
      "A licensed independent broker can help you compare Medicare Supplement (Medigap) plans, Medicare Advantage (Part C) plans, and standalone Part D prescription drug plans. Brokers represent multiple carriers, so you can review options side-by-side based on your doctors, prescriptions, and budget. You can also verify plan details directly at Medicare.gov.",
  },
  {
    question: "Is there a fee to use a Medicare broker?",
    answer:
      "No. Working with a licensed Medicare broker is free to you — brokers are compensated by the insurance carriers when a plan is issued. Commissions are regulated by CMS and are the same across plans of the same type, so there is no financial incentive to steer you toward one carrier over another.",
  },
  {
    question: "How do I know if a Medicare agent is licensed in my state?",
    answer:
      "You can verify any agent's license through your state Department of Insurance website. Anthony Orner (NPI 1902584006) is licensed in New Jersey and 34 additional states. Always confirm an agent is appointed with the carriers they recommend before enrolling.",
  }
,
  {
    question: "What does a licensed Medicare broker do?",
    answer:
      "A licensed Medicare broker helps you compare Medigap, Medicare Advantage, and Part D plans across multiple carriers so you can choose coverage that fits your health needs and budget. Brokers are paid by the insurance companies, so their guidance is free to you. An independent broker is not tied to one carrier, which means broader plan choices.",
  },
  {
    question: "Is there a cost to use MedicareYourself for plan comparisons?",
    answer:
      "No. Working with our licensed broker is free for consumers. Insurance carriers compensate brokers directly, and using a broker does not change your plan premium or benefits compared to enrolling on your own.",
  },
  {
    question: "Can I switch Medicare plans after I enroll?",
    answer:
      "Yes, but the rules depend on the plan type and time of year. Medicare Advantage and Part D plans can typically be changed during the Annual Enrollment Period each fall. Medigap plan changes may require medical underwriting outside of your initial enrollment or a guaranteed issue period.",
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov</a> · <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Find & compare plans</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank">NJ Department of Banking and Insurance</a> or contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ SHIP</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ SHIP (State Health Insurance Assistance Program)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medicare counseling.</div>
      </section>
    </>
  );
}
