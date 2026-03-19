import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "need help finding best and cheapest medicare supplement | Free Comparison | MedicareYourself",
  description:
    "Need help finding the best and cheapest Medicare Supplement? Anthony Orner compares every top carrier's rates free — no obligation. Get your quote today.",
  openGraph: {
    title:
      "need help finding best and cheapest medicare supplement | Free Comparison | MedicareYourself",
    description:
      "Need help finding the best and cheapest Medicare Supplement? Anthony Orner compares every top carrier's rates free — no obligation. Get your quote today.",
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
      name: "Best and Cheapest Medicare Supplement",
      item: "https://medicareyourself.com/services/best-and-cheapest-medicare-supplement",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Need Help Finding the Best and Cheapest Medicare Supplement? Here's How It Works",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question:
      "Who provides free advice on the best supplemental Medicare program?",
    answer:
      "An independent Medicare broker like Anthony Orner compares rates from every top carrier at no cost to you. Brokers are paid by the insurance company you choose, so there's never a fee for the advice or the quote.",
  },
  {
    question: "Is Plan G always the cheapest Medicare Supplement?",
    answer:
      "Plan G is the most popular Medigap plan for people turning 65 in 2025, but the cheapest option depends on your age, zip code, and carrier. Two companies can charge very different premiums for the exact same Plan G benefits. That's why a side-by-side comparison matters.",
  },
  {
    question: "How often do Medicare Supplement premiums increase?",
    answer:
      "Rates can increase annually for two reasons: age-based increases and block rate increases driven by claims within your insured pool. When both stack, jumps of 10-18% in a single year aren't unusual. Choosing a carrier with a stable rate history can save thousands over time.",
  },
  {
    question:
      "When should I apply for a Medicare Supplement to get the best rate?",
    answer:
      "Apply during your Medigap Open Enrollment Period, which is the 6 months starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you at their best rate regardless of health conditions.",
  },
];

export default function BestAndCheapestMedicareSupplement() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

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
          Best and Cheapest Medicare Supplement
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Need Help Finding the Best and Cheapest Medicare Supplement? Here's How
        It Works
      </h1>

      <Image
        src="/images/best-and-cheapest-medicare-supplement_photo.webp"
        alt="need help finding best and cheapest medicare supplement"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Need help finding the best and cheapest Medicare Supplement? You're not
        alone. Most people turning 65 don't realize how much premiums vary
        between carriers for the exact same coverage.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed broker in NJ. I compare rates across every
        top carrier for free, so you don't have to call ten companies yourself.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the cheapest Medicare Supplement isn't always the best value
        </h2>
        <p className="text-gray-700 mb-2">
          The lowest starting premium can cost you more over time. Some carriers
          price aggressively low to attract new enrollees, then raise rates
          steeply once you're locked in.
        </p>
        <p className="text-gray-700">
          Medigap plans are standardized by letter. A Plan G from one company
          covers exactly the same things as a Plan G from another. The only
          difference is the premium and how it changes year after year. That's
          where the real money is.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Two reasons your premium goes up (and one you can control)
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Age-based increases:</strong> If your plan is attained-age
            rated, the premium rises simply because you get older. Predictable
            but unavoidable.
          </li>
          <li>
            <strong>Block rate increases:</strong> When claims rise within your
            pool of insureds, everyone in the block shares the cost. This has
            nothing to do with your personal health.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          When both stack in the same year, 10-18% jumps happen. You can't
          control aging, but you can pick a carrier with a stable claims history.
          That's what I help you find.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How a broker compares every carrier at once for free
        </h2>
        <p className="text-gray-700 mb-2">
          I'm independent. That means I'm not employed by any single insurance
          company. I pull rates from every carrier available in your zip code and
          lay them side by side.
        </p>
        <p className="text-gray-700">
          My compensation comes from the carrier you choose, not from you. The
          rate is the same whether you call the company directly or go through
          me. The difference is you see every option instead of just one.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which Medigap plans consistently offer the lowest premiums in 2025
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G and Plan N are the two most popular choices right now. Plan G
          covers everything except the Part B deductible ($283/year in 2026).
          Plan N has slightly lower premiums but adds small copays for some
          office and ER visits.
        </p>
        <p className="text-gray-700">
          Rates vary by carrier, age, and zip code. In many areas, the gap
          between the cheapest and most expensive Plan G from different companies
          can be $60-$80/month for the exact same benefits. That's $720-$960 a
          year you'd overpay without comparing.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Lock in your best rate during open enrollment
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period is the 6 months starting the month
          you turn 65 and are enrolled in Part B. During this window, every
          carrier must accept you at their standard rate regardless of your
          health history.
        </p>
        <p className="text-gray-700">
          Miss it, and carriers can charge more or deny you based on medical
          underwriting. If you're within 6 months of your 65th birthday, start
          comparing now.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a side-by-side rate comparison in under 2 minutes
        </h2>
        <p className="text-gray-700 mb-2">
          Call me or fill out a quote request. I'll need your zip code, date of
          birth, and Part B start date. That's it.
        </p>
        <p className="text-gray-700">
          You'll get a clear comparison showing every carrier's rate for the plan
          letter you want. No pressure, no obligation, no sales pitch disguised
          as advice.
        </p>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to find your lowest rate?
        </h2>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          for a free side-by-side comparison, or request your quote online.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100 transition"
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
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-supplement-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Is It Worth the Savings?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: How to Decide
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-sm text-gray-500">
        Written by Anthony Orner, Licensed Medicare Broker | Last updated July
        2025
      </p>
    </main>
  );
}