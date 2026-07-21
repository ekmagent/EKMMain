import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How much do I have to pay for Medicare when I turn 65? | Medicare FAQ",
  description:
    "Most people pay $0 for Part A when they turn 65, as long as you or your spouse worked and paid Medicare taxes for at least 10 years. Part B is where the re",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/how-much-do-i-have-to-pay-for-medicare-when-i-turn-65",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do I have to pay for Medicare when I turn 65?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most people pay $0 for Part A when they turn 65, as long as you or your spouse worked and paid Medicare taxes for at least 10 years. Part B is where the real cost kicks in. In 2026, the standard Part B premium is $202.90 per month, with a $283 annual deductible. After that, you typically pay 20% of the Medicare-approved amount for doctor visits and outpatient care. If your income is higher, you may pay more for Part B due to IRMAA. There's no cap on out-of-pocket costs unless you add a Medigap plan or join a Medicare Advantage plan. Want help figuring out what fits your budget? Call Anthony at 855-559-1700 or visit medicareyourself.com.",
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
    { "@type": "ListItem", position: 3, name: "How much do I have to pay for Medicare when I turn", item: "https://medicareyourself.com/medicare-faq/how-much-do-i-have-to-pay-for-medicare-when-i-turn-65" },
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
        <span className="text-gray-900">How much do I have to pay for Medicare when I turn</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          How much do I have to pay for Medicare when I turn 65?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Most people pay &#36;0 for Part A when they turn 65, as long as you or your spouse worked and paid Medicare taxes for at least 10 years. Part B is where the real cost kicks in. In 2026, the standard Part B premium is &#36;202.90 per month, with a &#36;283 annual deductible. After that, you typically pay 20% of the Medicare-approved amount for doctor visits and outpatient care. If your income is higher, you may pay more for Part B due to IRMAA. There&apos;s no cap on out-of-pocket costs unless you add a Medigap plan or join a Medicare Advantage plan. Want help figuring out what fits your budget? Call Anthony at 855-559-1700 or visit medicareyourself.com.
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
