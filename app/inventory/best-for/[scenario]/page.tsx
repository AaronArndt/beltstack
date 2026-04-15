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
  APPLIANCE_REPAIR_INVENTORY_BEST_FOR_PAGE_PROPS,
  GARAGE_DOOR_INVENTORY_BEST_FOR_PAGE_PROPS,
  LOCKSMITH_INVENTORY_BEST_FOR_PAGE_PROPS,
  FLOORING_INVENTORY_BEST_FOR_PAGE_PROPS,
  FENCE_DECK_INVENTORY_BEST_FOR_PAGE_PROPS,
  GLASS_WINDOW_INVENTORY_BEST_FOR_PAGE_PROPS,
  CONCRETE_INVENTORY_BEST_FOR_PAGE_PROPS,
  EXCAVATION_INVENTORY_BEST_FOR_PAGE_PROPS,
  AUTO_REPAIR_INVENTORY_BEST_FOR_PAGE_PROPS,
  MOBILE_MECHANIC_INVENTORY_BEST_FOR_PAGE_PROPS,
  CLEANING_FRANCHISE_INVENTORY_BEST_FOR_PAGE_PROPS,
  EVENT_SERVICES_INVENTORY_BEST_FOR_PAGE_PROPS,
  HOME_INSPECTOR_INVENTORY_BEST_FOR_PAGE_PROPS,
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
  "appliance-repair": APPLIANCE_REPAIR_INVENTORY_BEST_FOR_PAGE_PROPS,
  "garage-door": GARAGE_DOOR_INVENTORY_BEST_FOR_PAGE_PROPS,
  locksmith: LOCKSMITH_INVENTORY_BEST_FOR_PAGE_PROPS,
  flooring: FLOORING_INVENTORY_BEST_FOR_PAGE_PROPS,
  "fence-deck": FENCE_DECK_INVENTORY_BEST_FOR_PAGE_PROPS,
  "glass-window-installers": GLASS_WINDOW_INVENTORY_BEST_FOR_PAGE_PROPS,
  "concrete-contractors": CONCRETE_INVENTORY_BEST_FOR_PAGE_PROPS,
  excavation: EXCAVATION_INVENTORY_BEST_FOR_PAGE_PROPS,
  "auto-repair": AUTO_REPAIR_INVENTORY_BEST_FOR_PAGE_PROPS,
  "mobile-mechanics": MOBILE_MECHANIC_INVENTORY_BEST_FOR_PAGE_PROPS,
  "cleaning-franchises": CLEANING_FRANCHISE_INVENTORY_BEST_FOR_PAGE_PROPS,
  "event-services": EVENT_SERVICES_INVENTORY_BEST_FOR_PAGE_PROPS,
  "home-inspectors": HOME_INSPECTOR_INVENTORY_BEST_FOR_PAGE_PROPS,
};

const METADATA_KEYWORDS_BY_SCENARIO: Record<string, string[]> = {
  "appliance-repair": ["best inventory management software for appliance repair businesses", "appliance repair inventory software", "appliance parts inventory"],
  "garage-door": ["best inventory management software for garage door companies", "garage door inventory software", "garage door parts tracking"],
  locksmith: ["best inventory management software for locksmith businesses", "locksmith inventory software", "locksmith parts inventory"],
  flooring: ["best inventory management software for flooring contractors", "flooring inventory software", "flooring materials tracking"],
  "fence-deck": ["best inventory management software for fence and deck builders", "fence deck inventory software", "lumber hardware inventory"],
  "glass-window-installers": ["best inventory management software for glass and window installers", "window installer inventory software", "glass inventory tracking"],
  "concrete-contractors": ["best inventory management software for concrete contractors", "concrete inventory software", "construction consumables tracking"],
  excavation: ["best inventory management software for excavation companies", "excavation inventory software", "equipment consumables tracking"],
  "auto-repair": ["best inventory management software for auto repair shops", "auto repair inventory software", "shop parts inventory"],
  "mobile-mechanics": ["best inventory management software for mobile mechanics", "mobile mechanic inventory software", "van stock tracking"],
  "cleaning-franchises": ["best inventory management software for cleaning franchises", "cleaning franchise inventory software", "multi-location cleaning supplies"],
  "event-services": ["best inventory management software for event services", "event inventory software", "rental consumable inventory tracking"],
  "home-inspectors": ["best inventory management software for home inspectors", "home inspector inventory software", "inspection kit tracking"],
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
    keywords: METADATA_KEYWORDS_BY_SCENARIO[scenario],
  };
}

export function generateStaticParams() {
  return Object.keys(PAGE_MAP).map((scenario) => ({ scenario }));
}

