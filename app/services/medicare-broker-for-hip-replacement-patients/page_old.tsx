import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for hip replacement patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for hip replacement patients comparing Medigap and Advantage plans to cut surgery costs. Anthony Orner offers free pre-surgery plan reviews.",
  openGraph: {
    title:
      "Medicare broker for hip replacement patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for hip replacement patients comparing Medigap and Advantage plans to cut surgery costs. Anthony Orner offers free pre-surgery plan reviews.",
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
      name: "Medicare Broker for Hip Replacement Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-hip-replacement-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Hip Replacement Patients — Minimize Out-of-Pocket Surgery Costs",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. My plan comparisons and consultations are completely free, whether you enroll through me or not.",
  },
  {
    question:
      "What percentage of a hip replacement does Medicare cover?",
    answer:
      "Medicare covers medically necessary hip replacement surgery. Part A covers the hospital stay after you meet the $1,676 deductible. Part B covers surgeon fees at 80% after the $283 annual deductible. You're responsible for the remaining 20% of Part B charges unless you have supplemental coverage.",
  },
  {
    question:
      "Should I switch plans before scheduling hip surgery?",
    answer:
      "Ideally, yes. If you're on Original Medicare without a supplement, your 20% coinsurance on surgeon fees alone can be thousands of dollars. Reviewing your plan before surgery - not after - gives you the best chance to reduce out-of-pocket costs. Call me for a free pre-surgery plan review.",
  },
  {
    question:
      "Does Medicare cover rehab after hip replacement?",
    answer:
      "Medicare Part A covers up to 100 days in a skilled nursing facility after a qualifying hospital stay. Days 1-20 have $0 coinsurance. Days 21-100 cost $209.50 per day in 2026 unless you have a Medigap plan that covers it. Many hip replacement surgeries are now outpatient, which can affect SNF coverage eligibility.",
  },
];

export default function MedicareBrokerHipReplacementPatients() {
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
          Medicare Broker for Hip Replacement Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Hip Replacement Patients — Minimize Out-of-Pocket Surgery Costs
        </h1>
        <Image
          src="/images/medicare-broker-for-hip-replacement-patients_photo.webp"
          alt="Medicare broker for hip replacement patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for hip replacement patients does one thing before your surgery date: find the plan that leaves the least money on the table. I'm Anthony Orner, a licensed Medicare broker, and I help people facing joint replacement understand exactly what they'll owe - then fix the gaps before the surgeon picks up a scalpel.
      </p>
      <p className="text-lg mb-6">
        The wrong plan can cost you thousands more than it should. The right one can bring your out-of-pocket down to almost nothing.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare pays for hip replacement surgery and rehab
        </h2>
        <p className="mb-2">
          Medicare covers medically necessary hip replacement. But "covers" doesn't mean "pays for everything."
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Part A covers the hospital stay after a $1,676 deductible per benefit period</li>
          <li>Part B covers surgeon fees, anesthesia, and outpatient physical therapy at 80% after the $283 annual deductible</li>
          <li>Skilled nursing facility rehab: $0 for days 1-20, then $209.50/day for days 21-100</li>
        </ul>
        <p>
          That 20% Part B coinsurance on a $30,000-$50,000 surgery adds up fast. For many people, it's $2,000 or more out of pocket with Original Medicare alone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medigap plans eliminate your Part A and Part B gaps
        </h2>
        <p className="mb-2">
          A Medigap plan like Plan G covers your Part A deductible, your Part B coinsurance (the 20%), and skilled nursing facility coinsurance. After paying the $283 Part B deductible, you'd owe $0 for the surgery itself.
        </p>
        <p>
          If you're still in your Medigap Open Enrollment Period - the 6 months starting when you're 65 and enrolled in Part B - you qualify for guaranteed issue. No health questions. That matters when you already have a hip condition on your medical record.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage prior authorization for joint replacement
        </h2>
        <p className="mb-2">
          Many Medicare Advantage plans require prior authorization before hip surgery. That's an extra step, and sometimes a delay. Some plans also restrict which surgeons and facilities you can use.
        </p>
        <p>
          Advantage plans do cap your annual out-of-pocket, which can be helpful. But the copays for inpatient surgery, rehab days, and follow-up visits vary widely between plans. I compare these details side-by-side so you see the real numbers before you commit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The rehab question no one explains clearly
        </h2>
        <p className="mb-2">
          Here's what catches people off guard: many hip replacements are now done outpatient. That can affect whether Medicare covers a skilled nursing facility stay, since traditional SNF coverage requires a qualifying inpatient hospital stay of 3 or more days.
        </p>
        <p>
          If you live alone, have stairs to climb, or don't have a caregiver at home, this is a real concern - not an abstract one. I help you understand your rehab coverage options before surgery, not scramble for answers after.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why reviewing your plan before surgery matters more than after
        </h2>
        <p className="mb-2">
          People often call me after surgery when the bills arrive. By then, the plan is locked in and the options are limited.
        </p>
        <p>
          Calling before surgery gives you time. Time to switch during an eligible enrollment period. Time to understand your coinsurance. Time to choose a plan that covers your surgeon, your rehab facility, and your follow-up PT visits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Compare plans before your hip surgery - free consultation
        </h2>
        <p className="mb-2">
          I'll pull up your current coverage, show you what you'd owe for hip replacement under your existing plan, and compare it against alternatives. Medigap vs. Advantage. Plan G vs. Plan N. Specific copays, specific deductibles, specific surgeon networks.
        </p>
        <p>
          No cost. No pressure. Just the numbers you need to make a decision you won't regret when the bills come.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Get a pre-surgery plan comparison - call 855-559-1700
        </p>
        <p className="mb-4">
          Free, no-obligation review with a licensed Medicare broker.
        </p>
        <Link
          href="tel:8555591700"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition mr-4"
        >
          Call 855-559-1700
        </Link>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition"
        >
          Get a Free Quote
        </Link>
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
              Medigap Plan G - What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Better for Surgery?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-a-deductible"
              className="text-blue-600 hover:underline"
            >
              Understanding the Medicare Part A Deductible
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
        </ul>
      </section>
    </main>
  );
}