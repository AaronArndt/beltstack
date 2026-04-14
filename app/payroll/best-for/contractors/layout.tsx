import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/contractors",
  title: "Best Payroll Software for Contractors (2026) | BeltStack",
  description: "Compare the best payroll software for contractors and trade businesses. Top picks for 1099 payments, mixed W-2/contractor crews, and job-costing-friendly workflows.",
});

export default function BestForContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
