import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EasyKind Medicare | Medicare Insurance Broker",
    template: "%s | EasyKind Medicare",
  },
  description:
    "Independent Medicare insurance broker licensed in New Jersey and 34 other states. Compare Medicare Supplement and Medicare Advantage plans. Call 855-559-1700.",
  metadataBase: new URL("https://www.easykindmedicare.com"),
  openGraph: {
    siteName: "EasyKind Medicare",
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
