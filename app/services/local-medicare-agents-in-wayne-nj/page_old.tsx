import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in wayne nj | Free Independent Broker Help | MedicareYourself",
  description:
    "Local Medicare agents in Wayne, NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans across carriers. Free quote today.",
  openGraph: {
    title:
      "local medicare agents in wayne nj | Free Independent Broker Help | MedicareYourself",
    description:
      "Local Medicare agents in Wayne, NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans across carriers. Free quote today.",
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
      name: "Local Medicare Agents in Wayne, NJ",
      item: "https://www.medicareyourself.com/services/local-medicare-agents-in-wayne-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Wayne, NJ: Independent Broker Serving Passaic County",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/local-medicare-agents-in-wayne-nj",
};

const faqs = [
  {
    question: "Do I need an agent to get Medicare?",
    answer:
      "No, you can enroll in Original Medicare (Parts A and B) directly through Social Security. But when it comes to choosing a Medicare Supplement or Medicare Advantage plan, an independent broker can compare multiple carriers for you at no cost. The carriers pay the broker, not you.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for someone who is licensed in your state, works independently (not captive to one insurance company), and is willing to show you options from multiple carriers side by side. Ask if they help with both Medicare Supplement and Medicare Advantage plans so you can see the full picture.",
  },
  {
    question: "What is the highest rated Medicare Advantage plan in New Jersey?",
    answer:
      "Star ratings change every year and vary by county. In Passaic County, several carriers offer 4-star and above plans. The best plan for you depends on your doctors, prescriptions, and budget. Call 855-559-1700 for a free comparison based on your specific needs.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. For help choosing a plan rather than general Medicare questions, a local independent broker like Anthony Orner can walk you through your options one-on-one at no charge.",
  },
];

export default function LocalMedicareAgentsWayneNJ() {
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
        <span className="text-gray-700">Local Medicare Agents in Wayne, NJ</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Local Medicare Agents in Wayne, NJ: Independent Broker Serving Passaic County
      </h1>

      <Image
        src="/images/local-medicare-agents-in-wayne-nj.webp"
        alt="local medicare agents in wayne nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Local Medicare agents in Wayne, NJ can save you hours of phone calls and confusion during enrollment. I'm Anthony Orner, a licensed independent Medicare broker serving Wayne and the rest of Passaic County.
      </p>
      <p className="text-lg mb-6">
        I compare plans from multiple carriers so you don't have to. There's no fee for my help - ever.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Wayne residents benefit from an independent Medicare broker
        </h2>
        <p className="mb-2">
          A captive agent sells one company's plans. I'm independent, which means I work for you, not an insurance carrier. When you sit down with me, you see rates from Aetna, Cigna, Mutual of Omaha, United, and others side by side.
        </p>
        <p>
          Wayne has a large population of adults turning 65 every month. Many assume they need to call each carrier individually. You don't. One call to me covers them all.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans available in Passaic County
        </h2>
        <p className="mb-2">
          In the 07470 zip code, you have access to both Medicare Supplement (Medigap) plans and Medicare Advantage (Part C) plans. Here's the quick breakdown:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-2">
          <li>Medicare Supplement Plan G - covers the Part A deductible ($1,676 in 2026), skilled nursing coinsurance, and Part B excess charges. You pay only the $257 Part B deductible.</li>
          <li>Medicare Supplement Plan N - lower premium than Plan G, but you may owe small copays at office visits.</li>
          <li>Medicare Advantage HMO/PPO - many $0 premium options with bundled drug coverage and dental/vision benefits.</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I'll pull real quotes for your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to compare carriers without calling each one yourself
        </h2>
        <p className="mb-2">
          There are over a dozen carriers offering Medigap plans in New Jersey. Calling each one takes time, and every call ends with a sales pitch. When you work with me, I pull all of those quotes at once.
        </p>
        <p>
          I lay them out in a simple spreadsheet. Same plan letter, different prices. You pick the one that fits your budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap open enrollment matters more than you think
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, no insurance company can deny you or charge more based on health conditions.
        </p>
        <p>
          Miss it, and you could face medical underwriting. That means higher premiums or outright denial. If you're approaching 65, the time to start comparing is now - not the week before your birthday.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage enrollment and switching windows
        </h2>
        <p className="mb-2">
          The Annual Enrollment Period runs October 15 through December 7 each year. That's when you can join, switch, or drop a Medicare Advantage plan for the following year.
        </p>
        <p>
          Already on a Medicare Advantage plan and unhappy? The Open Enrollment Period (January 1 - March 31) lets you switch to a different Advantage plan or move back to Original Medicare and pick up a Supplement - though underwriting may apply outside your Medigap window.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Medicare quote from Wayne, NJ
        </h2>
        <p className="mb-2">
          Whether you live near Valley Road, the Willowbrook area, or anywhere in Wayne's 07470 zip code, I can help by phone or in person. The consultation is free. The comparison is free. The ongoing service is free.
        </p>
        <p>
          Call me and I'll have quotes ready in minutes, not days.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Wayne, NJ?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          No cost, no obligation. Anthony Orner, Licensed NJ Medicare Broker.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ - Full Guide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ - Compare Your Options
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner - Your Independent Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}