import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What's the difference between a Medicare agent and a Me | Medicare FAQ",
  description:
    "A Medicare agent typically works for one insurance company and can only sell that carrier's plans. A broker is independent and contracts with multiple carr",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between a Medicare agent and a Medicare broker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Medicare agent typically works for one insurance company and can only sell that carrier's plans. A broker is independent and contracts with multiple carriers, so you get options across companies like Aetna, Humana, UnitedHealthcare, Cigna, and others. Both must be licensed by your state and complete AHIP certification each year. Both get paid by the insurance company, not you. The price of any given plan is the same whether you buy directly, through an agent, or through a broker. The real difference is choice. A captive agent shows you one menu. A broker compares plans side by side, including the 2026 Part B premium of $185 and how each plan handles your drugs and doctors. Call Anthony at 855-559-1700 to compare.",
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
    { "@type": "ListItem", position: 3, name: "What's the difference between a Medicare agent and", item: "https://medicareyourself.com/medicare-faq/whats-the-difference-between-a-medicare-agent-and-a-medicare-broker" },
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
        <span className="text-gray-900">What&apos;s the difference between a Medicare agen</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          What&apos;s the difference between a Medicare agent and a Medicare broker?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            A Medicare agent typically works for one insurance company and can only sell that carrier&apos;s plans. A broker is independent and contracts with multiple carriers, so you get options across companies like Aetna, Humana, UnitedHealthcare, Cigna, and others. Both must be licensed by your state and complete AHIP certification each year. Both get paid by the insurance company, not you. The price of any given plan is the same whether you buy directly, through an agent, or through a broker. The real difference is choice. A captive agent shows you one menu. A broker compares plans side by side, including the 2026 Part B premium of &#36;185 and how each plan handles your drugs and doctors. Call Anthony at 855-559-1700 to compare.
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
