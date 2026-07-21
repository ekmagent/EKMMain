import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How much is Medigap plan G in NJ? | Medicare FAQ",
  description:
    "Medigap Plan G premiums in New Jersey typically range from about $150 to over $300 per month, depending on the insurance company, your age, ZIP code, gende",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq/how-much-is-medigap-plan-g-in-nj",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is Medigap plan G in NJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medigap Plan G premiums in New Jersey typically range from about $150 to over $300 per month, depending on the insurance company, your age, ZIP code, gender, and tobacco use. The benefits are identical across every carrier. A 65-year-old male non-smoker often sees quotes in the $170 to $220 range from competitive carriers, while older applicants pay more. Same plan, very different prices.\n\nPlan G covers everything Original Medicare leaves behind except the 2026 Part B deductible of $283. After you pay that once a year, your out-of-pocket costs on covered services drop to near zero.\n\nWant the lowest Plan G rate for your ZIP code? Call Anthony at 855-559-1700 or visit medicareyourself.com for a side-by-side quote.",
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
    { "@type": "ListItem", position: 3, name: "How much is Medigap plan G in NJ?", item: "https://medicareyourself.com/medicare-faq/how-much-is-medigap-plan-g-in-nj" },
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
        <span className="text-gray-900">How much is Medigap plan G in NJ?</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          How much is Medigap plan G in NJ?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Medigap Plan G premiums in New Jersey typically range from about &#36;150 to over &#36;300 per month, depending on the insurance company, your age, ZIP code, gender, and tobacco use. The benefits are identical across every carrier. A 65-year-old male non-smoker often sees quotes in the &#36;170 to &#36;220 range from competitive carriers, while older applicants pay more. Same plan, very different prices.

Plan G covers everything Original Medicare leaves behind except the 2026 Part B deductible of &#36;283. After you pay that once a year, your out-of-pocket costs on covered services drop to near zero.

Want the lowest Plan G rate for your ZIP code? Call Anthony at 855-559-1700 or visit medicareyourself.com for a side-by-side quote.
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
