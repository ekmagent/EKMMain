import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "jackson nj medicare insurance agents | Free Local Broker Help | MedicareYourself",
  description:
    "Jackson NJ Medicare insurance agents who compare Supplement and Advantage plans across top carriers. Anthony Orner offers free, no-pressure quotes.",
  openGraph: {
    title:
      "jackson nj medicare insurance agents | Free Local Broker Help | MedicareYourself",
    description:
      "Jackson NJ Medicare insurance agents who compare Supplement and Advantage plans across top carriers. Anthony Orner offers free, no-pressure quotes.",
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
      name: "Jackson NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/jackson-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Jackson NJ Medicare Insurance Agents: Independent Broker Comparisons at Zero Cost",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. An independent Medicare agent can compare plans from multiple carriers at once, showing you options you would not find on your own. The carrier pays the agent's commission, so you pay nothing extra for the help.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. Most Jackson residents choosing a Medigap policy lean toward Plan G or Plan N, while others prefer a Medicare Advantage plan with built-in drug coverage. The right choice depends on your doctors, medications, and budget. A licensed broker can run a side-by-side comparison for free.",
  },
  {
    question: "Do Medicare insurance agents charge a fee?",
    answer:
      "No. Licensed Medicare agents and brokers are paid by the insurance carrier when you enroll. You never pay an agent fee, and your premium is the same whether you use a broker or go directly to the company.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an agent who is licensed in your state, works independently (not captive to one carrier), and is willing to show you quotes from several companies. Ask if they handle both Medicare Supplement and Medicare Advantage so you can see the full picture.",
  },
];

export default function JacksonNJMedicareInsuranceAgents() {
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
          Jackson NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Jackson NJ Medicare Insurance Agents: Independent Broker Comparisons at
        Zero Cost
      </h1>

      <Image
        src="/images/jackson-nj-medicare-insurance-agents.webp"
        alt="Jackson NJ Medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Jackson NJ Medicare insurance agents are not all the same. Some work for
        a single carrier and can only show you that company's plans. Others,
        like independent brokers, compare rates across a dozen or more insurers
        so you actually see what is available in your zip code.
      </p>
      <p className="mb-6">
        I'm Anthony Orner, a licensed independent Medicare broker based in New
        Jersey. I help Jackson residents find the right coverage without charging
        a dime. The carriers pay me, not you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Jackson residents should use an independent broker
        </h2>
        <p className="mb-2">
          A captive agent represents one insurance company. An independent broker
          represents you. I pull quotes from multiple carriers, lay them
          side-by-side, and let you decide.
        </p>
        <p>
          Your premium stays the same whether you call a carrier directly or go
          through me. The only difference is you see more options and save
          yourself hours of research.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare plans available in Ocean County for 2025-2026
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G and Plan N are
            the most popular standardized plans. Plan G covers everything
            Original Medicare does not, except the Part B deductible ($257 in
            2026). Plan N has lower premiums but includes small copays.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> HMO and PPO options
            from several carriers serve Ocean County. Many include prescription
            drug coverage, dental, and vision at $0 premium beyond your Part B
            cost.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Standalone drug
            plans pair with Original Medicare and a Medigap policy. Formularies
            vary by carrier, so always check that your medications are covered.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Switching carriers without losing coverage
        </h2>
        <p className="mb-2">
          If you already have a Medicare Advantage plan, you can switch during
          the Annual Enrollment Period from October 15 through December 7. Your
          new plan starts January 1.
        </p>
        <p>
          Switching Medigap plans mid-year is possible but typically requires
          medical underwriting unless you have a federal guaranteed issue right,
          such as losing employer coverage or your plan leaving Ocean County.
          Call me and I will check your eligibility before you apply.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Jackson? Lock in your rate early
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months starting the month
          you turn 65 and are enrolled in Part B. During this window, carriers
          cannot ask health questions or charge higher premiums.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in today's rate and protects you from any
          premium increases that happen before coverage begins. The sooner you
          lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What working with me looks like
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We start with a 10-15 minute phone call about your doctors,
            prescriptions, and budget.
          </li>
          <li>
            I run quotes across every carrier available in Jackson's 08527 zip
            code.
          </li>
          <li>
            You pick the plan that fits. No pressure, no follow-up sales calls.
          </li>
          <li>
            After enrollment, I stay your broker. If you have a billing issue or
            want to review your plan next year, you call me directly.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free quote from a licensed NJ broker
        </h2>
        <p>
          Whether you are new to Medicare or re-evaluating a plan you have had
          for years, I will show you every option in Ocean County and let you
          decide. One call, real numbers, zero cost.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Jackson?
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
          </Link>{" "}
          online.
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner - Licensed Medicare Broker, NJ
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-ocean-county"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in Ocean County
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G vs Plan N: Which Should You Pick?
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