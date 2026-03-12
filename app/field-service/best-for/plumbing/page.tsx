import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PLUMBING_PAGE_PROPS } from "@/lib/data/fieldServiceBestForPlumbing";

export default function BestFieldServiceForPlumbingPage() {
  return <BestForPageWithStructuredData {...PLUMBING_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Plumbing Businesses (2026) | BeltStack",
    description:
      "Compare the best field service management software for plumbing companies. See top picks for job scheduling, dispatch, estimates, invoicing, and customer history.",
  };
}

