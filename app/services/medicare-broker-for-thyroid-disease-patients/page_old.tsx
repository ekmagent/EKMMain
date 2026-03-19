import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for thyroid disease patients | Free Plan Review | MedicareYourself",
  description:
    "Medicare broker for thyroid disease patients — find NJ plans covering lab work, thyroid meds, and specialist care. Anthony Orner compares options free.",
  openGraph: {
    title:
      "Medicare broker for thyroid disease patients | Free Plan Review | MedicareYourself",
    description:
      "Medicare broker for thyroid disease patients — find NJ plans covering lab work, thyroid meds, and specialist care. Anthony Orner compares options free.",
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
      name: "Medicare Broker for Thyroid Disease Patients",
      item: "https://medicareyourself.com/services/medicare-broker-for-thyroid-disease-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Thyroid Disease Patients — Plans Covering Lab Work, Meds, and Specialist Visits",
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
    question: "Why is TSH not covered by Medicare?",
    answer:
      "TSH tests are covered by Medicare Part B when ordered by your doctor for a medical reason - like monitoring hypothyroidism or hyperthyroidism. Routine screening without a diagnosis code may not be covered. If your doctor documents why the test is medically necessary, you typically pay nothing after the Part B deductible.",
  },
  {
    question: "What is a natural alternative to Synthroid?",
    answer:
      "Some patients use desiccated thyroid (like Armour Thyroid or NP Thyroid), which is derived from animal thyroid glands and contains both T4 and T3. These are prescription medications, not over-the-counter supplements. Always discuss options with your endocrinologist before switching - and check whether your Part D plan covers the alternative.",
  },
  {
    question:
      "Does Medicare cover thyroid ultrasounds and biopsies?",
    answer:
      "Yes. Medicare Part B covers diagnostic thyroid ultrasounds and fine-needle aspiration biopsies when ordered by your doctor. You'll pay 20% of the Medicare-approved amount after your Part B deductible ($283 in 2026). A Medigap plan can reduce or eliminate that 20%.",
  },
  {
    question: "Can a Medicare broker help me find plans that cover my thyroid medication?",
    answer:
      "Absolutely. A licensed Medicare broker can check Part D formularies to see which plans cover your specific thyroid medication - whether that's levothyroxine, Synthroid, methimazole, or a desiccated thyroid product - and compare your total out-of-pocket costs across plans.",
  },
];

export default function MedicareBrokerThyroidDisease() {
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
            Medicare Broker for Thyroid Disease Patients
          </span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for Thyroid Disease Patients — Plans Covering Lab Work, Meds, and Specialist Visits
          </h1>
          <Image
            src="/images/medicare-broker-for-thyroid-disease-patients.webp"
            alt="Medicare broker for thyroid disease patients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-4">
          A Medicare broker for thyroid disease patients does something most people don't realize is free: compare every plan option side by side based on your specific medications, labs, and doctors. I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I do this every day for people managing Hashimoto's, Graves' disease, thyroid cancer follow-up, and general hypothyroidism.
        </p>

        <p className="text-lg mb-6">
          Your thyroid condition touches every part of your Medicare coverage - Part B for labs and imaging, Part D for meds, and your choice of Supplement or Advantage for specialist visits. Let me walk you through what matters most.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare covers TSH testing, biopsies, and ultrasounds
          </h2>
          <p className="mb-3">
            Medicare Part B covers TSH blood tests, thyroid ultrasounds, and fine-needle aspiration biopsies when your doctor orders them for a diagnosed condition. You'll pay 20% of the Medicare-approved amount after meeting the $283 Part B deductible (2026).
          </p>
          <p>
            If you're getting labs every 6-8 weeks while adjusting medication, that 20% adds up. A Medigap plan like Plan G covers that coinsurance entirely.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Part D formulary differences for Synthroid, methimazole, and generics
          </h2>
          <p className="mb-3">
            Generic levothyroxine is on most Part D formularies at a low tier. Brand-name Synthroid often sits on a higher tier with bigger copays - or may require prior authorization. Methimazole for hyperthyroidism is usually generic and affordable.
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>Levothyroxine (generic): typically Tier 1 or 2</li>
            <li>Synthroid (brand): often Tier 3 or higher, with possible step therapy</li>
            <li>Methimazole (generic): typically Tier 1 or 2</li>
            <li>Armour Thyroid / NP Thyroid: coverage varies widely by plan</li>
          </ul>
          <p>
            Formularies change every year. I check each plan's drug list against your exact prescriptions and dosages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage for frequent endocrinology visits
          </h2>
          <p className="mb-3">
            If you see an endocrinologist regularly - two to four times a year, plus lab draws - your plan choice matters. Medicare Supplement (Medigap) plans let you see any doctor who accepts Medicare. No referrals. No network restrictions.
          </p>
          <p>
            Medicare Advantage plans have networks. That can work fine if your endocrinologist is in-network, but specialist copays ($30-$50 per visit) add up with frequent appointments. I'll run the math for your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why your thyroid medication schedule matters for plan selection
          </h2>
          <p className="mb-3">
            Thyroid patients often take the same medication for years - sometimes decades. That's actually helpful for planning. We can model your annual drug costs with high confidence and find the Part D plan with the lowest total cost, not just the lowest premium.
          </p>
          <p>
            If your doctor switches you between brand and generic, or adjusts dosages, I can show you which plans handle formulary changes with the least hassle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What I look at during your free plan review
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Your current thyroid medications, dosages, and pharmacy</li>
            <li>How often you see your endocrinologist and primary care doctor</li>
            <li>Whether you need frequent labs or imaging</li>
            <li>Your tolerance for networks vs. freedom to choose providers</li>
            <li>Your monthly budget for premiums and out-of-pocket costs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan review based on your thyroid treatment
          </h2>
          <p>
            You shouldn't have to guess whether your plan covers your next TSH panel or your levothyroxine refill. I'll compare your options across carriers and show you the real numbers. No cost, no pressure, no obligation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who understands thyroid care.
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
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-broker-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker for Chronic Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medicare-part-d-drug-coverage"
                className="text-blue-600 hover:underline"
              >
                Understanding Medicare Part D Drug Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medigap-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-nj"
                className="text-blue-600 hover:underline"
              >
                Licensed Medicare Broker in New Jersey
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}