import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  TIME_TRACKING_TRADE_BEST_FOR_BY_SLUG,
  TIME_TRACKING_TRADE_HUB_ORDER,
  TIME_TRACKING_TRADE_METADATA_BY_SLUG,
} from "@/lib/data/timeTrackingBestForTrades";

type Props = { params: Promise<{ scenario: string }> };

export default async function TimeTrackingTradeBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const pageProps = TIME_TRACKING_TRADE_BEST_FOR_BY_SLUG[scenario];

  if (!pageProps) {
    notFound();
  }

  return <BestForPageWithStructuredData {...pageProps} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scenario } = await params;
  const meta = TIME_TRACKING_TRADE_METADATA_BY_SLUG[scenario];

  if (!meta) {
    return {
      title: "Best Time Tracking Software by Use Case | BeltStack",
      description:
        "Browse time tracking software picks by use case and trade, including construction, home services, and field teams.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export function generateStaticParams() {
  return TIME_TRACKING_TRADE_HUB_ORDER.map((scenario) => ({ scenario }));
}
