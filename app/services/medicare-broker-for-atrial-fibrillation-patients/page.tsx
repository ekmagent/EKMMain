import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for atrial fibrillation patients | Free Carrier Comparison | MedicareYourself",
  description:
    "Medicare broker for atrial fibrillation patients in NJ. Anthony Orner finds plans covering blood thinners, monitoring, and cardiology. Free plan review.",
  openGraph: {
    title:
      "Medicare broker for atrial fibrillation patients | Free Carrier Comparison | MedicareYourself",
    description:
      "Medicare broker for atrial fibrillation patients in NJ. Anthony Orner finds plans covering blood thinners, monitoring, and cardiology. Free plan review.",
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
      name: "Medicare Broker for Atrial Fibrillation Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-atrial-fibrillation-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Atrial Fibrillation Patients Who Deserve Coverage Without the Financial Stress",
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
  datePublished: "2025-07-31",
  dateModified: "2025-07-31",
};

const faqs = [
  {
    question: "Does Medicare cover AFib treatment?",
    answer:
      "Yes. Original Medicare (Parts A and B) covers medically necessary AFib treatments including diagnostic testing, cardiology visits, cardiovascular monitoring, and procedures like catheter ablation when deemed appropriate by your doctor. Part B covers outpatient cardiology and monitoring devices. Part A covers inpatient hospital stays for procedures. Part D or Medicare Advantage plans cover prescription medications like blood thinners, though formularies vary by plan.",
  },
  {
    question:
      "Will Medicare pay for a cardiac ablation for atrial fibrillation?",
    answer:
      "Medicare covers cardiac ablation when it's medically necessary and your doctor documents that other treatments haven't controlled your AFib adequately. You'll still owe the Part A deductible ($1,676 per benefit period in 2026) and any coinsurance unless you have a Medigap plan or Medicare Advantage plan that reduces your out-of-pocket costs.",
  },
  {
    question:
      "Can I get a Medigap plan in New Jersey if I already have AFib?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and have Part B), no carrier can deny you or charge more because of AFib. Outside that window, medical underwriting applies in most states, and a pre-existing heart condition could affect eligibility or pricing. That's why timing matters so much. Call Anthony at 855-559-1700 to review your enrollment timeline.",
  },
  {
    question: "Is Medicare Advantage or Medigap better for AFib patients?",
    answer:
      "It depends on how you use care. If you see specialists frequently, need regular monitoring, or may need a procedure like ablation, Medigap often provides more predictable costs since it covers your Medicare coinsurance and copays. Medicare Advantage plans may offer lower premiums but come with networks, prior authorizations, and out-of-pocket maximums. Anthony can compare both options for your specific situation at no cost.",
  },
];

export default function MedicareBrokerAtrialFibrillation() {
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
          Medicare Broker for Atrial Fibrillation Patients
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Broker for Atrial Fibrillation Patients Who Deserve Coverage
        Without the Financial Stress
      </h1>

      <Image
        src="/images/hub_medicare-broker-for-atrial-fibrillation-patients.webp"
        alt="Medicare broker for atrial fibrillation patients"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        A Medicare broker for atrial fibrillation patients can be the difference
        between a plan that covers your blood thinners and cardiology visits and
        one that leaves you staring at a $93,000 ablation bill wondering what
        went wrong. I'm Anthony Orner, a licensed Medicare broker in New Jersey,
        and I help AFib patients find the right coverage before the financial
        stress piles on top of the heart stress.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Blood thinners, ablations, and what your plan needs to cover
        </h2>
        <p className="text-gray-700 mb-3">
          AFib treatment isn't one prescription and done. You're likely on a
          blood thinner like Eliquis or Xarelto, seeing a cardiologist or
          electrophysiologist regularly, and possibly wearing a heart monitor.
          Some of you are heading toward an ablation.
        </p>
        <p className="text-gray-700 mb-3">
          Original Medicare covers medically necessary AFib treatments: Part B
          handles outpatient cardiology and monitoring, Part A covers inpatient
          procedures. But the gaps hit hard. The Part A deductible alone is
          $1,676 per benefit period in 2026. Without supplemental coverage,
          you're exposed.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How AFib diagnosis affects Medigap enrollment in New Jersey
        </h2>
        <p className="text-gray-700 mb-3">
          Timing is everything. During your 6-month Medigap Open Enrollment
          Period, no carrier can deny you or charge higher premiums because of
          your AFib. That window starts the month you turn 65 and have Part B.
          Miss it, and medical underwriting kicks in. A heart rhythm condition on
          your record can mean higher rates or flat-out denials.
        </p>
        <p className="text-gray-700">
          If you're approaching 65 and already diagnosed, we need to talk before
          that window opens. I typically have clients apply up to six months
          early to lock in the best rate.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medicare Advantage vs. Medigap when you're managing heart rhythm
          issues
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare Advantage plans can look appealing with low premiums and added
          benefits. But for AFib patients who need frequent specialist visits and
          may need a procedure, there are real tradeoffs:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
          <li>
            <strong>Network restrictions</strong> - your electrophysiologist may
            not be in-network
          </li>
          <li>
            <strong>Prior authorizations</strong> - some plans require approval
            before ablation procedures
          </li>
          <li>
            <strong>Out-of-pocket maximums</strong> - can still reach $5,000 to
            $8,000 in a bad year
          </li>
        </ul>
        <p className="text-gray-700">
          Medigap plans like Plan G cover your Part A and Part B coinsurance
          with no network and no prior auth. Your out-of-pocket costs become
          predictable. For someone with an unpredictable heart, predictable
          finances matter.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Stop worrying about bills on top of every heart flutter
        </h2>
        <p className="text-gray-700 mb-3">
          That 2 AM flutter shouldn't come with a second wave of panic about
          what the ER visit will cost. Too many AFib patients delay going in
          because they're worried about the bill. The right plan takes that fear
          off the table so you can focus on your health.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your prescriptions need a plan that actually covers them
        </h2>
        <p className="text-gray-700 mb-3">
          Blood thinners can cost hundreds per month without proper Part D
          coverage. Formularies vary wildly between carriers. One plan might put
          Eliquis on a preferred tier while another requires step therapy or
          prior authorization. I compare Part D plans alongside your Medigap or
          Advantage options to make sure your medications are covered at the
          lowest cost.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What a free plan review looks like
        </h2>
        <p className="text-gray-700 mb-3">
          You call. We talk through your doctors, your prescriptions, and what
          procedures might be ahead. I compare carriers across New Jersey and
          show you the actual numbers. No cost, no obligation, no pressure. If
          the plan you already have is the best fit, I'll tell you that too.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Talk to a licensed Medicare broker who understands AFib coverage.
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline hover:text-blue-600"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-bold underline hover:text-blue-600"
          >
            get a free quote online
          </Link>
          .
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Plan G in New Jersey: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-prescription-drug-coverage"
              className="text-blue-700 hover:underline"
            >
              Medicare Part D: How Prescription Drug Coverage Works
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-700 hover:underline"
            >
              Find a Licensed Medicare Broker in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}