import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "What's the Best Medicare Plan for Someone With Chronic Conditions | Free Broker Help | MedicareYourself",
  description:
    "What's the best Medicare plan for chronic conditions? Medigap often beats Advantage for ongoing care. Free broker guidance from Anthony Orner — no health screening.",
  openGraph: {
    title:
      "What's the Best Medicare Plan for Someone With Chronic Conditions | Free Broker Help | MedicareYourself",
    description:
      "What's the best Medicare plan for chronic conditions? Medigap often beats Advantage for ongoing care. Free broker guidance from Anthony Orner — no health screening.",
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
      name: "Best Medicare Plan for Chronic Conditions",
      item: "https://www.medicareyourself.com/services/best-medicare-plan-for-chronic-conditions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What's the Best Medicare Plan for Someone With Chronic Conditions?",
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
    question: "Which Medicare plan is best for chronic illness?",
    answer:
      "For most people with chronic conditions, Original Medicare paired with a Medigap plan (like Plan G or Plan N) provides the most predictable costs and widest doctor access. Medicare Advantage C-SNP plans exist for specific chronic conditions, but they come with networks, prior authorizations, and often higher out-of-pocket maximums than people expect.",
  },
  {
    question: "Does Medicare cover osteoarthritis?",
    answer:
      "Yes. Original Medicare (Part A and Part B) covers medically necessary treatments for osteoarthritis, including doctor visits, physical therapy, joint injections, and joint replacement surgery. Part D covers prescription medications. A Medigap plan helps cover your share of these costs.",
  },
  {
    question:
      "Can I get a Medigap plan if I already have a chronic condition?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting when you turn 65 and enroll in Part B), carriers cannot deny you or charge more due to health conditions. Outside that window, federal guaranteed issue rights may apply if you're leaving an Advantage plan or losing employer coverage. Rules vary by state — call to confirm your options.",
  },
  {
    question: "What is a Chronic Special Needs Plan (C-SNP)?",
    answer:
      "A C-SNP is a type of Medicare Advantage plan designed for people with specific chronic conditions like diabetes, heart failure, or cardiovascular disorders. They include care coordination but still operate within provider networks. Many beneficiaries find the copays and out-of-pocket maximums are higher than expected compared to Medigap.",
  },
];

export default function BestMedicarePlanChronicConditions() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Best Medicare Plan for Chronic Conditions
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        What's the Best Medicare Plan for Someone With Chronic Conditions?
      </h1>

      <Image
        src="/images/best-medicare-plan-for-chronic-conditions.webp"
        alt="best medicare plan for someone with chronic conditions"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        What's the best Medicare plan for someone with chronic conditions? If you
        manage diabetes, heart failure, autoimmune disease, or chronic pain, the
        answer usually isn't the $0-premium plan that looks great on paper.
      </p>
      <p className="text-lg mb-6">
        It's the plan that keeps your costs predictable when you actually use it.
        I'm Anthony Orner, a licensed Medicare broker, and I help people with
        ongoing health needs find coverage that holds up under real use.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Medigap usually beats Medicare Advantage for chronic illness
        </h2>
        <p className="mb-2">
          Medicare Advantage plans charge copays at every visit, every scan,
          every specialist. When you're seeing doctors regularly, those costs
          stack fast. The annual out-of-pocket maximum can reach $8,850 or more.
        </p>
        <p>
          Original Medicare with a Medigap supplement works differently. Medigap
          pays your cost-sharing after Medicare pays its part. No networks. No
          referrals. No prior authorizations delaying the treatment your doctor
          ordered.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Plan G and Plan N protect you from unpredictable costs
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plan G:</strong> Covers everything except the Part B
            deductible ($283/year in 2026). After that, you pay $0 for
            Medicare-approved services. No surprise bills.
          </li>
          <li>
            <strong>Plan N:</strong> Lower monthly premium than Plan G. You pay
            the $283 deductible plus small copays (up to $20 for office visits,
            up to $50 for ER visits not resulting in admission).
          </li>
        </ul>
        <p className="mt-2">
          Both plans let you see any doctor in the country who accepts Medicare.
          That matters when you need specialists or travel for care.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          What about Chronic Special Needs Plans (C-SNPs)?
        </h2>
        <p className="mb-2">
          C-SNPs are Medicare Advantage plans built for people with conditions
          like diabetes, heart failure, or cardiovascular disorders. They include
          care coordination and may cover extra services.
        </p>
        <p>
          But they're still Advantage plans. You'll deal with provider networks,
          formulary restrictions, and copays at every level of care. Many people
          find C-SNP out-of-pocket costs are higher than expected, especially
          compared to Medigap. If your conditions require frequent, varied care,
          a supplement plan usually costs less overall.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          Guaranteed issue rights that bypass health questions entirely
        </h2>
        <p className="mb-2">
          Your best window: the 6-month Medigap Open Enrollment Period, starting
          when you turn 65 and enroll in Part B. During this time, no carrier can
          deny you or charge more because of a chronic condition.
        </p>
        <p>
          Outside that window, federal guaranteed issue rights still apply in
          specific situations: leaving a Medicare Advantage plan, losing employer
          coverage, or if your plan leaves your area. Rules vary by state, so
          call to confirm what applies to you.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          The real cost of choosing wrong with chronic conditions
        </h2>
        <p className="mb-2">
          Copays that seem small add up when you see four specialists, fill eight
          prescriptions, and need imaging every few months. A $0 premium plan
          can easily cost $4,000-$6,000 a year in out-of-pocket expenses.
        </p>
        <p>
          Medigap premiums are higher monthly, but your total annual spend
          becomes predictable. For someone managing ongoing conditions, that
          predictability isn't a luxury. It's the whole point.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony matches your conditions to the right plan
        </h2>
        <p className="mb-2">
          I look at your actual medication list, your doctors, how often you need
          care, and whether you travel. Then I compare what you'd pay under
          Medigap vs. Advantage across a full year, not just the monthly premium.
        </p>
        <p>
          No health screening on our end. No sales pitch. I work with multiple
          carriers so I can show you real options, not just the one plan that
          pays me the most. Call and we'll figure it out together.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Living with chronic conditions? Let's find the plan that actually
          works.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free, no-pressure consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medigap-plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: Real Cost Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Why Timing Matters
            </Link>
          </li>
          <li>
            <Link
              href="/services/guaranteed-issue-rights-medicare"
              className="text-blue-600 hover:underline"
            >
              Guaranteed Issue Rights for Medicare Supplement Plans
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}