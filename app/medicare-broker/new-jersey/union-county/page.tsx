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
    "Medicare Broker in Union County, NJ | Elizabeth, Linden, Plainfield",
  description:
    "Independent Medicare broker for Union County, NJ — Elizabeth, Linden, Plainfield, Union Township. Compare Medigap and Advantage plans free. Call 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/union-county",
  },
  openGraph: {
    title: "Medicare Broker in Union County, NJ",
    description:
      "Independent Medicare broker for Union County — Elizabeth, Linden, Plainfield, and beyond. Real filed-rate data, free plan comparisons.",
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
      name: "Union County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/union-county",
    },
  ],
};

const faqs = [
  {
    question: "How do I find a Medicare broker in Union County, NJ?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers and shows you filed rates side by side. MedicareYourself is based at 1309 Route 70 West in Cherry Hill and works with Union County clients — from Elizabeth to Linden to Plainfield — by phone and video. Medigap rates are filed at the state level, so you get the exact same premiums working with us remotely as you would with an agent in downtown Elizabeth.",
  },
  {
    question: "Does a Medicare broker in Elizabeth or Linden cost anything?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, and premiums are identical whether you enroll through a broker or directly with the company. You get comparisons across multiple carriers at no cost and no obligation.",
  },
  {
    question:
      "Are Medigap rates different in Union County than the rest of New Jersey?",
    answer:
      "No. Medigap carriers file a single statewide rate in New Jersey — a July 2026 check of a representative ZIP code in all 21 counties came back with identical Plan G and Plan N filed-rate ranges everywhere, Union County included. What does vary locally is Medicare Advantage: plan availability, extra benefits, and which hospital networks a plan is built around all differ by county, which is why a Union-specific plan check matters before you enroll.",
  },
  {
    question: "Which hospitals matter for Medicare Advantage in Union County?",
    answer:
      "The two full-service hospitals physically located in Union County are Trinitas Regional Medical Center in Elizabeth, which joined RWJBarnabas Health — New Jersey's largest academic health system — in 2022, and Overlook Medical Center in Summit, part of Atlantic Health System and recognized with ANCC Magnet status. Many Union County residents near the county's edges also use hospitals in neighboring counties. If you're considering a Medicare Advantage plan, confirm your specific hospital and doctors are in-network before enrolling — network makeup changes from plan to plan and year to year.",
  },
  {
    question:
      "I have both Medicare and Medicaid in Union County — can a broker help?",
    answer:
      "Yes. Union County has a large, diverse population, and many residents qualify for both Medicare and Medicaid. Carriers offer Dual-Eligible Special Needs Plans (D-SNPs) designed for that situation, often with extra benefits and low or no cost sharing. A licensed broker can check your eligibility and compare the D-SNP options available in your ZIP code at no cost.",
  },
  {
    question: "When can I enroll in a Medigap plan in Union County, NJ?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period that starts the month your Medicare Part B becomes effective and you're 65 or older. During that window, carriers in New Jersey must issue you any Medigap plan they sell without medical underwriting. Outside that window, you may need to answer health questions to switch plans, so it's worth reviewing your options carefully before it closes.",
  },
  {
    question: "How does New Jersey price Medigap plans for Union County residents?",
    answer:
      "Each carrier chooses its own pricing method in New Jersey — the state does not mandate community rating. Most NJ Medigap carriers use attained-age rating, where your premium rises as you get older; a minority price the same regardless of age. Your rate in Elizabeth, Linden, or Plainfield is based on the carrier's filed statewide rate — NJ Medigap pricing does not vary by ZIP code. Premiums still differ significantly between carriers for the same lettered plan, which is why comparing filed rates and rating methods side by side matters.",
  },
];

