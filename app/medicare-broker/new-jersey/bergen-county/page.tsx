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
    "Medicare Broker in Bergen County, NJ | Hackensack, Fort Lee, Teaneck",
  description:
    "Independent Medicare broker for Bergen County, NJ — compare Medigap and Advantage plans across every carrier with real filed rates. Free help: 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/bergen-county",
  },
  openGraph: {
    title: "Medicare Broker in Bergen County, NJ",
    description:
      "Independent Medicare broker serving all of Bergen County, New Jersey. Real filed-rate data, free plan comparisons.",
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
      name: "Bergen County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/bergen-county",
    },
  ],
};

const faqs = [
  {
    question: "Do I need a Medicare broker located in Bergen County?",
    answer:
      "No. Medigap rates are filed with the state, so the premium is identical whether your broker sits in Hackensack or Cherry Hill. MedicareYourself serves Bergen County clients by phone and video from 1309 Route 70 West in Cherry Hill, using the same filed-rate data published on this site. What matters is that the broker is independent, licensed in New Jersey, and shows you multiple carriers side by side.",
  },
  {
    question:
      "Which hospitals do Bergen County Medicare Advantage plans cover?",
    answer:
      "It varies by plan, and that's the point. Bergen County is home to Hackensack University Medical Center, The Valley Hospital in Paramus, Englewood Health, and Holy Name Medical Center in Teaneck — but no single Medicare Advantage network is guaranteed to include all of them. Before enrolling, confirm your specific hospital and your doctors are in-network for the exact plan and year.",
  },
  {
    question:
      "Can I keep my New York City doctors on a Bergen County Medicare plan?",
    answer:
      "With a Medicare Supplement (Medigap) plan, yes — Medigap works with any provider in the country that accepts Medicare, so Manhattan specialists are covered the same as Hackensack ones. With Medicare Advantage, it depends on the plan's network; some Bergen-area plans include New York providers and some don't, so cross-border coverage is one of the first things to verify.",
  },
  {
    question:
      "Are Medigap rates different in Bergen County than the rest of New Jersey?",
    answer:
      "No — and we checked. In July 2026 we pulled Plan G and Plan N quotes for a ZIP code in all 21 New Jersey counties, including Bergen ZIPs, and the filed-rate ranges came back identical in every county. In New Jersey your town doesn't set your Medigap price — your carrier does, and the spread between carriers for identical benefits is why we quote every carrier for your age rather than relying on a single company's number.",
  },
  {
    question: "When should Bergen County residents apply for Medigap?",
    answer:
      "Ideally about six months before your Part B start date. Your Medigap Open Enrollment Period lasts six months once you're 65 or older and enrolled in Part B — during that window carriers must accept you regardless of health history, and New Jersey also prohibits tobacco rate differentials during it. Federal guaranteed-issue rights apply in specific situations outside that window, like losing employer coverage.",
  },
];

