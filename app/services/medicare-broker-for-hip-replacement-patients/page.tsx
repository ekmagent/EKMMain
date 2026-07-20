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
    "Work with a licensed Medicare broker to compare Medigap and Advantage plans and cut hip replacement surgery costs. Free pre-surgery reviews — call today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-hip-replacement-patients" },
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
      name: "Medicare Broker for Hip Replacement Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-hip-replacement-patients",
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
    "https://medicareyourself.com/services/medicare-broker-for-hip-replacement-patients",
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
      "Medicare Part A covers the hospital stay, and Part B covers the surgeon's fees and follow-up care like physical therapy. After you meet the Part A deductible ($1,736 in 2026), Part A covers the rest of the inpatient stay for days 1-60. Part B covers 80% of approved outpatient charges after the $283 annual deductible. A Medigap plan can cover most or all of those remaining gaps.",
  },
  {
    question:
      "Should I wait until I'm on Medicare to get my hip replaced?",
    answer:
      "That depends on your current coverage, pain level, and timeline. If you're approaching 65, it may be worth comparing your current plan's costs against Medicare plus a supplement. Call me and I'll help you run the numbers for both scenarios.",
  },
  {
    question:
      "Does Medicare cover rehab after outpatient hip replacement?",
    answer:
      "Yes. Medicare Part B covers outpatient physical therapy after hip surgery. If you're admitted as an inpatient for at least 3 consecutive days, Medicare Part A can also cover up to 100 days of skilled nursing facility rehab, though days 21-100 carry a $217.00/day coinsurance in 2026.",
  },
];

export default function MedicareBrokerHipReplacementPage() {
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
          Medicare Broker for Hip Replacement Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Hip Replacement Patients — Minimize Out-of-Pocket
        Surgery Costs
      </h1>

      <Image
        src="/images/medicare-broker-for-hip-replacement-patients.webp"
        alt="Medicare broker for hip replacement patients"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for hip replacement patients does one thing before your surgery date: finds the plan that leaves the least money on the table. Total hip replacement bills can run over $50,000. The plan you're on when that surgeon makes the first cut determines what you actually owe.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help people facing joint replacement compare their options before the surgery, not after the surprise bill.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Medicare pays for hip replacement surgery and rehab
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare covers medically necessary hip replacement. Part A handles the hospital stay. Part B covers the surgeon, anesthesiologist, physical therapy, and durable medical equipment like a walker.
        </p>
        <p className="text-gray-700">
          In 2026, you'll pay the $1,736 Part A deductible per benefit period for inpatient stays. On the Part B side, you owe 20% of approved charges after a $283 annual deductible. That 20% on a major surgery adds up fast.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Medigap plans eliminate your Part A and Part B gaps
        </h2>
        <p className="text-gray-700 mb-2">
          A Medigap (Medicare Supplement) plan pays the costs Original Medicare doesn't. For hip replacement patients, the key benefits:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Plan G covers the full Part A deductible ($1,736) and all Part B coinsurance (that 20%)</li>
          <li>Plan N covers the same deductible with slightly lower premiums, though you'll pay small copays at some visits</li>
          <li>No prior authorization, no network restrictions, no referral requirements</li>
        </ul>
        <p className="text-gray-700 mt-2">
          With Medigap, you pick your surgeon. Any doctor who accepts Medicare accepts your plan. That matters when you want a specific orthopedic specialist.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Advantage prior authorization for joint replacement
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans often require prior authorization before hip surgery. That means your insurer must approve the procedure before it happens. Denials and delays are real.
        </p>
        <p className="text-gray-700">
          Some Advantage plans offer low out-of-pocket maximums that cap your total exposure. Others have narrow networks that limit your surgeon choices. I'll pull the actual cost-sharing details for plans in your area so you can see what you'd really pay.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Recovery costs most people don't plan for
        </h2>
        <p className="text-gray-700 mb-2">
          Hip replacement today is often outpatient. You go home the same day. That changes the insurance math. Outpatient surgery runs through Part B, not Part A, so your cost-sharing looks different.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Physical therapy visits (Part B: 20% coinsurance per session)</li>
          <li>Skilled nursing facility rehab: $0/day for days 1-20, then $217.00/day for days 21-100 in 2026</li>
          <li>Walker, raised toilet seat, and other durable medical equipment (Part B covers 80%)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          People living alone or in multi-story homes face extra challenges during recovery. The right plan won't solve every logistics problem, but it removes the financial stress so you can focus on healing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Timing your plan switch around surgery
        </h2>
        <p className="text-gray-700 mb-2">
          If you're approaching 65 and know a hip replacement is coming, your Medigap Open Enrollment Period is the window. During the 6 months starting the month you turn 65 and are enrolled in Part B, carriers must accept you regardless of your hip condition. No medical underwriting.
        </p>
        <p className="text-gray-700">
          Miss that window and a carrier can ask health questions. A pending joint replacement could mean higher rates or denial. Plan ahead. I help people lock in coverage months before their surgery date.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Compare plans before your hip surgery — free consultation
        </h2>
        <p className="text-gray-700 mb-2">
          I compare Medigap and Advantage plans side by side, specific to your surgery timeline, your doctors, and your zip code. No cost to you. Carriers pay me, not you.
        </p>
        <p className="text-gray-700">
          One call before surgery can save thousands after it. I'll show you the numbers so you can decide with confidence.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker before your hip surgery.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-bold"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="underline font-bold"
          >
            Get a Free Quote
          </Link>
        </p>
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
              Medigap Plan G vs. Plan N: Which saves more for surgery?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to choose
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Why timing matters
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-parts-explained"
              className="text-blue-600 hover:underline"
            >
              Medicare skilled nursing facility coverage explained
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/hip-joint-replacement" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Hip Joint Replacement Coverage</a> and <a href="https://www.medicare.gov/coverage/physical-therapy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Physical Therapy Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased help in your state? Contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
      </section>
    </main>
  );
}