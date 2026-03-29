import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getFieldServiceCompareUrl, getFieldServiceReviewUrl, getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "Can I use scheduling software instead of FSM for a plumbing company?",
    a: "You can take inbound appointments with scheduling tools, but you still need job records, dispatch, estimates, invoicing, and often inventory. Most plumbing shops eventually adopt FSM (or a heavy two-tool stack). If you only need public booking, pair scheduling with a clear plan for job-to-cash elsewhere.",
  },
  {
    q: "Does field service software replace Calendly?",
    a: "Sometimes. Many FSM products include customer booking. Sometimes teams keep Calendly for sales or partnerships while FSM owns service jobs. Avoid two systems writing to the same calendar without rules—you will double-book.",
  },
  {
    q: "What is the fastest way to choose?",
    a: "Write one sentence: is our bottleneck customer self-booking, or running trucks and jobs? That answer routes you to scheduling-first versus FSM-first evaluations.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "FSM + booking", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service FSM", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
];

const PAGE_HREF = "/scheduling/guides/scheduling-software-vs-field-service-software";

export default function SchedulingSoftwareVsFieldServiceSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling vs FSM</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Software vs Field Service Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Clear boundaries between customer booking tools and job-based FSM—so you shortlist the right category
                    and avoid expensive rework.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Both categories live on a calendar, which confuses buyers. Scheduling software optimizes how
                      external people book time with you. Field service software optimizes how your organization runs jobs,
                      crews, and revenue. Overlap exists—especially in home service—but the primary buyer problem differs.
                    </p>
                    <p>
                      We publish this guide so teams stop forcing Calendly-shaped workflows onto dispatch-heavy
                      operations—or buying ServiceTitan-class complexity when they only needed a booking page.
                    </p>
                  </div>
                </section>
                <section id="scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Customer-facing time.">What Scheduling Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling tools excel at public links, reminders, video or phone appointments, intake forms, and
                      team routing for inbound meetings. Explore{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>
                        scheduling comparisons
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="fsm" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Jobs, trucks, money.">What Field Service Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FSM ties estimates, work orders, parts, labor, customer history, and invoicing to dispatched
                      technicians. When that is your core loop, start on the{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service hub
                      </Link>
                      , read{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose FSM
                      </Link>
                      , and compare vendors such as{" "}
                      <Link href={getFieldServiceCompareUrl("jobber-vs-housecall-pro")} className={linkGreen}>
                        Jobber vs Housecall Pro
                      </Link>{" "}
                      or{" "}
                      <Link href={getFieldServiceCompareUrl("connecteam-vs-jobber")} className={linkGreen}>
                        Connecteam vs Jobber
                      </Link>{" "}
                      when workforce tools enter the picture.
                    </p>
                  </div>
                </section>
                <section id="hybrid" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Rules that prevent double booking.">Hybrid Stacks That Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Hybrid stacks are fine when boundaries are explicit: for example, Calendly for sales discovery and
                      FSM for service appointments, with different calendars or clear ownership. Document which system
                      wins conflicts and how CSRs move a lead into a job record.
                    </p>
                    <p>
                      For route-heavy operations, also read{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>
                      .
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
              <GuideSidebar title="Tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Scheduling Software vs Field Service Software | BeltStack Guide",
    description:
      "Learn the difference between customer booking/scheduling tools and field service management (FSM) for jobs, dispatch, and invoicing—when to use each or both.",
  };
}
