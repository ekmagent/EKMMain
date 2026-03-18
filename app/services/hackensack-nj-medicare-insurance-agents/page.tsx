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
    "Hackensack NJ medicare insurance agents — Anthony Orner is a licensed independent broker comparing top Bergen County carriers. Get a free quote in minutes.",
  openGraph: {
    title:
      "hackensack nj medicare insurance agents | Free Broker Consultation | MedicareYourself",
    description:
      "Hackensack NJ medicare insurance agents — Anthony Orner is a licensed independent broker comparing top Bergen County carriers. Get a free quote in minutes.",
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
      name: "Hackensack NJ Medicare Insurance Agents",
      item: "https://www.medicareyourself.com/services/hackensack-nj-medicare-insurance-agents",
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
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single 'best' plan for everyone. Medigap Plan G is the most popular Supplement option in NJ because it covers nearly all out-of-pocket costs after your $257 annual Part B deductible. Medicare Advantage HMO and PPO plans can work well if you prefer lower premiums and don't mind using a network. The best plan depends on your doctors, medications, and budget - which is exactly what a broker helps you sort out.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent can compare plans across multiple carriers on your behalf and help you enroll correctly. Independent brokers like Anthony Orner are not tied to one company, so the recommendation is based on your needs rather than a sales quota. You pay nothing extra for using a broker - carriers pay the agent directly.",
  },
  {
    question: "Does Medicare have a local office?",
    answer:
      "Medicare itself does not have local offices you can walk into. The Social Security Administration handles enrollment, and you can visit the Hackensack SSA office or call 1-800-MEDICARE. For personalized plan comparisons, working with a local licensed broker is usually faster and more thorough.",
  },
  {
    question: "Are Medicare agents free?",
    answer:
      "Yes. Licensed Medicare agents and brokers are paid by the insurance carriers, not by you. There is no fee, no markup on your premium, and no obligation. Whether you enroll through a broker or directly with the carrier, your monthly premium is the same.",
  },
];

export default function HackensackNJMedicareInsuranceAgents() {
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
          Hackensack NJ Medicare Insurance Agents
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Hackensack NJ Medicare Insurance Agents: Why an Independent Broker Gets You Better Rates
      </h1>

      <Image
        src="/images/hackensack-nj-medicare-insurance-agents.webp"
        alt="Hackensack NJ medicare insurance agents"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Hackensack NJ medicare insurance agents are not all the same. Some work for one carrier. Others, like me, are independent brokers licensed to compare plans across every major insurer in Bergen County.
      </p>
      <p className="mb-6">
        My name is Anthony Orner, and I help Hackensack residents find the right Medicare coverage without the runaround. The call is free. The quote is free. You never pay me a dime.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Advantage carriers serving Hackensack in 2025
        </h2>
        <p className="mb-2">
          Bergen County has strong carrier competition, which works in your favor. Multiple insurers offer Medigap and Medicare Advantage plans with Hackensack-area provider networks.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>Medigap Plans G and N are the most commonly purchased Supplements here</li>
          <li>Medicare Advantage HMOs and PPOs cover Hackensack University Medical Center and surrounding providers</li>
          <li>Part D drug plans vary by formulary - I check your specific medications before recommending one</li>
        </ul>
        <p>Rates vary by carrier, age, and tobacco status. That's why comparing matters.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Bergen County premiums compare to the rest of NJ
        </h2>
        <p className="mb-2">
          Bergen County Medigap premiums tend to run slightly higher than South Jersey counties but lower than Manhattan-adjacent areas in Hudson County. The difference between the cheapest and most expensive Plan G carrier in the 07601 zip code can be $60 or more per month.
        </p>
        <p>
          That gap adds up to over $700 a year for the exact same coverage. One phone call can tell you where you stand.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Captive agent vs. independent broker - what Hackensack residents should know
        </h2>
        <p className="mb-2">
          A captive agent represents one insurance company. They can only show you that company's plans. An independent broker like me is contracted with multiple carriers and can lay out all your options side by side.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Captive agents may push a plan that isn't the lowest rate available</li>
          <li>Independent brokers show you plans from every carrier in your area</li>
          <li>Your premium is the same whether you use a broker or go direct - carriers set the price</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Lock in your Medigap rate before your Part B starts
        </h2>
        <p className="mb-2">
          If you're turning 65 and enrolling in Part B, your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and have Part B. During this window, carriers cannot deny you or charge more based on health history.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage begins. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What you pay out of pocket with Original Medicare in 2026
        </h2>
        <p className="mb-2">Without supplemental coverage, here's what Medicare leaves on your plate:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing facility coinsurance: $209.50/day for days 21-100</li>
          <li>No cap on out-of-pocket costs under Original Medicare alone</li>
        </ul>
        <p className="mt-2">A Medigap plan or Medicare Advantage plan fills these gaps. Which type fits you depends on how you use healthcare.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free rate comparison for your zip code
        </h2>
        <p className="mb-2">
          I can pull real-time quotes for your Hackensack zip code in minutes. Tell me your age, Part B start date, and whether you prefer Medigap or Advantage. I handle the rest.
        </p>
        <p>No pressure. No obligation. Just straight answers from someone who does this every day in Bergen County.</p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Hackensack Medicare broker today
        </p>
        <p className="text-lg mb-4">
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
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/bergen-county-medicare-broker"
              className="text-blue-700 hover:underline"
            >
              Bergen County Medicare Broker - Full County Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey - Costs and Benefits
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare - Deadlines and Penalties
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}