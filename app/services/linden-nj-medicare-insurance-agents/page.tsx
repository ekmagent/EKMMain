import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "linden nj medicare insurance agents | Free Quote | MedicareYourself",
  description:
    "Linden NJ Medicare agents — Anthony Orner compares Supplement & Advantage plans across top carriers in Union County. Call 855-559-1700 for a free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/linden-nj-medicare-insurance-agents" },
  openGraph: {
    title:
      "linden nj medicare insurance agents | Free Quote | MedicareYourself",
    description:
      "Linden NJ Medicare insurance agents — Anthony Orner compares Supplement and Advantage plans across carriers in Union County. Free quote, no obligation.",
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
      name: "Linden NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/linden-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Linden NJ Medicare Insurance Agents: Independent Broker for Union County",
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
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no extra cost to you. Brokers are paid by the insurance companies, so you get professional guidance without paying a fee. The difference is an independent broker isn't locked into one company's products.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "It depends on your doctors, prescriptions, and budget. Medicare Supplement Plan G offers the most predictable costs for most NJ seniors, while Medicare Advantage HMO or PPO plans can lower premiums if you're comfortable with a network. An independent broker can compare both options side by side for your zip code.",
  },
  {
    question: "Do Medicare health insurance agents get commission?",
    answer:
      "Yes. Medicare brokers receive commissions directly from insurance carriers. This means you pay nothing for their help. Commissions are federally regulated and identical across brokers, so there's no financial incentive to push one plan over another.",
  },
  {
    question: "When should I contact a Medicare broker in Linden?",
    answer:
      "Ideally 6 months before you turn 65 or before your employer coverage ends. For Medigap, your best rates are locked during the 6-month Medigap Open Enrollment Period that starts the month you turn 65 and are enrolled in Part B. For Medicare Advantage, Open Enrollment runs October 15 through December 7.",
  },
];

export default function LindenNJMedicareInsuranceAgents() {
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
          Linden NJ Medicare Insurance Agents
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Linden NJ Medicare Insurance Agents: Independent Broker for Union
          County
        </h1>

        <Image
          src="/images/linden-nj-medicare-insurance-agents.webp"
          alt="Linden NJ Medicare insurance agents"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Linden NJ Medicare insurance agents aren't all the same. A captive
          agent sells one company's plans. An independent broker like me compares
          plans from dozens of carriers so you see every option available in
          07036.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed NJ Medicare broker serving Linden and
          all of Union County. No cost, no obligation, no pressure.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What a licensed independent broker does differently in Linden
          </h2>
          <p className="mb-3">
            Captive agents on Wood Avenue or anywhere else can only show you what
            their company offers. If their carrier's plan doesn't fit your
            doctors or prescriptions, tough luck.
          </p>
          <p>
            I work with multiple carriers. That means I can pull up plans from
            Aetna, Cigna, Mutual of Omaha, United, Humana, and others, then lay
            them side by side. You pick what actually fits. My commission comes
            from the carrier you choose, and it's the same regardless of which
            plan you select.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement and Advantage plans available in 07036
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> Plan G is the most
              popular in NJ. You pay the $283 Part B deductible, and the plan
              covers everything else Medicare approves. Any doctor who takes
              Medicare takes your plan. Rates vary by carrier.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> HMO and PPO options
              in Union County often include dental, vision, hearing, and
              prescription drug coverage. Some carry $0 premiums but require
              network use.
            </li>
            <li>
              <strong>Part D (Prescription Drug):</strong> Standalone drug plans
              pair with Medigap. Formularies change yearly, so an annual review
              matters.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How Linden seniors can lower their Medicare costs
          </h2>
          <p className="mb-3">
            The 2026 Part B premium is $202.90/month, and the Part A deductible
            is $1,676 per benefit period. Those numbers add up fast if you don't
            have the right supplemental coverage.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Lock in Medigap rates during your 6-month Open Enrollment window
              starting the month you're 65 and enrolled in Part B. Guaranteed
              issue means no health questions.
            </li>
            <li>
              Review your Part D plan every fall. Drug formularies shift, and a
              plan that saved money last year might cost more now.
            </li>
            <li>
              Avoid the Part B late enrollment penalty: 10% for every 12 months
              you delayed without qualifying coverage.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Why carrier disruptions matter in Union County
          </h2>
          <p className="mb-3">
            NJ residents are seeing major health systems drop certain insurance
            carriers. When a hospital or specialist network stops accepting your
            plan, you're stuck scrambling mid-year.
          </p>
          <p>
            An independent broker monitors these changes. If your plan's network
            shrinks, I'll flag it and help you evaluate alternatives during the
            next enrollment window, or immediately if you qualify for a Special
            Enrollment Period.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Local healthcare access from Linden
          </h2>
          <p className="mb-3">
            Linden residents rely on Robert Wood Johnson University Hospital
            Rahway, Trinitas Regional Medical Center in Elizabeth, and
            specialists throughout Union County. Your plan choice determines
            whether these providers are in-network or covered without referral.
          </p>
          <p>
            Medigap plans work with any Medicare-accepting provider nationwide.
            Medicare Advantage networks vary by carrier and plan type. I'll check
            your doctors before you enroll.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free Medicare consultation in Linden
          </h2>
          <p className="mb-3">
            Call and I'll walk you through your options. Phone, video, or in
            person. No sign-up required, no sales pitch. I'll show you what each
            plan actually costs with your specific medications and doctors.
          </p>
          <p>
            Medicare Advantage and Part D Open Enrollment runs October 15
            through December 7. If you're turning 65 soon, start 6 months early
            to get the best Medigap rates.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who works for you, not one
            company.
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

        <FAQSection faqs={faqs} />

        <section className="mt-12 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/linden-nj-medicare-insurance-agents"
                className="text-blue-600 hover:underline"
              >
                Union County Medicare Broker
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G in New Jersey
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
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}