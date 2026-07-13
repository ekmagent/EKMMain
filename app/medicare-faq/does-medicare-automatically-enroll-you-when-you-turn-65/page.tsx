import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Does Medicare automatically enroll you when you turn 65 | Medicare FAQ",
  description:
    "Not always. Medicare enrolls you automatically only if you're already receiving Social Security or Railroad Retirement Board benefits before you turn 65. I",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Medicare automatically enroll you when you turn 65?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Medicare enrolls you automatically only if you're already receiving Social Security or Railroad Retirement Board benefits before you turn 65. In that case, your red, white, and blue card arrives in the mail about three months before your 65th birthday, and Part A and Part B start the first day of your birthday month.\n\nIf you're not yet collecting Social Security, you have to sign up yourself through SSA.gov during your seven-month Initial Enrollment Period. Miss it and you could face a lifetime Part B late penalty, plus the standard $185 monthly premium in 2026.\n\nNot sure which group you fall into? Call Anthony at 855-559-1700 or visit medicareyourself.com and we'll walk through your enrollment timing together.",
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
    { "@type": "ListItem", position: 3, name: "Does Medicare automatically enroll you when you tu", item: "https://medicareyourself.com/medicare-faq/does-medicare-automatically-enroll-you-when-you-turn-65" },
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
        <span className="text-gray-900">Does Medicare automatically enroll you when you tu</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          Does Medicare automatically enroll you when you turn 65?
        </h1>

        <div className="prose prose-gray max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Not always. Medicare enrolls you automatically only if you&apos;re already receiving Social Security or Railroad Retirement Board benefits before you turn 65. In that case, your red, white, and blue card arrives in the mail about three months before your 65th birthday, and Part A and Part B start the first day of your birthday month.

If you&apos;re not yet collecting Social Security, you have to sign up yourself through SSA.gov during your seven-month Initial Enrollment Period. Miss it and you could face a lifetime Part B late penalty, plus the standard &#36;185 monthly premium in 2026.

Not sure which group you fall into? Call Anthony at 855-559-1700 or visit medicareyourself.com and we&apos;ll walk through your enrollment timing together.
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
