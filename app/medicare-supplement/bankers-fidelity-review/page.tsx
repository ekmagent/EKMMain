import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { MF } from "@/lib/medicare-figures";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/bankers-fidelity-review";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APPLY_URL = "https://healthplans.now";

export const metadata: Metadata = {
  title: "Bankers Fidelity Medicare Supplement: Family Review 2026",
  description:
    "Bankers Fidelity, Bankers Fidelity Assurance, and Atlantic Capital Life — three Medigap companies in one A-rated carrier family. Ratings, plans, and how to apply.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bankers Fidelity Medicare Supplement: Family Review 2026",
    description:
      "Bankers Fidelity, Bankers Fidelity Assurance, and Atlantic Capital Life — three Medigap companies in one A-rated carrier family. Ratings, plans, and how to apply.",
    type: "article",
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: `${SITE_URL}/medicare-supplement` },
    { "@type": "ListItem", position: 3, name: "Bankers Fidelity Review", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bankers Fidelity Medicare Supplement Review: Plans, Rates & How to Apply",
  description:
    "Bankers Fidelity, Bankers Fidelity Assurance, and Atlantic Capital Life — three Medigap companies in one A-rated carrier family. Ratings, plans, and how to apply.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself",
    url: SITE_URL,
  },
  about: [
    { "@type": "InsuranceAgency", name: "Bankers Fidelity Life Insurance Company" },
    { "@type": "InsuranceAgency", name: "Bankers Fidelity Assurance Company" },
    { "@type": "InsuranceAgency", name: "Atlantic Capital Life Assurance Company" },
  ],
};

const faqs = [
  {
    question: "Is Bankers Fidelity the same company as Bankers Life?",
    answer:
      "No. They are separate, unrelated companies. Bankers Fidelity Life Insurance Company is part of a different carrier group; Bankers Life is owned by CNO Financial Group. Reviews of one do not apply to the other.",
  },
  {
    question: "Will my policy be issued by Bankers Fidelity or Atlantic Capital Life?",
    answer:
      "It depends on your state of residence. In most states the issuer is Bankers Fidelity Life or Bankers Fidelity Assurance. In approximately 14 states — including Ohio and Texas — Atlantic Capital Life Assurance is often the issuer. The carriers share an AM Best A- rating.",
  },
  {
    question: "Is the Bankers Fidelity family A-rated?",
    answer:
      "Yes. AM Best affirmed an A- (Excellent) Financial Strength Rating with a Stable outlook for the Bankers Fidelity Life Insurance Group — covering all three Medigap issuing companies — on April 22, 2026.",
  },
];

