import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/garage-door",
  title: "Best Payroll Software for Garage Door Companies (2026) | BeltStack",
  description:
    "Payroll for garage door dealers and installers: crews, commissions, QuickBooks job costing, and multi-location payroll. Compare top providers for 2026.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "payroll software garage door",
    "garage door company payroll",
    "installer payroll",
    "contractor payroll QuickBooks",
    "ADP small business payroll",
    "Gusto payroll",
  ],
};

export default function BestForGarageDoorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
