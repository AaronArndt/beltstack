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
  { q: "What makes scheduling software suitable for remote teams?", a: "Remote-ready tools handle time zones, asynchronous availability, flexible shift rules, and real-time updates without requiring everyone to be online at once." },
  { q: "Can remote scheduling software reduce meeting overload?", a: "Yes. Smart booking rules, buffers, and no-meeting windows help teams protect focus time while keeping collaboration predictable." },
  { q: "Do remote teams still need employee scheduling features?", a: "Often yes. Distributed support, operations, and customer teams still need coverage planning, shift assignments, and escalation paths." },
  { q: "Which integrations are most important for remote scheduling?", a: "Calendar, CRM, time tracking, and payroll integrations are the most common priorities because they keep distributed work visible and measurable." },
  { q: "How should buyers pilot remote scheduling tools?", a: "Start with one function or region, define timezone standards, track adoption and conflict rates, then scale after process adjustments." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Distributed teams", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.png", rating: "4.5", bestFor: "Timezone booking", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybookme.png", rating: "4.5", bestFor: "Remote operations", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/scheduling-software-for-remote-teams-explained";

export default function SchedulingSoftwareForRemoteTeamsExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling Software for Remote Teams Explained</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Software for Remote Teams Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    What remote and distributed teams should evaluate in scheduling software to coordinate work across time zones and roles.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Remote teams need scheduling systems that do more than share calendars. They need clear ownership,
                      timezone-aware workflows, and quick ways to handle changes without long coordination threads.
                    </p>
                    <p>
                      As teams distribute across regions, small scheduling gaps create measurable costs: delayed customer
                      response, missed handoffs, and uneven coverage during peak windows.
                    </p>
                    <p>
                      If you are choosing between appointment and workforce use cases, start with{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      .
                    </p>
                    <p>
                      Continue through the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>guides</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. Related decisions often include{" "}
                      <Link href="/crm" className={linkGreen}>CRM</Link>,{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>, and{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link>.
                    </p>
                  </div>
                </section>
                <section id="remote-scheduling-requirements" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Define requirements before comparing feature lists.">Core Requirements for Remote Team Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Remote scheduling buyers should rank needs by operational impact, not by feature volume. The most
                      effective tools are usually the ones that reduce coordination latency and exception handling work.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Automatic timezone conversion for every participant</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Clear role-based scheduling permissions and approvals</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Real-time alerts for changes and coverage gaps</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Configurable focus-time and no-meeting rules</span></li>
                    </ul>
                  </div>
                </section>
                <section id="coordination-across-timezones" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Timezone strategy is an operational design decision.">Managing Timezone and Coverage Complexity</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      High-performing remote teams define standard overlap windows and escalation coverage rules. This
                      prevents critical requests from stalling when local business hours do not overlap.
                    </p>
                    <p>
                      Businesses handling customer appointments can combine these patterns with{" "}
                      <Link href="/scheduling/guides/real-time-scheduling-explained" className={linkGreen}>
                        real-time scheduling
                      </Link>{" "}
                      and reminder automation.
                    </p>
                  </div>
                </section>
                <section id="integration-stack" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Remote execution improves when systems stay connected.">Integration Stack for Remote Operations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Integrations are central for distributed accountability. CRM links keep customer interactions
                      visible, while payroll and time tracking connections support accurate labor analysis.
                    </p>
                    <p>
                      Teams supporting field or hybrid work may also need data handoff to{" "}
                      <Link href="/field-service" className={linkGreen}>field service software</Link> to coordinate
                      dispatch and technician availability.
                    </p>
                  </div>
                </section>
                <section id="buying-and-rollout" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Pilot with metrics, then scale deliberately.">Buying and Rollout Checklist for Remote Teams</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a pilot for one function and track schedule conflict rate, response-time adherence, and booking
                      completion rate. Those metrics reveal whether the tool improves cross-timezone execution.
                    </p>
                    <p>
                      After pilot success, document scheduling governance and escalation paths before full deployment.
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
    title: "Scheduling Software for Remote Teams Explained | BeltStack Guide",
    description:
      "Learn how remote teams evaluate scheduling software for timezone coordination, coverage planning, and integration with CRM, payroll, and time tracking.",
    keywords: [
      "remote team scheduling software",
      "distributed workforce scheduling",
      "timezone scheduling tools",
      "scheduling software for remote teams",
      "virtual team scheduling",
      "employee scheduling remote work",
    ],
  };
}
