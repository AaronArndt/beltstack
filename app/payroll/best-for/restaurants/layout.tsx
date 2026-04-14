import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-for/restaurants",
  title: "Best Payroll Software for Restaurants (2026) | BeltStack",
  description: "Compare the best payroll software for restaurants. Top picks for FOH/BOH staff, tipped employees, tip reporting, and labor cost.",
});

export default function BestForRestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
