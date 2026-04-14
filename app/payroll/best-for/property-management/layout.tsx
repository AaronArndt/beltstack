import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/property-management",
  title: "Best Payroll Software for Property Management (2026) | BeltStack",
  description: "Compare the best payroll software for property management. Top picks for on-site staff, leasing agents, maintenance crews, and 1099 contractors.",
});

export default function BestForPropertyManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
