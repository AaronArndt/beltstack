import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
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
    q: "Do I need both field service software and a CRM?",
    a: "Most growing service businesses eventually use both. FSM handles scheduling, dispatch, and job execution; CRM handles sales pipeline, follow-up, and longer-term customer relationships. Small teams can start with FSM and add CRM as they formalize sales and marketing.",
  },
  {
    q: "Can CRM replace field service software?",
    a: "Rarely. CRMs are great at tracking leads and deals, but they are not designed for dispatching technicians, tracking jobs in the field, or generating work orders and invoices tied to specific visits. You usually need FSM for operations and CRM for sales.",
  },
  {
    q: "Which should I implement first: FSM or CRM?",
    a: "If you are a service business, implement FSM first. Getting jobs on the calendar, dispatching techs, and sending invoices reliably will usually pay off faster than formalizing your CRM. Then layer CRM on top for better lead tracking and follow-up.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Operations and scheduling",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service operations and marketing",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
];

export default function FieldServiceSoftwareVsCrmPage() {
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
                      Field Service Software vs CRM
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Software vs CRM
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How field service management (FSM) platforms differ from customer relationship management (CRM)
                    tools, where they overlap, and how service businesses use both to manage work and customer
                    relationships.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For service businesses, FSM and CRM are often mentioned in the same breath—but they solve
                      different problems. FSM tools focus on running the day: getting jobs on the calendar, dispatching
                      technicians, capturing job details, and sending invoices. CRMs focus on generating and nurturing
                      demand: tracking leads, opportunities, follow‑ups, and communication across channels.
                    </p>
                    <p>
                      If you already use (or are considering) CRMs like{" "}
                      <Link href="/crm/review/hubspot" className={linkGreen}>
                        HubSpot
                      </Link>{" "}
                      or{" "}
                      <Link href="/crm/review/zoho-crm" className={linkGreen}>
                        Zoho CRM
                      </Link>
                      , it’s natural to ask whether you can manage jobs there as well. In practice, most field service
                      businesses pair CRM with tools like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>{" "}
                      or{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      rather than trying to force CRM to be a dispatch board.
                    </p>
                  </div>
                </section>

                <section
                  id="differences"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Operations vs pipeline.">
                    Key Differences Between Field Service Software and CRM
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>At a high level:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">FSM = operations</strong> — Scheduling, dispatch, work
                          orders, job notes, equipment history, and invoicing.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">CRM = pipeline</strong> — Leads, deals, sales stages,
                          account history, and marketing/sales communication.
                        </span>
                      </li>
                    </ul>
                    <p>
                      CRMs can track opportunities to win maintenance agreements or big install jobs. FSM takes over
                      once the work is sold—creating jobs, scheduling visits, tracking progress, and turning work into
                      invoices.
                    </p>
                  </div>
                </section>

                <section
                  id="using-both"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How service businesses pair CRM with FSM.">
                    How Field Service Businesses Use FSM and CRM Together
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A common pattern looks like this: leads from ads, referrals, or web forms land in a CRM like{" "}
                      <Link href="/crm" className={linkGreen}>
                        your chosen CRM
                      </Link>{" "}
                      (HubSpot, Zoho CRM, etc.). Sales or office staff qualify the lead, capture requirements, and send
                      estimates. Once a job or contract is accepted, the work is scheduled and managed in FSM.
                    </p>
                    <p>
                      Some service businesses start on FSM alone, then add CRM later when they want better visibility
                      into lead sources, close rates, and sales activity. Others add simple CRM-like workflows using
                      tags and statuses in FSM until they outgrow that approach and move opportunities into a dedicated
                      CRM.
                    </p>
                  </div>
                </section>

                <section id="which-first" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to implement first if you do not have either.">
                    Should You Implement FSM or CRM First?
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For most field service companies, FSM should come first. Getting reliable scheduling, dispatch,
                      and invoicing in place tends to drive more immediate ROI than formalizing your sales pipeline.
                    </p>
                    <p>
                      Once your day‑to‑day operations are running smoothly in a tool like Jobber or Housecall Pro, you
                      can add CRM to improve lead tracking, referral programs, and outbound sales. That is especially
                      useful for commercial and project‑based work where deals are larger and sales cycles longer.
                    </p>
                    <p>
                      To see how the leading FSM tools differ operationally, read our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      guide and full{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      reviews.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about FSM vs CRM.">FAQs</SectionTitle>
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

        <RelatedFieldServiceResources excludeHref="/field-service/guides/field-service-software-vs-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Software vs CRM | BeltStack Guide",
    description:
      "Understand the difference between field service management (FSM) tools and CRM, where they overlap, and how service businesses use both to manage jobs and customer relationships.",
  };
}

