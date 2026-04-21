import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { FENCE_DECK_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForFenceDeckPage() {
  return <BestForPageWithStructuredData {...FENCE_DECK_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Fence & Deck Builders (2026)"),
    description:
      "Compare project management tools for fence and deck builders: permitting, material staging, install milestones, and punch lists. Monday, Wrike, Trello.",
    keywords: [
      "best project management software",
      "project management software",
      "fence deck",
      "2026",
    ],
  };
}
