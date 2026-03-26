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
  alternates: { canonical: "https://medicareyourself.com/services/independent-medicare-agents-near-me" },
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
      item: "https://medicareyourself.com/services",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Do independent Medicare agents charge a fee for their help?",
    answer:
      "No. Independent Medicare brokers are paid commissions by the insurance carriers, not by you. The plans cost the same whether you enroll directly or through a broker. You get comparison shopping at no extra charge.",
  },
  {
    question:
      "What's the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent works for one insurance company and can only show you that company's plans. An independent broker is contracted with multiple carriers and can compare options across all of them to find what actually fits your budget and doctors.",
  },
  {
    question: "How do I know if a Medicare agent is truly independent?",
    answer:
      "Ask how many carriers they represent. If the answer is one or two, they're likely captive. A truly independent broker works with dozens of carriers. You can also verify their license through your state's Department of Insurance.",
  },
  {
    question: "Can an independent broker help me switch plans during open enrollment?",
    answer:
      "Yes. During Medicare Advantage and Part D Open Enrollment (October 15 through December 7), an independent broker can review your current plan, check if your doctors and medications are still covered, and switch you to a better option if one exists.",
  },
];

export default function IndependentMedicareAgentsNearMe() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Independent Medicare Agents Near Me</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Independent Medicare Agents Near Me: Why Working with a Broker Saves You Money
      </h1>

      <Image
        src="/images/independent-medicare-agents-near-me.webp"
        alt="Independent Medicare agents near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Independent Medicare agents near me is one of the most common searches I see from people turning 65 or reviewing their coverage. The frustration makes sense. You want someone who compares plans honestly, not someone who pushes whatever their employer tells them to sell.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker in NJ and PA. I work with 30+ carriers and I don't charge you a penny.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          What makes a Medicare agent truly independent
        </h2>
        <p className="text-gray-700 mb-2">
          A truly independent agent isn't tied to one insurance company. They hold contracts with multiple carriers and can show you plans side by side.
        </p>
        <p className="text-gray-700">
          Ask any agent you're considering: "How many carriers do you represent?" If they dodge the question or say one, keep looking. An independent broker should name dozens.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          The difference between a broker, agent, and advisor
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Captive agent:</strong> Works for one carrier. Can only sell that carrier's plans.
          </li>
          <li>
            <strong>Independent broker:</strong> Contracted with many carriers. Compares plans across the market on your behalf.
          </li>
          <li>
            <strong>Advisor:</strong> Sometimes used loosely. Always confirm they hold an active insurance license in your state.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          All three cost you the same. The plans are identically priced whether you buy direct or through a broker. The difference is how many options you actually get to see.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How an independent broker compares dozens of carriers at once
        </h2>
        <p className="text-gray-700 mb-2">
          I use enrollment tools that pull in real-time plan data from 30+ carriers. I enter your doctors, your medications, and your county. Within minutes, I can show you which Medicare Advantage, Medigap, or Part D plan actually covers what you need at the lowest cost.
        </p>
        <p className="text-gray-700">
          Doing this yourself on Medicare.gov works, but it takes hours and doesn't account for network changes mid-year. A broker catches those gaps.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why people feel overwhelmed choosing Medicare plans
        </h2>
        <p className="text-gray-700 mb-2">
          Part A, B, C, D. Advantage vs. Supplement. Drug tiers. Enrollment windows. People describe it as "learning a new language," and they're right.
        </p>
        <p className="text-gray-700">
          The 2026 Part B premium is $202.90/month. The Part A deductible is $1,676 per benefit period. Those numbers matter when you're comparing Medigap Plan G against a $0-premium Advantage plan. An independent broker lays all of this out plainly, without jargon.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          What to watch out for with Medicare sales tactics
        </h2>
        <p className="text-gray-700 mb-2">
          Some agencies use misleading ads or high-pressure outbound calls. If an agent won't let you take a day to think, that's a red flag.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Never give your Medicare number to someone who cold-calls you.</li>
          <li>A legitimate broker will explain the tradeoffs, not just the benefits.</li>
          <li>You should never feel rushed outside of a genuine enrollment deadline (October 15 through December 7 for MA/Part D).</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Connect with a licensed independent Medicare broker today
        </h2>
        <p className="text-gray-700 mb-2">
          I serve clients throughout New Jersey and Pennsylvania. No sales pitch, no obligation. I'll review your current coverage, check your prescriptions, and tell you honestly if switching makes sense or not.
        </p>
        <p className="text-gray-700">
          If you're turning 65, remember: your Medigap Open Enrollment Period is the 6 months starting the month you turn 65 and are enrolled in Part B. That's your best window for guaranteed-issue coverage at the lowest rates.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent broker who works for you, not an insurance company.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
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
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              How Medicare Part D Drug Plans Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner, Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}