import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Need Help Finding Best and Cheapest Medicare Supplement | Compare Rates Free | MedicareYourself",
  description:
    "Need help finding the best and cheapest Medicare Supplement? Anthony Orner compares every top carrier's rates for free — no obligation. Get your quote today.",
  openGraph: {
    title:
      "Need Help Finding Best and Cheapest Medicare Supplement | Compare Rates Free | MedicareYourself",
    description:
      "Need help finding the best and cheapest Medicare Supplement? Anthony Orner compares every top carrier's rates for free — no obligation. Get your quote today.",
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
      item: "https://www.medicareyourself.com/hub",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best and Cheapest Medicare Supplement",
      item: "https://www.medicareyourself.com/services/best-and-cheapest-medicare-supplement",
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
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "What is the cost of a good Medicare Supplement plan?",
    answer:
      "In 2025, a solid Medigap Plan G in New Jersey typically runs between $120 and $280 per month depending on your age, zip code, gender, and the insurance carrier. Every company sets its own premium for the exact same standardized benefits, which is why comparing rates from multiple carriers is so valuable. A licensed broker can show you all available options at no cost.",
  },
  {
    question:
      "Who provides free advice on the best supplemental Medicare program?",
    answer:
      "Independent Medicare brokers like Anthony Orner at EasyKind Medicare provide free, no-obligation help. Unlike captive agents who work for one company, independent brokers compare rates from every top carrier in your state. Their service costs you nothing because the insurance companies pay the broker directly. Your premium is the same whether you use a broker or buy direct.",
  },
  {
    question:
      "Is the cheapest Medicare Supplement plan always the best choice?",
    answer:
      "Not necessarily. A carrier offering the lowest rate today might use attained-age pricing, which means your premium increases every year as you age. A slightly higher premium from a company using community-rated or issue-age pricing could save you thousands over 10 or 15 years. Always ask how a company prices its policies before you sign up.",
  },
  {
    question: "Can I switch Medigap plans later if I find a cheaper one?",
    answer:
      "In most states, switching requires medical underwriting after your initial open enrollment period, and you could be denied. However, New Jersey offers year-round guaranteed issue rights for Medigap, meaning NJ residents can switch plans without health questions at any time. This is a significant advantage that residents in other states don't have.",
  },
];

export default function BestAndCheapestMedicareSupplement() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Best and Cheapest Medicare Supplement
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Need Help Finding the Best and Cheapest Medicare Supplement? Here&#39;s
        How It Works
      </h1>

      <Image
        src="/images/hub_best-and-cheapest-medicare-supplement.webp"
        alt="need help finding best and cheapest medicare supplement"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        If you need help finding the best and cheapest Medicare Supplement, you
        are not alone. Dozens of insurance companies sell the exact same
        standardized Medigap benefits, but their premiums can vary by $100 or
        more per month for identical coverage.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The trick is knowing how to compare them all quickly. That is exactly
        what I do for my clients, for free.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why the cheapest Medicare Supplement isn&#39;t always the best value
        </h2>
        <p className="text-gray-700 mb-3">
          According to Medicare.gov, insurance companies use three different
          pricing methods for Medigap: community-rated, issue-age-rated, and
          attained-age-rated. The cheapest premium today might come from a
          carrier using attained-age pricing, where your cost rises every
          birthday on top of inflation.
        </p>
        <p className="text-gray-700">
          A plan that costs $15 more per month now but uses issue-age pricing
          could save you over $3,000 across a decade. Cheap today does not
          always mean cheap long-term.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How a broker compares every carrier at once for free
        </h2>
        <p className="text-gray-700 mb-3">
          As an independent broker, I am not tied to any single insurance
          company. I pull real-time quotes from every top Medigap carrier
          licensed in your state and lay them side by side.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>You pay nothing for this service. Carriers pay the broker.</li>
          <li>
            Your premium is the same whether you buy through me or go direct.
          </li>
          <li>
            I compare the same lettered plan across carriers so you see true
            apples-to-apples pricing.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Which Medigap plans consistently offer the lowest premiums in 2025
        </h2>
        <p className="text-gray-700 mb-3">
          Plan G and Plan N are the two most popular options right now. Plan G
          covers everything except the Part B deductible, which is $257 in 2026.
          Plan N is usually $30 to $50 cheaper per month but adds small copays
          for office visits and ER trips.
        </p>
        <p className="text-gray-700">
          For most people turning 65, Plan G hits the sweet spot between
          comprehensive coverage and affordable premiums. But the &quot;cheapest&quot;
          plan letter depends on your health and how often you see doctors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          New Jersey residents have a unique advantage
        </h2>
        <p className="text-gray-700 mb-3">
          NJ is one of the few states with year-round guaranteed issue for
          Medigap. That means you can switch from one Medigap plan to another at
          any time without answering health questions or risking denial.
        </p>
        <p className="text-gray-700">
          In most other states, you only get guaranteed issue during your initial
          six-month open enrollment window. If you live in NJ, you can
          confidently lock in a rate now and switch later if a better deal
          appears.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          What to watch for when shopping on your own
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Always compare the same plan letter across companies. Plan G from
            one carrier covers exactly the same things as Plan G from another.
          </li>
          <li>
            Ask about household discounts. Many carriers offer 5-12% off if your
            spouse also enrolls.
          </li>
          <li>
            Check the carrier&#39;s rate increase history, not just this year&#39;s
            premium.
          </li>
          <li>
            Confirm the pricing method: community-rated, issue-age, or
            attained-age.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Get a side-by-side rate comparison in under 2 minutes
        </h2>
        <p className="text-gray-700 mb-3">
          I only need your zip code, date of birth, and gender to pull accurate
          quotes. No medical questions required during open enrollment. Call me
          and I will walk you through every option on the phone, or I can email
          you a comparison sheet you can review on your own time.
        </p>
        <p className="text-gray-700">
          There is zero obligation. If you find a better deal somewhere else, no
          hard feelings.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to find your cheapest Medicare Supplement rate?
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline hover:text-blue-600"
          >
            855-559-1700
          </a>{" "}
          or request your free comparison below.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan G: Full Benefits Breakdown
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Plan N: Is It Worth the Savings?
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
              href="/services/medicare-supplement-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in New Jersey
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}