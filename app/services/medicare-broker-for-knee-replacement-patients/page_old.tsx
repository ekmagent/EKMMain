import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for knee replacement patients | Free Pre-Surgery Review | MedicareYourself",
  description:
    "Medicare broker for knee replacement patients helping you pick the right plan before surgery. Anthony Orner compares rehab and hospital coverage — free review.",
  openGraph: {
    title:
      "Medicare broker for knee replacement patients | Free Pre-Surgery Review | MedicareYourself",
    description:
      "Medicare broker for knee replacement patients helping you pick the right plan before surgery. Anthony Orner compares rehab and hospital coverage — free review.",
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
      name: "Medicare Broker for Knee Replacement Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-knee-replacement-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Knee Replacement Patients: Plan the Coverage Before You Plan the Surgery",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Does Medicare pay 100% of knee replacement surgery?",
    answer:
      "No. Under Original Medicare, Part A covers the hospital stay after you meet the $1,676 deductible per benefit period. Part B covers surgeon fees at 80% after your $283 annual deductible - you owe the remaining 20%. A Medigap plan like Plan G can cover most or all of those out-of-pocket costs.",
  },
  {
    question: "Will Medicare pay for knee replacement after age 70?",
    answer:
      "Yes. Medicare has no age limit for knee replacement surgery. The procedure must be deemed medically necessary by your doctor, but age alone is never a reason for denial.",
  },
  {
    question:
      "Does Medicare cover physical therapy at home after knee replacement?",
    answer:
      "If you qualify for Medicare home health services, Part A covers in-home physical therapy at no cost to you. If you receive outpatient PT instead, Part B covers it at 80% after your deductible - meaning you'll owe 20% per session unless you have supplemental coverage.",
  },
  {
    question: "Should I get a Medigap plan before knee replacement surgery?",
    answer:
      "If you're in your Medigap Open Enrollment Period (6 months starting the month you turn 65 and have Part B), that's your best window - guaranteed issue, no health questions. If that window has passed, options are more limited and may involve medical underwriting. Call us to review your situation before scheduling surgery.",
  },
];

export default function MedicareBrokerForKneeReplacementPatients() {
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
          Medicare Broker for Knee Replacement Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Knee Replacement Patients: Plan the Coverage
          Before You Plan the Surgery
        </h1>
        <Image
          src="/images/medicare-broker-for-knee-replacement-patients.webp"
          alt="Medicare broker for knee replacement patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for knee replacement patients does one thing most
        surgeons' offices won't: figure out what your plan actually covers before
        you're in a hospital gown. I'm Anthony Orner, a licensed Medicare broker,
        and I help people understand exactly what they'll owe for surgery, rehab,
        and recovery.
      </p>
      <p className="text-lg mb-6">
        The surgery itself isn't where people get blindsided. It's the weeks
        after - skilled nursing, physical therapy, the 20% coinsurance that
        stacks up fast.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Original Medicare covers for total knee replacement
        </h2>
        <p className="mb-2">
          Medicare Part A covers your inpatient hospital stay once you meet the
          $1,676 deductible per benefit period. Part B covers the surgeon, the
          anesthesiologist, and outpatient services at 80% after a $283 yearly
          deductible.
        </p>
        <p>
          Your knee replacement must be deemed medically necessary by your
          doctor. Age is not a factor - Medicare covers this surgery whether
          you're 66 or 86.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Skilled nursing and rehab: where the real costs add up
        </h2>
        <p className="mb-2">
          If you need a skilled nursing facility after surgery, Medicare covers
          days 1 through 20 with zero coinsurance. Days 21 through 100 cost you
          $209.50 per day. After day 100, you pay everything.
        </p>
        <p>
          Outpatient PT runs roughly $150 per session. At two sessions a week for
          8 to 10 weeks, you're looking at 20% of $2,400 to $3,000 under
          Original Medicare alone. That math catches people off guard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Advantage for major orthopedic surgery
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Plan G</strong> covers the Part A deductible, the
            Part B 20% coinsurance, and skilled nursing coinsurance. Your only
            out-of-pocket cost is the $283 Part B deductible. One person on
            Reddit had Plan G and was surprised to learn that's genuinely all
            they owed.
          </li>
          <li>
            <strong>Medicare Advantage</strong> plans cap your yearly
            out-of-pocket spending, but often require prior authorization, network
            surgeons, and specific rehab facilities. Check the plan's maximum
            out-of-pocket carefully - it can run $3,000 to $8,000+.
          </li>
          <li>
            <strong>Original Medicare with no supplement</strong> leaves you
            exposed to the Part A deductible, 20% of all Part B charges, and up
            to $209.50/day in skilled nursing costs. For a major surgery, that
            adds up quickly.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing your plan change matters
        </h2>
        <p className="mb-2">
          If both knees need replacing, you're looking at two separate benefit
          periods - potentially two Part A deductibles in the same year or across
          two calendar years. Which plan you have and when your surgery falls can
          shift your total cost by thousands.
        </p>
        <p>
          If you're still in your Medigap Open Enrollment window, you can lock
          in a supplement with no health questions. Outside that window, medical
          underwriting may apply, and a pending surgery can complicate approval.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Home health vs. outpatient PT after surgery
        </h2>
        <p className="mb-2">
          If you qualify for Medicare home health services, Part A covers a nurse
          and physical therapist coming to your house at no cost. That's a real
          benefit many people don't know about until after they're home and
          struggling.
        </p>
        <p>
          Outpatient therapy falls under Part B - 80% covered, 20% on you. The
          distinction between home health and outpatient PT changes your bill
          significantly. I'll help you understand which you're likely to qualify
          for.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free knee replacement coverage review
        </h2>
        <p className="mb-2">
          Before you lock in a surgery date, let's look at what your current
          Medicare plan actually covers - and what gaps exist. I'll compare your
          options, run the numbers on rehab and skilled nursing costs, and tell
          you straight whether a plan change makes sense.
        </p>
        <p>No cost. No obligation. Just clarity before a big decision.</p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands surgical coverage
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/get-a-free-quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/skilled-nursing-facility-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Skilled Nursing Facility Coverage Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-outpatient-costs"
              className="text-blue-600 hover:underline"
            >
              Understanding Part B Costs for Outpatient Services
            </Link>
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Written by Anthony Orner, Licensed Medicare Broker | EasyKind Medicare
      </p>
    </main>
  );
}