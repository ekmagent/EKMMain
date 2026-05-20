import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "local medicare agent | Free Consultation, No Obligation | MedicareYourself",
  description:
    "Work with a licensed local NJ Medicare agent who compares top carriers at no cost. Get unbiased plan guidance from Anthony Orner — call 855-559-1700 today.",
  alternates: { canonical: "https://medicareyourself.com/services/local-medicare-agent" },
  openGraph: {
    title:
      "local medicare agent | Free Consultation, No Obligation | MedicareYourself",
    description:
      "Local medicare agent Anthony Orner is licensed in NJ and PA, representing top carriers. Get unbiased plan guidance at zero cost. Book a free call today.",
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
      name: "Local Medicare Agent",
      item: "https://medicareyourself.com/services/local-medicare-agent",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Local Medicare Agent in New Jersey: Licensed Help You Can Actually Meet",
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
    "https://medicareyourself.com/services/local-medicare-agent",
};

const faqs = [
  {
    question: "Does a local Medicare agent charge a fee?",
    answer:
      "No. Licensed Medicare agents are paid by the insurance carriers, not by you. There is zero cost for consultations, plan comparisons, or enrollment help.",
  },
  {
    question: "What's the difference between a Medicare agent and a broker?",
    answer:
      "A captive agent represents one carrier. An independent broker like Anthony Orner represents multiple carriers, so they can compare plans side by side and recommend based on your actual needs, not a sales quota.",
  },
  {
    question: "Can a local Medicare agent help me switch plans?",
    answer:
      "Yes. During the Medicare Advantage Open Enrollment (October 15 through December 7) or if you qualify for a Special Enrollment Period, a local agent can review your current coverage, compare alternatives, and handle the switch for you.",
  },
  {
    question: "What areas does Anthony Orner serve?",
    answer:
      "Anthony is licensed in New Jersey and Pennsylvania. He works with clients across Morris, Essex, Bergen, Passaic, Sussex, Warren, and Hunterdon counties, as well as parts of eastern PA. Phone and video consultations are available statewide.",
  },
,
  {
    question: "How do I prepare for a meeting with a local Medicare agent?",
    answer:
      "Have a list of your current doctors, preferred hospitals, and prescription medications (including dosages) ready. It also helps to know your Medicare number and Part A/Part B effective dates. This lets your agent run an accurate plan comparison based on your actual providers and drugs.",
  },
  {
    question: "Is meeting with a local Medicare agent better than enrolling online?",
    answer:
      "A local agent reviews your specific doctors, prescriptions, and budget before recommending a plan, which an online enrollment tool cannot do. Agents also stay with you year over year to handle plan reviews, claim issues, and Annual Enrollment changes. There is no extra cost compared to enrolling directly.",
  },
  {
    question: "Do I have to meet in person, or can we do it by phone?",
    answer:
      "Either works. Anthony Orner offers in-person appointments across northern and central New Jersey, plus phone and video consultations for clients who prefer to meet remotely. The plan options and pricing are identical regardless of how you choose to meet.",
  }
,
  {
    question: "How do I find a licensed local Medicare agent I can trust?",
    answer:
      "Verify the agent's license through your state's department of banking and insurance, and confirm they hold an active National Producer Number (NPI). A trustworthy local agent will represent multiple carriers, explain how they're compensated, and never pressure you into a same-day decision. Anthony Orner (NPI 1902584006) is happy to share credentials before any meeting.",
  },
  {
    question: "Will a local Medicare agent help me after I enroll?",
    answer:
      "Yes. A good local agent provides ongoing support, including annual plan reviews during the Medicare Advantage Open Enrollment Period, help with billing or ID card issues, and guidance if your doctors or medications change. Year-round service is part of how independent brokers earn long-term client relationships.",
  },
  {
    question: "Can I meet with a local Medicare agent virtually instead of in person?",
    answer:
      "Yes. Many beneficiaries prefer phone or video consultations for convenience, and licensed agents can complete plan comparisons and enrollments remotely. In-person meetings remain available across NJ if you'd rather review materials face to face.",
  }
,
  {
    question: "How do I find a licensed local Medicare agent I can trust?",
    answer:
      "Verify the agent's license through your state's Department of Banking and Insurance and confirm they're appointed with multiple carriers. Independent brokers can compare plans across companies, while captive agents only represent one. You can also check medicare.gov or call 1-800-MEDICARE to confirm an agent is registered to sell Medicare products.",
  },
  {
    question: "What should I bring to my first meeting with a local Medicare agent?",
    answer:
      "Bring your red, white, and blue Medicare card, a list of current prescriptions with dosages, and the names of your preferred doctors and hospitals. Also have any current insurance cards available. This information lets your agent check network and formulary coverage for an accurate side-by-side plan comparison.",
  }
,
  {
    question: "Will a local Medicare agent help me after I enroll?",
    answer:
      "Yes. A good local agent stays with you year after year, reviewing your plan during the Annual Enrollment Period and helping if your doctors, drugs, or health needs change. They can also assist with billing questions, ID card issues, and Special Enrollment Period changes.",
  },
  {
    question: "How do I verify a local Medicare agent is licensed?",
    answer:
      "Ask for the agent's National Producer Number (NPN) and the states they are licensed in, then verify through your state's Department of Banking and Insurance. Anthony Orner's NPN is 1902584006, and he is licensed in New Jersey plus 34 additional states.",
  }
,
  {
    question: "Will my local Medicare agent help me after I enroll?",
    answer:
      "Yes. A good local agent stays with you year after year to handle annual plan reviews, claim questions, billing issues, and changes to your prescriptions or providers. You should never have to pay extra for this ongoing service.",
  }
];

