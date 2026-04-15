import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import {
  FREELANCERS_PAGE_PROPS,
  SMALL_BUSINESS_PAGE_PROPS,
  STARTUPS_PAGE_PROPS,
  AGENCIES_PAGE_PROPS,
  GLOBAL_TEAMS_PAGE_PROPS,
} from "@/lib/data/hrBestFor";
import { HR_TRADE_BEST_FOR_BY_SLUG, HR_TRADE_BEST_FOR_METADATA_BY_SLUG } from "@/lib/data/hrBestForTrades";

const CORE_PAGE_MAP: Record<string, BestForTemplateProps> = {
  freelancers: FREELANCERS_PAGE_PROPS,
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  startups: STARTUPS_PAGE_PROPS,
  agencies: AGENCIES_PAGE_PROPS,
  "global-teams": GLOBAL_TEAMS_PAGE_PROPS,
};
const PAGE_MAP: Record<string, BestForTemplateProps> = {
  ...CORE_PAGE_MAP,
  ...HR_TRADE_BEST_FOR_BY_SLUG,
};

type Props = { params: Promise<{ scenario: string }> };

export default async function HrBestForScenarioPage({ params }: Props) {
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
  const tradeMeta = HR_TRADE_BEST_FOR_METADATA_BY_SLUG[scenario];

  if (!pageProps) {
    return {
      title: "Best HR Software by Use Case | BeltStack",
      description: "Browse the best HR software by use case, including freelancers, small businesses, startups, agencies, and global teams.",
    };
  }

  return {
    title: tradeMeta?.title ?? `${pageProps.title} | BeltStack`,
    description: tradeMeta?.description ?? pageProps.subtitle,
    keywords: tradeMeta?.keywords,
  };
}

export function generateStaticParams() {
  return Object.keys(PAGE_MAP).map((scenario) => ({ scenario }));
}

