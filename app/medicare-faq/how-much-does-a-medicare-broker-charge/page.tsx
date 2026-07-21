import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How much does a Medicare broker charge? | Medicare FAQ",
  description:
    "A Medicare broker charges you nothing. Zero. Insurance carriers pay brokers a commission directly when you enroll in a plan, so the service is free to you.",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/how-much-does-a-medicare-broker-charge",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Medicare broker charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Medicare broker charges you nothing. Zero. Insurance carriers pay brokers a commission directly when you enroll in a plan, so the service is free to you. Your premium stays the same whether you sign up through a broker, call the carrier yourself, or use medicare.gov. For 2026, your Part B premium is $202.90 per month and your Part B deductible is $283, and those numbers do not change based on how you enroll. A good broker compares plans from multiple companies, checks that your doctors and prescriptions are covered, and helps you switch during Annual Enrollment if something better fits. Call Anthony Orner at 855-559-1700 or visit medicareyourself.com for a no-cost plan review.",
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
    { "@type": "ListItem", position: 3, name: "How much does a Medicare broker charge?", item: "https://medicareyourself.com/medicare-faq/how-much-does-a-medicare-broker-charge" },
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
        <span className="text-gray-900">How much does a Medicare broker charge?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          How much does a Medicare broker charge?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            A Medicare broker charges you nothing. Zero. Insurance carriers pay brokers a commission directly when you enroll in a plan, so the service is free to you. Your premium stays the same whether you sign up through a broker, call the carrier yourself, or use medicare.gov. For 2026, your Part B premium is &#36;202.90 per month and your Part B deductible is &#36;283, and those numbers do not change based on how you enroll. A good broker compares plans from multiple companies, checks that your doctors and prescriptions are covered, and helps you switch during Annual Enrollment if something better fits. Call Anthony Orner at 855-559-1700 or visit medicareyourself.com for a no-cost plan review.
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
