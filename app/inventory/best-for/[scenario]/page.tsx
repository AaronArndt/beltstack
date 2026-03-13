import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  SMALL_BUSINESS_PAGE_PROPS,
  ECOMMERCE_PAGE_PROPS,
  RETAIL_PAGE_PROPS,
  MANUFACTURING_PAGE_PROPS,
  WAREHOUSES_PAGE_PROPS,
} from "@/lib/data/inventoryBestFor";

const PAGE_MAP: Record<string, BestForTemplateProps> = {
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  ecommerce: ECOMMERCE_PAGE_PROPS,
  retail: RETAIL_PAGE_PROPS,
  manufacturing: MANUFACTURING_PAGE_PROPS,
  warehouses: WAREHOUSES_PAGE_PROPS,
};

type Props = { params: Promise<{ scenario: string }> };

export default async function InventoryBestForScenarioPage({ params }: Props) {
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
      title: "Best Inventory Management Software by Use Case | BeltStack",
      description:
        "Browse our best inventory management software picks by use case, including small businesses, ecommerce, retail, manufacturing, and warehouses.",
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

