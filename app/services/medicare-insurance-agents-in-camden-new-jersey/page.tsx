import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in camden new jersey | Free Quotes | MedicareYourself",
  description:
    "Camden, NJ Medicare broker Anthony Orner compares Medigap and Advantage plans from top carriers at no cost. Call 855-559-1700 for a free, no-obligation quote.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-camden-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in camden new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Camden New Jersey — Anthony Orner compares Medigap and Advantage plans across South Jersey carriers. Free quote, no obligation.",
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
      name: "Medicare Insurance Agents in Camden, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-camden-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Camden, New Jersey: Independent Broker Access for South Jersey",
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
      "Yes. A licensed independent broker compares plans from multiple carriers at no extra cost to you. The carrier pays the agent, so you get unbiased guidance without paying a fee. This matters in Camden County where several carriers compete for your business.",
  },
  {
    question: "How do I pick a Medicare agent in Camden, NJ?",
    answer:
      "Look for an agent who is independent (not captive to one carrier), licensed in New Jersey, and willing to show you both Medigap and Medicare Advantage options side by side. Ask how many carriers they represent. If the answer is one, keep looking.",
  },
  {
    question: "Does Medicare have a local office in Camden?",
    answer:
      "Medicare itself doesn't operate local offices. Your local Social Security office in Camden can help with enrollment questions. For plan comparisons and enrollment help, an independent broker like Anthony Orner can walk you through options by phone or video at no cost.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan. The right choice depends on your doctors, prescriptions, budget, and how often you travel. In Camden County, both Medigap Plan G and several $0-premium Medicare Advantage plans perform well. A broker can match you to the strongest fit.",
  },
];

export default function MedicareInsuranceAgentsCamdenNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span>Medicare Insurance Agents in Camden, New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Insurance Agents in Camden, New Jersey: Independent Broker Access for South Jersey
        </h1>

        <Image
          src="/images/medicare-insurance-agents-in-camden-new-jersey.webp"
          alt="medicare insurance agents in camden new jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare insurance agents in Camden, New Jersey don't all work the same way. Some represent a single carrier. Others, like me, are independent brokers who compare plans across every major insurer in South Jersey. That difference determines whether you see one option or a dozen.
        </p>
        <p className="mb-6">
          I'm Anthony Orner, a licensed Medicare broker serving Camden County and the surrounding area. My help costs you nothing. The carriers pay me, and your premium stays the same whether you call me or go direct.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Camden County Medicare beneficiaries should know in 2025
          </h2>
          <p className="mb-2">
            Camden County has strong hospital access through systems like Cooper University Health Care and Virtua. But South Jersey residents regularly report billing surprises and difficulty finding providers who accept their coverage. The plan you pick shapes those experiences.
          </p>
          <p>
            For 2026, the Part B premium is $202.90/month and the Part A deductible is $1,676 per benefit period. Those out-of-pocket costs hit harder if you don't have supplemental coverage in place.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap vs. Medicare Advantage in the South Jersey market
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap (Medicare Supplement):</strong> Covers gaps in Original Medicare. You pick any doctor who accepts Medicare nationwide. Plan G is the most popular option. Monthly premiums vary by carrier, but you'll have predictable costs with little to no surprise bills.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Replaces Original Medicare with a private plan. Many have $0 premiums and include dental, vision, and hearing. Trade-off: you use a network, and out-of-pocket maximums can reach $5,000 to $8,000 in-network.
            </li>
          </ul>
          <p className="mt-3">
            Neither is universally better. Your doctors, medications, and budget determine the right call. That's exactly what a broker appointment sorts out.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Carriers and plans available in the Camden area
          </h2>
          <p className="mb-2">
            Camden County residents can access Medigap plans from carriers like Mutual of Omaha, Aetna, Cigna, and United American. Medicare Advantage options include Aetna, Humana, UnitedHealthcare, and several others with $0-premium HMO and PPO plans.
          </p>
          <p>
            I quote all of them. You see every rate on one screen, not just the one a captive agent is paid to sell.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independent beats captive in Camden County
          </h2>
          <p className="mb-2">
            A captive agent works for one insurance company. An independent broker works for you. I don't have a quota with any carrier, so I have zero reason to steer you toward a plan that isn't your best fit.
          </p>
          <p>
            If a plan stops working after enrollment, I help you switch during the right window. You're not starting from scratch with a call center.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Enrollment timing matters more than most people realize
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and have Part B. During this window, carriers can't reject you or charge more for health conditions. Miss it, and you may face medical underwriting.
          </p>
          <p>
            Medicare Advantage and Part D open enrollment runs October 15 through December 7 each year. If you're approaching 65, start the conversation at least 6 months out so nothing slips.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free Camden-area Medicare quote in minutes
          </h2>
          <p>
            Call me or request a quote online. I'll pull rates from every carrier available in your zip code, walk you through the differences, and let you decide with no pressure. If you're not ready to enroll, that's fine. The quote is free either way.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Talk to a licensed Camden-area Medicare broker today
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
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
                href="/services/medicare-insurance-agents-in-cherry-hill-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Insurance Agents in Cherry Hill, NJ
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: What It Covers
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Deadlines That Matter
              </Link>
            </li>
                      <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medicare.gov Plan Finder</a> &middot; <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Getting Started with Medicare</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling to Camden County residents.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> offers free Medicare counseling to Camden County residents.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased help from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey seniors can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}