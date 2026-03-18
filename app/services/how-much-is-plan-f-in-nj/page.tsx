import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "How Much Is Plan F in NJ | Free Rate Lookup by Age | MedicareYourself",
  description:
    "How much is Plan F in NJ? See 2025 premiums by age and learn why costs keep rising. Anthony Orner can show you if Plan G saves more. Free quote.",
  openGraph: {
    title:
      "How Much Is Plan F in NJ | Free Rate Lookup by Age | MedicareYourself",
    description:
      "How much is Plan F in NJ? See 2025 premiums by age and learn why costs keep rising. Anthony Orner can show you if Plan G saves more. Free quote.",
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
      item: "https://www.medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How Much Is Plan F in NJ",
      item: "https://www.medicareyourself.com/services/how-much-is-plan-f-in-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Is Plan F in NJ? Current Rates and Why They Keep Rising",
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
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Is Plan F the best Medicare supplement for seniors?",
    answer:
      "Plan F covers the most benefits of any Medigap plan, including the Part B deductible. But 'best' depends on total cost. Many NJ seniors pay less overall with Plan G because the premium savings exceed the $283 annual deductible. A side-by-side comparison with your specific age and ZIP code tells the real story.",
  },
  {
    question: "How much is Medicare Plan F monthly?",
    answer:
      "In New Jersey, Plan F premiums typically range from around $150 to $350+ per month depending on your age, gender, tobacco use, and carrier. Rates vary significantly between insurance companies for the exact same coverage. That's why comparing multiple carriers is essential.",
  },
  {
    question: "Why is Plan F so expensive?",
    answer:
      "Plan F has been closed to new enrollees since January 1, 2020. No new, younger members are entering the pool. As the existing members age, claims increase and premiums rise faster than other Medigap plans. This trend will continue indefinitely.",
  },
  {
    question: "Can I switch from Plan F to Plan G in New Jersey?",
    answer:
      "Yes. In most cases, switching from Plan F to Plan G requires medical underwriting in NJ. However, since Plan G is lesser coverage, many carriers approve applications more readily. Call to discuss your health situation and we'll tell you which carriers are the best fit.",
  },
];

export default function HowMuchIsPlanFInNJ() {
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
          <Link href="/services" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">How Much Is Plan F in NJ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How Much Is Plan F in NJ? Current Rates and Why They Keep Rising
        </h1>

        <Image
          src="/images/hub_how-much-is-plan-f-in-nj.webp"
          alt="how much is plan F in NJ"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          How much is Plan F in NJ? Most New Jersey residents on Plan F pay
          between $150 and $350+ per month, depending on age, carrier, and ZIP
          code. The exact number matters because Plan F premiums are climbing
          faster than any other Medigap plan - and there's a concrete reason
          why.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I'm Anthony Orner, a licensed Medicare broker based in New Jersey.
          I'll break down what you're actually paying, why, and whether
          switching makes financial sense.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Plan F monthly premiums by age in New Jersey (2025)
          </h2>
          <p className="text-gray-700 mb-3">
            New Jersey uses attained-age rating for most Medigap plans. That
            means your premium increases as you get older, on top of any annual
            rate hikes from the carrier. Here's the general range I see across
            multiple insurance companies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
            <li>Age 65-69: roughly $150 - $220/month</li>
            <li>Age 70-74: roughly $190 - $270/month</li>
            <li>Age 75-79: roughly $230 - $320/month</li>
            <li>Age 80+: $280 - $370+/month</li>
          </ul>
          <p className="text-gray-700">
            These are ballpark figures. Your actual rate depends on which
            carrier, your county, gender, and tobacco status. The NJ Department
            of Human Services publishes rate comparison charts - I use those
            plus real-time carrier quotes when running comparisons.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Plan F costs more than Plan G every year
          </h2>
          <p className="text-gray-700 mb-3">
            Since January 1, 2020, Plan F has been closed to anyone newly
            eligible for Medicare. No one younger is joining the risk pool. The
            people on Plan F are all getting older at the same time, filing more
            claims, and driving premiums up.
          </p>
          <p className="text-gray-700">
            Plan G still accepts new 65-year-olds every day. That fresh flow of
            younger, healthier enrollees keeps the pool balanced and premiums
            more stable. This isn't speculation - it's basic insurance math, and
            it plays out in the rate filings every year.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Who still qualifies for Plan F and is it worth keeping
          </h2>
          <p className="text-gray-700 mb-3">
            You can only have Plan F if you became eligible for Medicare before
            January 1, 2020. If you already have it, you can keep it. But
            "can keep" and "should keep" are different questions.
          </p>
          <p className="text-gray-700">
            The only extra benefit Plan F offers over Plan G is covering the
            annual Part B deductible - that's $283 in 2026. If your Plan F
            premium is $40+ more per month than Plan G from the same or
            comparable carrier, you're paying $480+ a year to avoid a $283
            bill. That gap typically widens every year.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to check if switching to Plan G saves you money
          </h2>
          <p className="text-gray-700 mb-3">
            Switching from Plan F to Plan G in New Jersey usually requires
            answering health questions. But since you're moving to less
            coverage (not more), approval rates tend to be favorable for most
            people in reasonable health.
          </p>
          <p className="text-gray-700">
            I run a side-by-side comparison for you at no cost. I'll pull your
            current Plan F rate, compare it to Plan G options from multiple
            carriers, and factor in that $283 deductible so you see real
            savings, not hypothetical ones.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            NJ-specific details that affect your rate
          </h2>
          <p className="text-gray-700 mb-3">
            Where you live in New Jersey changes your premium. Carriers serving
            North Jersey - near Hackensack Meridian and RWJBarnabas facilities
            - price differently than those covering South Jersey, where Cooper
            and AtlantiCare dominate. Not every carrier offers competitive rates
            in every county.
          </p>
          <p className="text-gray-700">
            I work across the entire state and know which carriers price well
            in your specific area. That's the kind of detail that saves you
            real money.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What people on Plan F wish someone told them sooner
          </h2>
          <p className="text-gray-700 mb-3">
            A lot of folks I talk to feel stuck. They picked Plan F years ago
            because it covered everything, and now the premium keeps climbing
            but they're afraid to switch. Some worry they'll lose coverage or
            get denied.
          </p>
          <p className="text-gray-700">
            Here's what I tell them: Plan G covers exactly the same things as
            Plan F except for one $283 deductible. Same doctors. Same
            hospitals. No network restrictions. The only thing that changes is
            your monthly bill - usually for the better.
          </p>
        </section>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Want to see exactly what Plan F costs at your age and ZIP code?
          </p>
          <p className="text-gray-700 mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="text-blue-700 font-bold hover:underline"
            >
              855-559-1700
            </a>{" "}
            for a free rate comparison. No obligation, no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Get a Free Quote
          </Link>
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
                href="/services/medicare-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Plan G in New Jersey - Rates and Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/services/plan-f-vs-plan-g"
                className="text-blue-700 hover:underline"
              >
                Plan F vs Plan G - Which One Actually Costs Less?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plans in NJ - Full Guide
              </Link>
            </li>
            <li>
              <Link
                href="/services/when-to-enroll-in-medigap"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medigap - Timing and Open Enrollment
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}