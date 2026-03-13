import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Get a Medicare Quote | EasyKind Medicare",
  description: "Get a free Medicare Supplement or Medicare Advantage quote. Compare plans instantly.",
};

export default function QuotePage() {
  redirect("https://switch.healthplans.now");
}
