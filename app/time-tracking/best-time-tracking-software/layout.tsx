import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/time-tracking/best-time-tracking-software",
  title: "Best Time Tracking Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best time tracking software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestTimeTrackingSoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
