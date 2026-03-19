import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for transplant recipients | Free Coverage Analysis | MedicareYourself",
  description:
    "Medicare broker for transplant recipients — keep immunosuppressant coverage, avoid gaps. Anthony Orner explains your options. Free analysis, no obligation.",
  openGraph: {
    title:
      "Medicare broker for transplant recipients | Free Coverage Analysis | MedicareYourself",
    description:
      "Medicare broker for transplant recipients — keep immunosuppressant coverage, avoid gaps. Anthony Orner explains your options. Free analysis, no obligation.",
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
      name: "Medicare Broker for Transplant Recipients",
      item: "https://medicareyourself.com/services/medicare-broker-for-transplant-recipients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Transplant Recipients: Immunosuppressant and Post-Op Coverage Explained",
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
    "https://medicareyourself.com/services/medicare-broker-for-transplant-recipients",
};

const faqs = [
  {
    question: "Does it cost to use a Medicare broker?",
    answer:
      "No. Medicare brokers are paid by the insurance carriers, not by you. There's no fee for plan comparisons, coverage analysis, or enrollment help. You get the same plan at the same price whether you use a broker or enroll on your own.",
  },
  {
    question: "Should I get a Medicare broker if I've had a transplant?",
    answer:
      "Yes. Post-transplant coverage has specific rules around immunosuppressive drugs, Part B vs. Part D, and the Part B-ID benefit. A broker who understands these rules can make sure you don't end up with a gap in anti-rejection drug coverage.",
  },
  {
    question:
      "What is the Part B Immunosuppressive Drug benefit (Part B-ID)?",
    answer:
      "Part B-ID is a benefit for people who lose Part A coverage 36 months after a kidney transplant. It only covers immunosuppressive drugs. In 2026, you'll pay a monthly premium plus 20% of the Medicare-approved amount for your medications. It does not cover other medical services.",
  },
  {
    question:
      "Does Medicare Part D cover anti-rejection medications?",
    answer:
      "Part D plans can cover immunosuppressive drugs, but formularies vary by carrier. Some plans may tier your specific medication differently or require prior authorization. A broker can compare Part D formularies to find plans that cover your exact prescriptions at the lowest cost.",
  },
];

export default function MedicareBrokerForTransplantRecipients() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Medicare Broker for Transplant Recipients
          </span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for Transplant Recipients: Immunosuppressant and
            Post-Op Coverage Explained
          </h1>
          <Image
            src="/images/medicare-broker-for-transplant-recipients.webp"
            alt="Medicare broker for transplant recipients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-2">
          A Medicare broker for transplant recipients helps you figure out the
          one thing you can't afford to get wrong: keeping your
          immunosuppressive drugs covered without interruption.
        </p>
        <p className="text-lg mb-6">
          After a transplant, your medication schedule runs your life. The last
          thing you need is a coverage gap because your plan changed its
          formulary or you aged out of a benefit you didn't know had an
          expiration date. I'm Anthony Orner, a licensed Medicare broker, and I
          help transplant recipients sort through exactly this.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare Part B covers immunosuppressive drugs after 2023
          </h2>
          <p className="mb-3">
            Medicare Part A covers your transplant surgery and inpatient care in
            a Medicare-certified hospital. Part B picks up immunosuppressive
            drugs - but only if Medicare paid for your transplant.
          </p>
          <p>
            Here's where it gets tricky: for kidney transplants, Part A coverage
            ends 36 months after a successful transplant. Before 2023, that
            meant some people lost immunosuppressive drug coverage entirely. The
            Part B-ID benefit changed that.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The Part B-ID benefit and what it means for you
          </h2>
          <p className="mb-3">
            If you had a kidney transplant and your Part A ends after 36 months,
            the Part B Immunosuppressive Drug benefit (Part B-ID) kicks in. It
            covers only immunosuppressive medications - nothing else.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You'll pay a monthly premium for Part B-ID</li>
            <li>You're responsible for 20% of the Medicare-approved amount for covered drugs</li>
            <li>This benefit does not replace full Part B - it's narrow by design</li>
          </ul>
          <p className="mt-3">
            If you already have other coverage (employer insurance, Medicaid, or full Part B), Part B-ID may not be necessary. That's exactly the kind of thing I help people figure out.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Choosing a Part D plan that covers anti-rejection medications
          </h2>
          <p className="mb-3">
            Part D formularies are not all the same. Your tacrolimus or
            mycophenolate might be Tier 2 on one plan and Tier 4 on another.
            That difference can mean hundreds of dollars a year.
          </p>
          <p>
            I compare Part D plans based on your exact prescriptions, your pharmacy, and your dosages. No guessing. You see the actual estimated costs before you enroll.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What transplant recipients worry about most
          </h2>
          <p className="mb-3">
            The people I work with aren't confused about Medicare in general. They're worried about one specific thing: will my anti-rejection meds stay covered next year?
          </p>
          <p>
            Formulary changes happen every plan year. A drug that's covered today might need prior authorization tomorrow. I monitor these shifts so you're not caught off guard during Open Enrollment (October 15 - December 7).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part A and Part B - what each covers for transplants
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Part A:</strong> Transplant surgery, inpatient hospital stay, organ registry fees, donor evaluation and surgery</li>
            <li><strong>Part B:</strong> Immunosuppressive drugs (if Medicare paid for the transplant), lab tests, outpatient follow-up care</li>
            <li><strong>Part B deductible (2026):</strong> $283/year</li>
            <li><strong>Part A deductible (2026):</strong> $1,676 per benefit period</li>
          </ul>
          <p className="mt-3">
            Medicare covers heart, lung, kidney, pancreas, intestine, and liver transplants at Medicare-certified facilities. Donor services are also covered.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free post-transplant coverage analysis
          </h2>
          <p>
            Bring me your medication list and your current plan details. I'll show you where you stand, what gaps exist, and which plans cover your drugs at the lowest out-of-pocket cost. No charge, no obligation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a Medicare broker who understands post-transplant coverage
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
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-part-d-drug-coverage"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Drug Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-b-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part B Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}