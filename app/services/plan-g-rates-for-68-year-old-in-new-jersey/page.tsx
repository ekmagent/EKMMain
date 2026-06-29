import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Plan G Rates for a 68-Year-Old in New Jersey | Free Carrier Comparison | MedicareYourself",
  description:
    "Compare Plan G rates for a 68-year-old in New Jersey across top carriers—identical coverage, very different premiums. Call 855-559-1700 for a free NJ quote.",
  alternates: { canonical: "https://medicareyourself.com/services/plan-g-rates-for-68-year-old-in-new-jersey" },
  openGraph: {
    title:
      "Plan G Rates for a 68-Year-Old in New Jersey | Free Carrier Comparison | MedicareYourself",
    description:
      "Plan G rates for a 68-year-old in New Jersey vary by $60+ across carriers. See real NJ premium examples and get a free comparison from Anthony Orner.",
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
      name: "Plan G Rates for 68-Year-Old in New Jersey",
      item: "https://medicareyourself.com/services/plan-g-rates-for-68-year-old-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Plan G Rates for a 68-Year-Old in New Jersey: Carrier-by-Carrier Breakdown",
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
    question: "How much is Medicare Plan G in NJ?",
    answer:
      "Plan G premiums in New Jersey vary by carrier, age, gender, and tobacco status. For a 68-year-old, monthly rates can range from roughly the low $100s to over $200 depending on which company you choose. The coverage is identical across every carrier, so price and rate stability are the real differentiators.",
  },
  {
    question: "Is Plan G more expensive than Plan N?",
    answer:
      "Yes. Plan G premiums are higher than Plan N because Plan G covers the Part B deductible ($283 in 2026) and has no copays at the doctor or ER. Plan N costs less per month but requires small copays for office visits and emergency room trips. Whether the savings justify the trade-off depends on how often you see doctors.",
  },
  {
    question:
      "Can a 68-year-old in New Jersey switch Plan G carriers without underwriting?",
    answer:
      "New Jersey offers a birthday rule that gives you a 30-day window around your birthday to switch Medigap carriers without medical underwriting, as long as you move to the same plan letter or a lesser plan. Outside that window, you'll typically need to pass health questions. Federal guaranteed issue rights also apply in specific situations like losing employer coverage.",
  },
  {
    question: "Why do Plan G rates differ if the coverage is the same?",
    answer:
      "Every Plan G in New Jersey covers the exact same benefits. The difference is each carrier sets its own premium based on its claims experience, overhead, and pricing method. Some use attained-age rating (price rises with age), others use community rating. That's why comparing carriers matters more than comparing plan letters.",
  },
  {
    question: "Does New Jersey use community rating for Medigap Plan G?",
    answer:
      "Yes. New Jersey generally requires community-rated pricing for Medigap, meaning premiums are not based on your individual age at the time of purchase. That said, rates still vary from one carrier to another based on each company's claims experience and overhead, which is why comparing carriers is important.",
  },
  {
    question: "When is the best time for a 68-year-old in NJ to enroll in Plan G?",
    answer:
      "The strongest window is your 6-month Medigap Open Enrollment Period, which starts when you're 65 or older and enrolled in Part B. During that window, carriers cannot deny you coverage or charge more for health conditions. If you're 68 and outside that window, you may still qualify through a guaranteed issue situation or by passing medical underwriting.",
  }
,
  {
    question: "When should a 68-year-old in New Jersey shop Plan G rates?",
    answer:
      "If you enrolled in Part B at 65, your 6-month Medigap Open Enrollment Period has already closed, so switching carriers usually involves medical underwriting. New Jersey's birthday rule is the main opportunity to change Plan G carriers without answering health questions. It's smart to request a comparison every year, since carriers file new rates annually.",
  },
  {
    question: "Does every NJ carrier sell Plan G with the same benefits?",
    answer:
      "Yes. Medigap Plan G is standardized by federal law, so the benefits are identical no matter which insurance company issues the policy in New Jersey. According to Medicare.gov, the price is the only real difference between Plan G policies with the same letter. That's why comparing premiums and rate history matters more than comparing benefits.",
  },
  {
    question: "Will my Plan G premium go up each year in New Jersey?",
    answer:
      "Most Medigap premiums adjust over time due to medical inflation and claims experience, even under community rating. New Jersey's community-rated approach means premiums aren't based on your individual age, but carriers can still file rate increases with the state. Reviewing your rate annually helps ensure you're not overpaying for identical coverage.",
  }
