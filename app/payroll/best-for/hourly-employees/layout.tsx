import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Hourly Employees (2026)",
  description:
    "Compare the best payroll software for hourly employees and time-based pay. Top picks for time tracking, overtime calculation, and hourly payroll.",
};

export default function BestForHourlyEmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
