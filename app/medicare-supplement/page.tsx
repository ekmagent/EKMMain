import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Medicare Supplement (Medigap) Hub: State Guides & Carrier Reviews 2026",
  description:
    "Compare Medicare Supplement plans by state and carrier with data-driven Medigap reviews built on real rate filings. Call 855-559-1700 for help.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Medicare Supplement (Medigap) Hub: State Guides & Carrier Reviews 2026",
    description:
      "Compare Medicare Supplement plans by state and carrier. Data-driven Medigap reviews with real rate filings and loss ratios, plus state pricing guides for NJ and PA.",
    type: "website",
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: PAGE_URL },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Medicare Supplement (Medigap) Guides and Carrier Reviews",
  description:
    "State-by-state Medicare Supplement pricing guides and data-driven carrier reviews built on actual rate filings and loss ratios.",
  url: PAGE_URL,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: SITE_URL,
  },
};

const carrierReviews = [
  {
    href: "/medicare-supplement/mutual-of-omaha-medigap-review",
    name: "Mutual of Omaha",
    hook: "One of the largest Medigap writers in the country — rate history and state-by-state pricing reviewed.",
  },
  {
    href: "/medicare-supplement/humana-medigap-review",
    name: "Humana",
    hook: "Rate filings, loss ratios, and why its Plan G ranks very differently in PA, NJ, OH, and TX.",
  },
  {
    href: "/medicare-supplement/medico-medigap-review",
    name: "Medico",
    hook: "A smaller carrier that often prices aggressively — what the filings actually show.",
  },
  {
    href: "/medicare-supplement/bankers-fidelity-review",
    name: "Bankers Fidelity",
    hook: "Frequently among the cheapest Plan G rates, with a paper-application quirk worth knowing about.",
  },
  {
    href: "/medicare-supplement/woodmenlife-medigap-review",
    name: "WoodmenLife",
    hook: "A fraternal benefit society writing Medigap — how its rates and structure compare.",
  },
];

const faqs = [
  {
    question: "What is a Medicare Supplement (Medigap) plan?",
    answer:
      "A Medicare Supplement plan is private insurance that pays some or all of the costs Original Medicare leaves behind, such as the Part A deductible and the 20% Part B coinsurance. Plans are federally standardized by letter — every Plan G has identical benefits regardless of which insurance company sells it — so the main differences between carriers are price and rate stability.",
  },
  {
    question: "If every Plan G is identical, why do carrier reviews matter?",
    answer:
      "Because carriers charge very different premiums for the same standardized benefits, and they raise rates at very different speeds. A carrier that is cheapest today can file double-digit increases year after year. Our reviews look at actual state rate filings and loss ratios to show which carriers are priced sustainably in your state.",
  },
  {
    question: "When is the best time to enroll in a Medigap plan?",
    answer:
      "For most people, it is the 6-month Medigap Open Enrollment Period that starts when you are 65 or older and enrolled in Medicare Part B. During that window, carriers cannot deny you or charge more because of your health. Outside it, you may face medical underwriting unless you qualify for a guaranteed issue right.",
  },
  {
    question: "Does the best Medigap carrier vary by state?",
    answer:
      "Yes, dramatically. Medigap premiums are filed state by state, so a carrier that is the cheapest option in Pennsylvania can be among the most expensive in Texas for the identical plan letter. That is why our guides and reviews always break pricing out by state rather than giving one national answer.",
  },
  {
    question: "Do I need Original Medicare to buy a Medigap policy?",
    answer:
      "Yes. According to Medicare.gov, you generally must have both Part A (Hospital Insurance) and Part B (Medical Insurance) to purchase a Medicare Supplement policy. Medigap works alongside Original Medicare — it does not replace it and cannot be paired with a Medicare Advantage plan.",
  },
  {
    question: "What does a Medigap policy actually help pay for?",
    answer:
      "Medigap is private insurance that helps cover your share of out-of-pocket costs in Original Medicare, such as copayments, coinsurance, and deductibles. The exact costs covered depend on which standardized plan letter you choose. Because benefits are federally standardized, comparing carriers really comes down to price and rate history.",
  },
];

