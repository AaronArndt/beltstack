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
    q: "What are the must-have features in field service software?",
    a: "Most teams need scheduling and dispatch, work order tracking, technician mobile apps, customer history, and invoicing. Those five workflows usually drive daily operations and revenue collection; everything else should solve a problem you have this quarter.",
  },
  {
    q: "Do small teams need every advanced feature?",
    a: "No. Small teams should prioritize core workflows first and add advanced modules later. Overbuying can reduce adoption and create unnecessary setup work. Buy for the job volume and dispatch complexity you have now, not the five-truck fantasy.",
  },
  {
    q: "How important are mobile apps in FSM software?",
    a: "Mobile apps are critical because technicians complete jobs in the field. Without a strong app, office data and field execution quickly drift out of sync. Evaluate offline behavior, photo capture, and how few taps it takes to close a job.",
  },
  {
    q: "Should field service software include CRM capabilities?",
    a: "Basic CRM-style contact and history views are common, but most businesses still pair FSM with a dedicated CRM for pipeline and sales management. Clarify which system owns leads versus completed jobs before you duplicate customer records.",
  },
  {
    q: "How do you prioritize features during a software trial?",
    a: "List your top three operational failures—missed appointments, slow invoicing, lost job notes—and test whether the vendor fixes those in a live week. Run one emergency reassignment, one estimate-to-invoice job, and one recurring visit before you sign.",
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

const PAGE_HREF = "/field-service/guides/what-features-to-look-for-in-field-service-software";

export default function WhatFeaturesToLookForInFieldServiceSoftwarePage() {
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
                      What Features to Look for in Field Service Software
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Features to Look for in Field Service Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Use this checklist to prioritize the field service software features that improve dispatch speed,
                    technician productivity, and cash flow—without overbuying modules you will not use in year one.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Feature lists get long fast, but the most useful tools map directly to your day-to-day workflow. Start
                      with what breaks today—double bookings, paper invoices, techs ignoring the app—then evaluate software
                      against those operational gaps, not a generic checklist from a vendor deck.
                    </p>
                    <p>
                      Most field service platforms share a core spine: schedule and dispatch, work orders, mobile execution,
                      customer history, and quote-to-cash. Advanced modules—route optimization, marketing automation, deep
                      inventory—matter only when your current volume justifies the setup cost.
                    </p>
                    <p>
                      If you are still defining fundamentals, review{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what field service software is
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      .
                    </p>
                    <p>
                      You can compare options on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . When you are ready to buy, pair this checklist with{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="core-workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The workflows every serious FSM tool should support well.">
                    Core Workflow Features
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If a product struggles here, nothing else matters. These workflows touch every job from booking to
                      payment.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scheduling and dispatch board</strong> — drag-and-drop
                          assignment, skills or zones, and real-time status from mobile.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Work order lifecycle</strong> — clear statuses from created
                          through invoiced with notes and attachments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Field documentation</strong> — photos, checklists, signatures,
                          and parts or time on site.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Estimate-to-invoice flow</strong> — approved quotes become jobs
                          and invoices without duplicate entry.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Related deep dives:{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatching software
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        work order management
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling software
                      </Link>
                      , and{" "}
                      <Link
                        href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software"
                        className={linkGreen}
                      >
                        estimates and invoicing in FSM
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="mobile-and-team-adoption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that help field teams actually use the system.">
                    Mobile and Adoption Features
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technician adoption drives software ROI. Strong mobile UX, offline support, and simple job workflows
                      matter more than dashboards that only leadership uses. If techs revert to texts, your dispatch board
                      is always lying.
                    </p>
                    <p>
                      Prioritize tap-light interfaces, fast sync behavior, and clear status transitions so crews can update
                      jobs between appointments. See{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      . Customer communication features—ETA texts, on-my-way notifications—are in{" "}
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

                <section id="integration-and-reporting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Avoid isolated tools that create manual reconciliation work.">
                    Integration and Reporting Features
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Evaluate integrations with accounting, payments, and CRM systems early. Field service and front-office
                      teams should share clean customer and job data without constant exports. Confirm invoices, taxes, and
                      payments map correctly in{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>
                      .
                    </p>
                    <p>
                      Reporting should answer operational questions you already ask: utilization, average ticket, callback
                      rate, and revenue per tech. Compare overlap and boundaries in{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      and visit the{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM software
                      </Link>{" "}
                      hub if your sales process is maturing alongside operations. Recurring-heavy businesses should also
                      test{" "}
                      <Link
                        href="/field-service/guides/how-businesses-handle-recurring-service-appointments"
                        className={linkGreen}
                      >
                        recurring service appointment
                      </Link>{" "}
                      features.
                    </p>
                  </div>
                </section>

                <section id="evaluate-features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turning a feature list into a buying decision.">
                    How to Test Features During an FSM Trial
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run the trial on real volume, not an empty calendar. Inject a same-day emergency, a job that runs
                      long, and a recurring visit in the same week. Watch whether reassignment preserves notes, whether
                      mobile updates hit the dispatch board, and whether you can invoice without retyping field data.
                    </p>
                    <p>
                      Score each vendor against your top three pain points—not their longest feature matrix. Tier gates on
                      dispatch, approvals, or reporting are in{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>
                        field service software pricing
                      </Link>
                      . Problems that trigger adoption are in{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common buying and evaluation questions.">FAQs</SectionTitle>
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
    title: "What Features to Look for in Field Service Software | BeltStack Guide",
    description:
      "Learn which field service software features matter most: dispatch, work orders, mobile apps, integrations, reporting, and how to test them in a trial.",
    keywords: [
      "field service software features",
      "FSM feature checklist",
      "dispatch board",
      "technician mobile app",
      "estimate to invoice",
      "field service integrations",
    ],
  };
}
