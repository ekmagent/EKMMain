"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const INTENTS = [
  { value: "compare", label: "I'm comparing Medicare plans" },
  { value: "switch", label: "I want to switch my Medigap plan" },
  { value: "turning65", label: "I'm turning 65 and need Medigap coverage" },
] as const;

type Intent = (typeof INTENTS)[number]["value"];

interface ZipCTAProps {
  size?: "default" | "lg";
  label?: string;
}

export default function ZipCTA({ size = "default", label = "Get My Options" }: ZipCTAProps) {
  const [zip, setZip] = useState("");
  const [intent, setIntent] = useState<Intent>("compare");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = zip.replace(/\D/g, "");
    if (clean.length !== 5) {
      setError("Please enter a valid 5-digit zip code.");
      return;
    }
    setError("");

    if (intent === "switch") {
      window.location.href = `https://switch.healthplans.now?zip=${clean}`;
    } else if (intent === "turning65") {
      window.location.href = `https://healthplans.now?zip=${clean}`;
    } else {
      router.push(`/quote?zip=${clean}`);
    }
  }

  const isLg = size === "lg";
  const inputSize = isLg ? "px-5 py-4 text-lg" : "px-4 py-3 text-base";

  return (
    <form onSubmit={handleSubmit} className={`w-full ${isLg ? "max-w-md mx-auto" : "max-w-sm"}`} noValidate>

      {/* Intent selector */}
      <div className="mb-3">
        <label htmlFor="intent-select" className="block text-sm font-bold text-[#1C2B27] mb-1.5">
          What describes you?
        </label>
        <select
          id="intent-select"
          value={intent}
          onChange={(e) => setIntent(e.target.value as Intent)}
          className={`w-full border-2 border-[#D0E4DE] rounded-lg bg-white text-[#1C2B27] font-semibold focus:outline-none focus:border-[#2D6E5F] transition-colors cursor-pointer ${inputSize}`}
        >
          {INTENTS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Zip + submit */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="zip-input" className="sr-only">Enter your zip code</label>
          <input
            id="zip-input"
            type="text"
            inputMode="numeric"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
              if (error) setError("");
            }}
            placeholder="Zip code"
            maxLength={5}
            className={`w-full border-2 border-[#D0E4DE] rounded-lg bg-white text-[#1C2B27] placeholder-[#3A5048] font-semibold focus:outline-none focus:border-[#2D6E5F] transition-colors ${inputSize}`}
          />
        </div>
        <button
          type="submit"
          className={`rounded-lg font-bold text-white bg-[#E8842A] hover:bg-[#cf7020] active:bg-[#b8611a] transition-colors shadow-sm whitespace-nowrap cursor-pointer ${inputSize}`}
        >
          {label}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>
      )}
    </form>
  );
}
