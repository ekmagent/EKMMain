import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Quickest Way to Enroll Into Plan G | Same-Day Application | MedicareYourself",
  description:
    "Quickest way to enroll into Plan G? With the right timing, you can finish in one call. Anthony Orner handles applications same day. Free quote.",
  openGraph: {
    title:
      "Quickest Way to Enroll Into Plan G | Same-Day Application | MedicareYourself",
    description:
      "Quickest way to enroll into Plan G? With the right timing, you can finish in one call. Anthony Orner handles applications same day. Free quote.",
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
      name: "Quickest Way to Enroll Into Plan G",
      item: "https://medicareyourself.com/services/quickest-way-to-enroll-into-plan-g",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quickest Way to Enroll Into Plan G: A Step-by-Step Timeline",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How fast can I actually get enrolled in Plan G?",
    answer:
      "If you're in your Medigap Open Enrollment Period or have a guaranteed issue right, the application can be completed in a single phone call. Many carriers process applications the same day they're submitted.",
  },
  {
    question: "Do I need to answer health questions to enroll in Plan G?",
    answer:
      "During your 6-month Medigap Open Enrollment Period (starting when you're 65+ and have Part B), no. Carriers cannot ask health questions or deny you. Outside that window, most carriers require medical underwriting, which can slow things down or result in denial.",
  },
  {
    question: "Can I switch from Medicare Advantage to Plan G quickly?",
    answer:
      "You can leave Medicare Advantage during the Medicare Advantage Open Enrollment Period (January 1 - March 31) or during the Annual Enrollment Period (October 15 - December 7). However, switching to Plan G after that may require medical underwriting. Certain guaranteed issue situations may apply - call to discuss your specific case.",
  },
  {
    question: "What if my Plan G application gets denied?",
    answer:
      "Denials happen when you apply outside your open enrollment window and have health conditions that don't pass underwriting. A licensed broker can help you identify the right carrier and timing to avoid this. Some states have additional protections - rules vary by state.",
  },
];

export default function QuickestWayToEnrollIntoPlanG() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>
          {" > "}
          <span className="text-gray-700">
            Quickest Way to Enroll Into Plan G
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Quickest Way to Enroll Into Plan G: A Step-by-Step Timeline
        </h1>

        <Image
          src="/images/quickest-way-to-enroll-into-plan-g.webp"
          alt="quickest way to enroll into Plan G"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          The quickest way to enroll into Plan G depends on one thing: your enrollment window. If your timing is right, the entire application takes a single phone call - sometimes 15 minutes.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker, and I handle Plan G applications same day. Here's exactly how the process works so nothing slows you down.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The fastest enrollment path depends on your situation
          </h2>
          <p className="mb-3">
            Not everyone has the same route to Plan G. Your speed depends on which enrollment window you're in:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>
              <strong>Medigap Open Enrollment Period:</strong> 6 months starting the month you turn 65 and have Part B. No health questions. No denials. Fastest path - apply and you're in.
            </li>
            <li>
              <strong>Guaranteed issue right:</strong> Triggered by specific events like losing employer coverage or leaving a Medicare Advantage plan. Also no health questions.
            </li>
            <li>
              <strong>Medical underwriting:</strong> Outside those windows, carriers will ask health questions. This can add days to weeks - or result in denial.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Open enrollment vs. guaranteed issue - which applies to you
          </h2>
          <p className="mb-3">
            Your Medigap Open Enrollment Period is a one-time, 6-month window. It doesn't repeat annually. During this period, per federal law, insurance companies cannot refuse to sell you any Medigap policy they offer, cannot charge more for pre-existing conditions, and must start your coverage right away.
          </p>
          <p>
            Guaranteed issue rights apply in specific situations: your Medicare Advantage plan leaves your area, your insurer goes bankrupt, you lose employer or union coverage, or a plan violates its contract. If one of these applies to you, you can get Plan G without underwriting even after your open enrollment window has closed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What slows down Plan G enrollment (and how to avoid it)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Waiting too long after Part B starts.</strong> Once your 6-month open enrollment window closes, you're subject to underwriting. Lock in your rate early.
            </li>
            <li>
              <strong>Applying to the wrong carrier first.</strong> A denied application creates a record. Work with a broker who knows which carriers are most likely to approve your situation.
            </li>
            <li>
              <strong>Missing paperwork.</strong> Have your Medicare number (from your red, white, and blue card), Part B start date, and a list of current medications ready before you call.
            </li>
            <li>
              <strong>Confusing enrollment periods.</strong> The Medicare Advantage open enrollment (Oct 15 - Dec 7) is different from the Medigap open enrollment. Mixing these up can cost months.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Apply up to 6 months before your Part B start date
          </h2>
          <p className="mb-3">
            Here's something most people don't know: you can apply for Plan G up to 6 months before your Part B effective date. I recommend this for every client turning 65. It locks in your rate early and protects you from premium increases before coverage even begins.
          </p>
          <p>
            The sooner you apply during that window, the better your rate. There's no advantage to waiting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What if you're switching from Medicare Advantage to Plan G
          </h2>
          <p className="mb-3">
            This is where people get stuck. I hear from folks who switched to a $0-premium Advantage plan and now want Plan G back - but they're facing underwriting because their open enrollment window closed years ago.
          </p>
          <p>
            If you have pre-existing conditions like diabetes or heart disease, getting back to Plan G outside of a guaranteed issue window is harder. Not always impossible, but harder. Call me and we'll look at your specific options before you apply anywhere.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Enroll in Plan G today with a licensed broker
          </h2>
          <p className="mb-3">
            I compare Plan G rates across multiple carriers, handle the application on the phone with you, and submit it same day. No cost to you - brokers are paid by the insurance company, not by you.
          </p>
          <p>
            One call. That's it. Bring your Medicare card info and we'll get it done.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to enroll in Plan G?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            to complete your application today.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
                href="/services/medicare-plan-g-cost"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G Cost: What You'll Pay in 2026
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Plan G vs. Plan N: Which Medigap Plan Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment-period"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment Period: When and How to Enroll
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-vs-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs. Advantage: How to Decide
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}