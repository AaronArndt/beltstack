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
    q: "Which comes first for a new service business: CRM, ERP, or FSM?",
    a: "Most service businesses should implement FSM first to schedule jobs, dispatch techs, and invoice reliably. Add CRM when lead tracking and sales pipeline discipline matter. ERP enters when multi-entity finance, inventory valuation, and procurement complexity exceed what FSM plus accounting can handle.",
  },
  {
    q: "Can Salesforce or HubSpot replace FSM?",
    a: "CRMs excel at leads, opportunities, and marketing automation but lack technician-first mobile workflows, dispatch boards, and job-based invoicing. Some integrations exist, but operations teams usually need dedicated field service software alongside CRM.",
  },
  {
    q: "Does ERP include CRM and FSM modules?",
    a: "Many ERP suites offer sales/CRM and service modules, but depth varies. Evaluate mobile UX, dispatch speed, and quote-to-cash for your trade before assuming one ERP module covers all three roles adequately.",
  },
  {
    q: "Where does customer data live when using ERP, CRM, and FSM?",
    a: "Pick a golden record strategy: often CRM owns prospect and account relationship data, FSM owns site history and work orders, ERP owns financial customer master and AR balances. Sync keys and ownership rules prevent three conflicting phone numbers for the same client.",
  },
  {
    q: "How do these systems relate to WMS and SCM?",
    a: "WMS and SCM sit on the supply side--warehouse execution and network planning. ERP financializes inventory; FSM consumes parts on jobs. See our WMS vs ERP and WMS vs SCM guides for that layer separate from CRM pipeline work.",
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

const PAGE_HREF = "/field-service/guides/difference-between-erp-crm-and-fsm";

export default function DifferenceBetweenErpCrmAndFsmPage() {
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
                      Difference Between ERP, CRM, and FSM
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Difference Between ERP, CRM, and FSM
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    ERP, CRM, and field service management solve different problems--finance, revenue pipeline, and
                    dispatched work--and how service businesses combine them without duplicate data entry.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Enterprise software acronyms blur together in RFPs. ERP (enterprise resource planning) is the
                      financial and operational backbone. CRM (customer relationship management) is the revenue engine
                      for leads and relationships. FSM (field service management) is the execution layer for dispatched
                      technicians at customer locations. Same customer name on screen--three different jobs to be done.
                    </p>
                    <p>
                      Service businesses feel the collision most painfully: sales lives in CRM, dispatch lives in FSM,
                      accounting lives in ERP, and nobody trusts the customer record. Clarity starts with ownership by
                      workflow stage, not with buying one mega-suite and hoping modules align.
                    </p>
                    <p>
                      Pairwise depth:{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>
                      , and{" "}
                      <Link href="/field-service/guides/can-crm-software-replace-fsm-software" className={linkGreen}>
                        can CRM software replace FSM software
                      </Link>
                      .
                    </p>
                    <p>
                      Shortlist FSM on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>
                      , explore CRM on{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM
                      </Link>
                      , and plan integrations before go-live--see{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="erp" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Finance, inventory accounting, and enterprise control.">What ERP Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP unifies general ledger, accounts payable and receivable, procurement, inventory valuation,
                      payroll interfaces, and multi-entity reporting. It answers whether the business is profitable,
                      compliant, and funded--not whether truck three will arrive by 2 p.m.
                    </p>
                    <p>
                      Service modules inside ERP can post contract revenue and service orders, but mobile dispatch UX is
                      often weaker than purpose-built FSM. Treat ERP as system of financial record; push completed field
                      outcomes into it rather than running the board inside GL screens.
                    </p>
                    <p>
                      Warehouse-heavy operators add WMS adjacent to ERP--{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        WMS vs ERP explained
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Leads, pipeline, and relationship history.">What CRM Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM tracks prospects, opportunities, activities, marketing campaigns, and account teams. It
                      optimizes conversion from first touch to signed agreement. Pipelines, lead scoring, and email
                      sequences live here--not truck routes or permit photos from a job site.
                    </p>
                    <p>
                      When a deal closes, CRM should hand off structured customer data to FSM for scheduling and
                      execution. Without that handoff, sales celebrates revenue operations cannot deliver. Read{" "}
                      <Link href="/field-service/guides/is-field-service-part-of-crm" className={linkGreen}>
                        is field service part of CRM
                      </Link>{" "}
                      for how vendors bundle modules versus best-of-breed pairing.
                    </p>
                    <p>
                      Marketing-heavy home service brands often run CRM alongside{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling
                      </Link>{" "}
                      tools until operations complexity demands full FSM.
                    </p>
                  </div>
                </section>

                <section id="fsm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dispatch, mobile execution, and job billing.">What FSM Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FSM schedules technicians, runs live dispatch boards, manages work orders, captures field
                      documentation, and produces invoices tied to visits. Technicians interact through mobile apps;
                      dispatchers through boards tuned for same-day change.
                    </p>
                    <p>
                      FSM owns site-level service history--equipment installed, prior callbacks, membership status.
                      That history should inform CRM account teams and ERP billing, not be retyped in each system after
                      every job. Foundations:{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      .
                    </p>
                    <p>
                      Invoicing depth may live in FSM or sync to{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>{" "}
                      and ERP depending on tier and integration.
                    </p>
                  </div>
                </section>

                <section id="together" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reference architecture for service companies.">Using ERP, CRM, and FSM Together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A durable pattern: CRM wins opportunities and passes sold work to FSM; FSM completes jobs and
                      sends invoices or service orders to ERP; ERP posts revenue, inventory issues, and cash. Marketing
                      attribution stays in CRM; truck utilization stays in FSM; tax and consolidation stay in ERP.
                    </p>
                    <p>
                      Avoid mirroring every status change across three systems. Sync milestones--sold, scheduled,
                      complete, invoiced, paid--and master data keys. Exception queues beat batch reconciliation when
                      credit holds or partial completions occur.
                    </p>
                    <p>
                      Evaluate integration on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      and read{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      with your CRM and ERP shortlists in the same trial window.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Three acronyms, one customer journey.">FAQs</SectionTitle>
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
    title: "Difference Between ERP, CRM, and FSM | BeltStack Guide",
    description:
      "ERP vs CRM vs FSM explained: finance, sales pipeline, and field execution roles--plus how service businesses integrate all three without duplicate entry.",
    keywords: [
      "erp vs crm vs fsm",
      "field service management",
      "enterprise resource planning",
      "customer relationship management",
      "service business software stack",
      "crm fsm integration",
    ],
  };
}
