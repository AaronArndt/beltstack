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
    q: "How does field service software improve customer communication?",
    a: "FSM ties messages to the job record—reminders, ETA texts, completion notes, and invoices share the same customer and visit context. That reduces duplicate calls and gives CSRs a full thread without searching personal phones. Everyone sees what was promised and what happened on site.",
  },
  {
    q: "What customer notifications should FSM send automatically?",
    a: "Common automations include booking confirmation, appointment reminders, en-route alerts, completion summaries, and invoice or payment links. The right set depends on whether customers must be on-site and how much notice your trade needs. Over-messaging erodes trust as quickly as silence does.",
  },
  {
    q: "Is two-way texting in FSM better than personal cell phones?",
    a: "For growing teams, yes—texts stay on the customer record, visible to dispatch and office staff. Personal texts create coverage gaps when a tech is off shift and make handoffs to billing harder. Shared threads also survive employee turnover without losing history.",
  },
  {
    q: "Does FSM replace CRM for customer communication?",
    a: "FSM excels at job-related messaging; CRM still leads for sales pipelines and marketing nurture. Many businesses use both—field service software vs CRM explains where each system should own the conversation. Do not duplicate nurture campaigns inside dispatch tools.",
  },
  {
    q: "How does communication connect to fewer missed appointments?",
    a: "Reminders with confirm/reschedule options catch conflicts before the truck rolls. En-route ETAs set arrival expectations and reduce door-tag failures. Those patterns directly support the scheduling and dispatch discipline covered in guides on reducing missed appointments.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Contractors and home services",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/how-field-service-software-improves-customer-communication";

export default function HowFieldServiceSoftwareImprovesCustomerCommunicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How Field Service Software Improves Customer Communication
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Field Service Software Improves Customer Communication
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how field service software improves customer communication with automated updates, two-way
                    messaging, and job transparency.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customers judge service businesses on responsiveness as much as technical skill. When communication
                      lives in scattered texts and voicemails, office staff repeat answers and technicians miss context on
                      site.
                    </p>
                    <p>
                      Field service software centralizes job-related communication on the customer and work order record.
                      For the broader platform picture, see{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what field service management includes
                      </Link>
                      .
                    </p>
                    <p>
                      Messages should trigger from job status—not from someone remembering to text. En-route alerts flow
                      from{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        mobile field service apps
                      </Link>{" "}
                      through{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch
                      </Link>{" "}
                      to the customer. That loop is how teams reduce missed visits—see{" "}
                      <Link href="/field-service/guides/how-businesses-reduce-missed-appointments" className={linkGreen}>
                        how businesses reduce missed appointments
                      </Link>
                      .
                    </p>
                    <p>
                      Compare products on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . Communication gaps are among the{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="automated-updates" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Proactive messages tied to job status.">
                    Automated Updates and Notifications
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated messages reduce inbound “where are you?” calls and give customers confidence the job is
                      still on track. Typical triggers include:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Appointment reminders</strong> — confirm or reschedule
                          before the visit.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">En-route and ETA alerts</strong> — set arrival expectations
                          when the tech is driving.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Completion and invoice follow-up</strong> — send summaries,
                          photos, or pay links after the job.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Recurring visit notices</strong> — upcoming maintenance from{" "}
                          <Link
                            href="/field-service/guides/how-businesses-handle-recurring-service-appointments"
                            className={linkGreen}
                          >
                            recurring service appointments
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Scheduling context for when messages fire is in{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="two-way-messaging" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep conversations on the job record.">
                    Two-Way Messaging and Office Visibility
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Two-way SMS or in-app messaging lets customers reply with gate codes, parking notes, or reschedule
                      requests while CSRs and dispatchers see the thread. That beats personal phones that go offline when
                      the assigned tech is unavailable.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Shared inbox</strong> — any authorized staff can respond
                          without asking “what did you tell them?”
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Job-linked threads</strong> — messages attach to the work
                          order, not a personal number.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Templates</strong> — consistent tone for delays, parts
                          holds, and reschedule offers.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Mobile execution still matters—technicians need simple tools to log notes and photos. See{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      . For sales versus operations boundaries, read{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="transparency-and-trust" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What customers see before and after the visit.">
                    Transparency, Estimates, and Post-Job Follow-Up
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer portals</strong> — view estimates, approve scope,
                          and pay without calling the office.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Photo and checklist sharing</strong> — proof of work before
                          the invoice arrives.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Review requests</strong> — timed after completion, not
                          mid-job when tempers are high.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Quote-to-cash flows tie communication to revenue—see{" "}
                      <Link
                        href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software"
                        className={linkGreen}
                      >
                        how estimates and invoicing work in FSM software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="evaluate-communication" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Testing notifications during a real trial week.">
                    How to Evaluate Communication Features in FSM
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      During trials, walk through a full customer journey: book online, receive reminders, get an en-route
                      text when the tech marks status in the app, and receive a completion summary with invoice link.
                      Confirm messages use your branding and land on the correct job—not a duplicate ticket.
                    </p>
                    <p>
                      Ask whether two-way texts sync to{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        work orders
                      </Link>{" "}
                      and whether CSRs can see dispatch changes without switching tabs. Use{" "}
                      <Link
                        href="/field-service/guides/what-features-to-look-for-in-field-service-software"
                        className={linkGreen}
                      >
                        what features to look for in field service software
                      </Link>{" "}
                      and our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      list to compare notification depth—not just checkbox marketing pages.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Communication built around the job.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
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
    title: "How Field Service Software Improves Customer Communication | BeltStack Guide",
    description:
      "Learn how field service software improves customer communication with automated updates, two-way messaging, job transparency, and evaluation tips.",
    keywords: [
      "field service customer communication",
      "FSM notifications",
      "appointment reminders",
      "two-way texting field service",
      "customer ETA alerts",
      "service business messaging",
    ],
  };
}
