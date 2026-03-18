import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Find a Medicare Agent in Neptune NJ | Free No-Obligation Help | MedicareYourself",
  description:
    "Find a Medicare agent in Neptune NJ for unbiased plan comparisons across top carriers. Anthony Orner offers free, licensed help for Monmouth County residents.",
  openGraph: {
    title:
      "Find a Medicare Agent in Neptune NJ | Free No-Obligation Help | MedicareYourself",
    description:
      "Find a Medicare agent in Neptune NJ for unbiased plan comparisons across top carriers. Anthony Orner offers free, licensed help for Monmouth County residents.",
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
      name: "Find a Medicare Agent in Neptune NJ",
      item: "https://www.medicareyourself.com/services/find-a-medicare-agent-in-neptune-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Neptune, NJ Who Puts Your Interests First",
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
    question: "How to pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. An independent agent can compare plans side by side and recommend coverage based on your doctors, prescriptions, and budget. Always confirm they are licensed in New Jersey and that their services are free to you.",
  },
  {
    question: "Does Medicare have a local office?",
    answer:
      "Medicare itself does not have local offices you can walk into. The Social Security Administration handles Medicare enrollment at local offices, and there is an SSA office in Freehold serving Monmouth County residents. For plan comparisons and enrollment help, a licensed local broker like Anthony Orner can meet with you in Neptune or by phone.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users can call 1-877-486-2048. For personalized help choosing between plans available in Neptune Township, call a licensed broker at 855-559-1700 for free, no-obligation guidance.",
  },
  {
    question: "Is there a cost for using a Medicare agent in Neptune?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. You pay the same premium whether you enroll directly with a carrier or through an agent. Working with an agent gives you expert guidance at zero extra cost.",
  },
];

export default function FindMedicareAgentNeptuneNJ() {
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
        <span className="text-gray-700">Find a Medicare Agent in Neptune NJ</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Find a Medicare Agent in Neptune, NJ Who Puts Your Interests First
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-neptune-nj.webp"
        alt="Find a Medicare agent in Neptune NJ"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Neptune, NJ starts with knowing what to look for: independence, local knowledge, and zero pressure. I'm Anthony Orner, a licensed Medicare broker serving Neptune Township and all of Monmouth County.
      </p>
      <p className="text-lg mb-6">
        My help is completely free. I work with multiple carriers so you see real options, not a sales pitch for one company.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker serves Neptune Township differently
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you what that company sells. An independent broker like me is contracted with 18+ carriers across Monmouth County.
        </p>
        <p>
          That means I compare Medicare Supplement, Medicare Advantage, and Part D plans from every major carrier available in your zip code. You get the full picture, and you choose what fits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plans and carriers available in Monmouth County
        </h2>
        <p className="mb-2">
          Neptune residents in the 07753 zip code have access to a wide range of options. Here's what I typically compare for clients:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Medicare Supplement (Medigap) Plans G and N from carriers like Aetna, Cigna, Mutual of Omaha, and United American</li>
          <li>Medicare Advantage PPO and HMO plans with $0 premium options</li>
          <li>Standalone Part D prescription drug plans</li>
          <li>Dental, vision, and hearing coverage add-ons</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I'll pull live quotes so you can compare actual numbers, not guesses.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Neptune? Here's your enrollment timeline
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months. It starts the month you turn 65 and are enrolled in Part B. During this window, no carrier in New Jersey can deny you or charge more for health conditions.
        </p>
        <p className="mb-2">
          My practice is to have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in your rate early, protecting you from premium increases before coverage even begins. The sooner you lock in, the better your rate.
        </p>
        <p>
          Don't wait until the last month. Call me when you're 6 months out from turning 65.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What working with me actually looks like
        </h2>
        <p className="mb-2">
          Here's the process, start to finish:
        </p>
        <ul className="list-decimal pl-6 space-y-1">
          <li>You call or fill out the quote form. Takes 2 minutes.</li>
          <li>I ask about your doctors, medications, and budget.</li>
          <li>I pull quotes from every carrier available in Neptune and present your options.</li>
          <li>You pick the plan that makes sense. No pressure, no deadline tricks.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs Neptune residents should know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $185/month</li>
          <li>Part B deductible: $257/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance (days 21-100): $209.50/day</li>
          <li>Part B late enrollment penalty: 10% for each 12-month period you delayed</li>
        </ul>
        <p className="mt-2">
          These out-of-pocket costs add up fast. A Medigap plan or Medicare Advantage plan can protect you from surprise bills.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Medicare quote from Anthony Orner
        </h2>
        <p className="mb-2">
          I live and work in New Jersey. I know the carriers, the local hospitals, and the plans that actually work for Monmouth County residents. Whether you're in Neptune Township, Neptune City, or nearby Ocean Grove, I can help.
        </p>
        <p>
          Call me at 855-559-1700 or request a quote online. There's no cost, no obligation, and no spam.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Neptune?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
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
              href="/medicare-guides/turning-65-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              Turning 65 and Medicare in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-g-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in NJ: Benefits, Costs, and Eligibility
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-vs-advantage-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-monmouth-county-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in Monmouth County, NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}