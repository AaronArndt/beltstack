import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { GLASS_WINDOW_INSTALLERS_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForGlassWindowInstallersPage() {
  return <BestForPageWithStructuredData {...GLASS_WINDOW_INSTALLERS_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Glass & Window Installers (2026)"),
    description:
      "Compare CRM tools for glass and window companies: residential replacement funnels, commercial glazing pursuits, and follow-up when custom orders and lead times stretch decisions.",
    keywords: [
      "CRM for glass installers",
      "window company CRM software",
      "best CRM for window sales",
      "glazing contractor pipeline",
      "window replacement lead CRM",
    ],
  };
}
