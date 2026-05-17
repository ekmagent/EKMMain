import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare broker no cost to you | Free Plan Comparison | MedicareYourself",
  description:
    "Work with a licensed Medicare broker at no cost to you. Compare plans from top carriers, get unbiased guidance, and enroll free. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-broker-no-cost-to-you" },
  openGraph: {
    title:
      "best medicare broker no cost to you | Free Plan Comparison | MedicareYourself",
    description:
      "Best medicare broker no cost to you — independent brokers compare top carriers and never charge a fee. Request a free comparison today.",
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
      name: "Best Medicare Broker No Cost to You",
      item: "https://medicareyourself.com/services/best-medicare-broker-no-cost-to-you",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Broker at No Cost to You: How Free Broker Service Actually Works",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers are paid commissions directly by insurance carriers. You pay the same premium whether you use a broker or enroll on your own. There's no hidden fee, markup, or catch.",
  },
  {
    question:
      "What's the difference between an independent broker and a captive agent?",
    answer:
      "An independent broker is contracted with multiple carriers and can show you plans from all of them. A captive agent works for one company and can only sell that company's products. Independent brokers give you a wider range of options.",
  },
  {
    question: "Can a Medicare broker help me switch plans?",
    answer:
      "Yes. A licensed broker can help you compare and switch plans during the Annual Enrollment Period (October 15 through December 7), the Medicare Advantage Open Enrollment Period (January 1 through March 31), or anytime you qualify for a Special Enrollment Period.",
  },
  {
    question: "How do I know a Medicare broker is trustworthy?",
    answer:
      "Check that they hold an active state insurance license, ask how many carriers they represent, and confirm they'll show you plans from multiple companies. A good broker explains tradeoffs honestly and doesn't pressure you into one plan.",
  },
];

export default function BestMedicareBrokerNoCostToYou() {
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
        <span className="text-gray-700">Best Medicare Broker No Cost to You</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Best Medicare Broker at No Cost to You: How Free Broker Service Actually Works
      </h1>

      <Image
        src="/images/best-medicare-broker-no-cost-to-you.webp"
        alt="best medicare broker no cost to you"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Best medicare broker no cost to you isn't a gimmick. Licensed independent brokers genuinely don't charge you a dime, and you pay the exact same premium as someone who enrolls directly with a carrier.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The real question isn't whether it's free. It's whether the broker actually works for you or for one insurance company.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Medicare brokers get paid without charging you a dime
        </h2>
        <p className="text-gray-700 mb-2">
          Insurance carriers pay brokers a commission when you enroll in a plan. That commission is baked into the plan's premium structure and regulated by CMS. Your cost stays the same whether you use a broker, call the carrier directly, or sign up on medicare.gov.
        </p>
        <p className="text-gray-700">
          No retainer. No consultation fee. No hidden charges at renewal. The carrier writes the check, not you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Independent broker vs. captive agent — why it changes your options
        </h2>
        <p className="text-gray-700 mb-2">
          A captive agent represents one company. They'll show you that company's plans and nothing else. An independent broker is contracted with 30+ carriers and can lay every relevant option side by side.
        </p>
        <p className="text-gray-700">
          That distinction matters. If a Plan G from one carrier costs $40/month less than another for identical coverage, a captive agent at the expensive carrier can't tell you. An independent broker will.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What to look for before you trust a broker with your coverage
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Active state insurance license (verify at your state's Department of Banking and Insurance)</li>
          <li>Contracts with multiple carriers, not just one or two</li>
          <li>Willingness to explain Plan N vs. Plan G tradeoffs honestly, not just default to the most expensive option</li>
          <li>No pressure to decide on the phone, no scare tactics about deadlines that don't exist</li>
          <li>Ongoing support after enrollment, including help with claims and annual plan reviews</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why "free" doesn't mean "low quality"
        </h2>
        <p className="text-gray-700 mb-2">
          People assume free advice can't be good advice. But the broker compensation model means you're not the product. You're the client. A broker who helps you find the right plan earns your renewal year after year. That's the incentive alignment that keeps the relationship honest.
        </p>
        <p className="text-gray-700">
          The real risk isn't paying too little for help. It's getting no help and choosing a plan that costs you thousands in uncovered care.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common mistakes people make without a broker
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Missing the Medigap Open Enrollment window (6 months from your Part B start date) and losing guaranteed-issue rights</li>
          <li>Assuming Parts A and B cover everything, then getting hit with the 20% coinsurance on a $50,000 surgery</li>
          <li>Picking Medicare Advantage without checking if their doctors are in-network</li>
          <li>Not knowing the Part B late enrollment penalty adds 10% per 12-month period you delayed</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request a free plan comparison from a licensed independent broker
        </h2>
        <p className="text-gray-700 mb-2">
          I'm Anthony Orner, a licensed independent Medicare broker. I compare plans across every major carrier, walk you through real costs, and help you enroll with zero fees and zero pressure.
        </p>
        <p className="text-gray-700">
          Whether you're turning 65 next month or reviewing your current coverage, one call gets you a side-by-side comparison built around your doctors, prescriptions, and budget.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed independent broker today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm opacity-90">
          No cost. No obligation. Just straight answers.
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare Without Paying Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner — Licensed Independent Medicare Broker
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or verify an agent's license with the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify any broker's license or get free counseling through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling in your state, contact your local <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
    </main>
  );
}