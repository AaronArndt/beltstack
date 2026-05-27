import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingCompareUrl, getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "What is technician scheduling?",
    a: "Technician scheduling assigns field work—jobs with locations, skills, and durations—to the right person at the right time. It differs from booking a client into an open slot because dispatch must respect territories, drive time, parts, and same-day changes.",
  },
  {
    q: "Is technician scheduling the same as employee shift scheduling?",
    a: "Not exactly. Shift scheduling plans who is on duty; technician scheduling plans which jobs those people execute. Many shops need both—see how shift scheduling software works for internal labor grids.",
  },
  {
    q: "Can scheduling tools like Calendly schedule technicians?",
    a: "They can block team calendars and route inbound bookings with round-robin, but they lack job context, dispatch boards, and field workflows. Light teams may start there; growing crews usually move to FSM—see scheduling vs field service software.",
  },
  {
    q: "How does dispatch interact with technician schedules?",
    a: "The published day is a plan dispatch can override when emergencies, no-shows, or overtime appear. Mobile apps push updates to technicians; customers get ETA or reminder messages when the platform supports it.",
  },
  {
    q: "What should I demo when evaluating technician scheduling?",
    a: "Use a real week: recurring maintenance, emergency insert, skill mismatch, and a tech call-out. Watch how fast dispatch reassigns without breaking customer windows—and whether billing and work orders stay attached to the job.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Small service teams", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team routing", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Staff-specific booking", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-technician-scheduling-works";

export default function HowTechnicianSchedulingWorksPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Technician scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Technician Scheduling Works
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How service businesses assign jobs to field technicians—skills, territories, dispatch, and the
                    line between appointment booking tools and field service management.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technician scheduling is the operational layer that connects customer demand to people in trucks.
                      Unlike a consultant&apos;s Calendly link, each row on the board is a job: address, scope, parts,
                      estimated duration, and often a priority or SLA. The goal is feasible days for techs and reliable
                      windows for customers—not merely filling empty calendar blocks.
                    </p>
                    <p>
                      Small teams sometimes blend public booking with a shared spreadsheet until exceptions pile up:
                      wrong skill assigned, double-booked van, or a CSR promising a time dispatch cannot honor. Mature
                      operations centralize jobs, technician profiles, and the live board so changes propagate to mobile
                      apps and customer notifications in one motion.
                    </p>
                    <p>
                      For platform depth—skills matrices, optimization, and FSM-native workflows—read{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      . For internal who-is-on-duty planning, see{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>
                      . For habits that scale past chaos, see{" "}
                      <Link href="/scheduling/guides/how-businesses-schedule-employees-efficiently" className={linkGreen}>
                        how businesses schedule employees efficiently
                      </Link>
                      .
                    </p>
                    <p>
                      Shortlist tools on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>, and{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-helps-field-service-businesses" className={linkGreen}>
                        how scheduling software helps field service businesses
                      </Link>{" "}
                      before assuming you need a full FSM suite on day one.
                    </p>
                  </div>
                </section>
                <section id="booking-vs-jobs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Slots on a calendar versus jobs on a board.">
                    Appointment Booking vs Job-Based Scheduling
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Appointment scheduling optimizes the moment a customer picks a time: availability rules, buffers,
                      intake forms, payments. Technician scheduling optimizes who executes which work order once demand
                      exists—often with dispatch adjusting the plan hourly.
                    </p>
                    <p>
                      Scheduling tools can route inbound bookings to qualified staff with round-robin or per-tech links—
                      useful for solo plumbers and small agencies. When jobs need parts, callbacks, and route sequencing,
                      evaluate{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-route-scheduling-works" className={linkGreen}>
                        how route scheduling works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="constraints" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What systems check before assigning a job.">
                    Skills, Territories, and Capacity
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Assignment engines weigh more than open hours. Skill tags ensure only certified techs receive
                      certain job types; territories keep crews in zones they know; capacity caps prevent overloading a
                      van with more hours of work than a shift allows. Drive time between stops is part of capacity,
                      not an afterthought.
                    </p>
                    <p>
                      Customer-facing rules still matter: buffers after long installs, minimum notice for same-day work,
                      and team visibility so CSRs do not sell slots that violate internal limits. Compare team features
                      in{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>
                        Calendly vs YouCanBook.me
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>{" "}
                      when booking—not dispatch—is still your front door.
                    </p>
                  </div>
                </section>
                <section id="dispatch-loop" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Plan, publish, adjust, notify.">The Dispatch and Mobile Loop</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Morning publish sends the day&apos;s queue to technician phones: addresses, notes, forms, and
                      sometimes turn-by-turn order. Dispatch monitors progress; completed jobs drop off, delays ripple
                      forward, and emergencies insert with explicit reassignment. Strong loops update customers when ETAs
                      slip—pair with{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>{" "}
                      for reminder tactics on the appointment side.
                    </p>
                    <p>
                      Without mobile adoption, the board is fiction. Evaluate whether techs will actually clock in,
                      upload photos, and mark complete in the same app that received the schedule—especially on{" "}
                      <Link href="/scheduling/guides/how-small-businesses-use-scheduling-software" className={linkGreen}>
                        how small businesses use scheduling software
                      </Link>{" "}
                      versus dedicated FSM mobile apps.
                    </p>
                  </div>
                </section>
                <section id="choose-depth" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Booking-first, hybrid, or FSM-first.">
                    Choosing the Right Scheduling Depth
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Booking-first fits predictable client time with minimal travel complexity. Hybrid teams use
                      scheduling for inbound demand and spreadsheets or light dispatch until volume forces FSM.
                      FSM-first fits multiple crews, inventory on trucks, and billing tied to job completion.
                    </p>
                    <p>
                      Run a one-week pilot with real jobs before buying. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for appointment-heavy evaluations, then browse{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      when technician scheduling, routes, and work orders must share one database.
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
              <GuideSidebar title="Team scheduling tools" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Technician Scheduling Works | BeltStack Guide",
    description:
      "Learn how technician scheduling assigns field jobs by skills, territories, and capacity—and how it differs from shift planning and appointment booking.",
    keywords: [
      "technician scheduling",
      "field technician scheduling",
      "technician scheduling software",
      "dispatch scheduling",
      "schedule field technicians",
      "service technician calendar",
    ],
  };
}
