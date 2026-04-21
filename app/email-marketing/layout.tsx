import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Email Marketing Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Compare the best email marketing software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
