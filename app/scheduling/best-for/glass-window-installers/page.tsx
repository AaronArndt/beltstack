import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GLASS_WINDOW_INSTALLERS_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForGlassWindowInstallersPage() {
  return <BestForPageWithStructuredData {...GLASS_WINDOW_INSTALLERS_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/glass-window-installers",
      title: "Best Scheduling Software for Glass & Window Installers (2026) | BeltStack",
      description:
        "Compare scheduling software for glass and window installers: Acuity Scheduling, Square Appointments, and SimplyBook.me for field measures, custom-order deposits, and commercial walks.",
    }),
    keywords: [
      "window installer scheduling software",
      "glass company appointment booking",
      "window measure scheduling",
      "glazing booking software",
      "2026",
    ],
  };
}
