import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare supplement plan (medigap) premium hikes | Free Rate Review | MedicareYourself",
  description:
    "Medicare supplement plan (medigap) premium hikes average 8–15% yearly with some carriers. Learn why rates rise, when to switch, and get a free rate review.",
  openGraph: {
    title:
      "medicare supplement plan (medigap) premium hikes | Free Rate Review | MedicareYourself",
    description:
      "Medicare supplement plan (medigap) premium hikes average 8–15% yearly with some carriers. Learn why rates rise, when to switch, and get a free rate review.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medigap Premium Hikes",
      item: "https://medicareyourself.com/services/medicare-supplement-plan-medigap-premium-hikes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Plan (Medigap) Premium Hikes: What's Driving Them and What You Can Do",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Why does my Medigap premium go up every year?",
    answer:
      "Medigap premiums rise due to medical inflation, your aging into a higher risk pool (attained-age pricing), and general rate adjustments filed by the carrier with your state's insurance department. Some carriers raise rates more aggressively than others for the same plan letter.",
  },
  {
    question: "Can I switch Medigap plans without answering health questions?",
    answer:
      "In most cases, switching Medigap carriers outside your initial open enrollment requires medical underwriting. However, certain federal guaranteed issue rights apply if you lose coverage due to your plan leaving your area, a carrier going bankrupt, or losing employer/union group coverage. Some states offer additional protections. Call to confirm the rules in your state.",
  },
  {
    question: "Is a Medigap rate increase the same across all plan letters?",
    answer:
      "No. Each carrier files rate increases separately for each plan letter. Your Plan G might get an 8% hike while Plan N from the same company gets 4%. Different carriers selling the same plan letter can also have very different rate histories.",
  },
  {
    question:
      "How do I find out if another carrier has a lower rate for the same Medigap plan?",
    answer:
      "A licensed Medicare broker can compare current premiums across all carriers in your area for the same plan letter. The benefits are identical by law, so the only difference is the premium. Call 855-559-1700 for a free rate comparison.",
  },
];

export default function MedigapPremiumHikesPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>
          {" > "}
          <span className="text-gray-700">Medigap Premium Hikes</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Medicare Supplement Plan (Medigap) Premium Hikes: What's Driving Them and What You Can Do
        </h1>

        <Image
          src="/images/medicare-supplement-plan-medigap-premium-hikes.webp"
          alt="Medicare supplement plan medigap premium hikes"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Medicare supplement plan (Medigap) premium hikes catch people off guard every year. You open that renewal letter, see an 8-15% jump, and wonder if you're stuck paying it. You're not.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The same Plan G or Plan N benefits are standardized by federal law. That means every carrier selling Plan G offers identical coverage. The only variable is price - and price is where the real differences show up.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Three pricing methods that determine how fast your rate climbs
          </h2>
          <p className="text-gray-700 mb-2">
            According to Medicare.gov, insurance companies use one of three pricing approaches for Medigap policies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Community-rated (no-age-rated):</strong> Everyone pays the same premium regardless of age. Your rate still rises with inflation, but not because you got older.
            </li>
            <li>
              <strong>Issue-age-rated:</strong> Your premium is based on the age you were when you bought the policy. Younger buyers lock in a lower starting rate, though general increases still apply.
            </li>
            <li>
              <strong>Attained-age-rated:</strong> Your premium goes up as you age, on top of any general rate increases. This is the most common method - and the one that stings the most at renewal time.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            2024-2025 rate increases by carrier and plan letter
          </h2>
          <p className="text-gray-700 mb-2">
            Rate hikes vary widely. One carrier might raise Plan G by 5% while another raises the same plan by 14%. These increases are filed with and approved by your state's department of insurance.
          </p>
          <p className="text-gray-700">
            I track rate filings across carriers in New Jersey and surrounding states. Some carriers have a consistent history of moderate increases. Others spike one year and hold the next. The pattern matters when you're choosing where to put your money. Rates vary by carrier - call me and I'll pull the specifics for your zip code.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            When switching carriers saves you money without new underwriting
          </h2>
          <p className="text-gray-700 mb-2">
            Outside your initial Medigap Open Enrollment Period (the 6 months starting when you're 65+ and enrolled in Part B), most carriers require medical underwriting to switch. That means health questions and possible denial.
          </p>
          <p className="text-gray-700 mb-2">
            But federal guaranteed issue rights kick in under specific circumstances: your carrier leaves your area, goes bankrupt, or you lose employer/union coverage, among others. Some states offer additional switch protections. Rules vary by state - call to confirm yours.
          </p>
          <p className="text-gray-700">
            If you're healthy enough to pass underwriting, switching to a lower-cost carrier for the same plan letter is straightforward. Same benefits, lower premium. That's the whole point.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How a broker monitors your rate and moves you before the next hike
          </h2>
          <p className="text-gray-700 mb-2">
            Most people buy a Medigap policy and never look at it again - until the premium hits $300 or $400 a month. That's where I come in.
          </p>
          <p className="text-gray-700">
            I review my clients' Medigap rates annually. When I see a carrier filing a large increase, I run a comparison across every available carrier in your area. If there's a better deal for the same coverage and you can qualify, I handle the switch. No cost to you - brokers are paid by the carrier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why locking in early matters for new enrollees
          </h2>
          <p className="text-gray-700 mb-2">
            If you're approaching 65 and planning to get Part B, you can apply for a Medigap plan up to 6 months before your Part B start date. This locks in your rate early and protects you from any premium increases that happen before your coverage even begins.
          </p>
          <p className="text-gray-700">
            The sooner you lock in, the better your rate. Waiting costs real money.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Same plan letter, different price - compare before you renew
          </h2>
          <p className="text-gray-700 mb-2">
            A Plan G from one company is identical to a Plan G from another company. That's federal law. The only difference is the premium. There can be big differences in what different companies charge for the exact same coverage.
          </p>
          <p className="text-gray-700">
            Before you pay that next renewal, spend five minutes on a call. You might save $40 or $80 a month for coverage you already have.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Get a free Medigap rate comparison
          </p>
          <p className="text-gray-700 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
              request a free quote online
            </Link>
            .
          </p>
          <p className="text-sm text-gray-500">
            Anthony Orner, Licensed Medicare Broker
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G: Full Breakdown
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plan-n"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan N: When It Makes Sense
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment: Your 6-Month Window
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-vs-medicare-advantage"
                className="text-blue-700 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which Is Right for You?
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}