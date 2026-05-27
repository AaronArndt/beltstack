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
    q: "Should a service business run dispatch inside ERP?",
    a: "Rarely as the primary tool. ERP service modules can post financial transactions and manage contracts, but live dispatch boards, technician mobile UX, and route-aware scheduling are usually stronger in purpose-built FSM products. Many teams dispatch in FSM and sync completed jobs to ERP nightly or in real time.",
  },
  {
    q: "What does ERP handle that FSM typically does not?",
    a: "General ledger, multi-entity consolidation, procurement at scale, inventory valuation methods, revenue recognition rules, and company-wide HR/payroll integrations. FSM may touch invoicing, but ERP remains the system of financial record for most mid-market and enterprise operators.",
  },
  {
    q: "When is ERP alone enough for field operations?",
    a: "When field work is infrequent, highly standardized, and scheduled days in advance with little same-day change--some industrial B2B models fit. The moment you need dynamic dispatch, consumer ETAs, and photo-rich closeouts, dedicated FSM usually pays for itself.",
  },
  {
    q: "How do integrations between ERP and FSM usually work?",
    a: "Customers, items, and price lists sync from ERP to FSM; completed work orders return as invoices or service orders with labor and parts lines. Avoid syncing every dispatch status--sync outcomes and exceptions your finance team must audit.",
  },
  {
    q: "Does replacing ERP with FSM ever make sense?",
    a: "No for finance. FSM does not replace ERP. The decision is whether to add FSM for operations while keeping ERP for accounting, not whether one product substitutes for the other.",
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

const PAGE_HREF = "/field-service/guides/erp-vs-field-service-management-software";

export default function ErpVsFieldServiceManagementSoftwarePage() {
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
                      ERP vs Field Service Management Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    ERP vs Field Service Management Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Where enterprise resource planning ends and field service management begins--and how service
                    organizations combine ERP financial control with FSM dispatch and mobile execution.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP is the backbone for finance, inventory accounting, procurement, and company-wide master data.
                      Field service management software is the operational layer for scheduling technicians, running
                      dispatch boards, and closing jobs in the field. They meet at the service order and the invoice,
                      not at the live map on a dispatcher&apos;s screen.
                    </p>
                    <p>
                      Finance leaders often ask why operations cannot live entirely inside ERP. The friction is UX and
                      speed: ERP screens assume back-office clerks, not gloved technicians on a roof. FSM mobile apps,
                      drag-and-drop boards, and customer ETA workflows are the product; ERP posting is the aftermath.
                    </p>
                    <p>
                      Context for adjacent categories:{" "}
                      <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>
                        difference between ERP, CRM, and FSM
                      </Link>
                      , plus{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management
                      </Link>
                      . Warehouse-heavy service orgs may also read{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>
                      .
                    </p>
                    <p>
                      Evaluate FSM vendors on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      with ERP integration as a first-class requirement, not a phase-two wish. See{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>{" "}
                      for typical sync patterns.
                    </p>
                  </div>
                </section>

                <section id="erp-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Financial and enterprise control plane.">What ERP Owns in Service Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP maintains chart of accounts, tax rules, vendor payments, inventory valuation, and consolidated
                      reporting across branches. Service modules inside ERP may manage contracts, project billing, and
                      spare-parts costing--valuable for audit trails and margin analysis by line of business.
                    </p>
                    <p>
                      ERP also enforces approval workflows finance cares about: credit holds, revenue recognition on
                      multi-month agreements, and intercompany billing. Those controls should not be replicated
                      casually in FSM; they should receive completed transactions from the field layer.
                    </p>
                    <p>
                      If your pain is late financial close or inventory accuracy in the warehouse, fix ERP and WMS
                      first. If the pain is missed appointments and slow invoicing, FSM is the lever--see{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="fsm-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dispatch board to technician phone.">What FSM Owns in Service Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FSM runs the daily rhythm: book jobs, assign techs, adjust routes, capture checklists and photos,
                      collect signatures, and trigger invoices or payment links. Dispatchers live here; technicians live
                      here. Speed and clarity beat journal-entry precision during the visit.
                    </p>
                    <p>
                      Good FSM preserves customer and site history--prior jobs, equipment notes, membership status--so
                      the third visit is not a blank slate. That operational memory rarely belongs in ERP screens used
                      once a month by accounting.
                    </p>
                    <p>
                      Deep dives:{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      , and{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling
                      </Link>{" "}
                      tools that lack full FSM depth.
                    </p>
                  </div>
                </section>

                <section id="integration" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Sync outcomes, not every click.">Integrating ERP and FSM Without Duplicate Entry</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The durable pattern: master data flows ERP to FSM (customers, items, price books); operational
                      completion flows FSM to ERP (service orders, invoices, inventory issues). Real-time is ideal for
                      high-volume shops; nightly batches work when finance tolerates one-day lag.
                    </p>
                    <p>
                      Define error handling for partial syncs--a job closed in the field but rejected by ERP credit rules
                      should surface to dispatch, not disappear. Test returns, warranty jobs, and membership credits
                      during implementation, not after go-live.
                    </p>
                    <p>
                      Compare integration depth on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      and ask each vendor for reference customers on your ERP stack.
                    </p>
                  </div>
                </section>

                <section id="decision" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Module expansion vs best-of-breed FSM.">Decision Guide for Service Leadership</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Extend ERP service modules when field complexity is low, IT prefers one vendor, and mobile UX is
                      acceptable in pilot tests. Add dedicated FSM when dispatch volatility, consumer communication,
                      and technician adoption are strategic--most multi-truck contractors land here.
                    </p>
                    <p>
                      Small businesses without ERP often run FSM plus lightweight accounting or{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>{" "}
                      until revenue justifies full ERP. Read{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      before committing to ERP-only field workflows you will fight for years.
                    </p>
                    <p>
                      Score options on dispatcher trial time, technician closeout rates, and invoice lag--not feature
                      checklists copied from ERP RFP templates.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Finance vs operations ownership.">FAQs</SectionTitle>
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
    title: "ERP vs Field Service Management Software | BeltStack Guide",
    description:
      "ERP vs FSM for service businesses: financial control vs dispatch and mobile execution, integration patterns, and when to use both systems.",
    keywords: [
      "erp vs fsm",
      "field service erp integration",
      "enterprise resource planning",
      "field service management software",
      "service order sync",
      "dispatch and accounting",
    ],
  };
}
