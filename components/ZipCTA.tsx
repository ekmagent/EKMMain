"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ZipCTAProps {
  size?: "default" | "lg";
  label?: string;
}

export default function ZipCTA({ size = "default", label = "Compare Plans" }: ZipCTAProps) {
  const [zip, setZip] = useState("");
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
    router.push(`/quote?zip=${clean}`);
  }

  const isLg = size === "lg";

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className={`flex flex-col sm:flex-row gap-3 ${isLg ? "max-w-md mx-auto" : "max-w-sm"}`}>
        <div className="flex-1">
          <label htmlFor="zip-input" className="sr-only">
            Enter your zip code
          </label>
          <input
            id="zip-input"
            type="text"
            inputMode="numeric"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
              if (error) setError("");
            }}
            placeholder="Enter zip code"
            maxLength={5}
            className={`w-full border-2 border-[#D0E4DE] rounded-lg bg-white text-[#1C2B27] placeholder-[#5A7269] font-semibold focus:outline-none focus:border-[#2D6E5F] transition-colors ${
              isLg ? "px-5 py-4 text-lg" : "px-4 py-3 text-base"
            }`}
          />
        </div>
        <button
          type="submit"
          className={`rounded-lg font-bold text-white bg-[#E8842A] hover:bg-[#cf7020] active:bg-[#b8611a] transition-colors shadow-sm whitespace-nowrap cursor-pointer ${
            isLg ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
          }`}
        >
          {label}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center sm:text-left" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
