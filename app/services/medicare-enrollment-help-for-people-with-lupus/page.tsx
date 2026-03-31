import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare enrollment help for people with lupus | Free NJ Guidance | MedicareYourself",
  description:
    "Medicare enrollment help for people with lupus. Learn disability-based eligibility, drug coverage, and NJ plan options. Anthony Orner offers free guidance.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus" },
  openGraph: {
    title:
      "medicare enrollment help for people with lupus | Free NJ Guidance | MedicareYourself",
    description:
      "Medicare enrollment help for people with lupus. Learn disability-based eligibility, drug coverage, and NJ plan options. Anthony Orner offers free guidance.",
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
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Enrollment Help for People With Lupus",
      item: "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Enrollment Help for People Living With Lupus",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-enrollment-help-for-people-with-lupus",
};

const faqs = [
  {
    question: "Does lupus qualify you for Medicare before age 65?",
    answer:
      "Yes. If lupus prevents you from working and you receive Social Security Disability Insurance (SSDI), you become eligible for Medicare after a 24-month qualifying period. Some lupus patients with end-stage renal disease (ESRD) caused by lupus nephritis may qualify sooner.",
  },
  {
    question: "What support resources exist for lupus patients on Medicare?",
    answer:
      "The Lupus Foundation of America offers financial assistance resources and patient navigators. Many drug manufacturers run copay assistance or patient access programs for biologics like Benlysta and Saphnelo. A licensed broker can also help you find plans that minimize your out-of-pocket costs.",
  },
  {
    question:
      "Which Medicare plan type is better for lupus: Advantage or Medigap?",
    answer:
      "It depends on your treatment needs. Medicare Advantage plans bundle coverage and often include specialist copays, but may restrict your provider network. Original Medicare with a Medigap supplement gives you broader access to rheumatologists and infusion centers, which matters when you need consistent specialty care.",
  },
  {
    question: "Can I get help enrolling in Medicare if I have lupus in NJ?",
    answer:
      "Absolutely. Anthony Orner is a licensed Medicare broker in New Jersey who provides free, personalized enrollment guidance. Call 855-559-1700 to discuss your medications, specialists, and coverage options at no cost.",
  },
];

export default function MedicareEnrollmentHelpLupus() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Enrollment Help for People With Lupus
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Enrollment Help for People Living With Lupus
        </h1>

        <Image
          src="/images/medicare-enrollment-help-for-people-with-lupus_vector.webp"
          alt="medicare enrollment help for people with lupus"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare enrollment help for people with lupus starts with one truth: the system wasn't built for someone managing unpredictable flares, expensive biologics, and a rotating team of specialists. You're already fighting your body. You shouldn't have to fight your insurance too.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey. I help lupus patients find plans that actually cover what they need. No cost, no obligation.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How lupus qualifies you for Medicare before age 65
          </h2>
          <p className="mb-2">
            Systemic lupus (SLE) can qualify you for Social Security Disability Insurance if it prevents substantial work activity. After 24 months of receiving SSDI, you automatically enroll in Medicare Part A and Part B.
          </p>
          <p>
            If lupus has caused kidney failure (lupus nephritis leading to ESRD), you may qualify for Medicare even sooner. Either way, the clock and the paperwork matter. Missing a window can mean gaps in coverage right when you need it most.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Which Medicare plans best cover lupus medications and specialists
          </h2>
          <p className="mb-2">
            Lupus treatment often involves high-cost drugs: hydroxychloroquine, mycophenolate, Benlysta, Saphnelo. Part D covers oral and self-injected medications, but formularies vary wildly between plans. One plan's $40 copay is another plan's $1,500 surprise.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B covers infusions administered in a doctor's office or infusion center (like Benlysta IV or Saphnelo).</li>
            <li>Part D covers oral meds and self-administered injectables. The $2,100 out-of-pocket cap (2026) on Part D helps, but you still need the right formulary.</li>
            <li>Medigap plans cover Part B cost-sharing, which reduces your exposure on infusion costs.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why provider networks matter when you have lupus
          </h2>
          <p className="mb-2">
            Finding a rheumatologist who takes your insurance and actually listens is hard enough. Many lupus patients also see dermatologists, nephrologists, and hematologists. Losing access to an established doctor because of a network change can set your care back months.
          </p>
          <p>
            Original Medicare with a supplement lets you see any provider who accepts Medicare. Advantage plans may cost less monthly but can restrict your network in ways that hurt complex-care patients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Navigating underwriting with a lupus diagnosis in NJ
          </h2>
          <p className="mb-2">
            If you're under 65 and on Medicare through disability, Medigap underwriting in New Jersey follows specific state rules. NJ does offer certain protections for disabled beneficiaries, but the details depend on timing and your current coverage situation.
          </p>
          <p>
            Rules vary, and getting them wrong can cost you. Call me to confirm what applies to your exact scenario before you apply.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Drug manufacturer programs can fill the gaps
          </h2>
          <p className="mb-2">
            Many lupus patients don't realize that drug manufacturers offer patient assistance programs alongside Medicare. AstraZeneca (Saphnelo) and GSK (Benlysta) both run programs that may help with out-of-pocket costs.
          </p>
          <p>
            These programs have income limits and eligibility rules. I can point you in the right direction and make sure your Part D plan works alongside any assistance you qualify for.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get personalized enrollment guidance from a licensed broker
          </h2>
          <p className="mb-2">
            You're dealing with fatigue, pain, and the stress of managing a disease that most people don't understand. The last thing you need is to spend hours on hold with Medicare and Social Security trying to untangle coverage problems.
          </p>
          <p>
            I'll review your medications, your doctors, and your budget. Then I'll show you which plans actually work for how you live with lupus. No charge. No pressure. Just clear answers.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who understands lupus coverage.
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                href="/services/best-medicare-supplement-for-people-on-disability"
                className="text-blue-600 hover:underline"
              >
                Medicare for People With Disabilities
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Drug Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap
              </Link>
            </li>
                      <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-enrollment-help-for-people-with-diabetes-texas"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help For People With Diabetes Texas
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-enrollment-help-for-people-with-lupus-california"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Help For People With Lupus California
              </Link>
            </li>
</ul>
        </section>
      </article>
    </>
  );
}