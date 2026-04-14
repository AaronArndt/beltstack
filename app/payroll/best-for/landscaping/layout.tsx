import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/landscaping",
  title: "Best Payroll Software for Landscaping Companies (2026) | BeltStack",
  description: "Compare the best payroll software for landscaping and lawn care companies. Top picks for crew payroll, seasonal workers, 1099 subs, and job costing.",
});

export default function BestForLandscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
