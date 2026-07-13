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
    "Medicare Broker in Essex County, NJ | Newark, Montclair, West Orange",
  description:
    "Independent Medicare broker serving Essex County, NJ — Newark, Montclair, West Orange, Bloomfield, and every town in between. Compare Medigap and Medicare Advantage plans with real filed rates. Free help: 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/essex-county",
  },
  openGraph: {
    title: "Medicare Broker in Essex County, NJ",
    description:
      "Independent Medicare broker for Essex County — Newark, Montclair, West Orange, and beyond. Real filed-rate data, free plan comparisons.",
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
      name: "Essex County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/essex-county",
    },
  ],
};

const faqs = [
  {
    question: "How do I find a Medicare broker in Essex County, NJ?",
    answer:
      "Look for an independent broker licensed in New Jersey who represents multiple carriers and shows you filed rates side by side. MedicareYourself is based at 1309 Route 70 West in Cherry Hill and works with Essex County clients — from Newark to Montclair to West Orange — by phone and video. Medigap rates are filed at the state level, so you get the exact same premiums working with us remotely as you would with an agent on Bloomfield Avenue.",
  },
  {
    question: "Does a Medicare broker in Newark or Montclair cost anything?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, and premiums are identical whether you enroll through a broker or directly with the company. You get comparisons across multiple carriers at no cost and no obligation.",
  },
  {
    question:
      "Are Medigap rates different in Essex County than the rest of New Jersey?",
    answer:
      "Medigap rates in New Jersey are filed with the state, and most carriers price statewide, so an Essex County resident generally sees the same filed rates as someone in Camden or Bergen County. What differs locally is Medicare Advantage: networks, plan availability, and extra benefits vary by county, which is why an Essex-specific plan check matters before you enroll.",
  },
  {
    question: "Which hospitals matter for Medicare Advantage in Essex County?",
    answer:
      "The big ones are University Hospital in Newark (the Level 1 trauma center serving northern New Jersey), the RWJBarnabas Health hospitals — Newark Beth Israel Medical Center, Cooperman Barnabas Medical Center in Livingston, and Clara Maass Medical Center in Belleville — and Hackensack Meridian Mountainside Medical Center on the Montclair/Glen Ridge border. If you're considering a Medicare Advantage plan, confirm your hospital and your doctors are in-network before enrolling.",
  },
  {
    question:
      "I have both Medicare and Medicaid in Essex County — can a broker help?",
    answer:
      "Yes. Many Essex County residents qualify for both Medicare and Medicaid, and carriers offer Dual-Eligible Special Needs Plans (D-SNPs) designed for that situation, often with extra benefits and low or no cost sharing. A licensed broker can check your eligibility and compare the D-SNP options available in your ZIP code at no cost.",
  },
];

export default function EssexCountyMedicareBroker() {
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];
  const essexCities = citiesInCounty("essex-county");

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="essex-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Essex County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Essex County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A Medicare broker serving Essex County compares Medicare Supplement and
        Medicare Advantage plans from multiple carriers — for Newark, Montclair,
        West Orange, Bloomfield, and every other Essex County town — at no cost
        to you. Premiums are the same whether you enroll through a broker or
        directly with a carrier; the difference is that a broker shows you every
        option side by side instead of one company&apos;s.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent Medicare broker
        licensed in New Jersey and 34 other states (NPN 20586791), based at 1309
        Route 70 West in Cherry Hill. I serve Essex County clients by phone and
        video. That works because Medigap rates are filed at the state level —
        the filed rate you&apos;d be quoted in Newark or Livingston is the same
        one I pull from my office, and this site publishes the same data I use
        on those calls.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap costs Essex County residents right now
          </h2>
          <p className="mb-3">
            These are statewide New Jersey filed rates for a 65-year-old
            non-smoking woman, verified against carrier rate filings as of{" "}
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
          <p className="mt-3 text-sm text-gray-600">
            Quoted at sample ZIP {nj.sampleZip} ({nj.sampleCity}); most NJ
            Medigap carriers price statewide, so Essex County ZIPs typically see
            the same filed rates. Your exact premium depends on age, ZIP, and
            household discount eligibility. See the full{" "}
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
          New Jersey Medigap rules that protect Essex County buyers
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Six-month Open Enrollment Period.</strong> Your Medigap OEP
            starts when you&apos;re 65+ and enrolled in Part B, and lasts six
            months. During it, carriers must accept you regardless of health
            history. Outside that window, federal guaranteed-issue rights apply
            only in specific situations — like losing employer coverage or a
            Medicare Advantage plan leaving your area.
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
          Medicare Advantage networks in Essex County
        </h2>
        <p className="mb-2">
          Unlike Medigap, Medicare Advantage is local: networks and plan
          availability are set county by county. In Essex County, the hospital
          systems that anchor most plan networks are:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>University Hospital</strong> in Newark — the state-owned
            academic medical center and the Level 1 trauma center serving
            northern New Jersey.
          </li>
          <li>
            <strong>RWJBarnabas Health</strong> — Newark Beth Israel Medical
            Center in Newark, Cooperman Barnabas Medical Center in Livingston,
            and Clara Maass Medical Center in Belleville.
          </li>
          <li>
            <strong>Hackensack Meridian Mountainside Medical Center</strong> on
            the Montclair/Glen Ridge border.
          </li>
        </ul>
        <p className="mb-2">
          Before enrolling in any Advantage plan, confirm that your hospital,
          your doctors, and your prescriptions are in-network — two plans with
          identical premiums can have very different Essex County networks.
        </p>
        <p>
          Essex County also has many residents who qualify for both Medicare and
          Medicaid. If that&apos;s you, Dual-Eligible Special Needs Plans
          (D-SNPs) are worth a look: multiple D-SNPs are offered in Essex
          County for 2026, designed for dual-eligible beneficiaries and often
          including extra benefits with low or no cost sharing. I can check
          your eligibility and compare the D-SNPs available in your ZIP code.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1C2B27]">
          Medicare help by Essex County town
        </h2>
        <p className="mb-4">
          Local guides for the Essex County towns we serve most:
        </p>
        <ul className="grid md:grid-cols-2 gap-2">
          {essexCities.map((city) => (
            <li key={city.slug}>
              <Link href={city.route} className="text-[#2D6E5F] hover:underline">
                Medicare agents in {city.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Also serving East Orange, Orange, Livingston, Nutley, Maplewood, and
          every other Essex County municipality by phone and video from our
          Cherry Hill office.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to an Essex County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — Newark, Montclair, West Orange, and
          all of Essex County.
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
