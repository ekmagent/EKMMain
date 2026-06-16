import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "Find a Medicare Agent in Newark NJ | Free No-Obligation Help | MedicareYourself",
  description:
    "Find a licensed Medicare agent in Newark, NJ. Anthony Orner compares Medigap and Advantage plans across Essex County — free help. Call 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/find-a-medicare-agent-in-newark-nj" },
  openGraph: {
    title:
      "Find a Medicare Agent in Newark NJ | Free No-Obligation Help | MedicareYourself",
    description:
      "Find a Medicare agent in Newark NJ — Anthony Orner is an independent broker comparing Medigap and Advantage plans in Essex County. Free consultation today.",
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
      name: "Find a Medicare Agent in Newark NJ",
      item: "https://medicareyourself.com/services/find-a-medicare-agent-in-newark-nj",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Find a Medicare Agent in Newark, NJ: Licensed Broker Serving Essex County",
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
  mainEntityOfPage:
    "https://medicareyourself.com/services/find-a-medicare-agent-in-newark-nj",
};

const faqs = [
  {
    question: "How much do Medicare agents charge?",
    answer:
      "Nothing. Licensed Medicare brokers are paid by the insurance carriers, not by you. My service is free whether you enroll in a plan or not. There's no fee, no obligation, and no catch.",
  },
  {
    question: "How do I get ahold of a Medicare representative?",
    answer:
      "You can call me directly at 855-559-1700 or book a free consultation online. I work with Newark and Essex County residents year-round, not just during Open Enrollment.",
  },
  {
    question: "How do I pick a Medicare agent?",
    answer:
      "Look for a licensed, independent broker who represents multiple carriers. Ask if they compare both Medigap and Medicare Advantage plans. A captive agent who only sells one company's products can't show you the full picture.",
  },
  {
    question:
      "What's the difference between a Medicare agent and a Medicare broker?",
    answer:
      "An agent typically works for one insurance company. A broker is independent and compares plans across multiple carriers. I'm an independent broker, which means I shop the market on your behalf to find what actually fits your situation.",
  },
,
  {
    question: "Does a Newark Medicare agent help with both Medigap and Medicare Advantage?",
    answer:
      "Yes. As an independent broker, I compare both Medicare Supplement (Medigap) and Medicare Advantage plans side by side. That way you can see the trade-offs in cost, network, and coverage before choosing what fits your Newark-area doctors and budget.",
  },
  {
    question: "Can I get help outside of Medicare Open Enrollment?",
    answer:
      "Yes. I work with Essex County residents year-round, including those aging into Medicare, leaving employer coverage, or qualifying for a Special Enrollment Period. Medigap applications can also be submitted any time of year, subject to underwriting outside your initial window.",
  },
  {
    question: "What should I bring to my Medicare consultation?",
    answer:
      "Have your Medicare card (or your Part A/B start dates), a list of your current medications with dosages, and the names of doctors or hospitals you want to keep. That information lets me check formularies and provider networks accurately before recommending a plan.",
  }
,
  {
    question: "Is there a New Jersey SHIP program I can use instead of a broker?",
    answer:
      "Yes. New Jersey's State Health Insurance Assistance Program (SHIP) offers free, unbiased Medicare counseling through trained volunteers. SHIP counselors don't sell plans, so they can be a good second opinion alongside working with a licensed broker who can actually enroll you in coverage.",
  },
  {
    question: "Do you serve Newark neighborhoods and surrounding Essex County towns?",
    answer:
      "Yes. I work with Medicare beneficiaries throughout Newark — including the Ironbound, North Newark, Forest Hill, and Weequahic — as well as surrounding Essex County communities like East Orange, Bloomfield, Montclair, and Belleville. Meetings are available by phone, video, or in person depending on what works for you.",
  }
,
  {
    question: "Do I need to live in Newark to work with you?",
    answer:
      "No. I'm licensed in New Jersey and 34 other states, so I help clients throughout Essex County and beyond. Most consultations happen by phone or video, though I can coordinate in-person meetings for Newark-area residents when helpful.",
  },
  {
    question: "What should I bring to my first Medicare consultation?",
    answer:
      "Have your Medicare card (or your Part A/Part B effective dates), a list of your current medications with dosages, and the names of doctors or hospitals you want to keep. That lets me check formularies and provider networks before recommending a plan.",
  },
  {
    question: "Will a Medicare agent try to switch me out of a plan I like?",
    answer:
      "No. If your current coverage still fits your doctors, medications, and budget, I'll tell you to keep it. My job is to compare your options honestly, not to push a change for the sake of a commission.",
  }
,
  {
    question: "Does a Newark Medicare broker work with my existing doctors at RWJBarnabas or Saint Barnabas?",
    answer:
      "Network access depends on the specific plan you choose. With Original Medicare plus a Medigap policy, you can see any provider in Newark or Essex County that accepts Medicare. With Medicare Advantage, I check each plan's network directly so you know whether your current doctors and hospitals are in-network before you enroll.",
  }
,
  {
    question: "Is a Newark Medicare agent licensed to sell plans in New Jersey?",
    answer:
      "Yes. Any agent or broker helping you enroll in a Medicare plan in Newark must hold an active New Jersey insurance license and be appointed with the carriers they represent. Anthony Orner is licensed in NJ and 34 other states, with NPI 1902584006, and you can verify any agent's license through the NJ Department of Banking and Insurance.",
  }
,
  {
    question: "Is a Newark Medicare agent licensed by the state of New Jersey?",
    answer:
      "Yes. Any agent or broker selling Medicare plans in Newark must hold an active New Jersey resident or non-resident insurance license through the NJ Department of Banking and Insurance. Anthony Orner is licensed in New Jersey and 34 additional states, with NPI 1902584006 on file with CMS.",
  }
];

