import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Why Did My Medicare Supplement Rate Change? | Free Rate Review | MedicareYourself",
  description:
    "Medigap rate went up? Learn the 3 pricing factors behind Medicare Supplement increases and get a free rate review from a licensed broker. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/why-did-my-medicare-supplement-rate-change" },
  openGraph: {
    title:
      "Why Did My Medicare Supplement Rate Change? | Free Rate Review | MedicareYourself",
    description:
      "Why did my Medicare supplement rate change? Understand attained-age pricing, carrier loss ratios, and NJ filing data. Anthony Orner offers a free rate review.",
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
  datePublished: "2026-03-18",
  dateModified: "2026-03-22",
};

const faqs = [
  {
    question: "How often do Medicare supplement rates change?",
    answer:
      "Most carriers file rate adjustments once per year, but some file twice. Your increase typically takes effect on your policy anniversary date or the carrier's scheduled adjustment date. You can receive a rate increase notice at any time during the year.",
  },
  {
    question: "Why is my Medicare supplemental insurance going up?",
    answer:
      "Three factors drive increases: your pricing model (attained-age, issue-age, or community-rated), medical inflation affecting claims costs, and the loss ratio within your specific block of policyholders. When age-based increases and block increases stack together, 10-18% jumps in a single year are not unusual.",
  },
  {
    question: "Can I switch Medicare supplement plans without medical underwriting?",
    answer:
      "Outside of your initial Medigap Open Enrollment Period, most states require medical underwriting to switch plans. However, certain federal guaranteed issue triggers apply, such as losing employer coverage or a carrier leaving your area. NJ has specific state rules that may offer additional protections. Call to confirm your options.",
  },
  {
    question: "Does the letter plan affect my rate increase?",
    answer:
      "Plan G from one carrier covers the exact same benefits as Plan G from another. The benefits are standardized by Medicare. What differs is the carrier's pricing strategy and long-term rate stability. Some carriers price low to attract new members, then raise rates sharply once the block ages.",
  },

  {
    question: "What is the difference between attained-age, issue-age, and community-rated pricing?",
    answer:
      "Attained-age policies increase premiums as you grow older, so the same plan costs more each birthday. Issue-age policies base your premium on your age when you first bought the policy and do not raise it because you aged. Community-rated plans charge the same premium regardless of age. All three can still increase due to inflation and claims experience within the block.",
  },
  {
    question: "Should I switch carriers after a rate increase?",
    answer:
      "Switching can lower your premium if you qualify medically or through a guaranteed issue right, but a lower introductory rate from a new carrier may not stay low. It is worth comparing current filed rates, the carrier's history of increases, and whether you would need to pass underwriting before making a change. A free rate review can show whether switching actually saves money long-term.",
  }
,
  {
    question: "Should I shop my Medicare supplement plan every year?",
    answer:
      "Yes, an annual rate review is one of the smartest habits a Medigap policyholder can build. Because Plan G and Plan N benefits are standardized by Medicare, comparing carriers means comparing premiums and rate stability for identical coverage. A licensed broker can run a side-by-side review at no cost to you.",
  },
  {
    question: "Will my rate go down if I lose weight or improve my health?",
    answer:
      "No. Medicare supplement premiums are based on pricing model, age, gender, tobacco use, and zip code, not on your current health status once the policy is in force. Health only matters when you apply and go through medical underwriting to switch plans outside a guaranteed issue window.",
  },
  {
    question: "Can my carrier single me out for a rate increase?",
    answer:
      "No. Rate adjustments must be filed with the state insurance department and apply to an entire block of policyholders, not to individuals. If your premium went up, every person in your same plan, age band, and rating class received the same increase.",
  }
,
  {
    question: "Do all Medicare Supplement plans with the same letter cost the same?",
    answer:
      "No. The benefits in each lettered Medigap plan are standardized and identical no matter which carrier sells it, but the premium is not. Medicare.gov confirms that price is the only difference between policies with the same plan letter sold by different companies, which is why shopping the same plan across carriers can produce meaningful savings.",
  },
  {
    question: "Can a carrier raise my Medigap premium individually because of my health?",
    answer:
      "No. A Medigap carrier can only raise your premium if it raises the premium for all policies like yours in your state. Increases are filed on a block-wide basis, not based on your personal claims or new diagnoses, so a recent hospital stay should not directly trigger a personal rate hike.",
  },
  {
    question: "Should I review my Medigap plan every year even if I'm happy with it?",
    answer:
      "Yes. Because every carrier files its own rate adjustments and pricing models age differently over time, the most competitive carrier for your plan letter can change year to year. A free annual rate review confirms whether your current plan is still priced competitively for your age and ZIP code.",
  }
,
  {
    question: "Should I shop my Medicare Supplement plan after every rate increase?",
    answer:
      "It is wise to review your coverage whenever you receive a rate notice, but switching is not always the right move. If you can pass medical underwriting, you may qualify for a lower premium on the same standardized benefits with a different carrier. A free rate review can compare your current policy against other available carriers in your state before you make any decision.",
  }
,
  {
    question: "Can my Medicare Supplement carrier raise my rate because of my health?",
    answer:
      "No. Once you have a Medigap policy in force, the carrier cannot single you out for a rate increase based on your individual health or claims history. Rate adjustments are filed at the block level and apply to everyone in that same plan and rating class. Your personal claims do not trigger your premium change.",
  },
  {
    question: "Should I shop my Medicare Supplement plan every year?",
    answer:
      "Yes, an annual rate review is smart even if you are happy with your current carrier. Because every carrier sells the same standardized benefits under each plan letter, you may qualify for identical coverage at a lower premium with another insurer. A licensed broker can run a comparison and confirm whether you can pass underwriting to switch.",
  },
  {
    question: "Will moving to a different state change my Medigap premium?",
    answer:
      "Yes. Medigap premiums are filed and approved state by state, so the same plan letter and same carrier can cost a different amount in New Jersey than in another state. If you relocate, notify your carrier and request a new rate review for your new ZIP code.",
  }
,
  {
    question: "Should I shop my Medicare Supplement plan every year?",
    answer:
      "Reviewing your Medigap premium annually is a smart habit because identical lettered plans can have very different prices between carriers. Since benefits are standardized by Medicare, the only difference between two Plan G policies is the premium and the carrier's rate history. A licensed broker can compare available carriers in your state at no cost.",
  }
,
  {
    question: "Should I switch Medigap carriers every time I get a rate increase?",
    answer:
      "Not necessarily. Switching makes sense when a comparable plan from another carrier offers meaningful long-term savings and you can pass medical underwriting. However, frequent switching can backfire if your health changes and you become locked into a plan later. A rate review with a licensed broker helps you weigh the trade-offs before making a move.",
  },
  {
    question: "Does Medicare itself control Medigap rate increases?",
    answer:
      "No. Medicare standardizes the benefits within each lettered Medigap plan, but private insurance carriers set the premiums. State departments of insurance review and approve rate filings, which is why increases can vary by state and carrier even for the same plan letter.",
  }
,
  {
    question: "Will shopping my Medicare Supplement to a new carrier always lower my rate?",
    answer:
      "Not always. A new carrier may offer a lower introductory rate, but you typically need to pass medical underwriting to qualify outside of a guaranteed issue period. A rate review compares your current premium against carriers available in your ZIP code so you can decide whether switching makes sense long-term.",
  },
  {
    question: "Does Medicare set the price of my Medigap policy?",
    answer:
      "No. Medicare standardizes the benefits in each lettered plan, but each private insurance company decides how to price its policies. According to Medicare.gov, the price is the only difference between policies with the same plan letter sold by different companies, which is why premiums for identical coverage can vary widely.",
  },
  {
    question: "What should I do when I receive a Medicare Supplement rate increase letter?",
    answer:
      "Do not cancel your current policy until a new one is approved and in force. Call a licensed broker to review your pricing model, current health status, and the carriers available in your state. If you qualify for underwriting or a guaranteed issue right, you may be able to secure the same benefits at a lower premium.",
  }
,
  {
    question: "Will switching Medigap carriers always lower my premium?",
    answer:
      "Not always. A new carrier may offer a lower starting premium, but their pricing model and future rate trend matter just as much as today's quote. A rate review compares the long-term stability of available carriers in your state, not just the first-year savings.",
  },
  {
    question: "Does my Medigap rate increase if I file claims?",
    answer:
      "No. Medigap rate changes apply to the entire block of policyholders in your plan, not to you individually based on claims usage. Your personal health history cannot trigger an increase once you are enrolled, though it may affect underwriting if you try to switch plans later.",
  },
  {
    question: "Should I drop my Medigap plan and switch to Medicare Advantage to save money?",
    answer:
      "It depends on your health, providers, and travel needs. Medigap and Medicare Advantage work very differently in terms of network access, out-of-pocket exposure, and the ability to return to Medigap later with underwriting. Review both options with a licensed broker before making a permanent change.",
  }
,
  {
    question: "Will shopping for a new Medigap plan always lower my premium?",
    answer:
      "Not always. While a new carrier may offer a lower introductory rate, you must qualify through medical underwriting in most situations outside of Open Enrollment or a guaranteed issue period. A licensed broker can compare carriers in your area and confirm whether switching saves money long-term, since some low introductory rates rise sharply later.",
  },
  {
    question: "Does Medicare set or approve Medigap rate increases?",
    answer:
      "No. Medicare standardizes the benefits inside each lettered plan, but it does not set or approve premiums. Each insurance company files its own rates with the state department of insurance, which is why two carriers can charge very different premiums for the exact same Plan G or Plan N benefits.",
  },
  {
    question: "Can I get a free review of my Medicare supplement rate?",
    answer:
      "Yes. Anthony Orner offers a no-cost rate review where he compares your current premium against other carriers available in your state. If a better-priced plan exists and you can qualify, he will walk you through the application. Call 855-559-1700 to schedule your review.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement rate increase?",
    answer:
      "Yes. Medigap premiums vary widely based on your state and ZIP code because claims costs, demographics, and state filing rules differ by region. Two policyholders with the exact same Plan G from the same carrier can pay very different premiums based solely on location.",
  },
  {
    question: "Can I shop for a lower Medigap rate without losing coverage?",
    answer:
      "Yes, you can compare carriers at any time, but approval outside of guaranteed issue windows typically requires answering health questions. If approved, your new policy starts before the old one is cancelled so coverage never lapses. A free rate review can identify whether switching makes sense for your situation.",
  },
  {
    question: "Should I drop my Medigap plan if the rate keeps going up?",
    answer:
      "Not without reviewing alternatives first. Dropping Medigap without a replacement in place can leave you exposed to Part A and Part B cost-sharing, and re-enrolling later usually requires underwriting. Call 855-559-1700 for a free comparison before making any changes.",
  }
,
  {
    question: "Does where I live affect my Medicare Supplement rate?",
    answer:
      "Yes. Medigap premiums vary widely based on your ZIP code, state, and the insurance company selling the plan. Even for the same lettered plan with identical benefits, prices differ significantly by location because carriers file rates with each state's insurance department.",
  },
  {
    question: "Should I shop my Medigap plan every year?",
    answer:
      "Reviewing your Medigap premium annually is a smart habit because benefits within each lettered plan are standardized by Medicare, so the only real difference between carriers is price and rate stability. If you can pass medical underwriting, switching to a lower-priced carrier with the same plan letter can lock in savings. Call 855-559-1700 for a free rate review.",
  }
];

