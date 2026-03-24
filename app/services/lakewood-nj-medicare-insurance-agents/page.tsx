import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "lakewood nj medicare insurance agents | Free Rate Comparison | MedicareYourself",
  description:
    "Lakewood NJ Medicare insurance agents compare plans at no cost. Anthony Orner shops every top carrier in Ocean County. Free quote — call or book online.",
  alternates: { canonical: "https://medicareyourself.com/services/lakewood-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "lakewood nj medicare insurance agents | Free Rate Comparison | MedicareYourself",
    description:
      "Lakewood NJ Medicare insurance agents compare plans at no cost. Anthony Orner shops every top carrier in Ocean County. Free quote — call or book online.",
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
      name: "Lakewood NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/lakewood-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Lakewood NJ Medicare Insurance Agents: Independent Broker Services at No Cost to You",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/lakewood-nj-medicare-insurance-agents",
};

const faqs = [
  {
    question: "Do you need a Medicare insurance agent in Lakewood?",
    answer:
      "You're not required to use an agent, but an independent broker can compare plans across every major carrier in Ocean County at no cost to you. Carriers pay the broker, so you get professional guidance without a fee.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan. The right choice depends on your doctors, prescriptions, and budget. A Medigap Plan G or Plan N works well for many NJ residents, while some prefer a $0-premium Medicare Advantage plan. An independent agent can run a side-by-side comparison specific to your situation.",
  },
  {
    question: "Does Medicare have a local office near Lakewood NJ?",
    answer:
      "Medicare itself doesn't operate local offices. You can call 1-800-MEDICARE or work with a licensed independent agent in Ocean County who can meet in person, by phone, or on video to handle enrollment and plan questions.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "Call 1-800-MEDICARE (1-800-633-4227) for general questions, or call a local independent broker like Anthony Orner at 855-559-1700 for personalized plan comparisons at no charge.",
  },
];

export default function LakewoodNJMedicareInsuranceAgents() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> /{" "}
        <Link href="/services">Medicare Guides</Link> /{" "}
        <span>Lakewood NJ Medicare Insurance Agents</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Lakewood NJ Medicare Insurance Agents: Independent Broker Services at
          No Cost to You
        </h1>

        <Image
          src="/images/hub_lakewood-nj-medicare-insurance-agents.webp"
          alt="Lakewood NJ Medicare insurance agents"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Lakewood NJ Medicare insurance agents who work independently can shop
          every major carrier in Ocean County for you. I'm Anthony Orner, a
          licensed broker who compares Medigap and Advantage plans side by side
          so you don't have to call ten different companies yourself.
        </p>
        <p className="mb-6">
          My service costs you nothing. Carriers pay my commission, and the
          rates you see through me are the same rates you'd get going direct.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How independent agents save Lakewood residents money
          </h2>
          <p className="mb-2">
            A captive agent represents one carrier. I represent dozens. That
            means I can show you where the real price differences are between
            plans with identical coverage.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Medigap Plan G premiums can vary by $80+/month between carriers for the same standardized benefits</li>
            <li>Medicare Advantage copays and networks differ sharply across Ocean County</li>
            <li>I track rate increases year over year so you're not locked into a carrier that hikes prices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement vs. Advantage plans in Ocean County
          </h2>
          <p className="mb-2">
            Medicare Supplement (Medigap) plans let you see any doctor who
            accepts Medicare nationwide. You pay a monthly premium and have
            little to no cost-sharing at the point of care.
          </p>
          <p className="mb-2">
            Medicare Advantage plans often carry $0 premiums and bundle dental,
            vision, and hearing. But they use provider networks. In Lakewood,
            that means checking whether your doctors at Community Medical Center,
            Monmouth Medical, or specialists along Route 9 are in-network before
            you enroll.
          </p>
          <p>
            Neither option is universally better. It depends on how often you
            see specialists, which prescriptions you take, and whether you
            travel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common enrollment mistakes Lakewood seniors make
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Missing the Medigap open enrollment window.</strong> You
              get 6 months starting the month you turn 65 and have Part B.
              After that, carriers can deny you or charge more based on health.
            </li>
            <li>
              <strong>Assuming all Advantage plans cover the same doctors.</strong>{" "}
              Networks change every year. A plan that covered your cardiologist
              last year may not this year.
            </li>
            <li>
              <strong>Skipping Part D.</strong> If you delay Part D enrollment
              without creditable coverage, you'll pay a permanent late penalty
              of 1% per month you waited.
            </li>
            <li>
              <strong>Not checking carrier network changes.</strong> Real people
              in South Jersey have lost access to major health systems
              mid-plan-year when carriers and providers couldn't agree on
              contracts. An independent agent watches for these disruptions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why local knowledge matters in Ocean County
          </h2>
          <p className="mb-2">
            Lakewood has one of Ocean County's fastest-growing senior
            populations. That means provider availability is tight. Finding a
            primary care doctor who accepts your plan and takes new patients
            isn't always simple.
          </p>
          <p>
            I check provider directories before recommending any plan. If your
            doctors aren't in-network, the plan isn't a fit, no matter how low
            the premium looks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2026 costs you should know
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>SNF coinsurance (days 21-100): $209.50/day</li>
            <li>Open Enrollment for Advantage/Part D: October 15 through December 7</li>
          </ul>
          <p className="mt-2">
            These numbers add up fast without supplemental coverage. A single
            hospital stay could cost you $1,676 out of pocket before Original
            Medicare pays anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free side-by-side rate comparison
          </h2>
          <p className="mb-2">
            I'll pull quotes from every top carrier available in the 08701 area
            and lay them out so you can see exactly what each plan covers and
            what it costs. No obligation. No pressure.
          </p>
          <p>
            Call me or book a time online. Most comparisons take about 15
            minutes.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed independent broker today
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 underline"
              >
                When to Enroll in Medicare
              </Link>
            </li>
            <li>
              <Link
                href="/services/lakewood-nj-medicare-insurance-agents"
                className="text-blue-600 underline"
              >
                Ocean County Medicare Broker Services
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}