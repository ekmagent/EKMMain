import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with pre-existing conditions | Free Guidance | MedicareYourself",
  description:
    "Medicare broker for people with pre-existing conditions — find plans that skip health questions and carriers that are lenient. Free help from Anthony Orner.",
  openGraph: {
    title:
      "medicare broker for people with pre-existing conditions | Free Guidance | MedicareYourself",
    description:
      "Medicare broker for people with pre-existing conditions — find plans that skip health questions and carriers that are lenient. Free help from Anthony Orner.",
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
      item: "https://www.medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Broker for People with Pre-Existing Conditions",
      item: "https://www.medicareyourself.com/services/medicare-broker-for-people-with-pre-existing-conditions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Pre-Existing Conditions: Your Coverage Options Explained",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
};

const faqs = [
  {
    question: "Can Medicare deny me for a pre-existing condition?",
    answer:
      "No. Original Medicare (Parts A and B) and Medicare Advantage plans cannot deny coverage or charge you more because of a pre-existing condition. Medigap plans, however, may use medical underwriting outside your initial open enrollment period.",
  },
  {
    question:
      "What is the Medigap open enrollment period and why does it matter for pre-existing conditions?",
    answer:
      "Your Medigap open enrollment period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, insurance companies cannot deny you a Medigap policy or charge higher premiums based on your health history. After this period closes, you may face medical underwriting.",
  },
  {
    question:
      "Is Medicare Advantage a good option if I have a pre-existing condition?",
    answer:
      "Yes. Medicare Advantage plans must accept you during valid enrollment periods regardless of your health status. Many plans also include extra benefits like prescription drug coverage and specialist visits with set copays, which can be helpful if you manage chronic conditions.",
  },
  {
    question: "Can a Medicare broker help me find coverage after my Medigap open enrollment ends?",
    answer:
      "Absolutely. An experienced broker knows which carriers have more lenient underwriting questions and which federal guaranteed issue rights might apply to your situation. This can make the difference between getting approved and being turned down.",
  },
];

export default function MedicareBrokerPreExistingConditions() {
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
          <Link href="/medicare" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Broker for People with Pre-Existing Conditions
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for People with Pre-Existing Conditions: Your Coverage Options Explained
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-pre-existing-conditions.webp"
          alt="medicare broker for people with pre-existing conditions"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-2">
          A Medicare broker for people with pre-existing conditions can save you from rejected applications, higher premiums, and plans that don&apos;t cover what you actually need. If you have diabetes, COPD, heart disease, or another chronic condition, the plan you choose matters more than most people realize.
        </p>
        <p className="text-lg mb-6">
          I&apos;m Anthony Orner, a licensed Medicare broker, and I help people with health histories find the right coverage every day. Here&apos;s what you need to know.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How pre-existing conditions affect Medigap underwriting
          </h2>
          <p className="mb-3">
            Original Medicare (Parts A and B) accepts everyone who qualifies, regardless of health status. That part is straightforward. The complication hits when you shop for a Medigap supplement policy.
          </p>
          <p className="mb-3">
            Outside your initial enrollment window, most Medigap carriers run medical underwriting. They ask about your health history and current medications. Conditions like diabetes, cancer history, or heart failure can lead to a denial or a rated-up premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Guaranteed issue rights that bypass health questions entirely
          </h2>
          <p className="mb-3">
            Your best window is the Medigap open enrollment period: 6 months starting the month you turn 65 and have Part B. During this time, no carrier can turn you down or charge more because of a pre-existing condition. Full stop.
          </p>
          <p className="mb-3">
            Outside that window, federal guaranteed issue rights kick in under specific circumstances:
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>You lose employer or union group health coverage</li>
            <li>Your Medicare Advantage plan leaves your area or stops operating</li>
            <li>Your insurance company goes bankrupt</li>
            <li>Your plan violated its contract with you</li>
          </ul>
          <p>
            If any of these apply to you, you can get a Medigap plan with zero health questions. Timing is tight though - most of these rights have a 63-day window.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Advantage as an alternative when supplement underwriting is strict
          </h2>
          <p className="mb-3">
            Medicare Advantage plans cannot deny you based on pre-existing conditions during valid enrollment periods like the Annual Enrollment Period (October 15 through December 7). This makes Advantage plans a strong fallback if Medigap underwriting blocks you.
          </p>
          <p>
            Many Advantage plans bundle prescription drug coverage, specialist copays, and extras like dental and vision. If you manage multiple conditions, the built-in structure of an Advantage plan can simplify your costs compared to Original Medicare alone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Work with a broker who knows which carriers are lenient
          </h2>
          <p className="mb-3">
            Not all insurance companies underwrite the same way. Some carriers are stricter about diabetes. Others are more lenient on cardiac history. A broker who works with dozens of carriers knows which doors to knock on first.
          </p>
          <p>
            I work with over 30 carriers across multiple states. When a client comes to me with a health condition, I already know which companies are most likely to approve them and at what rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why timing your application matters
          </h2>
          <p className="mb-3">
            If you&apos;re approaching 65, the smartest move is to apply for your Medigap plan before your open enrollment window opens. My practice is to have clients apply up to 6 months before their Part B start date. This locks in your rate early and protects you from premium increases before coverage begins.
          </p>
          <p>
            Once that 6-month open enrollment period closes, your options shrink. Don&apos;t wait.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What a free consultation looks like
          </h2>
          <p className="mb-3">
            When you call me at 855-559-1700, I&apos;ll ask about your doctors, your medications, and your health history. Then I compare plans across carriers to find the best fit for your situation. There&apos;s no cost to you - brokers are paid by the insurance companies, not by you.
          </p>
          <p>
            You get honest answers. No pressure. Just clarity on what you qualify for and what it costs.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to find the right plan for your health situation?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            for a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
                href="/medicare/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment Period: What You Need to Know
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/guaranteed-issue-rights"
                className="text-blue-600 hover:underline"
              >
                Federal Guaranteed Issue Rights for Medigap
              </Link>
            </li>
            <li>
              <Link
                href="/medicare/medicare-advantage-vs-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker in New Jersey: Free Plan Comparison
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}