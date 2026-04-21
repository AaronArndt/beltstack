import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/schedulingBestFor";

export default function BestSchedulingForFreelancersPage() {
  return <BestForPageWithStructuredData {...FREELANCERS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Freelancers (2026)"),
    description:
      "Compare the best scheduling software for freelancers: Calendly, YouCanBook.me, SimplyBook.me. Simple booking, calendar sync, and reminders for solo professionals.",
  };
}
