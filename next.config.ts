import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const hubSlugs = [
  "best-and-cheapest-medicare-supplement",
  "best-medicare-insurance-brokers-near-me",
  "best-medicare-plan-for-chronic-conditions",
  "free-medicare-advocate-near-me",
  "free-medicare-agent-that-helps-with-paperwork",
  "how-to-enroll-in-medicare-in-new-jersey",
  "independent-medicare-advantage-agents-near-me",
  "independent-medicare-supplement-insurance-agents",
  "independent-medicare-supplement-insurance-agents-near-me",
  "medicare-advantage-agents-near-me",
  "medicare-agent-that-helps-with-paperwork-near-me",
  "medicare-broker-for-people-with-parkinsons",
  "medicare-brokers-in-my-area",
  "medicare-enrollment-help-for-people-with-diabetes",
  "medicare-enrollment-help-for-people-with-lupus",
  "medicare-supplement-for-seniors-turning-65",
  "medicare-supplement-rate-jumped-why-and-what-can-i-do",
  "plan-g-rates-by-age-new-jersey",
  "what-time-of-year-can-you-switch-medicare-supplement-plans",
];

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      // Redirect /hub index
      { source: "/hub", destination: "/services", permanent: true },
      // Redirect each individual hub page to /services
      ...hubSlugs.map((slug) => ({
        source: `/hub/${slug}`,
        destination: `/services/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default withMDX(nextConfig);
