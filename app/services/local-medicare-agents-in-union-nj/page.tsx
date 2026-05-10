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
    "Local Medicare agents in Union, NJ — Anthony Orner compares Medigap & Advantage plans across top carriers at no cost. Call 855-559-1700 for a free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-union-nj" },
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
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Local Medicare Agents in Union, NJ",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, and how often you use healthcare. An independent broker compares options across multiple carriers to find the best fit for your specific situation in Union County.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker rather than a captive agent who represents only one carrier. Independent brokers compare plans from multiple insurance companies at no extra cost to you. Ask if they're familiar with the hospitals and provider networks in your area.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24/7. But if you want personalized help comparing plans and enrolling, a local independent broker like Anthony Orner at 855-559-1700 can walk you through your options one-on-one.",
  },
  {
    question: "Does it cost extra to use a Medicare broker in Union, NJ?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. You pay the same premium whether you enroll directly or through a broker, but you get free plan comparison and ongoing support.",
  },
];

export default function LocalMedicareAgentsUnionNJ() {
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
          Local Medicare Agents in Union, NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Local Medicare Agents in Union, NJ — Independent Broker Serving Union
          County
        </h1>

        <Image
          src="/images/local-medicare-agents-in-union-nj.webp"
          alt="local medicare agents in union nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full h-auto"
          priority
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Union, NJ can save you hours of confusing
          research and help you avoid costly enrollment mistakes. I'm Anthony
          Orner, an independent Medicare broker licensed in New Jersey, and I
          work with residents across Union County to compare plans from multiple
          carriers side by side.
        </p>
        <p className="text-lg mb-6">
          My service is free. You pay the same premium whether you call me or go
          directly to the carrier.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Union County residents choose an independent broker
          </h2>
          <p className="mb-2">
            A captive agent sells plans from one company. I compare plans across
            eight or more carriers. That distinction matters when your doctor is
            at Overlook Medical Center in Summit and your specialist is at
            Robert Wood Johnson in New Brunswick.
          </p>
          <p>
            I check which networks include your providers, which formularies
            cover your drugs, and which plan actually costs less over a full
            year. Not just the premium. The whole picture.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap and Advantage plans available in Union, NJ
          </h2>
          <p className="mb-2">
            Union Township sits in a competitive Medicare market. You have access
            to multiple Medicare Advantage (Part C) plans with $0 premiums and
            built-in drug coverage, plus several Medigap options like Plan G and
            Plan N from carriers that serve Union County.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Medicare Advantage:</strong> Lower monthly costs, but you
              use a network. Prior authorizations apply for some services.
            </li>
            <li>
              <strong>Medigap (Supplement):</strong> Higher premium, but you see
              any doctor who accepts Medicare. No network restrictions, no prior
              auth.
            </li>
          </ul>
          <p className="mt-2">
            Rates vary by carrier, age, and tobacco status. I'll run the numbers
            for you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Hospitals and providers near Union Township
          </h2>
          <p className="mb-2">
            Union County residents commonly use Trinitas Regional Medical Center
            in Elizabeth, Overlook Medical Center in Summit, and RWJBarnabas
            facilities across the region. Not every Medicare Advantage plan
            includes all of these in-network.
          </p>
          <p>
            Before you enroll, I verify that your doctors and hospitals are
            covered. Switching plans later because a provider dropped out of
            network is a headache you don't need.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to switch plans without a gap in coverage
          </h2>
          <p className="mb-2">
            During the Annual Enrollment Period (October 15 through December 7),
            you can switch Medicare Advantage or Part D plans for the following
            year. Your old plan stays active through December 31, and the new one
            starts January 1. No gap.
          </p>
          <p>
            If you're turning 65, your Medigap Open Enrollment Period lasts six
            months starting the month you turn 65 and are enrolled in Part B.
            During that window, carriers can't deny you or charge more for health
            conditions. Miss it, and you may face medical underwriting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What people get wrong about Medicare Advantage
          </h2>
          <p className="mb-2">
            The $0 premium sounds great. And for some people, it genuinely is
            the right call. But some hospitals have started dropping Medicare
            Advantage contracts over payment disputes. If your hospital leaves
            the network mid-year, your options narrow fast.
          </p>
          <p>
            I'll tell you straight whether Advantage or a Supplement makes more
            sense for how you use healthcare. No agenda. I'm paid the same
            either way.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free Medicare consultation in Union County
          </h2>
          <p className="mb-2">
            Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-600 font-semibold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or request a callback online. I'll review your current coverage,
            compare plans across carriers, and give you a clear recommendation.
          </p>
          <p>
            No obligation. No sales pitch. Just the facts about what's available
            in Union, NJ, and what actually fits your situation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Compare Medicare Plans in Union County — Free
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-semibold text-white"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker Services in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey: What It Covers
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
            <li>
              <Link
                href="/services/local-medicare-agents-in-union-city-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Union City NJ
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">Talk to Someone at Medicare.gov</a>. New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}