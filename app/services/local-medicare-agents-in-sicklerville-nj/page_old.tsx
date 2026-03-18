import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in sicklerville nj | Free Broker Help | MedicareYourself",
  description:
    "Local Medicare agents in Sicklerville, NJ — Anthony Orner is a licensed broker comparing Medigap and Advantage plans in Camden County. Free consultation.",
  openGraph: {
    title:
      "local medicare agents in sicklerville nj | Free Broker Help | MedicareYourself",
    description:
      "Local Medicare agents in Sicklerville, NJ — Anthony Orner is a licensed broker comparing Medigap and Advantage plans in Camden County. Free consultation.",
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
      name: "Local Medicare Agents in Sicklerville NJ",
      item: "https://www.medicareyourself.com/services/local-medicare-agents-in-sicklerville-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Sicklerville, NJ — Licensed Broker for Camden County",
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
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const faqs = [
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for an independent, licensed broker who works with multiple carriers rather than one insurance company. Ask whether they charge a fee (they shouldn't - brokers are paid by the carriers, not by you). A good agent should review your doctors, prescriptions, and budget before recommending a plan.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. TTY users can call 1-877-486-2048. However, Medicare's representatives can only explain benefits and eligibility. For personalized plan comparisons and enrollment help, a licensed broker can provide one-on-one guidance at no cost to you.",
  },
  {
    question:
      "Is there a cost to work with a local Medicare agent in Sicklerville?",
    answer:
      "No. Licensed Medicare brokers are compensated by the insurance carriers, not by you. There is no fee for consultations, plan comparisons, or enrollment assistance. Your premium stays the same whether you enroll directly or through a broker.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out at least 6 months before your 65th birthday. If you're considering a Medigap plan, Anthony's practice is to have clients apply up to 6 months before their Part B start date, which can lock in a better rate early. Waiting too long can mean higher premiums or limited plan options.",
  },
];

export default function LocalMedicareAgentsSicklerville() {
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
          Local Medicare Agents in Sicklerville NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Local Medicare Agents in Sicklerville, NJ — Licensed Broker for Camden
        County
      </h1>

      <Image
        src="/images/local-medicare-agents-in-sicklerville-nj.webp"
        alt="local medicare agents in sicklerville nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Local Medicare agents in Sicklerville, NJ can make the difference
        between overpaying for coverage and finding a plan that fits your actual
        health needs. I'm Anthony Orner, a licensed independent broker serving
        Camden County residents.
      </p>
      <p className="text-lg mb-6">
        My consultations are always free, and I compare plans from multiple
        carriers so you don't have to.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Sicklerville residents benefit from an independent broker
        </h2>
        <p className="mb-2">
          A captive agent sells plans from one company. An independent broker
          like me works with multiple carriers. That means I can lay out your
          real options side by side.
        </p>
        <p>
          Sicklerville sits in Camden County, where over a dozen Medicare
          Advantage and Medigap plans compete for your business. Without someone
          comparing them, you're guessing. I handle the comparison so you pick
          with confidence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Medicare Advantage plans in Camden County
        </h2>
        <p className="mb-2">
          These are two different paths. Medicare Advantage (Part C) bundles
          hospital, medical, and often drug coverage into one plan with network
          restrictions. Medigap supplements Original Medicare and gives you
          freedom to see any doctor who accepts Medicare nationwide.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Medigap Plan G is the most popular supplement - it covers everything
            except the annual Part B deductible ($257 in 2026)
          </li>
          <li>
            Medigap Plan N offers lower premiums with small copays at office
            visits
          </li>
          <li>
            Medicare Advantage plans may include dental, vision, and hearing at
            $0 premium
          </li>
          <li>
            Prescription drug coverage requires Part D (with Medigap) or is
            built into most Advantage plans
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Sicklerville: your open enrollment timeline
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and are enrolled in Part B. During this window, insurance
          companies cannot deny you coverage or charge more due to health
          conditions.
        </p>
        <p className="mb-2">
          My practice is to have clients apply for their Medigap plan up to 6
          months before their Part B start date. This locks in the rate early and
          protects you from premium increases before coverage begins. The sooner
          you lock in, the better your rate.
        </p>
        <p>Miss this window and you could face medical underwriting or higher premiums.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free consultation
        </h2>
        <p className="mb-2">
          I'll ask about your doctors, prescriptions, and how often you travel.
          Then I pull real quotes from multiple carriers and walk you through
          each option. The whole process usually takes about 30 minutes.
        </p>
        <p>
          There is no fee, no obligation, and no pressure. Brokers are paid by
          the insurance carriers, not by you. Your premium stays the same
          whether you enroll directly or through me.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key Medicare costs to know for 2026
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>
            Skilled nursing facility coinsurance: $209.50/day for days 21-100
          </li>
          <li>
            Part B late enrollment penalty: 10% for each 12-month period you
            delayed
          </li>
        </ul>
        <p className="mt-2">
          A Medigap plan or Medicare Advantage plan can shield you from most of
          these out-of-pocket costs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free Medicare plan comparison today
        </h2>
        <p className="mb-2">
          Whether you're turning 65 next month or reviewing your current
          coverage during the Annual Enrollment Period (October 15 - December
          7), I can help you compare plans specific to Sicklerville and Camden
          County.
        </p>
        <p>
          Call me directly or request a quote online. I'll respond within one
          business day.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a Licensed Medicare Broker Today
        </p>
        <p className="text-lg mb-3">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100"
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
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-n-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan N in NJ - Lower Premiums with Copays
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/turning-65-medicare-checklist"
              className="text-blue-600 hover:underline"
            >
              Turning 65? Your Complete Medicare Enrollment Checklist
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}