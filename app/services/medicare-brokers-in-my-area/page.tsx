import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medicare Brokers in My Area | NJ Licensed Independent Broker | MedicareYourself",
  description:
    "Medicare brokers in your area of New Jersey. Anthony Orner is a licensed independent broker who compares Medigap and Advantage plans for free. Call or book online.",
  openGraph: {
    title: "Medicare Brokers in My Area | NJ Licensed Independent Broker | MedicareYourself",
    description:
      "Medicare brokers in your area of New Jersey. Anthony Orner is a licensed independent broker who compares Medigap and Advantage plans for free. Call or book online.",
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
      name: "Medicare Brokers in My Area",
      item: "https://www.medicareyourself.com/services/medicare-brokers-in-my-area",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Brokers in Your Area: What to Look For in NJ",
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
  mainEntityOfPage: "https://www.medicareyourself.com/services/medicare-brokers-in-my-area",
};

const faqs = [
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A Medicare agent typically represents one insurance carrier (they're 'captive'). A Medicare broker is independent and can compare plans from multiple carriers on your behalf. Brokers work for you, not a single company. Both are licensed, but a broker gives you more options.",
  },
  {
    question: "How much does it cost to use a Medicare broker?",
    answer:
      "Nothing. Medicare brokers are paid a commission by the insurance carrier when you enroll in a plan. You pay the same premium whether you use a broker or go directly to the carrier. There is no fee, markup, or hidden charge for using a broker's services.",
  },
  {
    question: "Who is the best person to talk to about Medicare plans?",
    answer:
      "A licensed, independent Medicare broker in your state is your best resource. They can compare Medigap, Medicare Advantage, and Part D plans side by side. Look for someone local who understands your state's rules. In New Jersey, Anthony Orner at EasyKind Medicare helps residents across the state at no cost.",
  },
  {
    question: "How do I verify that a Medicare broker is licensed?",
    answer:
      "In New Jersey, you can verify any broker's license through the NJ Department of Banking and Insurance website. Ask for their National Producer Number (NPN) and look it up on the NIPR (National Insurance Producer Registry) at nipr.com. A legitimate broker will share this without hesitation.",
  },
];

export default function MedicareBrokersInMyArea() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/hub" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">Medicare Brokers in My Area</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Medicare Brokers in Your Area: What to Look For in NJ
        </h1>

        <Image
          src="/images/hub_medicare-brokers-in-my-area.webp"
          alt="Medicare brokers in my area"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Searching for Medicare brokers in your area is a smart first step, but not every broker works the same way. Some represent one carrier. Others compare dozens. The difference can mean hundreds of dollars a year in premiums.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Here is what to look for if you live in New Jersey and want real help, not a sales pitch.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to verify a Medicare broker is licensed in your state
          </h2>
          <p className="text-gray-700 mb-2">
            Every Medicare broker must hold a valid health insurance license in the state where they sell. In New Jersey, the Department of Banking and Insurance maintains public records of all licensed producers.
          </p>
          <p className="text-gray-700 mb-2">
            Ask for the broker's National Producer Number (NPN). Look it up at nipr.com or on the NJ DOBI site. If they dodge this question, walk away.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Captive vs. independent Medicare brokers and why it matters
          </h2>
          <p className="text-gray-700 mb-2">
            A captive agent works for one insurance company. They can only show you that company's plans. An independent broker is contracted with multiple carriers and can compare options side by side.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-2 space-y-1">
            <li>Captive agents may push one plan even if a better option exists elsewhere</li>
            <li>Independent brokers show you plans from carriers like Aetna, Cigna, Mutual of Omaha, and United American</li>
            <li>You pay the same premium either way - the carrier pays the broker's commission</li>
          </ul>
          <p className="text-gray-700">
            If you want an honest comparison, go independent.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What a local NJ Medicare broker can do that a 1-800 number cannot
          </h2>
          <p className="text-gray-700 mb-2">
            A national call center reads from scripts. A local broker knows which hospitals are in which networks across Bergen, Monmouth, or Camden counties. They know that NJ has year-round guaranteed issue rights for Medigap, meaning you can switch Medigap plans at any time without medical underwriting.
          </p>
          <p className="text-gray-700">
            That is a huge advantage most 1-800 operators do not even mention.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What a good Medicare broker should explain to you upfront
          </h2>
          <p className="text-gray-700 mb-2">
            Before recommending any plan, a broker should cover the basics of your costs:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-2 space-y-1">
            <li>Your 2026 Part B premium: $185/month</li>
            <li>The Part B deductible: $257/year</li>
            <li>The Part A hospital deductible: $1,676 per benefit period</li>
            <li>Whether Medigap Plan G or Plan N fits your budget and health situation</li>
          </ul>
          <p className="text-gray-700">
            If a broker skips these numbers and jumps straight to "sign here," that is a red flag.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Questions to ask any Medicare broker before enrolling
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Are you independent or captive to one carrier?</li>
            <li>How many carriers can you quote for Medigap and Medicare Advantage?</li>
            <li>Will you help me during Annual Enrollment (Oct 15 - Dec 7) each year?</li>
            <li>Can you meet in person or by video call?</li>
            <li>What is your NPN so I can verify your license?</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Talk to Anthony Orner - a local NJ Medicare broker
          </h2>
          <p className="text-gray-700 mb-2">
            I am Anthony Orner, a licensed independent Medicare broker serving all of New Jersey. I compare Medigap, Medicare Advantage, and Part D plans from multiple carriers. There is no cost to you, ever.
          </p>
          <p className="text-gray-700">
            Whether you are turning 65 next month or already on Medicare and want to review your options, I will give you a straight answer. No pressure, no scripts.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
          <p className="text-2xl font-bold mb-2">Ready to compare Medicare plans?</p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-semibold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/contact" className="underline font-semibold">
              Get a Free Quote
            </Link>{" "}
            online.
          </p>
          <p className="text-sm opacity-90">
            Licensed independent Medicare broker serving all of New Jersey.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey: Rates and Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medigap vs. Medicare Advantage: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/nj-medicare-guaranteed-issue"
                className="text-blue-600 hover:underline"
              >
                NJ Medigap Guaranteed Issue Rights
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}