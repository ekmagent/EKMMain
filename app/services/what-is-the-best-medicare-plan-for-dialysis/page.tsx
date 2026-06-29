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
    "What is the best Medicare plan for dialysis? Compare Medigap and Advantage for ESRD coverage, networks, and cost caps. Free broker help: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/what-is-the-best-medicare-plan-for-dialysis" },
  openGraph: {
    title:
      "what is the best medicare plan for dialysis? | Free Broker Consultation | MedicareYourself",
    description:
      "What is the best Medicare plan for dialysis? Compare Medigap and Advantage for ESRD, drug costs, and out-of-pocket caps. Free consultation: 855-559-1700.",
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
      name: "Best Medicare Plan for Dialysis",
      item: "https://medicareyourself.com/services/what-is-the-best-medicare-plan-for-dialysis",
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
    question: "Which insurance is best for dialysis patients?",
    answer:
      "For most dialysis patients, Original Medicare (Parts A and B) paired with a Medigap plan like Plan G offers the most predictable costs. Medigap covers the 20% coinsurance on dialysis that Part B leaves behind. Medicare Advantage can work too, but check the plan's dialysis provider network and annual out-of-pocket maximum carefully.",
  },
  {
    question:
      "Can I get Medicare before 65 if I need dialysis?",
    answer:
      "Yes. If you have End-Stage Renal Disease (ESRD) and meet Social Security work requirements, you can qualify for Medicare at any age. Coverage typically starts the fourth month after dialysis begins, though it can start sooner if you train for home dialysis or get a transplant.",
  },
  {
    question:
      "Does Medicare pay 100% of dialysis costs?",
    answer:
      "No. Medicare Part B covers 80% of approved dialysis charges after the $283 annual deductible (2026). You're responsible for the remaining 20% coinsurance unless you have Medigap, Medicaid, or another secondary insurance to pick up that share.",
  },
  {
    question:
      "Can ESRD patients enroll in Medicare Advantage in 2025?",
    answer:
      "Yes. Since the 21st Century Cures Act took full effect in 2021, people with ESRD can enroll in Medicare Advantage plans during open enrollment (October 15 through December 7). Previously, most ESRD patients were locked out of Advantage plans.",
  },
];

export default function BestMedicarePlanForDialysis() {
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
        <span className="text-gray-700">Best Medicare Plan for Dialysis</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-snug">
        What Is the Best Medicare Plan for Dialysis? Comparing Original Medicare, Medigap, and Advantage
      </h1>

      <Image
        src="/images/what-is-the-best-medicare-plan-for-dialysis.webp"
        alt="what is the best medicare plan for dialysis"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        What is the best Medicare plan for dialysis? The short answer: Original Medicare plus a Medigap supplement gives most ESRD patients the lowest, most predictable out-of-pocket costs. But your age, budget, and drug needs can shift the math.
      </p>
      <p className="mb-6">
        Three treatments a week, every week. You already carry enough. Let's cut through the confusion so you know exactly what each option covers and what it costs.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare Parts A and B cover in-center and home dialysis
        </h2>
        <p className="mb-2">
          Medicare Part B covers 80% of approved charges for both in-center and home dialysis after you meet the $283 annual deductible (2026). That includes the dialysis itself, lab tests, and certain supplies.
        </p>
        <p>
          Part A covers dialysis only if you're an inpatient in a hospital. For the vast majority of patients going to a clinic three times a week, Part B does the heavy lifting. The 20% coinsurance you owe on every session is the real cost problem.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap Plan G vs. Medicare Advantage for ESRD patients in 2025
        </h2>
        <p className="mb-2">
          With Original Medicare alone, that 20% coinsurance on dialysis adds up fast. At roughly $6,000/month in total charges, you could owe over $1,200 monthly out of pocket.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medigap Plan G</strong> covers that 20% coinsurance with no network restrictions. You pay a monthly premium (rates vary by carrier and age), but your dialysis cost becomes predictable.
          </li>
          <li>
            <strong>Medicare Advantage</strong> now accepts ESRD patients. Plans include annual out-of-pocket maximums, but you must use in-network dialysis providers. Check that your clinic is covered before enrolling.
          </li>
        </ul>
        <p>
          If you value provider freedom and hate surprises, Medigap wins. If you want lower premiums and can confirm your clinic is in-network, Advantage is worth reviewing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Drug coverage considerations: EPO, phosphate binders, and Part D
        </h2>
        <p className="mb-2">
          Drugs administered during dialysis (like EPO injections) are covered under Part B, not Part D. You won't need a separate drug plan for those.
        </p>
        <p>
          But oral medications you take at home, such as phosphate binders or blood pressure drugs, require a standalone Part D plan or an Advantage plan with built-in drug coverage. Compare formularies carefully. Not all Part D plans cover the same kidney medications at the same tier.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Enrollment rules for dialysis patients under 65 and over 65
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Under 65 with ESRD:</strong> You can qualify for Medicare regardless of age if you meet Social Security work history requirements. Coverage usually starts the fourth month of dialysis. Home dialysis training can trigger earlier coverage.
          </li>
          <li>
            <strong>Over 65:</strong> You're already Medicare-eligible. If you develop ESRD while on Medicare, your existing coverage applies immediately.
          </li>
          <li>
            <strong>Gap risk:</strong> Some patients face a coverage gap between starting dialysis and Medicare kicking in. If you're aging off a parent's plan or between jobs, Medicaid or marketplace insurance may bridge that window.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the 20% coinsurance catches people off guard
        </h2>
        <p className="mb-2">
          Many dialysis patients don't realize they owe anything until a bill shows up months later. Some clinics absorb costs temporarily or bill secondary insurance without the patient knowing. That silence feels fine until coverage changes or a claim gets denied.
        </p>
        <p>
          Know who's paying your 20%. If you can't answer that question today, call us. We'll help you figure it out before it becomes a problem.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to choose the right plan for your situation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm your dialysis center accepts Original Medicare and/or is in-network for any Advantage plan you're considering.</li>
          <li>Calculate your total monthly cost under each option: premiums + coinsurance + drug copays.</li>
          <li>If you're under 65, check your state's Medigap rules. Medigap access for under-65 ESRD patients varies by state.</li>
          <li>Review Part D formularies for any home medications you take daily.</li>
        </ul>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Need help comparing plans for dialysis coverage?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          to speak with a licensed broker. No cost, no obligation.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better?
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
              href="/services/what-is-the-best-medicare-plan-for-dialysis"
              className="text-blue-600 hover:underline"
            >
              ESRD Medicare Eligibility: How to Qualify
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/publications/10128-medicare-coverage-of-kidney-dialysis-kidney-transplant-services.pdf" rel="noopener noreferrer" target="_blank" className="underline">Medicare Coverage of Kidney Dialysis & Kidney Transplant Services (Medicare.gov PDF)</a> and <a href="https://www.medicare.gov/coverage/dialysis-services-supplies" rel="noopener noreferrer" target="_blank" className="underline">Dialysis Services & Supplies coverage details</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents: free counseling is available through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free local help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}