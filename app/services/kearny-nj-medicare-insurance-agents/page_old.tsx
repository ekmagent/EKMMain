import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "kearny nj medicare insurance agents | Free Consultation | MedicareYourself",
  description:
    "Kearny NJ Medicare insurance agents — Anthony Orner is an independent licensed broker comparing Supplement and Advantage plans in Hudson County. Free consult.",
  openGraph: {
    title:
      "kearny nj medicare insurance agents | Free Consultation | MedicareYourself",
    description:
      "Kearny NJ Medicare insurance agents — Anthony Orner is an independent licensed broker comparing Supplement and Advantage plans in Hudson County. Free consult.",
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
      name: "Kearny NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/kearny-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Kearny NJ Medicare Insurance Agents: Licensed Broker Serving Hudson County",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "Do I pay anything for a Medicare broker's help in Kearny?",
    answer:
      "No. Licensed Medicare brokers are compensated by the insurance carriers, not by you. My consultations, plan comparisons, and enrollment help are completely free.",
  },
  {
    question:
      "What's the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company. An independent broker like me is contracted with multiple carriers, so I can compare plans side by side and recommend the one that actually fits your situation - not just the one I'm required to sell.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out about 6 months before your 65th birthday or your Part B start date. For Medigap plans, applying early can lock in a lower rate before your coverage even begins.",
  },
  {
    question: "Which hospitals accept Medicare plans in the Kearny area?",
    answer:
      "Most Medicare Supplement plans are accepted anywhere Original Medicare is accepted, which includes CarePoint Health - Christ Hospital in Jersey City and Hackensack Meridian Health facilities across Hudson County. Medicare Advantage network coverage varies by plan - I'll verify your doctors and hospitals before you enroll.",
  },
];

export default function KearnyNJMedicareInsuranceAgents() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Kearny NJ Medicare Insurance Agents
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Kearny NJ Medicare Insurance Agents: Licensed Broker Serving Hudson
          County
        </h1>

        <Image
          src="/images/kearny-nj-medicare-insurance-agents.webp"
          alt="Kearny NJ Medicare insurance agents"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Kearny NJ Medicare insurance agents aren't all the same - some work
          for one carrier, while others compare plans across the market. I'm
          Anthony Orner, an independent licensed broker who helps Kearny
          residents find the right Medicare coverage without the sales pressure.
        </p>
        <p className="text-lg mb-6">
          Every consultation is free. You get honest answers, real plan
          comparisons, and someone who picks up the phone after you enroll.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Kearny residents work with an independent broker
          </h2>
          <p className="mb-3">
            Most insurance agencies in Kearny focus on auto, home, and
            commercial lines. Medicare is a specialty - it requires separate
            licensing, product knowledge, and annual certification with each
            carrier.
          </p>
          <p>
            As an independent broker, I'm contracted with multiple Medicare
            carriers in New Jersey. That means I can show you plans from
            different companies and let you pick what fits - not steer you toward
            one option because it's all I carry.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement and Advantage options in 07032
          </h2>
          <p className="mb-3">
            Kearny's 07032 zip code falls within Hudson County, which has strong
            Medicare Advantage and Supplement availability. Your main choices:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> Works with Original
              Medicare. Accepted at any doctor or hospital that takes Medicare -
              including Hackensack Meridian Health and CarePoint Health
              facilities nearby. You choose Plan G, Plan N, or another
              standardized plan.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Replaces Original Medicare
              with a private plan. Often includes dental, vision, and Part D drug
              coverage. Networks matter here - I'll check that your doctors and
              hospitals are in-network before you commit.
            </li>
          </ul>
          <p>
            Rates for the same plan letter vary by carrier. That's exactly why
            comparing matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How I help Kearny seniors save on premiums
          </h2>
          <p className="mb-3">
            I start by understanding what you actually need: your doctors, your
            prescriptions, how often you travel, and what you can budget monthly.
            Then I pull real quotes from multiple carriers and lay them out side
            by side.
          </p>
          <p>
            For those new to Medicare, my practice is to submit Medigap
            applications up to 6 months before your Part B start date. This
            locks in your rate early - protecting you from premium increases
            before coverage begins. The sooner you lock in, the better your
            rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Healthcare access near Kearny
          </h2>
          <p className="mb-3">
            Living in Hudson County puts you close to major hospital systems.
            CarePoint Health operates Christ Hospital in Jersey City, just
            minutes from Kearny. Hackensack Meridian Health has facilities
            throughout the region. And if you need specialized care, Newark and
            New York City hospitals are a short drive or train ride away.
          </p>
          <p>
            Your plan choice affects which of these providers you can use
            affordably. I'll make sure your plan aligns with where you actually
            get care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment dates to know
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Turning 65:</strong> Your Medigap Open Enrollment Period
              lasts 6 months starting the month you turn 65 and are enrolled in
              Part B. During this window, no health questions and no higher
              premiums.
            </li>
            <li>
              <strong>Medicare Advantage / Part D:</strong> Annual Open
              Enrollment runs October 15 through December 7.
            </li>
            <li>
              <strong>Part B premium (2026):</strong> $202.90/month. Part B
              deductible is $283/year.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free Medicare review in Kearny
          </h2>
          <p className="mb-3">
            Whether you're turning 65, retiring, or just wondering if your
            current plan still makes sense - call me. I'll compare your options,
            explain the tradeoffs in plain English, and let you decide without
            pressure.
          </p>
          <p>
            I work with residents across Kearny, Harrison, North Arlington,
            Lyndhurst, and the rest of Hudson County. Phone, video, or in-person
            - whatever's easiest for you.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            . No cost, no obligation.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-hudson-county"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in Hudson County
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs Plan N: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}