import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "hackensack nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
  description:
    "Hackensack NJ Medicare insurance agents — broker Anthony Orner compares Bergen County plans across top carriers at no cost. Free quote: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/hackensack-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "hackensack nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
    description:
      "Hackensack NJ medicare insurance agents — Anthony Orner compares top Bergen County carriers as a licensed independent broker. Free quote in minutes.",
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
      name: "Hackensack NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/hackensack-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hackensack NJ Medicare Insurance Agents: Why an Independent Broker Gets You Better Rates",
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
      "Yes. A licensed Medicare agent helps you compare plans, understand costs, and enroll correctly at no charge to you. An independent broker is especially valuable because they represent multiple carriers instead of just one.",
  },
  {
    question: "Do Medicare insurance agents charge a fee?",
    answer:
      "No. Licensed Medicare agents and brokers are paid by the insurance carriers, not by you. You pay the same premium whether you enroll yourself or work with a broker.",
  },
  {
    question: "How do I find a good Medicare agent in Hackensack?",
    answer:
      "Look for a broker who is independent (not captive to one carrier), licensed in New Jersey, and willing to show you quotes from multiple companies side by side. Ask how many carriers they represent.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right plan depends on your doctors, medications, and budget. In Bergen County, both Medicare Advantage and Medigap plans are widely available. A free rate comparison is the fastest way to find your best fit.",
  },
];

export default function HackensackNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Hackensack NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Hackensack NJ Medicare Insurance Agents: Why an Independent Broker Gets
        You Better Rates
      </h1>

      <Image
        src="/images/hackensack-nj-medicare-insurance-agents.webp"
        alt="Hackensack NJ medicare insurance agents"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Hackensack NJ medicare insurance agents aren't all the same. Some work
        for a single carrier. Others, like me, are independent brokers licensed
        to compare plans from every major insurer in Bergen County. That
        difference can save you hundreds of dollars a year.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, and I help Hackensack residents find the right
        Medicare coverage without the sales pressure.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Medigap and Advantage carriers serving Hackensack in 2025
        </h2>
        <p className="text-gray-700 mb-2">
          Bergen County has strong competition among Medicare carriers. That's
          good news for you. Plans available in the 07601 zip code include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>Medicare Supplement (Medigap) plans from carriers like Aetna, Cigna, and United American</li>
          <li>Medicare Advantage HMO and PPO plans with $0 premium options</li>
          <li>Part D prescription drug plans from multiple insurers</li>
        </ul>
        <p className="text-gray-700">
          Rates vary by carrier, age, and tobacco status. A side-by-side quote
          shows you the real numbers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How Bergen County premiums compare to the rest of NJ
        </h2>
        <p className="text-gray-700 mb-2">
          Bergen County tends to have more carrier options than rural parts of
          New Jersey, which keeps premiums competitive. But Hackensack also sits
          near some of the most expensive hospital systems in the state.
        </p>
        <p className="text-gray-700">
          If you're on Original Medicare, the 2026 Part B premium is $202.90/month with a $283 annual deductible. Medigap picks up the gaps. The Part A deductible is $1,676 per benefit period, which is where a supplement plan earns its keep fast.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Captive agent vs. independent broker: what Hackensack residents should
          know
        </h2>
        <p className="text-gray-700 mb-2">
          A captive agent represents one insurance company. They'll show you that
          company's plans and nothing else. An independent broker like me
          represents multiple carriers and can show you real comparisons.
        </p>
        <p className="text-gray-700 mb-2">
          Both are free. The carrier pays either way. But only one shows you
          every option.
        </p>
        <p className="text-gray-700">
          In a county where hospital network disputes make headlines, having
          someone who can quickly move you to a plan that still covers your
          doctors matters more than most people realize until they need it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why hospital network changes matter for your Medicare plan
        </h2>
        <p className="text-gray-700 mb-2">
          Bergen County residents have seen major hospital systems leave insurer
          networks recently. When your hospital drops out of your plan's network,
          you can face much higher out-of-pocket costs or need to switch
          providers.
        </p>
        <p className="text-gray-700">
          With Original Medicare plus a Medigap supplement, you can go to any
          doctor or hospital that accepts Medicare, anywhere in the country. No
          network restrictions. That flexibility is worth considering if you rely
          on Hackensack-area hospitals.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          When to contact a broker if you're turning 65 in Hackensack
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. It lasts six months. During this window,
          carriers must accept you regardless of health history, at standard
          rates.
        </p>
        <p className="text-gray-700">
          I recommend reaching out about six months before your Part B start
          date. That gives us time to compare every carrier, line up your
          coverage, and avoid gaps.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Request a free rate comparison for your zip code
        </h2>
        <p className="text-gray-700 mb-2">
          Call me and I'll pull real quotes for your specific age, zip code, and
          situation. Takes about 10 minutes. No obligation, no pressure, no
          cost.
        </p>
        <p className="text-gray-700">
          Whether you're new to Medicare, switching plans during Open Enrollment
          (October 15 through December 7), or just want to make sure you're not
          overpaying, I'll give you a straight answer.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to an independent Medicare broker in Hackensack
        </p>
        <p className="text-3xl font-bold mb-3">
          <a href="tel:8555591700" className="hover:underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
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
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/hackensack-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Bergen County Medicare Broker Services
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
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey beneficiaries can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling to Bergen County residents.</div>
      </section>
    </main>
  );
}