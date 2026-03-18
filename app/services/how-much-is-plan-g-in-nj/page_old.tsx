import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "How Much Is Plan G in NJ | Free Rate Comparison by Age | MedicareYourself",
  description:
    "How much is Plan G in NJ? See actual monthly premiums by age from every major carrier. Anthony Orner finds your lowest rate — get a free quote today.",
  openGraph: {
    title:
      "How Much Is Plan G in NJ | Free Rate Comparison by Age | MedicareYourself",
    description:
      "How much is Plan G in NJ? See actual monthly premiums by age from every major carrier. Anthony Orner finds your lowest rate — get a free quote today.",
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
      item: "https://www.medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How Much Is Plan G in NJ",
      item: "https://www.medicareyourself.com/services/how-much-is-plan-g-in-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Is Plan G in NJ? Real Rates From Every Major Carrier",
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
  datePublished: "2025-01-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much is Medicare Plan G in New Jersey?",
    answer:
      "Plan G premiums in NJ typically range from around $120 to $300+ per month depending on your age, gender, tobacco use, and the carrier. Rates vary significantly between companies for identical coverage, which is why comparing every carrier matters.",
  },
  {
    question: "How much will Medicare Plan G be in 2026?",
    answer:
      "2026 Plan G rates haven't been finalized yet, but premiums generally increase 3-8% per year. Locking in a rate earlier - especially during your Medigap Open Enrollment Period - protects you from medical underwriting and potential rate increases tied to health changes.",
  },
  {
    question: "Is Plan G worth the premium over Plan N?",
    answer:
      "Plan G covers everything Plan N covers, plus it eliminates the small copays Plan N charges for some office and ER visits. If you see doctors frequently, Plan G often saves money overall. If you're healthy and rarely visit specialists, Plan N's lower premium might work. We can run both scenarios for you.",
  },
  {
    question: "Can I switch Plan G carriers later to get a lower rate?",
    answer:
      "Yes, but outside your initial Medigap Open Enrollment Period you'll likely need to pass medical underwriting. That's why many people who switched from Plan G to an Advantage plan regret it - getting back onto a supplement can be difficult if your health changes.",
  },
];

export default function HowMuchIsPlanGInNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">How Much Is Plan G in NJ</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          How Much Is Plan G in NJ? Real Rates From Every Major Carrier
        </h1>

        <Image
          src="/images/hub_how-much-is-plan-g-in-nj.webp"
          alt="how much is plan g in nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          How much is Plan G in NJ? The short answer: anywhere from about $120
          to over $300 a month, depending on your age, carrier, and a few other
          factors. The real answer takes about two minutes to find when you
          compare every option side by side.
        </p>
        <p className="mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey. I pull
          rates from every major carrier so you don't have to.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plan G monthly premiums by age in New Jersey (2025)
          </h2>
          <p className="mb-3">
            New Jersey carriers use different pricing methods - some base your
            rate on your current age (attained-age), some on the age you bought
            the policy (issue-age). This creates a wide range even among people
            the same age.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Age 65: roughly $120 - $210/month</li>
            <li>Age 70: roughly $150 - $260/month</li>
            <li>Age 75: roughly $180 - $310/month</li>
          </ul>
          <p>
            These ranges reflect non-tobacco rates across multiple carriers. Your
            exact rate depends on your specific profile - call and I'll pull the
            real numbers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why two 67-year-olds pay different rates for the same plan
          </h2>
          <p className="mb-3">
            Plan G benefits are standardized by federal law. Every carrier's Plan
            G covers the exact same things. But each company sets its own
            premium, and the differences are significant.
          </p>
          <p>
            Pricing varies by rating method (attained-age vs. issue-age), gender,
            ZIP code, tobacco use, and household discounts. Two neighbors on the
            same street can pay $50 - $80 apart for identical coverage. That gap
            adds up to hundreds a year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Carriers with the lowest Plan G rates right now
          </h2>
          <p className="mb-3">
            I work with every major Medigap carrier licensed in New Jersey. The
            lowest-cost carrier changes based on your age and ZIP code - there's
            no single "cheapest" company for everyone.
          </p>
          <p>
            That's the whole point of an independent broker. I don't work for one
            insurance company. I compare them all for you and show you the
            numbers so you can decide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G actually covers
          </h2>
          <p className="mb-3">
            Plan G pays everything Original Medicare doesn't cover except the
            Part B deductible ($283 in 2026). That means no copays, no
            coinsurance, no surprise hospital bills. You see any doctor who
            accepts Medicare - no networks, no referrals.
          </p>
          <p>
            It covers the Part A deductible ($1,676 per benefit period in 2026),
            skilled nursing coinsurance ($209.50/day for days 21-100), and
            foreign travel emergencies. For most people in NJ, Plan G is the most
            popular supplement for good reason.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why locking in early matters in New Jersey
          </h2>
          <p className="mb-3">
            Your Medigap Open Enrollment Period starts the month you turn 65 and
            are enrolled in Part B. During those six months, no carrier can deny
            you or charge more for health conditions. After that window closes,
            you'll face medical underwriting.
          </p>
          <p>
            I've talked with too many people who switched to an Advantage plan,
            then couldn't get back on a supplement when their health changed.
            Pre-existing conditions like diabetes can lock you out. If you're
            approaching 65, apply up to six months before your Part B start date
            to lock in your rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get your exact Plan G rate in under 2 minutes
          </h2>
          <p>
            I'll pull quotes from every carrier, show you the numbers, and
            explain what matters for your situation. No cost, no pressure. Just
            clear answers from someone who does this every day in New Jersey.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to see your Plan G rate?
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
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            . No sign-up required.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G: Full Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Plan N: Which Saves You More?
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
            <li>
              <Link
                href="/services/medicare-plan-g-vs-advantage"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Medicare Advantage: Honest Comparison
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}