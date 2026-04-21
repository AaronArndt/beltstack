import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { PLUMBING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForPlumbingPage() {
  return <BestForPageWithStructuredData {...PLUMBING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Plumbing Companies (2026)"),
    description:
      "Compare the best CRM software for plumbing companies: HubSpot, Freshsales, Pipedrive. Lead capture, phone-heavy selling, estimate tracking, and referral management for plumbers.",
    keywords: [
      "CRM for plumbers",
      "plumbing CRM software",
      "best CRM for plumbing business",
      "plumbing sales CRM",
    ],
  };
}
