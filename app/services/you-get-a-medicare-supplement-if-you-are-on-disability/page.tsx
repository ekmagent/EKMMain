import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "you get a medicare supplement if you are on disability | Free Guide | MedicareYourself",
  description:
    "You get a Medicare Supplement if you are on disability, but rules vary by state. Learn which plans accept under-65 enrollees and how to apply. Free help.",
  openGraph: {
    title:
      "you get a medicare supplement if you are on disability | Free Guide | MedicareYourself",
    description:
      "You get a Medicare Supplement if you are on disability, but rules vary by state. Learn which plans accept under-65 enrollees and how to apply. Free help.",
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
      name: "Medicare Supplement on Disability",
      item: "https://www.medicareyourself.com/services/you-get-a-medicare-supplement-if-you-are-on-disability",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "You Get a Medicare Supplement if You Are on Disability — Here's How It Works State by State",
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
    question:
      "Can I buy a Medigap plan if I'm under 65 and on SSDI?",
    answer:
      "Yes, but it depends on your state. Federal law does not require insurers to sell Medigap to people under 65. However, more than 30 states have laws that guarantee or partially guarantee access to Medigap plans for disabled Medicare beneficiaries. Call us at 855-559-1700 to check your state's rules.",
  },
  {
    question:
      "How long do I wait for Medicare after getting approved for SSDI?",
    answer:
      "You typically wait 24 months from the date your SSDI benefits begin before Medicare coverage starts. Once your Part A and Part B are active, you can look into Medigap plans if your state allows under-65 enrollment.",
  },
  {
    question:
      "Are Medigap premiums higher if I'm under 65 on disability?",
    answer:
      "In most states that allow under-65 Medigap enrollment, insurers can charge higher premiums than they charge enrollees 65 and older. Rates vary by carrier and state. Once you turn 65, you get a new open enrollment period with standard pricing.",
  },
  {
    question:
      "What happens to my Medigap plan when I turn 65?",
    answer:
      "When you turn 65, you receive a new 6-month Medigap Open Enrollment Period. During this window, any insurer must sell you a Medigap plan at standard rates with no health questions. This is a good time to switch to a lower-cost policy if your under-65 premiums were higher.",
  },
];

export default function MedicareSupplementDisabilityPage() {
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
          <span className="text-gray-700">Medicare Supplement on Disability</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          You Get a Medicare Supplement if You Are on Disability - Here&apos;s How It Works State by State
        </h1>

        <Image
          src="/images/you-get-a-medicare-supplement-if-you-are-on-disability.webp"
          alt="you get a medicare supplement if you are on disability"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          You get a Medicare Supplement if you are on disability, but the rules depend heavily on which state you live in. Federal law guarantees Medigap access for people 65 and older, but it does not extend that same guarantee to disabled beneficiaries under 65.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          That means your options are determined by state legislation. I help clients in this situation every week, and the differences between states can be surprising.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Medigap rights for disabled Medicare beneficiaries under 65
          </h2>
          <p className="text-gray-700 mb-2">
            After you receive Social Security Disability Insurance (SSDI) for 24 months, you qualify for Medicare Parts A and B. At that point, you can apply for a Medigap policy to help cover out-of-pocket costs like the $1,676 Part A deductible and the 20% coinsurance under Part B.
          </p>
          <p className="text-gray-700">
            The catch: federal law only mandates a guaranteed-issue Medigap window for people turning 65. If you are under 65 on disability, an insurer can legally deny you or charge more unless your state says otherwise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Which states guarantee supplement access on disability
          </h2>
          <p className="text-gray-700 mb-2">
            More than 30 states require Medigap insurers to offer at least some plans to disabled Medicare beneficiaries under 65. The level of protection varies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Some states require all Medigap plans be available to under-65 enrollees.</li>
            <li>Others only mandate access to specific plans like Plan A or Plan C.</li>
            <li>A few states have no protections at all, leaving it entirely up to the insurer.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Because these rules change, always verify your state's current law before assuming coverage is available. Call us at 855-559-1700 and we will check for you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            New Jersey and Pennsylvania rules for disabled enrollees
          </h2>
          <p className="text-gray-700 mb-2">
            In New Jersey, state law requires Medigap insurers to sell policies to disabled Medicare beneficiaries under 65. However, carriers can charge higher premiums than they charge the 65-and-over population. The plans available and pricing differ by carrier, so comparing quotes matters.
          </p>
          <p className="text-gray-700">
            Pennsylvania also provides protections for under-65 disabled enrollees, but the specifics around plan availability and pricing vary. I work with clients in both states regularly, and the rate differences between carriers can be significant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            How to apply for a Medigap plan while on SSDI
          </h2>
          <p className="text-gray-700 mb-2">
            Once your Medicare Part A and Part B are active, you can apply for a Medigap plan in states that allow under-65 enrollment. Here is what the process looks like:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Confirm your state allows Medigap sales to disabled beneficiaries under 65.</li>
            <li>Compare plans and rates from multiple carriers. Rates vary widely.</li>
            <li>Submit your application. In some states, insurers may ask health questions and can charge more based on your answers.</li>
            <li>If approved, your coverage starts on the date specified in your policy.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            What about premiums for under-65 Medigap enrollees
          </h2>
          <p className="text-gray-700 mb-2">
            Expect to pay more. In most states, under-65 Medigap premiums run higher than standard rates for people 65 and older. The exact amount depends on the carrier, your state, and in some cases your health history.
          </p>
          <p className="text-gray-700">
            The good news: when you turn 65, you get a brand-new 6-month Medigap Open Enrollment Period. During that window, insurers cannot charge you extra or deny you based on health. Many of my clients switch plans at 65 and lock in a lower rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            Why working with a broker helps on disability Medigap cases
          </h2>
          <p className="text-gray-700 mb-2">
            Under-65 Medigap enrollment is one of the trickiest areas in Medicare. Not every carrier participates in every state, and pricing can swing hundreds of dollars per month between companies. A broker costs you nothing extra. The carrier pays us, not you.
          </p>
          <p className="text-gray-700">
            I compare plans from multiple insurers and know which ones actually write policies for disabled beneficiaries in your zip code. One call can save you real money.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold text-blue-900 mb-2">
            Need help finding a Medigap plan on disability?
          </p>
          <p className="text-gray-700 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            for a free quote. No obligation, no pressure.
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Related resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G - Benefits and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/when-does-medigap-open-enrollment-start"
                className="text-blue-600 hover:underline"
              >
                When Does Medigap Open Enrollment Start?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-part-b-premium"
                className="text-blue-600 hover:underline"
              >
                2026 Medicare Part B Premium Explained
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}