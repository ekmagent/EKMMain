import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Plan G Rates for 68 Year Old in New Jersey | Free Carrier Comparison | MedicareYourself",
  description:
    "Plan G rates for a 68-year-old in New Jersey differ by $60+/month depending on carrier. Compare real NJ premiums with Anthony Orner. Free, no obligation.",
  openGraph: {
    title:
      "Plan G Rates for 68 Year Old in New Jersey | Free Carrier Comparison | MedicareYourself",
    description:
      "Plan G rates for a 68-year-old in New Jersey differ by $60+/month depending on carrier. Compare real NJ premiums with Anthony Orner. Free, no obligation.",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much is Medicare Plan G in NJ?",
    answer:
      "Plan G rates in New Jersey vary significantly by carrier, your age, gender, and tobacco use. At age 68, monthly premiums from major carriers can range from roughly $150 to over $300. The only way to find your exact rate is a personalized comparison across all available NJ carriers.",
  },
  {
    question: "Is Plan G more expensive than Plan N?",
    answer:
      "Plan G premiums are typically higher than Plan N because Plan G covers the Part B deductible ($283 in 2026) and has no copays at doctor visits. Plan N has lower premiums but charges up to $20 copays for office visits and up to $50 for ER visits that don't result in admission. For many people at 68, Plan G's predictable costs are worth the slightly higher premium.",
  },
  {
    question: "Can I switch Plan G carriers at 68 to get a lower rate?",
    answer:
      "Yes, you can apply to switch carriers at any time. However, outside of your initial Medigap Open Enrollment Period, you'll typically need to pass medical underwriting. If your health is good, switching to a lower-cost carrier can save hundreds per year on the exact same Plan G coverage.",
  },
  {
    question:
      "Does New Jersey have special Medigap enrollment protections at 68?",
    answer:
      "New Jersey requires a 6-month Medigap Open Enrollment Period starting when you're 65 and enrolled in Part B. During that window, no carrier can deny you or charge more based on health. At 68, if you're past that window, most applications require underwriting - though federal guaranteed issue rights may apply in certain situations like losing employer coverage.",
  },
];

export default function PlanGRates68NJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Plan G Rates for 68-Year-Old in New Jersey
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Plan G Rates for a 68-Year-Old in New Jersey: Carrier-by-Carrier
        Breakdown
      </h1>

      <Image
        src="/images/plan-g-rates-for-68-year-old-in-new-jersey.webp"
        alt="Plan G rates for 68 year old in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Plan G rates for a 68-year-old in New Jersey swing widely depending on
        which carrier you choose. The coverage is identical across every company
        - same benefits, same claims acceptance, same doctors. The only
        difference is what you pay each month.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, a licensed Medicare broker in NJ. Here's what I see
        when I run real quotes for clients your age.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How NJ's open enrollment rules affect rates at 68
        </h2>
        <p className="mb-3">
          New Jersey gives you a 6-month Medigap Open Enrollment Period starting
          at age 65 when you enroll in Part B. During that window, every carrier
          must accept you at standard rates regardless of health history.
        </p>
        <p>
          At 68, that window has closed for most people. You can still apply for
          Plan G, but carriers will ask health questions. If you're in good
          health, you'll likely qualify - and a carrier comparison becomes even
          more important because your rate depends on who you apply with.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Monthly premium examples from major NJ carriers
        </h2>
        <p className="mb-3">
          I can't publish exact rates here because they change quarterly and
          depend on your gender, zip code, and tobacco status. But to give you a
          realistic picture for a 68-year-old in New Jersey:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The lowest Plan G premiums in NJ for this age group typically start
            around $150-$180/month
          </li>
          <li>
            Mid-range carriers often fall between $200-$250/month
          </li>
          <li>
            Higher-priced carriers can charge $280-$320/month for the exact same
            Plan G
          </li>
        </ul>
        <p className="mt-3">
          The NJ Department of Human Services publishes rate comparison charts
          each year. I use those plus real-time quoting tools to find the best
          fit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why the same Plan G can cost $60 more with the wrong carrier
        </h2>
        <p className="mb-3">
          Every Plan G covers the same things: the Part A deductible ($1,676 in
          2026), skilled nursing coinsurance, Part B excess charges, and the Part
          B deductible of $283. No exceptions. Every carrier pays claims the same
          way.
        </p>
        <p>
          The price difference comes down to how each company sets rates - some
          use attained-age pricing (rates climb as you age), others use
          issue-age pricing (locked to when you bought it), and each has
          different loss ratios and overhead. That $60/month gap adds up to $720
          a year for identical coverage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Attained-age vs. issue-age pricing in New Jersey
        </h2>
        <p className="mb-3">
          At 68, this distinction matters. An issue-age carrier may have charged
          less when you were 65, but some attained-age carriers actually offer
          lower rates at 68 because they price competitively for that bracket.
        </p>
        <p>
          There's no universal rule. I run both types side by side so you can see
          the 5-year and 10-year cost projections - not just today's number.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What NJ hospitals and networks mean for Plan G
        </h2>
        <p className="mb-3">
          Plan G works with Original Medicare, so there's no network. Any doctor
          or hospital that accepts Medicare accepts your Plan G - whether that's
          Hackensack Meridian, RWJBarnabas, Cooper, or AtlantiCare.
        </p>
        <p>
          This is one of the main reasons people at 68 choose Plan G over
          Medicare Advantage. No referrals, no prior authorizations, no surprise
          network restrictions. I hear from clients regularly who switched back
          from Advantage plans specifically because of referral hassles and
          unexpected copays.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request your custom NJ Plan G rate at 68
        </h2>
        <p className="mb-3">
          I'll pull quotes from every carrier writing Plan G in New Jersey for
          your exact age, zip code, and health profile. Takes about 10 minutes
          on the phone. No cost, no obligation, and no pressure.
        </p>
        <p>
          If you're currently on an Advantage plan and considering the switch,
          I'll walk you through the underwriting process honestly - including
          whether you're likely to qualify.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Get your free Plan G rate comparison
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm text-gray-600">
          Anthony Orner - Licensed Medicare Broker in New Jersey
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey: Full Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/plan-g-vs-plan-n-nj"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Plan N in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-nj"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment in NJ: What You Need to Know
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}