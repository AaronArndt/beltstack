import Link from "next/link";
import { Footer } from "@/components/Footer";
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
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function InventoryBestForIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/inventory"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Inventory Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Find inventory software by operation type—small business, ecommerce, retail, manufacturing, and
              warehouses—plus trade-specific picks for HVAC, construction, property management, and more.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              Inventory by use case and trade
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h2 className="text-[#1A2D48] text-lg font-bold">{item.label}</h2>
                  <p className="mt-1 text-[#57534E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Inventory Software by Use Case | BeltStack",
    description:
      "Browse inventory management picks by use case and trade: small business, ecommerce, retail, manufacturing, warehouses, HVAC, construction, property management, and more.",
  };
}

