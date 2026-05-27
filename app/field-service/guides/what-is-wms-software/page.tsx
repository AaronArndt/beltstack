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
    q: "What does WMS stand for?",
    a: "WMS stands for warehouse management system--software that directs receiving, storage, picking, packing, and shipping inside a warehouse or distribution center with location-level inventory control.",
  },
  {
    q: "Who uses WMS software?",
    a: "Retailers, manufacturers, third-party logistics providers, and parts-heavy service organizations with high-SKU distribution centers. Any operation where pick accuracy and labor productivity inside a building materially affect customer promises.",
  },
  {
    q: "How is WMS different from inventory in QuickBooks or ERP?",
    a: "Basic inventory tracks quantities and value; WMS adds bin locations, scan-validated moves, directed putaway, pick strategies, and labor tasking on handheld devices. You adopt WMS when floor execution--not just accounting--needs discipline.",
  },
  {
    q: "Does WMS replace field service software?",
    a: "No. WMS manages stock inside warehouses; field service software dispatches technicians to customer sites. They connect when parts leave the warehouse for van stock or job consumption.",
  },
  {
    q: "What features should I expect in modern WMS?",
    a: "Barcode scanning, slotting, wave and batch picking, cross-docking, yard and dock appointments, integration with ERP and TMS, and real-time inventory by bin. Mobile UX for operators is as important as management dashboards.",
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

const PAGE_HREF = "/field-service/guides/what-is-wms-software";

export default function WhatIsWmsSoftwarePage() {
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
                      What Is WMS Software?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is WMS Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Warehouse management systems explained: core capabilities, who adopts them, and how WMS connects to
                    ERP, supply chain tools, and field service parts operations.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      WMS software controls what happens inside a warehouse or distribution center after goods arrive
                      and before they leave. It knows not just that you have four hundred units of a part, but which
                      aisle, bay, and shelf they occupy--and it tells operators exactly where to walk next to pick an
                      order accurately.
                    </p>
                    <p>
                      The category grew from paper pick lists and tribal knowledge about floor layout. Modern WMS runs
                      on rugged scanners and phones, enforcing scan-at-step workflows so inventory records match physical
                      reality. That matters when missed picks delay technician jobs or retail shelves the same morning.
                    </p>
                    <p>
                      WMS is adjacent to--not a substitute for--{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        field service software
                      </Link>
                      . Compare financial inventory in{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>{" "}
                      and network planning in{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>
                        WMS vs SCM explained
                      </Link>
                      .
                    </p>
                    <p>
                      Enterprise buyers evaluating SAP or Oracle should read{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>
                        SAP vs Oracle WMS
                      </Link>
                      . Service operators stocking vans should still prioritize{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      for dispatch and job billing.
                    </p>
                  </div>
                </section>

                <section id="capabilities" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From inbound dock to outbound carrier.">Core WMS Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Typical modules span receiving and ASN validation, putaway rules, inventory by location, cycle
                      counting, replenishment from reserve to active pick faces, picking (discrete, batch, wave, zone),
                      packing and cartonization, shipping label generation, and yard management for appointment scheduling.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Directed tasks</strong> -- system assigns the next move instead of operator choice.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scan validation</strong> -- wrong bin or SKU blocked at scan time.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Slotting optimization</strong> -- fast movers closer to pack stations.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Labor reporting and productivity standards help managers justify automation or staffing changes--
                      separate from GL reporting owned by ERP.
                    </p>
                  </div>
                </section>

                <section id="who-adopts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Volume, SKU count, and accuracy pressure.">Who Adopts WMS Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      E-commerce fulfillment, automotive parts distributors, appliance spare-parts networks, and 3PLs
                      are classic WMS users. A HVAC dealer with one counter stockroom may never need full WMS; a regional
                      hub shipping hundreds of lines daily to branch vans usually will.
                    </p>
                    <p>
                      Adoption triggers include pick error rates that generate callbacks for{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service
                      </Link>{" "}
                      crews, inability to scale seasonal volume without overtime, and audit failures on inventory
                      counts despite balanced ERP ledgers.
                    </p>
                    <p>
                      Cloud WMS lowered entry cost for mid-market operators; on-premise remains common in highly
                      customized facilities with material handling automation.
                    </p>
                  </div>
                </section>

                <section id="integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="ERP, SCM, TMS, and FSM touchpoints.">How WMS Fits Your Software Stack</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP remains item master and financial system of record. WMS executes physical transactions and posts
                      confirmations. SCM and TMS layers feed inbound expectations and outbound carrier selection; WMS
                      validates what actually shipped.
                    </p>
                    <p>
                      Field service connection: when a job reserves or consumes a part, FSM should reflect warehouse
                      availability fed by WMS--not a stale ERP aggregate. See{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs FSM
                      </Link>{" "}
                      for operational vs financial ownership.
                    </p>
                    <p>
                      Integration quality beats module checklists. Pilot receiving and picking with real SKUs before
                      signing multi-year WMS contracts.
                    </p>
                  </div>
                </section>

                <section id="selection" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fit by facility type and IT stack.">Choosing and Implementing WMS</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Match WMS depth to facility complexity: single-building manual picks need lighter tools than
                      automated storage and retrieval. Require vendor references in your industry--parts distribution
                      differs from grocery cold chain.
                    </p>
                    <p>
                      Implementation succeeds when floor supervisors co-design workflows, not when IT configures menus
                      alone. Label standards, bin naming, and exception codes should be agreed before go-live.
                    </p>
                    <p>
                      Service businesses should loop dispatch leads into UAT so morning pick waves align with truck
                      departure--similar discipline to{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch capacity planning
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Warehouse management basics.">FAQs</SectionTitle>
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
    title: "What Is WMS Software? | BeltStack Guide",
    description:
      "Learn what warehouse management system (WMS) software is, core capabilities, who uses it, and how WMS integrates with ERP, SCM, and field service operations.",
    keywords: [
      "wms software",
      "warehouse management system",
      "wms capabilities",
      "inventory bin management",
      "warehouse picking software",
      "parts distribution",
    ],
  };
}