export default function LocalMedicareAgentPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/services">Medicare Guides</Link> &gt;{" "}
        <span>Local Medicare Agent</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Local Medicare Agent in New Jersey: Licensed Help You Can Actually Meet
      </h1>

      <Image
        src="/images/local-medicare-agent.webp"
        alt="local medicare agent"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Local medicare agent support changes everything when you're choosing
        coverage. Instead of repeating your health history to a different call
        center rep every time, you get one licensed person who knows your
        situation, lives in your area, and picks up when you call.
      </p>
      <p className="text-lg mb-6">
        I'm Anthony Orner, an independent Medicare broker licensed in New Jersey
        and Pennsylvania. I represent multiple carriers, and my help costs you
        nothing.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Why working with a local broker beats a 1-800 number
        </h2>
        <p className="mb-2">
          National hotlines assign you to whoever is available. That person
          doesn't know which hospitals are in-network near you, which
          pharmacies your plan covers, or what your county's plan options
          actually look like.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>A local agent knows the carrier networks in your ZIP code</li>
          <li>You can meet face to face or talk by phone, your choice</li>
          <li>
            You get the same person year after year, not a rotating call center
          </li>
          <li>If a claim goes sideways, you have someone to call directly</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a licensed Medicare agent actually does for you
        </h2>
        <p className="mb-2">
          I compare plans across carriers, check that your doctors are
          in-network, verify your prescriptions are on formulary, and calculate
          your real out-of-pocket costs. Then I handle enrollment paperwork.
        </p>
        <p>
          After enrollment, I stay your point of contact. Billing issue? Coverage
          denial? I make the calls so you don't sit on hold.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Plans I help clients compare
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Medicare Advantage (Part C):</strong> Bundled medical, drug,
            and often dental/vision coverage. $0 premium options exist in NJ.
          </li>
          <li>
            <strong>Medigap (Medicare Supplement):</strong> Covers gaps in
            Original Medicare. Apply within your 6-month Medigap Open Enrollment
            to lock in the best rate regardless of health.
          </li>
          <li>
            <strong>Part D prescription drug plans:</strong> Standalone drug
            coverage paired with Original Medicare and a Medigap policy.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Areas in New Jersey Anthony Orner serves
        </h2>
        <p className="mb-2">
          I work with clients across northern and central New Jersey: Morris,
          Essex, Bergen, Passaic, Sussex, Warren, and Hunterdon counties. I'm
          also licensed in Pennsylvania for those near the border.
        </p>
        <p>
          Phone and video appointments are available statewide. You don't have to
          be local to get local-level attention.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key dates to keep in mind for 2026
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Medicare Advantage / Part D Open Enrollment: October 15 through
            December 7
          </li>
          <li>
            Medigap Open Enrollment: 6 months starting the month you turn 65 and
            have Part B
          </li>
          <li>Part B monthly premium (2026): $202.90</li>
          <li>Part A deductible (2026): $1,676 per benefit period</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to schedule a free Medicare consultation
        </h2>
        <p className="mb-2">
          Call <strong>855-559-1700</strong> or use the link below to book a
          time. I'll ask about your doctors, prescriptions, and budget. Then I'll
          show you what makes sense. No pressure, no obligation.
        </p>
        <p>
          If you already have a plan and want a second opinion before the next
          enrollment period, that's a smart reason to call too.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center my-10">
        <p className="text-2xl font-bold mb-2">Talk to a local agent today</p>
        <p className="text-lg mb-4">
          Call{" "}
          <a href="tel:8555591700" className="underline font-semibold">
            855-559-1700
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline font-semibold">
            Get a Free Quote
          </Link>
        </p>
        <p className="text-sm opacity-90">
          No cost. No obligation. Licensed in NJ and PA.
        </p>
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-advantage/new-jersey"
              className="text-blue-600 underline"
            >
              Medicare Advantage Plans in New Jersey
            </Link>
          </li>
          <li>
            <Link
              href="/learn/what-is-medigap"
              className="text-blue-600 underline"
            >
              Medigap Plans Explained: Which Letter Plan Fits?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/medicare-enrollment-periods"
              className="text-blue-600 underline"
            >
              Medicare Enrollment Periods and Deadlines
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 underline">
              About Anthony Orner, Licensed Medicare Broker
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
                href="/services/best-medicare-broker-no-cost-to-you"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Broker No Cost To You
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Talk to Someone</a> and <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov Plan Compare</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">For free, unbiased state counseling, contact <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">New Jersey SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also contact the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ State Health Insurance Assistance Program (SHIP)</a> for free, unbiased Medicare counseling.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free, unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </>
  );
}