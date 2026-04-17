import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Find an NJ Medicare Broker Near You | Free No-Pressure Help | MedicareYourself",
  description:
    "Find an NJ Medicare broker near you — Anthony Orner compares top carriers statewide at no cost. Independent, no pressure. Call 855-559-1700 for free help.",
  alternates: { canonical: "https://medicareyourself.com/services/find-an-nj-medicare-broker-near-you" },
  openGraph: {
    title:
      "Find an NJ Medicare Broker Near You | Free No-Pressure Help | MedicareYourself",
    description:
      "Find an NJ Medicare broker near you — Anthony Orner is licensed statewide, compares top carriers at no cost. Independent, not captive. Free consultation.",
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
      name: "Find an NJ Medicare Broker Near You",
      item: "https://medicareyourself.com/services/find-an-nj-medicare-broker-near-you",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find an NJ Medicare Broker Near You Who Actually Works for You",
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
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. A licensed Medicare broker is paid by the insurance carrier, not by you. The plan costs the same whether you enroll directly or through a broker. You get free guidance with zero markup.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan — it depends on your doctors, prescriptions, budget, and how you use healthcare. An independent broker compares options across multiple carriers to find the plan that fits your specific situation.",
  },
  {
    question:
      "What's the difference between a Medicare broker and an insurance agent?",
    answer:
      "A captive agent works for one insurance company and can only show you their plans. An independent broker is licensed with multiple carriers and compares plans side by side. The broker works for you, not the carrier.",
  },
  {
    question: "Does Anthony Orner serve my area of New Jersey?",
    answer:
      "Anthony is licensed statewide in New Jersey. Whether you're in Bergen County, Ocean County, Mercer County, or anywhere else in the state, he can help you compare Medicare plans by phone, video, or in person.",
  },
,
  {
    question: "What does Medicare cost in 2026?",
    answer:
      "In 2026, the standard Medicare Part B premium is ];

export default85 per month with a $257 annual deductible. Part A has a ];

export default,676 inpatient hospital deductible per benefit period. Part C (Medicare Advantage) and Part D premiums vary by plan and carrier.",
  }
];

export default function FindNJMedicareBrokerNearYou() {
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
          Find an NJ Medicare Broker Near You
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find an NJ Medicare Broker Near You Who Actually Works for You
        </h1>

        <Image
          src="/images/find-an-nj-medicare-broker-near-you.webp"
          alt="Find an NJ Medicare broker near you"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Finding an NJ Medicare broker near you shouldn't feel like a second
          job. Medicare is already confusing enough — the alphabet soup of Parts
          A, B, D, and G, the enrollment deadlines that carry real penalties, the
          salespeople pushing plans that benefit them more than you.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, an independent Medicare broker licensed across all
          of New Jersey. I compare plans from multiple carriers, and I never
          charge you a dime for it.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Independent broker vs. insurance company agent — the key difference
          </h2>
          <p className="mb-2">
            A captive agent sells one company's plans. That's it. If their
            carrier doesn't fit your needs, tough luck.
          </p>
          <p className="mb-2">
            An independent broker like me is contracted with multiple carriers —
            Aetna, Cigna, Humana, United, Mutual of Omaha, and others. I lay
            your options side by side and walk you through the tradeoffs. My
            recommendation changes based on your doctors, your prescriptions, and
            your budget. Not my commission.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Counties and zip codes Anthony Orner serves in New Jersey
          </h2>
          <p className="mb-2">
            I'm licensed statewide. That means every county — Bergen, Essex,
            Middlesex, Monmouth, Ocean, Mercer, Camden, Burlington, Morris,
            Union, Hudson, Somerset, Passaic, Atlantic, Cape May, and the rest.
          </p>
          <p>
            We can meet by phone, video, or in person depending on where you
            are. Most clients prefer a quick call. No office visit required.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What a good Medicare broker should do (and never charge for)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Compare Medicare Supplement, Advantage, and Part D plans across carriers</li>
            <li>Check that your doctors and prescriptions are covered before you enroll</li>
            <li>Explain the real cost — premiums, deductibles, copays, and out-of-pocket maximums</li>
            <li>Help you enroll without paperwork headaches</li>
            <li>Be available after enrollment when you have questions or need to switch</li>
          </ul>
          <p className="mt-3">
            All of this is free. Carriers pay the broker. Your plan costs the
            same whether you call a 1-800 number or work with me directly.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why people turning 65 in NJ need to act early
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period lasts 6 months, starting the
            month you turn 65 and are enrolled in Part B. During this window,
            carriers must accept you regardless of health history. Miss it, and
            you could face medical underwriting or higher rates.
          </p>
          <p>
            The smart move: start comparing plans about 6 months before your Part
            B effective date. That gives you time to make a decision without
            pressure.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            2026 Medicare costs you should know
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,676 per benefit period</li>
            <li>Part B late enrollment penalty: 10% added for every 12-month period you delayed</li>
            <li>Medicare Advantage / Part D Open Enrollment: October 15 – December 7</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free plan comparison in under 2 minutes
          </h2>
          <p className="mb-2">
            Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-semibold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or fill out a quick form. I'll pull your doctors and medications,
            compare plans across carriers, and walk you through what actually
            makes sense for your situation.
          </p>
          <p>No pressure. No obligation. Just clear answers.</p>
        </section>

        <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
          <p className="text-xl font-bold mb-2">
            Talk to an independent NJ Medicare broker today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline font-semibold text-white">
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
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-700 hover:underline"
              >
                Turning 65 Medicare Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-700 hover:underline"
              >
                Medicare Part D in New Jersey
              </Link>
            </li>
                      <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                Best And Cheapest Medicare Supplement
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
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Compare And Enroll In Plan G Online
              </Link>
            </li>
            <li>
              <Link
                href="/services/irvington-nj-medicare-insurance-agents"
                className="text-blue-700 hover:underline"
              >
                Irvington NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/jackson-nj-medicare-insurance-agents"
                className="text-blue-700 hover:underline"
              >
                Jackson NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/kearny-nj-medicare-insurance-agents"
                className="text-blue-700 hover:underline"
              >
                Kearny NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-specialists-in-cranford-nj-office"
                className="text-blue-700 hover:underline"
              >
                Medicare Specialists In Cranford NJ Office
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.cms.gov/medicare" target="_blank" rel="noopener noreferrer" className="underline">CMS Medicare program information</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}