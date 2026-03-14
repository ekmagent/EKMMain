import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Write for Us — Medicare Articles",
  description:
    "Submit a Medicare article to MedicareYourself. We publish expert-written content on Medicare Supplement, Medicare Advantage, and enrollment. Guidelines inside.",
  alternates: { canonical: `${SITE_URL}/write-for-us` },
  openGraph: {
    title: "Write for Us — Medicare Articles",
    description:
      "Submit a Medicare article to MedicareYourself. We publish expert-written content on Medicare Supplement, Medicare Advantage, and enrollment. Guidelines inside.",
  },
};

export default function WriteForUsPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Write for Us — Medicare Article Submission
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          MedicareYourself publishes expert-written articles on Medicare Supplement insurance,
          Medicare Advantage, enrollment, and senior health topics. If you have expertise in
          Medicare or healthcare policy, we'd love to hear from you.
        </p>

        <a
          href="#submit"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors mb-10"
        >
          Submit Your Article
        </a>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-gray-900">What We Publish</h2>
          <p>
            We accept original, well-researched articles that help Medicare beneficiaries make
            informed decisions. Popular topics include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Medicare Supplement (Medigap) plan comparisons and cost analysis</li>
            <li>Medicare Advantage plan reviews and enrollment guidance</li>
            <li>Medicare enrollment timelines, deadlines, and penalties</li>
            <li>State-specific Medicare rules and regulations</li>
            <li>Medicare for specific populations (veterans, federal employees, disabled under 65)</li>
            <li>Healthcare policy changes affecting Medicare beneficiaries</li>
            <li>Senior health and wellness topics related to Medicare coverage</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">Submission Guidelines</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Original content only</strong> — not published elsewhere. We check with CopyScape.</li>
            <li><strong>600+ words</strong> — well-structured with clear headings (H2s).</li>
            <li><strong>Factual and sourced</strong> — cite Medicare.gov, CMS.gov, or other authoritative sources.</li>
            <li><strong>No AI-generated filler</strong> — AI-assisted research is fine, but the writing must be original and reviewed by you.</li>
            <li><strong>Include a short author bio</strong> (2-3 sentences) with your credentials and a headshot.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">What You Get</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>A published byline with your name, photo, and credentials</li>
            <li>A do-follow link to your website or LinkedIn profile</li>
            <li>Exposure to our growing Medicare-focused readership</li>
            <li>Social media promotion of your article</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">What We Don't Accept</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Promotional or advertorial content</li>
            <li>Plagiarized or previously published articles</li>
            <li>Thin, generic content with no original insight</li>
            <li>Articles unrelated to Medicare or senior health</li>
          </ul>

          <h2 id="submit" className="text-xl font-bold text-gray-900 scroll-mt-20">
            Submit Your Article
          </h2>
          <p>
            Email your article as a Google Doc or Word document to{" "}
            <a
              href="mailto:articles@medicareyourself.com"
              className="text-blue-700 font-semibold hover:underline"
            >
              articles@medicareyourself.com
            </a>{" "}
            with the subject line: <strong>"Article Submission: [Your Title]"</strong>
          </p>
          <p>
            Please include your full name, credentials, a short bio, and a headshot. We review
            submissions within 5 business days and will respond regardless of acceptance.
          </p>
        </div>
      </section>

      <section className="bg-blue-800 text-white py-10 px-4 mt-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">Not a writer? We can still help.</h2>
          <p className="text-blue-100 mb-6">
            Call us for free, unbiased Medicare plan guidance.
          </p>
          <PhoneCTA size="lg" label="Call 855-559-1700" />
        </div>
      </section>
    </>
  );
}
