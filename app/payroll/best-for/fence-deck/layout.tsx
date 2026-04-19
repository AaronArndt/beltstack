import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/fence-deck",
  title: "Best Payroll Software for Fence & Deck Builders (2026) | BeltStack",
  description:
    "Payroll for fence and deck builders: crew overtime, job-costed labor in QuickBooks, OnPay value, Gusto hiring, and ADP for scaling contractors.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "fence contractor payroll",
    "deck builder payroll software",
    "construction payroll",
    "OnPay payroll",
    "QuickBooks Payroll contractors",
    "ADP payroll small business",
  ],
};

export default function BestForFenceDeckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
