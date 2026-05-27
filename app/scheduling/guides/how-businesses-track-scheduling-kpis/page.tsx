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
  {
    q: "What are scheduling KPIs?",
    a: "Scheduling KPIs are metrics that show whether your booking and staffing process is efficient and profitable. Common examples include no-show rate, utilization rate, time-to-fill open slots, and schedule change frequency.",
  },
  {
    q: "How many scheduling KPIs should a small business track?",
    a: "Most teams start with 5 to 8 KPIs tied to revenue, labor cost, and customer experience. Too many metrics create noise and slow decisions.",
  },
  {
    q: "Which KPI matters most for service teams?",
    a: "There is no single KPI for every business, but labor utilization and no-show rate usually have the fastest impact on margin and capacity.",
  },
  {
    q: "Can scheduling software track KPIs automatically?",
    a: "Yes. Most modern tools include dashboard reporting for bookings, cancellations, fill rates, and team availability. Integration with payroll and time tracking adds cost-level visibility.",
  },
  {
    q: "How often should we review scheduling KPIs?",
    a: "Weekly reviews help teams catch issues early, while monthly trend reviews support staffing and budget planning.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking analytics", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Service reporting", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "SMB operations", reviewHref: getSchedulingReviewUrl("setmore") },
];

const PAGE_HREF = "/scheduling/guides/how-businesses-track-scheduling-kpis";

export default function HowBusinessesTrackSchedulingKpisPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Businesses Track Scheduling KPIs</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Track Scheduling KPIs
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical framework for measuring scheduling performance, improving utilization, and controlling labor-driven costs.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Teams that treat scheduling as a revenue and labor lever make better decisions than teams that only
                      watch calendar volume. The right KPI set shows whether your schedule design supports profitable
                      coverage, healthy staff utilization, and a reliable customer experience.
                    </p>
                    <p>
                      Most businesses begin with appointment count, then miss higher-value signals like cancellation mix,
                      lead time, and last-minute edits. Those indicators reveal preventable operational friction long
                      before it appears in payroll totals or customer complaints.
                    </p>
                    <p>
                      If you are still defining your workflow foundation, start with{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-businesses-schedule-employees-efficiently" className={linkGreen}>
                        how businesses schedule employees efficiently
                      </Link>
                      .
                    </p>
                    <p>
                      Use this guide alongside our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. For deeper cost alignment, see{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link> and{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link>.
                    </p>
                  </div>
                </section>
                <section id="choose-kpis" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Start with a small, decision-ready scorecard.">Choose KPI Categories That Drive Action</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Build KPIs around outcomes leadership already owns: growth, service quality, and labor efficiency.
                      A balanced scorecard prevents teams from optimizing one metric while damaging another.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Demand KPIs</strong> — bookings by channel, lead time, and slot fill rate.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reliability KPIs</strong> — no-show rate, cancellation rate, and reschedule frequency.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Labor KPIs</strong> — utilization, overtime incidence, and paid idle time.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Customer KPIs</strong> — response time, wait time, and post-visit satisfaction.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="build-reporting-rhythm" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Metrics matter only if they are reviewed consistently.">Build a Weekly and Monthly Reporting Rhythm</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Weekly reviews should focus on corrective actions: adjust staffing, reminder timing, or booking
                      windows. Monthly reviews should focus on trend shifts by location, role, and service type.
                    </p>
                    <p>
                      Pair scheduling dashboards with{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking data</Link> and payroll exports so
                      performance reviews include actual paid hours, not just planned hours.
                    </p>
                  </div>
                </section>
                <section id="connect-tools" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Integrated systems produce trusted KPIs.">Connect Scheduling, Payroll, and CRM Data</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Isolated scheduling data can hide margin leakage. Integrating with{" "}
                      <Link href="/payroll" className={linkGreen}>payroll systems</Link> and{" "}
                      <Link href="/crm" className={linkGreen}>CRM platforms</Link> helps teams tie appointment outcomes
                      to labor spend, conversion rates, and customer lifetime value.
                    </p>
                    <p>
                      If you run mobile teams, add context from{" "}
                      <Link href="/field-service" className={linkGreen}>field service operations</Link> and route
                      performance to explain recurring delays and missed ETA windows.
                    </p>
                  </div>
                </section>
                <section id="avoid-common-errors" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Prevent misleading dashboards and bad incentives.">Avoid Common KPI Tracking Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Avoid over-indexing on one metric like utilization. Teams that push utilization too high usually
                      see increased late arrivals, lower service quality, and higher burnout.
                    </p>
                    <p>
                      Set ownership for every KPI, define calculation rules once, and keep metric definitions visible.
                      That governance discipline is what makes benchmark comparisons credible quarter over quarter.
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
    title: "How Businesses Track Scheduling KPIs | BeltStack Guide",
    description:
      "Learn which scheduling KPIs matter most, how to review them, and how to connect scheduling data with payroll, CRM, and time tracking for better decisions.",
    keywords: [
      "scheduling kpis",
      "schedule performance metrics",
      "labor utilization scheduling",
      "appointment scheduling analytics",
      "scheduling dashboard metrics",
      "scheduling software reporting",
    ],
  };
}
