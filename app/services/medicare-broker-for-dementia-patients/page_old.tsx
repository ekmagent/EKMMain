import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for dementia patients | Free Caregiver Consultation | MedicareYourself",
  description:
    "Medicare broker for dementia patients and caregivers needing real coverage guidance — home health, meds, skilled nursing. Free consultation with Anthony Orner.",
  openGraph: {
    title:
      "Medicare broker for dementia patients | Free Caregiver Consultation | MedicareYourself",
    description:
      "Medicare broker for dementia patients and caregivers needing real coverage guidance — home health, meds, skilled nursing. Free consultation with Anthony Orner.",
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
      name: "Medicare Broker for Dementia Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-dementia-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Dementia Patients — Practical Help for Families Who Need It Now",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-broker-for-dementia-patients",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. I'm paid by the insurance carriers, not by you. There's no fee for my help comparing plans, reviewing drug coverage, or walking you through options for your loved one's care. The plans and premiums are the same whether you call me or go direct.",
  },
  {
    question: "Does Medicare cover anything for dementia patients?",
    answer:
      "Yes. Medicare Part B covers cognitive assessments and care planning visits. Part A covers skilled nursing facility stays and qualifying home health services. Part D covers many dementia medications, though formularies vary by plan. What Medicare does not cover is long-term custodial care like memory care facilities or around-the-clock personal assistance.",
  },
  {
    question:
      "Can I change my parent's Medicare plan if they have dementia?",
    answer:
      "If you have Power of Attorney or are an authorized representative, yes. During the annual Open Enrollment period (October 15 through December 7), you can switch Advantage or Part D plans. Outside of that window, certain qualifying life events may allow changes. I can help you figure out what's available and handle the process.",
  },
  {
    question:
      "What's the difference between Medicare Supplement and Medicare Advantage for dementia care?",
    answer:
      "A Medicare Supplement (Medigap) plan lets your loved one see any provider that accepts Medicare, with no referrals or network restrictions. This matters when they need specialists or home health across multiple systems. Medicare Advantage plans may cost less monthly but use provider networks and prior authorizations, which can create delays when care needs change quickly.",
  },
];

export default function MedicareBrokerDementiaPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Dementia Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for Dementia Patients — Practical Help for Families Who Need It Now
      </h1>

      <Image
        src="/images/medicare-broker-for-dementia-patients.webp"
        alt="Medicare broker for dementia patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for dementia patients isn't something most families think to search for until the system has already worn them down. You're managing medications, fighting with provider networks, trying to get home health approved, and watching someone you love change in ways no one prepared you for.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in NJ. I help caregivers and families sort through the coverage that actually applies to their loved one's situation - no cost, no pressure.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare covers for dementia: home health, skilled nursing, and more
        </h2>
        <p className="mb-2">
          Medicare doesn't cover long-term custodial care. That's the hard truth, and it catches a lot of families off guard. But it does cover more than people realize for earlier and mid-stage needs:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Part B covers cognitive assessment and care plan visits - you pay 20% after the $283 annual deductible</li>
          <li>Part A covers skilled nursing facility stays (days 1-20 at $0; days 21-100 at $209.50/day coinsurance in 2026)</li>
          <li>Home health services are covered when ordered by a doctor and provided by a Medicare-certified agency</li>
          <li>Occupational therapy, speech therapy, and certain mental health services are covered under Part B</li>
        </ul>
        <p>
          The gap between what Medicare covers and what dementia actually demands is where families feel the most pain. Knowing exactly where those lines are helps you plan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Supplement and Advantage plans differ for progressive cognitive conditions
        </h2>
        <p className="mb-2">
          With dementia, care needs shift fast. A plan that worked six months ago can become a barrier when your parent can't travel to in-network providers or when you need a visiting specialist.
        </p>
        <p className="mb-2">
          Medicare Supplement (Medigap) plans like Plan G give you open access to any doctor or facility that accepts Medicare. No referrals, no prior authorizations. That flexibility matters when someone can't physically get to a specific clinic or when their care team changes.
        </p>
        <p>
          Medicare Advantage plans can save money on premiums, but network restrictions and authorization requirements cause real problems for dementia patients. I've heard from too many caregivers who couldn't get home health approved because their loved one's Advantage plan required an in-person visit they couldn't make happen.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Part D considerations for dementia medications
        </h2>
        <p className="mb-2">
          Common dementia drugs like donepezil and rivastigmine are available as generics and covered by most Part D plans. But newer treatments - and the costs around them - vary dramatically by formulary.
        </p>
        <p>
          I compare Part D plans based on your loved one's actual prescription list. Drug tier placement, copay amounts, and pharmacy networks all affect what you pay. This isn't something to guess at during enrollment.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why caregivers are usually the ones making this call
        </h2>
        <p className="mb-2">
          Most of the people I talk to aren't the patient. They're the adult daughter managing everything from three towns away. The spouse who's exhausted. The grandson who became a full-time caregiver at 22.
        </p>
        <p>
          You don't need to become a Medicare expert on top of everything else. If you have Power of Attorney or are listed as an authorized representative, I can work directly with you to review plans, compare costs, and make changes during enrollment windows.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          When and how to make plan changes
        </h2>
        <p className="mb-2">
          Medicare Advantage and Part D plans can be changed during Open Enrollment, October 15 through December 7. If your loved one has a qualifying event - like moving to a new facility or losing existing coverage - a Special Enrollment Period may apply.
        </p>
        <p>
          Don't wait until things are urgent. If you're already feeling stuck with the current plan, call me now and we'll figure out your options before the next window opens.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free call - I help caregivers with this too
        </h2>
        <p>
          You're carrying a lot. Let me carry the Medicare part. I'll review your loved one's current coverage, check whether their doctors and meds are covered, and tell you straight what makes sense. No cost, no obligation.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands dementia care
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
            href="/get-a-free-quote"
            className="text-blue-700 font-bold hover:underline"
          >
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
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D Drug Coverage Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-caregivers"
              className="text-blue-700 hover:underline"
            >
              Medicare Help for Caregivers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-home-health-coverage"
              className="text-blue-700 hover:underline"
            >
              What Medicare Covers for Home Health
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}