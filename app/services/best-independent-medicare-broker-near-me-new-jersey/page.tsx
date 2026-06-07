import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best independent medicare broker near me new jersey | Free Consultation | MedicareYourself",
  description:
    "Looking for the best independent Medicare broker near you in New Jersey? Anthony Orner compares 20+ carriers free across all 21 NJ counties. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/best-independent-medicare-broker-near-me-new-jersey" },
  openGraph: {
    title:
      "best independent medicare broker near me new jersey | Free Consultation | MedicareYourself",
    description:
      "Best independent Medicare broker near me in New Jersey? Anthony Orner compares 20+ carriers, charges nothing, and serves every NJ county. Free consultation.",
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
      name: "Best Independent Medicare Broker Near Me in New Jersey",
      item: "https://medicareyourself.com/services/best-independent-medicare-broker-near-me-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Independent Medicare Broker Near Me in New Jersey: What to Look For and Who to Call",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/best-independent-medicare-broker-near-me-new-jersey",
};

const faqs = [
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Independent Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. The plans cost the same whether you enroll directly with a carrier or through a broker. You get expert guidance at zero extra cost.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and whether you travel. An independent broker compares options across 20+ carriers to find what actually fits your situation, not just what looks good on paper.",
  },
  {
    question:
      "What's the difference between an independent and a captive Medicare broker?",
    answer:
      "A captive agent represents one insurance company and can only show you their plans. An independent broker is contracted with multiple carriers and can compare rates and benefits side by side. That carrier access is the main reason people get better-fitting coverage through independent brokers.",
  },
  {
    question: "Can a Medicare broker help me if I live in a rural NJ county?",
    answer:
      "Yes. Anthony Orner serves all 21 New Jersey counties by phone, video, or in person. Whether you're in Sussex County or Cape May, you get the same full plan comparison and enrollment support.",
  },
,
  {
    question: "When can I enroll in a Medigap plan in New Jersey?",
    answer:
      "Your strongest protections come during your 6-month Medigap Open Enrollment Period, which starts the month you're 65 or older and enrolled in Part B. During that window, carriers cannot deny you or charge more based on health. New Jersey uses community rating, so Medigap premiums are not based on your age.",
  },
  {
    question: "How do I know if a New Jersey Medicare broker is licensed?",
    answer:
      "You can verify any agent through the New Jersey Department of Banking and Insurance license lookup. Anthony Orner is licensed in New Jersey under NPI 1902584006 and appointed with more than 20 carriers serving NJ residents.",
  },
  {
    question: "Do I have to switch plans every year?",
    answer:
      "No, but it's smart to review annually during the Medicare Annual Enrollment Period from October 15 to December 7. Plan formularies, networks, and premiums change each year, and a quick check-in with a broker confirms your current plan is still the best fit. Call 855-559-1700 for a no-cost review.",
  }
];

export default function BestIndependentMedicareBrokerNearMeNewJersey() {
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
        <span>Best Independent Medicare Broker Near Me in New Jersey</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Best Independent Medicare Broker Near Me in New Jersey: What to Look
          For and Who to Call
        </h1>

        <Image
          src="/images/best-independent-medicare-broker-near-me-new-jersey.webp"
          alt="best independent medicare broker near me new jersey"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Best independent Medicare broker near me in New Jersey is one of the
          most common searches I see from people turning 65 or reviewing their
          coverage. The fact that you're looking for an independent broker tells
          me you already sense the difference matters.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker serving all
          21 NJ counties. Here's what to look for before you pick up the phone.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Independent vs. captive: why carrier access determines your rate
          </h2>
          <p className="mb-2">
            A captive agent works for one company. They can only show you that
            company's plans, even if a competitor offers a lower rate or better
            network for your doctors.
          </p>
          <p>
            An independent broker like me is contracted with 20+ carriers. I
            pull quotes from all of them, lay them side by side, and let you see
            the real differences. Same plan types, wildly different premiums and
            provider networks. Carrier access is the single biggest factor in
            finding the right fit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Credentials and red flags when choosing a NJ Medicare broker
          </h2>
          <p className="mb-3">Look for these before you trust anyone with your enrollment:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Active NJ Life & Health insurance license (verify at the NJ DOI website)</li>
            <li>AHIP certification for the current plan year</li>
            <li>Contracted with multiple carriers, not just one or two</li>
            <li>Willing to explain what they earn and how</li>
          </ul>
          <p>
            Red flags: pressure to decide on the first call, reluctance to show
            you competing plans, or pushing $0-premium Advantage plans without
            asking about your doctors and medications first. I've heard too many
            stories of people locked into plans where their longtime doctor turned
            out to be out of network.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony Orner serves clients statewide by phone and in person
          </h2>
          <p className="mb-2">
            I work with clients from Bergen County down to Cape May. Most
            consultations happen by phone or video, which means no driving, no
            waiting rooms, and no rushed office visits.
          </p>
          <p>
            If you prefer face-to-face, I do in-person meetings too. Either way,
            every consultation starts with your doctors, your prescriptions, and
            your budget. Not a sales pitch.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why the details inside your plan matter more than the plan type
          </h2>
          <p className="mb-2">
            Medicare Advantage, Medigap, Part D. The plan type is just the
            starting point. What actually shapes your year is the network, the
            formulary, the copay structure, and the out-of-pocket max.
          </p>
          <p>
            A $0-premium plan can cost more than a $150/month Medigap if your
            specialist visits and prescriptions stack up. I run the numbers so
            you see the real annual cost, not just the monthly premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows to know in 2026
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the
              month you turn 65 and have Part B. This is your best shot at
              guaranteed-issue coverage at the lowest rate.
            </li>
            <li>
              <strong>Medicare Advantage/Part D:</strong> October 15 through
              December 7 annually.
            </li>
            <li>
              <strong>Part B premium (2026):</strong> $202.90/month. Part A
              deductible: $1,676 per benefit period.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a side-by-side plan comparison at no cost
          </h2>
          <p className="mb-2">
            You pay nothing for my help. Carriers pay broker commissions at the
            same rate whether you enroll through me or directly with them. Your
            premium stays identical.
          </p>
          <p>
            What you gain: someone who reviews every option, explains the
            tradeoffs in plain English, and handles the enrollment paperwork. If
            your situation changes next year, I'll be here to help you adjust.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready for a side-by-side plan comparison?
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline font-bold">
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm opacity-90">
            No cost. No pressure. Every NJ county served.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
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
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Turning 65 Medicare Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D in New Jersey
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
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
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
                href="/services/best-medicare-insurance-broker-near-hackensack-nj"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Insurance Broker Near Hackensack NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-insurance-brokers-near-me"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Insurance Brokers Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-broker-near-me-new-jersey-reviews"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Broker Near Me New Jersey Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advise-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advise In New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-diabetics"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Diabetics
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-stroke-survivors"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Stroke Survivors
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-transplant-recipients"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For Transplant Recipients
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-in-monmouth-county-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare In Monmouth County New Jersey
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Get Started with Medicare (Medicare.gov)</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Talk to Someone (Medicare.gov)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Free, unbiased Medicare counseling is also available through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}