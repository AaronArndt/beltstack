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
    q: "What is FIFO in inventory accounting?",
    a: "First in, first out assigns the oldest purchase cost to cost of goods sold when items sell. Ending inventory reflects newer costs. FIFO matches physical flow for many goods and is widely accepted under GAAP and IFRS.",
  },
  {
    q: "What is LIFO in inventory accounting?",
    a: "Last in, first out assigns the most recent purchase cost to COGS when items sell. Older costs remain in ending inventory. LIFO can reduce taxable income in inflationary periods but is not permitted under IFRS and has US-specific constraints.",
  },
  {
    q: "Is warehouse FIFO the same as accounting FIFO?",
    a: "Not always. Warehouse teams may pick newest cartons for convenience while accounting applies FIFO cost layers. Physical rotation rules like FEFO (first expired, first out) are operational—see our FEFO vs FIFO guide for that distinction.",
  },
  {
    q: "When should a business use average cost instead?",
    a: "Weighted average cost smooths price volatility when lots are commingled and distinguishing layers is impractical. Many SMB inventory apps default to average cost for simplicity; FIFO layers matter more as SKU value and price swings grow.",
  },
  {
    q: "Does inventory software support FIFO and LIFO?",
    a: "Most platforms support FIFO and average cost; LIFO is less common in cloud SMB tools and may require ERP-grade modules. Verify costing methods with your accountant before migrating historical layers.",
  },
];

const PAGE_HREF = "/inventory/guides/fifo-vs-lifo-inventory-accounting-explained";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function FifoVsLifoInventoryAccountingExplainedPage() {
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
                      FIFO vs LIFO Inventory Accounting Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    FIFO vs LIFO Inventory Accounting Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Accounting cost flow assumptions—FIFO, LIFO, and average cost—how they affect COGS and tax, and how they
                    differ from warehouse FEFO rotation on the floor.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FIFO and LIFO are accounting methods that decide which purchase costs flow to cost of goods sold when
                      you sell inventory—not necessarily the order cartons leave the warehouse. When prices rise, FIFO usually
                      lowers COGS and raises ending inventory value; LIFO does the opposite, which can defer tax in the US but
                      is disallowed under IFRS.
                    </p>
                    <p>
                      Operations teams often conflate accounting FIFO with physical picking rules. Warehouse rotation may follow{" "}
                      <Link href="/inventory/guides/fefo-vs-fifo-whats-the-difference" className={linkGreen}>
                        FEFO vs FIFO
                      </Link>{" "}
                      for expiry compliance while finance applies FIFO cost layers in the ledger. Keeping that distinction clear
                      prevents arguments between warehouse and accounting during audits.
                    </p>
                    <p>
                      Perpetual systems track layers on every receipt and sale—see{" "}
                      <Link href="/inventory/guides/perpetual-vs-periodic-inventory-systems" className={linkGreen}>
                        perpetual vs periodic inventory systems
                      </Link>. Turnover and margin analysis connect to{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>{" "}
                      and count accuracy in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Costing support varies:{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> handle FIFO
                      or average cost at different depths—confirm LIFO needs with your CPA before selection. Reviews:{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="fifo-accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Oldest costs to COGS first.">FIFO in Accounting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Under FIFO, the first units purchased are assumed sold first. In inflationary markets COGS reflects older,
                      lower costs—gross margin looks stronger and ending inventory on the balance sheet carries newer prices.
                      Auditors expect receipt documentation that supports layer chronology.
                    </p>
                    <p>
                      FIFO aligns naturally with many physical flows and is the default recommendation for international
                      reporting. Pair with barcode receiving so receipt dates and costs attach to identifiable lots when
                      needed—covered in{" "}
                      <Link href="/inventory/guides/barcode-inventory-systems-explained" className={linkGreen}>
                        barcode inventory systems explained
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="lifo-accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Newest costs to COGS first.">LIFO in Accounting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      LIFO assigns the latest purchase costs to COGS when prices climb, reducing taxable income in the US under
                      permitted conditions. Balance sheet inventory can look understated versus replacement cost. IFRS prohibits
                      LIFO; US GAAP allows it with LIFO conformity rules that constrain switching methods.
                    </p>
                    <p>
                      LIFO liquidation—selling into older layers after inventory draws down—can spike COGS downward and create
                      tax surprises. Finance should model layer aging alongside{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting
                      </Link>{" "}
                      so ops does not unintentionally exhaust cheap layers during promotions.
                    </p>
                  </div>
                </section>
                <section id="average-cost" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When layers are impractical.">Average Cost and Hybrid Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Weighted average recalculates unit cost after each receipt—simple for commingled bulk materials and many
                      cloud SMB tools. Specific identification applies to high-value unique items where each unit has its own
                      cost basis.
                    </p>
                    <p>
                      Compare platforms in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      for costing exports to your GL. Tracking discipline from{" "}
                      <Link href="/inventory/guides/the-easiest-ways-to-track-inventory" className={linkGreen}>
                        the easiest ways to track inventory
                      </Link>{" "}
                      still underpins any costing method—garbage quantities produce garbage COGS regardless of FIFO or LIFO.
                    </p>
                  </div>
                </section>
                <section id="ops-vs-finance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Align warehouse rules with the ledger.">Operations vs Finance: FEFO, FIFO, and Audits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Warehouse FEFO prioritizes earliest expiry dates to reduce waste; accounting FIFO prioritizes earliest
                      purchase costs for COGS. You may pick FEFO on the floor while finance runs FIFO layers—document both policies
                      so auditors do not assume pick order equals cost flow.
                    </p>
                    <p>
                      Cycle counts validate quantities that costing methods rely on; AI variance hints in{" "}
                      <Link href="/inventory/guides/how-ai-is-used-in-inventory-management" className={linkGreen}>
                        how AI is used in inventory management
                      </Link>{" "}
                      do not replace count discipline. Prevent margin distortion from shrink by pairing costing reviews with{" "}
                      <Link href="/inventory/guides/how-businesses-prevent-overstocking-and-stockouts" className={linkGreen}>
                        overstocking and stockout prevention
                      </Link>{" "}
                      practices.
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
              <GuideSidebar title="FIFO & LIFO" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "FIFO vs LIFO Inventory Accounting Explained | BeltStack Guide",
    description:
      "Understand FIFO, LIFO, and average cost for inventory accounting—COGS impact, tax considerations, and how they differ from warehouse FEFO rotation.",
    keywords: [
      "FIFO vs LIFO inventory",
      "FIFO inventory accounting",
      "LIFO inventory method",
      "inventory cost flow assumption",
      "COGS FIFO LIFO",
      "FEFO vs accounting FIFO",
    ],
  };
}
