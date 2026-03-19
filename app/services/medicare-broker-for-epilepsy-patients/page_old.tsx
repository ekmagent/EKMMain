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
    "Medicare broker for epilepsy patients in NJ. Anthony Orner finds plans covering seizure meds, ER visits, and neurology access. Free quote, no obligation.",
  openGraph: {
    title:
      "Medicare broker for epilepsy patients | Free Coverage Consultation | MedicareYourself",
    description:
      "Medicare broker for epilepsy patients in NJ. Anthony Orner finds plans covering seizure meds, ER visits, and neurology access. Free quote, no obligation.",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-epilepsy-patients",
};

const faqs = [
  {
    question: "Can I get Medicare if I have epilepsy?",
    answer:
      "Yes. Epilepsy does not disqualify you from Medicare. If you're 65 or older with enough work credits, you qualify for Original Medicare (Parts A and B). If you're under 65 and receiving Social Security Disability Insurance for epilepsy, you become eligible for Medicare after 24 months of benefits. Your diagnosis does not affect your eligibility.",
  },
  {
    question: "What is the rule of 3 for seizures?",
    answer:
      "The rule of 3 is a clinical guideline some providers use: if someone has had 3 or more unprovoked seizures within a certain timeframe, epilepsy is generally diagnosed and long-term treatment is recommended. This matters for Medicare planning because an established epilepsy diagnosis affects which medications, tests, and specialists your plan needs to cover.",
  },
  {
    question:
      "Does Medicare cover seizure medications like Keppra or Vimpat?",
    answer:
      "Medicare Part D covers most anti-seizure medications, but the specific drugs covered and your copay amounts depend entirely on the plan's formulary. Some plans may require prior authorization or step therapy. Because formularies change annually, it's critical to check that your exact medications are covered before enrolling or during each renewal period.",
  },
  {
    question: "Does Medicare cover ambulance transport after a seizure?",
    answer:
      "Medicare Part B covers ambulance services when transport to a hospital is medically necessary and other transportation would endanger your health. For epilepsy patients who experience seizures requiring emergency response, this coverage applies. Under Original Medicare, you'll pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible - a cost that a Medicare Supplement plan can help reduce or eliminate.",
  },
];

export default function MedicareBrokerForEpilepsyPatients() {
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
          Medicare Broker for Epilepsy Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Epilepsy Patients Managing More Than Most People
        Could Imagine
      </h1>

      <Image
        src="/images/medicare-broker-for-epilepsy-patients.webp"
        alt="Medicare broker for epilepsy patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for epilepsy patients does something most agents
        won't: look at the full picture of what you actually live with. The
        medications you can't miss. The ER visits you can't predict. The
        neurologist you can't lose access to.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help
        people with epilepsy find plans that account for all of it.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Seizure medications, ER visits, and the coverage gaps nobody warns you
          about
        </h2>
        <p className="mb-3">
          Anti-seizure drugs like levetiracetam, lacosamide, and
          oxcarbazepine keep your life stable. But Medicare Part D formularies
          vary by plan, and the wrong one could stick you with high copays or
          require prior authorization on a drug you've taken for years.
        </p>
        <p className="mb-3">
          Under Original Medicare alone, an ER visit means you pay 20% of the
          approved amount after your $283 Part B deductible. If you're someone
          who ends up in the ER multiple times a year, those costs add up fast.
          The right Supplement plan can eliminate that 20%.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How epilepsy affects your Medicare Supplement underwriting options
        </h2>
        <p className="mb-3">
          During your Medigap Open Enrollment Period - the 6 months starting
          when you're 65 and enrolled in Part B - insurance companies can't deny
          you or charge more because of epilepsy. That's guaranteed issue. It's
          the one window where your diagnosis doesn't matter.
        </p>
        <p>
          Outside that window, most carriers in NJ will ask health questions.
          Epilepsy can affect your options. Timing matters more than people
          realize, and I help you use your enrollment window strategically.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Neurologist access and ambulance coverage: what to look for
        </h2>
        <ul className="list-disc ml-6 space-y-2 mb-3">
          <li>
            Original Medicare lets you see any neurologist who accepts Medicare -
            no referral needed. Medicare Advantage plans often require you to
            stay in-network or get a referral.
          </li>
          <li>
            Part B covers ambulance transport when it's medically necessary. For
            someone with seizures, that's not a luxury - it's a regular
            possibility.
          </li>
          <li>
            EEGs, MRIs, and other diagnostic tests are covered under Part B at
            80% after your deductible. A Supplement plan covers the remaining
            20%.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The costs epilepsy patients don't always see coming
        </h2>
        <p className="mb-3">
          People talk about medication costs. What they don't always mention:
          the Part A deductible of $1,676 per benefit period if you're admitted
          after a prolonged seizure. Or skilled nursing facility coinsurance of
          $209.50 per day for days 21 through 100 if recovery takes longer than
          expected.
        </p>
        <p>
          These aren't hypothetical numbers. They're real costs that hit hardest
          when you're already dealing with enough.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What I actually do differently for epilepsy patients
        </h2>
        <p className="mb-3">
          I check your exact seizure medications against every Part D formulary
          available in your area. I compare Supplement plans based on how often
          you realistically use emergency and specialist services. And I don't
          push Medicare Advantage if it means losing access to your neurologist.
        </p>
        <p>
          This isn't about selling a plan. It's about building coverage around a
          condition that doesn't follow a schedule.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Find a plan built around unpredictable needs
        </h2>
        <p className="mb-3">
          You're managing medication timing, driving restrictions, the constant
          low-level awareness that something could happen at any moment. Your
          insurance shouldn't add to that weight.
        </p>
        <p>
          Call me. We'll go through your medications, your doctors, and your
          budget. No cost, no pressure, no surprises.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands epilepsy coverage
        </p>
        <p className="text-lg mb-4">
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
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner, Licensed Medicare Broker - New Jersey
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-prescription-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-chronic-conditions"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker for Chronic Conditions
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}