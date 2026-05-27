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
    q: "What does CMMS software do that FSM does not?",
    a: "CMMS (computerized maintenance management system) software centers on asset registers, preventive maintenance schedules, spare parts inventory, and work requests for equipment you own or maintain under contract at fixed sites. FSM optimizes customer-facing visits: dispatch, route planning, estimates, and invoices tied to billable service calls.",
  },
  {
    q: "Can FSM replace CMMS for facility maintenance teams?",
    a: "Sometimes for small teams maintaining a limited asset list at customer sites, but not for complex plants with BOMs, meter-based PM triggers, and storeroom management. FSM wins on mobile technician UX and customer billing; CMMS wins on asset lifecycle depth.",
  },
  {
    q: "Do HVAC and plumbing companies need CMMS or FSM?",
    a: "Most residential and commercial service contractors need FSM first--scheduling, dispatch, and invoicing for jobs at customer locations. CMMS enters when you also operate depots, maintain owned fleets or facilities, or run large preventive programs on installed base equipment.",
  },
  {
    q: "How should CMMS and FSM integrate?",
    a: "Share asset IDs and completed work order outcomes, not every in-progress status. A PM work order closed in CMMS should update service history visible to FSM dispatchers when the next customer call arrives. Avoid dual entry of labor hours and parts on the same visit.",
  },
  {
    q: "Which vendors blur the CMMS vs FSM line?",
    a: "Enterprise platforms often sell both modules under one brand. Evaluate whether the mobile app, dispatch board, and quote-to-cash flow match your revenue model--not just whether the brochure lists maintenance management.",
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

const PAGE_HREF = "/field-service/guides/cmms-vs-fsm-software";

export default function CmmsVsFsmSoftwarePage() {
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
                      CMMS vs FSM Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CMMS vs FSM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare computerized maintenance management with field service management: asset-centric PM
                    workflows versus customer dispatch, mobile execution, and service billing.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CMMS and FSM both create work orders and assign technicians, which is why buyers conflate them.
                      The split is intent: CMMS keeps owned or contracted assets reliable through preventive maintenance,
                      parts rooms, and reliability metrics. FSM runs a service business that dispatches crews to
                      customer sites, sells labor and parts, and collects payment.
                    </p>
                    <p>
                      A factory maintenance team living inside one plant thinks in asset hierarchies and PM calendars.
                      An HVAC company with twenty trucks thinks in job types, service territories, and same-day dispatch.
                      Same word--technician--different success measures.
                    </p>
                    <p>
                      For FSM fundamentals, start with{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what field service management includes
                      </Link>
                      . CMMS-heavy organizations adding customer billing often evaluate{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>{" "}
                      in the same project.
                    </p>
                    <p>
                      Shortlist FSM products on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and run side-by-side tests on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      using scenarios from your actual mix of break/fix calls and maintenance contracts.
                    </p>
                  </div>
                </section>

                <section id="cmms-focus" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Asset reliability and preventive programs.">What CMMS Is Built For</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CMMS platforms track equipment registers, failure codes, meter readings, and PM schedules triggered
                      by time or usage. Storeroom and spare-parts workflows matter as much as labor assignment.
                      Reporting emphasizes uptime, mean time between failures, and compliance audits--not revenue per
                      truck.
                    </p>
                    <p>
                      Users are often maintenance planners, reliability engineers, and site supervisors rather than
                      customer service reps. Work requests may originate from operators on the floor, not homeowners
                      booking online.
                    </p>
                    <p>
                      If your primary KPI is asset availability inside facilities you control, CMMS depth beats FSM
                      dispatch polish. Customer billing may still flow through ERP or a separate{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>{" "}
                      stack.
                    </p>
                  </div>
                </section>

                <section id="fsm-focus" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dispatch, mobile apps, and quote-to-cash.">What FSM Is Built For</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service software connects the office board to technician mobile apps: job details, forms,
                      photos, signatures, and invoice lines without re-keying. Scheduling weighs drive time, skills, and
                      customer promises--see{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>
                      .
                    </p>
                    <p>
                      CRM handoffs for new leads, membership renewals, and marketing sit adjacent but separate; read{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      for where sales ends and operations begins.
                    </p>
                    <p>
                      FSM is the right anchor when every completed visit should produce billable documentation and
                      visible customer history at the site level.
                    </p>
                  </div>
                </section>

                <section id="overlap" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where categories collide and confuse buyers.">Overlap and Boundary Risks</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Both systems create work orders, capture labor, and consume parts. Overlap becomes painful when
                      teams enter the same visit twice or run parallel PM programs--one in CMMS for the asset owner and
                      one in FSM for the external service contract.
                    </p>
                    <p>
                      Vendors marketing unified platforms may ship a thin mobile app on top of CMMS data models that
                      frustrate dispatchers. Test urgent job insertion, route changes, and estimate approval on a phone
                      before assuming one product covers both worlds.
                    </p>
                    <p>
                      Document which system owns the asset master, which owns the customer record, and which produces
                      the invoice of record. Ambiguity here drives the mistakes outlined in{" "}
                      <Link href="/field-service/guides/common-field-service-management-mistakes" className={linkGreen}>
                        common field service management mistakes
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="choose" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One system, two systems, or ERP in the middle.">How to Choose CMMS, FSM, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose FSM alone when you are a contractor billing for visits at customer locations and your
                      asset tracking needs fit on a job record. Choose CMMS alone when you run internal maintenance
                      with no external dispatch board requirements. Choose both when you maintain owned assets and
                      operate a billable field service arm--integrate outcomes, not duplicate workflows.
                    </p>
                    <p>
                      Mid-market service companies often pair FSM with ERP for finance while CMMS stays with facility
                      teams. Map handoffs before buying; see{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      for evaluation criteria that still apply when CMMS is in the mix.
                    </p>
                    <p>
                      Run trials with a break/fix scenario and a scheduled PM scenario in the same week. The right
                      architecture is the one your dispatchers and reliability planners will both update without
                      workarounds.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Maintenance vs customer service operations.">FAQs</SectionTitle>
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
    title: "CMMS vs FSM Software | BeltStack Guide",
    description:
      "Compare CMMS and field service management software: asset maintenance vs customer dispatch, overlap risks, and when service businesses need one or both.",
    keywords: [
      "cmms vs fsm",
      "cmms software",
      "field service management",
      "maintenance management software",
      "preventive maintenance",
      "service dispatch software",
    ],
  };
}
