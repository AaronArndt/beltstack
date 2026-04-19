import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/mobile-mechanics",
  title: "Best Payroll Software for Mobile Mechanics (2026) | BeltStack",
  description:
    "Payroll for mobile mechanics: Square Payroll for Square users, OnPay value, Gusto benefits, QuickBooks when books live in QuickBooks.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "mobile mechanic payroll",
    "roadside mechanic payroll software",
    "Square Payroll",
    "automotive technician payroll",
    "OnPay payroll",
    "QuickBooks Payroll",
  ],
};

export default function BestForMobileMechanicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
