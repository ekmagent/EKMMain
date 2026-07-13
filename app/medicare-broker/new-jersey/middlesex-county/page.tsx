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
    "Medicare Broker in Middlesex County, NJ | Edison, New Brunswick, Monroe",
  description:
    "Independent Medicare broker for Middlesex County, NJ — Edison, New Brunswick, Monroe Township, Piscataway, and more. Compare Medigap and Medicare Advantage plans with real filed rates. Free help: 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/middlesex-county",
  },
  openGraph: {
    title: "Medicare Broker in Middlesex County, NJ",
    description:
      "Independent Medicare broker for Edison, New Brunswick, Monroe Township, and all of Middlesex County. Real filed-rate data, free plan comparisons.",
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
      name: "Middlesex County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/middlesex-county",
    },
  ],
};

const faqs = [
  {
    question:
      "I live in a Monroe Township retirement community. Should I choose Medigap or Medicare Advantage?",
    answer:
      "There's no single right answer, but Monroe Township's 55+ communities — Rossmoor, Clearbrook, Concordia, Whittingham, Greenbriar, and others — are heavily Medigap territory for a reason. Residents who travel, split time out of state, or want to use any Medicare doctor without network rules tend to prefer a Medicare Supplement. Medicare Advantage can cost less month to month but ties you to a network and plan rules that change every year. A broker can price both side by side for your ZIP before you decide.",
  },
  {
    question: "How much does a Medicare broker cost in Middlesex County?",
    answer:
      "Nothing. Independent brokers are paid by the insurance carriers, and your premium is identical whether you enroll through a broker or directly with the company. You get filed-rate comparisons across multiple carriers at no cost and no obligation.",
  },
  {
    question:
      "Which hospitals in Middlesex County are in my Medicare Advantage network?",
    answer:
      "It depends entirely on the plan. Middlesex County is split mainly between two large systems — RWJBarnabas Health (Robert Wood Johnson University Hospital in New Brunswick) and Hackensack Meridian Health (JFK University Medical Center in Edison, Raritan Bay Medical Center in Old Bridge and Perth Amboy) — plus the independent Saint Peter's University Hospital in New Brunswick. Some Advantage plans include all of them; others don't. Always verify your specific hospitals and doctors against the plan's current directory before enrolling.",
  },
  {
    question: "Do Medigap rates differ between Middlesex County towns?",
    answer:
      "For most carriers, New Jersey Medigap rates are filed statewide, so a 65-year-old in Edison, Monroe Township, or Sayreville typically sees the same filed rate for the same plan. What changes the price is the carrier you pick, your age, and household discount eligibility — and the spread between carriers for identical Plan G benefits is large. That's the comparison worth making.",
  },
  {
    question: "When should I start comparing plans if I'm turning 65 in Middlesex County?",
    answer:
      "About six months before your Part B start date. Your Medigap Open Enrollment Period lasts six months from when you're 65+ and enrolled in Part B, with guaranteed acceptance regardless of health history. You can apply up to six months before Part B begins to lock in a rate with no coverage gap. Outside that window, federal guaranteed-issue rights apply only in specific situations, and other applications go through medical underwriting.",
  },
];

