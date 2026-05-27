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
    q: "How does ecommerce inventory management differ from storefront stock tracking?",
    a: "Storefront tools update one channel when orders sell. Ecommerce inventory management coordinates a central quantity across web stores, marketplaces, wholesale, and sometimes retail POS—allocating available-to-promise, reserving units on open orders, and pushing sync updates outward so no channel oversells.",
  },
  {
    q: "What triggers an inventory deduction in ecommerce?",
    a: "Policy choice: deduct on order placement (reserves stock immediately) or on shipment (keeps sellable pool larger until pick). Most multi-channel stacks reserve on order and finalize on ship; partial shipments and cancellations need rules so committed quantities release correctly.",
  },
  {
    q: "How do returns affect ecommerce inventory counts?",
    a: "Returned goods may restock as sellable, route to refurbish, or write off as damaged—each path updates on-hand differently. Without a returns workflow tied to the original order line, sellable ATP inflates and marketplace sync sends quantities you cannot actually fulfill.",
  },
  {
    q: "When should a brand add dedicated inventory software?",
    a: "Signals include selling on two or more channels, running a warehouse with pick/pack discipline, kitting bundles, or finance needing accurate COGS by SKU. Single-store brands with modest SKU counts often outgrow built-in tracking when oversells or manual spreadsheet reconciliation appear weekly.",
  },
  {
    q: "Can ecommerce inventory software connect to 3PLs and shipping?",
    a: "Yes. Mature platforms push orders to 3PL or WMS partners and ingest shipment confirmations back to close orders and adjust stock. Validate whether your 3PL supports real-time webhooks or batch files—integration depth varies widely between Cin7-class tools and lighter SMB apps.",
  },
];

const PAGE_HREF = "/inventory/guides/how-ecommerce-inventory-management-works";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowEcommerceInventoryManagementWorksPage() {
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
                      How Ecommerce Inventory Management Works
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Ecommerce Inventory Management Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    The operational workflow behind ecommerce stock—channel sync, order allocation, fulfillment
                    handoffs, returns, and how it differs from choosing inventory software products.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ecommerce inventory management is the set of processes that keep one honest picture of what you can
                      sell while orders arrive from Shopify, Amazon, wholesale portals, and pop-up retail. Each channel
                      wants to show availability immediately; the warehouse needs pick lists grounded in physical bins.
                      When those views diverge, customers see “in stock” online while the pack station knows the shelf is
                      empty—oversells, chargebacks, and emergency air freight follow.
                    </p>
                    <p>
                      The workflow centers on a perpetual record: on-hand, committed to open orders, inbound from
                      purchase orders, and available-to-promise (ATP) for new sales. Orders decrement committed
                      quantities; shipments finalize deductions; cancellations and partial picks release reservations.
                      Multi-location brands allocate ATP by warehouse or region so a West Coast DC does not fulfill East
                      Coast promises—see{" "}
                      <Link href="/inventory/guides/how-multi-location-inventory-management-works" className={linkGreen}>
                        how multi-location inventory management works
                      </Link>{" "}
                      for transfer and allocation detail.
                    </p>
                    <p>
                      This guide explains how the workflow runs day to day. For vendor selection and product comparisons,
                      read{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      —that page covers which platforms fit common ecommerce scenarios; here we focus on the mechanics
                      those tools automate. Forecasting demand and setting buffers connects to{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock
                      </Link>. Hub navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Platforms such as{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>Finale Inventory</Link>{" "}
                      implement these workflows with different integration depth—test channel sync with your actual SKU
                      mix before buying. Rankings and pricing live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="channel-sync" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One quantity, many storefronts.">Channel Sync and Central Stock Truth</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-channel ecommerce depends on a hub-and-spoke model: inventory software (or an ERP inventory
                      module) holds master balances; connectors push ATP outward on a schedule or via webhooks. Lag
                      matters—a fifteen-minute sync delay during a flash sale can oversell fast movers. Marketplaces
                      often require quantity feeds separate from your DTC store; each connector must map SKUs, bundles,
                      and variant attributes consistently.
                    </p>
                    <p>
                      Bundles and kits complicate sync: selling a “starter pack” may decrement three component SKUs while
                      the marketplace listing shows one parent ASIN. Define whether components or the kit SKU is the
                      system of record, and document how partial component stock should behave when the bundle stays
                      listed.
                    </p>
                  </div>
                </section>
                <section id="order-to-ship" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From cart click to carton label.">Order Intake, Allocation, and Fulfillment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When an order imports, the system typically reserves quantity—reducing ATP while on-hand stays until
                      pick confirmation. Warehouse teams generate pick lists sorted by route or batch; barcode scans at
                      pick and pack validate the right SKU and lot. Shipment confirmation posts the final deduction and
                      triggers tracking back to the channel. Split shipments need partial fulfill lines so remaining
                      units stay committed without double-allocating.
                    </p>
                    <p>
                      Dropship and 3PL workflows push orders outward instead of internal pick: the inventory record may
                      track vendor-owned stock or simply pass through vendor confirmations. Reconcile vendor SLAs with
                      customer delivery promises—ATP should not include supplier inventory unless contracts guarantee
                      replenishment within your lead-time window.
                    </p>
                  </div>
                </section>
                <section id="receiving-and-replenishment" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keeping the pipeline full without overbuying.">Receiving, POs, and Replenishment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Purchase orders increase inbound quantities before goods arrive; receiving posts on-hand and clears
                      inbound. Reorder points and{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        demand forecasts
                      </Link>{" "}
                      drive PO suggestions—ecommerce seasonality spikes require higher safety stock on hero SKUs. ABC
                      classification from{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC inventory management
                      </Link>{" "}
                      helps buyers spend negotiation time on lines that drive revenue.
                    </p>
                    <p>
                      Landed cost—freight, duties, vendor fees—belongs in receiving workflows when finance needs accurate
                      unit cost for margin reporting. Without it, channel pricing decisions rely on stale standard costs
                      and markdowns surprise the P&amp;L mid-quarter.
                    </p>
                  </div>
                </section>
                <section id="returns-and-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Closing the loop and picking tools.">Returns, Adjustments, and Software Fit</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Returns start with a receipt reason code: restock sellable, quarantine for QC, or scrap. Restocked
                      units re-enter ATP only after inspection—blind restocking inflates sellable counts with damaged
                      goods. Cycle counts and shrink adjustments should follow the same discipline outlined in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>.
                    </p>
                    <p>
                      When evaluating tools, compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-channel depth versus{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>
                        Cin7 vs Katana
                      </Link>{" "}
                      if manufacturing or assembly enters your catalog. Product-focused evaluation continues in{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
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
              <GuideSidebar title="Ecommerce workflow" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How Ecommerce Inventory Management Works | BeltStack Guide",
    description:
      "Learn how ecommerce inventory workflows operate—channel sync, order allocation, fulfillment, returns, and how process differs from choosing inventory software.",
    keywords: [
      "ecommerce inventory management",
      "multi-channel inventory sync",
      "available to promise",
      "ecommerce fulfillment workflow",
      "inventory order allocation",
      "ecommerce stock management",
    ],
  };
}
