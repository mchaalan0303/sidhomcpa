import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://nazihsidhomcpa.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Nazih A. Sidhom, CPA | Accounting & Tax Services | Cypress, CA",
  description:
    "Full-service accounting, tax planning, and consulting firm serving businesses and individuals since 1992. Located in Cypress, California.",
  keywords: [
    "CPA Cypress CA",
    "certified public accountant Cypress",
    "tax planning Orange County",
    "tax preparation Cypress California",
    "accounting firm Cypress CA",
    "estate planning CPA",
    "small business accounting",
    "high net worth tax planning",
    "investment services CPA",
    "Nazih Sidhom CPA",
  ],
  authors: [{ name: "Nazih A. Sidhom, CPA" }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Nazih A. Sidhom, CPA",
    title: "Nazih A. Sidhom, CPA | Accounting & Tax Services | Cypress, CA",
    description:
      "Full-service accounting, tax planning, and consulting for businesses and individuals since 1992. Cypress, California.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazih A. Sidhom, CPA | Accounting & Tax Services | Cypress, CA",
    description:
      "Full-service accounting, tax planning, and consulting for businesses and individuals since 1992. Cypress, California.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}