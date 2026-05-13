import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for transplant recipients | Free Coverage Analysis | MedicareYourself",
  description:
    "Medicare broker for transplant recipients — protect immunosuppressant coverage and avoid post-op gaps. Call 855-559-1700 for a free, no-obligation analysis.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-transplant-recipients" },
  openGraph: {
    title:
      "Medicare broker for transplant recipients | Free Coverage Analysis | MedicareYourself",
    description:
      "Medicare broker for transplant recipients — keep immunosuppressant coverage, avoid gaps. Anthony Orner explains your options. Free analysis.",
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
      name: "Medicare Broker for Transplant Recipients",
      item: "https://medicareyourself.com/services/medicare-broker-for-transplant-recipients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Transplant Recipients: Immunosuppressant and Post-Op Coverage Explained",
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
    "https://medicareyourself.com/services/medicare-broker-for-transplant-recipients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. Our coverage analysis for transplant recipients is completely free, with no obligation.",
  },
  {
    question: "Does Medicare cover transplant services?",
    answer:
      "Yes. Medicare Part A covers organ transplant surgery at Medicare-certified facilities. Part B covers immunosuppressive drugs if you had a Medicare-covered transplant. After 2023, the Part B-ID benefit extends immunosuppressive drug coverage even if you lose full Medicare eligibility.",
  },
  {
    question:
      "What happens to my immunosuppressive drug coverage if I lose Medicare eligibility?",
    answer:
      "If you had a Medicare-covered transplant and lose eligibility (for example, after 36 months of ESRD-based coverage), the Part B Immunosuppressive Drug (Part B-ID) benefit lets you keep coverage for anti-rejection medications only. You'll pay a monthly premium and a deductible, but you won't lose access to the drugs that keep your transplant functioning.",
  },
  {
    question: "Should I use a Part D plan or Part B for anti-rejection drugs?",
    answer:
      "It depends on your situation. If you have full Medicare, Part B typically covers immunosuppressive drugs at 80% of the Medicare-approved amount. A Part D plan may cover additional medications. We compare both options side by side in your free coverage analysis.",
  },
];

export default function MedicareBrokerForTransplantRecipients() {
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
          Medicare Broker for Transplant Recipients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Transplant Recipients: Immunosuppressant and Post-Op
        Coverage Explained
      </h1>

      <Image
        src="/images/medicare-broker-for-transplant-recipients.webp"
        alt="Medicare broker for transplant recipients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for transplant recipients can be the difference between
        continuous immunosuppressant coverage and a gap that puts your organ at
        risk. After transplant surgery, your medications aren't optional. They're
        the reason the transplant works.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help transplant
        recipients understand exactly how Part A, Part B, the Part B-ID benefit,
        and Part D fit together so nothing falls through the cracks.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Medicare Part B covers immunosuppressive drugs after 2023
        </h2>
        <p className="text-gray-700 mb-2">
          If you received a transplant covered by Medicare, Part B pays 80% of
          the Medicare-approved amount for immunosuppressive drugs. You're
          responsible for the remaining 20% after meeting the 2026 Part B
          deductible of $283/year.
        </p>
        <p className="text-gray-700">
          This coverage continues as long as you have Part B. But if your
          Medicare eligibility is tied to End-Stage Renal Disease (ESRD), your
          full coverage used to end 36 months after a successful kidney
          transplant. That changed in 2023.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The Part B-ID benefit and what it means for you
        </h2>
        <p className="text-gray-700 mb-2">
          Starting January 2023, the Part B Immunosuppressive Drug (Part B-ID)
          benefit covers anti-rejection medications for people who lose full
          Medicare after ESRD-based coverage ends. This benefit covers
          immunosuppressive drugs only, not doctor visits or hospital stays.
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Monthly premium and annual deductible apply</li>
          <li>
            Covers the same 80% of the Medicare-approved amount as standard Part
            B
          </li>
          <li>
            You can also buy a supplemental policy to cover the remaining 20%
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Choosing a Part D plan that covers anti-rejection medications
        </h2>
        <p className="text-gray-700 mb-2">
          If you have full Medicare, some of your transplant medications may fall
          under Part D rather than Part B. Each Part D plan has its own
          formulary. The wrong plan could mean high copays on a drug you take
          every single day.
        </p>
        <p className="text-gray-700">
          I review your exact medication list and compare it against available
          Part D formularies. No guesswork. You see the numbers before you
          enroll.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why transplant recipients face unique coverage risks
        </h2>
        <p className="text-gray-700 mb-2">
          Missing even a short window of anti-rejection medication can trigger
          organ rejection. Most Medicare content doesn't address this urgency.
          People dealing with post-transplant life know the stakes are higher
          than a billing dispute. It's your health.
        </p>
        <p className="text-gray-700">
          Coverage transitions between ESRD-based Medicare, the Part B-ID
          benefit, employer plans, and Medigap are where gaps happen. That's
          exactly where I focus.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a post-transplant coverage analysis includes
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>
            Full review of your current Medicare coverage (Parts A, B, D, and
            any Medigap or Advantage plan)
          </li>
          <li>
            Medication-by-medication formulary check against available Part D
            plans
          </li>
          <li>Part B-ID eligibility screening if you're losing ESRD coverage</li>
          <li>
            Cost comparison so you know your monthly out-of-pocket before making
            a decision
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free post-transplant coverage analysis
        </h2>
        <p className="text-gray-700 mb-2">
          You've already been through the hard part. Let me handle the insurance
          side. Call me and we'll go through your medications, your coverage
          timeline, and your options together. No cost, no pressure.
        </p>
        <p className="text-gray-700">
          Open Enrollment for Medicare Advantage and Part D runs October 15
          through December 7 each year, but coverage transitions after transplant
          can happen anytime. Don't wait for a gap to find you.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to Anthony Orner about your transplant coverage.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/learn/what-is-medigap"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans: How Medicare Supplements Work
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
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/organ-transplants" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Organ Transplant Coverage</a> and <a href="https://www.medicare.gov/coverage/immunosuppressive-drugs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Immunosuppressive Drug Coverage (Part B-ID)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}