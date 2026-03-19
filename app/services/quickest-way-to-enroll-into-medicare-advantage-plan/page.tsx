import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "quickest way to enroll into medicare advantage plan | Free Help | MedicareYourself",
  description:
    "Quickest way to enroll into a Medicare Advantage plan? A licensed broker can complete your application in one call. Anthony Orner makes it easy. Free help.",
  openGraph: {
    title:
      "quickest way to enroll into medicare advantage plan | Free Help | MedicareYourself",
    description:
      "Quickest way to enroll into a Medicare Advantage plan? A licensed broker can complete your application in one call. Anthony Orner makes it easy. Free help.",
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
      name: "Quickest Way to Enroll Into Medicare Advantage Plan",
      item: "https://medicareyourself.com/services/quickest-way-to-enroll-into-medicare-advantage-plan",
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
    question: "How long does it take to enroll in a Medicare Advantage plan?",
    answer:
      "The actual enrollment application takes about 10 to 15 minutes over the phone with a licensed broker. Coverage start dates depend on which enrollment period you're using, but the application itself is fast.",
  },
  {
    question: "Can I enroll myself in a Medicare Advantage plan?",
    answer:
      "Yes. You can enroll online through Medicare.gov, by calling 1-800-MEDICARE, or by contacting a plan directly. But working with a licensed broker is often faster because they handle the paperwork and confirm your eligibility on the spot, at no cost to you.",
  },
  {
    question: "What do I need to enroll in a Medicare Advantage plan?",
    answer:
      "You'll need your Medicare number (from your red, white, and blue card), your Part A and Part B start dates, your current address, and a list of your doctors and prescriptions. That's it.",
  },
  {
    question:
      "Do I have to wait until open enrollment to join a Medicare Advantage plan?",
    answer:
      "Not always. If you're new to Medicare, you can enroll during your Initial Enrollment Period. Special Enrollment Periods also apply if you're losing employer coverage, moving out of your plan's service area, or qualifying for other life changes.",
  },
];

export default function QuickestWayToEnrollMedicareAdvantagePlan() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
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
          Quickest Way to Enroll Into Medicare Advantage Plan
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Quickest Way to Enroll Into a Medicare Advantage Plan Without the
        Runaround
      </h1>

      <Image
        src="/images/hub_quickest-way-to-enroll-into-medicare-advantage-plan.webp"
        alt="quickest way to enroll into medicare advantage plan"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        The quickest way to enroll into a Medicare Advantage plan is a single
        phone call with a licensed broker. No website hopping. No hold music
        with Medicare. I can complete your application in about 10 to 15 minutes
        and confirm your enrollment before we hang up.
      </p>
      <p className="text-lg mb-6">
        Most people don't realize how fast this can go when someone handles it
        for you.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          When you can enroll and how long it takes
        </h2>
        <p className="mb-3">
          You need both Medicare Part A and Part B before you can join any
          Medicare Advantage plan. That's the baseline. Once you have both, the
          enrollment itself is the easy part.
        </p>
        <p>
          The application takes 10 to 15 minutes by phone. Your coverage start
          date depends on which enrollment period you're using, but you'll walk
          away knowing exactly when your plan kicks in.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          AEP, OEP, and SEP: which enrollment period fits your timeline
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Initial Enrollment Period (IEP):</strong> Starts 3 months
            before the month you turn 65 and ends 3 months after. This is
            your first shot. Don't miss it.
          </li>
          <li>
            <strong>Annual Enrollment Period (AEP):</strong> October 15 through
            December 7 every year. You can join, switch, or drop a plan.
            Coverage starts January 1.
          </li>
          <li>
            <strong>Open Enrollment Period (OEP):</strong> January 1 through
            March 31. If you already have a Medicare Advantage plan, you can
            switch to a different one or go back to Original Medicare.
          </li>
          <li>
            <strong>Special Enrollment Period (SEP):</strong> Triggered by life
            changes like losing employer coverage, moving, or qualifying for
            Medicaid. These open up enrollment outside normal windows.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What to have ready so enrollment takes minutes, not weeks
        </h2>
        <p className="mb-3">Grab these before you call:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your red, white, and blue Medicare card (for your Medicare number, Part A and Part B start dates)</li>
          <li>Your current address (plans are tied to your zip code)</li>
          <li>A list of your current medications and dosages</li>
          <li>Names of doctors you want to keep seeing</li>
        </ul>
        <p className="mt-3">
          That's the full checklist. People spend weeks thinking they need more.
          You don't.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why doing this alone takes longer than it should
        </h2>
        <p className="mb-3">
          You can enroll yourself through Medicare.gov or by calling
          1-800-MEDICARE. Plenty of people do. But those routes involve hold
          times, portal glitches, and zero guidance on which plan actually fits
          your doctors and drugs.
        </p>
        <p>
          A broker does the same enrollment, confirms your doctors are
          in-network, checks your prescriptions against the formulary, and files
          everything correctly. No cost to you. The plan pays me, not you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common mistakes that slow people down
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Waiting until after their IEP closes, then scrambling for a Special
            Enrollment Period they may not qualify for
          </li>
          <li>
            Signing up for Part A but delaying Part B, which blocks Medicare
            Advantage enrollment entirely
          </li>
          <li>
            Choosing a $0-premium plan without checking if their specialists are
            in-network
          </li>
        </ul>
        <p className="mt-3">
          Every one of these adds weeks or months to the process. A 15-minute
          call prevents all of them.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Enroll in a Medicare Advantage plan with Anthony Orner today
        </h2>
        <p className="mb-3">
          I'm Anthony Orner, a licensed Medicare broker. I help people enroll in
          the right Medicare Advantage plan, usually in a single phone call. No
          pressure, no upsell, no fee.
        </p>
        <p>
          If you've got your Medicare card and 15 minutes, we can get this done
          today.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to enroll? Call now: 855-559-1700
        </p>
        <p className="mb-4">
          Or get started online with a free, no-obligation quote.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <div className="mt-12">
        <FAQSection faqs={faqs} />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
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
              href="/medicare-guides/medicare-enrollment-periods"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Periods Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans We Offer
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/what-to-do-when-turning-65"
              className="text-blue-600 hover:underline"
            >
              What to Do When You're Turning 65
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}