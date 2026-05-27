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
    q: "What is a barcode inventory system?",
    a: "A workflow where each SKU or unit carries a scannable barcode tied to your inventory database. Scans at receiving, put-away, pick, pack, and count update quantities in real time instead of manual entry.",
  },
  {
    q: "Do I need special hardware for barcode inventory?",
    a: "Dedicated laser scanners are fastest in high-volume warehouses; smartphones and tablets work for SMB receiving and cycle counts. Label printers and durable media matter more than exotic scanner brands at most scales.",
  },
  {
    q: "What barcode format should I use?",
    a: "Code 128 and UPC/EAN dominate retail and wholesale; QR codes help when you need more data on the label. Pick one standard per catalog, map barcodes to SKU records in software, and avoid duplicate codes across products.",
  },
  {
    q: "How do barcodes improve inventory accuracy?",
    a: "Scanning removes keystroke errors and forces a one-to-one match between physical item and system record. Pair scans with cycle counts by ABC class and variance investigation when counts disagree with perpetual balances.",
  },
  {
    q: "Is barcode scanning enough for lot and expiry tracking?",
    a: "Barcodes can encode lot numbers when labels and software support it; expiry-driven rotation often pairs with FEFO picking rules. Warehouse FEFO differs from accounting FIFO—see our FEFO vs FIFO guide for the distinction.",
  },
];

const PAGE_HREF = "/inventory/guides/barcode-inventory-systems-explained";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function BarcodeInventorySystemsExplainedPage() {
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
                      Barcode Inventory Systems Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Barcode Inventory Systems Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How barcode labels, scanners, and inventory software work together—from receiving to cycle counts—with
                    links to tracking methods, accuracy practices, and RFID alternatives.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A barcode inventory system connects physical stock to digital records through scannable identifiers.
                      Each scan is a transaction: receive ten units, move five to a pick bin, ship three, count two during a
                      cycle audit. The barcode is the bridge—without it, teams retype SKU codes and introduce errors that
                      compound into stockouts and phantom quantities.
                    </p>
                    <p>
                      Implementation spans label design, SKU master data, hardware choice, and software workflows. SMBs often
                      start with phone cameras and sheet labels; growing warehouses add industrial scanners, mobile carts, and
                      location barcodes on bins. The goal is the same: one scan, one authoritative update to on-hand balances.
                    </p>
                    <p>
                      Broader tracking context sits in{" "}
                      <Link href="/inventory/guides/the-easiest-ways-to-track-inventory" className={linkGreen}>
                        the easiest ways to track inventory
                      </Link>, accuracy habits in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>, and RFID comparison in{" "}
                      <Link href="/inventory/guides/rfid-vs-barcode-inventory-tracking" className={linkGreen}>
                        RFID vs barcode inventory tracking
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Platforms such as{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> ship mobile barcode flows at
                      different depths—test receiving and pick on your floor before committing. Reviews:{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="labels-and-master-data" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Every scan starts with clean SKU data.">Labels, Formats, and Master Data</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Assign a unique barcode per SKU—or per unit when serialization matters—and store the mapping in your
                      inventory system of record. Standard symbologies (UPC, Code 128, QR) must print crisply; smudged labels
                      force manual overrides that defeat the system.
                    </p>
                    <p>
                      Location labels on racks and bins enable directed put-away and pick paths. When lots or expiry matter,
                      extend labels with batch fields and align picking with{" "}
                      <Link href="/inventory/guides/fefo-vs-fifo-whats-the-difference" className={linkGreen}>
                        FEFO vs FIFO
                      </Link>{" "}
                      warehouse rotation—not the accounting FIFO/LIFO methods covered separately.
                    </p>
                  </div>
                </section>
                <section id="hardware-workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Scanners, phones, and floor discipline.">Hardware and Floor Workflows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Receiving scans confirm PO lines; put-away scans tie quantity to bin locations; pick scans validate order
                      lines before pack. Each step should be mandatory in software—optional scanning invites shortcuts when
                      teams rush.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for phone-first SMB scanning versus{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-warehouse barcode depth. Perpetual updates on every scan are explained in{" "}
                      <Link href="/inventory/guides/perpetual-vs-periodic-inventory-systems" className={linkGreen}>
                        perpetual vs periodic inventory systems
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="cycle-counts-barcode" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Counts that close the accuracy loop.">Barcode-Assisted Cycle Counting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Blind counts by ABC schedule: scan bin, scan SKU, enter quantity, reconcile variance. Barcode cycle counts
                      are faster than clipboard walks and produce an audit trail finance can trust during year-end.
                    </p>
                    <p>
                      When variance repeats on a SKU, investigate receiving, returns, and pick errors before adjusting reorder
                      points. Accurate counts feed{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting
                      </Link>{" "}
                      and prevent both overstocking and stockouts driven by bad data.
                    </p>
                  </div>
                </section>
                <section id="software-integration" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From scan event to reorder alert.">Software, Integrations, and Scale-Up</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory apps should expose open APIs or native connectors to ecommerce, accounting, and shipping—scan
                      events must flow to available-to-promise and general ledger without batch re-entry. AI-assisted anomaly
                      detection on scan patterns is covered in{" "}
                      <Link href="/inventory/guides/how-ai-is-used-in-inventory-management" className={linkGreen}>
                        how AI is used in inventory management
                      </Link>.
                    </p>
                    <p>
                      Turnover and overstock signals improve when scan discipline is solid—benchmark efficiency with{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>. RFID may win at pallet scale; barcodes remain the default for SKU-level control at most SMB
                      and mid-market operations.
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
              <GuideSidebar title="Barcode systems" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Barcode Inventory Systems Explained | BeltStack Guide",
    description:
      "Learn how barcode labels, scanners, and inventory software connect receiving, picking, and cycle counts—with accuracy tips and platform comparisons.",
    keywords: [
      "barcode inventory system",
      "barcode scanning inventory",
      "inventory barcode labels",
      "warehouse barcode workflow",
      "cycle count barcode",
      "inventory scanner software",
    ],
  };
}
