import type { Metadata } from "next";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About MedicareYourself | Licensed Independent Medicare Broker",
  description:
    "MedicareYourself is an independent, licensed Medicare insurance broker serving New Jersey and 34 states. Free, unbiased Medicare plan comparisons. Call 855-559-1700.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "MedicareYourself",
  url: "https://www.medicareyourself.com",
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
      credentialCategory: "Health Educator",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "National Plan and Provider Enumeration System (NPPES)",
        url: "https://npiregistry.cms.hhs.gov",
      },
    },
    identifier: {
      "@type": "PropertyValue",
      name: "NPI",
      value: "1902584006",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={personSchema} />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About MedicareYourself
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            MedicareYourself is an independent insurance brokerage specializing exclusively in
            Medicare — Supplement (Medigap) and Medicare Advantage plans. We are licensed in
            New Jersey and 34 other states.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What &quot;Independent&quot; Means for You</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are not employed by any insurance company. We are appointed with multiple carriers
            and compare their plans objectively. Our compensation comes from the carrier you choose
            — at the same rate regardless of which plan you select — so we have no financial
            incentive to steer you toward any particular company.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Licensing</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MedicareYourself is a licensed insurance agency. We hold active Health and Life
            insurance licenses in New Jersey and the following states: Alabama, Arizona, Arkansas,
            California, Colorado, Delaware, Florida, Georgia, Illinois, Indiana, Kansas, Kentucky,
            Louisiana, Maine, Maryland, Michigan, Minnesota, Mississippi, Missouri, Montana,
            New Hampshire, North Carolina, Ohio, Oklahoma, Pennsylvania, South Carolina,
            Tennessee, Texas, Virginia, West Virginia, Wisconsin, and Wyoming.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can verify insurance agent licenses through your state&apos;s Department of Insurance
            or through{" "}
            <a href="https://nipr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              NIPR.com
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Approach</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Medicare decisions are permanent in ways that matter — switching plans has real
            consequences, especially when it comes to Medigap underwriting. We take that seriously.
            Every conversation starts with listening: your doctors, your prescriptions, your
            budget, your health history. Only then do we make a recommendation.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Required Disclosure</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
            <p>
              We do not offer every plan available in your area. Currently we represent multiple
              organizations which offer products in your area. You can always contact{" "}
              <a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="underline">
                Medicare.gov
              </a>
              , 1-800-MEDICARE (1-800-633-4227), TTY 1-877-486-2048, 24 hours a day / 7 days a week,
              or your local State Health Insurance Assistance Program (SHIP) for help with plan choices.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Talk to Us</h2>
          <p className="text-gray-600 text-sm mb-4">
            Free, no-pressure consultations. Licensed advisors available by phone.
          </p>
          <PhoneCTA label="Call 855-559-1700" />
        </div>
      </section>
    </>
  );
}
