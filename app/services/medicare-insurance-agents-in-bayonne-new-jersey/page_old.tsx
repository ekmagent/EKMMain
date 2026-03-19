import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in bayonne new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Bayonne, New Jersey — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free consultation.",
  openGraph: {
    title:
      "medicare insurance agents in bayonne new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Bayonne, New Jersey — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free consultation.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agents in Bayonne, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-bayonne-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Bayonne, New Jersey — Licensed Broker Serving Hudson County",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans from multiple carriers at no cost to you. Agents are paid by the insurance companies, so you get professional guidance without paying a fee. An independent broker can show you options a single-carrier agent cannot.",
  },
  {
    question: "How do I choose a Medicare insurance agent?",
    answer:
      "Look for an independent broker licensed in your state who works with multiple carriers. Ask if they handle both Medicare Supplement and Medicare Advantage plans. An agent who serves your local area will know which plans have the strongest provider networks near you.",
  },
  {
    question: "What Medicare plans are available in Bayonne, NJ (zip code 07002)?",
    answer:
      "Bayonne residents in Hudson County can choose from Medicare Supplement (Medigap) plans like Plan G and Plan N, Medicare Advantage plans with local hospital and doctor networks, and standalone Part D prescription drug plans. Available carriers and rates vary, so comparing options is important.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker in Bayonne?",
    answer:
      "No. Medicare brokers are compensated by the insurance carriers. You pay the same premium whether you enroll through a broker or directly with the insurance company. There is no fee for consultations, plan comparisons, or ongoing support.",
  },
];

export default function MedicareInsuranceAgentsBayonneNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Bayonne, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Bayonne, New Jersey — Licensed Broker Serving Hudson County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-bayonne-new-jersey.webp"
        alt="Medicare insurance agents in Bayonne New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Bayonne, New Jersey help you cut through the confusion of plan selection. If you live in or around the 07002 zip code, I can compare Supplement and Advantage options from multiple carriers and walk you through every detail by phone.
      </p>
      <p className="mb-6">
        My name is Anthony Orner. I am a licensed, independent Medicare broker serving Hudson County and all of New Jersey.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Bayonne residents work with an independent Medicare broker
        </h2>
        <p className="mb-2">
          Bayonne sits in Hudson County, the most densely populated county in New Jersey. That means plenty of carriers compete for your business. An independent broker like me is not tied to one company.
        </p>
        <p>
          I compare plans side by side so you see real premium differences. You pay nothing extra for this service - carriers compensate me directly, and your premium stays the same either way.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in 07002
        </h2>
        <p className="mb-2">
          Bayonne residents have access to both Medicare Supplement (Medigap) and Medicare Advantage plans. Here is a quick comparison:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-2">
          <li><strong>Medicare Supplement Plan G</strong> - covers the Part A deductible ($1,676 in 2026) and most out-of-pocket costs. You pay only the $257 annual Part B deductible.</li>
          <li><strong>Medicare Supplement Plan N</strong> - lower premiums than Plan G, with small copays at some office visits.</li>
          <li><strong>Medicare Advantage (Part C)</strong> - bundles Part A, Part B, and often Part D. Many plans in Hudson County include dental and vision.</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I will pull current quotes specific to your situation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps Bayonne Medicare beneficiaries
        </h2>
        <p className="mb-2">
          I handle everything over the phone, so you do not need to drive anywhere or meet in person. Here is how the process works:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>We review your current coverage, medications, and doctors.</li>
          <li>I pull real-time quotes from multiple carriers available in Hudson County.</li>
          <li>We pick the plan that fits your budget and healthcare needs.</li>
          <li>I assist with enrollment and remain your point of contact year after year.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65? Lock in your Medigap rate early
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge higher premiums based on health.
        </p>
        <p>
          I recommend applying up to 6 months before your Part B start date. This locks in your rate early and protects you from premium increases before coverage begins. The sooner you act, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates to remember
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Medicare Advantage / Part D Open Enrollment:</strong> October 15 through December 7 each year.</li>
          <li><strong>Medigap Open Enrollment:</strong> 6-month window starting the month you are 65+ and enrolled in Part B.</li>
          <li><strong>Part B late enrollment penalty:</strong> 10% added to your premium for every 12 months you delayed signing up.</li>
        </ul>
        <p className="mt-2">
          Missing these dates can cost you. Call me if you are unsure about your timeline.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare consultation from Bayonne
        </h2>
        <p className="mb-2">
          Whether you are new to Medicare or reviewing your existing plan, a quick phone call can save you hundreds of dollars a year. I will answer your questions and compare options at no charge.
        </p>
        <p>
          Call today. There is no obligation, no pressure, and no fee.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Bayonne?
        </p>
        <p className="text-lg mb-4">
          Call <a href="tel:8555591700" className="text-blue-700 font-bold hover:underline">855-559-1700</a> for a free consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/medicare-supplement-plans-nj" className="text-blue-600 hover:underline">
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link href="/medicare-advantage-plans-nj" className="text-blue-600 hover:underline">
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link href="/plan-g-vs-plan-n" className="text-blue-600 hover:underline">
              Plan G vs Plan N - Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link href="/turning-65-medicare-checklist" className="text-blue-600 hover:underline">
              Turning 65 Medicare Checklist
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}