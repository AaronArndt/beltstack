import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/auto-repair",
  title: "Best Payroll Software for Auto Repair Shops (2026) | BeltStack",
  description:
    "Compare payroll software for auto repair shops and dealerships: W-2 technicians and service writers, 1099 sublet, flat-rate pay, QuickBooks RO costing, Gusto, ADP.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "auto repair shop payroll",
    "mechanic payroll software",
    "flat rate technician payroll",
    "QuickBooks Payroll job costing",
    "Gusto payroll automotive",
    "1099 sublet payroll",
    "ADP auto repair",
  ],
};

export default function BestForAutoRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
