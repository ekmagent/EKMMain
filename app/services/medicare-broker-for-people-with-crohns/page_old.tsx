import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with crohns | No-Cost Plan Help | MedicareYourself",
  description:
    "Medicare broker for people with Crohn's who need specialist and drug coverage that fits. Anthony Orner compares plans at no cost. Schedule a free call today.",
  openGraph: {
    title:
      "medicare broker for people with crohns | No-Cost Plan Help | MedicareYourself",
    description:
      "Medicare broker for people with Crohn's who need specialist and drug coverage that fits. Anthony Orner compares plans at no cost. Schedule a free call today.",
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
      name: "Medicare Broker for People with Crohn's",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-crohns",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Crohn's: Finding Coverage That Actually Covers Your Care",
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
    question:
      "Does Medicare cover Crohn's disease treatments like biologics?",
    answer:
      "Medicare Part B covers certain biologics administered in a doctor's office or infusion center. Self-injected biologics and oral medications typically fall under Part D. Formularies vary by plan, so you need to check each plan's drug list before enrolling.",
  },
  {
    question:
      "Is a Medicare Supplement or Medicare Advantage plan better for Crohn's?",
    answer:
      "It depends on your treatment needs. Medicare Supplement plans let you see any provider that accepts Medicare without referrals, which matters if you rely on specific GI specialists. Medicare Advantage plans may have lower premiums but use provider networks. A broker can compare both options based on your doctors and medications.",
  },
  {
    question: "Does it cost anything to use a Medicare broker?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There is no fee for plan comparisons, enrollment help, or ongoing support.",
  },
  {
    question:
      "When should I contact a broker if I have Crohn's and I'm turning 65?",
    answer:
      "Reach out at least 6 months before your 65th birthday. Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, no insurer can deny you or charge more based on your Crohn's diagnosis.",
  },
];

export default function MedicareBrokerForPeopleWithCrohns() {
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
          Medicare Broker for People with Crohn&apos;s
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for People with Crohn&apos;s: Finding Coverage That Actually Covers Your Care
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-crohns.webp"
        alt="medicare broker for people with crohns"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for people with Crohn&apos;s can save you thousands a year by matching your specific treatment needs to the right plan. Crohn&apos;s isn&apos;t a one-prescription condition - you may be managing biologics, frequent colonoscopies, lab work, and GI specialist visits all at once.
      </p>
      <p className="text-lg mb-6">
        I&apos;m Anthony Orner, a licensed Medicare broker in New Jersey. I help people with chronic conditions like Crohn&apos;s disease compare every plan option at zero cost. Here&apos;s what you should know.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Crohn&apos;s disease makes Medicare plan selection critical
        </h2>
        <p className="mb-3">
          Crohn&apos;s requires ongoing care. You&apos;re not picking a plan for the occasional doctor visit. You&apos;re picking one that needs to cover:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>GI specialist appointments multiple times per year</li>
          <li>Infusion therapy or self-injected biologics</li>
          <li>Routine colonoscopies and imaging</li>
          <li>Emergency room visits during flare-ups</li>
          <li>Prescription medications that can cost hundreds per month</li>
        </ul>
        <p>
          Choose the wrong plan and you could face surprise copays, network restrictions, or gaps in drug coverage right when you need it most.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage plans for ongoing GI treatment
        </h2>
        <p className="mb-3">
          Medicare Supplement (Medigap) plans like Plan G let you see any doctor in the country who accepts Medicare. No referrals. No network. For someone with Crohn&apos;s who depends on a specific gastroenterologist, that flexibility matters.
        </p>
        <p className="mb-3">
          Medicare Advantage plans often have lower monthly premiums, but they use provider networks. If your GI specialist or infusion center is out of network, costs jump fast.
        </p>
        <p>
          With Plan G, you pay the $257 Part B annual deductible and Medicare covers the rest. Advantage plans use copays and coinsurance that can add up when you&apos;re getting frequent treatments.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a broker reviews your prescriptions and specialists
        </h2>
        <p className="mb-3">
          I start by looking at every medication you take. Biologics like infliximab or adalimumab may fall under Part B if given in a clinic, or Part D if self-injected at home. That distinction changes which plans work for you.
        </p>
        <p>
          Then I check whether your gastroenterologist and any other specialists are in-network for the Advantage plans available in your area. If they aren&apos;t, we rule those plans out immediately. No guesswork.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Your Medigap open enrollment window is the key moment
        </h2>
        <p className="mb-3">
          When you turn 65 and enroll in Part B, you get a 6-month Medigap Open Enrollment Period. During this window, no insurance company can deny you coverage or charge higher premiums because of your Crohn&apos;s diagnosis.
        </p>
        <p>
          Miss that window and carriers can underwrite you. With a chronic condition like Crohn&apos;s, that could mean higher rates or outright denial. This is exactly why I recommend reaching out early - ideally 6 months before your Part B start date - so we can lock in your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Part D drug coverage varies more than you think
        </h2>
        <p className="mb-3">
          Every Part D plan has its own formulary. One plan might cover your Crohn&apos;s medication at Tier 3, another at Tier 5. That difference alone could mean hundreds of dollars a month.
        </p>
        <p>
          I run your full drug list through every available Part D plan in your zip code. You get a side-by-side comparison of what you&apos;d actually pay at the pharmacy - not marketing estimates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan comparison tailored to Crohn&apos;s care
        </h2>
        <p className="mb-3">
          There&apos;s no fee for my services. Insurance carriers pay brokers directly, so the plan costs the same whether you enroll on your own or through me.
        </p>
        <p>
          The difference is you get someone who actually reviews your medications, doctors, and treatment schedule before recommending anything. Call me and I&apos;ll build a comparison specific to your Crohn&apos;s care needs.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to find the right Medicare plan for your Crohn&apos;s care?
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
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Better for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-explained"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Explained: How Prescription Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker in NJ: Free Plan Comparisons Near You
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}