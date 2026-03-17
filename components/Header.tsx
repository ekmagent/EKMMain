import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-[#D0E4DE] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-[#2D6E5F]">
            Medicare<span className="text-[#1C2B27]">Yourself</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#3A5048]">
          <Link href="/medicare-supplement/new-jersey" className="hover:text-[#2D6E5F] transition-colors">
            Supplement
          </Link>
          <Link href="/medicare-advantage/new-jersey" className="hover:text-[#2D6E5F] transition-colors">
            Advantage
          </Link>
          <Link href="/hub" className="hover:text-[#2D6E5F] transition-colors">
            Guides
          </Link>
          <Link href="/about" className="hover:text-[#2D6E5F] transition-colors">
            About
          </Link>
        </nav>

        <a
          href="tel:8555591700"
          className="bg-[#2D6E5F] hover:bg-[#1f5245] text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="hidden sm:inline">855-559-1700</span>
          <span className="sm:hidden">Call</span>
        </a>

      </div>
    </header>
  );
}
