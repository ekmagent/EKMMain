import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "MedicareYourself | Independent Medicare Insurance Broker",
  description:
    "Independent Medicare insurance broker in New Jersey. We help you compare Medicare Supplement (Medigap) and Medicare Advantage plans at no cost to you. Call 855-559-1700.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "MedicareYourself",
  url: "https://www.medicareyourself.com",
  telephone: "+18555591700",
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Medicare Made Simple.<br />
            <span className="text-blue-200">Free, Unbiased Guidance.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            We compare Medicare Supplement and Medicare Advantage plans from top carriers
            — at no cost to you. Licensed in New Jersey and 34 other states.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA size="lg" label="Call for Free Advice" />
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors"
            >
              Get an Online Quote
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-200">No obligation. No pressure. Just clear answers.</p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blue-50 border-b border-blue-100 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-700 font-medium">
          {[
            "Licensed in 35 States",
            "Independent — Not Tied to One Carrier",
            "No Cost to You — Ever",
            "Unbiased Plan Comparisons",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Plan types */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Two Main Paths for Medicare Coverage
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Understanding the difference between Medicare Supplement and Medicare Advantage
          is the most important decision you will make at age 65.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/medicare-supplement/new-jersey"
            className="group border border-gray-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
              Medicare Supplement (Medigap)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Works alongside Original Medicare to cover out-of-pocket costs. Use any
              doctor in the US who accepts Medicare. Plan G is the most popular in New Jersey.
            </p>
            <span className="text-blue-600 font-semibold text-sm group-hover:underline">
              Learn about Medigap in New Jersey →
            </span>
          </Link>

          <Link
            href="/medicare-advantage/new-jersey"
            className="group border border-gray-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
              Medicare Advantage (Part C)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              All-in-one alternative to Original Medicare. Often includes dental, vision,
              and drug coverage. Many plans have $0 premiums. Network-based coverage.
            </p>
            <span className="text-blue-600 font-semibold text-sm group-hover:underline">
              Explore Medicare Advantage in New Jersey →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            A 15-minute call with a MedicareYourself advisor is free, completely unbiased,
            and could save you thousands over the life of your coverage.
          </p>
          <PhoneCTA size="lg" label="Talk to an Advisor Free" />
        </div>
      </section>
    </>
  );
}
