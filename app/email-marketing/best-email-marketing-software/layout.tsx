import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { getBestSoftwareRoundupMeta } from "@/lib/seo/bestSoftwareRoundupMeta";

export const metadata: Metadata = siteMetadata(getBestSoftwareRoundupMeta("email-marketing"));

export default function BestEmailMarketingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

