import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agents near me | Free Unbiased Plan Comparison | MedicareYourself",
  description:
    "Talk to a licensed Medicare agent near you for free, unbiased plan comparisons across major carriers. Call 855-559-1700 for honest, no-pressure guidance.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-agents-near-me" },
  openGraph: {
    title:
      "medicare agents near me | Free Unbiased Plan Comparison | MedicareYourself",
    description:
      "Medicare agents near me — find an independent broker who compares every major carrier with no bias. Anthony Orner offers free, no-pressure consultations.",
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
      name: "Medicare Agents Near Me",
      item: "https://medicareyourself.com/services/medicare-agents-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agents Near Me: What to Look for and How to Get Honest Help",
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
    "https://medicareyourself.com/services/medicare-agents-near-me",
};

const faqs = [
  {
    question: "Do Medicare agents charge a fee for their help?",
    answer:
      "No. Licensed Medicare agents and brokers are paid by insurance carriers, not by you. You pay $0 for consultations, plan comparisons, and enrollment assistance. Your premium stays the same whether you enroll directly or through an agent.",
  },
  {
    question: "What's the difference between a Medicare agent and a broker?",
    answer:
      "A captive agent represents one insurance company and can only show you that company's plans. An independent broker (like EasyKind Medicare) is contracted with multiple carriers and can compare plans across companies to find the best fit for your situation.",
  },
  {
    question: "How do I know if a Medicare agent is licensed?",
    answer:
      "Ask for their National Producer Number (NPN). You can verify any agent's license on your state's Department of Insurance website. A legitimate agent will share this information without hesitation.",
  },
  {
    question: "Can a Medicare agent help me switch plans?",
    answer:
      "Yes. During the Annual Enrollment Period (October 15 – December 7) or if you qualify for a Special Enrollment Period, a licensed agent can help you review your current coverage and switch to a plan that better fits your needs.",
  },
,
  {
    question: "How do I find a trustworthy Medicare agent near me?",
    answer:
      "Look for an independent broker who is licensed in your state and contracted with multiple major carriers. Ask how they get paid, whether they charge fees, and if they offer ongoing support after enrollment. A trustworthy agent will explain options clearly, share their National Producer Number, and never pressure you into a decision.",
  }
,
  {
    question: "Should I meet a Medicare agent in person or is a phone consultation enough?",
    answer:
      "Both options are equally effective for most beneficiaries. Phone and video consultations allow a licensed agent to compare plans, check your doctors and prescriptions, and complete enrollment securely from home. In-person meetings can be arranged if you prefer face-to-face guidance, but they are not required to get accurate, personalized advice.",
  }
,
  {
    question: "Do Medicare agents near me work with all the major carriers?",
    answer:
      "Independent brokers contract with multiple major carriers, while captive agents only represent one company. Before scheduling a consultation, ask which carriers the agent is appointed with. The more carriers an agent represents, the more objective the plan comparison can be.",
  }
,
  {
    question: "What questions should I ask a Medicare agent before enrolling?",
    answer:
      "Ask which carriers they represent, how they're compensated, and whether they're independent or captive. Confirm they're licensed in your state and request their National Producer Number. Also ask about ongoing service — will they help with claims, plan reviews, or questions after enrollment?",
  }
,
  {
    question: "What questions should I ask a Medicare agent before enrolling?",
    answer:
      "Ask which carriers they are contracted with, whether they are independent or captive, and how they get paid. You should also ask about their National Producer Number, whether your preferred doctors and prescriptions are covered under the recommended plan, and what kind of support they provide after enrollment. A trustworthy agent will answer all of these openly.",
  }
,
  {
    question: "What questions should I ask a Medicare agent before enrolling?",
    answer:
      "Ask which carriers they are contracted with, how many plans they can compare, and whether they receive different commissions from different companies. Also ask about ongoing support — will they help you if a claim is denied or if your medications change mid-year? A good agent welcomes these questions and answers them transparently.",
  }
,
  {
    question: "What questions should I ask a Medicare agent before enrolling?",
    answer:
      "Ask which carriers they represent, how they are compensated, and whether they offer ongoing support after enrollment. You should also ask for their National Producer Number, confirm they are licensed in your state, and find out if they review your plan annually to ensure it still fits your needs.",
  }
,
  {
    question: "What questions should I ask a Medicare agent before working with them?",
    answer:
      "Ask which carriers they are contracted with, how they are compensated, and whether they offer support after enrollment. Request their National Producer Number so you can verify their license with your state's Department of Insurance. A reputable agent will answer these questions openly and never pressure you to enroll on the spot.",
  },
  {
    question: "Can a Medicare agent help me if I have both Medicare and Medicaid?",
    answer:
      "Yes. A licensed agent can review Dual Special Needs Plans (D-SNPs) designed for people who qualify for both Medicare and Medicaid. These plans often include extra benefits beyond Original Medicare, and an independent broker can compare D-SNP options across carriers in your area.",
  }
,
  {
    question: "How do I find a trustworthy Medicare agent near me?",
    answer:
      "Look for an independent broker licensed in your state and contracted with multiple major carriers. Ask how they get paid, request their National Producer Number, and confirm they offer year-round support after enrollment. A trustworthy agent explains options clearly and never pressures you into a decision.",
  },
  {
    question: "Is a phone consultation as effective as meeting in person?",
    answer:
      "Yes. Most Medicare consultations work just as well by phone or video as they do in person, since plan comparisons rely on reviewing your ZIP code, doctors, prescriptions, and budget. Call 855-559-1700 to schedule a free, no-pressure consultation at a time that works for you.",
  }
,
  {
    question: "Should I meet a Medicare agent in person or is a phone consultation enough?",
    answer:
      "Both options work well for most beneficiaries. Phone and video consultations give you the same plan comparisons, enrollment help, and licensed guidance as an in-person meeting, often with more scheduling flexibility. Choose whichever format helps you ask questions comfortably and review materials at your own pace.",
  }
];

