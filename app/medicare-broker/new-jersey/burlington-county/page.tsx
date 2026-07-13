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
    "Medicare Broker in Burlington County, NJ | Mount Laurel, Burlington",
  description:
    "Independent Medicare broker serving Burlington County, NJ — Mount Laurel, Burlington, Willingboro, Marlton, and more — from our Cherry Hill office 20 minutes away. Free help: 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/burlington-county",
  },
  openGraph: {
    title: "Medicare Broker in Burlington County, NJ",
    description:
      "Independent Medicare broker for Burlington County, New Jersey. Real filed-rate data, free plan comparisons, in-person meetings available.",
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
      name: "Burlington County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/burlington-county",
    },
  ],
};

const faqs = [
  {
    question: "Is there a Medicare broker near me in Burlington County, NJ?",
    answer:
      "Yes. MedicareYourself is based at 1309 Route 70 West in Cherry Hill, right next door in Camden County — about 20 minutes from Mount Laurel, Moorestown, and Marlton. That means Burlington County clients can meet in person at the office, or handle everything by phone and video if that's easier. Call 855-559-1700.",
  },
  {
    question: "How much does a Medicare broker cost in Burlington County?",
    answer:
      "Nothing. Independent Medicare brokers are paid by the insurance carriers, and premiums are identical whether you enroll through a broker or directly with the company. You get side-by-side comparisons across multiple carriers at no cost and no obligation.",
  },
  {
    question:
      "Which hospitals in Burlington County work with Medicare Advantage plans?",
    answer:
      "It depends entirely on the plan. Burlington County's main hospitals are Virtua Mount Holly Hospital (formerly Virtua Memorial), Virtua Willingboro Hospital, Virtua Marlton Hospital, and Deborah Heart and Lung Center in Browns Mills. Each Medicare Advantage plan has its own network, and networks change from year to year — so the right first question is always whether your specific hospitals and doctors are in a plan's current directory. A Medigap plan, by contrast, works with any provider that accepts Medicare.",
  },
  {
    question: "What is the best Medicare Supplement plan in Burlington County?",
    answer:
      "For most people turning 65 today, the real choice is Plan G or Plan N. Benefits are standardized by law, so the same Plan G is sold at very different prices depending on the carrier and your age. The best plan is the one with strong filed rates and a stable rate history for your situation — which is exactly what a filed-rate comparison shows.",
  },
  {
    question: "When should I contact a Medicare broker in Burlington County?",
    answer:
      "Ideally about six months before your Part B start date. Your Medigap Open Enrollment Period gives you six months of guaranteed acceptance once you're 65 and enrolled in Part B, and applying early lets you lock in a rate with no coverage gap. Outside that window, federal guaranteed-issue rights apply in specific situations — like losing employer coverage or a Medicare Advantage plan leaving Burlington County — and several carriers accept applications with medical underwriting.",
  },
];

export default function BurlingtonCountyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const cities = citiesInCounty("burlington-county");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="burlington-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Burlington County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Burlington County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A Medicare broker serving Burlington County compares Medicare
        Supplement and Medicare Advantage plans from multiple carriers, at no
        cost to you, using the actual filed rates for your age and ZIP code.
        For us, Burlington County isn&apos;t a far-away service area on a map —
        it&apos;s next door. Our office at 1309 Route 70 West in Cherry Hill
        sits just across the Camden County line, about 20 minutes from Mount
        Laurel, Moorestown, and Marlton, so in-person meetings are genuinely
        practical here.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791). Burlington
        County is New Jersey&apos;s largest county by land area — roughly 800
        square miles running from the Delaware River towns of Burlington and
        Willingboro out through the Pinelands to Browns Mills — and Medicare
        options genuinely differ across it. I work with Burlington County
        clients at the office, by phone, and by video, using the same
        filed-rate data published on this site.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs near Burlington County right now
          </h2>
          <p className="mb-3">
            These are filed rates for a 65-year-old non-smoking woman, verified
            against carrier rate filings as of <strong>{snapshot.asOfDate}</strong>.
            The spread between the cheapest and most expensive carrier for
            identical benefits is why comparing before you enroll matters.
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
            Honest note: these quotes use sample ZIP {nj.sampleZip} (
            {nj.sampleCity}), which is in Camden County — literally one town
            over from Mount Laurel and Moorestown. That makes it a very close
            proxy for Burlington County pricing, but your exact rate depends on
            your own ZIP, age, and household discount eligibility. See the full{" "}
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
          New Jersey Medigap rules that apply in Burlington County
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
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Medicare Advantage networks in Burlington County
        </h2>
        <p className="mb-2">
          If you&apos;re considering Medicare Advantage instead of Medigap, the
          network question comes first in Burlington County. The county&apos;s
          hospital care runs largely through <strong>Virtua Health</strong> —
          Virtua Mount Holly Hospital (formerly Virtua Memorial Hospital of
          Burlington County), Virtua Willingboro Hospital, and Virtua Marlton
          Hospital in Evesham Township. <strong>Deborah Heart and Lung
          Center</strong> in Browns Mills is a nationally known specialty
          hospital for heart, lung, and vascular care. Residents in the
          county&apos;s northern reaches, near Bordentown and Florence, also
          commonly cross into Mercer County for <strong>Capital Health</strong>&apos;s
          hospitals in the Trenton area.
        </p>
        <p className="mb-2">
          Every Medicare Advantage plan contracts with its own list of these
          systems, and those lists change from year to year. Before enrolling —
          or renewing — verify that your hospital, your cardiologist, and your
          primary doctor are in the plan&apos;s <em>current</em> directory, not
          last year&apos;s.
        </p>
        <p>
          And know your rights: if a Medicare Advantage plan&apos;s network
          changes significantly mid-year, or a plan leaves Burlington County,
          you may qualify for a Special Enrollment Period to switch plans or
          return to Original Medicare — in some cases with a federal
          guaranteed-issue right to buy a Medigap policy. If a network letter
          shows up in your mailbox, call before you assume you&apos;re stuck.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help across Burlington County towns
        </h2>
        <p className="mb-4">
          I work with clients throughout the county — including Willingboro,
          Evesham Township (Marlton), Moorestown, Medford, Pemberton Township,
          and Browns Mills — in person at the Cherry Hill office or by phone
          and video. Town-specific guides so far:
        </p>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link href={city.route} className="text-[#2D6E5F] hover:underline">
                Medicare agents in {city.name}, NJ
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a Burlington County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — 20 minutes from Mount Laurel, or
          right over the phone.
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
