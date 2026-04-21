import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { TEAMS_PAGE_PROPS } from "@/lib/data/schedulingBestFor";

export default function BestSchedulingForTeamsPage() {
  return <BestForPageWithStructuredData {...TEAMS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Teams (2026)"),
    description:
      "Compare the best scheduling software for teams: Calendly, YouCanBook.me, Zoho Bookings. Round-robin booking, collective availability, and buffer time.",
  };
}
