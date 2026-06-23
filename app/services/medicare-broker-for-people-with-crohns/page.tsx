import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare broker for people with crohns | No-Cost Plan Help | MedicareYourself",
  description:
    "Medicare broker for people with Crohn's — compare plans covering biologics, infusions & GI specialists at no cost. Call 855-559-1700 for free guidance.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-broker-for-people-with-crohns" },
  openGraph: {
    title:
      "medicare broker for people with crohns | No-Cost Plan Help | MedicareYourself",
    description:
      "Medicare broker for people with Crohn's who need specialist and drug coverage that fits. Anthony Orner compares plans at no cost. Schedule a free call today.",
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
      name: "Medicare Broker for People with Crohn's",
      item: "https://medicareyourself.com/services/medicare-broker-for-people-with-crohns",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Broker for People with Crohn's: Finding Coverage That Actually Covers Your Care",
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
    question: "Can people with Crohn's disease get Medicare?",
    answer:
      "Yes. You qualify for Medicare at 65 like everyone else. If Crohn's has left you unable to work, you may also qualify before 65 through Social Security Disability after a 24-month waiting period. Either way, you're eligible for all parts of Medicare: A, B, D, Supplement, and Advantage plans.",
  },
  {
    question: "Does Crohn's disease qualify you for Medicaid?",
    answer:
      "Crohn's alone doesn't automatically qualify you, but if your income and resources fall below your state's thresholds, you may be eligible. Some people with Crohn's qualify for both Medicare and Medicaid (dual eligibility), which can significantly reduce out-of-pocket costs for prescriptions and specialist visits.",
  },
  {
    question: "Will Medicare Part D cover biologics for Crohn's?",
    answer:
      "Part D plans cover many Crohn's medications, but biologics like Humira, Stelara, or Rinvoq often land in higher formulary tiers with steep cost-sharing. Starting in 2025, the $2,100 annual Part D out-of-pocket cap (2026) helps, but which drugs are covered and at what tier varies by plan. A broker can compare formularies for your exact prescriptions.",
  },
  {
    question: "How much does a Medicare broker cost for Crohn's patients?",
    answer:
      "Nothing. Licensed Medicare brokers are paid by insurance carriers, not by you. There's no fee for plan comparisons, enrollment help, or ongoing support. The plans and premiums are identical whether you enroll directly or through a broker.",
  },
,
  {
    question: "Can a Medicare Advantage plan restrict which gastroenterologist I see?",
    answer:
      "Yes. Most Medicare Advantage plans use provider networks, and HMO plans typically require you to stay in-network and get referrals for specialists. PPO plans offer more flexibility but charge more for out-of-network care. If you have an established GI specialist treating your Crohn's, confirming network status before enrolling is essential — a broker can verify this for you.",
  },
  {
    question: "Is Original Medicare or Medicare Advantage better for Crohn's disease?",
    answer:
      "It depends on your providers, medications, and budget. Original Medicare with a Supplement plan offers nationwide access to any doctor accepting Medicare and predictable costs, which helps with frequent specialist visits and infusions. Medicare Advantage often has lower premiums but uses networks and prior authorization, which can complicate access to biologics. There's no universal answer — the right choice comes from comparing your specific care needs against each plan's rules.",
  },
  {
    question: "Are infusions like Remicade covered under Part B or Part D?",
    answer:
      "Infusions administered in a doctor's office or infusion center are generally covered under Medicare Part B, not Part D. That means cost-sharing falls under your Part B coinsurance, which a Medigap or Medicare Advantage plan can help offset. Self-injected biologics taken at home usually fall under Part D. Knowing how your specific medication is administered changes which plan structure works best.",
  }
,
  {
    question: "Should I choose Medicare Supplement or Medicare Advantage if I have Crohn's?",
    answer:
      "Many people with Crohn's lean toward Medicare Supplement (Medigap) plans because they let you see any provider who accepts Medicare, with no network restrictions and predictable costs after the Part B deductible. Medicare Advantage may have lower premiums but uses networks and prior authorization, which can complicate biologic infusions and specialist access. The right choice depends on your providers, medications, budget, and whether you travel. A broker can walk you through the trade-offs at no cost — call 855-559-1700.",
  },
  {
    question: "Are Crohn's infusions covered under Medicare Part B or Part D?",
    answer:
      "It depends on how the drug is administered. Infusions given in a doctor's office or infusion center, like Remicade or Entyvio, are typically billed under Part B as a medical benefit. Self-injected biologics you administer at home usually fall under Part D as a pharmacy benefit. This distinction matters because Part B and Part D have different cost-sharing structures.",
  }
