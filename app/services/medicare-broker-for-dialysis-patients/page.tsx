import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for dialysis patients | Free ESRD Plan Review | MedicareYourself",
  description:
    "Medicare broker for dialysis patients — ESRD eligibility, Advantage vs. Medigap, and home dialysis coverage explained. Free plan review: call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-dialysis-patients" },
  openGraph: {
    title:
      "Medicare broker for dialysis patients | Free ESRD Plan Review | MedicareYourself",
    description:
      "Medicare broker for dialysis patients explaining ESRD eligibility, plan coordination, and cost control. Anthony Orner provides free plan reviews.",
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
      name: "Medicare Broker for Dialysis Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-dialysis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Dialysis Patients — Navigating ESRD Coverage and Plan Options",
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
      "Nothing. A licensed Medicare broker like Anthony Orner is paid by insurance carriers, not by you. There's no fee for plan reviews, comparisons, or enrollment help for dialysis patients with ESRD.",
  },
  {
    question: "How do I apply for Medicare if I'm on dialysis?",
    answer:
      "You apply through Social Security. If you have ESRD requiring regular dialysis, you can qualify for Medicare regardless of age. Coverage typically starts the fourth month of dialysis, though it can begin sooner if you train for home dialysis.",
  },
  {
    question: "Can dialysis patients enroll in Medicare Advantage plans?",
    answer:
      "Yes. Since 2021, people with ESRD can enroll in Medicare Advantage during the annual Open Enrollment Period (October 15 through December 7). Before that change, ESRD patients were largely locked out of Advantage plans.",
  },
  {
    question: "Who pays the 20% that Medicare doesn't cover for dialysis?",
    answer:
      "Under Original Medicare, you're responsible for 20% of the Medicare-approved amount after meeting the Part B deductible ($283 in 2026). A Medigap policy, Medicaid, or employer coverage can pick up that cost share. Without secondary coverage, those bills add up fast at three sessions per week.",
  },

  {
    question: "Does Medicare cover home dialysis training and equipment?",
    answer:
      "Yes. Medicare Part B covers home dialysis training, equipment, and supplies when you and a helper are trained by a Medicare-certified facility. If you start a home dialysis training program, your Medicare coverage can begin during the first month of dialysis instead of waiting until the fourth month.",
  },
  {
    question: "What's the difference between Part A and Part B coverage for dialysis?",
    answer:
      "Under Original Medicare, Part A covers inpatient dialysis if you're admitted to a hospital for special care. Part B covers outpatient dialysis treatments at a dialysis facility or at home, along with certain dialysis drugs, lab tests, and supplies. You generally need both parts to get the full ESRD benefit.",
  }
,
  {
    question: "Does Medicare cover ambulance transportation to dialysis appointments?",
    answer:
      "Medicare Part B may cover ambulance transportation to and from a dialysis facility only when other transportation could endanger your health and you meet medical necessity rules. Routine rides to outpatient dialysis are generally not covered. A broker can help you confirm what your specific plan includes for non-emergency transportation.",
  },
  {
    question: "Can I keep my employer health plan and still enroll in Medicare with ESRD?",
    answer:
      "Yes. If you have employer or COBRA coverage when you become eligible for Medicare due to ESRD, that plan typically pays first for the first 30 months, and Medicare pays second. After the coordination period ends, Medicare becomes the primary payer. Reviewing both plans together helps avoid surprise bills during the transition.",
  },
  {
    question: "Should a dialysis patient choose Medicare Advantage or Medigap?",
    answer:
      "It depends on your treatment center, prescriptions, and budget. Medicare Advantage plans often include dental, vision, and out-of-pocket maximums but use provider networks that may not include every dialysis center. Medigap pairs with Original Medicare to cover cost-sharing and offers broader provider access, though guaranteed-issue rights for ESRD patients vary by state. Call 855-559-1700 for a side-by-side review.",
  }
,
  {
    question: "Should I choose Medicare Advantage or Medigap if I'm on dialysis?",
    answer:
      "It depends on your treatment center, travel needs, and budget. Medigap pairs with Original Medicare and lets you see any provider that accepts Medicare, which can be helpful if your dialysis clinic is out of network for local Advantage plans. Advantage plans may offer lower upfront premiums and extra benefits, but networks and prior authorization rules matter for ongoing dialysis care. A licensed broker can compare both side by side.",
  },
  {
    question: "Will Medicare cover a kidney transplant?",
    answer:
      "Yes. Medicare covers kidney transplant surgery, related hospital care, and immunosuppressive drugs when the transplant is performed at a Medicare-approved facility. Part A covers the inpatient stay and Part B covers physician services and many post-transplant medications.",
  },
  {
    question: "Can I keep my employer health plan along with Medicare for dialysis?",
    answer:
      "Often yes. For the first 30 months after you become Medicare-eligible due to ESRD, your employer group health plan generally pays first and Medicare pays second. After that coordination period ends, Medicare becomes the primary payer. A broker can help you plan for the transition before your secondary coverage shifts.",
  }
];

