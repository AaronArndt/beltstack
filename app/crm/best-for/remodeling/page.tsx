import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { REMODELING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForRemodelingPage() {
  return <BestForPageWithStructuredData {...REMODELING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Remodeling Businesses (2026)"),
    description:
      "Compare the best CRM software for remodelers: Keap, HubSpot, Pipedrive. Long design-build cycles, nurture, financing follow-up, and pipeline stages that match remodeling sales.",
    keywords: [
      "CRM for remodeling",
      "remodeling contractor CRM",
      "best CRM for remodelers",
    ],
  };
}
