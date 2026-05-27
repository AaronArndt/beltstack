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
    q: "Does Microsoft have inventory management software?",
    a: "Yes. Microsoft Dynamics 365 Business Central includes inventory, warehousing, and manufacturing modules for SMBs. Dynamics 365 Supply Chain Management (part of Finance & Operations) serves larger enterprises with advanced WMS, demand planning, and multi-site logistics—not a single boxed product named 'Microsoft Inventory.'",
  },
  {
    q: "What is the difference between Business Central and Supply Chain Management inventory?",
    a: "Business Central covers item tracking, locations, transfers, basic warehouse, and assembly for mid-market companies on one ERP stack. Supply Chain Management adds tier-1 capabilities: warehouse management systems, transportation management, master planning at scale, and complex intercompany flows.",
  },
  {
    q: "Can Dynamics 365 inventory replace standalone inventory apps?",
    a: "For organizations already on Microsoft ERP, usually yes—the inventory module is native to the ledger. Small teams without Dynamics often find dedicated SMB inventory tools faster to deploy and cheaper than licensing Business Central for stock alone.",
  },
  {
    q: "How does Microsoft inventory compare to SAP?",
    a: "Both are ERP-embedded inventory with materials management, lot control, and warehouse depth at the high end. SAP MM/EWM parallels Dynamics Supply Chain Management; Business Central competes with SAP Business One. See what is SAP inventory management for a parallel breakdown of SAP's modules.",
  },
  {
    q: "Does Microsoft Dynamics Field Service include inventory?",
    a: "Dynamics 365 Field Service tracks parts on work orders, truck stock, and product returns tied to service cases—it is field parts logistics, not full warehouse ERP. Inventory valuation and replenishment at scale still live in Business Central or Supply Chain Management; see the Dynamics field service review for service-specific scope.",
  },
];

