import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttributionTracker from "@/components/AttributionTracker";
import SchemaMarkup from "@/components/SchemaMarkup";
import { BUSINESS, businessAddress, founderPerson } from "@/lib/business";
import { SITE_URL } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "MedicareYourself | Medicare Insurance Broker",
    template: "%s | MedicareYourself",
  },
  description:
    "Independent Medicare insurance broker licensed in New Jersey and 34 other states. Compare Medicare Supplement and Medicare Advantage plans. Call 855-559-1700.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "MedicareYourself",
    type: "website",
  },
};

// Site-wide entity graph: one canonical InsuranceAgency node (@id anchored)
// that every page-level schema can reference. NAP must match the footer and
// the Google Business Profile exactly.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${BUSINESS.url}/#organization`,
  name: BUSINESS.name,
  alternateName: BUSINESS.alternateName,
  legalName: BUSINESS.legalName,
  url: BUSINESS.url,
  telephone: BUSINESS.telephone,
  address: businessAddress(),
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  sameAs: BUSINESS.orgSameAs,
  founder: founderPerson(),
  description:
    "Independent Medicare insurance broker based in Cherry Hill, NJ, helping people compare Medicare Supplement and Medicare Advantage plans in New Jersey and 34 other states.",
  priceRange: "Free consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        <SchemaMarkup schema={organizationSchema} />
        <AttributionTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
