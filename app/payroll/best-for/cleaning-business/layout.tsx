import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/cleaning-business",
  title: "Best Payroll Software for Cleaning Companies (2026) | BeltStack",
  description: "Compare the best payroll software for cleaning and janitorial companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForCleaningBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
