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
    "Compare Medicare Supplement rates by age for Plan G, Plan N, and Plan F. See how premiums shift over time and lock in your lowest rate. Call 855-559-1700.",
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
,
  {
    question: "Are Plan G and Plan N benefits standardized across carriers?",
    answer:
      "Yes. Medicare standardizes every Medigap plan letter, so Plan G benefits are identical from one carrier to the next, and the same is true for Plan N. The only differences between carriers are premium pricing, rate increase history, and customer service. That means shopping by price for the same letter is straightforward.",
  },
  {
    question: "Can I switch from Plan F to Plan G to get a lower rate?",
    answer:
      "In most states, switching Medigap plans after your Open Enrollment Period requires medical underwriting, meaning the carrier can review your health and potentially decline coverage or charge more. If you qualify, moving from Plan F to Plan G often lowers your monthly premium because Plan G doesn't include the Part B deductible coverage. A licensed broker can help you compare offers before you cancel existing coverage.",
  },
  {
    question: "Does Plan N have any out-of-pocket costs that Plan G doesn't?",
    answer:
      "Yes. Plan N requires copays for some office visits and emergency room visits, and it doesn't cover Part B excess charges, while Plan G does. In exchange, Plan N typically has a lower monthly premium than Plan G. Whether the savings outweigh the copays depends on how often you use care.",
  }
,
  {
    question: "Does my ZIP code affect my Medicare Supplement rate?",
    answer:
      "Yes. Carriers file rates by state and often by rating area within a state, so two people the same age can pay different premiums for the same Plan G based on ZIP code. Urban areas typically see higher Medigap premiums than rural areas because of local claims costs. We can compare your ZIP-specific rates when you call 855-559-1700.",
  },
  {
    question: "Can I switch from Plan F to Plan G to save money?",
    answer:
      "You can apply to switch, but outside your Open Enrollment Period most carriers require medical underwriting, meaning you can be denied or charged more based on health. Some states have rules like birthday or anniversary windows that allow switching without underwriting. It's worth comparing your current premium against a fresh Plan G quote each year.",
  },
  {
    question: "Are Medicare Supplement rates the same for men and women?",
    answer:
      "Most carriers offer a household or female discount, so rates can differ slightly by gender and living situation. Tobacco use also affects pricing with many carriers. Comparing multiple carriers side-by-side is the only reliable way to find your lowest rate.",
  }
,
  {
    question: "Does my ZIP code affect my Medicare Supplement premium?",
    answer:
      "Yes. Carriers file rates by ZIP code or rating area, so two people the same age with the same plan letter can pay different premiums in different parts of the state. Urban ZIP codes often see higher premiums than rural ones due to claims costs. That's why comparing carriers locally matters more than national averages.",
  },
  {
    question: "Can I switch from Plan F to Plan G to save money?",
    answer:
      "You can apply to switch, but outside your Medigap Open Enrollment Period most states allow carriers to use medical underwriting. If you're healthy enough to qualify, switching from Plan F to Plan G often lowers your monthly premium while keeping nearly identical coverage. A licensed broker can shop your underwriting across carriers in one application process.",
  },
  {
    question: "Is Plan N a good option if I want lower premiums than Plan G?",
    answer:
      "Plan N typically has a lower monthly premium than Plan G in exchange for small copays at office and ER visits and no coverage of Part B excess charges. If your providers accept Medicare assignment and you're comfortable with minor copays, Plan N can be a strong value. Call 855-559-1700 for a side-by-side quote.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans later if my rates get too high?",
    answer:
      "Yes, you can apply to switch Medigap plans or carriers at any time, but outside your initial Open Enrollment Period most states allow carriers to medically underwrite your application. That means they can review your health history and decline coverage or charge higher rates. A licensed broker can shop carriers to see if you qualify for a lower rate before you cancel your current plan.",
  },
  {
    question: "What's the difference between attained-age, issue-age, and community-rated pricing?",
    answer:
      "Attained-age policies start lower but increase as you get older. Issue-age policies base your premium on the age you were when you bought the plan and don't go up due to age alone. Community-rated plans charge the same premium to everyone in a given area regardless of age. Each pricing method affects your long-term cost differently.",
  },
  {
    question: "Does Plan N cost less than Plan G long-term?",
    answer:
      "Plan N generally has a lower monthly premium than Plan G, but it includes small copays for some office and emergency room visits and doesn't cover Part B excess charges. For healthy enrollees who don't visit doctors frequently, the lower premium often outweighs the occasional copays. A side-by-side quote based on your age and ZIP code is the best way to compare true total cost.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans later to get a lower rate?",
    answer:
      "Yes, you can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue situation, carriers in most states can require medical underwriting. That means they can review your health history and either decline coverage or charge a higher rate. If you're healthy, shopping your plan every few years can sometimes uncover meaningful savings.",
  },
  {
    question: "Does Plan N cost less than Plan G?",
    answer:
      "Plan N premiums are typically lower than Plan G premiums for the same age and carrier. The trade-off is that Plan N requires small copays for some office and ER visits and does not cover Part B excess charges. For people who don't expect frequent specialist visits, Plan N can be a strong value.",
  },
  {
    question: "Do Medicare Supplement rates depend on whether I smoke or my health?",
    answer:
      "During your Medigap Open Enrollment Period, carriers cannot use your health to deny you or charge more, though most still apply a tobacco rating. Outside that window, in states that allow underwriting, both health conditions and tobacco use can significantly affect your premium or eligibility.",
  }
