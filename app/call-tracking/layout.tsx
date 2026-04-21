import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Call Tracking Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Compare the best call tracking software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function CallTrackingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
