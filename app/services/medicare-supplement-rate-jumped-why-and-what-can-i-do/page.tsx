import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "My Medicare Supplement Rate Just Jumped — Why, and What Can I Do? | Lower Your Premium Today | MedicareYourself",
  description:
    "Medicare Supplement rate just jumped? Learn why premiums increase and how switching carriers can lower your cost. Anthony Orner runs free comparisons — call now.",
  openGraph: {
    title:
      "My Medicare Supplement Rate Just Jumped — Why, and What Can I Do? | Lower Your Premium Today | MedicareYourself",
    description:
      "Medicare Supplement rate just jumped? Learn why premiums increase and how switching carriers can lower your cost. Anthony Orner runs free comparisons — call now.",
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
      name: "Medicare Supplement Rate Jumped — Why and What to Do",
      item: "https://www.medicareyourself.com/services/medicare-supplement-rate-jumped-why-and-what-can-i-do",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Your Medicare Supplement Rate Just Jumped — Here's Why and What You Can Do About It",
  description:
    "Medicare Supplement rate just jumped? Learn why premiums increase and how switching carriers can lower your cost.",
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
  datePublished: "2025-06-15",
  dateModified: "2025-06-15",
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/medicare-supplement-rate-jumped-why-and-what-can-i-do",
};

const faqs = [
  {
    question: "Why did my AARP Medicare Supplement premium go up?",
    answer:
      "Several large carriers have announced rate increases of 15% to 20% on popular plans like Plan G and Plan N in mid-2025. These hikes reflect rising medical costs and higher claims payouts. Your specific increase depends on your carrier's pricing model, your age, and your state.",
  },
  {
    question: "What if I can't afford a Medicare Supplement plan?",
    answer:
      "You have options. You can switch to a lower-cost carrier offering the same standardized plan, move from Plan G to Plan N to reduce your premium, or explore Medicare Advantage plans. In New Jersey, you have year-round guaranteed issue rights, so you can switch Medigap carriers any time without medical underwriting.",
  },
  {
    question:
      "Do I need to wait until open enrollment to change my Medicare Supplement?",
    answer:
      "No. Medicare Supplement plans are not tied to the Annual Enrollment Period (Oct 15 - Dec 7). You can apply to switch carriers at any time. In NJ, guaranteed issue protections let you move to a new Medigap carrier year-round without health questions.",
  },
  {
    question: "Will I lose coverage if I switch Medicare Supplement carriers?",
    answer:
      "All Medigap plans are standardized by the federal government. A Plan G from one carrier covers exactly the same benefits as a Plan G from another. The only difference is the premium and the company name on the card. You lose nothing by switching.",
  },
];

export default function MedicareSupplementRateJumpedPage() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/hub" className="hover:underline">
            Medicare Guides
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-700">
            Medicare Supplement Rate Jumped — Why and What to Do
          </span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Medicare Supplement Rate Just Jumped — Here's Why and What You
          Can Do About It
        </h1>

        <Image
          src="/images/hub_medicare-supplement-rate-jumped-why-and-what-can-i-do.webp"
          alt="Medicare supplement rate just jumped - why and what can I do"
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full"
        />

        <p className="text-lg text-gray-700 mb-2">
          If your Medicare Supplement rate just jumped 15% or more, you are not
          imagining things. Several major carriers raised Medigap premiums
          between 15% and 20% in mid-2025, hitting Plan G and Plan N
          policyholders especially hard.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The good news: you do not have to accept it. I am Anthony Orner, a
          licensed Medicare broker in New Jersey, and I help people cut their
          Medigap costs every single week.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Three reasons your Medigap premium increased this year
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Medical inflation:</strong> Hospital stays, outpatient
              procedures, and prescription costs all rose in 2024-2025. Carriers
              pass those higher claims costs directly to you.
            </li>
            <li>
              <strong>Aging policyholder pool:</strong> If your carrier has an
              older block of members filing more claims, everyone in that block
              pays more. This is called claims experience rating.
            </li>
            <li>
              <strong>Carrier pricing strategy:</strong> Some companies enter the
              market with low introductory rates, then raise them aggressively
              after a few years. It is a common pattern.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How attained-age vs issue-age pricing changes your bill
          </h2>
          <p className="text-gray-700 mb-2">
            Most Medigap carriers use <strong>attained-age</strong> pricing.
            Your premium goes up automatically as you get older, on top of any
            rate increases the carrier files. Every birthday costs you more.
          </p>
          <p className="text-gray-700">
            A few carriers use <strong>issue-age</strong> pricing. Your rate is
            based on the age you were when you bought the policy, so birthdays
            alone do not trigger increases. You still face general rate hikes
            from medical inflation, but the climb is slower over time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            When switching carriers saves money without losing coverage
          </h2>
          <p className="text-gray-700 mb-2">
            All Medigap plans are standardized by the federal government. A Plan
            G is a Plan G, no matter the carrier. The benefits are identical.
            The only variable is the premium.
          </p>
          <p className="text-gray-700">
            If your current carrier raised rates by 18% and another carrier
            offers the same Plan G for $40 or $60 less per month, switching
            saves you $480 to $720 a year. Same exact coverage, smaller bill.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            New Jersey gives you year-round guaranteed issue rights
          </h2>
          <p className="text-gray-700 mb-2">
            Here is the best part for NJ residents. New Jersey law requires
            carriers to offer Medigap policies with guaranteed issue
            year-round. You do not need to wait for open enrollment. You do not
            need to answer health questions.
          </p>
          <p className="text-gray-700">
            That means you can switch carriers any month of the year, even if
            you have pre-existing conditions. Most states do not offer this
            protection, so if you live in NJ, use it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Consider Plan N if you want an even lower premium
          </h2>
          <p className="text-gray-700 mb-2">
            Plan N works like Plan G but with two small differences: you pay up
            to $20 for some office visits, and you cover any Part B excess
            charges. In exchange, Plan N premiums often run $30 to $50 less per
            month than Plan G.
          </p>
          <p className="text-gray-700">
            Most doctors in New Jersey accept Medicare assignment, so excess
            charges rarely apply. For many people, Plan N is the smarter value
            play.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How to get a free rate comparison before your next payment
          </h2>
          <p className="text-gray-700 mb-2">
            I compare rates across multiple carriers every day. Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-600 font-semibold hover:underline"
            >
              855-559-1700
            </a>{" "}
            and I will pull current Plan G and Plan N rates for your zip code
            and age. Takes about 10 minutes.
          </p>
          <p className="text-gray-700">
            There is no cost and no obligation. If your current rate is already
            competitive, I will tell you. If you can save money, I will show
            you exactly how much.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <h2 className="text-2xl font-bold mb-3">
            Stop overpaying for the same coverage
          </h2>
          <p className="text-lg mb-4">
            Call Anthony Orner for a free, no-pressure Medigap rate comparison.
          </p>
          <a
            href="tel:8555591700"
            className="text-3xl font-bold hover:underline block mb-4"
          >
            855-559-1700
          </a>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Related resources
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/medicare-plan-g-vs-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medicare Plan G vs Plan N - Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plans-nj"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans in New Jersey
              </Link>
            </li>
            <li>
              <Link
                href="/services/when-can-i-change-my-medicare-supplement-plan"
                className="text-blue-600 hover:underline"
              >
                When Can I Change My Medicare Supplement Plan?
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-plan-g-cost"
                className="text-blue-600 hover:underline"
              >
                How Much Does Medicare Plan G Cost?
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}