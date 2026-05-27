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
    q: "How do businesses manage field technicians effectively?",
    a: "They align scheduling, clear job standards, mobile workflows, and performance feedback in one system. The office sets expectations; technicians execute with apps that capture status, photos, and time. Regular reviews close the loop on quality and utilization without micromanaging every stop.",
  },
  {
    q: "What tools do field managers use daily?",
    a: "Dispatch boards, work order records, technician mobile apps, and simple KPI dashboards. Managers watch on-time starts, jobs per day, and callback rates rather than chasing texts for every update. The goal is visibility without constant phone tag.",
  },
  {
    q: "How important are mobile apps for managing techs?",
    a: "Critical. Without mobile adoption, office data and field reality diverge within days. Apps should make status updates, documentation, and customer signatures faster than skipping the system—otherwise crews route around the software.",
  },
  {
    q: "Should technician management include GPS tracking?",
    a: "Location visibility helps dispatch and ETA communication, but policies should be transparent. Many teams use job-status timestamps first and add GPS where trust, compliance, or customer ETA accuracy require it.",
  },
  {
    q: "When do businesses outgrow informal management?",
    a: "When missed appointments, inconsistent documentation, or billing delays become routine. That is usually the signal to standardize workflows in FSM software instead of group texts and paper forms—see when businesses outgrow spreadsheets for field service.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for contractors",
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

const PAGE_HREF = "/field-service/guides/how-businesses-manage-field-technicians";

export default function HowBusinessesManageFieldTechniciansPage() {
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
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How Businesses Manage Field Technicians
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Manage Field Technicians
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how service companies coordinate technicians with scheduling, mobile workflows, communication
                    standards, and performance visibility.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Managing field technicians is part leadership, part systems design. You need clear job
                      expectations, tools technicians will actually use, and feedback loops that improve quality without
                      micromanaging every stop. Software does not replace coaching—but it makes coaching fair because
                      everyone sees the same job record.
                    </p>
                    <p>
                      Effective management sits on top of{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        field service management (FSM)
                      </Link>
                      : scheduling, dispatch, mobile execution, and billing on one thread. When those pieces fragment
                      across texts and spreadsheets, managers spend the day reconciling reality instead of improving
                      it.
                    </p>
                    <p>
                      Mobile execution is the foundation—see{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      . Scheduling and dispatch set the day in{" "}
                      <Link href="/field-service/guides/how-field-service-teams-schedule-technicians" className={linkGreen}>
                        how field service teams schedule technicians
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      .
                    </p>
                    <p>
                      Compare FSM options on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      when informal coordination stops scaling—pilot with one crew before rolling standards
                      company-wide.
                    </p>
                  </div>
                </section>

                <section id="operating-rhythm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Daily habits that keep office and field aligned.">
                    The Field Management Operating Rhythm
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Strong teams run a short morning huddle: capacity check, priority jobs, and parts or skills
                      constraints. Dispatchers then execute on a live board while technicians update job status from
                      mobile.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Morning capacity review</strong> — confirm trucks, skills, and
                        parts for high-priority work.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Publish the day</strong> — schedules and routes land on
                        technician apps with clear service windows.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Live dispatch adjustments</strong> — delays and add-ons
                        reassigned on the board without losing job history.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">End-of-day review</strong> — completions, callbacks, and
                        documentation gaps become coaching topics, not surprises.
                      </li>
                    </ol>
                    <p>
                      That rhythm turns software data into fair feedback instead of blame after a customer complaint.
                      Customer communication standards tie to{" "}
                      <Link
                        href="/field-service/guides/how-field-service-software-improves-customer-communication"
                        className={linkGreen}
                      >
                        how field service software improves customer communication
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="mobile-standards" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Job standards technicians can follow between appointments.">
                    Mobile Workflows and Job Standards
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define the minimum viable job record—what must be true before a tech leaves site. Standards should
                      be faster than workarounds:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Status transitions</strong> — en route, on site, complete—
                          visible to customers and dispatch for ETA accuracy.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Required checklists</strong> — safety, install quality, or
                          warranty terms by job type.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Photos and signatures</strong> — attached to the work order
                          for disputes, renewals, and upsell proof.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Labor and parts on the job</strong> — so invoicing pulls
                          actuals instead of guesswork back at the office.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Adoption beats feature count. If updating a job takes more than a minute, crews will route around
                      the system. Work orders anchor the standard—see{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        how service businesses manage work orders
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software" className={linkGreen}>
                        how estimates and invoicing work in FSM software
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="performance-visibility" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Metrics and communication that improve technician performance.">
                    Performance and Communication
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Track a small set of metrics managers can act on—not a dashboard nobody opens:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">On-time arrival rate</strong> — scheduling and routing quality
                          show up here first.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Revenue or billable hours per tech day</strong> — utilization
                          without ignoring drive time.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Callback percentage</strong> — quality signal paired with
                          ride-alongs or job audits.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Documentation completion</strong> — photos, signatures, and
                          closed work orders before end of day.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Pair numbers with specific feedback so reviews feel fair. For location and time accountability,
                      read{" "}
                      <Link href="/field-service/guides/how-businesses-track-field-employees" className={linkGreen}>
                        how businesses track field employees
                      </Link>
                      . When informal tools break, see{" "}
                      <Link
                        href="/field-service/guides/when-businesses-outgrow-spreadsheets-for-field-service"
                        className={linkGreen}
                      >
                        when businesses outgrow spreadsheets for field service
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="evaluate-management" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choosing FSM that technicians and managers will both use.">
                    How to Evaluate Technician Management in FSM
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run trials with one crew for a full week: morning publish, mid-day reassignment, and end-of-day
                      closeout. Ask whether managers see live status without calling techs, and whether completed jobs
                      flow to invoicing without re-entry.
                    </p>
                    <p>
                      If sales and operations use different stacks, clarify handoffs with{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      and{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM software
                      </Link>
                      . Use{" "}
                      <Link href="/field-service/guides/what-features-to-look-for-in-field-service-software" className={linkGreen}>
                        what features to look for in field service software
                      </Link>{" "}
                      with{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      during selection.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Field technician management FAQs.">FAQs</SectionTitle>
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
    title: "How Businesses Manage Field Technicians | BeltStack Guide",
    description:
      "Learn how businesses manage field technicians with daily operating rhythms, mobile job standards, performance metrics, and FSM software evaluation.",
    keywords: [
      "manage field technicians",
      "field technician management",
      "field service team management",
      "technician mobile apps",
      "field service KPIs",
      "2026",
    ],
  };
}
