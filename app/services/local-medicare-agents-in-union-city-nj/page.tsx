import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agents in union city nj | Free Plan Comparison | MedicareYourself",
  description:
    "Local Medicare agents in Union City, NJ — compare Supplement & Advantage plans free with licensed broker Anthony Orner. Call 855-559-1700 for a no-obligation quote.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agents-in-union-city-nj" },
  openGraph: {
    title:
      "local medicare agents in union city nj | Free Plan Comparison | MedicareYourself",
    description:
      "Local Medicare agents in Union City NJ — Anthony Orner is a licensed independent broker comparing Supplement and Advantage plans. Free, no-obligation quotes.",
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
      name: "Local Medicare Agents in Union City, NJ",
      item: "https://medicareyourself.com/services/local-medicare-agents-in-union-city-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agents in Union City, NJ — Independent Broker Serving Hudson County",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/local-medicare-agents-in-union-city-nj",
};

const faqs = [
  {
    question:
      "What does a local Medicare agent in Union City, NJ actually do for me?",
    answer:
      "An independent Medicare agent compares plans from multiple carriers on your behalf at no cost to you. I review your doctors, prescriptions, and budget, then show you which Supplement or Advantage plans fit. Carriers pay me — you never pay a broker fee.",
  },
  {
    question: "Do I have to meet in person to work with a Union City Medicare broker?",
    answer:
      "No. I help Union City clients by phone, video, or in person — whichever you prefer. Everything from plan comparison to enrollment can be handled remotely if that's easier for you.",
  },
  {
    question: "When should I contact a Medicare agent before turning 65?",
    answer:
      "Reach out about six months before your Part B start date. That gives us time to compare Medigap plans during your Open Enrollment Period, when carriers must accept you regardless of health history. Miss that window and you may face medical underwriting.",
  },
  {
    question: "Can you help me if I only speak Spanish?",
    answer:
      "Yes. I provide bilingual support so Union City residents who are more comfortable in Spanish can review plan details, ask questions, and enroll without anything getting lost in translation.",
  },
];

export default function LocalMedicareAgentsUnionCityNJ() {
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
          Local Medicare Agents in Union City, NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">
          Local Medicare Agents in Union City, NJ — Independent Broker Serving
          Hudson County
        </h1>

        <Image
          src="/images/local-medicare-agents-in-union-city-nj.webp"
          alt="local medicare agents in union city nj"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full h-auto"
        />

        <p className="text-lg mb-2">
          Local Medicare agents in Union City, NJ can save you hours of
          confusion and potentially hundreds of dollars a year. I'm Anthony
          Orner, a licensed independent broker who compares Supplement and
          Advantage plans from multiple carriers so you see real options, not
          just one company's pitch.
        </p>
        <p className="mb-6">
          Union City is one of the most densely populated cities in the country.
          Finding a doctor who accepts your plan here matters more than in most
          places. I'll make sure your coverage actually works with Hudson County
          providers.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Union City residents need an independent Medicare broker
          </h2>
          <p className="mb-2">
            Calling a carrier directly means hearing about their plans only.
            An independent broker like me works with multiple insurers and
            shows you side-by-side comparisons at no extra cost.
          </p>
          <p>
            People in NJ forums talk constantly about insurers dropping
            provider networks or raising costs mid-year. An independent agent
            helps you switch when that happens, without starting from scratch.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement plans most popular in Hudson County
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Plan G</strong> — Covers everything Original Medicare
              doesn't except the Part B deductible ($283/year in 2026). Most
              popular choice for new enrollees.
            </li>
            <li>
              <strong>Plan N</strong> — Lower monthly premium than G, but you
              pay up to $20 for some office visits and the full Part B
              deductible.
            </li>
            <li>
              <strong>High-Deductible Plan G</strong> — Lowest premium, but
              you cover a deductible before benefits kick in. Good fit if you're
              healthy and want catastrophic protection.
            </li>
          </ul>
          <p className="mt-2">
            Rates vary by carrier, age, and zip code. I'll pull real quotes
            specific to Union City so you can compare actual numbers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Bilingual support and accessibility for Union City clients
          </h2>
          <p className="mb-2">
            Over 80% of Union City's population identifies as Hispanic or
            Latino. I offer Spanish-language consultations so you can review
            plan documents, ask questions, and enroll in the language you're
            most comfortable with.
          </p>
          <p>
            Nothing should get lost in translation when it comes to your
            health coverage. If you're helping a parent or grandparent
            choose a plan, I can walk through everything with the whole family.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How I help if your provider drops your insurance
          </h2>
          <p className="mb-2">
            Network disruptions happen in Hudson County. If your doctors stop
            accepting your plan, you may qualify for a Special Enrollment
            Period or federal guaranteed issue rights that let you switch
            without medical underwriting.
          </p>
          <p>
            I track these situations so you don't end up stuck. One phone
            call and we'll figure out your options together.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Key enrollment deadlines to know
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medigap Open Enrollment:</strong> 6 months starting the
              month you turn 65 and have Part B. This is your best window for
              guaranteed acceptance.
            </li>
            <li>
              <strong>Medicare Advantage / Part D:</strong> October 15 through
              December 7 each year.
            </li>
            <li>
              <strong>Advantage Open Enrollment:</strong> January 1 through
              March 31 if you're already in an Advantage plan and want to
              switch.
            </li>
          </ul>
          <p className="mt-2">
            Contact me six months before your 65th birthday to lock in the
            best Supplement rates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free Medicare consultation by phone or video
          </h2>
          <p className="mb-2">
            Every consultation is free with zero obligation. I'll review what
            you have, show you what's available, and let you decide. No
            pressure, no sales tactics.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or book a video call at a time
            that works for you. Evenings and weekends are fine.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Ready to compare Medicare plans in Union City?
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
              href="/quote"
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
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage in Hudson County
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs. Plan N
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare
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
            <li>
              <Link
                href="/services/local-medicare-agents-in-union-nj"
                className="text-blue-600 hover:underline"
              >
                Local Medicare Agents In Union NJ
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official Medicare resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Getting Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}