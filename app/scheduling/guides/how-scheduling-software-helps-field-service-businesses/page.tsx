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
    q: "Can HVAC or plumbing companies run on scheduling software alone?",
    a: "You can take inbound appointments and send reminders, but job records, dispatch, estimates, and invoicing usually need field service management as volume grows. Many shops start with a booking link and add FSM when trucks and billing become the bottleneck.",
  },
  {
    q: "What is the difference between scheduling and field service software for contractors?",
    a: "Scheduling optimizes how customers book a time slot. FSM optimizes how you run jobs, crews, parts, and revenue. Overlap exists in home service—read scheduling software vs field service software for a clear boundary before you buy.",
  },
  {
    q: "Does scheduling software include route optimization?",
    a: "Light scheduling tools rarely optimize multi-stop routes for technicians. Some pair with maps or third-party routing; heavy dispatch lives in FSM. See route optimization for service businesses for what booking tools can and cannot do.",
  },
  {
    q: "Should field service businesses use Calendly or Jobber for booking?",
    a: "Calendly-style tools excel at inbound self-booking links. Jobber and Housecall Pro bundle booking with quotes, work orders, and payments. Solo operators may start with scheduling; growing crews usually centralize on FSM to avoid two calendars.",
  },
  {
    q: "When should a field service shop switch from scheduling to FSM?",
    a: "When dispatch boards, parts, recurring maintenance contracts, and job billing matter more than finding a meeting time. If missed appointments cost revenue but job profitability is unclear, evaluate the field service hub and FSM shortlists alongside scheduling.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Inbound booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "FSM + client booking", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service operations", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-helps-field-service-businesses";

export default function HowSchedulingSoftwareHelpsFieldServiceBusinessesPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling for Field Service</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Helps Field Service Businesses
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Where booking tools fit for HVAC, plumbing, and home service—and when operations need full field
                    service management instead.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service businesses—HVAC, plumbing, electrical, cleaning, and mobile repair—need customers to
                      book visits without phone tag. Scheduling software provides public booking pages, automated
                      reminders, and calendar sync so office staff spend less time coordinating slots and more time
                      dispatching profitable work.
                    </p>
                    <p>
                      The category overlap confuses buyers: both scheduling and field service management (FSM) show
                      calendars. Scheduling optimizes inbound time booking; FSM optimizes jobs, crews, parts, estimates,
                      and invoicing. Many shops start scheduling-first and graduate to FSM when dispatch complexity
                      outgrows a booking link alone.
                    </p>
                    <p>
                      Draw the boundary in our guide on{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      . For service-business booking patterns—multi-staff, payments, recurring visits—see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .
                    </p>
                    <p>
                      Compare scheduling vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> and FSM platforms on the{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link>, including{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="inbound-booking" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="The booking front door.">Inbound Booking and Customer Self-Schedule</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A branded booking link on your website, Google Business Profile, or invoice email lets homeowners
                      pick service types and time windows you define. Buffers between jobs, minimum notice, and
                      service-area rules reduce impossible appointments before dispatch ever sees them.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> work for simple
                      intake;{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> adds
                      industry templates. Products like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>Jobber</Link> and{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      bundle client booking with quotes and work orders when you are ready for one system.
                    </p>
                  </div>
                </section>
                <section id="reminders-and-no-shows" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fewer wasted truck rolls.">Reminders, Confirmations, and Fewer Missed Visits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMS and email reminders before service windows cut no-shows and last-minute chaos in the office.
                      Easy reschedule links keep customers in control without endless phone calls. Scheduling tools
                      handle this well; FSM platforms often include the same layer tied to job records.
                    </p>
                    <p>
                      For field-specific tactics—dispatch buffers, same-day slots, capacity—read{" "}
                      <Link href="/field-service/guides/how-businesses-reduce-missed-appointments" className={linkGreen}>
                        how businesses reduce missed appointments
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="routes-and-dispatch" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Booking is not the same as dispatch.">Routes, Dispatch, and When FSM Takes Over</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software rarely replaces a dispatch board that assigns jobs by skill, territory, and
                      parts on the truck. Lightweight tools may show travel time; true route optimization and job context
                      live in FSM. Before buying routing add-ons, read{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>{" "}
                      to see what appointment schedulers can and cannot own.
                    </p>
                    <p>
                      When emergencies, recurring maintenance, and invoicing drive daily ops, shortlist on the{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link> and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      . Keep one system authoritative for customer promises to avoid double-booking across Calendly and
                      a dispatch calendar.
                    </p>
                  </div>
                </section>
                <section id="evaluating-stack" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Scheduling-only, FSM-only, or both.">How to Evaluate Your Stack</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Write one sentence: is our bottleneck customer self-booking, or running trucks and jobs? That
                      answer routes you to scheduling-first versus FSM-first evaluations. Solo operators and low job volume
                      often thrive on scheduling plus QuickBooks; multi-crew shops usually need job records, mobile apps,
                      and integrated payments in FSM.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for booking checklists and{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      when dispatch and billing lead. Compare scheduling head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> and FSM on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service compare</Link>.
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
    title: "How Scheduling Software Helps Field Service Businesses | BeltStack Guide",
    description:
      "How HVAC, plumbing, and home service businesses use scheduling for inbound booking and reminders—and when to adopt field service management instead.",
    keywords: [
      "scheduling software for field service",
      "HVAC appointment scheduling",
      "home service booking software",
      "field service vs scheduling software",
      "contractor online booking",
      "route optimization service business",
    ],
  };
}
