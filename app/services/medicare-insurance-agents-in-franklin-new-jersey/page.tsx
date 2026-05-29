import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in franklin new jersey | Free Quotes | MedicareYourself",
  description:
    "Compare Medicare Supplement and Advantage plans in Franklin, NJ with a licensed independent broker. Free quotes, no pressure. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-franklin-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in franklin new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Franklin New Jersey — compare Supplement and Advantage plans with licensed broker Anthony Orner. Free quotes, zero pressure.",
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
      name: "Medicare Insurance Agents in Franklin, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-franklin-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Franklin, New Jersey: Independent Broker Access",
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
    question: "Do Medicare insurance agents charge for their help?",
    answer:
      "No. Licensed Medicare agents are paid by the insurance carriers, not by you. There's no fee for quotes, plan comparisons, or enrollment assistance. The plan costs the same whether you use an agent or enroll directly.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes, especially an independent broker who isn't locked to one carrier. An independent agent can show you plans from multiple companies side by side, helping you find the best fit for your doctors, prescriptions, and budget. A captive agent can only sell one company's products.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like NJ PAAD (Pharmaceutical Assistance to the Aged and Disabled) and Lifeline. At the federal level, Medicare Savings Programs and Extra Help/Low-Income Subsidy can reduce Part B premiums and drug costs. Your broker can help you check eligibility.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change yearly based on CMS Star Ratings. In Somerset County, several carriers consistently score 4+ stars for both Advantage and Supplement plans. The best plan depends on your specific doctors and medications — not just star ratings. Call for a personalized comparison.",
  },
];

export default function MedicareInsuranceAgentsFranklinNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
          Medicare Insurance Agents in Franklin, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Insurance Agents in Franklin, New Jersey: Independent Broker
        Access
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-franklin-new-jersey.webp"
        alt="Medicare insurance agents in Franklin New Jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare insurance agents in Franklin, New Jersey aren't all the same.
        Some work for one carrier and can only show you that company's plans.
        Others, like independent brokers, compare plans across multiple insurers
        so you actually see your options.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker serving
        Franklin Township and Somerset County. My job is to lay out your choices
        clearly and let you decide. No cost to you, ever.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Franklin Township residents benefit from an independent broker
        </h2>
        <p className="text-gray-700 mb-2">
          Franklin Township sits in Somerset County with access to RWJBarnabas
          Health facilities, Robert Wood Johnson University Hospital, and
          providers across central New Jersey. Your plan needs to match the
          doctors and hospitals you actually use.
        </p>
        <p className="text-gray-700">
          A captive agent sells one company. I compare plans from multiple
          carriers and show you exactly which ones cover your providers. That
          difference matters when a hospital system drops a carrier mid-year, as
          some NJ residents have learned the hard way with network disruptions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Carriers and plan types available in Somerset County
        </h2>
        <p className="text-gray-700 mb-3">
          Franklin Township residents can typically choose from:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>
            <strong>Medigap (Medicare Supplement)</strong> — Plans like G and N
            that cover gaps in Original Medicare. Rates vary by carrier.
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> — HMO and PPO plans
            that bundle hospital, medical, and often drug coverage. Some include
            dental and vision.
          </li>
          <li>
            <strong>Part D prescription drug plans</strong> — Standalone drug
            coverage paired with Original Medicare and a Supplement.
          </li>
        </ul>
        <p className="text-gray-700">
          Multiple carriers serve Somerset County. I'll show you which ones
          include your pharmacy and prescriptions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common Medicare mistakes Franklin residents make at 65
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Missing Medigap open enrollment.</strong> You get 6 months
            starting when you turn 65 and enroll in Part B to buy a Supplement
            with no health questions. Miss it and you may face underwriting or
            denial.
          </li>
          <li>
            <strong>Skipping Part B when still on employer coverage.</strong>{" "}
            This can work, but you need to time your enrollment carefully to
            avoid the 10% late penalty for each 12-month period you delay.
          </li>
          <li>
            <strong>Choosing Advantage plans based on $0 premiums alone.</strong>{" "}
            That $0 premium looks great until a hospital stay costs you
            thousands in copays. The Part A deductible alone is $1,676 per
            benefit period in 2026.
          </li>
          <li>
            <strong>Not checking provider networks yearly.</strong> Carrier
            contracts with hospitals change. A plan that covered your doctors
            this year might not next year.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a free side-by-side comparison looks like
        </h2>
        <p className="text-gray-700 mb-2">
          I pull your doctors, prescriptions, and pharmacy into a comparison
          that shows actual costs across plans. Not estimates. Not projections.
          Your real numbers.
        </p>
        <p className="text-gray-700">
          You'll see monthly premiums, expected out-of-pocket costs, and whether
          your specific medications are covered under each option. Takes about 15
          minutes by phone.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key 2026 Medicare costs Franklin residents should know
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>
            SNF coinsurance (days 21-100): $209.50/day with no Supplement
          </li>
          <li>
            Medicare Advantage/Part D open enrollment: October 15 through
            December 7
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to get started from Franklin Township
        </h2>
        <p className="text-gray-700 mb-2">
          Call me or request a quote online. I'll ask a few questions about your
          current coverage, medications, and doctors. Then I'll build your
          comparison and walk through it with you.
        </p>
        <p className="text-gray-700">
          No pressure. No sales pitch. If your current plan is the best fit,
          I'll tell you that too.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">Talk to a local Medicare broker today.</p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            get a free quote online
          </Link>
          .
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which One Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: A Real Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/find-an-nj-medicare-broker-near-you"
              className="text-blue-600 hover:underline"
            >
              Medicare Insurance Agents Across New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Periods: When You Can (and Can't) Change Plans
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Talk to Someone</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}