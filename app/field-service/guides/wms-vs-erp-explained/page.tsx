import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "Does ERP include warehouse management?",
    a: "Most ERP suites include basic inventory and warehouse transactions--receipts, transfers, shipments--but not slot-level optimization, wave picking, or scan-validated workflows at scale. A dedicated WMS adds floor execution detail ERP modules typically lack.",
  },
  {
    q: "When should we add WMS instead of extending ERP inventory?",
    a: "When pick accuracy, labor productivity, or dock throughput become bottlenecks and spreadsheet or paper pick lists persist despite ERP inventory records. High-SKU, multi-bin warehouses and third-party logistics operations usually justify WMS before the next ERP upgrade cycle.",
  },
  {
    q: "How do WMS and ERP stay in sync?",
    a: "ERP remains item master and financial record; WMS executes receipts, putaway, picks, and shipments with scans and sends confirmed quantities back. Inventory adjustments and costing post in ERP after WMS validates physical movement.",
  },
  {
    q: "Can field service companies ignore WMS?",
    a: "Many can until parts staging, van stock replenishment, or central distribution grows complex. Service businesses with one stockroom often run ERP or FSM inventory until bin accuracy and pick speed hurt first-time fix rates.",
  },
  {
    q: "Is SAP or Oracle WMS a replacement for ERP?",
    a: "No. WMS specializes in warehouse floor processes; ERP still owns GL, AP/AR, procurement, and enterprise reporting. Compare vendor WMS depth in our SAP vs Oracle WMS guide if you are evaluating those stacks.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Contractors and home services",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/wms-vs-erp-explained";

export default function WmsVsErpExplainedPage() {
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
                      <Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      WMS vs ERP Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    WMS vs ERP Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How warehouse management systems differ from ERP inventory modules--and why distribution-heavy
                    service and parts operations often run both.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP tells the business what inventory should exist and what it cost. WMS tells the warehouse
                      where it sits, how to pick it efficiently, and what actually moved after scans confirm reality.
                      Confusing the two leads to accurate books and inaccurate bins--or expensive WMS projects when
                      basic ERP inventory would suffice.
                    </p>
                    <p>
                      Field service and trades companies feel this when parts availability drives callback rates.
                      Technicians care whether the bin matches the system; finance cares whether valuation rolls up
                      correctly. Different audiences, different tools, one integrated thread.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href="/field-service/guides/what-is-wms-software" className={linkGreen}>
                        what is WMS software
                      </Link>{" "}
                      for floor-level capabilities. Pair with{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>{" "}
                      when operations span warehouse, dispatch, and finance.
                    </p>
                    <p>
                      Supply-chain context lives in{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>
                        WMS vs SCM explained
                      </Link>
                      . Vendor-specific WMS depth:{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>
                        SAP vs Oracle WMS
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="erp-inventory" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="System of record for stock and dollars.">ERP Inventory: Scope and Limits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP tracks on-hand quantities by site or location, costing methods, purchase orders, and financial
                      impact of receipts and issues. It excels at valuation, tax reporting, and tying inventory to AR/AP
                      and the general ledger.
                    </p>
                    <p>
                      Standard ERP warehouse features often stop at location-level balances without directed putaway,
                      pick-path optimization, or scan enforcement at each step. For a single storeroom serving a service
                      fleet, that may be enough until pick errors become measurable.
                    </p>
                    <p>
                      Service businesses billing parts on jobs should still connect warehouse truth to{" "}
                      <Link href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software" className={linkGreen}>
                        FSM invoicing workflows
                      </Link>{" "}
                      so techs do not promise units the shelf cannot fulfill.
                    </p>
                  </div>
                </section>

                <section id="wms-execution" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Bins, scans, waves, and dock discipline.">WMS: Warehouse Floor Execution</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      WMS models aisles, bins, pallets, and license plates. It directs receiving, putaway, replenishment,
                      picking strategies (batch, zone, wave), packing, and shipping with barcode or RFID validation.
                      Labor standards and slotting rules live here--not in GL configuration screens.
                    </p>
                    <p>
                      Accuracy gains come from forcing system-directed moves: you cannot pick from the wrong bin without
                      an exception record. That discipline supports high-volume parts depots feeding{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service
                      </Link>{" "}
                      crews each morning.
                    </p>
                    <p>
                      WMS is not dispatch software. Moving stock to a technician van still pairs with{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        field service software
                      </Link>{" "}
                      for the customer visit itself.
                    </p>
                  </div>
                </section>

                <section id="together" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Who owns which transaction.">Running WMS and ERP Together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Item masters, vendors, and cost rollups originate in ERP. WMS consumes open POs and sales or
                      transfer demands, executes physical work, and posts confirmations back. Discrepancies trigger
                      cycle counts in WMS and adjustment journals in ERP--never silent overrides in both systems.
                    </p>
                    <p>
                      Integration maturity matters more than brand names. A mid-tier WMS with solid ERP connectors often
                      beats a native ERP warehouse module your team bypasses with clipboards.
                    </p>
                    <p>
                      Field service leaders should sit in integration design when parts staging windows align with
                      morning dispatch--see{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch and capacity planning for field service
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="signals" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When to invest in WMS depth.">Signals You Have Outgrown ERP-Only Inventory</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Rising pick errors, overtime in the warehouse without volume growth, and recurring stockouts despite
                      positive system balances are classic triggers. If cycle counts constantly find "ERP says yes, shelf
                      says no," WMS discipline is the fix--not another ERP customization.
                    </p>
                    <p>
                      Conversely, a single back-room parts cage with one clerk rarely needs slot optimization. Start with
                      process and bin labeling; add WMS when scan-validated workflows pay back labor hours.
                    </p>
                    <p>
                      Compare operational platforms on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      for parts integration with technician apps, not warehouse features alone.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Inventory accounting vs warehouse ops.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "WMS vs ERP Explained | BeltStack Guide",
    description:
      "WMS vs ERP: warehouse floor execution vs financial inventory control, integration patterns, and when service and parts operations need both.",
    keywords: [
      "wms vs erp",
      "warehouse management system",
      "erp inventory module",
      "parts warehouse",
      "inventory integration",
      "field service parts",
    ],
  };
}
