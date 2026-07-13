import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";
import { citiesInCounty } from "@/lib/nj-geo";
import { getSnapshot, formatUsd } from "@/lib/csg-snapshot";

export const metadata: Metadata = {
  title:
    "Medicare Broker in Ocean County, NJ | Toms River, Lakewood, Brick",
  description:
    "Independent Medicare broker for Ocean County, NJ — Toms River, Lakewood, Brick, Jackson, and every 55+ community in between. Compare real filed Medigap rates and Medicare Advantage networks. Free help: 855-559-1700.",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-broker/new-jersey/ocean-county",
  },
  openGraph: {
    title: "Medicare Broker in Ocean County, NJ",
    description:
      "Independent Medicare broker serving Toms River, Lakewood, Brick, and all of Ocean County. Real filed-rate data, free plan comparisons.",
  },
};

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
      name: "Ocean County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/ocean-county",
    },
  ],
};

const faqs = [
  {
    question: "How do I find a Medicare broker near me in Toms River or Brick?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers and shows you filed rates side by side. You don't need an office on Hooper Avenue to get Ocean County-specific help — Medigap rates are filed with the state, so a licensed NJ broker working by phone or video quotes the exact same premiums you'd get across a desk. MedicareYourself serves all of Ocean County from Cherry Hill at 855-559-1700.",
  },
  {
    question: "Are Medigap rates different in Ocean County than the rest of New Jersey?",
    answer:
      "No — and we checked. In July 2026 we pulled Plan G and Plan N quotes for a ZIP code in all 21 New Jersey counties, and the filed-rate ranges came back identical in every county, Ocean included. Plan G in Barnegat is the same Plan G at the same filed rates as in Bergen County. What changes the price is the carrier you pick: for identical benefits, the spread between the cheapest and most expensive carrier is more than a hundred dollars a month, which is exactly why comparing carriers before you enroll matters.",
  },
  {
    question:
      "What happens if my Medicare Advantage plan drops Community Medical Center or Ocean University Medical Center from its network?",
    answer:
      "You have options. If your plan makes a significant mid-year change to its provider network, Medicare can grant affected members a Special Enrollment Period to switch to another plan. If your plan leaves your area entirely or is terminated, you also get a federal guaranteed-issue right to buy certain Medigap plans without health questions. And every fall, the Annual Enrollment Period (October 15 to December 7) lets you change plans for the following year.",
  },
  {
    question: "Does a Medicare broker cost anything in Ocean County, NJ?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, and your premium is identical whether you enroll through a broker or directly with the company. You get comparisons across multiple carriers, help checking that your doctors at Community Medical Center, Ocean University Medical Center, or Monmouth Medical Center Southern Campus are in network, and ongoing service — at no cost.",
  },
  {
    question:
      "When should someone in a 55+ community like Holiday City or Crestwood Village apply for Medigap?",
    answer:
      "Ideally about six months before your Part B start date. Your Medigap Open Enrollment Period runs for six months once you're 65 and enrolled in Part B — during that window, carriers must accept you regardless of health history, and New Jersey prohibits tobacco rate differentials during the OEP as a consumer protection. Applying early locks in your rate and guarantees no gap in coverage. Outside that window, federal guaranteed-issue rights apply in specific situations, and several carriers accept applications with medical underwriting.",
  },
];

export default function OceanCountyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const oceanCities = citiesInCounty("ocean-county");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="ocean-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Ocean County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Ocean County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        Ocean County has one of the largest 65-and-over populations in New
        Jersey — roughly 155,000 residents, about 23% of the county versus
        about 18% statewide, per 2024 U.S. Census Bureau estimates — which
        makes it one of the most competitive Medicare markets in the state. An independent Medicare broker compares
        Medicare Supplement (Medigap) and Medicare Advantage plans from
        multiple carriers for your exact age and Ocean County ZIP code, at no
        cost to you, and your premium is the same as enrolling directly with
        the carrier.
      </p>
      <p className="text-lg mb-2 text-[#3A5048]">
        The county&apos;s huge concentration of adult communities — Holiday
        City at Berkeley, the Leisure Village communities in Lakewood, the
        Crestwood Villages in Whiting — means carriers fight hard for Ocean
        County enrollees, and the price spread between companies for identical
        Medigap benefits is real money every month.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791). I serve Ocean County by phone
        and video from our Cherry Hill office at 1309 Route 70 West — Medigap
        rates are filed with the state, so you get the same filed rates
        working with me remotely as you would anywhere in New Jersey.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs in New Jersey right now
          </h2>
          <p className="mb-3">
            These are statewide filed rates for a 65-year-old non-smoking
            woman, verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong>. The gap between the cheapest
            and most expensive carrier for identical benefits is why Ocean
            County residents should never enroll off a single mailer.
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
            Rates shown are the statewide sample (ZIP {nj.sampleZip},{" "}
            {nj.sampleCity}). Carriers file by ZIP code area, and Ocean County
            ZIPs — 08753 in Toms River, 08701 in Lakewood, 08723 in Brick —
            can differ. Call 855-559-1700 for the filed rates at your exact
            ZIP, or browse the full{" "}
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
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Medicare Advantage networks in Ocean County
        </h2>
        <p className="mb-2">
          If you&apos;re considering Medicare Advantage instead of Medigap, the
          network question matters more in Ocean County than almost anywhere
          else in New Jersey, because the county&apos;s hospitals belong to two
          different health systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Community Medical Center</strong> in Toms River — part of
            RWJBarnabas Health and Ocean County&apos;s largest hospital, a
            617-bed teaching hospital on Route 37.
          </li>
          <li>
            <strong>Ocean University Medical Center</strong> in Brick — part of
            Hackensack Meridian Health, a 318-bed teaching hospital serving
            the northern shore towns.
          </li>
          <li>
            <strong>Monmouth Medical Center Southern Campus</strong> in
            Lakewood — also RWJBarnabas Health, with a Geriatrics Institute
            focused on patients 65 and older.
          </li>
        </ul>
        <p className="mb-2">
          A Medicare Advantage plan that includes one system does not
          automatically include the other. Before enrolling, we check which
          hospitals <em>and</em> which of your doctors are in-network — a
          cardiologist affiliated with Hackensack Meridian and a primary
          doctor affiliated with RWJBarnabas can leave you with no plan that
          covers both cheaply, and that&apos;s worth knowing before you sign.
        </p>
        <p>
          Networks can also change mid-year. When a plan makes a significant
          change to its provider network, Medicare can grant affected members
          a Special Enrollment Period to switch plans, and if a plan leaves
          your area entirely, you get a federal guaranteed-issue right to buy
          certain Medigap plans. Original Medicare plus a Medigap plan avoids
          the network question altogether — both hospital systems, and any
          doctor nationwide who accepts Medicare.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Ocean County towns we serve
        </h2>
        <p className="mb-3">
          Local plan details for the county&apos;s biggest towns:
        </p>
        <ul className="space-y-2 mb-3">
          {oceanCities.map((city) => (
            <li key={city.slug}>
              <Link href={city.route} className="text-[#2D6E5F] font-semibold hover:underline">
                Medicare agents in {city.name}, NJ
              </Link>
            </li>
          ))}
        </ul>
        <p>
          We also work with clients throughout the rest of the county —
          Barnegat, Manchester and the Whiting section, Berkeley Township and
          the Holiday City communities, Point Pleasant, and the barrier-island
          towns — all by phone and video, with the same filed rates.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to an Ocean County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — Toms River, Lakewood, Brick, and
          every Ocean County ZIP.
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
