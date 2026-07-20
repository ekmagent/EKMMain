import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Why do people say not to get a Medicare Advantage plan? | Medicare FAQ",
  description:
    "People warn against Medicare Advantage plans because they use provider networks, require prior authorization for many services, and can deny care that Orig",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do people say not to get a Medicare Advantage plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "People warn against Medicare Advantage plans because they use provider networks, require prior authorization for many services, and can deny care that Original Medicare would cover. You typically must stay in-network or pay more, and specialists often need referrals. If you get sick while traveling, coverage outside your service area is limited to emergencies. Another concern is switching back. After your first year on Advantage, you may not qualify for a Medigap policy without medical underwriting, meaning insurers can reject you based on health.\n\nThat said, Advantage plans often include dental, vision, and a $0 premium beyond the $202.90 Part B premium in 2026. The right choice depends on your doctors, medications, and budget. Call 855-559-1700 and we'll run the numbers with you.",
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
    { "@type": "ListItem", position: 3, name: "Why do people say not to get a Medicare Advantage ", item: "https://medicareyourself.com/medicare-faq/why-do-people-say-not-to-get-a-medicare-advantage-plan" },
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
        <span className="text-gray-900">Why do people say not to get a Medicare Advantage </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Why do people say not to get a Medicare Advantage plan?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            People warn against Medicare Advantage plans because they use provider networks, require prior authorization for many services, and can deny care that Original Medicare would cover. You typically must stay in-network or pay more, and specialists often need referrals. If you get sick while traveling, coverage outside your service area is limited to emergencies. Another concern is switching back. After your first year on Advantage, you may not qualify for a Medigap policy without medical underwriting, meaning insurers can reject you based on health.

That said, Advantage plans often include dental, vision, and a &#36;0 premium beyond the &#36;202.90 Part B premium in 2026. The right choice depends on your doctors, medications, and budget. Call 855-559-1700 and we&apos;ll run the numbers with you.
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
