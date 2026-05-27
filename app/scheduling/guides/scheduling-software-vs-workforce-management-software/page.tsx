import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import {
  getFieldServiceReviewUrl,
  getPayrollReviewUrl,
  getSchedulingCompareUrl,
  getSchedulingReviewUrl,
  getTimeTrackingReviewUrl,
} from "@/lib/routes";

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
    q: "Is workforce management software the same as scheduling software?",
    a: "Not in the buyer sense most teams mean. Workforce management (WFM) covers shift planning, time clocks, labor compliance, and often payroll handoff. Scheduling software in our guides usually means customer appointment booking or meeting links—not warehouse shift grids.",
  },
  {
    q: "Can Calendly replace employee shift scheduling?",
    a: "Rarely. Calendly-style tools optimize inbound customer or prospect bookings. Hourly staff need shift templates, coverage rules, time-off workflows, and clock-in data for payroll. Use workforce or time-tracking tools for that layer.",
  },
  {
    q: "Do I need workforce management if I only book client appointments?",
    a: "If all scheduling is customer-facing and staff are salaried or flexible, appointment scheduling may suffice. Retail, hospitality, and multi-location hourly teams usually add WFM when labor cost and compliance drive decisions—not when the pain is public booking links.",
  },
  {
    q: "How does payroll fit in?",
    a: "Shift schedules define expected hours; time tracking records actual hours; payroll pays people. WFM suites often connect those steps. See the payroll hub when pay runs and tax compliance are the bottleneck—not calendar UX.",
  },
  {
    q: "What about field crews?",
    a: "Mobile crews often need job-based calendars and dispatch, not generic shift grids alone. Read appointment vs employee scheduling and scheduling vs field service software before forcing one category to cover trucks, jobs, and hourly shifts.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Customer booking", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Connecteam", logoSrc: "/Logos/connecteam.jpeg", rating: "4.3", bestFor: "Workforce & shifts", reviewHref: getFieldServiceReviewUrl("connecteam") },
  { name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.5", bestFor: "Time tracking", reviewHref: getTimeTrackingReviewUrl("clockify") },
];

const PAGE_HREF = "/scheduling/guides/scheduling-software-vs-workforce-management-software";

export default function SchedulingSoftwareVsWorkforceManagementSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling vs workforce management</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Software vs Workforce Management Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Customer appointment booking versus shift planning, time clocks, and labor operations—two scheduling
                    problems that share a calendar icon but serve different buyers.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      &ldquo;Scheduling software&rdquo; on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> usually means tools that let
                      customers or prospects book time—Calendly, Acuity, Setmore—not platforms that publish hourly shift
                      grids for retail floors. Workforce management (WFM) software answers a different question: who is
                      on the clock, when are they expected to work, and how do actual hours flow to payroll?
                    </p>
                    <p>
                      Both categories show blocks on a calendar, which leads teams to buy the wrong product or run
                      overlapping tools without clear ownership. Appointment schedulers optimize public links, reminders,
                      and payments at booking. WFM tools optimize coverage, labor law constraints, time-off requests, and
                      handoff to the{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link> and{" "}
                      <Link href="/payroll" className={linkGreen}>payroll hub</Link>.
                    </p>
                    <p>
                      For the customer-versus-employee split in plain language, read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>
                      . For rules that place slots without manual email, see{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      .
                    </p>
                    <p>
                      Shortlist appointment tools on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link> and{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>
                      . When labor cost, compliance, and pay runs dominate, pair this guide with{" "}
                      <Link href="/payroll/guides/how-payroll-software-works" className={linkGreen}>
                        how payroll software works
                      </Link>{" "}
                      and time-tracking reviews such as{" "}
                      <Link href={getTimeTrackingReviewUrl("clockify")} className={linkGreen}>Clockify</Link>.
                    </p>
                  </div>
                </section>
                <section id="appointment-scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Customer-facing slots and booking links.">What Scheduling Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software in the appointment sense puts external people into confirmed time blocks:
                      pick a service, choose availability, pay or confirm, receive reminders. Round-robin distributes
                      inbound meetings across a sales team; service businesses use branded pages with intake forms.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> on our{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        scheduling compare
                      </Link>{" "}
                      pages. For service-business workflows, see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="workforce-management" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Shifts, coverage, and labor operations.">What Workforce Management Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Workforce management defines who works which shifts, handles swap and time-off requests, and keeps
                      departments staffed against demand. It pairs with time clocks, geofencing for field crews, and
                      payroll systems—topics covered on the{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link> rather than on public
                      booking pages.
                    </p>
                    <p>
                      Deskless workforce platforms like{" "}
                      <Link href={getFieldServiceReviewUrl("connecteam")} className={linkGreen}>Connecteam</Link> blend
                      shift scheduling, internal comms, and time tracking. Payroll execution lives downstream:{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className={linkGreen}>Gusto</Link> and similar tools
                      consume approved hours. Read{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>{" "}
                      when internal coverage—not customer booking—is the bottleneck.
                    </p>
                  </div>
                </section>
                <section id="field-crews" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Jobs, trucks, and hourly labor together.">Where Field Teams Blur the Line</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service adds a third layer: customer jobs tied to addresses, skills, and drive time—not
                      generic shift grids alone. A plumbing shop may use appointment booking for inbound calls, WFM
                      for on-call rotations, and field service software for dispatched jobs. None of those replace the
                      others by default.
                    </p>
                    <p>
                      Before consolidating, read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/time-tracking/guides/geofenced-time-tracking-for-field-crews" className={linkGreen}>
                        geofenced time tracking for field crews
                      </Link>
                      . Route-heavy operations should also see{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="choose" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Match software to the calendar failure.">How to Choose for Your Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Write one sentence: is our bottleneck customers cannot book us, or we cannot staff shifts and pay
                      people accurately? The first points to appointment schedulers on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>; the second points to WFM,
                      time tracking, and{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link>.
                    </p>
                    <p>
                      Hybrid stacks work when boundaries are explicit—Calendly for sales discovery, WFM for hourly
                      floors, FSM for service jobs. Document which system wins calendar conflicts. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for booking checklists and browse all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> for deeper
                      evaluations.
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
    title: "Scheduling Software vs Workforce Management Software | BeltStack Guide",
    description:
      "Learn the difference between customer appointment scheduling and workforce management for shifts, time tracking, and payroll—and when you need one or both.",
    keywords: [
      "scheduling software vs workforce management",
      "appointment scheduling vs shift scheduling",
      "workforce management software",
      "employee scheduling vs Calendly",
      "WFM vs booking software",
      "shift scheduling and payroll",
    ],
  };
}
