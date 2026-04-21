import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { SALES_TEAMS_PAGE_PROPS } from "@/lib/data/crmBestForSalesTeams";

export default function BestCrmForSalesTeamsPage() {
  return <BestForPageWithStructuredData {...SALES_TEAMS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Sales Teams (2026)"),
    description:
      "Compare the best CRM software for sales teams: Salesforce, HubSpot, Pipedrive, Close. Pipeline management, rep workflows, reporting, automation, and forecasting.",
  };
}
