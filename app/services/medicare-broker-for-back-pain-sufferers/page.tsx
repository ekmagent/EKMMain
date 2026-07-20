import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for back pain sufferers | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for back pain sufferers helping you find plans covering PT, injections, and surgery. Anthony Orner compares your options — free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-back-pain-sufferers" },
  openGraph: {
    title:
      "Medicare broker for back pain sufferers | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for back pain sufferers helping you find plans covering PT, injections, and surgery. Anthony Orner compares your options — free consultation.",
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
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Broker for Back Pain Sufferers",
      item: "https://medicareyourself.com/services/medicare-broker-for-back-pain-sufferers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Back Pain Sufferers — Find Coverage That Covers What Matters",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid by insurance carriers, not by you. My consultations and plan comparisons are completely free, and there's no obligation to enroll through me.",
  },
  {
    question: "Does Medicare cover pain management for back pain?",
    answer:
      "Yes. Original Medicare (Parts A and B) covers medically necessary back pain treatments including physical therapy, epidural steroid injections, certain surgeries, and as of 2020, acupuncture for chronic low back pain. Your out-of-pocket costs depend on whether you have a Medigap plan or Medicare Advantage.",
  },
  {
    question:
      "Can I see a specialist for back pain without a referral on Medicare?",
    answer:
      "With Original Medicare, you can see any specialist who accepts Medicare without a referral. Many Medicare Advantage plans require referrals or limit you to in-network providers. If you need direct access to neurosurgeons or pain management doctors, this is a critical factor in choosing your plan.",
  },
  {
    question:
      "What's better for chronic back pain — Medigap or Medicare Advantage?",
    answer:
      "It depends on your treatment needs. Medigap gives you unrestricted provider access and predictable costs, which matters if you're seeing multiple specialists. Medicare Advantage may offer lower premiums and extras like transportation to appointments, but networks and prior authorizations can slow treatment. I'll walk you through the tradeoffs based on your specific situation.",
  },
];

export default function MedicareBrokerForBackPainSufferers() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Back Pain Sufferers
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for Back Pain Sufferers — Find Coverage That Covers
          What Matters
        </h1>

        <Image
          src="/images/medicare-broker-for-back-pain-sufferers.webp"
          alt="Medicare broker for back pain sufferers"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-lg mb-2">
          A Medicare broker for back pain sufferers does one thing most agents
          skip: compare plans based on how you actually use healthcare, not just
          what's cheapest on paper. I'm Anthony Orner, a licensed Medicare broker
          who helps people with chronic back pain find plans that cover their PT
          visits, injections, imaging, and surgeries without surprise bills.
        </p>

        <p className="text-lg mb-6">
          Back pain doesn't follow a schedule. Some months you're managing. Some
          months you can barely walk a mile. Your plan needs to handle both.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Medicare parts cover for chronic back pain
          </h2>
          <p className="mb-2">
            Part A covers inpatient hospital stays, including spinal surgery and
            post-surgical skilled nursing. The 2026 Part A deductible is $1,736
            per benefit period. If you need rehab in a skilled nursing facility,
            days 1-20 cost $0, but days 21-100 cost $217.00/day.
          </p>
          <p>
            Part B covers outpatient treatment: physical therapy, epidural
            steroid injections, MRIs, nerve blocks, and specialist visits. Since
            2020, Medicare also covers acupuncture for chronic low back pain. You
            pay the $283 annual Part B deductible, then typically 20% of
            Medicare-approved amounts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Spinal injections, PT, and surgery: which plans pay more
          </h2>
          <p className="mb-2">
            That 20% Part B coinsurance adds up fast when you're getting epidural
            injections every few months or going to PT twice a week. A single
            spinal fusion can cost $50,000-$80,000. Twenty percent of that is
            devastating.
          </p>
          <p>
            The right Medigap plan or Medicare Advantage plan can shield you from
            those costs. But the details vary wildly between plans. That's
            exactly what I compare for you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap vs. Medicare Advantage for ongoing pain management
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap (Medicare Supplement):</strong> You see any doctor
              who accepts Medicare. No referrals. No network restrictions. Plans
              like Plan G cover nearly all your out-of-pocket costs after the
              $283 Part B deductible. If you need a neurosurgeon across the
              state, you go.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Lower monthly premiums, but
              provider networks and prior authorization requirements can delay
              treatment. Some plans include extras like transportation or OTC
              benefits. Out-of-pocket maximums cap your yearly spending.
            </li>
          </ul>
          <p className="mt-3">
            For people getting dismissed or bounced between providers, Medigap's
            open access to specialists matters. For people with stable pain
            management routines, Advantage can work if your doctors are
            in-network.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why back pain sufferers need a broker, not a search engine
          </h2>
          <p className="mb-2">
            People living with chronic back pain tell me the same thing: they
            feel stuck. Doctors brush them off. Treatments get denied. Nobody
            explains what's covered before the bill arrives.
          </p>
          <p>
            I look at your specific treatments, your doctors, and your
            medications. Then I compare plans from multiple carriers to find
            coverage that actually matches how you live, not how a healthy person
            does.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Treatments you should confirm your plan covers
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Physical therapy visits (check annual limits on MA plans)</li>
            <li>Epidural steroid injections and nerve blocks</li>
            <li>MRI and diagnostic imaging</li>
            <li>Acupuncture for chronic low back pain</li>
            <li>
              Peripheral nerve stimulation (PNS), covered by Medicare since 2020
            </li>
            <li>
              Spinal surgery (discectomy, laminectomy, fusion) and post-op rehab
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a plan comparison focused on your back pain needs
          </h2>
          <p className="mb-2">
            I'll pull up plans available in your zip code, check that your pain
            management doctors are covered, and show you the real cost
            differences. No cost to you, no pressure to enroll.
          </p>
          <p>
            You've spent enough time fighting for answers. Let me handle the
            insurance part.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Talk to a broker who understands back pain coverage.
          </p>
          <p className="text-lg mb-4">
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

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Physical Therapy Coverage Explained
              </Link>
            </li>
                      <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-arthritis-sufferers"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Arthritis Sufferers
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-asthma-sufferers"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Asthma Sufferers
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Learn more from official sources: <a href="https://www.medicare.gov/coverage/acupuncture" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov — Acupuncture for chronic low back pain</a> and <a href="https://www.medicare.gov/coverage/physical-therapy" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov — Physical therapy coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}