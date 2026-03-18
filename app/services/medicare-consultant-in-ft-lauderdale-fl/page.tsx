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
    "Medicare consultant in Ft Lauderdale FL — Anthony Orner compares Supplement and Advantage plans across Broward County carriers. Free, no-obligation consultation.",
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
      item: "https://www.medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Consultant in Ft Lauderdale FL",
      item: "https://www.medicareyourself.com/services/medicare-consultant-in-ft-lauderdale-fl",
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
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much does a Medicare consultant cost?",
    answer:
      "A licensed Medicare consultant like Anthony Orner costs you nothing. Independent brokers are compensated by the insurance carriers, not the client. You get unbiased plan comparisons and enrollment help at zero cost to you.",
  },
  {
    question:
      "What is the difference between a Medicare consultant and a captive agent?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent Medicare consultant works with multiple carriers across Broward County, so you see a broader range of Supplement and Advantage options side by side.",
  },
  {
    question: "When can I change my Medicare plan in Florida?",
    answer:
      "Medicare Advantage and Part D plans can be changed during Open Enrollment (October 15 through December 7) or during the Medicare Advantage Open Enrollment Period (January 1 through March 31). For Medigap, Florida's Birthday Rule gives you a 63-day window around your birthday each year to switch Supplement plans without medical underwriting.",
  },
  {
    question:
      "Can I meet with a Medicare consultant in person in Ft Lauderdale?",
    answer:
      "Yes. Anthony Orner offers phone, video, and in-person consultations for Ft Lauderdale and greater Broward County residents. Call 855-559-1700 to schedule a time that works for you.",
  },
];

export default function MedicareConsultantFtLauderdale() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Consultant in Ft Lauderdale FL
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
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare consultant in Ft Lauderdale, FL gives you something a single-carrier agent cannot: a side-by-side look at plans from multiple insurance companies. I'm Anthony Orner, an independent licensed Medicare broker, and I compare Supplement and Advantage options across Broward County carriers at no cost to you.
      </p>
      <p className="text-lg mb-6">
        No high-pressure sales. No obligation. Just clear answers about what each plan actually covers and costs.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Ft Lauderdale retirees benefit from an independent consultant
        </h2>
        <p className="mb-2">
          Broward County has dozens of Medicare carriers competing for your enrollment. That's good for pricing but overwhelming to sort through alone.
        </p>
        <p className="mb-4">
          An independent consultant isn't tied to one company. I pull quotes from 10 or more carriers so you can compare premiums, networks, and benefits on one call. Captive agents only show you their employer's plans - you could miss a better deal across the street.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Broward County
        </h2>
        <p className="mb-2">
          Ft Lauderdale residents have access to both Medicare Supplement (Medigap) and Medicare Advantage (Part C) plans. Here's the quick breakdown:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Medigap Plan G</strong> - Covers the Part A deductible ($1,676 in 2026), skilled nursing coinsurance ($209.50/day for days 21-100), and Part B excess charges. You pay only the $257 Part B deductible, then Medicare and Plan G handle the rest.
          </li>
          <li>
            <strong>Medigap Plan N</strong> - Lower premiums than Plan G, but you pay small copays at office visits and the ER.
          </li>
          <li>
            <strong>Medicare Advantage (HMO/PPO)</strong> - Bundles Part A, Part B, and often Part D into one plan. Many Broward County Advantage plans carry $0 premiums and include dental, vision, and hearing benefits.
          </li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I run the numbers so you don't have to guess.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Florida's Birthday Rule and how it protects your right to switch
        </h2>
        <p className="mb-2">
          Florida gives Medigap policyholders a powerful protection most states don't offer. Under the Birthday Rule, you get a 63-day window around your birthday each year to switch to any Medigap plan of equal or lesser benefits - with no medical underwriting.
        </p>
        <p className="mb-4">
          That means if your current Supplement premiums have climbed, you can move to a lower-cost carrier without answering health questions. This window starts 30 days before your birthday and ends 33 days after. Miss it and you may need to pass underwriting.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Your 6-month Medigap open enrollment window
        </h2>
        <p className="mb-2">
          If you're turning 65 and enrolling in Part B, you have a one-time 6-month Medigap Open Enrollment Period. During this window, every carrier must accept you at their standard rate regardless of health history.
        </p>
        <p>
          Once those 6 months close, carriers in Florida can ask health questions and charge more - or decline you entirely. Don't wait until the last month to start comparing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What a free Medicare review looks like
        </h2>
        <p className="mb-2">
          Here's what happens when you call:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>We review your current coverage (or lack of it) and your prescriptions.</li>
          <li>I pull real-time quotes from Broward County carriers.</li>
          <li>You pick the plan that fits your budget and doctors - or you pick nothing. Zero pressure either way.</li>
        </ul>
        <p>
          The entire call typically takes 15 to 20 minutes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free Medicare review with Anthony Orner
        </h2>
        <p className="mb-4">
          Whether you're new to Medicare or reviewing a plan you've had for years, I'll show you what's available in Ft Lauderdale and Broward County right now. Call 855-559-1700 or use the link below to get started.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare consultant today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation plan comparison.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plans-florida"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in Florida
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/florida-birthday-rule-medigap"
              className="text-blue-600 hover:underline"
            >
              Florida Birthday Rule for Medigap Explained
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-advantage-broward-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Broward County
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}