import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare broker for back pain sufferers | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare broker for back pain sufferers — find plans covering PT, injections, and surgery. Anthony Orner compares your options free. Call 855-559-1700.",
  openGraph: {
    title:
      "Medicare broker for back pain sufferers | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare broker for back pain sufferers — find plans covering PT, injections, and surgery. Anthony Orner compares your options free. Call 855-559-1700.",
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
      name: "Medicare Broker for Back Pain Sufferers",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-back-pain-sufferers",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for Back Pain Sufferers — Find Coverage That Covers What Matters",
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
    question: "Does Medicare cover physical therapy for back pain?",
    answer:
      "Yes. Medicare Part B covers outpatient physical therapy when ordered by your doctor. You'll pay 20% of the Medicare-approved amount after meeting your $283 annual Part B deductible. Some Medicare Advantage plans offer lower PT copays or additional visits.",
  },
  {
    question: "Are spinal injections covered by Medicare?",
    answer:
      "Medicare Part B covers epidural steroid injections and other medically necessary spinal injections. You're responsible for the 20% coinsurance unless you have a Medigap plan or a Medicare Advantage plan that reduces that cost.",
  },
  {
    question: "Does Medicare cover back surgery?",
    answer:
      "Medicare Part A covers inpatient back surgery, including spinal fusion and discectomy, when deemed medically necessary. The Part A deductible is $1,676 per benefit period in 2026. Medigap plans like Plan G cover this deductible for you.",
  },
  {
    question: "Can a Medicare broker help me find the best plan for chronic back pain?",
    answer:
      "Yes. A licensed Medicare broker compares plans across multiple carriers to find the best fit for your specific treatments - whether that's regular PT, injections, chiropractic care, or upcoming surgery. There's no cost for this service.",
  },
];

export default function MedicareBrokerForBackPainSufferers() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Medicare Broker for Back Pain Sufferers
        </span>
      </nav>

      <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Medicare Broker for Back Pain Sufferers — Find Coverage That Covers
          What Matters
        </h1>
        <Image
          src="/images/medicare-broker-for-back-pain-sufferers.webp"
          alt="Medicare broker for back pain sufferers"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />
      </div>

      <p className="text-lg mb-2">
        A Medicare broker for back pain sufferers does what most plan comparison
        tools can't - match your actual treatment needs to the plans that cover
        them best. If you're dealing with chronic back pain, you already know
        that not every plan handles PT, injections, and surgery the same way.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker. I help people who live
        with back pain find the right Medicare coverage without guesswork or
        surprise bills.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What Medicare parts cover for chronic back pain
        </h2>
        <p className="mb-2">
          Medicare Part B covers outpatient back pain treatments: physical
          therapy, occupational therapy, chiropractic services, acupuncture for
          chronic low back pain, and pain management visits. You pay 20% after
          the $283 annual deductible.
        </p>
        <p>
          Part A covers inpatient hospital stays if you need surgery. The 2026
          Part A deductible is $1,676 per benefit period. If you end up in
          skilled nursing after a spinal procedure, days 21-100 cost $209.50/day
          unless your plan covers it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Spinal injections, PT, and surgery: which plans pay more
        </h2>
        <p className="mb-2">
          With Original Medicare alone, you're on the hook for that 20%
          coinsurance on every injection, every PT session, every outpatient
          visit. That adds up fast when you're going back every few weeks.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Medigap Plan G:</strong> Covers the Part A deductible, all
            Part B coinsurance, and skilled nursing costs. You pay only the $283
            Part B deductible per year.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> Some plans offer low copays for
            PT and specialist visits, but networks matter. If your pain
            specialist or surgeon isn't in-network, you may pay significantly
            more.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Acupuncture and chiropractic coverage under Medicare
        </h2>
        <p className="mb-2">
          Since 2020, Medicare covers acupuncture for chronic low back pain - up
          to 12 sessions in 90 days, with an additional 8 if you're improving.
          Chiropractic coverage is limited to manual spinal manipulation.
        </p>
        <p>
          Some Medicare Advantage plans expand chiropractic benefits beyond what
          Original Medicare offers. If you rely on regular adjustments, that's
          worth comparing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage for ongoing pain management
        </h2>
        <p className="mb-2">
          People with chronic back pain tend to see multiple specialists - pain
          management doctors, orthopedists, physical therapists, sometimes
          surgeons. With Medigap and Original Medicare, any doctor who accepts
          Medicare is available to you. No referrals, no network restrictions.
        </p>
        <p>
          Medicare Advantage plans can save money on premiums, and some include
          extras like additional chiropractic visits. But network limits can be a
          real problem if your treatment plan changes or you need a specialist
          who isn't in the plan's directory.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why back pain makes choosing a plan harder
        </h2>
        <p className="mb-2">
          Back pain is unpredictable. You might manage fine with PT for a year,
          then need epidural injections or surgery. People online talk about
          being brushed off at urgent care, fighting for imaging, and facing
          surprise costs after procedures they thought were covered.
        </p>
        <p>
          The wrong plan doesn't just cost more - it creates delays and barriers
          when you're already in pain. That's why a plan comparison focused on
          your specific treatments matters more than picking the cheapest premium.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a plan comparison focused on your back pain needs
        </h2>
        <p className="mb-2">
          Tell me what treatments you're getting now, what your doctors are
          recommending, and what medications you take. I'll compare plans across
          carriers and show you exactly what each one covers for your situation.
        </p>
        <p>
          No cost. No obligation. Just a straight answer about which plan fits
          your back, your doctors, and your budget.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Talk to a Medicare broker who understands back pain coverage.
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
              href="/medicare-guides/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-broker-nj"
              className="text-blue-600 hover:underline"
            >
              Find a Licensed Medicare Broker in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-coverage"
              className="text-blue-600 hover:underline"
            >
              What Does Medicare Part B Cover?
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}