import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "How to Enroll in Medicare Online at SSA.gov (Step-by-Step Walkthrough)",
  description:
    "Step-by-step SSA.gov Medicare enrollment walkthrough — sign up online in about 10 minutes. Free licensed broker help available at 855-559-1700.",
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
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people can complete the SSA.gov Medicare enrollment application in about 10 minutes if they have their documents ready. You will need your Social Security number and a driver's license or state ID for identity verification. Having information about any current health insurance coverage on hand will also help you move through the questions faster.",
  },
  {
    question: "Can I change my Medicare application after I submit it online?",
    answer:
      "No. Once you agree to the Electronic Signature Agreement and click Submit Now on SSA.gov, your application is final and cannot be modified online. If you need to make a correction, you will need to contact the Social Security Administration directly by phone or at a local office. Review every screen carefully before submitting.",
  },
  {
    question: "Do I have to enroll in Part B when I apply online?",
    answer:
      "No. During the application, SSA will ask whether you want to enroll in Part B or decline it. If you have creditable coverage through an active employer group health plan, you may choose to delay Part B without a late enrollment penalty. If you are unsure, call us at 855-559-1700 before you submit to review your options.",
  }
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people finish the SSA.gov Medicare application in about 10 minutes across 9 screens. Having your Social Security number, driver's license, and current insurance information ready before you start will help you move through it without pausing.",
  },
  {
    question: "Can I change my Medicare application after I submit it online?",
    answer:
      "No. Once you agree to the Electronic Signature Agreement and click Submit Now on SSA.gov, the application cannot be modified online. If you notice a mistake, you will need to contact Social Security directly to correct or withdraw it.",
  },
  {
    question: "Do I have to enroll in Part B when I apply online?",
    answer:
      "No. During the application, SSA will ask whether you want Medicare only (without retirement benefits) and whether you want Part B. You can choose Part A only if you have creditable employer coverage, but delaying Part B without qualifying coverage can trigger a lifelong late enrollment penalty. If you're unsure, call 855-559-1700 before submitting.",
  }
,
  {
    question: "How long does the SSA online Medicare application take?",
    answer:
      "Most people complete the SSA.gov Medicare-only application in about 10 minutes if they have their documents ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health insurance coverage.",
  },
  {
    question: "Can I enroll in Medicare online if I'm not taking Social Security retirement benefits yet?",
    answer:
      "Yes. The SSA.gov application lets you apply for Medicare only without filing for retirement benefits. During the application, you'll select the option indicating you want Medicare coverage but are not yet claiming Social Security.",
  },
  {
    question: "Can I change my Medicare application after I submit it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, you cannot modify the application online. If you need to make changes, you'll have to contact Social Security directly by phone or visit a local office.",
  }
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people finish the SSA.gov Medicare application in about 10 minutes if they have their documents ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health coverage. Having employer coverage dates handy speeds things up.",
  },
  {
    question: "Can I change my Medicare application after I submit it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, you cannot modify the application online. If you made a mistake or need to change your Part B election, contact the Social Security Administration directly to correct the record.",
  },
  {
    question: "Should I enroll in Part B if I still have employer coverage?",
    answer:
      "It depends on the size of the employer and how the coverage coordinates with Medicare. Delaying Part B is sometimes the right call, but the wrong decision can trigger a lifetime late enrollment penalty and a coverage gap. Call us at 855-559-1700 before you submit so we can review your situation at no cost.",
  }
,
  {
    question: "How long does the SSA online Medicare application take?",
    answer:
      "Most people complete the SSA.gov Medicare-only application in about 10 minutes if they have their documents ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health insurance coverage. Having employer coverage dates handy will speed things up.",
  },
  {
    question: "Can I change my Medicare application after I submit it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, you cannot modify the application online. If you need to correct a mistake or change your Part B election, you'll need to contact Social Security directly to request changes.",
  },
  {
    question: "Do I have to enroll in Part B when I sign up online?",
    answer:
      "No. The SSA application asks separately whether you want to enroll in Part B, so you can decline it if you have qualifying employer coverage. However, declining Part B without creditable coverage can lead to a lifetime late enrollment penalty, so it's worth confirming your situation with a licensed broker before submitting.",
  }
