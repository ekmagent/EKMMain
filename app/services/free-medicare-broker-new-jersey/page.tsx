import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "free medicare broker new jersey | No Fees, No Obligation | MedicareYourself",
  description:
    "Work with a free, licensed Medicare broker in New Jersey. Compare Medigap, Advantage & Part D plans at no cost. Call 855-559-1700 for a no-obligation review.",
  alternates: { canonical: "https://medicareyourself.com/services/free-medicare-broker-new-jersey" },
  openGraph: {
    title:
      "free medicare broker new jersey | No Fees, No Obligation | MedicareYourself",
    description:
      "Free Medicare broker in New Jersey — Anthony Orner is licensed, independent, and paid by carriers so you pay nothing. Compare plans with zero obligation.",
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
      name: "Free Medicare Broker New Jersey",
      item: "https://medicareyourself.com/services/free-medicare-broker-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Free Medicare Broker in New Jersey: Licensed Help That Never Costs You a Dime",
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
    question: "Are Medicare brokers free?",
    answer:
      "Yes. Independent Medicare brokers like Anthony Orner are paid commissions directly by insurance carriers. You never pay a fee, a markup, or a hidden charge. The plans cost the same whether you enroll through a broker, online, or directly with the carrier.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker is licensed with multiple carriers and can compare options across all of them. A broker works for you; an agent works for a single carrier.",
  },
  {
    question: "Do I have to enroll through the broker after getting a quote?",
    answer:
      "No. There's zero obligation. You can get a full plan comparison, ask every question you have, and walk away if nothing fits. The consultation is free regardless of whether you enroll.",
  },
  {
    question: "Can a New Jersey Medicare broker help with Medigap and Medicare Advantage?",
    answer:
      "Yes. An independent broker licensed in New Jersey can quote both Medigap (Medicare Supplement) and Medicare Advantage plans, plus standalone Part D prescription drug plans. You get a side-by-side view of all your options in one call.",
  },
  {
    question: "Is Anthony Orner licensed to help with Medicare in New Jersey?",
    answer:
      "Yes. Anthony Orner (NPI 1902584006) is a licensed Medicare insurance broker in New Jersey and 34 additional states. He works as an independent broker, which means he can compare plans across multiple carriers rather than representing just one company.",
  },
  {
    question: "How does a New Jersey broker help with Medigap enrollment?",
    answer:
      "NJ Medigap carriers use different pricing methods — most use attained-age rating (premiums rise as you age), while a minority are community-rated. A broker can explain each carrier's rating method and rate history, walk you through your 6-month Medigap Open Enrollment Period, which begins when you're 65 or older and enrolled in Part B, and help you compare letter plans like Plan G and Plan N across carriers.",
  }
];

export default function FreeMedicareBrokerNewJersey() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/services">Medicare Guides</Link> &gt;{" "}
        <span>Free Medicare Broker New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Free Medicare Broker in New Jersey: Licensed Help That Never Costs You
          a Dime
        </h1>

        <Image
          src="/images/free-medicare-broker-new-jersey.webp"
          alt="free medicare broker new jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Free Medicare broker help in New Jersey exists because carriers pay the broker directly. You pay exactly $0 for my time, my advice, and every plan comparison I run. I'm Anthony Orner, an independent broker licensed across NJ, and I work for you, not one insurance company.
        </p>
        <p className="text-lg mb-6">
          If you're skeptical, good. Let me explain how this actually works.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How brokers get paid by carriers instead of by you
          </h2>
          <p className="mb-2">
            Every Medicare plan carrier builds a commission into the plan's cost. That commission is the same whether you enroll through a broker, on the phone with the carrier, or on their website. The price you pay doesn't change.
          </p>
          <p>
            The carrier pays me after you enroll. You never see a bill, a service fee, or a "consulting charge." If you don't enroll, I don't get paid, and that's fine. No strings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What an independent broker does that a captive agent cannot
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A captive agent sells plans from one company. If that company's plan doesn't fit your doctors or drugs, tough luck.
            </li>
            <li>
              An independent broker is licensed with multiple carriers and shows you options side by side, including plans the captive agent can't mention.
            </li>
            <li>
              Only an agent or broker can make specific plan recommendations. Certified assisters and navigators can explain your options but can't tell you which plan to pick.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Carriers I quote across NJ
          </h2>
          <p className="mb-2">
            I hold active licenses with major Medicare carriers operating in New Jersey, including those offering Medicare Advantage, Medigap, and Part D plans. That means I can compare premiums, networks, drug formularies, and copay structures for you in one conversation.
          </p>
          <p>
            Rates vary by carrier, your zip code, age, and tobacco status. I'll show you exact numbers for your situation, not estimates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a plan comparison actually looks like
          </h2>
          <p className="mb-2">
            I pull your doctors, pharmacies, and current medications into a quoting tool. Then I run every available plan and rank them by total estimated annual cost, not just the monthly premium.
          </p>
          <p>
            You get a clear picture: what you'd pay each month, what you'd pay at the doctor, and what your worst-case out-of-pocket looks like. No surprises in January.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows to know in 2026
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Advantage & Part D Open Enrollment:</strong> October 15 through December 7.
            </li>
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the month you turn 65 and are enrolled in Part B. This is when carriers must accept you regardless of health history.
            </li>
            <li>
              <strong>Turning 65?</strong> Apply for Medigap up to 6 months before your Part B start date to lock in your rate.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a no-cost plan comparison in under 5 minutes
          </h2>
          <p className="mb-2">
            Call me or fill out the form below. I'll ask a few quick questions about your coverage, your doctors, and your prescriptions. Within minutes, you'll have a clear comparison you can trust.
          </p>
          <p>
            No pressure. No obligation. Just honest answers from a licensed broker who lives and works in New Jersey.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready for your free plan comparison?
          </p>
          <p className="text-3xl font-bold mb-4">
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

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Part D Prescription Drug Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner
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
                href="/services/best-medicare-broker-no-cost-to-you"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Broker No Cost To You
              </Link>
            </li>
            <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/irvington-nj-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Irvington NJ Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-specialists-in-cranford-nj-office"
                className="text-blue-600 hover:underline"
              >
                Medicare Specialists In Cranford NJ Office
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4"><p>Official Medicare resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Get Started with Medicare (medicare.gov)</a> and <a href="https://www.medicare.gov/plan-compare/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Compare Plans on Medicare.gov</a>.</p></div>
            <div className="text-sm text-gray-600 mt-4"><p>New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a> through the NJ Department of Human Services.</p></div>
      </section>
      </article>
    </>
  );
}