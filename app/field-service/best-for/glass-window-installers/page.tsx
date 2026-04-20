import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GLASS_WINDOW_INSTALLERS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForGlassWindowInstallersPage() {
  return <BestForPageWithStructuredData {...GLASS_WINDOW_INSTALLERS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/glass-window-installers",
      title: "Best Field Service Software for Glass & Window Installers (2026) | BeltStack",
      description:
        "Compare field service software for glass and window installers: ServiceTrade, Zuper, and Jobber for commercial programs, configurable workflows, and residential replacement jobs.",
    }),
    keywords: [
      "window installer FSM",
      "glass company field service software",
      "glazing job management",
      "commercial glass service software",
      "2026",
    ],
  };
}
