import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Time Tracking Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Explore time tracking software for small businesses with reviews, comparisons, and guides for payroll sync, timesheets, and productivity.",
});

export default function TimeTrackingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

