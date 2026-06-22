import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "How Much Is Plan G in NJ? | Free Rate Comparison by Age | MedicareYourself",
  description:
    "How much is Plan G in NJ? Compare 2026 Medigap rates by age and zip from every major carrier — Anthony Orner finds your lowest price. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/how-much-is-plan-g-in-nj" },
  openGraph: {
    title:
      "How Much Is Plan G in NJ? | Free Rate Comparison by Age | MedicareYourself",
    description:
      "How much is Plan G in NJ? See actual 2026 monthly premiums by age from every major carrier. Anthony Orner finds your lowest rate — free quote today.",
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
      name: "How Much Is Plan G in NJ",
      item: "https://medicareyourself.com/services/how-much-is-plan-g-in-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Is Plan G in NJ? Real Rates From Every Major Carrier",
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
    question: "How much is Medicare Plan G in New Jersey?",
    answer:
      "Plan G premiums in New Jersey typically range from around $120 to $300+ per month depending on your age, gender, zip code, and the carrier. Two people the same age in different parts of the state can see very different rates. The best way to find your exact price is to compare quotes from all available carriers.",
  },
  {
    question: "How much will Medicare Plan G be in 2026?",
    answer:
      "No one can predict exact 2026 rates yet, but Plan G premiums generally increase 3-8% per year depending on the carrier. Some carriers have a track record of smaller annual increases. Choosing a carrier with historically stable rate increases can save you thousands over time.",
  },
  {
    question: "Can I switch Plan G carriers in New Jersey?",
    answer:
      "Yes, you can apply to switch Plan G carriers at any time. However, outside of your Medigap Open Enrollment Period, you'll need to pass medical underwriting. That's why picking the right carrier from the start matters so much.",
  },
  {
    question:
      "What does Plan G cover that I'd otherwise pay out of pocket?",
    answer:
      "Plan G covers the Part A deductible ($1,676 per benefit period in 2026), skilled nursing facility coinsurance ($209.50/day for days 21-100), Part B excess charges, and foreign travel emergency care. Your only remaining cost is the annual Part B deductible of $283.",
  },
,
  {
    question: "Why do Plan G prices vary so much between carriers in New Jersey?",
    answer:
      "Although every Plan G policy covers the exact same benefits by federal law, each insurance company sets its own premium. Carriers use different pricing methods, underwriting standards, and rate increase histories, which is why identical coverage can cost very different amounts. Comparing every available carrier is the only way to find your lowest price.",
  },
  {
    question: "Does Plan G in NJ cover the Part B deductible?",
    answer:
      "No. Plan G covers nearly every gap in Original Medicare except the annual Part B deductible, which you pay once per year before coverage kicks in. After that, Plan G picks up the remaining Part B coinsurance and excess charges.",
  },
  {
    question: "Is Plan G worth it in New Jersey compared to other Medigap plans?",
    answer:
      "For most New Jersey beneficiaries, Plan G offers the most comprehensive coverage available to those newly eligible for Medicare. It eliminates nearly all out-of-pocket exposure outside the Part B deductible, making budgeting predictable. Whether it's the right fit depends on your health, budget, and how often you use care.",
  }
,
  {
    question: "Why is the same Plan G policy priced differently by each NJ carrier?",
    answer:
      "Medicare requires every Plan G policy to cover the exact same federally standardized benefits, so coverage does not differ between companies. According to Medicare.gov, the price is the only real difference between Plan G policies sold by different insurers. Carriers use different pricing structures, underwriting, and rate-increase histories, which is why shopping every carrier matters.",
  },
  {
    question: "Does my NJ zip code affect my Plan G premium?",
    answer:
      "Yes. Medicare.gov notes that Medigap premiums vary depending on the insurance company, the plan, and where you live. In New Jersey, two people the same age can receive different Plan G quotes simply because they live in different rating areas. That's why a zip-specific quote is the only reliable way to know your true price.",
  },
  {
    question: "How do I get the lowest Plan G rate in New Jersey?",
    answer:
      "The most reliable way is to compare quotes from every major carrier licensed in New Jersey for your exact age, gender, and zip code. Since benefits are identical by federal law, the lowest-priced carrier with a stable rate-increase history is typically the best value. Call Anthony Orner at 855-559-1700 for a free side-by-side comparison.",
  }
];

