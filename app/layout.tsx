import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...siteMetadata({
    path: "/",
    title: "Best Software for Contractors & Small Businesses (2026) | BeltStack",
    description:
      "Compare the best software for contractors and small businesses, including payroll, CRM, field service, marketing, and more.",
  }),
  other: {
    "impact-site-verification": "6e75958d-93bf-4790-9cae-18726ffe1354",
  } as any,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} font-sans antialiased pt-[var(--navbar-h)]`}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
