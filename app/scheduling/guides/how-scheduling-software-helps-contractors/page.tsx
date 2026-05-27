import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getFieldServiceReviewUrl, getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "Can general contractors run on scheduling software alone?",
    a: "Scheduling handles inbound estimate visits, inspections, and client callbacks well. Once you dispatch crews, track change orders, and invoice by job phase, field service management usually becomes the system of record. Many contractors start with a booking link and add FSM as job volume grows.",
  },
  {
    q: "What is the difference between scheduling and field service software for contractors?",
    a: "Scheduling optimizes how customers book a time slot—site visits, consultations, or service windows. FSM optimizes jobs, crews, parts, estimates, and billing. Overlap exists in trades; read scheduling software vs field service software before buying the wrong category.",
  },
  {
    q: "Does scheduling software include route optimization for contractors?",
    a: "Light scheduling tools rarely optimize multi-stop routes across job sites. Some show travel buffers; heavy routing and dispatch live in FSM. See route optimization for service businesses for what appointment schedulers can and cannot own.",
  },
  {
    q: "Which scheduling tools fit solo contractors vs crews?",
    a: "Solo operators often use Calendly or Setmore for estimate calls and small jobs. Multi-crew general contractors usually evaluate FSM platforms with client booking built in. Compare contractor picks on scheduling best-for pages and FSM reviews when dispatch complexity rises.",
  },
  {
    q: "Should contractors use Calendly or Acuity for site visits?",
    a: "Both work for booking consultations with intake questions and reminders. Acuity adds stronger forms and deposits; Calendly excels at simple shareable links. When jobs need work orders and crew assignment, graduate to field service tools tied to the same customer record.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Estimate & consult booking", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service appointment booking", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Intake & deposits", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-helps-contractors";

export default function HowSchedulingSoftwareHelpsContractorsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling for Contractors</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Helps Contractors
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How general contractors and trade pros use booking tools for estimates, site visits, and client
                    appointments—and when job dispatch needs field service management instead.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractors—general contractors, remodelers, electricians, plumbers, and specialty trades—spend
                      hours coordinating estimate visits, inspections, and client walkthroughs. Scheduling software
                      provides public booking links, automated reminders, and calendar sync so office staff spend less
                      time on phone tag and more time moving jobs forward.
                    </p>
                    <p>
                      The buyer confusion mirrors other mobile trades: scheduling and field service management both show
                      calendars. Scheduling optimizes inbound time booking—when a homeowner can meet for an estimate.
                      FSM optimizes jobs, crews, materials, change orders, and invoicing. Solo operators and low-volume
                      shops often start scheduling-first; multi-crew contractors usually need FSM as the authoritative
                      job record.
                    </p>
                    <p>
                      Draw the boundary in our guide on{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      . For field-service-specific patterns—dispatch, truck rolls, job billing—see{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-helps-field-service-businesses" className={linkGreen}>
                        how scheduling software helps field service businesses
                      </Link>
                      .
                    </p>
                    <p>
                      Compare scheduling vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Trade
                      shortlists live under{" "}
                      <Link href="/scheduling/best-for/general-contractors" className={linkGreen}>
                        scheduling best for general contractors
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/best-for/service-business" className={linkGreen}>
                        scheduling best for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="inbound-booking" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Estimates, consults, and site visits.">Inbound Booking for Contractor Appointments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A branded booking link on your website or quote email lets homeowners pick estimate windows you
                      define. Service-area rules, minimum notice, and buffers between site visits reduce impossible
                      appointments before anyone drives to the job. Intake forms capture project type, address, and
                      photos so estimators arrive prepared.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      work for consultation booking;{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> add
                      service-business templates. When you need quotes and work orders in one system, FSM products like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>Jobber</Link> bundle client
                      booking with job records.
                    </p>
                  </div>
                </section>
                <section id="reminders-and-no-shows" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fewer wasted site visits.">Reminders, Confirmations, and Fewer Missed Appointments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMS and email reminders before estimate windows cut no-shows and last-minute reschedules that
                      idle estimators. Easy reschedule links keep homeowners in control without tying up the office
                      line. Scheduling tools handle this well; FSM platforms often tie the same reminders to job
                      records once work is sold.
                    </p>
                    <p>
                      Read{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      for tactics that apply across trades.{" "}
                      <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>
                        Square Appointments
                      </Link>{" "}
                      fits contractors already on Square for payments and invoicing.
                    </p>
                  </div>
                </section>
                <section id="routes-and-dispatch" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Booking is not the same as dispatch.">Routes, Crew Dispatch, and When FSM Takes Over</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software rarely replaces a dispatch board that assigns crews by skill, territory, and
                      materials on site. Lightweight tools may show travel buffers; true route optimization and
                      multi-job context live in FSM. Before buying routing add-ons, read{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>{" "}
                      to see what appointment schedulers can and cannot own.
                    </p>
                    <p>
                      When change orders, phased billing, and crew calendars drive daily ops, shortlist on the{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link>. Keep one system
                      authoritative for customer promises to avoid double-booking across a Calendly link and a dispatch
                      calendar.
                    </p>
                  </div>
                </section>
                <section id="evaluating-stack" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Scheduling-only, FSM-only, or both.">How to Evaluate Your Contractor Stack</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Write one sentence: is our bottleneck customer self-booking for estimates, or running crews and
                      jobs? That answer routes you to scheduling-first versus FSM-first evaluations. Solo contractors
                      often thrive on scheduling plus accounting; growing GC shops usually need job records, mobile apps,
                      and integrated payments in FSM.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for booking checklists and compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>. Read reviews
                      including{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> when
                      narrowing a contractor shortlist.
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
    title: "How Scheduling Software Helps Contractors | BeltStack Guide",
    description:
      "How general contractors and trade pros use scheduling for estimates, site visits, and reminders—and when to adopt field service management for crew dispatch.",
    keywords: [
      "contractor scheduling software",
      "general contractor appointment booking",
      "contractor estimate scheduling",
      "scheduling vs field service contractors",
      "trade contractor online booking",
      "route optimization contractors",
    ],
  };
}
