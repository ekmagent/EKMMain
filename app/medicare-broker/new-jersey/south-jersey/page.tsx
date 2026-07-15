import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { BUSINESS, businessAddress, founderPerson } from "@/lib/business";
import { getCounty, citiesInCounty } from "@/lib/nj-geo";
import { getSnapshot, formatUsd } from "@/lib/csg-snapshot";

export const metadata: Metadata = {
  title:
    "Medicare Broker in South Jersey | In-Person from Cherry Hill",
  description:
    "Independent South Jersey Medicare broker — in-person across Camden, Burlington, and Gloucester counties, serving all of South Jersey. Real filed Medigap rates, 142 five-star Google reviews. 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/south-jersey",
  },
  openGraph: {
    title: "Medicare Broker in South Jersey",
    description:
      "Independent Medicare broker based in Cherry Hill, serving all of South Jersey in person and by phone. Real filed-rate data, free plan comparisons.",
  },
};

// South Jersey = the seven southern counties. Camden/Burlington/Gloucester are
// the in-person ring around the Cherry Hill office.
const SOUTH_JERSEY_COUNTY_SLUGS = [
  "camden-county",
  "burlington-county",
  "gloucester-county",
  "atlantic-county",
  "cumberland-county",
  "salem-county",
  "cape-may-county",
];

// County pages built so far — only these get a county-page link.
const BUILT_COUNTY_PAGES = new Set([
  "camden-county",
  "burlington-county",
  "gloucester-county",
]);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "New Jersey Medicare Broker",
      item: "https://medicareyourself.com/medicare-broker/new-jersey",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "South Jersey",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/south-jersey",
    },
  ],
};

const faqs = [
  {
    question: "How do I find a Medicare broker in South Jersey?",
    answer:
      "Look for an independent broker who is licensed in New Jersey, represents multiple carriers, and will show you filed rates side by side. MedicareYourself is based at 1309 Route 70 West in Cherry Hill and meets South Jersey clients in person across Camden, Burlington, and Gloucester counties — and by phone or video everywhere else in the region. As of July 2026, all 142 of our Google reviews are five stars.",
  },
  {
    question: "Are Medigap rates different in South Jersey than North Jersey?",
    answer:
      "No — and we checked. In July 2026 we pulled Plan G and Plan N quotes for a ZIP code in all 21 New Jersey counties, and the filed-rate ranges came back identical in every county, from Cape May to Bergen. In New Jersey your town doesn't set your Medigap price — your carrier does, and the spread between carriers for identical benefits is why comparing before you enroll matters.",
  },
  {
    question: "Does a Medicare broker in South Jersey cost anything?",
    answer:
      "No. Independent brokers are paid by the insurance carriers, and your premium is identical whether you enroll through a broker or directly with the company. You get every carrier's filed rate side by side, help checking that your doctors are in network, and ongoing service after enrollment — at no cost.",
  },
  {
    question:
      "Which hospital systems do South Jersey Medicare Advantage plans use?",
    answer:
      "South Jersey's Medicare Advantage networks are built around Cooper University Health Care, Virtua Health, and Jefferson Health New Jersey in the Camden-Burlington-Gloucester core, Inspira Health in Gloucester and Cumberland counties, and the shore-area hospitals in Atlantic and Cape May counties. No single plan is guaranteed to include all of them, so confirming your hospital and doctors are in-network for the exact plan and year is one of the first things we check.",
  },
  {
    question: "When should South Jersey residents apply for Medigap?",
    answer:
      "Ideally about six months before your Part B start date — applying early locks in your rate and prevents any coverage gap. Your Medigap Open Enrollment Period runs for six months once you're 65 or older and enrolled in Part B; during that window carriers must accept you regardless of health history, and New Jersey prohibits tobacco rate differentials during it as a consumer protection. Outside that window, federal guaranteed-issue rights apply in specific situations, and several carriers accept applications with medical underwriting.",
  },
];

