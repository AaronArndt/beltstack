import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { STARTUPS_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForStartupsPage() {
  return <BestForPageWithStructuredData {...STARTUPS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Helpdesk Software for Startups (2026)"),
    description:
      "Helpdesk tools for startups: Freshdesk, Help Scout, Intercom. Low cost, fast setup, and room to scale as you add support volume.",
  };
}
