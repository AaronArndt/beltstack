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
    q: "Can CRM software fully replace field service management software?",
    a: "Rarely for teams that dispatch technicians daily. CRM excels at leads, pipeline, and account relationships, but most CRMs lack robust dispatch boards, technician mobile workflows, and service billing depth. Some all-in-one platforms blur the line, yet operational fit still matters more than a single product label.",
  },
  {
    q: "When might a CRM be enough without dedicated FSM?",
    a: "Very small teams with simple appointment calendars and minimal same-day dispatch may get by early on. Once skills matching, route changes, structured work orders, and field documentation become daily requirements, CRM gaps show up quickly—usually before headcount doubles.",
  },
  {
    q: "Do CRMs with field service modules count as FSM?",
    a: "They can for lighter service operations if scheduling, mobile apps, and job lifecycle tracking are strong. Evaluate those modules against real dispatch volume, not demo screens alone. Run a trial on a busy day with reassignment, mobile status updates, and invoice generation from the job.",
  },
  {
    q: "Should we run CRM and FSM together?",
    a: "Many growing service businesses do. CRM owns pipeline and account strategy while FSM owns scheduling, dispatch, and field execution. Integrate shared customer and job data to avoid duplicate entry, and define which system is authoritative for each record type.",
  },
  {
    q: "How do we decide which system to buy first?",
    a: "Start with whichever workflow is breaking today—sales follow-up or field execution. Add the second system when complexity crosses a clear threshold, such as multi-tech dispatch, structured sales stages, or recurring maintenance routes. Compare vendors on our best and compare pages with real operational scenarios.",
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

const PAGE_HREF = "/field-service/guides/can-crm-software-replace-fsm-software";

export default function CanCrmSoftwareReplaceFsmSoftwarePage() {
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
                      Can CRM Software Replace FSM Software?
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can CRM Software Replace FSM Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn when CRM can cover field operations, where dedicated field service management still wins, and
                    how to avoid buying the wrong system for dispatch-heavy teams.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM and field service management overlap on customer records, but they optimize for different jobs.
                      CRM helps you win and nurture accounts; FSM helps you schedule, dispatch, and complete work in the
                      field. Replacing one with the other usually fails when trucks roll daily and jobs change in real
                      time.
                    </p>
                    <p>
                      Some platforms market an all-in-one stack—pipeline plus scheduling plus mobile execution. Even
                      then, evaluate operational depth: a CRM with a thin calendar is not the same as a dispatch board
                      with skills, zones, and live reassignment. Labels matter less than whether your busiest Tuesday
                      actually works in the tool.
                    </p>
                    <p>
                      Start with the comparison in{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/is-field-service-part-of-crm" className={linkGreen}>
                        whether field service is part of CRM
                      </Link>
                      . For what a full FSM stack includes, see{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what field service management includes
                      </Link>
                      .
                    </p>
                    <p>
                      Browse{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM software
                      </Link>
                      ,{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>
                      , and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      once you know which workflow needs the stronger tool first—and trial with same-day volume, not an
                      empty demo calendar.
                    </p>
                  </div>
                </section>

                <section id="crm-strengths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where CRM is the right primary system.">What CRM Handles Well</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM systems excel at lead capture, pipeline stages, account ownership, and sales forecasting. They
                      give commercial teams a single view of who to call, what was promised, and where deals stand before
                      a job is ever scheduled.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Lead and opportunity tracking</strong> — source, stage, and
                          next-step discipline across reps.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Account and contact history</strong> — emails, notes, and
                          commercial relationships in one timeline.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Forecasting and reporting</strong> — pipeline weight, close
                          rates, and rep performance for leadership.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Marketing automation hooks</strong> — nurture sequences
                          before a lead becomes a booked job.
                        </span>
                      </li>
                    </ul>
                    <p>
                      If your bottleneck is follow-up and conversion—not daily truck routing—prioritize CRM depth first.
                      Mature sales teams often standardize stages and automations in{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM software
                      </Link>{" "}
                      before field operations software catches up.
                    </p>
                  </div>
                </section>

                <section id="fsm-gaps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational workflows CRM usually cannot own alone.">
                    Where CRM Falls Short for Field Service
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM calendars and lightweight job objects help early-stage service businesses. Dispatch-heavy
                      operations need execution tooling CRM modules rarely match end to end:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Live dispatch boards</strong> — skills, zones, map views,
                          and reassignment when jobs slip or emergencies arrive.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Technician mobile execution</strong> — checklists, photos,
                          signatures, offline queues, and status sync back to the office.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Work order lifecycle</strong> — scheduled through invoiced
                          without manual exports or duplicate customer records.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Service billing depth</strong> — estimates, deposits,
                          price books, and accounting sync tied to completed field work.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Those gaps are why dispatch-heavy teams evaluate FSM even when CRM is strong. See{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>
                      , and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>{" "}
                      for the operational side CRM rarely replaces.
                    </p>
                  </div>
                </section>

                <section id="dual-stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Running CRM and FSM without duplicate data entry.">
                    When Teams Run CRM and FSM Together
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A common mature pattern: CRM owns the opportunity until it is won; FSM owns the job from booking
                      through completion. Handoffs fail when nobody defines which system is authoritative for customer
                      identity, job status, and revenue recognition.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Win in CRM</strong> — opportunity closes; account and contact
                        details are complete.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Create or sync the job in FSM</strong> — scope, site address,
                        and promised service window carry over without retyping.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Execute in the field</strong> — scheduling, dispatch, and
                        mobile updates stay in FSM; see{" "}
                        <Link href="/field-service/guides/how-field-service-teams-schedule-technicians" className={linkGreen}>
                          how field service teams schedule technicians
                        </Link>
                        .
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Close the loop in CRM</strong> — optional for commercial
                        teams tracking expansion, renewals, or account health after the job.
                      </li>
                    </ol>
                    <p>
                      Integrations or native connectors matter. Ask vendors how conflicts resolve when a phone number or
                      address changes in both systems. For platform selection, use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      alongside your CRM evaluation.
                    </p>
                  </div>
                </section>

                <section id="decision-framework" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical way to choose CRM-only, FSM-only, or both.">
                    How to Decide CRM vs FSM
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List your top five daily workflows and mark whether they are sales-led or operations-led. If three
                      or more are dispatch, scheduling, technician execution, or route planning, CRM alone will feel like
                      forcing a sales tool to run a truck board.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">CRM-first signal</strong> — pipeline hygiene and conversion
                          are the constraint; field volume is low or appointment-only.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">FSM-first signal</strong> — same-day dispatch, skills
                          matching, or recurring routes drive daily firefighting.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Both signal</strong> — dedicated sales team plus multiple
                          trucks; define ownership before buying two overlapping suites.
                        </span>
                      </li>
                    </ul>
                    <p>
                      When you need FSM, compare vendors on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      with same-day volume during trials. If routing is a pain point, also read{" "}
                      <Link
                        href="/scheduling/guides/route-optimization-for-service-businesses"
                        className={linkGreen}
                      >
                        route optimization for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM vs FSM replacement questions.">FAQs</SectionTitle>
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
    title: "Can CRM Software Replace FSM Software? | BeltStack Guide",
    description:
      "Learn when CRM software can replace field service management tools, where FSM still wins for dispatch and mobile workflows, and how to run CRM plus FSM together.",
    keywords: [
      "CRM vs FSM",
      "can CRM replace field service software",
      "field service management software",
      "CRM field service module",
      "dispatch software",
      "2026",
    ],
  };
}
