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
    q: "Can QuickBooks handle inventory management?",
    a: "QuickBooks Online and Desktop include basic inventory for product-based businesses—quantity on hand, cost of goods sold, and purchase orders on higher tiers. They are accounting-first tools, not warehouse systems; multi-location, barcode, and channel sync usually require add-ons or a dedicated inventory app.",
  },
  {
    q: "What is QuickBooks Commerce?",
    a: "QuickBooks Commerce (formerly TradeGecko) is Intuit's inventory and order management layer for multi-channel sellers. It syncs stock across sales channels and feeds financials back to QuickBooks. It suits brands outgrowing spreadsheet sync—not the same as turning on inventory inside QuickBooks Online alone.",
  },
  {
    q: "When should I add Fishbowl instead of staying in QuickBooks?",
    a: "Consider Fishbowl when you need manufacturing BOMs, warehouse barcode workflows, or deeper lot and serial control while keeping QuickBooks as the general ledger. Fishbowl sits between accounting-only QuickBooks and full ERP—common for distributors and light manufacturers already on QuickBooks Desktop.",
  },
  {
    q: "Does QuickBooks track inventory across multiple warehouses?",
    a: "QuickBooks Online Advanced supports multiple inventory sites with transfers; simpler QBO plans are single-location oriented. Even on Advanced, bin-level picking, cycle count schedules, and WMS-style rules are limited—teams with several warehouses often pair QuickBooks with inventory software or Fishbowl.",
  },
  {
    q: "How do I know if QuickBooks inventory is enough?",
    a: "Stay if one location, modest SKU count, and book inventory matches the shelf after monthly counts. Upgrade when oversells, channel lag, or reconciliation time dominate—use how to choose inventory management software and best inventory software for small business to compare next steps without overbuying ERP.",
  },
];

const PAGE_HREF = "/inventory/guides/can-quickbooks-handle-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function CanQuickbooksHandleInventoryManagementPage() {
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
                      Can QuickBooks Handle Inventory Management?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can QuickBooks Handle Inventory Management?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    What QuickBooks Online and Desktop actually cover for stock, when QuickBooks Commerce or Fishbowl
                    makes sense, and how accounting-first inventory compares to dedicated tools.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks can handle inventory management for many small product businesses—especially when finance
                      owns the item master and operations are simple. Turn on inventory tracking, set reorder points, and
                      QuickBooks posts COGS on sales while maintaining quantity on hand. That works until channel complexity,
                      multiple sites, or warehouse discipline outpace what an accounting UI was built to run.
                    </p>
                    <p>
                      The distinction matters: QuickBooks is a general ledger with inventory modules, not a warehouse or
                      omnichannel operations platform. Purchase orders, assemblies, and basic multi-location exist on higher
                      plans, but barcode scanning, pick paths, and real-time marketplace sync are either shallow or require
                      integrations. Teams that treat QuickBooks as their WMS often discover phantom stock when sales channels
                      update faster than manual QBO entries.
                    </p>
                    <p>
                      Intuit&apos;s inventory story splits across products.{" "}
                      <Link href={getInventoryReviewUrl("quickbooks-commerce")} className={linkGreen}>
                        QuickBooks Commerce
                      </Link>{" "}
                      targets multi-channel brands;{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link>{" "}
                      extends QuickBooks Desktop with manufacturing and warehouse depth. Broader context lives in the{" "}
                      <Link href="/accounting" className={linkGreen}>accounting hub</Link>,{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>, and{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>.
                    </p>
                    <p>
                      Evaluate fit against your failure modes: overselling on Shopify, slow month-end reconciliation, or
                      inability to trace lots. If books are accurate but ops are painful, add inventory software that syncs
                      to QuickBooks rather than replacing your ledger. Compare options in the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>, and live
                      reviews on{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="quickbooks-inventory-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What the core product includes.">QuickBooks Inventory Basics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks Online Plus and Advanced include inventory tracking: SKUs, average or FIFO-style costing
                      (plan-dependent), low-stock alerts, and purchase orders. Desktop Premier and Enterprise add assemblies,
                      bin locations on Enterprise, and stronger reporting for distributors. None of this replaces disciplined
                      receiving and cycle counts—software reflects process quality.
                    </p>
                    <p>
                      COGS flows automatically when you invoice from stock, which is why accountants prefer QBO inventory for
                      straightforward retailers. Service businesses with incidental parts may use non-inventory items instead;
                      product companies should not, or margin reports will lie.
                    </p>
                  </div>
                </section>
                <section id="quickbooks-commerce" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When channels outgrow manual entry.">QuickBooks Commerce and Multi-Channel Stock</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks Commerce centralizes catalog, orders, and available-to-promise across ecommerce and wholesale
                      channels, then pushes financial summaries to QuickBooks. It addresses the gap where QBO alone cannot
                      keep Shopify, Amazon, and B2B portals aligned without CSV gymnastics.
                    </p>
                    <p>
                      Read the full{" "}
                      <Link href={getInventoryReviewUrl("quickbooks-commerce")} className={linkGreen}>
                        QuickBooks Commerce review
                      </Link>{" "}
                      for integration depth and pricing. If you only sell on one storefront with a native QBO connector,
                      Commerce may be heavier than needed—lighter tools in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      often suffice.
                    </p>
                  </div>
                </section>
                <section id="fishbowl-and-extensions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Warehouse and manufacturing on QuickBooks Desktop.">Fishbowl and QuickBooks Extensions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Fishbowl Inventory is the classic QuickBooks Desktop companion for barcode receiving, picking, work
                      orders, and multi-warehouse transfers. Data syncs to QuickBooks for invoicing and GL—operations stay in
                      Fishbowl, finance stays in QuickBooks. Light manufacturers and distributors on Desktop often land here
                      before considering full ERP.
                    </p>
                    <p>
                      See the{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl review</Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      if production scheduling matters. Online-only QuickBooks shops typically evaluate cloud inventory apps
                      instead of Fishbowl&apos;s Desktop-centric model.
                    </p>
                  </div>
                </section>
                <section id="upgrade-signals" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stay, extend, or replace.">When to Stay in QuickBooks vs Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Stay on native QuickBooks inventory when SKU count is modest, one primary location suffices, and
                      book-to-shelf variance is small after periodic counts. Extend with Commerce or Fishbowl when channel sync
                      or warehouse workflows break—not when you merely want prettier dashboards.
                    </p>
                    <p>
                      Replace the operational layer entirely when you need manufacturing MRP, FEFO lot control, or WMS-grade
                      automation without QuickBooks at the center. Use{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      as a structured evaluation path, and cross-check accounting implications in the{" "}
                      <Link href="/accounting" className={linkGreen}>accounting hub</Link>{" "}
                      before migrating GL history.
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
              <GuideSidebar title="QuickBooks & inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Can QuickBooks Handle Inventory Management? | BeltStack Guide",
    description:
      "Learn what QuickBooks inventory covers, when QuickBooks Commerce or Fishbowl fits, and how accounting-first stock tracking compares to dedicated inventory software.",
    keywords: [
      "QuickBooks inventory management",
      "QuickBooks Commerce inventory",
      "Fishbowl QuickBooks",
      "QuickBooks Online inventory tracking",
      "inventory software QuickBooks integration",
      "QuickBooks vs inventory software",
    ],
  };
}
