import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in fort lee new jersey | Free Broker Help | MedicareYourself",
  description:
    "Medicare insurance agents in Fort Lee, New Jersey — Anthony Orner compares Medigap and Advantage plans from top carriers in Bergen County. Free quote.",
  openGraph: {
    title:
      "medicare insurance agents in fort lee new jersey | Free Broker Help | MedicareYourself",
    description:
      "Medicare insurance agents in Fort Lee, New Jersey — Anthony Orner compares Medigap and Advantage plans from top carriers in Bergen County. Free quote.",
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
      name: "Medicare Insurance Agents in Fort Lee, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-fort-lee-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Fort Lee, New Jersey — Independent Broker for Bergen County",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent costs you nothing - carriers pay the broker, not you. An independent broker can compare plans across multiple insurance companies, which means you see your actual options instead of just one company's lineup. In Fort Lee, where Bergen County has strong carrier competition, working with a broker often surfaces lower rates you would not find on your own.",
  },
  {
    question: "How do I choose a Medicare insurance agent?",
    answer:
      "Look for a broker who is licensed in New Jersey, independent (not captive to one carrier), and willing to show you both Medigap and Medicare Advantage options. Ask how many carriers they represent. If the answer is one or two, keep looking. A good agent will also explain the tradeoffs honestly, not just push the plan with the highest commission.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. If you want predictable costs and freedom to see any doctor who accepts Medicare, Medigap Plan G is the most popular supplement in NJ. If you want low premiums and are comfortable with a network, a Medicare Advantage HMO or PPO may work. The right plan depends on your doctors, prescriptions, and budget. Call 855-559-1700 for a free comparison.",
  },
];

export default function MedicareAgentsFortLeeNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Fort Lee, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Fort Lee, New Jersey — Independent Broker
        for Bergen County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-fort-lee-new-jersey.webp"
        alt="Medicare insurance agents in Fort Lee New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Fort Lee, New Jersey give you a direct line
        to plan comparisons you will not find browsing carrier websites alone.
        I'm Anthony Orner, a licensed independent Medicare broker serving Bergen
        County. I work with multiple carriers so I can show you real options -
        not just one company's products.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent represents one insurance company. That means every
          recommendation points to the same carrier, regardless of whether it
          fits your situation. An independent broker like me contracts with
          multiple carriers and can lay out side-by-side quotes.
        </p>
        <p>
          You pay the same premium either way. Carriers compensate brokers
          directly, so my help costs you zero dollars.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Medicare Advantage options in Bergen County
        </h2>
        <p className="mb-2">
          Fort Lee residents have strong access to both Medigap supplements and
          Medicare Advantage plans. Bergen County sits in a competitive market,
          which typically means more plan choices and better pricing.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>
            <strong>Medigap Plan G</strong> - covers everything Original
            Medicare does not, except the Part B deductible ($257/year in 2026)
          </li>
          <li>
            <strong>Medigap Plan N</strong> - lower premiums than Plan G, with
            small copays at some office visits
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> - HMO and PPO options
            that bundle medical, drug, and sometimes dental/vision coverage
          </li>
        </ul>
        <p>
          Rates vary by carrier, age, and zip code. I will pull actual numbers
          for your specific situation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Fort Lee residents: key dates and enrollment periods to know
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and have Part B. During this window, no health
            questions, no higher premiums. Miss it and underwriting applies.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Annual Enrollment:</strong>{" "}
            October 15 through December 7 each year
          </li>
          <li>
            <strong>Part B monthly premium (2026):</strong> $185/month
          </li>
          <li>
            <strong>Part A deductible (2026):</strong> $1,676 per benefit period
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why locking in your Medigap rate early matters
        </h2>
        <p className="mb-2">
          My practice is to have clients apply for their Medigap plan up to 6
          months before their Part B start date. This locks in the rate early and
          protects you from premium increases before coverage even begins.
        </p>
        <p>
          The sooner you lock in, the better your rate. Waiting until after your
          open enrollment window closes puts you at risk of medical underwriting
          or higher premiums.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Fort Lee Medicare beneficiaries should watch for
        </h2>
        <p className="mb-2">
          Fort Lee's proximity to New York City means some residents see doctors
          across state lines. If you use providers in both NJ and NY, a Medigap
          plan with Original Medicare gives you the widest access - any doctor
          nationwide who accepts Medicare.
        </p>
        <p>
          Medicare Advantage plans use networks. If your cardiologist is in
          Manhattan and your primary care doctor is in Fort Lee, check that both
          are in-network before enrolling.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan comparison from a licensed NJ broker
        </h2>
        <p>
          I will compare Medigap and Advantage plans from multiple carriers,
          show you what each one costs, and explain the tradeoffs in plain
          English. No pressure, no obligation. Call me or request a quote online.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Fort Lee?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner — Licensed Medicare Broker, NJ
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plans-bergen-county-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plans in Bergen County, NJ
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-supplement-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare: Deadlines and Penalties
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}