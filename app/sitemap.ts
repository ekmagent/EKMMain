import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const static_pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-advantage/new-jersey`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/plan-g-vs-plan-n`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/cost`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/vs-medicare-advantage`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/new-jersey/turning-65`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/medicare-supplement/pennsylvania`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/medicare-supplement/switch-carriers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/learn/what-is-medigap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/learn/medicare-parts-explained`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/learn/how-to-sign-up-for-medicare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/learn/medicare-help-low-income`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/learn/irmaa-medicare-surcharge`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/medicare-faq`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/write-for-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic service pages — read from service-index.json built by scripts/build-service-index.js
  let service_pages: MetadataRoute.Sitemap = [];
  try {
    const indexPath = path.join(process.cwd(), "service-index.json");
    if (fs.existsSync(indexPath)) {
      const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
      service_pages = (index.slugs || []).map((slug: string) => ({
        url: `${SITE_URL}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
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