export default function MedicareBrokerForDialysisPatients() {
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
          Medicare Broker for Dialysis Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-snug">
        Medicare Broker for Dialysis Patients — Navigating ESRD Coverage and
        Plan Options
      </h1>

      <Image
        src="/images/medicare-broker-for-dialysis-patients.webp"
        alt="Medicare broker for dialysis patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for dialysis patients can save you from the confusion
        that hits when kidney failure forces you into the insurance system
        earlier than expected. Three sessions a week, bills arriving from
        directions you didn't anticipate, coverage timelines that don't line up
        with when you actually need treatment.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help ESRD patients
        across New Jersey and beyond sort through eligibility rules, plan
        options, and the cost gaps nobody warned them about. No cost to you,
        ever.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare eligibility works with end-stage renal disease
        </h2>
        <p className="mb-3">
          ESRD gives you Medicare eligibility at any age. You don't have to be
          65. According to Medicare.gov, you qualify if your kidneys have
          permanently failed, you need regular dialysis or have had a transplant,
          and you (or a spouse or parent) have enough work credits under Social
          Security.
        </p>
        <p>
          Coverage generally starts the fourth month after dialysis begins. If
          you start home dialysis training, it can kick in as early as month one.
          That gap between starting treatment and gaining coverage catches people
          off guard.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Original Medicare vs. Advantage for dialysis: key differences
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Original Medicare (Parts A + B):</strong> Covers inpatient
            dialysis under Part A and outpatient sessions under Part B. You pay
            20% of the approved amount after the $283 Part B deductible (2026).
            You can pair it with a Medigap plan to cover that 20%.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Since 2021, ESRD
            patients can enroll during Open Enrollment (October 15 through
            December 7). Some plans offer $0 premiums and extra benefits like
            transportation. But network restrictions matter when you rely on a
            specific dialysis center.
          </li>
        </ul>
        <p className="mt-3">
          Neither option is automatically better. It depends on your dialysis
          center's network status, your other medications, and whether you have
          secondary coverage already.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Coordinating employer coverage with Medicare during ESRD
        </h2>
        <p className="mb-3">
          If you're under 65 and still working when you start dialysis, your
          employer plan typically pays first for 30 months. Medicare acts as
          secondary. After that 30-month coordination period, Medicare becomes
          primary.
        </p>
        <p>
          This transition is where costly mistakes happen. Miss a deadline and
          you risk a coverage gap or a Part B late enrollment penalty of 10% for
          every 12-month period you delayed. I walk my clients through the exact
          timeline so nothing falls through.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What the 20% cost share really looks like
        </h2>
        <p className="mb-3">
          Dialysis three times a week can run $6,000 or more per month at the
          Medicare-approved rate. That 20% cost share adds up to over $1,200
          monthly if you have no secondary insurance. Over a year, that's more
          than $14,000 out of pocket.
        </p>
        <p>
          A Medigap plan, Medicaid, or certain Advantage plans can absorb that
          cost. If you're not sure what's covering the 20% right now, that's
          exactly the kind of thing I review for free.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Avoiding coverage gaps when aging off a parent's plan
        </h2>
        <p className="mb-3">
          Younger dialysis patients often lose a parent's insurance at 26. The
          waiting period for Medicare or Medicaid approval can leave you exposed
          for weeks. Planning ahead matters here.
        </p>
        <p>
          If you're approaching that birthday, call me before your coverage ends.
          We can map out interim options and make sure your Medicare application
          is already in motion at Social Security.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free ESRD plan review with Anthony Orner
        </h2>
        <p className="mb-3">
          You shouldn't have to figure out coordination periods, cost shares,
          and network restrictions while managing dialysis three days a week. I
          review your current coverage, identify what you're actually paying, and
          show you whether a different setup saves money or protects you better.
        </p>
        <p>There's no fee, no obligation, and no pressure.</p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands ESRD coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
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
              href="/services/what-is-the-best-medicare-plan-for-dialysis"
              className="text-blue-600 hover:underline"
            >
              ESRD Medicare Eligibility: When Coverage Starts
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Original Medicare vs. Medicare Advantage
            </Link>
          </li>
          <li>
            <Link
              href="/learn/what-is-medigap"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/help-with-your-medicare-decision"
              className="text-blue-600 hover:underline"
            >
              Request a Free Medicare Plan Review
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
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/dialysis-services-supplies" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Dialysis Services &amp; Supplies Coverage</a> and <a href="https://www.medicare.gov/basics/end-stage-renal-disease" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — End-Stage Renal Disease (ESRD)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local counseling? Contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for unbiased Medicare guidance.</div>
      </section>
    </main>
  );
}