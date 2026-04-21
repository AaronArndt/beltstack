import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { LOCKSMITH_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForLocksmithPage() {
  return <BestForPageWithStructuredData {...LOCKSMITH_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Locksmith Businesses (2026)"),
    description:
      "Compare CRM tools for locksmiths: emergency and scheduled leads, commercial rekey programs, and speed-to-contact workflows that match mobile, phone-heavy sales.",
    keywords: [
      "CRM for locksmiths",
      "locksmith business CRM",
      "best CRM for locksmith company",
      "commercial locksmith lead tracking",
      "locksmith sales software",
    ],
  };
}
