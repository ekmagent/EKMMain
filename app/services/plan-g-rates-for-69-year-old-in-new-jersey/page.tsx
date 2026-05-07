import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Plan G Rates for a 69-Year-Old in New Jersey | Free Carrier Comparison | MedicareYourself",
  description:
    "Compare Plan G rates for 69-year-olds in New Jersey across top carriers. Free, no-pressure quotes from a licensed NJ broker — call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/plan-g-rates-for-69-year-old-in-new-jersey" },
  openGraph: {
    title:
      "Plan G Rates for a 69-Year-Old in New Jersey | Free Carrier Comparison | MedicareYourself",
    description:
      "Plan G rates for 69-year-olds in New Jersey vary by carrier and pricing method. See real quotes from top insurers. Free comparison from a licensed NJ broker.",
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
      name: "Plan G Rates for 69 Year Old in New Jersey",
      item: "https://medicareyourself.com/services/plan-g-rates-for-69-year-old-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Plan G Rates for 69 Year Old in New Jersey: Carrier-by-Carrier Breakdown",
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
    question: "How much is Medicare Plan G in NJ for a 69-year-old?",
    answer:
      "Plan G premiums for 69-year-olds in New Jersey typically range from roughly $150 to over $300 per month depending on the carrier, your county, gender, and whether the plan uses attained-age or issue-age pricing. The only way to get your exact rate is a carrier-specific quote.",
  },
  {
    question: "Do Plan G premiums increase with age?",
    answer:
      "With attained-age pricing, yes. Your premium rises as you get older, usually annually. Issue-age plans base your rate on the age you enrolled, so increases come from inflation and claims costs rather than birthdays. Community-rated plans charge the same regardless of age.",
  },
  {
    question: "What is the best Medigap insurance company in New Jersey?",
    answer:
      "There's no single best company. Plan G benefits are identical by law no matter who sells it. The differences are premium cost, rate stability over time, and customer service. Comparing multiple carriers side by side is the most reliable way to find your best fit.",
  },
  {
    question:
      "Can I switch Plan G carriers at 69 without medical underwriting?",
    answer:
      "In most cases, switching Medigap plans outside your initial open enrollment period requires medical underwriting in New Jersey. Certain federal guaranteed issue rights may apply if you lost coverage involuntarily. A licensed broker can check your specific situation.",
  },
,
  {
    question: "When is the best time to enroll in Plan G in New Jersey?",
    answer:
      "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you're 65 or older and enrolled in Part B. During this window, carriers cannot deny you coverage or charge more based on health. If you're 69 and missed this window, you may still apply but could face medical underwriting.",
  },
  {
    question: "How are Plan G premiums priced in New Jersey?",
    answer:
      "New Jersey carriers may use community-rated, issue-age, or attained-age pricing depending on the company. Community-rated plans charge the same premium regardless of age, while attained-age plans increase as you grow older. Comparing pricing methods is just as important as comparing the starting premium.",
  },
  {
    question: "Does Plan G cover the Part B deductible at age 69?",
    answer:
      "No. Plan G covers nearly all Medicare-approved out-of-pocket costs after you meet the Part B deductible, but it does not pay the deductible itself. Once met, Plan G covers the Part A and Part B coinsurance, hospital costs, and excess charges for the rest of the year.",
  }
];

