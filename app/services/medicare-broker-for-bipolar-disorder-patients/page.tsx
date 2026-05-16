import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for bipolar disorder patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for bipolar disorder patients — Anthony Orner compares Part D plans for mood stabilizers & psychiatric care. Free help: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-bipolar-disorder-patients" },
  openGraph: {
    title:
      "Medicare broker for bipolar disorder patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for bipolar disorder patients — Anthony Orner finds NJ plans covering mood stabilizers, psychiatric care, and lab work. Free analysis.",
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
      name: "Medicare Broker for Bipolar Disorder Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-bipolar-disorder-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Bipolar Disorder Patients — Plans Built Around Complex Medication Regimens",
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
    question: "Can you get Medicare if you are bipolar?",
    answer:
      "Yes. If you qualify for Medicare through age (65+) or Social Security Disability, bipolar disorder does not disqualify you. Medicare Part B covers outpatient psychiatric visits and therapy. Part D covers prescription medications like mood stabilizers and antipsychotics. Many people with bipolar disorder also qualify for SSDI before age 65, which triggers Medicare eligibility after a 24-month waiting period.",
  },
  {
    question:
      "Does Medicare cover mood stabilizers like lithium and Lamictal?",
    answer:
      "Medicare Part D plans cover most mood stabilizers, but each plan places drugs on different formulary tiers. Lithium is typically on lower-cost generic tiers, while brand-name Lamictal or atypical antipsychotics may sit on higher tiers with larger copays. A broker can compare tier placement across available plans to find the lowest total cost for your specific medications.",
  },
  {
    question:
      "Does Medicare cover inpatient psychiatric hospitalization?",
    answer:
      "Medicare Part A covers inpatient psychiatric care in general hospitals with no lifetime day limit. For freestanding psychiatric hospitals, Part A covers up to 190 days over your lifetime. You pay the Part A deductible of $1,676 per benefit period. Some Medicare Advantage plans may offer additional behavioral health benefits, but network restrictions apply.",
  },
  {
    question:
      "How much does a Medicare broker cost for help with bipolar disorder coverage?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There is no fee for plan comparisons, drug-cost analysis, or enrollment assistance. The plans and premiums are the same whether you enroll directly or through a broker.",
  },
];

export default function MedicareBrokerBipolarDisorderPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Bipolar Disorder Patients
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Bipolar Disorder Patients — Plans Built Around
          Complex Medication Regimens
        </h1>

        <Image
          src="/images/medicare-broker-for-bipolar-disorder-patients.webp"
          alt="Medicare broker for bipolar disorder patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare broker for bipolar disorder patients does something most
          online plan finders can't: match your exact medication list, lab
          schedule, and psychiatric care needs to the plan with the lowest real
          cost. I'm Anthony Orner, a licensed broker in New Jersey, and I do
          this work every day for people managing bipolar I and bipolar II.
        </p>
        <p className="text-lg mb-6">
          Bipolar disorder means your prescriptions can shift. A plan that
          worked last year might not cover a new antipsychotic your
          psychiatrist adds this year. That's why I run drug-specific
          comparisons before every enrollment.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare covers mood stabilizers, antipsychotics, and lab work
          </h2>
          <p className="mb-2">
            Medicare Part B covers outpatient psychiatric visits, therapy
            sessions, and diagnostic lab work like lithium blood-level
            monitoring. You pay 20% of the Medicare-approved amount after
            meeting the $283 annual Part B deductible.
          </p>
          <p>
            Part D handles your prescriptions. But "covered" doesn't mean
            affordable. Every Part D plan uses a different formulary with
            different tier placements and different copays for the same drug.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D tier placement for lithium, Lamictal, and other bipolar
            meds
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Generic lithium carbonate</strong> usually lands on Tier
              1 or Tier 2, keeping copays low.
            </li>
            <li>
              <strong>Generic lamotrigine (Lamictal)</strong> is typically Tier
              1 or Tier 2 as well, but some plans restrict quantity.
            </li>
            <li>
              <strong>Atypical antipsychotics</strong> like quetiapine
              (Seroquel) or aripiprazole (Abilify) vary widely. Brand versions
              can hit Tier 4 or Tier 5, with copays over $100/month on some
              plans.
            </li>
            <li>
              <strong>Prior authorization and step therapy</strong> rules
              differ by carrier. I flag these before you enroll.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Inpatient psychiatric coverage under Part A and Advantage plans
          </h2>
          <p className="mb-2">
            Part A covers inpatient psychiatric stays in general hospitals like
            any other hospitalization. You pay the $1,676 Part A deductible
            per benefit period. Freestanding psychiatric hospitals carry a
            190-day lifetime limit.
          </p>
          <p>
            Some Medicare Advantage plans offer expanded behavioral health
            benefits, but network rules matter. If your psychiatrist or
            hospital isn't in-network, out-of-pocket costs jump. I check
            provider directories before recommending any plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why bipolar disorder makes plan selection harder
          </h2>
          <p className="mb-2">
            Medication changes are common with bipolar disorder. Your doctor
            may add a second mood stabilizer, swap an antipsychotic, or
            introduce an antidepressant. Each change can shift your drug costs
            dramatically if your plan places the new medication on a high tier
            or requires prior auth.
          </p>
          <p>
            I build flexibility into plan recommendations. That means checking
            not just your current prescriptions but the medications your
            psychiatrist is most likely to consider next.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Outpatient therapy and mental health visits under Part B
          </h2>
          <p className="mb-2">
            Medicare Part B covers individual and group therapy with
            psychiatrists, clinical psychologists, clinical social workers,
            nurse practitioners, and physician assistants. There's no annual
            limit on outpatient mental health visits.
          </p>
          <p>
            If you see a therapist weekly, your 20% coinsurance adds up. A
            Medigap plan can cover that cost. Or a Medicare Advantage plan may
            offer $0 copay specialist visits. I compare both options based on
            your visit frequency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a drug-specific plan analysis at no cost
          </h2>
          <p className="mb-2">
            Give me your medication list and pharmacy. I'll run the numbers
            across every plan available in your zip code and show you the
            total annual cost: premiums, copays, deductibles, and coverage
            gaps. No charge.
          </p>
          <p>
            Open Enrollment runs October 15 through December 7. But if you're
            turning 65 or newly eligible through disability, you can enroll
            outside that window. Call to find out which enrollment period
            applies to you.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to Anthony Orner — Licensed Medicare Broker
          </p>
          <p className="text-3xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                Medigap vs. Medicare Advantage: Which Is Right for You?
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
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free unbiased counseling is available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}