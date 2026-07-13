import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Compare and Enroll in Plan G Online | No Paperwork Needed | MedicareYourself",
  description:
    "Compare every NJ carrier's Plan G rate side by side and enroll online in minutes with a licensed broker. No fees, no pressure. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/compare-and-enroll-in-plan-g-online" },
  openGraph: {
    title:
      "Compare and Enroll in Plan G Online | No Paperwork Needed | MedicareYourself",
    description:
      "Compare and enroll in Plan G online through a licensed NJ broker. See every carrier's rate side by side and finish enrollment in minutes. No fees, ever.",
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
      name: "Compare and Enroll in Plan G Online",
      item: "https://medicareyourself.com/services/compare-and-enroll-in-plan-g-online",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Compare and Enroll in Plan G Online With a Licensed NJ Broker",
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
    question: "Can I compare and enroll in Plan G online without meeting anyone in person?",
    answer:
      "Yes. You can review every NJ carrier's Plan G rate, ask questions by phone or email, and complete your application electronically. Nothing needs to happen in person unless you prefer it.",
  },
  {
    question: "Does enrolling through a broker cost more than going directly to the carrier?",
    answer:
      "No. The carrier pays the broker's commission. Your premium is the same whether you enroll direct, through a website, or through a licensed broker like EasyKind Medicare.",
  },
  {
    question: "What does Plan G cover that Original Medicare doesn't?",
    answer:
      "Plan G covers the Part A deductible ($1,676 per benefit period in 2026), Part B coinsurance (typically 20% of approved charges), skilled nursing facility coinsurance ($209.50/day for days 21-100), the first 3 pints of blood, hospice coinsurance, and Part B excess charges. The only gap: you pay the $283 annual Part B deductible yourself.",
  },
  {
    question: "When is the best time to enroll in Plan G?",
    answer:
      "During your Medigap Open Enrollment Period, which is the 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge more for pre-existing conditions. Outside that window, you'll face medical underwriting in most states.",
  },
];

export default function CompareAndEnrollInPlanGOnline() {
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
        <span className="text-gray-700">Compare and Enroll in Plan G Online</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Compare and Enroll in Plan G Online With a Licensed NJ Broker
      </h1>

      <Image
        src="/images/compare-and-enroll-in-plan-g-online.webp"
        alt="compare and enroll in plan g online"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Compare and enroll in Plan G online without printing a single form. I'll pull every NJ carrier's current rate, lay them side by side on your screen, and walk you through the application by phone while you complete it from your kitchen table.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The whole process takes about 15 minutes. Most people finish before their coffee gets cold.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How the online Plan G enrollment process works
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Call or request a quote. I ask your zip code, date of birth, and when your Part B starts.</li>
          <li>I send you a rate comparison showing every carrier available in your NJ county.</li>
          <li>You pick a carrier. I email you the application link or pre-fill it for you.</li>
          <li>You e-sign. The carrier confirms coverage, usually within a few business days.</li>
        </ol>
        <p className="text-gray-700 mt-3">
          No fax machine. No scanning. No driving anywhere.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What you can compare before you pick a carrier
        </h2>
        <p className="text-gray-700 mb-2">
          Every Plan G in New Jersey covers the exact same benefits. That's federal law. The only real differences between carriers are:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Monthly premium (rates vary by carrier, age, and zip code)</li>
          <li>Rate increase history over the past 5-10 years</li>
          <li>Household or non-smoker discounts</li>
          <li>Claims reputation and customer service ratings</li>
        </ul>
        <p className="text-gray-700 mt-3">
          I show you all of this. Two carriers might differ by $40/month for identical coverage. That's $480/year you keep.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Plan G actually covers
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G picks up nearly every cost Original Medicare leaves behind:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Part A deductible: $1,676 per benefit period (2026)</li>
          <li>Part B coinsurance: the 20% Medicare doesn't pay</li>
          <li>Skilled nursing coinsurance: $209.50/day, days 21-100</li>
          <li>Part B excess charges, first 3 pints of blood, hospice coinsurance</li>
          <li>365 additional hospital days after Medicare benefits run out</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Your only out-of-pocket cost: the $283 annual Part B deductible. That's it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Documents you need to enroll (just two things)
        </h2>
        <p className="text-gray-700">
          Your Medicare card (or your Part A/B effective dates) and a bank account or card for the first premium payment. That's the full list. No medical records, no doctor's letters. During your Medigap Open Enrollment Period, there's no health questionnaire either.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why your Medigap open enrollment window matters
        </h2>
        <p className="text-gray-700 mb-2">
          You get 6 months of guaranteed issue starting the month you turn 65 and have Part B. During this window, no carrier in NJ can turn you down or charge extra for health conditions.
        </p>
        <p className="text-gray-700">
          Miss it, and you'll face medical underwriting. I've talked to too many people who switched to an Advantage plan, regretted it, and couldn't get back on Plan G because of a health condition. Lock in your rate while you can.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why enrolling through a broker costs you nothing extra
        </h2>
        <p className="text-gray-700 mb-2">
          The insurance carrier pays my commission. Your premium is identical whether you call the carrier yourself or work with me. The difference: I show you every option, not just one company's product.
        </p>
        <p className="text-gray-700">
          I'm Anthony Orner, a licensed NJ Medicare broker with EasyKind Medicare. I don't charge fees. I don't push one carrier. I just show you the numbers and let you decide.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to see your Plan G rates?
        </p>
        <p className="mb-4">
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
        <p className="text-sm opacity-90">
          No pressure. No fees. Just the numbers you need.
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Medigap Plan Fits You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/cost"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Rates in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/switch-carriers"
              className="text-blue-600 hover:underline"
            >
              Switching From Medicare Advantage to Medigap
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official references: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits" rel="noopener noreferrer" target="_blank" className="underline">Compare Medigap Plan Benefits on Medicare.gov</a> and <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}