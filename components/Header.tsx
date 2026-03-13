import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-800">EasyKind Medicare</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/medicare-supplement/new-jersey" className="hover:text-blue-700 transition-colors">
            Medicare Supplement
          </Link>
          <Link href="/medicare-advantage/new-jersey" className="hover:text-blue-700 transition-colors">
            Medicare Advantage
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">
            About
          </Link>
        </nav>

        <a
          href="tel:8555591700"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          855-559-1700
        </a>
      </div>
    </header>
  );
}
