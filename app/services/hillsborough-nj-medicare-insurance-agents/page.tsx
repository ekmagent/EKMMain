import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "hillsborough nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
  description:
    "Hillsborough NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free Somerset County quote.",
  openGraph: {
    title:
      "hillsborough nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
    description:
      "Hillsborough NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free Somerset County quote.",
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
      name: "Hillsborough NJ Medicare Insurance Agents",
      item: "https://www.medicareyourself.com/services/hillsborough-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hillsborough NJ Medicare Insurance Agents — Licensed Independent Broker Serving Somerset County",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/hillsborough-nj-medicare-insurance-agents",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. An independent Medicare broker compares plans from multiple carriers at no cost to you. You get the same plan premiums whether you enroll directly or through a broker, but a broker does the research and annual reviews for you.",
  },
  {
    question: "Do Medicare insurance agents charge a fee?",
    answer:
      "No. Licensed Medicare agents and brokers are paid commissions by the insurance carriers, not by you. There is zero cost for a consultation, plan comparison, or enrollment assistance.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change each year. In New Jersey, several Medicare Advantage and Medigap carriers consistently receive high marks. The best plan for you depends on your doctors, medications, and budget. Call 855-559-1700 for a free comparison.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like PAAD (Pharmaceutical Assistance to the Aged and Disabled) and the Medicare Savings Program, which can help cover Part B premiums and drug costs. Eligibility depends on income. Contact your county Office on Aging or call us for direction.",
  },
];

export default function HillsboroughNJMedicareInsuranceAgents() {
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
          Hillsborough NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Hillsborough NJ Medicare Insurance Agents — Licensed Independent Broker
        Serving Somerset County
      </h1>

      <Image
        src="/images/hillsborough-nj-medicare-insurance-agents.webp"
        alt="Hillsborough NJ Medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Hillsborough NJ Medicare insurance agents are not all the same. Some
        work for a single carrier and can only show you that company's plans. I'm
        Anthony Orner, a licensed independent broker, and I compare plans across
        multiple carriers so you actually see what's available in the 08844 zip
        code.
      </p>
      <p className="mb-6">
        My consultations are free, and I handle enrollment for you. No pressure,
        no cost, no fine print.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker differs from a carrier-employed agent
        </h2>
        <p className="mb-2">
          A carrier agent represents one insurance company. They sell that
          company's plans - period. An independent broker like me is appointed
          with multiple carriers and can lay options side by side.
        </p>
        <p>
          You pay the exact same premium either way. The carrier pays me a
          commission, so using a broker costs you nothing but could save you
          hundreds per year by finding a better-fitting plan.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans in Hillsborough 08844
        </h2>
        <p className="mb-2">
          Hillsborough residents can choose between Medicare Supplement (Medigap)
          plans and Medicare Advantage plans. They work differently:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medigap (Plan G, Plan N, etc.):</strong> Pays after Original
            Medicare. Plan G covers everything except the $257 annual Part B
            deductible. You keep your freedom to see any doctor who accepts
            Medicare nationwide.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Replaces Original Medicare with
            a private plan. Often includes drug coverage and extras like dental
            or vision. Uses a provider network, so check that your doctors
            participate.
          </li>
        </ul>
        <p>
          Neither option is universally "better." It depends on how often you see
          specialists, which prescriptions you take, and what you can budget
          monthly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Somerset County rate factors that affect your premium
        </h2>
        <p className="mb-2">
          Medigap carriers in New Jersey price policies using your zip code, age,
          gender, and tobacco status. Hillsborough falls in Somerset County,
          where rates tend to sit in the mid-range for the state.
        </p>
        <p>
          Your age at enrollment matters most. Locking in a Medigap plan during
          your 6-month Open Enrollment Period (starting the month you turn 65 and
          have Part B) means guaranteed issue - no health questions and no higher
          premiums based on medical history.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing your enrollment matters in Hillsborough
        </h2>
        <p className="mb-2">
          I typically have clients apply for their Medigap plan up to 6 months
          before their Part B start date. This locks in the rate early and
          protects against premium increases before coverage begins.
        </p>
        <p>
          If you delay past your Open Enrollment window, carriers can
          medically underwrite you. That means higher rates or even denial. The
          sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage enrollment windows to know
        </h2>
        <p className="mb-2">
          The Annual Enrollment Period for Medicare Advantage and Part D runs
          October 15 through December 7 each year. During this window, you can
          switch Advantage plans or move between Advantage and Original Medicare.
        </p>
        <p>
          If you're newly eligible for Medicare, you have a separate Initial
          Enrollment Period around your 65th birthday. Call me before that window
          opens so we can compare what's available in Somerset County.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Medicare plan comparison for Hillsborough
        </h2>
        <p className="mb-2">
          I run plan comparisons for Hillsborough residents every day. You tell
          me your doctors, your prescriptions, and your budget. I show you what
          each carrier charges and what you'd actually pay out of pocket.
        </p>
        <p>
          No sign-up required. No fee. Just a straight answer about which plan
          fits your situation.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready for your free Hillsborough Medicare plan comparison?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:855-559-1700"
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
          Anthony Orner — Licensed Medicare Broker, NJ
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in NJ - Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/somerset-county-medicare-broker"
              className="text-blue-700 hover:underline"
            >
              Somerset County Medicare Broker Services
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}