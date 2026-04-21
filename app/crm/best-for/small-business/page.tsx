import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/crmBestForSmallBusiness";

export default function BestCrmForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Small Businesses (2026)"),
    description:
      "Compare the best CRM software for small businesses: HubSpot, Zoho CRM, Pipedrive, Freshsales. Lead management, automation, reporting, and ease of use.",
  };
}
