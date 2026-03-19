import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Find an NJ Medicare Broker Near You | Free No-Pressure Help | MedicareYourself",
  description:
    "Find an NJ Medicare broker near you — Anthony Orner is licensed statewide, compares top carriers at no cost. Independent, not captive. Free consultation.",
  openGraph: {
    title:
      "Find an NJ Medicare Broker Near You | Free No-Pressure Help | MedicareYourself",
    description:
      "Find an NJ Medicare broker near you — Anthony Orner is licensed statewide, compares top carriers at no cost. Independent, not captive. Free consultation.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Find an NJ Medicare Broker Near You",
      item: "https://medicareyourself.com/services/find-an-nj-medicare-broker-near-you",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find an NJ Medicare Broker Near You Who Actually Works for You",
  description:
    "Find an NJ Medicare broker near you — Anthony Orner is licensed statewide, compares top carriers at no cost. Independent, not captive. Free consultation.",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/find-an-nj-medicare-broker-near-you",
};

const faqs = [
  {
    question: "How much does an NJ Medicare broker charge?",
    answer:
      "Nothing. A licensed Medicare broker is paid by the insurance carrier, not you. The plan premiums are the same whether you enroll directly or through a broker. You get free guidance with zero markup.",
  },
  {
    question: "What is the difference between a Medicare broker and an agent?",
    answer:
      "A captive agent works for one insurance company and can only sell that company's plans. An independent broker like Anthony Orner is contracted with multiple carriers and can compare options across all of them to find what fits your situation.",
  },
  {
    question: "Can a Medicare broker help me if I live anywhere in New Jersey?",
    answer:
      "Yes. Anthony Orner is licensed statewide in New Jersey and serves all 21 counties. Consultations happen by phone, video, or in person depending on your preference and location.",
  },
  {
    question: "When should I contact a Medicare broker before turning 65?",
    answer:
      "Reach out at least 6 months before your 65th birthday. For Medigap plans, Anthony's practice is to have clients apply up to 6 months before their Part B start date to lock in the best rate early.",
  },
];

export default function FindNJMedicareBrokerPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Find an NJ Medicare Broker Near You
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find an NJ Medicare Broker Near You Who Actually Works for You
        </h1>

        <Image
          src="/images/find-an-nj-medicare-broker-near-you.webp"
          alt="Find an NJ Medicare broker near you"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          Finding an NJ Medicare broker near you should not feel like a chore. I am Anthony Orner, an independent Medicare broker licensed across all of New Jersey, and I compare plans from multiple top carriers so you do not have to.
        </p>
        <p className="text-lg mb-6">
          My consultations are free. No sales pressure. No hidden fees. Just straight answers about which plan actually fits your doctors, prescriptions, and budget.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Independent broker vs. insurance company agent - the key difference
          </h2>
          <p className="mb-2">
            A captive agent works for one carrier. They sell that company's plans because that is all they are allowed to sell. An independent broker works for you.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Captive agent: limited to one company's lineup</li>
            <li>Independent broker: contracted with multiple carriers statewide</li>
            <li>Your cost is the same either way - the carrier pays the broker's commission</li>
          </ul>
          <p>
            When I sit down with you, I pull rates from every carrier I represent and lay them side by side. You pick the one that makes sense. That is the whole process.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Counties and zip codes Anthony Orner serves in New Jersey
          </h2>
          <p className="mb-2">
            I am licensed in all 21 New Jersey counties. Whether you are in Bergen County, Ocean County, Mercer County, or Cape May County, I can help. Here are just a few areas I frequently work with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>North Jersey: Bergen, Essex, Hudson, Morris, Passaic, Sussex, Warren</li>
            <li>Central Jersey: Hunterdon, Mercer, Middlesex, Monmouth, Somerset, Union</li>
            <li>South Jersey: Atlantic, Burlington, Camden, Cape May, Cumberland, Gloucester, Ocean, Salem</li>
          </ul>
          <p className="mt-2">
            Meetings happen by phone, video call, or in person depending on where you are and what you prefer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a good Medicare broker should do (and never charge for)
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Review your current prescriptions and check formulary coverage</li>
            <li>Verify your doctors are in-network before you enroll</li>
            <li>Compare Medicare Supplement (Medigap), Medicare Advantage, and Part D plans</li>
            <li>Explain the actual dollar difference between Plan G and Plan N</li>
            <li>Help you during enrollment periods like the Annual Election Period (October 15 - December 7)</li>
          </ul>
          <p className="mt-2">
            All of this should cost you exactly $0. If someone tries to charge you a fee, walk away.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why timing matters if you are turning 65
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During that window, carriers cannot deny you or charge more based on health history.
          </p>
          <p>
            My practice is to have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before coverage even begins. The sooner you lock in, the better your rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plans I compare for NJ residents
          </h2>
          <p className="mb-2">
            I do not push one product. Depending on your situation, we will look at:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Medicare Supplement Plan G:</strong> covers everything after the $257 Part B annual deductible</li>
            <li><strong>Medicare Supplement Plan N:</strong> lower premiums, small copays at some office visits</li>
            <li><strong>Medicare Advantage (Part C):</strong> bundled plans with networks, often $0 premium</li>
            <li><strong>Part D prescription drug plans:</strong> standalone coverage paired with Original Medicare</li>
          </ul>
          <p className="mt-2">
            Rates vary by carrier, your age, and your zip code. I will show you exact numbers, not vague estimates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Request a free plan comparison in under 2 minutes
          </h2>
          <p className="mb-2">
            Call me directly at 855-559-1700 or use the link below. I will ask a handful of questions about your medications, doctors, and budget. Then I will send you a side-by-side comparison you can review on your own time.
          </p>
          <p>
            No sign-up required. No obligation. Just clear information from a real person in New Jersey.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-bold mb-2">
            Ready to compare Medicare plans in NJ?
          </p>
          <p className="mb-4">
            Call Anthony Orner directly:{" "}
            <a href="tel:8555591700" className="underline font-semibold">
              855-559-1700
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
                href="/medicare-supplement/plan-g-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G in NJ - Rates and Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/turning-65-nj"
                className="text-blue-600 hover:underline"
              >
                Turning 65 in New Jersey - Your Medicare Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-advantage/nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in NJ - What to Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment Period Explained
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}