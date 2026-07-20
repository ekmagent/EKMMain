import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "find a medicare agent in monroe township nj | Free Plan Review | MedicareYourself",
  description:
    "Find a Medicare agent in Monroe Township NJ — Anthony Orner compares Supplement and Advantage carriers for Middlesex County residents. Free plan review.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-monroe-township-nj" },
  openGraph: {
    title:
      "find a medicare agent in monroe township nj | Free Plan Review | MedicareYourself",
    description:
      "Find a Medicare agent in Monroe Township NJ — Anthony Orner compares Supplement and Advantage carriers for Middlesex County residents. Free plan review.",
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
      name: "Find a Medicare Agent in Monroe Township, NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-monroe-township-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Monroe Township, NJ Who Puts Your Interests First",
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
      "New Jersey offers programs like NJ PAAD (Pharmaceutical Assistance to the Aged and Disabled) and the Medicare Savings Program that can help cover Part B premiums and drug costs. Income limits apply. Call us at 855-559-1700 and we'll help you check eligibility.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. Ask if they charge a fee (they shouldn't — brokers are paid by the insurance carrier, not you). A good agent will compare plans side by side and explain tradeoffs honestly.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "Call 1-800-MEDICARE (1-800-633-4227), available 24/7. But if you want someone local who knows Middlesex County providers and can compare your actual plan options, call our office at 855-559-1700 for a free consultation.",
  },
  {
    question: "Is there a cost to work with a Medicare broker in Monroe Township?",
    answer:
      "No. Independent Medicare brokers like Anthony Orner are compensated by the insurance carriers. You pay the same premium whether you enroll directly or through a broker — but you get expert guidance at no extra cost.",
  },
];

export default function FindMedicareAgentMonroeTownshipNJ() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <LocalServiceSchema citySlug="monroe-township" />

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
          Find a Medicare Agent in Monroe Township, NJ
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Find a Medicare Agent in Monroe Township, NJ Who Puts Your Interests First
      </h1>

      <Image
        src="/images/find-a-medicare-agent-in-monroe-township-nj.webp"
        alt="Find a Medicare agent in Monroe Township NJ"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Finding a Medicare agent in Monroe Township, NJ shouldn't mean fielding robocalls from strangers reading scripts. I'm Anthony Orner, an independent broker based right here in New Jersey. I compare plans from multiple carriers so you see real options, not a one-company sales pitch.
      </p>
      <p className="text-lg mb-6">
        My service is free. Carriers pay me, not you. Your premium stays the same either way.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Monroe Township's 55+ communities need independent broker access
        </h2>
        <p className="mb-3">
          Monroe Township has one of the highest concentrations of active-adult communities in Middlesex County. Concordia, Rossmoor, Clearbrook, Monroe Village — thousands of residents turning 65 or reviewing plans every year. Many get flooded with mailers from captive agents who only sell one carrier.
        </p>
        <p>
          An independent broker works differently. I represent multiple Supplement and Advantage carriers, so I can show you what actually fits your doctors, your prescriptions, and your budget.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement rates for Monroe Township residents in 2025–2026
        </h2>
        <p className="mb-3">
          Medigap premiums in Middlesex County vary by carrier, age, and tobacco use. Plan G and Plan N are the most popular options right now. Rates vary by carrier, but I can pull real-time quotes for your specific situation in minutes.
        </p>
        <p>
          If you're turning 65, your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During that 6-month window, carriers can't deny you or charge more for health conditions. Apply up to 6 months before your Part B start date to lock in the best rate.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Advantage plan networks that cover CentraState and local providers
        </h2>
        <p className="mb-3">
          Many Monroe Township residents use CentraState Medical Center in Freehold, Robert Wood Johnson University Hospital in New Brunswick, or Penn Medicine Princeton Medical Center. Not every Medicare Advantage plan includes all three in-network.
        </p>
        <p>
          I verify network coverage for your specific doctors and hospitals before recommending any plan. No surprises at the front desk.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Key 2026 Medicare costs you should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Part B premium: $202.90/month</li>
          <li>Part B deductible: $283/year</li>
          <li>Part A deductible: $1,736 per benefit period</li>
          <li>SNF coinsurance (days 21–100): $217.00/day</li>
          <li>Part B late enrollment penalty: 10% for each 12-month period you delayed</li>
        </ul>
        <p className="mt-3">
          These numbers add up fast without the right coverage. A Supplement plan or a well-chosen Advantage plan can protect you from the biggest out-of-pocket hits.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What makes a good Medicare agent (and what to avoid)
        </h2>
        <p className="mb-3">
          Scam calls posing as "Medicare representatives" are a real problem. They ask for your Medicare number, your Social Security number, or pressure you into quick decisions. A legitimate broker will never do that.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Look for a state-licensed, independent broker (not tied to one carrier)</li>
          <li>Never give your Medicare ID to an unsolicited caller</li>
          <li>A real broker will meet with you, answer questions, and let you decide on your timeline</li>
          <li>You should never pay a fee for Medicare enrollment help</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Book a free consultation with Anthony Orner
        </h2>
        <p className="mb-3">
          I work with Monroe Township residents year-round. Whether you're aging into Medicare, losing employer coverage, or just want a second opinion on your current plan, I'll give you a straight answer.
        </p>
        <p>
          Medicare Advantage and Part D Open Enrollment runs October 15 through December 7. But if you're turning 65 or have a qualifying life event, we can work together anytime.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a local Medicare broker who knows Monroe Township
        </p>
        <p className="text-lg mb-4">
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

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

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
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in NJ: What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/services/find-a-medicare-agent-in-new-brunswick-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker in Middlesex County, NJ
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
                href="/services/find-a-medicare-agent-in-mount-laurel-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Mount Laurel NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-neptune-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Neptune NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-north-bergen-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In North Bergen NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-passaic-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Passaic NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-paterson-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Paterson NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-piscataway-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Piscataway NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-plainfield-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Plainfield NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agent"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agent
              </Link>
            </li>
            <li>
              <Link
                href="/services/tampa-medicare-agent"
                className="text-blue-600 hover:underline"
              >
                Tampa Medicare Agent
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Compare Medicare plans on Medicare.gov</a> or review <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a> from CMS.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}