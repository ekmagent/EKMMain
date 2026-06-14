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
    "Medicare broker for bipolar disorder patients — Anthony Orner compares Part D plans covering mood stabilizers and psychiatric care. Free help: 855-559-1700.",
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
,
  {
    question: "Are therapy and counseling sessions covered for bipolar disorder under Medicare?",
    answer:
      "Yes. Medicare Part B covers outpatient psychotherapy, counseling, and visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. After meeting the Part B deductible, you typically pay coinsurance for each session. A Medicare Advantage plan may handle these services differently, so it's important to confirm provider networks before enrolling.",
  },
  {
    question: "Can a Medicare Advantage plan limit my choice of psychiatrist?",
    answer:
      "Yes. Medicare Advantage plans use provider networks, which means your psychiatrist or therapist must be in-network for full coverage. Original Medicare with a Part D plan generally allows you to see any provider who accepts Medicare. If continuity with a current psychiatrist matters, a broker can verify network status before you enroll.",
  },
  {
    question: "What happens to my bipolar medication coverage if I switch Part D plans?",
    answer:
      "Each Part D plan has its own formulary, tier structure, and prior authorization rules, so switching can change what you pay for mood stabilizers and antipsychotics. Some plans require step therapy before covering certain brand-name drugs. Reviewing your full medication list against each plan's formulary during the Annual Enrollment Period helps avoid coverage surprises.",
  }
,
  {
    question: "Does Medicare cover outpatient therapy and psychiatric visits for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers a wide range of outpatient mental health services, including visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. Part B also covers individual and group psychotherapy, medication management, and partial hospitalization programs when medically necessary. You typically pay the Part B coinsurance after meeting the Part B deductible.",
  }
,
  {
    question: "Are therapy and counseling sessions covered by Medicare for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group therapy, counseling, and psychiatric evaluations when provided by a licensed professional who accepts Medicare. After meeting the Part B deductible, you typically pay a coinsurance share of the Medicare-approved amount. Telehealth therapy visits are also covered under Part B.",
  },
  {
    question: "Does Medicare cover lab work needed to monitor mood stabilizers?",
    answer:
      "Yes. Part B covers medically necessary blood tests ordered by your psychiatrist or primary care provider, including lithium levels, thyroid panels, kidney function, and liver function tests commonly required for mood stabilizer monitoring. Lab work ordered by a Medicare-enrolled provider and performed at a participating lab is generally covered at no cost to you.",
  }
,
  {
    question: "Does Medicare cover outpatient therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group psychotherapy, family counseling related to your treatment, and visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. As of 2024, Part B also covers services from licensed marriage and family therapists and mental health counselors. You generally pay the Part B deductible plus coinsurance after Medicare's share.",
  },
  {
    question: "Will a Medicare Advantage plan or Original Medicare with Part D work better for bipolar disorder?",
    answer:
      "It depends on your medications, providers, and how often you need psychiatric care. Original Medicare with a standalone Part D plan and Medigap offers nationwide provider access and predictable out-of-pocket costs, which can help if you see specialists outside a local network. Medicare Advantage plans may bundle behavioral health extras but use networks and prior authorization. A broker can compare both paths against your specific drug list and prescribers.",
  }
