import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for macular degeneration patients | Free Plan Match | MedicareYourself",
  description:
    "Medicare broker for macular degeneration patients helping match plans that cover eye injections, retinal monitoring, and AMD prescriptions. Free help from Anthony Orner.",
  openGraph: {
    title:
      "Medicare broker for macular degeneration patients | Free Plan Match | MedicareYourself",
    description:
      "Medicare broker for macular degeneration patients helping match plans that cover eye injections, retinal monitoring, and AMD prescriptions. Free help from Anthony Orner.",
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
      name: "Medicare Broker for Macular Degeneration Patients",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-macular-degeneration-patients",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Macular Degeneration Patients — Coverage for Injections, Monitoring, and More",
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
    question: "Does Medicare pay for treatment of macular degeneration?",
    answer:
      "Yes. Medicare Part B covers medically necessary diagnostic tests and treatments for age-related macular degeneration, including anti-VEGF eye injections and laser therapy. After the Part B deductible ($283 in 2026), you pay 20% of the Medicare-approved amount.",
  },
  {
    question: "What benefits can I get for macular degeneration?",
    answer:
      "Part B covers retinal exams, OCT scans, fluorescein angiography, and injectable drugs like Avastin, Lucentis, and Eylea. Part D may cover oral prescriptions related to AMD. Some Medicare Advantage plans add routine eye exams and eyewear benefits.",
  },
  {
    question:
      "Should I choose Original Medicare or Medicare Advantage for AMD care?",
    answer:
      "It depends on your situation. Original Medicare with a Medigap plan lets you see any retina specialist who accepts Medicare, with no referral needed. Medicare Advantage may offer extra vision benefits but can limit your provider network. If you're seeing a specific retina specialist, confirm they're in-network before enrolling.",
  },
  {
    question: "How much do anti-VEGF eye injections cost with Medicare?",
    answer:
      "Costs vary significantly by drug. Avastin runs around $50 per injection while Eylea can cost $1,850 or more. All are covered under Part B when medically necessary, but your 20% coinsurance will differ. A Medigap plan can help cover that 20%.",
  },
];

export default function MedicareBrokerMacularDegeneration() {
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
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Broker for Macular Degeneration Patients
          </span>
        </nav>

        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Broker for Macular Degeneration Patients — Coverage for
            Injections, Monitoring, and More
          </h1>
          <Image
            src="/images/medicare-broker-for-macular-degeneration-patients_photo.webp"
            alt="Medicare broker for macular degeneration patients"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-2">
          A Medicare broker for macular degeneration patients does one thing most
          plan-finder tools can't: match your coverage to the specific doctors,
          drugs, and monitoring schedule your eyes actually need. I'm Anthony
          Orner, a licensed Medicare broker, and I help people with AMD find
          plans that won't leave them guessing at costs between injections.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How Medicare Part B covers anti-VEGF eye injections
          </h2>
          <p className="mb-3">
            Part B covers injectable drugs like Avastin, Lucentis, and Eylea
            when your retina specialist says they're medically necessary. These
            are administered in-office, so they fall under Part B's medical
            benefit - not Part D.
          </p>
          <p>
            After your $283 annual deductible (2026), you pay 20% of the
            Medicare-approved amount. That 20% matters a lot here. Avastin costs
            roughly $50 per injection. Eylea can run over $1,850. Same condition,
            vastly different out-of-pocket costs.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why that 20% coinsurance adds up fast
          </h2>
          <p className="mb-3">
            Wet AMD often means injections every 4 to 8 weeks. Even at 20% of a
            lower-cost drug, those visits stack. A Medigap plan like Plan G
            covers the Part B coinsurance, which can save you hundreds - or
            thousands - per year depending on your injection schedule.
          </p>
          <p>
            Medicare Advantage plans cap your out-of-pocket costs differently,
            but some have copays per injection or per specialist visit. I'll help
            you compare both paths based on your actual treatment frequency.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Frequency of retinal exams and OCT scans under Medicare
          </h2>
          <p className="mb-3">
            Part B covers diagnostic tests like OCT scans and fluorescein
            angiography when ordered by your doctor. If you're being monitored
            for dry AMD, that might mean visits every 6 to 12 months. Wet AMD
            can mean monthly monitoring.
          </p>
          <p>
            Original Medicare lets you see any retina specialist who accepts
            Medicare. No referrals. No network restrictions. If you've found a
            specialist you trust, that flexibility matters.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Part D coverage for dry AMD supplements and prescriptions
          </h2>
          <p className="mb-3">
            Oral medications and certain supplements related to AMD may be
            covered under Part D, but formularies vary by plan. What's covered
            this year might change next year.
          </p>
          <p>
            I check your specific prescriptions against plan formularies so you
            don't get surprised at the pharmacy counter.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Original Medicare vs. Medicare Advantage for AMD care
          </h2>
          <p className="mb-3">
            People with macular degeneration often ask whether they should stick
            with Original Medicare or switch to a Medicare Advantage plan. There's
            no universal answer, but here's the tradeoff:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              <strong>Original Medicare + Medigap:</strong> See any
              Medicare-accepting retina specialist. Medigap covers most or all of
              your Part B coinsurance. Higher monthly premium, lower surprise
              costs.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> May include routine eye exams
              and eyewear. But specialist networks can be limited, and copays per
              visit or injection add up if you're going monthly.
            </li>
          </ul>
          <p>
            If your condition is progressing or you're already seeing a retina
            specialist regularly, provider access and predictable costs usually
            matter more than extra perks.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan match for your macular degeneration care
          </h2>
          <p className="mb-3">
            You're already managing appointments, monitoring changes in your
            vision, and trying to keep up with treatment schedules. Figuring out
            which Medicare plan actually covers all of that shouldn't be another
            burden.
          </p>
          <p>
            I'll look at your retina specialist, your injection schedule, your
            prescriptions, and your budget. Then I'll show you which plans fit.
            No cost. No obligation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 mt-10 mb-10 text-center">
          <p className="text-xl font-semibold mb-3">
            Call 855-559-1700 to talk through your AMD coverage options
          </p>
          <p className="mb-4">
            Or{" "}
            <Link href="/get-a-free-quote" className="underline font-medium">
              get a free quote online
            </Link>{" "}
            - I'll review your doctors, drugs, and treatment plan at no cost.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G — What It Covers
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-part-b-coverage"
                className="text-blue-600 hover:underline"
              >
                Medicare Part B Coverage Explained
              </Link>
            </li>
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
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap — How to Decide
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}