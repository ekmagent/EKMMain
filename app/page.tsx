import type { Metadata } from "next";
import Link from "next/link";
import ZipCTA from "@/components/ZipCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "NJ Medicare Broker 2026 | Independent Advisor, 35 States",
  description:
    "Compare 2026 Medicare Advantage & Medigap plans with an independent NJ broker. Free, no-pressure guidance from a licensed advisor. Get your quote today.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "MedicareYourself | Medicare Insurance Broker",
    description:
      "Independent Medicare insurance broker in NJ. Compare Medigap and Medicare Advantage plans at no cost to you. Call 855-559-1700.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "EasyKind Medicare",
  alternateName: "MedicareYourself",
  legalName: "EasyKind Health LLC",
  url: "https://medicareyourself.com",
  telephone: "+18555591700",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1309 Route 70 West",
    addressLocality: "Cherry Hill",
    addressRegion: "NJ",
    postalCode: "08002",
    addressCountry: "US",
  },
  areaServed: [
    "New Jersey", "Alabama", "Arizona", "Arkansas", "California", "Colorado",
    "Delaware", "Florida", "Georgia", "Illinois", "Indiana", "Kansas",
    "Kentucky", "Louisiana", "Maine", "Maryland", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "New Hampshire", "North Carolina",
    "Ohio", "Oklahoma", "Pennsylvania", "South Carolina", "Tennessee",
    "Texas", "Virginia", "West Virginia", "Wisconsin", "Wyoming",
  ],
  description:
    "Independent Medicare insurance broker helping seniors compare Medicare Supplement and Medicare Advantage plans.",
  priceRange: "Free consultation",
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* ── Hero ── */}
      <section className="bg-white pt-20 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2D6E5F] mb-5">
            Independent Medicare Broker · Appointed with Multiple Carriers · Licensed in 35 States
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#1C2B27] leading-[1.1] mb-6">
          Independent Medicare Broker in New Jersey — Compare 2026 Plans Free
        </h1>
        <p className="text-sm text-gray-500 mt-2">By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34 states</p>
          <p className="text-lg text-[#3A5048] mb-10 max-w-xl mx-auto leading-relaxed">
            We're an independent brokerage appointed with multiple carriers, so we compare
            plans side by side — unbiased, no pressure, and at no cost to you. Enter your
            zip code and we'll show you what's available in your area.
          </p>
          <div className="flex justify-center">
            <ZipCTA size="lg" label="Compare Plans Free" />
          </div>
          <p className="mt-5 text-sm text-[#3A5048]">
            Or call us directly:{" "}
            <a href="tel:8555591700" className="font-bold text-[#2D6E5F] hover:underline">
              855-559-1700
            </a>
          </p>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="bg-[#F6FAF8] border-y border-[#D0E4DE] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4">
          {[
            { stat: "35", label: "States Licensed" },
            { stat: "Free", label: "No Cost to You, Ever" },
            { stat: "Unbiased", label: "Not Tied to One Carrier" },
            { stat: "15 min", label: "Average Consultation" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl font-black text-[#2D6E5F]">{stat}</div>
              <div className="text-xs font-semibold text-[#3A5048] uppercase tracking-wide mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Two paths ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight text-[#1C2B27] text-center mb-3">
            Two Paths. One Right Answer for You.
          </h2>
          <p className="text-[#3A5048] text-center mb-12 max-w-xl mx-auto leading-relaxed">
            The choice between Medicare Supplement and Medicare Advantage is the most
            important decision you'll make at 65. We'll walk you through both — using resources from <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="text-[#2D6E5F] hover:underline font-medium">Medicare.gov</a> and your specific situation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/medicare-supplement/new-jersey"
              className="group border border-[#D0E4DE] rounded-2xl p-8 hover:border-[#2D6E5F] hover:shadow-lg transition-all bg-white"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFF6F3] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#2D6E5F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#1C2B27] mb-3 group-hover:text-[#2D6E5F] transition-colors">
                Medicare Supplement
              </h3>
              <p className="text-[#3A5048] leading-relaxed mb-5 text-sm">
                Pairs with Original Medicare to cover your out-of-pocket costs. See any
                doctor in the US who takes Medicare. Plan G is the most popular in New Jersey.
              </p>
              <span className="text-sm font-bold text-[#2D6E5F] group-hover:underline">
                Learn about Medigap in New Jersey →
              </span>
            </Link>

            <Link
              href="/medicare-advantage/new-jersey"
              className="group border border-[#D0E4DE] rounded-2xl p-8 hover:border-[#2D6E5F] hover:shadow-lg transition-all bg-white"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFF6F3] flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-[#2D6E5F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#1C2B27] mb-3 group-hover:text-[#2D6E5F] transition-colors">
                Medicare Advantage
              </h3>
              <p className="text-[#3A5048] leading-relaxed mb-5 text-sm">
                An all-in-one alternative to Original Medicare. Often includes dental,
                vision, and drug coverage. Many plans start at $0/month.
              </p>
              <span className="text-sm font-bold text-[#2D6E5F] group-hover:underline">
                Explore Medicare Advantage in New Jersey →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="bg-[#F6FAF8] border-t border-[#D0E4DE] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black tracking-tight text-[#1C2B27] text-center mb-10">
            Free Medicare Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/services", title: "Medicare Guides", desc: "Plan comparisons, costs, enrollment, and more." },
              { href: "/learn/how-to-sign-up-for-medicare", title: "How to Sign Up", desc: "Deadlines, penalties, and step-by-step enrollment." },
              { href: "/learn/medicare-help-low-income", title: "Help on Fixed Income", desc: "Extra Help, QMB, SLMB, and savings programs." },
              { href: "/about", title: "About Our Team", desc: "Licensed independent broker, NPN verified at NIPR." },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-[#D0E4DE] rounded-xl p-5 hover:border-[#2D6E5F] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-[#1C2B27] mb-1.5 text-sm group-hover:text-[#2D6E5F] transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-[#3A5048] leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-tight text-[#1C2B27] mb-4">
            Not sure where to start?
          </h2>
          <p className="text-[#3A5048] mb-8 leading-relaxed">
            A 15-minute call with an advisor is free, unbiased, and could save you thousands
            over the life of your coverage.
          </p>
          <a
            href="tel:8555591700"
            className="inline-flex items-center gap-3 bg-[#E8842A] hover:bg-[#cf7020] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 855-559-1700 — It&rsquo;s Free
          </a>
          <p className="mt-4 text-sm text-[#3A5048]">No obligation. No pressure. Just clear answers.</p>
        </div>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov</a> · <a href="https://www.ssa.gov/medicare" rel="noopener noreferrer" target="_blank" className="underline">Social Security Medicare enrollment</a></div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline text-[#2D6E5F]">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </>
  );
}
