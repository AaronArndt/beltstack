import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { HOME_INSPECTORS_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForHomeInspectorsPage() {
  return <BestForPageWithStructuredData {...HOME_INSPECTORS_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Home Inspectors (2026)"),
    description:
      "Compare CRM tools for home inspectors: agent and direct-to-consumer pipelines, inspection add-ons, and follow-up that keeps referral relationships warm.",
    keywords: [
      "CRM for home inspectors",
      "home inspection business CRM",
      "best CRM for home inspection company",
      "real estate agent referral CRM",
      "inspector marketing CRM software",
    ],
  };
}
