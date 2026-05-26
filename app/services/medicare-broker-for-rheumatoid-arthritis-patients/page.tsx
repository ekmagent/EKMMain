import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for rheumatoid arthritis patients | Free Plan Comparison | MedicareYourself",
  description:
    "Compare Medicare plans that cover RA biologics, infusions & rheumatology visits. Broker Anthony Orner reviews your options free — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-rheumatoid-arthritis-patients" },
  openGraph: {
    title:
      "Medicare broker for rheumatoid arthritis patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for rheumatoid arthritis patients in NJ. Anthony Orner compares plans covering biologics, injections, and PT visits. Free consultation.",
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
      name: "Medicare Broker for Rheumatoid Arthritis Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-rheumatoid-arthritis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Rheumatoid Arthritis Patients Who Need a Plan That Fights Alongside Them",
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
    question: "Does Medicare cover biologics for rheumatoid arthritis?",
    answer:
      "Yes. Biologics administered by infusion (like Remicade or Orencia) are typically covered under Medicare Part B. Self-injected biologics (like Humira or Enbrel) fall under Part D. Your out-of-pocket cost depends heavily on which plan you choose and which coverage phase you're in.",
  },
  {
    question:
      "Can I get a Medigap plan with a pre-existing condition like RA?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), insurance carriers cannot deny you or charge more because of rheumatoid arthritis. Outside that window, medical underwriting applies in most states, and RA could result in a denial or higher premiums.",
  },
  {
    question:
      "Is Medicare Advantage or a Medigap supplement better for RA patients?",
    answer:
      "It depends on your treatment plan. Medicare Advantage may offer lower premiums and bundled benefits, but prior authorizations and network restrictions can delay access to specialists or biologics. A Medigap supplement with a standalone Part D plan often gives more flexibility, especially if you see multiple specialists or need infusion therapy.",
  },
  {
    question: "How do I lower my biologic medication costs on Medicare?",
    answer:
      "Check whether your biologic is covered under Part B (infusion) or Part D (self-injection), compare Part D formularies carefully, look into the Medicare Prescription Payment Plan that spreads costs across 12 months, and ask about manufacturer patient assistance programs. A broker can help you identify the plan with the lowest total annual cost for your specific medications.",
  },
];

export default function MedicareBrokerForRheumatoidArthritisPatients() {
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
          Medicare Broker for Rheumatoid Arthritis Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-snug">
        Medicare Broker for Rheumatoid Arthritis Patients Who Need a Plan That
        Fights Alongside Them
      </h1>

      <Image
        src="/images/medicare-broker-for-rheumatoid-arthritis-patients.webp"
        alt="Medicare broker for rheumatoid arthritis patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare broker for rheumatoid arthritis patients does something most
        plan comparison tools can't: match your specific medications, infusion
        schedule, and specialist needs to the plan that actually covers them. I'm
        Anthony Orner, a licensed broker in New Jersey, and I do this work every
        day for people managing RA on Medicare.
      </p>
      <p className="text-lg mb-6">
        Your alarm goes off and your brain is ready, but your hands and knees
        have other plans. The plan you pick shouldn't make life harder.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Biologics, joint injections, and the real cost of RA treatment
        </h2>
        <p className="mb-3">
          Biologics like Remicade, Humira, Enbrel, Cimzia, and Orencia are often
          the backbone of RA treatment. How Medicare covers them depends on
          delivery method:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-2">
          <li>
            <strong>Part B</strong> covers biologics given by infusion at a
            doctor's office or infusion center. You typically pay 20% of the
            Medicare-approved amount after meeting the $283 annual Part B
            deductible.
          </li>
          <li>
            <strong>Part D</strong> covers self-injected biologics you take at
            home. Out-of-pocket costs vary widely by plan and can run $500 to
            $1,800+ per month in the wrong plan.
          </li>
          <li>
            <strong>Cortisone and joint injections</strong> are generally covered
            under Part B when medically necessary.
          </li>
        </ul>
        <p>
          Wrong plan choice can mean hundreds of dollars per fill. I compare
          formularies side by side so you don't get surprised by a phone call
          from the specialty pharmacy.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How RA affects Medigap underwriting and enrollment timing
        </h2>
        <p className="mb-3">
          If you're turning 65, you have a one-time, 6-month Medigap Open
          Enrollment Period. During this window, no carrier can deny you or raise
          your rate because of rheumatoid arthritis. Miss it, and medical
          underwriting kicks in. RA on your records can mean a flat-out denial
          for supplemental coverage.
        </p>
        <p>
          If you're under 65 on Medicare through disability, Medigap access
          varies by state. In New Jersey, disabled Medicare beneficiaries do have
          some protections, but the rules are specific. Call me and I'll walk you
          through what applies to your situation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. supplement when you're on specialty medications
        </h2>
        <p className="mb-3">
          Medicare Advantage plans bundle everything and often carry low
          premiums. That sounds great until you need a prior authorization for
          your biologic and it takes weeks. Or your rheumatologist isn't in
          network.
        </p>
        <p className="mb-3">
          A Medigap plan (like Plan G) paired with a standalone Part D plan
          gives you freedom to see any specialist who accepts Medicare. No
          referrals. No network headaches. The tradeoff is higher monthly
          premiums.
        </p>
        <p>
          For RA patients who rely on consistent access to specific medications
          and providers, that flexibility often pays for itself.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The Part D coverage gap and how to plan around it
        </h2>
        <p className="mb-3">
          If your biologic is covered under Part D, you'll move through coverage
          phases fast. Once you and your plan spend a combined amount on covered
          drugs, you enter the catastrophic phase where your costs drop
          significantly. The Medicare Prescription Payment Plan can spread your
          out-of-pocket costs across 12 months instead of hitting you all at
          once.
        </p>
        <p>
          I calculate your estimated annual drug costs across multiple Part D
          plans so you can see the real numbers before you enroll.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          PT visits, specialist access, and the details that add up
        </h2>
        <p className="mb-3">
          RA care isn't just medication. Physical therapy, occupational therapy,
          and regular rheumatology visits are part of staying functional. Medicare
          Part B covers outpatient PT and OT when medically necessary.
        </p>
        <p>
          On Medicare Advantage, you'll likely have copays for each visit and may
          need referrals. With Original Medicare and a supplement, there's no
          visit limit and no copay after the plan pays its share. When you're
          going to PT twice a week, those copays stack up fast.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Find coverage that keeps up with a condition that never takes a day off
        </h2>
        <p className="mb-3">
          RA doesn't pause for enrollment season. But the decisions you make
          during enrollment follow you all year. I'll review your current
          medications, your providers, and your budget, then show you exactly
          which plans cover what you need at the lowest total cost.
        </p>
        <p>No cost for the consultation. No pressure. Just clarity.</p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a broker who understands RA treatment costs.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
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
              href="/services/medicare-broker-for-people-on-disability"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Disability Patients
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D and Specialty Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap Supplement
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
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/coverage/infusion-pumps-supplies" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Infusion coverage</a> and <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Part D prescription drug coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
      </section>
    </main>
  );
}