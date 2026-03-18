import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Compare and Enroll in Plan G Online | No Paperwork Needed | MedicareYourself",
  description:
    "Compare and enroll in Plan G online through a licensed NJ broker. See every carrier's rate side by side and complete enrollment in minutes. No fees.",
  openGraph: {
    title:
      "Compare and Enroll in Plan G Online | No Paperwork Needed | MedicareYourself",
    description:
      "Compare and enroll in Plan G online through a licensed NJ broker. See every carrier's rate side by side and complete enrollment in minutes. No fees.",
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
      name: "Compare and Enroll in Plan G Online",
      item: "https://www.medicareyourself.com/services/compare-and-enroll-in-plan-g-online",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Compare and Enroll in Plan G Online With a Licensed NJ Broker",
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
    question: "Can I really enroll in Plan G completely online?",
    answer:
      "Yes. Most carriers accept electronic applications. You'll fill out a short form, answer a few health questions (if outside your Medigap Open Enrollment Period), and sign digitally. The entire process typically takes 10-15 minutes with a broker walking you through it.",
  },
  {
    question: "Is Plan G the same no matter which carrier I pick?",
    answer:
      "Exactly the same. Plan G benefits are standardized by Medicare. Every carrier covers Part A coinsurance, the Part A deductible ($1,676 in 2026), Part B excess charges, skilled nursing coinsurance, and more. The only difference between carriers is price and rate stability over time.",
  },
  {
    question: "Will I pay more if I enroll through a broker instead of directly?",
    answer:
      "No. Carriers pay the broker's commission. Your premium is identical whether you go direct or use a licensed broker. The difference is you get someone who compares every option for you and handles the paperwork.",
  },
  {
    question: "What if I have pre-existing conditions?",
    answer:
      "During your Medigap Open Enrollment Period (the 6 months starting when you're 65+ and enrolled in Part B), carriers cannot deny you or charge more based on health. Outside that window, medical underwriting applies and approval depends on your health history. Call us to discuss your specific situation.",
  },
];

export default function CompareAndEnrollInPlanGOnline() {
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
          <Link href="/medicare-guides" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Compare and Enroll in Plan G Online
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare and Enroll in Plan G Online With a Licensed NJ Broker
        </h1>

        <Image
          src="/images/compare-and-enroll-in-plan-g-online.webp"
          alt="Compare and enroll in Plan G online"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Compare and enroll in Plan G online without printing a single page or mailing a single envelope. I pull rates from every carrier writing Plan G in New Jersey, lay them side by side on a screen share, and submit your application electronically - often in under 15 minutes.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          You see the numbers. You pick the carrier. I handle the rest.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How the online Plan G enrollment process works
          </h2>
          <p className="text-gray-700 mb-2">
            We schedule a phone or video call at a time that works for you. During that call, I share my screen so you can see every NJ carrier's Plan G rate for your age, gender, and zip code.
          </p>
          <p className="text-gray-700">
            Once you choose a carrier, I open the electronic application right there. You answer a handful of questions, review your entries, and sign digitally. Most people finish before their coffee gets cold.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What you can compare before you pick a carrier
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Monthly premium for your exact age and zip code</li>
            <li>Rate increase history - how much each carrier has raised prices over the past several years</li>
            <li>Household or non-smoker discounts that lower your rate further</li>
            <li>Whether the carrier uses attained-age, issue-age, or community-rated pricing</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Plan G benefits are identical across carriers - standardized by Medicare. So the smart comparison is about long-term cost, not coverage differences.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Plan G actually covers
          </h2>
          <p className="text-gray-700 mb-2">
            Plan G picks up nearly everything Original Medicare doesn't. That includes the Part A deductible ($1,676 per benefit period in 2026), Part B coinsurance (the 20% you'd otherwise owe), skilled nursing coinsurance ($209.50/day for days 21-100), Part B excess charges, and foreign travel emergencies.
          </p>
          <p className="text-gray-700">
            Your only out-of-pocket cost with Plan G is the annual Part B deductible - $283 in 2026. After that, Plan G covers the rest.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Documents you need to enroll (just two things)
          </h2>
          <p className="text-gray-700 mb-2">
            Your Medicare card (red, white, and blue) and a bank account or card for your first premium payment. That's it.
          </p>
          <p className="text-gray-700">
            No doctor's records. No lengthy health history forms. If you're within your Medigap Open Enrollment Period, there are zero health questions at all - guaranteed issue means every carrier must accept you at standard rates.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why enrolling through a broker costs you nothing extra
          </h2>
          <p className="text-gray-700 mb-2">
            Your premium is the same whether you call a carrier directly or work with me. Carriers set the price. They pay the broker's commission separately. You don't see it, and it doesn't affect your rate.
          </p>
          <p className="text-gray-700">
            The advantage is you get someone who's compared every Plan G option in New Jersey - not a call center rep who can only sell one company's product.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Lock in your rate before it goes up
          </h2>
          <p className="text-gray-700 mb-2">
            If you're turning 65 and enrolling in Part B, my practice is to submit your Medigap application up to 6 months before your Part B start date. This locks in today's rate and protects you from any premium increases that hit before your coverage begins.
          </p>
          <p className="text-gray-700">
            People who wait often regret it. I've talked to too many folks who switched to a $0 premium plan, then couldn't get Plan G back because of health questions outside the open enrollment window. Starting early avoids that.
          </p>
        </section>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-xl font-semibold text-gray-900 mb-2">
            Ready to see your Plan G rates?
          </p>
          <p className="text-gray-700 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="text-blue-700 font-bold hover:underline"
            >
              get a free quote online
            </Link>
            . No fees, no pressure.
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs Plan N: Which One Saves You More?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-open-enrollment-period"
                className="text-blue-700 hover:underline"
              >
                Medigap Open Enrollment Period Explained
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-costs-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Costs in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/turning-65-medicare-checklist"
                className="text-blue-700 hover:underline"
              >
                Turning 65? Your Medicare Enrollment Checklist
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}