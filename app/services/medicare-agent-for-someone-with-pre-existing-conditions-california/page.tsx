import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent for someone with pre existing conditions california | Free Help | MedicareYourself",
  description:
    "Pre-existing conditions in California? A licensed Medicare broker explains Medigap timing, the Birthday Rule & guaranteed issue. Free help: 855-559-1700.",
  alternates: { canonical: "https://medicareyourself.com/services/medicare-agent-for-someone-with-pre-existing-conditions-california" },
  openGraph: {
    title:
      "medicare agent for someone with pre existing conditions california | Free Help | MedicareYourself",
    description:
      "Medicare agent for pre-existing conditions in California? Learn which plans skip health questions and when. Connect with a licensed broker at no cost.",
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
      name: "Medicare Agent for Pre-Existing Conditions in California",
      item: "https://medicareyourself.com/services/medicare-agent-for-someone-with-pre-existing-conditions-california",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Medicare Agent for Someone with Pre-Existing Conditions in California",
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
    question:
      "Can you get a Medicare Supplement plan if you have a pre-existing condition?",
    answer:
      "Yes, but timing matters. During your 6-month Medigap Open Enrollment Period (starts the month you turn 65 and have Part B), insurers cannot deny you or charge more due to health conditions. Outside that window, California law provides limited guaranteed-issue rights tied to specific qualifying events. Miss both, and carriers can underwrite based on your health history.",
  },
  {
    question:
      "Does lupus or another chronic illness qualify you for Medicare before 65?",
    answer:
      "If lupus or another condition prevents you from working, you may qualify for Social Security Disability Insurance (SSDI). After 24 months of SSDI benefits, you automatically get Medicare Parts A and B regardless of age. End-Stage Renal Disease (ESRD) and ALS have shorter or immediate qualifying periods.",
  },
  {
    question:
      "What is the difference between Medigap and Medicare Advantage for someone with chronic conditions?",
    answer:
      "Medigap (Medicare Supplement) pairs with Original Medicare and covers cost-sharing like the 20% Part B coinsurance with no network restrictions. Medicare Advantage plans use provider networks but often include prescription drug coverage and extras like dental. If you see specialists frequently or travel within California for care, Medigap typically offers more flexibility.",
  },
  {
    question:
      "How much does it cost to work with a Medicare agent in California?",
    answer:
      "A licensed Medicare agent or broker costs you nothing. Agents are paid by the insurance carriers, not by you. The plan premiums are the same whether you enroll on your own or through an agent.",
  },

  {
    question: "Does California have special Medigap rules for people with pre-existing conditions?",
    answer:
      "Yes. California offers a birthday rule that lets current Medigap enrollees switch to an equal or lesser plan from any carrier within 60 days of their birthday each year without medical underwriting. This is in addition to the federal 6-month Medigap Open Enrollment Period that begins when you are 65 and enrolled in Part B.",
  }
,
  {
    question: "Does California have a Medigap birthday rule for people with pre-existing conditions?",
    answer:
      "Yes. California's Medigap birthday rule lets you switch to another Medigap plan with equal or lesser benefits from the same or different carrier without medical underwriting during a window around your birthday each year. This is especially valuable if you have pre-existing conditions and want to change plans without answering health questions. Your current coverage must already be a Medigap policy to qualify.",
  },
  {
    question: "Can Medicare Advantage plans in California deny me for pre-existing conditions?",
    answer:
      "No. Medicare Advantage plans cannot deny enrollment or charge more based on pre-existing conditions, with the historical exception of End-Stage Renal Disease — and that exclusion was removed, so ESRD patients can now enroll in Medicare Advantage. You can join any Medicare Advantage plan in your service area during a valid enrollment period regardless of health history.",
  },
  {
    question: "What should I tell a Medicare agent about my pre-existing conditions?",
    answer:
      "Share your full list of diagnoses, current medications, preferred doctors, and any upcoming procedures. A licensed broker uses that information to check plan formularies, provider networks, and whether you qualify for guaranteed-issue Medigap rights. The more complete the picture, the better the plan match — and nothing you share affects the cost of your coverage.",
  }
,
  {
    question: "Does California's Medigap birthday rule help if I have pre-existing conditions?",
    answer:
      "Yes. California's birthday rule lets you switch to another Medigap plan with equal or lesser benefits from the same or a different carrier each year around your birthday without medical underwriting. This is especially valuable if you have chronic conditions that would otherwise trigger denials or higher premiums outside guaranteed-issue windows.",
  }
