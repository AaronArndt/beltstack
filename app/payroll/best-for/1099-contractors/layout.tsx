import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/1099-contractors",
  title: "Best Payroll Software for 1099 Contractors (2026) | BeltStack",
  description: "Compare the best payroll software for paying 1099 contractors. Top picks for contractor payments, 1099-NEC filing, contractor portals, and mixed W-2/1099 teams.",
});

export default function BestFor1099ContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
