import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "local medicare agents in sicklerville nj | Free Broker Help | MedicareYourself",
  description:
    "Local Medicare agents in Sicklerville, NJ — Anthony Orner is a licensed broker comparing Medigap and Advantage plans in Camden County. Free consultation.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-sicklerville-nj" },
  openGraph: {
    title:
      "local medicare agents in sicklerville nj | Free Broker Help | MedicareYourself",
    description:
      "Local Medicare agents in Sicklerville, NJ — Anthony Orner is a licensed broker comparing Medigap and Advantage plans in Camden County. Free consultation.",
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
      name: "Local Medicare Agents in Sicklerville, NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-sicklerville-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Sicklerville, NJ — Licensed Broker for Camden County",
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
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like NJ PAAD and Lifeline that help eligible residents cover Medicare premiums and prescription costs. You may also qualify for Medicare Savings Programs through the state. Call us at 855-559-1700 and we can check which programs apply to your situation.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who works with multiple carriers rather than one company. An independent broker can compare plans side by side and isn't locked into selling you a single insurer's product. Ask if consultations are free and whether they help with claims or plan changes after enrollment.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) to reach the federal helpline. But for personalized plan comparisons in Sicklerville, call a local broker at 855-559-1700. You'll talk to a real person who knows Camden County providers.",
  },
  {
    question:
      "Is there a cost to use a local Medicare broker in Sicklerville?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. Our consultations and plan comparisons are completely free.",
  },
];

export default function LocalMedicareAgentsSicklerville() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocalServiceSchema citySlug="sicklerville" />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Local Medicare Agents in Sicklerville, NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Local Medicare Agents in Sicklerville, NJ — Licensed Broker for Camden
          County
        </h1>

        <Image
          src="/images/local-medicare-agents-in-sicklerville-nj.webp"
          alt="local medicare agents in sicklerville nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Sicklerville, NJ can save you hours of
          frustration by comparing plans that actually work with your doctors and
          prescriptions. I'm Anthony Orner, an independent licensed broker
          serving Camden County. My consultations are always free.
        </p>
        <p className="text-lg mb-6">
          South Jersey residents know the headaches: providers dropping
          insurance networks, surprise billing issues, and the stress of finding
          doctors who accept your coverage. A local broker who understands this
          area can help you avoid those problems before they start.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Sicklerville residents benefit from an independent broker
          </h2>
          <p className="mb-3">
            Big insurance company agents sell one carrier's products. I work with
            multiple carriers, so I can show you what's actually best for your
            situation rather than what earns the highest commission.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Side-by-side plan comparisons at no cost to you</li>
            <li>Help verifying your doctors are in-network before you enroll</li>
            <li>Ongoing support after enrollment for claims or plan changes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap and Medicare Advantage plans in Camden County
          </h2>
          <p className="mb-3">
            Sicklerville sits in the 08081 zip code within Camden County, and
            you'll have access to both Medigap (Medicare Supplement) and
            Medicare Advantage options. The difference matters.
          </p>
          <p className="mb-3">
            Medigap plans cover gaps in Original Medicare. You keep full
            provider choice and pay a monthly premium. Medicare Advantage
            bundles everything into one plan, often with $0 premiums but
            narrower networks. With providers like Virtua and Jefferson Health
            nearby, confirming network access is critical before picking a plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Turning 65 in Sicklerville: your open enrollment timeline
          </h2>
          <p className="mb-3">
            Your Medigap Open Enrollment Period lasts 6 months, starting the
            month you turn 65 and are enrolled in Part B. During this window,
            carriers must accept you regardless of health history. Miss it and
            you may face medical underwriting or higher rates.
          </p>
          <p className="mb-3">
            If you want the best Medigap rate, apply up to 6 months before your
            Part B start date to lock in pricing. For Medicare Advantage or Part
            D, the Annual Enrollment Period runs October 15 through December 7.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2026 Medicare costs you should know
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,736 per benefit period</li>
            <li>Skilled nursing facility coinsurance (days 21-100): $217.00/day</li>
            <li>
              Part B late enrollment penalty: 10% for every 12-month period you
              delayed
            </li>
          </ul>
          <p className="mt-3">
            These costs add up fast. A Medigap plan or the right Advantage plan
            can protect you from unexpected bills.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Network changes happen here: plan accordingly
          </h2>
          <p className="mb-3">
            South Jersey has seen major providers adjust their insurance
            agreements recently. If your doctors or hospital systems change
            networks, you could lose coverage mid-year. An independent broker
            monitors these shifts and can help you switch plans when guaranteed
            issue rights apply.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free Medicare plan comparison today
          </h2>
          <p className="mb-3">
            Whether you're turning 65, leaving employer coverage, or just
            unhappy with your current plan, I'll walk you through your options
            for Camden County. No pressure, no cost, no obligation.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or use the link below to get
            started.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who knows Sicklerville
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in Camden County
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Turning 65 in NJ: Your Complete Medicare Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
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
            <li>
              <Link
                href="/services/local-medicare-agents-in-sayreville-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Sayreville NJ
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Plan Compare</a> and <a href="https://www.cms.gov/medicare/enrollment-renewal/health-plans/eligibility" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">CMS Medicare Eligibility</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}