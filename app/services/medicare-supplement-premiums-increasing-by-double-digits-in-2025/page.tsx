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
    "Medicare Supplement premiums increasing by double digits in 2025 — see which carriers raised rates and how switching could save you $50+/month. Free review.",
  openGraph: {
    title:
      "medicare supplement premiums increasing by double digits in 2025 | Free Rate Review | MedicareYourself",
    description:
      "Medicare Supplement premiums increasing by double digits in 2025 — see which carriers raised rates and how switching could save you $50+/month. Free review.",
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
      item: "https://medicareyourself.com/medicare",
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
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
};

const faqs = [
  {
    question:
      "How much will Medicare Supplement premiums increase in 2026?",
    answer:
      "No one can predict exact 2026 rates yet. However, if medical claim trends stay elevated, expect continued increases in the 5-15% range for many carriers. A free rate review before your renewal can help you find a lower-cost option.",
  },
  {
    question: "How much does a Medicare Supplement cost in 2025?",
    answer:
      "Plan G premiums in 2025 range from roughly $100 to $300+ per month depending on your age, ZIP code, gender, tobacco use, and carrier. The same plan letter covers the same benefits regardless of carrier, so price shopping matters.",
  },
  {
    question: "Can I switch Medigap plans without underwriting?",
    answer:
      "In most states, switching carriers outside your initial Medigap Open Enrollment Period requires medical underwriting. Some states offer additional protections. Federal guaranteed issue rights apply in specific situations like losing employer coverage or a carrier leaving your area.",
  },
  {
    question: "Why are some carriers raising rates more than others?",
    answer:
      "Each carrier files rates based on its own claims experience. A carrier with an older or sicker pool of policyholders will raise rates faster. Newer market entrants often have lower rates because their risk pool hasn't aged yet.",
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
        <Link href="/medicare" className="hover:underline">
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
        src="/images/hub_medicare-supplement-premiums-increasing-by-double-digits-in-2025.webp"
        alt="medicare supplement premiums increasing by double digits in 2025"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Medicare Supplement premiums increasing by double digits in 2025 isn't a
        rumor. It's on renewal notices landing in mailboxes right now. If your
        Medigap bill jumped 10%, 15%, or more this year, you're not alone and
        you're not stuck.
      </p>

      <PhoneCTA />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which carriers filed the largest rate hikes this year
        </h2>
        <p className="text-gray-700 mb-2">
          Industry data through early 2025 shows several major carriers filed
          significant Plan G and Plan N increases. Aetna, Mutual of Omaha, and
          UnitedHealthcare took some of the largest rate actions on open blocks
          of business. Smaller regional carriers varied widely by state.
        </p>
        <p className="text-gray-700">
          The same Plan G from one carrier might cost $50 to $80 more per month
          than from another. Benefits are identical. Only the price tag changes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why rates spiked this year
        </h2>
        <p className="text-gray-700 mb-2">
          Medical claim costs have been elevated since 2023. Delayed
          procedures from the pandemic era, higher hospital charges, and
          increased utilization all hit carrier loss ratios hard. Carriers
          respond by raising premiums to cover what they're paying out.
        </p>
        <p className="text-gray-700">
          This isn't unique to one company. It's an industry-wide trend driven
          by real healthcare spending.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How attained-age pricing compounds over time
        </h2>
        <p className="text-gray-700 mb-2">
          Most Medigap plans use attained-age pricing. Your premium goes up as
          you get older, plus any rate increases the carrier files. A 5% age
          bump stacked on a 12% rate increase means your bill climbed 17% in
          one year.
        </p>
        <p className="text-gray-700">
          Over five or ten years, this compounding effect can double your
          original premium. That's why periodic rate reviews matter so much.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          When switching carriers makes sense (and when it doesn't)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Good candidate to switch:</strong> You're in good health
            and can pass underwriting. A newer carrier offers the same plan
            letter at $50+ less per month.
          </li>
          <li>
            <strong>Proceed with caution:</strong> You have health conditions
            that might cause a denial. Never cancel your current plan until
            you're approved by the new one.
          </li>
          <li>
            <strong>Stay put:</strong> Your rate is still competitive after
            comparison, or you have guaranteed issue rights you'd lose by
            switching.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What you can't control vs. what you can
        </h2>
        <p className="text-gray-700 mb-2">
          You can't stop carriers from filing rate increases. You can control
          which carrier you're with. Since every Plan G or Plan N covers the
          exact same benefits by law, the only variable is price and the
          company behind it.
        </p>
        <p className="text-gray-700">
          A 10-minute rate comparison could save you $600 to $1,000 a year.
          That's real money, especially on a fixed income.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a free rate review before your next renewal
        </h2>
        <p className="text-gray-700">
          I'll pull current rates from every carrier available in your ZIP code,
          compare them to what you're paying now, and tell you straight whether
          switching makes sense. No cost, no pressure. If your current plan is
          still the best deal, I'll tell you that too.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Stop overpaying for the same coverage.
        </p>
        <p className="mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          Anthony Orner, Licensed Medicare Broker
        </p>
      </div>

      <section className="mt-10">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-10">
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
              Medicare Supplement Plan N: Lower Premiums, Small Tradeoffs
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Your Best Window for Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/services/switching-medigap-plans"
              className="text-blue-600 hover:underline"
            >
              Switching Medigap Plans: When It Works and When It Doesn&apos;t
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}