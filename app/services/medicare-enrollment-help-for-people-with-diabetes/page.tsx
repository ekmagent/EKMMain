import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Enrollment Help for People With Diabetes | Find Affordable Coverage | MedicareYourself",
  description:
    "Medicare enrollment help for people with diabetes in NJ. Learn which plans cover insulin and supplies, and how to enroll even with pre-existing conditions. Free help.",
  openGraph: {
    title:
      "Medicare Enrollment Help for People With Diabetes | Find Affordable Coverage | MedicareYourself",
    description:
      "Medicare enrollment help for people with diabetes in NJ. Learn which plans cover insulin and supplies, and how to enroll even with pre-existing conditions. Free help.",
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
      item: "https://www.medicareyourself.com/hub",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Enrollment Help for People With Diabetes",
      item: "https://www.medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Enrollment Help for People With Diabetes",
  description:
    "Medicare enrollment help for people with diabetes in NJ. Learn which plans cover insulin and supplies, and how to enroll even with pre-existing conditions.",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "What's the best Medicare plan for someone with diabetes?",
    answer:
      "For most people with diabetes, a Medicare Supplement Plan G paired with a Part D plan that covers your specific medications offers the strongest protection. Plan G covers almost everything Original Medicare doesn't, including the 20% coinsurance on doctor visits, lab work, and diabetic supplies. Your only out-of-pocket cost is the $257 annual Part B deductible in 2026.",
  },
  {
    question:
      "What resources are available for type 2 diabetes through Medicare?",
    answer:
      "Medicare Part B covers the Medicare Diabetes Prevention Program at no cost if you qualify. This includes 16 weekly group sessions focused on diet, exercise, and lasting behavior changes. Part B also covers diabetes self-management training, glucose monitors, test strips, and therapeutic shoes for people with diabetic foot problems.",
  },
  {
    question:
      "Can I get a Medigap plan in New Jersey if I already have diabetes?",
    answer:
      "Yes. New Jersey offers year-round guaranteed issue rights for Medicare Supplement plans. Insurance companies cannot deny you coverage or charge higher premiums because of diabetes or any other pre-existing condition. This is a significant advantage that most other states do not offer.",
  },
  {
    question: "Does Medicare cover continuous glucose monitors (CGMs)?",
    answer:
      "Yes. Medicare Part B covers CGMs like the Dexterity G7 and Libre systems for beneficiaries who use insulin. You'll typically pay 20% of the Medicare-approved amount after meeting your $257 Part B deductible in 2026, unless you have a Medigap plan that covers that coinsurance.",
  },
];

export default function MedicareEnrollmentHelpDiabetes() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-blue-600">
            Medicare Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">
            Medicare Enrollment Help for People With Diabetes
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Medicare Enrollment Help for People With Diabetes
        </h1>

        <Image
          src="/images/hub_medicare-enrollment-help-for-people-with-diabetes.webp"
          alt="Medicare enrollment help for people with diabetes"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          If you need Medicare enrollment help for people with diabetes, you are
          not alone. Diabetes is one of the most common conditions I work with as
          a licensed broker in New Jersey, and your coverage choices directly
          affect what you pay for insulin, supplies, and doctor visits every
          month.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The good news: you have solid options. Let me walk you through them.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How diabetes affects your Medicare Supplement underwriting options
          </h2>
          <p className="text-gray-700 mb-3">
            In most states, insurance companies can reject your Medigap
            application or charge more if you have diabetes. That scares a lot of
            people away from even trying.
          </p>
          <p className="text-gray-700">
            New Jersey is different. NJ has year-round guaranteed issue for all
            Medicare Supplement plans. That means no health questions, no
            denials, and no diabetes surcharges. You get the same rate as someone
            with no health issues. This is a real advantage that most people
            don't know about.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Which Medicare plans cover insulin, CGMs, and diabetic supplies
          </h2>
          <p className="text-gray-700 mb-3">
            Medicare Part B covers durable medical equipment related to diabetes.
            That includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li>Blood glucose monitors and test strips</li>
            <li>
              Continuous glucose monitors (CGMs) for insulin-dependent
              beneficiaries
            </li>
            <li>Insulin pumps and the insulin they use</li>
            <li>Therapeutic shoes and inserts for diabetic foot conditions</li>
            <li>Diabetes self-management training</li>
          </ul>
          <p className="text-gray-700">
            You pay 20% of the Medicare-approved amount after meeting your $257
            Part B deductible in 2026. A Medigap Plan G picks up that 20%, so
            your out-of-pocket cost drops to zero after the deductible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How Part D handles your insulin costs
          </h2>
          <p className="text-gray-700 mb-3">
            Insulin pens, vials, and related supplies dispensed at a pharmacy
            fall under Part D. Since 2023, insulin costs are capped at $35 per
            month per covered insulin product under Part D plans. That cap
            applies even in the coverage gap.
          </p>
          <p className="text-gray-700">
            Not every Part D plan covers the exact same insulin brands on its
            formulary. I check your specific medications against every available
            plan to find the lowest total annual cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Guaranteed issue periods that bypass health questions
          </h2>
          <p className="text-gray-700 mb-3">
            Outside of New Jersey, federal law still provides guaranteed issue
            rights in specific situations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-3 space-y-1">
            <li>
              Your first 6 months on Part B (your Medigap Open Enrollment
              Period)
            </li>
            <li>
              Losing employer or union group coverage after turning 65
            </li>
            <li>Your Medicare Advantage plan leaves your area</li>
            <li>
              A Medigap company goes bankrupt or misleads you
            </li>
          </ul>
          <p className="text-gray-700">
            During these windows, no insurer can turn you down for diabetes or
            any other condition. In NJ, you have this protection all year long.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Medicare Diabetes Prevention Program
          </h2>
          <p className="text-gray-700 mb-3">
            Medicare Part B covers the Medicare Diabetes Prevention Program at no
            cost to you if you meet the eligibility criteria. The program
            includes 16 weekly core sessions in a group setting over six months,
            focused on diet, exercise, and realistic behavior changes.
          </p>
          <p className="text-gray-700">
            You qualify if you have prediabetes, are overweight, and have no
            prior diagnosis of type 1 or type 2 diabetes. There is no limit on
            how many times you can participate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How Anthony helps diabetic clients find affordable coverage
          </h2>
          <p className="text-gray-700 mb-3">
            I am Anthony Orner, a licensed Medicare broker serving New Jersey.
            When a client with diabetes calls me, I start by listing every
            medication and supply they use. Then I compare Medigap plans and Part
            D options side by side.
          </p>
          <p className="text-gray-700">
            My help costs you nothing. Brokers are paid by insurance companies,
            not clients. You get the same plan at the same price whether you call
            the carrier directly or go through me. The difference is I do the
            homework for you. Call 855-559-1700 and let's get it sorted out.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to find the right Medicare plan for your diabetes needs?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-d-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Best Part D Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-guaranteed-issue-nj"
                className="text-blue-600 hover:underline"
              >
                Medigap Guaranteed Issue Rights in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}