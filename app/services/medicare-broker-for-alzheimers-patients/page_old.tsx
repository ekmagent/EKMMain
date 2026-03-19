import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for Alzheimer's patients | Free Family Consultation | MedicareYourself",
  description:
    "Medicare broker for Alzheimer's patients and families. Anthony Orner coordinates coverage for medications, skilled nursing, and care ahead. Free consult.",
  openGraph: {
    title:
      "Medicare broker for Alzheimer's patients | Free Family Consultation | MedicareYourself",
    description:
      "Medicare broker for Alzheimer's patients and families. Anthony Orner coordinates coverage for medications, skilled nursing, and care ahead. Free consult.",
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
      name: "Medicare Broker for Alzheimer's Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-alzheimers-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Alzheimer's Patients — Coverage for the Journey Ahead",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. Our consultations, plan comparisons, and enrollment help are completely free to families.",
  },
  {
    question: "Does Medicare pay for any Alzheimer's care?",
    answer:
      "Yes. Medicare Part B covers cognitive assessments, care planning visits, and doctor appointments. Part A covers skilled nursing facility stays (up to 100 days per benefit period) and home health when medically necessary. Part D covers memory medications like donepezil and rivastigmine. What Medicare does not cover is long-term custodial care or memory care facilities.",
  },
  {
    question:
      "Can I change my parent's Medicare plan after an Alzheimer's diagnosis?",
    answer:
      "In most cases, you can make changes during the Annual Enrollment Period (October 15 - December 7). Certain qualifying events may also open a Special Enrollment Period. Call us and we'll review what options apply to your situation.",
  },
  {
    question: "Does Medicare cover respite care for Alzheimer's caregivers?",
    answer:
      "Medicare covers inpatient respite care under the hospice benefit, which provides up to five consecutive days of inpatient care so the primary caregiver can rest. Your loved one must be enrolled in Medicare hospice for this to apply.",
  },
];

export default function MedicareBrokerForAlzheimersPatients() {
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
          Medicare Broker for Alzheimer&#39;s Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Alzheimer&#39;s Patients — Coverage for the Journey
        Ahead
      </h1>

      <Image
        src="/images/medicare-broker-for-alzheimers-patients.webp"
        alt="Medicare broker for Alzheimer's patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for Alzheimer&#39;s patients can be the difference
        between a family scrambling for answers and a family with a plan. If
        you&#39;re reading this for someone you love, I want you to know: you
        don&#39;t have to figure out coverage alone.
      </p>
      <p className="text-lg mb-6">
        I&#39;m Anthony Orner, a licensed Medicare broker in New Jersey. I help
        families coordinate the parts of Medicare that matter most when
        Alzheimer&#39;s is part of the picture - medications, skilled care, and
        what comes next.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare actually covers for Alzheimer&#39;s care and what it
          doesn&#39;t
        </h2>
        <p className="mb-3">
          Medicare Part B covers cognitive assessment and care planning visits.
          Your loved one pays 20% of the Medicare-approved amount after the $283
          annual Part B deductible. Doctor visits, diagnostic testing, and
          outpatient treatment are covered under Part B as well.
        </p>
        <p className="mb-3">
          Part A covers skilled nursing facility care - $0 copay for days 1-20,
          then $209.50/day for days 21-100. Home health services are covered when
          ordered by a doctor as medically necessary.
        </p>
        <p>
          What Medicare does <strong>not</strong> cover: long-term custodial
          care, assisted living, or memory care facilities. This is the gap that
          catches families off guard. Understanding this early changes how you
          plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to coordinate supplement and Part D plans for memory medications
        </h2>
        <p className="mb-3">
          Alzheimer&#39;s medications like donepezil and rivastigmine are covered
          under Medicare Part D, but formularies vary by plan. The wrong Part D
          plan can mean hundreds more a month out of pocket. The right one keeps
          costs manageable.
        </p>
        <p>
          A Medicare Supplement (Medigap) plan like Plan G covers the 20% Part B
          coinsurance and the Part A deductible - costs that add up fast with
          regular specialist visits and cognitive assessments. I compare plans
          across carriers so the numbers actually work for your family.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Planning ahead: skilled nursing, home health, and respite coverage
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Skilled nursing:</strong> Medicare covers up to 100 days per
            benefit period after a qualifying hospital stay. A Medigap plan can
            cover the $209.50/day coinsurance for days 21-100.
          </li>
          <li>
            <strong>Home health:</strong> Covered when medically necessary and
            ordered by a physician. This includes skilled nursing and therapy -
            not 24/7 custodial help.
          </li>
          <li>
            <strong>Respite care:</strong> Available under the Medicare hospice
            benefit - up to five consecutive days of inpatient care so the
            primary caregiver can rest.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The coverage gap families don&#39;t see coming
        </h2>
        <p className="mb-3">
          Most families assume Medicare will cover a nursing home or memory care
          when the time comes. It won&#39;t - not for custodial care. That
          reality hits hard, especially for caregivers who&#39;ve been doing
          everything alone.
        </p>
        <p>
          I can&#39;t fix that gap entirely, but I can make sure every dollar
          Medicare <em>does</em> cover is working for you. And I can help you
          understand what options exist beyond Medicare - Medicaid eligibility,
          Veterans benefits if applicable, and how to plan before a crisis
          forces your hand.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters with Alzheimer&#39;s and Medicare decisions
        </h2>
        <p className="mb-3">
          Alzheimer&#39;s is progressive. The coverage decisions you make early -
          choosing the right Medigap plan, locking in a Part D plan that covers
          current and likely future medications - protect the family later when
          there&#39;s less capacity to make changes.
        </p>
        <p>
          If your loved one is newly diagnosed and still in the early stages,
          now is the time to get plans aligned. Don&#39;t wait until things get
          harder.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          A free consultation for families navigating the long goodbye
        </h2>
        <p className="mb-3">
          You&#39;re likely managing more than insurance right now. You&#39;re
          managing grief, logistics, family dynamics, and the weight of watching
          someone you love change. I won&#39;t add to that weight.
        </p>
        <p>
          Call me or have anyone in the family call. I&#39;ll review what&#39;s
          in place, identify gaps, and walk you through options. No cost, no
          pressure, no time limit on the conversation.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-semibold mb-2">
          Talk to a licensed Medicare broker who understands Alzheimer&#39;s
          care coverage.
        </p>
        <p className="text-2xl font-bold text-blue-700 mb-3">
          <a href="tel:8555591700">855-559-1700</a>
        </p>
        <Link
          href="/get-a-free-quote"
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
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G - What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/skilled-nursing-facility-coverage"
              className="text-blue-600 hover:underline"
            >
              Skilled Nursing Facility Coverage Under Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-home-health-care"
              className="text-blue-600 hover:underline"
            >
              Medicare Home Health Care Benefits
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}