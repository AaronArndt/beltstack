import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/home-services",
  title: "Best Payroll Software for Home Services Businesses (2026) | BeltStack",
  description: "Compare the best payroll software for home services—HVAC, plumbing, electrical, cleaning, handyman, pool service. Top picks for crew payroll, 1099 subs, and job costing.",
});

export default function BestForHomeServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