,
  {
    question: "What should people with Crohn's look for in a Medicare drug plan?",
    answer:
      "Start by checking each plan's formulary for your specific biologics, immunosuppressants, and any rescue medications you rely on. Look at the tier placement, prior authorization requirements, and step therapy rules, since these directly affect access and cost. A broker can run your full medication list across multiple plans to find the best match.",
  },
  {
    question: "Is a Medigap plan or Medicare Advantage better for Crohn's patients?",
    answer:
      "It depends on your priorities. Medigap paired with Original Medicare and a Part D plan offers nationwide access to any provider that accepts Medicare, which helps if you see specialized GI centers. Medicare Advantage may have lower premiums but uses networks and prior authorizations that can complicate infusion scheduling and specialist referrals.",
  },
  {
    question: "Are infusions for Crohn's covered under Part B or Part D?",
    answer:
      "It depends on where and how the drug is administered. Infusions given in a doctor's office or outpatient setting are usually billed under Part B, while self-administered or pharmacy-dispensed drugs typically fall under Part D. Knowing which part covers your treatment is critical when comparing plans, and a broker can help map this out.",
  }
,
  {
    question: "Should I choose Medicare Advantage or Original Medicare with a Supplement if I have Crohn's?",
    answer:
      "It depends on your providers and medications. Original Medicare paired with a Medigap plan offers the most flexibility — you can see any gastroenterologist or specialist nationwide who accepts Medicare, with no referrals or network limits. Medicare Advantage plans may have lower premiums but use networks and prior authorization for biologics and infusions. A broker can weigh both based on your GI team and drug list.",
  },
  {
    question: "Are Crohn's-related infusions covered under Medicare Part B or Part D?",
    answer:
      "It depends on the drug and how it's administered. Infusions given in a doctor's office or infusion center, like Remicade or Entyvio, are typically covered under Part B as a medical benefit. Self-injected biologics you administer at home usually fall under Part D. This distinction matters because Part B and Part D have different cost-sharing structures.",
  },
  {
    question: "Can I switch Medicare plans if my Crohn's medication isn't covered well?",
    answer:
      "Yes, during the Annual Enrollment Period each fall (October 15 to December 7), you can change Part D or Medicare Advantage plans for the following year. There's also a Medicare Advantage Open Enrollment Period from January 1 to March 31. If you qualify for Extra Help or have a Special Enrollment Period trigger, you may be able to switch outside those windows.",
  }
,
  {
    question: "Should I choose Medicare Supplement or Medicare Advantage if I have Crohn's disease?",
    answer:
      "Medicare Supplement (Medigap) plans often work better for people with Crohn's because they let you see any provider who accepts Medicare, including top GI specialists and academic medical centers, without network restrictions or referrals. Medicare Advantage plans may have lower premiums but use networks and prior authorization that can complicate care for chronic conditions. The right choice depends on your providers, medications, and budget.",
  },
  {
    question: "Will Medicare cover infusion treatments for Crohn's disease?",
    answer:
      "Yes. Infusions administered in a doctor's office or hospital outpatient setting are typically covered under Medicare Part B, while self-injected biologics generally fall under Part D. The location of treatment and how the drug is administered determines which part of Medicare pays, which affects your out-of-pocket costs. A broker can help you understand how each plan handles infusion coverage.",
  },
  {
    question: "Can I switch Medicare plans if my Crohn's medication isn't covered?",
    answer:
      "You can change Medicare Advantage and Part D plans during the Annual Enrollment Period each fall, with coverage starting January 1. You may also qualify for a Special Enrollment Period in certain situations, such as moving or losing other coverage. If your current plan drops a key biologic from its formulary, reviewing your options each year is important.",
  }
,
  {
    question: "Should I choose Medicare Supplement or Medicare Advantage if I have Crohn's?",
    answer:
      "Many people with Crohn's prefer a Medicare Supplement (Medigap) paired with Original Medicare and a standalone Part D plan because there are no provider networks, so you can see any gastroenterologist or specialist that accepts Medicare. Medicare Advantage plans can have lower premiums but use networks and may require referrals or prior authorization for biologics and procedures. The right fit depends on your providers, medications, and budget.",
  },
  {
    question: "Will Medicare cover infusions like Remicade or Entyvio?",
    answer:
      "Yes. Infusions administered in a doctor's office or infusion center are typically covered under Medicare Part B rather than Part D. You'll generally be responsible for the Part B deductible and coinsurance unless you have a Medigap plan or Medicare Advantage plan that helps with those costs. A broker can review how each plan handles infused biologics for Crohn's.",
  },
  {
    question: "Can I switch Medicare plans if my Crohn's treatment changes?",
    answer:
      "Yes. During the Annual Enrollment Period each fall, you can change your Part D or Medicare Advantage plan to better match new prescriptions or providers. Certain life events also trigger Special Enrollment Periods. Switching to a Medigap plan after your initial enrollment window may require medical underwriting, so timing matters.",
  }
