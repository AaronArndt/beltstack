"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getSchedulingReviewUrl } from "@/lib/routes";
import {
  SCHEDULING_FEATURED_PICKS,
  SCHEDULING_COMPARISON_ROWS,
  SCHEDULING_SCENARIO_LINKS,
  SCHEDULING_BY_BUSINESS_TYPE,
  SCHEDULING_BY_BUSINESS_TYPE_GROUPS,
  SCHEDULING_POPULAR_COMPARISONS,
  SCHEDULING_FAQ_ITEMS,
  SCHEDULING_METHODOLOGY,
  SCHEDULING_HUB_GUIDES,
} from "@/lib/data/schedulingHubData";

const KEY_TAKEAWAYS = [
  { label: "Best overall: Calendly", anchor: "#pick-calendly" },
  { label: "Best for flexibility: Acuity Scheduling", anchor: "#pick-acuity-scheduling" },
  { label: "Best for teams: YouCanBook.me", anchor: "#pick-youcanbookme" },
  { label: "Best for service businesses: Setmore", anchor: "#pick-setmore" },
];

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";
const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

function SchedulingHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating scheduling tools">
        How to Choose Scheduling Software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Scheduling software automates appointment booking so clients can book time with you or your team without
        back-and-forth emails or calls. This page is for consultants, coaches, service businesses, and teams. Use our{" "}
        <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
          best scheduling software
        </Link>{" "}
        roundup for a curated shortlist, the{" "}
        <Link href="/scheduling/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        for head-to-head matchups, and the{" "}
        <Link href="/scheduling/guides" className={linkGreen}>
          scheduling guides
        </Link>{" "}
        and scenario links below to narrow by use case.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Team size and booking volume</strong> — Solo freelancers and small
            teams often need simple one-person booking; growing teams need round-robin, collective availability, or
            multi-location support.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Calendar sync</strong> — Your scheduler should sync with Google
            Calendar, Outlook, or other calendars you use so availability stays accurate and double-booking is
            avoided.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Meeting types and customization</strong> — Look for buffer time,
            intake forms, and the ability to offer different session lengths or package types (e.g. for coaches or
            consultants).
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Reminders and no-shows</strong> — Automated email or SMS reminders
            reduce no-shows. Confirm and reschedule/cancel flows keep everyone aligned.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Payments and integrations</strong> — If you take payment at booking,
            check that the tool supports your processor. Integrations with{" "}
            <Link href="/crm" className={linkGreen}>CRM</Link> or{" "}
            <Link href="/invoicing" className={linkGreen}>invoicing software</Link> help keep your stack connected.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Pricing</strong> — Many tools offer a free tier; paid plans scale by
            meeting types, team members, or features. Compare total cost at your expected volume.
          </li>
        </ul>
      </div>
    </>
  );
}

