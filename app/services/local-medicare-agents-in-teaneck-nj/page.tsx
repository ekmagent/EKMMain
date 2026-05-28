import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in teaneck nj | Free Consultation | MedicareYourself",
  description:
    "Local Medicare agents in Teaneck, NJ — Anthony Orner, licensed independent broker, compares Bergen County plans free with no pressure. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-teaneck-nj" },
  openGraph: {
    title:
      "local medicare agents in teaneck nj | Free Consultation | MedicareYourself",
    description:
      "Local Medicare agents in Teaneck NJ — Anthony Orner is a licensed independent broker serving Bergen County. Compare plans, no pressure. Free consultation.",
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
      name: "Local Medicare Agents in Teaneck NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-teaneck-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Teaneck, NJ — Licensed Help Without the Sales Pitch",
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
    question: "How can I get help with Medicare premiums in New Jersey?",
    answer:
      "New Jersey offers programs like NJ PAAD (Pharmaceutical Assistance to the Aged and Disabled) and Lifeline that help reduce costs. You may also qualify for Medicare Savings Programs that pay your Part B premium of $202.90/month. An independent broker can check your eligibility at no charge.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than one company. Ask if they charge fees (they shouldn't — brokers are paid by insurance carriers). Confirm they're familiar with Bergen County hospital networks and can meet in person or by phone.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "Call 1-800-MEDICARE (1-800-633-4227), available 24/7. TTY users can call 1-877-486-2048. For local help comparing plans without hold times, you can also call an independent broker like Anthony Orner at 855-559-1700.",
  },
  {
    question: "Do Medicare agents charge a fee in New Jersey?",
    answer:
      "No. Licensed Medicare brokers are compensated by the insurance carriers, not by you. You pay the same premium whether you enroll directly or work with an agent. There's no hidden cost.",
  },
];

export default function LocalMedicareAgentsTeaneckNJ() {
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
          Local Medicare Agents in Teaneck NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Local Medicare Agents in Teaneck, NJ — Licensed Help Without the Sales
          Pitch
        </h1>

        <Image
          src="/images/local-medicare-agents-in-teaneck-nj.webp"
          alt="local medicare agents in teaneck nj"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Teaneck, NJ can save you hours of confusion
          and thousands in annual costs by matching you with the right plan for
          your doctors and prescriptions. I&apos;m Anthony Orner, a licensed
          independent broker based in Bergen County. I work with multiple
          carriers, so my recommendation is based on your needs, not a sales
          quota.
        </p>

        <PhoneCTA />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Teaneck residents work with an independent broker
          </h2>
          <p className="mb-3">
            Teaneck sits in one of the most competitive Medicare markets in New
            Jersey. Holy Name Medical Center is right next door in Teaneck
            itself, and Hackensack University Medical Center is minutes away.
            Different plans cover these systems differently.
          </p>
          <p>
            An independent broker compares plans across carriers so you keep
            access to the Bergen County providers you already trust. A captive
            agent only shows you one company&apos;s options.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement vs. Advantage: what sells most in Bergen County
          </h2>
          <p className="mb-3">
            Bergen County has strong Medicare Advantage options with $0 premiums
            and dental/vision benefits. But many Teaneck residents prefer
            Medigap (Medicare Supplement) plans because they want unrestricted
            access to any doctor who accepts Medicare, no referrals, no network
            surprises.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap Plan G:</strong> Covers everything except the Part
              B deductible ($283/year in 2026). Rates vary by carrier.
            </li>
            <li>
              <strong>Medicare Advantage (Part C):</strong> Often $0 premium
              with added benefits, but uses a provider network. Check that your
              doctors participate before enrolling.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Network disruptions are real here
          </h2>
          <p>
            Hospitals drop insurance carriers more often than people expect. If
            your plan&apos;s network changes mid-year, you could lose access to
            the specialists you depend on. I monitor network changes across
            Bergen County so my clients aren&apos;t caught off guard.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to ask before you hire a Medicare agent
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Are you independent, or do you represent one company?</li>
            <li>How many carriers can you quote in Bergen County?</li>
            <li>Do you charge any fees? (The answer should be no.)</li>
            <li>Will you help me during claims issues after I enroll?</li>
            <li>
              Can you check if my prescriptions are covered under each plan?
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment windows for Teaneck residents
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Turning 65:</strong> Your Medigap Open Enrollment Period
              is the 6 months starting the month you turn 65 and are enrolled in
              Part B. This is your best shot at guaranteed-issue rates.
            </li>
            <li>
              <strong>Medicare Advantage / Part D:</strong> Annual Enrollment
              runs October 15 through December 7.
            </li>
            <li>
              <strong>Lost employer coverage:</strong> You get a Special
              Enrollment Period. Don&apos;t delay. The Part B late enrollment
              penalty is 10% for every 12 months you waited.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Schedule a free phone or in-person consultation
          </h2>
          <p>
            I meet Teaneck clients at their kitchen table, over the phone, or on
            video. No pressure, no time limit. You&apos;ll walk away knowing
            exactly what each plan costs and covers, even if you choose not to
            enroll through me.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker who knows Bergen County.
          </p>
          <p className="text-2xl font-bold mb-3">
            <a href="tel:8555591700" className="underline">
              855-559-1700
            </a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G in New Jersey: What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in Bergen County
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-independent-medicare-broker-near-me-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Why Work With an Independent Medicare Broker in NJ
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Plan Compare</a> and <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey help: <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NJ State Health Insurance Assistance Program (SHIP)</a></div>
      </section>
      </article>
    </>
  );
}