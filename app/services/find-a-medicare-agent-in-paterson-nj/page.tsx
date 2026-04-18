import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in paterson nj | Free Guidance, No Fees | MedicareYourself",
  description:
    "Find a Medicare agent in Paterson, NJ. Anthony Orner compares Medigap, Advantage & Part D plans across Passaic County carriers. Free help — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-paterson-nj" },
  openGraph: {
    title:
      "find a medicare agent in paterson nj | Free Guidance, No Fees | MedicareYourself",
    description:
      "Find a medicare agent in Paterson NJ — Anthony Orner compares Medigap and Advantage plans across Passaic County carriers. Free, no-obligation consultation.",
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
      name: "Find a Medicare Agent in Paterson NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-paterson-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Paterson, NJ: Independent Broker Serving Passaic County",
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
    "https://medicareyourself.com/services/find-a-medicare-agent-in-paterson-nj",
};

const faqs = [
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Licensed Medicare agents don't charge you anything. Carriers pay the broker directly, so the plans cost the same whether you enroll on your own or work with an agent. There's no hidden fee or markup.",
  },
  {
    question: "How do I pick a good Medicare agent in Paterson?",
    answer:
      "Look for an independent broker, not a captive agent tied to one carrier. An independent agent compares plans from multiple insurance companies, so the recommendation fits your doctors and prescriptions rather than a sales quota.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions. For personalized plan comparisons in the Paterson area, call Anthony Orner at 855-559-1700 for a free, no-obligation consultation.",
  },
  {
    question: "When is the best time to contact a Medicare agent?",
    answer:
      "If you're turning 65, reach out at least 6 months before your Part B start date to lock in Medigap rates during your Open Enrollment Period. For Medicare Advantage or Part D changes, Annual Enrollment runs October 15 through December 7.",
  },
,
  {
    question: "Do I have to use a Paterson-based agent, or can I work remotely?",
    answer:
      "You don't need an agent physically located in Paterson. Anthony Orner is licensed in New Jersey and 34 other states and works with clients by phone, video, or email. What matters is that the broker is licensed in NJ and familiar with the carriers and provider networks available in Passaic County.",
  },
  {
    question: "What does Medicare cost in 2026?",
    answer:
      "In 2026, the standard Part B premium is ,
  {
    question: "Does a Medicare agent in Paterson help with both Medigap and Medicare Advantage?",
    answer:
      "Yes. An independent broker like Anthony Orner can walk you through Medicare Supplement (Medigap), Medicare Advantage, and stand-alone Part D prescription drug plans. You get side-by-side comparisons so you can weigh premiums, out-of-pocket costs, and provider networks before enrolling.",
  },
  {
    question: "Will my Paterson doctors and hospitals accept the plan I choose?",
    answer:
      "Original Medicare with a Medigap plan is accepted by any provider that takes Medicare, which includes most doctors and hospitals serving Passaic County. With Medicare Advantage, you'll want to confirm that St. Joseph's Health and your preferred physicians are in-network before enrolling.",
  }
];

export default85 per month with a $257 annual deductible. Part A has a ];

export default,676 hospital deductible per benefit period. Medigap, Medicare Advantage, and Part D plan premiums are separate and vary by carrier and ZIP code in the Paterson area.",
  },
  {
    question: "Can a Medicare agent help me keep my current doctors?",
    answer:
      "Yes. An independent broker can check whether your doctors and preferred hospitals participate in a plan's network before you enroll. For Medigap, any provider that accepts Medicare nationwide will accept your plan, which is useful if you travel or see specialists outside Paterson.",
  }
];

export default function FindMedicareAgentPatersonNJ() {
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
          Find a Medicare Agent in Paterson NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find a Medicare Agent in Paterson, NJ: Independent Broker Serving
          Passaic County
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-paterson-nj.webp"
          alt="find a medicare agent in paterson nj"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in Paterson, NJ shouldn't feel like a second
          job. I'm Anthony Orner, an independent Medicare broker licensed in New
          Jersey, and I help Passaic County residents compare plans from multiple
          carriers at zero cost to you.
        </p>
        <p className="text-lg mb-6">
          Whether you're turning 65, retiring from a job at one of the local
          hospitals, or just frustrated with your current plan, one phone call
          gets you real answers.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare plan options for Paterson and Passaic County residents
          </h2>
          <p className="mb-2">
            Paterson sits in a competitive Medicare market. Passaic County
            residents typically have access to:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>
              Medicare Advantage (Part C) plans with $0 premiums and dental/vision
              benefits
            </li>
            <li>
              Medigap (Supplement) plans like Plan G or Plan N that pair with
              Original Medicare
            </li>
            <li>
              Part D prescription drug plans from several carriers
            </li>
          </ul>
          <p>
            The "best" plan depends on your doctors, your medications, and how
            often you need care at places like St. Joseph's University Medical
            Center or facilities across Bergen and Passaic counties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How I help Paterson clients choose the right plan
          </h2>
          <p className="mb-2">
            I don't work for one insurance company. I work for you. That means I
            pull up plans from every carrier available in your zip code and
            compare them side by side.
          </p>
          <p>
            We'll check that your doctors are in-network, verify your
            prescriptions are on the formulary, and look at total yearly costs,
            not just the monthly premium. No guessing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why an independent broker costs you nothing extra
          </h2>
          <p className="mb-2">
            Medicare plans cost the same whether you enroll online, call
            1-800-MEDICARE, or go through a licensed broker. The carrier pays my
            commission directly. You pay zero.
          </p>
          <p>
            The difference: you get someone who actually explains the fine print
            and picks up the phone after enrollment if there's a billing issue or
            a claim problem.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key 2026 Medicare costs to know
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>SNF coinsurance (days 21-100): $209.50/day</li>
          </ul>
          <p className="mt-2">
            These out-of-pocket costs add up fast. A Medigap plan or a
            well-chosen Advantage plan can protect you from the worst surprises.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Timing matters for Medigap in New Jersey
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period starts the month you turn 65 and
            are enrolled in Part B. It lasts 6 months. During that window,
            carriers must accept you regardless of health history and at their
            best rate.
          </p>
          <p>
            Miss that window and you could face medical underwriting or higher
            premiums. If you're within a year of turning 65, now is the right
            time to start comparing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule your free Paterson-area Medicare consultation
          </h2>
          <p className="mb-2">
            I serve clients across Paterson, Clifton, Wayne, Totowa, and the
            wider Passaic County area. We can meet by phone or video, whatever's
            easier for you.
          </p>
          <p>
            No paperwork to fill out in advance. No obligation. Just a
            straightforward conversation about what plans make sense for your
            situation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker today
          </p>
          <p className="text-3xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
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
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey: Your Complete Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Deadlines and Penalties
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, Licensed Medicare Broker
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/care-compare/?searchType=Hospital&state=NJ" rel="noopener noreferrer" target="_blank" className="underline">Care Compare for New Jersey hospitals</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Free, unbiased counseling is also available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}