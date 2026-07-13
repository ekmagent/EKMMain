import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Is there a Medicare broker? | Medicare FAQ",
  description:
    "Yes, Medicare brokers exist, and working with one costs you nothing. A licensed Medicare broker is an independent agent contracted with multiple insurance ",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a Medicare broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Medicare brokers exist, and working with one costs you nothing. A licensed Medicare broker is an independent agent contracted with multiple insurance carriers who helps you compare Medicare Advantage, Medigap, and Part D plans side by side. Carriers pay the broker directly, so you pay the same premium whether you enroll on your own or through a broker. That's the key difference from a captive agent who only sells one company's plans.\n\nAnthony Orner runs medicareyourself.com and holds licenses in New Jersey plus 34 other states, so he can shop dozens of plans against your doctors, medications, and budget. With the 2026 Part B premium at $185 a month, every dollar counts. Call 855-559-1700 for a straightforward comparison.",
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
    { "@type": "ListItem", position: 3, name: "Is there a Medicare broker?", item: "https://medicareyourself.com/medicare-faq/is-there-a-medicare-broker" },
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
        <span className="text-gray-900">Is there a Medicare broker?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Is there a Medicare broker?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Yes, Medicare brokers exist, and working with one costs you nothing. A licensed Medicare broker is an independent agent contracted with multiple insurance carriers who helps you compare Medicare Advantage, Medigap, and Part D plans side by side. Carriers pay the broker directly, so you pay the same premium whether you enroll on your own or through a broker. That&apos;s the key difference from a captive agent who only sells one company&apos;s plans.

Anthony Orner runs medicareyourself.com and holds licenses in New Jersey plus 34 other states, so he can shop dozens of plans against your doctors, medications, and budget. With the 2026 Part B premium at &#36;185 a month, every dollar counts. Call 855-559-1700 for a straightforward comparison.
          </p>
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
