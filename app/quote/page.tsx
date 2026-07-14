import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import QuoteFlow from "@/components/QuoteFlow";

export const metadata: Metadata = {
  title: "Get a Free Medicare Quote",
  description:
    "Get a free 2026 Medicare Supplement or Advantage quote from a licensed broker. Compare top carriers with no obligation. Call 855-559-1700 today.",
  alternates: { canonical: `${SITE_URL}/quote` },
  openGraph: {
    title: "Get a Free Medicare Quote",
    description:
      "Get a free Medicare Supplement or Medicare Advantage quote. Compare plans from top carriers at no cost to you. Call 855-559-1700.",
  },
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ zip?: string }>;
}) {
  const { zip } = await searchParams;
  const initialZip = /^\d{5}$/.test(zip ?? "") ? zip : undefined;
  return (
    <section className="bg-[#F6FAF8] py-10 sm:py-16">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get Your Free Medicare Quote
          </h1>
          <p className="text-[#3A5048]">
            Takes about 60 seconds. No spam, no robocalls — just a real licensed broker comparing
            rates for you.
          </p>
        </div>

        <QuoteFlow initialZip={initialZip} />

        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-gray-500">
            By <strong>Anthony Orner</strong>, Licensed Medicare Insurance Broker — NJ &amp; 34
            states
          </p>
          <p className="text-sm text-gray-500">
            Prefer to talk now?{" "}
            <a href="tel:8555591700" className="font-semibold text-[#E8842A] hover:underline">
              Call 855-559-1700
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <Link href="/" className="text-[#2D6E5F] hover:underline">
              Return home
            </Link>
            {" · "}
            <Link href="/medicare-supplement/new-jersey" className="text-[#2D6E5F] hover:underline">
              Medicare Supplement NJ
            </Link>
            {" · "}
            <Link href="/about" className="text-[#2D6E5F] hover:underline">
              About us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
