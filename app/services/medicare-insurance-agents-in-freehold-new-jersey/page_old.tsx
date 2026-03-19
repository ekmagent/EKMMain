import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in freehold new jersey | Free Consultation | MedicareYourself",
  description:
    "Medicare insurance agents in Freehold, New Jersey — compare Supplement and Advantage plans with licensed broker Anthony Orner. Free quote, no pressure.",
  openGraph: {
    title:
      "medicare insurance agents in freehold new jersey | Free Consultation | MedicareYourself",
    description:
      "Medicare insurance agents in Freehold, New Jersey — compare Supplement and Advantage plans with licensed broker Anthony Orner. Free quote, no pressure.",
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
      name: "Medicare Insurance Agents in Freehold, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-freehold-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Freehold, New Jersey: Independent Broker Help in Monmouth County",
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
      "Yes. A licensed Medicare agent can compare plans across multiple carriers at no cost to you. The carrier pays the agent's commission, so you get professional guidance without paying extra. An independent broker, specifically, is not locked into one company and can show you the full range of options available in your area.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single 'best' plan for everyone. Medicare Supplement Plan G is the most popular Medigap option for new enrollees because it covers nearly all out-of-pocket costs except the annual Part B deductible ($257 in 2026). Medicare Advantage plans may work better if you want dental, vision, and hearing bundled in. The right choice depends on your doctors, prescriptions, and budget.",
  },
  {
    question: "Does it cost anything to use a Medicare broker?",
    answer:
      "No. Medicare brokers are compensated by insurance carriers, not by you. The premium you pay is the same whether you enroll directly with a carrier or through a broker. You get plan comparison and ongoing support at zero additional cost.",
  },
  {
    question: "Does Medicare have a local office in Freehold?",
    answer:
      "Medicare itself does not operate local offices, but the Social Security Administration has offices in the region where you can handle enrollment questions. For plan selection and comparison, a local licensed broker like Anthony Orner can meet with you by phone or video and handle everything from Freehold.",
  },
];

export default function MedicareInsuranceAgentsFreeholdNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
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
          Medicare Insurance Agents in Freehold, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Freehold, New Jersey: Independent Broker Help in Monmouth County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-freehold-new-jersey.webp"
        alt="Medicare insurance agents in Freehold New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Freehold, New Jersey can help you sort through Supplement and Advantage options without the confusion of doing it alone. If you live in or around Monmouth County, working with a licensed independent broker means you see plans from multiple carriers side by side. I'm Anthony Orner, and I help Freehold-area residents pick the right coverage every day.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker differs from a captive agent in Freehold
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans, even if a competitor offers a lower rate or better fit.
        </p>
        <p>
          An independent broker like me is contracted with multiple carriers. I can lay out your options from several companies and let you choose based on price, network, and benefits - not based on which company signs my paycheck.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage options for Freehold-area residents
        </h2>
        <p className="mb-2">
          Freehold residents generally have two paths after enrolling in Original Medicare:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plans like G and N cover gaps in Original Medicare. Plan G pays everything except the $257 Part B deductible in 2026. You keep access to any doctor who accepts Medicare nationwide.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> These plans replace Original Medicare with a network-based option. Many include dental, vision, and hearing coverage. Some have $0 premiums but use copays and prior authorizations.
          </li>
        </ul>
        <p>Which path works depends on how you use healthcare. That's what a comparison call is for.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Carriers available in Monmouth County for 2025-2026
        </h2>
        <p className="mb-2">
          Monmouth County has strong carrier competition, which is good news for your wallet. Several well-known Medigap and Advantage carriers serve the Freehold ZIP codes, and rates vary significantly between them.
        </p>
        <p>
          I don't publish specific premium amounts here because they change by age, tobacco status, and enrollment timing. But I can pull real-time quotes for you in about 10 minutes on a call.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters if you're turning 65
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers cannot deny you or charge more based on health history.
        </p>
        <p className="mb-2">
          My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before your coverage even begins. The sooner you lock in, the better your rate.
        </p>
        <p>Miss that window and you may face medical underwriting. Don't wait until the last month.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a free plan comparison looks like
        </h2>
        <p className="mb-2">
          Here's what happens when you call:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>I ask about your doctors, prescriptions, and how often you travel</li>
          <li>I pull quotes from every carrier available in your ZIP code</li>
          <li>We review the options together and you pick what fits</li>
          <li>I handle the enrollment paperwork</li>
        </ul>
        <p className="mt-2">The whole process takes 20-30 minutes. No obligation, no pressure.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Medicare plan comparison from Freehold
        </h2>
        <p>
          You don't need to drive anywhere. I work with Freehold-area clients by phone and video. Whether you're turning 65, retiring from employer coverage, or just reviewing what you have now, I can help you see what's out there for 2025-2026.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Freehold?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner - Licensed Medicare Broker, NJ
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-g-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/turning-65-medicare-checklist"
              className="text-blue-700 hover:underline"
            >
              Turning 65 Medicare Checklist
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-supplement-plan-n-vs-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plan N vs Plan G
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}