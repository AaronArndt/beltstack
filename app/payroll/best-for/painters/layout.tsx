import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/painters",
  title: "Best Payroll Software for Painting Contractors (2026) | BeltStack",
  description: "Compare the best payroll software for painting and contracting companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForPaintersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
