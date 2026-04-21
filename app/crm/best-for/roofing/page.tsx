import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { ROOFING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForRoofingPage() {
  return <BestForPageWithStructuredData {...ROOFING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Roofing Companies (2026)"),
    description:
      "Compare the best CRM software for roofers: HubSpot, Keap, Pipedrive. Storm and retail leads, inspection follow-up, supplements handoffs, and high-volume pipeline discipline.",
    keywords: [
      "CRM for roofing",
      "roofing CRM software",
      "best CRM for roofing contractors",
    ],
  };
}
