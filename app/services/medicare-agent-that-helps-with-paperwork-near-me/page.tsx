import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Agent That Helps With Paperwork Near Me | Free Enrollment Assistance in NJ | MedicareYourself",
  description:
    "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
  openGraph: {
    title:
      "Medicare Agent That Helps With Paperwork Near Me | Free Enrollment Assistance in NJ | MedicareYourself",
    description:
      "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
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
      name: "Medicare Agent That Helps With Paperwork Near Me",
      item: "https://www.medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Medicare Agent That Actually Helps With Your Paperwork",
  description:
    "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost.",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
  },
};

const faqs = [
  {
    question: "Does a Medicare agent charge me for help with paperwork?",
    answer:
      "No. Licensed Medicare brokers like Anthony Orner are paid by the insurance carriers, not by you. There is no fee for application help, plan comparisons, or enrollment assistance.",
  },
  {
    question: "What documents do I need to enroll in Medicare?",
    answer:
      "You typically need your Medicare card (red, white, and blue card), a government-issued photo ID, and your current prescription list. If you are enrolling in a Medigap plan, your agent may also need your Medicare Beneficiary Identifier (MBI) number and Part A/Part B effective dates.",
  },
  {
    question: "Can a Medicare agent help me switch plans?",
    answer:
      "Yes. During the Annual Enrollment Period (October 15 through December 7) or during a Special Enrollment Period, your agent can handle all the paperwork to switch Medicare Advantage or Part D plans. In New Jersey, you also have year-round guaranteed issue rights for Medigap plans.",
  },
  {
    question: "How do I find a Medicare agent near me in New Jersey?",
    answer:
      "You can call Anthony Orner at 855-559-1700 for free Medicare enrollment help anywhere in New Jersey. Appointments are available by phone, video, or in person.",
  },
];

export default function MedicareAgentPaperworkPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Agent That Helps With Paperwork
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          A Medicare Agent That Actually Helps With Your Paperwork
        </h1>

        <Image
          src="/images/hub_medicare-agent-that-helps-with-paperwork-near-me.webp"
          alt="Medicare agent that helps with paperwork near me"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          If you are searching for a Medicare agent that helps with paperwork near you, I get it. Medicare enrollment involves more forms than most people expect, and one mistake can delay your coverage by weeks.
        </p>
        <p className="text-lg mb-6">
          I am Anthony Orner, a licensed Medicare broker in New Jersey. I handle every piece of paperwork for my clients, from the initial application to carrier confirmation. It costs you nothing.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What paperwork is required when you enroll in Medicare
          </h2>
          <p className="mb-2">
            The forms depend on what you are signing up for. Here is what most people in New Jersey need:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>A Medigap (Medicare Supplement) application to the carrier of your choice</li>
            <li>A Part D prescription drug plan enrollment form, if applicable</li>
            <li>A Medicare Advantage plan application, if you go that route</li>
            <li>Your Medicare card with Part A and Part B effective dates</li>
            <li>A current list of your prescriptions and doctors</li>
          </ul>
          <p>
            Some carriers also require electronic signatures and health questionnaires. Miss a field and the application gets kicked back.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Anthony handles your Medicare application from start to finish
          </h2>
          <p className="mb-2">
            When you call me at 855-559-1700, here is what happens. We talk through your medications, doctors, and budget. I compare plans from multiple carriers and show you the numbers side by side.
          </p>
          <p className="mb-2">
            Once you choose a plan, I fill out every form. I submit the application directly to the carrier, follow up on processing, and confirm your coverage start date. You do not chase anyone down.
          </p>
          <p>
            I also keep your records securely on file so future changes are fast.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common Medicare paperwork mistakes that delay coverage
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Writing the wrong Part B effective date on your Medigap application</li>
            <li>Missing the signature field on electronic enrollment forms</li>
            <li>Applying for a plan outside your enrollment window without a valid Special Enrollment Period</li>
            <li>Listing incorrect Medicare Beneficiary Identifier (MBI) numbers</li>
          </ul>
          <p className="mt-3">
            Any of these can push your start date back a month or more. I catch these before they become a problem.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why New Jersey residents have extra flexibility
          </h2>
          <p className="mb-2">
            New Jersey offers year-round guaranteed issue rights for Medigap plans. That means you can switch Medicare Supplement carriers at any time without medical underwriting. Most states do not allow this.
          </p>
          <p>
            This gives you more options, but it also means more forms to compare. Having a broker handle the paperwork keeps things clean.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2026 Medicare costs you should know
          </h2>
          <p className="mb-2">
            Before we fill out any paperwork, I make sure you understand what Medicare itself costs. For 2026:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B monthly premium: $185</li>
            <li>Part B annual deductible: $257</li>
            <li>Part A hospital deductible: $1,676 per benefit period</li>
          </ul>
          <p className="mt-2">
            A Medigap plan like Plan G covers everything except the $257 Part B deductible. I walk you through exactly what you will owe before you sign anything.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Get free hands-on enrollment help in New Jersey
          </h2>
          <p className="mb-2">
            You should not have to figure out carrier forms and CMS enrollment on your own. I have helped hundreds of people in New Jersey get enrolled correctly the first time.
          </p>
          <p>
            Call me or book a free appointment. I will handle every form so you can focus on what matters.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to get your Medicare paperwork handled?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or book a free appointment online.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G in New Jersey - Compare Rates
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/when-to-enroll-in-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare - Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-near-me-nj"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Broker Near You in NJ
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}