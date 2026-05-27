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
    q: "What features should inventory management software have?",
    a: "At minimum: real-time quantity on hand, purchase orders, sales order allocation, reorder alerts, adjustments with audit trail, and reporting by SKU and location. Multi-channel sellers need channel sync; manufacturers need BOMs and work orders; warehouses need barcode and count workflows.",
  },
  {
    q: "Is barcode scanning required in inventory software?",
    a: "Not for every business, but barcode receive, pick, and count modules pay off quickly when transaction volume or SKU count grows. Verify mobile app quality and offline behavior if the warehouse has dead zones—not all vendors scan equally well.",
  },
  {
    q: "What integrations matter most for inventory software?",
    a: "Accounting (QuickBooks, Xero), ecommerce and marketplaces (Shopify, Amazon), shipping carriers, and optionally EDI for wholesale. Broken integrations cause oversells; test order round-trips in trial, not just catalog import.",
  },
  {
    q: "How important is multi-location inventory support?",
    a: "Critical once you hold stock in more than one site—or separate retail backroom from ecommerce fulfillment. Look for transfers, location-level ATP, and permissions so stores cannot edit each other's counts casually.",
  },
  {
    q: "What is the difference between features and how to choose a vendor?",
    a: "This checklist defines capabilities worth paying for; how to choose inventory management software walks evaluation steps—stakeholders, demos, data migration, and total cost. Use both: features tell you what to ask about, the choose guide tells you how to decide.",
  },
];

const PAGE_HREF = "/inventory/guides/what-features-to-look-for-in-inventory-management-software";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function WhatFeaturesToLookForInInventoryManagementSoftwarePage() {
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
                      What Features to Look for in Inventory Management Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Features to Look for in Inventory Management Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical feature checklist for inventory software—core tracking, warehouse workflows, integrations,
                    and reporting—plus how it complements a structured vendor evaluation.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory management software should do more than store quantities—it should enforce how stock moves
                      from vendor to customer with an audit trail finance trusts. Start with non-negotiables: perpetual
                      quantity on hand, purchase and sales orders that reserve inventory, adjustment reasons, reorder alerts,
                      and SKU-level reporting. Without those, you still have an expensive spreadsheet.
                    </p>
                    <p>
                      Layer features by business model. Ecommerce brands prioritize channel sync and available-to-promise;
                      distributors need multi-location transfers and vendor lead times; manufacturers need BOMs, work orders,
                      and component backflush. A feature checklist keeps demos focused—vendors love showing dashboards you
                      will never open instead of receiving workflows you use hourly.
                    </p>
                    <p>
                      This guide complements—not replaces—{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>, which covers stakeholders, trials, migration, and budget. Use the checklist here to score
                      demos; use the choose guide to run the project. Also see{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      for shortlists by team size.
                    </p>
                    <p>
                      Validate features against your data: export SKUs, run a test PO receive, and simulate a channel order.
                      Compare vendors in{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>, read{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>{" "}
                      reviews, and browse the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>{" "}
                      and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      roundup for pricing context.
                    </p>
                  </div>
                </section>
                <section id="core-tracking" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The minimum viable inventory system.">Core Tracking and Item Master</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Item master fields: SKU, description, UOM, cost method, vendors, barcodes, and categories. Perpetual
                      inventory updates on receive, ship, return, and adjustment—with who changed what and when. Support
                      variants (size/color) without duplicating entire records unless your catalog requires kits and bundles.
                    </p>
                    <p>
                      Reorder points, safety stock, and min/max by location prevent stockouts without buyer heroics. ABC class
                      tags tie to{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        the ABC method of inventory management
                      </Link>{" "}
                      and cycle count schedules in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="warehouse-workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Floor discipline in software.">Warehouse, Barcode, and Count Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Receiving against POs, put-away to bins, pick/pack/ship, and transfer between locations should be
                      mobile-friendly with barcode support. Cycle count modules schedule counts by ABC class and blind-count
                      options reduce bias. Lot, serial, and expiry tracking matter for regulated or perishable goods—see{" "}
                      <Link href="/inventory/guides/fefo-vs-fifo-whats-the-difference" className={linkGreen}>
                        FEFO vs FIFO
                      </Link>.
                    </p>
                    <p>
                      WMS-grade features (wave picking, directed put-away) live in enterprise tiers or separate WMS—read{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        what is a warehouse management system (WMS)
                      </Link>{" "}
                      before paying for complexity you will not configure.{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>Finale Inventory</Link>{" "}
                      skew warehouse-heavy for mid-market teams.
                    </p>
                  </div>
                </section>
                <section id="integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stock must match money and channels.">Integrations and Order Flow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Native connectors to accounting (QuickBooks, Xero), Shopify, Amazon, WooCommerce, and shipping platforms
                      reduce oversells. Test bidirectional sync: a sale decrements on-hand; a cancellation restores it; partial
                      shipments split correctly. EDI and wholesale portals matter for distributors—CSV export is not a strategy
                      at volume.
                    </p>
                    <p>
                      Manufacturing teams need BOM explosion on work orders and optional{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      depth—compare{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>Cin7 vs Katana</Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      when production scheduling is on the checklist.
                    </p>
                  </div>
                </section>
                <section id="reporting-admin" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Visibility, roles, and scale.">Reporting, Permissions, and Evaluation Tips</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Standard reports: inventory valuation, aging, turnover, fill rate, and dead stock. Role-based permissions
                      separate warehouse adjusters from finance approvers. API access and webhooks help when native integrations
                      lag a niche marketplace.
                    </p>
                    <p>
                      Score vendors against this checklist during trials, then run the decision process in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>. Weight features you will use in the first 90 days higher than roadmap promises—implementation
                      success beats feature count on a brochure.
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
              <GuideSidebar title="Feature checklist" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "What Features to Look for in Inventory Management Software | BeltStack Guide",
    description:
      "Inventory software feature checklist: core tracking, barcode and warehouse workflows, integrations, reporting—and how to pair it with a structured vendor evaluation.",
    keywords: [
      "inventory management software features",
      "inventory software checklist",
      "inventory software requirements",
      "barcode inventory features",
      "multi-location inventory software",
      "inventory software integrations",
    ],
  };
}
