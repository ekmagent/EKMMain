import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "independent medicare advantage agents near me | Free NJ Consultations | MedicareYourself",
  description:
    "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
  openGraph: {
    title:
      "independent medicare advantage agents near me | Free NJ Consultations | MedicareYourself",
    description:
      "Independent Medicare Advantage agents near you in New Jersey. Anthony Orner compares every major MA plan in your county at no cost. Book a free consultation.",
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
      name: "Independent Medicare Advantage Agents Near Me",
      item: "https://medicareyourself.com/services/independent-medicare-advantage-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find an Independent Medicare Advantage Agent Near You in NJ",
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
    question: "What is an independent Medicare agent?",
    answer:
      "An independent Medicare agent isn't tied to a single insurance company. They hold contracts with multiple carriers, which means they can compare Medicare Advantage plans across every option available in your county and recommend the best fit for your doctors, prescriptions, and budget.",
  },
  {
    question:
      "Do I pay anything for an independent Medicare Advantage agent's help?",
    answer:
      "No. Independent Medicare agents are compensated by the insurance carriers, not by you. The plan premiums are the same whether you enroll directly or through an agent. You get expert guidance at zero cost.",
  },
  {
    question: "Can an independent agent help me switch from a Medigap plan to Medicare Advantage?",
    answer:
      "Yes, but this is a decision that deserves careful thought. Switching from a Medigap supplement to Medicare Advantage may mean you can't return to your supplement plan without medical underwriting. An independent agent will walk you through the real tradeoffs before you decide.",
  },
  {
    question: "When can I enroll in a Medicare Advantage plan in NJ?",
    answer:
      "You can enroll during the Annual Enrollment Period (October 15 through December 7), your Initial Enrollment Period when you first qualify for Medicare, or during a Special Enrollment Period if you have a qualifying life event like losing employer coverage.",
  },
];

export default function IndependentMedicareAdvantageAgentsNearMe() {
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
        <span className="text-gray-700">
          Independent Medicare Advantage Agents Near Me
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find an Independent Medicare Advantage Agent Near You in NJ
        </h1>

        <Image
          src="/images/hub_independent-medicare-advantage-agents-near-me.webp"
          alt="independent Medicare Advantage agents near me"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Independent Medicare Advantage agents near you can compare every major plan in your New Jersey county, side by side, at no cost. Most people searching for help don't want a sales pitch. They want someone who'll lay out the real differences between plans and let them decide.
        </p>
        <p className="text-lg mb-6">
          That's exactly how I work. I'm Anthony Orner, a licensed independent Medicare broker serving all 21 NJ counties.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why independence matters when choosing a Medicare Advantage plan
          </h2>
          <p className="mb-2">
            A captive agent represents one carrier. If that carrier's plan doesn't fit your needs, tough luck. An independent agent holds contracts with multiple insurance companies and can show you options that a single-carrier agent literally cannot.
          </p>
          <p>
            This matters because Medicare Advantage plans vary wildly by county. Copays, provider networks, drug formularies, and extra benefits like dental or vision all differ. You need someone who sees the full picture, not one slice of it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Which Medicare Advantage carriers are available in your NJ county
          </h2>
          <p className="mb-2">
            Carrier availability changes every year and depends on your zip code. In most NJ counties, you'll find plans from carriers like Aetna, UnitedHealthcare, Humana, Cigna, and Horizon BCBSNJ, among others.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Some counties have 30+ plan options. Others have fewer than 10.</li>
            <li>Network types (HMO vs. PPO) affect which doctors you can see.</li>
            <li>Drug formularies differ even between plans from the same carrier.</li>
          </ul>
          <p className="mt-2">
            I'll check your specific county and match plans to your doctors and medications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent agent compares $0-premium Advantage plans
          </h2>
          <p className="mb-2">
            A $0 premium sounds great until you look at the copays, specialist costs, and maximum out-of-pocket limits. Some $0-premium plans keep your total annual costs low. Others cost more over a year than a plan with a small monthly premium.
          </p>
          <p>
            I run the math using your actual healthcare usage: your prescriptions, your doctors, how often you see specialists. That's the only honest way to compare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real risk of switching plans without independent advice
          </h2>
          <p className="mb-2">
            I hear from people every year who switched from a Medigap supplement to a $0-premium Advantage plan because the premium savings looked irresistible. Then the copays started adding up, referrals slowed them down, or their preferred doctors weren't in network.
          </p>
          <p>
            The worst part? If you have pre-existing conditions like Type 2 diabetes, you may not qualify to return to your old supplement plan without medical underwriting. An independent agent explains these tradeoffs upfront, before you sign anything.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to expect when you call an independent Medicare agent
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>A 15-to-20-minute conversation about your current coverage, doctors, and medications.</li>
            <li>A clear comparison of every Medicare Advantage plan available in your zip code.</li>
            <li>An honest assessment of whether Medicare Advantage or a Medigap supplement fits your situation better.</li>
            <li>Zero pressure. Zero cost. The carriers pay my commission, not you.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get unbiased Medicare Advantage guidance from Anthony Orner
          </h2>
          <p className="mb-2">
            Medicare shouldn't feel like learning a new language. I break it down in plain English, check every plan against your actual needs, and give you a straight recommendation.
          </p>
          <p>
            Whether you're turning 65, retiring, or unhappy with your current Advantage plan, I'll help you sort it out. Serving every NJ county from Bergen to Cape May.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare Advantage plans in your area?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
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
                href="/services/medicare-advantage-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage Plans in New Jersey
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
                About Anthony Orner, Licensed NJ Medicare Broker
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}