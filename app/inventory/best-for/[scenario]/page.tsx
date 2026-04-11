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
import {
  HVAC_INVENTORY_BEST_FOR_PAGE_PROPS,
  PLUMBING_INVENTORY_BEST_FOR_PAGE_PROPS,
  ELECTRICIANS_INVENTORY_BEST_FOR_PAGE_PROPS,
  PAINTING_INVENTORY_BEST_FOR_PAGE_PROPS,
  ROOFING_INVENTORY_BEST_FOR_PAGE_PROPS,
  GENERAL_CONTRACTORS_INVENTORY_BEST_FOR_PAGE_PROPS,
  LANDSCAPING_INVENTORY_BEST_FOR_PAGE_PROPS,
  CONSTRUCTION_INVENTORY_BEST_FOR_PAGE_PROPS,
  REMODELING_INVENTORY_BEST_FOR_PAGE_PROPS,
  HANDYMAN_INVENTORY_BEST_FOR_PAGE_PROPS,
  PROPERTY_MANAGEMENT_INVENTORY_BEST_FOR_PAGE_PROPS,
  PEST_CONTROL_INVENTORY_BEST_FOR_PAGE_PROPS,
  POOL_SERVICE_INVENTORY_BEST_FOR_PAGE_PROPS,
  JUNK_REMOVAL_INVENTORY_BEST_FOR_PAGE_PROPS,
  MOVING_INVENTORY_BEST_FOR_PAGE_PROPS,
} from "@/lib/data/inventoryBestForTrades";

const PAGE_MAP: Record<string, BestForTemplateProps> = {
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  ecommerce: ECOMMERCE_PAGE_PROPS,
  retail: RETAIL_PAGE_PROPS,
  manufacturing: MANUFACTURING_PAGE_PROPS,
  warehouses: WAREHOUSES_PAGE_PROPS,
  hvac: HVAC_INVENTORY_BEST_FOR_PAGE_PROPS,
  plumbing: PLUMBING_INVENTORY_BEST_FOR_PAGE_PROPS,
  electricians: ELECTRICIANS_INVENTORY_BEST_FOR_PAGE_PROPS,
  painting: PAINTING_INVENTORY_BEST_FOR_PAGE_PROPS,
  roofing: ROOFING_INVENTORY_BEST_FOR_PAGE_PROPS,
  "general-contractors": GENERAL_CONTRACTORS_INVENTORY_BEST_FOR_PAGE_PROPS,
  landscaping: LANDSCAPING_INVENTORY_BEST_FOR_PAGE_PROPS,
  construction: CONSTRUCTION_INVENTORY_BEST_FOR_PAGE_PROPS,
  remodeling: REMODELING_INVENTORY_BEST_FOR_PAGE_PROPS,
  handyman: HANDYMAN_INVENTORY_BEST_FOR_PAGE_PROPS,
  "property-management": PROPERTY_MANAGEMENT_INVENTORY_BEST_FOR_PAGE_PROPS,
  "pest-control": PEST_CONTROL_INVENTORY_BEST_FOR_PAGE_PROPS,
  "pool-service": POOL_SERVICE_INVENTORY_BEST_FOR_PAGE_PROPS,
  "junk-removal": JUNK_REMOVAL_INVENTORY_BEST_FOR_PAGE_PROPS,
  moving: MOVING_INVENTORY_BEST_FOR_PAGE_PROPS,
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
        "Browse inventory management picks by operation type and trade: small business, ecommerce, retail, manufacturing, warehouses, HVAC, construction, property management, and more.",
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