export default function MedicareAgentsNearMe() {
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
        <span className="text-gray-700">Medicare Agents Near Me</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Medicare Agents Near Me: What to Look for and How to Get Honest Help
      </h1>

      <Image
        src="/images/medicare-agents-near-me.webp"
        alt="medicare agents near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        Medicare agents near me is one of the most common searches people make when they're turning 65 or losing employer coverage. The problem isn't finding an agent. It's finding one who actually works for you and not a single insurance company.
      </p>
      <p className="text-lg mb-6">
        Here's what separates a good Medicare agent from a bad one, and how to tell the difference before you sign anything.
      </p>

      <PhoneCTA />

      <section className="mt-10 mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Captive vs. independent agents — why it matters
        </h2>
        <p className="mb-2">
          A captive agent works for one insurance company. They can only show you that company's plans. If their carrier doesn't offer the best option for your prescriptions or doctors, you'll never hear about the one that does.
        </p>
        <p>
          An independent broker is contracted with multiple carriers. They compare Medicare Advantage, Medigap, and Part D plans across companies. Same enrollment, same premiums, zero bias.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          What a good agent actually does for you
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reviews your current prescriptions and checks formulary coverage across carriers</li>
          <li>Confirms your doctors are in-network before you enroll</li>
          <li>Explains the real cost differences between Medicare Advantage and Medigap</li>
          <li>Walks you through the 2026 Part B premium ($202.90/month) and Part A deductible ($1,676 per benefit period) so you understand what Original Medicare doesn't cover</li>
          <li>Follows up after enrollment if you have billing issues or need to switch plans</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Red flags to watch for when choosing an agent
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>They push one plan hard</strong> without asking about your medications or providers</li>
          <li><strong>They won't share their NPN</strong> (National Producer Number) so you can verify their license</li>
          <li><strong>They create false urgency</strong> outside of a real enrollment window</li>
          <li><strong>They claim their help has a fee.</strong> Licensed agents are paid by carriers. You pay $0</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          How to verify any agent's license
        </h2>
        <p className="mb-2">
          Every licensed Medicare agent has an NPN. Ask for it. Then check it on your state's Department of Insurance website or at <a href="https://nipr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nipr.com</a>.
        </p>
        <p>
          If someone avoids this question, walk away.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          When you should talk to an agent
        </h2>
        <p className="mb-2">
          The best time is 2-3 months before you turn 65. Your Medigap Open Enrollment Period starts the month you're 65 and enrolled in Part B, and lasts six months. During that window, carriers can't deny you or charge more for pre-existing conditions.
        </p>
        <p>
          Already on Medicare? The Annual Enrollment Period runs October 15 through December 7. That's your yearly window to compare plans and switch if your current coverage isn't working.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Work with a licensed independent broker at no cost
        </h2>
        <p className="mb-2">
          I'm Anthony Orner, a licensed independent Medicare broker with EasyKind Medicare. I compare plans from every major carrier and give you a straight answer about what fits your situation.
        </p>
        <p>
          No pressure, no sales pitch, no cost to you. Call or schedule a time that works.
        </p>
      </section>

      <div className="bg-blue-600 text-white rounded-lg p-6 text-center my-10">
        <p className="text-xl font-semibold mb-2">
          Ready for an honest plan comparison?
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

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
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
              href="/medicare-supplement/new-jersey/turning-65"
              className="text-blue-600 hover:underline"
            >
              Medigap Open Enrollment: When and Why It Matters
            </Link>
          </li>
          <li>
            <Link
              href="/learn/how-to-sign-up-for-medicare"
              className="text-blue-600 hover:underline"
            >
              Part B Enrollment: Deadlines and Late Penalties
            </Link>
          </li>
          <li>
            <Link
              href="/services/help-with-your-medicare-decision"
              className="text-blue-600 hover:underline"
            >
              Schedule a Free Medicare Consultation
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
                href="/services/medicare-agent-near-me"
                className="text-blue-600 hover:underline"
              >
                Medicare Agent Near Me
              </Link>
            </li>
</ul>
            <div className="text-sm text-gray-600 mt-4">Official resources: <a href="https://www.medicare.gov/talk-to-someone" rel="noopener noreferrer" target="_blank" className="underline">Medicare.gov — Talk to Someone</a> and <a href="https://www.medicare.gov/plan-compare" rel="noopener noreferrer" target="_blank" className="underline">Medicare Plan Finder</a>.</div>
            <div className="text-sm text-gray-600 mt-2">Verify any agent's license with the <a href="https://www.state.nj.us/dobi/inslic.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free local counseling: <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">Find your State Health Insurance Assistance Program (SHIP)</a> for unbiased Medicare guidance in your state.</div>
            <div className="text-sm text-gray-600 mt-2">Verify any agent's license or find free local counseling through your <a href="https://www.shiphelp.org/" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">Free unbiased counseling is also available through your <a href="https://www.shiphelp.org/about-medicare/regional-ship-location" rel="noopener noreferrer" target="_blank" className="underline">State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify any agent's license through the <a href="https://www.state.nj.us/dobi/insurance.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance</a> or get free counseling from <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can verify any agent's license and file complaints through the <a href="https://www.state.nj.us/dobi/inssrch.htm" rel="noopener noreferrer" target="_blank" className="underline">NJ Department of Banking and Insurance Producer Search</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can get free, unbiased counseling through the <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ State Health Insurance Assistance Program (SHIP)</a>.</div>
            <div className="text-sm text-gray-600 mt-4">New Jersey residents can also get free unbiased counseling through <a href="https://www.state.nj.us/humanservices/doas/services/ship/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">NJ SHIP (State Health Insurance Assistance Program)</a>.</div>
      </section>
    </main>
  );
}