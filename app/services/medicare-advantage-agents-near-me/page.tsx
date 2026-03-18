import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare advantage agents near me | Free NJ Help | MedicareYourself",
  description:
    "Medicare Advantage agents near you in NJ. Anthony Orner compares $0-premium MA plans by county and helps you enroll free. Call 855-559-1700.",
  openGraph: {
    title:
      "medicare advantage agents near me | Free NJ Help | MedicareYourself",
    description:
      "Medicare Advantage agents near you in NJ. Anthony Orner compares $0-premium MA plans by county and helps you enroll free. Call 855-559-1700.",
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
      item: "https://www.medicareyourself.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Medicare Guides",
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Advantage Agents Near Me",
      item: "https://www.medicareyourself.com/services/medicare-advantage-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Advantage Agents Near You in New Jersey",
  author: {
    "@type": "Person",
    name: "Anthony Orner",
    url: "https://www.medicareyourself.com/about",
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
    question:
      "Who is the best person to talk to about Medicare Advantage plans?",
    answer:
      "An independent licensed Medicare broker can compare plans from multiple carriers in your county, not just one company. This gives you a broader view of available $0-premium plans, provider networks, and drug formularies. Independent agents like Anthony Orner are paid by the insurance carriers, so there's no cost to you.",
  },
  {
    question:
      "How do I find a Medicare Advantage agent near me in New Jersey?",
    answer:
      "Look for a licensed, independent broker who works across multiple carriers and knows your county's plan options. You can call EasyKind Medicare at 855-559-1700 for free help from a local NJ broker who handles everything from plan comparison to enrollment.",
  },
  {
    question: "Do Medicare Advantage agents charge a fee?",
    answer:
      "No. Licensed Medicare agents and brokers are compensated by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment assistance. This is the same whether you work with a captive agent or an independent broker.",
  },
  {
    question:
      "What's the difference between a captive agent and an independent Medicare broker?",
    answer:
      "A captive agent represents one insurance company and can only offer that carrier's plans. An independent broker is contracted with multiple carriers, so they can compare plans across companies to find the best fit for your doctors, prescriptions, and budget.",
  },
];

export default function MedicareAdvantageAgentsNearMe() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">Medicare Advantage Agents Near Me</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Advantage Agents Near You in New Jersey
        </h1>

        <Image
          src="/images/medicare-advantage-agents-near-me_vector.webp"
          alt="Medicare Advantage agents near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare Advantage agents near you can make the difference between picking a plan that works and one that leaves you scrambling at the pharmacy counter. Most people turning 65 don't realize how much MA plans vary by county in New Jersey, or that the help is completely free.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, an independent licensed Medicare broker based in NJ. I compare plans from multiple carriers so you don't have to guess.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a Medicare Advantage agent does during enrollment
          </h2>
          <p className="mb-2">
            A good agent doesn't just hand you a brochure. They check whether your doctors are in-network, verify your prescriptions are on the plan's formulary, and compare out-of-pocket maximums across every option in your zip code.
          </p>
          <p>
            During Annual Enrollment (October 15 through December 7), I sit down with clients and run side-by-side comparisons. You see real numbers, not marketing promises.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How NJ Medicare Advantage plans differ by county
          </h2>
          <p className="mb-2">
            Plan availability in Bergen County looks nothing like what's offered in Ocean or Camden County. Networks, premiums, and extra benefits (dental, vision, hearing, gym memberships) shift based on where you live.
          </p>
          <p>
            Some counties have 30+ MA options. Others have fewer than 10. An independent broker who knows your area saves you hours of research and catches details you'd likely miss on your own.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Advantage vs. Medigap: which path a good agent helps you evaluate
          </h2>
          <p className="mb-2">
            This is where people get stuck. Medicare Advantage often has $0 premiums and bundled benefits. Medigap (Medicare Supplement) pairs with Original Medicare and gives you broader provider access, but you'll pay a monthly premium plus a separate Part D drug plan.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>MA plans cap your yearly out-of-pocket costs (varies by plan)</li>
            <li>Medigap Plan G or N covers most of what Original Medicare doesn't</li>
            <li>MA uses provider networks; Medigap lets you see any doctor who takes Medicare</li>
          </ul>
          <p>
            Neither choice is universally better. The right one depends on your health, your doctors, and your prescriptions. That's exactly what I help you figure out.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independent brokers beat captive agents
          </h2>
          <p className="mb-2">
            Captive agents work for one insurance company. They can only show you that carrier's plans. An independent broker like me is contracted with multiple carriers and can compare across all of them.
          </p>
          <p>
            You get unbiased recommendations instead of a sales pitch for a single brand.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            There's no cost for agent help
          </h2>
          <p className="mb-2">
            Insurance carriers pay brokers directly. You pay nothing for consultations, plan comparisons, or enrollment. The plan you buy through me costs the same as buying it yourself on medicare.gov.
          </p>
          <p>
            The difference? You get a local person to call when something goes wrong. That matters more than most people expect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get free Medicare Advantage help from Anthony Orner
          </h2>
          <p className="mb-2">
            If you're turning 65, retiring, or just want to see if a better plan exists for next year, I'll walk you through your options. No pressure, no fee, no obligation.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or schedule a consultation online. I work with clients across New Jersey and can meet by phone, video, or in person.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare Advantage plans in your NJ county?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold text-white"
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
                href="/medicare/medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                What Is Medicare Advantage? A Plain-English Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medigap-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: How to Decide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, Licensed NJ Medicare Broker
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}