import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { PROPERTY_MANAGEMENT_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForPropertyManagementPage() {
  return <BestForPageWithStructuredData {...PROPERTY_MANAGEMENT_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Property Management Companies (2026)"),
    description:
      "Compare the best CRM software for property management: Salesforce, Copper, HubSpot. Owner relationships, new business development, Google Workspace fit, and inbound growth.",
    keywords: [
      "CRM for property management",
      "property management CRM software",
      "best CRM for property managers",
    ],
  };
}
