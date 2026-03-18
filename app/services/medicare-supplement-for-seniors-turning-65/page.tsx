import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare supplement for seniors turning 65 | Free Quote in Minutes | MedicareYourself",
  description:
    "Medicare supplement for seniors turning 65 — lock in guaranteed-issue rates during your 6-month window. Anthony Orner compares top carriers. Free quote.",
  openGraph: {
    title:
      "medicare supplement for seniors turning 65 | Free Quote in Minutes | MedicareYourself",
    description:
      "Medicare supplement for seniors turning 65 — lock in guaranteed-issue rates during your 6-month window. Anthony Orner compares top carriers. Free quote.",
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
      item: "https://www.medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Supplement for Seniors Turning 65",
      item: "https://www.medicareyourself.com/services/medicare-supplement-for-seniors-turning-65",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement for Seniors Turning 65: Your One Best Window for Low Rates",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question: "How much does a Medicare supplement cost at age 65?",
    answer:
      "Rates vary by carrier, plan letter, zip code, and tobacco status. At 65, you'll generally see the lowest premiums you'll ever be offered because you're entering during your Medigap Open Enrollment Period with guaranteed issue rights. Call 855-559-1700 for a personalized quote comparing carriers in your area.",
  },
  {
    question:
      "What happens if I miss my 6-month Medigap open enrollment window?",
    answer:
      "After your 6-month Medigap Open Enrollment Period ends, carriers can use medical underwriting to decide whether to accept you and what to charge. If you have pre-existing conditions like diabetes or heart disease, you could be denied coverage or face higher premiums. This window does not repeat annually.",
  },
  {
    question: "Can I switch from Medicare Advantage back to a Medigap plan?",
    answer:
      "You can switch, but outside of specific guaranteed issue situations, you'll face medical underwriting. Some people who leave a Medigap plan for a Medicare Advantage plan find they can't get back to their supplement at the same rate — or at all. Call us before making any switch so you understand the risks.",
  },
  {
    question: "Is Plan G or Plan N better for someone turning 65?",
    answer:
      "Plan G covers everything except the annual Part B deductible ($283 in 2026). Plan N has lower premiums but adds small copays for office and ER visits and doesn't cover Part B excess charges. If you want the most predictable costs, Plan G is the safer pick. If you're healthy and want to save monthly, Plan N works well.",
  },
];

export default function MedicareSupplementSeniorsTurning65() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
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
          Medicare Supplement for Seniors Turning 65
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Medicare Supplement for Seniors Turning 65: Your One Best Window for Low
        Rates
      </h1>

      <Image
        src="/images/medicare-supplement-for-seniors-turning-65.webp"
        alt="Medicare supplement for seniors turning 65"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare supplement for seniors turning 65 comes with a one-time
        advantage most people don't fully appreciate until it's gone. You get
        exactly six months of guaranteed-issue access to any Medigap plan sold in
        your state, at the lowest rate you'll ever see.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Miss it, and carriers can deny you or charge more based on your health.
        I'm Anthony Orner, a licensed Medicare broker, and I help people lock
        this down before the clock runs out.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why your 6-month open enrollment window is worth protecting
        </h2>
        <p className="text-gray-700 mb-2">
          Under federal law, your Medigap Open Enrollment Period starts the
          month you turn 65 and are enrolled in Part B. For six months, no
          carrier can reject you, delay your coverage, or charge more because of
          health conditions.
        </p>
        <p className="text-gray-700">
          This is a one-time window. It does not come back every year like the
          Part D enrollment period. Once it closes, medical underwriting kicks
          in. People with diabetes, heart conditions, or even controlled high
          blood pressure can get declined outright.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G vs Plan N for new enrollees at 65
        </h2>
        <p className="text-gray-700 mb-3">
          Both are the most popular picks for people turning 65. Here's the real
          difference:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Plan G:</strong> Covers everything Original Medicare doesn't,
            except the Part B deductible ($283/year in 2026). No copays, no
            surprise bills. Most predictable option.
          </li>
          <li>
            <strong>Plan N:</strong> Lower monthly premium. You'll pay up to $20
            copays for some office visits and up to $50 for ER visits that don't
            lead to admission. Does not cover Part B excess charges.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          If you want zero surprises, Plan G. If you're healthy and want to save
          $30-50/month, Plan N is solid. The benefits are standardized by law, so
          the coverage is identical across carriers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How attained-age pricing affects your premium every year
        </h2>
        <p className="text-gray-700 mb-2">
          Most Medigap plans use attained-age pricing. That means your premium
          goes up as you get older, even if you never file a claim. This is
          predictable and expected.
        </p>
        <p className="text-gray-700">
          What catches people off guard is the second type of increase: block
          rate adjustments. When claims rise in your carrier's pool of
          policyholders, everyone shares the cost. Stack both together and 10-18%
          annual jumps aren't unusual. That's why which carrier you choose
          matters as much as which plan letter.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Step-by-step enrollment timeline before your 65th birthday
        </h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>
            <strong>6 months before turning 65:</strong> Start comparing Medigap
            carriers and plan letters. This is when to call us.
          </li>
          <li>
            <strong>3 months before:</strong> Sign up for Medicare Parts A and B
            through Social Security (your Initial Enrollment Period starts 3
            months before your birthday month).
          </li>
          <li>
            <strong>1-2 months before:</strong> Apply for your Medigap plan so
            coverage starts the month Part B begins.
          </li>
          <li>
            <strong>Birthday month:</strong> Your 6-month Medigap Open
            Enrollment window officially opens.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          Still working with employer coverage? You may be able to delay Part B
          without penalty. But the rules get specific fast. Call before assuming.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why carrier choice matters more than you'd think
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G from one carrier has identical medical benefits to Plan G from
          another. That's federal law. What's not identical is long-term premium
          behavior.
        </p>
        <p className="text-gray-700">
          Some carriers price low to attract new enrollees, then raise rates
          aggressively once the block ages. Others price moderately from the
          start and hold steadier over time. I compare rate histories across
          carriers so you're not just chasing the cheapest first-year premium.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What people wish they'd known before enrolling
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Medicare doesn't cover dental, vision, or hearing. You'll need
            separate plans for those.
          </li>
          <li>
            You still need a standalone Part D drug plan with a Medigap
            supplement.
          </li>
          <li>
            Switching from a Medigap plan to Medicare Advantage is easy.
            Switching back is not. Underwriting can block you.
          </li>
          <li>
            The Part B late enrollment penalty is 10% for every 12-month period
            you delayed without qualifying coverage. It lasts permanently.
          </li>
        </ul>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Get your free Medigap quote before your window closes
        </h2>
        <p className="mb-4 text-lg">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or request a quote online. I'll compare carriers side by side so you
          lock in the right rate at 65.
        </p>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get a Free Quote
        </Link>
      </section>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan N: Lower Premiums, Small Tradeoffs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs Medicare Advantage: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-enrollment-timeline"
              className="text-blue-600 hover:underline"
            >
              Medicare Enrollment Timeline: When to Sign Up for Each Part
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}