,
  {
    question: "Do I need to enroll in Medicare online if I already get Social Security benefits?",
    answer:
      "No. If you are already receiving Social Security retirement or disability benefits before turning 65, you will be automatically enrolled in Medicare Part A and Part B. Your red, white, and blue Medicare card will arrive in the mail about three months before your 65th birthday.",
  },
  {
    question: "Can I decline Part B during the SSA online application?",
    answer:
      "Yes. The application asks whether you want to enroll in Part B, and you can decline if you have qualifying employer coverage. Be careful — declining Part B without creditable coverage can trigger a lifelong late enrollment penalty and a delayed effective date. Speak with a licensed broker at 855-559-1700 before declining.",
  },
  {
    question: "What documents do I need before starting the SSA Medicare application?",
    answer:
      "Have your Social Security number, a valid driver's license or state ID for identity verification through Login.gov or ID.me, and details about any current health insurance coverage, including employer group plan dates. If you've worked outside the U.S., gather those employment records as well.",
  }
,
  {
    question: "Do I need to enroll in Medicare online if I'm already getting Social Security benefits?",
    answer:
      "No. If you're already receiving Social Security retirement or disability benefits before turning 65, you'll be automatically enrolled in Medicare Part A and Part B starting the first day of the month you turn 65. You don't need to use the SSA online application unless you want to delay or decline Part B.",
  },
  {
    question: "What documents do I need before starting the SSA Medicare application?",
    answer:
      "Have your Social Security number, a valid driver's license or state ID, and details about any current health coverage ready. If you have employer group coverage, you'll need the employer name, dates of coverage, and policy information. Creating a my Social Security account through Login.gov or ID.me also requires identity verification.",
  },
  {
    question: "Can I change my application after I submit it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, the application is final and cannot be modified online. If you need to correct something, you must contact the Social Security Administration directly. That's why reviewing every screen carefully before submitting is critical.",
  }
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people finish the SSA.gov Medicare application in about 10 minutes if they have their documents ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health coverage. Having employer plan dates handy will speed things up.",
  },
  {
    question: "Can I change my Medicare application after submitting it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, you cannot modify the application online. If you need to make a correction, you'll have to contact the Social Security Administration directly by phone or visit a local office.",
  },
  {
    question: "Do I have to enroll in Part B when I apply online?",
    answer:
      "No, the SSA application asks separately whether you want to enroll in Part B. You can choose Part A only if you have qualifying employer coverage, but declining Part B without creditable coverage can trigger a lifelong late enrollment penalty. If you're unsure, call us at 855-559-1700 before submitting.",
  }
,
  {
    question: "Do I need a my Social Security account to enroll online?",
    answer:
      "Yes. SSA requires you to sign in with a my Social Security account to apply for Medicare online. You can create one through Login.gov or ID.me using your Social Security number and a government-issued ID like a driver's license.",
  },
  {
    question: "Can I change my application after I submit it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, the application is final and cannot be modified online. If you need to make changes, you must contact the Social Security Administration directly to correct the record.",
  },
  {
    question: "Should I enroll in Part B if I still have employer coverage?",
    answer:
      "It depends on the size of the employer and how the coverage coordinates with Medicare. Delaying Part B without qualifying creditable coverage can trigger a lifetime late-enrollment penalty. Call us at 855-559-1700 before submitting if you're unsure how your employer plan affects timing.",
  }
,
  {
    question: "Do I need to apply for Medicare online if I'm already getting Social Security benefits?",
    answer:
      "No. If you are already receiving Social Security retirement or disability benefits before turning 65, you will be automatically enrolled in Medicare Part A and Part B. Your red, white, and blue Medicare card will arrive in the mail about three months before your 65th birthday.",
  },
  {
    question: "Can I apply for Medicare online without applying for Social Security retirement benefits?",
    answer:
      "Yes. The SSA online application lets you apply for Medicare only without starting your retirement benefits. During the application you will be asked whether you want Medicare alone or Medicare plus retirement benefits, and you can choose Medicare only.",
  },
  {
    question: "What documents do I need before starting the SSA online Medicare application?",
    answer:
      "You will need your Social Security number, a valid driver's license or state ID for identity verification through Login.gov or ID.me, and information about any current health insurance, including employer group coverage and employment dates. Having Medicaid details on hand is also helpful if applicable.",
  }
