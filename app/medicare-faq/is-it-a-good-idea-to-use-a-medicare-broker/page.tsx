import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Is it a good idea to use a Medicare broker? | Medicare FAQ",
  description:
    "Yes, using a licensed Medicare broker is usually a smart move, and it costs you nothing. Brokers get paid by the insurance companies, so you pay the same p",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it a good idea to use a Medicare broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, using a licensed Medicare broker is usually a smart move, and it costs you nothing. Brokers get paid by the insurance companies, so you pay the same premium whether you enroll through a broker, directly with the carrier, or on medicare.gov. The advantage is choice. A good independent broker compares multiple Advantage and Supplement plans side by side, checks that your doctors and prescriptions are covered, and helps you avoid mistakes like missing your Initial Enrollment Period. With the 2026 Part B premium at $185 a month and the Part B deductible at $257, every dollar matters. Want an honest look at your options? Call Anthony Orner at 855-559-1700 or visit medicareyourself.com for a no-pressure review.",
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
    { "@type": "ListItem", position: 3, name: "Is it a good idea to use a Medicare broker?", item: "https://medicareyourself.com/medicare-faq/is-it-a-good-idea-to-use-a-medicare-broker" },
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
        <span className="text-gray-900">Is it a good idea to use a Medicare broker?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Is it a good idea to use a Medicare broker?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Yes, using a licensed Medicare broker is usually a smart move, and it costs you nothing. Brokers get paid by the insurance companies, so you pay the same premium whether you enroll through a broker, directly with the carrier, or on medicare.gov. The advantage is choice. A good independent broker compares multiple Advantage and Supplement plans side by side, checks that your doctors and prescriptions are covered, and helps you avoid mistakes like missing your Initial Enrollment Period. With the 2026 Part B premium at &#36;185 a month and the Part B deductible at &#36;257, every dollar matters. Want an honest look at your options? Call Anthony Orner at 855-559-1700 or visit medicareyourself.com for a no-pressure review.
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
