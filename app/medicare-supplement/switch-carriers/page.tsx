import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Switch Medigap Carriers, Same Plan G (2026)",
  description:
    "Got a Plan G rate increase? Switch to a cheaper carrier with identical coverage. Free help comparing carriers in NJ and PA.",
  alternates: { canonical: `${SITE_URL}/medicare-supplement/switch-carriers` },
  openGraph: {
    title: "Switch Medigap Carriers, Same Plan G (2026)",
    description:
      "Got a Plan G rate increase? Switch to a cheaper carrier with identical coverage. Free help comparing carriers in NJ and PA.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare Supplement", item: "https://www.medicareyourself.com/medicare-supplement" },
    { "@type": "ListItem", position: 3, name: "Switch Carriers", item: "https://www.medicareyourself.com/medicare-supplement/switch-carriers" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Switch Medicare Supplement Carriers – Same Plan G, Lower Rate",
  description: "How to switch from one Medicare Supplement Plan G carrier to a cheaper one without changing your benefits.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-13",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MedicareYourself / EasyKind Medicare",
    url: "https://www.medicareyourself.com",
  },
};

const faqs = [
  {
    question: "Can I switch Medicare Supplement carriers without losing coverage?",
    answer:
      "Yes — if you are switching between the same plan letter (for example, Plan G to Plan G), your benefits do not change at all. Plan letters are federally standardized. You give up nothing except the higher premium. The main risk is that switching after your Medigap Open Enrollment Period may require medical underwriting, meaning a carrier can decline you based on health. A licensed broker can check which carriers in your state currently accept switchers and whether you qualify.",
  },
  {
    question: "When can I switch my Medicare Supplement plan?",
    answer:
      "You can apply to switch at any time, but outside of your initial 6-month Open Enrollment Period most states allow carriers to ask health questions and deny coverage. There are specific Guaranteed Issue rights (job loss, plan leaving the market, moving out of service area) that let you switch without underwriting. If you are in good health, switching is usually straightforward — you apply with the new carrier, get approved, then cancel the old plan once the new one starts.",
  },
  {
    question: "Is Plan G the same at every insurance company?",
    answer:
      "Yes. Medicare Supplement plan letters are standardized by federal law. Plan G from Aetna covers exactly the same benefits as Plan G from Mutual of Omaha, United American, Cigna, or any other carrier. The only differences are the monthly premium and how aggressively the carrier raises rates over time. Switching carriers to get a lower rate does not reduce your coverage in any way.",
  },
  {
    question: "How much can I save by switching Medicare Supplement carriers?",
    answer:
      "Savings vary by age, zip code, and how long you have been with your current carrier. Rate increases compound over time, so someone who has had Plan G for 5 or more years may be paying $50–$100 per month more than a new enrollee at a different carrier for identical coverage. A broker can pull current rates from all carriers in your area and calculate your exact potential savings.",
  },
  {
    question: "What happens to my coverage when I switch Medicare Supplement plans?",
    answer:
      "Once your new plan is approved and active, you cancel your old plan — often with a 30-day notice. There should be no gap in coverage if you time it correctly. Your Medicare benefits (Original Medicare Parts A and B) stay exactly the same throughout the switch. The Medigap plan just wraps around them. Most people experience zero disruption to their doctor relationships or claims processing.",
  },
  {
    question: "Can I switch from Medicare Advantage back to a Medicare Supplement plan?",
    answer:
      "Yes, but it requires careful timing. If you have been on Medicare Advantage for less than 12 months and had a Medigap plan before enrolling, you may have a trial right to return to your old Medigap plan. Outside that window, you can apply for Medigap during Medicare Advantage Open Enrollment (January 1 – March 31) or during your Special Enrollment Period, but most states allow carriers to use medical underwriting. Talk to a broker before making this switch.",
  },
];

