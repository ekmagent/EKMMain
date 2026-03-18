import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in egg harbor township new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare insurance agents in Egg Harbor Township, New Jersey compare every top carrier. Anthony Orner offers free, unbiased broker help. Get your quote today.",
  openGraph: {
    title:
      "medicare insurance agents in egg harbor township new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Egg Harbor Township, New Jersey compare every top carrier. Anthony Orner offers free, unbiased broker help. Get your quote today.",
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
      name: "Medicare Insurance Agents in Egg Harbor Township, New Jersey",
      item: "https://www.medicareyourself.com/services/medicare-insurance-agents-in-egg-harbor-township-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Egg Harbor Township, New Jersey — Independent Broker Comparisons",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best Medicare plan for everyone in New Jersey. The right choice depends on your doctors, prescriptions, and budget. An independent broker compares Medigap plans like Plan G and Plan N alongside Medicare Advantage options so you can see which one actually costs less for your situation.",
  },
  {
    question: "Do I need an insurance agent to get Medicare?",
    answer:
      "No, you can enroll in Original Medicare directly through Social Security. However, a licensed Medicare broker helps you pick supplemental coverage - Medigap or Medicare Advantage - and compares carriers at no extra cost to you. The carriers pay the broker, not you.",
  },
  {
    question: "How do I choose a Medicare insurance agent?",
    answer:
      "Look for an independent broker, not a captive agent who sells only one company's plans. Ask if they are licensed in your state, how many carriers they represent, and whether they provide a written side-by-side rate comparison. If they push one plan without showing alternatives, find someone else.",
  },
  {
    question:
      "When is the best time to enroll in a Medigap plan in Egg Harbor Township?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers must accept you at standard rates with no health questions. Anthony's practice is to have clients apply up to 6 months before their Part B start date to lock in the best rate early.",
  },
];

export default function MedicareAgentsEggHarborTownship() {
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
          Medicare Insurance Agents in Egg Harbor Township, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Egg Harbor Township, New Jersey -
        Independent Broker Comparisons
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-egg-harbor-township-new-jersey.webp"
        alt="Medicare insurance agents in Egg Harbor Township New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Egg Harbor Township, New Jersey can make the
        difference between overpaying hundreds a year and finding the right plan
        at the right price. I'm Anthony Orner, a licensed independent Medicare
        broker who works with residents across Atlantic County. My job is to
        compare carriers side by side so you don't have to call each one
        yourself.
      </p>
      <p className="text-lg mb-6">
        There's no fee for my help. Carriers pay me, not you.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker shops Atlantic County carriers for you
        </h2>
        <p className="mb-3">
          A captive agent represents one insurance company. I represent you. As
          an independent broker, I have contracts with every major Medigap and
          Medicare Advantage carrier selling plans in the 08234 area.
        </p>
        <p>
          That means I pull real quotes from multiple companies and put them in a
          single spreadsheet you can read in two minutes. Same benefits, different
          prices. You pick the one that fits your budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plan G, Plan N, and Advantage options in Egg Harbor Township
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Plan G</strong> covers everything Original Medicare doesn't
            except the annual Part B deductible ($257 in 2026). It's the most
            popular Medigap plan in New Jersey.
          </li>
          <li>
            <strong>Plan N</strong> has lower premiums but adds small copays -
            up to $20 at the doctor and up to $50 at the ER if you aren't
            admitted.
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> bundles hospital,
            medical, and often drug coverage into one plan. Some include dental
            and vision. Network restrictions apply.
          </li>
        </ul>
        <p className="mt-3">
          Which is cheaper over a full year? That depends on how often you see
          doctors. I run the numbers for both paths.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          New Jersey guaranteed-issue rights that protect your switch
        </h2>
        <p className="mb-3">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and have Part B. During this window, no carrier can deny
          you or charge more because of health conditions. Miss it and you may
          face medical underwriting.
        </p>
        <p>
          Federal guaranteed-issue rights also kick in if you lose employer
          coverage, your Medicare Advantage plan leaves your area, or your
          carrier goes bankrupt. I help clients time these windows correctly so
          they don't lose protections.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why locking in your rate early matters
        </h2>
        <p className="mb-3">
          My standard practice is to have clients apply for their Medigap plan
          up to 6 months before their Part B start date. This locks in today's
          rate. Premiums can increase between the time you apply and your
          coverage begins - applying early protects you from that gap.
        </p>
        <p>
          The sooner you lock in, the better your rate. Don't wait until the
          last month of your open enrollment.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What working with me actually looks like
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>You call or fill out a form. Takes about 5 minutes.</li>
          <li>
            I pull quotes from every carrier in Atlantic County and build your
            comparison sheet.
          </li>
          <li>
            We review it together by phone or video. I answer every question.
          </li>
          <li>
            You choose a plan. I handle the application. No charge to you, ever.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request a free side-by-side rate comparison
        </h2>
        <p>
          Whether you're turning 65, retiring from AtlantiCare or another local
          employer, or just want to see if a better rate exists, I'll build your
          comparison in 24 hours. Call me at{" "}
          <a href="tel:8555591700" className="text-blue-600 font-semibold">
            855-559-1700
          </a>{" "}
          or request your quote below.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Get Your Free Medicare Quote Today
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or click below to request your personalized rate comparison.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/medicare-guides/medicare-plan-g-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey - Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-plan-n-vs-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan N vs. Plan G - Which Saves More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period - What You Need to Know
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}