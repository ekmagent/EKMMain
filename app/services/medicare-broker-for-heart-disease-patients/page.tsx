import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for heart disease patients | Free Help Finding the Right Plan | MedicareYourself",
  description:
    "Medicare broker for heart disease patients — compare plans covering cardiac rehab, cardiologists & drugs. Free help from Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients" },
  openGraph: {
    title:
      "medicare broker for heart disease patients | Free Help Finding the Right Plan | MedicareYourself",
    description:
      "Medicare broker for heart disease patients matching you to plans covering cardiac rehab, specialists, and costly prescriptions. Call Anthony Orner — it's free.",
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
      name: "Medicare Broker for Heart Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Heart Disease Patients: Plans That Cover the Full Picture, Not Just the Diagnosis",
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
    "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans and premiums are the same whether you enroll directly or through a broker.",
  },
  {
    question: "Which type of Medicare plan is best for heart patients?",
    answer:
      "It depends on your doctors, medications, and how often you need specialist care. Original Medicare with a Medigap supplement (like Plan G) gives you the widest access to cardiologists and hospitals with predictable costs. Medicare Advantage can work if your providers are in-network and the plan's maximum out-of-pocket fits your budget. A broker can compare both options based on your specific cardiac care needs.",
  },
  {
    question:
      "Does Medicare cover cardiac rehabilitation?",
    answer:
      "Yes. Medicare Part B covers cardiac rehab programs for qualifying conditions including heart attack, coronary artery bypass surgery, stable angina, heart valve repair or replacement, and heart or heart-lung transplant. You'll typically pay 20% of the Medicare-approved amount after the Part B deductible ($283 in 2026), unless your Medigap plan covers that share.",
  },
  {
    question:
      "Can I switch Medicare plans if my heart condition worsens?",
    answer:
      "You can switch Medicare Advantage plans during the Open Enrollment Period (October 15 through December 7) or the Medicare Advantage Open Enrollment (January 1 through March 31). If you're on Original Medicare with a Medigap supplement, switching supplement carriers outside your Medigap Open Enrollment Period may require medical underwriting. Call us to review your options.",
  },
,
  {
    question: "Do Medicare Advantage plans cover heart medications?",
    answer:
      "Most Medicare Advantage plans include Part D prescription drug coverage, which typically covers common cardiac medications like statins, beta blockers, ACE inhibitors, and anticoagulants. However, each plan has its own formulary, tier structure, and preferred pharmacies. A broker can check that your specific heart medications are covered at the lowest possible cost before you enroll.",
  },
  {
    question: "Will Medicare cover my cardiologist visits and testing?",
    answer:
      "Medicare Part B covers medically necessary cardiologist visits, EKGs, stress tests, echocardiograms, and cardiac catheterization. You pay 20% of the Medicare-approved amount after meeting the $257 Part B deductible in 2026, unless you have a Medigap plan that covers that coinsurance. Medicare Advantage plans cover the same services but use copays and require in-network providers.",
  }
];

