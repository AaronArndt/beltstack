import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/event-services",
  title: "Best Payroll Software for Event Services (2026) | BeltStack",
  description:
    "Payroll for event services: seasonal staff, Gusto hiring, Square Payroll, Patriot low cost, OnPay support—compare payroll for production companies.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "event company payroll",
    "seasonal staff payroll software",
    "Gusto payroll",
    "Square Payroll",
    "Patriot Payroll",
    "1099 contractor payroll",
  ],
};

export default function BestForEventServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