const PAGE_HREF = "/inventory/guides/does-microsoft-have-inventory-management-software";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function DoesMicrosoftHaveInventoryManagementSoftwarePage() {
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
                      Does Microsoft Have Inventory Management Software?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Does Microsoft Have Inventory Management Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Microsoft&apos;s inventory capabilities in Dynamics 365 Business Central and Supply Chain Management—how
                    they compare to standalone tools, SAP, and field service parts tracking.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Microsoft does have inventory management software—it lives inside Dynamics 365, not as a separate
                      shrink-wrapped SKU. Dynamics 365 Business Central gives small and mid-sized businesses item masters,
                      locations, transfers, reorder policies, and warehouse transactions on the same database as finance.
                      Dynamics 365 Supply Chain Management extends that foundation for complex, multi-site operations with
                      advanced WMS, planning, and logistics.
                    </p>
                    <p>
                      Naming confuses buyers: &quot;Dynamics 365&quot; spans CRM, finance, supply chain, and field service apps.
                      Inventory valuation, costing, and on-hand quantities for manufacturing and distribution run through ERP
                      modules in Business Central or Finance &amp; Operations—not through Microsoft 365 spreadsheets or Teams
                      alone. If you already pay for Azure and Microsoft partners, consolidating on Dynamics can beat bolting
                      a third-party inventory app onto a fragmented stack.
                    </p>
                    <p>
                      Compare ERP-embedded inventory to standalone SMB tools in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/what-is-sap-inventory-management" className={linkGreen}>
                        what is SAP inventory management
                      </Link>{" "}
                      for the SAP parallel. Field teams using Dynamics for service should read{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Microsoft Dynamics field service review
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/microsoft-field-service-pricing-explained" className={linkGreen}>
                        Microsoft field service pricing explained
                      </Link>{" "}
                      for parts-on-van scope versus warehouse ERP.
                    </p>
                    <p>
                      Platform-neutral evaluations continue in the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      for teams not committed to Microsoft. Dynamics wins when inventory, manufacturing, and GL must share one
                      truth; lighter apps win when speed and cost matter more than ERP unification.
                    </p>
                  </div>
                </section>
                <section id="business-central" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="SMB ERP with stock built in.">Dynamics 365 Business Central Inventory</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Business Central tracks items, variants, units of measure, and costing methods (FIFO, average, standard).
                      Location codes support multi-warehouse transfers; basic warehouse features include pick, put-away, and
                      shipment documents. Assembly BOMs cover light manufacturing without jumping to full production modules.
                    </p>
                    <p>
                      Reorder policies and planning worksheets suggest purchase and transfer orders from forecast and safety
                      stock settings. Reporting ties inventory to the general ledger automatically—appealing for finance-led
                      implementations. Mobile warehouse apps and barcodes are available through partner extensions and Microsoft
                      add-ons rather than consumer-grade scanning apps.
                    </p>
                  </div>
                </section>
                <section id="supply-chain" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Enterprise WMS and planning.">Dynamics 365 Supply Chain Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Supply Chain Management (SCM) in the Finance &amp; Operations apps targets enterprises with complex
                      networks: advanced warehouse management, wave and cluster picking, transportation management, and
                      master planning across sites. Inventory here is inseparable from procurement, production, and fulfillment
                      orchestration.
                    </p>
                    <p>
                      Teams evaluating SCM versus standalone WMS should read{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        what is a warehouse management system (WMS)
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/the-most-popular-wms-software-compared" className={linkGreen}>
                        the most popular WMS software compared
                      </Link>. SCM fits when Microsoft ERP is already selected; best-of-breed WMS may still integrate via
                      middleware when floor automation exceeds standard Dynamics templates.
                    </p>
                  </div>
                </section>
                <section id="microsoft-vs-sap" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Two ERP inventory philosophies.">Microsoft vs SAP Inventory (High Level)</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SAP Materials Management and Extended Warehouse Management mirror Dynamics SCM at the high end; SAP
                      Business One competes with Business Central for mid-market. Both vendors embed inventory in the ledger,
                      support lot and serial tracking, and rely on partner ecosystems for vertical templates.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/inventory/guides/what-is-sap-inventory-management" className={linkGreen}>
                        what is SAP inventory management
                      </Link>{" "}
                      guide walks SAP module names and fit signals. Choice often follows existing ERP commitment, Azure vs SAP
                      cloud strategy, and partner bench strength—not raw feature checklists alone.
                    </p>
                  </div>
                </section>
                <section id="field-service-parts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Truck stock is not warehouse ERP.">Field Service, Parts, and Inventory Boundaries</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dynamics 365 Field Service manages work orders, technician schedules, and product consumption on jobs.
                      Technicians can reserve and use parts; returns and truck replenishment sync toward Business Central when
                      integrated. That layer optimizes service logistics—it does not replace central receiving, vendor lead
                      times, or financial inventory valuation.
                    </p>
                    <p>
                      Service-heavy Microsoft shops should read the{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Microsoft Dynamics field service review
                      </Link>{" "}
                      for capabilities and{" "}
                      <Link href="/field-service/guides/microsoft-field-service-pricing-explained" className={linkGreen}>
                        Microsoft field service pricing explained
                      </Link>{" "}
                      for licensing. Compare lighter inventory options via{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>{" "}
                      or{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      if warehouse ERP is overkill for your scale.
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
              <GuideSidebar title="Microsoft & ERP inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Does Microsoft Have Inventory Management Software? | BeltStack Guide",
    description:
      "Microsoft Dynamics 365 Business Central and Supply Chain Management inventory explained—capabilities, SAP comparison, and field service parts boundaries.",
    keywords: [
      "Microsoft inventory management software",
      "Dynamics 365 Business Central inventory",
      "Dynamics 365 Supply Chain Management",
      "Microsoft ERP inventory",
      "Dynamics vs SAP inventory",
      "Microsoft warehouse management",
    ],
  };
}
