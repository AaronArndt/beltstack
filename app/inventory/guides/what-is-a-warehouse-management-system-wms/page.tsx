import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedInventoryResources } from "@/components/guides/RelatedInventoryResources";
import { INVENTORY_GUIDE_SIDEBAR_ITEMS, INVENTORY_GUIDE_RELATED_ITEMS } from "@/lib/data/inventoryGuides";
import { getInventoryReviewUrl } from "@/lib/routes";

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
    q: "What is a warehouse management system (WMS)?",
    a: "A WMS is software that directs receiving, storage, picking, packing, and shipping inside a warehouse or distribution center—with location-level inventory, scan-validated tasks, and labor productivity tracking.",
  },
  {
    q: "How is WMS different from inventory management software?",
    a: "General inventory tools track quantities, orders, and valuations across the business. WMS adds bin locations, directed putaway, wave picking, and operator workflows on handheld devices inside a facility.",
  },
  {
    q: "When does a business need WMS instead of inventory software alone?",
    a: "Signals include high pick error rates, multiple buildings or zones, 3PL operations, serialized or lot-controlled picks at scale, and inability to grow throughput without overtime despite accurate ERP totals.",
  },
  {
    q: "Does WMS replace ERP?",
    a: "No. ERP remains financial and item master system of record; WMS executes physical moves and posts confirmations. See WMS vs ERP explained for the split of duties.",
  },
  {
    q: "How do WMS and field service software interact?",
    a: "WMS manages stock inside warehouses; field service dispatches technicians and may consume parts from depots or vans. Accurate availability requires integration so job reservations reflect warehouse picks, not stale aggregates.",
  },
];

const PAGE_HREF = "/inventory/guides/what-is-a-warehouse-management-system-wms";

const RELATED_ITEMS = [
  ...INVENTORY_GUIDE_RELATED_ITEMS,
  { label: "What is WMS software (field service)", href: "/field-service/guides/what-is-wms-software" },
];

export default function WhatIsAWarehouseManagementSystemWmsPage() {
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
                      What Is a Warehouse Management System (WMS)?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is a Warehouse Management System (WMS)?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Warehouse management systems explained for inventory buyers: core capabilities, WMS vs inventory
                    software, ERP touchpoints, and when to adopt floor-level control.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A warehouse management system (WMS) controls what happens inside a building after goods arrive and
                      before they leave. It knows not only that you have four hundred units, but which aisle, bay, and
                      shelf they occupy—and it tells operators the next scan-validated step: receive, put away, replenish,
                      pick, pack, or ship.
                    </p>
                    <p>
                      General inventory software—tools like{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, or{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link>—excels at
                      quantities, purchasing, and channel sync across the business. WMS adds facility execution: directed
                      tasks, bin accuracy, wave picking, and labor metrics. Many growing brands need strong inventory first;
                      WMS enters when the warehouse itself becomes the bottleneck.
                    </p>
                    <p>
                      Deep dives on adjacent concepts live in our field-service library:{" "}
                      <Link href="/field-service/guides/what-is-wms-software" className={linkGreen}>what is WMS software</Link>,{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>WMS vs ERP explained</Link>,{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>WMS vs SCM explained</Link>, and{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>SAP vs Oracle WMS</Link>.
                      Inventory buyers should still anchor on the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare</Link> pages for mid-market tools.
                    </p>
                    <p>
                      Pair this guide with{" "}
                      <Link href="/inventory/guides/the-most-popular-wms-software-compared" className={linkGreen}>
                        the most popular WMS software compared
                      </Link>{" "}
                      when you shortlist vendors, and with{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      for count discipline inside the warehouse.
                    </p>
                  </div>
                </section>
                <section id="capabilities" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From inbound dock to outbound carrier.">Core WMS Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Typical modules span receiving and ASN validation, putaway rules, inventory by location, cycle
                      counting, replenishment from reserve to active pick faces, picking strategies (discrete, batch, wave,
                      zone), packing, shipping labels, and yard or dock appointment scheduling.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Directed tasks</strong> — the system assigns the next move.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Scan validation</strong> — wrong bin or SKU blocked at scan time.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Slotting</strong> — fast movers closer to pack stations.</span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="wms-vs-inventory" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Two layers, one supply chain.">WMS vs Inventory Management Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory software answers “how much do we own and where can we sell it?” across channels and
                      locations. WMS answers “how do we move it inside this building without errors?” You may run both:
                      Cin7 or Unleashed for commercial inventory plus a WMS at the central DC—or ERP inventory with EWM
                      at scale.
                    </p>
                    <p>
                      Confusion appears when ERP shows balanced stock but picks fail daily—that is a WMS-shaped problem.
                      Conversely, a single-room stockroom rarely needs enterprise WMS; disciplined inventory software and
                      barcode discipline may suffice.
                    </p>
                  </div>
                </section>
                <section id="stack-fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="ERP, SCM, and execution ownership.">How WMS Fits ERP and SCM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP holds item master, costing, and financial inventory. WMS posts confirmations after physical work.
                      SCM plans network flow; WMS validates what actually shipped. Read{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>WMS vs SCM explained</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>WMS vs ERP explained</Link>{" "}
                      for handoff points. SAP-heavy stacks should also see{" "}
                      <Link href="/inventory/guides/what-is-sap-inventory-management" className={linkGreen}>
                        what is SAP inventory management
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals, rollout, and realistic scope.">When to Adopt WMS—and How to Buy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Adoption triggers include pick error rates that generate rework, seasonal volume that breaks manual
                      waves, and 3PL customers demanding scan proof. Pilot receiving and picking with real SKUs before
                      multi-year contracts—module checklists lie; floor supervisors tell the truth.
                    </p>
                    <p>
                      Vendor landscape spans cloud mid-market WMS, ERP-native EWM, and best-of-breed suites compared in{" "}
                      <Link href="/inventory/guides/the-most-popular-wms-software-compared" className={linkGreen}>
                        popular WMS software compared
                      </Link>. Match depth to facility complexity; automated storage needs different partners than
                      manual pick-and-pack ecommerce.
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
              <GuideSidebar title="Warehouse systems" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "What Is a Warehouse Management System (WMS)? | BeltStack Guide",
    description:
      "Learn what a warehouse management system (WMS) is, how it differs from inventory software, core capabilities, and when growing operations should adopt WMS.",
    keywords: [
      "warehouse management system",
      "WMS software",
      "WMS vs inventory software",
      "warehouse picking",
      "bin location inventory",
      "distribution center software",
    ],
  };
}
