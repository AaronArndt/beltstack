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
    q: "How do businesses handle recurring service appointments?",
    a: "They define a repeat schedule—weekly, monthly, seasonal, or contract-based—and let field service software generate work orders or visits automatically. Each occurrence should inherit customer site details, scope, checklist, and billing rules so crews do not rebuild jobs from scratch every cycle.",
  },
  {
    q: "What is the difference between recurring appointments and maintenance agreements?",
    a: "Recurring appointments are the operational schedule: when a tech visits and what work is due. Maintenance agreements or service contracts are the commercial terms—what is included, price, renewal date, and cancellation rules. Strong FSM links both so visits bill correctly, renewals do not slip, and dispatch sees the same scope the customer bought.",
  },
  {
    q: "Can recurring routes work without enterprise FSM?",
    a: "Many contractor tools support repeat jobs, seasonal templates, and membership-style billing without six-figure implementations. Complexity rises with multi-property accounts, variable scopes per visit, and bundled parts—then evaluate tiers on recurring automation, agreement reporting, and mobile checklists, not logo size alone.",
  },
  {
    q: "How do reminders work for recurring customers?",
    a: "Automated reminders should fire per upcoming visit, not only on the first booking. Customers on maintenance plans still no-show; tie SMS or email reminders to each generated appointment. Pair reminders with clear arrival windows from dispatch so repeat clients know when to expect the truck.",
  },
  {
    q: "What happens when a recurring visit finds extra work?",
    a: "The scheduled visit completes the plan scope; findings outside the agreement become a separate estimate or work order. Good systems attach upsell notes and photos to the customer record so the next sales call or visit has context. Avoid folding unapproved extras into the membership invoice without customer approval.",
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

const PAGE_HREF = "/field-service/guides/how-businesses-handle-recurring-service-appointments";

export default function HowBusinessesHandleRecurringServiceAppointmentsPage() {
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
                      How Businesses Handle Recurring Service Appointments
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Handle Recurring Service Appointments
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how businesses handle recurring service appointments for maintenance plans, seasonal routes,
                    contract-based work, and predictable revenue without manual re-entry every cycle.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring work is predictable revenue—and predictable operations only when you systemize it. HVAC
                      tune-ups, pest routes, pool service, commercial PM visits, and filter swaps all depend on schedules
                      that regenerate without someone rebuilding the same job in a spreadsheet every month.
                    </p>
                    <p>
                      Field service software turns repeat rules into work orders and calendar blocks. Each generated visit
                      should carry the customer address, equipment notes, checklist, and billing defaults from the plan
                      so technicians arrive prepared and finance knows what to bill.
                    </p>
                    <p>
                      For scheduling mechanics behind repeat jobs, see{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what field service management (FSM) is
                      </Link>
                      . Dispatch still adjusts the live day when trucks slip—see{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      .
                    </p>
                    <p>
                      Compare vendors on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . When recurring volume is your growth lever, trial software with a real maintenance list—not a
                      single demo appointment.
                    </p>
                  </div>
                </section>

                <section id="maintenance-plans" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Commercial terms tied to visit schedules.">
                    Maintenance Plans and Service Contracts
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A maintenance agreement answers what the customer bought; recurring appointments answer when crews
                      show up. Linking both in one system prevents visits that never bill and renewals that nobody
                      tracks until revenue drops.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Included visits per term</strong> — define count, season, and
                          what is in scope versus billable extras.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Auto-generated work orders</strong> — each visit inherits
                          checklist, default parts, and labor expectations.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Renewal tracking</strong> — flag expiring agreements before
                          gaps in coverage and cash flow.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Billing for plans often blends recurring charges with per-visit invoices—see{" "}
                      <Link
                        href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software"
                        className={linkGreen}
                      >
                        how estimates and invoicing work in FSM software
                      </Link>{" "}
                      and{" "}
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

                <section id="seasonal-routes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Batch recurring stops efficiently.">
                    Seasonal Routes and Recurring Dispatch
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Seasonal businesses group stops by geography and week—spring irrigation startups, fall cleanings, or
                      monthly filter swaps. Recurring templates plus zone-based assignment reduce drive time and make
                      capacity visible before you sell more memberships.
                    </p>
                    <p>
                      A typical seasonal setup looks like this:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Define the route template</strong> — customers, frequency, and
                        default duration per stop.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Generate the season&apos;s visits</strong> — software creates
                        appointments or work orders for the window.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Assign by zone and tech</strong> — dispatch balances trucks
                        before the week starts.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Adjust live</strong> — weather, skips, and add-ons reshuffle
                        without losing job history.
                      </li>
                    </ol>
                    <p>
                      Pair route thinking with{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning for field service
                      </Link>
                      . When visits slip, use patterns from{" "}
                      <Link href="/field-service/guides/how-businesses-reduce-missed-appointments" className={linkGreen}>
                        how businesses reduce missed appointments
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="operations-and-history" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Continuity across every return visit.">
                    Equipment History and Repeat Visit Quality
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring customers expect you to remember prior findings. Work orders should surface equipment notes,
                      photos, and open recommendations so the next tech does not start blind. That history also feeds
                      upsell conversations without exporting a separate CRM report.
                    </p>
                    <p>
                      Operational discipline for repeat jobs mirrors one-off work—see{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        how service businesses manage work orders
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      . Technicians document on{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        mobile field service apps
                      </Link>
                      ; customer updates for each visit are in{" "}
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

                <section id="evaluate-recurring" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Testing repeat-job automation before you buy.">
                    How to Evaluate Recurring Features in FSM Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      During trial, import or build a small maintenance cohort: mix monthly, quarterly, and seasonal
                      frequencies. Confirm generated visits inherit checklists, pull correct customer sites, and survive
                      a mid-season schedule change without duplicate records.
                    </p>
                    <p>
                      Ask whether skipped visits reschedule cleanly, whether agreement renewals alert sales or ops, and
                      whether membership revenue posts to{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        accounting
                      </Link>{" "}
                      the way your bookkeeper expects. Teams outgrowing spreadsheets should read{" "}
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

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Plans, routes, and repeat visits.">FAQs</SectionTitle>
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
    title: "How Businesses Handle Recurring Service Appointments | BeltStack Guide",
    description:
      "Learn how businesses handle recurring service appointments: maintenance plans, seasonal routes, auto-generated work orders, reminders, and FSM evaluation tips.",
    keywords: [
      "recurring service appointments",
      "maintenance plans",
      "seasonal routes",
      "field service software",
      "service contracts",
      "repeat scheduling",
    ],
  };
}
