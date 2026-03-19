import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in monroe township nj | Free Plan Review | MedicareYourself",
  description:
    "Find a Medicare agent in Monroe Township NJ — Anthony Orner compares Supplement and Advantage carriers for Middlesex County residents. Free plan review.",
  openGraph: {
    title:
      "find a medicare agent in monroe township nj | Free Plan Review | MedicareYourself",
    description:
      "Find a Medicare agent in Monroe Township NJ — Anthony Orner compares Supplement and Advantage carriers for Middlesex County residents. Free plan review.",
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
      name: "Find a Medicare Agent in Monroe Township, NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-monroe-township-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Monroe Township, NJ Who Puts Your Interests First",
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
    question: "How to find a good Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. An independent agent can compare plans side-by-side and recommend what actually fits your doctors, prescriptions, and budget. Ask whether they charge you anything (they shouldn't) and whether they help with annual reviews during Open Enrollment.",
  },
  {
    question: "How much do Medicare agents charge?",
    answer:
      "A legitimate Medicare agent costs you nothing. Brokers are paid by the insurance carriers, not by you. Your premium is the same whether you enroll on your own or through an agent. The difference is you get professional guidance at no extra cost.",
  },
  {
    question: "What Medicare plans are available in Monroe Township, NJ?",
    answer:
      "Monroe Township residents in Middlesex County can choose from Original Medicare with a Medigap Supplement (Plan G, Plan N, and others), Medicare Advantage HMO and PPO plans, and standalone Part D prescription drug plans. The best fit depends on your health, your doctors, and how you prefer to use coverage.",
  },
  {
    question: "When is the best time to enroll in a Medicare plan in Monroe Township?",
    answer:
      "Your Medigap Open Enrollment Period - the 6 months starting the month you turn 65 and have Part B - gives you guaranteed issue rights with no health questions. For Medicare Advantage and Part D, the Annual Enrollment Period runs October 15 through December 7 each year.",
  },
];

export default function FindMedicareAgentMonroeTownshipNJ() {
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
          Find a Medicare Agent in Monroe Township, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Find a Medicare Agent in Monroe Township, NJ Who Puts Your Interests First
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-monroe-township-nj.webp"
        alt="find a medicare agent in Monroe Township NJ"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Monroe Township, NJ doesn't have to mean cold calls from strangers or confusing mailers. I'm Anthony Orner, an independent broker licensed in New Jersey who works with residents across Middlesex County.
      </p>
      <p className="text-lg mb-6">
        I compare plans from multiple carriers so you get honest, side-by-side options. No cost to you, ever.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Monroe Township's 55+ communities need independent broker access
        </h2>
        <p className="mb-2">
          Monroe Township is one of the largest retirement destinations in New Jersey. Communities like Rossmoor, Clearbrook, and Concordia bring thousands of Medicare-eligible residents into a single zip code. That also attracts a lot of captive agents who can only sell one carrier's plans.
        </p>
        <p>
          An independent broker works differently. I'm not tied to one company. If a carrier raises rates or drops your doctor from its network, I can move you to a better option. That matters when you're locked into a community and want stability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement rates for Monroe Township residents in 2025-2026
        </h2>
        <p className="mb-2">
          Medigap premiums in Middlesex County vary by carrier, age, and tobacco status. Plan G is the most popular Supplement right now because it covers everything Original Medicare doesn't except the Part B deductible ($257 in 2026).
        </p>
        <p>
          Rates differ by $40-$80/month between the cheapest and most expensive carriers for the same Plan G coverage. That's real money. I run a carrier comparison specific to your age and zip code so you see every option.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Advantage plan networks that cover CentraState and local providers
        </h2>
        <p className="mb-2">
          Many Monroe Township residents use CentraState Medical Center in Freehold or Robert Wood Johnson facilities. Not every Medicare Advantage plan includes these hospitals in-network.
        </p>
        <p>
          Before you pick a plan, I verify your doctors and preferred hospitals are covered. HMO plans require referrals and in-network care only. PPO plans give more flexibility but may cost more. The right structure depends on how you actually use healthcare.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Locking in your Medigap rate before Part B starts
        </h2>
        <p className="mb-2">
          If you're turning 65, your Medigap Open Enrollment Period lasts 6 months starting the month you're both 65 and enrolled in Part B. During this window, carriers cannot deny you or charge more based on health history.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage even begins. The sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What working with an independent broker actually looks like
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We review your current coverage, doctors, and prescriptions</li>
          <li>I compare Supplement and Advantage plans from every carrier available in 08831</li>
          <li>You choose the plan that fits - no pressure, no upsell</li>
          <li>I handle the paperwork and follow up if there are any issues</li>
          <li>Every fall during Open Enrollment (October 15 - December 7), I check whether a better option exists</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free consultation with Anthony Orner
        </h2>
        <p className="mb-2">
          I work with Medicare beneficiaries throughout Monroe Township, Jamesburg, Cranbury, and the surrounding Middlesex County area. Phone, video, or in-person - whatever works for you.
        </p>
        <p>
          There's no fee and no obligation. Carriers pay me, so you get professional guidance at zero cost. Call today and let's make sure your plan actually matches your needs.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready for a free Medicare plan review?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-bold"
          >
            855-559-1700
          </a>{" "}
          or book online.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
              Medicare Plan G in New Jersey - What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ - 2025-2026 Options
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in NJ - When and How to Enroll
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-middlesex-county-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in Middlesex County, NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}