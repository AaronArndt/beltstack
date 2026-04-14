import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/hvac",
  title: "Best Payroll Software for HVAC Companies (2026) | BeltStack",
  description: "Compare the best payroll software for HVAC and heating & cooling companies. Top picks for tech payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForHvacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
