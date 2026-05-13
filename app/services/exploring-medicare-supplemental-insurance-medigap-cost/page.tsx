import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Exploring Medicare Supplemental Insurance (Medigap) Cost | Free Rate Comparison | MedicareYourself",
  description:
    "Compare Medigap costs by plan letter, pricing model, and ZIP. Get a free rate review from a licensed broker — call 855-559-1700 to find your lowest premium.",
  alternates: { canonical: "https://medicareyourself.com/services/exploring-medicare-supplemental-insurance-medigap-cost" },
  openGraph: {
    title:
      "Exploring Medicare Supplemental Insurance (Medigap) Cost | Free Rate Comparison | MedicareYourself",
    description:
      "Exploring Medicare Supplemental insurance (Medigap) cost? See average premiums by plan letter, pricing model, and state. Compare carriers free with a broker.",
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
      name: "Exploring Medicare Supplemental Insurance (Medigap) Cost",
      item: "https://medicareyourself.com/services/exploring-medicare-supplemental-insurance-medigap-cost",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Exploring Medicare Supplemental Insurance (Medigap) Cost: Real Numbers and What Drives Them",
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
    question: "Do Medigap plans cover chiropractic?",
    answer:
      "Original Medicare covers limited chiropractic care, specifically manual manipulation of the spine to correct subluxation. If Medicare approves the claim, your Medigap plan will cover its share of the cost (like the 20% Part B coinsurance). Medigap does not add chiropractic benefits beyond what Medicare covers.",
  },
  {
    question:
      "Why do two companies charge different prices for the same Medigap plan letter?",
    answer:
      "Every Medigap Plan G, for example, covers the exact same benefits regardless of the carrier. The only difference is the premium. Each insurance company sets its own rates based on its pricing model, claims experience, and administrative costs. That's why comparing the same letter across multiple carriers is essential.",
  },
  {
    question: "Can I switch Medigap plans after my open enrollment period?",
    answer:
      "You can apply to switch anytime, but outside your initial 6-month Medigap Open Enrollment Period, companies can require medical underwriting. If you have health conditions, you could be charged more or denied. Some states offer additional protections, and certain federal guaranteed issue events apply. Call us to check your specific situation.",
  },
  {
    question: "What's the most popular Medigap plan in 2025-2026?",
    answer:
      "Plan G is the most commonly purchased Medigap plan. It covers everything except the annual Part B deductible ($283 in 2026). Plan N is a popular lower-cost alternative, though it has small copays for some office and ER visits.",
  },
];

export default function ExploringMedigapCostPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Exploring Medicare Supplemental Insurance (Medigap) Cost
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Exploring Medicare Supplemental Insurance (Medigap) Cost: Real Numbers
        and What Drives Them
      </h1>

      <Image
        src="/images/exploring-medicare-supplemental-insurance-medigap-cost.webp"
        alt="Exploring Medicare supplemental insurance Medigap cost"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Exploring Medicare supplemental insurance (Medigap) cost is the single
        smartest thing you can do before picking a plan. The starting premium
        matters, but what that premium does over the next 10 or 15 years matters
        more. Most people don't hear that until it's too late.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker, and I'll break down the
        real numbers so you can compare with confidence.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Medigap premiums actually cover in 2025–2026
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap fills the gaps Original Medicare leaves behind. Depending on
          the plan letter, that includes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Part A deductible ($1,676 per benefit period in 2026)</li>
          <li>Part B coinsurance (the 20% Medicare doesn't pay)</li>
          <li>
            Skilled nursing facility coinsurance ($209.50/day for days 21–100)
          </li>
          <li>Part B excess charges (Plan F and Plan G cover these)</li>
          <li>Foreign travel emergency care (up to plan limits)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          You still pay your Part B premium ($202.90/month in 2026) separately.
          Medigap is on top of that.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Three pricing models that determine your rate
        </h2>
        <p className="text-gray-700 mb-2">
          Every Medigap carrier uses one of three pricing methods. This is where
          people get blindsided years down the road.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Community-rated:</strong> Everyone pays the same premium
            regardless of age. Your rate won't climb just because you got older.
          </li>
          <li>
            <strong>Issue-age-rated:</strong> Your premium is based on the age
            you were when you bought the policy. Younger buyers lock in a lower
            base rate.
          </li>
          <li>
            <strong>Attained-age-rated:</strong> Starts low, then increases
            automatically as you age. These look cheap at 65 but can stack up
            fast by your mid-70s.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          On top of the pricing model, carriers can file block rate increases
          when claims in your pool rise. Age increases plus block increases in
          the same year can mean 10–18% jumps. Ask about a carrier's rate
          increase history before you sign.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Average Medigap costs by plan letter and state
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap premiums vary widely by state, plan letter, and carrier. Here
          are general ranges for a 65-year-old in 2025:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Plan G:</strong> Roughly $120–$300/month depending on state
            and carrier
          </li>
          <li>
            <strong>Plan N:</strong> Typically 15–25% less than Plan G from the
            same carrier
          </li>
          <li>
            <strong>High-deductible Plan G:</strong> Often under $50/month, but
            you pay the first $2,800 out of pocket annually
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          Rates vary by carrier. Two companies selling Plan G in the same zip
          code can differ by $80/month or more. That's the same exact coverage
          for a very different price.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to compare carriers and find the best value
        </h2>
        <p className="text-gray-700 mb-2">
          Always compare the same plan letter across carriers. A Plan G is a
          Plan G. The benefits are identical. The only difference is price and
          long-term rate behavior.
        </p>
        <p className="text-gray-700">
          Ask about the carrier's rate increase history over the past 5 years.
          The cheapest premium today doesn't mean the cheapest plan over time.
          Some carriers price aggressively low to attract new members, then
          increase sharply once the block ages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When to lock in your rate
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period starts the month you turn 65 and
          are enrolled in Part B. It lasts 6 months. During this window, no
          carrier can deny you or charge more for health conditions.
        </p>
        <p className="text-gray-700">
          After that window closes, medical underwriting applies. If you've
          developed conditions like diabetes or heart disease, you could face
          higher rates or outright denial. Start comparing carriers at least 6
          months before your Part B effective date so you don't feel rushed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why working with a broker costs you nothing extra
        </h2>
        <p className="text-gray-700 mb-2">
          Brokers are paid by the insurance company, not by you. Your premium is
          the same whether you buy direct or through a broker. The difference is
          you get someone who can pull rates from multiple carriers at once and
          explain the pricing model each one uses.
        </p>
        <p className="text-gray-700">
          I compare plans from all major carriers in your area. One call, real
          numbers, no pressure.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Get a free Medigap rate comparison today.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:855-559-1700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/quote" className="underline font-bold">
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm opacity-90">
          No sign-up required. We compare carriers so you don't have to.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
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
              Medicare Supplement Plan N: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment Period: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: How to Decide
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Get Medigap Costs</a> and <a href="https://www.medicare.gov/medigap-supplemental-insurance-plans/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov — Find Medigap Plans in Your Area</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free local help from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For state-specific guidance, contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
      </section>
    </main>
  );
}