export default function HowMuchIsPlanGInNJ() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">How Much Is Plan G in NJ</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How Much Is Plan G in NJ? Real Rates From Every Major Carrier
      </h1>

      <Image
        src="/images/how-much-is-plan-g-in-nj.webp"
        alt="how much is plan g in nj"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg text-gray-700 mb-2">
        How much is Plan G in NJ? It depends on your age, zip code, gender, and which carrier you pick. In 2025, I'm seeing monthly premiums range from roughly $120 to over $300 across New Jersey. That spread is exactly why comparing every carrier matters before you lock in.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Plan G monthly premiums by age in New Jersey (2025)
        </h2>
        <p className="text-gray-700 mb-2">
          New Jersey uses attained-age rating for most Medigap policies. That means your premium starts based on your current age and rises as you get older. Here's a general range of what I'm quoting right now:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
          <li>Age 65: ~$120 to $190/month</li>
          <li>Age 70: ~$145 to $230/month</li>
          <li>Age 75: ~$175 to $280/month</li>
          <li>Age 80+: ~$210 to $330/month</li>
        </ul>
        <p className="text-gray-700">
          These are ballpark figures. Your actual rate depends on the carrier and your specific details. Rates vary by carrier, so always compare.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Why two 67-year-olds pay different rates for the same plan
        </h2>
        <p className="text-gray-700 mb-2">
          Every Plan G policy covers the exact same benefits regardless of carrier. The coverage is standardized by Medicare. The only difference is the premium each company charges.
        </p>
        <p className="text-gray-700">
          Carriers price based on their claims experience, the size of their enrollment pool, and their rate increase history. One company might start low and raise rates aggressively. Another might start slightly higher but hold steady for years. That long-term pattern matters more than the first-year price.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Carriers with the lowest Plan G rates right now
        </h2>
        <p className="text-gray-700 mb-2">
          I work with every major carrier selling Plan G in New Jersey. The lowest-priced option shifts depending on your county and age bracket. What's cheapest in Bergen County might not be cheapest in Ocean County.
        </p>
        <p className="text-gray-700">
          I look at both the current rate and the carrier's history of annual increases. A policy that's $15/month cheaper today but jumps 10% a year isn't a deal. I'll show you both numbers side by side.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What Plan G actually leaves you paying
        </h2>
        <p className="text-gray-700 mb-2">
          Plan G covers everything except the Part B deductible, which is $283/year in 2026. That's it. No copays at the doctor. No coinsurance after surgery. No network restrictions.
        </p>
        <p className="text-gray-700">
          It also picks up the Part A hospital deductible ($1,676 per benefit period), skilled nursing coinsurance at $209.50/day for days 21-100, and Part B excess charges. You see any doctor in the country who accepts Medicare.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Switching from an Advantage plan? Read this first
        </h2>
        <p className="text-gray-700 mb-2">
          I hear from people every week who left their Medigap plan for a $0-premium Advantage plan and regret it. The copays add up. Referrals slow things down. And getting back to Plan G means passing medical underwriting if you're outside your open enrollment window.
        </p>
        <p className="text-gray-700">
          If you're still in your 6-month Medigap Open Enrollment Period (starts the month you turn 65 and enroll in Part B), you get guaranteed acceptance with no health questions. Don't let that window close without comparing your options.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Get your exact Plan G rate in under 2 minutes
        </h2>
        <p className="text-gray-700">
          I'll pull quotes from every carrier in your zip code, show you the rate history for each one, and tell you which I'd pick if it were my money. No cost, no pressure. Just the numbers you need to make a smart decision.
        </p>
      </section>

      <section className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-2">
          Call{" "}
          <a
            href="tel:8555591700"
            className="underline text-blue-700 hover:text-blue-900"
          >
            855-559-1700
          </a>{" "}
          for your free Plan G rate comparison
        </p>
        <p className="text-gray-700 mb-4">
          Anthony Orner, Licensed Medicare Broker in New Jersey
        </p>
        <Link
          href="/quote"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      <FAQSection faqs={faqs} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Related resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-supplement/new-jersey"
              className="text-blue-600 hover:underline"
            >
              Medicare Supplement Plans in NJ
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Plan G vs. Plan N: Which Is Better?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-supplement/new-jersey/vs-medicare-advantage"
              className="text-blue-600 hover:underline"
            >
              Medicare Advantage vs. Medigap
            </Link>
          </li>
        </ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — How Medigap Premiums Are Priced</a> and the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also review the <a href="https://www.nj.gov/dobi/division_insurance/managedcare/medsupp.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance Medicare Supplement guide</a> or contact <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased Medicare counseling in New Jersey, contact the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free unbiased counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">New Jersey's State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased help from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> or the <a href="https://www.nj.gov/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For NJ-specific help, visit the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">For New Jersey-specific guidance, see the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey resource: <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/medsupp.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking &amp; Insurance — Medicare Supplement Information</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey shoppers can also review the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
    </main>
  );
}