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
    q: "What is scheduling software?",
    a: "Scheduling software lets customers or staff book appointments online while respecting your real availability. It syncs with calendars, sends reminders, and often collects intake forms or payments—replacing back-and-forth email to find a time.",
  },
  {
    q: "Is scheduling software the same as a calendar app?",
    a: "No. Google Calendar or Outlook store events; scheduling software adds booking rules, public links, buffers, team routing, and automated confirmations. See scheduling software vs calendar apps for a full comparison.",
  },
  {
    q: "Who needs scheduling software?",
    a: "Solo consultants, agencies, salons, clinics, and any business that books recurring client time benefit once manual scheduling causes double-bookings or no-shows. High-volume field dispatch may need FSM instead—see scheduling vs field service software.",
  },
  {
    q: "What does scheduling software typically include?",
    a: "Most products offer shareable booking pages, calendar sync, email or SMS reminders, time-zone handling, and optional payments or intake forms. Team plans add round-robin, multiple staff, and admin controls.",
  },
  {
    q: "How much does scheduling software cost?",
    a: "Many vendors have free tiers for one user (Calendly, Setmore). Paid plans scale by seats, branding removal, and advanced routing. Compare total cost for your staff count on our best scheduling software roundup before committing.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service businesses", reviewHref: getSchedulingReviewUrl("setmore") },
];

const PAGE_HREF = "/scheduling/guides/what-is-scheduling-software";

export default function WhatIsSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">What Is Scheduling Software?</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Scheduling Software?
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical definition for small business buyers: what scheduling tools do, who they fit, and how
                    they differ from calendars and field service platforms.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software helps businesses let customers or colleagues book time without endless email
                      threads. You define when you are available, share a link or embed a widget, and the system places
                      confirmed appointments on the right calendars—usually with automated reminders and time-zone
                      handling built in.
                    </p>
                    <p>
                      The category sits between a personal calendar and full field service management. Good scheduling
                      tools optimize the moment someone chooses a slot: availability rules, buffers, intake questions, and
                      optional payment. They are built for inbound booking, not for dispatching trucks, parts, and
                      invoices across a crew.
                    </p>
                    <p>
                      For how platforms execute those workflows day to day, read{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      . For industries and business models that rely on it, see{" "}
                      <Link href="/scheduling/guides/what-businesses-use-scheduling-software" className={linkGreen}>
                        what businesses use scheduling software
                      </Link>
                      .
                    </p>
                    <p>
                      Compare vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. When you are
                      ready to shortlist, use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="core-capabilities" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What most scheduling products share.">Core Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Products differ by price and polish, but serious scheduling platforms cover the same operational
                      basics. Missing any one usually pushes work back to manual coordination.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Public booking pages</strong> — branded links or embeds
                          where clients pick a service and time.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Calendar sync</strong> — reads busy times from Google,
                          Outlook, or iCloud so you do not double-book.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Reminders and confirmations</strong> — email or SMS
                          before appointments to cut no-shows.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Team routing</strong> — round-robin or staff-specific
                          availability for multi-person shops. See{" "}
                          <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                            scheduling software for teams
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Popular examples include{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>
                      , and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>.
                    </p>
                  </div>
                </section>
                <section id="who-uses-it" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Typical buyers and workflows.">Who Uses Scheduling Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Consultants, coaches, agencies, salons, fitness studios, and local clinics book client-facing time
                      and need reliable self-serve scheduling. Sales and success teams use the same tools for discovery
                      calls with round-robin across reps.
                    </p>
                    <p>
                      Service businesses with multiple staff and recurring visits often pair scheduling with payments—
                      see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . Trade-specific picks live under{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages.
                    </p>
                  </div>
                </section>
                <section id="scheduling-vs-alternatives" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="How scheduling differs from adjacent tools.">
                    Scheduling Software vs Calendars and Field Service
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Calendar apps store events; they do not enforce booking rules, buffers, or customer-facing intake.
                      Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-calendar-apps" className={linkGreen}>
                        scheduling software vs calendar apps
                      </Link>{" "}
                      before assuming Google Calendar is enough.
                    </p>
                    <p>
                      When your bottleneck is trucks, work orders, and job billing—not just booking a slot—evaluate field
                      service software. Our guide on{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      draws a clear boundary so you do not buy the wrong category.
                    </p>
                  </div>
                </section>
                <section id="how-to-evaluate" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Shortlist with your real workflow.">How to Evaluate Scheduling Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with one sentence: are we optimizing customer self-booking or running dispatched jobs? That
                      answer routes you to scheduling-first versus FSM-first evaluations. Then list must-haves: team
                      size, payment at booking, CRM sync, and branding requirements.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for a structured checklist, then compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> and read reviews
                      such as{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> when
                      customization or service-business templates matter.
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
    title: "What Is Scheduling Software? | BeltStack Guide",
    description:
      "Learn what scheduling software is, core capabilities, who uses it, and how it differs from calendar apps and field service management for small businesses.",
    keywords: [
      "scheduling software",
      "appointment scheduling software",
      "online booking software",
      "scheduling tools for small business",
      "calendar booking",
      "appointment booking",
    ],
  };
}
