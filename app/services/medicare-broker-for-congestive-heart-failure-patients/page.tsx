import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for congestive heart failure patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for congestive heart failure patients. Anthony Orner compares plans covering cardiac rehab, CHF meds & hospital stays. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-congestive-heart-failure-patients" },
  openGraph: {
    title:
      "Medicare broker for congestive heart failure patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for congestive heart failure patients in NJ. Anthony Orner finds plans covering cardiac rehab, meds, and hospital stays. Free consultation.",
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
      name: "Medicare Broker for Congestive Heart Failure Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-congestive-heart-failure-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Congestive Heart Failure Patients Who Refuse to Accept Coverage Gaps",
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
      "Does Original Medicare cover cardiac rehab for congestive heart failure?",
    answer:
      "Yes. Medicare Part B covers cardiac rehabilitation programs when ordered by your doctor after a CHF diagnosis. You'll pay 20% coinsurance after meeting the $283 annual Part B deductible, unless you have supplemental coverage that picks up that cost.",
  },
  {
    question:
      "Is Medigap or Medicare Advantage better for heart failure patients?",
    answer:
      "It depends on your situation. Medigap plans like Plan G give you predictable costs and let you see any Medicare-accepting provider, which matters when you need specialists or hospital transfers. Medicare Advantage plans may offer lower premiums but can limit your network and carry higher out-of-pocket costs during hospitalizations. Call to discuss your specific medications and care team.",
  },
  {
    question:
      "Can I switch Medicare plans if my current one doesn't cover my heart failure medications?",
    answer:
      "You can switch Part D or Medicare Advantage plans during Open Enrollment (October 15 through December 7). Certain qualifying events, like moving out of your plan's service area or losing other coverage, may also trigger a Special Enrollment Period. Anthony can review your current drug list and find plans with better formulary coverage.",
  },
  {
    question: "How much could a CHF hospitalization cost on Original Medicare?",
    answer:
      "Each benefit period starts with a $1,676 Part A deductible in 2026. If you're readmitted within 60 days, that's the same benefit period. But a new admission after 60 days means another $1,676. Skilled nursing facility stays cost $209.50/day for days 21 through 100. Without supplemental coverage, these costs add up fast with CHF.",
  },
];

export default function MedicareBrokerCHFPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Broker for Congestive Heart Failure Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Congestive Heart Failure Patients Who Refuse to
        Accept Coverage Gaps
      </h1>

      <Image
        src="/images/medicare-broker-for-congestive-heart-failure-patients.webp"
        alt="Medicare broker for congestive heart failure patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for congestive heart failure patients does one thing
        most agents won't: sit down with your medication list, your cardiologist
        referrals, and your hospital history, then find the plan that actually
        holds up when your heart doesn't cooperate. I'm Anthony Orner, a
        licensed broker in NJ, and I do this work every week.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        CHF changes your life overnight. Your coverage should change with it.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The real cost of CHF: hospitalizations, medications, and monitoring
        </h2>
        <p className="text-gray-700 mb-2">
          One hospital stay costs $1,676 in Part A deductible alone in 2026. CHF
          patients average multiple admissions per year. If you end up in a
          skilled nursing facility for rehab, days 21 through 100 run $209.50
          per day out of your pocket without supplemental coverage.
        </p>
        <p className="text-gray-700">
          Then there are the meds. Entresto, Jardiance, and other Tier 4 or 5
          drugs can cost hundreds monthly under the wrong Part D plan. Add
          cardiac rehab sessions, echocardiograms, and regular cardiology
          visits, and you're looking at real money.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why most Medicare plans fall short for heart failure patients
        </h2>
        <p className="text-gray-700 mb-2">
          Most people pick a Medicare plan based on premium alone. That works
          fine if you're healthy. With CHF, the wrong plan can cost you tens of
          thousands in a single bad month.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Narrow networks that exclude your cardiologist or cardiac center</li>
          <li>Prior authorization delays on heart failure medications</li>
          <li>High copays for specialist visits you need every 4 to 6 weeks</li>
          <li>No coverage for out-of-area hospital transfers during emergencies</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Medicare Advantage when you have CHF
        </h2>
        <p className="text-gray-700 mb-2">
          A Medigap Plan G paired with a standalone Part D plan gives you the
          most freedom. You pay the $283 Part B deductible, and after that,
          Plan G covers your 20% coinsurance on every Medicare-approved service.
          Any hospital. Any specialist. No network restrictions.
        </p>
        <p className="text-gray-700">
          Medicare Advantage can work for some CHF patients, but you need to
          check the maximum out-of-pocket, confirm your entire care team is
          in-network, and verify your meds are on formulary. One person I spoke
          with saved over a million dollars on a massive cardiac event because
          they'd enrolled in Original Medicare with a supplement. The wrong
          Advantage plan in that same situation could have meant six-figure bills.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony matches CHF patients with plans that actually work
        </h2>
        <p className="text-gray-700 mb-2">
          I start with your full picture: current meds, doctors, hospitals, and
          how often you're being seen. Then I compare every available plan in
          your area against that reality.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Run your prescriptions through every Part D formulary</li>
          <li>Verify your cardiologist and hospital are in-network</li>
          <li>Calculate your true annual cost, not just the premium</li>
          <li>Flag plans with prior auth requirements on your cardiac meds</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When to call (and when it's urgent)
        </h2>
        <p className="text-gray-700 mb-2">
          If you're turning 65, your Medigap Open Enrollment Period is the
          6 months starting the month you turn 65 and are enrolled in Part B.
          During this window, no carrier can deny you or charge more because of
          your CHF diagnosis. Miss it, and guaranteed-issue options shrink
          dramatically.
        </p>
        <p className="text-gray-700">
          Already on Medicare and unhappy with your plan? Open Enrollment runs
          October 15 through December 7. But don't wait until October to start
          the conversation. Call now so we're ready when the window opens.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your heart condition changed everything except your right to good coverage
        </h2>
        <p className="text-gray-700">
          Going from 18 holes to barely making it up the stairs is hard enough.
          You shouldn't also have to fight your insurance company for coverage on
          the meds and rehab keeping you alive. That's what I'm here for. The
          call is free, there's no obligation, and I'll tell you exactly where
          your current plan falls short.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a broker who understands CHF coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free plan review.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
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
              href="/services/free-medicare-broker-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiac-rehabilitation-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Cardiac Rehabilitation Coverage</a> and <a href="https://www.medicare.gov/coverage/heart-disease-screenings" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Heart Disease Screenings</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}