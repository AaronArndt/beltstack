import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedTimeTrackingResources } from "@/components/guides/RelatedTimeTrackingResources";
import { getTimeTrackingCompareUrl, getTimeTrackingReviewUrl } from "@/lib/routes";

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
    q: "Is geofenced time tracking legal?",
    a: "Rules vary by jurisdiction and role. Employers often need notice, policies, and lawful bases for location collection. Treat this as an HR and legal topic—not only a software checkbox. Consult counsel for multi-state crews.",
  },
  {
    q: "Will technicians resist GPS clocks?",
    a: "Often yes if they feel surveilled rather than protected. Pair clear policies with practical benefits (fewer payroll disputes, faster approvals). If trust is low, geofencing can backfire and drive shadow timekeeping.",
  },
  {
    q: "How does this relate to FSM?",
    a: "Many contractors clock hours in workforce or time tools while jobs live in FSM. Map how those systems reconcile before you buy. See field service mobile apps and job costing guides for related evaluation threads.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", rating: "4.2", bestFor: "GPS & field visibility", reviewHref: getTimeTrackingReviewUrl("hubstaff") },
  { name: "Time Doctor", logoSrc: "/Logos/timedoctor.jpeg", rating: "4.1", bestFor: "Activity-aware tracking", reviewHref: getTimeTrackingReviewUrl("time-doctor") },
  { name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "Free team timers", reviewHref: getTimeTrackingReviewUrl("clockify") },
];

const PAGE_HREF = "/time-tracking/guides/geofenced-time-tracking-for-field-crews";

export default function GeofencedTimeTrackingForFieldCrewsPage() {
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
                    <li><Link href="/time-tracking" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Time Tracking</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Geofenced time tracking</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Geofenced Time Tracking for Field Crews
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Location-based clocks can reduce time theft and payroll disputes—or erode trust. How to evaluate
                    geofencing for contractors, what to disclose to crews, and when simpler timers are better.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Geofenced time tracking ties clock-in and clock-out to job sites or zones. For distributed crews, it
                      can automate proof of attendance and shorten payroll review. Used poorly, it signals micromanagement
                      and invites workarounds.
                    </p>
                    <p>
                      We frame this guide for owners and ops leads pairing time data with{" "}
                      <Link href="/payroll" className={linkGreen}>
                        payroll
                      </Link>
                      ,{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service
                      </Link>
                      , or job costing. Compare tools via{" "}
                      <Link href={getTimeTrackingCompareUrl("hubstaff-vs-time-doctor")} className={linkGreen}>
                        Hubstaff vs Time Doctor
                      </Link>{" "}
                      and our{" "}
                      <Link href="/time-tracking/best-time-tracking-software" className={linkGreen}>
                        best time tracking software
                      </Link>{" "}
                      roundup.
                    </p>
                  </div>
                </section>
                <section id="when-it-fits" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Compliance, multi-site, disputes.">When Geofencing Makes Sense</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Geofencing fits when crews move between many addresses, when wage and hour disputes are costly, or
                      when customers require proof of time on site. It fits poorly when technicians need deep focus without
                      feeling watched, or when cell coverage is unreliable unless offline rules are excellent.
                    </p>
                  </div>
                </section>
                <section id="policy" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Transparency beats stealth.">Policy, Notice, and Trust</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Publish what you collect, when GPS runs, and how managers use data. Train supervisors to coach on
                      outcomes—not only location pings. Align with your{" "}
                      <Link href="/hr" className={linkGreen}>
                        HR software
                      </Link>{" "}
                      policies and handbook updates when you roll out location features.
                    </p>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Sometimes a timer is enough.">Simpler Alternatives</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Job-based timers without GPS may be enough when foremen approve timesheets daily. Read{" "}
                      <Link href="/time-tracking/guides/time-tracking-vs-timesheets" className={linkGreen}>
                        time tracking vs timesheets
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile FSM apps for technicians
                      </Link>{" "}
                      before you default to location tracking.
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
              <GuideSidebar title="Time tracking tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedTimeTrackingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Geofenced Time Tracking for Field Crews | BeltStack Guide",
    description:
      "Evaluate GPS and geofenced time clocks for contractors: compliance, trust, payroll alignment, and when simpler timers beat location tracking.",
  };
}
