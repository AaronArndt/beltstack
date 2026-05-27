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
    q: "What are the must-have features in scheduling software?",
    a: "Two-way calendar sync, a reliable booking link or embed, automated confirmations and reminders, and timezone-safe display for guests. Add team routing, payments, or intake forms only when your use case requires them.",
  },
  {
    q: "How is this different from how to choose scheduling software?",
    a: "This guide is a feature checklist you can score vendors against. How to choose scheduling software walks through the buying process—shortlisting, trials, and tradeoffs. Use both: checklist first, then the choose guide for evaluation steps.",
  },
  {
    q: "Do I need payments at booking?",
    a: "Consultants and high-no-show services often benefit from deposits or full prepay. Simple meeting schedulers may not need native payments if your CRM or invoice tool handles money. Match payment features to no-show risk, not every competitor’s feature list.",
  },
  {
    q: "What team scheduling features matter most?",
    a: "Round-robin, collective availability, per-person buffers, and skill- or location-based routing. Verify pricing per seat and whether pooled availability counts as one or many calendars on paid tiers.",
  },
  {
    q: "Which integrations should I prioritize?",
    a: "Calendar sync first, then video conferencing, CRM, and payment processors you already use. Zapier or webhooks can fill gaps, but native integrations reduce failure modes when volume grows.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking automation", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team routing", reviewHref: getSchedulingReviewUrl("youcanbookme") },
];

const PAGE_HREF = "/scheduling/guides/what-features-to-look-for-in-scheduling-software";

export default function WhatFeaturesToLookForInSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling features</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Features to Look for in Scheduling Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical feature checklist for booking, reminders, team routing, payments, and integrations—so
                    you score vendors against your workflow instead of their marketing page.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling products all show calendars, but the details separate tools that fade into the
                      background from tools that create daily workarounds. This checklist covers the features that
                      matter for solo professionals, teams, and service businesses—without treating every add-on as
                      mandatory on day one.
                    </p>
                    <p>
                      Score each vendor against problems you have this quarter: double booking, no-shows, unfair
                      round-robin, or missing payments. Skip modules you will not configure in the first 30 days.
                      For the full evaluation process—not only the feature list—read{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>
                      .
                    </p>
                    <p>
                      Symptom-first? Start with{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>
                      . Reducing missed appointments? See{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      . Internal staff shifts? See{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>
                      .
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling hub
                      </Link>
                      ,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>
                        scheduling comparisons
                      </Link>{" "}
                      to apply this checklist to{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>
                        Calendly
                      </Link>
                      ,{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>
                      ,{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>
                        YouCanBook.me
                      </Link>
                      , and peers.
                    </p>
                  </div>
                </section>
                <section id="booking" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Availability, buffers, embeds.">Core Booking and Calendar Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Two-way calendar sync</strong> — Google, Microsoft, or Apple; real-time busy blocks so personal and work calendars do not double-book.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Booking link and embed</strong> — Shareable URLs, website embeds, and multiple event types with duration, buffer, and minimum notice rules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Timezone handling</strong> — Guest-local display in confirmations; critical for remote consultants and distributed teams.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Intake forms and custom questions</strong> — Screen job type before the slot is taken; compare <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>Calendly vs Acuity</Link> on form depth.</span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="comms" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Confirmations, SMS, policies.">Customer Communication Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Look for instant confirmations, scheduled email and SMS reminders, reschedule/cancel self-service,
                      and branded templates. Cancellation policies and deposit collection belong in the same flow—our{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        no-show reduction guide
                      </Link>{" "}
                      explains how features map to outcomes.
                    </p>
                    <p>
                      Service-heavy models should cross-check{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . If jobs—not only meetings—drive revenue, confirm whether you need{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs field service software
                      </Link>{" "}
                      instead of a longer feature list on a booking tool.
                    </p>
                  </div>
                </section>
                <section id="team-integrations" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Routing, payments, admin.">Team, Payments, and Integration Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Round-robin and collective availability</strong> — Fair distribution with skill or location filters; see <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>scheduling software for teams</Link> and <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>Calendly vs YouCanBook.me</Link>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payments and packages</strong> — Deposits, prepay, and multi-session packages for consultants; <Link href="/scheduling/guides/best-scheduling-software-for-consultants" className={linkGreen}>best scheduling for consultants</Link> covers typical stacks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Integrations and API</strong> — CRM, video, Stripe or Square, webhooks; native beats Zapier-only for high volume.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Reporting and admin</strong> — Export bookings, staff utilization, and no-show rates; role-based access when multiple locations book.</span>
                      </li>
                    </ul>
                    <p>
                      After scoring features, run a live trial using{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      and explore{" "}
                      <Link href="/scheduling/guides/calendly-alternatives" className={linkGreen}>
                        Calendly alternatives
                      </Link>{" "}
                      if your shortlist fails on two or more must-haves.
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
    title: "What Features to Look for in Scheduling Software | BeltStack Guide",
    description:
      "Scheduling software feature checklist: calendar sync, booking links, reminders, team routing, payments, integrations, and how to score tools in a trial.",
    keywords: [
      "scheduling software features",
      "appointment booking features",
      "calendar sync scheduling",
      "round-robin scheduling",
      "scheduling SMS reminders",
      "scheduling software checklist",
    ],
  };
}
