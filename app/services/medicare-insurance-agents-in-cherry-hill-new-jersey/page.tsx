import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in cherry hill new jersey | Free Broker Help | MedicareYourself",
  description:
    "Compare Medicare plans in Cherry Hill, NJ with licensed broker Anthony Orner. Free side-by-side Medigap and Advantage reviews. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-cherry-hill-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in cherry hill new jersey | Free Broker Help | MedicareYourself",
    description:
      "Medicare insurance agents in Cherry Hill New Jersey — Anthony Orner compares Supplement and Advantage plans across top carriers. Free, no-obligation consultation.",
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
      name: "Medicare Insurance Agents in Cherry Hill, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-cherry-hill-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker Support",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. An independent Medicare broker compares plans from multiple carriers at no cost to you. Brokers are compensated by the insurance companies, so the plans cost the same whether you enroll directly or through a broker. The difference is you get someone who can explain your options side by side.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, and budget. In Camden County, both Medigap Supplement plans and Medicare Advantage plans are widely available. A broker can compare your specific situation across carriers to find the strongest fit.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker, not a captive agent tied to one carrier. Make sure they're licensed in New Jersey, willing to show you plans from multiple companies, and available after enrollment for claims questions or plan changes.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker in Cherry Hill?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers. You pay the same premium whether you enroll on your own or through a broker. There's no fee, no obligation, and no markup.",
  },
];

export default function MedicareInsuranceAgentsCherryHillNJ() {
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
          Medicare Insurance Agents in Cherry Hill, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker
        Support
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-cherry-hill-new-jersey.webp"
        alt="Medicare insurance agents in Cherry Hill New Jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Cherry Hill, New Jersey work in one of two
        ways: captive agents sell plans for one company, while independent
        brokers compare plans across many. That distinction shapes every
        recommendation you receive.
      </p>
      <p className="text-lg mb-6">
        I&apos;m Anthony Orner, a licensed independent Medicare broker serving
        Cherry Hill and Camden County. I help people approaching 65 sort through
        their options without the pressure of a sales quota.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How a Cherry Hill Medicare broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent represents one carrier. They can only show you what
          that company sells. If another carrier has a lower rate or better
          network for your doctors, you&apos;ll never hear about it.
        </p>
        <p>
          An independent broker like me is contracted with multiple carriers. I
          pull quotes from each and lay them next to each other so you can see
          real differences in premiums, copays, and provider access.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Camden County
        </h2>
        <p className="mb-2">
          Camden County residents have strong access to both plan types:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medigap Supplement plans</strong> (like Plan G or Plan N)
            pair with Original Medicare. You pick any doctor who accepts
            Medicare. Rates vary by carrier, age, and tobacco use.
          </li>
          <li>
            <strong>Medicare Advantage plans</strong> often include Part D drug
            coverage, dental, and vision. Most use local networks tied to health
            systems in the Cherry Hill and Philadelphia corridor.
          </li>
        </ul>
        <p>
          The right choice depends on your medications, how often you see
          specialists, and whether you want predictable costs or network-based
          savings.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          When to contact a broker before your 65th birthday
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. It lasts six months. During this window,
          carriers must accept you regardless of health history. After it closes,
          medical underwriting applies.
        </p>
        <p>
          Start the conversation at least six months before your Part B
          effective date. That gives us time to compare rates, review your
          prescriptions, and confirm your doctors are in network if you&apos;re
          considering Advantage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What happens when a carrier drops your provider
        </h2>
        <p className="mb-2">
          Network disruptions are real in South Jersey. When a health system
          stops accepting a particular insurer, patients scramble. If you&apos;re
          on Medicare Advantage and your provider leaves the network, you may
          qualify for a Special Enrollment Period to switch plans.
        </p>
        <p>
          A broker can help you move quickly when that happens. I monitor
          carrier-network changes in Camden County so my clients aren&apos;t
          caught off guard.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs you should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>
            Skilled nursing facility coinsurance (days 21-100): $209.50/day
          </li>
          <li>
            Part B late enrollment penalty: 10% for each 12-month period you
            delayed
          </li>
        </ul>
        <p className="mt-2">
          These costs are why most people pair Original Medicare with a
          Supplement or choose a Medicare Advantage plan that caps
          out-of-pocket spending.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan comparison from Anthony Orner
        </h2>
        <p className="mb-2">
          I live and work in New Jersey. My consultations are free, and I
          don&apos;t push one carrier over another. You pay the same premium
          whether you call a carrier directly or go through me.
        </p>
        <p>
          Call me and we&apos;ll walk through your medications, doctors, and
          budget together. No paperwork upfront, no obligation.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">Talk to a Local Medicare Broker</p>
        <p className="text-lg mb-4">
          Free plan comparison for Cherry Hill and all of Camden County.
        </p>
        <a
          href="tel:8555591700"
          className="text-3xl font-bold underline block mb-4"
        >
          855-559-1700
        </a>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold rounded-lg px-6 py-3 hover:bg-blue-50 transition"
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Late Enrollment Penalty
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
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Getting Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}