interface PhoneCTAProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  label?: string;
}

export default function PhoneCTA({
  variant = "primary",
  size = "lg",
  label = "Call for Free Advice",
}: PhoneCTAProps) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-lg transition-colors";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variants = {
    primary: "bg-blue-700 hover:bg-blue-800 text-white",
    secondary: "bg-white hover:bg-gray-50 text-blue-700 border-2 border-blue-700",
  };

  return (
    <a href="tel:8555591700" className={`${base} ${sizes[size]} ${variants[variant]}`}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      {label} — 855-559-1700
    </a>
  );
}
