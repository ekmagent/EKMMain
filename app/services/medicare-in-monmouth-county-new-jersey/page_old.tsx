import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare in Monmouth County New Jersey | Free Quotes, Local Broker | MedicareYourself",
  description:
    "Medicare in Monmouth County, New Jersey — see which Supplement and Advantage plans fit your zip code. Free comparison from a licensed local broker.",
  openGraph: {
    title:
      "Medicare in Monmouth County New Jersey | Free Quotes, Local Broker | MedicareYourself",
    description:
      "Medicare in Monmouth County, New Jersey — see which Supplement and Advantage plans fit your zip code. Free comparison from a licensed local broker.",
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
      name: "Medicare in Monmouth County, New Jersey",
      item: "https://medicareyourself.com/services/medicare-in-monmouth-county-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare in Monmouth County, New Jersey: Plans, Costs, and Local Broker Support",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-in-monmouth-county-new-jersey",
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. Medicare Supplement Plan G is the most popular Medigap option in New Jersey because it covers nearly all out-of-pocket costs after you pay the $257 annual Part B deductible. Medicare Advantage plans can offer $0 premiums with extra benefits like dental and vision. The right choice depends on your doctors, medications, and budget. Call us at 855-559-1700 for a free comparison.",
  },
  {
    question: "How do I contact Medicare in NJ?",
    answer:
      "You can reach Medicare directly at 1-800-MEDICARE (1-800-633-4227), 24 hours a day, 7 days a week. For Monmouth County-specific questions about Part B reimbursement, the county offers resources at (732) 683-8955. Or call our office at 855-559-1700 for help with plan selection and enrollment.",
  },
  {
    question: "What is the income limit for Medicare in NJ?",
    answer:
      "There is no income limit to qualify for Medicare. If you are 65 or older (or under 65 with a qualifying disability), you are eligible regardless of income. However, higher-income beneficiaries pay more for Part B and Part D through IRMAA surcharges. If your modified adjusted gross income exceeds $106,000 (single) or $212,000 (married filing jointly), your Part B premium will be higher than the standard $185/month.",
  },
  {
    question:
      "When is the best time to enroll in a Medicare plan in Monmouth County?",
    answer:
      "For Medicare Supplement plans, the best time is during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. During this window, insurers cannot deny you or charge more based on health. For Medicare Advantage and Part D, the annual enrollment period runs October 15 through December 7.",
  },
];

export default function MedicareMonmouthCountyNJ() {
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
          Medicare in Monmouth County, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare in Monmouth County, New Jersey: Plans, Costs, and Local Broker
        Support
      </h1>

      <Image
        src="/images/medicare-in-monmouth-county-new-jersey.webp"
        alt="Medicare in Monmouth County New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare in Monmouth County, New Jersey gives you access to dozens of
        Supplement and Advantage plans, but the options vary based on where you
        live. I'm Anthony Orner, a licensed Medicare broker who works with
        Monmouth County residents every day.
      </p>
      <p className="text-lg mb-6">
        My job is to lay out your choices side by side so you can pick the plan
        that actually fits your doctors, prescriptions, and budget. No cost to
        you, ever.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Monmouth County
        </h2>
        <p className="mb-2">
          You have two main paths once you have Original Medicare (Parts A and
          B):
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plans like G and N
            cover the gaps in Original Medicare. Plan G pays everything except
            the $257 annual Part B deductible. You keep your freedom to see any
            doctor who accepts Medicare nationwide.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> These plans replace
            Original Medicare with a managed network. Many offer $0 premiums
            plus dental, vision, and hearing benefits. Trade-off: you typically
            need referrals and in-network providers.
          </li>
        </ul>
        <p>
          Multiple carriers serve Monmouth County for both paths. Rates and
          networks differ by carrier, so a comparison matters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How your zip code affects your premium
        </h2>
        <p className="mb-2">
          Monmouth County spans zip codes from 07701 (Red Bank) to 07758
          (Port Monmouth) and beyond. Your specific zip code determines which
          Medicare Advantage plans are available and can influence Medigap rates
          depending on the carrier's rating area.
        </p>
        <p>
          Two people five miles apart may see different plan options. When you
          call, have your zip code handy so I can pull the exact plans and prices
          for your address.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates for Monmouth County residents
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and have Part B. Guaranteed issue, no health
            questions, no higher premiums. Miss this window and you may face
            medical underwriting.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Annual Enrollment:</strong>{" "}
            October 15 through December 7 each year.
          </li>
          <li>
            <strong>Medicare Advantage Open Enrollment:</strong> January 1
            through March 31 - lets you switch Advantage plans or return to
            Original Medicare.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2026 costs you should know about
        </h2>
        <p className="mb-2">
          These federal numbers apply no matter where you live in Monmouth
          County:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B monthly premium: $185</li>
          <li>Part B annual deductible: $257</li>
          <li>Part A hospital deductible: $1,676 per benefit period</li>
          <li>Skilled nursing coinsurance (days 21-100): $209.50/day</li>
        </ul>
        <p className="mt-2">
          Without a Supplement or Advantage plan, those costs come out of your
          pocket. That's why most Monmouth County residents add coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why work with a local broker instead of going direct
        </h2>
        <p className="mb-2">
          A broker compares plans from multiple carriers at once. Going directly
          to a carrier means you only see their options. My service is free
          because the insurance companies pay me, not you.
        </p>
        <p>
          I also handle claims issues and plan reviews each year. When something
          changes with your health or your prescriptions, you have a real person
          to call.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free Monmouth County Medicare plan comparison
        </h2>
        <p>
          Whether you're turning 65 in Freehold, retiring in Long Branch, or
          reviewing your current plan in Holmdel, I'll build a side-by-side
          comparison specific to your zip code. Call today or request a quote
          online. No obligation, no pressure.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Talk to a Licensed Monmouth County Medicare Broker
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
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/turning-65-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              Turning 65 and Medicare in NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}