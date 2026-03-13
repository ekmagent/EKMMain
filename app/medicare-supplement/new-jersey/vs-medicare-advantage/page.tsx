import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medigap vs Medicare Advantage in New Jersey (2026): Which Is Better?",
  description:
    "Medigap vs Medicare Advantage in New Jersey: honest comparison of costs, networks, flexibility, and which is right for NJ residents in 2026. Free guidance: 855-559-1700.",
};

const faqs = [
  {
    question: "Is Medigap or Medicare Advantage better in New Jersey?",
    answer:
      "It depends on your priorities. Medigap (Medicare Supplement) is better if you want the freedom to see any doctor in the US who accepts Medicare, predictable costs, and no network restrictions. Medicare Advantage is better if you want a lower monthly premium, don't mind a network, and want extra benefits like dental and vision bundled in. In New Jersey specifically, Medigap's community rating and guaranteed issue rules make it unusually accessible compared to other states.",
  },
  {
    question: "Can I switch from Medicare Advantage back to Medigap in New Jersey?",
    answer:
      "Yes — and New Jersey makes this easier than almost any other state. Under NJ's year-round guaranteed issue rules, you can switch back to a Medigap plan at any time without being subject to medical underwriting. This is a critical difference from most states, where switching back to Medigap after Medicare Advantage can be difficult or impossible if you have health conditions.",
  },
  {
    question: "Do Medicare Advantage plans cover all NJ hospitals?",
    answer:
      "Not all Medicare Advantage plans cover all New Jersey hospitals. Network coverage varies significantly by plan and county. Major NJ health systems like RWJBarnabas, Hackensack Meridian, Atlantic Health, and Capital Health may or may not be in-network depending on which plan you choose. Always verify your specific doctors and hospitals are in-network before enrolling in a Medicare Advantage plan.",
  },
  {
    question: "Are Medicare Advantage plans really $0 premium in New Jersey?",
    answer:
      "Many Medicare Advantage plans in New Jersey do have $0 monthly premiums, but you still pay your Part B premium ($185/month in 2026). The $0 refers to the plan's additional premium on top of Part B. These plans generate revenue through Medicare's capitated payments and your cost-sharing (copays, deductibles) when you use services.",
  },
  {
    question: "Which is more expensive long-term — Medigap or Medicare Advantage in NJ?",
    answer:
      "This depends entirely on your healthcare usage. Medigap Plan G costs more per month upfront ($130–$220/month) but provides near-zero additional costs when you use healthcare. Medicare Advantage may cost less per month but has copays, deductibles, and out-of-pocket maximums (up to $8,850 in-network in 2026) that can add up quickly if you have a serious illness or hospitalization.",
  },
];

export default function MedigapVsMAPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.medicareyourself.com" },
      { "@type": "ListItem", position: 2, name: "Medicare Supplement NJ", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey" },
      { "@type": "ListItem", position: 3, name: "Medigap vs Medicare Advantage NJ", item: "https://www.medicareyourself.com/medicare-supplement/new-jersey/vs-medicare-advantage" },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumb} />
      <nav className="max-w-6xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-600">Medicare Supplement NJ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Medigap vs Medicare Advantage</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Medigap vs Medicare Advantage in New Jersey (2026)
        </h1>
        <p className="text-xs text-gray-400 mb-6">Last reviewed: March 2026 · Sources: CMS.gov, KFF.org, NJ DOBI</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="font-semibold text-gray-900 mb-1">The bottom line</p>
          <p className="text-gray-700">
            <strong>Medigap gives you freedom. Medicare Advantage gives you extras at a lower upfront cost.</strong> In New Jersey, Medigap is unusually accessible thanks to community rating and year-round guaranteed issue — protections most other states do not have.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="text-left px-4 py-3">Feature</th>
                <th className="text-center px-4 py-3">Medigap (Plan G)</th>
                <th className="text-center px-4 py-3">Medicare Advantage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly premium (beyond Part B)", "$130–$220", "$0–$80 (many $0 plans)"],
                ["Doctor networks", "Any Medicare doctor in US", "In-network only"],
                ["Referrals to see specialists", "Never needed", "Required for HMO plans"],
                ["Out-of-pocket maximum", "Near zero (only Part B deductible)", "Up to $8,850 in-network"],
                ["Dental coverage", "Not included", "Usually included"],
                ["Vision coverage", "Not included", "Usually included"],
                ["Drug coverage (Part D)", "Separate plan required", "Often bundled in"],
                ["Predictability of costs", "Very high", "Varies by usage"],
                ["Out-of-state coverage", "Any Medicare provider", "Emergency only (HMO)"],
                ["NJ switching flexibility", "Year-round guaranteed issue", "OEP Jan 1–Mar 31 only"],
              ].map(([feature, medigap, ma], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{feature}</td>
                  <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{medigap}</td>
                  <td className="px-4 py-3 text-center text-gray-700 border-b border-gray-100">{ma}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Who Should Choose Medigap in New Jersey</h2>
        <ul className="space-y-2 text-gray-700 mb-6">
          {[
            "You have established relationships with specific doctors or specialists and want to keep them",
            "You travel frequently or spend part of the year in another state",
            "You have chronic conditions that require frequent specialist visits or hospitalizations",
            "You want predictable, budgetable healthcare costs",
            "You want access to top academic medical centers (Hackensack, RWJUH, Memorial Sloan Kettering) without network restrictions",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Who Should Consider Medicare Advantage in New Jersey</h2>
        <ul className="space-y-2 text-gray-700 mb-6">
          {[
            "You are in excellent health and rarely use medical services",
            "Your preferred doctors are in-network for available MA plans in your county",
            "You want dental, vision, and hearing coverage bundled into one plan",
            "Budget is tight and the lower monthly premium matters more than cost predictability",
            "You understand and accept the network restrictions and cost-sharing structure",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="my-8 bg-gray-900 text-white rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Still not sure which path is right for you?</p>
          <p className="text-gray-300 text-sm mb-4">We compare both options for your specific NJ situation — free, no pressure.</p>
          <PhoneCTA label="Get an Honest NJ Comparison" />
        </div>

        <FAQSection faqs={faqs} title="Medigap vs Medicare Advantage NJ — FAQ" />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Related guides:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline text-sm">Best Medigap Plans in NJ</Link>
            <Link href="/medicare-advantage/new-jersey" className="text-blue-600 hover:underline text-sm">Medicare Advantage in NJ</Link>
            <Link href="/medicare-supplement/new-jersey/plan-g-vs-plan-n" className="text-blue-600 hover:underline text-sm">Plan G vs Plan N NJ</Link>
          </div>
        </div>
      </article>
    </>
  );
}