,
  {
    question: "When is the best time for a 68-year-old in NJ to enroll in Plan G?",
    answer:
      "The strongest enrollment window is your 6-month Medigap Open Enrollment Period, which begins when you're 65 or older and enrolled in Part B. During that window, carriers cannot deny you or charge more for health reasons. If you're already past that window, New Jersey's birthday rule and certain federal guaranteed issue situations may still let you switch without full underwriting.",
  },
  {
    question: "What does Plan G cover for a 68-year-old in New Jersey?",
    answer:
      "Plan G covers everything Original Medicare leaves behind except the Part B deductible. That includes the Part A deductible, hospital coinsurance, skilled nursing coinsurance, Part B coinsurance, and excess charges. Once you meet the Part B deductible for the year, Plan G typically leaves you with no out-of-pocket costs for Medicare-approved services.",
  },
  {
    question: "Should I work with a broker to compare Plan G rates in NJ?",
    answer:
      "Comparing carriers on your own is possible, but a licensed independent broker can run side-by-side quotes from multiple companies in minutes at no cost to you. Since every Plan G policy provides identical benefits, the goal is finding the lowest premium with a stable rate history. Call 855-559-1700 to request a free NJ Plan G comparison from Anthony Orner.",
  }
,
  {
    question: "When can a 68-year-old in New Jersey first enroll in Plan G without underwriting?",
    answer:
      "Your strongest enrollment window is the 6-month Medigap Open Enrollment Period that begins when you're 65 or older and enrolled in Medicare Part B. During this window, any carrier in New Jersey must sell you Plan G at its best available rate regardless of health history. If you're 68 and missed that initial window, you may still have options through New Jersey's birthday rule or federal guaranteed issue events.",
  },
  {
    question: "Will my Plan G premium in New Jersey go up every year?",
    answer:
      "Most Medigap carriers file rate adjustments annually, so premiums typically rise over time due to medical inflation and claims experience — not because of your individual age under community-rated pricing. The size of the increase varies significantly by carrier, which is why comparing rate-history stability matters as much as the starting premium. Call 855-559-1700 for a side-by-side look at carrier pricing trends.",
  }
,
  {
    question: "When can a 68-year-old in New Jersey buy Plan G without health questions?",
    answer:
      "The federal 6-month Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During that window, carriers cannot deny you coverage or charge more for health reasons. Outside of that window, you may need to answer medical underwriting questions unless a guaranteed issue right applies.",
  }
,
  {
    question: "When is the best time for a 68-year-old in New Jersey to buy Plan G?",
    answer:
      "The strongest protection comes during your 6-month Medigap Open Enrollment Period, which begins the month you're 65 or older and enrolled in Part B. During that window, carriers cannot deny you or charge more for health reasons. If you're already past that window at 68, you may need to answer health questions unless a guaranteed issue right applies.",
  },
  {
    question: "Do Plan G rates in New Jersey increase as I get older?",
    answer:
      "New Jersey generally uses community-rated pricing for Medigap, so your premium is not based on your individual age. However, rates can still rise over time due to inflation, claims experience, and carrier rate adjustments filed with the state. Comparing carriers helps identify companies with a history of more stable increases.",
  },
  {
    question: "How do I get a free Plan G rate comparison for New Jersey?",
    answer:
      "Call Anthony Orner at 855-559-1700 for a side-by-side comparison of Plan G premiums from top-rated carriers available in New Jersey. There is no cost or obligation, and the same plan letter covers identical benefits — so the goal is finding the lowest premium with strong rate stability.",
  }
,
  {
    question: "When can a 68-year-old in NJ enroll in Plan G without health questions?",
    answer:
      "The Medigap Open Enrollment Period is a one-time 6-month window that begins when you're 65 or older and enrolled in Medicare Part B. During this window, any Medigap plan, including Plan G, is guaranteed issue. Outside of it, you may need to answer health questions unless a federal guaranteed issue right applies.",
  },
  {
    question: "Does the Plan G benefit package change between carriers in New Jersey?",
    answer:
      "No. Medigap plans are standardized by the federal government, so Plan G's benefits are identical no matter which insurance company sells it in New Jersey. The only meaningful differences between carriers are the monthly premium, the company's rate history, and customer service. That's why comparing carriers side-by-side matters.",
  }
];

