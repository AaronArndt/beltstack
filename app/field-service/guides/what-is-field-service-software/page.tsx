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
    q: "What is field service software?",
    a: "Field service software helps businesses that send technicians to customer locations schedule jobs, dispatch crews, document work, and bill for completed service. It replaces scattered spreadsheets, texts, and paper forms with one operational system that connects the office and the field.",
  },
  {
    q: "Is field service software the same as FSM?",
    a: "Field service software is the product category. Field service management (FSM) is the operational discipline those tools support—scheduling, dispatch, work orders, and field execution. Vendors use the terms interchangeably in marketing, but buyers should evaluate workflows, not acronyms.",
  },
  {
    q: "Who needs field service software?",
    a: "Any business with recurring on-site service work benefits once job volume makes manual coordination error-prone. Solo operators may start with lighter tools; multi-truck teams usually need dedicated FSM sooner because dispatch, billing, and customer history outgrow memory and whiteboards.",
  },
  {
    q: "Does field service software include invoicing?",
    a: "Most platforms include estimates, invoices, and payment collection, though depth varies by tier. Many teams also sync completed jobs to accounting software for tax reporting and reconciliation. Heavy A/R teams sometimes pair FSM with dedicated invoicing tools if integrations are clean.",
  },
  {
    q: "How is field service software different from scheduling tools?",
    a: "Scheduling tools focus on appointments and calendars. Field service software adds dispatch boards, work orders, technician mobile apps, customer and equipment history, and often job costing—built for crews in the field, not just booking time slots.",
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

const PAGE_HREF = "/field-service/guides/what-is-field-service-software";

export default function WhatIsFieldServiceSoftwarePage() {
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
                      What Is Field Service Software?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Field Service Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what field service software is, who uses it, core capabilities, and when service businesses
                    should adopt FSM platforms instead of manual coordination.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service software is technology built for businesses that deliver work at customer sites—homes,
                      commercial buildings, job sites, and facilities. Instead of coordinating jobs through phone calls,
                      whiteboards, and disconnected spreadsheets, teams use one platform to schedule technicians, dispatch
                      work, capture field notes, and close out billing.
                    </p>
                    <p>
                      The category sits between a simple calendar and full enterprise resource planning. Good field
                      service tools understand that operations happen in two places: the office (dispatch, customer calls,
                      invoicing) and the field (technicians executing work on mobile devices). Both sides need the same job
                      record in real time.
                    </p>
                    <p>
                      For the management discipline behind the software, see{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management (FSM)
                      </Link>
                      . For how platforms execute day-to-day workflows, see{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
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
                      . If you are evaluating features next, read{" "}
                      <Link
                        href="/field-service/guides/what-features-to-look-for-in-field-service-software"
                        className={linkGreen}
                      >
                        what features to look for in field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="core-capabilities" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities most FSM platforms share.">Core Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Products vary by trade and company size, but most serious field service platforms cover the same
                      operational spine. Missing any one of these usually pushes work back to phone calls and side systems.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — assign jobs by time, zone,
                          and skills; adjust the live board when reality changes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Work orders</strong> — track job status from booked to complete
                          with notes and attachments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Mobile apps</strong> — schedules, forms, photos, and signatures
                          in the field. See{" "}
                          <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                            how mobile field service apps work
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer history</strong> — prior jobs, equipment, and notes
                          per location.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Estimates and invoicing</strong> — quote work and collect
                          payment without retyping data. See{" "}
                          <Link
                            href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software"
                            className={linkGreen}
                          >
                            how estimates and invoicing work in FSM software
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Deeper breakdown:{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what does field service management include
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="who-uses-it" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trades and industries that rely on FSM.">Who Uses Field Service Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HVAC, plumbing, electrical, landscaping, pest control, appliance repair, and commercial maintenance
                      teams are common users. Any business model built around dispatched technicians—not walk-in retail—fits
                      the pattern. Some teams also run light project work, but the core loop remains: book, dispatch,
                      execute, bill.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/field-service/guides/what-businesses-use-field-service-software" className={linkGreen}>
                        what businesses use field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/examples-of-field-service-businesses" className={linkGreen}>
                        examples of field service businesses
                      </Link>
                      . Trade-specific depth is in guides like{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        field service software for HVAC
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="when-to-adopt" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals you have outgrown manual coordination.">
                    When Teams Adopt Field Service Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Adoption usually follows pain: double-booked technicians, lost job notes, slow invoicing, and
                      customers calling because nobody knows ETA. See{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>{" "}
                      for a structured breakdown. Once job volume exceeds what one dispatcher can hold in memory, software
                      pays for itself in fewer callbacks and faster cash collection.
                    </p>
                    <p>
                      Small teams should start focused. See{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>
                      . If you are still on spreadsheets, read{" "}
                      <Link
                        href="/field-service/guides/when-businesses-outgrow-spreadsheets-for-field-service"
                        className={linkGreen}
                      >
                        when businesses outgrow spreadsheets for field service
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="fsm-vs-alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How FSM differs from adjacent tools.">
                    Field Service Software vs Scheduling, CRM, and Spreadsheets
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Calendar apps handle time blocks; they rarely manage work order status, parts on a job, or invoice
                      lines from completed visits. CRMs excel at leads and pipelines but often lack dispatch boards and
                      technician-first mobile workflows—see{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/is-field-service-part-of-crm" className={linkGreen}>
                        is field service part of CRM
                      </Link>
                      .
                    </p>
                    <p>
                      Spreadsheets work until repeat customers, recurring maintenance, and multi-truck dispatch create
                      version-control risk. FSM is not about having more software—it is about one thread from job intake to
                      payment. Free vs paid tradeoffs are in{" "}
                      <Link href="/field-service/guides/free-vs-paid-field-service-software" className={linkGreen}>
                        free vs paid field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Field service software basics.">FAQs</SectionTitle>
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
    title: "What Is Field Service Software? | BeltStack Guide",
    description:
      "Learn what field service software is, core capabilities, who uses it, when to adopt FSM, and how it differs from scheduling tools and CRM.",
    keywords: [
      "field service software",
      "FSM software",
      "field service management",
      "dispatch software",
      "technician scheduling",
      "service business software",
    ],
  };
}
