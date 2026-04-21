import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { GROWING_TEAMS_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForGrowingTeamsPage() {
  return <BestForPageWithStructuredData {...GROWING_TEAMS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Helpdesk Software for Growing Teams (2026)"),
    description:
      "Helpdesk that scales: Zendesk, Freshdesk, Front. More agents, channels, automation, and reporting for growing support teams.",
  };
}
