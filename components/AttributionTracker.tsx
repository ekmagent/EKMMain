"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Records lightweight, non-PII attribution in sessionStorage so the quote
// form can report where the visitor landed, what page they clicked from,
// and any UTM parameters. Renders nothing.
export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("ekm_landing")) {
        sessionStorage.setItem(
          "ekm_landing",
          window.location.pathname + window.location.search
        );
        sessionStorage.setItem("ekm_referrer", document.referrer || "");
      }
      const current = sessionStorage.getItem("ekm_current");
      if (current && current !== pathname) {
        sessionStorage.setItem("ekm_prev", current);
      }
      sessionStorage.setItem("ekm_current", pathname);
    } catch {
      // sessionStorage unavailable (private mode) — attribution is best-effort
    }
  }, [pathname]);

  return null;
}
