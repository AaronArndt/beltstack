import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSTRUCTION_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForConstructionPage() {
  return <BestForPageWithStructuredData {...CONSTRUCTION_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Construction Companies (2026) | BeltStack",
    description:
      "Compare the best CRM software for construction companies: Monday, Salesforce, HubSpot. Business development, pursuits, bid calendars, and marketing-aligned CRM for contractors.",
    keywords: [
      "CRM for construction",
      "construction company CRM",
      "best CRM for contractors sales",
    ],
  };
}
