import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What is the best Medicare Supplement plan in NJ? | Medicare FAQ",
  description:
    "Plan G is the top pick for most people turning 65 in New Jersey today. It covers everything Original Medicare leaves behind except the $257 Part B deductib",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Medicare Supplement plan in NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plan G is the top pick for most people turning 65 in New Jersey today. It covers everything Original Medicare leaves behind except the $257 Part B deductible, so after you meet that once a year, you pay almost nothing at the doctor or hospital. Plan N is a solid runner-up if you want a lower premium and don't mind small copays at office visits. Plan F is still available, but only if you were eligible for Medicare before January 1, 2020.\n\nThe \"best\" plan really comes down to price, since benefits are standardized by federal law. Horizon Blue Cross, AARP/UnitedHealthcare, and Aetna all sell competitive Plan G rates in NJ. Call Anthony at 855-559-1700 for a side-by-side quote.",
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
    { "@type": "ListItem", position: 3, name: "What is the best Medicare Supplement plan in NJ?", item: "https://medicareyourself.com/medicare-faq/what-is-the-best-medicare-supplement-plan-in-nj" },
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
        <span className="text-gray-900">What is the best Medicare Supplement plan in NJ?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          What is the best Medicare Supplement plan in NJ?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Plan G is the top pick for most people turning 65 in New Jersey today. It covers everything Original Medicare leaves behind except the &#36;257 Part B deductible, so after you meet that once a year, you pay almost nothing at the doctor or hospital. Plan N is a solid runner-up if you want a lower premium and don&apos;t mind small copays at office visits. Plan F is still available, but only if you were eligible for Medicare before January 1, 2020.

The &quot;best&quot; plan really comes down to price, since benefits are standardized by federal law. Horizon Blue Cross, AARP/UnitedHealthcare, and Aetna all sell competitive Plan G rates in NJ. Call Anthony at 855-559-1700 for a side-by-side quote.
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
