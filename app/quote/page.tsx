import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Medicare Quote",
  description:
    "Get a free Medicare Supplement or Medicare Advantage quote. Compare plans from top carriers at no cost to you. Call 855-559-1700.",
  alternates: { canonical: `${SITE_URL}/quote` },
  openGraph: {
    title: "Get a Free Medicare Quote",
    description:
      "Get a free Medicare Supplement or Medicare Advantage quote. Compare plans from top carriers at no cost to you. Call 855-559-1700.",
  },
};

export default function QuotePage() {
  redirect("https://switch.healthplans.now");

  // Fallback content for crawlers / JS-disabled browsers
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Get a Free Medicare Quote</h1>
      <p className="text-gray-600 mb-6">
        Compare Medicare Supplement and Medicare Advantage plans from top carriers.
      </p>
      <p className="text-sm text-gray-500">
        <Link href="/" className="text-blue-600 hover:underline">Return home</Link>
        {" · "}
        <Link href="/medicare-supplement/new-jersey" className="text-blue-600 hover:underline">Medicare Supplement NJ</Link>
        {" · "}
        <Link href="/about" className="text-blue-600 hover:underline">About us</Link>
      </p>
    </section>
  );
}
