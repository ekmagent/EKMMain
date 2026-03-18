import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "what is the best medicare plan for dialysis? | Free Broker Consultation | MedicareYourself",
  description:
    "What is the best Medicare plan for dialysis? Compare Medigap and Advantage coverage for ESRD patients, including drug costs and out-of-pocket caps.",
  openGraph: {
    title:
      "what is the best medicare plan for dialysis? | Free Broker Consultation | MedicareYourself",
    description:
      "What is the best Medicare plan for dialysis? Compare Medigap and Advantage coverage for ESRD patients, including drug costs and out-of-pocket caps.",
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
      item: "https://www.medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Medicare Plan for Dialysis",
      item: "https://www.medicareyourself.com/services/what-is-the-best-medicare-plan-for-dialysis",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Is the Best Medicare Plan for Dialysis? Comparing Original Medicare, Medigap, and Advantage",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Which Medicare plan covers dialysis?",
    answer:
      "Original Medicare (Parts A and B) covers both in-center and home dialysis. Part A covers inpatient dialysis during hospital stays, while Part B covers outpatient dialysis treatments. You can also pair Original Medicare with a Medigap plan or enroll in a Medicare Advantage plan that includes dialysis coverage.",
  },
  {
    question:
      "Can I enroll in Medicare Advantage if I have ESRD?",
    answer:
      "Yes. Since 2021, people with End-Stage Renal Disease can enroll in Medicare Advantage plans during the Annual Enrollment Period (October 15 through December 7). Before 2021, ESRD patients were largely locked out of Advantage plans.",
  },
  {
    question:
      "Does Medicare cover the drugs I need while on dialysis?",
    answer:
      "Medicare Part B covers certain dialysis drugs administered during treatment, including injectable EPO. Oral medications like phosphate binders may fall under Part D. Formularies vary by plan, so check your specific Part D or Advantage plan's drug list.",
  },
  {
    question:
      "How much does dialysis cost with Original Medicare?",
    answer:
      "Under Part B, you pay 20% of the Medicare-approved amount for outpatient dialysis after meeting the $257 annual Part B deductible (2026). That 20% can add up to thousands per year, which is why many dialysis patients add a Medigap plan to cover that coinsurance.",
  },
];

export default function BestMedicarePlanForDialysis() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Best Medicare Plan for Dialysis</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        What Is the Best Medicare Plan for Dialysis? Comparing Original Medicare, Medigap, and Advantage
      </h1>

      <Image
        src="/images/what-is-the-best-medicare-plan-for-dialysis.webp"
        alt="what is the best medicare plan for dialysis"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        What is the best Medicare plan for dialysis? The answer depends on your age, how you qualified for Medicare, and how much out-of-pocket cost you can handle. I'm Anthony Orner, a licensed Medicare broker, and I walk ESRD patients through this decision regularly.
      </p>
      <p className="mb-6">
        There's no single "best" plan for everyone on dialysis. But once you understand how the pieces fit together, the right choice gets much clearer.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare Parts A and B cover in-center and home dialysis
        </h2>
        <p className="mb-2">
          Original Medicare is the foundation. Part B covers outpatient dialysis, whether you receive it at a dialysis center or at home. Part A kicks in if you need dialysis during an inpatient hospital stay.
        </p>
        <p>
          Under Part B, you pay 20% of the Medicare-approved amount after your $257 annual deductible (2026). For three treatments per week, that 20% coinsurance can easily reach $10,000 or more per year. That's why most dialysis patients don't stop at Original Medicare alone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap Plan G vs. Medicare Advantage for ESRD patients in 2025
        </h2>
        <p className="mb-3">
          This is the core decision. Here's a quick comparison:
        </p>
        <table className="w-full border-collapse border border-gray-300 mb-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Medigap Plan G</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Medicare Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Dialysis coinsurance</td>
              <td className="border border-gray-300 px-4 py-2">Covered at 100% after Part B deductible</td>
              <td className="border border-gray-300 px-4 py-2">Copays or coinsurance vary by plan</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Provider network</td>
              <td className="border border-gray-300 px-4 py-2">Any provider accepting Medicare</td>
              <td className="border border-gray-300 px-4 py-2">Network restrictions apply</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Out-of-pocket max</td>
              <td className="border border-gray-300 px-4 py-2">Effectively $257/year (Part B deductible only)</td>
              <td className="border border-gray-300 px-4 py-2">Plans must cap at a set maximum</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Monthly premium</td>
              <td className="border border-gray-300 px-4 py-2">Varies by carrier and location</td>
              <td className="border border-gray-300 px-4 py-2">Many $0 premium plans available</td>
            </tr>
          </tbody>
        </table>
        <p>
          Medigap Plan G gives you predictable costs. You pay the Part B deductible, and Plan G covers nearly everything else. For frequent dialysis, that predictability matters a lot.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Drug coverage considerations: EPO, phosphate binders, and Part D
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Injectable EPO given during dialysis is covered under Part B, not Part D.</li>
          <li>Oral medications like phosphate binders and certain anti-rejection drugs typically fall under Part D.</li>
          <li>Medicare Advantage plans often bundle Part D. With Medigap, you need a standalone Part D plan.</li>
          <li>Formularies differ between plans. Always check that your specific drugs are covered before enrolling.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Enrollment rules for dialysis patients under 65 and over 65
        </h2>
        <p className="mb-2">
          You can qualify for Medicare at any age with ESRD if you meet work history requirements through Social Security or the Railroad Retirement Board. Your spouse's or parent's work history may also qualify you.
        </p>
        <p>
          If you're under 65 with ESRD, Medigap guaranteed issue rights vary by state. Some states require carriers to sell Medigap to under-65 Medicare beneficiaries, but many do not. Call me to check what's available in your state.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage is now open to ESRD patients
        </h2>
        <p className="mb-2">
          Before 2021, ESRD patients were largely blocked from joining Medicare Advantage. That changed with the 21st Century Cures Act. Now you can enroll during the Annual Enrollment Period (October 15 through December 7).
        </p>
        <p>
          Advantage plans can be attractive if you want $0 premiums and bundled drug coverage. But check the plan's dialysis copay structure carefully. A low premium means nothing if your per-treatment costs are high.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          My recommendation for most dialysis patients
        </h2>
        <p className="mb-2">
          If you can get Medigap Plan G and a standalone Part D plan, that's usually the strongest setup. Your out-of-pocket exposure drops to almost nothing for dialysis itself. You also keep full freedom to use any Medicare-accepting dialysis center.
        </p>
        <p>
          If Medigap isn't available to you (common for under-65 ESRD patients in certain states), a well-structured Medicare Advantage plan with a reasonable out-of-pocket maximum is your next best option. Either way, don't guess. Let me run the numbers for your situation.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-semibold mb-2">
          Need help choosing the right Medicare plan for dialysis?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="text-blue-700 font-bold hover:underline">
            855-559-1700
          </a>{" "}
          for a free consultation, or{" "}
          <Link href="/contact" className="text-blue-700 font-bold hover:underline">
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/services/medigap-plan-g" className="text-blue-700 hover:underline">
              Medigap Plan G: Full Coverage Breakdown
            </Link>
          </li>
          <li>
            <Link href="/services/medicare-advantage-plans" className="text-blue-700 hover:underline">
              Medicare Advantage Plans: How They Work
            </Link>
          </li>
          <li>
            <Link href="/services/medicare-part-d" className="text-blue-700 hover:underline">
              Medicare Part D: Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link href="/services/medicare-enrollment-guide" className="text-blue-700 hover:underline">
              Medicare Enrollment Guide: Key Dates and Deadlines
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}