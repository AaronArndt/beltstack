import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/accounting/best-for/agencies",
  title: "Best Accounting Software for Agencies (2026) | BeltStack",
  description:
    "Find the best accounting software for agencies. Compare features, pricing, pros and cons, and the top tools for your business.",
});

export default function BestForAgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
