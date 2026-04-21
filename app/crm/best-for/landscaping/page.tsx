import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { LANDSCAPING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForLandscapingPage() {
  return <BestForPageWithStructuredData {...LANDSCAPING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Landscaping Companies (2026)"),
    description:
      "Compare the best CRM software for landscapers: HubSpot, Pipedrive, Zoho CRM. Design-build proposals, maintenance renewals, seasonal campaigns, and upsell tracking.",
    keywords: [
      "CRM for landscaping",
      "landscape business CRM",
      "best CRM for landscaping company",
    ],
  };
}
