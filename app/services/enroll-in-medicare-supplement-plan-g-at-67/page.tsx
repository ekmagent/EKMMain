import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Enroll in Medicare Supplement Plan G at 67 | Free Rate Quote | MedicareYourself",
  description:
    "Enrolling in Medicare Supplement Plan G at 67? Learn underwriting rules, guaranteed issue rights, and lock in a fair rate. Call 855-559-1700 for a free quote.",
  alternates: { canonical: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-67" },
  openGraph: {
    title:
      "Enroll in Medicare Supplement Plan G at 67 | Free Rate Quote | MedicareYourself",
    description:
      "Enroll in Medicare Supplement Plan G at 67 — learn about guaranteed issue rights, underwriting, and real rates. Anthony Orner walks you through it. Free quote.",
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
      name: "Enroll in Medicare Supplement Plan G at 67",
      item: "https://medicareyourself.com/services/enroll-in-medicare-supplement-plan-g-at-67",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Enroll in Medicare Supplement Plan G at 67: Eligibility, Rates, and Next Steps",
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
    question: "Can I get Plan G at 67 without answering health questions?",
    answer:
      "Only if you have a federal guaranteed issue right, such as losing employer coverage, leaving a Medicare Advantage plan during your first year, or your current carrier going bankrupt. Without one of those triggers, carriers will use medical underwriting at age 67.",
  },
  {
    question: "What is the biggest mistake seniors make when enrolling in Medicare?",
    answer:
      "Waiting too long to apply for a Medigap plan. Your 6-month Medigap Open Enrollment Period starts the month you turn 65 and have Part B. Miss that window and you'll face underwriting, higher premiums, or possible denial when you apply later.",
  },
  {
    question: "Is Plan G the same benefits no matter which company sells it?",
    answer:
      "Yes. Plan G is federally standardized, so the medical benefits are identical across every carrier. The difference is the premium, long-term rate stability, and customer service. That's why carrier selection matters more than most people realize.",
  },
  {
    question: "How much does Plan G cost at 67?",
    answer:
      "Rates vary by carrier, your zip code, gender, and tobacco use. At 67, expect to pay more than someone who enrolled at 65 because most carriers use attained-age pricing. Call 855-559-1700 for a personalized quote.",
  },
];

export default function EnrollInMedicareSupplementPlanGAt67() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Enroll in Medicare Supplement Plan G at 67
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enroll in Medicare Supplement Plan G at 67: Eligibility, Rates, and Next Steps
        </h1>

        <Image
          src="/images/enroll-in-medicare-supplement-plan-g-at-67.webp"
          alt="Enroll in Medicare Supplement Plan G at 67"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Enrolling in Medicare Supplement Plan G at 67 is absolutely possible, but the rules are different than they were at 65. You've missed your Medigap Open Enrollment Period, which means carriers can now ask health questions before they accept you.
        </p>
        <p className="text-lg mb-6">
          That doesn't mean you're out of luck. It just means you need the right approach. I'm Anthony Orner, and I help people in exactly this situation every week.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Are you guaranteed issue for Plan G at age 67?
          </h2>
          <p className="mb-3">
            Your federal Medigap Open Enrollment Period is a one-time, 6-month window that starts the month you turn 65 and have Part B. At 67, that window has closed.
          </p>
          <p className="mb-3">
            However, you may still qualify for guaranteed issue rights if one of these applies:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>You're losing employer or union group health coverage</li>
            <li>You left a Medicare Advantage plan within the first 12 months</li>
            <li>Your Medigap carrier went bankrupt or violated its contract</li>
            <li>You moved out of your plan's service area</li>
          </ul>
          <p>
            If none of those apply, you'll go through medical underwriting. Rules also vary by state, so call to confirm your specific situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What Plan G costs at 67 vs. enrolling earlier
          </h2>
          <p className="mb-3">
            Most carriers use attained-age pricing. That means your premium goes up as you get older. Someone who enrolled Plan G at 65 locked in a lower starting rate. At 67, your starting premium will be higher simply because of your age.
          </p>
          <p>
            But here's what people really miss: the starting premium isn't the whole story. Block rate increases can stack on top of age increases, producing 10-18% jumps in a single year. Picking the right carrier with stable long-term rate behavior matters far more than chasing the cheapest price today.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medical underwriting at 67: what carriers look for
          </h2>
          <p className="mb-3">
            Outside of guaranteed issue, carriers will ask about your health history. Common disqualifiers include recent cancer treatment, insulin-dependent diabetes, COPD requiring oxygen, and certain heart conditions.
          </p>
          <p>
            Managed blood pressure or cholesterol meds? That usually isn't a problem. Every carrier draws its own lines, which is exactly why working with a broker who knows each company's underwriting guidelines saves you from wasting applications and getting unnecessary denials on your record.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Plan G is still worth it at 67
          </h2>
          <p className="mb-3">
            Plan G covers everything Original Medicare doesn't except the Part B deductible ($283/year in 2026). That means no copays for doctor visits, no surprise bills after surgery, and no daily cost for skilled nursing days 21-100 (otherwise $209.50/day).
          </p>
          <p>
            You also keep full freedom to see any doctor in the country who accepts Medicare. No networks. No referrals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Don't forget Part D
          </h2>
          <p>
            Plan G does not include prescription drug coverage. You'll need a standalone Part D plan alongside it. If you delayed Part D past your initial enrollment and didn't have creditable drug coverage, you could face a late enrollment penalty. Let's check that when we talk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to apply for Plan G at 67 with a broker's help
          </h2>
          <p className="mb-3">
            I compare rates across multiple carriers, match your health profile to the companies most likely to approve you, and handle the paperwork. My service costs you nothing extra. Carriers pay me, not you.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Call <strong>855-559-1700</strong> for a free rate comparison</li>
            <li>I'll review your health history and guaranteed issue eligibility</li>
            <li>We pick the carrier with the best long-term rate track record for your situation</li>
            <li>I submit your application and follow up until you're approved</li>
          </ul>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
          <p className="text-xl font-semibold mb-2">
            Ready to see your Plan G rates at 67?
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold text-white"
            >
              get a free quote online
            </Link>
            .
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/compare-and-enroll-in-plan-g-online"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan G: Full Benefits Breakdown
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/turning-65"
                className="text-blue-600 hover:underline"
              >
                Understanding Your Medigap Open Enrollment Period
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs. Medicare Advantage
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Enrollment: Deadlines and Penalties
              </Link>
            </li>
                      <li>
              <Link
                href="/services/how-much-is-plan-g-in-nj"
                className="text-blue-600 hover:underline"
              >
                How Much Is Plan G In NJ
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Supplement Rates By Age Plan G Plan N Plan F Rates
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-g"
                className="text-blue-600 hover:underline"
              >
                Quickest Way To Enroll Into Plan G
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-medicare-supplement-plan-g-at-68"
                className="text-blue-600 hover:underline"
              >
                Enroll In Medicare Supplement Plan G At 68
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-medicare-supplement-plan-g-at-69"
                className="text-blue-600 hover:underline"
              >
                Enroll In Medicare Supplement Plan G At 69
              </Link>
            </li>
            <li>
              <Link
                href="/services/enroll-in-medicare-supplement-plan-g-at-70"
                className="text-blue-600 hover:underline"
              >
                Enroll In Medicare Supplement Plan G At 70
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-plan-medigap-premium-hikes"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plan Medigap Premium Hikes
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Get Ready to Buy Medigap</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Medigap Costs</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need state-level help? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Need help in your state? Contact the <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
      </section>
      </article>
    </>
  );
}