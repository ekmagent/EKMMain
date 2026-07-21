import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What are the disadvantages of a Medicare Supplement pla | Medicare FAQ",
  description:
    "Medicare Supplement plans carry three main drawbacks you should weigh before enrolling. First, the monthly premium sits on top of your Part B premium of $1",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/what-are-the-disadvantages-of-a-medicare-supplement-plan",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the disadvantages of a Medicare Supplement plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medicare Supplement plans carry three main drawbacks you should weigh before enrolling. First, the monthly premium sits on top of your Part B premium of $202.90 in 2026, so your fixed costs run higher than a Medicare Advantage plan. Second, Medigap plans don't include prescription drug coverage, dental, vision, or hearing, so you'll need a separate Part D plan and standalone benefits. Third, if you miss your six-month Medigap Open Enrollment window that starts when you turn 65 and enroll in Part B, insurers in most states can medically underwrite you, raise your rate, or deny you outright.\n\nThe tradeoff is freedom to see any doctor nationwide who accepts Medicare. Want help running the numbers for your situation? Call Anthony at 855-559-1700 or visit medicareyourself.com.",
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
    { "@type": "ListItem", position: 3, name: "What are the disadvantages of a Medicare Supplemen", item: "https://medicareyourself.com/medicare-faq/what-are-the-disadvantages-of-a-medicare-supplement-plan" },
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
        <span className="text-gray-900">What are the disadvantages of a Medicare Supplemen</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          What are the disadvantages of a Medicare Supplement plan?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Medicare Supplement plans carry three main drawbacks you should weigh before enrolling. First, the monthly premium sits on top of your Part B premium of &#36;202.90 in 2026, so your fixed costs run higher than a Medicare Advantage plan. Second, Medigap plans don&apos;t include prescription drug coverage, dental, vision, or hearing, so you&apos;ll need a separate Part D plan and standalone benefits. Third, if you miss your six-month Medigap Open Enrollment window that starts when you turn 65 and enroll in Part B, insurers in most states can medically underwrite you, raise your rate, or deny you outright.

The tradeoff is freedom to see any doctor nationwide who accepts Medicare. Want help running the numbers for your situation? Call Anthony at 855-559-1700 or visit medicareyourself.com.
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
