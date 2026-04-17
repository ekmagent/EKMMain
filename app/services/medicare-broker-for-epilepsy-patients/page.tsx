import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for epilepsy patients | Free Coverage Consultation | MedicareYourself",
  description:
    "Medicare broker for epilepsy patients in NJ. Anthony Orner compares plans covering seizure meds, neurology, and ER visits. Call 855-559-1700 for a free review.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-epilepsy-patients" },
  openGraph: {
    title:
      "Medicare broker for epilepsy patients | Free Coverage Consultation | MedicareYourself",
    description:
      "Medicare broker for epilepsy patients in NJ. Anthony Orner finds plans covering seizure meds, ER visits, and neurology with no surprise gaps. Free quote.",
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
      name: "Medicare Broker for Epilepsy Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-epilepsy-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Epilepsy Patients Managing More Than Most People Could Imagine",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-epilepsy-patients",
};

const faqs = [
  {
    question: "Can you get Medicare if you have epilepsy?",
    answer:
      "Yes. If you're 65 or older, you qualify for Medicare regardless of your epilepsy diagnosis. If you're under 65, you may qualify through Social Security Disability Insurance (SSDI) after a 24-month waiting period. Epilepsy does not disqualify you from Original Medicare, Medicare Advantage, or Part D prescription drug plans.",
  },
  {
    question:
      "Does Medicare cover seizure medications like Keppra or Vimpat?",
    answer:
      "Medicare Part D covers most anti-seizure medications, but every plan has its own formulary. Brand-name drugs like Vimpat can land in higher cost tiers with significant copays. A broker can compare Part D formularies side by side so you're not blindsided at the pharmacy counter.",
  },
  {
    question: "What is the rule of 3 for seizures?",
    answer:
      "The rule of 3 is a clinical guideline suggesting that if a person remains seizure-free for three times the length of their longest previous seizure-free interval, they may have a lower risk of recurrence. It's used by neurologists to help assess prognosis, but it doesn't affect your Medicare eligibility or plan options.",
  },
  {
    question:
      "Will my epilepsy diagnosis affect Medicare Supplement underwriting?",
    answer:
      "Outside of your Medigap Open Enrollment Period, carriers can use medical underwriting to set premiums or deny coverage based on pre-existing conditions like epilepsy. That's why timing matters. During your 6-month Medigap OEP (starting the month you turn 65 and enroll in Part B), no carrier can deny you or charge more because of epilepsy.",
  },
,
  {
    question: "Does Medicare cover EEGs and neurology visits for epilepsy?",
    answer:
      "Medicare Part B covers medically necessary outpatient services, including neurologist visits and diagnostic tests like EEGs, when ordered by a doctor. After meeting the 2026 Part B deductible of $257, you typically pay 20% of the Medicare-approved amount. A Medigap plan or Medicare Advantage plan can help reduce that cost share.",
  },
  {
    question: "Are emergency room visits for seizures covered by Medicare?",
    answer:
      "Yes. Emergency room care for a seizure is covered under Medicare Part B for outpatient ER visits and Part A if you're formally admitted as an inpatient. In 2026, the Part A inpatient deductible is ];

export default,676 per benefit period. Medicare Advantage and Medigap plans can help limit your out-of-pocket exposure for repeat ER visits.",
  },
  {
    question: "Should someone with epilepsy choose Medigap or Medicare Advantage?",
    answer:
      "It depends on your providers, medications, and budget. Medigap plans offer broader provider access and predictable cost sharing, which many epilepsy patients prefer when they see specialists regularly. Medicare Advantage plans may have lower premiums but use networks and prior authorization, so it's important to confirm your neurologist and seizure medications are covered before enrolling.",
  }
];

export default function MedicareBrokerForEpilepsyPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Epilepsy Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Medicare Broker for Epilepsy Patients Managing More Than Most People
        Could Imagine
      </h1>

      <Image
        src="/images/medicare-broker-for-epilepsy-patients.webp"
        alt="Medicare broker for epilepsy patients"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for epilepsy patients does something most online plan
        finders can't: account for the unpredictable. Seizure meds that cost
        $400 a month, ambulance rides you didn't choose, neurologist visits
        that aren't optional. I'm Anthony Orner, a licensed broker in New
        Jersey, and I match epilepsy patients with plans that actually cover
        how they live.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Seizure medications, ER visits, and the coverage gaps nobody warns
          you about
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Part D covers anti-seizure drugs, but formulary placement
          varies wildly between plans. Keppra (levetiracetam) may sit on a
          generic tier in one plan and a preferred tier with a higher copay in
          another. Vimpat and Briviact often land in specialty tiers where
          you're paying 25-33% coinsurance.
        </p>
        <p className="text-gray-700">
          ER visits under Original Medicare mean the $1,676 Part A deductible
          per benefit period, plus 20% of Part B charges after your $283
          annual deductible. For someone who's had three ER visits in a year,
          those numbers add up fast.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How epilepsy affects your Medicare Supplement underwriting options
        </h2>
        <p className="text-gray-700 mb-2">
          Timing is everything. During your 6-month Medigap Open Enrollment
          Period (starts the month you turn 65 and have Part B), every
          Supplement carrier must accept you at standard rates. Epilepsy
          diagnosis, seizure frequency, medication list: none of it can be
          held against you.
        </p>
        <p className="text-gray-700">
          Miss that window, and carriers can underwrite. An active epilepsy
          diagnosis with recent seizure history can lead to higher premiums or
          outright denial. If you're approaching 65, apply for Medigap up to
          6 months before your Part B start date to lock in your rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Neurologist access and ambulance coverage: what to look for
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Original Medicare + Medigap:</strong> See any neurologist
            who accepts Medicare assignment. No referrals. No network
            restrictions.
          </li>
          <li>
            <strong>Medicare Advantage (HMO):</strong> You'll need in-network
            neurologists and may need a referral from your primary care
            doctor.
          </li>
          <li>
            <strong>Ambulance coverage:</strong> Medicare covers ambulance
            transport when medically necessary. You pay 20% of the
            Medicare-approved amount under Part B. A Medigap plan like Plan G
            covers that 20%.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          The daily costs insurance content never talks about
        </h2>
        <p className="text-gray-700 mb-2">
          Epilepsy costs more than copays. Driving restrictions mean cab fare,
          Uber, or relying on someone else's schedule. Missed work. Medication
          side effects that cloud your thinking and limit what jobs you can
          hold. Your plan should at least cover the medical side without
          surprises so you're not fighting the insurance company on top of
          everything else.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Part D formulary checks matter more than you think
        </h2>
        <p className="text-gray-700 mb-2">
          Switching seizure medications isn't like switching blood pressure
          pills. A formulary change mid-year that drops your anti-epileptic or
          moves it to a higher tier can be medically dangerous, not just
          expensive. I check every Part D formulary against your current
          prescriptions before recommending anything.
        </p>
        <p className="text-gray-700">
          If your plan makes a mid-year formulary change, you may have a
          Special Enrollment Period to switch. That's the kind of detail a
          broker catches.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Find a plan built around unpredictable needs
        </h2>
        <p className="text-gray-700">
          You don't need a plan that works fine when things are stable. You
          need one that holds up on the worst days. I'll walk through your
          medications, your specialists, and your real-world costs. The call
          is free, there's no obligation, and I don't charge you a dime.
          Carriers pay me, so you get the help without the bill.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
        <p className="text-2xl font-bold mb-2">
          Talk to a broker who understands epilepsy coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-semibold text-white"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="underline font-semibold text-white"
          >
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Part D Prescription Drug Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/best-medicare-plan-for-chronic-conditions"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part D prescription drug coverage</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Parts of Medicare overview</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        Written by Anthony Orner, Licensed Medicare Broker | EasyKind
        Medicare
      </p>
    </main>
  );
}