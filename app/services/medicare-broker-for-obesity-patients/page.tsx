import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for obesity patients | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for obesity patients — Anthony Orner finds NJ plans covering behavioral therapy, bariatric surgery, and GLP-1 drugs. Free plan comparison.",
  openGraph: {
    title:
      "Medicare broker for obesity patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for obesity patients — Anthony Orner finds NJ plans covering behavioral therapy, bariatric surgery, and GLP-1 drugs. Free plan comparison.",
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
      name: "Medicare Broker for Obesity Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-obesity-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Obesity Patients — Coverage for Counseling, Surgery, and Weight-Loss Medications",
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
    question: "Does Medicare pay for obesity care?",
    answer:
      "Yes. Original Medicare covers intensive behavioral therapy (IBT) for obesity at no cost if your BMI is 30 or higher and your primary care provider delivers the counseling. Medicare also covers bariatric surgery for qualifying beneficiaries. Part D coverage for weight-loss medications like GLP-1s is evolving — call to check current plan formularies.",
  },
  {
    question:
      "What does your BMI have to be to get Zepbound covered by insurance?",
    answer:
      "Most insurance criteria for Zepbound require a BMI of 30 or higher, or 27+ with at least one weight-related condition like type 2 diabetes or sleep apnea. Medicare Part D formulary coverage and requirements vary by plan and change annually.",
  },
  {
    question: "What are the requirements for Medicare to cover Wegovy?",
    answer:
      "Medicare Part D plans that include Wegovy on their formulary typically require a BMI of 27+ with a weight-related comorbidity, or a BMI of 30+. Prior authorization and step therapy may apply. Formulary status changes each plan year, so check your specific plan or call us for a current comparison.",
  },
  {
    question:
      "Can a Medicare broker help me find plans that cover GLP-1 weight-loss drugs?",
    answer:
      "Yes. A licensed Medicare broker like Anthony Orner can compare Part D and Medicare Advantage plans in your area to find which ones include GLP-1 medications on their formulary and what your out-of-pocket cost would be. This service is free to you.",
  },
];

export default function MedicareBrokerForObesityPatients() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Broker for Obesity Patients
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Obesity Patients — Coverage for Counseling,
          Surgery, and Weight-Loss Medications
        </h1>
        <Image
          src="/images/medicare-broker-for-obesity-patients.webp"
          alt="Medicare broker for obesity patients"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for obesity patients can save you hours of frustration
        sorting through plans that may or may not cover the treatment you
        actually need. I'm Anthony Orner, a licensed Medicare broker in New
        Jersey, and I help people find plans that support real weight-loss care -
        not just vague wellness promises.
      </p>
      <p className="mb-6">
        Over 40% of adults 60 and older live with obesity. The coverage
        questions are specific and the stakes feel personal. Let me walk you
        through what Medicare actually covers, where the gaps are, and how I can
        help.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare's intensive behavioral therapy benefit for obesity
        </h2>
        <p className="mb-3">
          Original Medicare (Part B) covers intensive behavioral therapy for
          obesity at no cost to you - no copay, no deductible. The catch: your
          BMI must be 30 or higher, and the counseling must come from your
          primary care provider, not a separate nutritionist or gym program.
        </p>
        <p>
          You can get up to 22 face-to-face visits over 12 months. Most people
          don't know this benefit exists. Even fewer use it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Bariatric surgery coverage: BMI requirements and prior authorization
        </h2>
        <p className="mb-3">
          Medicare covers bariatric surgery (gastric bypass, sleeve gastrectomy,
          and other approved procedures) if you meet specific criteria:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>BMI of 35 or higher with at least one obesity-related condition</li>
          <li>
            Surgery performed at a Medicare-certified bariatric surgery center
          </li>
          <li>Prior authorization is typically required</li>
        </ul>
        <p>
          The approval process can take weeks. Having someone who knows the
          documentation requirements ahead of time makes a real difference.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Will Medicare Part D cover Wegovy, Zepbound, or other GLP-1s?
        </h2>
        <p className="mb-3">
          This is the question I hear most. Historically, Medicare was
          prohibited from covering drugs prescribed solely for weight loss. That
          rule is changing. Recent policy shifts and manufacturer pricing
          agreements are opening the door to Part D coverage for GLP-1
          medications like Wegovy and Zepbound.
        </p>
        <p className="mb-3">
          Right now, some Part D plans cover GLP-1s when prescribed for diabetes
          or, in some cases, sleep apnea or cardiovascular risk. Coverage for
          obesity as a standalone diagnosis is expanding but not universal.
          Formularies vary by plan and change every year.
        </p>
        <p>
          Many beneficiaries have gotten coverage through formulary exception
          requests tied to comorbid conditions. It works, but it's a fight you
          shouldn't have to wage alone - and approvals often need to be renewed
          annually.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why coverage feels like a battle (and what you can do about it)
        </h2>
        <p className="mb-3">
          If you've spent years managing your weight - trying every approach,
          dealing with the physical toll and the emotional weight of it - and
          then been told a medication isn't covered, that frustration is
          legitimate. The system often requires you to prove you're "sick
          enough" before it will help you get better.
        </p>
        <p>
          I can't fix that system overnight. But I can find you the plan with
          the best chance of covering what your doctor recommends - and help
          with the paperwork when prior auth is needed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Compare plans that support your weight-loss treatment
        </h2>
        <p className="mb-3">
          Not all Medicare Advantage or Part D plans treat obesity coverage the
          same way. Some include supplemental benefits like nutrition counseling
          or fitness programs. Others have broader GLP-1 formulary access.
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>Part D formulary comparison for specific medications</li>
          <li>
            Medicare Advantage plans with obesity-related supplemental benefits
          </li>
          <li>Out-of-pocket cost estimates based on your prescriptions</li>
          <li>Prior authorization support and exception requests</li>
        </ul>
        <p>
          I compare what's available in your area so you're not guessing.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          How a free plan comparison works
        </h2>
        <p className="mb-3">
          You call or fill out a form. We talk about your doctors, your
          medications, and what treatments you're considering. I run the
          comparison across every plan available in your zip code. You get a
          clear recommendation - no cost to you, no obligation.
        </p>
        <p>
          Insurance companies pay my commission. You pay nothing extra. The plan
          costs the same whether you enroll through me or on your own.
        </p>
      </section>

      <div className="bg-blue-600 rounded-lg p-8 text-white text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a licensed Medicare broker who understands obesity coverage.
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
          .
        </p>
        <p className="text-sm opacity-90">
          No cost. No pressure. Just honest answers.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-d"
              className="text-blue-600 hover:underline"
            >
              Medicare Part D Prescription Drug Plans
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-for-diabetics"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker for Diabetics
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}