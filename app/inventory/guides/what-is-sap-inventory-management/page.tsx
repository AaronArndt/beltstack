import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedInventoryResources } from "@/components/guides/RelatedInventoryResources";
import { INVENTORY_GUIDE_SIDEBAR_ITEMS, INVENTORY_GUIDE_RELATED_ITEMS } from "@/lib/data/inventoryGuides";
import { getInventoryReviewUrl } from "@/lib/routes";

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
    q: "What is SAP inventory management?",
    a: "In SAP landscapes, inventory management usually refers to Materials Management (MM) stock functions—goods movements, valuations, reservations, and integration with procurement and production—often extended by SAP Extended Warehouse Management (EWM) for bin-level warehouse execution.",
  },
  {
    q: "Is SAP MM the same as a WMS?",
    a: "MM tracks material quantities and value for the enterprise; EWM (or a third-party WMS) directs scan-based warehouse tasks like directed putaway and wave picking. Many mid-market operators use MM with lighter warehouse processes until volume forces EWM or a dedicated WMS.",
  },
  {
    q: "Who typically runs SAP for inventory?",
    a: "Manufacturers, distributors, and retailers already standardized on SAP S/4HANA or ECC for finance and operations. Smaller businesses rarely adopt SAP solely for stock tracking—they choose focused inventory tools unless group IT mandates SAP.",
  },
  {
    q: "How does SAP inventory connect to ERP?",
    a: "SAP inventory is part of the ERP core: purchase orders post goods receipts, production orders consume components, sales deliveries issue stock, and FI receives valuation updates. Understanding ERP boundaries helps—see ERP vs operational software guides linked below.",
  },
  {
    q: "What should I compare if SAP is overkill?",
    a: "Evaluate SMB inventory platforms on integrations, multi-channel sync, and implementation time. BeltStack reviews and comparisons cover Zoho Inventory, Cin7, Fishbowl, and peers without multi-year SAP programs.",
  },
];

const PAGE_HREF = "/inventory/guides/what-is-sap-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function WhatIsSapInventoryManagementPage() {
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
                      What Is SAP Inventory Management?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is SAP Inventory Management?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How SAP handles inventory inside ERP—Materials Management, EWM, valuations, and when SAP fits versus
                    standalone inventory tools for growing businesses.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Searchers asking “SAP inventory management” usually mean SAP’s stock and valuation functions inside
                      ERP—not a separate SKU labeled “inventory app.” In classic ECC and S/4HANA, Materials Management (MM)
                      records goods movements, plant stock, reservations, and inventory valuations that finance recognizes.
                      When warehouses need bin-level execution, SAP Extended Warehouse Management (EWM) or integrated
                      third-party WMS layers take over floor workflows while MM/EWM stay aligned on quantities.
                    </p>
                    <p>
                      SAP inventory is powerful and heavy: chart of accounts, plants, storage locations, movement types,
                      and approval workflows are designed for global operators. A regional distributor evaluating SAP for
                      the first time should budget consultants, master-data governance, and change management—not only
                      license fees. Teams that only need multi-channel stock sync often land faster on tools reviewed in
                      our{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      roundup.
                    </p>
                    <p>
                      Context on ERP boundaries helps. Read{" "}
                      <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>
                        difference between ERP, CRM, and FSM
                      </Link>,{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>, and{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>{" "}
                      to see where financial inventory ends and operational execution begins. Warehouse depth is covered in{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        what is a warehouse management system (WMS)
                      </Link>.
                    </p>
                    <p>
                      Start from the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link> and{" "}
                      <Link href="/inventory/guides" className={linkGreen}>inventory guides</Link> if you are comparing
                      SAP to mid-market options. Live product evaluations belong in{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link> and
                      individual reviews such as{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link> or{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>Finale Inventory</Link>{" "}
                      for distribution-heavy stacks.
                    </p>
                  </div>
                </section>
                <section id="mm-core" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stock, movements, and valuation in SAP ERP.">SAP Materials Management (MM) Core</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      MM handles material master data, purchasing integration, goods receipt/issue, stock transfers between
                      plants, and physical inventory documents. Movement types (e.g., goods receipt for PO, transfer posting,
                      scrapping) drive how quantity and value change. Valuation classes and price control (standard vs moving
                      average) determine how COGS and balance sheet inventory reflect reality.
                    </p>
                    <p>
                      Reservations and dependent requirements tie stock to production orders or project networks—critical
                      for manufacturers already on SAP PP. Service organizations with parts depots may post issues against
                      cost centers or projects; alignment with{" "}
                      <Link href="/field-service/guides/is-servicenow-a-crm-or-erp" className={linkGreen}>
                        CRM vs ERP classifications
                      </Link>{" "}
                      keeps operational tools from duplicating MM postings.
                    </p>
                  </div>
                </section>
                <section id="ewm-wms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When ERP inventory needs a warehouse brain.">SAP EWM and the WMS Layer</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SAP EWM adds directed warehouse processes: handling units, storage bins, warehouse tasks, wave picking,
                      and yard management. It posts confirmations back to MM so enterprise on-hand stays coherent. Compare
                      enterprise WMS positioning in{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>SAP vs Oracle WMS</Link>{" "}
                      and our inventory-side{" "}
                      <Link href="/inventory/guides/the-most-popular-wms-software-compared" className={linkGreen}>
                        popular WMS software compared
                      </Link>{" "}
                      guide.
                    </p>
                    <p>
                      Facilities without EWM may still run MM with storage-location discipline and barcode-assisted
                      transfers—but that is not full WMS. The tipping point is pick accuracy, labor productivity, and audit
                      failures inside the building despite balanced ERP totals.
                    </p>
                  </div>
                </section>
                <section id="who-adopts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fit, cost, and alternatives.">Who Adopts SAP Inventory—and Who Should Not</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SAP inventory fits organizations already committed to SAP for finance, manufacturing, and group
                      reporting—especially when plants and currencies multiply. Greenfield SMBs rarely start here; they
                      prioritize time-to-value, ecommerce connectors, and approachable admin UIs.
                    </p>
                    <p>
                      If SAP is mandated by headquarters but branches need agility, define which SKUs and sites stay on MM
                      versus which channels sync through a lighter inventory hub. Hybrid architectures fail when nobody owns
                      master data or movement-type rules.
                    </p>
                  </div>
                </section>
                <section id="evaluation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical buyer checklist.">Evaluating SAP Against Inventory Alternatives</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Implementation timeline, partner ecosystem, and data migration scope—not demo screens alone.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Integration with ecommerce, POS, and 3PL feeds your branches already use.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Warehouse complexity: do you need EWM now or in eighteen months?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Total cost of ownership including annual support and internal admin headcount.</span>
                      </li>
                    </ul>
                    <p>
                      For operational software boundaries, revisit{" "}
                      <Link href="/field-service/guides/enterprise-vs-smb-field-service-software" className={linkGreen}>
                        enterprise vs SMB field service software
                      </Link>{" "}
                      as a parallel on complexity—even if your purchase is inventory-first.
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
              <GuideSidebar title="Enterprise inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "What Is SAP Inventory Management? | BeltStack Guide",
    description:
      "Learn what SAP inventory management means—MM, EWM, valuations, and ERP integration—and when SAP fits versus standalone inventory software.",
    keywords: [
      "SAP inventory management",
      "SAP MM inventory",
      "SAP EWM",
      "SAP materials management",
      "ERP inventory",
      "SAP warehouse",
    ],
  };
}
