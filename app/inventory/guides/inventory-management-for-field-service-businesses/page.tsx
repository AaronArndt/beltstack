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
    q: "How does inventory management work in field service businesses?",
    a: "Field service inventory tracks parts in warehouses, vans, and technician kits, issuing stock to work orders as jobs consume materials. Deductions tie to customer jobs for billing and costing; replenishment flows from central stockrooms or vendor POs back to trucks before the next dispatch wave.",
  },
  {
    q: "What is the difference between FSM inventory and warehouse inventory software?",
    a: "FSM inventory optimizes parts availability for scheduled jobs—van stock, job issues, returns, and sometimes price books on work orders. Warehouse inventory software emphasizes receiving, bin locations, pick paths, and ATP for many channels. Regional service orgs with central parts depots often run both layers connected by transfers.",
  },
  {
    q: "Should field service businesses cycle count van stock?",
    a: "Yes. Van and truck locations shrink without the controls of a fenced warehouse. Short weekly counts on high-value SKUs plus monthly broader audits prevent technicians arriving on site without critical parts—and reduce silent shrink that job costing cannot explain.",
  },
  {
    q: "How do parts on work orders sync to accounting?",
    a: "Approved parts lines on completed work orders become invoice and COGS entries—manually or through integrations. Clean SKU mapping between FSM and accounting avoids duplicate item masters; see integration patterns in field service accounting guides before month-end surprises.",
  },
  {
    q: "When do field service businesses need a dedicated inventory platform?",
    a: "Signals include multi-depot distribution, thousands of SKUs, vendor-managed inventory programs, or WMS-grade pick accuracy requirements. Until then, FSM-native parts modules plus disciplined counts often suffice for local and regional operators.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-management-for-field-service-businesses";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryManagementForFieldServiceBusinessesPage() {
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
                      Inventory Management for Field Service Businesses
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Management for Field Service Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How service organizations manage parts—depot and van stock, work order consumption, replenishment,
                    accounting handoffs, and when to add dedicated inventory or WMS layers.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service inventory exists to keep technicians productive on customer sites—not to optimize
                      pallet storage for its own sake. Parts must be on the truck or reachable from a nearby depot before
                      the appointment window closes; stockouts drive callbacks, missed SLAs, and labor waste. That urgency
                      makes inventory a dispatch problem as much as a finance problem: schedulers need confidence that
                      assigned techs carry the SKUs the job requires.
                    </p>
                    <p>
                      Most field service businesses start with parts modules inside FSM platforms: price books, van
                      locations, quantities issued to work orders, and returns from incomplete jobs. The work order is the
                      operational anchor—parts consumed there should flow to customer invoices and COGS without re-keying.
                      When volume grows, central parts depots, staging for preventive maintenance routes, and vendor
                      replenishment programs push operators toward deeper inventory or WMS capabilities.
                    </p>
                    <p>
                      Operational guides live in{" "}
                      <Link href="/field-service/guides" className={linkGreen}>field service guides</Link>,{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>, and{" "}
                      <Link href="/field-service/guides/field-service-software-and-accounting-integration" className={linkGreen}>
                        field service software and accounting integration
                      </Link>. Inventory fundamentals—counts, locations, transfers—connect to{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/how-multi-location-inventory-management-works" className={linkGreen}>
                        multi-location inventory management
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Standalone inventory tools such as{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link>{" "}
                      appear when depots outgrow FSM parts depth—compare fit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      and{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="parts-locations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Depots, vans, and staging.">Parts Locations: Depots, Vans, and Staging</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Model each stock point explicitly: central warehouse, regional depots, technician vans, and sometimes
                      consigned stock at customer sites for maintenance contracts. Transfers from depot to van should be
                      tracked before the morning route—dispatch boards that show skill and drive time but ignore parts
                      availability set up first-visit failures.
                    </p>
                    <p>
                      Staging for planned maintenance routes differs from reactive break/fix: PM kits may be picked the
                      night before and loaded by SKU list. Barcode confirmation at load time catches substitutions early.
                      Multi-location patterns from{" "}
                      <Link href="/inventory/guides/how-multi-location-inventory-management-works" className={linkGreen}>
                        multi-location inventory management
                      </Link>{" "}
                      apply when depots serve overlapping territories.
                    </p>
                  </div>
                </section>
                <section id="work-orders" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Consumption tied to customer jobs.">Parts on Work Orders and Job Costing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians should issue parts from van or depot stock inside the same mobile flow where they log
                      labor and completion notes. Each line ties quantity to the work order, decrements location balance,
                      and queues customer bill lines when pricing rules allow. Unissued “planned parts” on templates help
                      prep without prematurely deducting stock.
                    </p>
                    <p>
                      Full workflow detail is in{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>. Returns from cancelled lines or unused kit components must restock with inspection—
                      defective cores often follow separate RMA workflows that should not inflate sellable van counts.
                    </p>
                  </div>
                </section>
                <section id="replenishment" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keeping routes stocked.">Replenishment, POs, and Van Restocking</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Replenishment triggers combine min/max thresholds per van SKU with depot-level purchasing for bulk
                      buys. Some organizations run nightly “restock lists” from completed jobs plus forecasted PM demand;
                      others rely on tech self-reporting at end of day—only the former scales past a dozen vehicles.
                      Vendor lead times for specialty parts belong in planning, aligned with{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock
                      </Link>{" "}
                      buffers on critical SKUs.
                    </p>
                    <p>
                      Vendor-managed inventory and consignment arrangements shift ownership but not tracking obligation—
                      you still need visibility to bill customers correctly and audit supplier invoices. Enterprise
                      boundaries between WMS, ERP, and FSM are covered in{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>{" "}
                      on the field service side.
                    </p>
                  </div>
                </section>
                <section id="accounting-and-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Finance handoffs and stack choices.">Accounting Integration and Software Layers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Parts revenue and COGS should post from approved work orders into accounting without duplicate item
                      masters. Integration patterns—invoice sync, inventory asset accounts, purchase accruals—are
                      walkthrough topics in{" "}
                      <Link href="/field-service/guides/field-service-software-and-accounting-integration" className={linkGreen}>
                        field service software and accounting integration
                      </Link>. QuickBooks-first shops should read{" "}
                      <Link href="/inventory/guides/can-quickbooks-handle-inventory-management" className={linkGreen}>
                        Can QuickBooks handle inventory management
                      </Link>{" "}
                      before assuming the ledger alone covers depot scale.
                    </p>
                    <p>
                      Compare dedicated inventory add-ons in{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      when manufacturing-style assemblies appear, or{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      for depot purchasing depth. More field service context:{" "}
                      <Link href="/field-service/guides" className={linkGreen}>field service guides index</Link>.
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
              <GuideSidebar title="Field service parts" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Management for Field Service Businesses | BeltStack Guide",
    description:
      "How field service businesses manage parts inventory—depot and van stock, work order consumption, replenishment, accounting sync, and software layer choices.",
    keywords: [
      "field service inventory management",
      "FSM parts tracking",
      "van stock field service",
      "work order parts inventory",
      "service depot inventory",
      "field service spare parts",
    ],
  };
}
