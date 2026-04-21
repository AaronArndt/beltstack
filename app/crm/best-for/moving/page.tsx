import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { MOVING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForMovingPage() {
  return <BestForPageWithStructuredData {...MOVING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Moving Companies (2026)"),
    description:
      "Compare the best CRM software for moving companies: Monday, HubSpot, Pipedrive. Survey-to-booking pipeline, corporate and long-distance pursuits, partner referrals, and follow-up.",
    keywords: [
      "CRM for moving companies",
      "moving company CRM software",
      "best CRM for movers",
    ],
  };
}
