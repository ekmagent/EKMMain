import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Enrollment Help for People With Diabetes | Free Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with diabetes in NJ. Learn which plans cover insulin, CGMs, and supplies. Enroll even with pre-existing conditions. Free.",
  openGraph: {
    title:
      "Medicare Enrollment Help for People With Diabetes | Free Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with diabetes in NJ. Learn which plans cover insulin, CGMs, and supplies. Enroll even with pre-existing conditions. Free.",
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
      name: "Medicare Enrollment Help for People With Diabetes",
      item: "https://www.medicareyourself.com/services/medicare-enrollment-help-for-people-with-diabetes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Enrollment Help for People With Diabetes",
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
      "It depends on your medications, devices, and doctors. If you use insulin or a CGM, a Medicare Advantage plan with strong Part D drug coverage and durable medical equipment benefits may save you money. If you want fewer restrictions and broader provider access, Original Medicare with a Medigap supplement (like Plan G) plus a standalone Part D plan is often the better fit. Anthony can compare both options based on your specific prescriptions and needs.",
  },
  {
    question:
      "Does Medicare cover continuous glucose monitors (CGMs) like Dexcom?",
    answer:
      "Yes. Medicare Part B covers CGMs as durable medical equipment for beneficiaries who use insulin. You'll need a prescription from your doctor and may need to meet certain criteria. If you're on a Medicare Advantage plan, CGM coverage depends on the specific plan's formulary and DME benefits. Call us to check your plan's coverage before switching.",
  },
  {
    question:
      "Can I get a Medigap plan if I already have diabetes?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting the month you turn 65 and are enrolled in Part B), insurers cannot deny you or charge more because of diabetes. Outside that window, most carriers in NJ can use medical underwriting, which may mean higher rates or denial. Certain guaranteed issue events also let you enroll without health questions.",
  },
  {
    question: "What resources are available for type 2 diabetes under Medicare?",
    answer:
      "Medicare Part B covers the Medicare Diabetes Prevention Program at no cost if you qualify, including 16 weekly sessions on diet, exercise, and behavior change. Part B also covers diabetes self-management training, glucose monitors, test strips, and therapeutic shoes. Part D covers oral diabetes medications and insulin. Anthony can help you find a plan that covers all of these.",
  },
];

export default function MedicareEnrollmentHelpDiabetes() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Medicare Enrollment Help for People With Diabetes
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Enrollment Help for People With Diabetes
      </h1>

      <Image
        src="/images/medicare-enrollment-help-for-people-with-diabetes.webp"
        alt="Medicare enrollment help for people with diabetes"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare enrollment help for people with diabetes starts with one thing: knowing exactly which plans cover your medications, devices, and supplies before you sign anything. Between insulin costs, CGM coverage denials, and confusing underwriting rules, picking the wrong plan can cost you thousands or leave you fighting appeals.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I work with diabetic clients every week. Here's what you need to know.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How diabetes affects your Medicare Supplement underwriting options
        </h2>
        <p className="text-gray-700 mb-2">
          If you're turning 65 and enrolling in Part B, you have a 6-month Medigap Open Enrollment Period. During this window, no carrier can deny you or charge higher premiums because of diabetes. That's federal law.
        </p>
        <p className="text-gray-700">
          Miss that window, and most Medigap carriers can underwrite you. With diabetes on your record, that often means higher rates or a flat-out denial. Timing matters more than most people realize.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which Medicare plans cover insulin, CGMs, and diabetic supplies
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Part B</strong> covers CGMs (like Dexcom and Libre) as durable medical equipment if you use insulin. It also covers glucose monitors, test strips, lancets, and therapeutic shoes.
          </li>
          <li>
            <strong>Part D</strong> covers insulin and oral diabetes medications. Under the Inflation Reduction Act, insulin copays are capped at $35/month under Part D.
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> plans bundle Part A, B, and usually D. Coverage for CGMs and supplies varies by plan, so check before you enroll.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed issue periods that bypass health questions
        </h2>
        <p className="text-gray-700 mb-2">
          Outside your initial enrollment, federal guaranteed issue rights kick in during specific life events: losing employer coverage, your Medicare Advantage plan leaving your area, or your carrier going bankrupt.
        </p>
        <p className="text-gray-700">
          During these periods, Medigap carriers must accept you regardless of diabetes or any other pre-existing condition. I help clients identify these windows so they don't get locked out.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Preventive benefits Medicare covers at no cost
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Part B covers the Medicare Diabetes Prevention Program at no cost if you qualify. It includes 16 weekly group sessions on realistic diet changes, exercise, and long-term behavior coaching. There's no limit to how many times you can participate.
        </p>
        <p className="text-gray-700">
          Part B also covers diabetes self-management training and medical nutrition therapy with no copay for qualifying beneficiaries.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What to watch out for when choosing a plan
        </h2>
        <p className="text-gray-700 mb-2">
          I hear from people all the time who enrolled in a plan that looked affordable, then found out their CGM wasn't covered or their insulin tier changed mid-year. The frustration is real. Costs pile up fast when your plan doesn't match your actual prescriptions.
        </p>
        <p className="text-gray-700">
          Before you pick anything, check the formulary for your exact medications, verify your endocrinologist is in-network, and confirm DME coverage for any devices you rely on daily.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony helps diabetic clients find affordable coverage
        </h2>
        <p className="text-gray-700 mb-2">
          I pull your prescription list, check which plans cover your exact medications and devices at the lowest cost, and walk you through the enrollment step by step. No charge for my help. Carriers pay me, not you.
        </p>
        <p className="text-gray-700">
          If you're worried about being denied coverage because of your diabetes, call me. There are usually more options than you think.
        </p>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call 855-559-1700 for free Medicare enrollment help.
        </p>
        <p className="mb-4">
          Anthony will review your diabetes medications and find the right plan.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

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
              href="/medicare-guides/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d-prescription-drug-coverage"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}