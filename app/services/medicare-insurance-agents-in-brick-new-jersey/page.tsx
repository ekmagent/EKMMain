import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in brick new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Brick, New Jersey — Anthony Orner is a licensed independent broker serving Ocean County. Compare plans free, no obligation.",
  openGraph: {
    title:
      "medicare insurance agents in brick new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Brick, New Jersey — Anthony Orner is a licensed independent broker serving Ocean County. Compare plans free, no obligation.",
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
      name: "Medicare Insurance Agents in Brick, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-brick-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Brick, New Jersey: Local, Licensed, and Independent",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans across multiple carriers at no cost to you. Agents are paid by the insurance companies, so there's no fee for their help. An independent broker can show you options a single-carrier agent cannot.",
  },
  {
    question: "How do I pick a Medicare agent in Brick, NJ?",
    answer:
      "Look for an independent broker who is licensed in New Jersey, represents multiple carriers, and does not charge you a fee. Ask if they help with both Medicare Supplement and Medicare Advantage plans. Avoid agents who pressure you into one plan type without explaining alternatives.",
  },
  {
    question: "What are the different types of Medicare agents?",
    answer:
      "Captive agents represent one insurance company. Independent brokers represent many carriers and can show you a wider range of plans. Both are free to use. An independent broker gives you more options to compare side by side.",
  },
  {
    question:
      "When is the best time to enroll in a Medicare plan in Brick, NJ?",
    answer:
      "For Medigap, your best window is the 6-month Medigap Open Enrollment Period starting the month you turn 65 and have Part B. For Medicare Advantage and Part D, Open Enrollment runs October 15 through December 7 each year.",
  },
];

export default function MedicareInsuranceAgentsBrickNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Brick, New Jersey
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Insurance Agents in Brick, New Jersey: Local, Licensed, and
          Independent
        </h1>

        <Image
          src="/images/hub_medicare-insurance-agents-in-brick-new-jersey.webp"
          alt="Medicare insurance agents in Brick New Jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare insurance agents in Brick, New Jersey help you cut through
          confusing plan options without costing you a dime. I'm Anthony Orner,
          an independent broker licensed in NJ who works with residents across
          Ocean County.
        </p>
        <p className="text-lg mb-6">
          My job is to show you what's actually available for your ZIP code,
          doctors, and prescriptions. No obligation, no pressure.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Brick Township residents benefit from an independent broker
          </h2>
          <p className="mb-3">
            Captive agents sell one company's plans. I represent multiple
            carriers, so I can compare rates and benefits side by side for you.
            That means you see real choices instead of a single pitch.
          </p>
          <p>
            People tell me all the time they didn't know they had options. Some
            have been on the same plan for years because nobody showed them
            what else was out there. That's what an independent broker fixes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement and Advantage options available in Ocean County
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> Standardized plans
              like Plan G and Plan N that cover costs Original Medicare leaves
              behind. You keep any doctor who accepts Medicare.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Bundled plans that may include
              prescription drugs, dental, and vision. Network restrictions apply.
            </li>
            <li>
              <strong>Part D:</strong> Standalone prescription drug coverage if
              you stay on Original Medicare with a Supplement.
            </li>
          </ul>
          <p className="mt-3">
            Brick residents have access to hospitals in the Hackensack Meridian
            Health network, including Ocean University Medical Center just up
            Route 70. Your plan choice directly affects which facilities and
            specialists stay in-network.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Average Plan G and Plan N rates for Brick ZIP codes in 2025
          </h2>
          <p className="mb-3">
            Rates vary by carrier, age, gender, and tobacco use. In Brick's
            08723 and 08724 ZIP codes, Plan G premiums from major carriers
            typically range from roughly $140 to $260/month for a 65-year-old
            non-smoker. Plan N runs lower because you pay small copays at office
            visits.
          </p>
          <p>
            The 2026 Part B deductible is $283/year. With Plan G, that's the
            only out-of-pocket cost after your monthly premium. Call me for an
            exact quote based on your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What real people struggle with when choosing Medicare
          </h2>
          <p className="mb-3">
            Carrier customer service matters more than brokers sometimes admit.
            Delayed ID cards, broken auto-crossover billing, and providers who
            can't verify your plan in their system are real headaches. I factor
            carrier service quality into my recommendations because a cheap plan
            that doesn't process claims correctly isn't cheap at all.
          </p>
          <p>
            I also watch network changes closely. Major health systems in NJ
            sometimes drop carriers, which can force you to switch plans or
            providers mid-year. That's exactly the kind of thing an independent
            broker monitors for you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment deadlines to know
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the
              month you're 65+ and enrolled in Part B. This is your guaranteed
              issue window with no health questions.
            </li>
            <li>
              <strong>Medicare Advantage/Part D:</strong> October 15 through
              December 7 each year.
            </li>
            <li>
              <strong>Part B late penalty:</strong> 10% added to your premium
              for every 12-month period you delayed without creditable coverage.
            </li>
          </ul>
          <p className="mt-3">
            If you're turning 65 soon, start the conversation about 6 months
            before your Part B effective date. That gives us time to compare
            every option without rushing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free phone or in-person Medicare review in Brick
          </h2>
          <p className="mb-3">
            I meet Brick Township residents by phone, video, or in person. The
            review takes about 20 minutes. I'll look at your current coverage,
            your doctors, and your prescriptions, then show you what makes sense.
          </p>
          <p>There's no cost and no obligation. That's how it should work.</p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who knows Brick, NJ
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
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
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Plan G vs Plan N: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Deadlines That Matter
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}