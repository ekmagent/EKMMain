import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Is Plan G better than Plan N? | Medicare FAQ",
  description:
    "Plan G is better if you want predictable costs; Plan N is better if you want lower premiums and don't mind small copays. Here's the practical difference. P",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Plan G better than Plan N?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plan G is better if you want predictable costs; Plan N is better if you want lower premiums and don't mind small copays. Here's the practical difference. Plan G covers everything except the Part B deductible, which is $283 in 2026. After that, you pay nothing for Medicare-approved services. Plan N charges you up to $20 per office visit, up to $50 for ER visits that don't lead to admission, and doesn't cover Part B excess charges. If your doctors accept Medicare assignment and you rarely see specialists, Plan N can save you $30 to $50 a month in premium. Heavy healthcare users usually come out ahead with Plan G. Want help comparing rates in your ZIP code? Call Anthony at 855-559-1700 or visit medicareyourself.com.",
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
    { "@type": "ListItem", position: 3, name: "Is Plan G better than Plan N?", item: "https://medicareyourself.com/medicare-faq/is-plan-g-better-than-plan-n" },
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
        <span className="text-gray-900">Is Plan G better than Plan N?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Is Plan G better than Plan N?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Plan G is better if you want predictable costs; Plan N is better if you want lower premiums and don&apos;t mind small copays. Here&apos;s the practical difference. Plan G covers everything except the Part B deductible, which is &#36;283 in 2026. After that, you pay nothing for Medicare-approved services. Plan N charges you up to &#36;20 per office visit, up to &#36;50 for ER visits that don&apos;t lead to admission, and doesn&apos;t cover Part B excess charges. If your doctors accept Medicare assignment and you rarely see specialists, Plan N can save you &#36;30 to &#36;50 a month in premium. Heavy healthcare users usually come out ahead with Plan G. Want help comparing rates in your ZIP code? Call Anthony at 855-559-1700 or visit medicareyourself.com.
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
