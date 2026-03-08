import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Restaurants (2026)",
  description:
    "Compare the best payroll software for restaurants. Top picks for FOH/BOH staff, tipped employees, tip reporting, and labor cost.",
};

export default function BestForRestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
