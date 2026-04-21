import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { STARTUPS_PAGE_PROPS } from "@/lib/data/crmBestForStartups";

export default function BestCrmForStartupsPage() {
  return <BestForPageWithStructuredData {...STARTUPS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Startups (2026)"),
    description:
      "Compare the best CRM software for startups: HubSpot, Pipedrive, Zoho CRM, Monday. Founder-led sales, fast setup, flexibility, and scaling without overbuying.",
  };
}
