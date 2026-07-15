import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { BUSINESS, businessAddress, founderPerson } from "@/lib/business";
import { NJ_COUNTIES, citiesInCounty } from "@/lib/nj-geo";
import { getSnapshot, formatUsd } from "@/lib/csg-snapshot";
import { getNJCountySnapshot, njRatesAreUniform } from "@/lib/nj-county-snapshot";

export const metadata: Metadata = {
  title:
    "New Jersey Medicare Broker | Every County, Real Filed Rates",
  description:
    "Independent New Jersey Medicare broker for all 21 counties. Compare Medigap and Advantage plans with real filed rates. Free help: 855-559-1700.",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-broker/new-jersey",
  },
  openGraph: {
    title: "New Jersey Medicare Broker",
    description:
      "Independent Medicare broker for all 21 New Jersey counties. Real filed-rate data, free plan comparisons.",
  },
};

// County pages built so far — only these get a county-page link.
const BUILT_COUNTY_PAGES = new Set([
  "camden-county",
  "gloucester-county",
  "burlington-county",
  "ocean-county",
  "monmouth-county",
  "middlesex-county",
  "bergen-county",
  "essex-county",
  "hudson-county",
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
  ],
};

const faqs = [
  {
    question: "How much does a Medicare broker cost in New Jersey?",
    answer:
      "Nothing. Independent Medicare brokers in New Jersey are paid by the insurance carriers, and premiums are identical whether you enroll through a broker or directly with the company. You get plan comparisons across multiple carriers at no cost and no obligation.",
  },
  {
    question: "What does a New Jersey Medicare broker actually do?",
    answer:
      "An independent broker compares Medicare Supplement (Medigap) and Medicare Advantage plans from multiple carriers, checks that your doctors and prescriptions are covered, handles the enrollment paperwork, and stays available after enrollment for claims questions and annual plan reviews. A captive agent, by contrast, can only sell one company's plans.",
  },
  {
    question: "How do I find a Medicare broker near me in NJ?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers and will show you filed rates side by side. MedicareYourself is based at 1309 Route 70 West in Cherry Hill and works with clients in all 21 New Jersey counties by phone and video, so you don't need a broker in your specific town to get local plan details.",
  },
  {
    question: "What is the best Medicare Supplement plan in New Jersey?",
    answer:
      "For most people turning 65 today, the choice comes down to Plan G or Plan N. There is no single best plan or carrier — the same Plan G benefits are sold at very different prices depending on the carrier, your age, and where in New Jersey you live. That's why comparing filed rates across carriers matters more than any brand name.",
  },
  {
    question: "When should I contact a Medicare broker in New Jersey?",
    answer:
      "Ideally about six months before your Part B start date. Your Medigap Open Enrollment Period gives you six months of guaranteed acceptance once Part B begins, and applying early lets you lock in a rate and avoid coverage gaps. Outside that window, a broker can still help — several carriers accept applications with medical underwriting, and switching can lower your premium.",
  },
  {
    question: "Does New Jersey have community-rated Medigap pricing?",
    answer:
      "Yes. New Jersey uses community rating for Medicare Supplement plans, which means carriers charge the same premium for a given plan regardless of the applicant's age. Premiums can still differ significantly from one carrier to another for the identical standardized plan, so comparing filed rates across companies is what drives savings.",
  },
];

