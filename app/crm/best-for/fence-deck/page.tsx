import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FENCE_DECK_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForFenceDeckPage() {
  return <BestForPageWithStructuredData {...FENCE_DECK_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Fence & Deck Builders (2026) | BeltStack",
    description:
      "Compare CRM tools for fence and deck builders: residential and commercial pursuits, permit-driven timelines, and follow-up when weather or material delays pause decisions.",
    keywords: [
      "CRM for fence and deck builders",
      "deck builder CRM",
      "fence contractor sales software",
      "outdoor contractor pipeline CRM",
      "deck sales follow-up CRM",
    ],
  };
}
