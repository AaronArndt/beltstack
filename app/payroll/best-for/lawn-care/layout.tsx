import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/lawn-care",
  title: "Best Payroll Software for Lawn Care Companies (2026) | BeltStack",
  description: "Compare the best payroll software for lawn care and landscaping companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForLawnCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
