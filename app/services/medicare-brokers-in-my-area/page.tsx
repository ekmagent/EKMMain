import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare brokers in my area | Free NJ Plan Comparison | MedicareYourself",
  description:
    "Searching for Medicare brokers in your area? Anthony Orner, licensed in NJ & 34 states, compares Medigap and Advantage plans free. Call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-brokers-in-my-area" },
  openGraph: {
    title:
      "medicare brokers in my area | Free NJ Plan Comparison | MedicareYourself",
    description:
      "Medicare brokers in your area of New Jersey. Anthony Orner is a licensed independent broker who compares Medigap and Advantage plans for free. Call today.",
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
      name: "Medicare Brokers in My Area",
      item: "https://medicareyourself.com/services/medicare-brokers-in-my-area",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Brokers in Your Area: What to Look For in NJ",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How do I find a licensed Medicare broker near me in NJ?",
    answer:
      "Search the CMS Medicare Agent/Broker lookup tool or your state's Department of Banking and Insurance license verification site. Both confirm active licenses. Or call us at 855-559-1700 and we'll verify our credentials with you on the phone.",
  },
  {
    question: "Do Medicare brokers charge a fee for their services?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There's no fee for plan comparisons, enrollment help, or ongoing support. Your premium stays the same whether you use a broker or enroll directly.",
  },
  {
    question:
      "What's the difference between a captive and independent Medicare broker?",
    answer:
      "A captive agent represents one insurance company and can only show you that carrier's plans. An independent broker is appointed with multiple carriers and compares plans across companies to find your best fit. Always ask before you sit down.",
  },
  {
    question: "Can a Medicare broker help me switch plans after enrollment?",
    answer:
      "Yes. During the Medicare Advantage/Part D Open Enrollment (October 15 through December 7) or if you qualify for a Special Enrollment Period, a broker can help you compare new options and switch. A good broker checks in annually to make sure your plan still works.",
  },
];

export default function MedicareBrokersInMyArea() {
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
        <span className="text-gray-700">Medicare Brokers in My Area</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Brokers in Your Area: What to Look For in NJ
        </h1>

        <Image
          src="/images/medicare-brokers-in-my-area_vector.webp"
          alt="Medicare brokers in my area"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare brokers in your area aren't all the same. Some work for one
          carrier. Others compare dozens. Knowing the difference before you sit
          down can save you hundreds of dollars a year and a lot of frustration.
        </p>
        <p className="text-lg mb-6">
          Here's what to check before trusting anyone with your Medicare
          decisions in New Jersey.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to verify a Medicare broker is licensed in your state
          </h2>
          <p className="mb-2">
            Every legitimate Medicare broker holds a state insurance license and
            active CMS (Centers for Medicare & Medicaid Services) certifications.
            Two ways to check:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              New Jersey Department of Banking and Insurance license lookup at{" "}
              <strong>nj.gov/dobi</strong>
            </li>
            <li>
              CMS Medicare Plan Finder agent/broker search at{" "}
              <strong>medicare.gov</strong>
            </li>
          </ul>
          <p>
            If a broker can't give you their NPN (National Producer Number) on
            the spot, walk away.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Captive vs. independent Medicare brokers and why it matters
          </h2>
          <p className="mb-2">
            A captive agent sells plans from one insurance company. That's it.
            They might be great at explaining that carrier's options, but they
            literally cannot show you anything else.
          </p>
          <p>
            An independent broker is appointed with multiple carriers. I compare
            Medigap and Medicare Advantage plans across companies so the
            recommendation actually fits your doctors, prescriptions, and budget.
            Always ask: "How many carriers do you represent?"
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a local NJ Medicare broker can do that a 1-800 number cannot
          </h2>
          <p className="mb-2">
            The person on a national hotline reads a script. They don't know
            that your cardiologist is in the Hackensack Meridian network or that
            RWJBarnabas just changed its MA contracts.
          </p>
          <p>
            A local broker knows which plans actually work with the providers you
            use. I sit across the table from you, pull up your specific
            medications in real time, and show you actual out-of-pocket numbers.
            Not estimates. Numbers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why "free" really means free
          </h2>
          <p className="mb-2">
            People are skeptical. I get it. But Medicare brokers are paid a
            commission by the insurance carrier you choose. Your premium is
            identical whether you enroll through me, through the carrier
            directly, or through medicare.gov.
          </p>
          <p>
            The difference: you get a person who answers the phone when
            something goes wrong. That costs you nothing extra.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Timing matters more than most people realize
          </h2>
          <p className="mb-2">
            If you're turning 65, your Medigap Open Enrollment Period starts the
            month you turn 65 and are enrolled in Part B. It lasts 6 months.
            During that window, carriers must accept you regardless of health
            history.
          </p>
          <p className="mb-2">
            Miss it, and carriers in most states can charge more or deny
            coverage based on pre-existing conditions. The Part B late
            enrollment penalty is 10% for every 12-month period you delayed
            without qualifying coverage.
          </p>
          <p>
            Start the conversation at least 6 months before your Part B start
            date to lock in the best rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Talk to Anthony Orner, a local NJ Medicare broker
          </h2>
          <p className="mb-2">
            I'm Anthony Orner, a licensed independent Medicare broker based in
            New Jersey. I work with multiple carriers, I don't charge you a
            dime, and I'll tell you straight if a plan doesn't make sense for
            your situation.
          </p>
          <p>
            Whether you're comparing Medigap Plan G vs. Plan N, weighing
            Medicare Advantage, or still working and unsure when to enroll, one
            call clears it up.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Call 855-559-1700 for a free plan comparison
          </p>
          <p className="mb-4">
            No pressure, no cost, no obligation. Just clear answers from a local
            broker.
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: Costs and Coverage
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
                href="/learn/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, Licensed NJ Medicare Broker
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
                href="/services/best-medicare-broker-no-cost-to-you"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Broker No Cost To You
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">NJ residents can verify a broker's license through the <a href="https://www.njdobi.org/DOBI_LSRCH/lookup.htm" target="_blank" rel="noopener noreferrer" className="underline">NJ Department of Banking and Insurance license lookup</a> or get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can verify a broker's license through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can verify a broker's license through the <a href="https://www.state.nj.us/dobi/inslic.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify a broker's license through the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify a broker's license through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Verify a NJ license or get free counseling through <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can confirm a broker's license through the <a href="https://www.state.nj.us/dobi/inslic.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ Department of Banking and Insurance</a> or get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify a broker's license through the <a href="https://www.state.nj.us/dobi/insurance.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}