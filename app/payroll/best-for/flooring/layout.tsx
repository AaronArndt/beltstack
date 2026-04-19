import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/flooring",
  title: "Best Payroll Software for Flooring Contractors (2026) | BeltStack",
  description:
    "Payroll for flooring contractors: showroom and install crews, overtime, Rippling for multi-location HR, Gusto, QuickBooks job costing, and OnPay.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "flooring contractor payroll",
    "payroll software construction",
    "Rippling payroll",
    "QuickBooks Payroll job costing",
    "Gusto payroll",
    "flooring install crews payroll",
  ],
};

export default function BestForFlooringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
