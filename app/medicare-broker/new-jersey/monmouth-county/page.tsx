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
    "Medicare Broker in Monmouth County, NJ | Freehold, Howell, Neptune",
  description:
    "Independent Medicare broker for Monmouth County, NJ — Freehold, Howell, Neptune, Middletown. Compare Medigap & Advantage plans. Call 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/monmouth-county",
  },
  openGraph: {
    title: "Medicare Broker in Monmouth County, NJ",
    description:
      "Independent Medicare broker serving Freehold, Howell, Neptune, and all of Monmouth County. Real filed-rate data, free plan comparisons.",
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
      name: "Monmouth County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/monmouth-county",
    },
  ],
};

const faqs = [
  {
    question: "Do I need a Medicare broker located in Monmouth County?",
    answer:
      "No. Medigap carriers file their New Jersey rates with the state, so the premium quoted for a Freehold or Neptune ZIP code is the same whether your broker sits in Monmouth County or anywhere else in New Jersey. MedicareYourself is based at 1309 Route 70 West in Cherry Hill and works with Monmouth County clients by phone and video, using the same filed-rate data published on this site.",
  },
  {
    question: "How much does a Medicare broker cost in Monmouth County?",
    answer:
      "Nothing. Brokers are paid by the insurance carriers, and your premium is identical whether you enroll through an independent broker or directly with the company. The difference is that a broker shows you every carrier's filed rate side by side instead of one company's.",
  },
  {
    question:
      "What if my Medicare Advantage plan drops Hackensack Meridian or RWJBarnabas from its network?",
    answer:
      "You have options. Every fall you can change plans during the Annual Enrollment Period (October 15 to December 7), and Medicare Advantage members get one more switch during the MA Open Enrollment Period (January 1 to March 31). If a mid-year network change is significant enough, CMS can also grant affected members a Special Enrollment Period to move to another plan. A broker can check which plans in your ZIP code still include your hospital and doctors.",
  },
  {
    question: "When should Monmouth County residents apply for Medigap?",
    answer:
      "Ideally up to six months before your Part B start date — applying early locks in your rate and prevents any coverage gap. Your Medigap Open Enrollment Period runs for six months once you're 65 or older and enrolled in Part B; during that window carriers must accept you regardless of health history. Outside it, acceptance generally requires medical underwriting unless a federal guaranteed-issue right applies, such as losing employer coverage or your Medicare Advantage plan leaving the area.",
  },
  {
    question: "Does smoking affect Medigap rates in Monmouth County?",
    answer:
      "Not during your Medigap Open Enrollment Period. New Jersey prohibits carriers from charging tobacco users higher Medigap rates during the six-month OEP — a consumer protection most states don't offer. Outside that window, tobacco surcharges can apply depending on the carrier.",
  },
];

