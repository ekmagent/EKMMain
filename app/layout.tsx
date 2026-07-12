import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttributionTracker from "@/components/AttributionTracker";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        <AttributionTracker />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
