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
    q: "What are the main types of inventory systems?",
    a: "Common categories include periodic (count-and-adjust), perpetual (transaction-driven), barcode or scanner-based, multi-location or WMS-backed, and ERP-integrated platforms. The label describes how records stay current—not just which software vendor you pick.",
  },
  {
    q: "What is the difference between periodic and perpetual inventory systems?",
    a: "Periodic systems update on-hand totals after scheduled physical counts; between counts, records may drift. Perpetual systems adjust quantity with every receipt, sale, transfer, or adjustment in near real time. Most growing SMBs eventually need perpetual tracking for reliable available-to-promise numbers.",
  },
  {
    q: "When do I need a WMS instead of basic inventory software?",
    a: "Consider warehouse management when bin-level location, directed picking, wave planning, or labor metrics matter more than a simple on-hand total. A WMS is a system type layered on inventory data—see our WMS primer for capability boundaries.",
  },
  {
    q: "Can one business use multiple inventory system types?",
    a: "Yes. A manufacturer might run perpetual ERP inventory at the plant, periodic counts at a small satellite stockroom, and scanner workflows in the main warehouse. The risk is reconciling across systems—prefer one authoritative ledger with role-specific views when possible.",
  },
  {
    q: "How do I choose the right inventory system type?",
    a: "Match system type to transaction volume, location count, channel complexity, and audit requirements. Start with how often you need trustworthy ATP, then shortlist software that supports that model without forcing manual bridges between spreadsheets and the shelf.",
  },
];

const PAGE_HREF = "/inventory/guides/the-different-types-of-inventory-systems";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheDifferentTypesOfInventorySystemsPage() {
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
                      The Different Types of Inventory Systems
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Different Types of Inventory Systems
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Periodic versus perpetual, scanner-driven, multi-location, and ERP-integrated inventory systems—how each
                    type works and which fits your operation before you buy software.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      An inventory system is the combination of processes, records, and tools that tell you what you own, where
                      it sits, and what you can promise customers. Teams research system types when spreadsheets no longer
                      match the shelf—or when finance asks which ledger is authoritative after a channel sync failure.
                    </p>
                    <p>
                      System type is not the same as stock category. Raw materials versus finished goods describe what you
                      hold; periodic versus perpetual describes how often quantities update. Confusing the two leads to buying
                      software that tracks SKUs well but still leaves you blind between counts.
                    </p>
                    <p>
                      Context for stock categories lives in{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        the different types of inventory explained
                      </Link>{" "}
                      and management philosophies in{" "}
                      <Link href="/inventory/guides/what-are-the-4-types-of-inventory-management" className={linkGreen}>
                        the 4 types of inventory management
                      </Link>. Selection frameworks are in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>.
                    </p>
                    <p>
                      SMBs often start with periodic counts in spreadsheets, then move to perpetual cloud apps such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> or{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>. Signs you
                      have outgrown manual tracking are covered in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="periodic-vs-perpetual" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Count rhythm versus transaction rhythm.">Periodic vs Perpetual Systems</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Periodic systems</strong> treat physical counts as the truth reset.
                      Purchases and sales may be logged elsewhere, but on-hand totals officially change when you close a count
                      period. That can work for very small catalogs with infrequent movement if everyone accepts drift between
                      counts.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Perpetual systems</strong> decrement and increment with every
                      transaction—receipts, picks, returns, adjustments. Available-to-sell becomes a live number, which
                      multi-channel sellers need to prevent overselling. Most inventory SaaS products are perpetual at core,
                      even if you still run periodic wall-to-wall audits for validation.
                    </p>
                  </div>
                </section>
                <section id="scanner-and-barcode" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capture layer on top of the ledger.">Barcode and Scanner-Based Systems</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scanner workflows are a system subtype: they reduce transcription errors at receiving, picking, and cycle
                      counts. Camera-based scanning in mobile apps counts here too—the goal is identical data entry at the
                      point of physical touch, not a separate inventory philosophy.
                    </p>
                    <p>
                      Lightweight teams use{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link> for visual and barcode
                      tracking; warehouse-heavy operations pair scanners with{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link> or{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        WMS capabilities
                      </Link>{" "}
                      when bin-level discipline matters. Compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      if you are choosing between simple scanning and fuller order workflows.
                    </p>
                  </div>
                </section>
                <section id="multi-location-wms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When one total is not enough.">Multi-Location and WMS-Backed Systems</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-location inventory systems maintain quantities by site, aisle, or bin—not only a company-wide
                      rollup. Transfers between stores or warehouses become first-class transactions so ATP reflects where stock
                      actually sits before you promise a customer two-day shipping from the wrong node.
                    </p>
                    <p>
                      A warehouse management system adds directed workflows: putaway rules, pick paths, pack stations, and
                      sometimes labor standards. You adopt it when floor execution—not just finance valuation—is the bottleneck.
                      ERP-integrated inventory (see{" "}
                      <Link href="/inventory/guides/what-is-sap-inventory-management" className={linkGreen}>
                        SAP inventory management
                      </Link>) extends the same idea into manufacturing and complex costing.
                    </p>
                  </div>
                </section>
                <section id="choosing-system-type" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match architecture to reality.">Choosing a System Type for Your Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with channel count, location count, and how painful stockouts or oversells are today. A single-store
                      retailer with fifty SKUs may thrive on perpetual cloud tracking without WMS; a brand on Shopify, Amazon,
                      and wholesale needs perpetual multi-location sync from day one.
                    </p>
                    <p>
                      Document your current count cadence and who updates records. If three people edit one spreadsheet, you
                      likely need perpetual software with permissions before debating enterprise WMS. Shortlists and pricing
                      context sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>—test imports with
                      your SKU list, not demo catalogs alone.
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
              <GuideSidebar title="System types" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Different Types of Inventory Systems Explained | BeltStack Guide",
    description:
      "Compare periodic vs perpetual, barcode, multi-location, and ERP-integrated inventory systems—and choose the right architecture before buying software.",
    keywords: [
      "types of inventory systems",
      "periodic vs perpetual inventory",
      "inventory system types",
      "barcode inventory system",
      "multi-location inventory",
      "WMS vs inventory software",
    ],
  };
}
