import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for HVAC Businesses (2026) | BeltStack",
    description:
      "Compare the best CRM software for HVAC: HubSpot, Pipedrive, Zoho CRM. Seasonal marketing, estimate follow-up, membership renewals, and lead tracking for residential and commercial HVAC.",
    keywords: [
      "CRM for HVAC",
      "HVAC CRM software",
      "best CRM for HVAC contractors",
      "HVAC sales software",
      "customer relationship management HVAC",
    ],
  };
}