export default function PlanGRates68NJ() {
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
          Plan G Rates for 68-Year-Old in New Jersey
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Plan G Rates for a 68-Year-Old in New Jersey: Carrier-by-Carrier
          Breakdown
        </h1>

        <Image
          src="/images/plan-g-rates-for-68-year-old-in-new-jersey.webp"
          alt="Plan G rates for 68 year old in New Jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Plan G rates for a 68-year-old in New Jersey can swing by $60 or more
          per month depending on which carrier you pick. The coverage is
          identical across every company. The price is not.
        </p>
        <p className="mb-6">
          I run these comparisons daily for people in your exact situation. Let
          me show you what the numbers actually look like.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How NJ's open enrollment rules affect rates at 68
          </h2>
          <p className="mb-3">
            If you enrolled in Part B at 65, your Medigap Open Enrollment Period
            ended six months later. At 68, you're outside that window, which
            means most carriers will ask health questions before approving you.
          </p>
          <p className="mb-3">
            New Jersey does offer a birthday rule. You get a 30-day window
            around your birthday each year to switch to the same plan letter (or
            lower) with a different carrier, no medical underwriting required.
            This is one of the strongest consumer protections in the country.
          </p>
          <p>
            If you're already on Plan G and paying too much, that birthday window
            is your annual escape hatch. Don't let it pass without checking
            rates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Monthly premium examples from major NJ carriers
          </h2>
          <p className="mb-3">
            Specific premiums change throughout the year, but here's what I
            consistently see when quoting Plan G for a 68-year-old in New
            Jersey:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              The lowest-cost carriers typically land in the low-to-mid $100s
              per month
            </li>
            <li>
              Mid-range carriers often fall between $150 and $180
            </li>
            <li>
              The most expensive carriers charge over $200 for the same exact
              coverage
            </li>
          </ul>
          <p>
            New Jersey publishes Medigap rate comparison charts through the
            Department of Human Services. I cross-reference those with live
            carrier quotes so you see the full picture.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why the same Plan G can cost $60 more with the wrong carrier
          </h2>
          <p className="mb-3">
            Every Plan G in New Jersey covers the same things: the Part A
            deductible ($1,676 in 2026), Part B excess charges, skilled nursing
            coinsurance ($209.50/day for days 21-100), and essentially
            everything except the $283 Part B deductible.
          </p>
          <p className="mb-3">
            The price gap comes down to how each carrier prices its policies.
            Some use attained-age rating, where your premium climbs as you get
            older. Others use community rating, where everyone pays the same
            regardless of age. A few use issue-age, locking your base rate to
            the age you bought the policy.
          </p>
          <p>
            A $60/month difference adds up to $720 a year for the same exact
            benefits. Over five years, that's $3,600.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What people get wrong about switching at 68
          </h2>
          <p className="mb-3">
            I talk to people every week who switched from a Medigap plan to a
            Medicare Advantage plan and regret it. Getting back to Plan G after
            that move often requires medical underwriting. If you've picked up
            new health conditions, you could be denied.
          </p>
          <p>
            If you already have Plan G, hold onto those guaranteed issue rights.
            Switching carriers is straightforward during your birthday window.
            Switching plan types is a much bigger decision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Rate stability matters as much as today's price
          </h2>
          <p className="mb-3">
            The cheapest carrier today might not be the cheapest in three years.
            Some companies price low to attract new members, then raise rates
            aggressively. Others price steadily from the start.
          </p>
          <p>
            I track rate increase history across NJ carriers so you can pick a
            company with a pattern of reasonable increases, not just a low
            starting number.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request your custom NJ Plan G rate at 68
          </h2>
          <p className="mb-3">
            I'll pull live quotes from every carrier available in your zip code
            and show you a side-by-side comparison. No cost, no obligation, and
            no pressure to switch if your current rate is already competitive.
          </p>
          <p>
            Call me directly or request a comparison online. Takes about 10
            minutes.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-bold mb-2">
            Get Your Free Plan G Rate Comparison
          </p>
          <p className="mb-4">
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
            Anthony Orner, Licensed Medicare Broker — serving all of New Jersey
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                What Does Medicare Plan G Cover?
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
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Rates by Age
              </Link>
            </li>
                      <li>
              <Link
                href="/services/how-much-is-plan-g-in-nj"
                className="text-blue-600 hover:underline"
              >
                How Much Is Plan G In NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-g"
                className="text-blue-600 hover:underline"
              >
                Quickest Way To Enroll Into Plan G
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-rates-for-69-year-old-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Plan G Rates For 69 Year Old In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-rates-for-70-year-old-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Plan G Rates For 70 Year Old In New Jersey
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — How Medigap Costs Are Set</a> and the <a href="https://www.nj.gov/humanservices/doas/documents/Copy%20of%2012%2024%202024%20Male%20at%20Age%2065%20Chart.pdf" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Human Services Medigap Rate Chart</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free one-on-one counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can review carrier rate charts and consumer guides from the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.nj.gov/dobi/division_insurance/managedcare/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking & Insurance</a> · <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> and the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also review the state's published Medigap rate chart from the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ins_ombudsman.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medigap counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> · <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking & Insurance</a> &middot; <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medigap.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance — Medigap</a> and free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/managedcare/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> and the NJ State Health Insurance Assistance Program (SHIP) for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> &middot; <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP Program</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medsuppl.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking & Insurance — Medicare Supplement Information</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ-specific help, contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For New Jersey-specific guidance, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medsupp.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance — Medicare Supplement</a> and the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased NJ counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> or the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}