,
  {
    question: "Do I need to create a my Social Security account before applying for Medicare online?",
    answer:
      "Yes. SSA requires you to sign in with a my Social Security account, which you can create through Login.gov or ID.me. You'll need your Social Security number and a valid driver's license or state ID to complete identity verification.",
  },
  {
    question: "Can I change my Medicare application after I submit it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, the application is final and cannot be modified online. If you need to correct information, you'll have to contact the Social Security Administration directly.",
  },
  {
    question: "Can I apply for Medicare Part A only and delay Part B through SSA.gov?",
    answer:
      "Yes. The online application asks whether you want to enroll in Part B, and you can decline it if you have qualifying employer coverage. Be aware that delaying Part B without creditable coverage can trigger a lifetime late-enrollment penalty, so confirm your situation before declining.",
  }
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people finish the SSA.gov Medicare application in about 10 minutes if they have their documents ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health insurance coverage.",
  },
  {
    question: "Can I apply for Medicare online if I'm not ready to start Social Security retirement benefits?",
    answer:
      "Yes. The SSA application lets you apply for Medicare only without claiming retirement benefits. During the application you'll be asked whether you want Medicare-only or Medicare with retirement benefits, and you can choose whether to enroll in Part B at that time.",
  },
  {
    question: "Can I change my Medicare application after submitting it on SSA.gov?",
    answer:
      "No. Once you agree to the Electronic Signature Agreement and click Submit Now, the application is final and cannot be modified online. If you need to make a correction, you'll have to contact Social Security directly by phone or visit a local office.",
  }
,
  {
    question: "Do I need a my Social Security account before I start the Medicare application?",
    answer:
      "Yes. You'll either sign in to an existing my Social Security account or create one using Login.gov or ID.me before completing the application. You'll need your Social Security number and a government-issued ID such as a driver's license to verify your identity.",
  },
  {
    question: "Can I apply for Medicare only without starting Social Security retirement benefits?",
    answer:
      "Yes. During the SSA online application you'll be asked whether you want to apply for Medicare only or also file for retirement benefits. Choosing Medicare only lets you enroll in Part A and Part B while delaying your retirement benefit to a later date.",
  },
  {
    question: "Can I change my application after I submit it on SSA.gov?",
    answer:
      "No. Once you agree to the Electronic Signature Agreement and click Submit Now, the application is final and cannot be modified online. If you need to make a correction, you'll have to contact Social Security directly by phone or visit a local SSA office.",
  }
,
  {
    question: "Do I need to apply for Medicare online if I already get Social Security benefits?",
    answer:
      "No. If you are already receiving Social Security or Railroad Retirement benefits when you become eligible for Medicare, you will be automatically enrolled in Part A and Part B. Your Medicare card will arrive in the mail about three months before your 65th birthday.",
  },
  {
    question: "What documents do I need before starting the SSA online application?",
    answer:
      "You will need your Social Security number, a valid driver's license or state ID for identity verification through Login.gov or ID.me, and details about any current health insurance, including employer group coverage and employment dates. Having this information ready helps you complete the application in about 10 minutes.",
  },
  {
    question: "Can I delay Part B if I have employer coverage?",
    answer:
      "Yes. If you or your spouse are still working and covered by a qualifying employer group health plan, you can delay Part B without a late enrollment penalty and sign up later during a Special Enrollment Period. The SSA application asks about your current coverage so you can indicate this. Call 855-559-1700 if you want help reviewing whether your coverage qualifies.",
  }
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people finish the SSA.gov Medicare application in about 10 minutes if they have their documents ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health insurance coverage.",
  },
  {
    question: "Can I apply for Medicare online if I'm not ready to start Social Security retirement benefits?",
    answer:
      "Yes. The SSA application lets you apply for Medicare only without filing for retirement benefits. During the application, you'll be asked specifically whether you want Medicare only or both Medicare and retirement benefits.",
  },
  {
    question: "What if I make a mistake on my Medicare application after submitting?",
    answer:
      "You cannot modify the application after clicking Submit Now. If you notice an error, contact the Social Security Administration directly to correct your record. For help reviewing your enrollment before you submit, call our office at 855-559-1700.",
  }
