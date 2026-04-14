import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TradeHubPage } from "@/components/trade-hub/TradeHubPage";
import { getTradeHubDefinition, TRADE_HUB_SLUGS } from "@/lib/data/tradeHubs";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";

type Props = { params: Promise<{ tradeSlug: string }> };

/** Only slugs defined in `tradeHubDefinitions` resolve; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRADE_HUB_SLUGS.map((tradeSlug) => ({ tradeSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tradeSlug } = await params;
  const d = getTradeHubDefinition(tradeSlug);
  if (!d) return {};
  const label = d.breadcrumbLabel;
  return siteMetadata({
    path: `/${tradeSlug}`,
    title: `Best Software for ${label} Businesses (${SEO_YEAR}) | BeltStack`,
    description: `Explore the best software for ${label.toLowerCase()} businesses, including scheduling, CRM, invoicing, payroll, and field service tools.`,
  });
}

export default async function TradeIndustryHubRoute({ params }: Props) {
  const { tradeSlug } = await params;
  const data = getTradeHubDefinition(tradeSlug);
  if (!data) notFound();
  return <TradeHubPage data={data} />;
}
