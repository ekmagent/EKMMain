import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of
        these instead:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left mb-10">
        <Link
          href="/"
          className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-all"
        >
          <span className="font-semibold text-gray-900">Home</span>
          <p className="text-sm text-gray-500 mt-1">Start here</p>
        </Link>
        <Link
          href="/medicare-supplement/new-jersey"
          className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-all"
        >
          <span className="font-semibold text-gray-900">Medicare Supplement NJ</span>
          <p className="text-sm text-gray-500 mt-1">Plan G rates &amp; enrollment</p>
        </Link>
        <Link
          href="/medicare-advantage/new-jersey"
          className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-all"
        >
          <span className="font-semibold text-gray-900">Medicare Advantage NJ</span>
          <p className="text-sm text-gray-500 mt-1">$0 premium options</p>
        </Link>
        <Link
          href="/hub"
          className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-sm transition-all"
        >
          <span className="font-semibold text-gray-900">Medicare Guides</span>
          <p className="text-sm text-gray-500 mt-1">Learn about Medicare</p>
        </Link>
      </div>

      <p className="text-gray-500 text-sm">
        Need help?{" "}
        <a href="tel:8555591700" className="text-blue-600 font-semibold hover:underline">
          Call 855-559-1700
        </a>
      </p>
    </section>
  );
}
