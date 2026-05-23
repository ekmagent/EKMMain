import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in bayonne new jersey | Free Local Help | MedicareYourself",
  description:
    "Licensed Medicare broker in Bayonne, NJ. Anthony Orner compares Medigap and Advantage plans at no cost — free local help. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-bayonne-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in bayonne new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Bayonne, New Jersey — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free consultation.",
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
      name: "Medicare Insurance Agents in Bayonne, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-bayonne-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Bayonne, New Jersey — Licensed Broker Serving Hudson County",
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
    "https://medicareyourself.com/services/medicare-insurance-agents-in-bayonne-new-jersey",
};

const faqs = [
  {
    question:
      "How much does it cost to work with a Medicare agent in Bayonne?",
    answer:
      "Nothing. Licensed Medicare brokers are paid by insurance carriers, not by you. My consultations are free, and you pay the same premium whether you enroll directly or through a broker.",
  },
  {
    question:
      "What is the difference between a Medicare Supplement and a Medicare Advantage plan?",
    answer:
      "Medicare Supplement (Medigap) plans cover out-of-pocket costs left by Original Medicare, like the $1,676 Part A deductible. Medicare Advantage plans replace Original Medicare with a private plan that often includes dental, vision, and prescription drug coverage. Each has tradeoffs worth discussing based on your doctors and health needs.",
  },
  {
    question:
      "When can I enroll in a Medicare plan in Bayonne, NJ?",
    answer:
      "Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 each year. Medigap Open Enrollment is 6 months starting the month you turn 65 and have Part B. Special Enrollment Periods may apply if you lose employer coverage or move. Call to check your eligibility.",
  },
  {
    question:
      "Can a Bayonne Medicare agent help me switch plans?",
    answer:
      "Yes. If your current plan dropped a doctor, changed drug formularies, or raised costs, I can compare alternatives and help you switch during the appropriate enrollment window.",
  },
];

export default function MedicareInsuranceAgentsBayonneNJ() {
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
          Medicare Insurance Agents in Bayonne, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Insurance Agents in Bayonne, New Jersey — Licensed Broker Serving Hudson County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-bayonne-new-jersey.webp"
        alt="medicare insurance agents in bayonne new jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare insurance agents in Bayonne, New Jersey give you a direct line to someone who knows the local plan options and can compare them side by side. I'm Anthony Orner, a licensed independent Medicare broker serving Bayonne and Hudson County. My consultations are always free.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Bayonne residents work with an independent Medicare broker
        </h2>
        <p className="text-gray-700 mb-2">
          Captive agents represent one carrier. I represent you. As an independent broker, I compare plans from multiple insurers so you see the full picture before choosing.
        </p>
        <p className="text-gray-700">
          Bayonne residents rely on CarePoint Health at Bayonne Medical Center and providers across Jersey City and Hoboken. I check which plans keep your doctors in-network and flag potential gaps before you enroll.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement and Advantage plans available in 07002
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Covers gaps in Original Medicare. Plan G is the most popular option in NJ. You keep any doctor who accepts Medicare. Rates vary by carrier and age.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original Medicare. Many plans in Hudson County include dental, vision, hearing, and Part D drug coverage with $0 monthly premiums.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Standalone coverage that pairs with Original Medicare and Medigap. Formularies change yearly, so review your drugs each fall.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony Orner helps Bayonne Medicare beneficiaries
        </h2>
        <p className="text-gray-700 mb-2">
          I sit down with you (by phone, video, or in person) and review what you have now. We look at your prescriptions, your doctors, and your budget. Then I show you every plan that fits.
        </p>
        <p className="text-gray-700">
          No sales pitch. If your current plan is the best option, I'll tell you. If a carrier drops your hospital from its network or a plan changes its drug formulary, I'll reach out before it catches you off guard.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Network changes and provider access in Hudson County
        </h2>
        <p className="text-gray-700 mb-2">
          Carriers and hospital systems renegotiate contracts every year. Some New Jersey residents have been blindsided when a major health system stopped accepting their insurance. That kind of disruption is stressful and expensive.
        </p>
        <p className="text-gray-700">
          I monitor network changes for my clients. If your plan's provider network shifts, we talk about alternatives before your coverage lapses.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key enrollment dates for Bayonne residents
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Turning 65:</strong> Your Medigap Open Enrollment lasts 6 months starting the month you turn 65 and enroll in Part B. This is your best shot at guaranteed-issue rates.
          </li>
          <li>
            <strong>Annual Enrollment:</strong> October 15 through December 7 for Medicare Advantage and Part D changes.
          </li>
          <li>
            <strong>Special Enrollment:</strong> Losing employer coverage, moving, or other qualifying events open a window outside regular enrollment periods.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          The Part B late enrollment penalty adds 10% to your premium for every 12-month period you delayed. Don't guess on timing. Call me.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Schedule a free Medicare consultation from Bayonne
        </h2>
        <p className="text-gray-700 mb-2">
          One call. No obligation. I'll answer your questions, run plan comparisons, and help you understand what you're actually paying for. Most conversations take about 20 minutes.
        </p>
        <p className="text-gray-700">
          Whether you're new to Medicare or reviewing a plan that's changed on you, I'm here to help.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a licensed Bayonne Medicare broker today
        </p>
        <p className="text-3xl font-bold mb-4">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
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
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Hudson County
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D in New Jersey
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Getting Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Bayonne residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}