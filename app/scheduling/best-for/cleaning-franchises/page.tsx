import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CLEANING_FRANCHISES_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForCleaningFranchisesPage() {
  return <BestForPageWithStructuredData {...CLEANING_FRANCHISES_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/cleaning-franchises",
      title: "Best Scheduling Software for Cleaning Franchises (2026) | BeltStack",
      description:
        "Compare scheduling software for cleaning franchises: Setmore, Acuity Scheduling, and SimplyBook.me for recurring routes, deep-clean packages, and multi-territory rollout.",
    }),
    keywords: [
      "cleaning franchise scheduling software",
      "maid service franchise booking",
      "multi-location cleaning appointments",
      "recurring cleaning scheduling",
      "2026",
    ],
  };
}
