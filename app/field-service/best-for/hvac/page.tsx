import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_PAGE_PROPS } from "@/lib/data/fieldServiceBestForHvac";

export default function BestFieldServiceForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for HVAC Businesses (2026) | BeltStack",
    description:
      "Compare the best field service management software for HVAC companies. See top tools for dispatch, maintenance agreements, installs, and emergency calls.",
  };
}

