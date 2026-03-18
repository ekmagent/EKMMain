import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title:
    "medicare agent that helps with paperwork near me | Free Help | MedicareYourself",
  description:
    "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
  openGraph: {
    title:
      "medicare agent that helps with paperwork near me | Free Help | MedicareYourself",
    description:
      "Medicare agent that helps with paperwork near you in NJ. Anthony Orner handles applications, carrier forms, and CMS enrollment at no cost. Book a free call.",
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
      item: "https://www.medicareyourself.com/medicare-guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medicare Agent That Helps With Paperwork Near Me",
      item: "https://www.medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Medicare Agent That Actually Helps With Your Paperwork",
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
  mainEntityOfPage:
    "https://www.medicareyourself.com/services/medicare-agent-that-helps-with-paperwork-near-me",
};

const faqs = [
  {
    question: "Can a Social Security office help with Medicare questions?",
    answer:
      "Social Security offices handle initial Medicare enrollment and can answer basic eligibility questions. But they don't compare plans, fill out carrier applications, or help you choose between Medigap and Medicare Advantage. A licensed Medicare agent handles the parts Social Security won't.",
  },
  {
    question: "Does a Medicare agent charge for help with paperwork?",
    answer:
      "No. Licensed Medicare agents like Anthony Orner are paid by the insurance carriers, not by you. There's no fee for application help, plan comparisons, or enrollment assistance.",
  },
  {
    question: "What paperwork do I need to enroll in Medicare?",
    answer:
      "You'll need your Social Security number, your Part A and Part B effective dates (found on your Medicare card), and a completed application for whichever plan you choose. If you're enrolling in a Medigap plan, you'll also need health history answers during the application. Anthony handles all of this for you.",
  },
  {
    question:
      "What happens if I fill out my Medicare paperwork incorrectly?",
    answer:
      "Errors on applications can delay your coverage start date, cause claims to be denied, or even trigger late enrollment penalties. A common mistake is listing the wrong Part B effective date. Having an agent review everything before submission prevents these problems.",
  },
];

export default function MedicareAgentPaperworkPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/medicare-guides" className="hover:underline">
          Medicare Guides
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-700">
          Medicare Agent That Helps With Paperwork Near Me
        </span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        A Medicare Agent That Actually Helps With Your Paperwork
      </h1>

      <Image
        src="/images/medicare-agent-that-helps-with-paperwork-near-me_photo.webp"
        alt="medicare agent that helps with paperwork near me"
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
        priority
      />

      <p className="text-lg mb-2">
        A Medicare agent that helps with paperwork near you can be the difference between smooth enrollment and months of denied claims. I'm Anthony Orner, a licensed Medicare broker in New Jersey, and I fill out every form, call every carrier, and submit every application for my clients at zero cost.
      </p>
      <p className="text-lg mb-6">
        People come to me frustrated. They signed something at a hospital, got talked into a plan they didn't understand, or missed a box on a form and now their coverage is stuck. That's what I fix.
      </p>

      <PhoneCTA />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What paperwork is required when you enroll in Medicare
        </h2>
        <p className="mb-2">
          Medicare enrollment involves multiple layers of forms depending on your path:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Social Security application for Part A and Part B</li>
          <li>CMS enrollment forms for Medicare Advantage or Part D</li>
          <li>Carrier-specific applications for Medigap plans (including health questions outside open enrollment)</li>
          <li>Employer creditable coverage documentation if you delayed Part B</li>
        </ul>
        <p>
          Each form has its own rules and deadlines. Miss the wrong one and you could face the Part B late enrollment penalty: 10% added to your $202.90/month premium for every 12 months you delayed.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          How Anthony handles your Medicare application from start to finish
        </h2>
        <p className="mb-2">
          When you call me, here's what happens:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>I confirm your Part A and Part B effective dates</li>
          <li>I compare plans based on your doctors, prescriptions, and budget</li>
          <li>I fill out the application with you on the phone or in person</li>
          <li>I submit it directly to the carrier and follow up until you're confirmed</li>
        </ul>
        <p>
          You don't touch a single form unless you want to. Most enrollments take one phone call.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Common Medicare paperwork mistakes that delay coverage
        </h2>
        <p className="mb-2">
          I see the same errors every week:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Wrong Part B effective date on the application (this one causes the most claim denials)</li>
          <li>Forgetting to list Medicare as secondary payer when you still have employer coverage</li>
          <li>Signing up for Part B too early or too late after a kidney transplant or disability</li>
          <li>Choosing a Medicare Advantage plan without understanding prior authorization requirements</li>
        </ul>
        <p className="mt-2">
          One wrong field can mean months of rejected claims and surprise bills. I double-check everything before it goes out.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Why people get overwhelmed by Medicare forms
        </h2>
        <p className="mb-2">
          Medicare isn't one system. It's several programs run by different agencies and private carriers, each with their own paperwork. Social Security handles enrollment. CMS oversees the program. Private insurers issue the actual plans.
        </p>
        <p>
          Nobody explains this clearly. People end up bouncing between 1-800 numbers, getting different answers each time. That's exactly the problem a local agent solves.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          What a Social Security office won't do for you
        </h2>
        <p className="mb-2">
          Social Security processes your Part A and Part B enrollment. That's it. They won't compare Medigap plans. They won't fill out carrier applications. They won't tell you whether Plan G or Plan N saves you more money.
        </p>
        <p>
          A licensed broker does all of that. And unlike a government office, I pick up the phone.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Get free hands-on enrollment help in New Jersey
        </h2>
        <p className="mb-2">
          I work with clients across New Jersey. Whether you're turning 65, leaving employer coverage, or cleaning up a mess from a bad enrollment, I handle the paperwork so you don't have to.
        </p>
        <p>
          No cost. No pressure. Just the forms filled out right the first time.
        </p>
      </section>

      <div className="mt-10 bg-blue-600 text-white rounded-lg p-6 text-center">
        <p className="text-xl font-semibold mb-2">
          Call 855-559-1700 for free Medicare paperwork help
        </p>
        <p className="mb-4">
          Anthony handles your application, carrier forms, and enrollment at no charge.
        </p>
        <Link
          href="tel:855-559-1700"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition mr-4"
        >
          Call Now
        </Link>
        <Link
          href="/get-a-free-quote"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <section className="mt-12">
        <FAQSection faqs={faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related resources</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/medicare-guides/how-to-enroll-in-medicare"
              className="text-blue-600 hover:underline"
            >
              How to Enroll in Medicare: Step-by-Step
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medigap-plan-g-vs-plan-n"
              className="text-blue-600 hover:underline"
            >
              Medigap Plan G vs. Plan N: Which Saves You More?
            </Link>
          </li>
          <li>
            <Link
              href="/medicare-guides/medicare-part-b-late-enrollment-penalty"
              className="text-blue-600 hover:underline"
            >
              Medicare Part B Late Enrollment Penalty Explained
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-blue-600 hover:underline"
            >
              About Anthony Orner, Licensed Medicare Broker
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}