import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MedicareYourself collects, uses, and protects your personal information when you use our website or request Medicare plan quotes.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-8">Last updated: March 14, 2026</p>

      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Who We Are</h2>
        <p>
          MedicareYourself is a trade name of <strong>EasyKind Health LLC</strong>, an independent, licensed Medicare insurance brokerage. Our
          website is <strong>www.medicareyourself.com</strong>. This policy explains how we
          handle personal information collected through our website and phone consultations.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
        <p>We may collect the following when you contact us or use our website:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, phone number, email address, and mailing address</li>
          <li>Date of birth and zip code (to generate plan quotes)</li>
          <li>Medicare Beneficiary Identifier (MBI), if you share it during enrollment</li>
          <li>Health-related information you voluntarily provide during consultations</li>
          <li>Website usage data via cookies and analytics tools</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide personalized Medicare plan comparisons</li>
          <li>To process enrollment applications with insurance carriers</li>
          <li>To contact you about plan options you requested</li>
          <li>To improve our website and services</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information to third parties. We share
          information only with insurance carriers as necessary to complete enrollments you
          authorize.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Cookies and Analytics</h2>
        <p>
          We use cookies and similar technologies to understand how visitors use our website.
          This helps us improve content and user experience. You can disable cookies in your
          browser settings.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Data Security</h2>
        <p>
          We use industry-standard security measures to protect your personal information,
          including encrypted connections (HTTPS) and secure data storage. However, no method
          of electronic transmission is 100% secure.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information
          at any time by contacting us at{" "}
          <a href="tel:8555591700" className="text-blue-600 hover:underline">
            855-559-1700
          </a>
          .
        </p>

        <h2 className="text-xl font-bold text-gray-900">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this
          page with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
        <p>
          If you have questions about this policy, call us at{" "}
          <a href="tel:8555591700" className="text-blue-600 hover:underline">
            855-559-1700
          </a>{" "}
          or visit our <Link href="/about" className="text-blue-600 hover:underline">About page</Link>.
        </p>
      </div>
    </section>
  );
}
