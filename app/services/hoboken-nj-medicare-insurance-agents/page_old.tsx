import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Hoboken NJ Medicare Insurance Agents | Free Consultation | MedicareYourself",
  description:
    "Hoboken NJ Medicare insurance agents — Anthony Orner is a licensed broker comparing Supplement and Advantage plans in Hudson County. Free consultation.",
  openGraph: {
    title:
      "Hoboken NJ Medicare Insurance Agents | Free Consultation | MedicareYourself",
    description:
      "Hoboken NJ Medicare insurance agents — Anthony Orner is a licensed broker comparing Supplement and Advantage plans in Hudson County. Free consultation.",
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
      name: "Hoboken NJ Medicare Insurance Agents",
      item: "https://medicareyourself.com/services/hoboken-nj-medicare-insurance-agents",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hoboken NJ Medicare Insurance Agents: Your Local Independent Broker",
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
  datePublished: "2025-01-01",
  dateModified: "2025-07-01",
};

const faqs = [
  {
    question: "Should I use an insurance agent for Medicare?",
    answer:
      "Yes. A licensed independent broker compares plans from multiple carriers at no cost to you. You get the same premiums you'd find on your own, but with expert guidance on which plan actually fits your doctors, prescriptions, and budget.",
  },
  {
    question: "What is the best Medicare plan in New Jersey?",
    answer:
      "There's no single best plan. Medicare Supplement Plan G is the most popular Medigap option in NJ, while several Medicare Advantage plans offer strong networks in Hudson County. The right plan depends on your healthcare needs, preferred doctors, and monthly budget.",
  },
  {
    question: "Do insurance agents get commission for Medicare?",
    answer:
      "Yes, brokers are paid a commission by the insurance carrier. You don't pay anything extra. Whether you enroll directly with a carrier or through a broker, your premium is exactly the same.",
  },
  {
    question: "When is the best time to enroll in a Medigap plan in Hoboken?",
    answer:
      "Your Medigap Open Enrollment Period starts the month you turn 65 and are enrolled in Part B. During this 6-month window, carriers must accept you regardless of health history. Anthony's practice is to have clients apply up to 6 months before their Part B start date to lock in the best rate early.",
  },
];

export default function HobokenNJMedicareInsuranceAgents() {
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
          <span className="text-gray-700">
            Hoboken NJ Medicare Insurance Agents
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Hoboken NJ Medicare Insurance Agents: Your Local Independent Broker
        </h1>

        <Image
          src="/images/hoboken-nj-medicare-insurance-agents.webp"
          alt="Hoboken NJ Medicare insurance agents"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg mb-4">
          Hoboken NJ Medicare insurance agents aren't all the same. Some work for one carrier. I work for you. As an independent licensed broker serving Hudson County, I compare Supplement and Advantage plans from multiple carriers so you see real options side by side.
        </p>
        <p className="mb-6">
          My name is Anthony Orner. I help people in Hoboken, Jersey City, Weehawken, and Union City find the right Medicare coverage without overpaying or getting locked into a plan that doesn't fit.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Hoboken residents need an independent Medicare broker
          </h2>
          <p className="mb-3">
            A captive agent sells one company's products. An independent broker like me shows you plans from every major carrier in New Jersey. Same premiums either way - you never pay more for broker help.
          </p>
          <p>
            That matters in a place like Hoboken, where many residents split time between local Hudson County providers and NYC-area specialists. You need a plan that works across state lines and provider networks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare Supplement vs. Advantage plans in 07030
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Supplement (Medigap):</strong> You keep Original Medicare and add a policy that covers your out-of-pocket costs. See any doctor who accepts Medicare. Plan G is the most popular option - it covers everything except the $283/year Part B deductible.
            </li>
            <li>
              <strong>Medicare Advantage:</strong> A private plan replaces Original Medicare. Often includes dental, vision, and drug coverage with lower premiums but network restrictions. Strong options exist in Hudson County through Hackensack Meridian Health and CarePoint Health networks.
            </li>
          </ul>
          <p className="mt-3">
            Neither is universally better. The right choice depends on your doctors, medications, and how you use healthcare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Carrier options and rate comparisons for Hoboken seniors
          </h2>
          <p className="mb-3">
            NJ has over a dozen carriers offering Medigap plans. Rates for the same coverage can vary by $80+/month. I run a side-by-side comparison so you can see exactly what each carrier charges for Plan G, Plan N, or whichever option fits.
          </p>
          <p>
            Rates vary by carrier, age, and tobacco use. I'll show you the actual numbers - no guessing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Lock in your Medigap rate early
          </h2>
          <p className="mb-3">
            Your Medigap Open Enrollment Period lasts 6 months, starting the month you turn 65 and have Part B. During this window, no health questions and no higher premiums.
          </p>
          <p>
            My practice is to have clients apply up to 6 months before their Part B start date. This locks in today's rate and protects you from increases before coverage begins. The sooner you apply, the better your rate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Understanding Medicare's parts and plans
          </h2>
          <p className="mb-3">
            People mix up parts and plans all the time. Part A (hospital) and Part B (medical) are Original Medicare. Part C is Medicare Advantage. Part D is drug coverage. Then Medigap plans use letters - G, N, etc. It's confusing by design.
          </p>
          <p>
            I'll walk you through what you actually need in plain English. No jargon, no pressure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free Medicare plan review in Hoboken
          </h2>
          <p className="mb-3">
            Whether you're turning 65, retiring, or just want to check if your current plan still makes sense, I'll review your situation for free. We'll look at your doctors, prescriptions, and budget, then find what actually fits.
          </p>
          <p>
            I serve Hoboken and all of Hudson County. Call or schedule a time that works for you.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Hoboken-area Medicare broker
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
              href="/contact"
              className="text-blue-700 font-bold hover:underline"
            >
              Get a Free Quote
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            No cost. No obligation. No pressure.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/jersey-city-medicare-insurance-agents"
                className="text-blue-700 hover:underline"
              >
                Jersey City Medicare Insurance Agents
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-supplement-plan-g-nj"
                className="text-blue-700 hover:underline"
              >
                Medicare Supplement Plan G in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/medicare-advantage-vs-medigap"
                className="text-blue-700 hover:underline"
              >
                Medicare Advantage vs. Medigap: How to Choose
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-guides/when-to-enroll-in-medicare"
                className="text-blue-700 hover:underline"
              >
                When to Enroll in Medicare
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}