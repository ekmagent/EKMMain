import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in clifton new jersey | Free Quote, No Fees | MedicareYourself",
  description:
    "Talk to a licensed Medicare insurance agent in Clifton, NJ. Independent broker Anthony Orner compares 20+ carriers — free quote, no fees. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-clifton-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in clifton new jersey | Free Quote, No Fees | MedicareYourself",
    description:
      "Medicare insurance agents in Clifton, New Jersey — Anthony Orner is an independent broker quoting 20+ carriers in Passaic County. Free comparison, zero fees.",
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
      name: "Medicare Insurance Agents in Clifton, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-clifton-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Clifton, New Jersey: Licensed Broker Covering Passaic County",
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
    question:
      "Do I pay a fee to use a Medicare insurance agent in Clifton, NJ?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. A consultation, plan comparison, and enrollment assistance all cost $0 out of your pocket.",
  },
  {
    question:
      "What's the difference between a captive Medicare agent and an independent broker?",
    answer:
      "A captive agent sells plans from one carrier. An independent broker like Anthony Orner quotes 20+ carriers side by side, so the recommendation is based on your needs, not a single company's product lineup.",
  },
  {
    question: "When can I enroll in a Medigap plan in Clifton?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. During this window, carriers must accept you regardless of health history. Outside this window, you may face medical underwriting.",
  },
  {
    question:
      "Which Medicare Advantage plans are available in Passaic County for 2026?",
    answer:
      "Several HMO and PPO Medicare Advantage plans serve Passaic County zip codes 07011, 07012, 07013, and 07014. Availability and benefits change each year. Call 855-559-1700 for a current list tailored to your doctors and prescriptions.",
  },
,
  {
    question: "Does New Jersey use community rating for Medigap premiums?",
    answer:
      "Yes. New Jersey is a community-rated state, meaning Medigap carriers charge the same premium to all enrollees of a given plan regardless of age. Premiums can still change annually based on factors like inflation and claims experience.",
  }
];

export default function MedicareInsuranceAgentsCliftonNJ() {
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
          Medicare Insurance Agents in Clifton, New Jersey
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Medicare Insurance Agents in Clifton, New Jersey: Licensed Broker
          Covering Passaic County
        </h1>

        <Image
          src="/images/medicare-insurance-agents-in-clifton-new-jersey.webp"
          alt="medicare insurance agents in clifton new jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="mb-3">
          Medicare insurance agents in Clifton, New Jersey don't all work the
          same way. Some represent a single carrier. I'm Anthony Orner, an
          independent broker who quotes 20+ carriers across Passaic County so
          you see real options, not a narrow slice.
        </p>
        <p className="mb-6">
          No fees. No pressure. Just a side-by-side comparison built around your
          doctors, prescriptions, and budget.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Clifton's carrier options across 07011, 07012, 07013, and 07014
          </h2>
          <p className="mb-3">
            Clifton spans four zip codes, and plan availability can shift between
            them. Carrier networks in northern Passaic County include major
            systems like St. Joseph's University Medical Center in Paterson and
            Hackensack Meridian facilities nearby.
          </p>
          <p>
            I check each zip code individually so nothing gets missed. A plan
            that works in 07011 might have a different network or premium in
            07014.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plan G and Plan N rates from top carriers serving Clifton
          </h2>
          <p className="mb-3">
            Medigap Plan G covers everything Original Medicare doesn't except
            the Part B deductible ($283/year in 2026). Plan N costs less per
            month but adds small copays at office visits.
          </p>
          <p>
            Rates vary by carrier, age, and tobacco status. I pull quotes from
            all carriers licensed in Passaic County and line them up so you can
            compare apples to apples in under 10 minutes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage HMO and PPO options in Passaic County
          </h2>
          <p className="mb-3">
            Medicare Advantage plans bundle hospital, medical, and usually drug
            coverage into one card. Many Clifton residents pick them for the
            lower monthly premium and added benefits like dental and vision.
          </p>
          <p>
            The tradeoff: you'll use a network. HMOs require referrals. PPOs
            give more flexibility but cost more out-of-network. I match plans to
            your actual provider list so you don't get surprised mid-treatment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why network changes matter more than you think
          </h2>
          <p className="mb-3">
            Carriers renegotiate hospital contracts every year. A plan that
            covered your specialist last year might drop them in 2026. This is a
            real frustration for people across New Jersey, and it catches folks
            off guard.
          </p>
          <p>
            I verify your doctors and hospitals against current directories
            before recommending anything. If a carrier drops a provider
            mid-year, federal guaranteed issue rights may let you switch without
            underwriting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows for Clifton residents
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Turning 65:</strong> Medigap Open Enrollment runs 6 months
              from the month you're 65 and enrolled in Part B. Best rates, no
              health questions.
            </li>
            <li>
              <strong>Medicare Advantage / Part D:</strong> Annual Enrollment
              runs October 15 through December 7.
            </li>
            <li>
              <strong>Retiring after 65:</strong> Losing employer coverage
              triggers a Special Enrollment Period. Apply early to avoid the Part
              B late enrollment penalty (10% per 12-month delay).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free side-by-side plan comparison for Clifton residents
          </h2>
          <p className="mb-3">
            I'll pull every Medigap and Medicare Advantage plan available in
            your specific zip code, compare premiums, out-of-pocket costs, and
            provider networks, then walk you through it by phone or video.
          </p>
          <p>
            The whole process takes about 15 minutes. You keep the comparison
            whether you enroll or not.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Ready to compare Medicare plans in Clifton?
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline font-bold">
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm opacity-90">
            No cost. No obligation. Independent advice from a licensed NJ
            broker.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in Passaic County
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, Licensed Medicare Broker
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="underline">Compare plans on Medicare.gov</a> · <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="underline">Get started with Medicare</a> · <a href="https://www.state.nj.us/dobi/division_insurance/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (free state counseling)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or file complaints with the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}