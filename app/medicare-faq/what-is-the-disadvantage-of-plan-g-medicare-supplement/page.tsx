import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What is the disadvantage of plan G Medicare Supplement? | Medicare FAQ",
  description:
    "The main disadvantage of Plan G is that you must pay the annual Part B deductible out of pocket before coverage kicks in. For 2026, that deductible is $283",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/what-is-the-disadvantage-of-plan-g-medicare-supplement",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the disadvantage of plan G Medicare Supplement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main disadvantage of Plan G is that you must pay the annual Part B deductible out of pocket before coverage kicks in. For 2026, that deductible is $283. Plan F used to cover this, but it's no longer available to anyone who became eligible for Medicare on or after January 1, 2020.\n\nAnother drawback is the monthly premium. Plan G typically costs more than Plan N or high-deductible Plan G, though it covers more up front. Premiums also rise each year with age and inflation, which can strain a fixed income over time. Plan G doesn't include drug, dental, vision, or hearing coverage either.\n\nWant to compare Plan G rates in your area? Call Anthony at 855-559-1700 or visit medicareyourself.com.",
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
    { "@type": "ListItem", position: 3, name: "What is the disadvantage of plan G Medicare Supple", item: "https://medicareyourself.com/medicare-faq/what-is-the-disadvantage-of-plan-g-medicare-supplement" },
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
        <span className="text-gray-900">What is the disadvantage of plan G Medicare Supple</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          What is the disadvantage of plan G Medicare Supplement?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            The main disadvantage of Plan G is that you must pay the annual Part B deductible out of pocket before coverage kicks in. For 2026, that deductible is &#36;283. Plan F used to cover this, but it&apos;s no longer available to anyone who became eligible for Medicare on or after January 1, 2020.

Another drawback is the monthly premium. Plan G typically costs more than Plan N or high-deductible Plan G, though it covers more up front. Premiums also rise each year with age and inflation, which can strain a fixed income over time. Plan G doesn&apos;t include drug, dental, vision, or hearing coverage either.

Want to compare Plan G rates in your area? Call Anthony at 855-559-1700 or visit medicareyourself.com.
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
