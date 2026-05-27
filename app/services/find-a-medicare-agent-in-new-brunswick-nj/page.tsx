import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in new brunswick nj | Free Local Guidance | MedicareYourself",
  description:
    "Find a Medicare agent in New Brunswick, NJ for free, unbiased plan comparisons across top carriers. Call licensed broker Anthony Orner at 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-new-brunswick-nj" },
  openGraph: {
    title:
      "find a medicare agent in new brunswick nj | Free Local Guidance | MedicareYourself",
    description:
      "Find a Medicare agent in New Brunswick NJ who compares plans from every top carrier. Anthony Orner provides free, licensed guidance. Schedule a call today.",
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
      name: "Find a Medicare Agent in New Brunswick, NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-new-brunswick-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in New Brunswick, NJ for Unbiased Plan Advice",
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
    question: "How do I pick a Medicare agent in New Brunswick?",
    answer:
      "Look for a licensed, independent broker who works with multiple carriers, not just one. Ask if they charge a fee (they shouldn't). A good agent compares Supplement, Advantage, and Part D plans side by side so you see real options, not a single sales pitch.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions from the federal program. For personalized plan comparisons and enrollment help specific to New Brunswick and Middlesex County, call a local independent broker like Anthony Orner at 855-559-1700.",
  },
  {
    question: "Does it cost anything to use a Medicare agent?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. You pay the same premium whether you enroll yourself or go through a broker. The difference is you get someone who can explain your options clearly.",
  },
  {
    question: "When should I contact a Medicare agent in New Brunswick?",
    answer:
      "Ideally, reach out about six months before you turn 65 or before your employer coverage ends. This gives you time to compare plans, especially if you want a Medigap policy with guaranteed issue pricing. For plan switches, the Annual Enrollment Period runs October 15 through December 7.",
  },
];

export default function FindMedicareAgentNewBrunswickNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Find a Medicare Agent in New Brunswick, NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find a Medicare Agent in New Brunswick, NJ for Unbiased Plan Advice
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-new-brunswick-nj.webp"
          alt="find a medicare agent in new brunswick nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in New Brunswick, NJ shouldn't mean sitting through a high-pressure sales call. You deserve someone who'll walk through every plan option available in Middlesex County and let you decide what fits.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent broker serving New Brunswick and surrounding communities. My service is free to you, and I work with every major carrier in New Jersey.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What makes an independent broker different in New Brunswick
          </h2>
          <p className="mb-3">
            A captive agent represents one insurance company. I represent you. As an independent broker, I compare plans from Aetna, Cigna, Humana, United, Mutual of Omaha, and others so you're not locked into whatever one company happens to sell.
          </p>
          <p>
            New Brunswick has specific network considerations. Robert Wood Johnson University Hospital is right here in town, and which plans include RWJ in-network matters a lot. I check that before recommending anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage: which plans fit Middlesex County residents
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap (Supplement):</strong> Pairs with Original Medicare. You pick any doctor who accepts Medicare. Monthly premiums are higher, but out-of-pocket costs are predictable. Plan G is the most popular in NJ.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Replaces Original Medicare. Often includes dental, vision, and drug coverage. Lower premiums, but you use a network. Several strong HMO and PPO options exist in the 08901 and 08903 zip codes.
            </li>
          </ul>
          <p className="mt-3">
            Neither is universally better. Your doctors, prescriptions, and budget determine the right fit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment dates New Brunswick residents should know
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Initial Enrollment:</strong> 3 months before your 65th birthday through 3 months after.
            </li>
            <li>
              <strong>Medigap Open Enrollment:</strong> 6-month window starting the month you turn 65 and have Part B. This is your guaranteed issue window for Supplement plans at the best rates.
            </li>
            <li>
              <strong>Annual Enrollment (AEP):</strong> October 15 through December 7 for Advantage and Part D changes.
            </li>
            <li>
              <strong>Part B late penalty:</strong> 10% added to your $202.90/month premium for every 12 months you delayed without creditable coverage.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why timing matters for Medigap in New Jersey
          </h2>
          <p className="mb-3">
            If you're approaching 65, start comparing Medigap plans about 6 months before your Part B effective date. During your open enrollment window, carriers can't charge you more or deny you based on health history.
          </p>
          <p>
            Miss that window and you may face medical underwriting. I help New Brunswick residents lock in rates before that deadline passes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Real costs you should plan for in 2026
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>Skilled nursing facility coinsurance (days 21-100): $209.50/day</li>
          </ul>
          <p className="mt-3">
            These gaps are exactly what Supplement or Advantage plans are designed to cover. The right plan can save you thousands if you have a hospital stay or need skilled nursing care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free Medicare review with Anthony Orner
          </h2>
          <p className="mb-3">
            I live and work in New Jersey. I know which carriers offer the strongest networks at Robert Wood Johnson and throughout Middlesex County. A 15-minute call is usually enough to know where you stand and what your best options are.
          </p>
          <p>
            No cost. No obligation. No pressure.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready for a clear, honest plan comparison?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-bold">
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                Part B Late Enrollment Penalty Explained
              </Link>
            </li>
          </ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to Someone at Medicare.gov</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> or verify a broker's license with the <a href="https://www.state.nj.us/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}