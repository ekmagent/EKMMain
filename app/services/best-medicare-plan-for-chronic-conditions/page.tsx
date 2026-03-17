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
    "What's the best Medicare plan for someone with chronic conditions? For most people, Medigap wins over Advantage. Get free broker guidance from Anthony Orner.",
  openGraph: {
    title:
      "What's the Best Medicare Plan for Someone With Chronic Conditions | Free Broker Help | MedicareYourself",
    description:
      "What's the best Medicare plan for someone with chronic conditions? For most people, Medigap wins over Advantage. Get free broker guidance from Anthony Orner.",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Which Medicare plan is best for chronic illness?",
    answer:
      "For most people with chronic conditions, a Medigap plan like Plan G or Plan N paired with Original Medicare provides the most predictable costs. You keep access to any doctor who accepts Medicare nationwide, with no prior authorizations or network restrictions slowing down your care.",
  },
  {
    question: "Is COPD considered a chronic condition for Medicare?",
    answer:
      "Yes. COPD is a qualifying chronic condition under Medicare. It qualifies you for Chronic Special Needs Plans (C-SNPs), and it is also covered under Original Medicare with a Medigap supplement. Your treatment options and specialist visits are fully covered under Part B after meeting the $257 annual deductible in 2026.",
  },
  {
    question:
      "Can I switch from Medicare Advantage to Medigap if I have a chronic condition?",
    answer:
      "In most states, you would need to pass medical underwriting to switch from Medicare Advantage to Medigap after your initial enrollment period. Federal guaranteed issue rights apply in specific situations — such as when your Advantage plan leaves your service area or you lose employer coverage. I can check which situation applies to yours.",
  },
  {
    question:
      "What is a Chronic Special Needs Plan and should I consider one?",
    answer:
      "A Chronic Special Needs Plan (C-SNP) is a type of Medicare Advantage plan designed for people with specific chronic conditions like diabetes, heart failure, or cardiovascular disorders. C-SNPs offer care coordination and tailored benefits. However, they still operate as HMO or PPO networks, which can limit your provider choices compared to Original Medicare with a Medigap supplement.",
  },
];

export default function BestMedicarePlanChronicConditions() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-900">
          Best Medicare Plan for Chronic Conditions
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What's the Best Medicare Plan for Someone With Chronic Conditions?
      </h1>

      <Image
        src="/images/hub_best-medicare-plan-for-chronic-conditions.webp"
        alt="best medicare plan for someone with chronic conditions"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        If you're wondering what's the best Medicare plan for someone with chronic conditions, the answer almost always comes down to cost predictability and doctor access. When you have ongoing health issues, surprise bills and network restrictions can turn a "free" plan into an expensive headache.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I help people with chronic conditions pick the right coverage every week. Here's what I tell them.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why Medigap usually beats Medicare Advantage for chronic illness
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare Advantage plans can look appealing with $0 premiums and extra benefits. But if you're seeing specialists regularly, getting labs every few months, or managing multiple prescriptions, copays stack up fast.
        </p>
        <p className="text-gray-700">
          With Original Medicare plus a Medigap supplement, you see any doctor who accepts Medicare - no referrals, no prior authorizations. That matters when your cardiologist wants to order a test and you don't want to wait for plan approval.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Plan G and Plan N protect you from unpredictable costs
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G covers everything Original Medicare doesn't except the Part B deductible, which is $257 in 2026. After that, your out-of-pocket cost for the rest of the year is $0. That's it.
        </p>
        <p className="text-gray-700">
          Plan N costs less per month but adds small copays - up to $20 for office visits and up to $50 for ER visits that don't result in admission. If your conditions require frequent specialist visits, Plan G usually makes more sense. If your care is stable and predictable, Plan N saves you money.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What about Chronic Special Needs Plans?
        </h2>
        <p className="text-gray-700 mb-2">
          Medicare does offer Chronic Special Needs Plans (C-SNPs) for conditions like diabetes, heart failure, and cardiovascular disorders. These are Medicare Advantage plans with extra care coordination tailored to your diagnosis.
        </p>
        <p className="text-gray-700">
          C-SNPs can work well if you're comfortable staying in a network. But they're still HMO or PPO plans with the same referral and authorization requirements. For people managing multiple chronic conditions across several specialists, that structure can slow things down.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed issue rights that bypass health questions entirely
        </h2>
        <p className="text-gray-700 mb-2">
          A big concern for people with chronic conditions is whether they can even get Medigap. In most states, you have guaranteed issue rights during your 6-month open enrollment window starting when you turn 65 and enroll in Part B. No health questions during that window.
        </p>
        <p className="text-gray-700">
          If you live in New Jersey, you're in luck. NJ guarantees issue rights for Medigap year-round. That means no medical underwriting whether you're 66 or 86, whether you have diabetes, COPD, or heart disease. You can switch from Advantage to Medigap without a single health question.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The real cost of sticking with the wrong plan
        </h2>
        <p className="text-gray-700 mb-2">
          I've seen clients on Medicare Advantage paying $3,000-$5,000 a year in copays and coinsurance for their chronic conditions. Their Part B premium is $185/month in 2026 regardless of which path they choose.
        </p>
        <p className="text-gray-700">
          Add a Plan G premium (often $150-$250/month in NJ depending on age and carrier) and you get a hard ceiling on costs. No copays, no coinsurance, no surprises. For chronic conditions, that math usually works out.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How Anthony matches your conditions to the right plan
        </h2>
        <p className="text-gray-700 mb-2">
          I look at your specific doctors, medications, and how often you use care. Then I compare the total annual cost across your real options - not just the premium.
        </p>
        <p className="text-gray-700">
          There's no fee for my help. I get paid by the insurance carrier, and the price is the same whether you call them directly or go through me. The difference is you get someone who's done this thousands of times.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to find the right plan for your conditions?
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline hover:text-blue-600"
          >
            855-559-1700
          </a>{" "}
          for a free, no-pressure consultation.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medigap-plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N - Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-vs-medigap"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap - A Side-by-Side Comparison
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-guaranteed-issue-rights"
              className="text-blue-600 hover:underline"
            >
              Medigap Guaranteed Issue Rights Explained
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-g-cost-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G Cost in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}