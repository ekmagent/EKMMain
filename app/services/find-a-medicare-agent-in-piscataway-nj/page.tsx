import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocalServiceSchema from "@/components/LocalServiceSchema";

export const metadata: Metadata = {
  title:
    "find a medicare agent in piscataway nj | Free Broker Help | MedicareYourself",
  description:
    "Find a Medicare agent in Piscataway, NJ who compares rates from every major carrier. Anthony Orner offers free, licensed broker guidance. Call today.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-piscataway-nj" },
  openGraph: {
    title:
      "find a medicare agent in piscataway nj | Free Broker Help | MedicareYourself",
    description:
      "Find a Medicare agent in Piscataway, NJ who compares rates from every major carrier. Anthony Orner offers free, licensed broker guidance. Call today.",
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
      name: "Find a Medicare Agent in Piscataway, NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-piscataway-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Find a Medicare Agent in Piscataway, NJ for Unbiased Plan Comparisons",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Nothing. Licensed Medicare brokers are paid by insurance carriers, not by you. Whether you enroll in a Medigap plan, Medicare Advantage, or Part D, the service is free. Your premium stays the same whether you use a broker or go directly to the carrier.",
  },
  {
    question: "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "A captive agent works for one insurance company and can only sell that company's plans. An independent broker like Anthony Orner is licensed with multiple carriers and can compare rates across all of them. You get unbiased recommendations instead of a sales pitch for one product.",
  },
  {
    question: "How do I pick the right Medicare agent?",
    answer:
      "Look for an active NJ license, appointments with multiple carriers, and willingness to explain options without pressure. Ask if they help with claims issues after enrollment. A good broker stays in your corner year after year, not just during sign-up.",
  },
  {
    question: "How do I speak to a live person about Medicare?",
    answer:
      "You can call 1-800-MEDICARE (1-800-633-4227) for general questions, but they won't compare plans for you. For plan comparisons and enrollment help specific to Piscataway, call a local broker at 855-559-1700.",
  },
];

export default function FindMedicareAgentPiscatawayNJ() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <LocalServiceSchema citySlug="piscataway" />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-900">
          Find a Medicare Agent in Piscataway, NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find a Medicare Agent in Piscataway, NJ for Unbiased Plan Comparisons
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-piscataway-nj.webp"
          alt="find a medicare agent in piscataway nj"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Find a Medicare agent in Piscataway, NJ who actually compares rates across every major carrier instead of pushing one company's plan. I'm Anthony Orner, a licensed independent broker serving Middlesex County. My consultations are always free, and I work for you, not for any single insurer.
        </p>

        <PhoneCTA />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why an independent broker beats calling each carrier yourself
          </h2>
          <p className="mb-2">
            Calling three or four insurance companies means repeating your health history, medications, and doctors every time. Each rep only knows their own products. An independent broker pulls rates from all of them in one conversation.
          </p>
          <p>
            I hold appointments with over a dozen carriers in New Jersey. One call gives you a side-by-side comparison. Same premiums you'd get going direct, zero markup.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Top Medicare Supplement carriers serving Middlesex County
          </h2>
          <p className="mb-2">
            Piscataway residents have strong access to Medigap plans from carriers actively writing policies in the 08854 zip code:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Aetna</li>
            <li>Cigna</li>
            <li>Mutual of Omaha</li>
            <li>United American</li>
            <li>Anthem (via Empire BCBS network)</li>
          </ul>
          <p>
            Rates vary by carrier, age, and tobacco status. I quote all of them so you see the real spread.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Turning 65 in Piscataway? Here is your open enrollment timeline
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. It lasts six months. During this window, carriers must accept you regardless of health history. No medical questions, no denials.
          </p>
          <p className="mb-2">
            Miss it, and carriers can underwrite you or decline coverage entirely. That's why I recommend starting the process about six months before your Part B effective date.
          </p>
          <p>
            For 2026, the Part B premium is $202.90/month, the Part B deductible is $283/year, and the Part A deductible is $1,676 per benefit period. These costs are exactly what a good Medigap plan covers.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Local healthcare realities that shape your plan choice
          </h2>
          <p className="mb-2">
            Piscataway sits between Robert Wood Johnson University Hospital in New Brunswick and JFK Medical Center in Edison. With Original Medicare plus a Supplement, you can walk into either facility without network restrictions.
          </p>
          <p>
            If a major hospital system drops a carrier's network (something NJ residents have seen firsthand), Medigap holders aren't affected. Your coverage follows you, not a network directory.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            What happens after you enroll
          </h2>
          <p className="mb-2">
            I don't disappear after enrollment. If you get an unexpected bill, need to switch plans, or have questions about a claim, you call the same number. I review your plan annually to make sure it still fits your needs and budget.
          </p>
          <p>
            Real broker support means you have someone in your corner when the paperwork gets confusing.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free phone or video consultation
          </h2>
          <p className="mb-2">
            Pick whichever format works for you. Phone, Zoom, or in-person if you're nearby. I'll pull quotes, walk through your options, and answer every question. No cost, no obligation, no pressure.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or click below to get started.
          </p>
        </section>

        <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">
            Ready to compare Medicare plans in Piscataway?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:855-559-1700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold text-white"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <section className="mt-10">
          <FAQSection faqs={faqs} />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan G vs. Plan N: Which Saves You More?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in Medicare: Deadlines That Matter
              </Link>
            </li>
            <li>
              <Link
                href="/services/find-a-medicare-agent-in-new-brunswick-nj"
                className="text-blue-600 hover:underline"
              >
                Find a Medicare Agent in New Brunswick, NJ
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                Part B Late Enrollment Penalty: What It Costs You
              </Link>
            </li>
                      <li>
              <Link
                href="/services/find-an-nj-medicare-broker-near-you"
                className="text-blue-600 hover:underline"
              >
                Find An NJ Medicare Broker Near You
              </Link>
            </li>
            <li>
              <Link
                href="/services/free-medicare-broker-new-jersey"
                className="text-blue-600 hover:underline"
              >
                Free Medicare Broker New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/independent-medicare-agents-near-me"
                className="text-blue-600 hover:underline"
              >
                Independent Medicare Agents Near Me
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-to-enroll-in-medicare-in-new-jersey"
                className="text-blue-600 hover:underline"
              >
                How To Enroll In Medicare In New Jersey
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medicare.gov Plan Compare</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Talk to Someone at Medicare.gov</a>. For New Jersey-specific counseling, visit the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}