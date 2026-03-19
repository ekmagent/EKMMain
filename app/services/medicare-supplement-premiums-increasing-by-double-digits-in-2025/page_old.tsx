import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare supplement premiums increasing by double digits in 2025 | Free Rate Review | MedicareYourself",
  description:
    "Medicare Supplement premiums increasing by double digits in 2025 — see which carriers raised rates and how switching could save $50+/month. Free review.",
  openGraph: {
    title:
      "medicare supplement premiums increasing by double digits in 2025 | Free Rate Review | MedicareYourself",
    description:
      "Medicare Supplement premiums increasing by double digits in 2025 — see which carriers raised rates and how switching could save $50+/month. Free review.",
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
      name: "Medicare Supplement Premiums Increasing by Double Digits in 2025",
      item: "https://medicareyourself.com/services/medicare-supplement-premiums-increasing-by-double-digits-in-2025",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement Premiums Increasing by Double Digits in 2025: Why It's Happening and How to Respond",
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
  datePublished: "2025-01-15",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much will Medigap premiums increase in 2025?",
    answer:
      "Many carriers filed rate increases between 10% and 20% for 2025, particularly on Plan G and Plan N. The exact increase depends on your carrier, your state, and your age band. Some policyholders saw increases above 15%.",
  },
  {
    question: "Why are Medicare Supplement rates going up so much?",
    answer:
      "Elevated Medicare claim trends since 2023 have pushed carrier loss ratios higher than their pricing targets. Carriers are now correcting with larger rate actions to keep their books financially stable.",
  },
  {
    question: "Can I switch Medigap carriers to get a lower rate?",
    answer:
      "Yes, in most states you can apply to a different carrier anytime. You'll typically need to answer health questions, but if you're in reasonable health, switching could save you $50 or more per month for identical Plan G or Plan N coverage.",
  },
  {
    question: "Will my coverage change if I switch Medigap carriers?",
    answer:
      "No. Medigap plans are standardized by the federal government. A Plan G from one carrier covers exactly the same things as a Plan G from another. The only difference is price and customer service.",
  },
];

export default function MedicareSupplementPremiumsIncreasing2025() {
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
          Medicare Supplement Premiums Increasing by Double Digits in 2025
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Medicare Supplement Premiums Increasing by Double Digits in 2025: Why
        It&apos;s Happening and How to Respond
      </h1>

      <Image
        src="/images/medicare-supplement-premiums-increasing-by-double-digits-in-2025.webp"
        alt="medicare supplement premiums increasing by double digits in 2025"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare Supplement premiums increasing by double digits in 2025 caught
        a lot of people off guard. Multiple carriers filed rate hikes of 10% to
        20% this year, and if you didn&apos;t shop your renewal, you&apos;re
        likely overpaying for the exact same coverage.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Here&apos;s what&apos;s driving these increases and what you can actually
        do about it.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which carriers filed the largest rate hikes this year
        </h2>
        <p className="text-gray-700 mb-3">
          According to actuarial data tracking open blocks of business, several
          major carriers implemented significantly larger rate actions in 2024
          and into 2025 than in prior years. Plan G and Plan N saw the steepest
          adjustments.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>
            Some of the largest national carriers raised Plan G rates by 12% to
            18%.
          </li>
          <li>
            Smaller regional carriers weren&apos;t immune either, with many
            filing increases above 10%.
          </li>
          <li>
            A few carriers held rates flat or raised modestly, creating real
            savings opportunities for people willing to switch.
          </li>
        </ul>
        <p className="text-gray-700">
          I can&apos;t name specific carriers here, but I can pull every rate
          filed in your zip code during a free review.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What&apos;s actually causing the double-digit increases
        </h2>
        <p className="text-gray-700 mb-3">
          Medicare claim costs have been running high since 2023. Carriers price
          Medigap policies to hit specific loss ratios. When claims exceed those
          targets for a year or two, carriers correct by raising premiums.
        </p>
        <p className="text-gray-700">
          This isn&apos;t about your individual health. It&apos;s about the
          entire pool of policyholders on that carrier&apos;s book of business.
          You could be perfectly healthy and still get hit with a 15% increase.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How attained-age pricing compounds over time
        </h2>
        <p className="text-gray-700 mb-3">
          Most Medigap policies use attained-age pricing. Your premium rises
          every year just because you&apos;re a year older. Stack a normal age
          increase on top of a double-digit trend adjustment, and your bill can
          jump $40 to $80 in a single year.
        </p>
        <p className="text-gray-700">
          Over five years, that compounding effect can add hundreds per month.
          People who locked in a good rate at 65 sometimes find themselves
          paying $250+ by age 72 without ever changing plans.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When switching carriers makes sense (and when it doesn&apos;t)
        </h2>
        <p className="text-gray-700 mb-3">
          Switching makes sense when another carrier offers the same
          standardized plan at a meaningfully lower rate and you can pass
          medical underwriting. Plan G is Plan G regardless of the logo on the
          card.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>
            If you&apos;re in good health, switching could save $50 to $100 per
            month.
          </li>
          <li>
            If you have serious health conditions, you may not qualify. In that
            case, staying put is likely your best option.
          </li>
          <li>
            Some states offer guaranteed issue protections for certain
            situations. Rules vary by state, so call to confirm.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Don&apos;t confuse Medigap rate hikes with Part B premium changes
        </h2>
        <p className="text-gray-700 mb-3">
          The standard Part B premium for 2025 was $185/month. For 2026,
          it&apos;s $202.90/month. That&apos;s a separate cost from your Medigap
          premium. You pay both.
        </p>
        <p className="text-gray-700">
          When people see their total monthly Medicare cost jump, it&apos;s
          often the Medigap side doing the heavy lifting. That&apos;s the part
          you can actually control by shopping carriers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free rate review before your next renewal
        </h2>
        <p className="text-gray-700 mb-3">
          I run rate comparisons across every carrier available in your zip code.
          It takes about 10 minutes on the phone. No pressure, no sign-up
          required.
        </p>
        <p className="text-gray-700">
          If your current rate is competitive, I&apos;ll tell you. If
          there&apos;s a better option, you&apos;ll see the numbers side by
          side.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Stop overpaying for the same coverage.
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free rate comparison.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Get a Free Quote
        </Link>
      </div>

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
              href="/services/medigap-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-plan-n-vs-plan-g"
              className="text-blue-600 hover:underline"
            >
              Plan N vs. Plan G: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/when-to-switch-medigap-plans"
              className="text-blue-600 hover:underline"
            >
              When to Switch Medigap Plans Without Losing Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-part-b-premium-2026"
              className="text-blue-600 hover:underline"
            >
              2026 Medicare Part B Premium: What You&apos;ll Pay
            </Link>
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Written by Anthony Orner, Licensed Medicare Broker |{" "}
        <Link href="/about" className="hover:underline">
          About the Author
        </Link>
      </p>
    </main>
  );
}