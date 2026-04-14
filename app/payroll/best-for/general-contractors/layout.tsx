import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/general-contractors",
  title: "Best Payroll Software for General Contractors (2026) | BeltStack",
  description: "Compare the best payroll software for general contractors (GCs). Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForGeneralContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
