import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for COPD patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for COPD patients who need real coverage — inhalers, oxygen, pulmonary rehab. Anthony Orner finds plans that see past the diagnosis. Free review.",
  openGraph: {
    title:
      "Medicare broker for COPD patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for COPD patients who need real coverage — inhalers, oxygen, pulmonary rehab. Anthony Orner finds plans that see past the diagnosis. Free review.",
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
      name: "Medicare Broker for COPD Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-copd-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for COPD Patients — Coverage That Sees Past the Diagnosis",
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
      "Nothing. My services are completely free to you. I'm paid by the insurance carriers, not by my clients. You get the same plan at the same price whether you use a broker or enroll on your own - but with a broker, you get someone who actually reviews your medications, doctors, and coverage needs before you choose.",
  },
  {
    question: "Does Medicare pay for COPD treatment?",
    answer:
      "Yes. Medicare Part B covers pulmonary rehabilitation if you have moderate to very severe COPD, plus oxygen equipment when you meet medical criteria. Part D covers inhalers, though which ones and at what cost depends entirely on the plan's formulary. That's exactly why plan selection matters so much with COPD.",
  },
  {
    question:
      "Will my smoking history affect which Medicare plans I can get?",
    answer:
      "During your Medigap Open Enrollment Period (6 months starting the month you turn 65 and have Part B), carriers cannot charge you more or deny you based on health history, including smoking. Outside that window, some carriers may ask health questions. Medicare Advantage plans cannot deny you based on smoking history as long as you have Parts A and B.",
  },
  {
    question: "Which Medicare plan is best for someone with COPD?",
    answer:
      "It depends on your medications, your doctors, and whether you need oxygen or pulmonary rehab. Some Advantage plans offer $0 premiums but have narrow networks and formularies that change yearly. Medigap plans give you broader access but require a separate Part D plan. I compare both sides for you based on your actual prescriptions and providers.",
  },
];

export default function MedicareBrokerForCOPDPatients() {
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
        <span className="text-gray-700">Medicare Broker for COPD Patients</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Broker for COPD Patients — Coverage That Sees Past the
        Diagnosis
      </h1>

      <Image
        src="/images/medicare-broker-for-copd-patients.webp"
        alt="Medicare broker for COPD patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        A Medicare broker for COPD patients does one thing most plans don't - look at your actual daily reality before recommending coverage. Not which tier your inhaler falls on in theory, but whether you can afford it at the pharmacy counter next month.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I work with people who are managing COPD every day, and I build plan recommendations around the medications, oxygen needs, and doctors that keep you breathing.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Your smoking history doesn't define your coverage options
        </h2>
        <p className="mb-3">
          You're tired of the first question always being "Did you smoke?" - as if that changes what you're dealing with right now. Up to 25% of people with COPD never smoked at all. And for those who did, it doesn't change the fact that you need coverage that works.
        </p>
        <p>
          During your Medigap Open Enrollment Period, carriers can't charge you more or turn you away based on health history. That window matters. If you're approaching 65 or just got Part B, let's talk before it closes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plans that cover inhalers, pulmonary rehab, and oxygen without surprises
        </h2>
        <p className="mb-3">
          COPD medications are expensive. Trelegy, Breztri, Stiolto Respimat - these can run over $500 without the right Part D plan. And formularies change every year, so the plan that covered your inhaler last January might not cover it this January.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Inhalers:</strong> Covered under Part D, but tier placement varies wildly between plans. I check your specific medications against every available formulary.
          </li>
          <li>
            <strong>Oxygen therapy:</strong> Covered under Part B when you meet medical criteria. You pay 20% of the Medicare-approved amount after the $283 annual deductible.
          </li>
          <li>
            <strong>Pulmonary rehab:</strong> Part B covers programs for moderate to very severe COPD. Same 20% cost-sharing applies.
          </li>
          <li>
            <strong>2025+ cap:</strong> Medicare now caps Part D out-of-pocket costs at $2,100 annually (2026) - a real difference when you rely on multiple inhalers.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Supplement vs. Advantage plans handle COPD differently
        </h2>
        <p className="mb-3">
          With a Medigap plan (like Plan G or Plan N), you can see any doctor who accepts Medicare. No prior authorizations for specialists, no network restrictions. You'll need a separate Part D plan for prescriptions.
        </p>
        <p>
          Medicare Advantage bundles everything into one plan, often with $0 premiums. But networks are tighter, formularies are narrower, and switching inhalers because the plan changed its drug list mid-year is a real problem people deal with. I lay out both options honestly so you pick what fits your life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          The daily reality most insurance content ignores
        </h2>
        <p className="mb-3">
          A simple meal that requires rest periods between steps. Bathing that takes planning. The exhaustion that hits harder than the breathlessness some days. Leaving home only for doctor appointments because you physically can't tolerate more.
        </p>
        <p>
          I'm not going to pretend I fully understand what that's like. But I do understand that your Medicare plan shouldn't add another layer of frustration on top of it. No surprise costs at the pharmacy. No fighting for a nebulizer. No discovering your pulmonologist left the network.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What I actually check during a COPD plan review
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Every inhaler and nebulizer medication you use - checked against each plan's formulary and tier</li>
          <li>Your pulmonologist, primary care doctor, and any specialists - confirmed in-network</li>
          <li>Oxygen equipment coverage and supplier access</li>
          <li>Pulmonary rehab facility availability near you</li>
          <li>Total annual out-of-pocket cost, not just the premium</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan review built around your breathing - not your past
        </h2>
        <p>
          You don't need to understand Medicare tiers or formulary exceptions. You need someone who does, who'll sit down with your medication list and find the plan that actually covers what you take. That's what I do. No cost, no obligation, no pressure.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands COPD coverage
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
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G Explained - What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D - How Prescription Drug Coverage Works
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
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Work with a Licensed Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}