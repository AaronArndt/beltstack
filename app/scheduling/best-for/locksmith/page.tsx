import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { LOCKSMITH_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForLocksmithPage() {
  return <BestForPageWithStructuredData {...LOCKSMITH_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/locksmith",
      title: "Best Scheduling Software for Locksmith Businesses (2026) | BeltStack",
      description:
        "Compare scheduling software for locksmiths: Calendly, Acuity Scheduling, and Setmore for after-hours deposits, automotive vs residential booking, and multi-van teams.",
    }),
    keywords: [
      "locksmith scheduling software",
      "locksmith appointment booking",
      "mobile locksmith online booking",
      "after-hours locksmith deposits",
      "2026",
    ],
  };
}
