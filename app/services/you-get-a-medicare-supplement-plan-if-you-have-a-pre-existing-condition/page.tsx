import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "You Get a Medicare Supplement Plan If You Have a Pre-Existing Condition | Free Guidance | MedicareYourself",
  description:
    "Yes, you can get a Medicare Supplement plan with a pre-existing condition during Medigap Open Enrollment. Call 855-559-1700 for free expert guidance today.",
  alternates: { canonical: "https://medicareyourself.com/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition" },
  openGraph: {
    title:
      "You Get a Medicare Supplement Plan If You Have a Pre-Existing Condition | Free Guidance | MedicareYourself",
    description:
      "You get a Medicare Supplement plan if you have a pre-existing condition during the right enrollment window. Learn guaranteed-issue rules and avoid waiting periods.",
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
      name: "Pre-Existing Conditions & Medicare Supplement Plans",
      item: "https://medicareyourself.com/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "You Can Get a Medicare Supplement Plan If You Have a Pre-Existing Condition — Here's How",
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
    question:
      "Can I get a Medicare Supplement plan with diabetes or heart disease?",
    answer:
      "Yes. During your Medigap Open Enrollment Period (6 months starting the month you turn 65 and are enrolled in Part B), insurers must accept you regardless of diabetes, heart disease, or any other pre-existing condition. They cannot charge you more or deny coverage during this window.",
  },
  {
    question:
      "What happens if I missed my Medigap Open Enrollment Period and have a pre-existing condition?",
    answer:
      "Outside your open enrollment window, insurers in most states can use medical underwriting. That means they can deny you, charge more, or impose a waiting period of up to 6 months for pre-existing conditions. However, certain federal guaranteed-issue rights or state protections may still apply. Call us to check your specific situation.",
  },
  {
    question:
      "Can I switch from a Medicare Advantage plan back to a Medigap plan if I have pre-existing conditions?",
    answer:
      "It depends on timing. If you've had your Medicare Advantage plan for less than 12 months and want to switch back, you may have a guaranteed-issue right to buy a Medigap plan without medical underwriting. After 12 months, most states allow underwriting, which makes approval harder with pre-existing conditions.",
  },
  {
    question:
      "Do all states handle Medigap pre-existing conditions the same way?",
    answer:
      "No. Some states like New York, Connecticut, and Massachusetts require insurers to sell Medigap plans year-round without medical underwriting. Other states follow only the federal minimum rules. Your state matters a lot, so it's worth confirming the rules where you live.",
  },
];

export default function PreExistingConditionMedigapPage() {
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
          Pre-Existing Conditions & Medicare Supplement Plans
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        You Can Get a Medicare Supplement Plan If You Have a Pre-Existing
        Condition — Here's How
      </h1>

      <Image
        src="/images/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition.webp"
        alt="you get a medicare supplement plan if you have a pre-existing condition"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full h-auto"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        You get a Medicare Supplement plan if you have a pre-existing condition
        when you apply during the right enrollment window. The key is timing.
        Miss the window and insurers can ask health questions, charge more, or
        turn you down entirely.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I talk to people every week who switched to a $0 Advantage plan, then
        want their Medigap coverage back after health problems develop. Let me
        walk you through the rules so you don't get stuck.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed-issue rights that skip medical underwriting entirely
        </h2>
        <p className="text-gray-700 mb-2">
          Federal law gives you guaranteed-issue rights under specific
          circumstances. When these apply, no insurer can deny you or add
          surcharges for pre-existing conditions.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>You lose employer or union group health coverage</li>
          <li>Your Medicare Advantage plan leaves your area or shuts down</li>
          <li>Your Medigap carrier goes bankrupt</li>
          <li>
            You tried a Medicare Advantage plan and want to return within 12
            months
          </li>
          <li>Your plan violated its contract with you</li>
        </ul>
        <p className="text-gray-700">
          These triggers are federal. They apply in every state, regardless of
          your health history.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your Medigap open enrollment period is your strongest protection
        </h2>
        <p className="text-gray-700 mb-2">
          The 6-month Medigap Open Enrollment Period starts the month you turn 65
          and are enrolled in Part B. During this window, every Medigap insurer
          must accept you at their standard rate. Diabetes, cancer history, heart
          conditions, COPD: none of it matters.
        </p>
        <p className="text-gray-700">
          This is a one-time right under federal rules. Once it closes, it
          doesn't come back in most states. That's why I tell people to apply 6
          months before their Part B start date to lock everything in on time.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What happens if you apply outside a protected enrollment period
        </h2>
        <p className="text-gray-700 mb-2">
          Outside your open enrollment or a guaranteed-issue situation, insurers
          in most states can use medical underwriting. They'll review your health
          history and can deny your application outright.
        </p>
        <p className="text-gray-700">
          This is what catches people off guard. Someone drops their Plan G for a
          $0 Advantage plan, develops Type 2 diabetes, then discovers they can't
          get Medigap back. The broker who sold them the Advantage plan may not
          have mentioned that risk.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          States with extra consumer protections for pre-existing conditions
        </h2>
        <p className="text-gray-700 mb-2">
          A handful of states go beyond federal minimums. New York, Connecticut,
          and Massachusetts require Medigap insurers to accept applicants
          year-round without medical underwriting. Other states like California,
          Oregon, and Missouri offer additional enrollment windows or protections.
        </p>
        <p className="text-gray-700">
          Rules vary by state, so call us to confirm what applies where you live.
          This single detail can make the difference between getting approved and
          getting denied.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Pre-existing condition waiting periods: how they work and how to avoid
          them
        </h2>
        <p className="text-gray-700 mb-2">
          If you're approved outside open enrollment, some insurers impose a
          waiting period of up to 6 months. During that time, the plan won't
          cover costs related to conditions you were treated for in the 6 months
          before enrollment.
        </p>
        <p className="text-gray-700">
          You can shorten or eliminate this waiting period if you had prior
          creditable coverage (employer plan, Medicaid, Medicare Advantage, or
          another Medigap plan) with no gap longer than 63 days. Keep records of
          your previous coverage. They matter.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Don't let the wrong advice lock you out
        </h2>
        <p className="text-gray-700 mb-2">
          The biggest mistake I see is people making plan switches without
          understanding what they're giving up. Medigap plans are standardized.
          A Plan G from one carrier covers the same things as Plan G from
          another. But your ability to get that plan depends entirely on when you
          apply and what state you live in.
        </p>
        <p className="text-gray-700">
          If you have a pre-existing condition and want a Medicare Supplement
          plan, call before you assume you can't get one. There may be a path
          you don't know about.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Have a pre-existing condition? Let's find your options.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for free, no-pressure help.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers in 2026
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Choose
            </Link>
          </li>
          <li>
            <Link
              href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
              className="text-blue-600 hover:underline"
            >
              Federal Guaranteed-Issue Rights for Medicare Supplement Plans
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-buy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — When to buy a Medigap policy</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/guaranteed-issue-rights" rel="noopener noreferrer" target="_blank" className="underline">Medigap guaranteed-issue rights</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free one-on-one Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify Medigap rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/shipindex.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/eshmedsupp.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance — Medicare Supplement page</a> or contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/ins_ombudsman.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify Medigap rules with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">local SHIP counselor</a> for free, unbiased help.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-specific help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">State help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap guidance.</div>
            <div className="text-sm text-gray-600 mt-4">State help: Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling in your state.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific help, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
      </section>

      <p className="text-sm text-gray-400 mt-10">
        Written by Anthony Orner, Licensed Medicare Broker | Last updated July
        2025
      </p>
    </main>
  );
}