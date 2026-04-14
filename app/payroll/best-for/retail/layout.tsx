import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/retail",
  title: "Best Payroll Software for Retail (2026) | BeltStack",
  description: "Compare the best payroll software for retail stores. Top picks for associates, managers, part-time and seasonal staff, and labor cost by location.",
});

export default function BestForRetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
