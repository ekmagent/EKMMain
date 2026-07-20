import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Does ALS qualify for Medicare? | Medicare FAQ",
  description:
    "Yes, ALS qualifies you for Medicare automatically, and you don't have to wait the standard 24 months that applies to other disability recipients. The momen",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does ALS qualify for Medicare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ALS qualifies you for Medicare automatically, and you don't have to wait the standard 24 months that applies to other disability recipients. The moment your Social Security disability benefits start for ALS (Lou Gehrig's disease), your Medicare Part A and Part B coverage kicks in the same month. There's no age requirement either. You could be 40 or 60, it doesn't matter.\n\nSocial Security will mail your welcome package and red, white, and blue Medicare card before coverage begins. In 2026, you'll pay the standard $202.90 monthly Part B premium and a $283 Part B deductible, unless you qualify for assistance programs.\n\nWant help picking the right plan to pair with Medicare? Call Anthony at 855-559-1700 or visit medicareyourself.com.",
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
    { "@type": "ListItem", position: 3, name: "Does ALS qualify for Medicare?", item: "https://medicareyourself.com/medicare-faq/does-als-qualify-for-medicare" },
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
        <span className="text-gray-900">Does ALS qualify for Medicare?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Does ALS qualify for Medicare?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Yes, ALS qualifies you for Medicare automatically, and you don&apos;t have to wait the standard 24 months that applies to other disability recipients. The moment your Social Security disability benefits start for ALS (Lou Gehrig&apos;s disease), your Medicare Part A and Part B coverage kicks in the same month. There&apos;s no age requirement either. You could be 40 or 60, it doesn&apos;t matter.

Social Security will mail your welcome package and red, white, and blue Medicare card before coverage begins. In 2026, you&apos;ll pay the standard &#36;202.90 monthly Part B premium and a &#36;283 Part B deductible, unless you qualify for assistance programs.

Want help picking the right plan to pair with Medicare? Call Anthony at 855-559-1700 or visit medicareyourself.com.
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
