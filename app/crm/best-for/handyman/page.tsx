import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { HANDYMAN_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForHandymanPage() {
  return <BestForPageWithStructuredData {...HANDYMAN_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Handyman Businesses (2026)"),
    description:
      "Compare the best CRM software for handyman businesses: Zoho CRM, HubSpot, Pipedrive. Lightweight pipelines, affordable seats, estimate follow-up, and repeat customers.",
    keywords: [
      "CRM for handyman",
      "handyman business CRM",
      "best CRM for handyman service",
    ],
  };
}
