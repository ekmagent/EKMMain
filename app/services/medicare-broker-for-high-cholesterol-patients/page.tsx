import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for high cholesterol patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for high cholesterol patients in NJ. Anthony Orner finds plans covering statins, labs, and cardiology visits. Free consultation.",
  openGraph: {
    title:
      "Medicare broker for high cholesterol patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for high cholesterol patients in NJ. Anthony Orner finds plans covering statins, labs, and cardiology visits. Free consultation.",
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
      name: "Medicare Broker for High Cholesterol Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-high-cholesterol-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for High Cholesterol Patients Who Need Coverage That Matches Their Commitment",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/medicare-broker-for-high-cholesterol-patients",
};

const faqs = [
  {
    question: "Does Medicare cover cholesterol medication?",
    answer:
      "Medicare Part D covers most statin medications, but your specific drug, dosage, and pharmacy affect out-of-pocket costs. Formularies change every year, so it's worth reviewing your Part D plan annually to make sure your statin stays covered at the lowest tier possible.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans and premiums are the same whether you use a broker or go direct.",
  },
  {
    question: "Why would Medicare not cover a lipid panel?",
    answer:
      "Medicare covers one cardiovascular screening blood test (including a lipid panel) every five years at no cost. If your doctor orders additional lipid panels for monitoring, those are billed as diagnostic tests under Part B. You'll pay 20% coinsurance after the $283 annual deductible unless you have supplemental coverage.",
  },
  {
    question:
      "Can I be denied a Medigap plan because of high cholesterol in NJ?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), no carrier can deny you or charge more due to high cholesterol. Outside that window, medical underwriting applies in most states, and a cholesterol diagnosis could affect approval or pricing. Timing matters - call to discuss your situation.",
  },
];

export default function MedicareBrokerHighCholesterol() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Medicare Broker for High Cholesterol Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Broker for High Cholesterol Patients Who Need Coverage That
        Matches Their Commitment
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-high-cholesterol-patients.webp"
        alt="Medicare broker for high cholesterol patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for high cholesterol patients can mean the difference
        between a plan that covers your statins and labs smoothly and one that
        leaves you guessing at every appointment. You're doing the work -
        watching your diet, taking the medication, showing up for bloodwork. Your
        Medicare plan should do its part too.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help
        people with ongoing conditions like high cholesterol find plans that
        actually fit how they use healthcare.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why statin users need more than a default Medicare plan
        </h2>
        <p className="text-gray-700 mb-2">
          If you're on atorvastatin, rosuvastatin, or another statin, your Part
          D formulary matters. A lot. The same drug can sit on Tier 1 with one
          carrier and Tier 3 with another - that's a real cost difference every
          month.
        </p>
        <p className="text-gray-700">
          Some people assume all Part D plans cover the same drugs the same way.
          They don't. And formularies change annually, which means a plan that
          worked last year might cost you more this year.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Lab work, specialist visits, and what your plan should cover
        </h2>
        <p className="text-gray-700 mb-2">
          Managing cholesterol means regular lipid panels, sometimes every few
          months while your doctor adjusts dosages. Medicare covers one
          cardiovascular screening every five years for free. Beyond that, lipid
          panels are diagnostic tests billed under Part B.
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>
            Part B covers 80% of diagnostic labs after the $283 annual
            deductible
          </li>
          <li>
            A Medigap plan (like Plan G) picks up that remaining 20% - no
            surprise bills
          </li>
          <li>
            Cardiology referrals and follow-ups also fall under Part B
            coinsurance
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How high cholesterol affects Medigap underwriting in NJ
        </h2>
        <p className="text-gray-700 mb-2">
          During your Medigap Open Enrollment Period - 6 months starting the
          month you're 65 and enrolled in Part B - carriers can't deny you or
          charge more for high cholesterol. That's guaranteed issue. No health
          questions.
        </p>
        <p className="text-gray-700">
          Outside that window, medical underwriting applies. A cholesterol
          diagnosis on medication is common enough that many carriers will still
          approve you, but timing and carrier selection matter. This is exactly
          where a broker saves you headaches.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The hidden cost of picking the wrong Part D plan
        </h2>
        <p className="text-gray-700 mb-2">
          People in online forums talk about this constantly - they picked a plan
          based on the premium, then found out their statin required prior
          authorization or moved to a higher cost tier mid-year. Some switch
          medications to avoid costs, which creates its own problems.
        </p>
        <p className="text-gray-700">
          I check your specific medications against every available Part D plan
          in your zip code. You see the actual annual cost, not just the monthly
          premium.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What I look at when building your plan
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Which Part D plans cover your statins at the lowest tier</li>
          <li>Whether your cardiologist or PCP accepts the plan's network</li>
          <li>
            How a Medigap plan eliminates the 20% coinsurance on labs and
            specialist visits
          </li>
          <li>
            Your total annual cost - premiums, deductibles, copays combined
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a plan that covers every lab draw and medication adjustment
        </h2>
        <p className="text-gray-700">
          You shouldn't have to worry whether asking your doctor a question at
          your physical will trigger an extra charge, or whether your next lipid
          panel is going to cost more than expected. The right Medicare setup
          handles this. I'll show you exactly what each plan covers and what
          you'll pay - before you enroll.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to compare plans that cover your cholesterol care?
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline hover:text-blue-600"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-bold underline hover:text-blue-600"
          >
            get a free quote online
          </Link>
          . No cost, no obligation.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in New Jersey - What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              How Medicare Part D Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Working with a Medicare Broker in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment - When Timing Matters Most
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}