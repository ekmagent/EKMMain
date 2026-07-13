import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";
import { getCounty, citiesInCounty } from "@/lib/nj-geo";
import { getSnapshot, formatUsd } from "@/lib/csg-snapshot";

export const metadata: Metadata = {
  title:
    "Medicare Broker in Gloucester County, NJ | Sewell, Washington Township",
  description:
    "Independent Medicare broker one county over from Gloucester County — real office at 1309 Route 70 West in Cherry Hill. In-person and phone help for Sewell, Washington Township, Glassboro, and Deptford: 855-559-1700.",
  alternates: {
    canonical:
      "https://medicareyourself.com/medicare-broker/new-jersey/gloucester-county",
  },
  openGraph: {
    title: "Medicare Broker in Gloucester County, NJ",
    description:
      "Local South Jersey broker for Gloucester County — filed Medigap rates, Medicare Advantage network checks, in-person appointments a short drive away in Cherry Hill. Free help: 855-559-1700.",
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
      name: "Gloucester County",
      item: "https://medicareyourself.com/medicare-broker/new-jersey/gloucester-county",
    },
  ],
};

const faqs = [
  {
    question: "Is there a Medicare broker near Sewell or Washington Township, NJ?",
    answer:
      "Yes. MedicareYourself is run by independent broker Anthony Orner (NPN 20586791) from a real office at 1309 Route 70 West in Cherry Hill, NJ 08002 — one county over, roughly 20 to 30 minutes from most of Gloucester County. That means Sewell, Washington Township, Deptford, and Glassboro residents can book an actual in-person appointment instead of settling for a call center with a local-looking phone number. Call 855-559-1700 to schedule.",
  },
  {
    question: "How much does Medigap Plan G cost in Gloucester County?",
    answer:
      "It depends on the carrier — identical Plan G benefits are filed at very different premiums in New Jersey. The rate table on this page is pulled from carrier rate filings for ZIP 08002 in Cherry Hill, which sits in neighboring Camden County; it is a close proxy for Gloucester County pricing, and we pull the filed rates for your exact ZIP code before you enroll. Comparing every carrier first is how you avoid overpaying for the same standardized coverage.",
  },
  {
    question: "Does a Medicare broker in Gloucester County charge a fee?",
    answer:
      "No. Independent Medicare brokers are paid by the insurance carriers, and your premium is exactly the same whether you enroll through a broker or directly with the company. You get side-by-side comparisons of every carrier we represent at no cost and no obligation.",
  },
  {
    question: "Which hospitals do Gloucester County Medicare Advantage plans cover?",
    answer:
      "Gloucester County is anchored by two systems: Jefferson Health New Jersey, whose Washington Township hospital in Turnersville serves the Sewell and Washington Township area, and Inspira Health, whose full-service medical center is in Mullica Hill. Inspira's old Woodbury campus is no longer a full hospital — it operates as Inspira Health Center Woodbury with a satellite emergency department and outpatient services. Each Medicare Advantage plan builds its network around some combination of these systems, so we check your actual doctors and hospitals against each plan's directory before you enroll.",
  },
  {
    question: "When should I enroll in Medigap if I live in Gloucester County?",
    answer:
      "Your Medigap Open Enrollment Period lasts six months, starting once you are 65 or older and enrolled in Part B. During those six months carriers must accept you regardless of health history, and New Jersey adds a consumer protection: carriers cannot charge tobacco users a higher rate during that window. You can apply up to six months before your Part B start date to lock in your rate early. Outside the OEP, federal guaranteed-issue rights apply only in specific situations, like losing employer coverage — otherwise applications go through medical underwriting.",
  },
];

