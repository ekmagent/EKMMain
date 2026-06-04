import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in neptune nj | Free No-Obligation Help | MedicareYourself",
  description:
    "Find a Medicare agent in Neptune, NJ for free, unbiased plan comparisons across top carriers. Anthony Orner helps Monmouth County residents—call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-neptune-nj" },
  openGraph: {
    title:
      "find a medicare agent in neptune nj | Free No-Obligation Help | MedicareYourself",
    description:
      "Find a Medicare agent in Neptune NJ for unbiased plan comparisons across top carriers. Anthony Orner offers free, licensed help for Monmouth County residents.",
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
      name: "Find a Medicare Agent in Neptune NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-neptune-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Neptune, NJ Who Puts Your Interests First",
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
    question: "How do I pick the right Medicare agent?",
    answer:
      "Look for an independent broker licensed in New Jersey who works with multiple carriers, not just one. Ask if they charge a fee (they shouldn't). A good agent will compare plans side by side, explain the tradeoffs honestly, and never pressure you into a decision.",
  },
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent costs you nothing. Carriers pay the broker directly, so you get the same plan at the same price whether you enroll alone or with professional help. The difference is you get someone who can sort through dozens of options and flag what actually fits your doctors and prescriptions.",
  },
  {
    question: "What Medicare plans are available in Neptune, NJ?",
    answer:
      "Neptune Township falls in Monmouth County, which has access to Medicare Advantage plans, Medigap (Medicare Supplement) policies, and standalone Part D drug plans from multiple carriers. Availability and rates vary by ZIP code, so a local comparison is the best way to see your options.",
  },
  {
    question: "When should I contact a Medicare agent if I'm turning 65?",
    answer:
      "Start at least three months before your 65th birthday. Your Initial Enrollment Period runs from three months before to three months after your birth month. For Medigap, your six-month open enrollment window starts the month you turn 65 and are enrolled in Part B.",
  },
,
  {
    question: "Do I have to pay a Medicare agent in Neptune, NJ?",
    answer:
      "No. Licensed Medicare brokers are compensated directly by the insurance carriers, not by you. Your plan premium is the same whether you enroll on your own or work with an independent agent, so there's no cost to compare options with professional help.",
  },
  {
    question: "Can a Medicare agent help me switch plans during the Annual Enrollment Period?",
    answer:
      "Yes. The Medicare Annual Enrollment Period runs from October 15 through December 7 each year, and an agent can review your current coverage, compare it against other plans available in Monmouth County, and handle the enrollment paperwork. Changes made during this window take effect January 1.",
  },
  {
    question: "What's the difference between a captive and independent Medicare agent?",
    answer:
      "A captive agent represents only one insurance carrier, so they can only offer that company's plans. An independent broker is appointed with multiple carriers and can compare options across the market, which usually leads to a better fit for your doctors, medications, and budget.",
  }
,
  {
    question: "Can a Medicare agent help me switch plans during the Annual Enrollment Period?",
    answer:
      "Yes. The Annual Enrollment Period runs October 15 through December 7 each year, and a licensed agent can review your current coverage, compare it against other available Medicare Advantage and Part D plans, and handle the enrollment paperwork. Changes you make during this window take effect January 1.",
  },
  {
    question: "Does a Medicare agent in Neptune know which local doctors take which plans?",
    answer:
      "A local independent agent can check provider directories for each Medicare Advantage plan to confirm whether your doctors and preferred hospitals in Monmouth County are in-network. With Medigap, network questions don't apply because you can see any provider nationwide who accepts Medicare.",
  },
  {
    question: "What information should I have ready before meeting with a Medicare agent?",
    answer:
      "Have your red, white, and blue Medicare card, a list of your current prescriptions with dosages, and the names of doctors and specialists you want to keep. This lets your agent run an accurate plan comparison based on your actual coverage needs rather than estimates.",
  }
