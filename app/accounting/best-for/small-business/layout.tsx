import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/accounting/best-for/small-business",
  title: "Best Accounting Software for Small Businesses (2026) | BeltStack",
  description:
    "Find the best accounting software for small businesses. Compare features, pricing, pros and cons, and the top tools for your business.",
});

export default function BestForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
