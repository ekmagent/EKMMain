import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in edison new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Edison, New Jersey — Anthony Orner is a licensed broker comparing Medigap and Advantage plans across carriers. Free consultation.",
  openGraph: {
    title:
      "medicare insurance agents in edison new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Edison, New Jersey — Anthony Orner is a licensed broker comparing Medigap and Advantage plans across carriers. Free consultation.",
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
      name: "Medicare Insurance Agents in Edison, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-edison-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Edison, New Jersey — Licensed Broker Serving Middlesex County",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans from multiple carriers at no cost to you. The carriers pay the agent, so you get professional guidance without any added fees. An independent broker like Anthony Orner can show you options a single-carrier agent cannot.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. Medigap Plan G is the most popular supplement in NJ because it covers nearly all out-of-pocket costs after the $257 Part B deductible (2026). Medicare Advantage HMO and PPO plans are also available in Middlesex County with $0 premiums. The right choice depends on your doctors, prescriptions, and budget.",
  },
  {
    question: "Does Medicare have a local office?",
    answer:
      "Medicare itself does not have storefront offices. You can call 1-800-MEDICARE or visit medicare.gov for official information. For personalized local help in Edison, an independent broker can meet with you in person or by phone to review your options at no charge.",
  },
  {
    question: "How much does it cost to work with a Medicare broker in Edison?",
    answer:
      "Nothing. Licensed Medicare brokers are compensated directly by the insurance carriers. You pay the same premium whether you enroll on your own or through a broker. The advantage is getting someone who knows Middlesex County plan options and can compare rates across companies.",
  },
];

export default function MedicareInsuranceAgentsEdisonNJ() {
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
          Medicare Insurance Agents in Edison, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Edison, New Jersey — Licensed Broker Serving Middlesex County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-edison-new-jersey.webp"
        alt="Medicare insurance agents in Edison New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Edison, New Jersey can make the difference between picking the wrong plan and finding one that actually fits your budget and doctors. I'm Anthony Orner, an independent licensed Medicare broker serving Edison and all of Middlesex County.
      </p>
      <p className="text-lg mb-6">
        My consultations are always free. I compare plans from multiple carriers so you don't have to call each company yourself.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Edison residents work with an independent Medicare broker
        </h2>
        <p className="mb-2">
          A captive agent sells plans from one insurance company. I work independently, which means I can show you Medigap and Medicare Advantage plans from a wide range of carriers operating in the 08817, 08818, and 08820 zip codes.
        </p>
        <p>
          You pay the exact same premium whether you enroll directly or through me. The carrier pays my commission, not you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Advantage plans available in Middlesex County
        </h2>
        <p className="mb-2">
          Edison falls within Middlesex County, which has strong plan availability for both Medicare Supplement and Medicare Advantage. Here's what I typically compare for clients:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-2">
          <li>Medigap Plan G - covers everything except the $257 annual Part B deductible (2026)</li>
          <li>Medigap Plan N - lower premium, small copays at office visits</li>
          <li>Medicare Advantage HMO and PPO plans - some with $0 monthly premiums</li>
          <li>Part D prescription drug plans - standalone or bundled with Advantage</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I pull real quotes so you can compare side by side.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to start your Medicare search in Edison
        </h2>
        <p className="mb-2">
          If you're turning 65, your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. During this window, no carrier can reject you or charge more for health conditions.
        </p>
        <p>
          I typically have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage kicks in. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring to your first Medicare consultation
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Your Medicare card (red, white, and blue) or Medicare number</li>
          <li>A list of current prescriptions with dosages</li>
          <li>Names of your doctors and preferred hospitals</li>
          <li>Any current insurance cards (employer, retiree, or VA coverage)</li>
        </ul>
        <p className="mt-2">
          This lets me run accurate plan comparisons on the spot. Most consultations take about 30 minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs you should know
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance: $209.50/day for days 21-100</li>
          <li>Part B late enrollment penalty: 10% added for each 12-month period you delayed</li>
        </ul>
        <p className="mt-2">
          These costs add up fast without supplemental coverage. That's exactly why most of my Edison clients choose either a Medigap or Advantage plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free phone or in-person appointment in Edison
        </h2>
        <p className="mb-2">
          I meet with Edison residents by phone, video, or in person - whatever works best for you. There's no pressure and no obligation.
        </p>
        <p>
          Call me at <strong>855-559-1700</strong> to set up a time, or use the link below. I'll pull quotes specific to your zip code and situation before we talk.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Edison?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> or click below for your free quote.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey - Benefits and Rates
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare - Deadlines and Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage - Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}