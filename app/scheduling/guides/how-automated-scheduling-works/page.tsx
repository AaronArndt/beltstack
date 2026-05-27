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
    q: "What is automated scheduling?",
    a: "Automated scheduling uses rules—availability windows, buffers, round-robin, minimum notice—to place appointments without manual back-and-forth. Confirmations, reminders, and calendar updates run automatically once a customer or system triggers a booking.",
  },
  {
    q: "Can automated scheduling replace a human scheduler?",
    a: "For straightforward, repeatable bookings—consultations, salon visits, standard service calls—often yes. Complex dispatch, emergencies, and skill-based routing still need human judgment or field service dispatch boards.",
  },
  {
    q: "What triggers automation besides customer self-booking?",
    a: "CRM workflows, web forms, payment events, and API integrations can create holds or confirmed slots. Zapier-style connectors and native integrations vary by vendor—test your actual lead source, not a demo checkbox.",
  },
  {
    q: "How do reminders fit into automation?",
    a: "Most tools send email by default; SMS costs extra. Reminder timing (24 hours, 2 hours) and follow-ups for no-shows are configurable. Service businesses with high no-show rates should test SMS and deposit rules together.",
  },
  {
    q: "Does automation work for teams?",
    a: "Yes—round-robin, collective availability, and per-staff buffers automate fair distribution. Team plans differ by vendor; compare Calendly and YouCanBook.me team features before assuming equal automation depth.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Workflow automation", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Round-robin rules", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Zoho Bookings", logoSrc: "/Logos/zoho.png", rating: "4.3", bestFor: "CRM-triggered booking", reviewHref: getSchedulingReviewUrl("zoho-bookings") },
];

const PAGE_HREF = "/scheduling/guides/how-automated-scheduling-works";

export default function HowAutomatedSchedulingWorksPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Automated scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Automated Scheduling Works
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Rules, triggers, and integrations that place appointments without manual email—and where automation
                    stops for dispatch-heavy operations.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated scheduling means the system—not a coordinator—decides which slots are valid, who gets the
                      appointment, and what happens after booking. Customers pick from real availability; staff calendars
                      update; confirmations and reminders fire on a schedule you define once.
                    </p>
                    <p>
                      Automation depth varies. A solo consultant might only need minimum notice and buffer time. A five-person
                      sales pod needs round-robin fairness. A home service shop may automate intake and reminders while
                      humans still assign trucks from a dispatch board.
                    </p>
                    <p>
                      This guide explains the moving parts so you can demo tools with real rules—not generic “we integrate
                      with everything” claims. Start from the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>, and{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software explained
                      </Link>{" "}
                      for the customer-facing layer.
                    </p>
                    <p>
                      Field teams with job-based calendars should also read{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>{" "}
                      when automation must respect skills, territories, and drive time—not only open meeting slots.
                    </p>
                  </div>
                </section>
                <section id="rules" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Availability engines and buffers.">Scheduling Rules That Run Automatically</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Core rules include working hours, appointment length, padding before and after, maximum bookings per
                      day, and minimum booking lead time. Calendar sync ensures busy blocks from Outlook or Google disappear
                      from public availability instantly—or within the sync interval you accept.
                    </p>
                    <p>
                      Team routing adds round-robin, priority staff, or “collective” pools where any qualified person can
                      take the slot.{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        Scheduling software for teams
                      </Link>{" "}
                      compares how vendors implement fairness and overflow. See{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>
                        Calendly vs YouCanBook.me
                      </Link>{" "}
                      for a head-to-head on team automation.
                    </p>
                  </div>
                </section>
                <section id="triggers" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Bookings from outside the booking page.">Triggers and Integrations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automation extends beyond the public link. CRM stages, paid invoices, chatbots, and web forms can create
                      tentative holds or confirmed events. Video conferencing tools auto-generate meeting URLs. Payment
                      capture at booking reduces manual follow-up for deposits.
                    </p>
                    <p>
                      Map your lead path before buying: if bookings must originate in HubSpot or Zoho, confirm native or
                      middleware support.{" "}
                      <Link href={getSchedulingReviewUrl("zoho-bookings")} className={linkGreen}>Zoho Bookings</Link>{" "}
                      targets Zoho CRM users;{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>{" "}
                      emphasizes broad integrations on paid tiers. Browse{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>{" "}
                      for current integration notes per product.
                    </p>
                  </div>
                </section>
                <section id="comms" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Confirmations, reminders, follow-ups.">Automated Customer Communication</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      After a slot is booked, workflows send confirmation email, calendar invites, and timed reminders.
                      Cancellation and reschedule links let customers self-serve changes within policy—reducing inbox load
                      for coordinators.
                    </p>
                    <p>
                      Service businesses with tight windows should pair automation with realistic capacity—see{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>.{" "}
                      When jobs—not meetings—are the unit of work, compare{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="limits" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Humans still matter on peak days.">Where Automation Ends</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automation rarely encodes every exception: technician call-outs, parts delays, weather, or membership
                      priority. Mature shops treat the calendar as a proposal dispatch can override—document handoff in{" "}
                      <Link href="/scheduling/guides/how-businesses-schedule-employees-efficiently" className={linkGreen}>
                        how businesses schedule employees efficiently
                      </Link>{" "}
                      when internal coverage is part of the same problem.
                    </p>
                    <p>
                      Evaluate tools with a week of real appointments, not a sandbox. Use{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for pages</Link> and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      to structure demos around your rules, not vendor defaults.
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
              <GuideSidebar title="Automation-friendly tools" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Automated Scheduling Works | BeltStack Guide",
    description:
      "How automated scheduling uses rules, calendar sync, integrations, and reminders to book appointments—and where human dispatch still takes over.",
    keywords: [
      "automated scheduling",
      "scheduling automation",
      "automated appointment booking",
      "round-robin scheduling automation",
      "scheduling reminders automation",
      "Calendly automation",
    ],
  };
}
