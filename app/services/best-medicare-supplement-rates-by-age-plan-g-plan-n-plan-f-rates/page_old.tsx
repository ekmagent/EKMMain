import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "best medicare supplement rates by age (plan g, plan n, & plan f rates) | Free Quote | MedicareYourself",
  description:
    "Best Medicare Supplement rates by age for Plan G, Plan N, and Plan F. See real premium ranges by age bracket and find the lowest rate. Free instant quote.",
  openGraph: {
    title:
      "best medicare supplement rates by age (plan g, plan n, & plan f rates) | Free Quote | MedicareYourself",
    description:
      "Best Medicare Supplement rates by age for Plan G, Plan N, and Plan F. See real premium ranges by age bracket and find the lowest rate. Free instant quote.",
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
      name: "Best Medicare Supplement Rates by Age",
      item: "https://medicareyourself.com/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Best Medicare Supplement Rates by Age: Plan G, Plan N, and Plan F Compared for 2025–2026",
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
  datePublished: "2025-01-15",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "How much cheaper is Plan G than Plan F?",
    answer:
      "Plan G premiums are typically $30 to $60 per month less than Plan F, depending on your age and carrier. The only difference in coverage is the Part B deductible of $257 per year, which Plan F covers and Plan G does not. Most people save more on the lower premium than they spend on that deductible.",
  },
  {
    question:
      "Do Medicare Supplement rates go up every year as I age?",
    answer:
      "It depends on your pricing type. With attained-age pricing (the most common), your premium can increase as you get older. Issue-age pricing bases your rate on the age you bought the policy, and community-rated plans charge the same rate regardless of age. All three types can still see rate increases due to inflation and medical costs.",
  },
  {
    question: "What is the best age to buy a Medigap plan?",
    answer:
      "The best time to buy is during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. During this window, carriers cannot charge you more or deny you based on health conditions. Anthony's practice is to have clients apply up to 6 months before their Part B start date to lock in the lowest rate early.",
  },
  {
    question: "Can I switch Medigap plans later if I find a better rate?",
    answer:
      "Yes, you can apply to switch at any time. However, outside of your initial Open Enrollment or a guaranteed issue situation, the new carrier can ask health questions and potentially deny coverage. That is why locking in the right plan early matters so much.",
  },
];

export default function BestMedicareSupplementRatesByAge() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

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
          Best Medicare Supplement Rates by Age
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4 leading-tight">
        Best Medicare Supplement Rates by Age: Plan G, Plan N, and Plan F
        Compared for 2025–2026
      </h1>

      <Image
        src="/images/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates.webp"
        alt="best medicare supplement rates by age for plan g, plan n, and plan f"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Best Medicare Supplement rates by age vary widely depending on which plan you pick, where you live, and which carrier writes the policy. I am Anthony Orner, a licensed Medicare broker in New Jersey, and I compare these rates daily for people just like you.
      </p>
      <p className="text-lg mb-6">
        Below, I will break down what Plan G, Plan N, and Plan F actually cost at different ages so you can see real numbers, not marketing fluff.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How age affects your Medigap premium each year
        </h2>
        <p className="mb-2">
          Age is one of the biggest factors carriers use to set your monthly premium. A 65-year-old will almost always pay less than a 75-year-old for the exact same plan with the exact same coverage.
        </p>
        <p>
          That is why your Medigap Open Enrollment Period matters so much. It starts the month you turn 65 and are enrolled in Part B. During those 6 months, no carrier can charge you extra or deny you for health reasons.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plan G, Plan N, and Plan F rate ranges at 65, 70, and 75
        </h2>
        <p className="mb-3">
          These are approximate monthly premium ranges I see across multiple carriers. Your actual rate depends on ZIP code, gender, tobacco use, and the specific company.
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Age</th>
                <th className="border p-3 text-left">Plan F</th>
                <th className="border p-3 text-left">Plan G</th>
                <th className="border p-3 text-left">Plan N</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">65</td>
                <td className="border p-3">$150 – $250/mo</td>
                <td className="border p-3">$120 – $210/mo</td>
                <td className="border p-3">$90 – $170/mo</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">70</td>
                <td className="border p-3">$185 – $310/mo</td>
                <td className="border p-3">$155 – $270/mo</td>
                <td className="border p-3">$115 – $210/mo</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">75</td>
                <td className="border p-3">$230 – $400/mo</td>
                <td className="border p-3">$195 – $350/mo</td>
                <td className="border p-3">$140 – $265/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600">
          Plan F is only available to people who became eligible for Medicare before January 1, 2020.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Attained-age vs. issue-age vs. community-rated pricing explained
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Attained-age:</strong> Your premium is based on your current age. It goes up as you get older. This is the most common pricing method.
          </li>
          <li>
            <strong>Issue-age:</strong> Your premium is based on the age you were when you bought the policy. It will not increase just because you had a birthday, though it can still rise from inflation.
          </li>
          <li>
            <strong>Community-rated:</strong> Everyone pays the same base rate regardless of age. These policies may cost more at 65 but less at 80 compared to attained-age plans.
          </li>
        </ul>
        <p className="mt-2">
          Not every carrier offers all three types. I will tell you which pricing model each option uses when we compare quotes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why Plan G is the most popular choice right now
        </h2>
        <p className="mb-2">
          Plan G covers everything Plan F covers except the annual Part B deductible of $257. The premium savings are typically $30 to $60 per month. Do that math: you save $360 to $720 a year in premiums and only pay $257 out of pocket.
        </p>
        <p>
          That is why most of my clients choose Plan G over Plan F when both are available.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plan N: the budget-friendly option worth considering
        </h2>
        <p className="mb-2">
          Plan N has the lowest premiums of the three. The trade-off is small copays: up to $20 for some office visits and up to $50 for emergency room visits that do not result in admission. You also pay the $257 Part B deductible.
        </p>
        <p>
          If you are healthy and do not visit the doctor often, Plan N can save you serious money.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to lock in the lowest rate for your age
        </h2>
        <p className="mb-2">
          My practice is to have clients apply for their Medigap plan up to 6 months before their Part B start date. This locks in the rate early and protects you from premium increases before your coverage begins.
        </p>
        <p>
          The sooner you lock in, the better your rate. Waiting even a year can mean higher premiums for the rest of your life. Call me at <strong>855-559-1700</strong> and I will pull quotes from multiple carriers in minutes.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready to see your actual rates?
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
            href="/quote"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>{" "}
          online. No obligation, no pressure.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g-cost"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G Cost: What You Will Actually Pay
            </Link>
          </li>
          <li>
            <Link
              href="/services/plan-g-vs-plan-n"
              className="text-blue-700 hover:underline"
            >
              Plan G vs. Plan N: Which Medigap Plan Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plans"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans: Complete 2025–2026 Guide
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: When and How to Sign Up
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}