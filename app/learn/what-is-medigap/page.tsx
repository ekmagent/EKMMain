import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Is Medigap? | Easy Guide 2026",
  description:
    "What is Medigap? A plain-English guide to Medicare Supplement insurance: how it works, what it covers, and who needs it. Call 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/learn/what-is-medigap` },
  openGraph: {
    title: "What Is Medigap? | Easy Guide 2026",
    description:
      "What is Medigap? A plain-English guide to Medicare Supplement insurance: how it works, what it covers, and who needs it. Call 855-559-1700.",
  },
};

const faqs = [
  {
    question: "What is the difference between Medicare and Medigap?",
    answer:
      "Medicare is the federal health insurance program for people 65 and older. Original Medicare (Parts A and B) covers most medical services but requires you to pay 20% of all Part B costs with no out-of-pocket cap. Medigap (Medicare Supplement) is a private insurance policy that pays most or all of those remaining costs. Medicare pays first; Medigap pays second.",
  },
  {
    question: "Does Medigap cover prescription drugs?",
    answer:
      "No. Medigap plans do not cover prescription drugs. You need a separate Medicare Part D prescription drug plan for medication coverage. If you have a Medigap plan, you enroll in a standalone Part D plan from a private insurer.",
  },
  {
    question: "How many people have Medigap insurance?",
    answer:
      "According to CMS data, approximately 14 million Medicare beneficiaries — about 23% of all Medicare enrollees — have Medigap coverage. It is most common among beneficiaries who have significant healthcare needs and want predictable costs.",
  },
  {
    question: "Is Medigap worth it?",
    answer:
      "For most Medicare beneficiaries, yes. Original Medicare has no out-of-pocket maximum, meaning a serious illness or hospitalization could cost you tens of thousands of dollars. Medigap Plan G costs roughly $130–$220/month in New Jersey but eliminates nearly all of that exposure. If you have any significant healthcare needs, the peace of mind alone is typically worth the premium.",
  },
  {
    question: "Can I be denied a Medigap plan?",
    answer:
      "During your Medigap Open Enrollment Period (6 months after you enroll in Part B at 65), no. After that, in most states insurers can deny you based on health conditions. However, New Jersey has year-round guaranteed issue — insurers cannot deny you a Medigap plan at any time, regardless of health status. This is one of the most valuable Medicare-related consumer protections in the country.",
  },
];

export default function WhatIsMedigapPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://www.medicareyourself.com/learn" },
      { "@type": "ListItem", position: 3, name: "What Is Medigap?", item: "https://www.medicareyourself.com/learn/what-is-medigap" },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span>Learn</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">What Is Medigap?</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          What Is Medigap? Medicare Supplement Insurance Explained (2026)
        </h1>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Source: CMS.gov</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">In plain English</p>
          <p className="text-gray-700">
            Medigap is private insurance that fills in the &quot;gaps&quot; that Original Medicare leaves behind — mainly the 20% coinsurance you owe on every Part B medical service. It does not replace Medicare; it works alongside it.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">How Medicare&apos;s Cost-Sharing Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Original Medicare pays 80% of covered Part B services (doctor visits, outpatient care, procedures). You pay the remaining 20% — with no annual cap. A $100,000 cancer treatment could leave you with a $20,000 bill. A single hospitalization with complications could trigger the Part A deductible ($1,676 in 2026) plus daily coinsurance for extended stays.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Medigap covers most or all of these remaining costs, depending on which plan letter you choose. Plan G — the most popular — covers everything except the Part B deductible ($257/year).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What Medigap Does and Does Not Cover</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm">
          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-2">✅ What Medigap Covers (Plan G)</h3>
            <ul className="space-y-1 text-gray-700">
              {["Part A hospital coinsurance", "Part A deductible ($1,676)", "Part A hospice care coinsurance", "Part B coinsurance (the 20%)", "Part B excess charges", "First 3 pints of blood", "Skilled nursing coinsurance", "Foreign travel emergency (80%)"].map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-2">❌ What Medigap Does NOT Cover</h3>
            <ul className="space-y-1 text-gray-700">
              {["Prescription drugs (need Part D)", "Dental care", "Vision care (glasses/contacts)", "Hearing aids", "Long-term care", "Private-duty nursing", "Part B deductible (Plan G only)"].map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Ready to compare Medigap plans in your state?</p>
          <p className="text-gray-300 text-sm mb-4">Free quotes from top carriers. No obligation.</p>
          <PhoneCTA label="Compare Medigap Plans Free" />
        </div>

        <FAQSection faqs={faqs} title="Medigap FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline text-sm">Plan G vs Plan N NJ</Link>
            <Link href="/learn/medicare-parts-explained" className="text-blue-600 hover:underline text-sm">Medicare Parts A, B, C, D Explained</Link>
          </div>
        </div>
      </article>
    </>
  );
}
