import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Property Management (2026)",
  description:
    "Compare the best payroll software for property management. Top picks for on-site staff, leasing agents, maintenance crews, and 1099 contractors.",
};

export default function BestForPropertyManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