export default function SouthJerseyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    address: businessAddress(),
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    sameAs: BUSINESS.orgSameAs,
    areaServed: SOUTH_JERSEY_COUNTY_SLUGS.map((slug) => ({
      "@type": "AdministrativeArea",
      name: `${getCounty(slug)?.name ?? slug}, NJ`,
    })),
    founder: founderPerson(),
    priceRange: "Free consultation",
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema, localBusinessSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">South Jersey</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in South Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A South Jersey Medicare broker compares Medicare Supplement (Medigap)
        and Medicare Advantage plans from multiple carriers at no cost to you,
        using the actual rates carriers file with New Jersey. MedicareYourself
        is one of the few brokerages physically based in South Jersey — our
        office is at 1309 Route 70 West in Cherry Hill — and we meet clients in
        person across Camden, Burlington, and Gloucester counties, and by phone
        or video from Salem to the shore.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791). As of July
        2026, easyKind Medicare holds a perfect record on Google: all 142 of
        our Google reviews are five stars. This site publishes the same
        filed-rate data I use on client calls, so you can check my math before
        we ever speak.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs in South Jersey right now
          </h2>
          <p className="mb-3">
            These are New Jersey filed rates for a 65-year-old non-smoking
            woman, verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong> — pulled at ZIP{" "}
            {nj.sampleZip} ({nj.sampleCity}), in the heart of South Jersey. In
            July 2026 we probed a ZIP in all 21 New Jersey counties and the
            filed ranges came back identical statewide, so these numbers apply
            from Salem County to the boardwalk.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-[#D0E4DE] rounded-lg">
              <thead className="bg-[#F6FAF8]">
                <tr>
                  <th className="p-3 border-b border-[#D0E4DE]">Plan</th>
                  <th className="p-3 border-b border-[#D0E4DE]">Lowest filed rate</th>
                  <th className="p-3 border-b border-[#D0E4DE]">Highest filed rate</th>
                  <th className="p-3 border-b border-[#D0E4DE]">Carriers quoting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-[#D0E4DE] font-semibold">Plan G</td>
                  <td className="p-3 border-b border-[#D0E4DE]">{formatUsd(g65.low)}/mo</td>
                  <td className="p-3 border-b border-[#D0E4DE]">{formatUsd(g65.high)}/mo</td>
                  <td className="p-3 border-b border-[#D0E4DE]">{g65.carrierCount}</td>
                </tr>
                {n65 && (
                  <tr>
                    <td className="p-3 font-semibold">Plan N</td>
                    <td className="p-3">{formatUsd(n65.low)}/mo</td>
                    <td className="p-3">{formatUsd(n65.high)}/mo</td>
                    <td className="p-3">{n65.carrierCount}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Identical benefits, very different prices — the spread is why South
            Jersey residents should never enroll off a single carrier&apos;s
            quote. Full dataset in the{" "}
            <Link
              href="/medicare-supplement/new-jersey/rate-index"
              className="text-[#2D6E5F] font-semibold hover:underline"
            >
              NJ Medigap Rate Index
            </Link>
            .
          </p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help by South Jersey county
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SOUTH_JERSEY_COUNTY_SLUGS.map((slug) => {
            const county = getCounty(slug);
            if (!county) return null;
            const cities = citiesInCounty(slug);
            const hasPage = BUILT_COUNTY_PAGES.has(slug);
            return (
              <div
                key={slug}
                className="border border-[#D0E4DE] rounded-lg p-4 bg-[#F6FAF8]"
              >
                <h3 className="font-semibold text-[#1C2B27]">
                  {hasPage ? (
                    <Link
                      href={`/medicare-broker/new-jersey/${slug}`}
                      className="text-[#2D6E5F] hover:underline"
                    >
                      {county.name}
                    </Link>
                  ) : (
                    county.name
                  )}
                </h3>
                {cities.length > 0 ? (
                  <ul className="mt-2 text-sm space-y-1">
                    {cities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={city.route}
                          className="text-[#2D6E5F] hover:underline"
                        >
                          Medicare agents in {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-gray-600">
                    Served by phone and video from our Cherry Hill office.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Why being local matters in South Jersey (and when it doesn&apos;t)
        </h2>
        <p className="mb-2">
          For <strong>Medigap pricing</strong>, local doesn&apos;t matter:
          carriers file one set of New Jersey rates, verified identical across
          all 21 counties in our July 2026 probe. For{" "}
          <strong>Medicare Advantage networks</strong>, local matters a great
          deal. South Jersey networks are built around Cooper University Health
          Care, Virtua Health, and Jefferson Health New Jersey in the
          Camden–Burlington–Gloucester core, and Inspira Health further south —
          and many South Jersey residents also use Philadelphia providers,
          which makes cross-river network checks essential before enrolling.
        </p>
        <p>
          A broker who lives on this side of the river knows which plans travel
          well across it. That&apos;s the part of this job a call center in
          another state can&apos;t do.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a South Jersey Medicare Broker
        </p>
        <p className="text-lg mb-4">
          In-person across Camden, Burlington, and Gloucester counties — free
          comparison for all of South Jersey.
        </p>
        <a href="tel:8555591700" className="text-3xl font-bold underline block mb-4">
          855-559-1700
        </a>
        <Link
          href="/quote"
          className="inline-block bg-white text-[#2D6E5F] font-semibold rounded-lg px-6 py-3 hover:bg-[#F6FAF8] transition"
        >
          Start a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Go deeper on New Jersey Medicare
        </h2>
        <ul className="space-y-3">
          <li>
            <Link href="/medicare-broker/new-jersey" className="text-[#2D6E5F] hover:underline">
              New Jersey Medicare Broker — all 21 counties
            </Link>
          </li>
          <li>
            <Link href="/medicare-supplement/new-jersey" className="text-[#2D6E5F] hover:underline">
              Best Medicare Supplement Plans in New Jersey (2026)
            </Link>
          </li>
          <li>
            <Link href="/medicare-supplement/new-jersey/rate-index" className="text-[#2D6E5F] hover:underline">
              NJ Medigap Rate Index — every carrier&apos;s filed range
            </Link>
          </li>
          <li>
            <Link href="/medicare-advantage/new-jersey" className="text-[#2D6E5F] hover:underline">
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
        </ul>
        <div className="text-sm text-gray-600 mt-4">
          Free state counseling is also available through{" "}
          <a
            href="https://www.state.nj.us/humanservices/doas/services/ship/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            NJ SHIP (State Health Insurance Assistance Program)
          </a>
          .
        </div>
      </section>
    </main>
  );
}
