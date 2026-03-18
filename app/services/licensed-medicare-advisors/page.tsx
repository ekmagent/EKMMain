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
      name: "Licensed Medicare Advisors",
      item: "https://www.medicareyourself.com/services/licensed-medicare-advisors",
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
    url: "https://www.medicareyourself.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "EasyKind Medicare",
    alternateName: "MedicareYourself",
  },
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/licensed-medicare-advisors",
};

const faqs = [
  {
    question: "How do licensed Medicare advisors get paid?",
    answer:
      "Licensed Medicare advisors are paid commissions directly by the insurance carriers when you enroll in a plan. You never pay a fee for their services. The commission is built into the plan premium, so your rate is the same whether you use an advisor or enroll on your own.",
  },
  {
    question: "How much does a Medicare consultant cost?",
    answer:
      "A licensed Medicare broker costs you nothing. Carriers pay the broker, not you. Your premiums stay the same regardless of whether you work with an advisor or go direct. If someone asks you for a consulting fee to review Medicare plans, that is a red flag.",
  },
  {
    question: "What is the difference between a Medicare agent and a Medicare broker?",
    answer:
      "An agent typically represents one insurance company. A broker holds appointments with multiple carriers and can compare plans across companies to find the best fit for you. Both must hold a valid state insurance license.",
  },
  {
    question: "Can a licensed Medicare advisor enroll me in a plan?",
    answer:
      "Yes. A licensed advisor with an active appointment from a carrier can walk you through plan options, answer your questions, and complete your enrollment. They can also help you during Annual Enrollment (October 15 through December 7) or during qualifying special enrollment periods.",
  },
];

export default function LicensedMedicareAdvisorsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
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

        <h1 className="text-3xl font-bold mb-4">
          Licensed Medicare Advisors: What That License Means for Your Coverage
        </h1>

        <Image
          src="/images/licensed-medicare-advisors.webp"
          alt="licensed medicare advisors"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Licensed medicare advisors do more than answer questions. They hold
          state-issued insurance licenses, pass background checks, and complete
          annual carrier training before they can legally recommend or enroll you
          in any plan.
        </p>
        <p className="mb-6">
          That matters because the wrong plan can cost you thousands. I am
          Anthony Orner, a licensed Medicare broker in New Jersey and
          Pennsylvania, and I work with multiple carriers so the recommendation
          is about your situation, not a sales quota.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The difference between licensed advisors and online quote tools
          </h2>
          <p className="mb-2">
            Online comparison tools show you prices. That is it. They cannot tell
            you whether your doctors are in-network, flag a drug formulary gap,
            or explain how a Plan G deductible works in practice.
          </p>
          <p>
            A licensed advisor reviews your prescriptions, your preferred
            providers, and your budget before recommending anything. The tool
            gives you a spreadsheet. I give you a plan that actually fits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to verify a Medicare advisor's license in your state
          </h2>
          <p className="mb-2">
            Every state maintains a public database of licensed insurance
            producers. In New Jersey, search the DOBI producer lookup. In
            Pennsylvania, use the PA Insurance Department license search.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Ask for the advisor's National Producer Number (NPN)</li>
            <li>Search your state's department of insurance website</li>
            <li>Confirm the license is active and in good standing</li>
            <li>Check that the license type covers health or life insurance</li>
          </ul>
          <p className="mt-2">
            If an advisor cannot provide their NPN, walk away.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a broker appointment with multiple carriers gets you
          </h2>
          <p className="mb-2">
            A captive agent sells one company's products. A broker like me holds
            appointments with multiple carriers, which means I can lay plans
            side-by-side and show you the real differences.
          </p>
          <p>
            For Medigap alone, the same Plan G benefits can vary by hundreds of
            dollars a year depending on the carrier. Rates vary by carrier, your
            age, and your zip code. I compare them for you at no charge.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why the license requirement protects you
          </h2>
          <p className="mb-2">
            State licensing means your advisor is held to a legal standard. They
            must complete continuing education, follow ethical guidelines, and
            can face penalties or license revocation for misleading you.
          </p>
          <p>
            That is real accountability. A random online form has none.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to contact a licensed advisor
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Turning 65 - your Medigap Open Enrollment Period lasts 6 months
              starting the month you turn 65 and are enrolled in Part B.
              Guaranteed issue, no health questions.
            </li>
            <li>
              Annual Enrollment Period (October 15 through December 7) - review
              Medicare Advantage and Part D options for the coming year
            </li>
            <li>
              Losing employer or union coverage - a federal guaranteed issue
              trigger that opens Medigap enrollment without underwriting
            </li>
            <li>
              Moving to a new state - your current plan may not cover you in a
              new service area
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Talk to a licensed advisor at no cost
          </h2>
          <p className="mb-2">
            You pay nothing for my help. Carriers pay me a commission when you
            enroll, and your premium stays the same whether you use me or go
            direct. There is zero financial downside to getting a second opinion.
          </p>
          <p>
            Call me at 855-559-1700 or schedule a time that works for you. I
            will pull up plans, compare costs, and give you a straight answer.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare plans with a licensed broker?
          </p>
          <p className="mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="underline font-bold"
            >
              get a free quote online
            </Link>
            .
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medigap-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G: Benefits, Costs, and How It Works
              </Link>
            </li>
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
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About Anthony Orner - Your Licensed Medicare Broker
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}