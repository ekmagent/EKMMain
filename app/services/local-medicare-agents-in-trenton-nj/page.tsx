import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in trenton nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local Medicare agents in Trenton, NJ compare every major plan free. Licensed broker Anthony Orner serves Mercer County — call 855-559-1700 for help today.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-trenton-nj" },
  openGraph: {
    title:
      "local medicare agents in trenton nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local Medicare agents in Trenton, NJ compare every major carrier at no cost. Anthony Orner offers free licensed broker guidance in Mercer County.",
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
      name: "Local Medicare Agents in Trenton NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-trenton-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Local Medicare Agents in Trenton, NJ: Licensed Broker Help at No Cost",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/local-medicare-agents-in-trenton-nj",
};

const faqs = [
  {
    question: "How do I pick a Medicare agent in Trenton, NJ?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one. Ask if they charge a fee (they shouldn't). A good agent will compare plans side by side, verify your doctors are in-network, and check your prescriptions against each plan's formulary before recommending anything.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) to reach the federal helpline, but wait times can be long. For personalized plan comparisons with a local broker who knows Mercer County providers, call Anthony Orner at 855-559-1700. No automated menus, no pressure.",
  },
  {
    question: "Do local Medicare agents charge a fee?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. The plans cost the same whether you enroll directly or through a broker. The difference is you get expert guidance at zero extra cost.",
  },
  {
    question: "Can a Trenton Medicare broker help if my provider drops my insurance?",
    answer:
      "Yes. If your hospital or doctor network changes, a local broker can quickly identify which plans still cover your providers. This is especially relevant in Mercer County as carrier-provider relationships shift from year to year.",
  },
];

export default function LocalMedicareAgentsTrentonNJ() {
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
        <span className="text-gray-700">Local Medicare Agents in Trenton NJ</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Local Medicare Agents in Trenton, NJ: Licensed Broker Help at No Cost
        </h1>

        <Image
          src="/images/local-medicare-agents-in-trenton-nj.webp"
          alt="local medicare agents in trenton nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Trenton, NJ can save you hours of confusion and potentially hundreds of dollars a year by matching you with the right plan for your doctors, prescriptions, and budget. I&apos;m Anthony Orner, an independent licensed broker serving Mercer County. My help is free because carriers pay me directly, so you never see a bill.
        </p>
        <p className="text-lg mb-6">
          Whether you&apos;re turning 65, losing employer coverage, or frustrated that a hospital system just dropped your carrier, I&apos;ll show you every option that fits your situation.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What makes a broker local and why it matters
          </h2>
          <p className="mb-2">
            A call center agent in another state doesn&apos;t know that Capital Health and RWJ Barnabas are the two major hospital systems in this area. They can&apos;t tell you which Medicare Advantage networks include St. Francis Medical Center or which Medigap carriers have the strongest track record in Mercer County.
          </p>
          <p>
            Local means I know which providers accept which plans. That&apos;s the difference between picking a plan that looks good on paper and one that actually works when you need care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement carriers serving Mercer County
          </h2>
          <p className="mb-2">
            Several major Medigap carriers write policies in the Trenton area. Rates vary by carrier, your age, and your tobacco status. I compare them all in one sitting so you see the real numbers:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Plan G covers everything Original Medicare doesn&apos;t except the Part B deductible ($283/year in 2026)</li>
            <li>Plan N offers lower premiums with small copays at office visits</li>
            <li>High-deductible Plan G suits healthy beneficiaries who want lower monthly costs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Trenton-area enrollment deadlines you cannot afford to miss
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge more for health conditions.
            </li>
            <li>
              <strong>Medicare Advantage / Part D:</strong> October 15 through December 7 each year.
            </li>
            <li>
              <strong>Late enrollment penalty for Part B:</strong> 10% added to your $202.90/month premium for every 12 months you delayed without qualifying coverage.
            </li>
          </ul>
          <p className="mt-2">
            Miss your Medigap window and you may face medical underwriting. That&apos;s a risk you don&apos;t need to take.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When your provider drops your carrier
          </h2>
          <p>
            Carrier-provider breakups are becoming more common across New Jersey. If your hospital or specialist suddenly stops accepting your plan, you may qualify for a Special Enrollment Period or a federal guaranteed issue right to switch Medigap carriers. I&apos;ll check your eligibility and find plans that still include your doctors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How a free plan comparison actually works
          </h2>
          <p className="mb-2">
            You give me your list of doctors, medications, and pharmacy. I run them through every available plan in Mercer County. Within one call, you&apos;ll see:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Which plans cover your providers</li>
            <li>Estimated annual drug costs under each Part D option</li>
            <li>Monthly premium differences between Medigap carriers</li>
            <li>Any Extra Help or Low-Income Subsidy programs you may qualify for</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free consultation with Anthony Orner
          </h2>
          <p>
            One call. No obligation. I&apos;ll walk you through your options, answer every question, and only recommend a plan if it genuinely fits. If you&apos;re in Trenton, Hamilton, Ewing, Lawrence, or anywhere in Mercer County, I&apos;m your local resource.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-2xl font-bold mb-2">Talk to a Local Medicare Broker</p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-semibold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-semibold">
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm opacity-90">
            No fees. No pressure. Just clear answers from a licensed NJ broker.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in NJ: Full Breakdown
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs Plan N: Which Saves More?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Deadlines You Need to Know
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> · <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to Someone at Medicare.gov</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey beneficiaries can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey beneficiaries can also get free local counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey seniors can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}