import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  title: "Helpdesk Software for Small Businesses: Reviews, Comparisons & Tools (2026) | BeltStack",
  description:
    "Explore helpdesk software for small businesses with reviews, comparisons, and practical guides for support workflows and team fit.",
});

export default function HelpdeskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

