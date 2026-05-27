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

const FAQ_ITEMS = [
  {
    q: "How is retail inventory management different from warehouse inventory?",
    a: "Retail inventory mixes high-frequency POS deductions at the register with backroom storage, visual merchandising displays, and sometimes ecommerce allocation from the same store pool. Accuracy depends on timely receiving, transfers from backroom to floor, and counts that include both sellable floor stock and reserve backstock.",
  },
  {
    q: "Should retail stores use POS inventory or dedicated inventory software?",
    a: "Single-store retailers with modest SKUs often run entirely in POS inventory modules. Multi-store chains, brands selling online plus in-store, or shops with complex purchasing usually add inventory software or a retail POS with deep stock features—Lightspeed and similar platforms bridge both layers.",
  },
  {
    q: "How often should retail businesses cycle count?",
    a: "High-shrink or high-velocity categories benefit from weekly or monthly cycle counts by ABC class; slower categories quarterly. Seasonal peaks warrant extra counts before and after major promotions when floor moves and temporary displays disrupt normal patterns.",
  },
  {
    q: "What causes retail inventory discrepancies?",
    a: "Common drivers: unrecorded damages, floor samples not flagged, receiving errors, sweetheart shrink, ecommerce picking from store stock without decrementing POS, and transfers between stores logged late. Each has a process fix—labels, blind counts, integration rules—not only more software.",
  },
  {
    q: "Can one inventory system serve stores and ecommerce?",
    a: "Yes, when the platform supports multi-location balances and channel allocation. Store ATP may feed ship-from-store ecommerce; without shared truth, online channels oversell rack quantities. Validate omnichannel rules in POS and inventory integrations before peak season.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-management-for-retail-businesses";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryManagementForRetailBusinessesPage() {
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
                      Inventory Management for Retail Businesses
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Management for Retail Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How brick-and-mortar and omnichannel retailers track stock—POS deductions, backroom receiving, cycle
                    counts, multi-store transfers, and software that keeps floor and channel counts aligned.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Retail inventory management balances what customers can buy on the floor with what sits in the
                      backroom, backordered from vendors, or allocated to ecommerce ship-from-store. Unlike pure warehouse
                      operations, retail adds constant micro-movements: restocking displays, size breaks on apparel racks,
                      and promotional endcaps that are not separate SKUs in the system until someone remembers to adjust
                      counts.
                    </p>
                    <p>
                      Point-of-sale systems are the front line—every scan at checkout should decrement on-hand in near
                      real time. When POS inventory is wrong, associates learn to distrust the system and revert to visual
                      checks, which does not scale past a few dozen SKUs. Strong retail ops treat the register as one
                      ledger among several: receiving, transfers, adjustments, and counts must all post to the same record.
                    </p>
                    <p>
                      POS and inventory integration patterns are covered in our{" "}
                      <Link href="/pos/guides/pos-inventory-integration" className={linkGreen}>
                        POS inventory integration
                      </Link>{" "}
                      guide and the broader{" "}
                      <Link href="/pos" className={linkGreen}>POS hub</Link>. Multi-store operators need location-level
                      balances and transfer workflows from{" "}
                      <Link href="/inventory/guides/how-multi-location-inventory-management-works" className={linkGreen}>
                        multi-location inventory management
                      </Link>; accuracy discipline comes from{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Retailers evaluating dedicated inventory layers alongside POS often compare{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>{" "}
                      for lightweight multi-channel sync and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>{" "}
                      for deeper wholesale and marketplace ties. Rankings sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="floor-and-backroom" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Sellable floor versus reserve stock.">Floor, Backroom, and Sellable Presentation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many retailers logically split stock into floor-facing and backroom reserve—even if the system tracks
                      one location bin. Associates pull from backstock when the rack empties; if that move is not recorded,
                      POS thinks inventory exists that shoppers cannot reach. Some POS platforms support explicit floor/back
                      bins; others rely on disciplined cycle counts to catch drift.
                    </p>
                    <p>
                      Visual merchandising and loss prevention interact with counts: security tags, locked cases, and
                      high-shrink categories deserve tighter count cadences under{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC classification
                      </Link>. Seasonal transitions (holiday wrap in November, patio in March) need receiving and markdown
                      workflows so old assortments do not ghost-quantity in the system.
                    </p>
                  </div>
                </section>
                <section id="pos-deductions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Sales, returns, and receiving at the register.">POS Deductions, Returns, and Receiving</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Each sale line should reduce quantity immediately; returns restock only after inspection and reason
                      codes (defective vs change-of-mind). Vendor receiving may happen at store backdoors—barcode receiving
                      workflows post on-hand before product hits the floor. Without receiving discipline, POS shows stock
                      that never arrived or hides inbound that is already on racks.
                    </p>
                    <p>
                      Omnichannel retailers allocate store inventory to ecommerce channels carefully: ship-from-store and
                      buy-online-pick-up-in-store (BOPIS) consume the same pool as walk-in sales. Integration guides in{" "}
                      <Link href="/pos/guides/pos-inventory-integration" className={linkGreen}>
                        POS inventory integration
                      </Link>{" "}
                      explain how Shopify POS, Square, Lightspeed, and others sync with inventory hubs—test BOPIS
                      reservations during pilot, not on Black Friday morning.
                    </p>
                  </div>
                </section>
                <section id="cycle-counts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Accuracy without closing the store.">Cycle Counts in Retail Environments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Full-store physical inventories are disruptive; cycle counting targets subsets on a rolling schedule.
                      Count high-shrink departments more often, use blind counts to reduce bias, and investigate variances
                      before adjusting—many “losses” are mis-scans or unrecorded transfers from backroom restocks.
                    </p>
                    <p>
                      Full methodology lives in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Pair counts with{" "}
                      <Link href="/inventory/guides/barcode-inventory-systems-explained" className={linkGreen}>
                        barcode inventory systems
                      </Link>{" "}
                      when SKU volume exceeds what associates can reliably eyeball during busy shifts.
                    </p>
                  </div>
                </section>
                <section id="multi-store" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Transfers, allocation, and rollups.">Multi-Store Inventory and Software Choices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Chains track each store as a location with its own on-hand while buyers see consolidated demand.
                      Transfer orders move stock between stores—popular sizes from slow locations to hot ones, or
                      consolidating clearance before markdown events. Without system-enforced transfers, stores call each
                      other informally and district managers lose visibility into who holds dead stock.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      when retail plus ecommerce complexity grows, and revisit{" "}
                      <Link href="/pos" className={linkGreen}>POS software options</Link>{" "}
                      when register UX and inventory depth must live in one vendor. Foundational retail habits align with{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>.
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
              <GuideSidebar title="Retail inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Management for Retail Businesses | BeltStack Guide",
    description:
      "How retail businesses manage inventory—POS deductions, backroom stock, cycle counts, multi-store transfers, and keeping omnichannel counts accurate.",
    keywords: [
      "retail inventory management",
      "POS inventory tracking",
      "store cycle counting",
      "multi-store inventory",
      "retail stock control",
      "omnichannel retail inventory",
    ],
  };
}
