import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare advise in new jersey | Free Expert Guidance | MedicareYourself",
  description:
    "Medicare advise in New Jersey from licensed broker Anthony Orner. Get unbiased guidance on Medigap, Advantage, and Part D plans. Free consultation available.",
  openGraph: {
    title:
      "medicare advise in new jersey | Free Expert Guidance | MedicareYourself",
    description:
      "Medicare advise in New Jersey from licensed broker Anthony Orner. Get unbiased guidance on Medigap, Advantage, and Part D plans. Free consultation available.",
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
      name: "Medicare Advice in New Jersey",
      item: "https://medicareyourself.com/services/medicare-advise-in-new-jersey",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Medicare Advice in New Jersey from a Licensed Independent Broker",
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
  datePublished: "2025-07-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "What is the New Jersey Medicare advisory?",
    answer:
      "New Jersey does not have a single official 'Medicare advisory' agency, but the state offers the SHIP (State Health Insurance Assistance Program) for free Medicare counseling. Working with a licensed independent broker like Anthony Orner gives you personalized plan comparisons across multiple carriers at no cost to you.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There is no single best plan for everyone. The right choice depends on your doctors, prescriptions, budget, and how often you travel. Medicare Supplement Plan G is popular for those who want predictable costs, while Medicare Advantage plans can work well if you prefer lower premiums and are comfortable with network restrictions. A licensed broker can compare your specific options.",
  },
  {
    question: "How much does it cost to get Medicare advice in New Jersey?",
    answer:
      "Working with an independent Medicare broker like Anthony Orner costs you nothing. Brokers are paid by the insurance carriers, not by you. Your premiums are the same whether you enroll directly or through a broker.",
  },
  {
    question:
      "When should I start looking into Medicare if I am turning 65 in NJ?",
    answer:
      "Start at least 6 months before your 65th birthday. For Medigap plans, Anthony's practice is to have clients apply up to 6 months before their Part B start date to lock in the best rate. Your Medigap Open Enrollment Period begins the month you turn 65 and are enrolled in Part B, lasting 6 months with guaranteed issue rights.",
  },
];

export default function MedicareAdviseInNewJersey() {
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
        <span className="text-gray-700">Medicare Advice in New Jersey</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Advice in New Jersey from a Licensed Independent Broker
      </h1>

      <Image
        src="/images/medicare-advise-in-new-jersey.webp"
        alt="Medicare advice in New Jersey"
        width={800}
        height={400}
        className="rounded-lg mb-6 w-full"
      />

      <p className="text-lg mb-2">
        Medicare advice in New Jersey should come from someone who works for you,
        not for one insurance company. I'm Anthony Orner, a licensed independent
        broker who compares plans across every major carrier in the state so you
        get an honest recommendation.
      </p>
      <p className="text-lg mb-6">
        My consultations are free. You pay the same premium whether you enroll
        through me or directly with a carrier.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare questions NJ residents ask at 65
        </h2>
        <p className="mb-2">
          Most people I sit down with have the same handful of concerns. Here are
          the big ones:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            Do I still need to sign up for Part B if I have employer coverage?
          </li>
          <li>
            What is the Part B premium? In 2026, the standard amount is
            $185/month.
          </li>
          <li>
            Will I face a penalty if I enroll late? Yes - 10% added to your Part
            B premium for every 12 months you delayed without qualifying
            coverage.
          </li>
          <li>How do I pick a Part D drug plan that covers my medications?</li>
        </ul>
        <p>These are real financial questions. You deserve real answers.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Medigap vs. Medicare Advantage: which path fits your situation
        </h2>
        <p className="mb-2">
          This is the biggest fork in the road. A Medigap (Medicare Supplement)
          plan pairs with Original Medicare and covers most of the gaps - like
          the $1,676 Part A deductible and Part B coinsurance. You can see any
          doctor who accepts Medicare nationwide.
        </p>
        <p className="mb-2">
          Medicare Advantage bundles everything into one plan, often with $0 or
          low premiums and extra perks like dental and vision. The trade-off is
          network restrictions and prior authorizations.
        </p>
        <p>
          Neither option is automatically better. It depends on your health, your
          doctors, and your budget. I lay out both paths side by side so you can
          choose with confidence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why timing matters for Medigap enrollment
        </h2>
        <p className="mb-2">
          Your Medigap Open Enrollment Period lasts 6 months, starting the month
          you turn 65 and are enrolled in Part B. During this window, carriers
          must accept you regardless of health history. No medical questions. No
          higher premiums.
        </p>
        <p>
          My practice is to have clients apply for their Medigap plan up to 6
          months before their Part B start date. This locks in your rate early
          and protects you from premium increases before coverage kicks in. The
          sooner you lock in, the better your rate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony Orner helps you avoid costly enrollment mistakes
        </h2>
        <p className="mb-2">
          I am licensed with every major carrier in New Jersey. That means I am
          not pushing one company's product. I compare rates and benefits across
          the board, then show you what actually fits.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            I verify your enrollment timeline so you don't trigger late penalties
          </li>
          <li>I check whether your doctors accept Original Medicare or specific Advantage networks</li>
          <li>I review your prescriptions against Part D formularies</li>
          <li>
            I explain New Jersey-specific programs like PAAD and Senior Gold that
            can reduce your costs
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          New Jersey programs that can lower your costs
        </h2>
        <p className="mb-2">
          NJ offers PAAD (Pharmaceutical Assistance to the Aged and Disabled)
          and Senior Gold, two state programs that help eligible residents pay
          for prescriptions. Income limits apply, and I can help you check
          whether you qualify.
        </p>
        <p>
          These programs work alongside Medicare, not instead of it. Many people
          don't know they exist.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Request free Medicare advice - no obligation, no pressure
        </h2>
        <p className="mb-2">
          Whether you are turning 65 next month or already on Medicare and
          wondering if you picked the right plan, I am here to help. Call me
          directly or fill out the form below to schedule a free consultation.
        </p>
        <p>
          There is no sales pitch. I walk you through your options, answer your
          questions, and let you decide.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-xl font-semibold mb-2">
          Talk to Anthony Orner today
        </p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:855-559-1700" className="underline font-bold">
            855-559-1700
          </a>{" "}
          for a free, no-obligation Medicare consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
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
              href="/services/medigap-plans-nj"
              className="text-blue-600 hover:underline"
            >
              Medigap Plans in New Jersey - Compare Your Options
            </Link>
          </li>
          <li>
            <Link
              href="/services/medicare-advantage-nj"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/guides/medicare-part-d-nj"
              className="text-blue-600 hover:underline"
            >
              How to Choose a Part D Plan in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/guides/turning-65-medicare"
              className="text-blue-600 hover:underline"
            >
              Turning 65? Your Complete Medicare Enrollment Checklist
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}