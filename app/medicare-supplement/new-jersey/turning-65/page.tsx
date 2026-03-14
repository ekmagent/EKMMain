import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Turning 65 in NJ | Medicare Checklist",
  description:
    "Turning 65 in New Jersey? Medicare enrollment timeline, Medigap open enrollment, and Part D deadlines for 2026. Call 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/new-jersey/turning-65` },
  openGraph: {
    title: "Turning 65 in NJ | Medicare Checklist",
    description:
      "Turning 65 in New Jersey? Medicare enrollment timeline, Medigap open enrollment, and Part D deadlines for 2026. Call 855-559-1700.",
  },
};

const faqs = [
  {
    question: "When should I sign up for Medicare if I'm turning 65 in New Jersey?",
    answer:
      "Your Initial Enrollment Period (IEP) is a 7-month window: 3 months before your 65th birthday month, your birthday month, and 3 months after. To avoid a gap in coverage, enroll in Part B during the 3 months before your birthday month. If you are still working and have employer coverage, you may be able to delay Part B enrollment without penalty.",
  },
  {
    question: "Do I automatically get Medicare when I turn 65 in New Jersey?",
    answer:
      "Only if you are already receiving Social Security benefits. If you are receiving Social Security, you will be automatically enrolled in Medicare Parts A and B and receive your Medicare card about 3 months before your 65th birthday. If you are not yet receiving Social Security, you must actively enroll through SSA.gov, by calling 1-800-772-1213, or by visiting your local Social Security office in NJ.",
  },
  {
    question: "What is the Medigap Open Enrollment Period when I turn 65?",
    answer:
      "Your 6-month Medigap Open Enrollment Period begins the month you are both age 65 AND enrolled in Medicare Part B. During this window, no insurer can deny you a Medigap plan or charge you more due to health conditions — regardless of your medical history. However, because New Jersey has year-round guaranteed issue, NJ residents have this protection at any time, making the open enrollment period less critical here than in most states.",
  },
  {
    question: "What if I have employer insurance and am turning 65 in New Jersey?",
    answer:
      "If you are still working and covered by employer group health insurance, you have a Special Enrollment Period to sign up for Medicare Part B without penalty after your employer coverage ends. You should still enroll in Part A at 65 (it is usually free). Do not enroll in Part B until your employer coverage ends to avoid paying both premiums unnecessarily. NJ SHIP at 1-800-792-8820 can help you coordinate the transition.",
  },
  {
    question: "Is there a penalty for late Medicare enrollment in New Jersey?",
    answer:
      "Yes. If you do not enroll in Part B during your Initial Enrollment Period and you do not have qualifying employer coverage, you will pay a 10% late enrollment penalty for each 12-month period you were eligible but did not enroll — and this penalty is permanent. Part D also has a late enrollment penalty of 1% per month. New Jersey does not waive federal Medicare penalties.",
  },
];

export default function Turning65NJPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement NJ", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey" },
      { "@type": "ListItem", position: 3, name: "Turning 65 in NJ", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey/turning-65" },
    ],
  };

  const steps = [
    { months: "3 months before birthday", action: "Enroll in Medicare Part A and Part B through SSA.gov or call 1-800-772-1213", important: true },
    { months: "3 months before birthday", action: "Compare Medigap plans and Part D drug plans so you are ready to enroll when Part B starts", important: false },
    { months: "Birthday month", action: "Your Medicare coverage begins. Enroll in a Medigap plan within your Open Enrollment Period", important: true },
    { months: "Birthday month", action: "Enroll in a Part D prescription drug plan to avoid the late enrollment penalty", important: true },
    { months: "Within 6 months of Part B", action: "Your Medigap Open Enrollment Period is active — guaranteed acceptance from all NJ carriers", important: false },
    { months: "Ongoing", action: "Review your Part D plan each Annual Enrollment Period (Oct 15–Dec 7) as drug formularies change", important: false },
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">Medicare Supplement NJ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Turning 65 in NJ</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Turning 65 in New Jersey: Your Complete Medicare Checklist (2026)
        </h1>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Sources: SSA.gov, CMS.gov, NJ DOBI</p>

        <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">Good news for NJ residents</p>
          <p className="text-gray-700">
            New Jersey&apos;s year-round guaranteed issue rules mean you cannot be denied a Medigap plan at any age due to health conditions — giving you more flexibility than beneficiaries in most other states.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Medicare Enrollment Timeline</h2>
        <div className="space-y-3 mb-8">
          {steps.map((step, i) => (
            <div key={i} className={`flex gap-4 p-4 rounded-lg border ${step.important ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white"}`}>
              <div className="text-sm font-semibold text-blue-700 w-40 shrink-0">{step.months}</div>
              <div className="text-sm text-gray-700">{step.action}</div>
              {step.important && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full h-fit shrink-0">Important</span>}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Three Decisions Every New NJ Medicare Enrollee Must Make</h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">1. Original Medicare or Medicare Advantage?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Original Medicare (Parts A + B) with a Medigap supplement gives you maximum flexibility and predictable costs. Medicare Advantage bundles everything with lower premiums but network restrictions. In New Jersey, this decision is more reversible than in other states — you can switch back to Medigap at any time under NJ guaranteed issue rules.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">2. Which Medigap Plan? (If choosing Original Medicare)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Plan G is the most popular choice for new enrollees in 2026. It covers everything except the Part B deductible ($257/year). Plan N offers lower premiums with small copays. Both are standardized — coverage is identical between all carriers, only price differs.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">3. Which Part D Drug Plan?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Even if you take no prescriptions now, enroll in a Part D plan during your Initial Enrollment Period to avoid the permanent late enrollment penalty. A low-premium plan (&lt;$15/month) is sufficient if you have no current drug needs. Use Medicare.gov&apos;s Plan Finder to compare options by your specific medications.
            </p>
          </div>
        </div>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Turning 65 soon? We make Medicare enrollment simple.</p>
          <p className="text-gray-300 text-sm mb-4">Free guidance through every decision — Medigap, Medicare Advantage, and Part D — at no cost to you.</p>
          <PhoneCTA label="Get Help Enrolling in NJ" />
        </div>

        <FAQSection faqs={faqs} title="Turning 65 in NJ — Medicare FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline text-sm">Medicare Costs in NJ 2026</Link>
            <Link href="/medicare-supplement/new-jersey/vs-medicare-advantage" className="text-blue-600 hover:underline text-sm">Medigap vs Medicare Advantage NJ</Link>
          </div>
        </div>
      </article>
    </>
  );
}
