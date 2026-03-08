import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Pool Service Businesses (2026)",
  description:
    "Compare the best payroll software for pool service companies. Top picks for route tech payroll, 1099 subs, route costing, and time tracking.",
};

export default function BestForPoolServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
