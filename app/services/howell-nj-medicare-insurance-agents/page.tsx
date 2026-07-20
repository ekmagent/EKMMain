import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "howell nj medicare insurance agents | Free Independent Broker Help | MedicareYourself",
  description:
    "Howell NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans from top carriers in Monmouth County. Free no-obligation quote.",
  alternates: { canonical: "https://medicareyourself.com/services/howell-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "howell nj medicare insurance agents | Free Independent Broker Help | MedicareYourself",
    description:
      "Howell NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans from top carriers in Monmouth County. Free no-obligation quote.",
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
      name: "Howell NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/howell-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Howell NJ Medicare Insurance Agents — Independent Broker Covering Monmouth County",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent helps you compare plans side by side at no cost to you. Independent brokers like Anthony Orner work with multiple carriers, so you see more options than you would with a single-company agent. The carrier pays the broker's commission — you pay the same premium whether you use an agent or enroll directly.",
  },
  {
    question: "Who pays Medicare insurance agents?",
    answer:
      "Insurance carriers pay agents a commission when you enroll in a plan. This commission is built into every plan's premium, so your monthly cost is identical whether you use a broker or go direct. There's no extra fee for working with an independent agent.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan — it depends on your doctors, prescriptions, and budget. In Monmouth County, many residents choose Medigap Plan G for predictable costs or a Medicare Advantage PPO for lower premiums with network flexibility. A free consultation helps you compare real numbers for your specific situation.",
  },
  {
    question: "When should I apply for a Medigap plan in Howell?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers must accept you regardless of health history and cannot charge more for pre-existing conditions. Applying up to 6 months before your Part B start date helps lock in the best rate.",
  },
];

export default function HowellNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <LocalServiceSchema citySlug="howell" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Howell NJ Medicare Insurance Agents</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Howell NJ Medicare Insurance Agents — Independent Broker Covering Monmouth County
      </h1>

      <Image
        src="/images/howell-nj-medicare-insurance-agents.webp"
        alt="Howell NJ Medicare insurance agents"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Howell NJ Medicare insurance agents aren't all the same. Some represent one company. I'm Anthony Orner, an independent broker who compares Supplement and Advantage plans from multiple carriers so Howell residents see what's actually available in their zip code.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        No cost. No obligation. Just a straight answer about what makes sense for your situation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Howell residents choose an independent Medicare broker
        </h2>
        <p className="text-gray-700 mb-2">
          Captive agents sell one company's products. That limits what you see. As an independent broker, I quote plans from every major carrier in Monmouth County and lay them next to each other.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>You compare premiums, networks, and out-of-pocket costs in one call</li>
          <li>The carrier pays my commission — your premium stays the same</li>
          <li>I handle enrollment paperwork and help with questions after you're covered</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Supplement and Advantage plans available in 07731 and 07728
        </h2>
        <p className="text-gray-700 mb-2">
          Howell straddles two zip codes, and plan availability can differ by area. Medigap Plan G is the most popular Supplement choice here — it covers everything except the $283 annual Part B deductible. Plan N costs less but adds small copays at some visits.
        </p>
        <p className="text-gray-700">
          Medicare Advantage PPOs in Monmouth County often include dental, vision, and hearing benefits at $0 or low monthly premiums. Some HMO options work well if your doctors are in-network at systems like Hackensack Meridian Health, which has a strong presence in the area.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Monmouth County rates compare to the rest of New Jersey
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap premiums in Monmouth County tend to run slightly lower than Bergen or Essex counties, though rates vary by carrier, age, and tobacco status. Medicare Advantage plans in Howell often carry $0 premiums with competitive copay structures.
        </p>
        <p className="text-gray-700">
          The only way to know your real cost is to compare. I pull quotes specific to your age and zip code so you see actual numbers, not averages.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Key enrollment windows Howell residents should know
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and have Part B. This is when you get guaranteed acceptance with no health questions.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Open Enrollment:</strong> October 15 through December 7 each year.
          </li>
          <li>
            <strong>Part B late penalty:</strong> 10% added to your premium for every 12 months you delay past initial eligibility. The 2026 Part B premium is $202.90/month.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What to expect when you call
        </h2>
        <p className="text-gray-700 mb-2">
          I'll ask about your doctors, prescriptions, and budget. Then I'll show you side-by-side plan comparisons with actual premiums and out-of-pocket costs for your zip code. The whole conversation usually takes 15 to 20 minutes.
        </p>
        <p className="text-gray-700">
          No pressure. If you want time to think, I'll email the comparison so you can review at your kitchen table.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Request your free Howell Medicare consultation
        </h2>
        <p className="text-gray-700">
          Whether you're turning 65, retiring from a Howell employer, or just want to see if a better plan exists, one call gives you clarity. I serve Howell, Farmingdale, Freehold, Lakewood, and all of Monmouth County.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a local Howell Medicare broker today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
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
              Medigap Plan G vs. Plan N — Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/howell-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Monmouth County Medicare Broker Services
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              New Jersey Medigap Open Enrollment Rules
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> · <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Getting Started with Medicare</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}