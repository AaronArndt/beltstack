import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Best Accounting Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best accounting software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