export default function MedicareSupplementHub() {
  return (
    <main className="bg-white">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={collectionSchema} />

      {/* Breadcrumbs */}
      <nav className="max-w-4xl mx-auto px-4 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medicare Supplement</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Medicare Supplement (Medigap): State Guides &amp; Carrier Reviews
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          By <strong className="text-gray-600">Anthony Orner</strong>, Independent Licensed Medicare Insurance Broker — appointed with multiple carriers
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Medicare Supplement (Medigap) plans are federally standardized — every Plan G has
          identical benefits no matter which company sells it — so choosing well comes down to
          two things: what each carrier charges in <em>your state</em>, and how fast it has been
          raising rates. This hub collects our state pricing guides and data-driven carrier
          reviews, built on actual rate filings and loss ratios rather than marketing claims.
          As an independent brokerage appointed with multiple carriers, we compare every
          carrier&apos;s filed rate side by side — unbiased, and at no cost to you, because
          brokers are paid by the carrier you choose at the same rate regardless of company.
        </p>
        <div className="mb-10">
          <PhoneCTA label="Compare Carriers Free" />
        </div>

        {/* State guides */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Medigap Pricing by State</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <Link
            href="/medicare-supplement/new-jersey"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">New Jersey Medigap Guide</h3>
            <p className="text-sm text-gray-600">
              Plan G and Plan N pricing, carrier rankings, and NJ-specific consumer protections.
            </p>
          </Link>
          <Link
            href="/medicare-supplement/new-jersey/rate-index"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">NJ Medigap Rate Index 2026</h3>
            <p className="text-sm text-gray-600">
              Original filed-rate dataset: lows, highs, spreads, and household discounts across every NJ carrier.
            </p>
          </Link>
          <Link
            href="/medicare-supplement/pennsylvania"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">Pennsylvania Medigap Guide</h3>
            <p className="text-sm text-gray-600">
              What Plan G actually costs across PA and which carriers price it sustainably.
            </p>
          </Link>
        </div>

        {/* Carrier reviews */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Carrier Reviews — Honest Data</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each review reports the carrier&apos;s filed rate increases, annual loss ratios, and
          where its Plan G actually ranks against every competitor in the state — including
          when the honest answer is &ldquo;shop elsewhere.&rdquo;
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {carrierReviews.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-blue-800 mb-1">{c.name} Medigap Review</h3>
              <p className="text-sm text-gray-600">{c.hook}</p>
            </Link>
          ))}
        </div>

        {/* Compare + switch */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare &amp; Switch</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <Link
            href="/medicare-supplement/compare-policies"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">Compare Medigap Policies</h3>
            <p className="text-sm text-gray-600">
              Plan G vs. Plan N vs. High-Deductible G — how the standardized plans differ and who each fits.
            </p>
          </Link>
          <Link
            href="/medicare-supplement/switch-carriers"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">Switch Medigap Carriers</h3>
            <p className="text-sm text-gray-600">
              Keep identical benefits and pay less — how switching works and when underwriting applies.
            </p>
          </Link>
          <Link
            href="/learn/how-to-enroll-in-a-medicare-supplement-plan"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">Medigap Enrollment Guide</h3>
            <p className="text-sm text-gray-600">
              Step-by-step: choosing a plan letter, picking a carrier, and applying at the right time.
            </p>
          </Link>
          <Link
            href="/learn/what-is-medigap"
            className="block border border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-blue-800 mb-1">New to Medigap? Start Here</h3>
            <p className="text-sm text-gray-600">
              What Medigap covers, how it works with Original Medicare, and how plans are standardized.
            </p>
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Want the short answer for your ZIP code?
          </h2>
          <p className="text-gray-600 mb-4">
            One call and we&apos;ll pull every carrier&apos;s filed rate for your age and county —
            free, no obligation.
          </p>
          <PhoneCTA label="Call for Free Advice" />
        </div>
      </article>
    </main>
  );
}
