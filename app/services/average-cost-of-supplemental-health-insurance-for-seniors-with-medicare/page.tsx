import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "average cost of supplemental health insurance for seniors with medicare | Free Broker Comparison | MedicareYourself",
  description:
    "Average cost of supplemental health insurance for seniors with Medicare runs $90–$300+/month. See real rates by plan, age, and state. Free comparison.",
  openGraph: {
    title:
      "average cost of supplemental health insurance for seniors with medicare | Free Broker Comparison | MedicareYourself",
    description:
      "Average cost of supplemental health insurance for seniors with Medicare runs $90–$300+/month. See real rates by plan, age, and state. Free comparison.",
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
      name: "Average Cost of Supplemental Health Insurance for Seniors With Medicare",
      item: "https://www.medicareyourself.com/services/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Average Cost of Supplemental Health Insurance for Seniors With Medicare: What the Data Shows",
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
  datePublished: "2025-01-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question:
      "What is the average monthly cost of a Medigap plan for a 65-year-old?",
    answer:
      "Most 65-year-olds pay between $90 and $200 per month for popular Medigap plans like Plan G or Plan N. Your exact rate depends on your state, carrier, gender, and tobacco use. Rates vary significantly between insurance companies for the same plan letter, so comparing carriers is essential.",
  },
  {
    question:
      "Is Medicare Supplement insurance cheaper than Medicare Advantage?",
    answer:
      "Medicare Advantage plans often have $0 monthly premiums, but you pay copays and coinsurance at the point of care. Medigap premiums are higher monthly but cover most or all out-of-pocket costs when you see a doctor or go to the hospital. Total annual spending depends on how much care you actually use.",
  },
  {
    question: "Do Medigap premiums go up every year?",
    answer:
      "Yes, Medigap premiums typically increase annually due to medical inflation and, with some pricing methods, your age. Attained-age policies rise as you get older. Issue-age policies are based on the age you bought the plan, so they increase more slowly over time.",
  },
  {
    question: "When is the best time to buy a Medigap plan to get the lowest rate?",
    answer:
      "Your Medigap Open Enrollment Period, which is the 6 months starting the month you turn 65 and are enrolled in Part B, gives you guaranteed acceptance at the lowest available rate. After that window, carriers can charge more or deny coverage based on health history.",
  },
];

export default function AverageCostSupplementalHealthInsurancePage() {
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
          Average Cost of Supplemental Health Insurance for Seniors With Medicare
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-snug">
        Average Cost of Supplemental Health Insurance for Seniors With Medicare: What the Data Shows
      </h1>

      <Image
        src="/images/average-cost-of-supplemental-health-insurance-for-seniors-with-medicare.webp"
        alt="average cost of supplemental health insurance for seniors with medicare"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Average cost of supplemental health insurance for seniors with Medicare falls between roughly $90 and $300+ per month, depending on the plan type, your age, where you live, and the carrier. That range confuses people because it covers two very different products: Medigap and Medicare Advantage.
      </p>
      <p className="text-lg mb-6">
        Here&apos;s what real rates look like in 2025 and 2026, broken down so you can actually compare.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage — two different cost structures
        </h2>
        <p className="mb-3">
          Medigap (Medicare Supplement) charges a monthly premium on top of your Part B premium ($202.90/month in 2026). In return, it covers most or all of your out-of-pocket costs when you use healthcare. Popular plans like G and N typically run $90 to $250/month for new enrollees.
        </p>
        <p className="mb-3">
          Medicare Advantage often has a $0 monthly premium but charges copays, coinsurance, and has an annual out-of-pocket maximum. If you use little care, Advantage looks cheaper. If you have a hospitalization or surgery, Medigap usually saves you thousands.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          National averages vs. what NJ and PA seniors actually pay
        </h2>
        <p className="mb-3">
          National averages are useful as a starting point, but premiums vary by state and even by county. In New Jersey and Pennsylvania, here&apos;s what I typically see for Plan G:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>Age 65, female, non-tobacco: $110–$170/month depending on carrier</li>
          <li>Age 65, male, non-tobacco: $125–$195/month</li>
          <li>Age 75, female, non-tobacco: $150–$260/month</li>
          <li>Age 75, male, tobacco user: $200–$300+/month</li>
        </ul>
        <p>
          The same plan letter from different carriers can differ by $50–$80/month. That&apos;s why shopping matters.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How age, gender, and tobacco use affect your premium
        </h2>
        <p className="mb-3">
          Three pricing methods exist for Medigap. Attained-age pricing adjusts your premium as you get older each year. Issue-age pricing locks in a rate based on when you buy. Community-rated plans charge everyone the same base rate regardless of age.
        </p>
        <p className="mb-3">
          On top of that, most carriers charge men more than women, and tobacco users pay 10–25% more than non-tobacco users. A 65-year-old non-smoking woman often pays the lowest rate available for any given plan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why the same plan letter costs different amounts from different carriers
        </h2>
        <p className="mb-3">
          Every Plan G covers the exact same benefits. The difference is the premium. One carrier might charge $120/month while another charges $195 for identical coverage. Medicare.gov confirms this: &quot;There can be big differences in the premiums that different insurance companies charge for the same coverage.&quot;
        </p>
        <p>
          This is the single biggest thing most seniors miss. You don&apos;t need to compare benefits between plan letters and carriers at the same time. Pick your plan letter, then compare carriers on price and financial stability.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Your open enrollment window locks in the best rate
        </h2>
        <p className="mb-3">
          During your 6-month Medigap Open Enrollment Period (starts the month you turn 65 and enroll in Part B), every carrier must accept you at their best price regardless of health history. Miss that window and carriers can underwrite you, charge more, or decline your application.
        </p>
        <p>
          If you&apos;re approaching 65, start comparing at least 2–3 months before your Part B effective date so you have time to review options without rushing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Request a side-by-side carrier comparison at no cost
        </h2>
        <p className="mb-3">
          I pull quotes from multiple carriers and lay them next to each other so you can see exactly what you&apos;d pay. No cost to you, no obligation. Carriers pay the broker, not you, and the premium is the same whether you use a broker or go direct.
        </p>
        <p>
          One call gets you a clear picture of what supplemental coverage actually costs for your specific age, zip code, and health profile.
        </p>
      </section>

      <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-bold mb-2">
          See your real Medigap rates in minutes.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker — NJ &amp; PA
        </p>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-3">
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
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/when-to-enroll-in-medigap"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medigap: Open Enrollment Explained
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
        </ul>
      </section>
    </main>
  );
}