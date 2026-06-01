import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for dementia patients | Free Caregiver Consultation | MedicareYourself",
  description:
    "Medicare broker for dementia patients and caregivers — free help with home health, Part D drug coverage, and skilled nursing. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-dementia-patients" },
  openGraph: {
    title:
      "Medicare broker for dementia patients | Free Caregiver Consultation | MedicareYourself",
    description:
      "Medicare broker for dementia patients and caregivers needing real coverage guidance — home health, meds, skilled nursing. Free consultation with Anthony Orner.",
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
      name: "Medicare Broker for Dementia Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-dementia-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Dementia Patients — Practical Help for Families Who Need It Now",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by insurance carriers, not by you. Our consultations, plan comparisons, and enrollment help are completely free to families and caregivers.",
  },
  {
    question:
      "Does Medicare cover memory care or assisted living for dementia?",
    answer:
      "Original Medicare does not cover long-term custodial care like memory care facilities or assisted living. It covers skilled nursing stays (up to 100 days per benefit period after a qualifying hospital stay) and home health services when ordered by a doctor. For long-term residential care, families typically need Medicaid, long-term care insurance, or private pay.",
  },
  {
    question:
      "Should a dementia patient stay on Medicare Advantage or switch to Original Medicare?",
    answer:
      "It depends on care needs. Medicare Advantage plans require referrals and network restrictions, which can be difficult when a patient can't easily travel to appointments. Original Medicare with a Supplement offers broader provider access and no prior authorizations. We can review your parent's specific situation on a free call.",
  },
  {
    question:
      "Does Medicare Part D cover dementia medications like Leqembi?",
    answer:
      "Part D plans vary in which dementia drugs they cover and at what tier. Newer treatments like lecanemab (Leqembi) may be covered under Part B when administered in a clinical setting. Older medications like donepezil and memantine are typically on Part D formularies. We can check your parent's specific prescriptions against available plans.",
  },
,
  {
    question: "Can a caregiver or power of attorney handle Medicare enrollment for a dementia patient?",
    answer:
      "Yes. A spouse, adult child, or legal representative with a signed authorization or power of attorney can speak with a Medicare broker and help enroll a loved one. We routinely work with family caregivers and can guide you through what paperwork is needed before plan changes are made.",
  }
,
  {
    question: "Does Medicare cover in-home care for a parent with dementia?",
    answer:
      "Medicare covers intermittent skilled home health services — like nursing visits, physical therapy, and home health aide hours — when a doctor certifies the patient is homebound and needs skilled care. It does not cover 24-hour home care, full-time custodial help, or homemaker services. We can walk caregivers through what qualifies and how to request a home health referral.",
  },
  {
    question: "What Medicare plan is best for a parent recently diagnosed with dementia?",
    answer:
      "There's no single best plan, but families often prefer Original Medicare with a Medigap Supplement and a standalone Part D plan because it avoids prior authorizations and lets the patient see any Medicare-accepting provider. Medicare Advantage may work if the patient's doctors and preferred neurologist are in-network. We compare both options side by side on a free call.",
  },
  {
    question: "When can we change a dementia patient's Medicare plan?",
    answer:
      "The Annual Enrollment Period runs October 15 through December 7 each year, and the Medicare Advantage Open Enrollment runs January 1 through March 31. Patients who qualify for Medicaid or Extra Help can often change plans more frequently through a Special Enrollment Period. We can confirm which window applies to your family's situation.",
  }
];

