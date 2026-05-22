import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare insurance broker near hackensack, nj | Free Quote | MedicareYourself",
  description:
    "Compare Medicare plans near Hackensack, NJ with independent broker Anthony Orner. Free quotes on Medigap, Advantage & Part D. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-insurance-broker-near-hackensack-nj" },
  openGraph: {
    title:
      "best medicare insurance broker near hackensack, nj | Free Quote | MedicareYourself",
    description:
      "Best medicare insurance broker near Hackensack, NJ — Anthony Orner compares top Medigap and Advantage carriers in Bergen County. Free, no-pressure quote.",
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
      name: "Best Medicare Insurance Broker Near Hackensack, NJ",
      item: "https://medicareyourself.com/services/best-medicare-insurance-broker-near-hackensack-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Insurance Broker Near Hackensack, NJ — Independent, Licensed, Local",
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
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Ratings change yearly. In Bergen County, several carriers earn 4+ stars from CMS, but the best plan depends on your doctors, prescriptions, and budget. An independent broker compares all available options so you don't have to guess.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Zero. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, comparisons, or enrollment help. The premium you pay is the same whether you use a broker or go directly to the carrier.",
  },
  {
    question:
      "What's the difference between a Medicare broker and a captive agent?",
    answer:
      "A captive agent sells plans from one carrier only. An independent broker like Anthony Orner is licensed with multiple carriers and can compare plans side by side to find what actually fits your situation.",
  },
  {
    question: "When should I contact a Medicare broker in Hackensack?",
    answer:
      "Ideally, reach out about 6 months before you turn 65 or before your employer coverage ends. For Medicare Advantage or Part D changes, the Annual Enrollment Period runs October 15 through December 7.",
  },
];

export default function BestMedicareBrokerHackensackNJ() {
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
        <span className="text-gray-700">
          Best Medicare Insurance Broker Near Hackensack, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Best Medicare Insurance Broker Near Hackensack, NJ — Independent,
        Licensed, Local
      </h1>

      <Image
        src="/images/best-medicare-insurance-broker-near-hackensack-nj.webp"
        alt="best medicare insurance broker near hackensack, nj"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Best medicare insurance broker near Hackensack, NJ? That's a high bar in
        Bergen County, where hospital network changes can upend your coverage
        overnight. Anthony Orner is an independent, licensed broker who compares
        plans from multiple carriers so Hackensack-area residents get real
        answers, not a sales pitch.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What makes a Medicare broker better than a captive agent
        </h2>
        <p className="mb-2">
          A captive agent represents one company. If that carrier's network
          drops your local hospital system, they can't help you switch. An
          independent broker works with multiple carriers and can move you to a
          plan that still covers your doctors.
        </p>
        <p>
          In Hackensack, that distinction matters. Recent disputes between major
          hospital systems and insurers have left many Bergen County residents
          scrambling to confirm their providers are still in-network. A broker
          checks this before you enroll.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers available to Hackensack residents in 2025
        </h2>
        <p className="mb-2">
          Bergen County has strong carrier competition. Depending on your zip
          code, you may have access to:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Medicare Advantage plans (HMO and PPO) from several national and regional carriers</li>
          <li>Medigap plans (A, B, C, D, F, G, K, L, M, N) from multiple underwriters</li>
          <li>Part D standalone prescription drug plans</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. Anthony runs the
          comparison so you see real numbers, not marketing promises.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps Bergen County clients save
        </h2>
        <p className="mb-2">
          Anthony lives and works in New Jersey. He knows which plans cover
          Hackensack University Medical Center, Holy Name Medical Center, and
          other Bergen County facilities. He doesn't guess.
        </p>
        <p>
          He checks your prescriptions against each plan's formulary, confirms
          your specialists are in-network, and runs cost projections that include
          premiums, deductibles, and copays together. The goal: lowest total
          out-of-pocket cost, not just the cheapest monthly premium.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why network disruptions make broker advice critical
        </h2>
        <p className="mb-2">
          Bergen County residents have watched major hospital systems and
          insurers fail to reach agreements, leaving patients caught in the
          middle. If your hospital drops out of your plan's network mid-year, you
          may qualify for a Special Enrollment Period to switch.
        </p>
        <p>
          A broker monitors these changes and contacts you proactively. You
          shouldn't have to find out through a surprise bill.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs to know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>SNF coinsurance (days 21–100): $209.50/day</li>
          <li>
            Medigap Open Enrollment: 6 months starting the month you turn 65 and
            are enrolled in Part B
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request your free Hackensack-area Medicare quote
        </h2>
        <p className="mb-2">
          There's no fee to work with Anthony. Carriers pay him, you don't. The
          premium you pay is identical whether you enroll through a broker or
          directly.
        </p>
        <p>
          Call with your Medicare card, a list of current medications, and your
          doctor names. That's all he needs to run a full comparison.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to Anthony Orner — Bergen County's Independent Medicare Broker
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Bergen County
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D in NJ: Choosing the Right Drug Plan
            </Link>
          </li>
                    <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
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
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-insurance-brokers-near-me"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Insurance Brokers Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/hackensack-nj-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Hackensack NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-insurance-agent-near-me"
                className="text-blue-600 hover:underline"
              >
                Medicare Insurance Agent Near Me
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="underline">Compare Medicare plans on Medicare.gov</a> and learn about <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="underline">getting started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ-specific help, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}