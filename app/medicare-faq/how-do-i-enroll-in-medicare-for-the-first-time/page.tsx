import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How do I enroll in Medicare for the first time? | Medicare FAQ",
  description:
    "You enroll through Social Security, either online at ssa.gov/medicare, by phone at 1-800-772-1213, or in person at your local Social Security office. Most ",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I enroll in Medicare for the first time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You enroll through Social Security, either online at ssa.gov/medicare, by phone at 1-800-772-1213, or in person at your local Social Security office. Most people qualify at age 65. Your Initial Enrollment Period runs seven months total: the three months before your 65th birthday month, your birthday month, and the three months after. Sign up in those first three months so coverage starts the day you turn 65. If you already collect Social Security, you're enrolled automatically in Part A and Part B. In 2026, Part B costs $185 per month with a $257 deductible. Missing your window can trigger lifetime late penalties. Call me at 855-559-1700 or visit medicareyourself.com and I'll walk you through the timing and paperwork.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare FAQ", item: "https://medicareyourself.com/medicare-faq" },
    { "@type": "ListItem", position: 3, name: "How do I enroll in Medicare for the first time?", item: "https://medicareyourself.com/medicare-faq/how-do-i-enroll-in-medicare-for-the-first-time" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={[faqSchema, breadcrumbSchema]} />

      <nav className="max-w-3xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-faq" className="hover:text-blue-600">Medicare FAQ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">How do I enroll in Medicare for the first time?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          How do I enroll in Medicare for the first time?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            You enroll through Social Security, either online at ssa.gov/medicare, by phone at 1-800-772-1213, or in person at your local Social Security office. Most people qualify at age 65. Your Initial Enrollment Period runs seven months total: the three months before your 65th birthday month, your birthday month, and the three months after. Sign up in those first three months so coverage starts the day you turn 65. If you already collect Social Security, you&apos;re enrolled automatically in Part A and Part B. In 2026, Part B costs &#36;185 per month with a &#36;257 deductible. Missing your window can trigger lifetime late penalties. Call me at 855-559-1700 or visit medicareyourself.com and I&apos;ll walk you through the timing and paperwork.
          </p>
        </div>

        <div className="bg-[#F6FAF8] border border-[#D0E4DE] rounded-xl p-5 mb-6">
          <p className="font-semibold text-gray-900 mb-3">See what this costs in your area</p>
          <ZipCTA label="Compare My Rates" />
        </div>

        <div className="mb-10">
          <PhoneCTA label="Get a Free Answer From a Licensed Broker" />
        </div>

        <div className="bg-gray-50 rounded-xl p-5 text-sm border border-gray-100">
          <p className="font-semibold text-gray-900 mb-3">Related Medicare Questions</p>
          <ul className="space-y-1">
            <li><Link href="/medicare-faq" className="text-blue-600 hover:underline">Browse all Medicare FAQ →</Link></li>
            <li><Link href="/learn/how-to-sign-up-for-medicare" className="text-blue-600 hover:underline">How and when to sign up for Medicare</Link></li>
            <li><Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">Medicare Supplement plans in New Jersey</Link></li>
            <li><Link href="/learn/medicare-help-low-income" className="text-blue-600 hover:underline">Medicare help for people on a fixed income</Link></li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          EasyKind Medicare is an independent brokerage licensed in NJ and 34 states. Not affiliated with Medicare or any government agency.
          Last updated: July 2026.
        </p>
      </article>
    </>
  );
}