,
  {
    question: "Can I switch from Plan F to Plan G later to save money?",
    answer:
      "Yes, but in most states you'll need to pass medical underwriting to switch carriers or plans outside of your Medigap Open Enrollment Period. If you're healthy, switching from Plan F to Plan G often reduces your premium. Call 855-559-1700 and we'll run a free comparison to see if switching makes sense for you.",
  },
  {
    question: "What's the difference between Plan G and Plan N at the same age?",
    answer:
      "Plan N typically has a lower monthly premium than Plan G, but you'll pay small copays for office and ER visits and you're responsible for Part B excess charges. Plan G has no copays and covers Part B excess charges in full. Which is cheaper overall depends on how often you use care.",
  },
  {
    question: "Is Plan F still available for new Medicare enrollees?",
    answer:
      "Plan F is only available if you were eligible for Medicare before January 1, 2020. If you became Medicare-eligible on or after that date, Plan G is the closest equivalent and is generally the most popular choice for new enrollees seeking comprehensive coverage.",
  }
,
  {
    question: "Does my ZIP code affect my Medicare Supplement rate?",
    answer:
      "Yes. Carriers file rates by state and often by ZIP code or rating area within a state. Two people the same age and gender can pay very different premiums for the identical Plan G simply because they live in different ZIP codes, which is why a side-by-side quote in your area matters.",
  },
  {
    question: "Can I switch Medicare Supplement plans later if I find a lower rate?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue situation, carriers in most states can use medical underwriting. That means they can decline you or charge more based on health history, so it's important to compare carefully before switching.",
  },
  {
    question: "Are women's Medicare Supplement rates lower than men's?",
    answer:
      "In most states, yes. Many carriers offer a household or gender discount, and women often pay slightly less than men for the same plan because of claims experience. The discount amount varies by carrier and state, so comparing multiple carriers is the only way to see your true lowest rate.",
  }
,
  {
    question: "Can I switch Medicare Supplement plans later to get a lower rate?",
    answer:
      "Yes, you can apply to switch Medigap plans at any time, but outside of your Open Enrollment Period or a guaranteed issue situation, carriers can use medical underwriting. That means they can deny coverage or charge more based on your health. Many people shop their Medigap rate every couple of years to see if a healthier-priced block is available.",
  },
  {
    question: "Does ZIP code affect my Medicare Supplement rate?",
    answer:
      "Yes. Carriers file rates by state and often by rating area or ZIP code within a state. Two people the same age with the same Plan G can pay different premiums simply because they live in different counties or ZIP codes.",
  },
  {
    question: "Is Plan N a good alternative if Plan G rates are too high?",
    answer:
      "Plan N can be a strong option for budget-conscious enrollees because its premium is typically lower than Plan G. The tradeoff is small copays for some office and ER visits, plus you're responsible for Part B excess charges. For people who see doctors who accept Medicare assignment, Plan N often delivers significant monthly savings.",
  }
,
  {
    question: "Does my ZIP code affect my Medicare Supplement rate?",
    answer:
      "Yes. Carriers file rates by ZIP code or rating area because medical costs and claim trends vary by region. Two people the same age with the same plan letter can pay different premiums simply because they live in different ZIP codes. Call 855-559-1700 for a quote specific to your area.",
  },
  {
    question: "Can I switch Medicare Supplement plans to get a lower rate later?",
    answer:
      "You can apply to switch at any time, but outside of your Medigap Open Enrollment Period or a guaranteed issue situation, carriers in most states can use medical underwriting. That means you may be denied or charged more based on health history, so it's important to compare carefully before switching.",
  }
