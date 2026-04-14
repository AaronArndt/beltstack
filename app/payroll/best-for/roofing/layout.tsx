import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/roofing",
  title: "Best Payroll Software for Roofing Companies (2026) | BeltStack",
  description: "Compare the best payroll software for roofing contractors and roofing crews. Top picks for crew payroll, 1099 subs, job costing, and seasonal workforce.",
});

export default function BestForRoofingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
