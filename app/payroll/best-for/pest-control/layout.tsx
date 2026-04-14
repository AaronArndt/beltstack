import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/pest-control",
  title: "Best Payroll Software for Pest Control Companies (2026) | BeltStack",
  description: "Compare the best payroll software for pest control and exterminator companies. Top picks for tech payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForPestControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
