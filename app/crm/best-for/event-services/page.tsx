import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { EVENT_SERVICES_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForEventServicesPage() {
  return <BestForPageWithStructuredData {...EVENT_SERVICES_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Event Services (2026)"),
    description:
      "Compare CRM tools for event production: fast proposal cycles, B2B pursuits, vendor-heavy projects, and follow-up when clients compare multiple vendors quickly.",
    keywords: [
      "CRM for event services",
      "event production CRM software",
      "best CRM for event companies",
      "AV staging sales pipeline",
      "event rental business CRM",
    ],
  };
}
