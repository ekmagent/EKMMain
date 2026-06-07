import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare supplement for seniors turning 65 | Free Quote in Minutes | MedicareYourself",
  description:
    "Medicare supplement for seniors turning 65 — lock in guaranteed-issue rates during your 6-month open enrollment window. Anthony Orner compares top carriers.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-supplement-for-seniors-turning-65" },
  openGraph: {
    title:
      "medicare supplement for seniors turning 65 | Free Quote in Minutes | MedicareYourself",
    description:
      "Medicare supplement for seniors turning 65 — lock in guaranteed-issue rates during your 6-month open enrollment window. Anthony Orner compares top carriers.",
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
      name: "Medicare Supplement for Seniors Turning 65",
      item: "https://medicareyourself.com/services/medicare-supplement-for-seniors-turning-65",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Supplement for Seniors Turning 65: Your One Best Window for Low Rates",
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
    question: "How much does a Medicare Supplement cost at age 65?",
    answer:
      "Rates vary by carrier, plan letter, zip code, and tobacco status. At 65 during your open enrollment window, you'll qualify for the lowest available rates because carriers cannot charge more for pre-existing conditions. Call 855-559-1700 for a personalized comparison.",
  },
  {
    question:
      "What happens if I miss my 6-month Medigap open enrollment period?",
    answer:
      "After your 6-month window closes, carriers can use medical underwriting to decide whether to accept your application and how much to charge. If you have health issues, you could be denied coverage or face higher premiums. This window does not repeat annually.",
  },
  {
    question: "Should I pick Plan G or Plan N at 65?",
    answer:
      "Plan G covers everything Original Medicare doesn't except the Part B deductible ($283/year in 2026). Plan N has lower premiums but charges up to $20 copays for some office visits and up to $50 for ER visits that don't result in admission. If you want predictable costs, Plan G is usually the stronger choice at 65.",
  },
  {
    question: "Can I apply for a Medicare Supplement before I turn 65?",
    answer:
      "Yes. You can apply up to 6 months before your Part B start date to lock in your rate and have coverage ready on day one. This is the approach I recommend to every client approaching 65.",
  },
];

export default function MedicareSupplementSeniorsTurning65() {
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
          Medicare Supplement for Seniors Turning 65
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Supplement for Seniors Turning 65: Your One Best Window for
          Low Rates
        </h1>

        <Image
          src="/images/medicare-supplement-for-seniors-turning-65_vector.webp"
          alt="medicare supplement for seniors turning 65"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Medicare supplement for seniors turning 65 comes with a one-time
          pricing advantage that most people don't fully understand until it's
          gone. Federal law gives you exactly six months of guaranteed-issue
          access to any Medigap plan sold in your state, at the lowest rates
          you'll ever see.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker. I walk people through
          this window every week. Here's what you actually need to know.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why your 6-month open enrollment window is worth protecting
          </h2>
          <p className="mb-2">
            Your Medigap Open Enrollment Period starts the first month you're
            both 65 or older AND enrolled in Part B. During those six months, no
            carrier can reject you, charge extra for health conditions, or make
            you wait for coverage.
          </p>
          <p>
            This window does not come back every year. Miss it, and insurers can
            medically underwrite you. That means higher rates or flat-out denial
            if you have any health history. Protect this window like it matters,
            because it does.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Plan G vs Plan N for new enrollees at 65
          </h2>
          <p className="mb-2">
            Both plans are standardized, meaning the benefits are identical
            carrier to carrier. The difference is between the two letters:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Plan G:</strong> Covers all Original Medicare gaps except
              the Part B deductible ($283/year in 2026). No copays. No
              surprises.
            </li>
            <li>
              <strong>Plan N:</strong> Lower monthly premium, but you'll pay up
              to $20 copays for some office visits and up to $50 for ER visits
              that don't lead to inpatient admission.
            </li>
          </ul>
          <p>
            For most new enrollees at 65 who want predictable costs, Plan G wins
            on simplicity. Plan N can save money if you're healthy and rarely
            visit doctors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How attained-age pricing affects your premium every year
          </h2>
          <p className="mb-2">
            Most Medigap carriers use attained-age pricing. Your premium goes up
            as you age, automatically. That's the predictable part.
          </p>
          <p className="mb-2">
            The less predictable part? Block rate increases. When claims rise
            within your insurer's pool of policyholders, everyone shares the
            cost. Stack both together and 10-18% annual jumps are not unusual.
          </p>
          <p>
            The carrier you choose matters as much as the plan letter. I compare
            long-term rate stability across carriers, not just the cheapest
            starting premium.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Step-by-step enrollment timeline before your 65th birthday
          </h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>
              <strong>6 months before you turn 65:</strong> Apply for your
              Medigap plan. Carriers will hold your application until coverage
              starts.
            </li>
            <li>
              <strong>3 months before:</strong> Sign up for Medicare Parts A and
              B through Social Security (if you're not already enrolled).
            </li>
            <li>
              <strong>Month you turn 65:</strong> Your Medigap Open Enrollment
              Period begins. Coverage can start the 1st of your birthday month.
            </li>
            <li>
              <strong>Don't forget Part D:</strong> Medigap does not cover
              prescriptions. You'll need a standalone drug plan.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Still working at 65? Here's what changes
          </h2>
          <p className="mb-2">
            If you or your spouse have employer coverage, you can delay Part B
            without penalty. Your Medigap open enrollment window doesn't start
            until Part B does.
          </p>
          <p>
            When you do retire and enroll in Part B, your 6-month guaranteed
            issue window kicks in at that point. Don't let anyone rush you into
            dropping employer coverage before you're ready. But don't wait to
            call either. Planning ahead avoids gaps.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why the carrier matters as much as the plan
          </h2>
          <p className="mb-2">
            A Plan G from one carrier has the exact same medical benefits as a
            Plan G from any other. That's federal law. What's not identical:
            premium trajectory, claims behavior, and customer service.
          </p>
          <p>
            Some carriers price aggressively low to attract new enrollees, then
            raise rates steeply once you're in. I track carrier rate histories
            so you're not just chasing the cheapest first-year number.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
          <p className="text-2xl font-bold mb-2">
            Get a free Medigap quote before your window closes.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-semibold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-semibold">
              Get a Free Quote
            </Link>{" "}
            online. I'll compare carriers side by side for your zip code.
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
                Medigap Plan G: What It Covers and What It Costs
              </Link>
            </li>
            <li>
              <Link
                href="/services/quickest-way-to-enroll-into-plan-n"
                className="text-blue-600 hover:underline"
              >
                Medigap Plan N: Is the Lower Premium Worth It?
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                Medicare Part B Enrollment: When to Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement vs Medicare Advantage: Real Tradeoffs
              </Link>
            </li>
                      <li>
              <Link
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-and-cheapest-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                Best And Cheapest Medicare Supplement
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
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Medigap Basics (Medicare.gov)</a> and <a href="https://www.medicare.gov/basics/get-started-with-medicare" rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Get Started With Medicare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased local help? Find your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP) counselor</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: free, unbiased counseling is available through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/ship/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">Free, unbiased state help: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your local SHIP counselor</a> for one-on-one Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
      </section>
      </article>
    </>
  );
}