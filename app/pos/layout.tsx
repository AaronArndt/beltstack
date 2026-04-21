import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "POS Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Explore POS software for small businesses with reviews, comparisons, and practical guides for checkout, hardware fit, and operations.",
});

export default function PosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

