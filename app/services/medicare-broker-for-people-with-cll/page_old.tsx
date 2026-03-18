import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with CLL | Free Expert Guidance | MedicareYourself",
  description:
    "Medicare broker for people with CLL — honest help with Medigap underwriting, Advantage plans, and guaranteed issue options. Free consult with Anthony Orner.",
  openGraph: {
    title:
      "medicare broker for people with CLL | Free Expert Guidance | MedicareYourself",
    description:
      "Medicare broker for people with CLL — honest help with Medigap underwriting, Advantage plans, and guaranteed issue options. Free consult with Anthony Orner.",
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
      name: "Medicare Broker for People With CLL",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-cll",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People With CLL: Navigating Coverage With Chronic Lymphocytic Leukemia",
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
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Does Medicare pay for CLL treatment?",
    answer:
      "Yes. Original Medicare (Parts A and B) covers CLL treatment including chemotherapy administered in a hospital or doctor's office, oncologist visits, lab work, and imaging. Part B covers drugs administered by your doctor. Oral cancer medications taken at home are typically covered under a Part D prescription drug plan. Your out-of-pocket costs depend on whether you have a Medigap supplement, a Medicare Advantage plan, or Part D coverage.",
  },
  {
    question: "What is the new treatment for chronic lymphocytic leukemia?",
    answer:
      "Targeted therapies like BTK inhibitors and BCL-2 inhibitors have changed CLL treatment significantly. These are often oral medications covered under Part D, though formulary coverage and tier placement vary by plan. A broker can help you check whether your specific CLL medications are covered and at what cost under different plan options.",
  },
  {
    question: "Can I get a Medigap plan if I have CLL?",
    answer:
      "It depends on timing. During your 6-month Medigap Open Enrollment Period (starting when you turn 65 and have Part B), insurers cannot deny you or charge more due to CLL. Outside that window, most carriers will medically underwrite, and an active cancer diagnosis typically results in a decline. A broker can identify whether you qualify for guaranteed issue rights that bypass health questions.",
  },
  {
    question: "Is Medicare Advantage a good option for someone with CLL?",
    answer:
      "Medicare Advantage plans cannot deny enrollment based on health status during eligible enrollment periods. Many plans include Part D drug coverage and out-of-pocket maximums. However, network restrictions matter - you'll want to confirm your oncologist and any CLL specialists are in-network. A broker can compare plans in your area based on your specific providers and medications.",
  },
];

export default function MedicareBrokerForPeopleWithCLL() {
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
        <span className="text-gray-700">Medicare Broker for People With CLL</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Broker for People With CLL: Navigating Coverage With Chronic Lymphocytic Leukemia
      </h1>

      <Image
        src="/images/medicare-broker-for-people-with-cll.webp"
        alt="medicare broker for people with CLL"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for people with CLL can save you from a costly enrollment mistake at the worst possible time. When you're managing blood work schedules, watching counts, and wondering when - or if - treatment starts, the last thing you need is a plan that doesn't cover your oncologist or puts your oral medications on a high-cost tier.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help people with chronic lymphocytic leukemia find coverage that actually fits their care - not just the cheapest premium on a spreadsheet.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why CLL makes Medicare Supplement underwriting difficult
        </h2>
        <p className="mb-3">
          Most Medigap carriers ask about cancer history on their applications. An active CLL diagnosis - even if you're on watch-and-wait with no treatment - usually triggers a decline outside of guaranteed issue periods.
        </p>
        <p className="mb-3">
          This catches people off guard. You feel fine. Your doctor says no treatment is needed yet. But the insurance company sees "leukemia" on the application and says no.
        </p>
        <p>
          Timing matters enormously. Your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and have Part B) is the one window where no carrier can turn you down or charge more because of CLL. Miss it, and your options shrink dramatically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage vs. Medigap when you have CLL
        </h2>
        <p className="mb-3">
          Medicare Advantage plans cannot deny you based on health status during eligible enrollment periods. That's a real advantage if you're past your Medigap open enrollment window.
        </p>
        <p className="mb-3">
          But there are tradeoffs to weigh carefully:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Network restrictions:</strong> Confirm your oncologist and any CLL specialist are in-network. Seeing an out-of-network provider can cost significantly more or not be covered at all.
          </li>
          <li>
            <strong>Out-of-pocket maximums:</strong> Advantage plans cap your annual costs. Original Medicare with no supplement does not.
          </li>
          <li>
            <strong>Drug coverage:</strong> Many CLL treatments are oral medications covered under Part D. Check the formulary tier - the difference between Tier 3 and Tier 5 can be thousands of dollars a year.
          </li>
          <li>
            <strong>Prior authorizations:</strong> Some Advantage plans require prior auth for cancer treatments. This can delay care.
          </li>
        </ul>
        <p>
          With Original Medicare plus a Medigap supplement and a standalone Part D plan, you get broader provider access and predictable costs - but only if you can get approved for the supplement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed issue situations that bypass health questions
        </h2>
        <p className="mb-3">
          Outside your initial Medigap open enrollment, federal guaranteed issue rights still apply in specific situations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>You're losing employer or union group coverage</li>
          <li>Your Medicare Advantage plan is leaving your area or shutting down</li>
          <li>Your Medigap carrier goes bankrupt or violated its contract</li>
          <li>You moved out of your plan's service area</li>
        </ul>
        <p>
          These windows are narrow and time-sensitive. If one applies to you, it's the one chance to get a Medigap plan without answering a single health question. I help clients identify and use these rights before they expire.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a broker advocates for CLL patients during enrollment
        </h2>
        <p className="mb-3">
          I don't charge you anything. Brokers are paid by the insurance carriers, and the premium you pay is the same whether you use a broker or go direct. The difference is you get someone reviewing your medications, checking provider networks, and flagging problems before you enroll.
        </p>
        <p>
          For CLL patients specifically, I look at which Part D plans cover your current and likely future medications at the lowest cost, whether your specialists accept the plan, and what your total annual exposure would be if treatment starts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing your enrollment around CLL matters more than you think
        </h2>
        <p className="mb-3">
          People diagnosed with CLL before turning 65 face a unique challenge. You may be healthy enough that treatment isn't needed, but sick enough on paper that underwriters decline you.
        </p>
        <p>
          That's why I tell every client approaching 65 with a CLL diagnosis: do not wait. Your Medigap Open Enrollment Period is the strongest protection you have. Once it closes, it doesn't reopen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to bring to your first call
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your Medicare card or expected Part B start date</li>
          <li>A list of current medications (including dosages)</li>
          <li>Names of your oncologist, hematologist, and primary care doctor</li>
          <li>Any upcoming procedures or treatment plans your doctor has discussed</li>
          <li>Your zip code (plan availability varies by county)</li>
        </ul>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk through your CLL coverage options with a licensed broker.
        </p>
        <p className="mb-4">
          No cost. No obligation. Just honest answers about your Medicare choices.
        </p>
        <p className="text-2xl font-bold mb-3">
          <a href="tel:8555591700" className="text-blue-700 hover:underline">
            855-559-1700
          </a>
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/part-d-drug-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D: How Prescription Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-cancer-patients"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Cancer Patients
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}