import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare agents near me | Free Broker Help, No Sales Pitch | MedicareYourself",
  description:
    "Independent Medicare agents near me — Anthony Orner compares plans from 30+ carriers as a licensed broker in NJ and PA. Free, no-obligation consultation.",
  openGraph: {
    title:
      "independent medicare agents near me | Free Broker Help, No Sales Pitch | MedicareYourself",
    description:
      "Independent Medicare agents near me — Anthony Orner compares plans from 30+ carriers as a licensed broker in NJ and PA. Free, no-obligation consultation.",
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
      item: "https://medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Independent Medicare Agents Near Me",
      item: "https://medicareyourself.com/services/independent-medicare-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Independent Medicare Agents Near Me: Why Working with a Broker Saves You Money",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Who is the best person to talk to about Medicare?",
    answer:
      "An independent licensed Medicare broker is your best resource. Unlike captive agents who represent one company, independent brokers compare plans across dozens of carriers and are legally required to act in your interest. Their help is free to you - the insurance carriers pay the broker's commission.",
  },
  {
    question:
      "What's the difference between a Medicare broker and a Medicare agent?",
    answer:
      "A Medicare agent typically represents one insurance carrier and can only sell that carrier's plans. A Medicare broker is contracted with multiple carriers - sometimes 30 or more - and can shop across all of them to find the plan that fits your budget and health needs. Both are licensed professionals, but brokers give you more options.",
  },
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Independent Medicare brokers and agents do not charge you anything. Zero. The insurance carriers pay them a commission when you enroll. Whether you sign up directly with a carrier or through a broker, your premium stays the same. There is no cost advantage to skipping the broker.",
  },
  {
    question: "Can an independent Medicare broker help me switch plans?",
    answer:
      "Yes. During the Medicare Advantage and Part D Open Enrollment period (October 15 through December 7), an independent broker can review your current coverage and compare it against new options. For Medigap plans, switching rules depend on your state and health status - call to discuss your specific situation.",
  },
];

export default function IndependentMedicareAgentsNearMe() {
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
        <span className="text-gray-700">Independent Medicare Agents Near Me</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Independent Medicare Agents Near Me: Why Working with a Broker Saves You Money
      </h1>

      <Image
        src="/images/independent-medicare-agents-near-me.webp"
        alt="independent medicare agents near me"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Independent Medicare agents near me is one of the most common searches I see from people turning 65 or reviewing their current coverage. The good news: you found one. I'm Anthony Orner, a licensed independent Medicare broker serving New Jersey and Pennsylvania.
      </p>
      <p className="text-lg mb-6">
        My consultations are free. I compare plans from over 30 carriers so you see real numbers, not a sales pitch. Let me show you why that matters.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What makes a Medicare agent truly independent
        </h2>
        <p className="mb-2">
          A truly independent agent holds contracts with multiple insurance carriers. That means I'm not pushing one company's product. I pull quotes from 30+ carriers and lay them side by side.
        </p>
        <p>
          You want someone whose paycheck doesn't depend on steering you toward a single plan. My commission is the same regardless of which carrier you choose, so my only job is matching you with the best fit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The difference between a broker, agent, and advisor
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Captive agent:</strong> Works for one insurance company. Can only sell that company's plans.
          </li>
          <li>
            <strong>Independent broker:</strong> Contracted with many carriers. Shops across all of them on your behalf. This is what I do.
          </li>
          <li>
            <strong>Medicare advisor:</strong> Often a marketing term. Always ask if they are state-licensed and how many carriers they represent.
          </li>
        </ul>
        <p className="mt-3">
          The distinction matters because the number of carriers determines how many options you actually see.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker compares dozens of carriers at once
        </h2>
        <p className="mb-2">
          When you call me, I collect a few basics: your zip code, your Part B start date, and any prescriptions or doctors you want to keep. Then I run real-time quotes across every carrier available in your area.
        </p>
        <p>
          For Medigap plans like Plan G or Plan N, rates vary significantly between carriers for the exact same coverage. A five-minute call can reveal a $40 to $80 per month difference. Over a year, that's up to $960 back in your pocket.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why there is no cost to use an independent broker
        </h2>
        <p className="mb-2">
          This surprises a lot of people. You pay nothing for my help. Zero. The insurance carrier pays my commission after you enroll.
        </p>
        <p>
          Your premium is the same whether you call the carrier directly, sign up online, or work with me. The only difference is that I do the comparison work for you and handle paperwork if something goes wrong.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment windows to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. During this window, carriers cannot deny you or charge higher premiums based on health. Miss it, and you may face medical underwriting.
          </li>
          <li>
            <strong>Medicare Advantage/Part D Open Enrollment:</strong> October 15 through December 7 each year.
          </li>
          <li>
            <strong>2026 Part B premium:</strong> $185/month. <strong>Part B deductible:</strong> $257/year.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Connect with a licensed independent Medicare broker today
        </h2>
        <p className="mb-2">
          I work with clients across NJ and PA every day. Whether you're turning 65 next month or just want to see if your current plan is still the best deal, I'll run a free comparison and walk you through the numbers.
        </p>
        <p>
          No pressure. No sales pitch. Just straightforward answers from someone who does this full time.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent Medicare broker today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          for a free, no-obligation plan comparison.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: When It Makes Sense
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Deadlines and Rules
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in NJ: How Anthony Can Help
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}