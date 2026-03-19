import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for osteoporosis patients | Free Coverage Review | MedicareYourself",
  description:
    "Medicare broker for osteoporosis patients in NJ. Anthony Orner matches you with plans covering DEXA scans, infusions, and fracture rehab. Free quote today.",
  openGraph: {
    title:
      "Medicare broker for osteoporosis patients | Free Coverage Review | MedicareYourself",
    description:
      "Medicare broker for osteoporosis patients in NJ. Anthony Orner matches you with plans covering DEXA scans, infusions, and fracture rehab. Free quote today.",
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
      name: "Medicare Broker for Osteoporosis Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-osteoporosis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Osteoporosis Patients Who Need Protection Before and After a Fall",
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
    question: "Does Medicare pay for osteoporosis treatment?",
    answer:
      "Yes. Medicare Part B covers DEXA bone density scans once every 24 months (or more frequently if medically necessary). Part B also covers injectable osteoporosis drugs for qualifying women who meet home health criteria and have a fracture related to postmenopausal osteoporosis. Part D covers most oral osteoporosis medications, though costs vary widely by plan and formulary.",
  },
  {
    question:
      "How do I find a Medicare plan that covers Prolia or other infusion drugs?",
    answer:
      "Prolia (denosumab) is typically covered under Part B when administered in a doctor's office, but your cost-sharing depends on your plan. Some Medicare Advantage plans charge $600 or more per injection. A licensed Medicare broker can compare plans side by side to find the lowest out-of-pocket cost for your specific treatment.",
  },
  {
    question:
      "Will a Medigap plan help with osteoporosis-related hospital costs?",
    answer:
      "Yes. If you break a hip or need surgery, Original Medicare leaves you responsible for the $1,676 Part A deductible per benefit period, plus coinsurance for skilled nursing days 21-100 at $209.50/day. A Medigap plan like Plan G covers most or all of those gaps.",
  },
  {
    question: "How often does Medicare cover DEXA scans?",
    answer:
      "Medicare Part B covers a DEXA scan once every 24 months for most beneficiaries. If your doctor documents a medical reason - such as starting a new osteoporosis medication or monitoring rapid bone loss - Medicare may approve more frequent scans.",
  },
];

export default function MedicareBrokerForOsteoporosisPatients() {
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
          Medicare Broker for Osteoporosis Patients
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for Osteoporosis Patients Who Need Protection Before and
        After a Fall
      </h1>

      <Image
        src="/images/medicare-broker-for-osteoporosis-patients.webp"
        alt="Medicare broker for osteoporosis patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for osteoporosis patients does something most plan
        comparison tools can't - match your coverage to the specific treatments
        keeping your bones intact. I'm Anthony Orner, a licensed Medicare broker
        in New Jersey, and I work with people who need their plan to cover DEXA
        scans, infusions, and fracture rehab without surprise bills.
      </p>
      <p className="text-lg mb-6">
        You already live with the math running in the back of your head: the
        handrail, the icy sidewalk, the cost if something breaks. Your coverage
        should account for that risk, not ignore it.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a broken hip really costs without the right coverage
        </h2>
        <p className="mb-2">
          A hip fracture means hospitalization, surgery, and often weeks of
          skilled nursing rehab. Under Original Medicare alone, you'd owe the
          $1,676 Part A deductible for each benefit period. If you need skilled
          nursing past day 20, that's $209.50 per day out of pocket for days
          21-100.
        </p>
        <p>
          Those costs add up fast on a fixed income. The right Medigap or
          Advantage plan absorbs most of that hit before it reaches your bank
          account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          DEXA scans, infusions, and the benefits Medicare should cover
        </h2>
        <p className="mb-2">
          Medicare Part B covers DEXA bone density scans once every 24 months,
          or more often if your doctor documents the need. Part B also covers
          injectable osteoporosis drugs for eligible women who meet home health
          criteria and have a postmenopausal fracture history.
        </p>
        <p>
          Drugs like Prolia are usually billed under Part B when given in a
          doctor's office. But your cost-share depends entirely on your plan.
          Some Advantage plans charge $600 or more per injection. That's the
          kind of detail that matters before you enroll, not after.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When step therapy and prior auth stand between you and treatment
        </h2>
        <p className="mb-2">
          Some plans require step therapy - meaning you have to try and "fail"
          one drug before they'll approve the one your doctor actually
          recommends. For someone with severe fracture risk, that delay isn't
          just frustrating. It's dangerous.
        </p>
        <p>
          I look at formulary restrictions and prior authorization requirements
          before recommending a plan. If your doctor has prescribed an anabolic
          or a specific biologic, your plan needs to actually cover it at a cost
          you can sustain.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How osteoporosis impacts your Medigap and Advantage options
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap (Plan G, Plan N):</strong> Covers the gaps Original
            Medicare leaves - hospital deductibles, skilled nursing coinsurance,
            Part B excess charges. You keep access to any doctor who takes
            Medicare.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> May offer lower premiums but
            check the fine print on specialist copays, infusion costs, and
            rehab facility networks.
          </li>
          <li>
            <strong>Part D:</strong> Oral osteoporosis drugs (bisphosphonates,
            for example) fall under Part D. Formularies vary widely - a drug
            that's $30 on one plan could be $300 on another.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Staying on treatment when costs keep climbing
        </h2>
        <p className="mb-2">
          I hear from people whose Prolia costs jumped from $0 to $350 per
          injection in a single year. Stopping isn't just inconvenient - abruptly
          discontinuing some osteoporosis drugs can cause rebound bone loss and
          increase fracture risk.
        </p>
        <p>
          If your current plan's drug costs are pushing you toward skipping
          doses, that's exactly the situation where a plan review pays off. There
          may be a plan with better Part B cost-sharing or a Part D formulary
          that keeps your medication affordable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Build a safety net that matches the risk you live with daily
        </h2>
        <p className="mb-2">
          You don't need a generic plan comparison. You need someone who'll look
          at your DEXA results, your prescriptions, your doctors, and your
          budget - then show you the two or three plans that actually fit.
        </p>
        <p>
          I'm Anthony Orner, and I do this free of charge. No cost to you, no
          obligation. The carriers pay me, so you get honest advice without a
          bill attached.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-semibold mb-2">
          Ready to review your osteoporosis coverage?
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
          No pressure. Just clear answers from a licensed NJ Medicare broker.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in New Jersey - What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-coverage"
              className="text-blue-700 hover:underline"
            >
              What Does Medicare Part B Cover?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Find a Medicare Broker in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap - Which Is Right for You?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}