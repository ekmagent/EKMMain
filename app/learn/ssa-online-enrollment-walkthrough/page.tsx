import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How to Enroll in Medicare Online at SSA.gov (Step-by-Step Walkthrough)",
  description:
    "A screen-by-screen walkthrough of the Social Security Administration online Medicare enrollment process. 9 steps, about 10 minutes. Free help: 855-559-1700.",
  alternates: {
    canonical: `${SITE_URL}/learn/ssa-online-enrollment-walkthrough`,
  },
  openGraph: {
    title:
      "How to Enroll in Medicare Online at SSA.gov (Step-by-Step Walkthrough)",
    description:
      "A screen-by-screen walkthrough of the Social Security Administration online Medicare enrollment process. 9 steps, about 10 minutes.",
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
      name: "Learn",
      item: "https://medicareyourself.com/learn",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SSA Online Enrollment Walkthrough",
      item: "https://medicareyourself.com/learn/ssa-online-enrollment-walkthrough",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enroll in Medicare Online Through SSA.gov",
  description:
    "Step-by-step walkthrough of the Social Security Administration website to sign up for Medicare Part A and Part B online.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Go to the SSA Medicare sign-up page",
      text: "Visit ssa.gov/medicare/sign-up. Accept the terms of service and click Next.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Start a new application",
      text: "On the Apply for Benefits screen, under 'Apply & Complete,' click 'Start a New Application.'",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Sign in or create a Social Security account",
      text: "If you have an existing my Social Security account, sign in. If not, create one using Login.gov or ID.me. You will need your Social Security number and a driver's license for identity verification.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Log in to your account",
      text: "Select whether you are applying for yourself and confirm you have a my Social Security account.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Enter personal information",
      text: "Provide your name, Social Security number, date of birth, and gender.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Answer eligibility questions",
      text: "Answer questions about vision, disability status, and work history.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Choose whether to enroll in Part B",
      text: "You will be asked if you want to apply for Medicare only (without retirement benefits) and whether you want to enroll in Part B.",
    },
    {
      "@type": "HowToStep",
      position: 8,
      name: "Provide insurance and employment information",
      text: "Enter details about any current health insurance coverage, including employer group health plans, Medicaid, and employment dates.",
    },
    {
      "@type": "HowToStep",
      position: 9,
      name: "Review, sign, and submit",
      text: "Review your application, agree to the Electronic Signature Agreement, and click Submit Now. You cannot modify your application after submitting.",
    },
  ],
};

const steps = [
  {
    number: 1,
    title: "Go to the SSA Medicare sign-up page",
    description:
      "Head to the Social Security Administration website. It might feel odd that Medicare enrollment goes through Social Security, but that's how it works.",
    details: [
      <>
        Go directly to{" "}
        <a
          href="https://www.ssa.gov/medicare/sign-up"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          ssa.gov/medicare/sign-up
        </a>
      </>,
      "Accept the terms of service and click Next",
    ],
  },
  {
    number: 2,
    title: "Start a new application",
    description:
      'On the next screen, look for the "Apply & Complete" section.',
    details: [
      'Click "Start a New Application"',
      "If you saved a previous application, you can return to it from here too",
      "The application takes 10 to 30 minutes depending on your situation. You can save and come back.",
    ],
  },
  {
    number: 3,
    title: "Sign in or create your Social Security account",
    description:
      "You need a my Social Security online account. If you already have one, sign in. If not, you'll create one now.",
    details: [
      "Have your Social Security number and driver's license ready",
      "You can sign in with Login.gov or ID.me",
      "For identity verification, you'll either live-chat with a video agent or take photos of your license and a selfie on your phone",
      "If your glasses are on, they'll ask you to remove them for the selfie",
    ],
    tip: "If the online verification is too difficult or you don't have a smartphone, call Social Security at 1-800-772-1213 (TTY: 1-800-325-0778) to schedule an in-person appointment. Wait times can be long, so plan ahead.",
  },
  {
    number: 4,
    title: "Log in to your account",
    description: "Once your account is set up, log in.",
    details: [
      'Select "I am applying for myself"',
      'Confirm whether you have a my Social Security account (Yes or No)',
      "Click Next",
    ],
  },
  {
    number: 5,
    title: "Enter your personal information",
    description:
      "Basic stuff. Fill it in exactly as it appears on your Social Security card.",
    details: [
      "Full legal name (first, middle, last, suffix)",
      "Social Security number",
      "Date of birth",
      "Gender",
    ],
  },
  {
    number: 6,
    title: "Answer the eligibility questions",
    description:
      "Social Security needs to know a couple of things about your situation.",
    details: [
      "Whether you are blind or have low vision (even with glasses or contacts)",
      "Whether you've been unable to work for the last 14 months due to illness, injury, or conditions expected to last 12+ months",
    ],
    tip: "Answer honestly. These questions help SSA determine which Medicare benefits you may qualify for, including disability-based enrollment if applicable.",
  },
  {
    number: 7,
    title: "Choose whether to opt in to Part B",
    description:
      "This is the most important decision in the application.",
    details: [
      'You\'ll see: "Do you wish to apply for Medicare ONLY, but not for monthly retirement cash benefits?" Select Yes if you only want Medicare.',
      'Then: "Do you want to enroll in Medicare Part B?" Click the "Things to Consider" link if you\'re unsure.',
    ],
    tip: 'Most people should enroll in Part B unless they have active employer coverage. Skipping Part B and enrolling later means a permanent late penalty of 10% per year you delayed. If you\'re not sure, call us at 855-559-1700 before you click "No."',
  },
  {
    number: 8,
    title: "Provide your insurance and employment information",
    description:
      "SSA asks about any existing health coverage you have. This matters for coordination of benefits and penalty calculations.",
    details: [
      "Whether you're covered under a group health plan",
      "Whether the coverage is through your own current employment",
      "Employment start and end dates for the job providing the health plan",
      "Health insurance start and end dates",
      "Whether you're receiving Medicaid",
    ],
  },
  {
    number: 9,
    title: "Review, sign, and submit",
    description:
      "Almost done. Read the Electronic Signature Agreement carefully.",
    details: [
      "Review all the information you entered",
      'Check the box: "I agree with the Electronic Signature Agreement above"',
      'Click "Submit Now"',
      "You cannot change anything after you submit",
    ],
    tip: "Double-check your Part B election before submitting. Once it's in, changing your mind requires contacting Social Security directly.",
  },
];

