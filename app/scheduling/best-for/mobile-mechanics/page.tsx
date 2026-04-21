import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOBILE_MECHANICS_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForMobileMechanicsPage() {
  return <BestForPageWithStructuredData {...MOBILE_MECHANICS_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/mobile-mechanics",
      title: buildBestForMetaTitle("Best Scheduling Software for Mobile Mechanics (2026)"),
      description:
        "Compare scheduling software for mobile mechanics: Calendly, YouCanBook.me, and Square Appointments for drive-time buffers, location intake, and field payments.",
    }),
    keywords: [
      "mobile mechanic scheduling software",
      "roadside mechanic booking",
      "mobile auto repair calendar",
      "fleet mobile mechanic appointments",
      "2026",
    ],
  };
}
