import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Medicare FAQ — Common Questions Answered (2026)",
  description:
    "Plain-language answers to the most common Medicare questions. Enrollment, costs, plan types, coverage, and more. Free broker help: 855-559-1700.",
  alternates: {
    canonical: "https://medicareyourself.com/medicare-faq",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareyourself.com" },
    { "@type": "ListItem", position: 2, name: "Medicare FAQ", item: "https://medicareyourself.com/medicare-faq" },
  ],
};

export default function MedicareFAQHub() {
  return (
    <>
      <SchemaMarkup schema={[breadcrumbSchema]} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Medicare FAQ</h1>
        <p className="text-gray-600 mb-2">
          Plain-language answers to the questions people ask most about Medicare.
          Written by Anthony Orner, licensed Medicare broker in NJ and 34 states.
        </p>
        <p className="text-sm text-gray-400 mb-8">20 questions answered · Updated July 2026</p>

        <ul className="space-y-3 mb-10">
        <li>
          <Link href="/medicare-faq/is-it-a-good-idea-to-use-a-medicare-broker" className="text-blue-700 hover:underline font-medium">
            Is it a good idea to use a Medicare broker?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/how-much-does-a-medicare-broker-charge" className="text-blue-700 hover:underline font-medium">
            How much does a Medicare broker charge?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/whats-the-difference-between-a-medicare-agent-and-a-medicare-broker" className="text-blue-700 hover:underline font-medium">
            What&apos;s the difference between a Medicare agent and a Medicare broker?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/is-there-a-medicare-broker" className="text-blue-700 hover:underline font-medium">
            Is there a Medicare broker?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/how-much-is-medigap-plan-g-in-nj" className="text-blue-700 hover:underline font-medium">
            How much is Medigap plan G in NJ?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/what-is-the-disadvantage-of-plan-g-medicare-supplement" className="text-blue-700 hover:underline font-medium">
            What is the disadvantage of plan G Medicare Supplement?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/is-medicare-supplement-g-still-available" className="text-blue-700 hover:underline font-medium">
            Is Medicare Supplement G still available?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/what-is-the-best-medicare-supplement-plan-in-nj" className="text-blue-700 hover:underline font-medium">
            What is the best Medicare Supplement plan in NJ?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/is-it-better-to-go-with-a-medicare-advantage-plan-or-medicare-supplement-plan" className="text-blue-700 hover:underline font-medium">
            Is it better to go with a Medicare Advantage plan or Medicare Supplement plan?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/what-is-the-best-medicare-plan-in-new-jersey" className="text-blue-700 hover:underline font-medium">
            What is the best Medicare plan in New Jersey?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/why-do-people-say-not-to-get-a-medicare-advantage-plan" className="text-blue-700 hover:underline font-medium">
            Why do people say not to get a Medicare Advantage plan?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/what-are-the-disadvantages-of-a-medicare-supplement-plan" className="text-blue-700 hover:underline font-medium">
            What are the disadvantages of a Medicare Supplement plan?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/does-medicare-automatically-enroll-you-when-you-turn-65" className="text-blue-700 hover:underline font-medium">
            Does Medicare automatically enroll you when you turn 65?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/what-is-the-biggest-mistake-seniors-make-when-enrolling-in-medicare" className="text-blue-700 hover:underline font-medium">
            What is the biggest mistake seniors make when enrolling in Medicare?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/do-i-need-to-notify-social-security-when-i-turn-65" className="text-blue-700 hover:underline font-medium">
            Do I need to notify Social Security when I turn 65?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/does-als-qualify-for-medicare" className="text-blue-700 hover:underline font-medium">
            Does ALS qualify for Medicare?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/how-do-i-enroll-in-medicare-for-the-first-time" className="text-blue-700 hover:underline font-medium">
            How do I enroll in Medicare for the first time?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/how-much-do-i-have-to-pay-for-medicare-when-i-turn-65" className="text-blue-700 hover:underline font-medium">
            How much do I have to pay for Medicare when I turn 65?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/do-i-call-my-local-social-security-office-to-apply-for-medicare" className="text-blue-700 hover:underline font-medium">
            Do I call my local Social Security office to apply for Medicare?
          </Link>
        </li>
        <li>
          <Link href="/medicare-faq/is-plan-g-better-than-plan-n" className="text-blue-700 hover:underline font-medium">
            Is Plan G better than Plan N?
          </Link>
        </li>
        </ul>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-sm">
          <p className="font-semibold text-gray-900 mb-1">Don&apos;t see your question?</p>
          <p className="text-gray-600 mb-3">Call 855-559-1700 for a free answer from a licensed Medicare broker. No pressure, no obligation.</p>
          <a href="tel:8555591700" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-lg transition">
            Call 855-559-1700
          </a>
        </div>
      </div>
    </>
  );
}
