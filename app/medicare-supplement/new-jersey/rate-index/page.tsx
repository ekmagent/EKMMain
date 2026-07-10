import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { getSnapshot, type CsgAgeEntry } from "@/lib/csg-snapshot";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/medicare-supplement/new-jersey/rate-index";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "New Jersey Medigap Rate Index 2026: Filed Rates, Spreads & Carrier Data",
  description:
    "Original dataset: what Medicare Supplement Plan G and Plan N actually cost in New Jersey from CSG Actuarial filed rates — lows, highs, spreads, household discounts, and how NJ compares to PA, OH, and TX.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "New Jersey Medigap Rate Index 2026",
    description:
      "Original dataset: NJ Plan G and Plan N filed-rate lows, highs, spreads, and carrier counts from CSG Actuarial, with four-state comparison.",
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
    { "@type": "ListItem", position: 3, name: "New Jersey", item: `${SITE_URL}/medicare-supplement/new-jersey` },
    { "@type": "ListItem", position: 4, name: "NJ Medigap Rate Index 2026", item: PAGE_URL },
  ],
};

function usd(n: number | null | undefined): string {
  return n == null ? "—" : `$${n.toFixed(2)}`;
}

function AgeTable({ plan, entries }: { plan: string; entries: [string, CsgAgeEntry][] }) {
  return (
    <div className="overflow-x-auto mb-2">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="text-left px-4 py-3 rounded-tl-lg">Plan {plan} — age</th>
            <th className="text-left px-4 py-3">Lowest filed rate</th>
            <th className="text-left px-4 py-3">Highest filed rate</th>
            <th className="text-left px-4 py-3">Monthly spread</th>
            <th className="text-left px-4 py-3 rounded-tr-lg">Carriers quoting</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([age, e], i) => (
            <tr key={age} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{age}</td>
              <td className="px-4 py-3 text-green-700 font-medium border-b border-gray-100">{usd(e.low)}</td>
              <td className="px-4 py-3 text-red-600 font-medium border-b border-gray-100">{usd(e.high)}</td>
              <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{usd(e.spread)}</td>
              <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{e.carrierCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NjRateIndexPage() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const asOf = snapshot?.asOfDate ?? "2026-04-21";

  const g = nj?.plans?.G ?? {};
  const n = nj?.plans?.N ?? {};
  const g65 = g["65"];
  const n65 = n["65"];

  const otherStates = (["PA", "OH", "TX"] as const)
    .map((code) => ({ code, entry: snapshot?.states?.[code] }))
    .filter((s) => s.entry?.plans?.G?.["65"]);

  return (
    <main className="bg-white">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "New Jersey Medigap Rate Index 2026",
          description:
            "Original filed-rate dataset for New Jersey Medicare Supplement Plan G and Plan N: lows, highs, spreads, carrier counts, and household discounts from CSG Actuarial data.",
          datePublished: "2026-07-10",
          dateModified: asOf > "2026-07-10" ? asOf : "2026-07-10",
          inLanguage: "en-US",
          author: { "@type": "Person", name: "Anthony Orner", url: `${SITE_URL}/about` },
          publisher: { "@type": "Organization", name: "MedicareYourself", url: SITE_URL },
        }}
      />

      <nav className="max-w-4xl mx-auto px-4 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">New Jersey</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Rate Index 2026</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          New Jersey Medigap Rate Index 2026
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          By <strong className="text-gray-600">Anthony Orner</strong>, Licensed Medicare Insurance Broker ·
          Filed-rate data as of {asOf} · Source: CSG Actuarial
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          {g65 && n65 ? (
            <>
              A 65-year-old in New Jersey can pay anywhere from <strong>{usd(g65.low)} to {usd(g65.high)} per month</strong> for
              Medicare Supplement Plan G — a <strong>{usd(g65.spread)}/month spread across {g65.carrierCount} carriers</strong> for
              federally identical benefits. Plan N runs {usd(n65.low)} to {usd(n65.high)} across {n65.carrierCount} carriers.
              This index publishes the actual filed-rate data so you can see the market before any carrier&apos;s
              marketing does.
            </>
          ) : (
            <>
              This index publishes actual filed-rate data for New Jersey Medicare Supplement plans so you can
              see the market before any carrier&apos;s marketing does.
            </>
          )}
        </p>
        <div className="mb-10">
          <PhoneCTA label="Get Your Exact NJ Rate" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan G Filed Rates by Age (NJ)</h2>
        <AgeTable plan="G" entries={Object.entries(g)} />
        <p className="text-xs text-gray-500 mb-8">
          Sample: ZIP {nj?.sampleZip} ({nj?.sampleCity}), female, non-tobacco, no household discount. New Jersey is
          community-rated, so premiums do not increase with age after purchase — the small age differences above
          reflect issue-age pricing at purchase.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan N Filed Rates by Age (NJ)</h2>
        <AgeTable plan="N" entries={Object.entries(n)} />
        <p className="text-xs text-gray-500 mb-8">Same sample profile as Plan G above.</p>

        {g65?.hhd?.low != null && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Household Discounts in NJ</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Only <strong>{g65.hhd.carriersOffering} of {g65.carrierCount} NJ Plan G carriers</strong> offer a household
              discount, worth {g65.hhd.minDiscountPct}%–{g65.hhd.maxDiscountPct}% off the monthly premium. With the
              discount applied, filed Plan G rates start at {usd(g65.hhd.low)}. If you and your spouse are both
              enrolling, the discount can change which carrier is actually cheapest.
            </p>
          </>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Named-Carrier Examples (Plan G, age 65)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          From our published carrier reviews, all sourced to the same {asOf} CSG dataset:{" "}
          <Link href="/medicare-supplement/medico-medigap-review" className="text-blue-600 hover:underline font-medium">Medico (Wellabe)</Link>{" "}
          files $165.47 (rank 5 of 19),{" "}
          <Link href="/medicare-supplement/humana-medigap-review" className="text-blue-600 hover:underline font-medium">Humana</Link>{" "}
          files $182.60 (rank 13), and{" "}
          <Link href="/medicare-supplement/woodmenlife-medigap-review" className="text-blue-600 hover:underline font-medium">WoodmenLife</Link>{" "}
          files $205.29 (rank 16). Humana&apos;s NJ Plan G block has filed two consecutive increases — +7.01%
          (June 2024) and +16.22% (August 2025) — with its NJ loss ratio crossing 100% in 2025, a pattern that
          historically precedes further increases.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          The cheapest and most expensive carriers change as filings land. For the current cheapest carrier at
          your exact ZIP and age, call us — we quote every filed carrier, not a marketing shortlist.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">How NJ Compares: Four-State Index (Plan G, age 65)</h2>
        <div className="overflow-x-auto mb-2">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-4 py-3 rounded-tl-lg">State (sample city)</th>
                <th className="text-left px-4 py-3">Lowest Plan G</th>
                <th className="text-left px-4 py-3">Highest Plan G</th>
                <th className="text-left px-4 py-3">Carriers</th>
                <th className="text-left px-4 py-3 rounded-tr-lg">Rating rule</th>
              </tr>
            </thead>
            <tbody>
              {nj && g65 && (
                <tr className="bg-green-50">
                  <td className="px-4 py-3 font-bold text-gray-900 border-b border-gray-100">New Jersey ({nj.sampleCity})</td>
                  <td className="px-4 py-3 text-green-700 font-medium border-b border-gray-100">{usd(g65.low)}</td>
                  <td className="px-4 py-3 text-red-600 font-medium border-b border-gray-100">{usd(g65.high)}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{g65.carrierCount}</td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">Community-rated</td>
                </tr>
              )}
              {otherStates.map(({ code, entry }, i) => {
                const e = entry!.plans.G["65"];
                return (
                  <tr key={code} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">
                      {code === "PA" ? "Pennsylvania" : code === "OH" ? "Ohio" : "Texas"} ({entry!.sampleCity})
                    </td>
                    <td className="px-4 py-3 text-green-700 font-medium border-b border-gray-100">{usd(e.low)}</td>
                    <td className="px-4 py-3 text-red-600 font-medium border-b border-gray-100">{usd(e.high)}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{e.carrierCount}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">Attained-age (typical)</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-8 mt-4">
          New Jersey&apos;s entry price is higher than Ohio&apos;s or Texas&apos;s, but its community rating means the
          premium does not climb with your age after you buy — a structural trade-off most national comparisons
          miss. NJ also prohibits tobacco rate differentials during the 6-month Medigap Open Enrollment Period,
          a consumer protection unique among these four states.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Methodology</h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-1">
          <li>Rates are carrier <strong>filed rates</strong> from CSG Actuarial as of {asOf}, not marketing quotes.</li>
          <li>Sample profile: female, non-tobacco, ZIP {nj?.sampleZip ?? "08002"} ({nj?.sampleCity ?? "Cherry Hill"}); ages as labeled; household discount excluded except where noted.</li>
          <li>&ldquo;Spread&rdquo; is the monthly dollar gap between the cheapest and most expensive filed rate for identical, federally standardized benefits.</li>
          <li>Carrier counts reflect carriers returning a filed quote for this profile; carriers can enter or exit between snapshots.</li>
          <li>The index is refreshed when new filings meaningfully change the data; the as-of date above always reflects the underlying snapshot.</li>
        </ul>
        <p className="text-sm text-gray-500 mb-10">
          Journalists and researchers: this data may be cited with attribution to MedicareYourself.com and a link
          to this page. For carrier-level detail or other states, contact{" "}
          <a href="mailto:anthony@easykindmedicare.com" className="text-blue-600 hover:underline">anthony@easykindmedicare.com</a>.
        </p>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">The spread is the story: same benefits, {g65 ? usd(g65.spread) : "$113"}/month apart.</p>
          <p className="text-gray-300 text-sm mb-4">One call and we&apos;ll tell you where every carrier lands at your exact ZIP and age — free.</p>
          <PhoneCTA label="Get Your NJ Rate Comparison" />
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">NJ Medigap Guide</Link>
            <Link href="/medicare-supplement/new-jersey/pricing-ages-65-69" className="text-blue-600 hover:underline text-sm">NJ Pricing Ages 65–69</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline text-sm">Plan G vs Plan N in NJ</Link>
            <Link href="/medicare-supplement/compare-policies" className="text-blue-600 hover:underline text-sm">Compare Medigap Policies</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
