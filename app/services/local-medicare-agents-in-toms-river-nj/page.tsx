import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in toms river nj | Free Carrier Comparison | MedicareYourself",
  description:
    "Local Medicare agents in Toms River NJ — Anthony Orner compares Supplement and Advantage plans across Ocean County carriers. Free quote, no obligation.",
  openGraph: {
    title:
      "local medicare agents in toms river nj | Free Carrier Comparison | MedicareYourself",
    description:
      "Local Medicare agents in Toms River NJ — Anthony Orner compares Supplement and Advantage plans across Ocean County carriers. Free quote, no obligation.",
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
      name: "Local Medicare Agents in Toms River NJ",
      item: "https://www.medicareyourself.com/services/local-medicare-agents-in-toms-river-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Toms River, NJ — Ocean County's Independent Broker",
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
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers the PAAD (Pharmaceutical Assistance to the Aged and Disabled) program and NJ FamilyCare for income-eligible residents. The Medicare Savings Program can also help pay your Part B premium of $185/month. Call us at 855-559-1700 and we can point you to the right state resource.",
  },
  {
    question: "How to pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than a single company. An independent agent can compare rates across Aetna, Cigna, Mutual of Omaha, and others. Ask if they charge a fee — a good Medicare broker is paid by the carrier, not by you.",
  },
  {
    question: "Do I need a Medicare agent?",
    answer:
      "You don't need one, but having an independent agent saves time and often money. Medicare Supplements alone have 10+ standardized plan letters, and premiums vary by carrier for the exact same coverage. An agent does the comparison work so you don't have to call each company individually.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227), available 24/7. TTY users can dial 1-877-486-2048. For local help specific to Ocean County plans and rates, call our office at 855-559-1700 during business hours.",
  },
];

export default function LocalMedicareAgentsTomsRiverNJ() {
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
          Local Medicare Agents in Toms River NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Local Medicare Agents in Toms River, NJ — Ocean County&#39;s Independent
        Broker
      </h1>

      <Image
        src="/images/local-medicare-agents-in-toms-river-nj.webp"
        alt="local medicare agents in toms river nj"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-3">
        Local Medicare agents in Toms River, NJ have plenty of plans to show
        you, but most of them only represent one or two carriers. I&#39;m Anthony
        Orner, an independent Medicare broker who compares Supplement and
        Advantage plans across the full Ocean County market.
      </p>
      <p className="text-lg mb-6">
        You pay nothing for my help. Carriers pay me, not you. Let me show you
        what that difference looks like.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Toms River has so many Medicare options (and why that&#39;s confusing)
        </h2>
        <p className="mb-3">
          Ocean County has one of the highest concentrations of Medicare-eligible
          residents in New Jersey. That large population attracts carriers. More
          carriers mean more plan choices, which sounds great until you&#39;re
          staring at 18+ Advantage plans and 8 or more Supplement carriers all
          competing for your enrollment.
        </p>
        <p>
          A captive agent tied to one company will naturally recommend what they
          sell. An independent broker pulls rates from all of them and shows you
          the actual numbers side by side.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plan G and Plan N rates from top carriers in Ocean County
        </h2>
        <p className="mb-3">
          Plan G covers everything Original Medicare doesn&#39;t except the Part B
          deductible ($257/year in 2026). Plan N works similarly but adds small
          copays at office visits. Both are popular in Toms River.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            Plan G rates vary by carrier, age, tobacco use, and household
            discount eligibility
          </li>
          <li>
            Plan N typically runs 15-20% less per month than Plan G from the
            same carrier
          </li>
          <li>
            During your 6-month Medigap Open Enrollment Period, no carrier can
            charge you more or deny you based on health
          </li>
        </ul>
        <p>
          I compare rates from carriers like Aetna, Cigna, Mutual of Omaha, and
          others so you see the real spread. Call 855-559-1700 for a current
          quote.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage networks to watch in the Toms River area
        </h2>
        <p className="mb-3">
          If you prefer a $0-premium Advantage plan, network matters more than
          anything. Community Medical Center, Hackensack Meridian Health, and
          several large physician groups in Ocean County participate in some
          networks but not others.
        </p>
        <p>
          Before enrolling in any Medicare Advantage plan, I verify that your
          doctors and preferred hospital are in-network for that specific plan
          year. Switching mid-year is limited, so getting this right up front
          saves real headaches.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent broker actually does for you
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pulls Supplement quotes from 8+ carriers in one sitting</li>
          <li>
            Checks your prescriptions against Part D or Advantage formularies
          </li>
          <li>Confirms your doctors are in-network before you commit</li>
          <li>
            Helps with enrollment paperwork and follows up if any issues arise
          </li>
          <li>Reviews your plan every year at no cost during Annual Enrollment (October 15 - December 7)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Ocean County? Lock in your rate early
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment lasts 6 months, starting the month you
          turn 65 and are enrolled in Part B. During this window, carriers must
          accept you at standard rates regardless of health history.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part
          B start date. This locks in the rate early and protects you from any
          premium increases before coverage begins. The sooner you start, the
          better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free Medicare plan review today
        </h2>
        <p className="mb-3">
          Whether you&#39;re turning 65, leaving employer coverage, or just want to
          check if a better rate exists for your current plan, I&#39;ll run the
          numbers. No pushy sales call. Just a straightforward comparison you can
          trust.
        </p>
        <p>
          Call 855-559-1700 or request a quote online. I serve all of Ocean
          County including Toms River, Brick, Lakewood, Jackson, and surrounding
          towns.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a local, independent Medicare broker today
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
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
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey — Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-n-vs-plan-g"
              className="text-blue-600 hover:underline"
            >
              Plan N vs Plan G — Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare — Deadlines and Penalties
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}