import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the MedicareYourself website and Medicare insurance brokerage services. Please read before using our site.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

      <p className="text-sm text-gray-500 mb-8">Last updated: March 14, 2026</p>

      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Acceptance of Terms</h2>
        <p>
          By accessing and using <strong>www.medicareyourself.com</strong> (&quot;the
          Site&quot;), you agree to these Terms of Service. If you do not agree, please do not
          use the Site.
        </p>

        <h2 className="text-xl font-bold text-gray-900">About Our Services</h2>
        <p>
          MedicareYourself is an independent, licensed Medicare insurance brokerage. We provide
          free plan comparisons and enrollment assistance for Medicare Supplement (Medigap) and
          Medicare Advantage plans. We are not affiliated with or endorsed by Medicare or any
          government agency.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Not Medical Advice</h2>
        <p>
          The information on this Site is for general educational purposes about Medicare
          insurance options. It is <strong>not</strong> medical advice. Consult your healthcare
          provider for medical decisions.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Accuracy of Information</h2>
        <p>
          We make every effort to keep plan details, rates, and enrollment information
          accurate and up to date. However, insurance plans and rates change frequently.
          Specific plan details, benefits, and costs are confirmed during the enrollment
          process directly with the insurance carrier.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Compensation Disclosure</h2>
        <p>
          We are compensated by insurance carriers when you enroll in a plan through us. Our
          compensation is the same regardless of which carrier or plan you choose, so we have
          no financial incentive to recommend one plan over another. There is no additional
          cost to you for using our services.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Third-Party Links</h2>
        <p>
          This Site may contain links to third-party websites. We are not responsible for the
          content, accuracy, or practices of those sites.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
        <p>
          MedicareYourself provides this Site and its content on an &quot;as is&quot; basis. We
          are not liable for any damages arising from your use of the Site or reliance on
          information provided here.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Changes to These Terms</h2>
        <p>
          We may update these terms at any time. Continued use of the Site after changes
          constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>
          Questions about these terms? Call us at{" "}
          <a href="tel:8555591700" className="text-blue-600 hover:underline">
            855-559-1700
          </a>{" "}
          or visit our <Link href="/about" className="text-blue-600 hover:underline">About page</Link>.
        </p>
      </div>
    </section>
  );
}
