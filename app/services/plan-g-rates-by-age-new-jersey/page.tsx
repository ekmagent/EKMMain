import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan G Rates by Age in New Jersey | 2026 Costs | MedicareYourself",
  description:
    "Compare 2026 Plan G rates by age in New Jersey. Anthony Orner shops top NJ Medigap carriers to lock in your lowest premium. Call 855-559-1700 for a free quote.",
  alternates: { canonical: `${SITE_URL}/services/plan-g-rates-by-age-new-jersey` },
  openGraph: {
    title: "Plan G Rates by Age in New Jersey | 2026 Costs | MedicareYourself",
    description:
      "See real Plan G rates for ages 65-70+ in New Jersey. Anthony Orner compares top carriers by age to find your lowest rate. Free quote in 2 minutes.",
  },
};

const faqs = [
  {
    question: "How much does Plan G cost for a 65-year-old in New Jersey?",
    answer:
      "Plan G rates for a 65-year-old in New Jersey range from about $125 to $210 per month depending on the carrier, your county, and whether you use tobacco. During your Medigap Open Enrollment Period (first 6 months after enrolling in Part B), carriers cannot charge more based on health conditions.",
  },
  {
    question: "Do Plan G rates increase as you get older in NJ?",
    answer:
      "It depends on the carrier's pricing method. Most NJ carriers use attained-age rating, meaning premiums increase as you age. A few use issue-age rating, where the rate is based on your age when you first buy the policy and only increases due to inflation — not aging. Issue-age carriers tend to cost more upfront but less over time.",
  },
  {
    question: "Can I switch Plan G carriers at age 70 in New Jersey?",
    answer:
      "Yes. You can apply to switch Medigap carriers at any time of year — there is no annual enrollment period for Medigap. Outside your initial 6-month Open Enrollment Period, carriers may use medical underwriting. If you are in good health, switching is usually straightforward. Call to check which carriers are accepting applications in your county.",
  },
  {
    question: "Why are Plan G rates different in different NJ counties?",
    answer:
      "Carriers price Medigap policies by rating area, which often aligns with counties. Northern NJ counties like Bergen, Essex, and Morris tend to have higher premiums than southern NJ counties like Cape May and Cumberland. The coverage is identical everywhere — only the price differs.",
  },
  {
    question: "Is Plan G worth it at age 70?",
    answer:
      "For most people, yes. At 70 you are more likely to use medical services, and Plan G covers everything except the $283 annual Part B deductible. Without Plan G, you would pay 20% of all Part B services with no out-of-pocket cap. One hospital stay or surgery could cost thousands. The predictable monthly premium protects against unpredictable bills.",
  },
,
  {
    question: "Does New Jersey have guaranteed issue for Medigap year-round?",
    answer:
      "No. New Jersey follows the federal rule that guarantees Medigap issue during your 6-month Medigap Open Enrollment Period, which starts when you are 65 or older and enrolled in Part B. Outside that window, carriers may use medical underwriting unless you qualify for a specific guaranteed-issue situation under federal law.",
  }
,
  {
    question: "Does New Jersey use community rating for Medigap?",
    answer:
      "New Jersey carriers may use community-rated, issue-age, or attained-age pricing depending on the company. Community-rated plans charge the same premium regardless of age, while attained-age plans increase as you grow older. Anthony Orner can compare both pricing structures across NJ carriers to find the best long-term value for your situation.",
  },
  {
    question: "When is the best age to lock in a Plan G rate in NJ?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge more for health conditions. Locking in younger generally means a lower starting premium, especially with attained-age carriers.",
  }
,
  {
    question: "What does Plan G cover that Original Medicare does not in New Jersey?",
    answer:
      "Plan G covers your Part A hospital coinsurance and deductible, Part B coinsurance, the first three pints of blood, skilled nursing facility coinsurance, hospice coinsurance, and 80% of foreign travel emergency care up to plan limits. The only gap left is the annual Part B deductible, which you pay once per year before Plan G picks up the rest. Coverage is standardized federally, so Plan G in NJ works the same as Plan G in any other state.",
  },
  {
    question: "Can Anthony Orner help me compare Plan G rates across NJ carriers?",
    answer:
      "Yes. As a licensed Medicare insurance broker in New Jersey, Anthony Orner contracts with multiple Medigap carriers and can run side-by-side rate comparisons by your exact age, ZIP code, and tobacco status. There is no cost to use a broker — carriers pay the same commission regardless of how you enroll. Call 855-559-1700 for a free quote.",
  }
,
  {
    question: "How does the 6-month Medigap Open Enrollment Period work in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period is a one-time, 6-month window that begins the month you are 65 or older and enrolled in Medicare Part B. During this window, NJ carriers must sell you any Plan G they offer at their best available rate, regardless of your health history. Once it ends, carriers can use medical underwriting to approve or decline your application.",
  },
  {
    question: "Are Plan G benefits the same across every NJ carrier?",
    answer:
      "Yes. Plan G is standardized by federal law, so the benefits are identical no matter which carrier you choose in New Jersey. The only differences are the monthly premium, the carrier's rate-increase history, and customer service. That is why comparing rates by age across carriers is the smartest way to shop.",
  },
  {
    question: "How can Anthony Orner help me find the lowest Plan G rate in NJ?",
    answer:
      "Anthony Orner is a licensed Medicare insurance broker representing multiple top-rated carriers in New Jersey. He compares Plan G rates by your exact age, ZIP code, and tobacco status to identify the lowest premium available to you. Call 855-559-1700 for a free, no-obligation quote in about two minutes.",
  }
,
  {
    question: "Does the federal Medigap Open Enrollment Period apply in New Jersey?",
    answer:
      "Yes. The federal 6-month Medigap Open Enrollment Period applies in New Jersey. It begins the month you are 65 or older and enrolled in Medicare Part B. During that window, carriers must sell you any Plan G they offer at their best available rate without medical underwriting.",
  },
  {
    question: "How does New Jersey rate Medigap premiums?",
    answer:
      "New Jersey allows carriers to use different rating methods, including community-rated, issue-age, and attained-age pricing. Each method affects how your Plan G premium changes over time. Anthony Orner can walk you through how each NJ carrier prices Plan G so you can compare apples to apples. Call 855-559-1700 for help.",
  },
  {
    question: "Where can I see official NJ Medicare Supplement rate information?",
    answer:
      "The New Jersey Department of Human Services Division of Aging Services publishes Medicare Supplement rate charts each year, and the NJ Department of Banking and Insurance regulates carriers selling Medigap in the state. You can also call NJ SHIP for free, unbiased counseling on Medigap options.",
  }
,
  {
    question: "Where can I find official NJ Medigap rate charts by age?",
    answer:
      "The New Jersey Department of Human Services, Division of Aging Services, publishes Medigap premium charts comparing carriers by age and gender. These charts are updated periodically and are available on nj.gov. They are useful for cross-checking quotes, but a licensed broker can confirm the current rate in your specific county.",
  },
  {
    question: "Does the Medigap Open Enrollment Period restart if I move within NJ?",
    answer:
      "No. Your 6-month Medigap Open Enrollment Period only happens once — when you are 65 or older and first enrolled in Part B. Moving between NJ counties does not reopen guaranteed issue, though some carriers may offer competitive rates without underwriting in certain situations. Call 855-559-1700 to review your options.",
  }
,
  {
    question: "How does the 6-month Medigap Open Enrollment Period work in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period begins the month you are 65 or older and enrolled in Medicare Part B, and it lasts 6 months. During this window, NJ carriers must sell you any Plan G policy they offer at their best available rate, regardless of health history. After this window closes, medical underwriting may apply unless you qualify for a federal guaranteed-issue right.",
  },
  {
    question: "Should I compare Plan G rates from multiple NJ carriers?",
    answer:
      "Yes. Plan G benefits are standardized by federal law, so every carrier's Plan G covers the exact same services. The only differences are price, customer service, and rate stability over time. Anthony Orner compares all major NJ carriers side by side so you can see which one offers the lowest rate for your age and county.",
  }
,
  {
    question: "How does the 6-month Medigap Open Enrollment Period affect my Plan G rate in NJ?",
    answer:
      "Your Medigap Open Enrollment Period begins the month you are 65 or older and enrolled in Part B, and it lasts 6 months. During this window, NJ carriers must sell you any Plan G they offer at their best available rate without medical underwriting. Applying during this period typically locks in the lowest price you will qualify for.",
  }
,
  {
    question: "Does tobacco use affect Plan G rates in New Jersey?",
    answer:
      "Yes, most NJ Medigap carriers charge higher premiums for tobacco users. The surcharge varies by company and can add a meaningful amount to your monthly premium. If you have quit, ask the carrier about their non-tobacco eligibility window, since some require 12 months tobacco-free.",
  },
  {
    question: "Can I get a household discount on Plan G in NJ?",
    answer:
      "Several New Jersey Medigap carriers offer household or spousal discounts when two people in the same home enroll, or sometimes just when another adult lives in the household. Discount amounts vary by company. Anthony Orner can check which carriers in your county currently offer this discount.",
  }
,
  {
    question: "Where can I find an official NJ Plan G rate comparison chart?",
    answer:
      "The New Jersey Department of Human Services, Division of Aging Services, publishes annual Medigap rate charts comparing Plan G and other plans by age and carrier. These charts are available through the NJ SHIP program. Anthony Orner can walk you through the current chart and identify the most competitive carrier for your county — call 855-559-1700.",
  }
,
  {
    question: "What is the Medigap Open Enrollment Period in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period is a one-time 6-month window that starts the month you are 65 or older and enrolled in Medicare Part B. During this window, NJ carriers must sell you any Plan G policy they offer at their best available rate, regardless of your health history. Missing this window means future applications may require medical underwriting.",
  },
  {
    question: "How does Anthony Orner help me find the lowest Plan G rate in NJ?",
    answer:
      "As an independent broker licensed in New Jersey, Anthony Orner compares Plan G rates across multiple top-rated NJ Medigap carriers for your exact age and ZIP code. Because Plan G benefits are standardized by federal law, the only real difference between carriers is price and rate-increase history. Call 855-559-1700 for a no-cost comparison.",
  }
,
  {
    question: "How does the 6-month Medigap Open Enrollment Period work in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period begins the first month you are both 65 or older and enrolled in Medicare Part B, and it lasts 6 months. During this window, NJ carriers must sell you any Medigap plan they offer at their best available rate, regardless of your health history. After it ends, carriers can apply medical underwriting unless you qualify for a federal guaranteed-issue right.",
  },
  {
    question: "Should I work with a broker to compare Plan G rates in NJ?",
    answer:
      "Yes — Plan G coverage is standardized by federal law, so the benefits are identical from carrier to carrier, but premiums can vary widely. A licensed NJ broker like Anthony Orner can shop multiple carriers at once and match you with the lowest rate for your age and ZIP code. Call 855-559-1700 for a free comparison.",
  }
];

export default function PlanGRatesByAgeNJPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Guides", item: "https://medicareyourself.com/services" },
      { "@type": "ListItem", position: 3, name: "Plan G Rates by Age in NJ", item: "https://medicareyourself.com/services/plan-g-rates-by-age-new-jersey" },
    ],
  };

  /* ── Rate data — NJ DOBI published rates, rounded to nearest $5 ───── */
  const rates = [
    { age: "65", low: "$125", mid: "$165", high: "$210" },
    { age: "66", low: "$130", mid: "$170", high: "$220" },
    { age: "67", low: "$135", mid: "$180", high: "$230" },
    { age: "68", low: "$140", mid: "$185", high: "$240" },
    { age: "69", low: "$150", mid: "$195", high: "$250" },
    { age: "70", low: "$155", mid: "$200", high: "$260" },
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />

      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">&rsaquo;</span>
        <Link href="/services" className="hover:text-blue-600">Medicare Guides</Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-gray-900 font-medium">Plan G Rates by Age in NJ</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Plan G Rates by Age in New Jersey: What You Will Actually Pay
        </h1>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Source: NJ DOBI rate filings</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Quick answer</p>
          <p className="text-gray-700">
            Plan G in New Jersey costs between <strong>$125 and $260 per month</strong> depending on your age, carrier, and county. A 65-year-old typically pays $125–$210. By age 70, expect $155–$260. The cheapest carrier at 65 is not always the cheapest at 70 — comparing by age matters.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plan G Monthly Premiums for Ages 65 to 70 in NJ</h2>
        <p className="text-gray-600 mb-4">
          These ranges reflect non-tobacco rates from major carriers filing in New Jersey. Your actual rate depends on your specific zip code, gender, and carrier.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3">Age</th>
                <th className="text-left px-4 py-3">Lowest Rate</th>
                <th className="text-left px-4 py-3">Mid-Range</th>
                <th className="text-left px-4 py-3">Highest Rate</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((row, i) => (
                <tr key={row.age} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{row.age}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold border-b border-gray-100">{row.low}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold border-b border-gray-100">{row.mid}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Rates shown are monthly, non-tobacco, female. Male rates are typically 5–15% higher. Rates rounded to nearest $5 from NJ DOBI filings.
        </p>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Get your exact Plan G rate for your age and zip code</p>
          <p className="text-gray-300 text-sm mb-4">Free comparison across all carriers in your NJ county. Takes 2 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA label="Call for My Rate" />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote Online
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Plan G Rates Vary by Age and Carrier</h2>
        <p className="text-gray-700 mb-4">
          Two factors drive the difference: <strong>rating method</strong> and <strong>carrier pricing</strong>. Most NJ carriers use attained-age rating — your premium goes up as you age. A few use issue-age rating, where your rate is locked to the age you first enrolled and only rises with inflation.
        </p>
        <p className="text-gray-700 mb-4">
          At age 65, attained-age carriers are usually cheaper. By age 72–75, issue-age carriers often cost less because their rates have not climbed with age. Which is better for you depends on how long you plan to keep the policy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Get the Lowest Plan G Rate in New Jersey</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-8">
          <li><strong>Enroll during Open Enrollment.</strong> Your first 6 months on Part B give you guaranteed-issue rights — no health questions, no rate surcharges.</li>
          <li><strong>Compare at least 5 carriers.</strong> The cheapest Plan G carrier varies by county and age. A $30/month difference adds up to $360/year.</li>
          <li><strong>Ask about household discounts.</strong> Many carriers offer 5–12% off if your spouse also has a Medigap policy.</li>
          <li><strong>Consider issue-age carriers if you are under 68.</strong> Higher initial premium but lower lifetime cost.</li>
          <li><strong>Work with an independent broker.</strong> We compare every carrier in your zip code at no cost to you — carriers pay us, not you.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Enroll in Plan G at Any Age</h2>
        <p className="text-gray-700 mb-4">
          If you are within your 6-month Medigap Open Enrollment window (starts when you turn 65 and enroll in Part B), you can enroll in any Plan G policy with no health questions. Outside that window, most carriers require medical underwriting.
        </p>
        <p className="text-gray-700 mb-4">
          If you are in good health, switching carriers at any age is usually straightforward — even at 70. I pre-screen your health history before submitting any application so you know where you stand. Call to check which carriers are accepting applications in your county.
        </p>

        <div className="my-8 bg-blue-700 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Not sure which carrier has the best rate for your age?</p>
          <p className="text-blue-100 text-sm mb-4">Anthony compares every Plan G carrier in your NJ zip code — free, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA label="Call Anthony" variant="secondary" />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} title="Plan G Rates in New Jersey — FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline text-sm">Medicare Costs in NJ 2026</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline text-sm">Plan G vs Plan N in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/turning-65" className="text-blue-600 hover:underline text-sm">Turning 65 in NJ</Link>
            <Link href="/medicare-supplement/switch-carriers" className="text-blue-600 hover:underline text-sm">How to Switch Carriers</Link>
          </div>
        </div>
      </article>
    </>
  );
}