export default function MonmouthCountyMedicareBroker() {
  const cities = citiesInCounty("monmouth-county");
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="monmouth-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Monmouth County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Monmouth County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A Medicare broker serving Monmouth County compares Medicare Supplement
        and Medicare Advantage plans from multiple carriers at no cost to you —
        and because New Jersey Medigap rates are filed with the state, the
        premium you&apos;re quoted is the same through a broker as it is
        directly from the carrier. What changes is how many options you
        actually get to see.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791), based at
        1309 Route 70 West in Cherry Hill. I work with clients in Freehold,
        Howell, Neptune, and every other Monmouth County town by phone and
        video — when we probed a ZIP in all 21 New Jersey counties in July
        2026, Plan G and Plan N filed-rate ranges came back identical in every
        county, so you lose nothing by not having a broker on Route 9.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs for Monmouth County residents right now
          </h2>
          <p className="mb-3">
            These are New Jersey filed rates for a 65-year-old non-smoking
            woman, verified against carrier rate filings as of{" "}
            <strong>{snapshot.asOfDate}</strong>. Identical Plan G benefits are
            sold at very different prices depending on the carrier — that
            spread is the whole argument for comparing before you enroll.
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
            Quotes pulled at statewide sample ZIP {nj.sampleZip} (
            {nj.sampleCity}); our July 2026 probe of one ZIP in every NJ county
            returned identical Plan G and Plan N ranges statewide. Your exact
            premium depends on age, plan, and household discount eligibility. See the full{" "}
            <Link
              href="/medicare-supplement/new-jersey/rate-index"
              className="text-[#2D6E5F] font-semibold hover:underline"
            >
              NJ Medigap Rate Index
            </Link>{" "}
            for every carrier&apos;s filed range.
          </p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Medicare Advantage networks in Monmouth County
        </h2>
        <p className="mb-2">
          If you go the Medicare Advantage route instead of Medigap, the plan
          you pick determines which Monmouth County hospitals and doctors are
          in network. The county is split between two major systems, plus an
          independent partner hospital:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Hackensack Meridian Health</strong> — Jersey Shore
            University Medical Center in Neptune (the county&apos;s academic
            medical center and Level I trauma center), Riverview Medical
            Center in Red Bank, and Bayshore Medical Center in Holmdel.
          </li>
          <li>
            <strong>RWJBarnabas Health</strong> — Monmouth Medical Center in
            Long Branch, a teaching hospital affiliated with Rutgers&apos;
            Robert Wood Johnson Medical School.
          </li>
          <li>
            <strong>CentraState Medical Center</strong> in Freehold, a partner
            of Atlantic Health System since 2022.
          </li>
        </ul>
        <p className="mb-2">
          Not every Medicare Advantage plan contracts with all three systems.
          A plan that works for a Neptune resident who uses Jersey Shore
          University Medical Center may be a poor fit in Long Branch, where
          Monmouth Medical Center is the local hospital. Before enrolling, I
          check your specific doctors and hospital against each plan&apos;s
          current directory rather than assuming a system-wide match.
        </p>
        <p>
          Networks can also change mid-year. When a hospital system and a plan
          part ways, CMS can declare the network change significant and grant
          affected members a Special Enrollment Period to switch plans — on
          top of the regular Annual Enrollment Period each fall and the
          Medicare Advantage Open Enrollment Period each January through
          March. If you hear your hospital is leaving your plan&apos;s
          network, that&apos;s a call worth making before the headlines settle.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help by Monmouth County town
        </h2>
        <p className="mb-4">
          I&apos;ve published town-level pages for the Monmouth County
          communities I work with most:
        </p>
        <ul className="space-y-2 mb-4">
          {cities.map((city) => (
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
          I also regularly work with clients in Middletown, Marlboro,
          Manalapan, Long Branch, and Red Bank. Because everything happens by
          phone and video from the Cherry Hill office — and Plan G and Plan N
          filed-rate ranges verified identical across all 21 NJ counties in
          July 2026 — every Monmouth County ZIP code gets the identical
          comparison.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          The Medigap timing rules that matter here
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Your six-month window.</strong> Once you&apos;re 65 or
            older and enrolled in Part B, you have a six-month Medigap Open
            Enrollment Period during which carriers must accept you regardless
            of health history. After it closes, most applications go through
            medical underwriting unless a federal guaranteed-issue right
            applies — for example, losing employer coverage or a Medicare
            Advantage plan exiting your area.
          </li>
          <li>
            <strong>Apply before Part B starts.</strong> New Jersey lets you
            apply up to six months ahead of your Part B effective date. For
            Monmouth County residents retiring off employer plans, this is the
            single best lever: it locks your rate and guarantees day-one
            coverage.
          </li>
          <li>
            <strong>Tobacco-neutral pricing during OEP.</strong> New Jersey
            bars tobacco rate differentials during the Medigap Open Enrollment
            Period — a consumer protection worth using while the window is
            open.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          How a Monmouth County comparison call works
        </h2>
        <p className="mb-2">
          First, we go over where you are today — turning 65, leaving an
          employer plan, or already on a plan you suspect is overpriced. Second,
          I pull the current filed rates for your age and ZIP code across every
          carrier I represent, and if Medicare Advantage is on the table, we
          check your doctors and preferred hospital against each plan&apos;s
          directory. Third, you see the numbers side by side and decide.
          There&apos;s no fee and no obligation, and if the plan you already
          have turns out to be the right one, I&apos;ll tell you that too.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a Medicare Broker for Monmouth County
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — Freehold, Howell, Neptune, and
          every Shore town.
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
          Go deeper on Monmouth County Medicare
        </h2>
        <ul className="space-y-3">
          <li>
            <Link href="/medicare-broker/new-jersey" className="text-[#2D6E5F] hover:underline">
              New Jersey Medicare Broker — all 21 counties
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-in-monmouth-county-new-jersey"
              className="text-[#2D6E5F] hover:underline"
            >
              Medicare in Monmouth County: plans, costs, and enrollment dates
            </Link>
          </li>
          <li>
            <Link href="/medicare-supplement/new-jersey" className="text-[#2D6E5F] hover:underline">
              Best Medicare Supplement Plans in New Jersey (2026)
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/rate-index"
              className="text-[#2D6E5F] hover:underline"
            >
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
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> · <a href="https://www.cms.gov/medicare/enrollment-renewal/health-plans/medigap/consumer-guide" rel="noopener noreferrer" target="_blank" className="underline">CMS Medigap Consumer Guide</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}
