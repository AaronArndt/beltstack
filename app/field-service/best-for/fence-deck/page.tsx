import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FENCE_DECK_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForFenceDeckPage() {
  return <BestForPageWithStructuredData {...FENCE_DECK_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/fence-deck",
      title: "Best Field Service Software for Fence & Deck Builders (2026) | BeltStack",
      description:
        "Compare field service software for fence and deck builders: Jobber, WorkWave Service, and Simpro for surveys, crew days, HOA notes, outdoor project billing, and route-heavy crews.",
    }),
    keywords: [
      "fence builder FSM software",
      "deck contractor field service",
      "outdoor contractor dispatch",
      "deck and fence job management",
      "2026",
    ],
  };
}