,
  {
    question: "Does California have special Medigap rules for people with pre-existing conditions?",
    answer:
      "Yes. California offers the Medigap Birthday Rule, which lets current Medigap enrollees switch to another Medigap plan with equal or lesser benefits from the same or different carrier without medical underwriting. The window opens on your birthday each year and runs for a limited number of days. This is a California-specific protection that does not exist in most other states.",
  }
];

export default function MedicareAgentPreExistingConditionsCA() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema, articleSchema]} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/services" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span>Medicare Agent for Pre-Existing Conditions in California</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Medicare Agent for Someone with Pre-Existing Conditions in California
        </h1>

        <Image
          src="/images/medicare-agent-for-someone-with-pre-existing-conditions-california.webp"
          alt="medicare agent for someone with pre existing conditions california"
          width={800}
          height={400}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p className="text-lg mb-2">
          A Medicare agent for someone with pre-existing conditions in California can mean the difference between full coverage and a rejection letter. If you have diabetes, COPD, cancer, or any chronic illness, the plan you pick and <em>when</em> you enroll changes everything.
        </p>
        <p className="mb-6">
          The rules aren't the same as the ACA marketplace. Medigap insurers in California can ask health questions outside specific windows. A licensed broker who understands these timelines can steer you away from costly mistakes.
        </p>

        <PhoneCTA />

        <section className="mt-8 mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            California's guaranteed-issue windows that bypass health questions
          </h2>
          <p className="mb-2">
            Your strongest protection is the Medigap Open Enrollment Period: the 6 months starting the month you turn 65 and have Part B. During this window, no carrier in California can deny you, delay coverage, or charge higher premiums because of a pre-existing condition.
          </p>
          <p>
            California also grants guaranteed-issue rights if you lose Medicare Advantage coverage, your plan leaves your county, or your carrier goes bankrupt. These windows are short and date-specific. Missing them by even a week can force you into medical underwriting.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Which plans accept pre-existing conditions without a waiting period
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medicare Advantage (Part C):</strong> Cannot deny you for pre-existing conditions during Annual Enrollment (October 15 through December 7) as long as you have Parts A and B.
            </li>
            <li>
              <strong>Medigap during Open Enrollment:</strong> No health questions, no waiting periods. Coverage begins immediately for all conditions.
            </li>
            <li>
              <strong>Medigap outside Open Enrollment:</strong> Carriers can impose up to a 6-month waiting period for conditions treated or diagnosed in the 6 months before coverage starts. They can also deny your application entirely.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Medigap vs. Medicare Advantage when you have a chronic illness
          </h2>
          <p className="mb-2">
            With Medigap, you keep Original Medicare. Any doctor who accepts Medicare accepts you. No referrals, no network. You pay a monthly premium, but your out-of-pocket exposure on the 20% Part B coinsurance and the $1,676 Part A deductible is covered (depending on the plan letter).
          </p>
          <p>
            Medicare Advantage plans often have $0 premiums and include drug coverage, dental, and vision. But they use networks. If your oncologist or cardiologist is out-of-network, you could face much higher costs or need to switch providers. For people managing ongoing specialist care across California, that trade-off matters.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why working with a licensed agent matters for complicated health histories
          </h2>
          <p className="mb-2">
            A lot of people don't realize Medigap isn't covered by the same ACA protections as marketplace plans. That confusion leads to missed deadlines and denied applications. We've seen it happen to people in their late 60s who assumed they could sign up anytime.
          </p>
          <p>
            A licensed California Medicare broker reviews your medications, doctors, and diagnosis timeline to identify the right enrollment path. There's no fee for this. Carriers pay the agent, so your premium stays the same whether you call us or enroll alone online.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            What to do if you already missed your open enrollment window
          </h2>
          <p className="mb-2">
            Not all hope is lost. Check whether you qualify for a federal guaranteed-issue right: losing employer coverage, moving out of your plan's service area, or dropping a Medicare Advantage plan within 12 months of first joining one. Each trigger opens a short enrollment window.
          </p>
          <p>
            If no guaranteed-issue event applies, some California Medigap carriers are more lenient than others during underwriting. An experienced broker knows which ones and can present your application strategically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How to get started with a free California Medicare consultation
          </h2>
          <p>
            Call us at <strong>855-559-1700</strong>. Tell us your conditions, your medications, and your current coverage. We'll map out which plans are available to you right now and which enrollment windows are coming up. No pressure, no cost, no obligation.
          </p>
        </section>

        <div className="bg-blue-600 text-white rounded-lg p-6 text-center mb-8">
          <p className="text-xl font-semibold mb-2">
            Talk to a licensed California Medicare broker today.
          </p>
          <p className="text-lg mb-4">
            Call{" "}
            <a
              href="tel:855-559-1700"
              className="underline font-bold text-white"
            >
              855-559-1700
            </a>{" "}
            or{" "}
            <Link
              href="/quote"
              className="underline font-bold text-white"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/medicare-supplement/new-jersey/turning-65" className="text-blue-600 hover:underline">
                Medigap Open Enrollment Period Explained
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey/vs-medicare-advantage" className="text-blue-600 hover:underline">
                Medicare Advantage vs. Medigap: How to Choose
              </Link>
            </li>
            <li>
              <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">
                Federal Guaranteed Issue Rights for Medicare Supplements
              </Link>
            </li>
            <li>
              <Link href="/services/medicare-agent-for-someone-with-pre-existing-conditions-california" className="text-blue-600 hover:underline">
                Find a Licensed Medicare Broker in California
              </Link>
            </li>
                      <li>
              <Link
                href="/services/us-medicare-brokers"
                className="text-blue-600 hover:underline"
              >
                Us Medicare Brokers
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
                href="/services/help-with-your-medicare-decision"
                className="text-blue-600 hover:underline"
              >
                Help With Your Medicare Decision
              </Link>
            </li>
            <li>
              <Link
                href="/services/best-medicare-plan-for-chronic-conditions"
                className="text-blue-600 hover:underline"
              >
                Best Medicare Plan For Chronic Conditions
              </Link>
            </li>
