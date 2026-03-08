import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Growing Businesses (2026)",
  description:
    "Compare payroll software that scales with you. Top picks for adding employees, multi-state payroll, benefits at scale, and dedicated support.",
};

export default function BestForGrowingBusinessesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
