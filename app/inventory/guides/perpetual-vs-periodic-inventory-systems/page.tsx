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
    q: "What is a perpetual inventory system?",
    a: "Quantities update continuously as transactions occur—receipts, shipments, adjustments, and scans post to on-hand balances in real time. Software maintains a running ledger instead of waiting for a physical count to restate totals.",
  },
  {
    q: "What is a periodic inventory system?",
    a: "On-hand is estimated between full or partial physical counts; purchases add to a bulk inventory balance and cost of goods sold is often derived at period end. Spreadsheets and basic accounting setups often behave periodically even without the label.",
  },
  {
    q: "Which system is better for preventing stockouts?",
    a: "Perpetual tracking with accurate scans and reorder alerts catches low stock daily. Periodic systems discover shortages only at count time—often too late for fast-moving SKUs unless counts are very frequent.",
  },
  {
    q: "Can small businesses run perpetual inventory?",
    a: "Yes. Cloud inventory apps and barcode phones make perpetual tracking affordable for SMBs. Discipline matters more than enterprise scale—every receipt and shipment must post, or perpetual balances drift like periodic guesses.",
  },
  {
    q: "How does periodic inventory affect financial reporting?",
    a: "COGS and ending inventory are often computed at month or year end from counts plus purchases. Perpetual systems feed COGS on each sale and keep balance sheet inventory current—preferred when lenders or auditors expect continuous valuation.",
  },
];

const PAGE_HREF = "/inventory/guides/perpetual-vs-periodic-inventory-systems";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function PerpetualVsPeriodicInventorySystemsPage() {
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
                      Perpetual vs Periodic Inventory Systems
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Perpetual vs Periodic Inventory Systems
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Continuous perpetual ledgers versus periodic count-based inventory—how each architecture works, when to
                    upgrade, and how barcode scanning supports real-time accuracy.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Perpetual inventory updates quantity and value after every transaction; periodic inventory restates
                      on-hand when you count—weekly, monthly, or annually—and backfills cost of goods sold from purchases and
                      adjustments in between. The distinction is timing: perpetual answers “how many do we have right now?”;
                      periodic answers “how many did we have at count date?”
                    </p>
                    <p>
                      Modern cloud software defaults perpetual because ecommerce, multi-channel ATP, and reorder alerts need
                      live balances. Periodic patterns persist in spreadsheet shops, cash-basis micro businesses, and legacy
                      accounting where physical counts remain the source of truth.
                    </p>
                    <p>
                      Related guides:{" "}
                      <Link href="/inventory/guides/barcode-inventory-systems-explained" className={linkGreen}>
                        barcode inventory systems explained
                      </Link>,{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>, and{" "}
                      <Link href="/inventory/guides/the-easiest-ways-to-track-inventory" className={linkGreen}>
                        the easiest ways to track inventory
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Perpetual engines in{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> differ in
                      channel sync and costing depth—export a month of transactions to validate before switching from periodic
                      counts. Reviews:{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="perpetual-mechanics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Transaction-driven balances.">How Perpetual Systems Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Each receipt increases on-hand; each shipment or consumption decreases it; adjustments and cycle count
                      variances post as explicit corrections. Cost layers follow FIFO, LIFO, or average cost policies—accounting
                      methods covered in{" "}
                      <Link href="/inventory/guides/fifo-vs-lifo-inventory-accounting-explained" className={linkGreen}>
                        FIFO vs LIFO inventory accounting
                      </Link>, distinct from warehouse FEFO rotation in{" "}
                      <Link href="/inventory/guides/fefo-vs-fifo-whats-the-difference" className={linkGreen}>
                        FEFO vs FIFO
                      </Link>.
                    </p>
                    <p>
                      Perpetual only works when every movement is captured—skipped picks and manual spreadsheet overrides create
                      drift. Barcode discipline and ABC cycle counts keep the ledger aligned with bins.
                    </p>
                  </div>
                </section>
                <section id="periodic-mechanics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Counts as the reset button.">How Periodic Systems Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Purchases accumulate in an inventory asset account; sales reduce cash without continuous SKU detail until
                      count time. Ending inventory from the physical count drives COGS for the period: beginning plus purchases
                      minus ending equals goods sold.
                    </p>
                    <p>
                      Periodic can suffice for very small catalogs with infrequent sales, but stockouts and overstock surface
                      between counts. Upgrade signals align with{" "}
                      <Link href="/inventory/guides/how-businesses-prevent-overstocking-and-stockouts" className={linkGreen}>
                        preventing overstocking and stockouts
                      </Link>{" "}
                      and forecast needs in{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting explained
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="when-to-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals that periodic is holding you back.">When to Move from Periodic to Perpetual</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-channel selling, loan covenants on inventory accuracy, or more than a handful of SKUs usually
                      force perpetual adoption. If buyers ask “system quantity” daily while finance waits for month-end counts,
                      the organization is already paying perpetual prices in fire drills.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for lightweight perpetual entry versus{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for omnichannel perpetual depth. AI-assisted reconciliation is discussed in{" "}
                      <Link href="/inventory/guides/how-ai-is-used-in-inventory-management" className={linkGreen}>
                        how AI is used in inventory management
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="reporting-turnover" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational and financial visibility.">Reporting, Turnover, and Audit Readiness</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Perpetual systems expose daily turnover, aging, and reorder candidates; periodic reports lag until counts
                      close. Auditors prefer traceable transaction histories—receipt to sale—with cycle count adjustments
                      documented by SKU.
                    </p>
                    <p>
                      Benchmark efficiency with{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>. Perpetual data makes turnover actionable; periodic turnover is a rearview mirror that may hide
                      weeks of bad buys between counts.
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
              <GuideSidebar title="Inventory systems" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Perpetual vs Periodic Inventory Systems | BeltStack Guide",
    description:
      "Compare perpetual and periodic inventory systems—how each updates quantities, when to upgrade, and how software supports real-time tracking.",
    keywords: [
      "perpetual vs periodic inventory",
      "perpetual inventory system",
      "periodic inventory count",
      "real-time inventory tracking",
      "inventory COGS methods",
      "upgrade periodic to perpetual",
    ],
  };
}
