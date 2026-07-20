import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Do I call my local Social Security office to apply for  | Medicare FAQ",
  description:
    "You have three ways to apply for Medicare, and calling your local Social Security office is one of them. The fastest option is online at ssa.gov/medicare/s",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I call my local Social Security office to apply for Medicare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have three ways to apply for Medicare, and calling your local Social Security office is one of them. The fastest option is online at ssa.gov/medicare/sign-up, which takes about 10 minutes. You can also call Social Security's national line at 1-800-772-1213 (TTY 1-800-325-0778), Monday through Friday, 8 a.m. to 7 p.m. Or you can visit your local field office, though appointments are recommended to avoid a long wait. Your Initial Enrollment Period runs seven months around your 65th birthday. Miss it and you could owe a lifetime Part B late penalty. Once you have Parts A and B, you'll want a plan to handle the $283 deductible and 20% coinsurance. Call me at 855-559-1700 and I'll walk you through your options.",
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
    { "@type": "ListItem", position: 3, name: "Do I call my local Social Security office to apply", item: "https://medicareyourself.com/medicare-faq/do-i-call-my-local-social-security-office-to-apply-for-medicare" },
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
        <span className="text-gray-900">Do I call my local Social Security office to apply</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Do I call my local Social Security office to apply for Medicare?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            You have three ways to apply for Medicare, and calling your local Social Security office is one of them. The fastest option is online at ssa.gov/medicare/sign-up, which takes about 10 minutes. You can also call Social Security&apos;s national line at 1-800-772-1213 (TTY 1-800-325-0778), Monday through Friday, 8 a.m. to 7 p.m. Or you can visit your local field office, though appointments are recommended to avoid a long wait. Your Initial Enrollment Period runs seven months around your 65th birthday. Miss it and you could owe a lifetime Part B late penalty. Once you have Parts A and B, you&apos;ll want a plan to handle the &#36;283 deductible and 20% coinsurance. Call me at 855-559-1700 and I&apos;ll walk you through your options.
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
