import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Licensed Medicare Broker",
  description:
    "Meet Anthony Orner, an independent licensed Medicare broker serving NJ and 34 states. Free, unbiased Medigap & Advantage comparisons. Call 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Us | Licensed Medicare Broker",
    description:
      "Independent, licensed Medicare broker serving New Jersey and 34 states. Free, unbiased plan comparisons. Call 855-559-1700.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "MedicareYourself",
  url: "https://medicareyourself.com",
  telephone: "+18555591700",
  description:
    "Independent Medicare insurance broker licensed in New Jersey and 34 other states. We provide free, unbiased Medicare Supplement and Medicare Advantage plan comparisons.",
  areaServed: ["New Jersey", "Florida", "Texas", "Pennsylvania", "Ohio", "Georgia"],
  knowsAbout: [
    "Medicare Supplement Insurance",
    "Medicare Advantage",
    "Medigap Plan G",
    "Medigap Plan N",
    "Medicare Part D",
    "Medicare enrollment",
  ],
  employee: {
    "@type": "Person",
    name: "Anthony Orner",
    jobTitle: "Licensed Medicare Insurance Broker",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Licensed Insurance Producer",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "National Plan and Provider Enumeration System (NPPES)",
        url: "https://npiregistry.cms.hhs.gov",
      },
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "NPI",
        value: "1902584006",
      },
      {
        "@type": "PropertyValue",
        name: "NPN",
        value: "20586791",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={personSchema} />

      <section className="max-w-3xl mx-auto px-6 py-14">

        <h1 className="text-4xl font-black tracking-tight text-[#1C2B27] mb-4">
          About MedicareYourself
        </h1>
        <p className="text-lg text-[#3A5048] leading-relaxed mb-10">
          MedicareYourself is an independent insurance brokerage specializing exclusively in
          Medicare — Supplement (Medigap) and Medicare Advantage plans. Licensed in New Jersey
          and 34 other states.
        </p>

        {/* Credential badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="https://npiregistry.cms.hhs.gov/search?number=1902584006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#D0E4DE] bg-[#F6FAF8] hover:border-[#2D6E5F] rounded-xl px-4 py-3 text-sm font-semibold text-[#1C2B27] transition-colors"
          >
            <svg className="w-4 h-4 text-[#2D6E5F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>NPI <strong>1902584006</strong></span>
            <span className="text-[#3A5048] font-normal">· Verify at CMS ↗</span>
          </a>
          <a
            href="https://pdb.nipr.com/html/PacNpnSearch.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#D0E4DE] bg-[#F6FAF8] hover:border-[#2D6E5F] rounded-xl px-4 py-3 text-sm font-semibold text-[#1C2B27] transition-colors"
          >
            <svg className="w-4 h-4 text-[#2D6E5F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>NPN <strong>20586791</strong></span>
            <span className="text-[#3A5048] font-normal">· Verify at NIPR ↗</span>
          </a>
        </div>

        <div className="space-y-8 text-[#3A5048] leading-relaxed">

          <div>
            <h2 className="text-xl font-black text-[#1C2B27] mb-3">What &quot;Independent&quot; Means for You</h2>
            <p>
              We are not employed by any insurance company. We are appointed with multiple carriers
              and compare their plans objectively. Our compensation comes from the carrier you choose
              — at the same rate regardless of which plan you select — so we have no financial
              incentive to steer you toward any particular company.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1C2B27] mb-3">Our Licensing</h2>
            <p className="mb-3">
              MedicareYourself holds active Health and Life insurance licenses in New Jersey and
              the following states: Alabama, Arizona, Arkansas, California, Colorado, Delaware,
              Florida, Georgia, Illinois, Indiana, Kansas, Kentucky, Louisiana, Maine, Maryland,
              Michigan, Minnesota, Mississippi, Missouri, Montana, New Hampshire, North Carolina,
              Ohio, Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas, Virginia, West
              Virginia, Wisconsin, and Wyoming.
            </p>
            <p>
              You can verify insurance producer licenses through your state&apos;s Department of
              Insurance or at{" "}
              <a href="https://nipr.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2D6E5F] hover:underline">
                NIPR.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1C2B27] mb-3">Our Approach</h2>
            <p>
              Medicare decisions are permanent in ways that matter — switching plans has real
              consequences, especially when it comes to Medigap underwriting. We take that
              seriously. Every conversation starts with listening: your doctors, your
              prescriptions, your budget, your health history. Only then do we make a
              recommendation.
            </p>
          </div>

          <div className="bg-[#F6FAF8] border border-[#D0E4DE] rounded-xl p-5 text-sm">
            <p className="font-bold text-[#1C2B27] mb-2">Required Disclosure</p>
            <p>
              We do not offer every plan available in your area. Currently we represent multiple
              organizations which offer products in your area. You can always contact{" "}
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#2D6E5F]">
                Medicare.gov
              </a>
              , 1-800-MEDICARE (1-800-633-4227), TTY 1-877-486-2048, 24 hours a day / 7 days a
              week, or your local State Health Insurance Assistance Program (SHIP) for help with
              plan choices.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#EFF6F3] border border-[#D0E4DE] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-black text-[#1C2B27] mb-2">Talk to an Advisor</h2>
          <p className="text-[#3A5048] text-sm mb-5">
            Free, no-pressure consultations. Licensed advisors available by phone.
          </p>
          <a
            href="tel:8555591700"
            className="inline-flex items-center gap-2 bg-[#E8842A] hover:bg-[#cf7020] text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 855-559-1700
          </a>
        </div>

        {/* Resources */}
        <div className="mt-10 border-t border-[#D0E4DE] pt-8">
          <h2 className="text-base font-bold text-[#1C2B27] mb-4 uppercase tracking-wide">Explore Our Resources</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              { href: "/medicare-supplement/new-jersey", label: "Medicare Supplement Plans — NJ" },
              { href: "/medicare-advantage/new-jersey", label: "Medicare Advantage Plans — NJ" },
              { href: "/medicare-supplement/pennsylvania", label: "Medicare Supplement Plans — PA" },
              { href: "/services", label: "Medicare Guides & Resources" },
              { href: "/learn/how-to-sign-up-for-medicare", label: "How to Sign Up for Medicare" },
              { href: "/quote", label: "Get a Free Quote" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[#2D6E5F] hover:underline font-medium">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </>
  );
}
