import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in burlington new jersey | Free Local Help | MedicareYourself",
  description:
    "Medicare insurance agents in Burlington, NJ — Anthony Orner, licensed independent broker, compares plans across carriers. Free consultation, no obligation.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-burlington-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in burlington new jersey | Free Local Help | MedicareYourself",
    description:
      "Medicare insurance agents in Burlington, New Jersey — Anthony Orner is a licensed independent broker comparing plans across carriers. Free consultation, no obligation.",
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
      name: "Medicare Insurance Agents in Burlington, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-burlington-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Burlington, New Jersey: Licensed Broker Serving Burlington County",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no cost to you. Brokers are paid by the insurance companies, so there's no fee for their help. You get objective guidance instead of being steered toward a single company's products.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. An independent broker can run a side-by-side comparison of Medigap and Medicare Advantage options available in Burlington County to find what fits your situation.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an agent who is independently licensed (not captive to one carrier), willing to explain tradeoffs honestly, and available year-round for questions. Ask if they'll help you review your plan annually during Open Enrollment.",
  },
  {
    question: "How much does it cost to work with a Medicare broker?",
    answer:
      "Nothing. Independent Medicare brokers are compensated by insurance carriers. You pay the same premium whether you enroll directly or through a broker, but you get personalized guidance at no extra charge.",
  },
];

export default function MedicareInsuranceAgentsBurlingtonNJ() {
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
        <span>Medicare Insurance Agents in Burlington, New Jersey</span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Burlington, New Jersey: Licensed Broker
        Serving Burlington County
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-burlington-new-jersey.webp"
        alt="Medicare insurance agents in Burlington New Jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Burlington, New Jersey can make the
        difference between a plan that works and one that leaves you scrambling
        when a provider drops your network. I'm Anthony Orner, a licensed
        independent broker serving Burlington County and the surrounding area.
      </p>
      <p className="mb-6">
        I compare plans from multiple carriers so you don't have to call each
        one yourself. No cost, no obligation.
      </p>

      <PhoneCTA />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Burlington County residents work with an independent broker
        </h2>
        <p className="mb-2">
          A captive agent sells one company's plans. I'm independent, which
          means I can pull quotes from every major carrier writing policies in
          Burlington County.
        </p>
        <p>
          That matters because network changes happen. When a major insurer
          stops contracting with local providers, you need someone who can move
          you to a plan that keeps your doctors. I stay on top of carrier
          changes at Virtua, Deborah Heart and Lung Center, and other South
          Jersey systems so you don't get caught off guard.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medicare Supplement and Advantage plans available in Burlington
        </h2>
        <p className="mb-3">
          Burlington County residents typically choose between two paths:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Pairs with Original
            Medicare. You pick any doctor who accepts Medicare. Plan G and Plan
            N are the most popular standardized options. Rates vary by carrier
            and age.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Replaces Original
            Medicare with a private plan. Often includes drug coverage, dental,
            and vision. Network restrictions apply.
          </li>
        </ul>
        <p>
          The 2026 Part B premium is $202.90/month, and the Part A deductible is
          $1,676 per benefit period. These costs factor into which plan type
          saves you the most.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Enrollment windows you need to know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap Open Enrollment:</strong> 6 months starting the
            month you turn 65 and are enrolled in Part B. This is your best
            window for guaranteed issue with no health questions.
          </li>
          <li>
            <strong>Medicare Advantage / Part D Open Enrollment:</strong>{" "}
            October 15 through December 7 each year.
          </li>
          <li>
            <strong>Part B late enrollment penalty:</strong> 10% added to your
            premium for every 12-month period you delayed. Don't let this sneak
            up on you.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free Medicare consultation
        </h2>
        <p className="mb-2">
          Bring your Medicare card, a list of current prescriptions, and the
          names of doctors you want to keep. That's it.
        </p>
        <p className="mb-2">
          I'll run a plan comparison showing your estimated out-of-pocket costs
          across carriers. We'll talk through tradeoffs honestly. If a plan
          doesn't fit, I'll tell you.
        </p>
        <p>
          Most calls take 20 to 30 minutes. No pressure, no sales pitch.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          I work with you after enrollment too
        </h2>
        <p className="mb-2">
          Signing up is just the start. Every fall during Open Enrollment, I
          review your plan to make sure it still fits your prescriptions,
          doctors, and budget.
        </p>
        <p>
          If a carrier raises rates or a network changes mid-year, you'll hear
          from me before you hear from them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to schedule a call or meeting from Burlington, NJ
        </h2>
        <p className="mb-2">
          Phone, video, or in-person at a time that works for you. I serve all
          of Burlington County, including Mount Laurel, Moorestown, Bordentown,
          Medford, and Pemberton.
        </p>
        <p>
          Call <strong>855-559-1700</strong> or use the link below to get
          started.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-8">
        <p className="text-xl font-semibold mb-2">
          Ready to compare Medicare plans in Burlington County?
        </p>
        <p className="mb-4">
          Call <strong>855-559-1700</strong> or request your free quote online.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

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
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Medigap Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to Enroll in Medicare: Key Dates and Deadlines
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.cms.gov/medicare/enrollment-renewal/health-plans" rel="noopener noreferrer" target="_blank" className="underline">CMS Medicare Enrollment</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
      </section>
    </>
  );
}