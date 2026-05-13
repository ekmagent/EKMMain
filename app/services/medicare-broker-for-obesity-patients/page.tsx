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
    "Medicare broker for obesity patients — Anthony Orner compares NJ plans covering IBT counseling, bariatric surgery & GLP-1 drugs. Free help: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-obesity-patients" },
  openGraph: {
    title:
      "Medicare broker for obesity patients | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for obesity patients — Anthony Orner finds NJ plans covering behavioral therapy, bariatric surgery, and GLP-1 drugs. Free comparison.",
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
      name: "Medicare Broker for Obesity Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-obesity-patients",
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
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "Does Medicare cover a nutritionist for obesity?",
    answer:
      "Original Medicare covers Intensive Behavioral Therapy (IBT) for obesity when provided by a qualified primary care practitioner. This includes face-to-face counseling on diet, exercise, and behavior change. However, standalone nutritionist or dietitian visits for obesity are generally not covered under Part B unless tied to a separate diagnosis like diabetes or kidney disease.",
  },
  {
    question: "What are the requirements for Medicare to cover Wegovy?",
    answer:
      "As of 2025, Medicare Part D has historically excluded coverage for drugs used solely for weight loss. Recent policy changes and manufacturer agreements may expand Part D coverage for GLP-1 medications like Wegovy. Eligibility criteria, prior authorization requirements, and formulary placement vary by plan. Call us at 855-559-1700 for the latest on which Part D plans in your area include GLP-1 coverage.",
  },
  {
    question:
      "Does Medicare pay for bariatric surgery?",
    answer:
      "Yes. Original Medicare covers bariatric surgery if you have a BMI of 35 or higher plus at least one obesity-related condition (like type 2 diabetes or heart disease), and your surgeon operates at a certified facility. Prior authorization is required. Some Medicare Advantage plans may have additional requirements or expanded benefits.",
  },
  {
    question: "How can a Medicare broker help with obesity-related coverage?",
    answer:
      "A Medicare broker compares plans across carriers to find coverage that matches your specific treatment needs, whether that's behavioral counseling, surgical benefits, or Part D formularies that include newer weight-loss medications. Anthony Orner provides free plan comparisons for NJ residents at 855-559-1700.",
  },
];

export default function MedicareBrokerForObesityPatients() {
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
        <span className="text-gray-700">Medicare Broker for Obesity Patients</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Medicare Broker for Obesity Patients — Coverage for Counseling, Surgery, and Weight-Loss Medications
        </h1>

        <Image
          src="/images/medicare-broker-for-obesity-patients.webp"
          alt="Medicare broker for obesity patients"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare broker for obesity patients is what I do every week in New Jersey. If you're managing your weight with counseling, considering surgery, or trying to get a GLP-1 medication covered, the right plan matters more than you think.
        </p>
        <p className="mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I help people find plans that actually cover the treatments they need, not just the ones that look good on paper.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare's intensive behavioral therapy benefit for obesity
          </h2>
          <p className="mb-2">
            Original Medicare (Part B) covers Intensive Behavioral Therapy for obesity at no cost to you, as long as a qualified primary care provider delivers it. That means face-to-face counseling on diet, physical activity, and sustained behavior change.
          </p>
          <p>
            You can receive weekly visits for the first month, biweekly for months two through six, then monthly sessions after that if you're meeting weight-loss goals. There's no copay when you see an accepting provider.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Bariatric surgery coverage: BMI requirements and prior auth
          </h2>
          <p className="mb-2">
            Medicare covers bariatric surgery if you meet these criteria:
          </p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li>BMI of 35 or higher</li>
            <li>At least one obesity-related condition (type 2 diabetes, heart disease, sleep apnea, etc.)</li>
            <li>Surgery performed at a Medicare-certified bariatric center</li>
            <li>Prior authorization approved</li>
          </ul>
          <p>
            Some Medicare Advantage plans cover additional procedures or have faster approval pathways. That's where a plan comparison saves you time and money.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Will Medicare Part D cover Wegovy, Zepbound, or other GLP-1s?
          </h2>
          <p className="mb-2">
            This is the question I hear most. Historically, Medicare Part D excluded drugs prescribed solely for weight loss. That's been changing. Recent federal negotiations and manufacturer pricing agreements are opening the door for GLP-1 medications under Part D.
          </p>
          <p className="mb-2">
            Coverage depends on your specific Part D or Medicare Advantage plan's formulary, and prior authorization requirements vary widely. Some plans already list certain GLP-1s. Others don't.
          </p>
          <p>
            People are understandably anxious about affording medications that cost $1,000+ out of pocket. I track which plans in NJ include GLP-1 coverage and what the real out-of-pocket costs look like.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Compare plans that best support your weight-loss treatment
          </h2>
          <p className="mb-2">
            Not all Medicare Advantage or Part D plans treat obesity coverage the same way. Some include fitness programs, expanded counseling benefits, or broader drug formularies. Others are bare-bones.
          </p>
          <p>
            I compare every plan available in your county so you're not guessing. One phone call, and I'll show you which plans cover the specific treatments your doctor has recommended.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why coding and billing matter for obesity visits
          </h2>
          <p className="mb-2">
            Here's something nobody warns you about: how your provider codes your visit determines whether Medicare pays. Visits billed as "obesity counseling" may be denied if the coding doesn't match covered benefit categories.
          </p>
          <p>
            If you've been surprised by a bill for what felt like a routine appointment, you're not alone. I can help you understand what's covered before you walk in, so there are no surprises after.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a free plan comparison looks like
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>I review your current coverage, medications, and providers</li>
            <li>I compare Medicare Advantage, Medigap, and Part D options in your area</li>
            <li>I flag which plans cover your obesity-related treatments specifically</li>
            <li>You get a clear recommendation with real cost estimates</li>
          </ul>
          <p className="mt-2">
            No cost. No obligation. I work for you, not the insurance company.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-8">
          <p className="text-xl font-semibold mb-2">
            Ready to find a plan that covers your weight-loss treatment?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold text-white"
            >
              get a free quote online
            </Link>
            .
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Drug Coverage Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Free Preventive Services Under Medicare
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/coverage/obesity-behavioral-therapy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Obesity Behavioral Therapy Coverage</a> and <a href="https://www.medicare.gov/coverage/bariatric-surgery" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Bariatric Surgery Coverage</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents: For free unbiased Medicare counseling, contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}