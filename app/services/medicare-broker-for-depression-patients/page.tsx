import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for depression patients | Free Mental Health Plan Review | MedicareYourself",
  description:
    "Medicare broker for depression patients — Anthony Orner finds NJ plans covering therapy, psychiatry, and antidepressants. Free review, call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-depression-patients" },
  openGraph: {
    title:
      "Medicare broker for depression patients | Free Mental Health Plan Review | MedicareYourself",
    description:
      "Medicare broker for depression patients — Anthony Orner matches you with plans covering therapy, psychiatry, and medications in NJ. Free, no-pressure review.",
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
      name: "Medicare Broker for Depression Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-depression-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Depression Patients — Plans That Support Ongoing Mental Health Treatment",
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
    question: "Can you get Medicare coverage for depression?",
    answer:
      "Yes. Medicare Part B covers outpatient mental health services including therapy with psychologists, clinical social workers, psychiatrists, and psychiatric nurse practitioners. You pay 20% of the Medicare-approved amount after meeting the $283 annual Part B deductible (2026). Part D covers most antidepressant medications.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker like Anthony Orner is paid by the insurance carriers, not by you. There's no fee for plan reviews, comparisons, or enrollment help. The plans and premiums are the same whether you enroll directly or through a broker.",
  },
  {
    question:
      "Why do so many therapists not accept Medicare?",
    answer:
      "Medicare reimbursement rates for mental health providers are lower than private insurance, so many therapists opt out. A broker can help you find plans with broader behavioral health networks or telehealth options that connect you with providers who do accept your coverage.",
  },
  {
    question:
      "Does Medicare Advantage or Original Medicare work better for depression treatment?",
    answer:
      "It depends on your situation. Some Medicare Advantage plans offer larger mental health provider networks and telehealth benefits. Original Medicare with a Supplement gives you access to any provider nationwide who accepts Medicare. A broker can compare both options based on your specific doctors and medications.",
  },
];

export default function MedicareBrokerForDepressionPatients() {
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
          Medicare Broker for Depression Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Depression Patients — Plans That Support Ongoing
        Mental Health Treatment
      </h1>

      <Image
        src="/images/medicare-broker-for-depression-patients.webp"
        alt="Medicare broker for depression patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare broker for depression patients means someone who actually understands what your treatment looks like day to day: the therapy appointments, the psychiatrist visits, the medications you can't afford to lose access to. I'm Anthony Orner, a licensed broker in NJ, and I help people match their mental health treatment to a plan that won't fight them at every step.
      </p>
      <p className="text-lg mb-6">
        You shouldn't have to call 15 therapists just to find one who takes your insurance. Let me check your coverage before that happens.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers therapy, psychiatry, and antidepressants
        </h2>
        <p className="mb-2">
          Part B covers outpatient mental health services: visits with psychiatrists, clinical psychologists, licensed clinical social workers, and psychiatric nurse practitioners. After your $283 annual deductible (2026), you pay 20% of the Medicare-approved amount.
        </p>
        <p>
          Part D handles antidepressants like SSRIs, SNRIs, and medications like bupropion. But not every Part D plan covers the same drugs at the same tier. That's where plan-level detail matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The real problem: finding therapists who accept Medicare
        </h2>
        <p className="mb-2">
          Medicare says therapy is covered. But low reimbursement rates mean many therapists opt out entirely. People call provider after provider and hit dead ends, especially when mobility issues or energy levels make in-person visits difficult.
        </p>
        <p>
          I look at which plans in your area have actual behavioral health networks with availability, including telehealth options. Coverage on paper means nothing if no one near you accepts it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage: which handles mental health costs better
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Original Medicare + Supplement:</strong> See any psychiatrist or therapist nationwide who accepts Medicare. A Plan G supplement covers your 20% coinsurance, so therapy visits cost $0 after the $283 deductible.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Some plans offer broader behavioral health networks, built-in telehealth, and lower or $0 copays for mental health visits. Trade-off: you're limited to in-network providers.
          </li>
        </ul>
        <p className="mt-2">
          The right choice depends on whether your current providers accept Medicare, how often you're seen, and what medications you take.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D formulary checks for common depression medications
        </h2>
        <p className="mb-2">
          Drug tiers vary by plan. A medication that costs $15/month on one Part D plan might cost $60 on another. I run formulary checks for your exact prescriptions before recommending anything.
        </p>
        <p>
          If you're on a combination that works, the last thing you need is a plan that requires prior authorization or forces a switch to a generic you've already tried.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Telehealth access matters more than most guides mention
        </h2>
        <p>
          When depression makes it hard to leave the house, telehealth isn't a convenience. It's how you keep showing up for treatment. Some Advantage plans include telehealth behavioral health at no extra cost. I'll flag which ones do in your area.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a personalized plan review around your treatment plan
        </h2>
        <p className="mb-2">
          I'll look at your therapists, psychiatrist, medications, and how often you're seen. Then I'll show you which plans actually support that routine without surprise costs or network gaps.
        </p>
        <p>
          No fee. No pressure. Just a straight answer about what your options look like.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 underline font-bold"
          >
            855-559-1700
          </a>{" "}
          for a free mental health plan review
        </p>
        <p className="text-gray-700 mb-4">
          Anthony Orner, Licensed Medicare Broker — NJ
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
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
              Medicare Supplement vs. Medicare Advantage
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/mental-health-care-outpatient" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov — Outpatient Mental Health Coverage</a> and <a href="https://www.medicare.gov/coverage/mental-health-care-inpatient" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov — Inpatient Mental Health Care</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free one-on-one Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}