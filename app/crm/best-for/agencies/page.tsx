import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/crmBestForAgencies";

export default function BestCrmForAgenciesPage() {
  return <BestForPageWithStructuredData {...AGENCIES_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Agencies (2026) | BeltStack",
    description:
      "Compare the best CRM software for agencies: HubSpot, Monday, Pipedrive, Zoho CRM. Client management, pipelines, reporting, and collaboration.",
  };
}
