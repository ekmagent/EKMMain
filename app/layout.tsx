import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <body className={`${geist.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
