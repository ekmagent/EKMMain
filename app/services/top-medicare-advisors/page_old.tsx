import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "top medicare advisors | Free Independent Broker Help | MedicareYourself",
  description:
    "Top Medicare advisors share five key traits: independence, carrier access, transparency, and more. See how Anthony Orner compares. Free consultation.",
  openGraph: {
    title:
      "top medicare advisors | Free Independent Broker Help | MedicareYourself",
    description:
      "Top Medicare advisors share five key traits: independence, carrier access, transparency, and more. See how Anthony Orner compares. Free consultation.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Top Medicare Advisors",
      item: "https://medicareyourself.com/services/top-medicare-advisors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Top Medicare Advisors: What to Look for and How to Choose the Right One",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/top-medicare-advisors",
};

const faqs = [
  {
    question: "How do I know if a Medicare advisor is independent?",
    answer:
      "Ask them directly how many carriers they represent. An independent broker works with multiple insurance companies, not just one. If they can only show you plans from a single carrier, they are a captive agent with limited options.",
  },
  {
    question: "Do top Medicare advisors charge a fee for their help?",
    answer:
      "No. Licensed Medicare brokers are paid commissions by the insurance carriers, not by you. If someone asks you to pay a consultation fee for Medicare advice, that is a red flag. Your cost for the plan is the same whether you use a broker or enroll on your own.",
  },
  {
    question: "What is the difference between a Medicare advisor and a Medicare agent?",
    answer:
      "A Medicare agent typically represents one insurance company. A Medicare advisor or independent broker represents you and can compare plans across many carriers. Independent brokers can shop the market on your behalf to find the best fit for your budget and health needs.",
  },
  {
    question: "When should I contact a Medicare advisor?",
    answer:
      "Ideally, reach out 3 to 6 months before you turn 65 or before your Part B start date. This gives you time to compare options during your Medigap Open Enrollment Period, when you have guaranteed issue rights and cannot be denied coverage or charged more for health reasons.",
  },
];

export default function TopMedicareAdvisors() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Top Medicare Advisors</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Top Medicare Advisors: What to Look for and How to Choose the Right One
      </h1>

      <Image
        src="/images/top-medicare-advisors.webp"
        alt="top medicare advisors"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Top Medicare advisors do not just sell you a plan. They listen, compare your options across carriers, and explain what each choice actually costs you out of pocket. That distinction matters when you are choosing between a Medigap Plan G, Plan N, or a Medicare Advantage plan.
      </p>
      <p className="mb-6">
        The problem? Anyone can call themselves an advisor. Here is how to sort the good ones from the rest.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Five traits that separate great Medicare advisors from average ones
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Independence:</strong> They represent multiple carriers, not one company. More options means a better fit for you.
          </li>
          <li>
            <strong>Carrier access:</strong> A strong advisor works with 10 or more insurance companies in your state, giving you real choices.
          </li>
          <li>
            <strong>Transparency:</strong> They explain how they get paid (carrier commissions, not your pocket) and never dodge questions about plan costs.
          </li>
          <li>
            <strong>Local knowledge:</strong> Medicare rules vary by state. Your advisor should understand your state's regulations and know which carriers price competitively in your zip code.
          </li>
          <li>
            <strong>Ongoing service:</strong> The best advisors review your plan every year, especially during the Medicare Advantage Open Enrollment window (October 15 through December 7).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why independent brokers consistently outperform captive agents
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans. If a competitor offers a lower rate on Plan G in your county, a captive agent cannot tell you about it.
        </p>
        <p>
          An independent broker shops across carriers for you. Same plan letter, different price. That is where the savings happen. And you pay nothing extra for their help - the plan costs the same either way.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Red flags to watch for when choosing a Medicare advisor
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>They pressure you to enroll on the spot. A good advisor gives you time to decide.</li>
          <li>They charge a consultation fee. Licensed Medicare brokers never charge you directly.</li>
          <li>They only mention one carrier. That signals captive, not independent.</li>
          <li>They cannot explain the Part B deductible ($257/year in 2026) or how Medigap Open Enrollment works. Basic knowledge gaps mean bigger problems later.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner's approach puts clients first
        </h2>
        <p className="mb-2">
          I am Anthony Orner, an independent licensed Medicare broker based in New Jersey. I work with over a dozen carriers and do not push one company over another. My job is to lay out your options, compare the numbers, and let you pick what fits your budget and health.
        </p>
        <p>
          Every consultation is free. No sales pitch, no timer. Just answers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to ask during your first call with an advisor
        </h2>
        <p className="mb-2">
          Come prepared. These three questions will tell you everything:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>"How many insurance companies do you represent in my state?"</li>
          <li>"Can you show me Plan G rates from at least three carriers?"</li>
          <li>"Will you help me review my plan next year during open enrollment?"</li>
        </ul>
        <p className="mt-2">
          If they stumble on any of those, keep looking.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Timing matters more than most people realize
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During that window, carriers cannot deny you or charge higher premiums based on your health history.
        </p>
        <p>
          Miss it and you could face medical underwriting, higher rates, or outright denial. The best time to call an advisor is 3 to 6 months before your Part B start date.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare your Medicare options?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          for a free, no-pressure consultation.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
              href="/medicare/plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan N: A Lower-Premium Alternative
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
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