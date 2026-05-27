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
    q: "What is the easiest way to track inventory for a small business?",
    a: "Start with one source of truth: a single spreadsheet or app everyone updates at receiving and shipping. Add barcode scanning when manual entry causes errors. Easiest does not mean forever—pick the lightest method that stops oversells today.",
  },
  {
    q: "Are spreadsheets enough to track inventory?",
    a: "For very small catalogs and one disciplined owner, yes—see can Excel be used for inventory management for limits. Multiple editors, ecommerce channels, or hundreds of SKUs usually break spreadsheet workflows within months.",
  },
  {
    q: "Do I need barcode scanners to track inventory?",
    a: "Not on day one, but barcodes dramatically reduce typos and speed counts once SKU count or transaction volume grows. Phone camera scanning in apps like Sortly or inFlow is often enough before investing in dedicated hardware.",
  },
  {
    q: "What is the difference between a barcode app and inventory software?",
    a: "Barcode apps focus on labeling and quick quantity lookups—great for closets and tool cribs. Full inventory software adds purchase orders, reorder alerts, multi-location transfers, and channel sync. Choose based on whether you buy and sell stock or only track what you own.",
  },
  {
    q: "How fast can I switch from Excel to inventory software?",
    a: "Most SMBs import an item master and run one parallel week: receive and ship in the new system while reconciling nightly. Cloud tools like Sortly or inFlow often go live in days, not the months ERP implementations require.",
  },
];

const PAGE_HREF = "/inventory/guides/the-easiest-ways-to-track-inventory";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheEasiestWaysToTrackInventoryPage() {
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
                      The Easiest Ways to Track Inventory
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Easiest Ways to Track Inventory
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    From spreadsheets to barcode apps and dedicated software tiers—the lowest-friction paths to reliable
                    stock counts without overbuying complexity.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The easiest way to track inventory is the one your team will actually update after every receipt and
                      shipment—not the most sophisticated system on a comparison chart. Most small businesses start with a
                      spreadsheet or a simple list, add barcodes when typing errors appear, then graduate to cloud inventory
                      software when channels, locations, or SKU count outgrow manual discipline.
                    </p>
                    <p>
                      &quot;Easy&quot; trades off with automation depth. Spreadsheets cost nothing but demand strict edit rules;
                      phone scanning apps speed counts but may lack purchase orders; full inventory platforms sync Shopify and
                      Amazon but need setup time. Pick the tier that fixes your current pain—overselling, lost items, or
                      month-end reconciliation—without implementing features you will not use for a year.
                    </p>
                    <p>
                      Spreadsheet limits are covered in{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>. SMB platform picks sit in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>. Lightweight reviews include{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow Inventory</Link>.
                    </p>
                    <p>
                      Broader navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>, and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      for live pricing when you are ready to upgrade from the easiest tier.
                    </p>
                  </div>
                </section>
                <section id="spreadsheets" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Zero cost, high discipline.">Spreadsheets and Simple Lists</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Excel or Google Sheets work when one person owns the file, SKUs number in the dozens or low hundreds,
                      and sales happen through one or two predictable channels. Template columns: SKU, description, on-hand,
                      reorder point, last count date, and location bin. Lock formulas and use data validation to prevent
                      accidental overwrites.
                    </p>
                    <p>
                      Failure mode is concurrent editing without audit trails—read{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>{" "}
                      for upgrade signals. When reconciling the sheet to the shelf exceeds an hour weekly, move to software
                      rather than adding more tabs.
                    </p>
                  </div>
                </section>
                <section id="barcode-apps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Scan instead of type.">Barcode Labels and Mobile Scanning Apps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Print barcode labels for bins and SKUs, then scan with a phone or handheld to adjust quantities during
                      receiving and cycle counts. Apps like{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>{" "}
                      prioritize visual, mobile-first tracking for assets and small warehouses—minimal training, fast rollout.
                    </p>
                    <p>
                      Barcode tiers sit between spreadsheets and full ERP: you gain speed and accuracy on counts but may still
                      manually enter purchase orders or channel orders until you connect integrations. Compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for light scanning versus deeper order workflows.
                    </p>
                  </div>
                </section>
                <section id="dedicated-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When operations need a system of record.">Dedicated Inventory Software Tiers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cloud inventory platforms add item masters, POs, reorder alerts, multi-location transfers, and sales
                      channel sync.{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow Inventory</Link>{" "}
                      suits product businesses moving off QuickBooks-and-spreadsheet combos;{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>{" "}
                      scale toward multi-channel and light manufacturing.
                    </p>
                    <p>
                      Match tier to complexity—see{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>. Import your spreadsheet, run parallel for one week, then cut over integrations; that migration
                      path is easier than bolting barcodes onto a broken sheet long term.
                    </p>
                  </div>
                </section>
                <section id="daily-habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools only work if used.">Daily Habits That Keep Tracking Easy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Receive against POs before put-away, pick against orders not memory, and schedule ABC-weighted cycle
                      counts so accuracy does not depend on year-end wall-to-wall counts. One receiving shortcut poisons every
                      downstream report—easiest tools fail when teams skip updates &quot;just this once.&quot;
                    </p>
                    <p>
                      Build checklists from{" "}
                      <Link href="/inventory/guides/how-to-create-an-inventory-checklist" className={linkGreen}>
                        how to create an inventory checklist
                      </Link>{" "}
                      and accuracy practices in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. The easiest long-term stack is whichever tier your team updates in under two minutes per
                      transaction.
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
              <GuideSidebar title="Easy tracking" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "The Easiest Ways to Track Inventory | BeltStack Guide",
    description:
      "Easiest inventory tracking paths: spreadsheets, barcode scanning apps, and dedicated software tiers—when to use each and how to upgrade without friction.",
    keywords: [
      "easiest way to track inventory",
      "inventory tracking for small business",
      "barcode inventory tracking",
      "spreadsheet inventory tracking",
      "simple inventory software",
      "mobile inventory scanning",
    ],
  };
}
