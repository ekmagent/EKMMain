import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for heart disease patients | Free Plan Matching | MedicareYourself",
  description:
    "Medicare broker for heart disease patients matching you to plans that cover cardiac rehab, cardiologists, and prescriptions. Anthony Orner, licensed NJ broker. Free.",
  openGraph: {
    title:
      "medicare broker for heart disease patients | Free Plan Matching | MedicareYourself",
    description:
      "Medicare broker for heart disease patients matching you to plans that cover cardiac rehab, cardiologists, and prescriptions. Anthony Orner, licensed NJ broker. Free.",
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
      item: "https://medicareyourself.com/medicare-guides",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-heart-disease-patients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. My service is free to you. I'm compensated by the insurance carriers, and you pay the same premium whether you enroll through me or directly with the company. There's no fee, no obligation, and no catch.",
  },
  {
    question:
      "Does Medicare cover cardiac rehabilitation?",
    answer:
      "Yes. Medicare Part B covers both regular and intensive cardiac rehabilitation programs if you've had a heart attack, heart failure, coronary artery bypass surgery, angioplasty/stenting, heart valve repair or replacement, or a heart transplant. Programs include supervised exercise, education, and counseling.",
  },
  {
    question:
      "Should heart disease patients choose Medicare Advantage or a Supplement?",
    answer:
      "It depends on your treatment needs, medication costs, and how often you see specialists. Medicare Advantage plans cap your annual out-of-pocket costs but may require referrals and prior authorizations. Supplements like Plan G give you broader provider access with more predictable costs. I can compare both based on your specific cardiac history.",
  },
  {
    question:
      "What preventive heart screenings does Medicare cover?",
    answer:
      "Medicare Part B covers cardiovascular screening blood tests once every five years and cardiovascular behavioral therapy to help manage heart disease risk. These preventive services are covered at no additional cost as long as your doctor accepts Medicare assignment.",
  },
];

export default function MedicareBrokerHeartDiseasePatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Heart Disease Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Heart Disease Patients: Plans That Cover the Full Picture, Not Just the Diagnosis
      </h1>

      <Image
        src="/images/medicare-broker-for-heart-disease-patients.webp"
        alt="medicare broker for heart disease patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-4">
        A Medicare broker for heart disease patients does more than compare premiums. I look at your cardiologist network, your medication list, your rehab needs, and the prior authorization policies that could delay the care you can't afford to wait for. My name is Anthony Orner, and I match people with cardiac histories to plans that actually work for them - at no cost.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why choosing the wrong plan is so costly with heart disease
        </h2>
        <p className="mb-3">
          Heart disease doesn't send one bill. It sends dozens. Cardiologist visits, imaging, lab work, cardiac rehab sessions, Tier 3 and Tier 4 medications, maybe an emergency procedure you didn't see coming. One person I spoke with had a heart attack, three surgeries, and six weeks of rehab - the kind of event that can mean tens of thousands out of pocket on the wrong plan.
        </p>
        <p>
          The wrong plan isn't always the cheapest one. It's the one that requires prior authorization for an echocardiogram and delays your care by months. Or the one that quietly drops your cardiologist from the network mid-year.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Cardiac rehab, specialists, and prescriptions - what to look for in a plan
        </h2>
        <p className="mb-3">
          Medicare Part B covers both standard and intensive cardiac rehabilitation if you've had a heart attack, heart failure, bypass surgery, angioplasty, stenting, valve surgery, or a heart transplant. But how much you pay for those sessions depends on your plan.
        </p>
        <p className="mb-3">Here's what I check for every cardiac patient:</p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>Whether your cardiologist and cardiac rehab facility are in-network</li>
          <li>Prior authorization requirements for imaging and procedures</li>
          <li>Part D formulary coverage for blood thinners, statins, beta-blockers, and newer cardiac drugs</li>
          <li>Annual out-of-pocket maximums that protect you if something serious happens</li>
          <li>Specialist referral requirements that could slow down care</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage when you have a cardiac history
        </h2>
        <p className="mb-3">
          With Original Medicare and a Supplement like Plan G, you pay the $283 Part B deductible and that's essentially it. No networks, no referrals, no prior auth headaches. One beneficiary who had Plan G when a massive cardiac event hit paid under $300 in medical costs on a $1.2 million total bill.
        </p>
        <p className="mb-3">
          Medicare Advantage plans cap your yearly out-of-pocket spending and often include Part D drug coverage. But they use provider networks, and some require prior authorization for procedures and diagnostic tests. For someone with active cardiac care, a delayed authorization can mean a delayed diagnosis.
        </p>
        <p>
          Neither is universally better. It depends on your doctors, your drugs, and how frequently you need specialist care. That's exactly what I help you figure out.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Preventive heart screenings Medicare already covers
        </h2>
        <p className="mb-3">
          Medicare Part B covers cardiovascular screening blood tests once every five years and cardiovascular behavioral therapy at no additional cost when your doctor accepts assignment. These aren't extras - they're built into your coverage.
        </p>
        <p>
          Many people with heart disease don't realize these screenings exist until after a cardiac event. I make sure you know what's available before you need it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          The daily realities most insurance content ignores
        </h2>
        <p className="mb-3">
          You know what it's like to get winded walking to the mailbox. To feel tightness in your chest and wonder if this is the time you should call someone. To quietly stop doing the things you used to enjoy because your body set new limits.
        </p>
        <p>
          Your coverage shouldn't add to that weight. It shouldn't make you fight for an approved test or scramble when your PCP gets switched without warning. I've heard too many stories of people turned away from scheduled procedures because of insurance paperwork. That's the kind of problem I work to prevent before enrollment, not after.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How I match you to the right plan
        </h2>
        <p className="mb-3">
          I start with your doctors, your prescriptions, and your cardiac history. Then I compare every available plan in your area - Supplement and Advantage - against those specifics. I'll show you real costs, real network access, and real formulary coverage so you can decide with clarity, not anxiety.
        </p>
        <p>
          The call is free. There's no obligation. And I'm a licensed broker in NJ, not a call center.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a broker who understands cardiac care coverage.
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          . No cost. No pressure.
        </p>
      </section>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G - What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap - How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D - Understanding Your Drug Coverage Options
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Find a Licensed Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}