,
  {
    question: "Can a Medicare agent in Neptune, NJ help me compare Medicare Advantage and Medigap?",
    answer:
      "Yes. An independent agent can walk you through the structural differences between Medicare Advantage and Medigap, including network rules, referral requirements, and how each interacts with Original Medicare. They can also model how your specific doctors, hospitals, and prescriptions fit under each option before you enroll.",
  },
  {
    question: "Does a Medicare agent help with Part D prescription drug plans?",
    answer:
      "Yes. A licensed agent can run your medication list through each available Part D plan to compare formularies, pharmacy networks, and total annual drug costs. This is especially useful during the Annual Enrollment Period when plans update their drug tiers and pricing.",
  }
];

export default function FindMedicareAgentNeptuneNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
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
          Find a Medicare Agent in Neptune NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find a Medicare Agent in Neptune, NJ Who Puts Your Interests First
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-neptune-nj.webp"
          alt="find a medicare agent in neptune nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in Neptune, NJ shouldn't feel like a second job. You need someone local who knows Monmouth County's provider networks and will show you every option, not just the one that pays them the highest commission.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, an independent licensed Medicare broker. I work with you at no cost and represent multiple carriers so the recommendation is always about your situation, not mine.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent broker serves Neptune Township differently
          </h2>
          <p className="mb-3">
            A captive agent sells one company's plans. I compare plans across carriers side by side. That means if one insurer drops your cardiologist at Jersey Shore University Medical Center or raises your Part D copay, I can move you to something better.
          </p>
          <p>
            You pay nothing for my help. Carriers pay brokers directly, and your premium stays the same whether you enroll on your own or through me.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Plans and carriers available in Monmouth County
          </h2>
          <p className="mb-2">Neptune Township residents (ZIP codes 07753, 07754) typically have access to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Medicare Advantage (HMO and PPO) from multiple national and regional carriers</li>
            <li>Medigap/Medicare Supplement plans (Plans A through N)</li>
            <li>Standalone Part D prescription drug plans</li>
          </ul>
          <p>
            Rates vary by carrier and ZIP code. A quick comparison call takes about 15 minutes and covers all of them.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Turning 65 in Neptune? Here's your enrollment timeline
          </h2>
          <p className="mb-3">
            Your Initial Enrollment Period starts three months before your 65th birthday and ends three months after. Miss it and you risk a Part B late enrollment penalty of 10% for every 12-month period you delayed.
          </p>
          <p className="mb-3">
            For Medigap, your six-month open enrollment window begins the month you're both 65 and enrolled in Part B. During this window, carriers can't deny you or charge more for health conditions. After it closes, underwriting applies.
          </p>
          <p>
            The 2026 Part B premium is $202.90/month. The Part B deductible is $283/year. The Part A deductible is $1,676 per benefit period.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why carrier network changes matter here
          </h2>
          <p className="mb-3">
            Healthcare in New Jersey moves fast. Hospitals and insurers renegotiate contracts regularly, and when a major system stops accepting a carrier, you can get caught off guard. That's exactly the kind of disruption an independent broker watches for on your behalf.
          </p>
          <p>
            If your doctors are at Hackensack Meridian (which operates Jersey Shore University Medical Center in Neptune), I'll confirm network status before recommending any plan.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Annual enrollment and plan reviews
          </h2>
          <p className="mb-3">
            Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 each year. I review your current plan against new options every fall to check for formulary changes, premium shifts, or better copay structures.
          </p>
          <p>
            This isn't a one-time relationship. Your needs change, and your plan should keep up.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free Medicare quote from Anthony Orner
          </h2>
          <p className="mb-3">
            One phone call. No obligation. I'll ask about your doctors, prescriptions, and budget, then show you what's available in Neptune Township so you can decide with real information.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready for a free Medicare comparison?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <section className="mt-10">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-10">
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
                Medicare Advantage in Monmouth County
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Turning 65 Medicare Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Plans in NJ
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov &mdash; Talk to Someone</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}