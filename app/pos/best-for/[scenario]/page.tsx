import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  SMALL_BUSINESS_PAGE_PROPS,
  RETAIL_PAGE_PROPS,
  RESTAURANTS_PAGE_PROPS,
  ECOMMERCE_PAGE_PROPS,
  MULTI_LOCATION_PAGE_PROPS,
} from "@/lib/data/posBestFor";
import {
  POS_TRADE_BEST_FOR_BY_SLUG,
  getPosTradeMetaKeywords,
} from "@/lib/data/posBestForTrades";

const PAGE_MAP: Record<string, BestForTemplateProps> = {
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  retail: RETAIL_PAGE_PROPS,
  restaurants: RESTAURANTS_PAGE_PROPS,
  ecommerce: ECOMMERCE_PAGE_PROPS,
  "multi-location": MULTI_LOCATION_PAGE_PROPS,
  ...POS_TRADE_BEST_FOR_BY_SLUG,
};

type Props = { params: Promise<{ scenario: string }> };

export default async function PosBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const pageProps = PAGE_MAP[scenario];

  if (!pageProps) {
    notFound();
  }

  return <BestForPageWithStructuredData {...pageProps} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scenario } = await params;
  const pageProps = PAGE_MAP[scenario];

  if (!pageProps) {
    return {
      title: "Best POS Software by Use Case | BeltStack",
      description:
        "Browse our best POS software picks by use case and by trade—small business, retail, restaurants, ecommerce, multi-location, and service businesses.",
    };
  }

  const keywords = getPosTradeMetaKeywords(scenario);

  return {
    title: `${pageProps.title} | BeltStack`,
    description: pageProps.subtitle,
    ...(keywords?.length ? { keywords } : {}),
  };
}

export function generateStaticParams() {
  return Object.keys(PAGE_MAP).map((scenario) => ({ scenario }));
}
