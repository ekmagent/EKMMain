import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Quickest Way to Enroll Into Plan N | Same-Day Application | MedicareYourself",
  description:
    "Quickest way to enroll into Plan N? Most applications take under 15 minutes with a broker. Anthony Orner handles everything same day. Get your free quote.",
  openGraph: {
    title:
      "Quickest Way to Enroll Into Plan N | Same-Day Application | MedicareYourself",
    description:
      "Quickest way to enroll into Plan N? Most applications take under 15 minutes with a broker. Anthony Orner handles everything same day. Get your free quote.",
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
      name: "Quickest Way to Enroll Into Plan N",
      item: "https://www.medicareyourself.com/services/quickest-way-to-enroll-into-plan-n",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Quickest Way to Enroll Into Plan N: What the Process Actually Looks Like",
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
    question: "How much does the average Medicare Supplement Plan N cost?",
    answer:
      "Plan N premiums vary by carrier, your age, zip code, and tobacco use. In many areas, monthly rates range from roughly $80 to $200+. The only way to get an accurate number is to compare quotes from multiple carriers - which I do for free.",
  },
  {
    question: "What is the best time to enroll in a Medigap plan?",
    answer:
      "Your Medigap Open Enrollment Period - the 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you regardless of health history. No medical underwriting, no higher premiums. If you're approaching 65, applying up to 6 months before your Part B start date can lock in your rate early.",
  },
  {
    question: "What is the 3 month rule for Medicare?",
    answer:
      "Your Initial Enrollment Period starts 3 months before the month you turn 65, includes your birthday month, and extends 3 months after. That's a 7-month window total. Signing up during the first 3 months ensures coverage begins on time with no gap.",
  },
  {
    question:
      "Do I need a broker to enroll in Plan N, or can I do it myself?",
    answer:
      "You can apply directly with a carrier if you want. But a licensed broker compares rates across multiple companies, handles the paperwork, and provides ongoing support after enrollment - all at no cost to you. The carrier pays the broker, not you.",
  },
];

export default function QuickestWayToEnrollIntoPlanN() {
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
          Quickest Way to Enroll Into Plan N
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Quickest Way to Enroll Into Plan N: What the Process Actually Looks Like
      </h1>

      <Image
        src="/images/hub_quickest-way-to-enroll-into-plan-n.webp"
        alt="quickest way to enroll into Plan N"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        The quickest way to enroll into Plan N is with a licensed broker who can
        compare carriers and submit your application the same day. Most
        applications take under 15 minutes by phone. I'm Anthony Orner, and I
        handle the entire process - from quoting to submission - so you don't
        have to chase paperwork.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How fast can you realistically get Plan N coverage
        </h2>
        <p className="mb-3">
          Once your application is submitted, most carriers process Medigap
          applications within a few business days. If you're in your Open
          Enrollment Period, there's no medical underwriting - the carrier can't
          deny you or delay for health reasons.
        </p>
        <p>
          Coverage start dates depend on when your Part B kicks in. If Part B is
          already active, some carriers can start coverage as soon as the first
          of the following month.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed issue rights that skip medical underwriting
        </h2>
        <p className="mb-3">
          Your fastest path is during the Medigap Open Enrollment Period: the 6
          months starting the month you're both 65+ and enrolled in Part B. No
          health questions. No denials. Every carrier must accept you at their
          standard rate.
        </p>
        <p>
          Outside that window, federal guaranteed issue rights apply in specific
          situations - losing employer coverage, losing Medicare Advantage
          coverage, your plan leaving your area, or your insurer going bankrupt.
          If any of those apply, you can still get Plan N without underwriting.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Three things that delay Plan N enrollment
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Missing your Part B start date.</strong> You need active Part
            A and Part B before any Medigap plan can begin. If Part B hasn't
            started, your application sits.
          </li>
          <li>
            <strong>Applying outside open enrollment without guaranteed issue.</strong>{" "}
            Carriers can require medical underwriting. Health questions slow
            things down - and can result in a denial.
          </li>
          <li>
            <strong>Incomplete applications.</strong> Wrong Medicare number,
            missing dates, unsigned forms. A broker catches these before
            submission. Going direct, you might not realize the mistake for
            weeks.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why applying early locks in a better rate
        </h2>
        <p className="mb-3">
          My practice is to have clients apply for their Medigap plan up to 6
          months before their Part B start date. This locks in your rate early
          and protects you from premium increases that can hit between when you
          apply and when coverage begins.
        </p>
        <p>The sooner you lock in, the better your rate.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What a broker actually does that speeds this up
        </h2>
        <p className="mb-3">
          I compare Plan N rates across every carrier available in your zip code.
          Plan N benefits are standardized by Medicare - every carrier covers the
          same things. The difference is price and company reputation.
        </p>
        <p>
          I fill out the application, double-check your Medicare number and
          dates, submit it, and follow up until it's approved. After enrollment,
          I'm still your point of contact for any Medicare questions. No extra
          cost to you - carriers pay the broker fee.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Start your Plan N application right now
        </h2>
        <p>
          Have your Medicare card handy - you'll need your Medicare number and
          your Part A/Part B start dates. That's it. One phone call, and we can
          have your application submitted today.
        </p>
      </section>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-lg font-semibold mb-2">
          Ready to get Plan N locked in?
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
          . No obligation, no pressure.
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan N - What It Covers and What It Doesn't
            </Link>
          </li>
          <li>
            <Link
              href="/services/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Plan N - Which One Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-guaranteed-issue"
              className="text-blue-700 hover:underline"
            >
              Guaranteed Issue Rights for Medicare Supplement Plans
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}