export default function BankersFidelityReviewPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Bankers Fidelity Review</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Bankers Fidelity Medicare Supplement Review: Plans, Rates &amp; How to Apply
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 mt-4">
              Bankers Fidelity Life Insurance Company, Bankers Fidelity Assurance Company, and
              Atlantic Capital Life Assurance Company are three legally separate Medicare Supplement
              insurance companies under common ownership, sharing a group A- (Excellent) AM Best
              rating affirmed in April 2026.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you&apos;ve received a quote from any of them, this guide explains how they&apos;re
              connected, where each one sells, and how to apply online in under 15 minutes.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              Last reviewed: April 2026 · AM Best rating via ambest.com · Carrier footprint via
              bankersfidelity.com and Atlantic Capital Life Assurance filings
            </p>
            <a
              href={APPLY_URL}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Apply for Your Medigap Plan →
            </a>
          </div>

          {/* Sidebar CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Ready to Enroll?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Apply online through healthplans.now — the live application takes most people under 15
              minutes, and the site routes your application to the correct Bankers Fidelity family
              issuer for your state.
            </p>
            <a
              href={APPLY_URL}
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Apply at healthplans.now
            </a>
            <a
              href="tel:8555591700"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm"
            >
              Or call 855-559-1700
            </a>
            <p className="text-xs text-gray-400 mt-3 text-center">Licensed independent broker</p>
          </div>
        </div>
      </section>

      {/* Three Companies Explained */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Bankers Fidelity Carrier Family: Three Companies Explained
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The confusion is understandable. When you search &quot;Bankers Fidelity Plan G reviews,&quot; you
          may see references to <strong>Bankers Fidelity Assurance</strong> or{" "}
          <strong>Atlantic Capital Life</strong> and wonder whether these are competitors,
          alternatives, or something else. They are neither. They are three related insurance
          companies under the same ownership, and your Medigap policy will be issued by whichever
          one is licensed to sell in your state.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-6">
          <li>
            <strong>Bankers Fidelity Life Insurance Company</strong> — the flagship company, founded
            in 1955. Writes the majority of the group&apos;s Medicare Supplement business nationally.
          </li>
          <li>
            <strong>Bankers Fidelity Assurance Company</strong> — a wholly-owned sister company, 100%
            reinsured by Bankers Fidelity Life. Used on specific policy forms where state filings
            require a separate issuing entity.
          </li>
          <li>
            <strong>Atlantic Capital Life Assurance Company</strong> — the newest issuer in the
            family, launched in 2024, currently writing Medicare Supplement in approximately 14
            states. Often the group&apos;s competitively-priced issuer in the states where it
            operates.
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          All three share the same AM Best A- (Excellent) financial strength rating, affirmed April
          22, 2026. They are regulated by the state insurance department in every state where they
          sell, and their premium rates must be approved through each state&apos;s rate-filing
          process.
        </p>
      </section>

      {/* Policy Issuer by State */}
      <section className="bg-green-50 border-y border-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Which Bankers Fidelity Company Issues Your Medigap Policy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            It depends on your state. When you apply through healthplans.now, the site routes your
            application to the correct issuing entity for your address. Here is the general pattern
            in the five states where we directly place Bankers Fidelity family policies:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-5 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Pennsylvania, New Jersey, Michigan
              </h3>
              <p className="text-gray-700 text-sm">
                Your policy is typically issued by{" "}
                <strong>Bankers Fidelity Life Insurance Company</strong> or{" "}
                <strong>Bankers Fidelity Assurance Company</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-2">Ohio, Texas</h3>
              <p className="text-gray-700 text-sm">
                Your policy is typically issued by{" "}
                <strong>Atlantic Capital Life Assurance Company</strong>, the group&apos;s newer
                issuer that operates in these states.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            If you are not in one of those five states, healthplans.now will confirm whether the
            Bankers Fidelity family is available for you at the time of application.
          </p>
        </div>
      </section>

      {/* Bankers Fidelity vs Bankers Life */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bankers Fidelity vs. Bankers Life — Not the Same Company
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A common source of confusion online: <strong>Bankers Fidelity</strong> (the carrier
          discussed on this page) and <strong>Bankers Life</strong> are different, unrelated
          companies. Bankers Life is owned by CNO Financial Group and sells a different product mix.
          If you have been reading Bankers Life reviews expecting them to apply to Bankers Fidelity
          Medigap coverage, they do not. The two companies share no ownership, no underwriting, no
          policy forms.
        </p>
      </section>

      {/* Plan Letters */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Plan Letters the Bankers Fidelity Family Offers
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Standardized Medicare Supplement plan letters available across the Bankers Fidelity group
          typically include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6">
          <li>
            <strong>Plan G</strong> — the most common modern Medigap choice for people newly
            eligible for Medicare on or after January 1, 2020. Covers everything Medicare covers
            except the annual Part B deductible ({MF.partBDeductible}).
          </li>
          <li>
            <strong>High-Deductible Plan G</strong> — same benefit structure as Plan G with a lower
            premium and a federally-set annual deductible
          </li>
          <li>
            <strong>Plan N</strong> — lower premium than Plan G with small copays at the point of
            care and a Part B excess charge exposure
          </li>
          <li>
            <strong>Plan A, Plan K</strong> — less commonly purchased but available in most filing
            states
          </li>
          <li>
            <strong>Plan F</strong> — available only to people first eligible for Medicare before
            January 1, 2020 (federally closed to newer beneficiaries)
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Exact plan letter availability varies by state and by issuing entity, so the specific
          plans you&apos;ll see quoted for your situation depend on your ZIP code.
        </p>
      </section>

      {/* Household Discount */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bankers Fidelity Family Household Discount
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Atlantic Capital Life Assurance policies include a <strong>7% household discount</strong>{" "}
          for eligible applicants. The Bankers Fidelity Life and Bankers Fidelity Assurance
          household discount varies by state filing. When two people in the same household both
          enroll, the discount applies to each policy for as long as both are in force.
        </p>
      </section>

      {/* Is Now the Right Time to Apply */}
      <section className="bg-blue-50 border-y border-blue-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Is Now the Right Time to Apply for a Bankers Fidelity Medigap Plan?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Timing is the single biggest factor in what your Medigap application costs and whether
            it gets approved:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-6">
            <li>
              <strong>During your Medigap Open Enrollment Period</strong> — a six-month window that
              begins the first day of the month you are both 65 or older AND enrolled in Medicare
              Part B — you have a federal guaranteed-issue right. Carriers in the Bankers Fidelity
              family cannot deny your coverage or charge more based on your health during this
              window. This is the best time to apply, and it does not repeat.
            </li>
            <li>
              <strong>Outside your Medigap Open Enrollment Period</strong> — most Medigap
              applications go through medical underwriting. Many applicants are still approved, but
              your approval and rate are not guaranteed.
            </li>
            <li>
              <strong>If you have a federal guaranteed-issue trigger</strong> — losing employer
              group coverage, being within the first 12 months of a Medicare Advantage plan and
              wanting to switch back, or moving out of your plan&apos;s service area — federal law
              gives you another guaranteed-issue window. These windows are time-limited; applying
              promptly protects the right.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            If any of these situations apply to you, apply now. Waiting can shift your application
            from guaranteed-issue to underwritten, which costs more and is not always approved.
          </p>
          <a
            href={APPLY_URL}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Start My Medigap Application →
          </a>
        </div>
      </section>

      {/* How to Apply */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Apply for a Bankers Fidelity Medigap Plan
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bankers Fidelity family policies cannot be purchased directly on bankersfidelity.com — the
          carrier does not operate a direct online enrollment portal. Applications are submitted
          through a licensed broker. Applying online at healthplans.now takes most people under 15
          minutes. You will need:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6">
          <li>Your Medicare card (for your Medicare number and Part A / Part B effective dates)</li>
          <li>Your current address and date of birth</li>
          <li>
            A bank account or credit card for premium auto-pay (you can change the payment method
            any time after your policy is issued)
          </li>
          <li>
            If you are applying outside your Medigap Open Enrollment Period, answers to a short set
            of health-history questions for underwriting
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          After you submit, your application is routed to the Bankers Fidelity family company
          licensed in your state — Bankers Fidelity Life, Bankers Fidelity Assurance, or Atlantic
          Capital Life. Most straightforward applications receive an issuance decision within a few
          business days. More involved underwriting can take longer.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Once your policy is issued, federal law gives you a <strong>30-day free look period</strong>.
          You can review the full policy after it arrives, and if you change your mind for any reason
          you may cancel and receive a full refund of any premium paid. Applying is not a permanent
          commitment — it is simply starting the process of getting covered.
        </p>
        <a
          href={APPLY_URL}
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
        >
          Apply Now at healthplans.now →
        </a>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4">
        <FAQSection faqs={faqs} />
      </section>

      {/* Phone CTA band */}
      <PhoneCTA label="Talk to a Licensed Broker About Bankers Fidelity" />

      {/* TPMO Disclosure */}
      <section className="max-w-6xl mx-auto px-4 py-10 border-t border-gray-100">
        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 text-sm text-gray-700">
          <p className="mb-3">
            <strong>Disclosure.</strong> This page is published by MedicareYourself, a brand of
            EasyKind Medicare. We are a licensed independent Medicare insurance broker. We do not
            offer every plan available in your area. Currently we place Bankers Fidelity family
            Medicare Supplement policies in Pennsylvania, New Jersey, Ohio, Michigan, and Texas. Any
            information we provide is limited to the plans we offer in your area. Please contact
            Medicare.gov or 1-800-MEDICARE (TTY 1-877-486-2048), 24 hours a day, 7 days a week, to
            get information on all of your options. Plan availability, plan letters, and premiums
            vary by state and are subject to state Department of Insurance rate filings.
          </p>
          <p className="text-xs text-gray-500">
            Medicare has neither reviewed nor endorsed this information. Medicare figures cited in
            this article: Part B premium {MF.partBPremium}/month, Part B deductible{" "}
            {MF.partBDeductible}, Part A deductible {MF.partADeductible} (MF.year {MF.year}).
          </p>
        </div>
      </section>
    </>
  );
}
