import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for high blood pressure patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for high blood pressure patients who need affordable medication coverage and fewer surprises. Anthony Orner reviews your plan for free.",
  openGraph: {
    title:
      "Medicare broker for high blood pressure patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for high blood pressure patients who need affordable medication coverage and fewer surprises. Anthony Orner reviews your plan for free.",
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
      name: "Medicare Broker for High Blood Pressure Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-high-blood-pressure-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for High Blood Pressure Patients — Coverage for the Full Picture, Not Just the Numbers",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker is paid by the insurance carrier, not by you. The plans cost the same whether you enroll directly or work with a broker. There's no fee for a consultation, plan comparison, or enrollment help.",
  },
  {
    question: "Does Medicare pay for high blood pressure medication?",
    answer:
      "Medicare Part D covers many blood pressure medications, including ACE inhibitors, ARBs, beta-blockers, and diuretics. The specific drugs covered and your copay depend on your plan's formulary. That's why reviewing your Part D plan each year matters - formularies change, and so do your costs.",
  },
  {
    question:
      "Can I switch Medicare plans if my blood pressure medication isn't covered?",
    answer:
      "During the Annual Enrollment Period (October 15 - December 7), you can switch to a Part D or Medicare Advantage plan that covers your medications at a lower cost. Outside of that window, you may qualify for a Special Enrollment Period if certain life changes apply.",
  },
  {
    question:
      "What preventive services does Medicare cover for high blood pressure?",
    answer:
      "Original Medicare covers blood pressure screenings, annual wellness visits, and cardiovascular disease risk reduction visits at no cost to you. Your doctor can use these visits to monitor your hypertension without triggering extra charges - as long as the visit stays within preventive care guidelines.",
  },
];

export default function MedicareBrokerHighBloodPressure() {
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
          Medicare Broker for High Blood Pressure Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-snug">
        Medicare Broker for High Blood Pressure Patients — Coverage for the Full
        Picture, Not Just the Numbers
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-high-blood-pressure-patients.webp"
        alt="Medicare broker for high blood pressure patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for high blood pressure patients does more than match
        you with a plan that covers lisinopril. I look at the full picture - your
        medications, your side effects, your labs, and what happens when your
        doctor adjusts the prescription mid-year.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey. I review
        plans for free, and I pay attention to the things most people overlook
        until they get the bill.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Part D formularies handle ACE inhibitors, ARBs, and combination
          meds
        </h2>
        <p className="mb-3">
          Your blood pressure medication might be covered on one Part D plan and
          cost three times as much on another. ACE inhibitors like lisinopril are
          usually on the lower tiers. ARBs like losartan can land on higher
          tiers depending on the carrier.
        </p>
        <p>
          Combination meds - where two drugs are in one pill - are often priced
          differently than taking each drug separately. I run your exact
          prescriptions through every available plan to find the lowest total
          cost, including premiums, copays, and the coverage gap.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Covering the side effects too: fatigue, dizziness, and medication
          adjustments
        </h2>
        <p className="mb-3">
          They call hypertension the silent killer. What nobody mentions is how
          loud the treatment can be. The fatigue. The dizziness when you stand
          up. The brain fog that makes you wonder if the medication is worth it.
        </p>
        <p>
          When your doctor switches you from one drug to another - and that
          happens more often than people expect - you need a plan where the
          replacement is also covered. I check formulary depth, not just whether
          your current prescription shows up on the list.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Preventive screenings and specialist visits Medicare includes for
          hypertension
        </h2>
        <p className="mb-3">
          Original Medicare covers blood pressure screenings, annual wellness
          visits, and cardiovascular risk reduction counseling at no cost to you.
          These are preventive services - no copay, no deductible.
        </p>
        <p>
          But here's what trips people up: if you mention a new symptom or ask
          about an unrelated problem during that visit, it can trigger a
          diagnostic billing code. Suddenly you owe money for what you thought
          was a free checkup. I help you understand what's covered so you're not
          blindsided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why your plan choice matters more when you take daily medication
        </h2>
        <p className="mb-3">
          If you take one or two blood pressure meds every day, drug costs add up
          fast. A $15/month copay difference is $180 a year. Multiply that by two
          or three prescriptions and the wrong plan quietly costs you hundreds.
        </p>
        <p>
          I compare plans using your pharmacy, your doses, and your doctor
          network - not just the plan's star rating or monthly premium.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Original Medicare with a supplement
        </h2>
        <p className="mb-3">
          Some Medicare Advantage plans include Part D drug coverage and extras
          like telehealth or gym memberships. But they also come with networks.
          If your cardiologist or internist isn't in network, you're starting
          over.
        </p>
        <p>
          Original Medicare with a Medigap plan gives you broader provider
          access but requires a separate Part D plan. There's no single right
          answer - it depends on your doctors, your medications, and how often
          you need specialist care.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free review from a broker who looks beyond the blood pressure
          cuff
        </h2>
        <p className="mb-3">
          You don't need someone who rushes through a plan comparison. You need
          someone who asks about your refill schedule, your side effects, and
          whether your doctor has been talking about changing your meds.
        </p>
        <p>
          That's what I do. Call me and I'll review your current plan, check your
          drug coverage, and tell you if there's a better fit. No cost, no
          pressure, no obligation.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands hypertension
          coverage.
        </p>
        <p className="text-lg mb-4">
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
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Explained: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-vs-medicare-advantage"
              className="text-blue-700 hover:underline"
            >
              Medigap vs. Medicare Advantage: Which Is Right for You?
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
          <li>
            <Link
              href="/medicare-guides/annual-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Medicare Annual Enrollment Period: Dates and What You Can Change
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}