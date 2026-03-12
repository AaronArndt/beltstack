import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/projectManagementBestForAgencies";

export default function BestProjectManagementForAgenciesPage() {
  return <BestForPageWithStructuredData {...AGENCIES_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Agencies (2026) | BeltStack",
    description:
      "Compare the best project management software for agencies: Teamwork, Asana, ClickUp. Client projects, time tracking, and team collaboration.",
  };
}
