import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ACCOUNTING_TRADE_BEST_FOR_BY_SLUG } from "@/lib/data/accountingBestForTrades";

const PAGE_MAP = ACCOUNTING_TRADE_BEST_FOR_BY_SLUG;

type Props = { params: Promise<{ scenario: string }> };

export default async function AccountingTradeBestForScenarioPage({ params }: Props) {
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
      title: "Best Accounting Software by Use Case | BeltStack",
      description:
        "Browse accounting software picks by use case and by trade—freelancers, contractors, small business, ecommerce, agencies, and field service businesses.",
    };
  }

  return {
    title: `${pageProps.title} | BeltStack`,
    description: pageProps.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(PAGE_MAP).map((scenario) => ({ scenario }));
}
