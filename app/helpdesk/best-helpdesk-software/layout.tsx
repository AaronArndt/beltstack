import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { getBestSoftwareRoundupMeta } from "@/lib/seo/bestSoftwareRoundupMeta";

export const metadata: Metadata = siteMetadata(getBestSoftwareRoundupMeta("helpdesk"));

export default function BestHelpdeskSoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
