import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/pos/best-pos-software",
  title: "Best POS Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best POS software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestPosSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
