import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Quickest Way to Enroll Into Medicare Advantage Plan | Free Help | MedicareYourself",
  description:
    "Quickest way to enroll into a Medicare Advantage plan? A licensed broker completes your application in one call. Anthony Orner makes it easy. Free help.",
  openGraph: {
    title:
      "Quickest Way to Enroll Into Medicare Advantage Plan | Free Help | MedicareYourself",
    description:
      "Quickest way to enroll into a Medicare Advantage plan? A licensed broker completes your application in one call. Anthony Orner makes it easy. Free help.",
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
      item: "https://www.medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Quickest Way to Enroll Into a Medicare Advantage Plan",
      item: "https://www.medicareyourself.com/services/quickest-way-to-enroll-into-medicare-advantage-plan",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Quickest Way to Enroll Into a Medicare Advantage Plan Without the Runaround",
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
    question: "How long does it take to enroll in a Medicare Advantage plan?",
    answer:
      "The actual application takes about 10-15 minutes over the phone with a licensed broker. You'll need your Medicare number and Part A/Part B start dates from your red, white, and blue Medicare card. Coverage start dates depend on which enrollment period you're in.",
  },
  {
    question: "Can I enroll myself in a Medicare Advantage plan?",
    answer:
      "Yes, you can enroll yourself online through Medicare.gov or by calling a plan directly. But many people find it faster and less stressful to work with a licensed broker who handles the application for you at no cost. The broker is paid by the insurance carrier, not you.",
  },
  {
    question:
      "What if I missed the Annual Enrollment Period for Medicare Advantage?",
    answer:
      "You may still have options. The Open Enrollment Period runs January 1 through March 31 and lets you switch Medicare Advantage plans or drop back to Original Medicare. You may also qualify for a Special Enrollment Period if you've recently moved, lost employer coverage, or have certain other qualifying events.",
  },
  {
    question: "Do I need Part A and Part B before enrolling in Medicare Advantage?",
    answer:
      "Yes. To join a Medicare Advantage plan, you must have both Medicare Part A and Part B, live in the plan's service area, and be a U.S. citizen or lawfully present in the U.S.",
  },
];

export default function QuickestWayToEnrollMedicareAdvantagePlan() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Quickest Way to Enroll Into a Medicare Advantage Plan
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Quickest Way to Enroll Into a Medicare Advantage Plan Without the
        Runaround
      </h1>

      <Image
        src="/images/hub_quickest-way-to-enroll-into-medicare-advantage-plan.webp"
        alt="quickest way to enroll into medicare advantage plan"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        The quickest way to enroll into a Medicare Advantage plan is a single
        phone call with a licensed broker. No portal logins, no hold music, no
        back-and-forth paperwork. I handle the application while you're on the
        line - most take under 15 minutes.
      </p>
      <p className="text-lg mb-6">
        People spend weeks researching and still feel unsure. You don't have to
        do this alone.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When you can enroll and how long it takes
        </h2>
        <p className="mb-3">
          You can only join a Medicare Advantage plan during specific enrollment
          windows. Outside those windows, you're locked out unless you qualify
          for a special exception.
        </p>
        <p>
          The application itself is fast. What slows people down is figuring out
          which period they're in and which plans fit their doctors and
          prescriptions. That's where a broker saves you real time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          AEP, OEP, and SEP - which enrollment period fits your timeline
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Initial Enrollment Period (IEP):</strong> Starts 3 months
            before you turn 65 and ends 3 months after. This is your first and
            widest window.
          </li>
          <li>
            <strong>Annual Enrollment Period (AEP):</strong> October 15 through
            December 7 each year. You can join, switch, or drop a Medicare
            Advantage plan. Coverage starts January 1.
          </li>
          <li>
            <strong>Open Enrollment Period (OEP):</strong> January 1 through
            March 31. If you're already in a Medicare Advantage plan, you can
            switch to a different one or return to Original Medicare.
          </li>
          <li>
            <strong>Special Enrollment Period (SEP):</strong> Triggered by
            qualifying life events like moving, losing employer coverage, or
            losing your current plan. Timing varies.
          </li>
        </ul>
        <p className="mt-3">
          Not sure which period applies to you? That's one of the first things
          I'll clarify on a call.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to have ready so enrollment takes minutes, not weeks
        </h2>
        <p className="mb-3">
          Grab your red, white, and blue Medicare card. That's the main thing.
          From it, I'll need:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your Medicare number (on the card)</li>
          <li>Your Part A start date</li>
          <li>Your Part B start date</li>
        </ul>
        <p className="mt-3">
          You must have both Part A and Part B active to join a Medicare
          Advantage plan. You also need to live in the plan's service area. If
          you have a list of your current doctors and prescriptions handy, I can
          verify they're covered before we submit anything.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why most people get stuck before they even start
        </h2>
        <p className="mb-3">
          Part A, B, C, D, Medigap, Advantage, formularies, networks - it hits
          you all at once. People turning 65 consistently say the same thing:
          they assumed Medicare would be straightforward until they actually had
          to choose a plan.
        </p>
        <p>
          The confusion isn't your fault. The system is genuinely complicated.
          But the enrollment step itself doesn't have to be. Once someone helps
          you narrow the field, the actual sign-up is the easy part.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a broker does that a website can't
        </h2>
        <p className="mb-3">
          You can enroll on your own through Medicare.gov or by calling a plan
          directly. That's your right and it works fine if you already know
          exactly what you want.
        </p>
        <p>
          But most people don't. A licensed broker compares plans across
          carriers, checks your doctors and drugs against each network and
          formulary, and completes the application with you. There's no cost to
          you - brokers are paid by the insurance carrier. No obligation either.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Enroll in a Medicare Advantage plan with Anthony Orner today
        </h2>
        <p className="mb-3">
          I'm Anthony Orner, a licensed Medicare broker based in New Jersey. I
          work with people across the state who want clear answers and fast
          enrollment without the runaround.
        </p>
        <p>
          One call. I'll confirm your enrollment period, compare plans that fit
          your situation, and handle the application. If it turns out Medicare
          Advantage isn't the best fit, I'll tell you that too.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to enroll? Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 underline font-bold"
          >
            855-559-1700
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          Free help from a licensed Medicare broker. No pressure, no obligation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
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
              href="/services/medicare-advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-enrollment-periods"
              className="text-blue-700 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-part-b-enrollment"
              className="text-blue-700 hover:underline"
            >
              How to Sign Up for Medicare Part B
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-vs-medigap"
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