function SchedulingGuidesSection() {
  return (
    <>
      <HubSectionTitle sub="Guides to choosing and using scheduling software.">
        Scheduling Guides
      </HubSectionTitle>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SCHEDULING_HUB_GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={guide.href}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <h3 className="text-[#1A2D48] text-lg font-bold group-hover:text-[#10B981]">
              {guide.title}
            </h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed line-clamp-2">
              {guide.description}
            </p>
            <span className="mt-3 text-sm font-semibold text-[#10B981] group-hover:underline">
              Read guide →
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-5 text-sm text-[#6E6E6E]">
        Read our full reviews:{" "}
        <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
        <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link>,{" "}
        <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>,{" "}
        <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>,{" "}
        <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>.
      </p>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        For more resources, see our{" "}
        <Link href="/scheduling" className={linkGreen}>
          scheduling hub
        </Link>{" "}
        and{" "}
        <Link href="/scheduling/compare" className={linkGreen}>
          scheduling comparisons
        </Link>
        .
      </p>
    </>
  );
}

function SchedulingFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="scheduling-team-type" className="block text-sm font-semibold text-[#1A2D48]">
          Team type
        </label>
        <select id="scheduling-team-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="freelancer">Freelancer</option>
          <option value="small-business">Small business</option>
          <option value="growing-team">Growing team</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="scheduling-primary-need" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="scheduling-primary-need" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="appointment-scheduling">Appointment scheduling</option>
          <option value="customer-booking">Customer booking</option>
          <option value="team-scheduling">Team scheduling</option>
          <option value="calendar-automation">Calendar automation</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

function SchedulingEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in scheduling software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          What matters when consultants, service businesses, and teams choose tools to automate appointment booking and calendar management.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#6E6E6E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Calendar integrations</h3>
            <p className="mt-1.5">
              Your scheduling tool should sync with Google Calendar, Outlook, or other calendars you use so booked slots stay accurate and double-booking is avoided. Two-way sync is standard on most platforms.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Booking automation</h3>
            <p className="mt-1.5">
              Look for customizable meeting types, buffer time between appointments, and the ability to set availability by day or week. Good tools let clients pick a time and confirm without email ping-pong.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Customer notifications</h3>
            <p className="mt-1.5">
              Automated reminders (email or SMS) reduce no-shows. Confirmation and reschedule/cancel flows keep everyone aligned. Some tools also support intake forms or questionnaires before the appointment.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Team scheduling</h3>
            <p className="mt-1.5">
              If multiple people take bookings, you need team or round-robin scheduling so the right person gets the appointment. Shared availability and collective meeting types are common on team plans.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Reporting and integrations</h3>
            <p className="mt-1.5">
              Basic reporting on bookings, no-shows, and revenue helps you run the business. Integrations with CRM, invoicing, or video conferencing (Zoom, Meet) keep your stack connected.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Calendar sync (Google, Outlook)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Custom meeting types & availability
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Reminders & confirmations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Team or round-robin (if needed)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Payments & intake forms (optional)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                CRM or video integrations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function SchedulingPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">
        Popular Scheduling Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SCHEDULING_POPULAR_COMPARISONS.map((item) => {
          const title = `${item.productA.name} vs ${item.productB.name}`;
          const summary =
            item.summaryParagraph.length > 140
              ? item.summaryParagraph.slice(0, 140).trim() + "…"
              : item.summaryParagraph;
          return (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {item.productA.logoSrc && (
                  <img
                    src={item.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                  />
                )}
                <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
                {item.productB.logoSrc && (
                  <img
                    src={item.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                  />
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                {title}
              </h3>
              <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link
          href="/scheduling/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all scheduling comparisons →
        </Link>
      </p>
    </>
  );
}

export default function SchedulingPage() {
  return (
    <HubPageTemplate
      title="Scheduling Software for Small Businesses (2026)"
      intro="Scheduling software automates appointment booking and calendar management so consultants, service businesses, freelancers, and teams can let clients book time without back-and-forth emails or calls. These tools sync with your calendar, send reminders, and often support payments and intake forms—reducing no-shows and freeing up admin time."
      breadcrumbLabel="Scheduling"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="scheduling"
      featuredPicks={SCHEDULING_FEATURED_PICKS}
      featuredPicksTitle="Top scheduling picks"
      featuredPicksSub="Hand-picked for consultants, service businesses, and teams. Updated regularly."
      comparisonTable={{
        title: "Compare scheduling software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: SCHEDULING_COMPARISON_ROWS,
        detailsLinkBase: "/scheduling/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular scheduling platforms."
      howToChooseSection={<SchedulingHowToChooseSection />}
      guidesSection={<SchedulingGuidesSection />}
      bestRoundupBlock={{
        title: "Best Scheduling Software Overall",
        description:
          "See our curated rankings of the best scheduling tools for consultants, coaches, service businesses, and teams.",
        linkText: "See full rankings →",
        href: "/scheduling/best-scheduling-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/scheduling/best-scheduling-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/scheduling/best-scheduling-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best scheduling software by use case",
        sectionSub: "Find scheduling tools that fit your situation.",
        description: "Choose a use case to see our top picks and guidance.",
        links: [...SCHEDULING_SCENARIO_LINKS],
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Scheduling by business type",
        sectionSub: "Best scheduling software by industry.",
        links: SCHEDULING_BY_BUSINESS_TYPE,
        groups: SCHEDULING_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={SCHEDULING_FAQ_ITEMS as FaqItem[]}
      faqTitle="Scheduling software FAQs"
      faqSub="Quick answers to common questions."
      methodology={SCHEDULING_METHODOLOGY}
      finderSection={{
        title: "Find the right scheduling fit",
        sub: "Narrow down by team type and primary need.",
        content: <SchedulingFinderForm />,
      }}
      educationSection={<SchedulingEducationSection />}
      popularComparisonsSection={<SchedulingPopularComparisonsSection />}
    />
  );
}
