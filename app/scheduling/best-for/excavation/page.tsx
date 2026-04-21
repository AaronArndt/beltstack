import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { EXCAVATION_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForExcavationPage() {
  return <BestForPageWithStructuredData {...EXCAVATION_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/excavation",
      title: buildBestForMetaTitle("Best Scheduling Software for Excavation Companies (2026)"),
      description:
        "Compare scheduling software for excavation companies: Acuity Scheduling, YouCanBook.me, and Setmore for utility locate workflows, site walks, equipment holds, and PM pooling.",
    }),
    keywords: [
      "excavation scheduling software",
      "excavator site walk booking",
      "utility locate appointment scheduling",
      "heavy civil contractor calendar",
      "2026",
    ],
  };
}
