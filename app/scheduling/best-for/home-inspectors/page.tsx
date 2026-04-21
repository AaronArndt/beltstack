import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HOME_INSPECTORS_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForHomeInspectorsPage() {
  return <BestForPageWithStructuredData {...HOME_INSPECTORS_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/home-inspectors",
      title: buildBestForMetaTitle("Best Scheduling Software for Home Inspectors (2026)"),
      description:
        "Compare scheduling software for home inspectors: Acuity Scheduling, Calendly, and SimplyBook.me for multi-hour blocks, radon add-ons, agent-friendly booking, and multi-inspector firms.",
    }),
    keywords: [
      "home inspector scheduling software",
      "real estate inspection booking",
      "home inspection calendar software",
      "radon add-on scheduling",
      "2026",
    ],
  };
}
