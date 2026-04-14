import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/small-business",
  title: "Best Payroll Software for Small Business (2026) | BeltStack",
  description: "Compare the best payroll software for small businesses and startups. Top picks for transparent pricing, easy setup, and all-in-one payroll plus HR.",
});

export default function BestForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
