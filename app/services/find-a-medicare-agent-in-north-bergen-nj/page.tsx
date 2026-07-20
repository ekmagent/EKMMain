import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "Find a Medicare Agent in North Bergen NJ | Free Broker Help | MedicareYourself",
  description:
    "Find a trusted Medicare agent in North Bergen, NJ. Anthony Orner compares Supplement and Advantage plans across carriers—free, no-pressure. Call today.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-north-bergen-nj" },
  openGraph: {
    title:
      "Find a Medicare Agent in North Bergen NJ | Free Broker Help | MedicareYourself",
    description:
      "Find a Medicare agent in North Bergen, NJ who compares Supplement and Advantage plans across carriers. Anthony Orner offers free, no-pressure consultations.",
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
      name: "Find a Medicare Agent in North Bergen NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-north-bergen-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in North Bergen, NJ — Independent Broker Comparing Every Major Carrier",
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
    "https://medicareyourself.com/services/find-a-medicare-agent-in-north-bergen-nj",
};

const faqs = [
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers rather than just one company. Ask whether they charge a fee (they shouldn't), how many plans they can quote, and whether they help with claims issues after enrollment. An independent agent can show you options side by side so you're not locked into a single carrier's lineup.",
  },
  {
    question: "Do Medicare agents charge a fee?",
    answer:
      "No. Licensed Medicare brokers are paid by the insurance carriers, not by you. Your premium is the same whether you enroll directly or through a broker. You get free guidance with zero markup on your plan cost.",
  },
  {
    question: "How do I speak to a live person at Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) 24 hours a day, 7 days a week. TTY users can call 1-877-486-2048. For local help comparing plans and enrolling, call a licensed broker like Anthony Orner at 855-559-1700.",
  },
  {
    question: "What's the difference between a captive and independent Medicare agent?",
    answer:
      "A captive agent works for one insurance company and can only sell that company's plans. An independent broker is contracted with multiple carriers and can compare plans across all of them to find the best fit for your doctors, prescriptions, and budget.",
  },
];

export default function FindMedicareAgentNorthBergenNJ() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocalServiceSchema citySlug="north-bergen" />
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
          Find a Medicare Agent in North Bergen NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Find a Medicare Agent in North Bergen, NJ — Independent Broker
          Comparing Every Major Carrier
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-north-bergen-nj.webp"
          alt="find a medicare agent in North Bergen NJ"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in North Bergen, NJ shouldn't mean sitting
          through a sales pitch for one company's plans. I'm Anthony Orner, an
          independent broker licensed in New Jersey, and I compare Supplement and
          Advantage plans across every major carrier so you see real choices. My
          consultations are free, and there's never a fee.
        </p>

        <PhoneCTA />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            What an independent broker does that a captive agent cannot
          </h2>
          <p className="mb-2">
            A captive agent represents one insurance company. That limits what
            they can offer you, even if a better plan exists somewhere else.
          </p>
          <p>
            As an independent broker, I'm contracted with multiple carriers. I
            pull quotes from all of them, lay the numbers side by side, and let
            you decide. Same premiums you'd pay going direct, zero extra cost.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement and Advantage options in North Bergen 07047
          </h2>
          <p className="mb-2">
            North Bergen residents in the 07047 zip code have access to both
            Medicare Supplement (Medigap) and Medicare Advantage plans. The right
            choice depends on how you use healthcare:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Medigap plans</strong> cover cost-sharing gaps in Original
              Medicare. Plan G and Plan N are the most popular standardized
              options. Rates vary by carrier and age.
            </li>
            <li>
              <strong>Medicare Advantage (Part C)</strong> bundles hospital,
              medical, and often drug coverage into one plan. Many include dental
              and vision. Network restrictions apply.
            </li>
          </ul>
          <p>
            If you're turning 65, your Medigap Open Enrollment Period lasts 6
            months starting the month you're both 65 and enrolled in Part B.
            That's when you get guaranteed issue with no health questions. Apply
            about 6 months before your Part B start date to lock in the best
            rate.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            How plan selection differs in Hudson County vs. other NJ counties
          </h2>
          <p className="mb-2">
            Hudson County has a dense concentration of hospitals and specialists,
            including facilities in Jersey City and nearby Hackensack Meridian
            Health locations. That density creates more Medicare Advantage
            network options than you'd find in rural parts of the state.
          </p>
          <p>
            But network access shifts. Carriers change provider agreements every
            year. I've seen North Bergen residents pick an Advantage plan based
            on a hospital being in-network, only to find that changes the
            following year. I track those shifts so you don't get surprised.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why provider network changes matter more than you think
          </h2>
          <p className="mb-2">
            Real people across New Jersey deal with carriers dropping hospital
            systems from their networks mid-year or at renewal. When your
            insurer stops covering a major health system, you're scrambling for
            care or paying out of pocket.
          </p>
          <p>
            An independent broker monitors these changes. If your plan's network
            shifts, I'll flag it and help you evaluate alternatives before it
            becomes an emergency.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            2026 Medicare costs you should know
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Part B premium: $202.90/month</li>
            <li>Part B deductible: $283/year</li>
            <li>Part A deductible: $1,736 per benefit period</li>
            <li>
              Skilled nursing coinsurance (days 21-100): $217.00/day without
              supplemental coverage
            </li>
            <li>
              Part B late enrollment penalty: 10% for every 12-month period you
              delayed
            </li>
          </ul>
          <p className="mt-2">
            These numbers add up fast. A Medigap plan or a well-chosen Advantage
            plan can protect you from the worst of it.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free North Bergen Medicare plan comparison
          </h2>
          <p className="mb-2">
            I'll pull quotes specific to your zip code, doctors, and
            prescriptions. You'll see every option that fits, not just the ones
            one company wants to sell. No obligation, no pressure.
          </p>
          <p>
            Call or request a comparison online. Most people have a clear
            recommendation within one conversation.
          </p>
        </section>

        <div className="mt-10 mb-10 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Talk to a Licensed Medicare Broker Today
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm text-gray-600">
            Anthony Orner — Licensed NJ Medicare Broker | No fees, ever.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-xl font-semibold mb-3">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/new-jersey"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment in NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/hoboken-nj-medicare-insurance-agents"
                className="text-blue-700 hover:underline"
              >
                Find a Medicare Agent in Jersey City, NJ
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
                href="/services/find-a-medicare-agent-in-north-brunswick-nj"
                className="text-blue-700 hover:underline"
              >
                Find A Medicare Agent In North Brunswick NJ
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="underline">Get Started with Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased counseling.</div>
      </section>
      </article>
    </>
  );
}