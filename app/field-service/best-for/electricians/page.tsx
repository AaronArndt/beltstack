import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ELECTRICIANS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForElectricians";

export default function BestFieldServiceForElectriciansPage() {
  return <BestForPageWithStructuredData {...ELECTRICIANS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Electricians (2026) | BeltStack",
    description:
      "Compare the best field service management software for electricians. See top picks for scheduling, dispatch, estimates, and invoicing.",
  };
}

