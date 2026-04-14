import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/inventory/best-inventory-software",
  title: "Best Inventory Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best inventory software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestInventorySoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
