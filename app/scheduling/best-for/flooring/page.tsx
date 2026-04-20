import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FLOORING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForFlooringPage() {
  return <BestForPageWithStructuredData {...FLOORING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/flooring",
      title: "Best Scheduling Software for Flooring Contractors (2026) | BeltStack",
      description:
        "Compare scheduling software for flooring contractors: Acuity Scheduling, SimplyBook.me, and Calendly for in-home measures, install holds, deposits, and design consults.",
    }),
    keywords: [
      "flooring contractor scheduling software",
      "floor measure appointment booking",
      "flooring install scheduling",
      "Acuity flooring deposits",
      "2026",
    ],
  };
}
