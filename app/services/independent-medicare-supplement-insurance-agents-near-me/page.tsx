import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare supplement insurance agents near me | Free Quote | MedicareYourself",
  description:
    "Compare Medicare Supplement Plan G & N rates across top carriers with an independent NJ agent. Free, unbiased quotes from Anthony Orner. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/independent-medicare-supplement-insurance-agents-near-me" },
  openGraph: {
    title:
      "independent medicare supplement insurance agents near me | Free Quote | MedicareYourself",
    description:
      "Independent Medicare Supplement insurance agents near you in NJ. Anthony Orner compares Plan G and Plan N rates across all top carriers. Free quote in minutes.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Independent Medicare Supplement Agents Near Me",
      item: "https://medicareyourself.com/services/independent-medicare-supplement-insurance-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Independent Medicare Supplement Insurance Agents Near You in NJ",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent isn't tied to one insurance company. They hold contracts with multiple carriers and can compare Medigap plans side by side to find the best rate and fit for you. Their service is free because carriers pay them directly.",
  },
  {
    question:
      "How is an independent agent different from a captive insurance agent?",
    answer:
      "A captive agent works for one carrier and can only sell that company's plans. An independent agent represents many carriers, so they can show you real price differences on the same standardized plan. You get an unbiased comparison instead of a single option.",
  },
  {
    question: "Does it cost more to use an independent Medicare Supplement agent?",
    answer:
      "No. You pay the same premium whether you enroll directly with a carrier or through an independent agent. The carrier compensates the agent, not you. You get expert guidance at no extra cost.",
  },
  {
    question: "When should I contact an independent Medigap agent?",
    answer:
      "Ideally, about 6 months before your Part B start date. This gives you time to compare plans during your Medigap Open Enrollment Period, when carriers must accept you regardless of health history. After that window closes, medical underwriting may apply.",
  },
];

export default function IndependentMedicareSupplementAgentsNearMe() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Independent Medicare Supplement Agents Near Me
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Independent Medicare Supplement Insurance Agents Near You in NJ
        </h1>

        <Image
          src="/images/independent-medicare-supplement-insurance-agents-near-me_vector.webp"
          alt="Independent Medicare Supplement insurance agents near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg text-gray-700 mb-2">
          Independent Medicare Supplement insurance agents near you don't work for one carrier. They work for you. I'm Anthony Orner, a licensed NJ Medicare broker who compares Medigap rates across every major carrier so you see real options, not a sales pitch.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          That distinction matters more than most people realize until they're locked into a plan they didn't fully compare.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How a nearby independent agent saves you money on Medigap
          </h2>
          <p className="text-gray-700 mb-2">
            Plan G from one carrier covers the exact same benefits as Plan G from another. That's federal law. What differs is the premium and how fast it rises over time.
          </p>
          <p className="text-gray-700 mb-2">
            Some carriers price aggressively low at 65 to attract new enrollees, then hit the block with steep increases by year three or four. An independent agent knows which carriers have stable rate histories and which ones don't. A captive agent tied to one company can't tell you that.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Carriers an independent NJ Medigap agent can quote for you
          </h2>
          <p className="text-gray-700 mb-2">
            I hold contracts with all the top Medicare Supplement carriers writing policies in New Jersey, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
            <li>Mutual of Omaha</li>
            <li>Aetna</li>
            <li>Cigna</li>
            <li>United American</li>
            <li>Humana</li>
            <li>Philadelphia American Life</li>
          </ul>
          <p className="text-gray-700">
            One call gets you quotes from all of them. Same Plan G or Plan N benefits, different price tags. You pick.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why long-term premium behavior matters more than starting price
          </h2>
          <p className="text-gray-700 mb-2">
            Most people shopping for a Supplement focus on the starting premium. That's the wrong number to obsess over. The real question is what you'll pay at 72, 78, or 83.
          </p>
          <p className="text-gray-700">
            Medigap premiums can increase for two reasons: your age (attained-age rating) and block rate increases when claims rise in your insured pool. When both stack, 10-18% jumps in a single year aren't unusual. I track carrier rate histories so you avoid companies with a pattern of aggressive increases.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            What to expect during your first call with an independent agent
          </h2>
          <p className="text-gray-700 mb-2">
            No pressure. No jargon. Here's what we cover in about 15 minutes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Your Part B start date and enrollment timeline</li>
            <li>Whether Plan G or Plan N fits your situation (and why)</li>
            <li>Side-by-side rate comparison across carriers</li>
            <li>Rate increase history for each option</li>
            <li>Your prescription drug plan, if needed</li>
          </ul>
          <p className="text-gray-700 mt-2">
            You leave the call with a clear recommendation and zero obligation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Protect your enrollment rights by starting early
          </h2>
          <p className="text-gray-700 mb-2">
            Your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. During that window, every carrier must accept you at standard rates regardless of health conditions.
          </p>
          <p className="text-gray-700">
            Once it closes, carriers can medically underwrite you. Pre-existing conditions like Type 2 Diabetes can mean higher premiums or outright denial. I've seen people lose their Supplement protection and struggle to get it back. Start the conversation about 6 months before your Part B effective date.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Schedule a free Medicare Supplement review with Anthony Orner
          </h2>
          <p className="text-gray-700 mb-2">
            Whether you're turning 65 soon or already on Medicare and wondering if a better rate exists, I'll run the numbers for you. No cost, no commitment. Just honest answers from someone who isn't tied to one company.
          </p>
          <p className="text-gray-700">
            Call <strong>855-559-1700</strong> or use the link below to get started.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready for an unbiased Medigap comparison?
          </p>
          <p className="mb-4">
            Call <strong>855-559-1700</strong> or get your free quote online.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Plan G vs. Plan N: Which Medigap plan is right for you?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment Period explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/cost"
                className="text-blue-600 hover:underline"
              >
                Why Medicare Supplement rates increase and how to prepare
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, licensed NJ Medicare broker
              </Link>
            </li>
          </ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Medigap (Medicare Supplement Insurance)</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Find someone to talk to in your state</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased Medicare counseling in New Jersey, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}