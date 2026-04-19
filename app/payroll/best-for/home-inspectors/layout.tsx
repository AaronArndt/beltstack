import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/home-inspectors",
  title: "Best Payroll Software for Home Inspectors (2026) | BeltStack",
  description:
    "Payroll for home inspection firms: Patriot for micro teams, OnPay value, Gusto benefits, QuickBooks Payroll—W-2 and 1099 associate inspectors.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "home inspector payroll",
    "inspection company payroll software",
    "Patriot Payroll",
    "OnPay payroll",
    "small business payroll",
    "QuickBooks Payroll",
  ],
};

export default function BestForHomeInspectorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