export default function GloucesterCountyMedicareBroker() {
  const county = getCounty("gloucester-county");
  const cities = citiesInCounty("gloucester-county");
  const snapshot = getSnapshot();
  const nj = snapshot?.states?.NJ;
  const g65 = nj?.plans?.G?.["65"];
  const n65 = nj?.plans?.N?.["65"];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={[breadcrumbSchema]} />
      <LocalServiceSchema countySlug="gloucester-county" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-broker/new-jersey" className="hover:underline">
          New Jersey Medicare Broker
        </Link>{" "}
        &gt; <span className="text-gray-700">Gloucester County</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C2B27]">
        Medicare Broker in Gloucester County, New Jersey
      </h1>

      <p className="text-lg mb-2 text-[#3A5048]">
        A Gloucester County Medicare broker compares Medicare Supplement and
        Medicare Advantage plans from multiple carriers at no cost to you,
        checks your doctors against each plan&apos;s network, and shows you the
        actual filed rates for your age and ZIP code. MedicareYourself&apos;s
        office is at <strong>1309 Route 70 West in Cherry Hill</strong> — one
        county over, a short drive up Route 42 or I-295 from most of{" "}
        {county ? county.name : "Gloucester County"}.
      </p>
      <p className="text-lg mb-6 text-[#3A5048]">
        I&apos;m <strong>Anthony Orner</strong>, an independent broker licensed
        in New Jersey and 34 other states (NPN 20586791). Most of New Jersey I
        serve by phone and video, but Gloucester County is genuinely local:
        roughly 20 to 30 minutes from Sewell, Washington Township, or Deptford
        to the office. Bring your medication list and your doctors, and
        we&apos;ll compare plans across every carrier I represent — in person
        if you want.
      </p>

      <PhoneCTA />

      {nj && g65 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
            What Medigap actually costs near Gloucester County right now
          </h2>
          <p className="mb-3">
            These are filed rates for a 65-year-old non-smoking woman, verified
            against carrier rate filings as of <strong>{snapshot.asOfDate}</strong>.
            The sample ZIP for this data is {nj.sampleZip} in {nj.sampleCity} —
            that&apos;s neighboring Camden County, so treat it as a close proxy
            rather than exact Gloucester County pricing. When you call, we pull
            the filed rates for your exact ZIP.
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
            Every carrier in that range is selling the identical, federally
            standardized benefits — the spread is pure pricing. Your exact rate
            depends on age, ZIP, and household discount eligibility. See the
            full{" "}
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
          Medicare Advantage networks in Gloucester County
        </h2>
        <p className="mb-2">
          If you&apos;re weighing Medicare Advantage instead of Medigap, the
          network question in Gloucester County comes down to two health
          systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            <strong>Jefferson Health New Jersey</strong> — its Washington
            Township hospital in Turnersville is the acute-care anchor for the
            Sewell, Washington Township, and Deptford side of the county, with
            outpatient locations throughout the area.
          </li>
          <li>
            <strong>Inspira Health</strong> — Inspira Medical Center Mullica
            Hill, opened in 2019, is the county&apos;s full-service hospital on
            the Mullica Hill and Glassboro side. Note that Inspira&apos;s old
            Woodbury campus is no longer a full hospital: it now operates as
            Inspira Health Center Woodbury, with a satellite emergency
            department and outpatient services in a newer pavilion building.
          </li>
        </ul>
        <p className="mb-2">
          Many Gloucester County residents also cross into Camden County or
          Philadelphia for specialists, which raises the stakes: a plan that
          covers your Jefferson primary doctor may treat an Inspira or
          out-of-county specialist as out-of-network, and contracts between
          plans and health systems get renegotiated every year.
        </p>
        <p>
          That&apos;s the local homework a broker does before you enroll: we
          run your actual doctors and hospitals against each plan&apos;s
          directory. And if a plan makes significant changes to its provider
          network mid-year, Medicare can grant affected members a Special
          Enrollment Period to switch — you are not automatically stuck until
          the next Annual Enrollment Period.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Gloucester County towns we serve
        </h2>
        <p className="mb-3">
          From the Cherry Hill office we work with Medicare beneficiaries in
          every Gloucester County municipality — in person, by phone, or by
          video:
        </p>
        <ul className="space-y-2 mb-3">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link href={city.route} className="text-[#2D6E5F] hover:underline">
                Medicare agents in {city.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mb-3">
          Sewell is the mailing address for much of Washington Township and
          Mantua, so if your mail says Sewell, that page is yours too. We also
          regularly help clients in Glassboro, Deptford, Woodbury, Mullica
          Hill, and Williamstown — Williamstown sits in Monroe Township, the
          Gloucester County one, not to be confused with the Monroe Township
          retirement communities up in Middlesex County.
        </p>
        <p>
          If your town isn&apos;t listed above, the help is identical — call
          and we&apos;ll pull the filed rates for your exact ZIP code.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-[#1C2B27]">
          Why a neighbor-county broker beats a call center
        </h2>
        <p className="mb-2">
          Most Medicare &quot;local agents&quot; you find online for Gloucester
          County are call centers with a local-looking phone number. The office
          at 1309 Route 70 West in Cherry Hill is where I actually work, and
          Gloucester County is close enough that in-person appointments are
          realistic — reading a Summary of Benefits together, checking a drug
          formulary line by line, or walking through a Medigap application
          before your Part B start date.
        </p>
        <p>
          Timing matters most for Medigap: your six-month Open Enrollment
          Period begins once you&apos;re 65 or older and enrolled in Part B,
          and during it carriers must accept you regardless of health history.
          New Jersey adds a consumer protection on top — carriers cannot charge
          tobacco users a higher rate during that window. You can apply up to
          six months before your Part B effective date, which locks in your
          rate and guarantees no coverage gap. Outside the OEP, only specific
          federal guaranteed-issue situations (like losing employer coverage)
          bypass medical underwriting, so applying early is worth real money.
        </p>
      </section>

      <div className="mt-10 bg-[#2D6E5F] text-white rounded-lg p-8 text-center">
        <p className="text-2xl font-bold mb-2">
          Talk to a Gloucester County Medicare Broker
        </p>
        <p className="text-lg mb-4">
          Free comparison across carriers — in person in Cherry Hill, or by
          phone anywhere in Gloucester County.
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
