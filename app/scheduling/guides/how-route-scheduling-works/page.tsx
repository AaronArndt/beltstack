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
    q: "What is route scheduling?",
    a: "Route scheduling assigns multiple customer stops to technicians or vehicles in an order that respects drive time, service windows, and job duration—not just whether a single slot is open on a calendar. It sits between simple appointment booking and full field service dispatch.",
  },
  {
    q: "Is route scheduling the same as route optimization?",
    a: "Scheduling decides who works when and which jobs belong on a given day; optimization reorders or reassigns stops to reduce miles and late arrivals. Many platforms combine both once you exceed a few mobile stops per crew.",
  },
  {
    q: "Do I need route scheduling if customers book online?",
    a: "Online booking handles one appointment at a time. Route scheduling matters when each technician runs several stops per day and travel between jobs affects capacity. See route optimization for service businesses for when to upgrade beyond booking links.",
  },
  {
    q: "Can Calendly or Acuity do route scheduling?",
    a: "They excel at customer self-booking and reminders, not multi-stop sequencing across a territory. Light service businesses may pair booking tools with manual maps until volume justifies FSM or dedicated routing features.",
  },
  {
    q: "What data makes route scheduling accurate?",
    a: "Clean addresses, realistic job durations, customer time windows, technician skills, and start locations. Bad estimates produce pretty maps that fail by mid-morning—validate durations against actual job history before trusting automation.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service booking", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Multi-staff visits", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/how-route-scheduling-works";

export default function HowRouteSchedulingWorksPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Route scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Route Scheduling Works
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How mobile service businesses turn bookings into sequenced daily routes—and when scheduling
                    software alone is enough versus when drive-time planning takes over.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Route scheduling answers a question standard appointment tools skip: in what order should
                      today&apos;s jobs happen, and which technician should run which cluster? A salon books one chair
                      at a time; an HVAC crew might need eight stops across two towns before lunch. The calendar still
                      matters, but the unit of planning becomes the day&apos;s path—not a single 60-minute slot.
                    </p>
                    <p>
                      The workflow usually starts with demand: customer bookings, recurring maintenance contracts, or
                      dispatch-created work orders. Each stop carries an address, estimated duration, and often a
                      service window. Route scheduling layers travel time and capacity so you do not promise a 9 a.m.
                      install three counties away from the 10 a.m. callback.
                    </p>
                    <p>
                      For a buyer&apos;s view of when routes matter versus simple booking, read{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>
                      . For how FSM platforms calculate and adjust paths, see{" "}
                      <Link href="/field-service/guides/how-route-optimization-software-works" className={linkGreen}>
                        how route optimization software works
                      </Link>
                      .
                    </p>
                    <p>
                      Compare scheduling-first tools on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs field service software
                      </Link>{" "}
                      when trucks and jobs—not only meetings—define the day.
                    </p>
                  </div>
                </section>
                <section id="inputs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What the system needs before it can plan a route.">
                    Inputs: Stops, Windows, and Technician Constraints
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every route plan depends on the same operational data. Addresses must geocode reliably; job types
                      need duration defaults that reflect reality, not optimistic estimates from sales. Customer
                      windows—&quot;morning only&quot; or &quot;after 2 p.m.&quot;—become hard constraints the scheduler
                      cannot violate without a manual override.
                    </p>
                    <p>
                      Technician constraints include skills (install vs. maintenance), territories, vehicle capacity,
                      and shift start locations. A route that ignores where the van parks at 7 a.m. will look efficient
                      on screen and collapse by the third stop. Pair route thinking with{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-helps-field-service-businesses" className={linkGreen}>
                        how scheduling software helps field service businesses
                      </Link>{" "}
                      when you are still choosing a category.
                    </p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="From open jobs to a publishable day plan.">
                    The Route Scheduling Workflow
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A typical day unfolds in three passes. First, collect unassigned or loosely dated work into a
                      pool. Second, assign jobs to technicians by zone, skill, and hours available. Third, sequence
                      stops within each route to minimize drive time while honoring windows—either manually, with
                      assisted suggestions, or through full optimization engines.
                    </p>
                    <p>
                      Customer self-booking can feed the pool if availability rules embed travel buffers—see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . When bookings outpace manual sorting, dispatch takes over on a live board; the optimized route
                      is a starting point, not a contract, especially after emergencies or no-shows.
                    </p>
                  </div>
                </section>
                <section id="scheduling-vs-routing" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Booking links, sequencing, and dispatch boards.">
                    Scheduling, Routing, and Dispatch
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software secures the appointment: who is available, what service, confirmations and
                      reminders. Routing decides visit order and drive legs between confirmed stops. Dispatch executes
                      the plan and reassigns when a tech calls out or a job runs long.
                    </p>
                    <p>
                      Confusing the three leads to buying Calendly when you need Jobber—or buying ServiceTitan when
                      customers only visit your shop. Use{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>{" "}
                      for the booking layer, then graduate to route-aware tools when coordinators spend their mornings
                      on &quot;who is closest?&quot; phone calls.
                    </p>
                  </div>
                </section>
                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Signals you have outgrown single-slot booking.">
                    When to Adopt Route-Aware Scheduling
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Indicators include more than four mobile stops per technician per day, frequent overtime from
                      criss-crossing territories, and CSRs guessing drive time when promising windows. If missed
                      windows cost revenue or repeat visits, route scheduling belongs in your evaluation—not optional
                      nice-to-have mapping.
                    </p>
                    <p>
                      Demo with a real Tuesday: import actual addresses, run optimization, and ask dispatch what they
                      would change. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for appointment-heavy shortlists, then compare FSM reviews on the{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link> when routes and work
                      orders must stay in one system.
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
    title: "How Route Scheduling Works | BeltStack Guide",
    description:
      "Learn how route scheduling assigns and sequences mobile service stops, how it differs from appointment booking, and when to add route optimization.",
    keywords: [
      "route scheduling",
      "route scheduling software",
      "multi-stop scheduling",
      "service route planning",
      "mobile crew scheduling",
      "route optimization scheduling",
    ],
  };
}
