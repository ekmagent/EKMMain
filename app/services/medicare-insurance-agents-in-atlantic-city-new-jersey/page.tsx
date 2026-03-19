import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in atlantic city new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare insurance agents in Atlantic City New Jersey — Anthony Orner compares plans from top carriers in Atlantic County. Free quotes, licensed broker support.",
  openGraph: {
    title:
      "medicare insurance agents in atlantic city new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Atlantic City New Jersey — Anthony Orner compares plans from top carriers in Atlantic County. Free quotes, licensed broker support.",
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
      name: "Medicare Insurance Agents in Atlantic City, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-atlantic-city-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Atlantic City, New Jersey: Honest Broker Help",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no cost to you. Brokers are paid by insurance companies, not by you, so there's no markup on your premium whether you use one or not.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "It depends on your doctors, prescriptions, and budget. Atlantic County residents typically choose between Medigap Plan G or Plan N for predictable costs, or a Medicare Advantage HMO/PPO for lower premiums with network-based care. A broker can compare both side by side for your situation.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker (not a captive agent tied to one company), a valid NJ insurance license, and someone who asks about your doctors and medications before recommending a plan. Avoid anyone who pressures you to enroll on the spot.",
  },
  {
    question:
      "When is the best time to enroll in Medicare in Atlantic City?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts 6 months. For Medicare Advantage or Part D, the Annual Enrollment Period runs October 15 through December 7. Missing these windows can mean higher costs or fewer plan options.",
  },
];

export default function MedicareInsuranceAgentsAtlanticCityNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Atlantic City, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Atlantic City, New Jersey: Honest Broker
        Help
      </h1>

      <Image
        src="/images/hub_medicare-insurance-agents-in-atlantic-city-new-jersey.webp"
        alt="medicare insurance agents in atlantic city new jersey"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Atlantic City, New Jersey should do one
        thing well: match you with the right plan based on your doctors, your
        prescriptions, and your budget. I'm Anthony Orner, a licensed
        independent broker serving Atlantic County.
      </p>
      <p className="text-lg mb-6">
        I compare plans from top carriers so you don't have to. No cost. No
        pressure. No catch.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Atlantic City residents should use an independent broker
        </h2>
        <p className="mb-2">
          A captive agent sells one company's plans. An independent broker like
          me compares plans across carriers. That distinction matters when you're
          choosing between a $0-premium Advantage plan and a Medigap plan that
          costs more monthly but shields you from surprise bills.
        </p>
        <p>
          My service is free. Carriers pay me the same commission regardless of
          which plan you pick, so my only incentive is finding the right fit.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans serving Atlantic County
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Plan G:</strong> Covers everything Original Medicare
            doesn't except the Part B deductible ($283/year in 2026). Rates vary
            by carrier and age.
          </li>
          <li>
            <strong>Medigap Plan N:</strong> Lower premiums than Plan G, with
            small copays at office visits and the ER.
          </li>
          <li>
            <strong>Medicare Advantage (HMO/PPO):</strong> Network-based plans
            that often include dental, vision, and drug coverage. Available from
            several carriers in Atlantic County.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common enrollment pitfalls for shore-area retirees
        </h2>
        <p className="mb-2">
          Atlantic City retirees run into the same problems I see across South
          Jersey. The biggest: missing your 6-month Medigap Open Enrollment
          window. During those 6 months (starting when you're 65+ and enrolled
          in Part B), carriers can't deny you or charge more for health
          conditions. After it closes, they can.
        </p>
        <p>
          Another common issue: choosing a Medicare Advantage plan without
          checking if AtlantiCare or your specialists are in-network. Network
          disruptions happen. One local health system recently announced it would
          stop accepting a major insurer's plans starting in 2026. That kind of
          change can upend your care overnight.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect when we talk
        </h2>
        <p className="mb-2">
          I'll ask about your current doctors, medications, and how often you
          travel. Then I'll run a comparison showing your estimated annual
          out-of-pocket costs across the plans available in your ZIP code.
        </p>
        <p>
          The whole call takes about 15 to 20 minutes. You walk away with a
          clear recommendation and zero obligation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>SNF coinsurance (days 21-100): $209.50/day</li>
          <li>
            Part B late enrollment penalty: 10% for every 12-month period you
            delayed
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Atlantic City Medicare quote from Anthony Orner
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring from the casinos, or rethinking a
          plan that isn't working, I'll give you a straight answer. I serve
          Atlantic City, Brigantine, Northfield, Egg Harbor Township, and all of
          Atlantic County.
        </p>
        <p>Call today or request a quote online. No sign-up required.</p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to a Licensed Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which saves you more?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: A side-by-side comparison
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/new-jersey-medicare-enrollment"
              className="text-blue-600 hover:underline"
            >
              New Jersey Medicare enrollment guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-south-jersey"
              className="text-blue-600 hover:underline"
            >
              Find a Medicare broker in South Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}