import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { POOL_SERVICE_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForPoolServicePage() {
  return <BestForPageWithStructuredData {...POOL_SERVICE_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Pool Service Companies (2026)"),
    description:
      "Compare the best CRM software for pool service companies: Pipedrive, HubSpot, Zoho CRM. Equipment upgrades, customer marketing, referral partners, and quote follow-up beyond the route.",
    keywords: [
      "CRM for pool service",
      "pool company CRM",
      "best CRM for pool business",
    ],
  };
}
