import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedTimeTrackingResources } from "@/components/guides/RelatedTimeTrackingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getTimeTrackingReviewUrl } from "@/lib/routes";

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
    q: "What does time tracking software do?",
    a: "Time tracking software lets you record how long you or your team spend on tasks, projects, and clients. Most tools offer timers, manual timesheet entry, reporting, and often integrations with invoicing, accounting, or payroll.",
  },
  {
    q: "Do I need time tracking if I don't bill by the hour?",
    a: "Even if you don't bill by the hour, time tracking helps you understand where time goes, improve estimates, and see project profitability. Many teams use it for capacity planning and internal reporting.",
  },
  {
    q: "How does time tracking connect to invoicing?",
    a: "Many time tracking tools export time entries or integrate with invoicing and accounting software so billable hours flow into invoices without retyping. Some, like Harvest, include built-in invoicing.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: 4.6, bestFor: "Best overall", reviewHref: getTimeTrackingReviewUrl("toggl") },
  { name: "Harvest", logoSrc: "/Logos/harvest.png", rating: 4.4, bestFor: "Time + invoicing", reviewHref: getTimeTrackingReviewUrl("harvest") },
  { name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: 4.3, bestFor: "Free teams", reviewHref: getTimeTrackingReviewUrl("clockify") },
];

export default function HowTimeTrackingSoftwareWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Time Tracking</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How Time Tracking Software Works</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Time Tracking Software Works
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Learn what time tracking software does, from timers and timesheets to reporting, approvals, and billing.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Time tracking software replaces guesswork and manual timesheets with accurate records of how time is spent. You can use it to bill clients, understand job costs, or see how your team allocates time across projects and clients.
                    </p>
                    <p>
                      To compare options, see our{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link>,{" "}
                      <Link href="/time-tracking/best-time-tracking-software" className={linkGreen}>best time tracking software</Link>, and{" "}
                      <Link href="/time-tracking/compare" className={linkGreen}>time tracking comparisons</Link>. Many tools integrate with{" "}
                      <Link href="/invoicing" className={linkGreen}>invoicing</Link>,{" "}
                      <Link href="/accounting" className={linkGreen}>accounting</Link>, and{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link> software.
                    </p>
                  </div>
                </section>
                <section id="what-time-tracking-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core tasks time tracking platforms handle.">What Time Tracking Software Does</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Timers and timesheets</strong> — Record time with a live timer or by entering hours manually by project, task, and client.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Projects and budgets</strong> — Assign time to projects, set budgets, and track progress to avoid overruns.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Summaries by client, project, user, and period for billing and analysis.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Integrations</strong> — Connect to project management, invoicing, accounting, and payroll tools.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Recommended Time Tracking Software" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedTimeTrackingResources excludeHref="/time-tracking/guides/how-time-tracking-software-works" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Time Tracking Software Works | BeltStack Guide",
    description:
      "Learn what time tracking software does, from timers and timesheets to reporting, approvals, and billing.",
  };
}