,
  {
    question: "What should I look for in a Medicare plan if I have Crohn's disease?",
    answer:
      "Focus on three things: whether your gastroenterologist and infusion center are in-network, whether your specific biologics and maintenance drugs are on the formulary at a manageable tier, and how the plan handles prior authorization for specialty drugs. A Medigap plan paired with Part D often gives the broadest specialist access, while Medicare Advantage may offer lower premiums with network trade-offs.",
  }
,
  {
    question: "Are infusions for Crohn's covered under Medicare Part B or Part D?",
    answer:
      "It depends on how and where the drug is administered. Biologic infusions given in a doctor's office or infusion center are typically covered under Part B as a medical benefit, while self-injected or oral biologics usually fall under Part D. This distinction matters because Part B and Part D have different cost-sharing structures, so a broker can help you compare your total expected costs.",
  },
  {
    question: "Should someone with Crohn's choose Medigap or Medicare Advantage?",
    answer:
      "There's no one-size-fits-all answer, but many people with chronic conditions like Crohn's value the predictable costs and provider freedom of a Medigap (Supplement) plan paired with a standalone Part D plan. Medicare Advantage plans can have lower premiums but use networks and prior authorization, which can complicate specialist and biologic access. The right choice depends on your providers, prescriptions, and budget.",
  },
  {
    question: "What happens if my Crohn's medication isn't on a plan's formulary?",
    answer:
      "If your specific biologic or Crohn's drug isn't covered, you can request a formulary exception with your doctor's support, switch to a covered alternative, or change plans during the Annual Enrollment Period. A licensed broker can review formularies before you enroll so you avoid coverage surprises. This is one of the most important steps for anyone managing Crohn's on Medicare.",
  }
,
  {
    question: "What should I look for in a Medicare plan if I have Crohn's disease?",
    answer:
      "Focus on three things: whether your gastroenterologist and infusion center are in-network, whether your biologics and maintenance drugs are on the formulary at a manageable tier, and what the plan's out-of-pocket maximum looks like. Don't just compare premiums — for Crohn's patients, total annual cost matters far more than monthly premium. A broker can model your real expected spending across plans.",
  }
];

