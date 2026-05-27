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
    q: "What are the signs we have outgrown spreadsheets for field service?",
    a: "Common signs include frequent scheduling conflicts, lost job updates, slow invoicing, and no reliable visibility into technician status or workload. If dispatchers spend more time reconciling tabs than planning routes, spreadsheets are already costing you money.",
  },
  {
    q: "Can spreadsheets still work for very small teams?",
    a: "They can work briefly for very low job volume and a single decision-maker who also drives the truck. They become fragile once multiple dispatchers, technicians, or recurring service schedules need the same live data without version conflicts.",
  },
  {
    q: "What should we automate first when moving off spreadsheets?",
    a: "Start with scheduling and dispatch, then mobile job updates, then estimate-to-invoice workflows. That sequence delivers visible wins quickly—fewer double bookings, fewer status phone calls, and faster billing from completed work orders.",
  },
  {
    q: "How do we avoid a painful migration?",
    a: "Scope phase one tightly: clean core customer and site data, import open jobs only, and train office and field teams on three high-frequency workflows before expanding modules. Run one billing cycle in parallel when possible so cash collection does not stall.",
  },
  {
    q: "Should we choose free or paid FSM when leaving spreadsheets?",
    a: "Free tiers can prove adoption for solo operators, but growing crews usually need paid dispatch, mobile, and integration depth within a season. Compare limits in our free vs paid guide and trial tools during your busiest week—not a quiet month.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "Contractors and home services", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service pros", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
  { name: "ServiceTitan", logoSrc: "/Logos/servicetitan.png", rating: "4.5", bestFor: "Growing service companies", reviewHref: getFieldServiceReviewUrl("servicetitan") },
];

const PAGE_HREF = "/field-service/guides/when-businesses-outgrow-spreadsheets-for-field-service";

export default function WhenBusinessesOutgrowSpreadsheetsForFieldServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Field Service</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">When Businesses Outgrow Spreadsheets for Field Service</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">When Businesses Outgrow Spreadsheets for Field Service</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Spot the operational warning signs that spreadsheets can no longer support reliable dispatch, field updates, and billing—and what to automate first when you move to FSM software.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets fail gradually: one missed update, one duplicate job, one invoicing delay at a time. They work when one person holds the whole operation in their head. Growth amplifies every crack—second dispatcher, third truck, recurring maintenance routes, and customers who expect ETA texts instead of phone tag.
                    </p>
                    <p>
                      The tipping point is rarely headcount alone. It is operational pain: dispatchers reconciling five tabs, technicians texting photos because the sheet has no attachment column, and bookkeepers waiting for job notes that never arrived in one place.
                    </p>
                    <p>
                      Field service management software does not magically fix process gaps, but it gives scheduling, dispatch, mobile execution, and billing a shared job record. That single thread is what spreadsheets cannot maintain under live service pressure.
                    </p>
                    <p>
                      Pair this guide with{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>field service software for small business</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>how to choose field service software</Link>.{" "}
                      For budget context, see{" "}
                      <Link href="/field-service/guides/free-vs-paid-field-service-software" className={linkGreen}>free vs paid field service software</Link>{" "}
                      and shortlist options on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>.
                    </p>
                  </div>
                </section>

                <section id="warning-signs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational issues that indicate spreadsheet workflows are breaking down.">Warning Signs You Have Outgrown Spreadsheets</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Warning signs are behaviors your team already compensates for—extra calls, duplicate entry, and end-of-day reconciliation marathons.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Dispatchers spend more time reconciling updates than planning schedules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Technicians call or text status because field data is not centralized.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Invoices are delayed because job details are incomplete or scattered across files.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Managers cannot see capacity, backlog, or route bottlenecks without manual pivots.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Version conflicts and overwritten cells cause missed appointments or wrong addresses.</span>
                      </li>
                    </ul>
                    <p>
                      More examples live in{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>common problems field service software solves</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-businesses-reduce-missed-appointments" className={linkGreen}>how businesses reduce missed appointments</Link>.{" "}
                      If CRM and sheets both hold customer data, read{" "}
                      <Link href="/field-service/guides/is-field-service-part-of-crm" className={linkGreen}>is field service part of CRM</Link>.
                    </p>
                  </div>
                </section>

                <section id="why-spreadsheets-break" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Structural limits that show up as you add trucks and same-day changes.">Why Spreadsheets Break at Scale</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets are flexible databases with no workflow engine. They do not push assignment changes to a technician phone, enforce skills on dispatch, or tie a signed quote to a work order and invoice without manual copy-paste.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">No live dispatch board</strong> — reassignment during emergencies is slow and error-prone.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Weak mobile experience</strong> — technicians need apps built for offline job sites.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Audit trail gaps</strong> — who changed the schedule row and when is often unclear.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Integration friction</strong> — accounting and CRM sync becomes CSV exports and hope.</span>
                      </li>
                    </ul>
                    <p>
                      Understand what replaces the sheet in{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>how field service software works</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-features-to-look-for-in-field-service-software" className={linkGreen}>what features to look for in field service software</Link>.{" "}
                      For hosting decisions after you switch, see{" "}
                      <Link href="/field-service/guides/cloud-vs-on-premise-field-service-software" className={linkGreen}>cloud vs on-premise field service software</Link>.
                    </p>
                  </div>
                </section>

                <section id="what-to-automate-first" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical sequence for replacing spreadsheet-heavy processes.">What to Automate First</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Do not try to digitize every workflow on day one. Sequencing matters: teams that start with dispatch and mobile adoption see faster relief than teams that begin with advanced reporting nobody uses yet.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — one board, skills, and reassignment when jobs slip.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Mobile job updates</strong> — technicians close loops without calling the office.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Estimate-to-invoice</strong> — approved scope flows to billing without retyping.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Reporting and integrations</strong> — accounting sync and utilization once basics stick.
                      </li>
                    </ol>
                    <p>
                      Supporting reads:{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>how dispatching software works</Link>,{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>how mobile field service apps work</Link>, and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>how work order management works</Link>.
                    </p>
                  </div>
                </section>

                <section id="choosing-platform" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to choose the right replacement platform without overcomplicating adoption.">Choosing the Right Next System</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prioritize ease of implementation, mobile reliability, and dispatch usability before advanced add-ons. Teams moving from spreadsheets need fast wins and clear process ownership—who creates jobs, who dispatches, who invoices.
                    </p>
                    <p>
                      Run trials on a busy day: inject a same-day emergency, a no-show, and a job that runs long. Watch whether reassignment preserves notes, customer contact info, and line items for billing. If you also run a CRM, define handoffs using{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>field service software vs CRM</Link>{" "}
                      so pipeline data does not fight the dispatch board.
                    </p>
                    <p>
                      Compare options on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>{" "}
                      and validate tradeoffs with{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service comparisons</Link>.{" "}
                      For replacement timing on budget, see{" "}
                      <Link href="/field-service/guides/free-vs-paid-field-service-software" className={linkGreen}>free vs paid field service software</Link>.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Spreadsheet-to-FSM migration FAQs.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field Service Tools to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "When Businesses Outgrow Spreadsheets for Field Service | BeltStack Guide",
    description:
      "Learn when spreadsheets stop working for field service: dispatch conflicts, mobile gaps, slow invoicing, migration sequencing, and how to choose FSM software without a painful rollout.",
    keywords: [
      "outgrow spreadsheets field service",
      "spreadsheet dispatch",
      "field service management",
      "FSM migration",
      "dispatch software",
      "small business field service",
      "2026",
    ],
  };
}
