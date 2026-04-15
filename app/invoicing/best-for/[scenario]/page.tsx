import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  getInvoicingBestForTradeMetadata,
  getInvoicingBestForTradePageProps,
  getInvoicingBestForTradeSlugs,
} from "@/lib/data/invoicingBestForTrades";

type PageProps = {
  params: Promise<{ scenario: string }>;
};

export async function generateStaticParams() {
  return getInvoicingBestForTradeSlugs().map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scenario } = await params;
  const metadata = getInvoicingBestForTradeMetadata(scenario);
  if (metadata == null) return {};
  return metadata;
}

export default async function InvoicingBestForScenarioPage({ params }: PageProps) {
  const { scenario } = await params;
  const pageProps = getInvoicingBestForTradePageProps(scenario);
  if (pageProps == null) {
    notFound();
  }
  return <BestForPageWithStructuredData {...pageProps} />;
}
