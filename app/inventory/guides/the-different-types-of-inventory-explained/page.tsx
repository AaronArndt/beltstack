import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedInventoryResources } from "@/components/guides/RelatedInventoryResources";
import { INVENTORY_GUIDE_SIDEBAR_ITEMS, INVENTORY_GUIDE_RELATED_ITEMS } from "@/lib/data/inventoryGuides";
import { getInventoryReviewUrl, getInventoryCompareUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const PAGE_HREF = "/inventory/guides/the-different-types-of-inventory-explained";

const FAQ_ITEMS = [
  {
    q: "What are the main types of inventory?",
    a: "Core accounting categories are raw materials, work-in-progress (WIP), finished goods, and MRO (maintenance, repair, and operations) supplies. Operations teams also track in-transit, safety, and consignment stock as distinct behaviors even if they share a GL bucket.",
  },
  {
    q: "What is the difference between WIP and finished goods?",
    a: "WIP is partially completed production—value accumulates as labor and overhead are applied. Finished goods are complete units ready to sell or ship. Software should move quantities through BOM stages instead of jumping straight from components to shipped orders.",
  },
  {
    q: "Is safety stock a separate inventory type?",
    a: "Safety stock is a policy layer: extra units held to buffer demand or lead-time variability. It may sit in the same bin as cycle stock but should be visible in planning so buyers do not treat it as free slack to sell.",
  },
  {
    q: "How do retailers classify inventory vs manufacturers?",
    a: "Retailers and ecommerce brands mostly manage finished goods and maybe packaging; manufacturers add raw and WIP with stronger BOM needs. The type mix drives which inventory platform tier you need, not only SKU count.",
  },
  {
    q: "Should each inventory type use different tracking rules?",
    a: "Yes. Raw materials follow purchase and QC rules; WIP follows production orders; finished goods follow channel ATP and FEFO/FIFO where relevant; MRO may be expense-led with simpler min-max. One global rule usually misstates cost and availability.",
  },
];

const RELATED_ITEMS = [...INVENTORY_GUIDE_RELATED_ITEMS];

export default function TheDifferentTypesOfInventoryExplainedPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/inventory" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Inventory Management
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/inventory/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      The Different Types of Inventory Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Different Types of Inventory Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Raw materials, WIP, finished goods, MRO, safety stock, and in-transit inventory—how each type behaves,
                    how finance classifies it, and what software must track differently.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      “Types of inventory” searches mix accounting categories with operational states. Confusing them
                      produces double-counted components, WIP that never closes, and finished goods that show available
                      while still on the production line. Clear types make purchasing, production, and sales align on the
                      same numbers.
                    </p>
                    <p>
                      Platforms like{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> let you define items,
                      variants, and—on deeper tiers—assemblies and BOMs so raw, WIP, and finished states flow logically.
                      Retail-heavy stacks may only need finished goods plus packaging; manufacturers need the full ladder.
                    </p>
                    <p>
                      Read{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      when WIP and BOMs dominate, and{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      when finished goods and channel ATP dominate. Selection help lives in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>.
                    </p>
                    <p>
                      Explore the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>all inventory guides</Link>,{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        Best inventory software for small business
                      </Link>{" "}
                      highlights starter tools; use{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      to keep each type’s quantities trustworthy.
                    </p>
                  </div>
                </section>
                <section id="core-categories" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What finance and operations both mean.">Raw Materials, WIP, and Finished Goods</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Raw materials</strong> are inputs purchased to make or assemble
                      products—steel, fabric, chips, bottles. They gain value when issued to production, not when sitting in
                      receiving. <strong className="text-[#1A2D48]">Work-in-progress</strong> is partial completion: labor,
                      machine time, and overhead accumulate until the unit is closed to finished.{" "}
                      <strong className="text-[#1A2D48]">Finished goods</strong> are sellable SKUs ready for customer orders
                      or wholesale shipments.
                    </p>
                    <p>
                      Software should issue components from raw, consume into WIP orders, and receive finished output
                      without manual spreadsheet bridges. Skipping WIP visibility makes margin and lead-time analysis guesswork.
                    </p>
                  </div>
                </section>
                <section id="supporting-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Often overlooked but still tracked.">MRO, Packaging, and Consumables</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">MRO inventory</strong> keeps operations running—spare parts, tools,
                      cleaning supplies. It may expense quickly rather than ride the same margin rules as sellable goods.
                      Packaging and inserts blur the line: they are not finished goods customers buy alone, but they are
                      required to ship—track them or risk silent stockouts on fulfillment day.
                    </p>
                  </div>
                </section>
                <section id="buffer-transit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Policy and pipeline stock.">Safety Stock and In-Transit Inventory</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Safety stock</strong> buffers demand spikes and supplier delays.
                      Label it in planning reports so merchants do not treat it as immediately salable without policy.{" "}
                      <strong className="text-[#1A2D48]">In-transit</strong> inventory is owned but not yet receivable—on
                      ocean containers or vendor trucks. Receiving workflows should convert in-transit to on-hand only when
                      quantities are verified, protecting ATP on marketplaces.
                    </p>
                    <p>
                      For perishable finished goods, rotation rules matter—see{" "}
                      <Link href="/inventory/guides/fefo-vs-fifo-whats-the-difference" className={linkGreen}>
                        FEFO vs FIFO
                      </Link>{" "}
                      on this site for pick sequencing detail.
                    </p>
                  </div>
                </section>
                <section id="software-by-type" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities to require in trials.">Tracking Each Type in Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Item types or categories mapped to GL accounts where needed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>BOMs, assemblies, and production orders for raw → WIP → finished.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Separate locations or statuses for quarantine, in-transit, and pick face.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Reporting by type for buyers and finance—not only one rolled-up number.</span>
                      </li>
                    </ul>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-type depth and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      when finished-goods tracking is the primary need.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Inventory types" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInventoryResources items={RELATED_ITEMS} excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Types of Inventory Explained | BeltStack Guide",
    description:
      "Learn the different types of inventory—raw materials, WIP, finished goods, MRO, safety stock, and in-transit—and how to track each in inventory software.",
    keywords: [
      "types of inventory",
      "raw materials inventory",
      "work in progress inventory",
      "finished goods inventory",
      "mro inventory",
      "safety stock",
    ],
  };
}
