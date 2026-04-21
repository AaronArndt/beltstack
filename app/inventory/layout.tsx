import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Inventory Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Explore inventory software for small businesses with reviews, comparisons, and guides for stock control, purchasing, and operations.",
});

export default function InventoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

