import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in clifton new jersey | Free Quote, No Fees | MedicareYourself",
  description:
    "Medicare insurance agents in Clifton, New Jersey — Anthony Orner is an independent broker quoting 20+ carriers in Passaic County. Free comparison, zero fees.",
  openGraph: {
    title:
      "medicare insurance agents in clifton new jersey | Free Quote, No Fees | MedicareYourself",
    description:
      "Medicare insurance agents in Clifton, New Jersey — Anthony Orner is an independent broker quoting 20+ carriers in Passaic County. Free comparison, zero fees.",
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
      name: "Medicare Insurance Agents in Clifton, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-clifton-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Clifton, New Jersey: Licensed Broker Covering Passaic County",
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
      "Yes. An independent Medicare agent compares plans from multiple carriers at no cost to you. Brokers are paid by the insurance companies, so you never pay a fee for the help. You get the same premium whether you enroll directly or through an agent, but you also get someone who can explain what each plan actually covers.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. If you want predictable costs with any doctor who accepts Medicare, a Medigap plan like Plan G or Plan N is worth looking at. If you want lower premiums and are okay with a provider network, Medicare Advantage HMO or PPO plans may work. The right choice depends on your doctors, medications, and budget.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers, not just one company. Ask how many plans they can quote. An independent agent working with 20+ carriers will give you a much broader comparison than a captive agent tied to a single insurer.",
  },
  {
    question: "What is the best insurance company for people on Medicare?",
    answer:
      "Top carriers serving Clifton and Passaic County include Aetna, Cigna, Mutual of Omaha, United American, and UnitedHealthcare, among others. Rates vary by your age, zip code, and tobacco status. The best company for you is the one offering the coverage you need at a rate that fits your budget.",
  },
];

export default function MedicareInsuranceAgentsCliftonNJ() {
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
          Medicare Insurance Agents in Clifton, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Clifton, New Jersey: Licensed Broker Covering Passaic County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-clifton-new-jersey.webp"
        alt="Medicare insurance agents in Clifton New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="mb-4">
        Medicare insurance agents in Clifton, New Jersey can save you hours of
        research by pulling quotes from multiple carriers at once. I'm Anthony
        Orner, an independent broker licensed in New Jersey. I work with over 20
        carriers and charge you nothing - the insurance companies pay me directly.
      </p>

      <p className="mb-6">
        Whether you live near Main Memorial Park or closer to the Passaic River,
        I can quote Medigap, Medicare Advantage, and Part D plans for every
        Clifton zip code.
      </p>

      <PhoneCTA />

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Clifton's carrier options: plans available in 07011, 07012, 07013, and 07014
      </h2>
      <p className="mb-4">
        All four Clifton zip codes fall within Passaic County, and most major
        carriers offer coverage across the entire county. That means your
        neighbor in 07014 and your friend in 07011 typically have access to the
        same plan lineup.
      </p>
      <p className="mb-4">
        Carriers active in this area include Aetna, Cigna, Mutual of Omaha,
        United American, UnitedHealthcare, and several others. Rates and plan
        availability can shift each year, so a current comparison matters.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Plan G and Plan N rates from top carriers serving Clifton
      </h2>
      <p className="mb-4">
        Plan G is the most popular Medigap option in New Jersey right now. It
        covers everything Original Medicare doesn't, except the Part B
        deductible of $257 per year. Plan N is similar but has small copays at
        some office visits and a slightly lower premium.
      </p>
      <p className="mb-4">
        Rates vary by your age, gender, and tobacco use. Rather than guess, call
        me and I'll pull real-time quotes from every carrier writing in Passaic
        County. Takes about 10 minutes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Medicare Advantage HMO and PPO options in Passaic County
      </h2>
      <p className="mb-4">
        Medicare Advantage plans bundle Part A, Part B, and usually Part D into
        one plan. Many have $0 monthly premiums. The tradeoff is you use a
        network of doctors and hospitals.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>HMO plans require referrals for specialists and keep costs lower</li>
        <li>PPO plans let you see out-of-network providers at a higher cost</li>
        <li>Many include dental, vision, hearing, and gym memberships</li>
      </ul>
      <p className="mb-4">
        Open Enrollment for Medicare Advantage runs October 15 through December
        7 each year. If you're turning 65, you have additional enrollment windows
        tied to your Part B effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Why an independent broker beats a captive agent
      </h2>
      <p className="mb-4">
        A captive agent works for one insurance company. They can only show you
        that company's plans. An independent broker like me has contracts with
        20+ carriers. Same service, zero fees, wider selection.
      </p>
      <p className="mb-4">
        You pay the exact same premium whether you enroll on your own or through
        me. The difference is you get a side-by-side comparison and a real person
        to call when you have a claim question later.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Medigap open enrollment - timing matters in Clifton
      </h2>
      <p className="mb-4">
        Your Medigap Open Enrollment Period lasts six months, starting the month
        you turn 65 and are enrolled in Part B. During this window, no carrier
        can deny you or charge more for health conditions. Miss it, and you may
        face medical underwriting.
      </p>
      <p className="mb-4">
        My practice is to have clients apply up to six months before their Part B
        start date. This locks in your rate early and protects you from any
        premium increases before coverage begins. The sooner you lock in, the
        better your rate.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        Get a free side-by-side plan comparison for Clifton residents
      </h2>
      <p className="mb-4">
        I'll build you a personalized comparison showing Medigap and Medicare
        Advantage options for your specific zip code, age, and needs. No
        obligation. No pressure. Just clear numbers so you can decide.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-10 text-center">
        <p className="text-lg font-semibold mb-2">
          Ready to compare Medicare plans in Clifton?
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
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm text-gray-600">
          No fees. No obligation. Licensed in New Jersey.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey: Costs and Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-n-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan N in New Jersey: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-700 hover:underline"
            >
              When to Enroll in Medicare: Deadlines and Penalties
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}