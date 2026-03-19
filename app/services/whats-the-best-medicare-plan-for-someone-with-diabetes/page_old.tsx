import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "what's the best medicare plan for someone with diabetes | Free Guidance | MedicareYourself",
  description:
    "What's the best Medicare plan for someone with diabetes? Compare Supplement and Advantage coverage for insulin, CGMs, and A1C testing. Free broker guidance.",
  openGraph: {
    title:
      "what's the best medicare plan for someone with diabetes | Free Guidance | MedicareYourself",
    description:
      "What's the best Medicare plan for someone with diabetes? Compare Supplement and Advantage coverage for insulin, CGMs, and A1C testing. Free broker guidance.",
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
      name: "Best Medicare Plan for Someone With Diabetes",
      item: "https://medicareyourself.com/services/whats-the-best-medicare-plan-for-someone-with-diabetes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What's the Best Medicare Plan for Someone With Diabetes? A Broker's Honest Answer",
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
    question: "How much does a Medicare premium increase if you are diabetic?",
    answer:
      "Medicare Part B premiums are not affected by a diabetes diagnosis. Everyone pays the standard $185/month in 2026 regardless of health conditions. Medigap premiums, however, can vary by carrier and rating method. If you enroll during your 6-month Medigap Open Enrollment Period, insurers cannot charge you more due to diabetes. Outside that window, carriers in most states can medically underwrite and may increase premiums or deny coverage.",
  },
  {
    question: "Does Medicare pay for A1C testing for diabetics?",
    answer:
      "Yes. Medicare Part B covers A1C tests for people diagnosed with diabetes. You can get up to two A1C tests per year, or more if your doctor determines it is medically necessary. You pay nothing for the test if your provider accepts Medicare assignment.",
  },
  {
    question:
      "Does Medicare Advantage or Medigap cover insulin and diabetes supplies?",
    answer:
      "Original Medicare Part B covers blood glucose monitors, test strips, lancets, and continuous glucose monitors (CGMs) as durable medical equipment. Insulin administered through a pump is also covered under Part B. Insulin pens and vials used with syringes fall under Part D. Medigap helps pay the cost-sharing on Part B items. Medicare Advantage plans bundle Part D drug coverage and may offer additional benefits, but formularies and copays vary by plan.",
  },
  {
    question: "Is there a cap on insulin costs under Medicare?",
    answer:
      "Yes. The Inflation Reduction Act capped insulin copays at $35 per month for Medicare Part D and Medicare Advantage enrollees. This applies to all covered insulin products regardless of the plan you choose.",
  },
];

export default function BestMedicarePlanDiabetesPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
            Best Medicare Plan for Someone With Diabetes
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          What's the Best Medicare Plan for Someone With Diabetes? A Broker's
          Honest Answer
        </h1>

        <Image
          src="/images/whats-the-best-medicare-plan-for-someone-with-diabetes.webp"
          alt="what's the best medicare plan for someone with diabetes"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          What's the best Medicare plan for someone with diabetes? After years of
          helping diabetic clients in NJ choose coverage, my answer is always the
          same: it depends on the medications you take, the supplies you need,
          and how much financial predictability matters to you.
        </p>
        <p className="text-lg mb-6">
          There's no single "best" plan. But there is a best plan for your
          situation, and I can help you find it at no cost.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Original Medicare covers diabetes supplies and medications
          </h2>
          <p className="mb-2">
            Medicare Part B covers diabetes supplies classified as durable
            medical equipment. That includes blood glucose monitors, test strips,
            lancets, and continuous glucose monitors (CGMs) like the Dexcom or
            FreeStyle Libre. You pay 20% of the Medicare-approved amount after
            your $257 Part B deductible.
          </p>
          <p className="mb-2">
            Part B also covers A1C tests - typically two per year, or more if
            your doctor orders them. Insulin delivered via a pump falls under
            Part B as well.
          </p>
          <p>
            Insulin pens and vials you inject yourself? Those go through Part D.
            That distinction matters when you're comparing plans.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap vs. Advantage: which controls out-of-pocket costs better
          </h2>
          <p className="mb-2">
            A Medigap plan like Plan G covers that 20% Part B cost-sharing on
            your diabetes supplies. You'd pay $257 for the annual deductible and
            then essentially nothing else for Part B services. Monthly premiums
            are higher, but your costs are predictable.
          </p>
          <p className="mb-2">
            Medicare Advantage plans often bundle Part D drug coverage and may
            add extras like dental or vision. But you'll face copays, prior
            authorizations, and network restrictions. For someone managing
            diabetes with multiple specialists, those copays add up fast.
          </p>
          <p>
            If keeping total annual spending predictable is your priority,
            Medigap plus a standalone Part D plan usually wins.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D formulary traps that hit diabetics hardest
          </h2>
          <p className="mb-2">
            Not all Part D plans cover the same insulin brands. Your doctor may
            prescribe Humalog, but your plan's formulary might prefer Novolog -
            or require step therapy before approving either.
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1">
            <li>
              The $35/month insulin cap under the Inflation Reduction Act applies
              to all covered insulin products, but the drug still has to be on
              the formulary.
            </li>
            <li>
              CGM sensors covered under Part B don't go through Part D, so don't
              confuse the two when comparing plans.
            </li>
            <li>
              Some plans place newer diabetes medications like Ozempic or
              Mounjaro on higher tiers with steep copays or prior authorization
              requirements.
            </li>
          </ul>
          <p>
            I always run a client's full medication list through the plan finder
            before recommending anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to pick the right plan based on your specific medications
          </h2>
          <p className="mb-2">
            Bring me your medication list - every drug, every dosage. I'll check
            which Part D plans in your area cover each one at the lowest
            out-of-pocket cost. This takes about 15 minutes and costs you
            nothing.
          </p>
          <p>
            The right Part D plan for a diabetic on Metformin alone looks
            completely different from someone on Lantus, Jardiance, and a CGM.
            Cookie-cutter advice doesn't work here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why your enrollment window matters more than you think
          </h2>
          <p className="mb-2">
            If you're turning 65 and have diabetes, your 6-month Medigap Open
            Enrollment Period is critical. During this window, no carrier can
            deny you or charge higher premiums because of your diabetes. Miss it,
            and most states (including NJ) allow medical underwriting that could
            price you out of Medigap entirely.
          </p>
          <p>
            For Medicare Advantage and Part D changes, Open Enrollment runs
            October 15 through December 7 each year.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            The bottom line for diabetics on Medicare
          </h2>
          <p className="mb-2">
            There's no universal "best" diabetes plan. But the right combination
            of Original Medicare + Medigap + Part D (or a well-chosen Advantage
            plan) can keep your costs low and your supplies covered.
          </p>
          <p>
            Call me with your medication list. I'll compare every option
            available in your ZIP code and show you the numbers. No pressure, no
            cost.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready to find the right Medicare plan for your diabetes care?
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline font-bold">
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm">
            Anthony Orner, Licensed Medicare Broker - No fees, no obligation.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-d"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D: How Prescription Drug Coverage Works
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: Why Timing Matters
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}