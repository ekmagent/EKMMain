import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "when can i change my medicare supplement plan for 2026 | Free Switching Help | MedicareYourself",
  description:
    "When can I change my Medicare Supplement plan for 2026? Learn Medigap switch rules, guaranteed-issue rights & underwriting. Free broker help — 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/when-can-i-change-my-medicare-supplement-plan-for-2026" },
  openGraph: {
    title:
      "when can i change my medicare supplement plan for 2026 | Free Switching Help | MedicareYourself",
    description:
      "When can I change my Medicare Supplement plan for 2026? Learn switch rules, guaranteed-issue rights, and underwriting timelines. Free help from a broker.",
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
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "When Can I Change My Medicare Supplement Plan for 2026",
      item: "https://medicareyourself.com/services/when-can-i-change-my-medicare-supplement-plan-for-2026",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "When Can I Change My Medicare Supplement Plan for 2026? Key Dates and Rules",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "What time of year can you change Medicare Supplement plans?",
    answer:
      "There's no annual enrollment period for Medigap. You can apply to switch carriers any time of year, but outside your 6-month Medigap Open Enrollment Period or a guaranteed-issue situation, the new carrier can require medical underwriting and may deny your application based on health history.",
  },
  {
    question: "Is it too late to change Medicare plans for 2026?",
    answer:
      "For Medicare Advantage and Part D, the annual enrollment window runs October 15 through December 7. For Medigap, there's no set deadline because no annual enrollment period exists. You can apply to switch your Medigap plan at any point, though approval outside protected windows depends on underwriting.",
  },
  {
    question: "How much will Medicare Supplement plans go up in 2026?",
    answer:
      "Rate increases vary by carrier, plan letter, your age, and your state. Annual increases of 5-12% are common, though some carriers in some years push higher. The carrier you're with matters as much as the plan letter because long-term rate behavior differs significantly between companies.",
  },
  {
    question:
      "Can I switch from one Plan G to another Plan G with a different carrier?",
    answer:
      "Yes. Plan G benefits are standardized by federal law, so every carrier's Plan G covers the same things. The difference is premium cost and long-term rate stability. If you qualify through underwriting or have a guaranteed-issue right, switching carriers for the same plan letter is a smart way to lower your costs.",
  },
];

export default function WhenCanIChangeMyMedicareSupplementPlanFor2026() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          When Can I Change My Medicare Supplement Plan for 2026
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        When Can I Change My Medicare Supplement Plan for 2026? Key Dates and
        Rules
      </h1>

      <Image
        src="/images/when-can-i-change-my-medicare-supplement-plan-for-2026.webp"
        alt="when can I change my Medicare Supplement plan for 2026"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        When can I change my Medicare Supplement plan for 2026? The short answer: you can apply to switch any time, but whether you'll get approved without health questions depends on your situation. Most people don't realize Medigap plays by completely different rules than Medicare Advantage.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        If your premiums jumped and you're wondering whether a switch makes sense before 2026 rates hit, here's what you actually need to know.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          There is no annual enrollment period for Medigap switches
        </h2>
        <p className="text-gray-700 mb-2">
          This trips people up constantly. Medicare Advantage and Part D use the October 15 through December 7 open enrollment window. Medigap doesn't.
        </p>
        <p className="text-gray-700">
          Your one federal right to buy any Medigap plan without health screening is the 6-month Medigap Open Enrollment Period. It starts the month you turn 65 and are enrolled in Part B. After that window closes, switching rules change dramatically.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Guaranteed-issue rights that let you change without underwriting
        </h2>
        <p className="text-gray-700 mb-3">
          Federal law gives you the right to buy a Medigap plan without medical questions in specific situations:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Your Medicare Advantage plan leaves your area or stops participating in Medicare</li>
          <li>You lose employer or union group coverage</li>
          <li>Your Medigap carrier goes bankrupt or violates its contract</li>
          <li>You moved out of your plan's service area (Medicare SELECT policies)</li>
          <li>You tried Medicare Advantage for the first time and want to return to Original Medicare within 12 months</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Some states offer additional protections beyond federal rules. Rules vary by state, so call to confirm what applies where you live.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How medical underwriting works if you switch outside a protected window
        </h2>
        <p className="text-gray-700 mb-2">
          Outside your open enrollment period or a guaranteed-issue event, insurers can ask about your health history. They can deny coverage, charge more, or exclude pre-existing conditions.
        </p>
        <p className="text-gray-700">
          That said, many people in decent health pass underwriting without issues. If you're relatively healthy and your current carrier raised rates 10-18% in a single year, switching to a more stable carrier can save you thousands over time. The application takes about 15 minutes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Steps to switch your Medigap plan before 2026 rates take effect
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Compare rates from multiple carriers for the same plan letter (Plan G from one company covers the same benefits as Plan G from another)</li>
          <li>Apply to the new carrier while keeping your current plan active</li>
          <li>Wait for approval from the new company</li>
          <li>Use your 30-day free-look period to confirm you're satisfied</li>
          <li>Cancel your old policy only after the new one is active</li>
        </ol>
        <p className="text-gray-700 mt-3">
          Never cancel your existing Medigap plan before your new one is confirmed in writing. You'll pay both premiums for one overlapping month. That's normal.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the carrier matters more than the plan letter
        </h2>
        <p className="text-gray-700 mb-2">
          People focus on the starting premium. That's the wrong number to watch. What matters is long-term rate behavior. Some carriers price low to attract new members, then raise rates aggressively once the pool ages.
        </p>
        <p className="text-gray-700">
          A $20/month difference at age 65 can become a $100/month gap by 78. I look at carrier rate history before recommending any switch. That's something you won't find on a comparison website.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Free help comparing your options
        </h2>
        <p className="text-gray-700">
          I'm Anthony Orner, a licensed Medicare broker. I work with dozens of Medigap carriers and there's no cost to you for my help. Carriers pay me the same regardless of which one you choose, so my only job is finding you the best long-term fit. One call, and I'll tell you exactly where you stand and whether switching makes financial sense before 2026.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-xl p-8 text-center">
        <p className="text-xl font-bold mb-2">
          Ready to see if you can save on your Medigap plan?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free comparison.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: Your One Best Window
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Enrollment: Deadlines and Penalties
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Can I change my Medigap policy? (Medicare.gov)</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies/switch-drop" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Can I switch or drop my Medigap policy? (Medicare.gov)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Your state may offer additional Medigap switching rights beyond federal law. Check with the <a href="https://www.shiphelp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling in your state.</div>
      </section>
    </main>
  );
}