export default function MedicareBrokerForDementiaPatients() {
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
          Medicare Broker for Dementia Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for Dementia Patients — Practical Help for Families Who Need It Now
      </h1>

      <Image
        src="/images/medicare-broker-for-dementia-patients.webp"
        alt="Medicare broker for dementia patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for dementia patients helps caregivers make coverage decisions when their loved one can't advocate for themselves. You're managing doctor visits, medications, behavioral changes, and grief that doesn't have a clean edge to it.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I work directly with families dealing with cognitive decline to make sure the plan matches the care, not the other way around. This call is free.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare covers for dementia: home health, skilled nursing, and more
        </h2>
        <p className="mb-2">
          Original Medicare (Parts A and B) covers several dementia-related services, but not the one most families eventually need: long-term custodial care.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Home health aide and skilled nursing visits when doctor-ordered</li>
          <li>Cognitive assessments and care planning under the Annual Wellness Visit</li>
          <li>Skilled nursing facility: $0 copay for days 1-20, then $209.50/day for days 21-100 (2026)</li>
          <li>Hospice care under Part A when a physician certifies a 6-month prognosis</li>
        </ul>
        <p>
          Medicare does not pay for memory care facilities, assisted living, or 24/7 personal care aides. That gap catches families off guard constantly.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Supplement and Advantage plans differ for progressive cognitive conditions
        </h2>
        <p className="mb-2">
          I hear from caregivers who hit a wall with Medicare Advantage: their parent can't travel to in-network providers, can't sit through prior authorization delays, or gets denied home health because they missed an in-person visit. That's a real pattern, not an edge case.
        </p>
        <p className="mb-2">
          Original Medicare with a Medigap Supplement gives broader provider access and no referral requirements. Plan G, for example, covers the Part A deductible ($1,676 in 2026) and all Part B excess charges. No networks.
        </p>
        <p>
          For someone whose condition is progressing, flexibility matters more than low premiums. I can walk you through the actual tradeoffs based on your parent's doctors and care needs.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D considerations for dementia medications like Leqembi and Aduhelm
        </h2>
        <p className="mb-2">
          Generic donepezil and memantine are on most Part D formularies at affordable tiers. Newer treatments are more complicated.
        </p>
        <p className="mb-2">
          Lecanemab (Leqembi) is typically administered as an IV infusion in a clinical setting, which may fall under Part B rather than Part D. Coverage requires an Alzheimer's diagnosis and ongoing monitoring, including regular brain imaging.
        </p>
        <p>
          Every Part D plan has a different formulary. I check your parent's exact medications against available plans so you're not guessing at a pharmacy counter.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why network restrictions hurt dementia patients the most
        </h2>
        <p className="mb-2">
          Caregivers on Reddit describe the same scenario over and over: a parent in a memory care facility who can't be transported to an in-network doctor, so they can't get the referral they need, so they can't get the treatment approved. It's a loop with no good exit.
        </p>
        <p>
          If your parent is on a Medicare Advantage plan and hitting walls like this, you may have options to switch during certain enrollment periods or through guaranteed issue rights. Let's look at what applies to your situation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Planning ahead: what caregivers wish they'd known sooner
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Get a healthcare power of attorney in place early, before capacity becomes a question</li>
          <li>Start Medicaid planning conversations now if long-term care may be needed (the look-back period is typically 5 years)</li>
          <li>Ask about the GUIDE Model, a newer Medicare program providing dementia care management and caregiver support services</li>
          <li>Review coverage annually, because care needs in year three look nothing like year one</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free call — we help caregivers navigate this too
        </h2>
        <p className="mb-2">
          You don't need to have all the answers before you call. Most caregivers I talk to start with "I don't even know what to ask." That's fine. That's what I'm here for.
        </p>
        <p>
          I'll review your parent's current coverage, their medications, their care situation, and tell you what your real options are. No cost, no pressure, no enrollment required.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands dementia care.
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
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Coverage Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-dementia-patients"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker for Caregivers: How We Help
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/home-health-services" rel="noopener noreferrer" target="_blank" className="underline">Medicare home health coverage (Medicare.gov)</a> and <a href="https://www.cms.gov/priorities/innovation/innovation-models/guide" rel="noopener noreferrer" target="_blank" className="underline">CMS GUIDE Model for dementia care</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey families can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey caregivers can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey families can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey caregivers can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey families can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased local counseling, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking &amp; Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey families can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}