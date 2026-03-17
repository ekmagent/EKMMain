import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Best Medicare Insurance Brokers Near Me | Compare Carriers Free | MedicareYourself",
  description:
    "Best Medicare insurance brokers near you in NJ. Anthony Orner is an independent licensed broker who compares every major carrier at no cost. Get a free quote.",
  openGraph: {
    title: "Best Medicare Insurance Brokers Near Me | Compare Carriers Free | MedicareYourself",
    description:
      "Best Medicare insurance brokers near you in NJ. Anthony Orner is an independent licensed broker who compares every major carrier at no cost. Get a free quote.",
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
      name: "Best Medicare Insurance Brokers Near Me",
      item: "https://www.medicareyourself.com/services/best-medicare-insurance-brokers-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Find the Best Medicare Insurance Broker Near You",
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
    question: "Do Medicare brokers charge a fee for their services?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. You pay the same premium whether you enroll directly or through an independent broker.",
  },
  {
    question: "What is the difference between a Medicare broker and a Medicare agent?",
    answer:
      "A captive agent works for one insurance company and can only show you their plans. An independent broker is contracted with multiple carriers and can compare options from all of them to find your best fit.",
  },
  {
    question: "How do I verify a Medicare broker is licensed in my state?",
    answer:
      "You can verify any broker's license through your state's Department of Banking and Insurance website. In New Jersey, search the NJDOBI producer lookup tool. You can also ask the broker directly for their National Producer Number (NPN).",
  },
  {
    question: "Can I switch Medicare brokers if I'm unhappy?",
    answer:
      "Yes. You are never locked into working with a specific broker. Your policy stays the same regardless of who helped you enroll, and you can work with a different broker during your next enrollment period.",
  },
];

export default function BestMedicareBrokersNearMe() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Best Medicare Insurance Brokers Near Me</span>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          How to Find the Best Medicare Insurance Broker Near You
        </h1>

        <Image
          src="/images/hub_best-medicare-insurance-brokers-near-me.webp"
          alt="best medicare insurance brokers near me"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Searching for the best Medicare insurance brokers near you comes down to one thing: finding someone who works for you, not for an insurance company. The wrong broker limits your choices. The right one compares every major carrier and finds you the lowest rate for the coverage you actually need.
        </p>
        <p className="text-lg mb-6">
          Here is what to look for and what to avoid.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What separates a good Medicare broker from a captive agent
          </h2>
          <p className="mb-3">
            A captive agent represents one carrier. They can only sell you that company's plans, even if a competitor offers the same coverage for $40 less per month.
          </p>
          <p>
            An independent broker is contracted with multiple carriers. They pull quotes from all of them and lay them side by side. You see every option. That difference can save you hundreds of dollars a year on your Medigap or Medicare Advantage plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Questions to ask before choosing a Medicare broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Are you independent, or do you work for one carrier?</li>
            <li>How many insurance companies are you contracted with?</li>
            <li>Can I see your state license number or NPN?</li>
            <li>Do you charge any fees? (The answer should always be no.)</li>
            <li>Will you help me review my coverage every year during Annual Enrollment (Oct 15 - Dec 7)?</li>
          </ul>
          <p className="mt-3">
            If a broker gets vague on any of these, keep looking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independent brokers get you lower rates in NJ
          </h2>
          <p className="mb-3">
            New Jersey gives Medicare beneficiaries a major advantage: year-round guaranteed issue for Medigap plans. You can switch Medigap carriers at any time without medical underwriting. That means an independent broker can move you to a lower-cost plan whenever a better rate shows up.
          </p>
          <p>
            Captive agents have no reason to tell you about a competitor's lower price. Independent brokers do, because they're contracted with that carrier too.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a Medicare broker should handle for you
          </h2>
          <p className="mb-3">
            A good broker does more than enroll you once and disappear. They should review your Part D drug coverage each year, flag any premium increases on your Medigap plan, and make sure you're not overpaying.
          </p>
          <p>
            With the 2025 Part B premium at $185/month and the Part B deductible at $257, your out-of-pocket costs add up fast. Getting the right Medigap plan, whether that's Plan G or Plan N, makes a real financial difference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Red flags to watch for when picking a broker
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>They pressure you into one specific plan without showing alternatives</li>
            <li>They can't explain the difference between Medicare Supplement and Medicare Advantage</li>
            <li>They charge a "consultation fee" or "processing fee"</li>
            <li>They won't share their license information</li>
          </ul>
          <p className="mt-3">
            Licensed brokers are paid commissions by the carriers. You should never pay a broker a dime.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with Anthony Orner - licensed and independent in New Jersey
          </h2>
          <p className="mb-3">
            I'm Anthony Orner, an independent licensed Medicare broker based in New Jersey. I work with every major carrier in the state, from Aetna to United, and I compare their rates for you at no cost.
          </p>
          <p>
            Whether you're turning 65 or looking to lower your current premiums, I'll show you every option and let you decide. No pressure, no hidden fees, no surprises.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-2xl font-bold mb-3">Get a Free Medicare Quote</p>
          <p className="text-lg mb-4">
            Call today to compare plans from every major carrier in New Jersey.
          </p>
          <a
            href="tel:8555591700"
            className="text-3xl font-bold underline hover:text-blue-100"
          >
            855-559-1700
          </a>
          <p className="mt-4">
            <Link
              href="/quote"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Get a Free Quote Online
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/services/medicare-plan-g-nj" className="text-blue-600 hover:underline">
                Medicare Plan G in New Jersey: Costs and Coverage
              </Link>
            </li>
            <li>
              <Link href="/services/medicare-plan-n-vs-plan-g" className="text-blue-600 hover:underline">
                Medicare Plan N vs Plan G: Which Is Better?
              </Link>
            </li>
            <li>
              <Link href="/services/medicare-supplement-plans-nj" className="text-blue-600 hover:underline">
                Medicare Supplement Plans in NJ: Complete Guide
              </Link>
            </li>
            <li>
              <Link href="/services/when-to-enroll-in-medicare" className="text-blue-600 hover:underline">
                When to Enroll in Medicare: Key Dates and Deadlines
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}