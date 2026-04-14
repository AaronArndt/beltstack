import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/plumbing",
  title: "Best Payroll Software for Plumbing Companies (2026) | BeltStack",
  description: "Compare the best payroll software for plumbing and trade companies. Top picks for tech payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForPlumbingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
