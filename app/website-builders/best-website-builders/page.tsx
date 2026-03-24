import type { Metadata } from "next";
import { BestWebsiteBuildersPageClient } from "./BestWebsiteBuildersPageClient";

export const metadata: Metadata = {
  title: "Best Website Builders (2026) | BeltStack",
  description:
    "2026 rankings of the best website builders for small businesses, contractors, and local SEO—Wix, Squarespace, Shopify, Webflow, Duda, GoDaddy, Hostinger—with reviews and comparisons.",
};

export default function BestWebsiteBuildersPage() {
  return <BestWebsiteBuildersPageClient />;
}
