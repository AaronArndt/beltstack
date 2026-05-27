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
    q: "Is WMS part of supply chain management?",
    a: "WMS is one execution layer inside the broader supply chain. SCM spans planning and orchestration from suppliers through manufacturing or procurement to customer delivery; WMS focuses on what happens inside the warehouse walls--receive, store, pick, ship.",
  },
  {
    q: "What does SCM software do that WMS does not?",
    a: "SCM tools emphasize demand planning, supplier collaboration, transportation management, order promising across nodes, and network-wide inventory optimization. They answer what should move where and when across the chain; WMS answers how to move it inside a building with scan accuracy.",
  },
  {
    q: "Do service businesses need SCM or WMS?",
    a: "Most local service contractors need neither at scale--FSM plus basic parts inventory suffices. Regional operators with central parts depots, vendor-managed inventory, or multi-warehouse replenishment start touching SCM planning; high-SKU depots add WMS for pick execution.",
  },
  {
    q: "Can one vendor platform cover SCM and WMS?",
    a: "Large suites often include both, but modules vary in depth. Validate WMS floor features separately from SCM planning dashboards--a strong control tower does not automatically deliver directed picking.",
  },
  {
    q: "How does SCM relate to ERP and field service?",
    a: "ERP financializes transactions; SCM plans flow; WMS executes storage and picks; FSM dispatches technicians to customers. Integrations link planned availability to what techs can install on site--see ERP vs FSM and WMS vs ERP guides for handoffs.",
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

const PAGE_HREF = "/field-service/guides/wms-vs-scm-explained";

export default function WmsVsScmExplainedPage() {
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
                      WMS vs SCM Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    WMS vs SCM Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Supply chain management orchestrates flow across suppliers, plants, and customers; warehouse
                    management executes storage and picks inside the building--how they differ and connect.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SCM (supply chain management) software looks outward and forward: demand forecasts, supplier
                      commitments, inbound shipments, allocation rules, and delivery promises across a network. WMS
                      software looks inward and immediate: where pallets sit, which pick path minimizes steps, and
                      whether scans prove the right SKU left the dock.
                    </p>
                    <p>
                      Buyers collide the acronyms because both touch inventory. The distinction is planning horizon
                      and physical scope. SCM without WMS can optimize on paper while the warehouse misses picks; WMS
                      without SCM can run an efficient building that stocks the wrong mix for upcoming service demand.
                    </p>
                    <p>
                      Definitions:{" "}
                      <Link href="/field-service/guides/what-is-scm-software" className={linkGreen}>
                        what is SCM software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-wms-software" className={linkGreen}>
                        what is WMS software
                      </Link>
                      . Financial layer:{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>
                      .
                    </p>
                    <p>
                      Field service operators stocking parts for technicians should align SCM replenishment signals with
                      dispatch reality on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      platforms that expose parts consumption from completed jobs.
                    </p>
                  </div>
                </section>

                <section id="scm-scope" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Network planning and supplier coordination.">What SCM Software Covers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SCM suites and specialized tools handle demand planning, S&OP, purchase collaboration, inbound
                      logistics, transportation management, and order orchestration across warehouses and vendors.
                      Visibility dashboards show whether you can promise a install date given inbound freight and
                      regional stock--not just one building&apos;s pick queue.
                    </p>
                    <p>
                      For service organizations, SCM thinking appears when you centralize parts buying, negotiate vendor
                      lead times for high-turn SKUs, and balance inventory across depots serving different metro areas.
                      That is a different problem than labeling bins in one warehouse.
                    </p>
                    <p>
                      SCM sits above ERP in many architectures: plans become purchase orders and transfer orders in ERP,
                      which WMS executes on receipt.
                    </p>
                  </div>
                </section>

                <section id="wms-scope" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Physical accuracy inside four walls.">What WMS Software Covers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      WMS directs receiving clerks, fork drivers, and pickers with task lists validated by scans. It
                      manages slotting, replenishment from bulk to forward pick, packing stations, and carrier labels.
                      Metrics emphasize pick rate, dock turnaround, and inventory accuracy--not supplier OTIF alone.
                    </p>
                    <p>
                      A parts depot feeding HVAC or appliance techs benefits when morning pick waves align with{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch boards
                      </Link>
                      . WMS makes the shelf trustworthy; it does not schedule customer windows.
                    </p>
                    <p>
                      Compare enterprise WMS options in{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>
                        SAP vs Oracle WMS
                      </Link>{" "}
                      if you are standardizing on a major stack.
                    </p>
                  </div>
                </section>

                <section id="handoffs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From forecast to pick confirmation.">How SCM and WMS Hand Off Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SCM produces planned orders and allocation decisions by node and date. ERP converts approved plans
                      into purchase orders, transfer orders, and sales demand. WMS receives inbound ASNs, puts stock away,
                      picks against outbound demand, and confirms shipped quantities back to ERP and SCM visibility
                      layers.
                    </p>
                    <p>
                      Breakdowns show up as phantom availability: SCM promises stock ERP thinks is on hand, but WMS
                      cannot locate it in pick face. Closed-loop feedback requires exception workflows, not monthly
                      spreadsheets.
                    </p>
                    <p>
                      Service businesses should feed completed job parts usage from{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        work orders
                      </Link>{" "}
                      into demand signals so SCM does not plan from sales orders alone.
                    </p>
                  </div>
                </section>

                <section id="field-service-lens" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When trades and service orgs need each layer.">WMS vs SCM for Field Service Operators</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Single-location contractors rarely buy SCM suites. They reorder from suppliers when van stock
                      alerts fire inside FSM. Multi-branch dealers with regional parts hubs often need SCM-style
                      replenishment math before they need advanced WMS--unless pick volume and SKU count force scan
                      discipline first.
                    </p>
                    <p>
                      The practical stack for scaled service: FSM for customer jobs, ERP for finance, WMS when the
                      warehouse is a bottleneck, SCM when supplier network and multi-node inventory drive margin. Read{" "}
                      <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>
                        difference between ERP, CRM, and FSM
                      </Link>{" "}
                      to keep customer-facing tools separate from planning towers.
                    </p>
                    <p>
                      Evaluate end-to-end scenarios on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      using a high-parts job that must be promised, picked, loaded, and installed in one day.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Planning vs warehouse execution.">FAQs</SectionTitle>
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
    title: "WMS vs SCM Explained | BeltStack Guide",
    description:
      "WMS vs SCM: warehouse execution vs supply chain planning, integration handoffs, and what field service and parts operations need at each layer.",
    keywords: [
      "wms vs scm",
      "supply chain management software",
      "warehouse management",
      "inventory planning",
      "parts replenishment",
      "field service supply chain",
    ],
  };
}
