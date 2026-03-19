import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Quote and Enroll in Plan G Online | Free Instant Rates | MedicareYourself",
  description:
    "Quote and enroll in Plan G online with a licensed NJ Medicare broker. Get instant rates from top carriers and finish enrollment the same day. Free service.",
  openGraph: {
    title:
      "Quote and Enroll in Plan G Online | Free Instant Rates | MedicareYourself",
    description:
      "Quote and enroll in Plan G online with a licensed NJ Medicare broker. Get instant rates from top carriers and finish enrollment the same day. Free service.",
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
      name: "Quote and Enroll in Plan G Online",
      item: "https://medicareyourself.com/services/quote-and-enroll-in-plan-g-online",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Quote and Enroll in Plan G Online — From Rate to Coverage in One Sitting",
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
    question: "Can you enroll in Medicare Plan G at any time?",
    answer:
      "Not without conditions. You have guaranteed acceptance during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. Outside that window, carriers can require medical underwriting and may decline your application based on health history. Certain federal guaranteed issue events, like losing employer coverage or leaving a Medicare Advantage plan, may also qualify you.",
  },
  {
    question: "How long does it take to enroll in Plan G online?",
    answer:
      "Most people finish their application in 15 to 20 minutes once they have their quote. You'll need your Medicare Beneficiary Identifier (MBI), Part A and Part B effective dates, and basic health history. Coverage typically starts the first of the following month.",
  },
  {
    question: "Does Plan G cover the Part B deductible?",
    answer:
      "No. Plan G covers everything Plan F covers except the annual Part B deductible, which is $283 in 2026. After you meet that deductible, Plan G pays 100% of remaining Medicare-approved costs for the year.",
  },
  {
    question: "Is there a fee to get a Plan G quote through a broker?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carrier, not by you. Our quoting and enrollment service is completely free, and your premium is the same whether you use a broker or go directly to the carrier.",
  },
];

export default function QuoteAndEnrollInPlanGOnline() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Quote and Enroll in Plan G Online</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Quote and Enroll in Plan G Online — From Rate to Coverage in One Sitting
      </h1>

      <Image
        src="/images/hub_quote-and-enroll-in-plan-g-online.webp"
        alt="Quote and enroll in Plan G online"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Quote and enroll in Plan G online without leaving your kitchen table. You pick the carrier, I confirm the rate, and we submit your application together over the phone or right on your screen. The whole process takes one sitting.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        No appointment needed to start. No hidden fees. Just real rates from real carriers.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to get your Plan G quote in under 60 seconds
        </h2>
        <p className="text-gray-700 mb-2">
          Enter your ZIP code, date of birth, gender, and tobacco status. That's it. Our system pulls live rates from every carrier available in your area and displays them side by side.
        </p>
        <p className="text-gray-700">
          Rates vary by carrier, age, and location. Two people in the same town can see very different prices depending on when they turned 65 and which rating method the carrier uses. That's exactly why comparing matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Plan G actually covers
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Part A hospital coinsurance plus 365 extra days after Medicare runs out</li>
          <li>Part B coinsurance (the 20% you'd otherwise owe on approved services)</li>
          <li>First 3 pints of blood per year</li>
          <li>Skilled nursing facility coinsurance: $209.50/day for days 21-100 in 2026</li>
          <li>Part A hospice care coinsurance</li>
          <li>80% of foreign travel emergency care</li>
        </ul>
        <p className="text-gray-700 mt-2">
          The only gap: you pay the $283 Part B deductible yourself each year. After that, Plan G picks up everything Medicare approves.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What happens between your quote and your effective date
        </h2>
        <p className="text-gray-700 mb-2">
          Once you choose a carrier, we complete the application together. You'll answer a short set of health questions unless you're inside your Medigap Open Enrollment Period (where acceptance is guaranteed).
        </p>
        <p className="text-gray-700">
          Carriers typically approve within 1-5 business days. Coverage usually starts the first of the next month. You'll get your ID card in the mail, but you can use your plan immediately on the effective date.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Common mistakes that delay online enrollment
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Not having your Medicare card handy (you need your MBI number and Part A/B start dates)</li>
          <li>Applying after your 6-month open enrollment window closes and not realizing underwriting applies</li>
          <li>Forgetting to sign up for a standalone Part D drug plan alongside Plan G</li>
          <li>Switching from a Medicare Advantage plan without confirming your guaranteed issue rights first</li>
        </ul>
        <p className="text-gray-700 mt-2">
          That last one trips people up the most. If you leave an Advantage plan mid-year and don't qualify for guaranteed issue, a carrier can deny your Plan G application based on pre-existing conditions. I've seen it happen, and it's tough to reverse.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why people switch from Advantage plans to Plan G
        </h2>
        <p className="text-gray-700 mb-2">
          The $0 premium on Advantage plans looks great until copays and referral requirements stack up. Plan G gives you the freedom to see any doctor who accepts Medicare, anywhere in the country, with no network restrictions and no prior authorizations.
        </p>
        <p className="text-gray-700">
          The tradeoff: you pay a monthly premium plus the $283 annual deductible. For many people, especially those with ongoing health needs, the predictability is worth it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Start your Plan G quote and enroll right now
        </h2>
        <p className="text-gray-700 mb-2">
          I'm Anthony Orner, a licensed Medicare broker. I work with multiple carriers, so my only job is matching you with the best rate for your situation. No cost to you, ever.
        </p>
        <p className="text-gray-700">
          Call me directly or use the quote tool on this page. Either way, you'll have real numbers in front of you within a minute.
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
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm opacity-90">
          Licensed broker. Free service. No obligation.
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
              href="/medicare-guides/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Medigap Plan Fits You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/switching-from-advantage-to-medigap"
              className="text-blue-600 hover:underline"
            >
              How to Switch from Medicare Advantage to Medigap
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-standalone-drug-plans"
              className="text-blue-600 hover:underline"
            >
              Choosing a Standalone Part D Prescription Drug Plan
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}