export default function FindMedicareAgentNewarkNJ() {
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
          Find a Medicare Agent in Newark NJ
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Find a Medicare Agent in Newark, NJ: Licensed Broker Serving Essex
          County
        </h1>

        <Image
          src="/images/find-a-medicare-agent-in-newark-nj.webp"
          alt="Find a Medicare agent in Newark NJ"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          Finding a Medicare agent in Newark, NJ shouldn't feel like a second
          job. I'm Anthony Orner, an independent Medicare broker licensed in New
          Jersey who works with clients across Essex County.
        </p>
        <p className="text-lg mb-6">
          I compare plans from multiple carriers so you see real options, not
          just what one company wants to sell you.
        </p>

        <PhoneCTA />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Medicare plan options available to Newark residents
          </h2>
          <p className="mb-2">
            Newark has strong plan availability. Essex County residents can
            choose from:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>
              <strong>Original Medicare + Medigap supplement</strong> — covers
              gaps like the $1,676 Part A deductible and $283 Part B deductible
            </li>
            <li>
              <strong>Medicare Advantage (Part C)</strong> — bundled plans that
              often include dental, vision, and prescription coverage
            </li>
            <li>
              <strong>Part D prescription drug plans</strong> — standalone drug
              coverage paired with Original Medicare
            </li>
          </ul>
          <p>
            Which path works depends on your doctors, your prescriptions, and
            whether you want the flexibility to see providers at University
            Hospital or across the river at NYC specialists without referrals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How an independent broker saves Newark clients money
          </h2>
          <p className="mb-2">
            A captive agent represents one carrier. I represent you. I compare
            Medigap and Advantage plans across multiple companies to find the
            best fit for your budget.
          </p>
          <p>
            The premiums are identical whether you buy through me or directly
            from the insurer. You pay zero for my help. Carriers compensate me,
            so there's no fee on your end.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common Medicare mistakes Newark enrollees make
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Missing Medigap Open Enrollment.</strong> You get 6 months
              starting the month you turn 65 and enroll in Part B. After that
              window closes, carriers can charge more or deny coverage based on
              health.
            </li>
            <li>
              <strong>Skipping Part B on time.</strong> The late enrollment
              penalty adds 10% to your premium for every 12-month period you
              delayed. That penalty is permanent.
            </li>
            <li>
              <strong>Choosing a plan based on premium alone.</strong> A $0
              Advantage plan can cost more out-of-pocket if your doctors are
              out-of-network or your prescriptions aren't covered.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Why local matters in Essex County
          </h2>
          <p className="mb-2">
            Network access varies by ZIP code. A plan that works in Montclair
            might not cover your preferred providers in the Ironbound or North
            Ward. I check network directories for your actual doctors before
            recommending anything.
          </p>
          <p>
            Newark's healthcare landscape includes major systems like RWJBarnabas
            Health (Newark Beth Israel) and Hackensack Meridian. Not every plan
            contracts with both.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to call a broker (not just during open enrollment)
          </h2>
          <p className="mb-2">
            Medicare Advantage and Part D Open Enrollment runs October 15 through
            December 7. But that's not the only time I can help.
          </p>
          <p>
            Turning 65, retiring, losing employer coverage, or moving into Essex
            County? Each triggers enrollment rights you can use year-round. Call
            before your deadline, not after.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Book a free Medicare consultation — no sign-up required
          </h2>
          <p className="mb-2">
            One call. I'll review your medications, confirm your doctors are
            in-network, and walk you through plan costs side by side. If nothing
            fits, you walk away. No pressure, no follow-up you didn't ask for.
          </p>
          <p>
            I've heard from enough people who spent months trying to sort this
            out alone, calling 1-800-MEDICARE, sitting on hold, still confused.
            Let me make it simple.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-10">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed Medicare broker today.
          </p>
          <p className="text-2xl font-bold text-blue-700 mb-3">
            <a href="tel:8555591700">855-559-1700</a>
          </p>
          <Link
            href="/quote"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/medicare-supplement/new-jersey"
                className="text-blue-600 hover:underline"
              >
                Medigap Plans in New Jersey: What You Need to Know
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
                href="/learn/medicare-enrollment-periods"
                className="text-blue-600 hover:underline"
              >
                Medicare Enrollment Periods Explained
              </Link>
            </li>
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                Part B Late Enrollment Penalty: What It Costs
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
              <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Finder</a> and <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Talk to Someone at Medicare.gov</a>.</div>
            <div className="text-sm text-gray-600 mt-2">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free unbiased counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey beneficiaries can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
      </article>
    </>
  );
}