,
  {
    question: "Can I enroll in Medicare online if I'm not taking Social Security retirement benefits yet?",
    answer:
      "Yes. The SSA online application lets you apply for Medicare only without starting your retirement or spousal benefits. During the application you'll be asked whether you want Medicare only, and you can defer your Social Security check until later.",
  },
  {
    question: "What documents do I need before starting the SSA Medicare application?",
    answer:
      "You'll need your Social Security number, a valid driver's license or state ID for identity verification through Login.gov or ID.me, and details about any current health coverage. If you're delaying Part B because of employer coverage, have your employer's name and your coverage start and end dates ready.",
  },
  {
    question: "How long does SSA take to process an online Medicare application?",
    answer:
      "Most online Medicare applications are processed within a few weeks, and you'll typically receive your Medicare card by mail before your coverage start date. You can check status anytime by signing back into your my Social Security account. If SSA needs additional documents, they'll contact you by mail.",
  }
,
  {
    question: "How long does the SSA online Medicare application take?",
    answer:
      "Most people complete the SSA.gov Medicare application in about 10 minutes if they have their information ready. You'll need your Social Security number, a valid ID for identity verification, and details about any current health coverage. The application is processed by the Social Security Administration, not Medicare directly.",
  },
  {
    question: "Can I change my Medicare application after submitting it on SSA.gov?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, you cannot modify the application online. If you need to make corrections, you'll have to contact the Social Security Administration directly by phone or visit a local SSA office.",
  },
  {
    question: "Do I have to enroll in Part B when I sign up online?",
    answer:
      "No. The SSA application asks separately whether you want Part A only or both Part A and Part B. If you have qualifying employer coverage, you may choose to delay Part B to avoid paying the Part B premium until you actually need it. A licensed broker can help you decide — call 855-559-1700.",
  }
,
  {
    question: "How long does the SSA online Medicare application take?",
    answer:
      "Most people complete the SSA.gov Medicare-only application in about 10 minutes if they have their information ready. You'll need your Social Security number, a driver's license or state ID for identity verification, and details about any current health insurance coverage.",
  },
  {
    question: "Can I apply for Medicare online without starting Social Security retirement benefits?",
    answer:
      "Yes. During the application, you can choose to apply for Medicare only and delay your retirement benefits. This is a common choice for people who plan to keep working past 65 or want their retirement benefit to keep growing.",
  },
  {
    question: "What happens after I submit my Medicare application on SSA.gov?",
    answer:
      "Once you click Submit Now, you cannot modify the application online. SSA will review your submission and mail your Medicare card and a decision notice, typically within a few weeks. If they need additional information, they will contact you by mail or phone.",
  }
,
  {
    question: "How long does the SSA online Medicare application take?",
    answer:
      "Most people complete the SSA.gov Medicare-only application in about 10 minutes. Having your Social Security number, driver's license, and current health insurance information ready before you start will help you move through the screens without interruption.",
  },
  {
    question: "Can I apply for Medicare online if I'm not ready to start Social Security retirement benefits?",
    answer:
      "Yes. The SSA application includes an option to apply for Medicare only, without starting your Social Security retirement benefits. This is a common choice for people who plan to keep working or delay claiming Social Security until a later age.",
  },
  {
    question: "What happens after I submit my Medicare application on SSA.gov?",
    answer:
      "After you submit, you cannot modify the application online. Social Security will review your information and mail your Medicare card, typically within a few weeks. If SSA needs additional documentation, they will contact you by mail or phone.",
  }