export default function MedicareBrokerForPeopleWithCrohns() {
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
          Medicare Broker for People with Crohn&apos;s
        </span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medicare Broker for People with Crohn&apos;s: Finding Coverage That
          Actually Covers Your Care
        </h1>

        <Image
          src="/images/medicare-broker-for-people-with-crohns.webp"
          alt="medicare broker for people with crohns"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A medicare broker for people with Crohn&apos;s does something most
          online enrollment tools can&apos;t: check whether your
          gastroenterologist, your biologic, and your infusion center all land
          inside the same plan. I&apos;m Anthony Orner, a licensed broker who
          does this work at no cost to you.
        </p>
        <p className="text-lg mb-6">
          You already spend enough energy fighting your insurance. Let me handle
          the plan comparison so you can focus on staying well.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why Crohn&apos;s disease makes Medicare plan selection critical
          </h2>
          <p className="mb-2">
            Crohn&apos;s isn&apos;t a one-doctor, one-pill condition. You might
            see a GI specialist every few months, get labs and imaging regularly,
            take a biologic that costs thousands per month, and need occasional
            ER visits or surgeries when flares hit hard.
          </p>
          <p>
            Pick the wrong plan and you could face surprise cost-sharing on
            infusions, a formulary that doesn&apos;t cover your biologic, or a
            network that excludes your gastroenterologist. Every one of those
            problems is preventable with the right plan review upfront.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Supplement vs. Advantage plans for ongoing GI treatment
          </h2>
          <p className="mb-2">
            A Medicare Supplement (Medigap) plan like Plan G pays after Original
            Medicare, giving you freedom to see any doctor who accepts Medicare.
            No referrals, no network restrictions. For Crohn&apos;s patients who
            travel for specialty care or switch GI doctors, that flexibility
            matters.
          </p>
          <p className="mb-2">
            Medicare Advantage plans often have lower premiums and may bundle
            drug coverage, but they use provider networks. If your
            gastroenterologist or infusion center isn&apos;t in-network, your
            out-of-pocket costs spike.
          </p>
          <p>
            Neither option is automatically better. The right choice depends on
            your specific medications, providers, and how often you need care. I
            compare both sides for your situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How a broker reviews your prescriptions and specialists
          </h2>
          <p className="mb-2">
            I pull up every Part D plan available in your zip code and check your
            exact drugs against each formulary. Biologics like Humira, Stelara,
            Entyvio, and Rinvoq often sit on Tier 4 or 5, and cost-sharing
            varies wildly between carriers. The $2,100 annual Part D
            out-of-pocket cap helps, but your monthly costs still depend on
            which tier your drug falls on.
          </p>
          <p>
            I also verify that your GI doctor, hospital system, and any infusion
            providers are in-network before recommending any Advantage plan. No
            surprises after you enroll.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            The real cost of guessing wrong with Crohn&apos;s
          </h2>
          <p className="mb-2">
            People with Crohn&apos;s who pick plans without checking drug
            coverage often find out mid-year that their biologic isn&apos;t
            covered, or requires step therapy they&apos;ve already failed. One
            common story: someone enrolls in a Supplement and a standalone Part D
            plan, then discovers the Part D formulary won&apos;t cover their
            biologic without a prior authorization fight.
          </p>
          <p>
            That&apos;s months of stress, phone calls, and appeals you
            don&apos;t need during a flare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What to have ready before your free plan call
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Your current medication list with dosages (especially biologics
              and immunosuppressants)
            </li>
            <li>
              Names of your gastroenterologist and any infusion center you use
            </li>
            <li>Your Medicare card (Parts A and B effective dates)</li>
            <li>
              Any other prescriptions you take, even non-Crohn&apos;s related
            </li>
          </ul>
          <p className="mt-3">
            With that info, I can run a full comparison in one call. Most people
            finish in 20 to 30 minutes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Get a free plan comparison tailored to Crohn&apos;s care
          </h2>
          <p className="mb-2">
            You don&apos;t pay me. Carriers do. The premiums are identical
            whether you enroll on your own or through my office. What you get
            from me is someone who checks every formulary, every network, and
            every cost-sharing detail before you commit.
          </p>
          <p>
            Call <strong>855-559-1700</strong> or schedule a time that works for
            you.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Ready to find the right Medicare plan for your Crohn&apos;s care?
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a href="tel:8555591700" className="underline font-bold">
              855-559-1700
            </a>{" "}
            or{" "}
            <Link href="/quote" className="underline font-bold">
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/learn/what-is-medigap"
                className="text-blue-600 hover:underline"
              >
                Medicare Supplement Plans Explained
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Part D Drug Coverage Guide
              </Link>
            </li>
            <li>
              <Link
                href="/medicare-supplement/new-jersey/vs-medicare-advantage"
                className="text-blue-600 hover:underline"
              >
                Medicare Advantage vs. Medigap: Which Is Right for You?
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker Help for Chronic Conditions
              </Link>
            </li>
                      <li>
              <Link
                href="/services/medicare-broker-for-people-with-pre-existing-conditions"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Pre Existing Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/services/you-get-a-medicare-supplement-plan-if-you-have-a-pre-existing-condition"
                className="text-blue-600 hover:underline"
              >
                You Get A Medicare Supplement Plan If You Have A Pre Existing Condition
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
                href="/services/medicare-broker-for-people-with-asthma"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Asthma
              </Link>
            </li>
            <li>
              <Link
                href="/services/medicare-broker-for-people-with-cll"
                className="text-blue-600 hover:underline"
              >
                Medicare Broker For People With Cll
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/drug-coverage-part-d" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Part D Drug Coverage</a> and <a href="https://www.medicare.gov/basics/costs/medicare-costs" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — 2026 Costs at a Glance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need local counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare guidance.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased Medicare counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Need free, unbiased counseling? Contact your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a> or the <a href="https://www.state.nj.us/dobi/division_insurance/index.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents: <a href="https://www.state.nj.us/dobi/division_consumers/insurance/ship.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> offers free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free Medicare counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>

        <p className="text-sm text-gray-500 mt-8">
          Written by Anthony Orner, Licensed Medicare Broker | EasyKind Medicare
          | Last updated July 2025
        </p>
      </article>
    </>
  );
}