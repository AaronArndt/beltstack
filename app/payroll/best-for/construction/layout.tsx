import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/construction",
  title: "Best Payroll Software for Construction Companies (2026) | BeltStack",
  description: "Compare the best payroll software for construction companies, subcontractors, and mixed crews. See top picks, features, and reviews.",
});

export default function BestForConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
