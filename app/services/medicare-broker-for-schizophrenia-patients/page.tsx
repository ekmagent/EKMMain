import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for schizophrenia patients | Free Coverage Analysis | MedicareYourself",
  description:
    "Medicare broker for schizophrenia patients — Anthony Orner compares NJ plans covering antipsychotics & psychiatric care. Free help: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-schizophrenia-patients" },
  openGraph: {
    title:
      "Medicare broker for schizophrenia patients | Free Coverage Analysis | MedicareYourself",
    description:
      "Medicare broker for schizophrenia patients — Anthony Orner finds NJ plans covering antipsychotics, injectables, and psychiatric care. Free consultation.",
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
      name: "Medicare Broker for Schizophrenia Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-schizophrenia-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Schizophrenia Patients — Ensuring Coverage for Antipsychotics and Ongoing Care",
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
    question: "Do people with schizophrenia qualify for Medicare?",
    answer:
      "Yes. Many people with schizophrenia qualify for Medicare through Social Security Disability Insurance (SSDI) after a 24-month waiting period. Others qualify at age 65 like any other beneficiary. Once enrolled, Original Medicare and Medicare Advantage plans both cover psychiatric services and prescription medications.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans cost the same whether you enroll through a broker or on your own.",
  },
  {
    question:
      "Does Medicare Part D cover antipsychotic medications for schizophrenia?",
    answer:
      "All Part D plans are required to cover all antipsychotic medications under the protected class rule. However, tier placement, copay amounts, and prior authorization requirements vary by plan. A broker can compare your specific prescriptions across available formularies to find the lowest out-of-pocket cost.",
  },
  {
    question:
      "What is the 190-day lifetime limit for psychiatric hospital stays?",
    answer:
      "Medicare Part A covers inpatient psychiatric care, but there's a 190-day lifetime limit on stays at freestanding psychiatric hospitals. This limit does not apply to psychiatric units within general hospitals. Once you've used all 190 days at a freestanding facility, Medicare won't cover additional stays there.",
  },
];

export default function MedicareBrokerSchizophreniaPatients() {
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
          Medicare Broker for Schizophrenia Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Schizophrenia Patients — Ensuring Coverage for
        Antipsychotics and Ongoing Care
      </h1>

      <Image
        src="/images/medicare-broker-for-schizophrenia-patients.webp"
        alt="Medicare broker for schizophrenia patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for schizophrenia patients does what most online plan
        finders can't: match your exact medications, providers, and crisis needs
        to a plan that actually works. I'm Anthony Orner, a licensed broker in
        New Jersey, and I help people with schizophrenia and their families sort
        through formulary details, psychiatric coverage rules, and benefit limits
        that get buried in plan documents.
      </p>
      <p className="mb-6">
        This isn't generic Medicare advice. It's a plan review built around the
        reality of managing a serious mental illness.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare coverage for antipsychotic medications and injectables
        </h2>
        <p className="mb-3">
          Antipsychotics are a protected drug class under Part D. That means
          every Part D plan must cover all FDA-approved antipsychotics. But
          "covered" doesn't mean "affordable."
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>
            Tier placement varies wildly. A brand-name long-acting injectable
            like paliperidone palmitate might sit on Tier 4 or 5 with one plan
            and Tier 3 with another.
          </li>
          <li>
            Prior authorization and step therapy requirements differ by carrier.
          </li>
          <li>
            Part B covers some injectables administered in a doctor's office.
            You'd pay 20% coinsurance after the $283 annual deductible.
          </li>
        </ul>
        <p>
          I run your prescriptions through every available formulary to find the
          plan with the lowest total cost.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part A psychiatric hospital benefits and the 190-day lifetime limit
        </h2>
        <p className="mb-3">
          Part A covers inpatient psychiatric stays, but a critical rule catches
          people off guard: there's a 190-day lifetime limit at freestanding
          psychiatric hospitals. Once those days are gone, they don't come back.
        </p>
        <p>
          Psychiatric units inside general hospitals don't have this cap. They
          follow standard Part A rules: $1,676 deductible per benefit period,
          with full coverage for the first 60 days. Knowing which facility type
          you're using matters more than most people realize.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Advantage plans handle specialist and crisis services
        </h2>
        <p className="mb-3">
          Medicare Advantage plans must cover everything Original Medicare does,
          but they add their own network rules. For someone with schizophrenia,
          that means checking whether your psychiatrist, therapist, and crisis
          team are all in-network.
        </p>
        <p>
          Some Advantage plans offer extra behavioral health benefits like care
          coordination or telehealth psychiatric visits. Others have narrow
          networks that make continuity of care harder. I check the specifics
          before recommending any plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Outpatient mental health coverage under Part B
        </h2>
        <p className="mb-3">
          Part B covers outpatient psychiatric services including visits with
          psychiatrists, clinical psychologists, licensed clinical social
          workers, and nurse practitioners. You pay 20% of the
          Medicare-approved amount after your $283 deductible.
        </p>
        <p>
          Partial hospitalization programs are also covered under Part B when a
          doctor certifies you'd otherwise need full inpatient care. This can be
          critical during episodes that need more than weekly visits but less
          than full admission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why families managing schizophrenia need a broker
        </h2>
        <p className="mb-3">
          Many people I work with are family members. A parent or sibling calling
          because their loved one can't sort through plan options alone. That's
          the daily reality of this condition, and most insurance content ignores
          it.
        </p>
        <p>
          I simplify the process. One call, and I'll review current medications,
          providers, and any upcoming treatment changes. I present two or three
          plans that fit, explain the tradeoffs plainly, and handle enrollment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a plan review tailored to schizophrenia treatment
        </h2>
        <p className="mb-3">
          Bring your medication list and your provider names. I'll compare every
          plan available in your area and show you exactly what you'd pay. No
          cost, no obligation, no pressure.
        </p>
        <p>
          Open Enrollment runs October 15 through December 7 for Medicare
          Advantage and Part D changes. But if you're newly eligible or qualify
          for a Special Enrollment Period, we can review your options right now.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to Anthony Orner about your coverage options.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
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
              href="/services/medicare-broker-for-anxiety-disorder-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Mental Health Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Understanding Medicare Part D Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Original Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
                    <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/mental-health-care-outpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Outpatient Mental Health Coverage</a> and <a href="https://www.medicare.gov/coverage/mental-health-care-inpatient" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Inpatient Mental Health Care</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}