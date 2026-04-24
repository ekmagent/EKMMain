import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "find a medicare agent in montclair nj | Free Local Help | MedicareYourself",
  description:
    "Find a medicare agent in Montclair NJ — Anthony Orner is a licensed independent broker comparing top carriers in Essex County. Free consultation, no pressure.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-montclair-nj" },
  openGraph: {
    title:
      "find a medicare agent in montclair nj | Free Local Help | MedicareYourself",
    description:
      "Find a medicare agent in Montclair NJ — Anthony Orner is a licensed independent broker comparing top carriers in Essex County. Free consultation, no pressure.",
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
      name: "Find a Medicare Agent in Montclair NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-montclair-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Montclair, NJ Who Works for You, Not One Carrier",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How do I find a good Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one. Ask if they compare both Medigap and Medicare Advantage plans. A good agent explains your options without pressuring you toward a specific plan. Anthony Orner works with top carriers across Essex County and provides free, no-obligation consultations.",
  },
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Medicare agents are paid by insurance carriers, not by you. There's no fee for using an independent broker. Your premiums stay the same whether you enroll directly or through an agent. The difference is you get someone who compares plans on your behalf.",
  },
  {
    question: "Can a Montclair Medicare agent help if I already have coverage?",
    answer:
      "Yes. If your current plan's network changed, your doctors stopped accepting your carrier, or your costs went up at renewal, an independent broker can review your situation and show you alternatives during the appropriate enrollment window.",
  },
  {
    question: "What's the difference between a captive and independent Medicare agent?",
    answer:
      "A captive agent represents one insurance company. An independent broker represents multiple carriers and can compare plans side by side. Independent brokers like Anthony Orner have no financial incentive to steer you toward one carrier over another.",
  },
];

export default function FindMedicareAgentMontclairNJ() {
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
          Find a Medicare Agent in Montclair NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Find a Medicare Agent in Montclair, NJ Who Works for You, Not One Carrier
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-montclair-nj.webp"
          alt="find a medicare agent in montclair nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Find a Medicare agent in Montclair, NJ who actually compares plans across carriers instead of pushing the one they're contracted with. That's what an independent broker does. I'm Anthony Orner, and I help Montclair residents sort through Medigap and Advantage options without the pressure or the sales pitch.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why Montclair residents choose an independent broker
          </h2>
          <p className="mb-3">
            Montclair has access to Hackensack Meridian, Mountainside Medical Center, and the broader network of Essex County providers. But not every Medicare plan covers every system the same way. Carrier network changes happen, and they can disrupt care you've relied on for years.
          </p>
          <p>
            An independent broker checks which plans include your specific doctors and hospitals before you enroll. A captive agent can only show you what their one company offers.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap and Advantage plans available in Essex County
          </h2>
          <p className="mb-3">
            Essex County residents can choose from both Medicare Supplement (Medigap) plans and Medicare Advantage plans. Each works differently:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              <strong>Medigap</strong> covers gaps in Original Medicare. Plan G is the most popular option. You pay the $283/year Part B deductible, and the plan handles the rest.
            </li>
            <li>
              <strong>Medicare Advantage</strong> bundles Part A, Part B, and often Part D into one plan. Many include dental and vision. Networks matter here.
            </li>
          </ul>
          <p>
            Rates vary by carrier. I compare them side by side so you see real numbers, not marketing materials.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony Orner helps Montclair clients compare rates
          </h2>
          <p className="mb-3">
            I pull quotes from multiple carriers for your age, zip code, and tobacco status. Then we look at the numbers together. No guessing, no fine print surprises.
          </p>
          <p>
            If you're turning 65, your Medigap Open Enrollment Period gives you 6 months of guaranteed issue starting the month you turn 65 and are enrolled in Part B. That's when rates are lowest and no health questions are asked. Apply up to 6 months before your Part B start date to lock in your rate.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What happens when your carrier drops local providers
          </h2>
          <p className="mb-3">
            Network disruptions are real in New Jersey. When a major health system stops accepting a carrier, people scramble. If your plan's provider network shrinks, you may qualify for a Special Enrollment Period to switch.
          </p>
          <p>
            Having a broker means you already have someone who knows your coverage and can move quickly when things change.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            No cost to you, ever
          </h2>
          <p className="mb-3">
            Insurance carriers pay broker commissions. Your premium stays the same whether you call a carrier directly or go through me. The only difference: I show you options from multiple companies, and I pick up the phone when you have a question in March.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free Medicare review by phone, Zoom, or in person
          </h2>
          <p>
            Call me, book a Zoom, or meet locally. I'll review what you have, show you what's available in Montclair's 07042 and 07043 zip codes, and let you decide on your own timeline.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a local Medicare broker who knows Essex County
          </p>
          <p className="text-2xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-montclair-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in Essex County, NJ
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: When to Apply for the Best Rate
              </Link>
            </li>
                      <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-monroe-township-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Monroe Township NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-mount-laurel-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Mount Laurel NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-neptune-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Neptune NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-passaic-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Passaic NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-paterson-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Paterson NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-piscataway-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Piscataway NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-plainfield-nj"
                className="text-blue-600 hover:underline"
              >
                Find A Medicare Agent In Plainfield NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agent"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agent
              </Link>
            </li>
            <li>
              <Link
                href="/services/tampa-medicare-agent"
                className="text-blue-600 hover:underline"
              >
                Tampa Medicare Agent
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Compare Medicare plans on Medicare.gov</a> or learn <a href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/working-with-an-agent-or-broker" rel="noopener noreferrer" target="_blank" className="underline">how to work with a Medicare agent or broker</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <p className="text-sm text-gray-600 mt-2">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</p>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}