export default function BergenCountyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const bergenCities = citiesInCounty("bergen-county");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="bergen-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Bergen County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Bergen County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        An independent Medicare broker in Bergen County compares Medicare
        Supplement and Medicare Advantage plans from multiple carriers at no
        cost to you, using the actual filed rates for your age and ZIP code.
        Bergen is New Jersey&apos;s most populous county — more than 950,000
        residents — and it has one of the densest hospital markets in the
        state, which means network choice matters more here than almost
        anywhere else in New Jersey.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791), based at 1309 Route 70 West in
        Cherry Hill. I work with clients in Hackensack, Fort Lee, Teaneck, and
        every other Bergen County town by phone and video. Because Medigap
        rates are filed with the state, the premiums I quote are the same
        filed rates you&apos;d get from an office on Main Street in Hackensack
        — you just see every carrier&apos;s price instead of one.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs in New Jersey right now
          </h2>
          <p className="mb-3">
            These are New Jersey filed rates for a 65-year-old non-smoking
            woman, verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong>. The gap between the cheapest
            and most expensive carrier for identical benefits is why Bergen
            County residents should compare before enrolling.
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
            Statewide sample ZIP {nj.sampleZip} ({nj.sampleCity}). Some
            carriers vary premiums by ZIP, so Bergen County ZIPs like 07601
            (Hackensack) or 07024 (Fort Lee) can price differently — call for
            your exact ZIP and age. See the full{" "}
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
          Medicare Advantage networks in Bergen County
        </h2>
        <p className="mb-2">
          Bergen County&apos;s hospital market is unusually crowded for a
          single county, and each major system anchors different Medicare
          Advantage networks:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Hackensack University Medical Center</strong> in
            Hackensack — the flagship of Hackensack Meridian Health and one of
            the largest hospitals in New Jersey.
          </li>
          <li>
            <strong>The Valley Hospital</strong> in Paramus — Valley Health
            System&apos;s acute-care hospital, which relocated from Ridgewood
            to its new Paramus campus in April 2024.
          </li>
          <li>
            <strong>Englewood Health</strong> in Englewood — known for its
            cardiac, vascular, and oncology programs.
          </li>
          <li>
            <strong>Holy Name Medical Center</strong> in Teaneck — an
            independent acute-care hospital serving central Bergen.
          </li>
        </ul>
        <p className="mb-2">
          No Medicare Advantage plan is guaranteed to include all four
          systems, and networks change year to year. If you&apos;re loyal to a
          particular hospital or physician group, the network check comes
          before any premium comparison.
        </p>
        <p>
          There&apos;s also a cross-border wrinkle: many Bergen County
          residents see doctors in New York City. A Medigap plan travels with
          you — any provider in the country that accepts Medicare is covered —
          while a Medicare Advantage plan only covers NYC providers if
          they&apos;re in that plan&apos;s network. If Manhattan specialists
          are part of your care, verify them by name before you enroll.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          New Jersey Medigap rules that protect Bergen County residents
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Six-month Open Enrollment Period.</strong> Your Medigap
            OEP starts when you&apos;re 65 or older and enrolled in Part B,
            and lasts six months. During it, carriers must accept you
            regardless of health history. Outside that window, federal
            guaranteed-issue rights apply in specific situations, like losing
            employer coverage or a Medicare Advantage plan leaving your area.
          </li>
          <li>
            <strong>Tobacco-neutral pricing during OEP.</strong> New Jersey
            prohibits tobacco rate differentials during the Medigap Open
            Enrollment Period — a consumer protection most states don&apos;t
            offer.
          </li>
          <li>
            <strong>Apply early to lock your rate.</strong> You can apply for
            a Medigap policy up to six months before your Part B effective
            date. Applying early locks in your rate and guarantees no coverage
            gap.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help by Bergen County town
        </h2>
        <p className="mb-4">
          Dedicated local pages for the Bergen County towns we work with most:
        </p>
        <ul className="space-y-2 mb-4">
          {bergenCities.map((city) => (
            <li key={city.slug}>
              <Link
                href={city.route}
                className="text-[#2D6E5F] font-semibold hover:underline"
              >
                Medicare agents in {city.name}, NJ
              </Link>
            </li>
          ))}
        </ul>
        <p>
          We also serve Paramus, Ridgewood, Fair Lawn, Bergenfield, Garfield,
          and every other Bergen County municipality by phone and video from
          our Cherry Hill office — same filed rates, no office visit needed.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a Bergen County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — Hackensack, Fort Lee, Teaneck, and
          all of Bergen County.
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
            <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov Plan Finder</a> · <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="underline">Get Started with Medicare</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resources: <a href="https://www.state.nj.us/dobi/division_insurance/" target="_blank" rel="noopener noreferrer" className="underline">NJ Department of Banking and Insurance</a> · <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a></div>
      </section>
    </main>
  );
}
