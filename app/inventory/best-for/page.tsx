import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getInventoryBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best inventory management software overall",
    href: "/inventory/best-inventory-software",
    description: "Full rankings for stock tracking, orders, warehouses, and integrations across SMB and mid-market tools.",
  },
  {
    label: "Best inventory software for small business",
    href: getInventoryBestForUrl("small-business"),
    description:
      "Top inventory tools for small businesses that want simple, reliable stock tracking, reordering, and reporting.",
  },
  {
    label: "Best inventory software for ecommerce",
    href: getInventoryBestForUrl("ecommerce"),
    description:
      "Inventory platforms for ecommerce brands that need to sync stock across stores, marketplaces, and warehouses.",
  },
  {
    label: "Best inventory software for retail",
    href: getInventoryBestForUrl("retail"),
    description:
      "Inventory tools for retailers that need to keep shelves stocked, link POS and ecommerce, and manage multiple locations.",
  },
  {
    label: "Best inventory software for manufacturing",
    href: getInventoryBestForUrl("manufacturing"),
    description:
      "Manufacturing-focused inventory systems that connect raw materials, BOMs, work orders, and finished goods.",
  },
  {
    label: "Best inventory software for warehouses",
    href: getInventoryBestForUrl("warehouses"),
    description:
      "Inventory and warehouse tools that support locations, scanners, and efficient picking, packing, and shipping.",
  },
  {
    label: "Best inventory management software for HVAC businesses",
    href: getInventoryBestForUrl("hvac"),
    description: "Truck stock, parts rooms, and seasonal SKUs for HVAC installs and service.",
  },
  {
    label: "Best inventory management software for plumbing companies",
    href: getInventoryBestForUrl("plumbing"),
    description: "Fittings, water heaters, and multi-truck parts discipline.",
  },
  {
    label: "Best inventory management software for electricians",
    href: getInventoryBestForUrl("electricians"),
    description: "Wire, breakers, fixtures, and van-to-shop visibility.",
  },
  {
    label: "Best inventory management software for painting contractors",
    href: getInventoryBestForUrl("painting"),
    description: "Gallons, sprayer parts, consumables, and crew cages.",
  },
  {
    label: "Best inventory management software for roofing companies",
    href: getInventoryBestForUrl("roofing"),
    description: "Yards, shingles, underlayment, and storm-season volume.",
  },
  {
    label: "Best inventory management software for general contractors",
    href: getInventoryBestForUrl("general-contractors"),
    description: "Job materials, cages, allowances, and multi-site stock.",
  },
  {
    label: "Best inventory management software for landscaping companies",
    href: getInventoryBestForUrl("landscaping"),
    description: "Bulk material, plants, and seasonal yard operations.",
  },
  {
    label: "Best inventory management software for construction companies",
    href: getInventoryBestForUrl("construction"),
    description: "Laydown yards, prefab, and job-committed material.",
  },
  {
    label: "Best inventory management software for remodeling businesses",
    href: getInventoryBestForUrl("remodeling"),
    description: "Finish materials, selections, and job cages.",
  },
  {
    label: "Best inventory management software for handyman businesses",
    href: getInventoryBestForUrl("handyman"),
    description: "Lean van stock and small parts without enterprise overhead.",
  },
  {
    label: "Best inventory management software for property management companies",
    href: getInventoryBestForUrl("property-management"),
    description: "MRO stock, turnovers, and portfolio-wide maintenance shops.",
  },
  {
    label: "Best inventory management software for pest control businesses",
    href: getInventoryBestForUrl("pest-control"),
    description: "Route truck stock, chemicals, and shop replenishment.",
  },
  {
    label: "Best inventory management software for pool service companies",
    href: getInventoryBestForUrl("pool-service"),
    description: "Chemicals, filters, equipment, and seasonal SKUs.",
  },
  {
    label: "Best inventory management software for junk removal businesses",
    href: getInventoryBestForUrl("junk-removal"),
    description: "Supplies, equipment, and optional resale inventory.",
  },
  {
    label: "Best inventory management software for moving companies",
    href: getInventoryBestForUrl("moving"),
    description: "Boxes, packing material, and warehouse consumables.",
  },
  {
    label: "Best Inventory Management Software for Appliance Repair Businesses (2026)",
    href: getInventoryBestForUrl("appliance-repair"),
    description: "Truck parts, serialized components, and warranty return workflows.",
  },
  {
    label: "Best Inventory Management Software for Garage Door Companies (2026)",
    href: getInventoryBestForUrl("garage-door"),
    description: "Springs, openers, hardware, and van stock control.",
  },
  {
    label: "Best Inventory Management Software for Locksmith Businesses (2026)",
    href: getInventoryBestForUrl("locksmith"),
    description: "Key blanks, lock hardware, and mobile inventory accountability.",
  },
  {
    label: "Best Inventory Management Software for Flooring Contractors (2026)",
    href: getInventoryBestForUrl("flooring"),
    description: "Lot-sensitive materials, transitions, and adhesive inventory.",
  },
  {
    label: "Best Inventory Management Software for Fence & Deck Builders (2026)",
    href: getInventoryBestForUrl("fence-deck"),
    description: "Lumber, hardware kits, and site-staged material workflows.",
  },
  {
    label: "Best Inventory Management Software for Glass & Window Installers (2026)",
    href: getInventoryBestForUrl("glass-window-installers"),
    description: "Fragile SKU tracking, custom orders, and site staging.",
  },
  {
    label: "Best Inventory Management Software for Concrete Contractors (2026)",
    href: getInventoryBestForUrl("concrete-contractors"),
    description: "Forms, additives, consumables, and tooling visibility.",
  },
  {
    label: "Best Inventory Management Software for Excavation Companies (2026)",
    href: getInventoryBestForUrl("excavation"),
    description: "Attachments, wear parts, and yard transfer accountability.",
  },
  {
    label: "Best Inventory Management Software for Auto Repair Shops (2026)",
    href: getInventoryBestForUrl("auto-repair"),
    description: "High-SKU parts, fluids, and bay-cycle replenishment.",
  },
  {
    label: "Best Inventory Management Software for Mobile Mechanics (2026)",
    href: getInventoryBestForUrl("mobile-mechanics"),
    description: "Van stock, common parts, and daily replenishment controls.",
  },
  {
    label: "Best Inventory Management Software for Cleaning Franchises (2026)",
    href: getInventoryBestForUrl("cleaning-franchises"),
    description: "Multi-location supply standards and central purchasing.",
  },
  {
    label: "Best Inventory Management Software for Event Services (2026)",
    href: getInventoryBestForUrl("event-services"),
    description: "Rentable assets, consumables, and staging logistics.",
  },
  {
    label: "Best Inventory Management Software for Home Inspectors (2026)",
    href: getInventoryBestForUrl("home-inspectors"),
    description: "Inspector kit tracking, replacements, and team accountability.",
  },
];

const [INVENTORY_ROUNDUP, ...INVENTORY_SCENARIOS] = SCENARIOS;
/** First 5 scenarios match `lib/data/inventoryBestFor.ts`; remainder match `inventoryBestForTrades.ts`. */
const INVENTORY_GENERAL_CARDS = INVENTORY_SCENARIOS.slice(0, 5);
const INVENTORY_TRADE_CARDS = INVENTORY_SCENARIOS.slice(5);

export default function InventoryBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Inventory Management"
      categoryHref="/inventory"
      breadcrumbCurrent="Best for"
      title="Best Inventory Software by Use Case"
      intro="Find inventory software by operation type—small business, ecommerce, retail, manufacturing, and warehouses—plus trade-specific picks for HVAC, construction, property management, and more."
      roundupLink={INVENTORY_ROUNDUP}
      generalCards={INVENTORY_GENERAL_CARDS}
      tradeCards={INVENTORY_TRADE_CARDS}
      cardCta="See picks →"
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Inventory Software by Use Case | BeltStack",
    description:
      "Browse inventory management picks by use case and trade: small business, ecommerce, retail, manufacturing, warehouses, HVAC, construction, property management, and more.",
  };
}

