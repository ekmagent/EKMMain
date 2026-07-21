import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What is the biggest mistake seniors make when enrolling | Medicare FAQ",
  description:
    "The biggest mistake seniors make is missing their Initial Enrollment Period, which runs seven months around your 65th birthday. Skip it, and you can face a",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/what-is-the-biggest-mistake-seniors-make-when-enrolling-in-medicare",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the biggest mistake seniors make when enrolling in Medicare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest mistake seniors make is missing their Initial Enrollment Period, which runs seven months around your 65th birthday. Skip it, and you can face a Part B late enrollment penalty of 10% for every 12 months you delayed, and that penalty sticks with you for life. Another costly slip-up is assuming you must take Part B if you have solid employer coverage from an active job. You might not need it yet. People also pick a plan based on premium alone and ignore drug formularies, provider networks, and the $283 Part B deductible in 2026. Every situation is different, so talk it through with someone before you sign. Call Anthony at 855-559-1700 or visit medicareyourself.com and we'll walk through your options.",
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
    { "@type": "ListItem", position: 3, name: "What is the biggest mistake seniors make when enro", item: "https://medicareyourself.com/medicare-faq/what-is-the-biggest-mistake-seniors-make-when-enrolling-in-medicare" },
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
        <span className="text-gray-900">What is the biggest mistake seniors make when enro</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          What is the biggest mistake seniors make when enrolling in Medicare?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            The biggest mistake seniors make is missing their Initial Enrollment Period, which runs seven months around your 65th birthday. Skip it, and you can face a Part B late enrollment penalty of 10% for every 12 months you delayed, and that penalty sticks with you for life. Another costly slip-up is assuming you must take Part B if you have solid employer coverage from an active job. You might not need it yet. People also pick a plan based on premium alone and ignore drug formularies, provider networks, and the &#36;283 Part B deductible in 2026. Every situation is different, so talk it through with someone before you sign. Call Anthony at 855-559-1700 or visit medicareyourself.com and we&apos;ll walk through your options.
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
