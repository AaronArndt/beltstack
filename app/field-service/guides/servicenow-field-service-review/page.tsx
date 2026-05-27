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
    q: "Is ServiceNow Field Service Management a CRM replacement?",
    a: "No. ServiceNow FSM extends the Now Platform's IT service and workflow engine into physical field work. Customer-facing sales pipelines and marketing automation still belong in CRM unless you build custom CSM apps on ServiceNow. Most enterprises pair ServiceNow FSM with Salesforce or Dynamics for commercial customer records.",
  },
  {
    q: "What industries commonly deploy ServiceNow for field service?",
    a: "Telecommunications, utilities, healthcare systems, and large facilities organizations with complex SLAs and internal service catalogs. Teams already running ITSM, HR, and security workflows on ServiceNow add FSM to unify work assignment across desk and field roles.",
  },
  {
    q: "How does ServiceNow FSM compare to ServiceTitan or Jobber?",
    a: "Different buyer entirely. ServiceNow targets enterprise platform consolidation with six-figure implementations. ServiceTitan and Jobber target trade contractors with per-tech pricing and dispatch boards tuned to residential and commercial service revenue models.",
  },
  {
    q: "Does ServiceNow include mobile apps for technicians?",
    a: "Yes. Mobile Agent and field workflows support offline-capable task execution, though UX reflects enterprise ITSM patterns rather than trade-specific estimate and invoice flows. Technicians accustomed to consumer-grade FSM apps may need training and simplified form design.",
  },
  {
    q: "When should IT choose ServiceNow over Dynamics or Salesforce Field Service?",
    a: "When ServiceNow is already the system of record for incidents, change, and employee workflows—and leadership wants one orchestration layer for field tasks tied to CMDB assets. Choose CRM-native FSM when sales and service cases drive scheduling and CRM teams own the roadmap.",
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

const PAGE_HREF = "/field-service/guides/servicenow-field-service-review";

export default function ServicenowFieldServiceReviewPage() {
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
                      ServiceNow Field Service Review
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    ServiceNow Field Service Review
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    An educational review of ServiceNow Field Service Management: platform-native workflows,
                    enterprise ITSM heritage, strengths for complex SLAs, and why trade contractors look elsewhere.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ServiceNow Field Service Management (FSM) schedules and executes work for technicians in the
                      field using the same Now Platform that powers IT service management, HR cases, and security
                      workflows. It is not a CRM add-on and not a per-truck tool for local HVAC companies—it is
                      enterprise orchestration for organizations that already treat ServiceNow as operational backbone.
                    </p>
                    <p>
                      Buyers evaluating ServiceNow FSM usually have thousands of employees, complex asset registers,
                      and governance requirements that dwarf dispatch speed. Field tasks tie to configuration items,
                      locations, and SLA policies—not just customer job records and invoice lines.
                    </p>
                    <p>
                      Clarify platform category in{" "}
                      <Link href="/field-service/guides/is-servicenow-a-crm-or-erp" className={linkGreen}>
                        is ServiceNow a CRM or ERP
                      </Link>
                      . Compare scale expectations in{" "}
                      <Link href="/field-service/guides/enterprise-vs-smb-field-service-software" className={linkGreen}>
                        enterprise vs SMB field service software
                      </Link>{" "}
                      and finance boundaries in{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>
                      .
                    </p>
                    <p>
                      If ServiceNow is not already your platform standard, compare CRM-native alternatives in{" "}
                      <Link href="/field-service/guides/salesforce-field-service-review" className={linkGreen}>
                        Salesforce Field Service review
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Microsoft Dynamics Field Service review
                      </Link>{" "}
                      before assuming ServiceNow FSM is the default enterprise choice.
                    </p>
                  </div>
                </section>

                <section id="platform-model" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Workflows, CMDB, and the Now Platform.">How ServiceNow FSM Fits the Platform</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field tasks originate from incidents, work orders, or planned maintenance records on the Now
                      Platform. Dispatchers assign agents with skills, territories, and calendar availability using
                      the same assignment engine IT uses for ticket routing. Asset and location data often flows from
                      CMDB records rather than lightweight customer site objects.
                    </p>
                    <p>
                      Integration with ITSM, HR, and security modules means a field visit can be triggered by
                      infrastructure alerts, facility requests, or employee onboarding tasks—not only customer service
                      cases. That breadth appeals to internal shared-services organizations and telco field forces.
                    </p>
                    <p>
                      Customization uses ServiceNow Studio, Flow Designer, and scoped applications. Power users can
                      extend forms and approvals without traditional code, but governance and upgrade paths require
                      platform expertise most SMBs lack.
                    </p>
                  </div>
                </section>

                <section id="strengths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities enterprise buyers prioritize.">Strengths and Differentiators</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SLA-driven scheduling, escalation paths, and audit trails suit regulated industries and
                      utilities where missed appointments carry contractual penalties. Unified reporting across desk
                      and field work gives COOs one operational dashboard when adoption is real—not aspirational.
                    </p>
                    <p>
                      Vendor management, contractor dispatch, and multi-party work orders support scenarios where
                      internal employees and external partners share the same task queue. Telecommunications rollouts
                      and multi-site healthcare deployments commonly leverage these patterns.
                    </p>
                    <p>
                      Mobile execution supports checklists, knowledge articles, parts consumption, and proof-of-work
                      capture. When paired with ServiceNow Asset Management, field outcomes update asset health
                      records visible to reliability teams—not only billing clerks.
                    </p>
                  </div>
                </section>

                <section id="limitations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why trade contractors rarely select ServiceNow.">Limitations for External Service Revenue</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Quote-to-cash for billable field visits is not ServiceNow&apos;s native center of gravity. Invoicing,
                      tax, and payment collection usually hand off to ERP or billing systems with integration projects
                      attached. Residential contractors needing same-day estimates and card-on-file payments will
                      find vertical FSM far closer to out of box.
                    </p>
                    <p>
                      Implementation timelines and partner costs mirror other ServiceNow modules—measured in quarters,
                      not weeks. Licensing targets enterprise user counts; per-technician math rarely favors small
                      crews even before services fees.
                    </p>
                    <p>
                      Dispatcher UX optimizes for complex assignment rules, not high-volume same-day job boards.
                      Benchmark against{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      finalists if external customer revenue and truck utilization drive your KPIs.
                    </p>
                  </div>
                </section>

                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Go/no-go criteria for platform buyers.">How to Evaluate ServiceNow Field Service</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Proceed when ServiceNow is already deployed for ITSM or CSM at scale, when field work is a
                      natural extension of existing workflows, and when leadership funds a platform team—not a
                      one-off dispatch purchase. Pause when your primary need is external customer billing and
                      marketing for a trade business.
                    </p>
                    <p>
                      Run a scoped pilot: one region, one work order type, real CMDB assets, and mobile users on
                      production devices. Measure task completion time, dispatcher override frequency, and integration
                      latency to ERP billing. Compare pilot results to{" "}
                      <Link href="/field-service/guides/salesforce-competitors-for-field-service" className={linkGreen}>
                        Salesforce field service alternatives
                      </Link>{" "}
                      if CRM teams co-own the decision.
                    </p>
                    <p>
                      Build TCO including platform licenses, implementation partner SOWs, annual upgrades, and internal
                      developer capacity. ServiceNow FSM wins when it removes duplicate systems—not when it becomes a
                      fourth silo next to CRM, ERP, and vertical FSM.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Platform fit, mobile, and CRM boundaries.">FAQs</SectionTitle>
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
    title: "ServiceNow Field Service Review | BeltStack Guide",
    description:
      "Educational review of ServiceNow Field Service Management: Now Platform workflows, enterprise SLA strengths, billing gaps, and when IT-led teams choose it over CRM-native FSM.",
    keywords: [
      "servicenow field service review",
      "servicenow field service management",
      "servicenow fsm",
      "servicenow vs salesforce field service",
      "enterprise field service platform",
      "servicenow mobile agent field",
    ],
  };
}