export default function NewJerseyMedicareBrokerHub() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const countySnapshot = getNJCountySnapshot();
  const uniformRates = countySnapshot ? njRatesAreUniform(countySnapshot) : false;
  const countyCount = countySnapshot ? Object.keys(countySnapshot.counties).length : 0;

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
    areaServed: NJ_COUNTIES.map((c) => ({
      "@type": "AdministrativeArea",
      name: `${c.name}, NJ`,
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
        &gt; <span className="text-gray-700">New Jersey Medicare Broker</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        New Jersey Medicare Broker: Free Local Help in All 21 Counties
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A New Jersey Medicare broker compares Medicare Supplement and Medicare
        Advantage plans from multiple carriers, at no cost to you, and shows you
        the actual filed rates for your age and ZIP code. Premiums are the same
        whether you enroll through a broker or directly with a carrier — the
        difference is that you see every option instead of one company&apos;s.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        based at 1309 Route 70 West in Cherry Hill (Camden County), licensed in
        New Jersey and 34 other states (NPN 20586791). I work with clients in
        every New Jersey county by phone and video, and this site publishes the
        same filed-rate data I use in those calls. As of July 2026, easyKind
        Medicare holds a perfect record on Google: all 142 of our Google
        reviews are five stars.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap actually costs in New Jersey right now
          </h2>
          <p className="mb-3">
            These are statewide filed rates for a 65-year-old non-smoking woman,
            verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong>. The spread between the
            cheapest and most expensive carrier for identical benefits is why
            comparing before you enroll matters.
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
          {uniformRates && countySnapshot && (
            <div className="mt-4 bg-[#F6FAF8] border border-[#D0E4DE] rounded-lg p-4">
              <p className="font-semibold text-[#1C2B27] mb-1">
                Your town doesn&apos;t change your Medigap rate — your carrier does.
              </p>
              <p className="text-sm text-[#3A5048]">
                On {countySnapshot.asOfDate} we pulled Plan G and Plan N quotes
                for a ZIP code in all {countyCount} New Jersey counties. The
                filed rate ranges came back identical in every county, from
                Cape May to Bergen. In New Jersey, Medigap carriers file one
                statewide rate — so the money question is never{" "}
                <em>where you live</em>, it&apos;s <em>which carrier you pick</em>{" "}
                across a {formatUsd(g65.spread)}/month Plan G spread for the
                same benefits.
              </p>
            </div>
          )}
          <p className="mt-3 text-sm text-gray-600">
            Sample ZIP {nj.sampleZip} ({nj.sampleCity}). Your exact rate depends
            on age, ZIP, and household discount eligibility. See the full{" "}
            <Link
              href="/medicare-supplement/new-jersey/rate-index"
              className="text-[#2D6E5F] font-semibold hover:underline"
            >
              NJ Medigap Rate Index
            </Link>{" "}
            for the complete dataset.
          </p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          New Jersey Medigap rules worth knowing
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Six-month Open Enrollment Period.</strong> Your Medigap OEP
            starts when you&apos;re 65+ and enrolled in Part B, and lasts six
            months. During it, carriers must accept you regardless of health
            history. Federal guaranteed-issue rights also apply in specific
            situations, like losing employer coverage or a Medicare Advantage
            plan leaving your area.
          </li>
          <li>
            <strong>Tobacco-neutral pricing during OEP.</strong> New Jersey
            prohibits tobacco rate differentials during the Medigap Open
            Enrollment Period — a consumer protection most states don&apos;t
            offer.
          </li>
          <li>
            <strong>Apply early to lock your rate.</strong> You can apply for a
            Medigap policy up to six months before your Part B effective date.
            Applying early locks in your rate and guarantees no coverage gap.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help by New Jersey county
        </h2>
        <p className="mb-4">
          Plan availability, Medicare Advantage networks, and even Medigap
          pricing differ across New Jersey. Pick your county or town:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {NJ_COUNTIES.map((county) => {
            const cities = citiesInCounty(county.slug);
            const hasPage = BUILT_COUNTY_PAGES.has(county.slug);
            return (
              <div
                key={county.slug}
                className="border border-[#D0E4DE] rounded-lg p-4 bg-[#F6FAF8]"
              >
                <h3 className="font-semibold text-[#1C2B27]">
                  {hasPage ? (
                    <Link
                      href={`/medicare-broker/new-jersey/${county.slug}`}
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
          Independent broker vs. captive agent vs. calling the carrier
        </h2>
        <p className="mb-2">
          A <strong>captive agent</strong> represents one insurance company and
          can only show you that company&apos;s plans. Calling a{" "}
          <strong>carrier directly</strong> gets you the same single-company
          view, from a call center. An <strong>independent broker</strong> is
          contracted with many carriers and is required to be licensed in your
          state — I pull the filed rates for every carrier I represent and put
          them side by side.
        </p>
        <p>
          In a state like New Jersey, where the price spread between carriers
          for identical Plan G benefits can exceed a hundred dollars a month,
          the single-company view is expensive.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a New Jersey Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — every county in New Jersey.
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
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-[#2D6E5F] hover:underline">
              Plan G vs. Plan N in New Jersey
            </Link>
          </li>
          <li>
            <Link href="/medicare-advantage/new-jersey" className="text-[#2D6E5F] hover:underline">
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link href="/services/how-to-enroll-in-medicare-in-new-jersey" className="text-[#2D6E5F] hover:underline">
              How to Enroll in Medicare in New Jersey
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
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare (medicare.gov)</a> &middot; <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline">Medigap basics (medicare.gov)</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}
