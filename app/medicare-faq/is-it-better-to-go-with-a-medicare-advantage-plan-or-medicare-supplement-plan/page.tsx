import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Is it better to go with a Medicare Advantage plan or Me | Medicare FAQ",
  description:
    "The right choice depends on your budget, your doctors, and how often you use care. Medicare Advantage plans often have low or $0 premiums but use networks,",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it better to go with a Medicare Advantage plan or Medicare Supplement plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right choice depends on your budget, your doctors, and how often you use care. Medicare Advantage plans often have low or $0 premiums but use networks, require referrals in some cases, and charge copays every time you get care. Medicare Supplement plans cost more monthly but let you see any doctor nationwide who accepts Medicare, with little to no out-of-pocket cost after the Part B deductible of $257 in 2026. If you travel often or want predictable bills, a Supplement usually wins. If you want extras like dental, vision, and drug coverage bundled in, Advantage may fit better. Call Anthony at 855-559-1700 or visit medicareyourself.com and we'll run both options side by side for your ZIP code.",
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
    { "@type": "ListItem", position: 3, name: "Is it better to go with a Medicare Advantage plan ", item: "https://medicareyourself.com/medicare-faq/is-it-better-to-go-with-a-medicare-advantage-plan-or-medicare-supplement-plan" },
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
        <span className="text-gray-900">Is it better to go with a Medicare Advantage plan </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Is it better to go with a Medicare Advantage plan or Medicare Supplement plan?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            The right choice depends on your budget, your doctors, and how often you use care. Medicare Advantage plans often have low or &#36;0 premiums but use networks, require referrals in some cases, and charge copays every time you get care. Medicare Supplement plans cost more monthly but let you see any doctor nationwide who accepts Medicare, with little to no out-of-pocket cost after the Part B deductible of &#36;257 in 2026. If you travel often or want predictable bills, a Supplement usually wins. If you want extras like dental, vision, and drug coverage bundled in, Advantage may fit better. Call Anthony at 855-559-1700 or visit medicareyourself.com and we&apos;ll run both options side by side for your ZIP code.
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
