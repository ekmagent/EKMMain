import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare advantage agents near me | Free NJ Consultation | MedicareYourself",
  description:
    "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
  openGraph: {
    title:
      "independent medicare advantage agents near me | Free NJ Consultation | MedicareYourself",
    description:
      "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
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
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Independent Medicare Advantage Agents Near Me",
      item: "https://www.medicareyourself.com/services/independent-medicare-advantage-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find an Independent Medicare Advantage Agent Near You in NJ",
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
  datePublished: "2026-01-01",
  dateModified: "2026-01-01",
};

const faqs = [
  {
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent is licensed to sell plans from multiple insurance carriers, not just one. This means they can compare Medicare Advantage options across companies and recommend the plan that fits your health needs and budget rather than pushing a single carrier's product.",
  },
  {
    question:
      "Does it cost anything to use an independent Medicare Advantage agent?",
    answer:
      "No. Independent Medicare agents are paid by the insurance carriers, not by you. The plan premiums are the same whether you enroll directly or through an agent. You get expert help at zero additional cost.",
  },
  {
    question: "Can an independent agent help me switch Medicare Advantage plans?",
    answer:
      "Yes. During the Medicare Advantage Open Enrollment Period (October 15 through December 7) or the Medicare Advantage switching period (January 1 through March 31), an independent agent can review your current plan and help you move to one that better fits your needs.",
  },
  {
    question:
      "How do I find an independent Medicare Advantage agent in New Jersey?",
    answer:
      "Call Anthony Orner at 855-559-1700 for a free consultation. As a licensed independent broker in NJ, Anthony compares Medicare Advantage plans from every major carrier available in your county.",
  },
];

export default function IndependentMedicareAdvantageAgentsNearMe() {
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
        <span className="text-gray-700">
          Independent Medicare Advantage Agents Near Me
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Find an Independent Medicare Advantage Agent Near You in NJ
        </h1>

        <Image
          src="/images/independent-medicare-advantage-agents-near-me_photo.webp"
          alt="independent medicare advantage agents near me"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Independent Medicare Advantage agents near you can compare plans from every major carrier in your county, not just one company's lineup. That distinction matters more than most people realize until they're locked into a plan that doesn't cover their doctors or prescriptions.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed independent Medicare broker serving all of New Jersey. I work for you, not for any single insurance company.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why independence matters when choosing a Medicare Advantage plan
          </h2>
          <p className="mb-2">
            A captive agent represents one carrier. If that carrier's plan has a $3,000 out-of-pocket maximum and another carrier offers $1,500 with the same network, the captive agent can't tell you about it. They literally aren't allowed to.
          </p>
          <p>
            An independent agent sees the full picture. I compare copays, drug formularies, provider networks, and extra benefits side by side so you pick based on facts, not limited options.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Which Medicare Advantage carriers are available in your NJ county
          </h2>
          <p className="mb-2">
            Plan availability changes by ZIP code. In Bergen County, you might have 30+ Medicare Advantage options. In Salem County, fewer than 10. Carriers like Aetna, UnitedHealthcare, Cigna, and Humana each have different networks and formularies depending on where you live.
          </p>
          <p>
            I pull up every plan available at your address and filter for what actually matters to you: your doctors, your medications, your hospitals.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent agent compares $0-premium Advantage plans
          </h2>
          <p className="mb-2">
            A $0 premium sounds great, but it doesn't mean $0 cost. Some $0-premium plans carry higher specialist copays, limited formularies, or narrower networks. Others are genuinely strong plans with solid coverage.
          </p>
          <p>
            The difference shows up when you actually use the plan. I run your prescriptions through each formulary, confirm your doctors are in-network, and calculate your realistic annual costs. That's where the real comparison happens.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            What people get wrong about Medicare Advantage
          </h2>
          <p className="mb-2">
            Many people assume Medicare Advantage works exactly like their old employer plan. It can feel similar on the surface, but network restrictions, prior authorizations, and referral requirements catch people off guard.
          </p>
          <p>
            The biggest mistake I see: switching from a Medigap Plan G to a Medicare Advantage plan for the lower premium, then wanting to switch back. In most cases, you'd face medical underwriting to return. That decision deserves a real conversation, not a sales pitch.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            When to contact an independent agent
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Turning 65 and enrolling in Medicare for the first time</li>
            <li>During Open Enrollment: October 15 through December 7</li>
            <li>During the MA switching period: January 1 through March 31</li>
            <li>Losing employer or union coverage at any age</li>
            <li>Moving to a new county or state</li>
          </ul>
          <p className="mt-2">
            Don't wait until the last week of enrollment. Rushed decisions lead to regret.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get unbiased Medicare Advantage guidance from Anthony Orner
          </h2>
          <p className="mb-2">
            I'm not a call center. I'm not a national directory that hands you off to a random agent. I'm a local NJ broker who picks up the phone, answers your questions, and stays your point of contact year after year.
          </p>
          <p>
            My help costs you nothing. The premiums are identical whether you enroll through me or directly with the carrier.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-8">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare Advantage plans in your NJ county?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medicare Open Enrollment: Dates and What You Can Change
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner, Licensed Medicare Broker
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}