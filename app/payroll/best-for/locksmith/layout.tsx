import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/locksmith",
  title: "Best Payroll Software for Locksmith Businesses (2026) | BeltStack",
  description:
    "Payroll for locksmiths: mobile techs, after-hours pay, Square-friendly options, and W-2/1099 support. Compare Square Payroll, Gusto, OnPay, and Patriot.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "locksmith payroll software",
    "mobile locksmith payroll",
    "Square Payroll",
    "small business payroll",
    "1099 contractor payments",
    "Patriot Payroll",
  ],
};

export default function BestForLocksmithLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
