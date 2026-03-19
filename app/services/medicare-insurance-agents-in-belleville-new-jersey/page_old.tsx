import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in belleville new jersey | Free Plan Comparison | MedicareYourself",
  description:
    "Medicare insurance agents in Belleville, New Jersey — Anthony Orner compares Medigap and Advantage plans in Essex County at no cost. Book a free consultation.",
  openGraph: {
    title:
      "medicare insurance agents in belleville new jersey | Free Plan Comparison | MedicareYourself",
    description:
      "Medicare insurance agents in Belleville, New Jersey — Anthony Orner compares Medigap and Advantage plans in Essex County at no cost. Book a free consultation.",
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
      name: "Medicare Insurance Agents in Belleville, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-belleville-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Belleville, New Jersey: Independent Broker Serving Essex County",
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
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

const faqs = [
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. The right choice depends on your doctors, prescriptions, and budget. Medigap Plan G is the most popular supplement in New Jersey for 2026 because it covers nearly all out-of-pocket costs after the $257 Part B deductible. Medicare Advantage plans work well for people who want low premiums and are comfortable using a provider network. An independent broker can compare both options side by side at no cost to you.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes, especially an independent broker who is not tied to one carrier. Independent agents compare plans from multiple insurance companies, so you see the full picture. The best part: Medicare brokers are paid by the carriers, not by you. There is zero cost for the help.",
  },
  {
    question: "Where to apply for Medicare in New Jersey?",
    answer:
      "You can apply for Original Medicare (Parts A and B) through the Social Security Administration at ssa.gov or your local Social Security office. For Medigap or Medicare Advantage plans, a licensed broker like Anthony Orner can walk you through applications by phone or video. Call 855-559-1700 to get started.",
  },
  {
    question:
      "When is the Medigap open enrollment period in New Jersey?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you regardless of health history, with no higher premiums. Missing this window means you could face medical underwriting later.",
  },
];

export default function MedicareInsuranceAgentsBellevilleNJ() {
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
          Medicare Insurance Agents in Belleville, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Belleville, New Jersey: Independent Broker Serving Essex County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-belleville-new-jersey.webp"
        alt="Medicare insurance agents in Belleville New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Belleville, New Jersey can make the difference between overpaying for coverage and finding a plan that actually fits your budget. I'm Anthony Orner, an independent Medicare broker licensed in New Jersey, and I work with Belleville residents every enrollment season to compare plans from multiple carriers - at no cost.
      </p>
      <p className="mb-6">
        Whether you're turning 65 or reviewing your current coverage, a quick call can show you options you didn't know existed.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Belleville Medicare demographics and why plan choice matters here
        </h2>
        <p className="mb-2">
          Belleville sits in Essex County, one of the most densely populated counties in New Jersey. That density means more carriers compete for your business. More competition means better rates and more plan options for you.
        </p>
        <p>
          With the 2026 Part B premium at $185/month and the Part A deductible at $1,676 per benefit period, out-of-pocket costs add up fast if you only have Original Medicare. Choosing the right supplement or Advantage plan protects you from those gaps.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap and Medicare Advantage carriers available in 07109
        </h2>
        <p className="mb-2">
          Belleville's 07109 zip code has access to a strong mix of both Medigap and Medicare Advantage options. On the Medigap side, popular carriers in Essex County include Aetna, Cigna, Mutual of Omaha, and United American, among others.
        </p>
        <ul className="list-disc pl-6 mb-2 space-y-1">
          <li>Medigap Plan G - covers everything except the $257 annual Part B deductible</li>
          <li>Medigap Plan N - lower premiums with small copays at office visits</li>
          <li>Medicare Advantage (Part C) - $0 premium options with network-based coverage</li>
          <li>Part D prescription drug plans - standalone options if you choose a Medigap supplement</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I pull quotes from all available carriers so you see the real numbers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker saves Belleville residents money
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. I don't. As an independent broker, I compare plans across every carrier available in 07109. The plan you see from me costs the same as buying direct - carriers set the prices, not agents.
        </p>
        <p>
          The difference is that you get an honest side-by-side comparison instead of a sales pitch for one company's product. My compensation comes from the carrier, so my service costs you nothing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Turning 65 in Belleville? Lock in your Medigap rate early
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months from the month you turn 65 and have Part B. During this window, no health questions, no higher premiums. This is your best shot at the lowest rate.
        </p>
        <p>
          My practice is to have clients apply up to 6 months before their Part B start date. Locking in early protects you from premium increases before coverage even begins. The sooner you start, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Advantage open enrollment dates for 2026
        </h2>
        <p className="mb-2">
          If you prefer a Medicare Advantage plan, the Annual Enrollment Period runs October 15 through December 7. During this window you can switch Advantage plans or move between Advantage and Original Medicare.
        </p>
        <p>
          Already on an Advantage plan that's not working? The Medicare Advantage Open Enrollment Period from January 1 through March 31 lets you make one change.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Medicare consultation - phone or video
        </h2>
        <p className="mb-2">
          I work with Belleville residents by phone, video, or in person. A typical consultation takes about 20 minutes. You'll walk away with clear numbers and a recommendation based on your doctors, medications, and budget.
        </p>
        <p>
          No obligation. No pressure. Just the facts you need to make a smart decision.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Belleville?
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G in New Jersey: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-advantage-essex-county"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in Essex County
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/when-to-enroll-in-medicare-nj"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-vs-medicare-advantage-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap vs. Medicare Advantage in NJ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}