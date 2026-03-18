import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Enroll in Plan G Online | Free Broker-Assisted Application | MedicareYourself",
  description:
    "Enroll in Plan G online with a licensed broker guiding every step. Compare carriers, apply from home, no office visit needed. Free, no-obligation help.",
  openGraph: {
    title:
      "Enroll in Plan G Online | Free Broker-Assisted Application | MedicareYourself",
    description:
      "Enroll in Plan G online with a licensed broker guiding every step. Compare carriers, apply from home, no office visit needed. Free, no-obligation help.",
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
      name: "Enroll in Plan G Online",
      item: "https://www.medicareyourself.com/services/enroll-in-plan-g-online",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Plan G Online: Complete Your Application From Home With Broker Support",
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
    question: "Can I enroll in Plan G online without visiting an office?",
    answer:
      "Yes. Most Medicare Supplement carriers accept online or electronic applications. A licensed broker can walk you through the entire process by phone or video while you complete everything from home.",
  },
  {
    question:
      "Will I be asked health questions when I enroll in Plan G online?",
    answer:
      "It depends on timing. During your 6-month Medigap Open Enrollment Period (starting when you're 65+ and enrolled in Part B), carriers can't deny you or charge more for health conditions. Outside that window, most carriers require medical underwriting and can decline your application.",
  },
  {
    question: "How long does the online Plan G enrollment process take?",
    answer:
      "The application itself takes about 15-20 minutes. After you submit, carriers typically review and approve within a few business days to two weeks, depending on whether underwriting is required.",
  },
  {
    question: "Is there a fee for using a broker to enroll in Plan G online?",
    answer:
      "No. Brokers are paid by the insurance carrier, not by you. Your premium is the same whether you apply directly or through a broker. The broker's help is free.",
  },
];

export default function EnrollInPlanGOnlinePage() {
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
          <span className="text-gray-700">Enroll in Plan G Online</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Enroll in Plan G Online: Complete Your Application From Home With
          Broker Support
        </h1>

        <Image
          src="/images/enroll-in-plan-g-online.webp"
          alt="enroll in Plan G online"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          Enrolling in Plan G online is straightforward when you have a licensed
          broker handling the details. You compare carriers, pick the best rate,
          and submit your application - all without leaving your kitchen table.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I'm Anthony Orner, a licensed Medicare broker in NJ. Here's exactly
          how the process works and what you'll need.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How the online Plan G enrollment process works
          </h2>
          <p className="text-gray-700 mb-2">
            We start with a phone call or video chat. I pull up real-time rates
            from multiple carriers in your area so you can see actual numbers
            side by side - same Plan G benefits, different premiums.
          </p>
          <p className="text-gray-700">
            Once you pick a carrier, I send you the application electronically.
            You fill it out on your computer or tablet, sign digitally, and
            submit. Most people finish in under 20 minutes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Documents and information you need before you start
          </h2>
          <p className="text-gray-700 mb-3">
            Have these ready before we begin:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Your Medicare card (red, white, and blue card) with your Medicare number</li>
            <li>Part A and Part B effective dates</li>
            <li>Date of birth and Social Security number</li>
            <li>Current address and phone number</li>
            <li>Bank account or payment info for your first premium</li>
          </ul>
          <p className="text-gray-700 mt-3">
            If you're within your Medigap Open Enrollment Period, that's all you
            need. Outside that window, you'll also answer health history
            questions on the application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Timing matters more than most people realize
          </h2>
          <p className="text-gray-700 mb-2">
            Your 6-month Medigap Open Enrollment Period starts the month you
            turn 65 and are enrolled in Part B. During this window, no carrier
            can deny you or charge more because of health conditions. That's
            federal law.
          </p>
          <p className="text-gray-700">
            Outside that window, carriers use medical underwriting. I've seen
            people denied for conditions as common as Type 2 diabetes. If you're
            approaching 65, I recommend applying up to 6 months before your Part
            B start date to lock in the best rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What happens after you submit your application
          </h2>
          <p className="text-gray-700 mb-2">
            The carrier reviews your application - typically a few business days
            if no underwriting is needed, up to two weeks if health questions are
            involved. I track the status for you and follow up directly with the
            carrier if anything stalls.
          </p>
          <p className="text-gray-700">
            Once approved, you'll get your policy documents in the mail. Your
            coverage starts on the effective date we selected during the
            application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why broker-assisted enrollment beats doing it alone
          </h2>
          <p className="text-gray-700 mb-2">
            Plan G benefits are standardized by Medicare. A Plan G from one
            carrier covers the exact same things as Plan G from another. The
            only difference is price and customer service. A broker shows you all
            the options - not just one company's price.
          </p>
          <p className="text-gray-700">
            You pay the same premium whether you use a broker or go direct. The
            carrier pays my fee. Your cost doesn't change, but you get someone
            watching out for mistakes - like applying outside your guaranteed
            issue window or missing a form.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Plan G actually covers
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Part A hospital coinsurance plus 365 extra days after Medicare ends</li>
            <li>Part B coinsurance (the 20% you'd normally owe)</li>
            <li>Part A deductible ($1,676 per benefit period in 2026)</li>
            <li>Skilled nursing facility coinsurance ($209.50/day for days 21-100)</li>
            <li>First 3 pints of blood</li>
            <li>Part B excess charges</li>
            <li>Foreign travel emergency care (80%, up to plan limits)</li>
          </ul>
          <p className="text-gray-700 mt-3">
            The only Original Medicare cost Plan G doesn't cover is the Part B
            deductible ($283/year in 2026). You pay that once a year, and Plan G
            handles the rest.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold text-gray-900 mb-2">
            Ready to enroll in Plan G from home?
          </p>
          <p className="text-gray-700 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            to compare rates and apply with free broker help.
          </p>
          <Link
            href="/get-a-free-quote"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-guides/medicare-plan-g-cost"
                className="text-blue-700 hover:underline"
              >
                How Much Does Medicare Plan G Cost?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/plan-g-vs-plan-n"
                className="text-blue-700 hover:underline"
              >
                Plan G vs. Plan N: Which Is Better?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medigap-open-enrollment"
                className="text-blue-700 hover:underline"
              >
                When Is Your Medigap Open Enrollment Period?
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/what-is-medicare-supplement"
                className="text-blue-700 hover:underline"
              >
                What Is Medicare Supplement Insurance?
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}