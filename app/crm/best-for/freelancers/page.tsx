import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/crmBestForFreelancers";

export default function BestCrmForFreelancersPage() {
  return <BestForPageWithStructuredData {...FREELANCERS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Freelancers (2026)"),
    description:
      "Compare the best CRM software for freelancers: HubSpot, Zoho CRM, Monday, Keap. Client tracking, leads, follow-ups, and lightweight automation.",
  };
}
