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
    q: "What is a mobile scheduling app?",
    a: "A mobile scheduling app lets staff manage availability, bookings, and schedule updates from a phone or tablet. It extends desktop scheduling workflows to field and on-the-go teams.",
  },
  {
    q: "Do mobile scheduling apps work offline?",
    a: "Many apps support limited offline actions, but core scheduling sync typically requires internet access. Teams should verify offline behavior before rollout.",
  },
  {
    q: "Who benefits most from mobile scheduling?",
    a: "Remote teams, field service staff, managers covering multiple sites, and any team that cannot stay at a desk all day benefit from mobile-first scheduling workflows.",
  },
  {
    q: "Can mobile apps reduce no-shows?",
    a: "Yes. Push notifications, fast confirmations, and real-time schedule edits help teams catch conflicts earlier and keep appointments on track.",
  },
  {
    q: "What integrations matter for mobile scheduling?",
    a: "Calendar sync, CRM, payroll, and time tracking integrations are high priority because they reduce duplicate entry and improve operational accuracy.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Mobile booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "On-the-go teams", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.png", rating: "4.5", bestFor: "Fast mobile setup", reviewHref: getSchedulingReviewUrl("youcanbookme") },
];

const PAGE_HREF = "/scheduling/guides/mobile-scheduling-apps-explained";

export default function MobileSchedulingAppsExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Mobile Scheduling Apps Explained</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Mobile Scheduling Apps Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How mobile scheduling apps work, where they help most, and what business buyers should evaluate before adopting.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mobile scheduling apps bring appointment and shift control to teams that work away from desks.
                      Instead of waiting to get back to a laptop, managers and staff can confirm jobs, shift coverage,
                      and changes in real time.
                    </p>
                    <p>
                      For many businesses, mobile access is no longer optional. Coverage gaps and no-shows are often
                      resolved in minutes when teams can act from a phone, while delayed updates create costly labor and
                      customer service issues.
                    </p>
                    <p>
                      If you are comparing foundational workflows first, review{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/self-service-scheduling-explained" className={linkGreen}>
                        self-service scheduling
                      </Link>
                      .
                    </p>
                    <p>
                      Continue your shortlist through the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>guide library</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for guides</Link>. If teams log hours in the field, pair evaluation with{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link> and{" "}
                      <Link href="/field-service" className={linkGreen}>field service</Link>.
                    </p>
                  </div>
                </section>
                <section id="core-mobile-capabilities" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="The features that matter most on mobile.">Core Mobile Scheduling Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Strong mobile scheduling apps do more than display a calendar. They support fast edits, team
                      communication, and controlled permissions from small screens.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Real-time sync</strong> — updates appear instantly across devices to prevent conflicts.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Push alerts</strong> — schedule changes and reminders reach staff quickly.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Role-based controls</strong> — managers can approve edits while staff view relevant shifts.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Fast rescheduling</strong> — drag/drop or one-tap reassignment for urgent changes.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="mobile-use-cases" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Where mobile scheduling creates measurable ROI.">Best-Fit Mobile Scheduling Use Cases</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-site and service businesses usually see the quickest gains. Location leads can react to
                      demand spikes and shift callouts immediately, which improves labor utilization and service speed.
                    </p>
                    <p>
                      Mobile access also supports remote-first organizations and distributed teams. For broader strategy,
                      see{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="integration-and-security" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Mobile workflows are only as good as connected systems.">Integration and Security Considerations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prioritize apps that integrate with{" "}
                      <Link href="/crm" className={linkGreen}>CRM</Link>,{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link>, and{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>. Integration reduces manual
                      reconciliation and makes labor and revenue reporting more trustworthy.
                    </p>
                    <p>
                      On the security side, require two-factor authentication, device session controls, and access
                      logging. Mobile convenience should never come at the expense of account governance.
                    </p>
                  </div>
                </section>
                <section id="rollout-checklist" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Implementation discipline improves adoption.">How to Roll Out Mobile Scheduling Apps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with one region or team, define mobile edit permissions, and publish a standard change
                      approval workflow. Pilot feedback usually surfaces where alerts and role settings need tuning.
                    </p>
                    <p>
                      Then benchmark results against no-show rate, schedule conflict rate, and manager response time so
                      rollout decisions are driven by measurable outcomes.
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
    title: "Mobile Scheduling Apps Explained | BeltStack Guide",
    description:
      "Understand mobile scheduling apps for business teams, including core features, integrations, security requirements, and rollout best practices.",
    keywords: [
      "mobile scheduling apps",
      "mobile employee scheduling",
      "mobile appointment scheduling",
      "scheduling app for teams",
      "field scheduling mobile app",
      "real time scheduling app",
    ],
  };
}
