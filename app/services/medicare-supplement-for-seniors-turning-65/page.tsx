import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Medicare Supplement for Seniors Turning 65 | Lock in Low Rates | MedicareYourself",
  description:
    "Medicare Supplement for seniors turning 65 — lock in guaranteed-issue rates during open enrollment. Anthony Orner compares top carriers. Free quote in minutes.",
  openGraph: {
    title:
      "Medicare Supplement for Seniors Turning 65 | Lock in Low Rates | MedicareYourself",
    description:
      "Medicare Supplement for seniors turning 65 — lock in guaranteed-issue rates during open enrollment. Anthony Orner compares top carriers. Free quote in minutes.",
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
      item: "https://www.medicareyourself.com/hub",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Supplement for Seniors Turning 65",
      item: "https://www.medicareyourself.com/services/medicare-supplement-for-seniors-turning-65",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement for Seniors Turning 65: Your One Best Window for Low Rates",
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
    question: "How much does a Medicare Supplement cost at age 65?",
    answer:
      "In 2026, Medicare Supplement premiums for a 65-year-old vary by plan and carrier. Plan G typically ranges from $120 to $220 per month, while Plan N runs about $90 to $170 per month. Your exact rate depends on your ZIP code, gender, tobacco use, and which insurance company you choose. The best time to lock in the lowest rate is during your 6-month Medigap Open Enrollment Period starting when you turn 65 and have Part B.",
  },
  {
    question:
      "Can I be denied a Medicare Supplement plan when I turn 65?",
    answer:
      "No. Federal law gives you a one-time, 6-month Medigap Open Enrollment Period starting the month you turn 65 and have Part B. During this window, insurance companies cannot deny you coverage, charge you more for health conditions, or impose waiting periods for pre-existing conditions. If you live in New Jersey, you also have year-round guaranteed-issue rights for Medigap plans.",
  },
  {
    question:
      "What is the difference between Plan G and Plan N for someone turning 65?",
    answer:
      "Plan G covers all out-of-pocket costs after you pay the annual Part B deductible ($257 in 2026). Plan N also covers most costs but requires small copays - up to $20 for some doctor visits and up to $50 for emergency room visits that do not result in admission. Plan N premiums are typically $30 to $50 per month less than Plan G, so the trade-off is lower premiums for occasional copays.",
  },
  {
    question:
      "When should I start shopping for a Medicare Supplement before turning 65?",
    answer:
      "Start comparing plans about 3 months before your 65th birthday. Most carriers let you apply during this window so your coverage can begin on the first day of your birthday month. Waiting until after your 6-month open enrollment period ends can mean higher premiums or even denial of coverage in most states.",
  },
];

