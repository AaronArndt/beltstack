import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Reputation Management Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Explore reputation management software for small businesses with reviews, comparisons, and guides for review generation and response workflows.",
});

export default function ReputationManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

