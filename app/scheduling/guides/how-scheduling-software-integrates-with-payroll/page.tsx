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
  { q: "Why integrate scheduling software with payroll?", a: "Integration reduces manual data entry, improves pay accuracy, and helps teams reconcile planned schedules with actual paid hours faster." },
  { q: "What data typically syncs to payroll?", a: "Most integrations pass approved shifts, worked hours, overtime indicators, and role/location tags used for pay rules and reporting." },
  { q: "Does integration replace time tracking?", a: "Usually no. Scheduling defines planned work, while time tracking confirms actual work. Businesses often need both for payroll accuracy." },
  { q: "Can payroll integration reduce labor costs?", a: "Yes, when teams use schedule-to-payroll reporting to spot overtime patterns, understaffing, and overcoverage before costs compound." },
  { q: "Is payroll integration hard to implement?", a: "Most cloud tools offer connector-based setup. Complexity depends on pay rules, approval workflows, and whether teams run multi-location payroll." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "SMB scheduling", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Service workflows", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Team routing", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-integrates-with-payroll";

export default function HowSchedulingSoftwareIntegratesWithPayrollPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Scheduling Software Integrates With Payroll</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Integrates With Payroll
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How buyers connect scheduling and payroll systems to improve accuracy, reduce admin work, and control labor spend.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling and payroll integration turns workforce plans into reliable pay runs. Without this
                      connection, teams manually reconcile schedule changes, overtime, and coverage edits across systems,
                      which creates avoidable errors and delays.
                    </p>
                    <p>
                      For growing businesses, labor is usually the largest controllable operating cost. Linking schedule
                      data to payroll helps managers spot variance earlier and adjust staffing before overages become a
                      monthly surprise.
                    </p>
                    <p>
                      If you are still mapping scheduling workflows, review{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-businesses-schedule-employees-efficiently" className={linkGreen}>
                        employee scheduling best practices
                      </Link>
                      .
                    </p>
                    <p>
                      Continue evaluation through the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. Related buying research often includes{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link> and{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>.
                    </p>
                  </div>
                </section>
                <section id="what-integrates" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Understand which records move between systems.">What Data Payroll Integrations Sync</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most integrations send approved schedule and attendance data, not every draft edit. Businesses
                      should define one system of record for each stage: planning, approvals, and final payroll output.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Shift assignments and approved hours</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Overtime flags and premium pay tags</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Location, department, and role codes</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Time-off and exception entries after approval</span></li>
                    </ul>
                  </div>
                </section>
                <section id="integration-architecture" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Choose the right sync approach for your scale.">Integration Architecture and Control Points</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers typically choose between native connectors and middleware. Native integrations are faster to
                      deploy; middleware offers stronger customization across complex role, union, or regional pay rules.
                    </p>
                    <p>
                      Establish approval gates so only validated records reach payroll. Strong audit trails reduce dispute
                      risk and support compliance checks.
                    </p>
                  </div>
                </section>
                <section id="cost-and-compliance-impact" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Tie integration outcomes to measurable business value.">Labor Cost and Compliance Impact</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Integrated scheduling improves forecasting accuracy and helps managers intervene when overtime or
                      coverage imbalance trends appear. This creates predictable payroll spend and stronger staffing plans.
                    </p>
                    <p>
                      Businesses subject to local labor laws should align schedule edits and payroll outputs with policy
                      controls documented in payroll workflows.
                    </p>
                  </div>
                </section>
                <section id="implementation-playbook" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Roll out in phases to reduce operational risk.">Implementation Playbook for Buyers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pilot integration on one department, run parallel payroll validation for one cycle, then expand
                      once variance and exception rates are within tolerance.
                    </p>
                    <p>
                      If customer-facing teams also route appointments through a CRM, map cross-system data ownership
                      using{" "}
                      <Link href="/crm" className={linkGreen}>CRM workflows</Link> before scaling.
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
    title: "How Scheduling Software Integrates With Payroll | BeltStack Guide",
    description:
      "Learn how scheduling software integrates with payroll systems, what data syncs, and how buyers reduce labor-cost errors and manual reconciliation.",
    keywords: [
      "scheduling payroll integration",
      "employee scheduling and payroll",
      "labor cost scheduling software",
      "schedule to payroll sync",
      "workforce scheduling payroll",
      "payroll integration software",
    ],
  };
}
