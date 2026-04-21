import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { ELECTRICIANS_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForElectriciansPage() {
  return <BestForPageWithStructuredData {...ELECTRICIANS_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Electricians (2026)"),
    description:
      "Compare the best CRM software for electrical contractors: HubSpot, Monday, Zoho CRM. Commercial bids, service upsells, EV and panel opportunities, and account-based selling.",
    keywords: [
      "CRM for electricians",
      "electrical contractor CRM",
      "best CRM for electrical business",
    ],
  };
}