,
  {
    question: "How long does the SSA online Medicare application take?",
    answer:
      "Most people complete the SSA.gov Medicare application in about 10 minutes if they have their documents ready. You will need your Social Security number, a valid driver's license or state ID for identity verification, and details about any current health insurance coverage. The system lets you save and return later if you need to gather information.",
  },
  {
    question: "Can I enroll in just Part A and delay Part B through SSA.gov?",
    answer:
      "Yes. During the online application, SSA asks whether you want to enroll in Part B or apply for Part A only. If you have qualifying employer coverage, you can decline Part B and enroll later using a Special Enrollment Period without a late penalty. Choosing the wrong option can trigger a lifelong Part B late enrollment penalty, so call us at 855-559-1700 if you are unsure.",
  },
  {
    question: "What happens after I submit my Medicare application on SSA.gov?",
    answer:
      "After you submit, SSA sends a confirmation with a re-entry number you can use to check status. Processing typically takes a few weeks, and your red, white, and blue Medicare card arrives by mail. Once you have your Medicare number, you can shop for a Medigap, Medicare Advantage, or Part D plan.",
  }
,
  {
    question: "Do I need to create an account before applying for Medicare online?",
    answer:
      "Yes. SSA requires identity verification through a my Social Security account, which you can create using Login.gov or ID.me. You will need your Social Security number and a government-issued ID such as a driver's license to complete the verification.",
  },
  {
    question: "Can I apply for Medicare without starting my Social Security retirement benefits?",
    answer:
      "Yes. During the application, SSA asks whether you want to apply for Medicare only without claiming retirement benefits. This lets you enroll in Part A and Part B while delaying retirement income until a later date.",
  },
  {
    question: "Can I change my application after I submit it on SSA.gov?",
    answer:
      "No. Once you agree to the Electronic Signature Agreement and click Submit Now, the application is final and cannot be modified online. If you need to make corrections, you must contact Social Security directly by phone or at your local field office.",
  }
,
  {
    question: "How long does the online Medicare application take?",
    answer:
      "Most people complete the SSA online Medicare application in about 10 minutes. Having your Social Security number, driver's license, and current health insurance information ready before you start will help you move through the screens without interruption.",
  },
  {
    question: "Can I change my application after I submit it online?",
    answer:
      "No. Once you agree to the Electronic Signature Agreement and click Submit Now, you cannot modify the application yourself. If you need to correct information or change your Part B election, you will need to contact the Social Security Administration directly.",
  },
  {
    question: "Do I have to enroll in Part B when I apply online?",
    answer:
      "No. The SSA application asks whether you want to enroll in Part B, and you can decline it if you have qualifying coverage through an employer group health plan. Be aware that delaying Part B without creditable coverage can trigger a late enrollment penalty that lasts as long as you have Medicare.",
  }
,
  {
    question: "Do I need a my Social Security account to enroll in Medicare online?",
    answer:
      "Yes. The SSA online Medicare application requires you to sign in with a my Social Security account, which you can create using Login.gov or ID.me. You'll need your Social Security number and a valid driver's license or state ID to verify your identity.",
  },
  {
    question: "Can I change my Medicare application after I submit it online?",
    answer:
      "No. Once you click Submit Now and agree to the Electronic Signature Agreement, your application is final and cannot be modified online. If you need to make a correction, you'll have to contact Social Security directly by phone or at your local field office.",
  },
  {
    question: "Do I have to enroll in Part B when I sign up online?",
    answer:
      "No. During the SSA online application, you can choose to enroll in Part A only, or in both Part A and Part B. Keep in mind that delaying Part B without qualifying creditable coverage can trigger a lifetime late enrollment penalty, so review your situation carefully before declining.",
  }
