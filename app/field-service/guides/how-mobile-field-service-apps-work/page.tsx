import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "How do mobile field service apps connect to the office?",
    a: "Technician apps are clients of the same FSM database the dispatch board uses. When a tech marks a job complete, updates labor, or uploads photos, those events sync to the server so dispatch, billing, and reporting see current status—usually within seconds on good connectivity.",
  },
  {
    q: "What is a job packet in field service mobile software?",
    a: "A job packet is the bundle of data a technician needs on site: customer and site details, work order instructions, forms, price books, and prior history. Platforms often pre-download tomorrow’s packets so crews can work with partial connectivity.",
  },
  {
    q: "Do all field service apps work offline?",
    a: "Most offer partial offline support, but implementations differ. Some cache read-only job details; others let you complete forms and queue uploads. Ask vendors which actions work without signal and how conflicts resolve when two people edit the same job.",
  },
  {
    q: "How do photos and signatures get from the field to invoicing?",
    a: "Captures attach to the work order record. When the job closes, those assets stay linked for warranty proof and customer communication. Invoicing modules then pull labor, materials, and line items from the same job—reducing re-entry if the mobile workflow was completed correctly.",
  },
  {
    q: "How is this different from evaluating mobile apps during a purchase?",
    a: "This guide explains how mobile FSM apps function architecturally and operationally. For adoption checklists, offline trials, and technician UX during software selection, see our evaluation-focused guide on mobile field service apps for technicians.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Polished SMB mobile experience",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Residential service workflows",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "High-volume trade mobile + sales tools",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/how-mobile-field-service-apps-work";

export default function HowMobileFieldServiceAppsWorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="rounded text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="rounded text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="rounded text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">
                      How Mobile Field Service Apps Work
                    </li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Mobile Field Service Apps Work
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Learn how technician mobile apps sync with dispatch, handle offline work, capture field data, and
                    hand off completed jobs to invoicing and reporting.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mobile field service apps are the field half of{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        field service software
                      </Link>
                      . While the office runs scheduling and dispatch on a web dashboard, technicians execute work on
                      phones or tablets—viewing assignments, updating status, capturing photos, collecting signatures, and
                      logging time and materials against the same job record.
                    </p>
                    <p>
                      Under the hood, most platforms treat the mobile app as a synchronized client. Changes in the field
                      push to a central database; dispatch and billing read from that same source of truth. When sync fails
                      or crews bypass the app, the operational picture fractures—one of the{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                    <p>
                      This guide explains how mobile FSM apps work mechanically: job packets, sync, offline queues, and
                      billing handoff. If you are comparing tools for technician adoption, see{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>{" "}
                      —that article focuses on evaluation and UX, not architecture.
                    </p>
                    <p>
                      For the full platform lifecycle, start with{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="core-functions" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What technician apps do on every job.">Core Functions in the Field</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mobile apps consolidate what used to live in clipboards, texts, and personal camera rolls. Typical
                      capabilities include:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Schedule and job list</strong> — Today’s route, next appointment,
                          and navigation links pulled from{" "}
                          <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                            technician scheduling
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Work order execution</strong> — Status transitions (en route,
                          on site, complete), checklists, and labor or parts lines tied to the job.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer and site context</strong> — History, equipment records,
                          and access notes so any tech can show up prepared.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Media and signatures</strong> — Proof-of-work assets stored on
                          the job, not lost in personal photo libraries.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="sync-and-job-packets" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="How field data reaches the office.">Sync, Job Packets, and the Server</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When dispatch assigns a job, the platform builds or refreshes a job packet for assigned technicians.
                      The packet travels over the network to the device—often overnight for the next day’s board. Status
                      changes and form submissions upload as events; the server applies them to the work order and updates
                      what{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatching software
                      </Link>{" "}
                      displays.
                    </p>
                    <p>
                      Latency matters. Slow sync makes the board look stale; customers call the office while the tech’s app
                      already shows “complete.” Reliable platforms retry failed uploads and surface sync errors to the tech
                      instead of silently dropping data.
                    </p>
                  </div>
                </section>
                <section id="offline-behavior" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Basements, rural routes, and dead zones.">Offline and Queued Updates</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      True offline-first apps let crews read cached packets and write changes locally when signal drops.
                      Those changes sit in a queue until connectivity returns, then merge into the server record. Vendors
                      differ on which fields conflict-resolve automatically versus requiring office review.
                    </p>
                    <p>
                      Partial offline—read-only job details without write-back—is common on lighter plans. Understand the
                      limit before you promise real-time ETAs to customers in low-coverage territories.
                    </p>
                  </div>
                </section>
                <section id="billing-handoff" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="From completed job to invoice.">Handoff to Invoicing and Accounting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Closing a job on mobile should populate invoice line items from labor, parts, and flat-rate tasks
                      captured in the field. Finance then reviews or sends the invoice; integrations push revenue to{" "}
                      <Link href="/field-service/guides/field-service-software-and-accounting-integration" className={linkGreen}>
                        accounting software
                      </Link>
                      . Gaps here—materials logged on paper, hours edited only in the office—recreate the slow-billing pain
                      teams buy FSM to eliminate.
                    </p>
                    <p>
                      Compare platforms on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . When you are ready to buy, use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="How mobile FSM apps operate.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Mobile Field Service Apps Work | BeltStack Guide",
    description:
      "Learn how mobile field service apps sync job packets, handle offline work, capture field data, and connect technician updates to dispatch and invoicing.",
  };
}
