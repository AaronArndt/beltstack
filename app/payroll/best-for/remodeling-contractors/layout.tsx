import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/remodeling-contractors",
  title: "Best Payroll Software for Remodeling Contractors (2026) | BeltStack",
  description: "Compare the best payroll software for remodeling and renovation contractors. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForRemodelingContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
