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
    q: "Is this guide legal advice?",
    a: "No. This is general awareness for US small business owners evaluating scheduling practices. Federal and state rules change, and your industry may have additional requirements. Consult an employment attorney or HR advisor for decisions that affect your specific workforce.",
  },
  {
    q: "What is fair or predictive scheduling?",
    a: "Some cities and states require advance notice of work schedules—often 7 to 14 days—and compensation when shifts change on short notice. Retail, food service, and hospitality employers in covered jurisdictions should track posting deadlines and premium pay rules before publishing weekly grids.",
  },
  {
    q: "How does overtime relate to employee scheduling?",
    a: "Under the Fair Labor Standards Act, non-exempt employees generally earn overtime for hours over 40 in a workweek. Scheduling software that flags projected overtime before publish helps managers adjust shifts—but the obligation is payroll compliance, not calendar convenience.",
  },
  {
    q: "Do meal and rest break rules affect how I build shifts?",
    a: "Yes in many states. California, for example, requires meal and rest periods for most hourly workers; short shifts may still trigger break obligations. Build buffers into shift templates and confirm actual breaks against time clock data on your time tracking system.",
  },
  {
    q: "Should scheduling software enforce labor laws automatically?",
    a: "Some workforce platforms include compliance warnings for clopening, minor workers, or break gaps. Generic appointment booking tools usually do not. Treat software alerts as helpers, not substitutes for policy review and counsel in your state.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team availability", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Staff calendars", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Meeting blocks", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/employee-scheduling-laws-businesses-should-know";

export default function EmployeeSchedulingLawsBusinessesShouldKnowPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Employee scheduling laws</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Employee Scheduling Laws Businesses Should Know
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    General US labor scheduling awareness for SMB owners—fair scheduling, overtime, breaks, and how
                    scheduling connects to time tracking and payroll. Not legal advice.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Employee scheduling is where operations meet labor law. A published shift grid looks administrative,
                      but it can trigger overtime premiums, break violations, or short-notice pay depending on your state
                      and industry. US small businesses—especially retail, restaurants, healthcare clinics, and multi-location
                      service shops—benefit from knowing the categories of rules before they buy software or rewrite
                      handbook policies.
                    </p>
                    <p>
                      This guide offers practical awareness, not legal advice. Federal baseline rules such as the Fair
                      Labor Standards Act (FLSA) set overtime and recordkeeping expectations; dozens of states and cities
                      add scheduling-specific requirements like advance notice, predictability pay, and split-shift
                      premiums. Your obligations depend on location, headcount, and worker classification—confirm with
                      qualified counsel when stakes are high.
                    </p>
                    <p>
                      Scheduling software can help you document availability, publish shifts, and flag conflicts—but it
                      does not replace compliance review. Read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      if you are unsure whether customer booking tools or workforce scheduling should own your labor
                      grid, and{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>{" "}
                      for the operational side of publishing staff schedules.
                    </p>
                    <p>
                      Actual hours worked flow to{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link> and then{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link>. Treat the schedule as the plan and
                      punches as the record—discrepancies between planned shifts and paid hours are where audits and
                      employee disputes usually surface. Compare tools on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> once you know which compliance
                      gaps your process must close.
                    </p>
                  </div>
                </section>
                <section id="fair-scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Advance notice and schedule changes.">
                    Fair Scheduling and Predictability Rules
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      &ldquo;Fair scheduling&rdquo; or &ldquo;predictive scheduling&rdquo; laws require employers in
                      certain jurisdictions to post work schedules in advance—commonly 7 to 14 days—and pay premiums when
                      shifts are added, canceled, or moved on short notice. Oregon, Seattle, New York City, Chicago, and
                      other locales have variants; hospitality and retail employers are most often covered.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Posting deadlines</strong> — know how far ahead you must
                          publish and whether a &ldquo;good faith estimate&rdquo; at hire is required.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Right to rest</strong> — some laws restrict back-to-back
                          closing and opening shifts (&ldquo;clopening&rdquo;) without employee consent or extra pay.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Predictability pay</strong> — schedule changes inside the
                          notice window may trigger one to four hours of extra wages depending on local rules.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Document when schedules were published and when changes occurred. Workforce-oriented platforms often
                      timestamp publishes; spreadsheet shops should at least keep version history. See{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-workforce-management-software" className={linkGreen}>
                        scheduling software vs workforce management software
                      </Link>{" "}
                      when compliance views—not just booking pages—drive the purchase.
                    </p>
                  </div>
                </section>
                <section id="overtime" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Federal baseline and state overlays.">Overtime and Hours Limits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FLSA requires covered non-exempt employees to receive overtime—typically 1.5× regular rate—for
                      hours worked over 40 in a workweek. Some states add daily overtime (after 8 or 12 hours) or
                      double-time rules. Scheduling managers who only watch weekly totals can still miss costly daily
                      thresholds in California and similar jurisdictions.
                    </p>
                    <p>
                      Build overtime visibility into your publish workflow: projected hours per employee before the week
                      locks, alerts when swaps push someone past 40, and reconciliation against actual punches.{" "}
                      <Link href="/payroll" className={linkGreen}>Payroll software</Link> calculates premiums at pay
                      run;{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link> supplies the hours. If those
                      systems disagree with the schedule, fix the process—not just the paycheck.
                    </p>
                    <p>
                      Exempt vs non-exempt classification is a separate legal question. Scheduling alone does not make a
                      salaried manager exempt from overtime. Misclassification penalties exceed the cost of any scheduling
                      tool—get classification right before optimizing shift templates.
                    </p>
                  </div>
                </section>
                <section id="breaks" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Meal periods, rest breaks, and on-call time.">
                    Breaks, Rest Periods, and Off-the-Clock Work
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Break rules vary sharply by state. California requires a 30-minute meal break for shifts over five
                      hours and paid rest breaks for most hourly workers; other states follow federal default (no required
                      breaks for adults in many industries) or industry-specific statutes. Short shifts stacked without
                      gaps can create accidental violations when managers copy-paste templates.
                    </p>
                    <p>
                      On-call and reporting-time pay also affect how you schedule. If an employee must remain available or
                      report to work only to be sent home, local rules may guarantee minimum pay. Field teams with
                      unpredictable job lengths should read{" "}
                      <Link href="/scheduling/guides/how-businesses-schedule-employees-efficiently" className={linkGreen}>
                        how businesses schedule employees efficiently
                      </Link>{" "}
                      alongside time-tracking policies for travel and job-site punches.
                    </p>
                    <p>
                      Train managers not to pressure off-the-clock work—answering messages before punch-in, unpaid
                      pre-shift prep, or voluntary stay-late without recording hours. The schedule should reflect
                      realistic paid time, including brief turnover between appointments or tables.
                    </p>
                  </div>
                </section>
                <section id="software-and-policy" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Turn awareness into repeatable process.">
                    Building Compliant Scheduling Habits
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with a written scheduling policy: how far in advance shifts post, how swaps are approved, who
                      authorizes overtime, and how breaks are documented. Software enforces what you configure—minimum
                      rest between shifts, max weekly hours, role-based eligibility—not statutes you never encoded.
                    </p>
                    <p>
                      Separate customer appointment booking from employee shift planning when both exist. Double-booking a
                      stylist for a client slot and a mandatory team meeting creates compliance and service failures.
                      Appointment tools like{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      excel at client intake; labor grids often live in workforce or dedicated shift products tied to{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>.
                    </p>
                    <p>
                      Review schedules against paid hours monthly. Patterns—recurring short breaks, systematic early
                      clock-outs, or constant post-publish edits—signal training gaps or tooling mismatches before they
                      become agency inquiries. When in doubt, escalate to employment counsel rather than guessing from a
                      blog post.
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
    title: "Employee Scheduling Laws Businesses Should Know | BeltStack Guide",
    description:
      "General US labor scheduling awareness for SMBs: fair scheduling, overtime, breaks, and how scheduling ties to time tracking and payroll. Not legal advice.",
    keywords: [
      "employee scheduling laws",
      "fair scheduling laws",
      "predictive scheduling",
      "overtime scheduling rules",
      "meal break requirements",
      "labor scheduling compliance",
      "workforce scheduling laws",
    ],
  };
}