</ul>
              <div className="text-sm text-gray-600 mt-4"><p className="font-semibold mb-2">Official Medicare Resources:</p><ul className="list-disc pl-5 space-y-1"><li><a href="https://www.medicare.gov/health-drug-plans/medigap/basics/when-to-buy" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov: When can I buy Medigap?</a></li><li><a href="https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">Medicare.gov: Parts of Medicare</a></li></ul></div>
            <div className="text-sm text-gray-600 mt-4"><p>California residents can get free, unbiased counseling through <a href="https://www.aging.ca.gov/HICAP/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">HICAP (California's SHIP program)</a> or file insurance questions with the <a href="https://www.insurance.ca.gov/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">California Department of Insurance</a>.</p></div>
            <div className="text-sm text-gray-600 mt-4">California residents can get free unbiased counseling from <a href="https://www.aging.ca.gov/HICAP/" rel="noopener noreferrer" target="_blank" className="underline">HICAP, California's SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">California residents can get free, unbiased counseling through <a href="https://www.aging.ca.gov/HICAP/" rel="noopener noreferrer" target="_blank" className="underline">HICAP (California's SHIP program)</a> or verify carriers with the <a href="https://www.insurance.ca.gov/" rel="noopener noreferrer" target="_blank" className="underline">California Department of Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">California residents can get free unbiased counseling from <a href="https://www.aging.ca.gov/HICAP/" rel="noopener noreferrer" target="_blank" className="underline">HICAP — California's SHIP program</a>.</div>
            <div className="text-sm text-gray-600 mt-4">California residents can also get free, unbiased counseling through <a href="https://www.aging.ca.gov/HICAP/" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">HICAP (California's SHIP program)</a> or contact the <a href="https://www.insurance.ca.gov/01-consumers/105-type/95-guides/05-health/medicare-supplement.cfm" rel="noopener noreferrer" target="_blank" className="text-blue-600 underline">California Department of Insurance</a>.</div>
            <div className="text-sm text-gray-600 mt-4">California residents: contact <a href="https://www.insurance.ca.gov/01-consumers/105-type/95-guides/05-health/medicare-supp.cfm" rel="noopener noreferrer" target="_blank" className="underline">California Department of Insurance — Medicare Supplement</a> or the <a href="https://cahealthadvocates.org/hicap/" rel="noopener noreferrer" target="_blank" className="underline">California HICAP (SHIP) program</a> for free local counseling.</div>
            <div className="text-sm text-gray-600 mt-4">California help: <a href="https://aging.ca.gov/Programs_and_Services/Medicare_Counseling/" rel="noopener noreferrer" target="_blank" className="underline">California HICAP — free Medicare counseling</a> through the California Department of Aging.</div>
      </section>
      </article>
    </>
  );
}