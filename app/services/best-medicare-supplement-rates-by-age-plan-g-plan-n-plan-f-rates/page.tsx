import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Best Medicare Supplement Rates by Age (Plan G, Plan N, & Plan F Rates) | Free Quote | MedicareYourself",
  description:
    "Compare Medicare Supplement rates by age for Plan G, Plan N, and Plan F. See how premiums shift by age bracket and lock in your best rate — free quote today.",
  alternates: { canonical: "https://medicareyourself.com/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates" },
  openGraph: {
    title:
      "Best Medicare Supplement Rates by Age (Plan G, Plan N, & Plan F Rates) | Free Quote | MedicareYourself",
    description:
      "Best Medicare Supplement rates by age for Plan G, Plan N, and Plan F. See real premium ranges by age bracket and find the lowest rate. Free instant quote.",
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
      name: "Best Medicare Supplement Rates by Age (Plan G, Plan N, & Plan F Rates)",
      item: "https://medicareyourself.com/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Supplement Rates by Age: Plan G, Plan N, and Plan F Compared for 2025–2026",
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
    question: "How much cheaper is Plan G than Plan F?",
    answer:
      "Plan G typically costs $30–$60 less per month than Plan F, depending on age and carrier. Since Plan F and Plan G have identical benefits except that Plan G doesn't cover the $283 Part B deductible, most people save money overall with Plan G.",
  },
  {
    question:
      "Why do Medicare Supplement rates vary so much between carriers for the same plan letter?",
    answer:
      "Every Medigap plan letter is standardized by Medicare, so a Plan G from one carrier covers the exact same benefits as a Plan G from another. The difference is pricing strategy. Some carriers price low to attract new enrollees, then raise rates aggressively. Others start slightly higher but hold steadier over time.",
  },
  {
    question:
      "When is the best time to buy a Medicare Supplement to get the lowest rate?",
    answer:
      "Your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B, gives you guaranteed issue rights. During this window, carriers can't charge more or deny you based on health. Applying up to 6 months before your Part B start date helps lock in the best rate.",
  },
  {
    question: "Do Medicare Supplement rates go up every year?",
    answer:
      "Yes, in most cases. Attained-age rated plans increase as you get older, and all plans can receive block rate increases when claims in your insured pool rise. Some years you may see 4–6% bumps; other years, 10–18% jumps when age and block increases stack together.",
  },
];

export default function BestMedicareSupplementRatesByAge() {
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
          Best Medicare Supplement Rates by Age
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
        Best Medicare Supplement Rates by Age: Plan G, Plan N, and Plan F
        Compared for 2025–2026
      </h1>

      <Image
        src="/images/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates.webp"
        alt="Best Medicare Supplement rates by age for Plan G, Plan N, and Plan F"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Best Medicare Supplement rates by age depend on three things: which plan
        letter you pick, how old you are when you enroll, and how your carrier
        prices its policies over time. Most people focus on the starting premium
        at 65. That's a mistake.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        What you're paying at 75 or 80 matters more. Here's how to compare Plan
        G, Plan N, and Plan F rates realistically.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How age affects your Medigap premium each year
        </h2>
        <p className="text-gray-700 mb-2">
          Age is one of the primary factors carriers use to set your monthly
          premium. If you're on an attained-age rated plan (most plans are),
          your rate increases automatically as you get older, even before any
          general rate hikes.
        </p>
        <p className="text-gray-700">
          The real cost surprise comes when age-based increases and block rate
          increases hit in the same year. Jumps of 10–18% in a single year
          aren't unusual. That's why the carrier you choose matters as much as
          the plan letter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G, Plan N, and Plan F rate ranges at 65, 70, and 75
        </h2>
        <p className="text-gray-700 mb-3">
          Rates vary by carrier, ZIP code, and tobacco status. These are
          approximate monthly ranges you'll see across multiple carriers in 2025–2026:
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-left border-collapse text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 font-semibold">Age</th>
                <th className="border p-3 font-semibold">Plan F</th>
                <th className="border p-3 font-semibold">Plan G</th>
                <th className="border p-3 font-semibold">Plan N</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">65</td>
                <td className="border p-3">$150–$250</td>
                <td className="border p-3">$110–$210</td>
                <td className="border p-3">$85–$170</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">70</td>
                <td className="border p-3">$185–$310</td>
                <td className="border p-3">$145–$270</td>
                <td className="border p-3">$110–$210</td>
              </tr>
              <tr>
                <td className="border p-3">75</td>
                <td className="border p-3">$225–$390</td>
                <td className="border p-3">$180–$340</td>
                <td className="border p-3">$140–$260</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm">
          Plan F is only available to those who became eligible for Medicare
          before January 1, 2020. Plan G offers the same coverage minus the $283
          Part B deductible, and typically costs $30–$60 less per month.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Attained-age vs. issue-age vs. community-rated pricing explained
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Attained-age</strong> — Most common. Premium rises as you
            age. Starts low, climbs steadily.
          </li>
          <li>
            <strong>Issue-age</strong> — Rate is based on your age when you
            bought the policy. It won't increase due to aging, but block
            increases still apply.
          </li>
          <li>
            <strong>Community-rated</strong> — Everyone pays the same rate
            regardless of age. Rare, but a great deal if you enroll older.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          Issue-age and community-rated policies can save you thousands over a
          decade. Not every carrier offers them in every state. Call to check
          what's available in your ZIP code.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the carrier matters more than the plan letter
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G is Plan G. The medical benefits are federally standardized. A
          Plan G from one company covers the same things as a Plan G from
          another.
        </p>
        <p className="text-gray-700">
          What's different is long-term premium behavior. Some carriers price
          aggressively low to attract new business, then raise rates sharply
          within a few years. Others start a bit higher but hold steadier. We
          track rate history across carriers so you don't walk into a low-ball
          trap.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to lock in the lowest rate for your age
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period is the single best window to buy.
          It lasts 6 months, starting the month you turn 65 and are enrolled in
          Part B. During this window, no carrier can deny you or charge extra
          for health conditions.
        </p>
        <p className="text-gray-700">
          Apply up to 6 months before your Part B start date to give yourself
          time to compare. Waiting even a year past your OEP can mean higher
          premiums or medical underwriting that limits your options.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What most rate comparison sites won't tell you
        </h2>
        <p className="text-gray-700 mb-2">
          A quote is a snapshot. What you really need is a 5- and 10-year rate
          outlook. We pull actual rate increase histories so you can see how a
          carrier has behaved over time, not just what they charge today.
        </p>
        <p className="text-gray-700">
          That's the difference between picking the cheapest plan right now and
          picking the plan that stays affordable at 74 or 80.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Get your free rate comparison in 2 minutes.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: Full Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/quickest-way-to-enroll-into-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: What It Covers
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/average-cost-of-medicare-supplement-insurance-by-age-in-2026"
              className="text-blue-600 hover:underline"
            >
              Average Cost of Medicare Supplement Insurance by Age in 2026
            </Link>
          </li>
          <li>
            <Link
              href="/services/how-much-is-plan-f-in-nj"
              className="text-blue-600 hover:underline"
            >
              How Much Is Plan F in NJ?
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits" rel="noopener noreferrer" target="_blank" className="underline">Compare Medigap Plan Benefits (Medicare.gov)</a> &middot; <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline">Medigap Basics (Medicare.gov)</a></div>
            <div className="text-sm text-gray-600 mt-4">Need unbiased help? Contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free local Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap rate counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medigap rate counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare carrier filings and get free counseling through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carriers and rates with the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify rates and consumer rights through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}