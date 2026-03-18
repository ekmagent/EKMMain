import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "medicare quotes | Free Instant Rates, No Obligation | MedicareYourself",
  description:
    "Medicare quotes from every major carrier compared side by side. Supplement and Advantage rates in minutes - Anthony Orner finds your best option free.",
  openGraph: {
    title: "medicare quotes | Free Instant Rates, No Obligation | MedicareYourself",
    description:
      "Medicare quotes from every major carrier compared side by side. Supplement and Advantage rates in minutes - Anthony Orner finds your best option free.",
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
      name: "Medicare Quotes",
      item: "https://www.medicareyourself.com/services/medicare-quotes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Quotes: Compare Supplement and Advantage Rates in Minutes",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How long does it take to get a Medicare quote?",
    answer:
      "Most quotes take just a few minutes. Once I know your zip code, age, tobacco status, and whether you want a Supplement or Advantage plan, I can pull rates from every major carrier and compare them side by side.",
  },
  {
    question: "Will I get bombarded with calls after requesting a quote?",
    answer:
      "No. When you call or request a quote through MedicareYourself, your information stays with me - Anthony Orner, a licensed broker. I don't sell leads or share your data with other agents or call centers.",
  },
  {
    question: "Do I pay more for a Medicare plan if I go through a broker?",
    answer:
      "Not a penny more. Carrier rates are the same whether you buy directly or through a broker. The difference is I compare every option for you at no cost.",
  },
  {
    question: "Can I get a Medicare quote before I turn 65?",
    answer:
      "Yes. For Medigap plans, you can apply up to 6 months before your Part B start date to lock in your rate early. This is actually the best time to get a quote because rates can increase the longer you wait.",
  },
];

export default function MedicareQuotesPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        {" > "}
        <Link href="/medicare-guides" className="hover:underline">Medicare Guides</Link>
        {" > "}
        <span className="text-gray-800">Medicare Quotes</span>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#1e40af] rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medicare Quotes: Compare Supplement and Advantage Rates in Minutes
          </h1>
          <Image
            src="/images/medicare-quotes_photo.webp"
            alt="medicare quotes"
            width={800}
            height={400}
            className="rounded-lg mb-6 w-full"
          />
        </div>

        <p className="text-lg mb-2">
          Medicare quotes should be simple: your age, your zip code, and honest numbers from every carrier. Instead, most people enter their info on a website and get flooded with calls from agents they never asked to hear from.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. When you request a quote through me, your information stays with me. No lead selling. No call center. Just real rates compared side by side.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">What a Medicare quote actually includes</h2>
          <p className="mb-2">
            A good Medicare quote isn't just a monthly premium. Here's what I show you:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Monthly premium by carrier, ranked lowest to highest</li>
            <li>Out-of-pocket costs - deductibles, copays, coinsurance</li>
            <li>Doctor and hospital network details (Advantage plans)</li>
            <li>Prescription drug coverage and estimated annual drug costs</li>
            <li>Rate history - whether a carrier raises prices aggressively year over year</li>
          </ul>
          <p>Premium is only part of the picture. A $0 premium Advantage plan can cost more than a $150/month Supplement if you need frequent care.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Supplement quotes vs. Advantage quotes - key differences</h2>
          <p className="mb-2">
            These are two different products, and they quote differently.
          </p>
          <p className="mb-2">
            <strong>Medicare Supplement (Medigap) quotes</strong> are based on your age, zip code, gender, and tobacco use. Coverage is standardized - Plan G is Plan G regardless of carrier. So you're comparing price and company stability.
          </p>
          <p>
            <strong>Medicare Advantage quotes</strong> depend on your county. Benefits like dental, vision, and drug coverage vary by plan. Two plans with the same premium can have very different copays and networks. I compare the details so you're not surprised later.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Why quotes vary by $80+ per month for the same coverage</h2>
          <p className="mb-2">
            For Medigap, Plan G covers the exact same benefits no matter the carrier. Yet premiums can differ by $80 or more per month depending on:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>How the carrier prices by age (attained-age vs. issue-age rating)</li>
            <li>The carrier's claims experience in your area</li>
            <li>Household or nonsmoker discounts</li>
          </ul>
          <p>This is exactly why comparing matters. Picking the first plan you see can cost you over $900 a year more than the best available rate.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Your information stays with me</h2>
          <p className="mb-2">
            One of the biggest frustrations people have is requesting a quote online and immediately getting 15 calls from strangers. That happens because many sites sell your info as a "lead" to multiple agents.
          </p>
          <p>I don't sell leads. I don't share your information. You talk to one person - me - and I represent every major carrier. That's it.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">When to request your quote</h2>
          <p className="mb-2">
            Turning 65? Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers can't deny you or charge more for health conditions.
          </p>
          <p className="mb-2">
            My practice is to have clients apply up to 6 months before their Part B start date. This locks in the rate early and protects against premium increases before coverage begins.
          </p>
          <p>Already on Medicare? The Annual Enrollment Period runs October 15 through December 7 for Advantage and Part D changes. But if you qualify for a Special Enrollment Period due to a move, lost coverage, or other life change, you may not have to wait.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Get your free Medicare quote with no obligation</h2>
          <p>
            Call me and I'll pull rates for your specific situation in minutes. No cost. No pressure. No mysterious callbacks from strangers. Just clear numbers so you can make a confident choice.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to see your rates? Call{" "}
            <a href="tel:8555591700" className="underline font-bold">855-559-1700</a>
          </p>
          <p className="mb-4">Free quotes from every major carrier. No obligation.</p>
          <Link
            href="/get-a-free-quote"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/medicare-guides/medicare-supplement-plan-g" className="text-blue-600 hover:underline">
                Medicare Supplement Plan G - What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link href="/medicare-guides/medicare-advantage-vs-medigap" className="text-blue-600 hover:underline">
                Medicare Advantage vs. Medigap - How to Choose
              </Link>
            </li>
            <li>
              <Link href="/medicare-guides/when-to-enroll-in-medicare" className="text-blue-600 hover:underline">
                When to Enroll in Medicare - Key Dates and Deadlines
              </Link>
            </li>
            <li>
              <Link href="/medicare-guides/medicare-part-d" className="text-blue-600 hover:underline">
                Medicare Part D - How Prescription Drug Plans Work
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}