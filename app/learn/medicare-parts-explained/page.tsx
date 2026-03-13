import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medicare Parts A, B, C, and D Explained Simply (2026)",
  description:
    "What do Medicare Parts A, B, C, and D cover? Plain-English explanations of each Medicare part, what you pay, and how they work together. Free help: 855-559-1700.",
};

const faqs = [
  {
    question: "What is the difference between Medicare Part A and Part B?",
    answer:
      "Part A is hospital insurance — it covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health care. Part B is medical insurance — it covers doctor visits, outpatient procedures, preventive services, durable medical equipment, and some home health care. Together, Parts A and B form 'Original Medicare.'",
  },
  {
    question: "Do I need all four parts of Medicare?",
    answer:
      "Most people need at least Parts A and B (Original Medicare). Part D (drug coverage) is optional but recommended — skipping it results in a permanent late enrollment penalty if you enroll later. Part C (Medicare Advantage) is an alternative to Original Medicare, not an addition. You choose either Original Medicare (A+B) with optional Medigap and Part D, OR Medicare Advantage (Part C) which bundles everything.",
  },
  {
    question: "Is Medicare Part A free?",
    answer:
      "Part A is premium-free for most people who worked and paid Medicare taxes for at least 10 years (40 quarters). If you did not work long enough, you can buy Part A for up to $518/month in 2026. Most people qualify for free Part A.",
  },
  {
    question: "When does Medicare Part B start?",
    answer:
      "Part B coverage begins based on when you enroll. If you enroll during the 3 months before your 65th birthday, coverage starts the month you turn 65. If you enroll during your birthday month or after, coverage is delayed by 1–3 months. Enrolling early is recommended to avoid a gap in coverage.",
  },
];

export default function MedicarePartsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.medicareyourself.com/learn" },
      { "@type": "ListItem", position: 3, name: "Medicare Parts Explained", item: "https://www.medicareyourself.com/learn/medicare-parts-explained" },
    ],
  };

  const parts = [
    {
      letter: "A",
      name: "Hospital Insurance",
      color: "blue",
      covers: ["Inpatient hospital stays", "Skilled nursing facility care (after qualifying hospital stay)", "Hospice care", "Some home health care"],
      cost: "Free for most. $1,676 deductible per benefit period in 2026.",
      doesNotCover: "Custodial (long-term) care, private-duty nursing, most dental/vision",
    },
    {
      letter: "B",
      name: "Medical Insurance",
      color: "green",
      covers: ["Doctor visits and specialist care", "Outpatient procedures and surgery", "Preventive screenings and vaccines", "Durable medical equipment", "Mental health services"],
      cost: "$185/month premium in 2026. $257 annual deductible. Then you pay 20% of covered services — with no cap.",
      doesNotCover: "Prescription drugs, dental, vision, hearing aids, cosmetic procedures",
    },
    {
      letter: "C",
      name: "Medicare Advantage",
      color: "purple",
      covers: ["All Part A and Part B benefits", "Usually includes prescription drugs", "Often includes dental, vision, hearing", "May include gym memberships, transportation"],
      cost: "Many plans have $0 additional premium. You still pay Part B premium. Copays and deductibles apply.",
      doesNotCover: "This replaces Original Medicare — you use plan's network, not any Medicare provider",
    },
    {
      letter: "D",
      name: "Prescription Drug Coverage",
      color: "orange",
      covers: ["Prescription medications on the plan's formulary", "Retail and mail-order pharmacy coverage"],
      cost: "Averages $30–$60/month depending on plan. $2,000 annual out-of-pocket cap on drugs in 2026 (Inflation Reduction Act).",
      doesNotCover: "Drugs not on the plan formulary (though exceptions process exists)",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-700",
    green: "bg-green-700",
    purple: "bg-purple-700",
    orange: "bg-orange-600",
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span>Learn</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medicare Parts Explained</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Medicare Parts A, B, C, and D Explained Simply (2026)
        </h1>
        <p className="text-xs text-gray-400 mb-8">Last reviewed: March 2026 · Source: CMS.gov Medicare &amp; You 2026</p>

        <div className="space-y-6 mb-10">
          {parts.map((part) => (
            <div key={part.letter} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className={`${colorMap[part.color]} text-white px-5 py-3 flex items-center gap-3`}>
                <span className="text-2xl font-bold">Part {part.letter}</span>
                <span className="text-lg font-medium">{part.name}</span>
              </div>
              <div className="p-5 grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What it covers</p>
                  <ul className="space-y-1 text-gray-600">
                    {part.covers.map((c, i) => <li key={i}>• {c}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What you pay</p>
                  <p className="text-gray-600">{part.cost}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Does not cover</p>
                  <p className="text-gray-600">{part.doesNotCover}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Questions about which Medicare parts you need?</p>
          <p className="text-gray-300 text-sm mb-4">We help you build the right coverage combination — free.</p>
          <PhoneCTA label="Get Free Medicare Guidance" />
        </div>

        <FAQSection faqs={faqs} title="Medicare Parts A, B, C, D — FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/learn/what-is-medigap" className="text-blue-600 hover:underline text-sm">What Is Medigap?</Link>
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/turning-65" className="text-blue-600 hover:underline text-sm">Turning 65 in NJ</Link>
          </div>
        </div>
      </article>
    </>
  );
}
