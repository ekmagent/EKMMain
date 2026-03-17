import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Free Medicare Advocate Near Me | Licensed NJ Broker at No Cost | MedicareYourself",
  description:
    "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost to you. Schedule a free consultation.",
  openGraph: {
    title:
      "Free Medicare Advocate Near Me | Licensed NJ Broker at No Cost | MedicareYourself",
    description:
      "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost to you. Schedule a free consultation.",
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
      item: "https://www.medicareyourself.com/hub",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Free Medicare Advocate Near Me",
      item: "https://www.medicareyourself.com/services/free-medicare-advocate-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free Medicare Advocate Near You in New Jersey",
  description:
    "Free Medicare advocate near you in New Jersey. Anthony Orner is a licensed independent broker who compares plans at no cost to you. Schedule a free consultation.",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Are there free patient advocates for Medicare?",
    answer:
      "Yes. Licensed independent Medicare brokers like Anthony Orner provide free advocacy and plan comparison services. Brokers are compensated by insurance carriers, not by you. Your State Health Insurance Assistance Program (SHIP) also offers free Medicare counseling in every state.",
  },
  {
    question: "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security offices handle Medicare enrollment and can answer basic eligibility questions, such as when your Part A and Part B coverage starts. However, they do not compare Medigap or Medicare Advantage plans for you. For plan-specific guidance, you need a licensed broker or SHIP counselor.",
  },
  {
    question:
      "What is the difference between a Medicare advocate and a Medicare broker?",
    answer:
      "A Medicare advocate is a general term for anyone who helps you with Medicare issues, including nonprofit counselors and patient advocates. A licensed Medicare broker specifically compares and enrolls you in plans from multiple insurance carriers. An independent broker acts as your advocate while also handling the enrollment paperwork.",
  },
  {
    question: "Does it cost anything to use a Medicare broker in New Jersey?",
    answer:
      "No. Licensed Medicare brokers are paid commissions by the insurance carriers. Your premiums are exactly the same whether you enroll directly with a carrier or through a broker. There is no fee, markup, or hidden charge for using a broker's services.",
  },
];

export default function FreeMedicareAdvocateNearMe() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/hub" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-900">Free Medicare Advocate Near Me</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Free Medicare Advocate Near You in New Jersey
        </h1>

        <Image
          src="/images/hub_free-medicare-advocate-near-me.webp"
          alt="free medicare advocate near me"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-800 mb-2">
          Searching for a free Medicare advocate near you? I'm Anthony Orner, a
          licensed independent Medicare broker based in New Jersey. I compare
          plans from multiple carriers and help you enroll - all at zero cost to
          you.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Whether you're turning 65 or reviewing your current coverage, you
          deserve straightforward guidance without a sales pitch.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            What a Medicare advocate does vs. what a broker does
          </h2>
          <p className="text-gray-800 mb-2">
            The term "Medicare advocate" is broad. It can mean a nonprofit
            counselor, a patient advocate who coordinates care, or a SHIP
            volunteer. These advocates typically answer questions and point you
            in the right direction.
          </p>
          <p className="text-gray-800">
            A licensed broker does all of that plus compares actual plan options,
            runs quotes, and handles your enrollment paperwork. I work as both -
            I advocate for what's best for you, and I get you enrolled in the
            right plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why Anthony's help is 100% free to you
          </h2>
          <p className="text-gray-800 mb-2">
            Insurance carriers pay brokers a commission when you enroll. Your
            premium stays exactly the same whether you call the carrier directly
            or go through me. There's no fee, no markup, no catch.
          </p>
          <p className="text-gray-800">
            This is how every licensed Medicare broker in the country is
            compensated. You get expert help. It costs you nothing extra.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How an independent advocate finds unbiased plan options
          </h2>
          <p className="text-gray-800 mb-2">
            Captive agents work for one carrier. I don't. As an independent
            broker, I compare Medigap plans (Plan G, Plan N, and others),
            Medicare Advantage plans, and Part D prescription drug plans from
            multiple companies.
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>I check which plans cover your doctors and prescriptions</li>
            <li>
              I compare monthly premiums side by side - not just the lowest
              number, but the total cost picture
            </li>
            <li>
              I factor in your 2026 Part B premium ($185/mo) and deductible
              ($257) when calculating out-of-pocket costs
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            New Jersey gives you extra Medigap protections
          </h2>
          <p className="text-gray-800 mb-2">
            NJ offers year-round guaranteed issue for Medigap plans. That means
            insurance companies cannot deny you coverage or charge you more
            because of pre-existing conditions. Most states don't have this
            protection.
          </p>
          <p className="text-gray-800">
            This gives you real flexibility to switch Medigap plans if your
            situation changes - and a good advocate will remind you of this when
            it matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Other free Medicare resources worth knowing about
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>
              <strong>SHIP (State Health Insurance Assistance Program):</strong>{" "}
              Free Medicare counseling available in every state, staffed by
              trained volunteers
            </li>
            <li>
              <strong>Center for Medicare Advocacy:</strong> A nonprofit that
              provides self-help materials and works to protect Medicare
              beneficiary rights
            </li>
            <li>
              <strong>1-800-MEDICARE:</strong> The official Medicare helpline for
              eligibility and enrollment questions
            </li>
          </ul>
          <p className="text-gray-800 mt-2">
            These resources are helpful for general information. When you need
            someone to compare specific plans and get you enrolled, that's where
            a broker steps in.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Schedule a free Medicare advocacy session today
          </h2>
          <p className="text-gray-800 mb-2">
            Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-semibold hover:underline"
            >
              855-559-1700
            </a>{" "}
            and I'll walk you through your options. No pressure, no obligation.
            Just an honest review of what's available in your area and what makes
            the most financial sense.
          </p>
          <p className="text-gray-800">
            You can also book online if you prefer to pick a time that works for
            your schedule.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 mb-10 text-center">
          <p className="text-xl font-bold mb-2">
            Talk to a free Medicare advocate today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            or schedule online
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-broker-near-me"
                className="text-blue-700 hover:underline"
              >
                Find a Medicare Broker Near You in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G in New Jersey - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advantage-vs-medigap"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap - Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/when-to-enroll-in-medicare"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare - Key Dates and Deadlines
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}