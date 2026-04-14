import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/nonprofits",
  title: "Best Payroll Software for Nonprofits (2026) | BeltStack",
  description: "Compare the best payroll software for nonprofits. Top picks for staff payroll, grant-funded labor allocation, and 1099 consultants.",
});

export default function BestForNonprofitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
