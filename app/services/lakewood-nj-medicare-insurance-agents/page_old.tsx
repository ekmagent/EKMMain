import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "lakewood nj medicare insurance agents | Free Rate Comparison | MedicareYourself",
  description:
    "Lakewood NJ Medicare insurance agents compare plans at no cost. Anthony Orner shops every top carrier in Ocean County. Call or book online for a free quote.",
  openGraph: {
    title:
      "lakewood nj medicare insurance agents | Free Rate Comparison | MedicareYourself",
    description:
      "Lakewood NJ Medicare insurance agents compare plans at no cost. Anthony Orner shops every top carrier in Ocean County. Call or book online for a free quote.",
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
      name: "Lakewood NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/lakewood-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Lakewood NJ Medicare Insurance Agents: Independent Broker Services at No Cost to You",
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
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent Medicare agent shops multiple carriers on your behalf at no cost to you. The carriers pay the agent, not you. You get unbiased plan comparisons and someone to call when you have a claim issue or need to switch plans.",
  },
  {
    question: "What is the highest reviewed Medicare insurance in NJ?",
    answer:
      "Plan ratings change every year. The best plan depends on your doctors, prescriptions, and budget. An independent broker in Ocean County can pull current star ratings and compare them side by side so you pick the highest-rated option that actually fits your situation.",
  },
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like PAAD (Pharmaceutical Assistance to the Aged and Disabled) and the Medicare Savings Program, which can help cover Part B premiums and drug costs. Income limits apply. Your local SHIP office or an independent Medicare agent can help you check eligibility.",
  },
  {
    question: "How much does it cost to use a Medicare agent in Lakewood?",
    answer:
      "Nothing. Independent Medicare agents are paid by the insurance carriers. You pay the same premium whether you enroll directly or through an agent. There is no markup, no hidden fee, and no obligation.",
  },
];

export default function LakewoodNJMedicareInsuranceAgents() {
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
          Lakewood NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Lakewood NJ Medicare Insurance Agents: Independent Broker Services at No
        Cost to You
      </h1>

      <Image
        src="/images/lakewood-nj-medicare-insurance-agents.webp"
        alt="Lakewood NJ Medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Lakewood NJ Medicare insurance agents who work independently can compare
        every major carrier in Ocean County for you - without charging a dime.
        I'm Anthony Orner, a licensed Medicare broker serving Lakewood and
        surrounding towns. I work for you, not one insurance company.
      </p>
      <p className="mb-6">
        Whether you're turning 65 or reviewing your current coverage, a quick
        phone call can show you if you're overpaying.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How independent agents save Lakewood residents money
        </h2>
        <p className="mb-2">
          A captive agent represents one carrier. I represent dozens. That means
          I can pull quotes from Aetna, Cigna, Mutual of Omaha, United American,
          and others in a single sitting.
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-1">
          <li>You see every rate available for your age and zip code</li>
          <li>You never pay more than if you called the carrier directly</li>
          <li>
            If a cheaper option comes out next year, I let you know proactively
          </li>
        </ul>
        <p>
          The carriers pay my commission. Your premium stays the same either way.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement vs. Advantage plans in Ocean County
        </h2>
        <p className="mb-2">
          Medigap (Medicare Supplement) pays after Original Medicare. You keep
          any doctor who accepts Medicare. Plan G is the most popular option - it
          covers everything except the $257 Part B annual deductible.
        </p>
        <p className="mb-2">
          Medicare Advantage bundles Part A, B, and usually Part D into one plan.
          Premiums can be $0, but you'll use a network and pay copays at each
          visit.
        </p>
        <p>
          Neither type is universally "better." The right choice depends on your
          doctors, medications, and how often you travel. I lay out both options
          side by side so you can decide with real numbers in front of you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common enrollment mistakes Lakewood seniors make
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Missing the Medigap Open Enrollment window.</strong> You get
            6 months starting the month you turn 65 and have Part B. During this
            window, no health questions and no higher premiums. Miss it, and
            carriers can deny you or charge more.
          </li>
          <li>
            <strong>Delaying Part B without creditable coverage.</strong> If you
            don't have employer group coverage, every 12 months you delay adds a
            10% penalty to your Part B premium for life.
          </li>
          <li>
            <strong>Picking a plan based on premium alone.</strong> A $0 premium
            Advantage plan can cost thousands in copays if you need surgery or
            specialty care.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Lakewood residents choose an independent broker
        </h2>
        <p className="mb-2">
          Lakewood has one of the largest and most diverse senior populations in
          Ocean County. Many residents here are on fixed incomes and every dollar
          counts.
        </p>
        <p>
          An independent broker does the legwork - comparing rates, checking
          doctor networks, verifying drug formularies - so you don't have to call
          eight different 1-800 numbers yourself.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to call for a plan review
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You're turning 65 in the next 6 to 12 months</li>
          <li>Your current premium went up at renewal</li>
          <li>You're losing employer or union coverage</li>
          <li>
            Medicare Advantage Open Enrollment runs October 15 through December 7
          </li>
          <li>You moved into Ocean County from out of state</li>
        </ul>
        <p className="mt-2">
          Any of these situations opens a window to switch. Don't let it close
          without getting a comparison.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free side-by-side rate comparison
        </h2>
        <p className="mb-2">
          I'll pull quotes from every top-rated carrier available in the 08701
          zip code. You'll see plan names, monthly premiums, and out-of-pocket
          costs on one sheet. No pressure, no obligation.
        </p>
        <p>Call me at 855-559-1700 or book a time online. Takes about 15 minutes.</p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready for your free Medicare quote?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or book online - no cost, no obligation.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-ocean-county-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Ocean County NJ
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ: Benefits and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Key Deadlines
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}