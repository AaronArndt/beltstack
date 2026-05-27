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
    q: "What is the most common field service scheduling mistake?",
    a: "Booking technicians without checking drive time, skills, or parts on hand. That leads to double-bookings, late arrivals, and callbacks. A live dispatch board tied to technician calendars prevents most of these conflicts before customers are promised a window.",
  },
  {
    q: "Why do service businesses lose money on incomplete job documentation?",
    a: "When techs skip photos, line items, or signatures in the field, the office reworks invoices from memory or leaves billable work off the ticket. Mobile forms and required closeout steps in FSM software protect margin on every visit.",
  },
  {
    q: "How does poor customer communication hurt field operations?",
    a: "Missed ETA updates and no appointment reminders drive no-shows and angry calls that pull dispatchers off the board. Automated SMS and status links free the office to focus on routing instead of repeating where the truck is.",
  },
  {
    q: "When should a service company stop using spreadsheets for dispatch?",
    a: "When one dispatcher cannot see every open job, truck, and technician at once without version conflicts. See our guide on when businesses outgrow spreadsheets; the tipping point is usually multiple crews and recurring maintenance contracts.",
  },
  {
    q: "Can the wrong software category cause FSM mistakes?",
    a: "Yes. Using a CRM or calendar as a dispatch system forces workarounds for work orders, parts, and job costing. Field service platforms are built for technician workflows; pairing them with CRM for sales is healthier than stretching the wrong tool.",
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

const PAGE_HREF = "/field-service/guides/common-field-service-management-mistakes";

export default function CommonFieldServiceManagementMistakesPage() {
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
                      Common Field Service Management Mistakes
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Common Field Service Management Mistakes
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    The scheduling, dispatch, documentation, and billing errors that quietly drain margin in service
                    businesses--and practical fixes before they scale with your crew count.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service management breaks down in predictable places: the board looks full but trucks run
                      late, technicians finish jobs the office cannot bill, and customers call because nobody confirmed
                      the window. These are process failures, not bad hires--and they compound as you add crews and
                      service lines.
                    </p>
                    <p>
                      Most mistakes trace back to missing ownership. Someone must own the schedule, someone must own
                      dispatch exceptions, and someone must own invoice quality before jobs close. When those roles blur,
                      teams patch gaps with texts and side spreadsheets that no reporting can trust.
                    </p>
                    <p>
                      Software helps only when it matches how work actually moves from intake to payment. See{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management (FSM)
                      </Link>{" "}
                      for the discipline, and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>{" "}
                      for the typical platform flow.
                    </p>
                    <p>
                      Use this guide as a pre-mortem before peak season or a software rollout. Compare tools on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      , then read{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      with these failure modes in mind.
                    </p>
                  </div>
                </section>

                <section id="scheduling-dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where double-bookings and late trucks start.">
                    Scheduling and Dispatch Mistakes
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Treating every job as a one-hour block ignores travel, permit holds, and multi-tech visits.
                      Dispatchers who cannot see drive time between stops overbook the day and erode first-time fix
                      rates. Route-aware scheduling and zone-based assignment reduce churn on the board.
                    </p>
                    <p>
                      Another common error is changing the schedule without notifying the customer or the technician.
                      Silent moves create no-shows and wasted truck rolls. Pair your board with automated reminders;
                      see{" "}
                      <Link href="/field-service/guides/how-businesses-reduce-missed-appointments" className={linkGreen}>
                        how businesses reduce missed appointments
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      .
                    </p>
                    <p>
                      Finally, dispatching without skill or certification rules sends the wrong tech to regulated work.
                      Tag technicians by license and equipment competency before you optimize for geography alone.
                    </p>
                  </div>
                </section>

                <section id="field-documentation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lost revenue hiding in incomplete tickets.">
                    Field Documentation and Data Quality Mistakes
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Paper forms and photo rolls in group texts do not scale. When job notes live outside the work order,
                      warranty disputes and repeat visits lack evidence. Mobile apps should capture checklist completion,
                      meter readings, and before/after photos in one record tied to the customer site.
                    </p>
                    <p>
                      Teams also under-invest in asset and equipment history at the location level. The second visit
                      should not start from zero. Link prior jobs, installed units, and recommended follow-ups so techs
                      arrive prepared; see{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        how service businesses manage work orders
                      </Link>
                      .
                    </p>
                    <p>
                      Inconsistent job statuses--booked, en route, in progress, complete--make reporting useless.
                      Define a small status set and train techs to update in real time.{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        Scheduling software
                      </Link>{" "}
                      alone rarely enforces that discipline without work-order context.
                    </p>
                  </div>
                </section>

                <section id="customer-communication" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Callbacks that steal dispatcher capacity.">
                    Customer Communication Mistakes
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Promising narrow arrival windows without buffer sets up failure on the first traffic delay.
                      Better practice: confirmed appointments, proactive delay messages, and a customer portal or link
                      for status. Communication failures show up as bad reviews even when the technical work was fine.
                    </p>
                    <p>
                      Office staff should not be the switchboard for every where-is-my-tech call. Push ETA updates from
                      the same system that tracks GPS or manual en-route status. Read{" "}
                      <Link
                        href="/field-service/guides/how-field-service-software-improves-customer-communication"
                        className={linkGreen}
                      >
                        how field service software improves customer communication
                      </Link>{" "}
                      for patterns that scale past a single dispatcher phone line.
                    </p>
                    <p>
                      After the visit, skipping review requests and maintenance reminders leaves recurring revenue on
                      the table. Close the loop while the experience is fresh--especially for HVAC, pest, and other
                      contract-friendly trades.
                    </p>
                  </div>
                </section>

                <section id="billing-operations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Cash flow leaks after the truck leaves.">
                    Billing, Invoicing, and Back-Office Mistakes
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Delayed invoicing is the silent killer: work completed Monday gets billed Friday after someone
                      retypes notes. Same-day invoice generation from the closed work order tightens cash flow. See{" "}
                      <Link
                        href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software"
                        className={linkGreen}
                      >
                        how estimates and invoicing work in FSM software
                      </Link>{" "}
                      and our{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>{" "}
                      hub if you split billing from operations.
                    </p>
                    <p>
                      Estimates that never convert to jobs--or jobs that never tie back to accepted quotes--create
                      revenue leakage and tax reporting gaps. One thread from quote to invoice prevents arguments about
                      what was approved on site.
                    </p>
                    <p>
                      Ignoring integration with accounting until year-end forces painful reconciliations. Plan{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>{" "}
                      early, and revisit setup when you add payment plans or membership billing.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational pitfalls and fixes.">FAQs</SectionTitle>
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
    title: "Common Field Service Management Mistakes | BeltStack Guide",
    description:
      "Avoid the scheduling, dispatch, documentation, and billing mistakes that hurt service businesses--with practical FSM fixes and software selection tips.",
    keywords: [
      "field service management mistakes",
      "dispatch mistakes",
      "fsm best practices",
      "service business operations",
      "scheduling errors",
      "field service billing",
    ],
  };
}
