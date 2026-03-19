import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in west new york nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local Medicare agents in West New York, NJ — Anthony Orner compares Medigap and Advantage plans across Hudson County carriers. Free consultation.",
  openGraph: {
    title:
      "local medicare agents in west new york nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local Medicare agents in West New York, NJ — Anthony Orner compares Medigap and Advantage plans across Hudson County carriers. Free consultation.",
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
      name: "Local Medicare Agents in West New York, NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-west-new-york-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in West New York, NJ — Independent Broker for Hudson County",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "How do I pick a Medicare agent in West New York, NJ?",
    answer:
      "Look for a licensed, independent broker who works with multiple carriers rather than just one company. An independent agent can compare plans across insurers and recommend coverage based on your doctors, prescriptions, and budget. Ask if consultations are free and whether they hold a valid NJ producer license.",
  },
  {
    question:
      "Is there a cost to use a local Medicare agent in Hudson County?",
    answer:
      "No. Licensed Medicare agents are paid by the insurance carriers, not by you. You pay the same premium whether you enroll through an agent, directly with the carrier, or online. There is no markup or fee for using a broker.",
  },
  {
    question: "When is the best time to talk to a Medicare agent?",
    answer:
      "If you are turning 65, start the conversation at least 6 months before your Part B start date. For Medicare Advantage or Part D changes, the Annual Enrollment Period runs October 15 through December 7. Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B.",
  },
  {
    question: "Can a West New York Medicare agent help with bilingual support?",
    answer:
      "Yes. West New York has a large Spanish-speaking population, and many local agents offer consultations in both English and Spanish. Ask when you call to confirm bilingual availability.",
  },
];

export default function LocalMedicareAgentsWestNewYorkNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Local Medicare Agents in West New York, NJ
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Local Medicare Agents in West New York, NJ — Independent Broker for Hudson County
        </h1>

        <Image
          src="/images/local-medicare-agents-in-west-new-york-nj.webp"
          alt="local medicare agents in west new york nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Local Medicare agents in West New York, NJ can save you real money by comparing plans from multiple carriers instead of locking you into one company. West New York sits right across the Hudson River from Manhattan, and Hudson County residents have access to a strong selection of both Medicare Supplement and Medicare Advantage options.
        </p>
        <p className="mb-6">
          I am Anthony Orner, a licensed independent Medicare broker serving West New York, North Bergen, Union City, and surrounding Hudson County towns. My consultations are always free.
        </p>

        <PhoneCTA />

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          How an independent broker saves you time and money
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. I do not. As an independent broker, I compare plans from multiple NJ-licensed carriers side by side. That means you see the full picture before you commit.
        </p>
        <p className="mb-4">
          You pay zero for my help. Carriers pay the agent commission, and your premium stays the same whether you enroll through me or call the carrier directly. There is no markup, ever.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Medicare Supplement and Advantage plans in Hudson County
        </h2>
        <p className="mb-2">
          Hudson County has competitive rates for both Medigap and Medicare Advantage. The right choice depends on your situation:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G and Plan N are the most popular standardized options. They cover Part A and Part B cost-sharing so you face fewer surprise bills. Rates vary by carrier and age.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Many HMO and PPO plans in Hudson County include prescription drug coverage, dental, and vision with $0 monthly premiums. The tradeoff is network restrictions and prior authorizations.
          </li>
          <li>
            <strong>Part D standalone plans:</strong> If you choose Original Medicare plus a Supplement, you will need a separate Part D drug plan. I can check your medications against plan formularies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Bilingual Medicare help for West New York residents
        </h2>
        <p className="mb-4">
          West New York has one of the highest percentages of Spanish-speaking residents in New Jersey. I provide consultations in both English and Spanish so nothing gets lost in translation. Medicare paperwork is confusing enough in one language.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Key enrollment windows to know
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. During this window, carriers cannot deny you or charge more for health conditions.
          </li>
          <li>
            <strong>Annual Enrollment Period:</strong> October 15 through December 7 for Medicare Advantage and Part D changes.
          </li>
          <li>
            <strong>Turning 65?</strong> I recommend applying for your Medigap plan up to 6 months before your Part B start date. Locking in early protects your rate.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What to expect when you call
        </h2>
        <p className="mb-2">
          I will ask about your current doctors, prescriptions, and budget. From there, I run a comparison across available carriers in Hudson County and walk you through the numbers. Most calls take 15 to 20 minutes.
        </p>
        <p className="mb-4">
          No pressure, no sales pitch. If a plan does not save you money or improve your coverage, I will tell you.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Get a free quote from a licensed NJ Medicare broker
        </h2>
        <p className="mb-6">
          Whether you live on Bergenline Avenue or Boulevard East, I can help you compare every plan available in your zip code. One call, and you will know exactly what you qualify for and what it costs.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare plans in West New York?
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
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              Get a Free Quote
            </Link>{" "}
            online. No obligation, no cost.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Medigap Plan G vs. Plan N
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}