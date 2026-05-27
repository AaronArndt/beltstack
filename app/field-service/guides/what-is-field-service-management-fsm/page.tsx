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

const PAGE_HREF = "/field-service/guides/what-is-field-service-management-fsm";

const FAQ_ITEMS = [
  {
    q: "What is field service management (FSM)?",
    a: "Field service management is the operational discipline of coordinating people, jobs, and assets that perform work at customer locations. It covers scheduling, dispatch, work execution, documentation, and billing—not just the software that supports those steps.",
  },
  {
    q: "How is FSM different from field service software?",
    a: "FSM describes the business process and management practice. Field service software is the technology category that automates FSM workflows. Teams often say “FSM platform” when they mean the software, but the management layer includes policies, roles, and metrics beyond any single tool.",
  },
  {
    q: "What are the main components of field service management?",
    a: "Core components include job intake, scheduling, dispatch, work orders, mobile field execution, customer and asset history, invoicing, and reporting. Mature operations also track utilization, first-time fix rates, and revenue per technician.",
  },
  {
    q: "Do small businesses need formal FSM?",
    a: "Even a two-person crew practices FSM informally when someone assigns jobs and tracks payment. Software becomes valuable when volume makes manual coordination error-prone. See our guide on field service software for small business for when to formalize the stack.",
  },
  {
    q: "How does FSM connect to scheduling and invoicing?",
    a: "Scheduling decides who goes where and when; dispatch adjusts plans in real time; invoicing closes the revenue loop after work is done. Strong FSM ties all three together so job data does not get retyped between systems.",
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

export default function WhatIsFieldServiceManagementFsmPage() {
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
                      What Is Field Service Management (FSM)?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Field Service Management (FSM)?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what field service management means, how it connects dispatch, technicians, work orders, and
                    customer operations—and how FSM software supports the full workflow.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service management (FSM) is how businesses coordinate work performed outside the office:
                      assigning technicians, executing jobs on site, documenting outcomes, and getting paid. It is the
                      operational backbone for HVAC crews, plumbers, electricians, landscapers, and any team that
                      dispatches people to customer locations instead of serving walk-in traffic.
                    </p>
                    <p>
                      FSM is broader than software. It includes how you intake jobs, plan capacity, communicate with
                      customers, and measure performance. Platforms like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>
                      , and{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>{" "}
                      automate FSM—but the discipline exists whether you use spreadsheets or an all-in-one system. For
                      the product category, see{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>
                      .
                    </p>
                    <p>
                      Modern FSM ties together scheduling, dispatch, work orders, mobile apps, and billing so the office
                      and the field share one source of truth. When those pieces are disconnected, you get double-booked
                      techs, lost notes, and slow cash collection—the problems outlined in our{" "}
                      <Link
                        href="/field-service/guides/common-problems-field-service-software-solves"
                        className={linkGreen}
                      >
                        common problems field service software solves
                      </Link>{" "}
                      guide.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      to see how tools map to FSM workflows, or explore the{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>{" "}
                      hubs when you need adjacent capabilities.
                    </p>
                  </div>
                </section>
                <section id="fsm-vs-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Process vs. product.">FSM as a Discipline vs. Field Service Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Think of FSM as the playbook: who schedules jobs, how dispatch handles same-day changes, what
                      technicians document on site, and when invoices go out. Field service software is the system that
                      encodes that playbook so data flows from booking to payment without retyping.
                    </p>
                    <p>
                      Marketing often uses “FSM” and “field service software” interchangeably. In evaluation, separate
                      the two: first define your workflows (see{" "}
                      <Link
                        href="/field-service/guides/what-does-field-service-management-include"
                        className={linkGreen}
                      >
                        what does field service management include
                      </Link>
                      ), then match vendors to those steps. Our{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>{" "}
                      guide walks through the typical platform flow from job intake to reporting.
                    </p>
                  </div>
                </section>
                <section id="core-pillars" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What mature FSM operations coordinate.">Core Pillars of Field Service Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most service businesses organize FSM around a handful of pillars. Software depth varies, but the
                      operational needs are consistent across trades.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scheduling</strong> — Plan who is available, match skills to
                          job type, and block time for travel and callbacks. See{" "}
                          <Link
                            href="/field-service/guides/how-technician-scheduling-software-works"
                            className={linkGreen}
                          >
                            how technician scheduling software works
                          </Link>{" "}
                          and the{" "}
                          <Link href="/scheduling" className={linkGreen}>
                            scheduling hub
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Dispatch</strong> — Adjust the day in real time when jobs
                          run long, customers cancel, or emergencies appear. See{" "}
                          <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                            how dispatching software works
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                            className={linkGreen}
                          >
                            dispatch and capacity planning
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Work orders</strong> — Track each job from booked through
                          complete with status, notes, and parts. See{" "}
                          <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                            how work order management works
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Mobile execution</strong> — Give technicians schedules,
                          forms, photos, and signatures in the field. See{" "}
                          <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                            how mobile field service apps work
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Billing and reporting</strong> — Turn completed work into
                          invoices and measure utilization, revenue per tech, and callback rates. The{" "}
                          <Link href="/invoicing" className={linkGreen}>
                            invoicing hub
                          </Link>{" "}
                          covers billing workflows in more depth.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="who-practices-fsm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Industries and team sizes.">Who Practices Field Service Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Any business that sends technicians to customer sites practices FSM at some level—from solo
                      operators juggling a shared calendar to multi-branch HVAC companies running dedicated dispatch
                      teams. Trade-specific workflows differ; see{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        field service software for HVAC
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/field-service-software-for-plumbing" className={linkGreen}>
                        field service software for plumbing
                      </Link>
                      , and{" "}
                      <Link
                        href="/field-service/guides/examples-of-field-service-businesses"
                        className={linkGreen}
                      >
                        examples of field service businesses
                      </Link>
                      .
                    </p>
                    <p>
                      For a breakdown of which industries adopt platforms earliest, see{" "}
                      <Link
                        href="/field-service/guides/what-businesses-use-field-service-software"
                        className={linkGreen}
                      >
                        what businesses use field service software
                      </Link>
                      . Small teams should read{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>{" "}
                      before committing to enterprise-grade complexity.
                    </p>
                  </div>
                </section>
                <section id="improving-fsm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From informal coordination to a repeatable system.">
                    How Teams Improve FSM Over Time
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most companies evolve FSM in stages: whiteboard and texts, then a shared calendar, then dedicated
                      field service software when job volume breaks manual processes. The goal is not the fanciest
                      platform—it is reliable handoffs between scheduling, dispatch, the field, and billing.
                    </p>
                    <p>
                      When you are ready to compare tools, use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      and run trials with real jobs so technicians and office staff validate the same workflows you
                      documented on paper.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Field service management basics.">FAQs</SectionTitle>
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
    title: "What Is Field Service Management (FSM)? | BeltStack Guide",
    description:
      "Learn what field service management (FSM) means, core pillars from scheduling to billing, and how FSM differs from field service software.",
  };
}