export default function MiddlesexCountyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const towns = citiesInCounty("middlesex-county");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="middlesex-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Middlesex County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Middlesex County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        An independent Medicare broker in Middlesex County compares Medicare
        Supplement and Medicare Advantage plans from multiple carriers at no
        cost to you, using the actual filed rates for your age and ZIP code.
        Middlesex is one of New Jersey&apos;s biggest Medicare markets for two
        reasons: Monroe Township holds one of the state&apos;s largest
        concentrations of 55+ retirement communities — Rossmoor, Clearbrook,
        Concordia, Whittingham, Greenbriar, and more — and the
        Edison&ndash;New Brunswick corridor anchors one of NJ&apos;s densest
        hospital markets.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791), based at 1309 Route 70 West in
        Cherry Hill. I work with Middlesex County clients by phone and video —
        and because New Jersey Medigap rates are filed statewide, the rates I
        quote from Cherry Hill are the same filed rates that apply in Edison,
        Monroe Township, or Sayreville.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs in Middlesex County right now
          </h2>
          <p className="mb-3">
            These are New Jersey statewide filed rates for a 65-year-old
            non-smoking woman, verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong>. Identical Plan G benefits are
            sold at very different prices depending on the carrier — that
            spread is why comparing before you enroll matters.
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
            Statewide sample quoted at ZIP {nj.sampleZip} ({nj.sampleCity});
            most NJ Medigap carriers file one statewide rate, so Middlesex
            County pricing typically matches. Your exact rate depends on age
            and household discount eligibility. See the full{" "}
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
          Monroe Township: New Jersey&apos;s retirement-community capital
        </h2>
        <p className="mb-2">
          Monroe Township is home to more than a dozen 55+ and active-adult
          communities — Rossmoor (the township&apos;s first, on 418 acres with
          its own golf course), Clearbrook, Concordia, Whittingham, Greenbriar,
          Regency at Monroe, Encore, Renaissance, and Four Seasons among them.
          Tens of thousands of Medicare-eligible residents live within a few
          miles of each other, which makes Monroe one of the most active
          Medigap markets in the state.
        </p>
        <p>
          For many residents the deciding factors are travel and flexibility:
          a Medicare Supplement works with any doctor or hospital in the
          country that accepts Medicare, with no network or referral rules —
          useful if you winter in Florida or split time with family out of
          state. Medicare Advantage can carry a lower monthly premium but ties
          you to a county-based network that changes year to year. The right
          answer depends on your budget, doctors, and travel — which is
          exactly what a side-by-side comparison settles.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Medicare Advantage networks in Middlesex County
        </h2>
        <p className="mb-2">
          Middlesex County sits at the center of one of New Jersey&apos;s
          biggest hospital corridors, split mainly between two large systems
          plus a major independent:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>RWJBarnabas Health</strong> — Robert Wood Johnson
            University Hospital in New Brunswick, the system&apos;s flagship
            academic medical center.
          </li>
          <li>
            <strong>Hackensack Meridian Health</strong> — JFK University
            Medical Center in Edison, plus Raritan Bay Medical Center campuses
            in Old Bridge and Perth Amboy.
          </li>
          <li>
            <strong>Saint Peter&apos;s University Hospital</strong> — an
            independent Catholic teaching hospital in New Brunswick.
          </li>
        </ul>
        <p className="mb-2">
          Because the county splits across systems, network fit is the first
          thing to check on any Medicare Advantage plan here. A plan that
          includes JFK in Edison may not include Robert Wood Johnson in New
          Brunswick, and vice versa — and directories change every January.
        </p>
        <p>
          One protection worth knowing: if your Medicare Advantage plan
          significantly changes its provider network mid-year, or your plan
          leaves the county, you may qualify for a Special Enrollment Period
          to switch plans — and in some cases a federal guaranteed-issue right
          to buy certain Medigap plans without medical underwriting. If your
          hospital or doctor drops out of network, call before you assume
          you&apos;re stuck.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Medicare help by Middlesex County town
        </h2>
        <p className="mb-3">
          I work with clients across the county, including these towns with
          dedicated local pages:
        </p>
        <ul className="space-y-2">
          {towns.map((town) => (
            <li key={town.slug}>
              <Link href={town.route} className="text-[#2D6E5F] hover:underline">
                Medicare agents in {town.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          Also serving Woodbridge, Old Bridge, East Brunswick, Perth Amboy, and
          every other Middlesex County municipality by phone and video from our
          Cherry Hill office — same filed rates statewide.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          New Jersey Medigap rules that matter in Middlesex County
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Six-month Open Enrollment Period.</strong> Your Medigap OEP
            starts when you&apos;re 65+ and enrolled in Part B and lasts six
            months, with guaranteed acceptance regardless of health history.
            Outside it, federal guaranteed-issue rights apply in specific
            situations — like losing employer coverage or a Medicare Advantage
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
            Applying early locks in your rate and guarantees no coverage gap —
            especially useful if you&apos;re retiring into a Monroe Township
            community on a set date.
          </li>
        </ul>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a Middlesex County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — Edison, New Brunswick, Monroe
          Township, and every town in between.
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
