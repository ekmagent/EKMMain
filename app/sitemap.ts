import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  // Git-derived last-commit dates, committed via scripts/build-page-dates.js.
  // File mtimes are checkout time in CI, which would falsely mark every page
  // as changed on every deploy — lastmod must only move when content does.
  let pageDates: Record<string, string> = {};
  try {
    pageDates = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "page-dates.json"), "utf8")
    );
  } catch {
    // page-dates.json missing — fall back to mtime below
  }

  /** Return the last real content change for a page route. */
  function pageMtime(routePath: string): Date {
    if (pageDates[routePath]) return new Date(pageDates[routePath]);
    try {
      const filePath = path.join(process.cwd(), "app", routePath, "page.tsx");
      return fs.statSync(filePath).mtime;
    } catch {
      return new Date();
    }
  }

  // Static pages — lastModified from actual file modification dates
  const static_pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: pageMtime(""), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey`, lastModified: pageMtime("medicare-supplement/new-jersey"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-advantage/new-jersey`, lastModified: pageMtime("medicare-advantage/new-jersey"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/plan-g-vs-plan-n`, lastModified: pageMtime("medicare-supplement/new-jersey/plan-g-vs-plan-n"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/cost`, lastModified: pageMtime("medicare-supplement/new-jersey/cost"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/vs-medicare-advantage`, lastModified: pageMtime("medicare-supplement/new-jersey/vs-medicare-advantage"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/turning-65`, lastModified: pageMtime("medicare-supplement/new-jersey/turning-65"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/pennsylvania`, lastModified: pageMtime("medicare-supplement/pennsylvania"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement`, lastModified: pageMtime("medicare-supplement"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/rate-index`, lastModified: pageMtime("medicare-supplement/new-jersey/rate-index"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/switch-carriers`, lastModified: pageMtime("medicare-supplement/switch-carriers"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/bankers-fidelity-review`, lastModified: pageMtime("medicare-supplement/bankers-fidelity-review"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/compare-policies`, lastModified: pageMtime("medicare-supplement/compare-policies"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/humana-medigap-review`, lastModified: pageMtime("medicare-supplement/humana-medigap-review"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/medico-medigap-review`, lastModified: pageMtime("medicare-supplement/medico-medigap-review"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/mutual-of-omaha-medigap-review`, lastModified: pageMtime("medicare-supplement/mutual-of-omaha-medigap-review"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/woodmenlife-medigap-review`, lastModified: pageMtime("medicare-supplement/woodmenlife-medigap-review"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/learn`, lastModified: pageMtime("learn"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/learn/what-is-medigap`, lastModified: pageMtime("learn/what-is-medigap"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/learn/medicare-enrollment-periods`, lastModified: pageMtime("learn/medicare-enrollment-periods"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/learn/medicare-parts-explained`, lastModified: pageMtime("learn/medicare-parts-explained"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/learn/how-to-sign-up-for-medicare`, lastModified: pageMtime("learn/how-to-sign-up-for-medicare"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/learn/medicare-help-low-income`, lastModified: pageMtime("learn/medicare-help-low-income"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/learn/irmaa-medicare-surcharge`, lastModified: pageMtime("learn/irmaa-medicare-surcharge"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: pageMtime("contact"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/learn/ssa-online-enrollment-walkthrough`, lastModified: pageMtime("learn/ssa-online-enrollment-walkthrough"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: pageMtime("about"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: pageMtime("privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: pageMtime("terms"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/services`, lastModified: pageMtime("services"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/write-for-us`, lastModified: pageMtime("write-for-us"), changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic service pages — read from service-index.json built by scripts/build-service-index.js
  let service_pages: MetadataRoute.Sitemap = [];
  try {
    const indexPath = path.join(process.cwd(), "service-index.json");
    if (fs.existsSync(indexPath)) {
      const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
      // Prefer entries[] (slug + lastModified) if available; fall back to slugs[]
      if (index.entries) {
        service_pages = index.entries.map((e: { slug: string; lastModified: string }) => ({
          url: `${SITE_URL}/services/${e.slug}`,
          lastModified: new Date(e.lastModified),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));
      } else {
        service_pages = (index.slugs || []).map((slug: string) => ({
          url: `${SITE_URL}/services/${slug}`,
          lastModified: pageMtime(`services/${slug}`),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));
      }
    }
  } catch {
    // service-index.json not yet created — run scripts/build-service-index.js
  }

  // Dynamic FAQ pages — read from faq-index.json built by build-faq-pages.js
  let faq_pages: MetadataRoute.Sitemap = [];
  try {
    const indexPath = path.join(process.cwd(), "faq-index.json");
    if (fs.existsSync(indexPath)) {
      const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
      faq_pages = (index.entries || []).map((entry: { slug: string; date?: string }) => ({
        url: `${SITE_URL}/medicare-faq/${entry.slug}`,
        lastModified: entry.date ? new Date(entry.date) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    }
  } catch {
    // faq-index.json not yet created — will populate on first FAQ build run
  }

  return [...static_pages, ...service_pages, ...faq_pages];
}