export default function MedicareSupplementSeniorsTurning65() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">
          Medicare Supplement for Seniors Turning 65
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Medicare Supplement for Seniors Turning 65: Your One Best Window for Low
        Rates
      </h1>

      <Image
        src="/images/hub_medicare-supplement-for-seniors-turning-65.webp"
        alt="Medicare supplement for seniors turning 65"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        If you are shopping for a Medicare Supplement for seniors turning 65, you
        have one narrow window to get the best deal. Federal law gives you six
        months of guaranteed-issue rights starting when your Part B kicks in at
        age 65.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Miss this window, and carriers can charge you more or turn you down
        entirely. I help people avoid that mistake every week.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Why your 6-month open enrollment window is worth protecting
        </h2>
        <p className="text-gray-700 mb-3">
          Under federal law, your Medigap Open Enrollment Period starts the
          first month you have Part B and are 65 or older. It lasts exactly six
          months. This is not the same as the annual Medicare Open Enrollment
          that runs October 15 through December 7.
        </p>
        <p className="text-gray-700 mb-3">
          During these six months, no insurance company can refuse to sell you
          any Medigap policy it offers. They cannot charge extra for diabetes,
          heart disease, or any other pre-existing condition. They also cannot
          make you wait for coverage to start.
        </p>
        <p className="text-gray-700">
          This is a one-time right. It does not repeat every year.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Plan G vs Plan N for new enrollees at 65
        </h2>
        <p className="text-gray-700 mb-4">
          Most of my clients turning 65 narrow their choice down to two plans.
          Here is how they compare in 2026:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Feature
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Plan G
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Plan N
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Part B deductible ($257)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  You pay it
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  You pay it
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Doctor visit copays
                </td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">
                  Up to $20
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  ER copay (no admission)
                </td>
                <td className="border border-gray-300 px-4 py-2">$0</td>
                <td className="border border-gray-300 px-4 py-2">
                  Up to $50
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  Part B excess charges
                </td>
                <td className="border border-gray-300 px-4 py-2">Covered</td>
                <td className="border border-gray-300 px-4 py-2">
                  Not covered
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Typical monthly premium at 65
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  $120 - $220
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  $90 - $170
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700">
          Plan G gives you the most predictable costs. Plan N saves you $30 to
          $50 per month if you do not mind occasional copays. Both are strong
          choices at 65.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          How attained-age pricing affects your premium every year
        </h2>
        <p className="text-gray-700 mb-3">
          Most Medigap carriers in the United States use attained-age pricing.
          That means your premium goes up as you get older, not just because of
          inflation or medical cost increases, but simply because you had a
          birthday.
        </p>
        <p className="text-gray-700 mb-3">
          This is exactly why enrolling at 65 matters so much. You lock in the
          lowest starting rate for your age. Waiting until 67 or 68 means you
          start at a higher base rate and still face annual increases from there.
        </p>
        <p className="text-gray-700">
          Some carriers use issue-age pricing, where your rate is based on the
          age you first bought the policy. I can help you compare both types.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          Step-by-step enrollment timeline before your 65th birthday
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>3 months before you turn 65:</strong> Sign up for Medicare
            Part A and Part B through Social Security. Start comparing Medigap
            plans and carriers.
          </li>
          <li>
            <strong>1-2 months before:</strong> Apply for the Medigap plan you
            want. Most carriers accept applications early so coverage begins on
            your birthday month.
          </li>
          <li>
            <strong>Your birthday month:</strong> Your Medigap Open Enrollment
            Period officially starts. Part B premium in 2026 is $185 per month.
          </li>
          <li>
            <strong>6 months after Part B starts:</strong> Your guaranteed-issue
            window closes. After this, carriers can medically underwrite you.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          New Jersey residents get extra protection
        </h2>
        <p className="text-gray-700 mb-3">
          If you live in NJ, you have a significant advantage. New Jersey is one
          of a handful of states that guarantee year-round open enrollment for
          Medigap plans. Carriers cannot deny you or charge more for health
          conditions at any time, not just during the initial six-month window.
        </p>
        <p className="text-gray-700">
          That said, applying at 65 still gets you the lowest attained-age rate.
          The NJ protection is a safety net, not a reason to delay.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          What your Medicare Supplement covers alongside Original Medicare
        </h2>
        <p className="text-gray-700 mb-3">
          Original Medicare leaves gaps. Part A has a $1,676 deductible per
          hospital benefit period in 2026. Part B covers only 80% of approved
          outpatient services after the $257 deductible.
        </p>
        <p className="text-gray-700">
          A Medigap plan fills those gaps. Plan G, for example, covers the Part
          A deductible, Part B coinsurance, skilled nursing facility copays,
          hospice care coinsurance, and even foreign travel emergencies. You
          still pay the $257 Part B deductible yourself, but after that, your
          out-of-pocket cost drops to essentially zero.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Ready to lock in your rate before the window closes?
        </p>
        <p className="text-blue-800 mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="font-bold underline text-blue-900"
          >
            855-559-1700
          </a>{" "}
          to speak with Anthony Orner, licensed Medicare broker. Or{" "}
          <Link href="/quote" className="font-bold underline text-blue-900">
            get a free quote online
          </Link>{" "}
          in minutes.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Related resources
        </h2>
        <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-brokers-in-my-area"
                className="text-blue-700 hover:underline"
              >
                Find a Medicare Broker in Your Area
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-700 hover:underline"
              >
                Best and Cheapest Medicare Supplement Plans
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-700 hover:underline"
              >
                How to Enroll in Medicare in New Jersey
              </Link>
            </li>
          </ul>
        </section>
    </main>
  );
}