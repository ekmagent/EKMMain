import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare advisors nj | Free Licensed Broker Help | MedicareYourself",
  description:
    "Medicare advisors in NJ who compare every major carrier at no cost to you. Anthony Orner offers free, unbiased plan guidance. Call 855-559-1700.",
  openGraph: {
    title:
      "medicare advisors nj | Free Licensed Broker Help | MedicareYourself",
    description:
      "Medicare advisors in NJ who compare every major carrier at no cost to you. Anthony Orner offers free, unbiased plan guidance. Call 855-559-1700.",
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
      item: "https://medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Advisors NJ",
      item: "https://medicareyourself.com/services/medicare-advisors-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Advisors in NJ: What a Licensed Broker Actually Does for You",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "What is the New Jersey Medicare advisory?",
    answer:
      "New Jersey doesn't have a single official 'Medicare advisory.' The term usually refers to licensed, independent Medicare brokers and agents operating in NJ who help you compare plans from multiple carriers at no cost. The State Health Insurance Assistance Program (SHIP) also offers free counseling through local offices.",
  },
  {
    question: "Are Medicare advisors worth it?",
    answer:
      "Yes, if you work with a licensed independent broker. They compare plans from 20+ carriers, explain your options in plain English, and help you enroll correctly. They're paid by insurance carriers, not by you, so there's no fee for their help. The key is choosing a broker who represents multiple companies, not just one.",
  },
  {
    question: "How do I know a Medicare advisor in NJ is legitimate?",
    answer:
      "Check that they hold an active New Jersey Department of Banking and Insurance license. Ask how many carriers they represent. A legitimate broker will never pressure you, will clearly explain plan differences, and won't charge you a fee. You can verify any agent's license at the NJ DOBI website.",
  },
  {
    question:
      "When should I contact a Medicare advisor before turning 65 in NJ?",
    answer:
      "Reach out about six months before your 65th birthday. This gives you time to understand your options and, if you want a Medigap plan, apply during your six-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. Applying during this window means no medical underwriting.",
  },
];

export default function MedicareAdvisorsNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Advisors NJ</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Advisors in NJ: What a Licensed Broker Actually Does for You
        </h1>

        <Image
          src="/images/hub_medicare-advisors-nj.webp"
          alt="medicare advisors nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare advisors in NJ range from helpful to harmful, and the
          difference comes down to one thing: who they actually work for. A
          captive agent sells one carrier's plans. An independent broker
          compares plans across every major carrier and lets you pick what
          fits.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker based in
          New Jersey. Here's how this works and why it matters.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Advisor, agent, broker — which title matters and why
          </h2>
          <p className="mb-2">
            "Advisor" isn't a regulated title. Anyone can use it. What
            actually protects you is whether the person holds a New Jersey
            Department of Banking and Insurance license and represents
            multiple carriers.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Captive agent:</strong> Works for one company. Can only
              show you their plans.
            </li>
            <li>
              <strong>Independent broker:</strong> Contracted with 20+
              carriers. Compares rates side by side. Paid by the carrier you
              choose, not by you.
            </li>
          </ul>
          <p>
            If someone won't tell you how many carriers they represent, that
            tells you everything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How New Jersey's guaranteed-issue rules protect you
          </h2>
          <p className="mb-2">
            During your six-month Medigap Open Enrollment Period (starting
            the month you turn 65 and enroll in Part B), every Medigap
            carrier in NJ must accept you regardless of health history. No
            medical questions. No higher premiums for pre-existing
            conditions.
          </p>
          <p>
            Outside that window, NJ carriers can underwrite. Federal
            guaranteed-issue rights still apply in specific situations: losing
            employer coverage, leaving a Medicare Advantage plan within 12
            months, or your carrier going bankrupt. Miss the window without a
            qualifying trigger, and your options shrink fast.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement and Advantage plans compared across NJ carriers
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap (Supplement):</strong> Covers gaps in Original
              Medicare. Plan G is the most popular, covering the $1,676 Part
              A deductible, SNF coinsurance ($209.50/day for days 21-100),
              and excess charges. You pay the $283 Part B deductible, then
              essentially nothing else. Rates vary by carrier and age.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> Replaces Original Medicare
              with a network-based plan. Often includes dental, vision, and
              drug coverage. Lower premiums, but copays and prior
              authorizations apply. Network restrictions matter a lot in
              North Jersey vs. South Jersey.
            </li>
          </ul>
          <p className="mt-2">
            Neither option is universally better. It depends on your doctors,
            your medications, and how much predictability you want in your
            costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a broker actually does that you can't do alone
          </h2>
          <p className="mb-2">
            You can go to medicare.gov and compare plans yourself. Most
            people try. Most people also call me afterward because the plan
            finder doesn't explain what the numbers mean for their situation.
          </p>
          <p>
            A broker checks your prescriptions against Part D formularies,
            confirms your doctors are in-network, flags enrollment deadlines
            you didn't know existed, and handles paperwork. If a claim gets
            denied next year, you call me. Not an 800 number.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common mistakes people make without guidance
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Buying a Medigap plan too early or too late. Timing your Part B
              enrollment wrong can trigger a 10% premium penalty for every
              12-month period you delayed.
            </li>
            <li>
              Assuming employer coverage automatically coordinates with
              Medicare. If your employer has fewer than 20 employees, Medicare
              becomes primary. Get this wrong and claims get denied.
            </li>
            <li>
              Choosing a plan based on premium alone without checking drug
              formularies or provider networks.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Talk to Anthony Orner for a free plan review
          </h2>
          <p className="mb-2">
            I live in New Jersey, I work with every major carrier here, and I
            don't charge you a cent. The carriers pay me the same commission
            regardless of which plan you pick, so I have zero reason to steer
            you toward one over another.
          </p>
          <p>
            If you're approaching 65, leaving employer coverage, or just
            wondering whether your current plan still makes sense, call me.
            One conversation. No obligation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready for an honest plan comparison?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medigap-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advantage-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: When and Why It Matters
              </Link>
            </li>
            <li>
              <Link
                href="/guides/medicare-vs-employer-coverage"
                className="text-blue-600 hover:underline"
              >
                Medicare vs. Employer Coverage: How They Work Together
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}