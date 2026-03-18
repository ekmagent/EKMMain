import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in west orange nj | Free Broker Consultation | MedicareYourself",
  description:
    "Local Medicare agents in West Orange NJ — Anthony Orner compares Supplement and Advantage plans across carriers in Essex County. Free, no-obligation help.",
  openGraph: {
    title:
      "local medicare agents in west orange nj | Free Broker Consultation | MedicareYourself",
    description:
      "Local Medicare agents in West Orange NJ — Anthony Orner compares Supplement and Advantage plans across carriers in Essex County. Free, no-obligation help.",
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
      name: "Local Medicare Agents in West Orange, NJ",
      item: "https://www.medicareyourself.com/services/local-medicare-agents-in-west-orange-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Local Medicare Agents in West Orange, NJ: Personalized Broker Support",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/local-medicare-agents-in-west-orange-nj",
};

const faqs = [
  {
    question: "Does it cost anything to work with a local Medicare agent in West Orange?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. My consultations are always free with no obligation to enroll.",
  },
  {
    question: "Can a local agent help me switch from Medicare Advantage to a Supplement plan?",
    answer:
      "Yes. If you have a federal guaranteed issue right - like dropping your Advantage plan during the first 12 months - I can help you move to a Medigap plan without health underwriting. Outside of that window, medical questions may apply. Call me and I will review your specific situation.",
  },
  {
    question: "What is the difference between a Medicare agent and a Medicare broker?",
    answer:
      "An agent may represent one carrier. A broker like me is licensed with multiple carriers and can compare plans side by side so you see real options, not just one company's pitch.",
  },
  {
    question: "When is the best time to contact a Medicare broker in West Orange?",
    answer:
      "If you are turning 65, reach out at least six months before your Part B start date. Already on Medicare? The Annual Enrollment Period runs October 15 through December 7 for Advantage and Part D changes. But you can call me any time of year for a plan review.",
  },
];

export default function LocalMedicareAgentsWestOrangeNJ() {
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
          Local Medicare Agents in West Orange, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Local Medicare Agents in West Orange, NJ: Personalized Broker Support
      </h1>

      <Image
        src="/images/local-medicare-agents-in-west-orange-nj.webp"
        alt="local medicare agents in west orange nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Local Medicare agents in West Orange, NJ give you something a national hotline never will: someone who knows Essex County, knows which carriers price competitively here, and will sit across the table from you. I am Anthony Orner, a licensed Medicare broker based in New Jersey, and I work with residents in West Orange every enrollment season.
      </p>
      <p className="mb-6">
        Whether you are turning 65 or reviewing a plan you have had for years, a free conversation can save you real money.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why working with a local broker beats an 800 number
        </h2>
        <p className="mb-2">
          A toll-free number connects you with whoever is available. That person does not know which hospital networks matter in Essex County or which carriers just raised rates in your zip code.
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-1">
          <li>I compare plans from multiple carriers, not just one</li>
          <li>I know the doctors and hospital systems West Orange residents use</li>
          <li>You get my direct number - no call center, no hold music</li>
        </ul>
        <p>
          Carriers pay my commission. You pay nothing for my help.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage options in Essex County
        </h2>
        <p className="mb-2">
          West Orange sits in a competitive market. Multiple carriers offer Medicare Advantage plans with $0 premiums and added dental or vision benefits. Supplement plans like Plan G and Plan N are also widely available here.
        </p>
        <p>
          Plan G covers everything Original Medicare does not, except the Part B deductible ($257 in 2026). Plan N has a lower premium but adds small copays at some office visits. Rates vary by carrier, which is exactly why a broker comparison matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to evaluate whether your current plan still fits
        </h2>
        <p className="mb-2">
          Plans change every year. Your Advantage plan might drop a preferred pharmacy or raise its specialist copay. Ask yourself:
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-1">
          <li>Are my doctors still in-network?</li>
          <li>Have my prescription costs increased?</li>
          <li>Am I paying for benefits I never use?</li>
          <li>Did my monthly premium go up?</li>
        </ul>
        <p>
          If you answered yes to any of those, it is worth a review. That is what I do every day.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65? Lock in your Medigap rate early
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts six months starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge more based on health history.
        </p>
        <p>
          My practice is to have clients apply up to six months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage begins. The sooner you act, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free plan review
        </h2>
        <p className="mb-2">
          I will ask about your doctors, prescriptions, and budget. Then I pull real quotes from multiple carriers and lay them side by side. No pressure. No confusing jargon.
        </p>
        <p>
          Most reviews take about 20 minutes. You walk away knowing exactly what you are paying for and whether a better option exists.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Connect with Anthony Orner for a free plan review
        </h2>
        <p className="mb-2">
          I have helped hundreds of New Jersey residents find the right Medicare plan. If you live in West Orange or anywhere in Essex County, call me directly. No sign-up forms, no email chains.
        </p>
        <p>
          Phone: <strong>855-559-1700</strong>. I will pick up or call you back the same day.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare your Medicare options?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> for a free, no-obligation plan review.
        </p>
        <Link
          href="tel:8555591700"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
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
              href="/medicare-guides/medicare-supplement-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G in NJ: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-essex-county-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in Essex County, NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Deadlines and Penalties
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}