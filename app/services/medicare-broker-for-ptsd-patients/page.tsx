import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for PTSD patients | Free Mental Health Plan Review | MedicareYourself",
  description:
    "Medicare broker for PTSD patients — find NJ plans covering trauma therapy, prescriptions, and telehealth. Anthony Orner compares your options for free.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-ptsd-patients" },
  openGraph: {
    title:
      "Medicare broker for PTSD patients | Free Mental Health Plan Review | MedicareYourself",
    description:
      "Medicare broker for PTSD patients — find NJ plans covering trauma therapy, prescriptions, and telehealth. Anthony Orner compares your options for free.",
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
      name: "Medicare Broker for PTSD Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-ptsd-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for PTSD Patients — Find Plans Covering Trauma-Focused Therapy and Medications",
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
    question: "Can I get Medicare if I have PTSD?",
    answer:
      "Yes. PTSD qualifies you for SSDI if it prevents you from working, and after 24 months on SSDI you automatically receive Medicare. If you're already 65 or older, you enroll in Medicare like anyone else. PTSD itself doesn't affect your eligibility.",
  },
  {
    question: "Do you pay a Medicare broker?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There's no fee for plan comparisons, consultations, or enrollment help. The plans cost the same whether you use a broker or go direct.",
  },
  {
    question: "Does Medicare pay for PTSD counseling?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual therapy, group therapy, and psychiatric evaluations. You pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible. Trauma-focused approaches like CBT are covered when provided by Medicare-accepting clinicians.",
  },
  {
    question: "Does Medicare cover EMDR therapy?",
    answer:
      "Medicare Part B covers EMDR (Eye Movement Desensitization and Reprocessing) when billed by a licensed psychiatrist, clinical psychologist, clinical social worker, or other qualifying mental health provider who accepts Medicare assignment. Coverage falls under outpatient mental health services.",
  },
,
  {
    question: "Does Medicare cover inpatient psychiatric care for PTSD?",
    answer:
      "Yes. Medicare Part A covers inpatient mental health care in either a general or psychiatric hospital. In 2026 you pay the ,
  {
    question: "Does Medicare cover prescription medications for PTSD?",
    answer:
      "Yes. Medicare Part D prescription drug plans cover SSRIs, SNRIs, prazosin, and other medications commonly prescribed for PTSD. Formularies vary by plan, so comparing your specific medications across Part D options is important. A licensed broker can match your prescriptions to the lowest-cost plan in your area.",
  },
  {
    question: "Can I see a therapist by telehealth under Medicare?",
    answer:
      "Yes. Medicare Part B covers mental health services delivered by telehealth, including therapy and psychiatric visits from your home. This makes care more accessible for PTSD patients who find in-person visits difficult. Standard Part B cost-sharing applies after the $257 annual deductible.",
  }
];

export default,676 Part A deductible per benefit period. Medicare limits coverage in a freestanding psychiatric hospital to 190 days in a lifetime.",
  }
];

export default function MedicareBrokerForPTSDPatients() {
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
        <span className="text-gray-700">Medicare Broker for PTSD Patients</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for PTSD Patients — Find Plans Covering Trauma-Focused
        Therapy and Medications
      </h1>

      <Image
        src="/images/medicare-broker-for-ptsd-patients.webp"
        alt="Medicare broker for PTSD patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare broker for PTSD patients isn't a phrase you'll see on most
        insurance websites, but it's exactly what people are searching for when
        they're exhausted from fighting their own coverage. Living with PTSD
        means managing therapy schedules, medication refills, and the constant
        weight of knowing one gap in coverage could derail months of progress.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I'll
        compare your plan options for free so you can focus on getting better,
        not battling paperwork.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare covers for PTSD: CBT, EMDR, and medication
        </h2>
        <p className="mb-2">
          Medicare Part B covers outpatient mental health services, including the
          evidence-based therapies most used for PTSD. That means cognitive
          behavioral therapy (CBT), EMDR, and individual or group counseling
          sessions with a qualifying provider.
        </p>
        <p className="mb-2">
          Qualifying providers include psychiatrists, clinical psychologists,
          licensed clinical social workers, nurse practitioners, and physician
          assistants. After your $283 annual Part B deductible, you pay 20% of
          the Medicare-approved amount per session.
        </p>
        <p>
          The real challenge? Finding a trauma-focused therapist who actually
          accepts Medicare. I help you check provider networks before you enroll,
          not after.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          VA benefits vs. Medicare: when you need both
        </h2>
        <p className="mb-2">
          PTSD isn't only a veteran's condition, but many people I work with are
          vets. If you have VA healthcare, you can still enroll in Medicare. Some
          people use both: the VA for PTSD-specific programs and Medicare for
          broader access to local providers.
        </p>
        <p>
          Having Medicare as a backup means you're not locked into VA wait times
          or facility locations. If you're on SSDI for PTSD and not a veteran,
          Medicare is likely your primary coverage. Either way, I'll map out how
          the pieces fit together for your situation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D coverage for prazosin, sertraline, and other PTSD prescriptions
        </h2>
        <p className="mb-2">
          Part D formularies vary by plan. Common PTSD medications like
          sertraline (Zoloft), paroxetine (Paxil), and prazosin are on many
          formularies, but copays and tier placement differ significantly.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>Generic SSRIs like sertraline are typically Tier 1 or Tier 2</li>
          <li>Prazosin (used for PTSD nightmares) is usually generic and affordable</li>
          <li>Brand-name medications may cost much more depending on your plan</li>
        </ul>
        <p>
          I run your exact medication list through every available Part D plan so
          you see actual out-of-pocket costs before you commit.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Telehealth access for trauma therapy
        </h2>
        <p className="mb-2">
          For many people with PTSD, leaving the house for a therapy appointment
          is its own battle. Medicare covers telehealth mental health visits,
          which means you can do CBT or talk therapy from home.
        </p>
        <p>
          Some Medicare Advantage plans include expanded telehealth benefits with
          lower copays. If remote access matters to you, that's a factor I weigh
          when comparing plans.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why the right plan matters more than you think
        </h2>
        <p className="mb-2">
          People living with PTSD often deal with this alone. Scrolling through
          plan options on a government website while your brain is already
          overwhelmed isn't realistic. One wrong choice and your therapist is
          out-of-network, or your medication costs triple in January.
        </p>
        <p>
          I've seen people stuck on plans that technically "cover mental health"
          but have almost no trauma-focused providers in network. That's the gap
          a broker closes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan match for your PTSD treatment needs
        </h2>
        <p className="mb-2">
          Tell me your current medications, your therapist's name (if you have
          one), and whether telehealth matters to you. I'll pull every plan
          available in your area and show you which ones actually cover what you
          need.
        </p>
        <p>
          No cost. No pressure. Just answers from someone who understands that
          stable coverage is part of your treatment.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 underline hover:text-blue-900"
          >
            855-559-1700
          </a>{" "}
          for a free PTSD plan review
        </p>
        <p className="text-gray-600 mb-4">
          Anthony Orner, Licensed Medicare Broker — NJ and beyond
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-for-anxiety-disorder-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Mental Health Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medicare-plan-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Veterans
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Drug Coverage Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-ptsd-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Plans with Telehealth Benefits
            </Link>
          </li>
                    <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/mental-health-care-outpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Outpatient Mental Health Coverage</a> and <a href="https://www.medicare.gov/coverage/mental-health-care-inpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Inpatient Mental Health Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}