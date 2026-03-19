import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in union nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local Medicare agents in Union, NJ — Anthony Orner compares Medigap and Advantage plans across top carriers in Union County. Free no-obligation quote.",
  openGraph: {
    title:
      "local medicare agents in union nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local Medicare agents in Union, NJ — Anthony Orner compares Medigap and Advantage plans across top carriers in Union County. Free no-obligation quote.",
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
      name: "Local Medicare Agents in Union NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-union-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Union, NJ — Independent Broker Serving Union County",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/local-medicare-agents-in-union-nj",
};

const faqs = [
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Medicare agents are paid by the insurance carriers, not by you. There is zero cost for working with an independent broker like Anthony Orner. The plans cost the same whether you enroll directly or through a broker.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. It depends on your doctors, prescriptions, and budget. Medigap Plan G offers the most comprehensive supplement coverage, while some Medicare Advantage plans work well for people who want lower premiums and bundled benefits. A free comparison is the best way to find your match.",
  },
  {
    question: "How to find a good Medicare agent?",
    answer:
      "Look for an independent broker who is licensed in your state and works with multiple carriers rather than one company. Ask how many plans they compare. An agent who only represents one insurer cannot show you the full picture.",
  },
  {
    question: "Can I switch Medicare plans if I already have coverage?",
    answer:
      "Yes. During Medicare Advantage Open Enrollment (October 15 through December 7), you can switch Advantage or Part D plans. Medigap plan changes may require medical underwriting outside your initial open enrollment period, though certain guaranteed issue situations allow switching without health questions.",
  },
];

export default function LocalMedicareAgentsUnionNJ() {
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
            Local Medicare Agents in Union NJ
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Local Medicare Agents in Union, NJ — Independent Broker Serving Union County
        </h1>

        <Image
          src="/images/local-medicare-agents-in-union-nj.webp"
          alt="local medicare agents in union nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Union, NJ give you something online enrollment tools cannot: a real person who knows Union County carriers, doctors, and hospital networks. I'm Anthony Orner, an independent Medicare broker licensed in New Jersey, and I compare plans from 18 or more carriers so you see every option side by side.
        </p>
        <p className="text-lg mb-6">
          My service costs you nothing. Carriers pay me the same commission whether you pick Plan G or a $0-premium Advantage plan. Your rate stays identical to what you'd pay enrolling on your own.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why Union County residents choose an independent broker
          </h2>
          <p className="mb-2">
            A captive agent represents one insurance company. I represent you. When you sit down with me, I pull quotes from 8+ top Medigap carriers and 7 or more Advantage plans available in the 07083 zip code.
          </p>
          <p>
            That comparison takes about 15 minutes. You walk away knowing exactly what each plan covers and what it costs. No pressure, no enrollment deadline tricks.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap and Advantage plans available in Union, NJ
          </h2>
          <p className="mb-2">
            Union County has strong carrier competition, which works in your favor. On the Medigap side, Plan G is the most popular supplement - it covers everything Original Medicare doesn't except the Part B deductible ($257/year in 2026).
          </p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li>Plan G - lowest out-of-pocket after premiums for most people</li>
            <li>Plan N - lower premiums with small copays at office visits</li>
            <li>Medicare Advantage (Part C) - often $0 premium with dental, vision, and hearing bundled in</li>
            <li>Part D prescription drug plans - standalone or bundled with Advantage</li>
          </ul>
          <p>
            Rates vary by carrier, age, and tobacco status. I'll show you actual numbers, not ranges.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How to switch plans without a gap in coverage
          </h2>
          <p className="mb-2">
            Timing matters. Medicare Advantage and Part D plans can be changed during Open Enrollment, October 15 through December 7, with new coverage starting January 1. No gap.
          </p>
          <p>
            Medigap switches work differently. If you're outside your initial 6-month Medigap Open Enrollment Period, most carriers require health underwriting. Certain guaranteed issue situations - like losing employer coverage or moving out of a plan's service area - let you switch without medical questions. Call me and I'll tell you exactly which rules apply to your situation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Lock in your Medigap rate before Part B starts
          </h2>
          <p className="mb-2">
            Turning 75 this year? Already 65 and just signing up for Part B? Here's what I do for every client: I submit your Medigap application up to 6 months before your Part B start date.
          </p>
          <p>
            This locks in today's rate and protects you from premium increases that could hit before your coverage begins. The sooner you apply, the better your rate. Waiting costs real money.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What to bring to your consultation
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your red, white, and blue Medicare card (or your Medicare number)</li>
            <li>A list of current medications and dosages</li>
            <li>Names of your doctors and preferred hospital</li>
            <li>Any current insurance cards (employer, retiree, VA)</li>
          </ul>
          <p className="mt-2">
            That's it. I handle the rest, including verifying your doctors are in-network and checking drug formularies.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free Medicare consultation in Union County
          </h2>
          <p className="mb-2">
            I meet clients by phone, video, or in person across Union County. Most consultations take 20 to 30 minutes. You'll leave with a clear recommendation and zero obligation to enroll.
          </p>
          <p>
            Call today and get your free plan comparison before rates change.
          </p>
        </section>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare plans in Union, NJ?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            No cost. No obligation. Independent advice from a licensed NJ broker.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-broker-near-me-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Broker Near Me in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G in New Jersey - What It Covers
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap - Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-open-enrollment-nj"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment in NJ - Deadlines and Rules
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}