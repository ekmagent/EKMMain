import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "irvington nj medicare insurance agents | Free Local Broker | MedicareYourself",
  description:
    "Irvington NJ Medicare insurance agents — Anthony Orner compares Supplement & Advantage plans free. Call 855-559-1700 for honest local guidance today.",
  alternates: { canonical: "https://medicareyourself.com/services/irvington-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "irvington nj medicare insurance agents | Free Local Broker | MedicareYourself",
    description:
      "Irvington NJ Medicare insurance agents — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans in Essex County. Free quote.",
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
      name: "Irvington NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/irvington-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Irvington NJ Medicare Insurance Agents — Licensed Broker Serving Essex County",
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
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, and budget. An independent broker compares Supplement and Advantage options across multiple carriers so you can see what actually fits your situation in Essex County.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions. For plan-specific help in Irvington, call a local independent broker like Anthony Orner at 855-559-1700. You'll reach a real person, not a call center queue.",
  },
  {
    question: "Does it cost extra to use a Medicare insurance agent in Irvington?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, not by you. The premiums you pay are the same whether you enroll directly or through a broker. The difference is you get someone who shops multiple carriers on your behalf.",
  },
  {
    question: "When should I contact a broker before turning 65?",
    answer:
      "Reach out about six months before your 65th birthday. That gives you time to compare plans during your Medigap Open Enrollment Period, when carriers must accept you regardless of health history and offer their best rates.",
  },
];

export default function IrvingtonNJMedicareInsuranceAgents() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Irvington NJ Medicare Insurance Agents</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Irvington NJ Medicare Insurance Agents — Licensed Broker Serving Essex County
      </h1>

      <Image
        src="/images/irvington-nj-medicare-insurance-agents.webp"
        alt="Irvington NJ Medicare insurance agents"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Irvington NJ Medicare insurance agents aren't all the same. Some represent one carrier. I'm Anthony Orner, an independent broker licensed in New Jersey, and I compare plans from multiple carriers so Irvington residents see real options side by side.
      </p>
      <p className="mb-6">
        No cost for my help. No pressure. Just clear answers about what each plan covers and what it costs in 07111.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What an independent broker offers Irvington Medicare beneficiaries
        </h2>
        <p className="mb-2">
          A captive agent sells one company's plans. I work with multiple carriers, which means I can show you where the gaps are and where you might overpay.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Side-by-side comparison of Supplement and Advantage plans</li>
          <li>Prescription drug plan (Part D) review for your specific medications</li>
          <li>Help with enrollment paperwork and carrier applications</li>
          <li>Ongoing support if a carrier drops your doctor or changes networks</li>
        </ul>
        <p>
          Network disruptions happen in New Jersey. When a major health system stops accepting a carrier, you need someone who can quickly find your next best option.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans in Irvington 07111
        </h2>
        <p className="mb-2">
          Medicare Supplement (Medigap) plans cover the gaps Original Medicare leaves behind. Plan G is the most popular standardized option: it covers the Part A deductible ($1,676 in 2026), skilled nursing coinsurance ($209.50/day for days 21-100), and Part B excess charges.
        </p>
        <p>
          Medicare Advantage plans bundle Part A, Part B, and usually Part D into one plan. Many have $0 premiums in Essex County, but they use provider networks. If your doctors are at University Hospital Newark or Clara Maass Medical Center, check that they're in-network before you enroll.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Essex County carrier options and how premiums are rated
        </h2>
        <p className="mb-2">
          New Jersey Medigap carriers use different rating methods. Some use attained-age rating, where your premium rises as you get older. Others use community rating, where everyone pays the same base rate regardless of age.
        </p>
        <p>
          The rating method matters more than the starting price. A plan that's $20/month cheaper at 65 could cost significantly more by 75 under attained-age pricing. I'll show you the long-term math.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for Irvington residents turning 65
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts six months. During this window, carriers can't deny you or charge more for health conditions.
        </p>
        <p>
          Miss it, and you may face medical underwriting. Start the conversation about six months before your birthday so there's time to compare without rushing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          2026 Medicare costs you should know
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,676 per benefit period</li>
          <li>Part B late enrollment penalty: 10% for each 12-month period you delayed</li>
          <li>Medicare Advantage/Part D Open Enrollment: October 15 through December 7</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free Irvington Medicare plan review
        </h2>
        <p className="mb-2">
          Whether you're turning 65, retiring from a job with group coverage, or unhappy with your current plan, I'll walk you through your options. Phone, video, or in-person if you're in Essex County.
        </p>
        <p>
          Call <strong>855-559-1700</strong> or use the link below. No forms, no obligation.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Irvington?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> for a free, no-obligation plan review.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/find-a-medicare-agent-in-newark-nj"
              className="text-blue-600 hover:underline"
            >
              Newark NJ Medicare Insurance Agents
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period Explained
            </Link>
          </li>
                    <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get started with Medicare (Medicare.gov)</a> &middot; <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="underline">Compare plans on Medicare.gov</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
    </main>
  );
}