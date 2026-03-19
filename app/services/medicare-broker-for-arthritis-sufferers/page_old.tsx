import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for arthritis sufferers | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for arthritis sufferers needing biologics, specialist visits, and joint care. Anthony Orner compares plans at no cost to you.",
  openGraph: {
    title:
      "Medicare broker for arthritis sufferers | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for arthritis sufferers needing biologics, specialist visits, and joint care. Anthony Orner compares plans at no cost to you.",
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
      name: "Medicare Broker for Arthritis Sufferers",
      item: "https://medicareyourself.com/services/medicare-broker-for-arthritis-sufferers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Arthritis Sufferers — Coverage That Doesn't Make You Negotiate Twice",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are compensated by insurance carriers, not by you. There's no fee for plan comparisons, reviews, or enrollment help. The service is free whether you choose a plan through the broker or not.",
  },
  {
    question:
      "Will Medicare cover my biologic medication like Humira or Enbrel?",
    answer:
      "It depends on the plan. Self-injected biologics typically fall under Part D. Infused biologics like Remicade are covered under Part B. But formularies, tier placement, and copays vary widely between plans. A broker can compare which plans cover your specific medication at the lowest cost.",
  },
  {
    question: "Can I switch plans if my arthritis medication isn't covered?",
    answer:
      "During the Annual Enrollment Period (October 15 - December 7), you can switch Medicare Advantage or Part D plans. If you have a Medicare Supplement plan, switching may require medical underwriting outside your Medigap Open Enrollment Period. Call to discuss your specific situation.",
  },
  {
    question:
      "Should I choose Medicare Advantage or a Supplement plan for arthritis?",
    answer:
      "There's no single right answer. Advantage plans may have lower premiums but use networks and prior authorizations. Supplement plans offer more flexibility with specialists but require a separate Part D plan for prescriptions. The right choice depends on your medications, doctors, and budget.",
  },
];

export default function MedicareBrokerArthritisSufferers() {
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
          Medicare Broker for Arthritis Sufferers
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Medicare Broker for Arthritis Sufferers — Coverage That Doesn't Make You
        Negotiate Twice
      </h1>

      <Image
        src="/images/medicare-broker-for-arthritis-sufferers.webp"
        alt="Medicare broker for arthritis sufferers"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for arthritis sufferers does one thing most plan
        directories can't: match your actual medications, specialists, and joint
        care needs to a plan that covers them without sticker shock. Some
        mornings, your body won't cooperate with buttons or stairs. Your
        insurance shouldn't add to that negotiation.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I compare plans for
        people managing RA, psoriatic arthritis, osteoarthritis, and other
        chronic joint conditions - for free.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Medicare covers biologics, DMARDs, and joint replacements
        </h2>
        <p className="mb-2">
          Medicare splits arthritis treatment across parts in ways that trip
          people up:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>
            <strong>Part B</strong> covers infused biologics like Remicade and
            Orencia IV (administered in a doctor's office or infusion center).
            You pay 20% of the Medicare-approved amount after your $283 annual
            deductible.
          </li>
          <li>
            <strong>Part D</strong> covers self-injected biologics like Humira,
            Enbrel, and injectable Orencia. Costs vary dramatically by plan and
            formulary tier.
          </li>
          <li>
            <strong>Part A</strong> covers inpatient joint replacement surgery.
            The 2026 Part A deductible is $1,676 per benefit period.
          </li>
        </ul>
        <p>
          DMARDs like methotrexate usually fall under Part D. The plan you pick
          determines what you actually pay.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why drug formularies matter more than you think with arthritis
        </h2>
        <p className="mb-2">
          People find this out the hard way. You switch to Medicare, refill your
          biologic, and get hit with a $600 or $1,800 bill for a drug that used
          to cost $5. The plan changed. The formulary changed. The tier changed.
        </p>
        <p>
          Every Part D and Advantage plan has its own formulary. A drug that's
          Tier 3 on one plan might be Tier 5 (specialty) on another - or not
          covered at all. I check your exact medications against every available
          plan's formulary before we talk options.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement vs. Advantage plans for chronic joint conditions
        </h2>
        <p className="mb-2">
          With arthritis, you see rheumatologists, get labs drawn regularly, and
          may need imaging or infusions. That affects which plan structure works
          better for you.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> No networks or
            referrals. See any provider who accepts Medicare. You'll need a
            separate Part D plan for prescriptions. Monthly premiums are higher,
            but out-of-pocket costs at the doctor are predictable.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Lower premiums, but uses
            provider networks and often requires prior authorization for
            biologics and specialist visits. Drug coverage is usually built in.
          </li>
        </ul>
        <p className="mt-2">
          Neither is universally better. It depends on your doctors, your drugs,
          and how often you need care.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Prior authorization and what it means for your treatment
        </h2>
        <p className="mb-2">
          Many Advantage plans require prior authorization for biologics. That
          means your doctor's office submits paperwork, the plan reviews it, and
          you wait. If you're switching from a drug that's working, this step can
          delay treatment or force a different medication.
        </p>
        <p>
          I can tell you which plans in your area have prior auth requirements
          for your specific prescriptions before you enroll.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Manufacturer copay cards don't always work with Medicare
        </h2>
        <p>
          On commercial insurance, copay assistance cards from drug manufacturers
          can bring biologic costs to nearly zero. With Medicare, those cards are
          generally not available. That's federal law, not a plan decision. There
          are some patient assistance programs and foundations that may help, and
          I can point you toward ones that apply to your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan review built around what your body actually needs
        </h2>
        <p className="mb-2">
          Bring me your medication list, your doctors, and your concerns. I'll
          show you which plans cover your arthritis treatment at the lowest
          realistic cost - not the lowest premium with surprise bills later.
        </p>
        <p>No fee. No pressure. Just a clear comparison you can trust.</p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-semibold mb-2">
          Ready to compare plans that actually cover your arthritis care?
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
            href="/get-a-free-quote"
            className="text-blue-700 font-bold hover:underline"
          >
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-part-d"
              className="text-blue-700 hover:underline"
            >
              Understanding Medicare Part D Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-disabled-beneficiaries"
              className="text-blue-700 hover:underline"
            >
              Medicare Broker for Disabled Beneficiaries
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}