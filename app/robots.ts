import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly allow all major AI crawlers — better than implicit wildcard
      { userAgent: "GPTBot", allow: "/" },           // OpenAI
      { userAgent: "ChatGPT-User", allow: "/" },     // ChatGPT browsing
      { userAgent: "OAI-SearchBot", allow: "/" },    // OpenAI search
      { userAgent: "ClaudeBot", allow: "/" },        // Anthropic
      { userAgent: "anthropic-ai", allow: "/" },     // Anthropic alt
      { userAgent: "PerplexityBot", allow: "/" },    // Perplexity
      { userAgent: "Google-Extended", allow: "/" },  // Google AI training
      { userAgent: "Googlebot", allow: "/" },        // Google search
      { userAgent: "Bingbot", allow: "/" },          // Bing search
      { userAgent: "cohere-ai", allow: "/" },        // Cohere
      { userAgent: "Applebot", allow: "/" },         // Apple
      { userAgent: "Applebot-Extended", allow: "/" },// Apple AI
      { userAgent: "YouBot", allow: "/" },           // You.com
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "*", allow: "/" },                // everyone else
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
