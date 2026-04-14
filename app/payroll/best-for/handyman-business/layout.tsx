import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/handyman-business",
  title: "Best Payroll Software for Handyman Businesses (2026) | BeltStack",
  description: "Compare the best payroll software for handyman businesses. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
});

export default function BestForHandymanBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
