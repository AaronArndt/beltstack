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
    q: "Can scheduling software replace a help desk?",
    a: "No. Help desks own tickets, SLAs, and conversation history; scheduling software owns time slots and reminders. Most teams integrate both—customers book a callback while agents work cases in Zendesk, Freshdesk, or similar.",
  },
  {
    q: "What scheduling features matter most for customer service teams?",
    a: "Round-robin or skill-based routing, buffer times between calls, calendar sync to prevent double-booking, automated reminders, and intake forms that capture account or ticket context before the meeting.",
  },
  {
    q: "Should support teams use Calendly or Acuity?",
    a: "Calendly excels at fast booking links and team round-robin for discovery-style calls. Acuity adds heavier intake forms and packages—useful when onboarding or success sessions need structured data. Compare both on our scheduling reviews before standardizing.",
  },
  {
    q: "How does scheduling reduce missed support callbacks?",
    a: "Confirmations, SMS or email reminders, and easy reschedule links cut no-shows the same way they do for salons. Pair with clear cancellation policies so agents do not sit idle. See how scheduling software reduces no-shows for tactics.",
  },
  {
    q: "When should customer service use employee shift scheduling instead?",
    a: "Shift tools plan who is on the queue hour by hour; appointment schedulers plan when a specific customer talks to a specific agent. High-volume call centers often need both layers—read appointment scheduling vs employee scheduling for boundaries.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Round-robin callbacks", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Intake forms", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.3", bestFor: "Custom booking flows", reviewHref: getSchedulingReviewUrl("youcanbookme") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-helps-customer-service-businesses";

export default function HowSchedulingSoftwareHelpsCustomerServiceBusinessesPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling for Customer Service</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Helps Customer Service Businesses
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How support and success teams use booking tools for callbacks, onboarding calls, and agent
                    routing—without replacing your help desk.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customer service businesses live on timely conversations—callbacks, escalations, onboarding
                      sessions, and renewal check-ins. When agents and customers play email tag to find a time, cases
                      stall and CSAT drops. Scheduling software gives customers a self-serve way to book the right person
                      while respecting real availability, buffers, and time zones.
                    </p>
                    <p>
                      The fit is not about replacing tickets or chat queues. Help desks still own case history, SLAs, and
                      macros. Scheduling owns the moment someone commits to a live conversation: confirmations,
                      reminders, intake questions, and calendar sync so agents are not double-booked across tools.
                    </p>
                    <p>
                      For how booking engines work under the hood, read{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      . For team routing patterns, see{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      .
                    </p>
                    <p>
                      Shortlist vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>
                      . If your bottleneck is shift coverage on a queue—not booking a specific callback—compare{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment vs employee scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="callback-and-onboarding" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Structured time with customers.">Callbacks, Onboarding, and Success Calls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Support teams use scheduling for tier-two callbacks, implementation kickoffs, and quarterly business
                      reviews. A public link in a ticket auto-reply or knowledge base article lets customers pick a slot
                      without waiting for an agent to reply. Intake forms capture account ID, product area, or ticket
                      number so the meeting starts informed.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> is common for
                      fast round-robin across agents;{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      suits longer onboarding flows with multiple question types.{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> helps
                      when you need custom fields or branding on every booking page.
                    </p>
                  </div>
                </section>
                <section id="routing-and-availability" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Right agent, right time.">Routing, Buffers, and Calendar Sync</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Round-robin distributes new bookings across available agents; staff-specific links route escalations
                      to specialists. Buffer times between calls prevent back-to-back burnout and give agents time to log
                      notes. Calendar sync with Google or Outlook reads busy blocks from other tools so a sales demo and
                      a support callback do not collide on the same calendar.
                    </p>
                    <p>
                      Time-zone detection matters when customers are global—scheduling tools show slots in the visitor&apos;s
                      zone while storing UTC internally. For feature checklists, use{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="help-desk-integration" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Scheduling alongside tickets, not instead of them.">
                    Working With Help Desks and CRM
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most SMB stacks keep Zendesk, Freshdesk, Intercom, or HubSpot as the system of record and add
                      scheduling for the live conversation layer. Zapier, native integrations, or embeddable widgets pass
                      booking details into tickets so agents see who booked and when. Avoid asking customers to repeat
                      context they already entered in a form.
                    </p>
                    <p>
                      Sales and success teams often share the same scheduling vendor as support for a consistent customer
                      experience. Compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> before rolling out
                      org-wide booking links.
                    </p>
                  </div>
                </section>
                <section id="reducing-missed-callbacks" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fewer empty slots on the calendar.">Reducing Missed Callbacks and No-Shows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated confirmations and reminder sequences—email and SMS where enabled—cut missed support
                      calls the same way they reduce salon no-shows. Clear reschedule and cancel links respect agent time
                      while keeping the customer in control. Some teams add minimum notice rules so same-day chaos does
                      not flood the queue.
                    </p>
                    <p>
                      For a deeper look at reminder timing and deposit strategies, read{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      . Common scheduling problems—double bookings, timezone mistakes—are covered in{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
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
    title: "How Scheduling Software Helps Customer Service Businesses | BeltStack Guide",
    description:
      "How support and success teams use scheduling software for callbacks, round-robin routing, reminders, and help desk integration—without replacing tickets.",
    keywords: [
      "scheduling software for customer service",
      "support callback scheduling",
      "customer service appointment booking",
      "round-robin scheduling support team",
      "help desk scheduling integration",
      "reduce missed support callbacks",
    ],
  };
}