,
  {
    question: "Do I need a my Social Security account to enroll in Medicare online?",
    answer:
      "Yes. The SSA online Medicare application requires you to sign in with a my Social Security account, which you can create using Login.gov or ID.me. You'll need your Social Security number and a state-issued ID such as a driver's license to verify your identity.",
  },
  {
    question: "Can I enroll in Medicare online without starting Social Security retirement benefits?",
    answer:
      "Yes. During the SSA online application, you can choose to apply for Medicare only without filing for retirement benefits. This is a common choice for people who want Medicare at 65 but plan to delay claiming Social Security until a later age.",
  },
  {
    question: "What happens if I make a mistake on the SSA Medicare application?",
    answer:
      "Once you click Submit Now and agree to the Electronic Signature Agreement, the application cannot be modified online. If you need to correct information, you'll have to contact the Social Security Administration directly. Reviewing each screen carefully before submitting is the best way to avoid issues.",
  }
,
  {
    question: "How long does it take to enroll in Medicare online at SSA.gov?",
    answer:
      "Most people complete the online Medicare application in about 10 minutes. Having your Social Security number, a driver's license or state ID, and any current health insurance information ready in advance helps speed things up. You can save your progress and return later if needed.",
  },
  {
    question: "Can I sign up for only Part A and delay Part B online?",
    answer:
      "Yes. During the application, SSA will ask whether you want to enroll in Part B. You can choose Part A only if you have qualifying coverage through current employment, but be aware that delaying Part B without creditable coverage can trigger a lifetime late enrollment penalty.",
  },
  {
    question: "What if I make a mistake on my SSA Medicare application?",
    answer:
      "Once you click Submit, you cannot modify the application yourself. You'll need to contact the Social Security Administration directly to correct any errors. Review every screen carefully before signing the Electronic Signature Agreement and submitting.",
  }
,
  {
    question: "How long does it take to enroll in Medicare online at SSA.gov?",
    answer:
      "Most people complete the online Medicare application in about 10 minutes. Having your Social Security number, driver's license, and any current health insurance information ready before you start will help you move through the screens quickly.",
  },
  {
    question: "Can I sign up for only Part A and delay Part B online?",
    answer:
      "Yes. During the application, SSA asks whether you want to enroll in Part B. You can decline Part B if you have qualifying employer coverage, but be aware that delaying without creditable coverage can trigger a lifelong Part B late enrollment penalty.",
  },
  {
    question: "What if I make a mistake on my SSA Medicare application?",
    answer:
      "You cannot modify the application after you click Submit Now. If you spot an error, contact the Social Security Administration directly to correct it. You can also call our office at 855-559-1700 for guidance on next steps.",
  }
,
  {
    question: "How long does the SSA.gov Medicare online application take?",
    answer:
      "Most people complete the online Medicare application in about 10 minutes. Having your Social Security number, driver's license, and any current health insurance information ready before you start will help you move through the screens without interruption.",
  },
  {
    question: "Can I apply for Medicare only without starting Social Security retirement benefits?",
    answer:
      "Yes. During the SSA online application, you will be asked whether you want to apply for Medicare only. Selecting this option lets you enroll in Part A and Part B without triggering your Social Security retirement benefits, which is useful if you want to delay claiming retirement income.",
  },
  {
    question: "What happens after I submit my Medicare application on SSA.gov?",
    answer:
      "After you electronically sign and submit, Social Security processes your application and mails your Medicare card once approved. You cannot modify the application after submission, so review every screen carefully. If you need to make changes, you must contact SSA directly.",
  }
,
  {
    question: "How long does the SSA online Medicare application take to complete?",
    answer:
      "Most people complete the SSA.gov Medicare application in about 10 minutes if they have their documents ready. You will need your Social Security number, a driver's license or state ID for identity verification, and details about any current health insurance coverage.",
  },
  {
    question: "Can I sign up for only Medicare without starting Social Security retirement benefits?",
    answer:
      "Yes. During the online application, you can indicate that you want to apply for Medicare only and delay your retirement benefits. This is a common choice for people who plan to keep working past age 65 or want their retirement check to grow.",
  },
  {
    question: "What happens after I submit my Medicare application on SSA.gov?",
    answer:
      "After submitting, you cannot modify the application online. SSA will review your application and mail your Medicare card, typically within a few weeks. If they need additional information, a representative will contact you by phone or mail.",
  }
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
