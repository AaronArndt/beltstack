import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FENCE_DECK_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForFenceDeckPage() {
  return <BestForPageWithStructuredData {...FENCE_DECK_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/fence-deck",
      title: buildBestForMetaTitle("Best Scheduling Software for Fence & Deck Builders (2026)"),
      description:
        "Compare scheduling software for fence and deck builders: Setmore, Acuity Scheduling, and YouCanBook.me for site surveys, HOA intake, crew holds, and estimator pooling.",
    }),
    keywords: [
      "fence builder scheduling software",
      "deck builder appointment booking",
      "contractor survey scheduling",
      "outdoor contractor booking",
      "2026",
    ],
  };
}
