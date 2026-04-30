import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare consultant in ft lauderdale fl | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare consultant in Ft Lauderdale, FL — Anthony Orner compares Supplement and Advantage plans across Broward County. Free review, no obligation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-consultant-in-ft-lauderdale-fl" },
  openGraph: {
    title:
      "medicare consultant in ft lauderdale fl | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare consultant in Ft Lauderdale FL — Anthony Orner compares Supplement and Advantage plans across Broward County carriers. Free, no-obligation consultation.",
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
      name: "Medicare Guides",
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Consultant in Ft Lauderdale, FL",
      item: "https://medicareyourself.com/services/medicare-consultant-in-ft-lauderdale-fl",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Consultant in Ft Lauderdale, FL: Independent Broker Access",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How much does a Medicare consultant in Ft Lauderdale cost?",
    answer:
      "Nothing. Independent Medicare brokers like Anthony Orner are paid by the carriers, not by you. Your consultation and plan comparison are completely free with no obligation.",
  },
  {
    question: "What is the difference between a Medicare consultant and a captive agent?",
    answer:
      "A captive agent represents one insurance company and can only show you their plans. An independent consultant compares plans from multiple carriers in Broward County, so you see the full picture before choosing.",
  },
  {
    question: "Can I switch Medicare Supplement plans in Florida without medical underwriting?",
    answer:
      "Florida's Birthday Rule gives you a 30-day window around your birthday each year to switch to a comparable Medigap plan without answering health questions. This is a state-specific protection that most Floridians don't know about.",
  },
  {
    question: "When should I contact a Medicare consultant before turning 65?",
    answer:
      "Ideally, 6 months before your Part B start date. This gives you time to compare options and apply during your Medigap Open Enrollment Period, when carriers must accept you regardless of health history.",
  },
];

export default function MedicareConsultantFtLauderdaleFL() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Consultant in Ft Lauderdale, FL
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Consultant in Ft Lauderdale, FL: Independent Broker Access
      </h1>

      <Image
        src="/images/medicare-consultant-in-ft-lauderdale-fl.webp"
        alt="Medicare consultant in Ft Lauderdale FL"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare consultant in Ft Lauderdale, FL can save you hours of confusion and potentially hundreds of dollars a year. I'm Anthony Orner, an independent broker who compares Supplement and Advantage plans from multiple Broward County carriers so you see real options, not a sales pitch for one company.
      </p>
      <p className="text-lg mb-6">
        My consultations are free. Carriers pay me, you don't.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Ft Lauderdale retirees benefit from an independent consultant
        </h2>
        <p className="mb-2">
          Broward County has one of the highest concentrations of Medicare-eligible adults in the country. That means more carriers compete here, which is good for you. But it also means more plans, more mailers, and more confusion.
        </p>
        <p>
          A captive agent shows you one company's options. I show you plans from 12+ carriers side by side. Same doctor networks, same drug formularies, different prices. You pick what fits.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Broward County
        </h2>
        <p className="mb-2">
          Ft Lauderdale residents typically choose between two paths:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Pairs with Original Medicare. Plan G is the most popular. You keep access to any doctor nationwide who accepts Medicare. Rates vary by carrier.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original Medicare with a network-based plan. Many Broward County Advantage plans include dental, vision, and drug coverage with $0 premiums. Trade-off: network restrictions apply.
          </li>
        </ul>
        <p>
          Neither option is universally better. The right plan depends on your doctors, prescriptions, and how you use healthcare. That's exactly what a free review clarifies.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Florida's Birthday Rule and how it protects your right to switch
        </h2>
        <p className="mb-2">
          Florida gives Medigap policyholders a powerful annual protection most people never hear about. During the 30-day window around your birthday, you can switch to a comparable or lesser Supplement plan from any carrier without medical underwriting.
        </p>
        <p>
          That means if your current Plan G premium jumps, you can shop for a lower rate and the new carrier can't deny you for health reasons. I track rate changes across Broward County carriers so I can tell you when a switch makes sense.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key Medicare costs to know for 2026
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>SNF coinsurance (days 21-100): $209.50/day</li>
          <li>Part B late enrollment penalty: 10% for each 12-month delay</li>
        </ul>
        <p className="mt-3">
          These costs add up fast without the right coverage. A Supplement plan can cover most of them. An Advantage plan manages them differently through copays and out-of-pocket maximums.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Local healthcare systems serving Ft Lauderdale
        </h2>
        <p className="mb-2">
          Broward County is home to major systems like Broward Health (including Broward Health Medical Center and Broward Health North) and Holy Cross Health, part of Trinity Health. Cleveland Clinic's Weston location is nearby too.
        </p>
        <p>
          When we compare plans, I check which networks include your specific doctors and hospitals. A plan that looks great on paper means nothing if it doesn't cover where you actually go.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free Medicare review with Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you're turning 65, already on Medicare, or unhappy with your current plan, a 15-minute call can show you what's available. No pressure, no obligation. I'll compare your options across Broward County carriers and let you decide.
        </p>
        <p>
          Call now or request a callback at a time that works for you.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-3">
          Talk to a Medicare Consultant Today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free Ft Lauderdale plan comparison.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-consultant-in-ft-lauderdale-fl"
              className="text-blue-600 hover:underline"
            >
              Florida's Birthday Rule for Medigap Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-consultant-in-ft-lauderdale-fl"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker Serving All of Broward County
            </Link>
          </li>
                    <li>
              <Link
                href="/services/us-medicare-brokers"
                className="text-blue-600 hover:underline"
              >
                Us Medicare Brokers
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Compare Medicare plans on Medicare.gov</a> and review <a href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan" rel="noopener noreferrer" target="_blank" className="underline">enrollment periods and joining a plan</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Florida residents can also contact <a href="https://www.floir.com/" rel="noopener noreferrer" target="_blank" className="underline">the Florida Office of Insurance Regulation</a> or <a href="https://www.floridashine.org/" rel="noopener noreferrer" target="_blank" className="underline">SHINE (Florida's SHIP program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Florida residents can also contact <a href="https://www.floridashine.org/" rel="noopener noreferrer" target="_blank" className="underline">Florida SHINE</a>, the state's free SHIP counseling program, for unbiased Medicare guidance.</div>
      </section>
    </main>
  );
}