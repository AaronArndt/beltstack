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
    q: "What does SCM stand for in software?",
    a: "SCM stands for supply chain management--technology that plans, coordinates, and monitors flow of goods, information, and money from suppliers through production or procurement to end customers.",
  },
  {
    q: "Is SCM the same as logistics software?",
    a: "Logistics tools often focus on transportation and warehouse execution. SCM is broader: demand planning, supplier collaboration, inventory positioning across nodes, and order promising--logistics is one segment inside SCM.",
  },
  {
    q: "Do small service businesses need SCM software?",
    a: "Usually not until multi-location parts stocking, vendor lead-time variability, or contract SLAs force network-level planning. Most local contractors run FSM plus supplier reorder points until complexity grows.",
  },
  {
    q: "How does SCM connect to WMS and ERP?",
    a: "SCM generates plans and scenarios; ERP records financial transactions and approved orders; WMS executes warehouse tasks. Data flows plan-to-order-to-pick with feedback loops on actual lead times and fill rates.",
  },
  {
    q: "Can SCM improve field service first-time fix rates?",
    a: "Indirectly yes--better parts availability and accurate ATP (available-to-promise) reduce jobs delayed for stock. Technicians still need FSM for dispatch, mobile workflows, and customer billing on site.",
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

const PAGE_HREF = "/field-service/guides/what-is-scm-software";

export default function WhatIsScmSoftwarePage() {
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
                      What Is SCM Software?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is SCM Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Supply chain management software explained: planning across suppliers and sites, how SCM differs from
                    WMS and ERP, and relevance for parts-heavy field service organizations.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SCM software helps companies see and steer product flow across the entire chain--not only inside
                      one warehouse. It connects demand signals, supplier capacity, inbound transit, inventory at
                      multiple nodes, and customer commitments into plans operators can execute and revise when reality
                      shifts.
                    </p>
                    <p>
                      Where WMS asks which bin to pick from now, SCM asks whether you should position stock in Dallas or
                      Phoenix next month given supplier lead times and seasonal install demand. That planning horizon
                      matters for appliance, HVAC, and utility service networks where parts shortages create expensive
                      return trips.
                    </p>
                    <p>
                      Compare warehouse execution in{" "}
                      <Link href="/field-service/guides/what-is-wms-software" className={linkGreen}>
                        what is WMS software
                      </Link>{" "}
                      and financial control in{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>
                      . Full stack context:{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>
                        WMS vs SCM explained
                      </Link>
                      .
                    </p>
                    <p>
                      Customer-facing operations still run in{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        field service software
                      </Link>
                      . Browse{" "}
                      <Link href="/field-service/guides" className={linkGreen}>
                        field service guides
                      </Link>{" "}
                      for dispatch and billing depth separate from supply planning.
                    </p>
                  </div>
                </section>

                <section id="planning" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Forecast, allocate, and promise with confidence.">Planning and Orchestration Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SCM platforms and specialized tools cover demand planning, S&OP, inventory optimization across
                      echelons, supplier collaboration portals, purchase scheduling, allocation rules, available-to-promise,
                      and control-tower visibility. Advanced deployments include scenario modeling for disruptions--
                      port delays, supplier outages, weather-driven demand spikes.
                    </p>
                    <p>
                      Service organizations use these capabilities when install backlog depends on inbound SKUs from
                      multiple vendors, not just when manufacturing finished goods. A national garage-door dealer planning
                      spring inventory is running SCM problems even without a factory floor.
                    </p>
                    <p>
                      Outputs become purchase orders and transfer orders in ERP; execution continues in WMS and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch systems
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="modules" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common SCM software segments.">Major SCM Software Categories</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Demand and supply planning</strong> -- statistical forecasts, consensus plans, safety stock targets.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Procurement and supplier management</strong> -- RFQs, contracts, performance scorecards.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Transportation management (TMS)</strong> -- carrier selection, freight audit, route planning for trucks between nodes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Control tower / visibility</strong> -- exceptions and ETA tracking across the network.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Suites bundle modules; best-of-breed buyers integrate specialists with strong ERP connectors.
                    </p>
                  </div>
                </section>

                <section id="field-service-relevance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When trades outgrow reorder points.">SCM Relevance for Field Service and Trades</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Local contractors reorder when van stock alerts fire--that is inventory tactics, not SCM. SCM enters
                      when regional parts hubs, vendor-managed programs, and SLA-driven install windows require network
                      planning. Missed promises from stockouts hurt NPS faster than a slow dispatch board.
                    </p>
                    <p>
                      Connect SCM plans to technician reality: consumption data from{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        work orders
                      </Link>{" "}
                      should inform forecasts, not sales orders alone. Pair with{" "}
                      <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>
                        ERP, CRM, and FSM boundaries
                      </Link>{" "}
                      so sales pipelines do not inflate parts demand incorrectly.
                    </p>
                    <p>
                      Evaluate whether problems are planning (SCM), execution (WMS), or customer scheduling (FSM)
                      before buying the wrong layer.
                    </p>
                  </div>
                </section>

                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Prerequisites and realistic ROI.">When Organizations Adopt SCM Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Triggers include multi-node inventory, long supplier lead times, frequent expedite freight, and
                      finance pressure to reduce working capital without hurting fill rates. Clean item masters and
                      historical demand data are prerequisites--SCM amplifies bad inputs.
                    </p>
                    <p>
                      Start with one planning horizon and SKU segment rather than boiling the ocean. Pilot with parts
                      categories that drive callbacks when unavailable.
                    </p>
                    <p>
                      Operational teams should validate plans against{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service platform
                      </Link>{" "}
                      capacity--promising installs you cannot staff is still a failure even with perfect stock positioning.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Supply chain management basics.">FAQs</SectionTitle>
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
    title: "What Is SCM Software? | BeltStack Guide",
    description:
      "Learn what supply chain management (SCM) software is, core planning capabilities, major modules, and when parts-heavy field service organizations need SCM.",
    keywords: [
      "scm software",
      "supply chain management",
      "demand planning software",
      "inventory optimization",
      "supplier collaboration",
      "field service parts planning",
    ],
  };
}
