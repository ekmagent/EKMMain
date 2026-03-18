import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for neuropathy patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for neuropathy patients comparing plans for nerve testing, specialist visits, and Rx. Anthony Orner finds the right fit — free review.",
  openGraph: {
    title:
      "Medicare broker for neuropathy patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for neuropathy patients comparing plans for nerve testing, specialist visits, and Rx. Anthony Orner finds the right fit — free review.",
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
      name: "Medicare Broker for Neuropathy Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-neuropathy-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Neuropathy Patients: Coverage for Nerve Pain Treatment and Testing",
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
    question: "Will Medicare pay for neuropathy treatment?",
    answer:
      "Yes. Original Medicare and Medicare Advantage both cover medically necessary neuropathy treatments, including nerve conduction studies, EMGs, FDA-approved medications like gabapentin and duloxetine, and physical therapy. Coverage depends on proper diagnosis, documentation, and the specific plan. Some therapies like laser treatment and infrared devices are generally not covered by Original Medicare.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by the insurance carriers, not by you. A plan review, comparison, and enrollment assistance are all free. There's no fee and no obligation.",
  },
  {
    question:
      "Does Medicare cover podiatrist visits for non-diabetic neuropathy?",
    answer:
      "Medicare Part B covers podiatry services when they're medically necessary, but coverage can be limited for non-diabetic neuropathy patients. A neurologist referral and proper documentation of your condition improve your chances of approval. I can help you find plans with better specialist access.",
  },
  {
    question:
      "Which is better for neuropathy care - Medicare Advantage or Medigap?",
    answer:
      "It depends on how often you see specialists and what medications you take. Medicare Advantage plans may offer lower premiums and extra benefits but often require referrals and use provider networks. Medigap plans paired with Original Medicare give you broader provider access with more predictable costs. Call for a free comparison based on your specific treatment needs.",
  },
];

export default function MedicareBrokerForNeuropathyPatients() {
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
          Medicare Broker for Neuropathy Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Neuropathy Patients: Coverage for Nerve Pain
          Treatment and Testing
        </h1>
        <Image
          src="/images/medicare-broker-for-neuropathy-patients_photo.webp"
          alt="Medicare broker for neuropathy patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for neuropathy patients does what most plan comparison
        tools can't - match your specific nerve pain treatments, medications, and
        specialist needs to the right coverage. I'm Anthony Orner, a licensed
        broker in NJ, and I do this at no cost to you.
      </p>
      <p className="text-lg mb-6">
        Neuropathy affects every part of your day. The burning that wakes you at
        3 a.m. The medications that half-work. The frustration of being told your
        specific type of nerve damage doesn't qualify for the same coverage as
        diabetic neuropathy. Your plan should work around your reality, not the
        other way around.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-bold mb-3">
          How Medicare covers nerve conduction studies and EMGs
        </h2>
        <p className="mb-3">
          Medicare Part B covers diagnostic nerve testing when your doctor orders
          it as medically necessary. That includes nerve conduction studies (NCS)
          and electromyography (EMG) - the two main tests used to identify the
          type and severity of your neuropathy.
        </p>
        <p>
          You'll pay 20% of the Medicare-approved amount after meeting the $283
          annual Part B deductible. If you have a Medigap plan like Plan G, that
          20% is covered. With Medicare Advantage, your cost depends on your
          plan's copay structure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">
          Prescription drug plans that cover neuropathy medications
        </h2>
        <p className="mb-3">
          Common neuropathy medications include gabapentin, pregabalin (Lyrica),
          duloxetine, and topical lidocaine patches. Every Part D plan has a
          different formulary, which means your drug might be tier 1 on one plan
          and tier 3 on another - or not covered at all.
        </p>
        <p className="mb-3">
          This matters especially if your neuropathy isn't caused by diabetes.
          Some plans restrict lidocaine patches and certain medications to
          specific diagnoses. I check your exact prescriptions against every
          available plan's formulary so you don't get surprised at the pharmacy
          counter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">
          Medigap or Advantage: which handles specialist visits better
        </h2>
        <p className="mb-3">
          Neuropathy care usually means regular neurologist visits, sometimes a
          podiatrist, physical therapy, and pain management. With Original
          Medicare plus a Medigap plan, you can see any specialist who accepts
          Medicare - no referrals, no networks.
        </p>
        <p>
          Medicare Advantage plans can save money upfront, but many require
          referrals and restrict you to in-network providers. If you're already
          seeing a specialist you trust, that network limitation matters. I
          compare both paths based on your actual doctors and treatment schedule.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">
          What Medicare doesn't cover for nerve pain
        </h2>
        <p className="mb-3">
          Original Medicare generally does not pay for laser therapy, infrared
          light devices, massage therapy, or most supplements marketed for nerve
          health. Some Medicare Advantage plans include a few of these as
          supplemental benefits, but coverage varies widely.
        </p>
        <p>
          I'll be straight with you about what's covered and what's not. No
          guessing, no finding out after the bill arrives.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">
          Physical therapy and durable medical equipment coverage
        </h2>
        <p className="mb-3">
          Medicare Part B covers physical therapy when prescribed for neuropathy.
          It also covers certain durable medical equipment - diabetic shoes,
          custom orthotics, and braces when documentation supports medical
          necessity.
        </p>
        <p>
          If your neuropathy is non-diabetic, getting approval for some of these
          items requires extra documentation from your provider. I can help you
          understand what your plan requires before you start treatment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">
          Book a free plan review tailored to neuropathy care
        </h2>
        <p className="mb-3">
          Bring me your medication list, your doctors, and your frustrations. I
          compare every plan available in your area against your actual treatment
          needs. No cost. No obligation. No sales pitch.
        </p>
        <p>
          You deal with enough already. Your Medicare plan should be one less
          thing keeping you up at night.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to a licensed Medicare broker who understands neuropathy coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-for-chronic-pain"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Chronic Pain Patients
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-drug-coverage"
              className="text-blue-600 hover:underline"
            >
              Understanding Medicare Part D Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-diabetic-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Diabetic Patients
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}