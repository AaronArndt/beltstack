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
    q: "What is multi-location scheduling?",
    a: "It is booking and staff availability managed across more than one site—each location with its own hours, rooms, time zone, and staff roster, under one admin account. Customers pick a branch (or the system routes them) before choosing a service and time.",
  },
  {
    q: "Do I need separate scheduling accounts per location?",
    a: "Usually no. Mature products let you add locations as entities with distinct calendars, services, and branding while reporting centrally. Separate accounts create sync nightmares; one tenant with location tags is the norm for franchises and regional chains.",
  },
  {
    q: "How do time zones affect multi-location scheduling?",
    a: "Each site should display availability in its local time. Remote HQ staff viewing all branches need clear labels—9 a.m. Denver vs 9 a.m. New York. Confirmations and reminders must use the location’s zone so clients and traveling staff do not miss appointments.",
  },
  {
    q: "Can one staff member work at multiple locations?",
    a: "Yes, but their calendar must aggregate availability and travel buffers across sites. Assign location-specific hours, block travel between branches, and avoid double-booking the same person in two cities without realistic drive-time padding.",
  },
  {
    q: "When does multi-location scheduling require field service software?",
    a: "When scheduling means dispatching mobile crews with job records, parts, and route optimization—not booking chairs in fixed branches. Multi-site salons and clinics stay scheduling-first; HVAC fleets with vans often add FSM even with multiple territories.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybookme.jpeg", rating: "4.4", bestFor: "Multi-location", reviewHref: getSchedulingReviewUrl("simplybookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Branch scheduling", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Per-location forms", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/multi-location-scheduling-explained";

export default function MultiLocationSchedulingExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Multi-Location Scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Multi-Location Scheduling Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How businesses schedule across branches—location-specific hours, staff, rooms, time zones, and
                    central reporting without duplicate booking systems per site.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-location scheduling means customers and staff interact with one brand but multiple physical
                      sites—each with its own hours, rooms, and roster. The operational goal is simple: let a client book
                      the downtown clinic or the suburban salon without calling, while headquarters sees utilization across
                      every branch in one dashboard.
                    </p>
                    <p>
                      Complexity arrives quietly. A stylist works Tuesdays downtown and Thursdays at the mall. Room B exists
                      only at one address. Holiday closures differ by state. Without location-aware rules, you get phantom
                      availability, angry walk-ins, and managers maintaining shadow spreadsheets per store.
                    </p>
                    <p>
                      Franchises and regional chains outgrow single-calendar tools first—often alongside{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>
                      . Pair this guide with{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>{" "}
                      when routing staff across locations, not just booking chairs.
                    </p>
                    <p>
                      Evaluate platforms on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Vertical
                      shortlists sit on{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages when a
                      franchise needs industry templates out of the box.
                    </p>
                  </div>
                </section>
                <section id="location-model" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Structure before marketing new links.">Build a Location Model</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Each branch should be a first-class entity: address, time zone, business hours, blackout dates, and
                      services offered at that site. Shared services (a standard haircut) can clone across locations;
                      location-only offerings (spa upgrade room) stay scoped to one site.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Location picker on booking</strong> — clients choose branch
                          before service and time.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Per-site resources</strong> — rooms, chairs, or equipment
                          tied to one address.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Central reporting</strong> — utilization and no-show rates
                          by location for ops reviews.
                        </span>
                      </li>
                    </ul>
                    <p>
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> are frequent picks
                      for multi-staff, multi-location service businesses.{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      helps when intake forms differ by clinic or studio location.
                    </p>
                  </div>
                </section>
                <section id="staff-across-sites" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="People who float between branches.">Staff Availability Across Sites</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Floating staff need one profile with location-specific working hours—not duplicate accounts. Block
                      travel buffers when someone books back-to-back at branches twenty miles apart. Manager overrides
                      should log why a slot was forced open to preserve audit trails.
                    </p>
                    <p>
                      Employee shift planning across stores overlaps with{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>
                      ; customer self-booking overlaps with{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> suit lighter
                      multi-person setups; deeper location trees often need SimplyBook.me or Setmore.
                    </p>
                  </div>
                </section>
                <section id="customer-experience" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What clients see on the public page.">Customer Booking Experience</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Public pages should state branch address, parking, and time zone on the confirmation. Embed location
                      maps on marketing sites with deep links to the correct sub-calendar. For national brands, consider
                      geo-based defaults while still letting clients override to another city when traveling.
                    </p>
                    <p>
                      Online booking mechanics—widgets, payments, reminders—are covered in{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software explained
                      </Link>
                      . Reduce conflicts as volume grows using{" "}
                      <Link href="/scheduling/guides/how-businesses-reduce-scheduling-conflicts" className={linkGreen}>
                        how businesses reduce scheduling conflicts
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="evaluate-tools" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Features that matter at two-plus sites.">How to Evaluate Multi-Location Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shortlist on location count, per-site branding, role-based admin (store manager vs HQ), and whether
                      mobile crews need dispatch instead of fixed-branch booking. Ask vendors for a pilot week at your
                      busiest branch before rolling enterprise-wide.
                    </p>
                    <p>
                      Compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>, read{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> reviews, and
                      anchor on{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      for feature matrices. Avoid{" "}
                      <Link href="/scheduling/guides/common-scheduling-mistakes-businesses-make" className={linkGreen}>
                        common scheduling mistakes
                      </Link>{" "}
                      like separate unmanaged accounts per store.
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
    title: "Multi-Location Scheduling Explained | BeltStack Guide",
    description:
      "Multi-location scheduling explained: branch hours, time zones, floating staff, location pickers, and how to evaluate scheduling software for franchises and regional chains.",
    keywords: [
      "multi-location scheduling",
      "scheduling software multiple locations",
      "franchise appointment booking",
      "branch scheduling",
      "multi-site calendar",
      "location-based booking",
      "scheduling for chains",
    ],
  };
}
