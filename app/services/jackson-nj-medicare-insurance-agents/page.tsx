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
    "Jackson NJ Medicare agents compare Advantage & Supplement plans across top carriers. Free, no-pressure quotes from broker Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/jackson-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "jackson nj medicare insurance agents | Free Local Broker Help | MedicareYourself",
    description:
      "Jackson NJ Medicare insurance agents compare Supplement and Advantage plans across top carriers. Anthony Orner offers free, no-pressure quotes. Call today.",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Do Medicare insurance agents charge a fee?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carrier, not by you. The plan costs the same whether you enroll directly or through a broker. You get comparison help at zero additional cost.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "An independent broker compares plans from multiple carriers side by side, which you can't do on a single carrier's website. They handle paperwork, answer billing questions, and help with plan changes during future enrollment periods.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan. The right choice depends on your doctors, prescriptions, and budget. A Medigap Plan G or Plan N works well for many NJ residents, while Medicare Advantage may suit those who want lower premiums with bundled benefits. A broker can model both options for you.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a broker who is licensed in New Jersey, represents multiple carriers (not just one), and doesn't pressure you. Ask if they'll help you review your plan every year. If they only push one option, find someone else.",
  },
];

export default function JacksonNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Jackson NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Jackson NJ Medicare Insurance Agents: Independent Broker Comparisons at Zero Cost
      </h1>

      <Image
        src="/images/jackson-nj-medicare-insurance-agents.webp"
        alt="Jackson NJ Medicare insurance agents"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Jackson NJ Medicare insurance agents who work independently can compare Supplement and Advantage plans across every major carrier in Ocean County. That means you see real options, not just the one plan a captive agent is paid to sell.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed NJ broker. I help Jackson residents find the right Medicare coverage without charging a dime.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Jackson residents should use an independent broker
        </h2>
        <p className="text-gray-700 mb-2">
          Jackson sits in Ocean County, where carrier networks and hospital affiliations shift every year. Community Medical Center in Toms River, Monmouth Medical Center Southern Campus in Lakewood, and specialists across the Route 9 corridor all contract differently with each plan.
        </p>
        <p className="text-gray-700">
          A captive agent can only show you their company's products. An independent broker pulls quotes from multiple carriers so you can compare copays, networks, and premiums in one conversation. Same plan price either way.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare plans available in Ocean County for 2025–2026
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Medigap (Supplement) plans:</strong> Plans G and N are the most popular in NJ. They cover Part A and Part B cost-sharing so you pay little or nothing at the doctor. Rates vary by carrier and age.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> HMO and PPO options with $0 or low premiums. Many include dental, vision, and Part D drug coverage. Network restrictions apply.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Standalone drug coverage for anyone on Original Medicare plus a Supplement.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          For 2026, the Part B premium is $202.90/month and the Part A deductible is $1,676 per benefit period. These costs matter when deciding between Supplement and Advantage.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Switching carriers without losing coverage
        </h2>
        <p className="text-gray-700 mb-2">
          One fear I hear constantly: "If I switch, will I have a gap in coverage?" The short answer is no, if you time it correctly. Medicare Advantage and Part D changes happen during Open Enrollment (October 15 through December 7) and take effect January 1.
        </p>
        <p className="text-gray-700">
          Medigap switches are trickier. Outside your initial 6-month Medigap Open Enrollment Period, carriers can underwrite your health. Federal guaranteed issue rights kick in if you lose employer coverage, your plan leaves the area, or your carrier violates its contract. I walk you through every scenario before we file anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What happens when a carrier drops your provider
        </h2>
        <p className="text-gray-700 mb-2">
          Network disruptions are real in South Jersey. Hospitals and large health systems renegotiate contracts regularly. If your doctors suddenly stop accepting your plan, you may have a Special Enrollment Period to switch.
        </p>
        <p className="text-gray-700">
          This is exactly why an annual plan review matters. I check your doctors and prescriptions against updated networks every fall so you're never caught off guard.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          New to Medicare and turning 65 in Jackson?
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During these 6 months, no carrier in New Jersey can deny you or charge more based on health history. Miss that window and underwriting applies.
        </p>
        <p className="text-gray-700">
          If you're still working with employer coverage, the rules change. Call me 6 months before your Part B start date so we can lock in the best rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free quote from a licensed NJ broker
        </h2>
        <p className="text-gray-700 mb-2">
          I'll compare plans, check your doctors' networks, and review your prescriptions. No cost, no pressure, no obligation. One call saves you hours of research.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">Talk to a Local Medicare Broker</p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-semibold">
            get a free quote online
          </Link>
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker serving Jackson and all of Ocean County, NJ
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
              Medigap Plan G vs. Plan N: Which Saves You More?
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
              href="/services/lakewood-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Ocean County Medicare Broker: Local Plan Comparisons
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Deadlines and Penalties
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Compare</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free one-on-one counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}