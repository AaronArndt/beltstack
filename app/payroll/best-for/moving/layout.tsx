import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/moving",
  title: "Best Payroll Software for Moving Companies (2026) | BeltStack",
  description: "Compare payroll software for moving companies: seasonal crews, W-2 drivers and packers, 1099 labor, multi-state moves, and QuickBooks job alignment.",
});

export default function BestForMovingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
