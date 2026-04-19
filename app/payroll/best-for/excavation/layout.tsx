import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/excavation",
  title: "Best Payroll Software for Excavation Companies (2026) | BeltStack",
  description:
    "Payroll for excavation and earthwork: ADP, Paychex serviced payroll, Gusto for SMBs, QuickBooks job alignment—compare top options for operators and crews.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "excavation company payroll",
    "heavy equipment contractor payroll",
    "ADP vs Paychex",
    "construction payroll software",
    "QuickBooks Payroll",
    "Gusto payroll",
  ],
};

export default function BestForExcavationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
