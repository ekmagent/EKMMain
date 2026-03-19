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
    "Medicare broker for Alzheimer's patients and families. Anthony Orner coordinates coverage for medications, skilled nursing, and what's ahead. Free consult.",
  openGraph: {
    title:
      "Medicare broker for Alzheimer's patients | Free Family Consultation | MedicareYourself",
    description:
      "Medicare broker for Alzheimer's patients and families. Anthony Orner coordinates coverage for medications, skilled nursing, and what's ahead. Free consult.",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-alzheimers-patients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. Our consultations and plan recommendations are completely free to families, no matter how many times we meet or how complex the situation gets.",
  },
  {
    question: "Does Medicare pay for any Alzheimer's care?",
    answer:
      "Yes. Original Medicare covers doctor visits, diagnostic testing, certain home health services, and up to 100 days of skilled nursing facility care per benefit period. Part D covers approved Alzheimer's medications. What Medicare does not cover is long-term custodial care like memory care facilities or around-the-clock personal assistance.",
  },
  {
    question:
      "Should my parent stay on Medicare Advantage or switch to Original Medicare?",
    answer:
      "It depends on their stage and care needs. Medicare Advantage plans can restrict provider networks and require referrals, which becomes harder as the disease progresses and a patient can't easily travel to appointments. Original Medicare with a Supplement often gives families more flexibility. Call us and we'll review the specifics together.",
  },
  {
    question: "Does Medicare cover respite care for Alzheimer's caregivers?",
    answer:
      "Medicare covers inpatient respite care under the hospice benefit, up to five consecutive days at a time, when the patient qualifies for hospice. Outside of hospice, some Medicare Advantage plans include limited respite hours as a supplemental benefit. We can help you find out what's available.",
  },
];

export default function MedicareBrokerForAlzheimersPatients() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Alzheimer&#39;s Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Medicare Broker for Alzheimer&#39;s Patients — Coverage for the Journey
          Ahead
        </h1>

        <Image
          src="/images/hub_medicare-broker-for-alzheimers-patients.webp"
          alt="Medicare broker for Alzheimer's patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for Alzheimer&#39;s patients can help your family make
          sense of coverage that changes as the disease progresses. If you&#39;re
          the one searching this, you&#39;re probably making decisions for someone
          who can&#39;t make them anymore.
        </p>
        <p className="text-lg mb-6">
          I&#39;m Anthony Orner, a licensed Medicare broker. I help families
          coordinate the right plans for medications, skilled care, and the
          hard decisions still ahead. The call is free.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Medicare actually covers for Alzheimer&#39;s care and what it
            doesn&#39;t
          </h2>
          <p className="mb-2">
            Original Medicare (Parts A and B) covers doctor visits, cognitive
            assessments, diagnostic imaging, and lab work related to
            Alzheimer&#39;s. Part B also covers an annual wellness visit that
            includes cognitive screening.
          </p>
          <p className="mb-2">
            What catches most families off guard: Medicare does not cover
            long-term custodial care. That means memory care facilities,
            24/7 personal aides, and adult daycare are not covered. This is
            the gap that blindsides people.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to coordinate Supplement and Part D plans for memory
            medications
          </h2>
          <p className="mb-2">
            Common Alzheimer&#39;s medications like donepezil and rivastigmine are
            typically covered under Part D. But formularies vary by carrier.
            Some plans put these drugs on preferred tiers with low copays.
            Others don&#39;t.
          </p>
          <p>
            A Medigap plan (Medicare Supplement) helps cover the costs
            Original Medicare leaves behind, like the $1,676 Part A
            deductible per benefit period and the $283 Part B annual
            deductible in 2026. I match families with plans that keep
            out-of-pocket costs predictable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Planning ahead: skilled nursing, home health, and respite
            coverage
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Skilled nursing:</strong> Medicare covers days 1-20 at
              $0 after a qualifying hospital stay. Days 21-100 cost
              $209.50/day in 2026 unless a Supplement covers it.
            </li>
            <li>
              <strong>Home health:</strong> Covered when a doctor orders
              skilled care and the patient is homebound. This can include
              nursing, physical therapy, and some aide services.
            </li>
            <li>
              <strong>Respite care:</strong> Available under the Medicare
              hospice benefit for up to five consecutive days when a
              caregiver needs a break.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage vs. Original Medicare as the disease
            progresses
          </h2>
          <p className="mb-2">
            Many families start on a Medicare Advantage plan and it works
            fine early on. But as Alzheimer&#39;s advances, network restrictions
            and prior authorization requirements can become a real problem.
            Getting someone with severe confusion to an in-network provider
            across town isn&#39;t always possible.
          </p>
          <p>
            Original Medicare with a Supplement gives you access to any
            doctor who accepts Medicare, anywhere in the country. For
            families managing later-stage care, that flexibility matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to call a broker (and why sooner is better)
          </h2>
          <p className="mb-2">
            The best time to set up coverage is before a crisis. Medigap
            plans have medical underwriting outside of your initial open
            enrollment period, so locking in a plan while health allows it
            protects you from being denied later.
          </p>
          <p>
            If your loved one already has coverage that isn&#39;t working, we
            can review options during Medicare Advantage Open Enrollment
            (October 15 through December 7) or check for guaranteed issue
            rights that may apply.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            A free consultation for families navigating the long goodbye
          </h2>
          <p className="mb-2">
            You&#39;re grieving someone who&#39;s still here. I won&#39;t pretend to know
            exactly what that feels like. But I can take the Medicare piece
            off your plate so you can focus on the person, not the
            paperwork.
          </p>
          <p>
            Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-600 font-semibold hover:underline"
            >
              855-559-1700
            </a>
            . No cost, no obligation. I&#39;ll help you understand what&#39;s
            covered, what isn&#39;t, and what we can do about it.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Free Medicare Consultation for Alzheimer&#39;s Families
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            or get started online.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare/medigap-plans"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans Explained: What They Cover and What They Cost
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/part-d-drug-coverage"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D: How Prescription Drug Coverage Works
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/skilled-nursing-facility-coverage"
                className="text-blue-600 hover:underline"
              >
                Skilled Nursing Facility Coverage Under Medicare
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-advantage-vs-original-medicare"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Original Medicare: How to Choose
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}