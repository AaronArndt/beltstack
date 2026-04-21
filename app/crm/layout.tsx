import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "CRM Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Explore CRM software for small businesses with reviews, side-by-side comparisons, and practical guides for choosing the right tool.",
});

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

