import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/appliance-repair",
  title: "Best Payroll Software for Appliance Repair Businesses (2026) | BeltStack",
  description:
    "Compare payroll software for appliance repair shops: W-2 field techs, 1099 subcontractors, overtime, and QuickBooks job costing. Top picks for 2026.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "payroll software appliance repair",
    "appliance repair payroll",
    "field technician payroll",
    "1099 contractor payroll",
    "QuickBooks payroll contractors",
    "Gusto payroll small business",
  ],
};

export default function BestForApplianceRepairLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
