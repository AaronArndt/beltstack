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
    q: "What WMS products do SAP and Oracle offer?",
    a: "SAP provides SAP Extended Warehouse Management (EWM) integrated with S/4HANA; Oracle offers Oracle Warehouse Management Cloud (WMS) as part of its supply chain suite. Both target enterprise distribution with deep ERP-native integration rather than standalone mid-market WMS only.",
  },
  {
    q: "Is SAP EWM or Oracle WMS better for field service parts depots?",
    a: "Either can work when you already run that vendor's ERP and need scan-validated picking for high-SKU parts hubs feeding technicians. Choose based on existing ERP footprint, integration maturity, and operator mobile UX in pilot picks--not brand alone.",
  },
  {
    q: "Can SAP or Oracle WMS run without their ERP?",
    a: "Technically possible with middleware, but most enterprises deploy them tightly coupled to SAP S/4HANA or Oracle Cloud ERP for item masters, costing, and financial posting. Best-of-breed WMS vendors sometimes integrate faster if ERP is third-party.",
  },
  {
    q: "How long do SAP vs Oracle WMS implementations take?",
    a: "Enterprise WMS programs often run many months to over a year depending on facility count, automation, and customization. Phased go-lives by building or process (receiving first, then picking) reduce risk compared with big-bang cutovers.",
  },
  {
    q: "Do small service businesses need SAP or Oracle WMS?",
    a: "Rarely. Single-location parts rooms and van-stock programs fit lighter inventory in FSM or mid-market tools until pick volume, SKU count, and accuracy SLAs justify enterprise WMS investment alongside full ERP.",
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

const PAGE_HREF = "/field-service/guides/sap-vs-oracle-wms";

export default function SapVsOracleWmsPage() {
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
                      SAP vs Oracle WMS
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    SAP vs Oracle WMS
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare SAP Extended Warehouse Management and Oracle Warehouse Management Cloud--integration models,
                    deployment paths, and fit for enterprise parts and distribution operations tied to field service.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SAP and Oracle both sell enterprise WMS modules designed to sit natively on their ERP stacks--SAP
                      EWM with S/4HANA, Oracle WMS Cloud alongside Oracle Cloud ERP. Buyers comparing them are usually
                      already committed to an ERP direction or running a dual-vendor evaluation at corporate IT level,
                      not a ten-truck contractor choosing dispatch software.
                    </p>
                    <p>
                      The meaningful question is not logo preference but whether native WMS integration, facility
                      automation support, and operator mobile UX match your warehouse profile--high-bay pallet operations,
                      e-commerce piece picking, or regional parts depots staging technician loads each morning.
                    </p>
                    <p>
                      WMS fundamentals:{" "}
                      <Link href="/field-service/guides/what-is-wms-software" className={linkGreen}>
                        what is WMS software
                      </Link>
                      . ERP boundary:{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>
                      . Supply chain layer:{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>
                        WMS vs SCM explained
                      </Link>
                      .
                    </p>
                    <p>
                      Field technicians still run on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        field service software
                      </Link>
                      ; WMS ensures the parts they promise actually leave the building accurately. See{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs FSM
                      </Link>{" "}
                      for operational handoffs.
                    </p>
                  </div>
                </section>

                <section id="sap-ewm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Native warehouse execution on S/4HANA.">SAP Extended Warehouse Management (EWM)</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SAP EWM provides deep warehouse processes--advanced slotting, yard management, wave picking,
                      cross-docking, value-added services, and integration with SAP Transportation Management and
                      Production. It shares master data and posting logic with S/4HANA inventory and finance modules,
                      reducing reconciliation between floor and ledger.
                    </p>
                    <p>
                      SAP-heavy organizations with automated storage and retrieval, serial tracking, and complex
                      cross-dock flows often standardize on EWM rather than bolting on a third-party WMS. Customization
                      uses SAP&apos;s ecosystem; upgrades require governance familiar to existing SAP shops.
                    </p>
                    <p>
                      Operator experience varies by implementation partner and RF device strategy--mobile validation in
                      pilot receiving and picking beats benchmark claims on paper.
                    </p>
                  </div>
                </section>

                <section id="oracle-wms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Cloud WMS in Oracle's supply chain suite.">Oracle Warehouse Management Cloud</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Oracle WMS Cloud targets multi-facility distribution with cloud deployment, configurability for
                      picking strategies, labor management, and integration to Oracle Cloud ERP and Oracle SCM Cloud.
                      Oracle pitches faster time-to-value for new facilities compared with large on-premise SAP programs--
                      outcomes still depend on data migration and process discipline.
                    </p>
                    <p>
                      Organizations already on Oracle Financials and Oracle Inventory often choose WMS Cloud to keep
                      support contracts unified. Third-party ERP integration is feasible but reduces the native
                      advantage that justifies enterprise licensing.
                    </p>
                    <p>
                      Compare Oracle&apos;s broader stack classification in{" "}
                      <Link href="/field-service/guides/is-servicenow-a-crm-or-erp" className={linkGreen}>
                        enterprise platform guides
                      </Link>{" "}
                      when IT evaluates multiple Oracle modules simultaneously.
                    </p>
                  </div>
                </section>

                <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Decision factors beyond feature matrices.">SAP vs Oracle WMS: Practical Comparison</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">ERP alignment</strong> -- default to the WMS native to your ERP unless a third-party WMS proves materially better in pilot.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Automation fit</strong> -- validate MHE integrations (conveyors, AS/RS) required in your buildings.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Multi-site rollout</strong> -- template configurations across depots serving different field service territories.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Total cost of ownership</strong> -- licenses, SI fees, hardware, and ongoing upgrade tax across a five-year horizon.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Neither replaces{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch software
                      </Link>{" "}
                      for customer appointments; both should feed accurate ATP to FSM parts reservations.
                    </p>
                  </div>
                </section>

                <section id="field-service-link" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Closing the loop to technician jobs.">Connecting Enterprise WMS to Field Service</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Parts depots exist to keep trucks productive. Morning pick waves should align with{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch capacity plans
                      </Link>
                      ; inventory adjustments from van returns should post back through ERP so WMS and FSM stay aligned.
                    </p>
                    <p>
                      Mid-market operators without SAP or Oracle ERP should not force-fit these WMS products--start with
                      FSM inventory and grow into WMS when{" "}
                      <Link href="/field-service/guides/what-is-scm-software" className={linkGreen}>
                        supply chain complexity
                      </Link>{" "}
                      demands it.
                    </p>
                    <p>
                      Evaluate technician-facing platforms on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      in parallel with warehouse pilots so customer promises and shelf truth improve together.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Enterprise WMS vendor questions.">FAQs</SectionTitle>
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
    title: "SAP vs Oracle WMS | BeltStack Guide",
    description:
      "SAP EWM vs Oracle WMS Cloud compared: ERP integration, deployment, enterprise fit, and connecting warehouse accuracy to field service parts operations.",
    keywords: [
      "sap vs oracle wms",
      "sap ewm",
      "oracle warehouse management cloud",
      "enterprise wms comparison",
      "warehouse erp integration",
      "parts distribution wms",
    ],
  };
}