export default function UnionCountyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const unionCities = citiesInCounty("union-county");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="union-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Union County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Union County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A Medicare broker serving Union County compares Medicare Supplement
        and Medicare Advantage plans from multiple carriers — for Elizabeth,
        Linden, Plainfield, Union Township, and every other Union County town
        — at no cost to you. Premiums are the same whether you enroll through
        a broker or directly with a carrier; the difference is that a broker
        shows you every option side by side instead of one company&apos;s.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare
        broker licensed in New Jersey and 34 other states (NPN 20586791),
        based at 1309 Route 70 West in Cherry Hill. I serve Union County
        clients by phone and video. That works because Medigap rates are
        filed at the state level — the filed rate you&apos;d be quoted on
        Elizabeth Avenue is the same one I pull from my office, and this site
        publishes the same data I use on those calls.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs Union County residents right now
          </h2>
          <p className="mb-3">
            These are statewide New Jersey filed rates for a 65-year-old
            non-smoking woman, verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong>. A July 2026 check of a
            representative ZIP code in all 21 New Jersey counties — Union
            included — returned identical Plan G and Plan N filed-rate ranges
            statewide, so this table is Union County&apos;s pricing, not an
            estimate.
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
            Quoted at sample ZIP {nj.sampleZip} ({nj.sampleCity}); Union
            County ZIPs see the same filed rates. Your exact premium depends
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
          New Jersey Medigap rules that protect Union County buyers
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Six-month Open Enrollment Period.</strong> Your Medigap
            OEP starts when you&apos;re 65+ and enrolled in Part B, and lasts
            six months. During it, carriers must accept you regardless of
            health history. Outside that window, federal guaranteed-issue
            rights apply only in specific situations — like losing employer
            coverage or a Medicare Advantage plan leaving your area.
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
            date. Applying early locks in your rate and guarantees no
            coverage gap.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Union County by the numbers
        </h2>
        <p className="mb-2">
          Union County added more residents than any other New Jersey county
          between 2023 and 2024, growing 2.08% to reach 594,160 residents as
          of July 1, 2024 — a gain of roughly 12,080 people in a single year,
          according to the county&apos;s own citation of U.S. Census Bureau
          Population Estimates Program data. Elizabeth, the county seat, has
          been New Jersey&apos;s fourth-largest city since the 2020 Census,
          with 137,298 residents.
        </p>
        <p className="mb-2">
          Roughly 92,600 Union County residents, or about 15.6% of the
          county, were age 65 or older as of 2024, per U.S. Census Bureau
          estimates — a smaller senior share than New Jersey&apos;s statewide
          18%. That doesn&apos;t make Medicare
          decisions less important for the county&apos;s seniors; it just
          means fewer neighbors are comparing notes on plans, which is
          exactly where an independent broker who works the filed rates
          every day can help.
        </p>
        <p>
          Union County is also one of New Jersey&apos;s more diverse
          counties: an estimated 33.5% of residents were born outside the
          United States as of 2024, per Census Bureau data — more than
          double the national average. That matters for Medicare Advantage
          shopping in particular, since plan availability and provider
          directories can look very different depending on which language
          and cultural-competency resources a plan offers. Free, unbiased
          counseling in multiple languages is available through NJ SHIP, and
          I can walk through plan documents with you or a family member
          either way.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Medicare Advantage networks in Union County
        </h2>
        <p className="mb-2">
          Unlike Medigap, Medicare Advantage is local: networks and plan
          availability are set county by county. Union County has two
          full-service hospitals within its borders, each anchoring a
          different health system:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Trinitas Regional Medical Center</strong> in Elizabeth —
            a 554-licensed-bed hospital, including a 120-bed long-term care
            center, that joined RWJBarnabas Health, New Jersey&apos;s largest
            academic health system, in 2022.
          </li>
          <li>
            <strong>Overlook Medical Center</strong> in Summit — part of
            Atlantic Health System, recognized with ANCC &ldquo;Magnet with
            Distinction&rdquo; status in 2025 and ranked among the top
            hospitals in New Jersey by U.S. News &amp; World Report&apos;s
            2025&ndash;2026 Best Hospitals list.
          </li>
        </ul>
        <p className="mb-2">
          Residents near the county&apos;s edges also routinely use hospitals
          in neighboring counties, so the right Medicare Advantage plan for
          a Rahway or Clark resident may look different from the right plan
          for someone in Summit or Springfield. Before enrolling in any
          Advantage plan, confirm that your hospital, your doctors, and your
          prescriptions are in-network.
        </p>
        <p>
          Union County also has a large population of residents who qualify
          for both Medicare and Medicaid. If that&apos;s you, Dual-Eligible
          Special Needs Plans (D-SNPs) are worth a look: multiple D-SNPs are
          offered in Union County for 2026, designed for dual-eligible
          beneficiaries and often including extra benefits with low or no
          cost sharing. I can check your eligibility and compare the D-SNPs
          available in your ZIP code.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help by Union County town
        </h2>
        <p className="mb-4">
          Local guides for the Union County towns we serve most:
        </p>
        <ul className="grid md:grid-cols-2 gap-2">
          {unionCities.map((city) => (
            <li key={city.slug}>
              <Link href={city.route} className="text-[#2D6E5F] hover:underline">
                Medicare agents in {city.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Also serving Rahway, Westfield, Summit, Cranford, Clark, and every
          other Union County municipality by phone and video from our Cherry
          Hill office.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a Union County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — Elizabeth, Linden, Plainfield, and
          all of Union County.
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
        <div className="text-sm text-gray-600 mt-4">
          Official Medicare resources:{" "}
          <a
            href="https://www.medicare.gov/plan-compare"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Medicare Plan Finder on Medicare.gov
          </a>{" "}
          and{" "}
          <a
            href="https://www.medicare.gov/basics/get-started-with-medicare"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            Get Started with Medicare
          </a>
          .
        </div>
      </section>
    </main>
  );
}
