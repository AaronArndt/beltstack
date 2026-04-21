import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/schedulingBestFor";

export default function BestSchedulingForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Small Business (2026)"),
    description:
      "Compare the best scheduling software for small businesses: Setmore, SimplyBook.me, Square Appointments. Free tiers, team features, and when to upgrade.",
  };
}
