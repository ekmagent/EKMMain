import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with diabetes | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for people with diabetes — Anthony Orner finds NJ plans covering insulin, CGMs, and endocrinology visits. Free comparison, no obligation.",
  openGraph: {
    title:
      "medicare broker for people with diabetes | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for people with diabetes — Anthony Orner finds NJ plans covering insulin, CGMs, and endocrinology visits. Free comparison, no obligation.",
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
      name: "Medicare Broker for People with Diabetes",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-diabetes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Diabetes: Plans That Cover What You Actually Need",
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
    question: "Does Medicare cover insulin for people with diabetes?",
    answer:
      "Yes. Under Part D, insulin is covered by prescription drug plans, and many plans cap insulin copays at $35 per month thanks to federal law. Some Medicare Advantage plans also include insulin coverage through their built-in Part D benefit. Formularies vary by plan, so you should compare options each year.",
  },
  {
    question:
      "Can I be denied a Medicare Supplement plan because of diabetes?",
    answer:
      "During your Medigap Open Enrollment Period (the 6 months starting when you turn 65 and have Part B), insurance companies cannot deny you or charge more due to diabetes. Outside that window, medical underwriting applies and a pre-existing condition like diabetes could affect your approval or pricing.",
  },
  {
    question: "Does Medicare cover continuous glucose monitors (CGMs)?",
    answer:
      "Medicare Part B covers CGMs classified as durable medical equipment for beneficiaries with diabetes who meet certain criteria, including those using insulin. You pay 20% of the Medicare-approved amount after the $257 Part B deductible in 2026.",
  },
  {
    question: "Why should I use a broker instead of enrolling on my own?",
    answer:
      "A broker compares plans across multiple carriers at no cost to you. For people with diabetes, this means matching your specific medications, supplies, and specialist needs to plans with the lowest total out-of-pocket cost - not just the lowest premium.",
  },
];

export default function MedicareBrokerDiabetesPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-900">
            Medicare Broker for People with Diabetes
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Medicare Broker for People with Diabetes: Plans That Cover What You
          Actually Need
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-diabetes.webp"
          alt="medicare broker for people with diabetes"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-800 mb-2">
          A Medicare broker for people with diabetes does one thing most online
          enrollment tools cannot: match your exact medications, supplies, and
          doctor visits to the plan with the lowest real cost. I'm Anthony
          Orner, a licensed Medicare broker in New Jersey, and I work with
          diabetic clients every week who are overpaying because they picked a
          plan based on premium alone.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          My service is free. I get paid by the carriers, not by you. Let me
          show you how the right plan saves real money.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How diabetes affects your Medigap and Advantage options
          </h2>
          <p className="text-gray-800 mb-2">
            Diabetes is one of the most common pre-existing conditions among
            Medicare beneficiaries. Original Medicare (Parts A and B) covers
            diabetes screenings, glucose monitors, and related lab work. But
            your out-of-pocket costs depend heavily on whether you add a
            Medigap plan, choose Medicare Advantage, or rely on Original
            Medicare alone.
          </p>
          <p className="text-gray-800">
            With Original Medicare, you pay 20% of Part B-approved amounts
            after meeting the $257 annual deductible in 2026. That 20% adds up
            fast when you're seeing an endocrinologist regularly and ordering
            CGM supplies. A Medigap plan like Plan G covers that 20%. A
            Medicare Advantage plan may offer $0 copays for some services but
            restrict your network.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Insulin, CGMs, and Part D: what to look for in a plan
          </h2>
          <p className="text-gray-800 mb-2">
            Federal law now caps insulin copays at $35 per month under Part D
            plans. That's a big deal. But not every plan covers your specific
            insulin brand the same way, and formulary tiers still matter for
            other diabetes medications like metformin or GLP-1 drugs.
          </p>
          <ul className="list-disc ml-6 text-gray-800 space-y-1">
            <li>
              CGMs (like Dexcom or Libre) are covered under Part B as durable
              medical equipment for qualifying beneficiaries
            </li>
            <li>
              Test strips and lancets are also covered under Part B with a
              doctor's order
            </li>
            <li>
              Diabetes self-management training is a covered Part B benefit
            </li>
            <li>
              Part D formularies change every year, so a plan that worked last
              year might cost more this year
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why guaranteed issue timing matters with pre-existing conditions
          </h2>
          <p className="text-gray-800 mb-2">
            Your Medigap Open Enrollment Period lasts 6 months. It starts the
            month you turn 65 and are enrolled in Part B. During this window,
            no carrier can deny you or charge higher premiums because of
            diabetes. Period.
          </p>
          <p className="text-gray-800">
            Miss that window and you face medical underwriting. Diabetes can
            mean higher rates or outright denial for Medigap coverage. Federal
            guaranteed issue rights also apply in specific situations, like
            losing employer coverage or a plan leaving your area. Call me and
            I'll tell you exactly where you stand.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Let a broker match your medications to the lowest-cost plan
          </h2>
          <p className="text-gray-800 mb-2">
            I pull up your complete medication list and run it through every
            Part D plan available in your ZIP code. This isn't guessing. It's a
            side-by-side comparison of total annual drug costs: premiums,
            copays, deductibles, and coverage gap costs combined.
          </p>
          <p className="text-gray-800">
            For someone on insulin plus two or three other medications, the
            difference between the cheapest premium and the cheapest total cost
            can be $1,000 or more per year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Endocrinologist and specialist access matters
          </h2>
          <p className="text-gray-800 mb-2">
            If you see an endocrinologist, podiatrist, or ophthalmologist
            regularly, your plan's network matters. Original Medicare with a
            Medigap supplement lets you see any doctor who accepts Medicare
            nationwide. Medicare Advantage plans use HMO or PPO networks, and
            going out-of-network can cost significantly more.
          </p>
          <p className="text-gray-800">
            I check that your current doctors are in-network before
            recommending any Advantage plan. No surprises.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Annual plan reviews catch problems before they cost you
          </h2>
          <p className="text-gray-800 mb-2">
            Part D formularies change every October. A drug covered at Tier 2
            this year might move to Tier 3 next year. Medicare Advantage
            networks can drop providers. I review your plan every fall during
            the Open Enrollment Period (October 15 through December 7) and
            recommend changes only when they save you money.
          </p>
          <p className="text-gray-800">
            You don't have to call me. I'll reach out to you. That's how this
            works.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Ready to find the right Medicare plan for your diabetes needs?
          </p>
          <p className="text-blue-800 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="font-bold underline text-blue-900"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-bold underline text-blue-900"
            >
              Get a Free Quote
            </Link>{" "}
            online. No obligation, no pressure.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/part-d-prescription-drug-plans"
                className="text-blue-700 hover:underline"
              >
                Part D Prescription Drug Plans: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medigap Plan G in New Jersey: Costs and Coverage
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
                href="/services/medicare-broker-nj"
                className="text-blue-700 hover:underline"
              >
                Find a Medicare Broker in New Jersey
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}