export default function SwitchCarriersPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">Medicare Supplement</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Switch Carriers</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Switch Medicare Supplement Carriers — Same Plan G, Lower Monthly Rate
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              <strong>Got a rate increase letter?</strong> You may be able to switch to a different carrier with the exact same Plan G coverage for $30–$100 less per month. Plan letters are federally standardized — switching carriers changes your bill, not your benefits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Anthony Orner, licensed independent Medicare broker, can compare every carrier in your zip code in minutes. The service is free — brokers are paid by carriers, not by you.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              By Anthony Orner, Licensed Medicare Broker · Last reviewed: March 2026
            </p>
            <PhoneCTA label="Check If You Can Switch — Free" />
          </div>

          {/* Sidebar CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Ready to Switch?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Use our online carrier comparison tool or call to speak with Anthony directly.
            </p>
            <a
              href="https://switch.healthplans.now"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors mb-3"
            >
              Compare Carriers Online
            </a>
            <a
              href="tel:8555591700"
              className="block w-full text-center border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors text-sm mb-3"
            >
              Call 855-559-1700
            </a>
            <p className="text-xs text-gray-400 mt-1 text-center">Free · No pressure · Licensed in NJ &amp; 34 states</p>
          </div>
        </div>
      </section>

      {/* The Diet Coke Concept */}
      <section className="bg-amber-50 border-y border-amber-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Switching Carriers Does Not Change Your Coverage
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Plan Letters Are Federally Standardized</h3>
              <p className="text-gray-600">
                Congress and CMS define exactly what each Medigap plan letter covers. A Plan G from
                any carrier pays the same bills in the same situations. Think of it like a can of
                Coke — same product at every store, different price tag.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Your Doctors Stay the Same</h3>
              <p className="text-gray-600">
                Medigap plans have no networks. You can see any doctor in the country who accepts
                Original Medicare, regardless of which carrier you use. Switching from Carrier A to
                Carrier B does not affect a single one of your doctor relationships.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-100">
              <h3 className="font-semibold text-gray-900 mb-2">Rate History Matters</h3>
              <p className="text-gray-600">
                Carriers differ in how aggressively they raise premiums each year. A carrier that
                came in cheapest 5 years ago may now be the most expensive. Comparing current rates
                and historical increases helps you find a carrier likely to stay affordable long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How switching works */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Switch Medicare Supplement Carriers</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="font-semibold text-gray-900">Compare carriers in your zip code</h3>
              <p className="text-gray-600 text-sm mt-1">
                An independent broker pulls rates from all carriers available to you — not just one company.
                You can do this online at{" "}
                <a href="https://switch.healthplans.now" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  switch.healthplans.now
                </a>{" "}
                or by calling 855-559-1700.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="font-semibold text-gray-900">Apply with the new carrier</h3>
              <p className="text-gray-600 text-sm mt-1">
                Outside your initial Open Enrollment Period, most states allow health questions. If you are
                in good health, approval is typically fast — often same-day. Your broker walks you through
                the application at no cost.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="font-semibold text-gray-900">Set your new plan's start date</h3>
              <p className="text-gray-600 text-sm mt-1">
                Coordinate the new plan's effective date so there is no gap between the old plan ending
                and the new one beginning. A brief overlap (one day) is fine and avoids any risk of a gap.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h3 className="font-semibold text-gray-900">Cancel your old plan</h3>
              <p className="text-gray-600 text-sm mt-1">
                Once approved and your new plan is active, send written notice to your old carrier.
                Most require 30 days' notice. You are done — same coverage, lower bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">See If You Can Save on Your Plan G Today</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Free, no-obligation comparison from every carrier in your zip code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://switch.healthplans.now"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Compare Online — switch.healthplans.now
            </a>
            <a
              href="tel:8555591700"
              className="border-2 border-white text-white hover:bg-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Call 855-559-1700
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-4">Free · Independent · Licensed in NJ and 34 states</p>
        </div>
      </section>

      {/* What you need to switch */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Need to Switch Carriers</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Information to have ready:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Your Medicare number (red, white, and blue card)</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Your Medicare Part B effective date</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Current plan letter and carrier name</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Current monthly premium</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Basic health history (if outside Open Enrollment)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Common reasons people switch:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Annual rate increase letter arrived</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Premium has grown $50+ since original enrollment</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Friend or family member mentioned a lower rate</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Just curious if a better rate exists</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">→</span> Broker hasn't reviewed coverage in 2+ years</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection faqs={faqs} />
      </section>

      {/* Internal links */}
      <section className="bg-gray-50 border-t py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">Medicare Supplement Plans NJ</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline">Plan G vs Plan N</Link>
            <Link href="/medicare-supplement/new-jersey/cost" className="text-blue-600 hover:underline">Medigap Costs in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/vs-medicare-advantage" className="text-blue-600 hover:underline">Supplement vs Advantage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
