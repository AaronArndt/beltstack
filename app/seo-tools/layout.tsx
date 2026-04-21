import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "SEO Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Compare the best SEO software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function SeoToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
