import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What is the best Medicare plan in New Jersey? | Medicare FAQ",
  description:
    "There is no single best Medicare plan in New Jersey because the right plan depends on your doctors, prescriptions, and budget. That said, in 2026 New Jerse",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/what-is-the-best-medicare-plan-in-new-jersey",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Medicare plan in New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single best Medicare plan in New Jersey because the right plan depends on your doctors, prescriptions, and budget. That said, in 2026 New Jersey retirees generally choose between Original Medicare with a Medigap policy and Part D drug plan, or a Medicare Advantage plan from carriers like Aetna, Horizon BCBSNJ, UnitedHealthcare, and Wellcare. Original Medicare charges a $202.90 monthly Part B premium, a $283 Part B deductible, and a $1,736 Part A hospital deductible. Advantage plans often cost $0 in premium but restrict you to a network. The right pick comes down to whether your doctors accept the plan and whether your drugs are on the formulary. Call Anthony at 855-559-1700 for a free side-by-side comparison built around your situation.",
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
    { "@type": "ListItem", position: 3, name: "What is the best Medicare plan in New Jersey?", item: "https://medicareyourself.com/medicare-faq/what-is-the-best-medicare-plan-in-new-jersey" },
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
        <span className="text-gray-900">What is the best Medicare plan in New Jersey?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          What is the best Medicare plan in New Jersey?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            There is no single best Medicare plan in New Jersey because the right plan depends on your doctors, prescriptions, and budget. That said, in 2026 New Jersey retirees generally choose between Original Medicare with a Medigap policy and Part D drug plan, or a Medicare Advantage plan from carriers like Aetna, Horizon BCBSNJ, UnitedHealthcare, and Wellcare. Original Medicare charges a &#36;202.90 monthly Part B premium, a &#36;283 Part B deductible, and a &#36;1,736 Part A hospital deductible. Advantage plans often cost &#36;0 in premium but restrict you to a network. The right pick comes down to whether your doctors accept the plan and whether your drugs are on the formulary. Call Anthony at 855-559-1700 for a free side-by-side comparison built around your situation.
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