export default function MedicareBrokerHeartDiseasePatients() {
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
          Medicare Broker for Heart Disease Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Medicare Broker for Heart Disease Patients: Plans That Cover the Full Picture, Not Just the Diagnosis
      </h1>

      <Image
        src="/images/medicare-broker-for-heart-disease-patients.webp"
        alt="medicare broker for heart disease patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A medicare broker for heart disease patients looks at more than your diagnosis. I look at your cardiologist network, your medication tiers, your rehab schedule, and the costs that pile up when the wrong plan leaves gaps. I'm Anthony Orner, a licensed Medicare broker, and I do this for free.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        You already know the fatigue that hits after a short walk, the background worry every time your chest feels off. Your Medicare plan shouldn't add to that weight.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why heart disease makes choosing the wrong plan so costly
        </h2>
        <p className="text-gray-700 mb-2">
          Heart disease isn't one bill. It's an ongoing cycle of specialist visits, imaging, blood work, medication adjustments, and sometimes emergency procedures that cost six or seven figures. One real-world example: a single heart attack with three surgeries and weeks in cardiac ICU totaled over $1.2 million. The patient on the right Medigap plan paid roughly $257 for his Part B deductible plus monthly premiums.
        </p>
        <p className="text-gray-700">
          On the wrong plan, you'd face copays at every turn. The 2026 Part A deductible alone is $1,676 per benefit period, and skilled nursing coinsurance runs $209.50 per day for days 21 through 100.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Cardiac rehab, specialists, and prescriptions: what to look for in a plan
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Part B covers cardiac rehabilitation for qualifying conditions like heart attack, bypass surgery, stable angina, and valve repair. But coverage approval is only half the story. Here's what I check:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Is your cardiologist in-network (for Advantage plans)?</li>
          <li>Does the plan cover your cardiac rehab facility without prior authorization delays?</li>
          <li>Are your blood thinners, statins, or Tier 5 specialty drugs on the formulary at a price you can afford?</li>
          <li>Do you need referrals to see a specialist, or can you go directly?</li>
          <li>What's the actual out-of-pocket maximum if you need emergency surgery?</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Supplement vs. Advantage when you have a cardiac history
        </h2>
        <p className="text-gray-700 mb-2">
          Original Medicare plus a Medigap supplement (like Plan G) lets you see any cardiologist or hospital that accepts Medicare. No network restrictions, no referrals. After your $283 Part B deductible in 2026, Plan G covers the rest. That predictability matters when one event can generate dozens of separate bills.
        </p>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans often have lower premiums and may include drug coverage and extras. But they use provider networks, and out-of-pocket costs after a major cardiac event can reach $5,000 to $8,000 or more depending on the plan's maximum.
        </p>
        <p className="text-gray-700">
          Neither option is universally better. It depends on your doctors, your drugs, and how much financial uncertainty you can absorb. That's exactly what I help you figure out.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          You stopped doing the things you love. Your coverage shouldn't hold you back too.
        </h2>
        <p className="text-gray-700 mb-2">
          People with heart conditions quietly adjust their whole lives. You skip the walk, cancel the trip, avoid the grandkids' soccer game because you don't trust how you'll feel. That's hard enough.
        </p>
        <p className="text-gray-700">
          When your insurance creates its own set of worries, like surprise bills after a hospital stay or discovering your new medication isn't covered, it compounds everything. I match you to a plan that removes those variables so you can focus on the things that actually matter.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Preventive heart benefits Medicare already covers
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Part B includes heart-specific preventive screenings at no extra cost to you (with a doctor who accepts assignment):
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Cardiovascular screening blood tests once every five years</li>
          <li>Cardiovascular behavioral therapy to help reduce risk</li>
          <li>Annual wellness visits to monitor ongoing heart health</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Many people with heart disease don't realize these are covered. I make sure you know what you're entitled to and that your plan supports all of it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How to get started with a free plan review
        </h2>
        <p className="text-gray-700 mb-2">
          Bring me your medication list, your cardiologist's name, and any upcoming procedures. I'll compare Medigap supplements, Medicare Advantage plans, and Part D options side by side. No cost, no obligation.
        </p>
        <p className="text-gray-700">
          If you're turning 65, your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. That six-month window gives you guaranteed acceptance regardless of your heart condition. Apply up to six months early to lock in your rate. After that window closes, carriers can use medical underwriting and may charge more or deny coverage.
        </p>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands cardiac care costs.
        </p>
        <p className="text-3xl font-bold mb-4">
          <a href="tel:855-559-1700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D: Finding a Plan That Covers Your Medications
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/cardiac-rehabilitation-programs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Cardiac Rehabilitation Coverage</a> and <a href="https://www.medicare.gov/basics/costs/medicare-costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — 2026 Costs at a Glance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}