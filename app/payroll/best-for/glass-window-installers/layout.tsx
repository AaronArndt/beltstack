import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/glass-window-installers",
  title: "Best Payroll Software for Glass & Window Installers (2026) | BeltStack",
  description:
    "Payroll for glass and window companies: glazier crews, QuickBooks jobs, Gusto, Paychex full-service support, and OnPay for SMBs.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "window company payroll",
    "glass installer payroll software",
    "Paychex small business",
    "QuickBooks Payroll job costing",
    "Gusto payroll",
    "glazier payroll",
  ],
};

export default function BestForGlassWindowInstallersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
