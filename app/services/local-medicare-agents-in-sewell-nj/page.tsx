import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in sewell nj | Free Quotes, No Pressure | MedicareYourself",
  description:
    "Local Medicare agents in Sewell, NJ — Anthony Orner compares Advantage, Medigap & Part D plans across top carriers. Free, no-pressure quotes. Call today.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-sewell-nj" },
  openGraph: {
    title:
      "local medicare agents in sewell nj | Free Quotes, No Pressure | MedicareYourself",
    description:
      "Local Medicare agents in Sewell NJ — Anthony Orner is a licensed independent broker serving Gloucester County. Compare plans across carriers. Free quotes.",
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
      name: "Local Medicare Agents in Sewell, NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-sewell-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Sewell, NJ — Gloucester County Broker You Can Trust",
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
    question: "Should I use a Medicare agent?",
    answer:
      "Yes. A licensed independent Medicare agent compares plans across multiple carriers at no cost to you. The carrier pays the agent, so you get expert guidance without paying a fee or a higher premium.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions. For personalized plan comparisons in Gloucester County, call Anthony Orner at 855-559-1700 for a free consultation.",
  },
  {
    question:
      "What is the difference between Medicare Advantage and Medigap in New Jersey?",
    answer:
      "Medicare Advantage replaces Original Medicare with a private plan that often includes drug coverage and extras like dental. Medigap (Medicare Supplement) works alongside Original Medicare to cover out-of-pocket costs like the $1,676 Part A deductible. Both are available in Gloucester County through multiple carriers.",
  },
  {
    question: "When can I enroll in a Medigap plan in Sewell, NJ?",
    answer:
      "Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you regardless of health history. After it closes, you may face medical underwriting.",
  },
];

export default function LocalMedicareAgentsInSewellNJ() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Local Medicare Agents in Sewell, NJ
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Local Medicare Agents in Sewell, NJ — Gloucester County Broker You Can
        Trust
      </h1>

      <Image
        src="/images/local-medicare-agents-in-sewell-nj.webp"
        alt="local medicare agents in sewell nj"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Local Medicare agents in Sewell, NJ give you something a 1-800 number
        can&apos;t: someone who knows your area, your doctors, and the carrier
        networks that actually work in Gloucester County. I&apos;m Anthony
        Orner, a licensed independent broker who lives and works in South
        Jersey.
      </p>
      <p className="mb-6">
        I don&apos;t work for one insurance company. I compare plans across
        carriers so you see real options side by side, at no cost to you.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why Sewell residents benefit from an independent Medicare broker
        </h2>
        <p className="mb-2">
          A captive agent sells one carrier&apos;s plans. I&apos;m independent,
          which means I can show you Aetna, Cigna, Humana, United, Mutual of
          Omaha, and others that serve the 08080 zip code.
        </p>
        <p>
          People in South Jersey tell me the same thing: they&apos;re
          overwhelmed by mailers and can&apos;t tell which plans cover their
          doctors at Inspira, Jefferson, or Cooper. That&apos;s exactly what I
          sort out for you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Gloucester County
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Medigap (Supplement) plans</strong> like Plan G and Plan N
            cover gaps in Original Medicare. Plan G covers the $1,676 Part A
            deductible and all Part B excess charges. Rates vary by carrier and
            age.
          </li>
          <li>
            <strong>Medicare Advantage (Part C)</strong> bundles hospital,
            medical, and usually Part D drug coverage. Many plans in Gloucester
            County include dental, vision, and hearing at $0 premium.
          </li>
          <li>
            <strong>Part D prescription drug plans</strong> that pair with
            Original Medicare or Medigap if you don&apos;t choose Advantage.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How to avoid overpaying for Medicare coverage after 65
        </h2>
        <p className="mb-2">
          Your Part B premium in 2026 is $202.90/month. That&apos;s just the
          baseline. Without supplemental coverage, you&apos;re responsible for
          the $283 Part B deductible, 20% of outpatient costs with no cap, and
          $209.50/day for skilled nursing days 21 through 100.
        </p>
        <p>
          Choosing the wrong plan costs you every month. A quick comparison
          call can save hundreds a year, especially if you&apos;re paying for
          benefits you don&apos;t use.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Don&apos;t miss your Medigap open enrollment window
        </h2>
        <p className="mb-2">
          You get one 6-month window to enroll in Medigap with guaranteed
          acceptance. It starts the month you&apos;re 65 and enrolled in Part
          B. Miss it, and carriers can deny you or charge more based on health
          history.
        </p>
        <p>
          If you&apos;re approaching 65, reach out about 6 months before your
          Part B start date. That gives us time to compare rates and lock in
          the best option.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What you won&apos;t get from a call center
        </h2>
        <p className="mb-2">
          People in South Jersey have told me how hard it is to even find a
          provider who takes their plan. Network access matters here. I check
          whether your doctors and local hospitals are in-network before I
          recommend anything.
        </p>
        <p>
          And I&apos;m here after enrollment. If a claim gets denied or you
          need to switch during Open Enrollment (October 15 through December
          7), you call me directly.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Schedule a free consultation with Anthony Orner
        </h2>
        <p className="mb-2">
          No pressure, no obligation. We&apos;ll review what you have, what
          you need, and what&apos;s available in the 08080 area. Most calls
          take about 15 minutes.
        </p>
        <p>
          I serve Sewell, Mantua, Mullica Hill, Washington Township,
          Williamstown, and all of Gloucester County.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Talk to a local Gloucester County Medicare broker today.
        </p>
        <p className="text-2xl font-bold mb-3">
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
              Medigap Plan G vs. Plan N: Which One Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap: How to Decide
            </Link>
          </li>
          <li>
            <Link
              href="/services/local-medicare-agents-in-sewell-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Broker Serving All of South Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Part B Late Enrollment Penalty: What It Costs You
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
                href="/services/local-medicare-agents-in-sayreville-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Sayreville NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agents-in-sicklerville-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Sicklerville NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agents-in-teaneck-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Teaneck NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agents-in-toms-river-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Toms River NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agents-in-trenton-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Trenton NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/local-medicare-agents-in-wayne-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Wayne NJ
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to Someone at Medicare.gov</a>. For New Jersey counseling, visit the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling to Gloucester County residents.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}