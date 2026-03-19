import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "licensed medicare advisors | Free Unbiased Help | MedicareYourself",
  description:
    "Licensed medicare advisors compare plans across carriers at no cost to you. Anthony Orner holds NJ and PA licenses. Free consultation — call today.",
  openGraph: {
    title:
      "licensed medicare advisors | Free Unbiased Help | MedicareYourself",
    description:
      "Licensed medicare advisors compare plans across carriers at no cost to you. Anthony Orner holds NJ and PA licenses. Free consultation — call today.",
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
      name: "Licensed Medicare Advisors",
      item: "https://medicareyourself.com/services/licensed-medicare-advisors",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Licensed Medicare Advisors: What That License Means for Your Coverage",
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
  datePublished: "2025-07-14",
  dateModified: "2025-07-14",
};

const faqs = [
  {
    question: "How do I verify a Medicare advisor's license?",
    answer:
      "Every state has a Department of Insurance website where you can search by name or license number. In New Jersey, use the DOBI producer lookup. In Pennsylvania, check the PA Insurance Department site. If an advisor won't share their license number, that's a red flag.",
  },
  {
    question: "Do licensed Medicare advisors charge a fee?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. There's no fee for consultations, plan comparisons, or enrollment help. The plans cost the same whether you enroll directly or through a broker.",
  },
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "An agent typically represents one carrier. A broker holds appointments with multiple carriers and can compare plans side by side. Both must be licensed, but a broker gives you more options in a single conversation.",
  },
  {
    question: "Can a licensed Medicare advisor help with both Medicare Advantage and Medigap?",
    answer:
      "Yes, as long as they hold active appointments with carriers offering both plan types. Ask upfront which carriers they represent so you know you're seeing a full picture of your options.",
  },
];

export default function LicensedMedicareAdvisorsPage() {
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
        <span className="text-gray-700">Licensed Medicare Advisors</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Licensed Medicare Advisors: What That License Means for Your Coverage
        </h1>

        <Image
          src="/images/hub_licensed-medicare-advisors.webp"
          alt="licensed medicare advisors"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Licensed medicare advisors do something an online quote tool can't: they listen, ask questions about your doctors and prescriptions, and match you to plans that actually fit. I'm Anthony Orner, a licensed Medicare broker in New Jersey and Pennsylvania, and every consultation I offer is free.
        </p>

        <p className="text-lg mb-6">
          That license isn't a formality. It's how you know I've passed state exams, carry errors-and-omissions insurance, and answer to a regulatory body if something goes wrong.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The difference between licensed advisors and online quote tools
          </h2>
          <p className="mb-2">
            Quote tools spit out prices. They don't know your cardiologist just left a network, or that your pharmacy stopped accepting a specific Part D plan last quarter.
          </p>
          <p>
            A licensed advisor catches those details before you're locked into something for a year. The plan costs the same either way, so skipping the human help doesn't save you a dime.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to verify a Medicare advisor's license in your state
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>New Jersey:</strong> Search the DOBI producer database at dobi.nj.gov.
            </li>
            <li>
              <strong>Pennsylvania:</strong> Use the PA Insurance Department agent lookup at insurance.pa.gov.
            </li>
            <li>
              Ask for their National Producer Number (NPN). Every licensed advisor has one, and it's searchable on the NAIC website.
            </li>
            <li>
              If someone avoids sharing their license info, find a different advisor.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a broker appointment with multiple carriers gets you
          </h2>
          <p className="mb-2">
            I hold active carrier appointments across the major Medicare Advantage, Medigap, and Part D providers in NJ and PA. That means I can pull up plans from different companies in one call and compare them based on your actual medication list and preferred doctors.
          </p>
          <p>
            A captive agent works for one company. A broker works for you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why the license matters for your protection
          </h2>
          <p className="mb-2">
            State licensing requirements include continuing education, background checks, and compliance oversight. If I give you bad advice, you have a regulatory body to report it to.
          </p>
          <p>
            An unlicensed "helper" at a seminar or on social media? You have no recourse. The 2026 Part B premium is $202.90/month and the Part A deductible is $1,676 per benefit period. Getting steered into the wrong plan with numbers like those costs real money.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to talk to a licensed advisor
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Turning 65 and unsure whether Medicare Advantage or Medigap fits better</li>
            <li>Losing employer or union group coverage at any age</li>
            <li>During Open Enrollment: October 15 through December 7</li>
            <li>Your current plan changed its formulary or network for next year</li>
            <li>You just moved and your old plan doesn't cover your new area</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Talk to a licensed advisor at no cost
          </h2>
          <p className="mb-2">
            I get paid by the carrier you choose, not by you. Your premium stays exactly the same whether you call me or enroll on your own. The only difference: you'll have someone who's looked at the full picture before you sign anything.
          </p>
          <p>
            No pressure, no sales pitch. Just straight answers about your options.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready for honest Medicare guidance?
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
              href="/get-a-free-quote"
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
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-consultation"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Consultation
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/how-to-choose-a-medicare-plan"
                className="text-blue-600 hover:underline"
              >
                How to Choose a Medicare Plan
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}