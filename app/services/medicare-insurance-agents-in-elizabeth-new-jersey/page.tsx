import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in elizabeth new jersey | Free Quotes | MedicareYourself",
  description:
    "Medicare agents in Elizabeth, NJ — Anthony Orner compares Medigap and Advantage plans across carriers. Free quotes, no obligation. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agents-in-elizabeth-new-jersey" },
  openGraph: {
    title:
      "medicare insurance agents in elizabeth new jersey | Free Quotes | MedicareYourself",
    description:
      "Medicare insurance agents in Elizabeth New Jersey — Anthony Orner compares Supplement and Advantage plans across carriers. Free quotes, no obligation.",
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
      name: "Medicare Insurance Agents in Elizabeth, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-elizabeth-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Elizabeth, New Jersey: Independent Broker Access",
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
      "Yes. A licensed Medicare agent helps you compare plans across multiple carriers at no cost to you. Brokers are paid by insurance companies, not by you, so there's no fee for their help. An independent broker can show you options a captive agent cannot.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. An independent broker compares Medigap and Advantage plans side by side so you can see which one actually fits your situation in Union County.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers. Ask how many companies they can quote. If the answer is one, they're a captive agent. Also confirm they hold no enrollment fees and will re-evaluate your coverage annually.",
  },
  {
    question:
      "When is the best time to enroll in a Medigap plan in Elizabeth, NJ?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers must accept you regardless of health history. Applying up to 6 months before your Part B start date helps lock in the best rate.",
  },
];

export default function MedicareInsuranceAgentsElizabethNJ() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
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
          Medicare Insurance Agents in Elizabeth, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Insurance Agents in Elizabeth, New Jersey: Independent Broker
        Access
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-elizabeth-new-jersey.webp"
        alt="medicare insurance agents in elizabeth new jersey"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Elizabeth, New Jersey aren't all the same.
        Some represent one carrier. I represent dozens. That difference
        determines whether you see the full picture or just one company's
        version of it.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, an independent Medicare broker licensed in New
        Jersey. I work with Elizabeth residents turning 65 and those already on
        Medicare who suspect they're overpaying.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How an independent broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show
          you that company's plans, even if a competitor offers better rates or
          broader coverage for your situation.
        </p>
        <p>
          An independent broker like me is contracted with multiple carriers. I
          pull quotes from all of them, lay them side by side, and let you
          choose. My service costs you nothing. Carriers pay the broker
          directly, and your premium stays the same whether you use me or enroll
          on your own.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Top Medicare Supplement carriers available in Union County
        </h2>
        <p className="mb-2">
          Elizabeth sits in Union County, where several strong Medigap carriers
          compete for your business. That competition works in your favor.
          Carriers I regularly quote here include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Mutual of Omaha</li>
          <li>Aetna</li>
          <li>Cigna</li>
          <li>United American</li>
          <li>Wellcare (by Centene)</li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco status. I compare them all in
          one call so you don't have to chase individual quotes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare mistakes Elizabeth residents make at 65
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Missing the Medigap Open Enrollment window.</strong> You get
            6 months starting the month you turn 65 and have Part B. After that,
            carriers can deny you or charge more based on health.
          </li>
          <li>
            <strong>Assuming Original Medicare covers everything.</strong> The
            2026 Part A deductible is $1,676 per benefit period. Part B covers
            80%, leaving you with 20% of approved charges. That adds up fast.
          </li>
          <li>
            <strong>Signing up late for Part B.</strong> The penalty is 10% for
            every 12-month period you delayed. It sticks for life.
          </li>
          <li>
            <strong>Picking a plan based on premium alone.</strong> A $30/month
            Advantage plan with a $7,500 out-of-pocket max can cost more than a
            Medigap plan with zero surprises.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why local access matters in Elizabeth
        </h2>
        <p className="mb-2">
          Elizabeth residents rely on Trinitas Regional Medical Center and
          providers across the Union County hospital network. If you're
          considering a Medicare Advantage plan, your doctor and hospital network
          matters. Not every plan includes the providers you already use.
        </p>
        <p>
          I check your doctors and prescriptions against each plan's network and
          formulary before recommending anything. No guesswork.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage: which fits your life
        </h2>
        <p className="mb-2">
          Medigap (Medicare Supplement) pays after Original Medicare. You see
          any doctor who accepts Medicare, anywhere in the country. Monthly
          premiums are higher, but out-of-pocket costs are predictable.
        </p>
        <p>
          Medicare Advantage bundles Part A, B, and usually Part D into one plan
          with a network. Premiums are often lower, but copays and coinsurance
          apply at point of care. Great if your doctors are in-network and you
          stay local.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get a side-by-side plan comparison at no cost
        </h2>
        <p className="mb-2">
          I'll pull real quotes from every carrier available in Elizabeth, line
          them up by cost and benefits, and walk you through the differences.
          Takes about 15 minutes by phone.
        </p>
        <p>
          No obligation. No pressure. If you're turning 65 soon, reach out up
          to 6 months before your Part B effective date to lock in the lowest
          Medigap rates.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-bold mb-2">
          Talk to an independent Medicare broker in Elizabeth, NJ
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
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed NJ Medicare Broker
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
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which saves more?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              When to enroll in Medicare: Deadlines that matter
            </Link>
          </li>
          <li>
            <Link
              href="/services/linden-nj-medicare-insurance-agents"
              className="text-blue-600 hover:underline"
            >
              Medicare broker services in Union County, NJ
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="underline">Get Started with Medicare (Medicare.gov)</a> &middot; <a href="https://www.medicare.gov/health-drug-plans/medigap" target="_blank" rel="noopener noreferrer" className="underline">Medigap Basics (Medicare.gov)</a></div>
            <div className="text-sm text-gray-600 mt-2">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/shipindex.htm" target="_blank" rel="noopener noreferrer" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}