,
  {
    question: "Are therapy and counseling sessions covered by Medicare for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group therapy with psychiatrists, clinical psychologists, licensed clinical social workers, nurse practitioners, and physician assistants who accept Medicare assignment. Part B also covers an annual depression screening at no cost when provided by a participating provider. After meeting the Part B deductible, you typically pay coinsurance for each therapy visit.",
  },
  {
    question: "Should I choose Medicare Advantage or Original Medicare with a Part D plan for bipolar disorder?",
    answer:
      "It depends on your providers and medications. Original Medicare with a standalone Part D plan and Medigap supplement gives you broad access to any psychiatrist or therapist who accepts Medicare nationwide. Medicare Advantage plans may include extra behavioral health benefits but use networks and require referrals or prior authorization for some psychiatric services. A broker can compare both paths against your current treatment team and drug list.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group psychotherapy, family counseling related to your treatment, and visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. After meeting the Part B deductible, you typically pay a coinsurance for each visit. Telehealth therapy visits are also covered when provided by Medicare-enrolled clinicians.",
  },
  {
    question: "Can a Medicare broker help me compare plans based on my specific psychiatric medications?",
    answer:
      "Yes. Anthony Orner reviews your full medication list — including mood stabilizers, antipsychotics, and antidepressants — and runs them through each available Part D and Medicare Advantage formulary in your ZIP code. The comparison shows tier placement, copays, and total annual drug cost so you can pick the plan with the lowest out-of-pocket spend. Call 855-559-1700 for a free comparison.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group psychotherapy, family counseling related to your treatment, and visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. After meeting the Part B deductible, you typically pay coinsurance for each visit. Telehealth therapy is also covered for many behavioral health visits.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group psychotherapy, family counseling related to your treatment, and visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. After meeting the Part B deductible, you typically pay a coinsurance for each session. Annual depression screening is also covered at no cost when provided by a primary care doctor.",
  },
  {
    question: "Will a Medicare Advantage plan or Original Medicare with a drug plan work better for bipolar disorder?",
    answer:
      "It depends on your psychiatrist, therapist, and medication list. Original Medicare plus a standalone Part D plan gives you broad provider access, which helps if your psychiatric team does not take Advantage networks. Medicare Advantage may offer extra behavioral health benefits but limits you to in-network providers. A broker can compare both options side by side based on your specific prescribers and drugs.",
  },
  {
    question: "Can I change Part D plans if my bipolar medications change?",
    answer:
      "You can switch Part D or Medicare Advantage plans during the Annual Enrollment Period each fall, with coverage starting January 1. If you qualify for Extra Help or a Special Enrollment Period (for example, due to a move or loss of coverage), you may be able to change plans outside that window. Reviewing your formulary annually is important because plans can move drugs to different tiers each year.",
  }
,
  {
    question: "Does Medicare cover outpatient therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group psychotherapy, psychiatric evaluations, medication management, and visits with psychiatrists, clinical psychologists, licensed clinical social workers, nurse practitioners, and physician assistants. Part B also covers an annual depression screening at no cost when provided by a participating provider. After meeting the Part B deductible, you typically pay coinsurance for each covered visit.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group therapy, psychiatric evaluations, and medication management visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. Part B also covers an annual depression screening at no cost when performed by a participating provider. After meeting the Part B deductible, you typically pay coinsurance for each visit.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group therapy, family counseling when the purpose is to help with your treatment, and visits with psychiatrists, clinical psychologists, clinical social workers, and nurse practitioners. You typically pay 20% of the Medicare-approved amount after meeting the Part B deductible. Telehealth therapy visits are also covered in many situations.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group therapy, psychiatric evaluations, and counseling provided by psychiatrists, clinical psychologists, clinical social workers, and other qualified providers. Part B also covers an annual depression screening at no cost when performed by a primary care provider. After meeting the Part B deductible, you typically pay a coinsurance share of the Medicare-approved amount for therapy visits.",
  },
  {
    question: "Will a Medicare Advantage plan or Original Medicare with Part D work better for bipolar disorder?",
    answer:
      "It depends on your providers, medications, and how often you need psychiatric care. Original Medicare with a standalone Part D plan and Medigap offers nationwide provider access and predictable costs, which can help if you see specialists or travel for care. Medicare Advantage plans may include extra behavioral health benefits but restrict you to a network. A broker can compare both options based on your psychiatrist, therapist, and prescription list.",
  },
  {
    question: "Can I switch Part D plans if my mood stabilizer is dropped from the formulary?",
    answer:
      "Outside of the Annual Enrollment Period (October 15 – December 7), you generally cannot switch Part D plans mid-year just because a drug changed tiers. However, you can request a formulary exception from your current plan or apply for a Special Enrollment Period if you qualify (for example, through Extra Help or a change in residence). Reviewing formularies each fall is the best way to stay ahead of changes.",
  }
,
  {
    question: "Does Medicare cover therapy and counseling for bipolar disorder?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including individual and group psychotherapy provided by psychiatrists, clinical psychologists, licensed clinical social workers, nurse practitioners, and physician assistants. Part B also covers an annual depression screening and diagnostic evaluations. Telehealth therapy visits are covered when provided by an eligible Medicare provider.",
  },
  {
    question: "Can a Medicare broker help me find a plan that covers my current psychiatrist?",
    answer:
      "Yes. If you choose Original Medicare with a standalone Part D plan, you can see any provider who accepts Medicare nationwide, including most psychiatrists. With Medicare Advantage, networks vary by plan, so it's important to confirm your psychiatrist is in-network before enrolling. A broker can check network rosters and formularies side-by-side before you make a decision.",
  }
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
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <p className="text-sm text-gray-600 mt-3">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</p>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}