export default function SSAOnlineEnrollmentWalkthrough() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={howToSchema} />

      <nav className="max-w-3xl mx-auto px-4 pt-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <Link href="/learn/how-to-sign-up-for-medicare" className="hover:text-blue-600">
          Medicare Enrollment Guide
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-gray-900 font-medium">
          SSA Online Walkthrough
        </span>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          How to Enroll in Medicare Online at SSA.gov
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          By{" "}
          <strong className="text-gray-600">Anthony Orner</strong>,
          Licensed Medicare Insurance Broker &middot; Updated March 2026
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          If you're not already receiving Social Security benefits, you'll
          need to sign up for Medicare yourself. The whole process happens on
          the Social Security Administration website. It takes about 10
          minutes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Here's every screen you'll see, in order, so there are no
          surprises.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 text-sm">
          <p className="font-semibold text-blue-900 mb-2">
            Before you start, have these ready:
          </p>
          <ul className="space-y-1 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">&#10003;</span>
              Your Social Security number
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">&#10003;</span>
              Your driver's license or state ID (for identity verification)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">&#10003;</span>
              Your employer's name and health insurance dates (if applicable)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">&#10003;</span>
              A phone with a camera (for the ID verification selfie)
            </li>
          </ul>
        </div>

        {steps.map((step) => (
          <div key={step.number} className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex-shrink-0 w-9 h-9 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h2>
              </div>
            </div>
            <div className="ml-13 pl-0 md:ml-0 md:pl-13">
              <p className="text-gray-700 mb-3">{step.description}</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-3">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">&bull;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {step.tip && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-gray-700">
                  <strong className="text-amber-800">Tip:</strong>{" "}
                  {step.tip}
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            You made it through
          </h2>
          <p className="text-gray-700 mb-3">
            In about two weeks, your Medicare card will arrive in the mail
            inside a Welcome to Medicare package. Bring the card with you to
            all medical and pharmacy visits starting on the date printed on
            the front.
          </p>
          <p className="text-gray-700">
            Now is the time to choose a Medicare Supplement or Medicare
            Advantage plan. Your 6-month Medigap Open Enrollment Period
            starts the month you turn 65 and have Part B. During this
            window, no carrier can turn you down or charge you more based on
            health.
          </p>
        </div>

        <PhoneCTA />

        <div className="mt-10 bg-gray-50 rounded-xl p-6 text-sm text-gray-600 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-2">
            Related guides
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/learn/how-to-sign-up-for-medicare"
                className="text-blue-600 hover:underline"
              >
                How and When to Sign Up for Medicare (2026 Guide)
              </Link>
            </li>
            <li>
              <Link
                href="/learn/medicare-parts-explained"
                className="text-blue-600 hover:underline"
              >
                Medicare Parts A, B, C, and D Explained
              </Link>
            </li>
            <li>
              <Link
                href="/learn/what-is-medigap"
                className="text-blue-600 hover:underline"
              >
                What Is Medigap?
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            EasyKind Medicare is an independent brokerage. We are not
            affiliated with Medicare, CMS, or the Social Security
            Administration.
          </p>
        </div>
      </article>
    </>
  );
}
