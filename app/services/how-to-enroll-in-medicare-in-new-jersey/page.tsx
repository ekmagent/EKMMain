import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "how to enroll in medicare in new jersey | Free Local Help | MedicareYourself",
  description:
    "How to enroll in Medicare in New Jersey — enrollment windows, Parts A & B sign-up, NJ Medigap rules explained. Anthony Orner helps free. Call 855-559-1700.",
  openGraph: {
    title:
      "how to enroll in medicare in new jersey | Free Local Help | MedicareYourself",
    description:
      "How to enroll in Medicare in New Jersey — enrollment windows, Parts A & B sign-up, NJ Medigap rules explained. Anthony Orner helps free. Call 855-559-1700.",
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
      name: "How to Enroll in Medicare in New Jersey",
      item: "https://www.medicareyourself.com/services/how-to-enroll-in-medicare-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Enroll in Medicare in New Jersey: A Step-by-Step Timeline",
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
    question: "What is the easiest way to enroll in Medicare?",
    answer:
      "The easiest way is to sign up through Social Security's website at ssa.gov/medicare. If you're already collecting Social Security benefits at least 4 months before turning 65, you'll be enrolled in Parts A and B automatically. Otherwise, you apply online, by phone, or at your local Social Security office.",
  },
  {
    question: "How long does it take to get approved for Medicare in NJ?",
    answer:
      "If you sign up during your Initial Enrollment Period, Medicare typically starts the first day of the month you turn 65 (or the month before if your birthday falls on the 1st). Processing usually takes a few weeks. Sign up at least 2-3 months before you want coverage to start.",
  },
  {
    question:
      "Do I need to sign up for Part B if I still have employer coverage in NJ?",
    answer:
      "If your employer has 20 or more employees and you have active group coverage, you can delay Part B without penalty. When that coverage ends, you get an 8-month Special Enrollment Period to sign up. If your employer has fewer than 20 employees, Medicare becomes primary at 65 and you should enroll on time.",
  },
  {
    question: "Can a broker help me enroll in Medicare for free?",
    answer:
      "Yes. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. There's no fee, no markup, and no obligation. A broker can walk you through every form, compare plans, and make sure you don't miss deadlines.",
  },
];

export default function HowToEnrollInMedicareInNewJersey() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
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
          How to Enroll in Medicare in New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How to Enroll in Medicare in New Jersey: A Step-by-Step Timeline
      </h1>

      <Image
        src="/images/how-to-enroll-in-medicare-in-new-jersey_photo.webp"
        alt="how to enroll in medicare in new jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How to enroll in Medicare in New Jersey trips up more people than you'd
        expect. Most assume it's automatic. Then they're staring at Parts A, B,
        C, D, Medigap, and Advantage plans wondering where to even start.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Here's the actual timeline, the NJ-specific rules that matter, and what
        to do first.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When your Medicare enrollment window opens and closes in NJ
        </h2>
        <p className="text-gray-700 mb-2">
          Your Initial Enrollment Period (IEP) is a 7-month window: 3 months
          before you turn 65, your birthday month, and 3 months after. Miss it,
          and you could face the Part B late enrollment penalty: 10% added to
          your premium for every 12 months you delayed.
        </p>
        <p className="text-gray-700">
          If you're still working with group health coverage from an employer
          with 20+ employees, you can delay Part B without penalty. Once that
          coverage ends, you get an 8-month Special Enrollment Period.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Parts A, B, and D — what to sign up for and when
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Part A (hospital):</strong> Free for most people. Sign up at
            65 even if you're still working. No downside.
          </li>
          <li>
            <strong>Part B (medical):</strong> $202.90/month in 2026 with a $283
            annual deductible. Sign up during your IEP unless you have
            qualifying employer coverage.
          </li>
          <li>
            <strong>Part D (drugs):</strong> Enroll when you first get Part B,
            or you'll face a late penalty. You can get Part D standalone or
            through a Medicare Advantage plan that includes drug coverage.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          If you're collecting Social Security at least 4 months before turning
          65, Parts A and B kick in automatically. Everyone else signs up at{" "}
          <a
            href="https://www.ssa.gov/medicare/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            ssa.gov
          </a>
          , by phone at 1-800-772-1213, or at a local Social Security office.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          NJ-specific rules that affect your Medigap enrollment rights
        </h2>
        <p className="text-gray-700 mb-2">
          New Jersey has strong Medigap protections compared to many states. Your
          federal Medigap Open Enrollment Period lasts 6 months, starting the
          month you're both 65 and enrolled in Part B. During that window,
          carriers can't deny you or charge more for pre-existing conditions.
        </p>
        <p className="text-gray-700">
          NJ also has guaranteed issue rights if you lose employer or Medicare
          Advantage coverage. These protections are real, but timing matters. If
          you wait past the window, carriers can underwrite you or refuse
          coverage entirely.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medigap vs. Medicare Advantage: pick your path early
        </h2>
        <p className="text-gray-700 mb-2">
          This is the decision that confuses most people in NJ. Medicare
          Advantage bundles everything into one plan, often with dental and
          vision, usually at $0 monthly premium. But it uses networks, and costs
          can spike if you get seriously sick.
        </p>
        <p className="text-gray-700">
          Medigap (supplement) plans like Plan G cover your out-of-pocket costs
          after Original Medicare pays. You get more freedom to see any provider
          who accepts Medicare. You'll pay a separate monthly premium, plus a
          standalone Part D plan. The tradeoff is predictability vs. lower
          upfront cost.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What happens if you miss your enrollment window
        </h2>
        <p className="text-gray-700 mb-2">
          Late penalties compound. The Part B penalty is 10% per 12-month period
          you could have had coverage but didn't. That surcharge stays on your
          premium for life.
        </p>
        <p className="text-gray-700">
          The General Enrollment Period runs January 1 through March 31 each
          year, with coverage starting July 1. It's a safety net, but not a
          shortcut. Don't rely on it if you can avoid it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How a local broker walks you through every form for free
        </h2>
        <p className="text-gray-700 mb-2">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help
          people sign up for Parts A and B, choose between Medigap and
          Advantage, and enroll in Part D. There's no fee and no obligation.
          Insurance carriers pay me directly.
        </p>
        <p className="text-gray-700">
          You can also contact NJ SHIP (State Health Insurance Assistance
          Program) for free counseling. But if you want someone who'll compare
          plans across carriers and handle the paperwork, that's what I do every
          day.
        </p>
      </section>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to enroll? Get free help from a local NJ broker.
        </p>
        <p className="text-blue-800 text-lg mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline text-blue-900"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/get-a-free-quote"
            className="font-bold underline text-blue-900"
          >
            Get a Free Quote
          </Link>
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plans-in-new-jersey"
              className="text-blue-700 underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-in-new-jersey"
              className="text-blue-700 underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-part-d-plans-in-new-jersey"
              className="text-blue-700 underline"
            >
              Medicare Part D Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-plan-g-vs-plan-n"
              className="text-blue-700 underline"
            >
              Medigap Plan G vs. Plan N
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}