import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for dialysis patients | Free ESRD Plan Review | MedicareYourself",
  description:
    "Medicare broker for dialysis patients explaining ESRD eligibility, plan coordination, and cost control. Anthony Orner provides free plan reviews for dialysis.",
  openGraph: {
    title:
      "Medicare broker for dialysis patients | Free ESRD Plan Review | MedicareYourself",
    description:
      "Medicare broker for dialysis patients explaining ESRD eligibility, plan coordination, and cost control. Anthony Orner provides free plan reviews for dialysis.",
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
      name: "Medicare Broker for Dialysis Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-dialysis-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Dialysis Patients — Navigating ESRD Coverage and Plan Options",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker like Anthony Orner is paid by the insurance carriers, not by you. Your plan review, comparisons, and enrollment help are completely free.",
  },
  {
    question: "How do I apply for Medicare if I'm on dialysis?",
    answer:
      "You can apply for Medicare based on End-Stage Renal Disease (ESRD) at any age. You'll need to meet a work history requirement through Social Security, the Railroad Retirement Board, or government employment - or be a spouse or dependent of someone who does. Your dialysis center's social worker can often help start the application, or you can call Social Security directly.",
  },
  {
    question:
      "Can I choose Medicare Advantage if I have ESRD?",
    answer:
      "Yes. Since 2021, people with ESRD can enroll in Medicare Advantage plans during the Annual Enrollment Period (October 15 - December 7). Before that change, most dialysis patients were limited to Original Medicare. Both paths have real tradeoffs - a broker can help you compare them side by side.",
  },
  {
    question: "What does Medicare cover for dialysis?",
    answer:
      "With Original Medicare, Part A covers inpatient dialysis and Part B covers outpatient dialysis treatments (typically 3 per week), dialysis supplies, certain drugs like EPO administered during treatment, and related lab work. You'll still owe the Part B deductible ($283 in 2026) and 20% coinsurance on most services unless you have supplemental coverage.",
  },
];

export default function MedicareBrokerForDialysisPatients() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>
          {" > "}
          <span className="text-gray-700">
            Medicare Broker for Dialysis Patients
          </span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for Dialysis Patients - Navigating ESRD Coverage and
            Plan Options
          </h1>
          <Image
            src="/images/medicare-broker-for-dialysis-patients_photo.webp"
            alt="Medicare broker for dialysis patients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-2">
          A Medicare broker for dialysis patients can help you sort through the
          coverage decisions that hit all at once when you're diagnosed with
          ESRD. Between coordinating insurance, understanding what Medicare
          actually covers, and figuring out whether to keep your employer plan,
          there's a lot to get right while you're already exhausted.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I help people on
          dialysis understand their options so they don't overpay or lose
          coverage they need.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare eligibility works with end-stage renal disease
          </h2>
          <p className="mb-3">
            ESRD qualifies you for Medicare regardless of age. You don't have to
            be 65. If your kidneys have permanently failed and you need regular
            dialysis or a kidney transplant, you may be eligible as long as you
            (or your spouse or parent) have enough work credits under Social
            Security, the Railroad Retirement Board, or government employment.
          </p>
          <p>
            Coverage typically starts the fourth month of dialysis. If you're
            doing home dialysis training, it can start as early as the first
            month. Timing matters because gaps between your start date and
            Medicare coverage can leave you exposed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Original Medicare vs. Advantage for dialysis: key differences
          </h2>
          <p className="mb-3">
            With Original Medicare (Parts A and B), you get access to any
            dialysis facility that accepts Medicare. Part A covers inpatient
            stays. Part B covers your outpatient dialysis sessions - usually
            three per week - plus related supplies, drugs like EPO given during
            treatment, and lab work.
          </p>
          <p className="mb-3">
            The catch: you'll owe the $283 annual Part B deductible (2026) and
            20% coinsurance. On dialysis costs, that 20% adds up fast. A
            Medigap plan can cover most or all of that gap.
          </p>
          <p>
            Since 2021, dialysis patients can also enroll in Medicare Advantage.
            These plans may offer lower out-of-pocket costs and extras like
            transportation. But they use provider networks, which can limit which
            dialysis centers you use. This is a real tradeoff that depends on
            your specific situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Coordinating employer coverage with Medicare during ESRD
          </h2>
          <p className="mb-3">
            If you're still working and have employer insurance, here's what most
            people don't realize: your employer plan stays primary for the first
            30 months of ESRD-based Medicare eligibility. After that, Medicare
            becomes primary and your employer plan becomes secondary.
          </p>
          <p>
            This coordination period is where people make costly mistakes -
            either dropping employer coverage too early or not enrolling in
            Medicare on time. Getting this wrong can mean unexpected bills or
            penalties. A broker helps you map out the timeline so both plans work
            together, not against each other.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What happens to your Medicare after a kidney transplant
          </h2>
          <p className="mb-3">
            After a successful transplant, your ESRD-based Medicare coverage
            continues for 36 months. That clock starts the month your transplant
            happens. Once those 36 months end, your coverage stops unless you
            qualify for Medicare through age (65+) or disability.
          </p>
          <p>
            This worries a lot of people - and rightfully so. If you're in your
            50s and facing a transplant, you need a plan for what happens on
            month 37. Immunosuppressant drugs alone can cost thousands monthly
            without coverage. I help people think through this before it becomes
            an emergency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Costs that catch dialysis patients off guard
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Part B premium is $202.90/month in 2026 - even if you're under
              65
            </li>
            <li>
              20% coinsurance on dialysis with Original Medicare can mean
              thousands per year without supplemental coverage
            </li>
            <li>
              Part A deductible is $1,676 per benefit period for hospital stays
            </li>
            <li>
              Some medications are covered under Part B (given during treatment),
              others fall under Part D - the distinction affects your costs
            </li>
            <li>
              Late enrollment penalties apply if you delay Part B without
              qualifying coverage
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free ESRD plan review with Anthony Orner
          </h2>
          <p>
            You're already managing treatment schedules, labs, diet changes, and
            fatigue. You shouldn't have to become an insurance expert on top of
            that. I'll review your current coverage, check whether your dialysis
            center and doctors are covered, and show you what each option
            actually costs. No charge, no pressure.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-3">
            Talk to a licensed Medicare broker who understands dialysis coverage.
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:8555591700" className="underline hover:no-underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
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
                href="/medicare-guides/original-medicare-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Original Medicare vs. Medicare Advantage
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-plans-explained"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-b-coverage"
                className="text-blue-600 hover:underline"
              >
                What Medicare Part B Covers
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-nj"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Broker in NJ
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}