import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PAINTING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForPaintingPage() {
  return <BestForPageWithStructuredData {...PAINTING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Painting Contractors (2026) | BeltStack",
    description:
      "Compare the best CRM software for painting contractors: Pipedrive, Monday, HubSpot. Estimate follow-up, production alignment, referrals, and repeat customer marketing.",
    keywords: [
      "CRM for painters",
      "painting contractor CRM",
      "best CRM for painting company",
    ],
  };
}
