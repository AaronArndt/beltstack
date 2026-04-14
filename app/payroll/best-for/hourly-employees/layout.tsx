import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/hourly-employees",
  title: "Best Payroll Software for Hourly Employees (2026) | BeltStack",
  description: "Compare the best payroll software for hourly employees and time-based pay. Top picks for time tracking, overtime calculation, and hourly payroll.",
});

export default function BestForHourlyEmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
