import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Home Services Businesses (2026)",
  description:
    "Compare the best payroll software for home services—HVAC, plumbing, electrical, cleaning, handyman, pool service. Top picks for crew payroll, 1099 subs, and job costing.",
};

export default function BestForHomeServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
