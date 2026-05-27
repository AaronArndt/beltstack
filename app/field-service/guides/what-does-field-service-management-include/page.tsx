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
    q: "What does field service management include?",
    a: "Field service management (FSM) covers the full operational loop: scheduling and dispatching technicians, creating and tracking work orders, executing jobs in the field (often via mobile apps), communicating with customers, billing for completed work, and reporting on utilization and revenue. Software bundles these workflows; the discipline is broader than any single feature.",
  },
  {
    q: "Is field service management the same as field service software?",
    a: "FSM is the practice of running dispatched service operations. Field service software is the technology that supports it. Teams may use spreadsheets early on, but once job volume grows, dedicated FSM platforms replace manual coordination with structured workflows.",
  },
  {
    q: "What is the difference between scheduling and dispatch in FSM?",
    a: "Scheduling plans when work should happen—appointments, recurring maintenance, and technician availability. Dispatch assigns specific jobs to specific technicians in real time, often balancing skills, zones, and same-day demand. Most FSM tools include both; mature operations treat them as connected, not separate.",
  },
  {
    q: "Does FSM include invoicing and accounting?",
    a: "Most field service platforms include estimates, invoices, and payment collection. Accounting integration—syncing revenue, taxes, and receivables to QuickBooks or Xero—is a common next layer. FSM rarely replaces full accounting; it feeds clean job data into your books.",
  },
  {
    q: "Do I need CRM if I have field service management software?",
    a: "FSM focuses on job execution; CRM focuses on pipeline, marketing, and long-term customer relationships. Overlap exists on customer records and communication history. Many service businesses use both, with clear rules about which system owns leads versus active jobs. See our FSM vs CRM guide for how to split responsibilities.",
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

const PAGE_HREF = "/field-service/guides/what-does-field-service-management-include";

export default function WhatDoesFieldServiceManagementIncludePage() {
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
                      What Does Field Service Management Include?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Does Field Service Management Include?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Scheduling, dispatch, work orders, mobile execution, billing, and reporting—the operational areas
                    field service management (FSM) covers from first call to paid invoice.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service management is how businesses coordinate work that happens at customer locations—not
                      in a warehouse or on a retail floor. It spans everything from booking a service call to closing the
                      books on completed revenue. When people say &quot;FSM,&quot; they usually mean both the operational
                      discipline and the software category built to support it.
                    </p>
                    <p>
                      At a high level, FSM includes scheduling and dispatch, work order tracking, technician mobile
                      workflows, customer and equipment history, estimates and invoicing, and operational reporting.
                      No single tool does every edge case perfectly, but mature platforms connect these pieces so data
                      does not get retyped at every handoff.
                    </p>
                    <p>
                      For the software category overview, start with{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management (FSM)
                      </Link>
                      . For day-to-day execution, see{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      .
                    </p>
                    <p>
                      Compare platforms on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup—or use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      when you are ready to shortlist vendors.
                    </p>
                  </div>
                </section>
                <section id="scheduling-dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Planning work and assigning technicians.">
                    Scheduling and Dispatch
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling answers <em>when</em> work should happen: one-off repairs, recurring maintenance
                      agreements, and technician availability across the week. Dispatch answers <em>who</em> does the job
                      now—balancing skills, travel time, and same-day demand on a live board.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Calendar and route planning</strong> — recurring visits,
                          multi-day projects, and zone-based assignment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Dispatch boards</strong> — drag-and-drop reassignment when
                          jobs run long or emergencies appear.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Go deeper:{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      , and{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning for field service
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="work-orders-mobile" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Executing and documenting jobs in the field.">
                    Work Orders and Mobile Execution
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Work orders are the operational record of a job: scope, status, technician notes, photos,
                      signatures, and parts used. Mobile apps put that record in technicians&apos; hands so the office is
                      not the bottleneck for updates.
                    </p>
                    <p>
                      Strong FSM ties work orders to customer and equipment history—so any tech arriving at a property
                      sees prior visits, warranties, and safety notes. See{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="billing-reporting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From completed work to revenue and insight.">
                    Billing, Integrations, and Reporting
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FSM typically includes estimates, invoices, and payment collection so completed jobs convert to
                      cash without re-entering line items. Integrations push revenue and tax detail into accounting
                      systems; reporting shows utilization, average ticket size, and callback rates.
                    </p>
                    <p>
                      Read{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>{" "}
                      for QuickBooks and Xero sync patterns. For overlap with sales and marketing systems, see{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="FSM scope and how pieces fit together.">FAQs</SectionTitle>
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
    title: "What Does Field Service Management Include? | BeltStack Guide",
    description:
      "Learn what field service management includes: scheduling, dispatch, work orders, mobile apps, billing, integrations, and reporting.",
  };
}
