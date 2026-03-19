import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare insurance agents in cherry hill new jersey | Free Broker Help | MedicareYourself",
  description:
    "Medicare insurance agents in Cherry Hill New Jersey — Anthony Orner compares Supplement and Advantage plans across top carriers. Free, no-obligation consultation.",
  openGraph: {
    title:
      "medicare insurance agents in cherry hill new jersey | Free Broker Help | MedicareYourself",
    description:
      "Medicare insurance agents in Cherry Hill New Jersey — Anthony Orner compares Supplement and Advantage plans across top carriers. Free, no-obligation consultation.",
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
      item: "https://medicareyourself.com/medicare",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Insurance Agents in Cherry Hill, New Jersey",
      item: "https://medicareyourself.com/services/medicare-insurance-agents-in-cherry-hill-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker Support",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/medicare-insurance-agents-in-cherry-hill-new-jersey",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed Medicare agent helps you compare plans, understand costs, and enroll correctly - all at no charge to you. Brokers are paid by the insurance carriers, so the service is free whether you choose a Supplement or Advantage plan.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. Medicare Supplement Plan G is popular because it covers nearly all out-of-pocket costs after the $257 annual Part B deductible. Medicare Advantage plans may work better if you want bundled dental, vision, and drug coverage. A broker can compare both options based on your doctors and medications.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for someone who is independent (not tied to one carrier), licensed in New Jersey, and willing to explain plan differences without pressure. Ask how many carriers they represent. An independent broker can show you options from multiple companies so you get the best fit.",
  },
  {
    question: "What is the best insurance company for people on Medicare?",
    answer:
      "Top Medicare carriers in New Jersey include Aetna, Cigna, Mutual of Omaha, and United American for Supplement plans, plus Aetna, Humana, and UnitedHealthcare for Advantage plans. Rates and networks vary, so comparing quotes from several carriers is the smartest move.",
  },
];

export default function MedicareAgentsCherryHillNJ() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Insurance Agents in Cherry Hill, New Jersey
        </span>
      </nav>

      <h1 className="text-3xl font-bold mb-4">
        Medicare Insurance Agents in Cherry Hill, New Jersey: Local Broker
        Support
      </h1>

      <Image
        src="/images/medicare-insurance-agents-in-cherry-hill-new-jersey.webp"
        alt="Medicare insurance agents in Cherry Hill New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare insurance agents in Cherry Hill, New Jersey can make the
        difference between overpaying for coverage and finding a plan that
        actually matches your needs. I'm Anthony Orner, a licensed independent
        Medicare broker serving Cherry Hill and Camden County residents.
      </p>
      <p className="text-lg mb-6">
        My consultations are always free, and I work with multiple carriers so
        you see real options - not just one company's pitch.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How a Cherry Hill Medicare broker differs from a captive agent
        </h2>
        <p className="mb-2">
          A captive agent represents one insurance company. They can only show
          you that company's plans, even if a competitor offers better rates or
          benefits. An independent broker like me represents multiple carriers
          across both Supplement and Advantage categories.
        </p>
        <p>
          That means I can pull quotes from several companies side by side and
          recommend the plan that fits your budget and health situation. You
          never pay extra for using a broker - carriers pay the commission
          directly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Supplement and Advantage plans available in Camden County
        </h2>
        <p className="mb-2">
          Cherry Hill sits in Camden County, which has strong carrier
          availability for both plan types. Here's a quick breakdown:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Medicare Supplement (Medigap):</strong> Plan G is the most
            popular standardized plan. You pay the $257 Part B deductible per
            year, and Plan G covers the rest. Plan N offers lower premiums with
            small copays at office visits.
          </li>
          <li>
            <strong>Medicare Advantage (Part C):</strong> Several HMO and PPO
            options are available in 08002, 08003, and surrounding zip codes.
            Many include prescription drug coverage, dental, and vision at $0
            premium beyond your $185/month Part B.
          </li>
        </ul>
        <p>
          Rates vary by carrier, age, and tobacco use. I'll pull current quotes
          so you can compare actual numbers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When to contact a broker before your 65th birthday
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts six months, starting the
          month you turn 65 and are enrolled in Part B. During this window, no
          carrier can turn you down or charge you more due to health conditions.
        </p>
        <p className="mb-2">
          I recommend reaching out at least six months before your Part B start
          date. This lets us apply for your Supplement plan early, locking in
          your rate before potential premium increases take effect. The sooner
          you lock in, the better your rate.
        </p>
        <p>Miss that window? You may face medical underwriting, which can mean higher premiums or denial.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What to expect during a free plan comparison
        </h2>
        <p className="mb-2">
          When you call or schedule a meeting, here's what happens:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>I ask about your current doctors, prescriptions, and budget</li>
          <li>
            I pull quotes from multiple carriers for Supplement and/or Advantage
            plans
          </li>
          <li>
            We review the numbers together - no jargon, no pressure
          </li>
          <li>
            If you want to enroll, I handle the paperwork. If not, no hard
            feelings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key enrollment dates Cherry Hill residents should know
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Turning 65:</strong> Medigap Open Enrollment runs six months
            from your Part B effective date. Guaranteed issue - no health
            questions.
          </li>
          <li>
            <strong>Annual Enrollment Period:</strong> October 15 through
            December 7 each year. This is when you can switch Medicare Advantage
            or Part D drug plans.
          </li>
          <li>
            <strong>Losing employer coverage:</strong> You may qualify for a
            Special Enrollment Period and federal guaranteed issue rights for
            Medigap plans.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Get a free plan comparison from Anthony Orner
        </h2>
        <p className="mb-2">
          I live and work in New Jersey. I know which carriers price well in
          Camden County and which ones don't. Whether you prefer to meet in
          person, over the phone, or by video call, I adjust to what works for
          you.
        </p>
        <p>
          Call me today at{" "}
          <a href="tel:8555591700" className="text-blue-700 font-semibold">
            855-559-1700
          </a>{" "}
          or schedule a time that fits your calendar. There's zero obligation,
          and the service costs you nothing.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
        <p className="text-xl font-bold mb-2">
          Ready to compare Medicare plans in Cherry Hill?
        </p>
        <p className="mb-4">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline font-semibold text-white"
          >
            855-559-1700
          </a>{" "}
          for a free, no-pressure consultation.
        </p>
        <Link
          href="/quote"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare/supplement/plan-g-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Plan G in New Jersey: Costs and Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/advantage/plans-in-new-jersey"
              className="text-blue-700 hover:underline"
            >
              Medicare Advantage Plans Available in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/enrollment/turning-65"
              className="text-blue-700 hover:underline"
            >
              Turning 65? Your Medicare Enrollment Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/medicare/supplement/medigap-open-enrollment"
              className="text-blue-700 hover:underline"
            >
              Medigap Open Enrollment: What You Need to Know
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}