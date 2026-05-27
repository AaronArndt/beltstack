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
  { q: "How does scheduling software reduce labor costs?", a: "It helps match staffing to demand, reduce overtime, cut idle time, and prevent avoidable schedule conflicts that create extra paid hours." },
  { q: "Can scheduling software increase labor costs?", a: "Yes, if rules are configured poorly or teams overstaff to avoid risk. Better forecasting and KPI reviews are needed to keep costs controlled." },
  { q: "Which metrics should we monitor for labor-cost impact?", a: "Track overtime rate, paid idle time, schedule adherence, fill rate, and cost per booked appointment or shift hour." },
  { q: "Is integration important for labor-cost analysis?", a: "Yes. Pairing scheduling with payroll and time tracking data provides the full plan-versus-actual labor picture." },
  { q: "How long before teams see savings?", a: "Many businesses see measurable improvements within one to three payroll cycles when schedules, approvals, and reporting are managed consistently." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "SMB efficiency", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Capacity planning", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Service workflows", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-affects-labor-costs";

export default function HowSchedulingSoftwareAffectsLaborCostsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Scheduling Software Affects Labor Costs</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Affects Labor Costs
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical guide to how scheduling decisions influence labor spend, utilization, and payroll predictability.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Labor costs are shaped by daily schedule quality. Scheduling software can lower cost per productive
                      hour when it aligns staffing with demand and flags inefficiencies before they reach payroll.
                    </p>
                    <p>
                      The tools themselves do not automatically create savings. Outcomes depend on how teams configure
                      rules, approve changes, and monitor cost-focused KPIs across locations and roles.
                    </p>
                    <p>
                      If you are evaluating baseline process maturity, review{" "}
                      <Link href="/scheduling/guides/how-businesses-track-scheduling-kpis" className={linkGreen}>
                        scheduling KPI tracking
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-businesses-manage-last-minute-schedule-changes" className={linkGreen}>
                        last-minute schedule change management
                      </Link>
                      .
                    </p>
                    <p>
                      Continue research on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>guides</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. Related analysis usually includes{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link> and{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>.
                    </p>
                  </div>
                </section>
                <section id="cost-drivers" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Understand where schedule design creates spend.">Primary Labor Cost Drivers in Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most labor leakage comes from preventable patterns: overstaffing low-demand windows, understaffing
                      peaks that trigger overtime, and frequent reactive edits.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Overtime spikes from late schedule changes</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Paid idle time from weak demand forecasting</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Turnover risk from unstable staffing patterns</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Admin overhead from manual reconciliation</span></li>
                    </ul>
                  </div>
                </section>
                <section id="how-software-helps" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Software lowers costs when controls are enforced.">How Scheduling Platforms Improve Cost Control</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Modern scheduling tools support demand-based templates, coverage thresholds, and approval routing.
                      These capabilities reduce emergency edits and create steadier labor deployment.
                    </p>
                    <p>
                      For distributed or service-heavy operations, combine scheduling with{" "}
                      <Link href="/field-service" className={linkGreen}>field service workflows</Link> when dispatch and
                      route constraints influence staffing costs.
                    </p>
                  </div>
                </section>
                <section id="measurement-framework" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Use integrated reporting for reliable decisions.">Labor Cost Measurement Framework</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Track planned versus actual labor hours by role and location, then connect variance to schedule
                      change patterns. This reveals whether problems come from forecast quality, compliance limits, or
                      execution bottlenecks.
                    </p>
                    <p>
                      Integrated reporting across scheduling, time tracking, and payroll gives finance and operations a
                      shared source of truth for cost governance.
                    </p>
                  </div>
                </section>
                <section id="implementation-priorities" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Focus on high-impact fixes first.">Implementation Priorities for Cost Reduction</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with overtime controls, exception approvals, and standardized shift templates. These changes
                      typically deliver visible savings before advanced optimization models are needed.
                    </p>
                    <p>
                      As maturity grows, tie scheduling outcomes to CRM demand signals when appointment volume varies by
                      campaign or account segment.
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
    title: "How Scheduling Software Affects Labor Costs | BeltStack Guide",
    description:
      "Learn how scheduling software impacts labor costs through staffing decisions, overtime control, and integrated payroll and time tracking analysis.",
    keywords: [
      "scheduling labor costs",
      "employee scheduling cost control",
      "overtime reduction scheduling software",
      "labor utilization software",
      "workforce scheduling costs",
      "schedule optimization labor",
    ],
  };
}
