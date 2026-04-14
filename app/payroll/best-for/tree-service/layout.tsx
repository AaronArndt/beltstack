import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/tree-service",
  title: "Best Payroll Software for Tree Service Companies (2026) | BeltStack",
  description: "Compare the best payroll software for tree service and arborist companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForTreeServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
