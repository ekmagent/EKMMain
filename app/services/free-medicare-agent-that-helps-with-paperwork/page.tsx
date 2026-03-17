import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Free Medicare Agent That Helps With Paperwork | Zero-Cost Enrollment Help | MedicareYourself",
  description:
    "Free Medicare agent that helps with paperwork from start to finish. Anthony Orner handles applications, carrier forms, and enrollment — zero cost. Call today.",
  openGraph: {
    title:
      "Free Medicare Agent That Helps With Paperwork | Zero-Cost Enrollment Help | MedicareYourself",
    description:
      "Free Medicare agent that helps with paperwork from start to finish. Anthony Orner handles applications, carrier forms, and enrollment — zero cost. Call today.",
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
      name: "Free Medicare Agent That Helps With Paperwork",
      item: "https://www.medicareyourself.com/services/free-medicare-agent-that-helps-with-paperwork",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Free Medicare Agent Who Actually Helps You With the Paperwork",
  description:
    "Free Medicare agent that helps with paperwork from start to finish. Anthony Orner handles applications, carrier forms, and enrollment — zero cost. Call today.",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/free-medicare-agent-that-helps-with-paperwork",
};

const faqs = [
  {
    question:
      "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security offices handle Part A and Part B enrollment and can answer basic eligibility questions. However, they do not compare Medicare Advantage plans, Medigap policies, or Part D drug plans. A licensed Medicare broker can help you evaluate all your options and complete carrier-specific paperwork at no cost to you.",
  },
  {
    question:
      "Why is a Medicare agent free?",
    answer:
      "Licensed Medicare brokers are compensated by insurance carriers, not by you. The plans cost the same whether you enroll on your own or through a broker. You get hands-on help with applications and paperwork without paying a dime.",
  },
  {
    question:
      "What if I already started my Medicare application and got stuck?",
    answer:
      "Call us at 855-559-1700. Anthony can pick up where you left off, review what has been submitted, correct errors, and get your enrollment back on track. There is no charge for this help.",
  },
  {
    question:
      "Does the agent handle paperwork for Medigap and Medicare Advantage?",
    answer:
      "Yes. A licensed broker handles applications for Medicare Supplement (Medigap) plans, Medicare Advantage plans, and Part D prescription drug plans. Every form, every carrier, one phone call.",
  },
];

export default function FreeMedicareAgentPaperworkPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/hub" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Free Medicare Agent That Helps With Paperwork
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          A Free Medicare Agent Who Actually Helps You With the Paperwork
        </h1>

        <Image
          src="/images/hub_free-medicare-agent-that-helps-with-paperwork.webp"
          alt="Free Medicare agent that helps with paperwork"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Finding a free Medicare agent that helps with paperwork can save you hours of frustration and prevent costly enrollment mistakes. I am Anthony Orner, a licensed Medicare broker in New Jersey, and I handle every application, carrier form, and enrollment step for you.
        </p>
        <p className="text-lg mb-6">
          You never pay me a cent. The insurance carriers compensate me directly, so my help costs you nothing.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What paperwork is involved in enrolling in Medicare
          </h2>
          <p className="mb-2">
            Medicare enrollment involves more forms than most people expect. Here is what you are looking at:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Part A and Part B enrollment through Social Security</li>
            <li>A separate application if you choose a Medicare Advantage plan</li>
            <li>A Medigap (Medicare Supplement) application with medical underwriting in most states</li>
            <li>A Part D prescription drug plan enrollment form</li>
            <li>Carrier-specific disclosures and consent documents</li>
          </ul>
          <p>
            Each carrier has its own form. Miss a signature or check the wrong box and your application gets kicked back.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How a licensed broker handles applications at no cost to you
          </h2>
          <p className="mb-2">
            I work with multiple carriers, not just one. That means I can compare plans from Aetna, Cigna, Mutual of Omaha, and others, then submit the application directly on your behalf.
          </p>
          <p>
            The plan premiums are identical whether you go through me or apply on your own. The only difference is you get someone double-checking every line before it is submitted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common enrollment mistakes that delay your coverage
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Entering your Medicare Beneficiary Identifier (MBI) incorrectly</li>
            <li>Choosing an effective date that does not align with your Initial Enrollment Period</li>
            <li>Forgetting to sign or date a required page</li>
            <li>Applying for a Medigap plan outside your open enrollment window (in most states this triggers underwriting)</li>
          </ul>
          <p className="mt-2">
            Any one of these can delay coverage by weeks. I catch these before they become problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            NJ residents get extra paperwork protection
          </h2>
          <p className="mb-2">
            New Jersey offers year-round guaranteed issue for Medigap plans. That means no medical underwriting, no health questions on the application.
          </p>
          <p>
            This simplifies the paperwork significantly, but you still need to pick the right plan. Plan G with the 2026 Part B deductible of $257 is the most popular choice I see, and I can walk you through the numbers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to have ready before your call with Anthony
          </h2>
          <p className="mb-2">
            A 15-minute phone call is usually all it takes. Have these items nearby:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your red, white, and blue Medicare card (or your MBI number)</li>
            <li>A list of current prescriptions and dosages</li>
            <li>Names of your doctors and preferred hospitals</li>
            <li>Your zip code and county (plan availability varies by location)</li>
          </ul>
          <p className="mt-2">
            That is it. I handle everything else from there.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Free help does not mean less help
          </h2>
          <p className="mb-2">
            Some people worry that "free" means a quick sales pitch. It does not work that way. Nonprofit organizations like HICAP in California offer free Medicare counseling, and licensed brokers like me provide a similar no-cost service with the added ability to actually submit your applications.
          </p>
          <p>
            I stay with you after enrollment too. If a claim gets denied or you need to switch plans during Annual Enrollment (October 15 through December 7), you call the same number and talk to the same person.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-2xl font-bold mb-2">
            Ready to get your Medicare paperwork handled?
          </p>
          <p className="text-lg mb-4">
            Call Anthony directly. No cost, no obligation.
          </p>
          <a
            href="tel:855-559-1700"
            className="text-3xl font-bold underline hover:text-blue-100"
          >
            855-559-1700
          </a>
          <div className="mt-4">
            <Link
              href="/quote"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey - Compare Rates
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
            <li>
              <Link
                href="/services/medicare-supplement-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs. Medicare Advantage
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-choose-a-medicare-broker"
                className="text-blue-600 hover:underline"
              >
                How to Choose a Medicare Broker You Can Trust
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}