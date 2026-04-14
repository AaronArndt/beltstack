import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/growing-businesses",
  title: "Best Payroll Software for Growing Businesses (2026) | BeltStack",
  description: "Compare payroll software that scales with you. Top picks for adding employees, multi-state payroll, benefits at scale, and dedicated support.",
});

export default function BestForGrowingBusinessesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
