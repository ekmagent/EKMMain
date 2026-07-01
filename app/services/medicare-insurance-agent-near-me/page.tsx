import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agent near me | Free NJ Broker Consultation | MedicareYourself",
  description:
    "Looking for a Medicare insurance agent near you? NJ broker Anthony Orner compares plans across carriers by phone or video — free, no pressure. Call today.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-insurance-agent-near-me" },
  openGraph: {
    title:
      "medicare insurance agent near me | Free NJ Broker Consultation | MedicareYourself",
    description:
      "Medicare insurance agent near me in New Jersey — Anthony Orner is a licensed independent broker who compares plans by phone or video. Free no-pressure quote.",
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
      name: "Medicare Insurance Agent Near Me",
      item: "https://medicareyourself.com/services/medicare-insurance-agent-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agent Near Me — Find a Licensed Independent Broker in New Jersey",
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
    question: "Should I use an agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent compares plans across multiple carriers at no cost to you. Brokers are paid by insurance companies, not by clients, so you get unbiased guidance without any fees or commissions added to your premium.",
  },
  {
    question:
      "Do I need to meet a Medicare agent in person?",
    answer:
      "No. Phone and video consultations are just as thorough as in-person meetings. Anthony Orner reviews your medications, doctors, and budget over a screen share so you can see every plan comparison in real time from home.",
  },
  {
    question:
      "What's the difference between a captive agent and an independent broker?",
    answer:
      "A captive agent represents one insurance company. An independent broker like Anthony Orner is contracted with multiple carriers and can show you plans side by side so you pick the one that actually fits your situation.",
  },
  {
    question: "Does it cost anything to work with a Medicare broker?",
    answer:
      "No. Medicare brokers are compensated by the insurance carriers. Your premium stays the same whether you enroll directly or through a broker. The consultation and plan comparison are completely free.",
  },
,
  {
    question: "How quickly can a Medicare agent help me enroll?",
    answer:
      "Most enrollments can be completed in a single phone or video appointment once you have your Medicare number and effective date. Anthony Orner walks you through the application, confirms your doctors and medications are covered, and submits everything electronically. You typically receive carrier confirmation within a few business days.",
  }
];

export default function MedicareInsuranceAgentNearMe() {
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
        <span className="text-gray-700">Medicare Insurance Agent Near Me</span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">
          Medicare Insurance Agent Near Me — Find a Licensed Independent Broker
          in New Jersey
        </h1>

        <Image
          src="/images/medicare-insurance-agent-near-me.webp"
          alt="Medicare insurance agent near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare insurance agent near me is one of the most common searches I see from people turning 65 in New Jersey. I'm Anthony Orner, an independent licensed broker serving the entire state. You don't need to drive anywhere to get real help.
        </p>
        <p className="text-lg mb-6">
          I compare Medicare Advantage, Medigap, and Part D plans from multiple carriers over a phone or video call. Zero cost to you, zero pressure.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why "near me" matters less than "independent and licensed"
          </h2>
          <p className="mb-2">
            Proximity used to matter when you needed someone to spread brochures on your kitchen table. It doesn't anymore. What matters is whether your agent works for you or for one insurance company.
          </p>
          <p>
            A captive agent can only show you their employer's plans. An independent broker like me is contracted with multiple carriers and shows you the real differences side by side. That distinction saves people hundreds of dollars a year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            NJ counties and zip codes I serve
          </h2>
          <p className="mb-2">
            I work with Medicare beneficiaries in all 21 New Jersey counties, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Bergen, Essex, Hudson, and Passaic (North Jersey)</li>
            <li>Middlesex, Monmouth, and Ocean (Central Jersey)</li>
            <li>Camden, Burlington, and Atlantic (South Jersey)</li>
            <li>Morris, Somerset, Union, and every county in between</li>
          </ul>
          <p>
            If you have a New Jersey zip code, I can pull up the exact plans available in your area. Plan networks and premiums change by county, so your zip code is the first thing I ask for.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How a phone or video consultation replaces an office visit
          </h2>
          <p className="mb-2">
            I screen-share the same enrollment tools I'd use sitting across from you. You see plan names, premiums, copays, and drug costs in real time. Most calls take 20 to 30 minutes.
          </p>
          <p>
            Bring your current medication list and your doctors' names. That's all I need to run a comparison that's specific to your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What I actually compare for you
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Medicare Advantage plans (HMO, PPO, DSNP)</li>
            <li>Medigap/Medicare Supplement policies (Plans G, N, and others)</li>
            <li>Part D prescription drug plans</li>
            <li>Your total annual out-of-pocket cost, not just the monthly premium</li>
          </ul>
          <p className="mt-2">
            For 2026, Part B runs $202.90/month with a $283 annual deductible. The Part A inpatient deductible is $1,676 per benefit period. Those numbers shape which supplemental plan makes sense for your budget.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows to know
          </h2>
          <p className="mb-2">
            Medicare Advantage and Part D Open Enrollment runs October 15 through December 7 each year. If you're turning 65, your Medigap Open Enrollment Period lasts 6 months starting the month you turn 65 and are enrolled in Part B. That's when you get guaranteed issue rights with no medical underwriting.
          </p>
          <p>
            Miss that window and carriers can deny you or charge higher rates based on health. Call before that deadline, not after.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get matched with a free Medicare plan comparison today
          </h2>
          <p>
            You searched for a Medicare insurance agent near you. Here I am. One call gives you a side-by-side plan comparison built around your doctors, prescriptions, and budget. No appointment needed. No sales pitch.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed NJ Medicare broker today
          </p>
          <p className="text-3xl font-bold mb-4">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100 transition"
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
                Part D Prescription Drug Plans
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
                href="/services/independent-medicare-insurance-agent-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Insurance Agent Near Me
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Verify any agent's guidance against official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov — Talk to Someone</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or verify any broker's license at the <a href="https://www.nj.gov/dobi/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
      </section>
      </article>
    </>
  );
}