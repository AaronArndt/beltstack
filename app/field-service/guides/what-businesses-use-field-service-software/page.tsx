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

const PAGE_HREF = "/field-service/guides/what-businesses-use-field-service-software";

const FAQ_ITEMS = [
  {
    q: "What types of businesses use field service software?",
    a: "Any company that dispatches technicians or installers to customer sites—HVAC, plumbing, electrical, landscaping, pest control, appliance repair, and commercial maintenance—is a typical fit. The common thread is mobile work, not walk-in retail.",
  },
  {
    q: "At what team size does field service software pay off?",
    a: "Solo operators may start with lighter scheduling and invoicing tools. Once you have multiple techs or a dedicated dispatcher, double-booking and lost job notes usually justify a full FSM platform. Many teams adopt between two and ten field staff.",
  },
  {
    q: "Do residential and commercial service businesses use the same tools?",
    a: "Often yes at the SMB level—scheduling, dispatch, mobile apps, and invoicing overlap. Commercial contractors may need stronger job costing, multi-location accounts, or compliance documentation, which pushes some teams toward heavier platforms.",
  },
  {
    q: "Is field service software only for trades?",
    a: "Trades dominate the category, but any dispatched service model fits: IT field support, medical equipment service, fire and security, and facilities maintenance. The workflow pattern—schedule, dispatch, execute, bill—is the same.",
  },
  {
    q: "How do I know if my business is ready for FSM?",
    a: "Signals include frequent scheduling conflicts, technicians missing job details, invoices going out late, and customers calling for status updates the office cannot answer quickly. Our common problems guide lists operational pain points software addresses.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for contractors",
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

export default function WhatBusinessesUseFieldServiceSoftwarePage() {
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
                      What Businesses Use Field Service Software?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Businesses Use Field Service Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn which types of businesses use field service software, when FSM platforms deliver the most value,
                    and how team size and workflow complexity shape adoption.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service software serves businesses whose core delivery model is dispatched work at customer
                      locations—not inventory on a shelf or services at a fixed storefront. If your revenue depends on
                      technicians showing up on time with the right information, you are in the field service pattern
                      whether you call it FSM or not.
                    </p>
                    <p>
                      The category is strongest in home and commercial trades, but the same workflow applies to any mobile
                      service team. For concrete industry examples, see{" "}
                      <Link href="/field-service/guides/examples-of-field-service-businesses" className={linkGreen}>
                        examples of field service businesses
                      </Link>
                      . For definitions, see{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management (FSM)
                      </Link>
                      .
                    </p>
                    <p>
                      Adoption timing matters more than industry label. Teams usually buy when manual scheduling breaks,
                      invoicing lags job completion, or customers expect digital updates the office cannot deliver from
                      memory. Those pain points are cataloged in{" "}
                      <Link
                        href="/field-service/guides/common-problems-field-service-software-solves"
                        className={linkGreen}
                      >
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                    <p>
                      Compare tools on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      , or use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      once you know your team size and must-have workflows.
                    </p>
                  </div>
                </section>
                <section id="home-trades" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Residential and light commercial.">Home Service Trades</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HVAC, plumbing, electrical, roofing, landscaping, pest control, and appliance repair are among the
                      largest user groups. These businesses juggle same-day calls, recurring maintenance, estimates, and
                      seasonal demand—workflows that benefit from integrated scheduling, dispatch, and invoicing.
                    </p>
                    <p>
                      Trade-specific guides cover nuance:{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        field service software for HVAC
                      </Link>{" "}
                      (seasonal load, service agreements) and{" "}
                      <Link href="/field-service/guides/field-service-software-for-plumbing" className={linkGreen}>
                        field service software for plumbing
                      </Link>{" "}
                      (emergency dispatch, estimates on site). Platforms like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      are common starting points for residential-focused crews.
                    </p>
                  </div>
                </section>
                <section id="commercial-maintenance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Contracts, routes, and compliance.">
                    Commercial Maintenance and Facilities
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Commercial HVAC, electrical, fire and life safety, and facilities maintenance often run recurring
                      routes across many properties. They need strong work orders, asset history per site, and reporting
                      for contract SLAs—not just one-off residential visits.
                    </p>
                    <p>
                      Dispatch and capacity planning become critical as truck counts grow. See{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      . Larger operators often evaluate{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>{" "}
                      for depth across sales, operations, and reporting.
                    </p>
                  </div>
                </section>
                <section id="team-size" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When spreadsheets stop scaling.">Team Size and Adoption Timing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Solo owner-operators sometimes coordinate with a shared calendar and basic invoicing. Adding a
                      second truck—or anyone who dispatches while the owner is on site—usually exposes gaps: who is free,
                      what was promised to the customer, and whether the job was invoiced.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">1–2 field staff</strong> — Lightweight FSM or strong
                          scheduling plus invoicing; avoid enterprise complexity early.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">3–10 field staff</strong> — Dedicated FSM with mobile apps
                          and dispatch; see{" "}
                          <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                            field service software for small business
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">10+ field staff</strong> — Advanced dispatch, reporting, and
                          often integrations with accounting and marketing automation.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Scheduling-heavy businesses should also browse the{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling hub
                      </Link>{" "}
                      to understand how appointment tools differ from full FSM.
                    </p>
                  </div>
                </section>
                <section id="workflow-fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals you need more than a calendar.">Workflow Signals That Drive FSM Adoption</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses adopt field service software when coordination cost exceeds software cost: too many
                      callbacks because techs lacked notes, invoices sent weeks late, or dispatchers rebuilding the day
                      from texts every morning.
                    </p>
                    <p>
                      Core workflows—{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        scheduling
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        work orders
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        mobile apps
                      </Link>
                      , and{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>
                      —should connect in one system. See{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>{" "}
                      for the end-to-end flow and{" "}
                      <Link
                        href="/field-service/guides/what-does-field-service-management-include"
                        className={linkGreen}
                      >
                        what does field service management include
                      </Link>{" "}
                      for the full capability map.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Who adopts FSM and when.">FAQs</SectionTitle>
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
    title: "What Businesses Use Field Service Software? | BeltStack Guide",
    description:
      "Learn which types of businesses use field service software, when FSM platforms pay off, and how team size shapes adoption.",
  };
}
