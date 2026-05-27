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
    q: "Can Excel be used for inventory management?",
    a: "Yes—for very small catalogs, single locations, and one disciplined owner who updates the sheet after every movement. Excel breaks down quickly with multiple editors, channel sales, barcode workflows, or SKUs numbering in the hundreds.",
  },
  {
    q: "What are the biggest Excel inventory mistakes?",
    a: "Concurrent edits without version control, formulas overwritten by copy-paste, no audit trail for adjustments, and treating the sheet as available-to-sell while open orders sit in email. Any of these produce phantom stock and oversells.",
  },
  {
    q: "When should I stop using Excel for inventory?",
    a: "Move on when reconciling the sheet to the shelf takes hours weekly, oversells or stockouts are routine, or more than one person must update quantities in real time. Multi-channel sellers usually hit that wall faster than single-store retailers.",
  },
  {
    q: "Can Excel connect to Shopify or Amazon?",
    a: "Only through fragile CSV exports, third-party connectors, or custom scripts—not native real-time sync. Lag between marketplace sales and spreadsheet updates is the core overselling risk ecommerce brands face with Excel.",
  },
  {
    q: "What is the easiest upgrade path from Excel?",
    a: "Import your item master into a cloud inventory app, run one parallel week of receiving and shipping, then cut over channel integrations. Start with tools built for SMBs—see best inventory software for small business—before jumping to ERP complexity.",
  },
];

const PAGE_HREF = "/inventory/guides/can-excel-be-used-for-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function CanExcelBeUsedForInventoryManagementPage() {
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
                      Can Excel Be Used for Inventory Management?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can Excel Be Used for Inventory Management?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When Excel works for inventory, where it breaks down, and how to migrate to inventory software before
                    oversells and reconciliation waste become weekly fire drills.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Excel can absolutely track inventory—millions of small businesses start there because templates are free,
                      flexible, and familiar. The question is not whether Excel can store SKUs and quantities; it is whether
                      your team can keep one accurate record as orders, returns, and transfers accelerate.
                    </p>
                    <p>
                      Spreadsheets fail as a system of record when concurrency, integrations, and audit requirements outgrow
                      one person&apos;s discipline. Version conflicts, broken formulas, and delayed updates after marketplace
                      sales are the usual overselling culprits—not missing features in Excel itself.
                    </p>
                    <p>
                      Upgrade triggers and SMB-friendly platforms are in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>. Hosting and subscription tradeoffs appear in{" "}
                      <Link href="/inventory/guides/cloud-vs-on-premise-inventory-management-software" className={linkGreen}>
                        cloud vs on-premise inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory management software
                      </Link>.
                    </p>
                    <p>
                      If you are still on Excel but adding SKUs weekly, compare{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link> and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> for gentle
                      migration paths, or{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> when
                      ecommerce sync matters. Live pricing and reviews sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="when-excel-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Honest fit, not ideology.">When Excel Is Good Enough</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Excel remains viable when you operate from one location, sell through one channel (or manually update after
                      each sale), carry a modest SKU count, and one owner reconciles the sheet after physical counts. Periodic
                      inventory with monthly true-ups can work if everyone accepts that on-hand is approximate between counts.
                    </p>
                    <p>
                      Use structured tabs: item master, receipts log, shipments log, and adjustments with reasons. Protect
                      formula columns, ban direct edits to on-hand totals, and store a dated copy before each bulk import.
                      Those guardrails delay failure but do not replace perpetual transaction capture.
                    </p>
                  </div>
                </section>
                <section id="failure-modes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How spreadsheets create stockouts and oversells.">Where Excel Breaks Down</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Multi-user edits</strong> without locking produce silent overwrites.
                      <strong className="text-[#1A2D48]"> Channel lag</strong> means Shopify sold ten units while the sheet still
                      shows full stock. <strong className="text-[#1A2D48]">No pick/pack workflow</strong> leaves allocated
                      quantities invisible—sales thinks product is available when it is already promised on open orders.
                    </p>
                    <p>
                      Manufacturing and multi-location teams hit limits faster: BOM explosions, WIP stages, and transfers between
                      sites do not belong in ad hoc workbook tabs. See{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      when components and finished goods must move in sync—not only a single on-hand column per SKU.
                    </p>
                  </div>
                </section>
                <section id="upgrade-signals" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Treat symptoms as deadlines.">Signals You Have Outgrown Spreadsheets</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring oversells, emergency POs, or “we thought we had more” conversations are the clearest triggers.
                      So is finance refusing to trust inventory valuation during month-end, or spending more time reconciling
                      than selling. Our{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      guide walks through why small teams outgrow spreadsheets and which tools fit simple perpetual tracking.
                    </p>
                    <p>
                      Another signal is hiring admin help primarily to babysit the workbook. A $30–$80 monthly inventory
                      subscription that prevents one oversell or one day of reconciliation often pays for itself—compare total
                      cost in{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory management software
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="migration-path" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reduce cutover risk.">Migrating From Excel to Inventory Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Clean your export: dedupe SKUs, standardize UOMs, map locations, and freeze the sheet during cutover
                      weekend. Import into a cloud tool—see{" "}
                      <Link href="/inventory/guides/cloud-vs-on-premise-inventory-management-software" className={linkGreen}>
                        cloud vs on-premise inventory management software
                      </Link>{" "}
                      if hosting is still undecided—then connect sales channels before deleting the old template.
                    </p>
                    <p>
                      Run one week parallel: receive and ship in software while spot-checking against the legacy sheet. Compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for lightweight moves, or{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      when orders and accounting integrations matter. Use{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>{" "}
                      for side-by-side feature checks.
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
              <GuideSidebar title="Beyond Excel" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Can Excel Be Used for Inventory Management? | BeltStack Guide",
    description:
      "Learn when Excel works for inventory tracking, common spreadsheet failure modes, upgrade signals, and how to migrate to inventory management software.",
    keywords: [
      "Excel inventory management",
      "inventory spreadsheet template",
      "Excel vs inventory software",
      "when to upgrade from Excel inventory",
      "inventory tracking spreadsheet",
      "small business inventory Excel",
    ],
  };
}