export default function WhyDidMyMedicareSupplementRateChange() {
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
        <span>Why Did My Medicare Supplement Rate Change?</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Why Did My Medicare Supplement Rate Change? The Three Factors Behind
          Every Increase
        </h1>

        <Image
          src="/images/why-did-my-medicare-supplement-rate-change.webp"
          alt="why did my medicare supplement rate change"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Why did my Medicare supplement rate change? That question hits your
          inbox or mailbox, and the letter rarely explains much. You deserve a
          clear answer, not a form letter with fine print.
        </p>
        <p className="text-lg mb-6">
          I'm Anthony Orner, a licensed Medicare broker in New Jersey. Here's
          what's actually behind that number going up.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Attained-age vs. issue-age vs. community-rated pricing explained
          </h2>
          <p className="mb-2">
            Your pricing model determines the biggest chunk of future increases.
            Most Medigap policies in the U.S. use one of three structures:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>
              <strong>Attained-age:</strong> Your premium rises automatically as
              you get older. This is the most common model and the one that
              surprises people most at 72, 78, or 83.
            </li>
            <li>
              <strong>Issue-age:</strong> Your rate is based on the age you were
              when you bought the policy. It can still increase for inflation,
              but age alone won't push it up.
            </li>
            <li>
              <strong>Community-rated:</strong> Everyone pays the same base rate
              regardless of age. Rate changes still happen, but they apply
              equally across the pool.
            </li>
          </ul>
          <p>
            The starting premium isn't the real cost. What you pay at 75 matters
            more than what you pay at 65.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Medical inflation and carrier loss ratios drive annual adjustments
          </h2>
          <p className="mb-2">
            Even issue-age and community-rated plans aren't immune to increases.
            When healthcare costs rise across the board, carriers file for rate
            adjustments with your state's insurance department.
          </p>
          <p>
            Loss ratio is the key metric. If claims paid out by your carrier's
            block of policyholders exceed projections, the entire block shares
            that cost. This has nothing to do with your personal health or claims
            history. It's about the pool you're in.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            When age increases and block increases stack together
          </h2>
          <p className="mb-2">
            Here's what catches people off guard: these factors compound. An
            attained-age bump of 4-5% plus a block increase of 8-12% can mean a
            15-18% jump in a single year.
          </p>
          <p>
            Some carriers price aggressively low to attract new members, then
            raise rates sharply once the block ages and claims rise. The carrier
            matters more than the letter plan. Plan G benefits are standardized
            by Medicare. Long-term premium behavior is not.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            NJ rate filing data: which carriers raised rates the most in 2025
          </h2>
          <p className="mb-2">
            In 2025, several major carriers filed Plan G and Plan N increases
            ranging from 15% to just under 20% in New Jersey. These weren't
            small annual adjustments. They caught a lot of people off guard.
          </p>
          <p>
            NJ rate filings are public record through the state Department of
            Banking and Insurance. I track them so my clients don't have to.
            When I see a carrier trending toward aggressive increases, we talk
            options before the next notice arrives.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Steps to take within 30 days of receiving a rate increase notice
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Don't panic, but don't ignore it.</strong> A rate increase
              notice is your signal to review, not just accept.
            </li>
            <li>
              <strong>Compare current rates across carriers.</strong> Since
              benefits are standardized by letter plan, switching carriers can
              save you real money. Rates vary by carrier.
            </li>
            <li>
              <strong>Understand underwriting requirements.</strong> Outside your
              initial Medigap Open Enrollment Period (6 months starting the
              month you're 65+ and enrolled in Part B), most switches require
              medical underwriting. Some federal guaranteed issue triggers may
              apply.
            </li>
            <li>
              <strong>Call for a free rate review.</strong> I'll pull current
              rates from multiple carriers and show you exactly where you stand.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            A free rate review takes 10 minutes
          </h2>
          <p className="mb-2">
            You don't need to wait for open enrollment. You don't need to fill
            out a form. Call me at{" "}
            <a
              href="tel:8555591700"
              className="text-blue-600 font-semibold hover:underline"
            >
              855-559-1700
            </a>{" "}
            and I'll pull your current plan details, compare rates across
            carriers available in your area, and tell you honestly whether
            switching makes sense or staying put is the better move.
          </p>
          <p>No pressure. Just clarity on what that letter actually means.</p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-8">
          <p className="text-xl font-bold mb-2">
            Get a straight answer about your rate increase.
          </p>
          <p className="mb-4">
            Call{" "}
            <a
              href="tel:8555591700"
              className="underline font-semibold text-white"
            >
              855-559-1700
            </a>{" "}
            for a free rate review with Anthony Orner.
          </p>
          <Link
            href="/contact"
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
                href="/services/switch-medigap-plans"
                className="text-blue-600 hover:underline"
              >
                Switch Medigap Plans — See If You Could Save in 2 Minutes
              </Link>
            </li>
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
                Medigap Plan G vs. Plan N
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-supplement-open-enrollment-online"
                className="text-blue-600 hover:underline"
              >
                When to Enroll in a Medicare Supplement
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Guaranteed Issue Rights
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
                href="/services/best-medicare-supplement-rates-by-age-plan-g-plan-n-plan-f-rates"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Supplement Rates By Age Plan G Plan N Plan F Rates
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-much-does-medicare-supplement-cost-per-month-for-seniors"
                className="text-blue-600 hover:underline"
              >
                How Much Does Medicare Supplement Cost Per Month For Seniors
              </Link>
            </li>
            <li>
              <Link
                href="/services/how-can-i-save-money-on-my-medicare-supplement"
                className="text-blue-600 hover:underline"
              >
                How Can I Save Money On My Medicare Supplement
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official references: <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">Medicare.gov — How Medigap policies are priced</a> and <a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-get" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">Medicare.gov — When to get a Medigap policy</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rate filings and consumer protections through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 hover:underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">NJ residents can verify carrier rate filings with the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rate filings and consumer protections through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: review filings and consumer guidance through the <a href="https://www.state.nj.us/dobi/division_insurance/" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can compare filed Medigap rates and consumer protections through the <a href="https://www.state.nj.us/dobi/division_insurance/managedcare/medsupp.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance — Medicare Supplement</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">NJ SHIP counseling program</a> for unbiased Medigap rate guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rate filings and consumer protections through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP program</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier filings and consumer protections with the <a href="https://www.state.nj.us/dobi/division_insurance/" target="_blank" rel="noopener noreferrer" className="underline">NJ Department of Banking and Insurance</a> or speak with a free counselor through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" target="_blank" rel="noopener noreferrer" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rate filings and consumer rights through the <a href="https://www.nj.gov/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">New Jersey Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier filings and consumer rights through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can review rate filings and consumer protections through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the free <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for one-on-one counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify carrier rate filings and consumer protections through the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/ihcseh/shipindex.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medigap rate and plan counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.nj.gov/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-700 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP program</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling on Medigap rate concerns.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ Department of Banking and Insurance</a> or the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free counseling on Medigap rate changes.</div>
      </section>
      </article>
    </>
  );
}