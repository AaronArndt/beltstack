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
    q: "What is the difference between inventory management and a WMS?",
    a: "Inventory management tracks what you own, where it sits, and how it moves across locations and channels. A warehouse management system (WMS) adds floor-level control—bin locations, directed put-away, wave picking, labor tasks, and slotting—inside one or more warehouses.",
  },
  {
    q: "Do I need a WMS if I already have inventory software?",
    a: "Not always. Single-location teams with simple pick paths often outgrow spreadsheets in inventory software long before they need WMS complexity. Consider WMS when pick errors, dock congestion, or multi-zone layouts make quantity-on-hand alone insufficient.",
  },
  {
    q: "Can a WMS replace inventory management software?",
    a: "Rarely for the full business. WMS excels at warehouse execution but may not handle ecommerce channel sync, manufacturing BOMs, or lightweight SMB workflows. Many mid-market stacks pair inventory or ERP with a WMS module for the distribution center.",
  },
  {
    q: "How does WMS relate to ERP?",
    a: "ERP owns financial and master-data truth; WMS executes physical moves and feeds receipts, picks, and adjustments back. Overlap causes duplicate item masters and reconciliation pain—see our WMS vs ERP guide for boundary-setting.",
  },
  {
    q: "When should a growing business upgrade from inventory software to WMS?",
    a: "Signals include dedicated warehouse staff, barcode-driven workflows, multiple pick zones, third-party logistics handoffs, and SLA pressure on same-day fulfillment. If you are debating purely on SKU count, prioritize process pain over catalog size.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-management-vs-warehouse-management-systems";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryManagementVsWarehouseManagementSystemsPage() {
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
                      Inventory Management vs Warehouse Management Systems
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Management vs Warehouse Management Systems
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Where general inventory software ends and WMS begins—capabilities, overlap with ERP, and how to choose the
                    right layer for your operation.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory management answers “how much do we have, and where?” across stockrooms, stores, and sales
                      channels. A warehouse management system (WMS) answers “how do we move it efficiently on the floor?”—bin
                      locations, directed picks, replenishment tasks, and labor metrics inside a distribution center. The
                      distinction matters because buyers conflate the labels and overspend on WMS before basic quantity control
                      is reliable.
                    </p>
                    <p>
                      Most small and mid-size businesses live comfortably in inventory software: receiving, adjustments,
                      reorder points, and multi-location balances without slotting algorithms or wave planning. WMS enters when
                      physical layout complexity—zones, bulk versus pick faces, cross-dock lanes—dominates error rates more than
                      catalog breadth. A 500-SKU shop with a messy back room may need process and barcodes, not Manhattan
                      Associates.
                    </p>
                    <p>
                      Start with definitions in our{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        what is a WMS
                      </Link>{" "}
                      guide, then compare leading platforms in{" "}
                      <Link href="/inventory/guides/the-most-popular-wms-software-compared" className={linkGreen}>
                        popular WMS software compared
                      </Link>. ERP boundary questions sit in{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>. Hub navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Inventory platforms such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link> cover perpetual
                      tracking and light warehouse features; validate whether you need bin-level control before adding a WMS
                      license. Pricing and fit notes live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="inventory-layer" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quantity, cost, and channel truth.">What Inventory Management Covers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory software maintains item masters, on-hand and available-to-promise quantities, valuation methods,
                      and transfers between sites. It connects to accounting, ecommerce carts, and purchase orders so finance and
                      sales see one stock picture. Cycle counts, reorder points, and ABC classes typically live here—not in a
                      standalone WMS unless integrated.
                    </p>
                    <p>
                      For a single stockroom or retail back office, that layer is enough. Teams scan barcodes at receive and
                      ship, run periodic counts, and trust location-level totals without mapping every aisle and shelf position.
                    </p>
                  </div>
                </section>
                <section id="wms-layer" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Floor execution and labor control.">What a WMS Adds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      WMS directs workers: put-away rules send pallets to bulk storage, pick paths minimize travel, and
                      replenishment moves forward pick faces before waves cut off. It tracks tasks, catch weight, serial numbers
                      at bin level, and dock appointments. Reporting shifts from “units on hand” to productivity, fill rate by
                      zone, and inventory accuracy by location.
                    </p>
                    <p>
                      Cloud WMS vendors and ERP modules differ on depth—our{" "}
                      <Link href="/inventory/guides/the-most-popular-wms-software-compared" className={linkGreen}>
                        WMS comparison guide
                      </Link>{" "}
                      walks through SAP EWM, Oracle, Manhattan, and lighter options. Pilot one high-volume SKU lane before
                      enterprise rollout.
                    </p>
                  </div>
                </section>
                <section id="overlap-erp" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Avoiding duplicate masters and broken sync.">Overlap, ERP, and Integration</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pain arrives when two systems both “own” items and quantities. Inventory or ERP should remain the
                      financial record; WMS posts transactions—receipts, picks, adjustments—that roll up to that record.
                      Without clear ownership, month-end reconciliation becomes a forensic exercise.
                    </p>
                    <p>
                      Read{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>{" "}
                      for where general ledger, purchasing, and manufacturing stop and warehouse execution starts. Many mid-market
                      teams use ERP inventory for planning and a WMS only at the DC that ships ecommerce volume.
                    </p>
                  </div>
                </section>
                <section id="choosing-path" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Right-size before you overbuy.">Choosing Inventory Software, WMS, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Upgrade triggers for inventory software: spreadsheet chaos, channel oversells, and no audit trail. Upgrade
                      triggers for WMS: pick accuracy SLAs, multi-shift labor, 3PL interfaces, and slotting ROI. If neither
                      list resonates, fix receiving discipline and cycle counts first.
                    </p>
                    <p>
                      Compare light warehouse needs in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      versus{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      for manufacturing-adjacent stock. Deep WMS evaluation starts with{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        what is a WMS
                      </Link>{" "}
                      and your own time-and-motion study—not vendor demos alone.
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
              <GuideSidebar title="WMS & inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Management vs WMS Explained | BeltStack Guide",
    description:
      "Compare inventory management software and warehouse management systems (WMS)—capabilities, ERP overlap, upgrade signals, and how to choose the right stack.",
    keywords: [
      "inventory management vs WMS",
      "warehouse management system",
      "inventory software comparison",
      "WMS vs inventory software",
      "when to use WMS",
      "warehouse vs inventory system",
    ],
  };
}