export default function PlanGRates69NJ() {
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
        <span>Plan G Rates for 69 Year Old in New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Plan G Rates for 69 Year Old in New Jersey: Carrier-by-Carrier
          Breakdown
        </h1>

        <Image
          src="/images/plan-g-rates-for-69-year-old-in-new-jersey.webp"
          alt="Plan G rates for 69 year old in New Jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Plan G rates for a 69-year-old in New Jersey depend on three things:
          the carrier, the pricing method, and your county. The spread between
          the cheapest and most expensive carrier can be $100+ per month for the
          exact same coverage.
        </p>
        <p className="text-lg mb-6">
          I run these comparisons for NJ residents every week. Here's what you
          need to know before your next birthday changes the math.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What 69-year-olds actually pay for Plan G in NJ
          </h2>
          <p className="mb-2">
            Monthly premiums at age 69 generally fall between $150 and $325,
            depending on carrier and rating method. That's a real range I see in
            quotes, not a guess.
          </p>
          <p>
            Plan G covers everything Original Medicare doesn't except the Part B
            deductible ($283/year in 2026). That means no copays at the doctor,
            no surprise bills after a hospital stay, no $209.50/day skilled
            nursing coinsurance. Every carrier's Plan G covers the same things.
            The only variable is price.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Which carriers offer the lowest premiums at age 69
          </h2>
          <p className="mb-2">
            New Jersey has over a dozen carriers selling Plan G. Some of the
            most competitive at age 69 tend to be mid-size insurers that don't
            always show up in online searches.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rates vary by carrier, county, gender, and tobacco status</li>
            <li>
              The lowest-premium carrier at 65 is often not the lowest at 69
            </li>
            <li>
              A carrier with a low starting rate but steep annual increases can
              cost more over 5 years than one with a slightly higher entry point
            </li>
          </ul>
          <p className="mt-2">
            I can't publish specific carrier rates here because they change
            quarterly. But I can pull your real quotes in a few minutes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Attained-age vs. issue-age pricing and why it matters now
          </h2>
          <p className="mb-2">
            Most Medigap carriers in NJ use attained-age pricing. Your premium
            goes up each year as you age. At 69, you're already paying more than
            you would have at 65 with the same company.
          </p>
          <p>
            Issue-age carriers lock your rate based on the age you enroll. If you
            enrolled at 65, your base rate stays at the 65-year-old level. If
            you're shopping at 69 for the first time, you'll get a 69-year-old
            issue-age rate. Either way, comparing both types side by side gives
            you the clearest picture of long-term cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to lock in your best rate before you turn 70
          </h2>
          <p className="mb-2">
            With attained-age plans, every birthday triggers a rate bump. If
            you're considering a switch or enrolling for the first time, acting
            before you turn 70 locks in a lower starting rate.
          </p>
          <p>
            If you're past your initial Medigap open enrollment (the 6-month
            window after Part B starts at age 65), most carriers in NJ will
            require medical underwriting. Good health works in your favor right
            now. That changes fast and unpredictably.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why switching carriers might save you hundreds a year
          </h2>
          <p className="mb-2">
            People I talk to often don't realize they can switch Plan G carriers
            and keep the same coverage. If your current insurer has raised rates
            aggressively since you enrolled, another carrier might offer the same
            Plan G for significantly less.
          </p>
          <p>
            The catch: you'll need to pass underwriting. For a healthy
            69-year-old, that's usually straightforward. For someone managing
            conditions like diabetes, it may not be. That's exactly why a broker
            check is worth the call.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a free carrier comparison actually looks like
          </h2>
          <p className="mb-2">
            When you call, I pull live quotes from every Plan G carrier
            available in your NJ zip code. You'll see each carrier's monthly
            premium, their pricing method, and their rate increase history.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Takes about 10 minutes on the phone</li>
            <li>No application submitted unless you say so</li>
            <li>No cost, no obligation</li>
          </ul>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Get your Plan G rate comparison before your next birthday.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600">
            Anthony Orner, Licensed Medicare Broker | EasyKind Medicare
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h3 className="text-xl font-semibold mb-3">Related Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/plan-g-rates-by-age-new-jersey"
                className="text-blue-700 hover:underline"
              >
                Plan G Rates by Age in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Plan N in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-700 hover:underline"
              >
                Best Medigap Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Enrollment in New Jersey
              </Link>
            </li>
          </ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Medigap Basics</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Compare Medigap Plan Benefits</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medsupp.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance — Medicare Supplement</a> and the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}