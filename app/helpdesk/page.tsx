"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import {
  HELPDESK_FEATURED_PICKS,
  HELPDESK_COMPARISON_ROWS,
  HELPDESK_SCENARIO_LINKS,
  HELPDESK_BY_BUSINESS_TYPE,
  HELPDESK_BY_BUSINESS_TYPE_GROUPS,
  HELPDESK_POPULAR_COMPARISONS,
  HELPDESK_FAQ_ITEMS,
  HELPDESK_METHODOLOGY,
} from "@/lib/data/helpdeskHubData";

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

function HelpdeskFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="helpdesk-team-type" className="block text-sm font-semibold text-[#1A2D48]">
          Team type
        </label>
        <select id="helpdesk-team-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="small-business">Small business</option>
          <option value="startup">Startup</option>
          <option value="ecommerce">Ecommerce team</option>
          <option value="saas">SaaS support team</option>
          <option value="growing">Growing support team</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="helpdesk-primary-need" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="helpdesk-primary-need" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="ticketing">Ticketing</option>
          <option value="shared-inbox">Shared inbox</option>
          <option value="live-chat">Live chat</option>
          <option value="ecommerce-support">Ecommerce support</option>
          <option value="multi-channel">Multi-channel support</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

function HelpdeskHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating helpdesk systems.">
        How to choose helpdesk software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Helpdesk software centralizes customer support so your team can manage tickets, track conversations, and keep
        responses consistent. This page is for{" "}
        <Link href="/helpdesk/best-for/small-business" className={linkGreen}>
          small businesses
        </Link>
        ,{" "}
        <Link href="/helpdesk/best-for/startups" className={linkGreen}>
          startups
        </Link>
        ,{" "}
        <Link href="/helpdesk/best-for/ecommerce" className={linkGreen}>
          ecommerce teams
        </Link>
        ,{" "}
        <Link href="/helpdesk/best-for/saas" className={linkGreen}>
          SaaS support teams
        </Link>
        , and{" "}
        <Link href="/helpdesk/best-for/growing-teams" className={linkGreen}>
          growing support teams
        </Link>
        . Use the{" "}
        <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>
          best helpdesk software roundup
        </Link>{" "}
        for a curated shortlist, the{" "}
        <Link href="/helpdesk/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        for head‑to‑head matchups, our{" "}
        <Link href="/helpdesk/guides" className={linkGreen}>
          helpdesk guides
        </Link>{" "}
        for how to choose and use case deep dives, and the scenario links below to jump into specific use cases.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Ticketing and workflow</strong> — Look for clear ticket management, assignment, and status so nothing gets dropped.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Multi-channel support</strong> — Email, chat, and optionally social or phone in one place so context stays in one thread.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Automation and routing</strong> — Rules and macros that route tickets and suggest replies save time as volume grows.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Reporting and history</strong> — Customer and ticket history, plus reports on volume and performance, help you improve.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Integrations</strong> — Many teams need the helpdesk to connect to{" "}
            <Link href="/crm" className={linkGreen}>
              CRM
            </Link>
            , ecommerce platforms, or internal tools so agents have full context.
          </li>
        </ul>
      </div>
    </>
  );
}

function HelpdeskEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in helpdesk software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          What matters when businesses choose tools to manage support tickets, conversations, and customer history.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#6E6E6E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Ticketing and workflow management</h3>
            <p className="mt-1.5">
              A helpdesk should make it easy to create, assign, and track tickets from first contact to resolution. Look for statuses, priorities, and workflows that match how your team works. Good tools support shared ownership and handoffs so customers get consistent follow-up.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Multi-channel support</h3>
            <p className="mt-1.5">
              Customers reach out by email, chat, social, and sometimes phone. The best helpdesk software brings those conversations into one place so agents see full context and avoid duplicate or conflicting replies. Check which channels are included and how they’re unified.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Automation and routing</h3>
            <p className="mt-1.5">
              Automation can assign tickets by product or language, suggest replies with macros, and escalate when needed. Routing rules keep workload balanced. Compare how flexible automation is and whether it fits your process without heavy configuration.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Reporting and customer history</h3>
            <p className="mt-1.5">
              Useful helpdesks show a clear history of each customer’s conversations and tickets. Reporting on volume, response time, and resolution helps you spot bottlenecks and improve. Ensure the tool gives you enough visibility for your team size and goals.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations and scalability</h3>
            <p className="mt-1.5">
              Support doesn’t work in isolation. Look for integrations with your CRM, ecommerce platform, or internal tools so agents have context. As you grow, the helpdesk should scale in agents, channels, and automation without forcing a disruptive switch.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Ticketing and assignment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Multi-channel inbox (email, chat, etc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Customer and conversation history
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Basic automation and routing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Reporting and team performance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function HelpdeskPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side helpdesk features, pricing, and recommendations.">
        Popular helpdesk comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HELPDESK_POPULAR_COMPARISONS.map((item) => {
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
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
                {item.productB.logoSrc && (
                  <img
                    src={item.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
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
          href="/helpdesk/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all helpdesk comparisons →
        </Link>
      </p>
    </>
  );
}

const KEY_TAKEAWAYS = [
  { label: "Best overall: Zendesk", anchor: "#pick-zendesk" },
  { label: "Best value: Freshdesk", anchor: "#pick-freshdesk" },
  { label: "Best for email support: Help Scout", anchor: "#pick-help-scout" },
  { label: "Best for messaging: Intercom", anchor: "#pick-intercom" },
];

export default function HelpdeskPage() {
  return (
    <HubPageTemplate
      title="Helpdesk Software for Small Businesses (2026)"
      intro="Compare helpdesk software that helps support teams manage tickets, conversations, and customer history across email, chat, and other channels."
      breadcrumbLabel="Helpdesk Software"
      keyTakeaways={KEY_TAKEAWAYS}
      featuredPicks={HELPDESK_FEATURED_PICKS}
      featuredPicksTitle="Top helpdesk picks"
      featuredPicksSub="Hand-picked for small businesses, startups, ecommerce, and growing support teams. Updated regularly."
      comparisonTable={{
        title: "Compare helpdesk software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: HELPDESK_COMPARISON_ROWS,
        detailsLinkBase: "/helpdesk/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular helpdesk platforms."
      howToChooseSection={<HelpdeskHowToChooseSection />}
      bestRoundupBlock={{
        title: "Best Helpdesk Software Overall",
        description:
          "See our curated rankings of the best helpdesk tools for small businesses, startups, ecommerce, and SaaS support teams.",
        linkText: "See full rankings →",
        href: "/helpdesk/best-helpdesk-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/helpdesk/best-helpdesk-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/helpdesk/best-helpdesk-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best helpdesk software by use case",
        sectionSub: "Find helpdesk software that fits your situation.",
        description: "Choose a use case to see our top picks.",
        links: HELPDESK_SCENARIO_LINKS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Helpdesk by business type",
        sectionSub: "Best helpdesk software by business type.",
        links: HELPDESK_BY_BUSINESS_TYPE,
        groups: HELPDESK_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={HELPDESK_FAQ_ITEMS as FaqItem[]}
      faqTitle="Helpdesk software FAQs"
      faqSub="Quick answers to common questions."
      methodology={HELPDESK_METHODOLOGY}
      finderSection={{
        title: "Find the right helpdesk fit",
        sub: "Narrow down by team type and primary need.",
        content: <HelpdeskFinderForm />,
      }}
      educationSection={<HelpdeskEducationSection />}
      popularComparisonsSection={<HelpdeskPopularComparisonsSection />}
    />
  );
}
