import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "why did my medicare supplement rate change? | Free Rate Review | MedicareYourself",
  description:
    "Why did my Medicare supplement rate change? Learn about attained-age pricing, carrier loss ratios, and NJ rate filings. Free rate review from Anthony Orner.",
  openGraph: {
    title:
      "why did my medicare supplement rate change? | Free Rate Review | MedicareYourself",
    description:
      "Why did my Medicare supplement rate change? Learn about attained-age pricing, carrier loss ratios, and NJ rate filings. Free rate review from Anthony Orner.",
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
      name: "Why Did My Medicare Supplement Rate Change?",
      item: "https://medicareyourself.com/services/why-did-my-medicare-supplement-rate-change",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Did My Medicare Supplement Rate Change? The Three Factors Behind Every Increase",
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
  datePublished: "2025-06-25",
  dateModified: "2025-06-25",
  mainEntityOfPage:
    "https://medicareyourself.com/services/why-did-my-medicare-supplement-rate-change",
};

const faqs = [
  {
    question: "Can my Medicare supplement rate change every year?",
    answer:
      "Yes. Most carriers file rate adjustments annually with your state's Department of Insurance. Increases can come from age-based adjustments, medical inflation, or rising claims within your insured pool. Some years you may see no increase; other years, double-digit jumps are possible.",
  },
  {
    question:
      "Do I have to wait for open enrollment to switch Medicare supplement plans?",
    answer:
      "No. You can apply for a new Medicare supplement plan at any time of year. However, outside of your initial Medigap Open Enrollment Period or a federal guaranteed issue situation, you may need to answer health questions and could be declined based on your medical history.",
  },
  {
    question:
      "Is there a difference between a rate increase and a premium increase?",
    answer:
      "They mean the same thing for Medicare supplement plans. When a carrier files a rate increase with the state, it directly raises your monthly premium. The terms are used interchangeably.",
  },
  {
    question: "Will switching carriers reset my rate increases?",
    answer:
      "Switching can give you a lower starting premium, but your new carrier will also file rate increases over time. The key is comparing long-term rate increase histories across carriers, not just the starting price. A broker can help you see which companies have been most stable.",
  },
];

export default function WhyDidMyMedicareSupplementRateChange() {
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
          Why Did My Medicare Supplement Rate Change?
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Did My Medicare Supplement Rate Change? The Three Factors Behind
        Every Increase
      </h1>

      <Image
        src="/images/why-did-my-medicare-supplement-rate-change.webp"
        alt="why did my medicare supplement rate change"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg text-gray-700 mb-2">
        Why did my Medicare supplement rate change? That question hits my phone
        almost daily, especially after carriers send out annual increase notices
        in spring and summer. The short answer: three forces drive every
        Medigap premium increase, and understanding them puts you back in
        control.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I
        review rate increases with clients every week. Let me walk you through
        exactly what's happening and what you can do about it.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Attained-age vs. issue-age vs. community-rated pricing explained
        </h2>
        <p className="text-gray-700 mb-2">
          Every Medigap plan uses one of three pricing methods. This single
          factor explains the biggest chunk of most rate increases.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Attained-age rated:</strong> Your premium rises
            automatically as you get older. Most plans in NJ use this method.
            You may see a bump every birthday on top of any general increase.
          </li>
          <li>
            <strong>Issue-age rated:</strong> Your premium is based on the age
            you were when you bought the plan. You won't get age-based
            increases, but you can still get increases from inflation and claims.
          </li>
          <li>
            <strong>Community-rated:</strong> Everyone pays the same premium
            regardless of age. These tend to start higher but grow more slowly
            over time.
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          If you have an attained-age plan and you're 78, you're paying
          significantly more than the rate you locked in at 65. That's by
          design, not a mistake.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Medical inflation and carrier loss ratios drive annual adjustments
        </h2>
        <p className="text-gray-700 mb-2">
          Even issue-age and community-rated plans increase over time. The
          reason: medical costs go up every year. When a carrier pays out more
          in claims than expected, that's reflected in their loss ratio.
        </p>
        <p className="text-gray-700">
          A high loss ratio means the carrier is spending more on claims
          relative to premiums collected. To stay solvent, they file for a rate
          increase with the state. This has nothing to do with your personal
          health. It's based on the overall claims experience of everyone in
          your policy block.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Block rate increases can stack on top of age increases
        </h2>
        <p className="text-gray-700 mb-2">
          Here's what catches people off guard. When age increases and block
          rate increases hit at the same time, you can see 10-18% jumps in a
          single year. Some carriers announced 15-18% increases on Plan G and
          Plan N in 2025.
        </p>
        <p className="text-gray-700">
          The real risk isn't what you pay at 65. It's what you're paying at
          75 or 82. That's why I tell every client to look at a carrier's
          rate increase history, not just the starting premium.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          NJ rate filing data: which carriers raised rates the most in 2025
        </h2>
        <p className="text-gray-700 mb-2">
          New Jersey requires carriers to file rate changes with the Department
          of Banking and Insurance. In 2025, several major carriers filed
          double-digit increases on popular plans. Some filed under 5%.
        </p>
        <p className="text-gray-700">
          I track these filings so you don't have to. When you call for a free
          rate review, I'll show you exactly what your carrier filed and how it
          compares to alternatives available in your zip code. Rates vary by
          carrier, so a comparison is the fastest way to see if you're
          overpaying.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Steps to take within 30 days of receiving a rate increase notice
        </h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>
            Don't panic and don't cancel your current plan before securing a
            new one.
          </li>
          <li>
            Call a broker (like me) for a free rate comparison. I'll pull
            current premiums from every carrier available in NJ.
          </li>
          <li>
            If a better rate exists, apply for the new plan first. Only cancel
            the old plan after you're approved and the new coverage starts.
          </li>
          <li>
            Keep in mind: outside your initial Medigap Open Enrollment Period,
            you may need to answer health questions. Approval isn't guaranteed.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          You can switch Medicare supplement carriers any time of year
        </h2>
        <p className="text-gray-700 mb-2">
          Unlike Medicare Advantage, there's no annual enrollment window for
          Medigap. You can apply for a new plan in January, July, or any month
          in between. The catch is medical underwriting.
        </p>
        <p className="text-gray-700">
          If you're healthy, switching can save you $40-$80 per month or more.
          That adds up fast. I run these comparisons at no cost, and there's no
          obligation. Call 855-559-1700 and let's see what's available.
        </p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-10 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Get a free rate review - no obligation
        </p>
        <p className="text-gray-700 mb-4">
          Call Anthony Orner at{" "}
          <a
            href="tel:8555591700"
            className="text-blue-700 font-bold hover:underline"
          >
            855-559-1700
          </a>{" "}
          or{" "}
          <Link
            href="/contact"
            className="text-blue-700 font-bold hover:underline"
          >
            Get a Free Quote
          </Link>{" "}
          online.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/services/medicare-plan-g-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey - Compare Rates Free
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-plan-n-vs-plan-g"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan N vs. Plan G - Which Saves More?
            </Link>
          </li>
          <li>
            <Link
              href="/services/medigap-open-enrollment-period"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment Period - What You Need to Know
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-supplement-plans-nj"
              className="text-blue-700 hover:underline"
            >
              Medicare Supplement Plans in NJ - Full Carrier Comparison
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}