,
  {
    question: "What are the three Medigap pricing methods carriers use to set rates?",
    answer:
      "Medigap policies are priced one of three ways: community-rated (same premium regardless of age), issue-age rated (based on the age you buy), or attained-age rated (increases as you get older). Attained-age policies often start lowest but rise the most over time. Knowing which method a carrier uses helps you forecast long-term costs, not just today's premium.",
  },
  {
    question: "Can I switch Medicare Supplement plans later if I find a lower rate?",
    answer:
      "Outside your initial Medigap Open Enrollment Period, switching plans usually requires medical underwriting, and carriers can decline coverage or charge more based on your health. A few states offer broader switching rights, so the rules depend on where you live. A licensed broker can shop carriers and run underwriting prescreens before you apply.",
  },
  {
    question: "Is Plan N a better value than Plan G for some people?",
    answer:
      "Plan N has a lower monthly premium than Plan G but includes small copays for office and ER visits and doesn't cover Part B excess charges. If you don't visit doctors often and live in a state where excess charges are limited, Plan N can save money overall. We can compare both side-by-side at 855-559-1700.",
  }
,
  {
    question: "Does Plan N cost less than Plan G?",
    answer:
      "Yes, Plan N generally has a lower monthly premium than Plan G. The trade-off is that Plan N requires small copays for some office and emergency room visits and does not cover Part B excess charges. For people who don't visit doctors often and use providers who accept Medicare assignment, Plan N can offer meaningful monthly savings.",
  },
  {
    question: "Can I still buy Plan F in 2026?",
    answer:
      "Plan F is only available to people who were eligible for Medicare before January 1, 2020. If you qualified before that date but didn't enroll, you may still be able to apply, though medical underwriting may apply outside of a guaranteed issue window. Newly eligible beneficiaries are directed to Plan G or Plan N instead.",
  },
  {
    question: "Will switching Medigap carriers lower my rate?",
    answer:
      "It can, but outside your Open Enrollment Period most states allow carriers to use medical underwriting, which may result in higher rates or denial. If you're in good health, shopping your Plan G or Plan N to a lower-priced carrier with identical standardized benefits can reduce your premium. Call 855-559-1700 for a free rate comparison.",
  }
,
  {
    question: "Does Plan F still make sense if I'm eligible for it?",
    answer:
      "Plan F is only available to people who were eligible for Medicare before January 1, 2020. If you qualify, Plan F covers the Part B deductible that Plan G doesn't, but the premium is typically higher. Whether it makes sense depends on whether the extra premium outweighs the deductible savings in your situation.",
  }
,
  {
    question: "What's the difference between community-rated, issue-age, and attained-age Medigap pricing?",
    answer:
      "Community-rated plans charge the same premium regardless of age, so a 65-year-old and an 85-year-old pay the same base rate. Issue-age plans set your premium based on the age you were when you bought the policy, and that rate doesn't change as you get older. Attained-age plans start lower at 65 but rise as you age, which can make them more expensive over time.",
  },
  {
    question: "Can I switch from Plan F to Plan G to save money?",
    answer:
      "Yes, but outside your Open Enrollment Period most states require medical underwriting, meaning carriers can review your health history before approving the switch. If you're healthy, switching from Plan F to Plan G often lowers your premium for nearly identical coverage. A licensed broker can shop carriers and check which ones are most likely to approve you.",
  },
  {
    question: "Does where I live affect my Medicare Supplement rate?",
    answer:
      "Yes. Medigap premiums vary by ZIP code because carriers factor in regional medical costs and claims experience. Two people the same age with the same Plan G can pay very different premiums in different states or even different counties within the same state.",
  }
,
  {
    question: "Does my ZIP code affect my Medicare Supplement rate?",
    answer:
      "Yes. Medigap premiums are set by carrier, plan letter, age, tobacco use, gender in some states, and your ZIP code. Two people the same age with the same plan letter can pay different premiums simply because they live in different rating areas.",
  },
  {
    question: "Can I switch Medicare Supplement plans later to get a lower rate?",
    answer:
      "You can apply to switch Medigap plans at any time, but outside your Open Enrollment Period or a guaranteed issue situation, carriers can require medical underwriting. If you're in good health, switching can lower your premium, but a denial is possible if you have certain conditions.",
  },
  {
    question: "Is Plan N a good way to get a lower Medigap premium than Plan G?",
    answer:
      "Plan N typically has a lower monthly premium than Plan G in exchange for small copays at office and ER visits and exposure to Part B excess charges. For people who don't visit doctors often and live in states that limit excess charges, Plan N can be a strong cost-saving alternative.",
  }
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
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carriers and rates through the <a href="https://www.state.nj.us/dobi/index.shtml" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rate filings and consumer protections through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare rates and file complaints with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rates and file complaints through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">your local SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier filings and consumer protections with the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling. Questions about your rate? Call 855-559-1700.</div>
      </section>
    </main>
  );
}