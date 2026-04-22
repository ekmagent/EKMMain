import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import PhoneCTA from "@/components/PhoneCTA";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicare Education Guides | MedicareYourself",
  description:
    "Free Medicare education guides written by a licensed broker: Parts A-D, Medigap, enrollment, IRMAA, and low-income help. Call 855-559-1700 for answers.",
  alternates: { canonical: `${SITE_URL}/learn` },
  openGraph: {
    title: "Medicare Education Guides | MedicareYourself",
    description:
      "Free Medicare education guides: learn about Medigap, Medicare Parts A-D, enrollment steps, IRMAA surcharges, and low-income assistance.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Learn",
      item: "https://medicareyourself.com/learn",
    },
  ],
};

const GUIDES = [
  {
    heading: "Understanding Medicare",
    links: [
      { href: "/learn/medicare-parts-explained", label: "Medicare Parts A, B, C, and D Explained Simply" },
      { href: "/learn/what-is-medigap", label: "What Is Medigap? Medicare Supplement Insurance Explained" },
      { href: "/learn/medicare-enrollment-periods", label: "Medicare Enrollment Periods: When You Can Sign Up or Switch" },
    ],
  },
  {
    heading: "Enrollment and sign-up",
    links: [
      { href: "/learn/how-to-sign-up-for-medicare", label: "How and When to Sign Up for Medicare (2026)" },
      { href: "/learn/ssa-online-enrollment-walkthrough", label: "SSA.gov Online Enrollment: Step-by-Step Walkthrough" },
    ],
  },
  {
    heading: "Costs and financial help",
    links: [
      { href: "/learn/irmaa-medicare-surcharge", label: "IRMAA Medicare Surcharge: What It Is and How to Avoid It" },
      { href: "/learn/medicare-help-low-income", label: "Medicare Help for People on a Fixed Income" },
    ],
  },
,
  {
    question: "Where should I start if I'm new to Medicare?",
    answer:
      "Begin by learning the four parts of Medicare: Part A (hospital), Part B (medical), Part C (Medicare Advantage), and Part D (prescription drugs). Once you understand what each part covers, you can decide between Original Medicare with a Medigap plan or a Medicare Advantage plan. Our guides walk through each step in plain language.",
  },
  {
    question: "Is Medicare the same as Medicaid?",
    answer:
      "No. Medicare is a federal health insurance program primarily for people age 65 and older or with certain disabilities, regardless of income. Medicaid is a joint federal and state program that helps people with limited income and resources. Some people qualify for both, which is called being 'dual-eligible.'",
  },
  {
    question: "Do I have to pay for help from a licensed Medicare broker?",
    answer:
      "No. Licensed brokers like Anthony Orner are paid by the insurance carriers when a client enrolls, so there is no separate fee to you. Your plan premium is the same whether you enroll through a broker or directly with the carrier. Call 855-559-1700 for no-cost guidance.",
  }
];

export default function LearnHubPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <nav className="max-w-3xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-gray-900 font-medium">Learn</span>
      </nav>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Medicare Education Guides
        </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Straightforward explanations of how Medicare works, written by a
          licensed broker. Start here before choosing a plan:
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-10 space-y-10">
        {GUIDES.map((category) => (
          <div key={category.heading}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category.heading}
            </h2>
            <ul className="space-y-2 text-sm">
              {category.links.map((link) => (
                <li key={link.href} className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">&bull;</span>
                  <Link
                    href={link.href}
                    className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-10">
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <p className="mb-2">
            Ready to compare plans?
          </p>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="text-blue-600 hover:underline">
                Browse all Medicare services and guides
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">
                Medicare Supplement plans in New Jersey
              </Link>
            </li>
            <li>
              <Link href="/medicare-advantage/new-jersey" className="text-blue-600 hover:underline">
                Medicare Advantage plans in New Jersey
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Still have questions?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Call Anthony for a free, no-pressure conversation about your
            Medicare options.
          </p>
          <PhoneCTA size="lg" label="Call 855-559-1700" />
          <p className="text-blue-200 text-sm mt-4">
            Free &middot; Independent &middot; Licensed in NJ and 34 states
          </p>
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">Medicare Basics (Medicare.gov)</a> &middot; <a href="https://www.cms.gov/medicare" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">CMS Medicare Program</a></div>
      </section>
    </>
  );
}
