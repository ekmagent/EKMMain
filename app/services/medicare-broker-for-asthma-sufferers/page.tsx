import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for asthma sufferers | Free Inhaler Coverage Check | MedicareYourself",
  description:
    "Medicare broker for asthma sufferers tired of overpaying for inhalers and rescue meds. Anthony Orner finds plans that cover what you breathe. Free review.",
  openGraph: {
    title:
      "Medicare broker for asthma sufferers | Free Inhaler Coverage Check | MedicareYourself",
    description:
      "Medicare broker for asthma sufferers tired of overpaying for inhalers and rescue meds. Anthony Orner finds plans that cover what you breathe. Free review.",
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
      name: "Medicare Broker for Asthma Sufferers",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-asthma-sufferers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Asthma Sufferers — Because Breathing Shouldn't Be a Luxury",
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
    question: "Can I get Medicare if I have asthma?",
    answer:
      "Yes. Asthma does not disqualify you from Medicare. If you're 65 or older (or qualify through disability), you're eligible for Original Medicare, Medicare Advantage, and Part D prescription drug coverage regardless of pre-existing conditions like asthma.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Licensed Medicare brokers like Anthony Orner are paid by insurance carriers, not by you. There's no fee for plan comparisons, reviews, or enrollment help. The plans cost the same whether you use a broker or enroll on your own.",
  },
  {
    question:
      "Will my asthma inhalers be covered under Medicare Part D?",
    answer:
      "Most Part D plans cover inhalers, but the tier placement and copay amount vary widely between plans. A rescue inhaler might be Tier 2 on one plan and Tier 3 on another, which can mean a difference of $20 to $80 per refill. That's why comparing formularies matters.",
  },
  {
    question:
      "Should I choose Medicare Advantage or a Supplement if I have asthma?",
    answer:
      "It depends on how often you see specialists and how much you use the ER. Medicare Advantage plans bundle drug coverage but may require referrals and have network restrictions. A Supplement (Medigap) plan with a standalone Part D plan gives you broader provider access but costs more in monthly premiums. A broker can help you weigh the tradeoffs based on your specific medications and doctors.",
  },
];

export default function MedicareBrokerForAsthmaSufferers() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Medicare Broker for Asthma Sufferers
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for Asthma Sufferers — Because Breathing Shouldn't Be a
        Luxury
      </h1>

      <Image
        src="/images/medicare-broker-for-asthma-sufferers.webp"
        alt="Medicare broker for asthma sufferers"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for asthma sufferers does one thing most plan-finder
        tools can't: match your exact inhalers, nebulizer supplies, and
        specialist visits to the plan that actually covers them at the lowest
        cost. I'm Anthony Orner, a licensed Medicare broker in NJ, and I do this
        work every day for people who are tired of sticker shock at the pharmacy
        counter.
      </p>
      <p className="text-lg mb-6">
        You know the feeling. Your rescue inhaler is running low, the refill
        costs more than last month, and you're wondering if your plan changed
        something without telling you. Let's fix that.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why some Part D plans make inhalers affordable and others don't
        </h2>
        <p className="mb-2">
          Every Part D plan has a formulary - a list of covered drugs organized
          into tiers. Your albuterol inhaler might sit on Tier 2 with a $15
          copay in one plan and Tier 3 with a $60 copay in another. Same
          medication. Same pharmacy. Wildly different price.
        </p>
        <p>
          The only way to know which plan treats your medications favorably is to
          compare formularies side by side. That's tedious work. I do it for
          you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Rescue vs. maintenance medications: how formulary tiers affect your
          costs
        </h2>
        <p className="mb-2">
          Most asthma treatment involves two categories of medication:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            <strong>Rescue inhalers</strong> (like albuterol) - used during
            attacks, usually lower tier
          </li>
          <li>
            <strong>Maintenance inhalers</strong> (like Advair, Symbicort, Breo)
            - used daily, often placed on higher tiers with bigger copays
          </li>
        </ul>
        <p>
          Insurance companies sometimes require step therapy, meaning they won't
          cover the medication your doctor prescribed until you've tried a
          cheaper alternative first. This happens more than you'd expect and
          causes real delays in care. The right Part D plan minimizes these
          hurdles for the drugs you already use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage plans for pulmonologist and ER coverage
        </h2>
        <p className="mb-2">
          If you see a pulmonologist regularly or end up in the ER during bad
          flare-ups, your plan type matters a lot:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Works with any
            doctor who accepts Medicare. No referrals needed for specialists. No
            network restrictions. You'll pair it with a standalone Part D plan
            for drug coverage.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Bundles medical and drug
            coverage into one plan. Often lower premiums, but may require
            referrals to see a pulmonologist and limit you to in-network
            providers.
          </li>
        </ul>
        <p>
          Neither option is automatically better. It depends on your doctors,
          your medications, and how often you need urgent care.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What I check when reviewing plans for asthma patients
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Formulary tier placement for every inhaler you use</li>
          <li>
            Step therapy or prior authorization requirements on your maintenance
            meds
          </li>
          <li>
            Whether your pulmonologist and allergist are in-network (for
            Advantage plans)
          </li>
          <li>ER and urgent care copays for acute episodes</li>
          <li>Nebulizer and durable medical equipment coverage under Part B</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Nebulizers and DME coverage under Part B
        </h2>
        <p>
          If you use a home nebulizer, Medicare Part B covers it as durable
          medical equipment when prescribed by your doctor. You'll pay 20% of
          the Medicare-approved amount after your $283 annual Part B deductible.
          A Medigap plan like Plan G covers that 20% for you. An Advantage plan
          may have a fixed copay instead.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan check so your next refill isn't a financial panic
        </h2>
        <p>
          Bring me your medication list. I'll run it against every available plan
          in your area and show you exactly what each one costs - no charge, no
          pressure. If your current plan is already the best fit, I'll tell you
          that too.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to stop overpaying for the medications you need to breathe?
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
          No cost. No obligation. Just a clear answer on which plan fits your
          inhalers and your budget.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-for-copd-patients"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker for COPD Patients
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-part-d-prescription-drug-plans"
              className="text-blue-700 hover:underline"
            >
              How Medicare Part D Prescription Drug Plans Work
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-supplement-vs-advantage"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement vs. Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-durable-medical-equipment"
              className="text-blue-700 hover:underline"
            >
              Medicare Coverage for Durable Medical Equipment
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}