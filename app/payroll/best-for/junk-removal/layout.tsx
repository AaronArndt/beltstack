import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/junk-removal",
  title: "Best Payroll Software for Junk Removal Businesses (2026) | BeltStack",
  description: "Compare payroll software for junk removal and hauling companies: W-2 crews, 1099 labor, overtime on cleanouts, reimbursements, and lean admin.",
});

export default function BestForJunkRemovalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
