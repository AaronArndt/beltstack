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
    q: "When is a spreadsheet enough for inventory?",
    a: "When one person owns updates, SKUs stay under a few dozen, sales are single-channel, and weekly reconciliation to the shelf takes minutes—not hours. Spreadsheets fail when multiple editors, marketplace orders, or barcode workflows need concurrent accuracy.",
  },
  {
    q: "What breaks first when inventory outgrows spreadsheets?",
    a: "Version conflicts and broken formulas, delayed quantity updates after online sales, no audit trail for adjustments, and phantom available-to-sell while open orders sit outside the sheet. Oversells and emergency counts follow.",
  },
  {
    q: "Is free inventory software better than Excel?",
    a: "Often yes once you need real-time sync or mobile scanning—free tiers add structure, user permissions, and basic integrations spreadsheets lack. Paid plans unlock channel connectors and automation that justify subscription cost when oversell risk has a dollar value.",
  },
  {
    q: "How long does migration from spreadsheet to software take?",
    a: "Many SMBs import an item master and run one parallel week of receiving and shipping before cutover. Complexity rises with multi-location stock, kits, and lot tracking—but still beats months of spreadsheet firefighting.",
  },
  {
    q: "Which inventory software is best for spreadsheet graduates?",
    a: "Light teams often start with Sortly or inFlow; multi-channel sellers lean Zoho Inventory or Cin7. Match catalog size and integration needs—see best inventory software for small business and compare tools with your SKU export before buying.",
  },
];

const PAGE_HREF = "/inventory/guides/spreadsheet-vs-inventory-management-software";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function SpreadsheetVsInventoryManagementSoftwarePage() {
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
                      Spreadsheet vs Inventory Management Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Spreadsheet vs Inventory Management Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When Excel and Google Sheets still work for stock, where they break down, and how dedicated inventory
                    software pays back through accuracy, sync, and fewer weekly reconciliation fire drills.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets are the default first system of record for inventory because they are free, flexible, and
                      require no IT project. Inventory management software adds structure—permissions, audit trails, barcode
                      workflows, and channel sync—that spreadsheets approximate poorly once more than one person touches stock
                      daily.
                    </p>
                    <p>
                      The decision is not ideological. Teams with disciplined single-owner updates and tiny catalogs can run
                      spreadsheets for years. Teams selling on Shopify and Amazon while picking from a garage shelf usually hit
                      oversell risk long before SKU count justifies “enterprise” software— they need a system of record, not a
                      fancier template.
                    </p>
                    <p>
                      Excel-specific limits and migration paths are in{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>. Subscription tradeoffs appear in{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory management software
                      </Link>. Platform picks for graduates are in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      plus the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Entry-level apps such as{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> import
                      spreadsheet columns in minutes—test with your file before assuming migration pain. Full reviews live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="spreadsheet-strengths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why teams stay on sheets.">Where Spreadsheets Still Win</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets excel at ad hoc analysis—pivoting dead stock, modeling reorder scenarios, and sharing a one-off
                      export with a lender. Zero subscription cost and infinite formula flexibility keep finance comfortable during
                      early-stage experimentation.
                    </p>
                    <p>
                      Treat the sheet as an analytics sandbox, not the live available-to-sell record, once orders flow from
                      marketplaces or POS. Dual-use—operational truth plus management reporting—in one unprotected workbook is
                      where most spreadsheet inventory programs fail.
                    </p>
                  </div>
                </section>
                <section id="failure-modes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals the sheet is the bottleneck.">Spreadsheet Failure Modes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Concurrent edits without version control, copy-paste overwriting formulas, and manual post-shipment updates
                      produce phantom stock—the root cause of most oversells we see in SMB audits. No role-based permissions means
                      anyone can “fix” a cell without an audit trail finance can reconcile.
                    </p>
                    <p>
                      Deeper Excel-specific patterns are documented in{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>. Common process mistakes that amplify spreadsheet drift appear in{" "}
                      <Link href="/inventory/guides/common-inventory-management-mistakes-businesses-make" className={linkGreen}>
                        common inventory management mistakes
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="software-advantages" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you buy beyond a grid.">What Inventory Software Adds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dedicated tools provide a single on-hand ledger updated by receiving, picks, transfers, and integrated sales.
                      Barcode scanning, low-stock alerts, and cycle count workflows turn policy into daily habit—see{" "}
                      <Link href="/inventory/guides/barcode-inventory-systems-explained" className={linkGreen}>
                        barcode inventory systems explained
                      </Link>{" "}
                      for hardware and software fit.
                    </p>
                    <p>
                      Compare light versus deep platforms with{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for spreadsheet graduates, or{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      when channel sync enters the picture.
                    </p>
                  </div>
                </section>
                <section id="migration-path" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Cut over without losing a week of sales.">Migration Path and Cost Reality</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export SKU, location, and quantity columns; import into a trial account; run one parallel week where every
                      receipt and shipment hits both sheet and software. When counts match, disable sheet edits and connect sales
                      channels. Free tiers may suffice initially—{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory management software
                      </Link>{" "}
                      explains when paid sync beats spreadsheet workarounds.
                    </p>
                    <p>
                      Shortlist platforms from{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and validate with your actual export, not vendor demo data alone.
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
              <GuideSidebar title="Spreadsheet vs software" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Spreadsheet vs Inventory Management Software | BeltStack Guide",
    description:
      "Compare spreadsheets and inventory management software—when Excel works, failure modes, software advantages, migration paths, and SMB platform picks.",
    keywords: [
      "spreadsheet vs inventory software",
      "Excel vs inventory management",
      "inventory spreadsheet alternative",
      "migrate from Excel inventory",
      "inventory software for small business",
      "free vs paid inventory software",
    ],
  };
}
