import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Need Help Finding Best and Cheapest Medicare Supplement | Free Quote | MedicareYourself",
  description:
    "Need help finding the best and cheapest Medicare Supplement? Anthony Orner compares every top carrier's rates free — no obligation. Get your quote today.",
  alternates: { canonical: "https://medicareyourself.com/services/best-and-cheapest-medicare-supplement" },
  openGraph: {
    title:
      "Need Help Finding Best and Cheapest Medicare Supplement | Free Quote | MedicareYourself",
    description:
      "Need help finding the best and cheapest Medicare Supplement? Anthony Orner compares every top carrier's rates free — no obligation. Get your quote today.",
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
      item: "https://medicareyourself.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best and Cheapest Medicare Supplement",
      item: "https://medicareyourself.com/services/best-and-cheapest-medicare-supplement",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Need Help Finding the Best and Cheapest Medicare Supplement? Here's How It Works",
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
  datePublished: "2026-03-17",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question:
      "Who provides free advice on the best supplemental Medicare program?",
    answer:
      "An independent Medicare broker like Anthony Orner compares rates from every top carrier at no cost to you. Brokers are paid by the insurance company, not by you, so the advice is free and there's no obligation.",
  },
  {
    question:
      "Is a cheap Medicare Supplement the same coverage as an expensive one?",
    answer:
      "Yes. Medigap plans are standardized by the federal government. A Plan G from one carrier covers the exact same benefits as a Plan G from another. The only differences are price, rate increase history, and customer service.",
  },
  {
    question: "When should I apply for a Medicare Supplement to get the best rate?",
    answer:
      "Your best window is the 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. During this window, carriers must accept you regardless of health conditions and can't charge more for pre-existing conditions.",
  },
  {
    question: "Can I switch Medicare Supplement carriers later if rates go up?",
    answer:
      "You can apply to switch anytime, but outside your Open Enrollment Period, carriers can ask health questions and may deny coverage. That's why picking a carrier with stable long-term rate behavior matters from the start.",
  },
];

export default function BestAndCheapestMedicareSupplement() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        {" > "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>
        {" > "}
        <span className="text-gray-700">Best and Cheapest Medicare Supplement</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Need Help Finding the Best and Cheapest Medicare Supplement? Here's How
        It Works
      </h1>

      <Image
        src="/images/hub_best-and-cheapest-medicare-supplement.webp"
        alt="need help finding best and cheapest medicare supplement"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        Need help finding the best and cheapest Medicare Supplement? You're not alone. Most people turning 65 tell me the same thing: they expected Medicare to be simple, and it wasn't. Between ten lettered Medigap plans and dozens of carriers, finding the right one at the right price feels like a second job.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in NJ. I compare rates from every top carrier so you don't have to. There's no cost and no obligation.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why the cheapest Medicare Supplement isn't always the best value
        </h2>
        <p className="text-gray-700 mb-2">
          The lowest starting premium can become the most expensive plan by year five. Some carriers price aggressively low to attract new enrollees, then hit that group with steep rate increases once the pool ages.
        </p>
        <p className="text-gray-700">
          Rate increases come from two sources: your age (attained-age pricing) and your risk pool's claims experience (block rate increases). When both stack in the same year, 10-18% jumps happen. The "cheapest" plan at 65 can cost significantly more at 75.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          The carrier matters more than the plan letter
        </h2>
        <p className="text-gray-700 mb-2">
          Medigap plans are standardized by the federal government. A Plan G from one company covers exactly the same benefits as a Plan G from another. Same doctors, same hospitals, same coverage.
        </p>
        <p className="text-gray-700">
          What's not the same: premium stability over time. I look at each carrier's rate increase history, financial strength, and how they price their blocks before I recommend anything.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How a broker compares every carrier at once for free
        </h2>
        <p className="text-gray-700 mb-2">
          I'm independent. I don't work for one insurance company. I have access to rates from all the major Medigap carriers in your area and can pull a side-by-side comparison in minutes.
        </p>
        <p className="text-gray-700">
          The carriers pay my commission, not you. Your premium is the same whether you call the carrier directly or go through me. The difference is you see every option instead of just one.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Which Medigap plans consistently offer the lowest premiums in 2025
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Plan G</strong> is the most popular Medigap plan for people newly eligible. It covers everything except the Part B deductible ($283/year in 2026). Premiums vary by carrier, but Plan G consistently offers strong coverage at competitive rates.
          </li>
          <li>
            <strong>Plan N</strong> has lower premiums than Plan G in exchange for small copays ($20 for some office visits, up to $50 for ER visits that don't result in admission).
          </li>
          <li>
            <strong>High-deductible Plan G</strong> offers the lowest monthly premium but requires you to pay a deductible before coverage kicks in. Good fit if you're healthy and want catastrophic protection.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Your enrollment window matters more than you think
        </h2>
        <p className="text-gray-700 mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and are enrolled in Part B. During this window, every carrier must accept you at standard rates regardless of health history.
        </p>
        <p className="text-gray-700">
          Miss it, and carriers can deny you or charge more based on pre-existing conditions. I've talked to people who switched to a Medicare Advantage plan, developed a health condition, and couldn't get back on a Supplement. Don't let that happen to you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get a side-by-side rate comparison in under 2 minutes
        </h2>
        <p className="text-gray-700">
          Call me and I'll pull up every carrier's rate for your zip code, age, and tobacco status while we're on the phone. No forms to fill out. No spam emails. Just real numbers so you can make a clear decision.
        </p>
      </section>

      <section className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="text-xl font-semibold mb-2">
          Ready for your free rate comparison?
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-bold">
            get a free quote online
          </Link>
          .
        </p>
        <p className="text-sm opacity-90">
          No obligation. No pressure. Just answers.
        </p>
      </section>

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
              href="/services/compare-and-enroll-in-plan-g-online"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan G: What It Covers and What It Costs
            </Link>
          </li>
          <li>
            <Link
              href="/services/quickest-way-to-enroll-into-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plan N: Lower Premiums, Small Copays
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement vs. Medicare Advantage: Which Is Right for You?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: Why Timing Matters
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}