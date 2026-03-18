import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in cherry hill new jersey | Free Broker Help | MedicareYourself",
  description:
    "Medicare insurance agents in Cherry Hill New Jersey — Anthony Orner compares Supplement and Advantage plans across top carriers. Free, no-obligation consultation.",
  openGraph: {
    title:
      "medicare insurance agents in cherry hill new jersey | Free Broker Help | MedicareYourself",
    description:
      "Medicare insurance agents in Cherry Hill New Jersey — Anthony Orner compares Supplement and Advantage plans across top carriers. Free, no-obligation consultation.",
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
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agents in Cherry Hill, NJ",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-cherry-hill-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker Support",
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
    "https://www.medicareyourself.com/services/medicare-insurance-agents-in-cherry-hill-new-jersey",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare broker compares plans across multiple carriers at no cost to you. The carriers pay the broker, so you get expert guidance without paying a fee. An independent broker can show you options a single-carrier agent cannot.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and whether you want the predictable costs of a Supplement or the bundled benefits of an Advantage plan. A broker can run a side-by-side comparison specific to Camden County.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for someone who is independent (not tied to one carrier), licensed in New Jersey, and willing to explain tradeoffs honestly. Ask if they'll review your plan annually. A good agent earns your trust by educating you, not pressuring you.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker in Cherry Hill?",
    answer:
      "No. Medicare brokers are compensated by the insurance carriers. You pay the same premium whether you enroll directly or through a broker, but you get personalized help comparing your options.",
  },
];

export default function MedicareAgentsCherryHillNJ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Cherry Hill, NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker Support
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-cherry-hill-new-jersey.webp"
        alt="Medicare insurance agents in Cherry Hill New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Cherry Hill, New Jersey aren't all the same. Some represent one carrier. I represent you. I'm Anthony Orner, an independent licensed broker who compares Supplement and Advantage plans across multiple carriers so you can see what actually fits your situation.
      </p>
      <p className="text-lg mb-6">
        The consult is free. You pay the same premium whether you call a carrier directly or work with me.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How a Cherry Hill Medicare broker differs from a captive agent
        </h2>
        <p className="mb-3">
          A captive agent works for one insurance company. They'll show you their products and only their products. An independent broker like me works across carriers and owes loyalty to you, not a corporate sales quota.
        </p>
        <p>
          That difference matters when you're comparing premiums, networks, and drug coverage. You see the full picture instead of one company's pitch.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Camden County
        </h2>
        <p className="mb-3">
          Cherry Hill sits in Camden County, which has strong access to both plan types:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plans like G and N pair with Original Medicare. You choose any doctor who accepts Medicare. Rates vary by carrier - I'll pull quotes from several so you can compare.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> HMO and PPO options with networks that include Cooper University Health Care, Jefferson Health, and Virtua. Many include prescription drug coverage and extras like dental.
          </li>
        </ul>
        <p>
          South Jersey residents sometimes see doctors across the bridge in Philadelphia. If that's you, network coverage matters. I check provider directories before recommending anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          When to contact a broker before your 65th birthday
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During those six months, carriers must accept you regardless of health history. No medical questions. No higher premiums.
        </p>
        <p>
          My practice is to have clients apply up to six months before their Part B start date. This locks in a rate early, protecting you from premium increases before coverage begins. The sooner you start, the better your rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free plan comparison
        </h2>
        <p className="mb-3">
          Here's how it works when you call:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We review your current coverage, doctors, and prescriptions</li>
          <li>I pull real quotes from multiple carriers for your zip code</li>
          <li>We compare costs, networks, and out-of-pocket exposure side by side</li>
          <li>You decide. No pressure, no deadline tricks</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why network changes matter in South Jersey
        </h2>
        <p className="mb-3">
          Carriers renegotiate contracts with health systems regularly. If your doctors or local hospital drop out of your plan's network mid-year, you're stuck until the next enrollment window - or scrambling for a new plan.
        </p>
        <p>
          I monitor these changes for my clients. When something shifts, you hear from me before it becomes a problem.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Serving Cherry Hill and surrounding communities
        </h2>
        <p>
          I work with Medicare beneficiaries across Cherry Hill, Haddonfield, Voorhees, Marlton, Collingswood, and throughout Camden and Burlington counties. Whether you're newly eligible or reviewing an existing plan during Open Enrollment (October 15 - December 7), I'm a phone call away.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare your Medicare options?
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
          . No cost, no obligation.
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
              href="/medicare/supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Plan G vs Plan N: Which Medigap Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/when-to-enroll"
              className="text-blue-700 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}