import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GROWING_TEAMS_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForGrowingTeamsPage() {
  return <BestForPageWithStructuredData {...GROWING_TEAMS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Helpdesk Software for Growing Teams (2026) | BeltStack",
    description:
      "Helpdesk that scales: Zendesk, Freshdesk, Front. More agents, channels, automation, and reporting for growing support teams.",
  };
}
