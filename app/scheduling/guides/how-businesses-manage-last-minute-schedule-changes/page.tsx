import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingReviewUrl } from "@/lib/routes";

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
  { q: "What causes most last-minute schedule changes?", a: "Common causes include staff callouts, customer cancellations, urgent service requests, and under-forecasted demand spikes." },
  { q: "How can businesses reduce disruption from late changes?", a: "Define escalation rules, maintain backup coverage pools, and automate notifications so updates reach staff and customers quickly." },
  { q: "Do scheduling tools handle same-day changes?", a: "Yes. Most modern tools support rapid reassignment, real-time alerts, and conflict checks that prevent overlapping bookings." },
  { q: "Should teams track last-minute change metrics?", a: "Absolutely. Tracking change frequency, fill time, and overtime impact helps leaders fix root causes instead of reacting repeatedly." },
  { q: "Can this process integrate with field teams?", a: "Yes. Teams with dispatch workflows often combine scheduling and field-service coordination for technician reassignment and route updates." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Fast rescheduling", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking automation", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybookme.png", rating: "4.5", bestFor: "Real-time updates", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/how-businesses-manage-last-minute-schedule-changes";

export default function HowBusinessesManageLastMinuteScheduleChangesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">How Businesses Manage Last-Minute Schedule Changes</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Manage Last-Minute Schedule Changes
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Practical systems for handling same-day scheduling disruptions without sacrificing service quality or labor control.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Last-minute schedule changes are unavoidable in most service operations. The difference between
                      resilient and reactive teams is whether they have a repeatable playbook for coverage, approvals,
                      and communication.
                    </p>
                    <p>
                      Businesses that handle change well protect both customer trust and labor efficiency. Businesses
                      that improvise repeatedly tend to increase overtime, create missed handoffs, and stress managers.
                    </p>
                    <p>
                      For baseline process design, review{" "}
                      <Link href="/scheduling/guides/how-businesses-reduce-scheduling-conflicts" className={linkGreen}>
                        reducing scheduling conflicts
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-appointment-reminders-work" className={linkGreen}>
                        appointment reminder workflows
                      </Link>
                      .
                    </p>
                    <p>
                      Continue your buying research via the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>guide library</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. Related operational workflows may include{" "}
                      <Link href="/field-service" className={linkGreen}>field service</Link> and{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>.
                    </p>
                  </div>
                </section>
                <section id="change-management-framework" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Speed and consistency are both required.">Build a Last-Minute Change Framework</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define triggers for emergency changes, who can approve edits, and what communication sequence is
                      required. Clear governance reduces confusion during high-pressure windows.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Triage rules by urgency and customer impact</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Pre-approved backup staff and coverage pools</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Automated notifications to staff and customers</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Post-change audit for root-cause tracking</span></li>
                    </ul>
                  </div>
                </section>
                <section id="technology-enablers" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Tooling should support fast, low-error decisions.">Technology Features That Matter Most</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose software with real-time conflict detection, one-click reassignment, and status visibility
                      across managers and frontline staff.
                    </p>
                    <p>
                      Mobile access is especially important for distributed teams. See{" "}
                      <Link href="/scheduling/guides/mobile-scheduling-apps-explained" className={linkGreen}>
                        mobile scheduling apps explained
                      </Link>{" "}
                      for implementation details.
                    </p>
                  </div>
                </section>
                <section id="cost-and-customer-impact" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Track impact across both operations and experience.">Labor and Customer Impact of Late Changes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Last-minute changes should be measured by fill time, overtime effect, and customer wait-time
                      deviation. These metrics show whether your response model scales or just shifts burden.
                    </p>
                    <p>
                      For finance alignment, connect results with{" "}
                      <Link href="/payroll" className={linkGreen}>payroll reporting</Link> and schedule KPI dashboards.
                    </p>
                  </div>
                </section>
                <section id="continuous-improvement" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Treat every disruption as a process signal.">Continuous Improvement Playbook</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Review exceptions weekly, identify recurring causes, and update staffing templates or booking rules.
                      Continuous tuning is what reduces emergency volume over time.
                    </p>
                    <p>
                      As complexity grows, integrate with CRM and field data so schedule changes reflect customer
                      priority and on-site constraints.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSchedulingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Manage Last-Minute Schedule Changes | BeltStack Guide",
    description:
      "Learn how businesses handle same-day schedule changes with clear escalation rules, automation, and metrics that protect labor efficiency and customer experience.",
    keywords: [
      "last minute schedule changes",
      "same day scheduling",
      "schedule change management",
      "employee scheduling disruptions",
      "real time schedule updates",
      "scheduling conflict resolution",
    ],
  };
}
