import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "My Medicare Supplement Rate Just Jumped — Why, and What Can I Do? | Free Rate Comparison | MedicareYourself",
  description:
    "My Medicare Supplement rate just jumped — here's why premiums increase and how switching carriers can cut your cost. Free comparison from Anthony Orner.",
  openGraph: {
    title:
      "My Medicare Supplement Rate Just Jumped — Why, and What Can I Do? | Free Rate Comparison | MedicareYourself",
    description:
      "My Medicare Supplement rate just jumped — here's why premiums increase and how switching carriers can cut your cost. Free comparison from Anthony Orner.",
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
      name: "Medicare Supplement Rate Jumped — Why and What to Do",
      item: "https://medicareyourself.com/services/medicare-supplement-rate-jumped-why-and-what-can-i-do",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Your Medicare Supplement Rate Just Jumped — Here's Why and What You Can Do About It",
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
  datePublished: "2025-06-20",
  dateModified: "2025-06-20",
};

const faqs = [
  {
    question: "Why did my Medicare Supplement premium increase so much?",
    answer:
      "Most large jumps happen when your carrier files a block rate increase due to higher claims within your pool of insureds. When that stacks on top of normal age-based increases, 10-18% hikes in a single year are common. Medical inflation and your pricing method (attained-age vs. issue-age) also play a role.",
  },
  {
    question:
      "Can I switch Medicare Supplement carriers without a waiting period?",
    answer:
      "Yes. If you can pass medical underwriting, you can switch to a new Medigap carrier at any time during the year. There's no enrollment period for Medigap switches. Your new policy starts with no gap in coverage as long as you time the effective date correctly.",
  },
  {
    question:
      "Will I lose coverage if I switch to a different Medigap company?",
    answer:
      "No. Plan G is Plan G regardless of the carrier. Benefits are standardized by the federal government. The only differences between companies are the premium, the rate increase history, and customer service.",
  },
  {
    question: "Do I need to wait until October to change my Medigap plan?",
    answer:
      "No. The Annual Enrollment Period (October 15 - December 7) applies to Medicare Advantage and Part D plans, not Medigap. You can apply to switch your Medicare Supplement plan any month of the year.",
  },
];

export default function MedicareSupplementRateJumped() {
  return (
    <>
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
          Medicare Supplement Rate Jumped — Why and What to Do
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Your Medicare Supplement Rate Just Jumped — Here&apos;s Why and What
          You Can Do About It
        </h1>

        <Image
          src="/images/medicare-supplement-rate-jumped-why-and-what-can-i-do_photo.webp"
          alt="my medicare supplement rate just jumped — why and what can I do"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          My Medicare Supplement rate just jumped is something I hear every week
          on the phone, usually from someone who opened their bill and felt a
          knot in their stomach. You didn&apos;t do anything wrong. Your health
          didn&apos;t change. But your premium climbed 15%, maybe more.
        </p>
        <p className="text-lg mb-6">
          Here&apos;s what&apos;s actually happening and what you can do about
          it right now.
        </p>

        <PhoneCTA />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Three reasons your Medigap premium increased this year
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Block rate increases.</strong> When claims rise within your
              carrier&apos;s pool of policyholders, everyone in that block
              shares the cost. This has nothing to do with your personal health.
              Several major carriers filed 15-20% increases effective mid-2025.
            </li>
            <li>
              <strong>Age-based increases.</strong> If your plan uses
              attained-age pricing, your premium goes up a small amount each
              birthday. Alone, these are modest. Stacked on a block increase,
              they sting.
            </li>
            <li>
              <strong>Medical inflation.</strong> Overall healthcare costs keep
              climbing. Carriers adjust rates to keep up, and some years hit
              harder than others.
            </li>
          </ul>
          <p>
            When two or three of these stack in the same year, 10-18% jumps
            happen. That&apos;s not unusual. It&apos;s just poorly explained by
            most carriers.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How attained-age vs. issue-age pricing changes your bill
          </h2>
          <p className="mb-3">
            Most Medigap policies in the U.S. use attained-age pricing. Your
            premium increases as you get older, period. Issue-age plans lock your
            rate to the age you bought in. They cost more upfront but tend to
            rise more slowly over time.
          </p>
          <p>
            A third type, community-rated, charges everyone the same regardless
            of age. Availability depends on your state and carrier. I can tell
            you exactly which type your current plan uses and whether a switch
            makes sense for your situation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            The company matters more than the letter plan
          </h2>
          <p className="mb-3">
            Plan G from Carrier A has identical benefits to Plan G from Carrier
            B. Benefits are standardized by the federal government. What&apos;s
            not identical is how each company prices over time.
          </p>
          <p>
            Some carriers price aggressively low to attract new members, then
            raise rates steeply once the block ages. Others start slightly
            higher but hold steadier. I track rate increase histories across
            dozens of carriers so you don&apos;t have to.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            When switching carriers saves money without losing coverage
          </h2>
          <p className="mb-3">
            You can switch Medigap carriers any month of the year. There&apos;s
            no open enrollment period for this. You don&apos;t need to wait
            until October.
          </p>
          <p className="mb-3">
            The catch: most switches require medical underwriting. If you can
            answer health questions favorably, you may qualify for a lower rate
            with a different carrier while keeping the exact same Plan G or Plan
            N benefits.
          </p>
          <p>
            Some people save $40-$80/month by switching. That&apos;s $500-$960 a
            year back in your pocket for the same coverage.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            What about guaranteed issue rights?
          </h2>
          <p className="mb-3">
            Federal guaranteed issue rights let you switch without health
            questions in specific situations: your carrier goes bankrupt, your
            plan leaves your area, or you lost certain types of prior coverage.
            Outside those triggers, underwriting applies.
          </p>
          <p>
            Rules vary by state. Some states offer additional protections. I
            check your specific situation before recommending anything.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            How to get a free rate comparison before your next payment
          </h2>
          <p className="mb-3">
            Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-600 font-semibold hover:underline"
            >
              855-559-1700
            </a>
            . Tell me your current carrier, plan letter, zip code, and date of
            birth. I&apos;ll run a comparison across every carrier available in
            your area and show you exactly what you&apos;d save.
          </p>
          <p>
            No charge. No obligation. If your current plan is still the best
            deal, I&apos;ll tell you that too.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-8 text-center">
          <p className="text-xl font-bold mb-2">
            Stop overpaying for the same coverage.
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            for a free rate comparison, or{" "}
            <Link
              href="/get-a-free-quote"
              className="underline font-semibold text-white"
            >
              get a free quote online
            </Link>
            .
          </p>
          <p className="text-sm opacity-90">
            Anthony Orner, Licensed Medicare Broker
          </p>
        </div>

        <section className="mt-12">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/medicare-supplement-plan-g"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G: What It Covers and Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan N: Lower Premium, Small Tradeoffs
              </Link>
            </li>
            <li>
              <Link
                href="/services/medigap-open-enrollment"
                className="text-blue-600 hover:underline"
              >
                Medigap Open Enrollment: When You Have Guaranteed Issue Rights
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs. Medicare Advantage: Which Fits You?
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}