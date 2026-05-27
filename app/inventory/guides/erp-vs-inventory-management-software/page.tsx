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
    q: "What is the difference between inventory software and ERP?",
    a: "Inventory management software focuses on stock levels, receiving, picking, reorder points, and channel sync. ERP adds general ledger, procurement at scale, manufacturing, HR, and company-wide financial consolidation. Inventory tools are narrower and faster to deploy; ERP is broader and heavier.",
  },
  {
    q: "When should a business use inventory software instead of ERP?",
    a: "When stock accuracy, multi-channel sync, or warehouse workflows are the primary pain—and finance runs comfortably in QuickBooks, Xero, or a mid-market accounting suite. Most SMBs and growing ecommerce brands fit here before they need full ERP.",
  },
  {
    q: "Can inventory software integrate with ERP?",
    a: "Yes. Common patterns sync item masters and quantities from inventory apps into SAP, NetSuite, or Dynamics, while ERP remains the financial system of record. Avoid duplicating purchase orders in both systems without a clear source of truth.",
  },
  {
    q: "Does ERP replace dedicated inventory management?",
    a: "Not always. ERP inventory modules handle valuation and posting well; dedicated tools often win on barcode workflows, marketplace connectors, and buyer-friendly replenishment screens. Many mid-market teams run both layers.",
  },
  {
    q: "How do I choose between ERP and inventory software?",
    a: "List must-have workflows—cycle counts, channel sync, lot tracking, multi-warehouse transfers—and map each to a product demo with your SKU export. If only finance and GL consolidation drive the project, lean ERP; if ops accuracy drives it, start with inventory software and integrate later.",
  },
];

const PAGE_HREF = "/inventory/guides/erp-vs-inventory-management-software";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function ErpVsInventoryManagementSoftwarePage() {
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
                      ERP vs Inventory Management Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    ERP vs Inventory Management Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Where dedicated inventory tools stop and ERP begins—capabilities, overlap, integration patterns, and how to
                    know which layer your business needs first.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP and inventory management software both touch stock, but they solve different problems. Inventory apps
                      exist to keep quantities honest across receiving, picking, transfers, and sales channels. ERP exists to run
                      the whole company ledger—procurement, manufacturing, payroll, tax, and multi-entity reporting—with inventory
                      as one module among many.
                    </p>
                    <p>
                      Confusion starts when vendors label everything “ERP” or when finance assumes one system must own every
                      workflow. In practice, growing brands often run a best-of-breed inventory layer synced to accounting or ERP,
                      because warehouse UX and marketplace connectors rarely justify a full ERP rollout on their own.
                    </p>
                    <p>
                      Parallel thinking in other verticals helps: see{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>{" "}
                      for the same “financial backbone vs operational specialty” split. Enterprise inventory context is in{" "}
                      <Link href="/inventory/guides/what-is-sap-inventory-management" className={linkGreen}>
                        what is SAP inventory management
                      </Link>. Structured evaluation steps live in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Standalone tools such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link> vary in ERP depth—some
                      post to QuickBooks, others target mid-market GL. Validate integrations with your finance stack before
                      buying; reviews and pricing sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="scope-comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What each layer is built to do.">Scope: Inventory App vs ERP Module</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory software prioritizes real-time on-hand, reorder logic, barcode scanning, and channel sync.
                      Dashboards speak to buyers and warehouse leads. ERP inventory prioritizes valuation methods, standard
                      costs, intercompany transfers, and audit trails that feed the general ledger—dashboards speak to controllers.
                    </p>
                    <p>
                      Neither scope is “better”; misalignment happens when you expect ERP receiving screens to feel like a
                      picker-friendly WMS, or when you expect a lightweight inventory app to consolidate five legal entities.
                      Document which workflows must be excellent on day one versus which can wait for phase two.
                    </p>
                  </div>
                </section>
                <section id="when-inventory-first" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals you do not need full ERP yet.">When Inventory Software Comes First</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with dedicated inventory when oversells, phantom quantities, or multi-channel lag are the pain—and
                      accounting already works in QuickBooks, Xero, or a focused mid-market suite. Teams under roughly a few
                      hundred SKUs with one to three locations often move faster with{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> or{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link> than with an eighteen-month
                      ERP implementation.
                    </p>
                    <p>
                      Upgrade triggers toward ERP include complex BOMs, regulated lot traceability across plants, intercompany
                      inventory, and finance mandates for a single system of record. Until those appear, inventory-first plus
                      accounting integration usually costs less and ships sooner.
                    </p>
                  </div>
                </section>
                <section id="integration-patterns" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Running both without duplicate truth.">Integration and Coexistence</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mature stacks sync item masters and available quantities from the inventory layer into ERP nightly or in
                      real time; completed shipments and receipts post as inventory transactions in GL. Define one source of truth
                      for on-hand—usually the operational system—and let ERP consume adjustments rather than re-key them.
                    </p>
                    <p>
                      Compare connector depth when evaluating tools—{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for SMB-to-mid-market growth versus{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      when manufacturing and QuickBooks posting matter. WMS overlap is covered in{" "}
                      <Link href="/inventory/guides/inventory-management-vs-warehouse-management-systems" className={linkGreen}>
                        inventory management vs warehouse management systems
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="evaluation-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Demo with your data, not theirs.">Evaluation Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Import your top fifty SKUs, run a receive-pick-ship cycle, and test the accounting or ERP sync in the
                      vendor sandbox. Score cycle count workflows, marketplace connectors, and reporting separately from GL
                      features—you may need both products, but the inventory layer must win on the floor.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      as the structured framework; pair it with finance stakeholders so ERP ambitions do not override operational
                      requirements that dedicated inventory tools solve in weeks, not quarters.
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
              <GuideSidebar title="ERP & inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "ERP vs Inventory Management Software | BeltStack Guide",
    description:
      "Compare ERP and dedicated inventory management software—scope, when to start with inventory tools, integration patterns, and how to evaluate both layers.",
    keywords: [
      "ERP vs inventory software",
      "inventory management vs ERP",
      "inventory ERP integration",
      "when to use ERP for inventory",
      "inventory software vs NetSuite",
      "best inventory software ERP",
    ],
  };
}
