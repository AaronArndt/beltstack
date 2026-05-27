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

const PAGE_HREF = "/field-service/guides/examples-of-field-service-businesses";

const FAQ_ITEMS = [
  {
    q: "What is an example of a field service business?",
    a: "A residential HVAC company dispatching technicians for repairs and maintenance visits is a classic example. The same pattern applies to plumbers, electricians, landscapers, and commercial facilities crews—mobile work at customer sites with scheduling and billing.",
  },
  {
    q: "How do field service workflows differ by trade?",
    a: "HVAC often emphasizes seasonal peaks and recurring service agreements. Plumbing may prioritize emergency same-day dispatch and on-site estimates. Landscaping leans on recurring routes. Software should match your dominant job types, not generic feature checklists.",
  },
  {
    q: "Are franchise and independent shops both field service businesses?",
    a: "Yes. Franchise networks and independent contractors both dispatch techs to customer locations. Franchises may standardize on specific platforms; independents choose tools based on team size and budget.",
  },
  {
    q: "Do field service businesses always use dedicated FSM software?",
    a: "Not always at start. Very small teams may use scheduling plus invoicing tools until volume demands integrated dispatch, work orders, and mobile apps. See our small business guide for adoption timing.",
  },
  {
    q: "Where can I compare software for my type of service business?",
    a: "Use our best field service software roundup and trade-specific guides for HVAC and plumbing. How to choose field service software walks through evaluation criteria once you know your workflow priorities.",
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

export default function ExamplesOfFieldServiceBusinessesPage() {
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
                      Examples of Field Service Businesses
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Examples of Field Service Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    See examples of field service businesses—from HVAC and plumbing to pest control and commercial
                    maintenance—and how their dispatch, scheduling, and billing workflows differ.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A field service business sends workers to customer locations to perform work—repair, install,
                      maintain, or inspect—rather than serving customers primarily at a retail counter. The operational
                      pattern is consistent even when industries differ: book a job, assign a tech, execute on site,
                      document results, and invoice.
                    </p>
                    <p>
                      Examples span home trades, commercial contractors, and specialized mobile services. Understanding
                      your closest analog helps you evaluate software on the workflows you run daily, not generic
                      marketing categories. For who adopts platforms broadly, see{" "}
                      <Link
                        href="/field-service/guides/what-businesses-use-field-service-software"
                        className={linkGreen}
                      >
                        what businesses use field service software
                      </Link>
                      .
                    </p>
                    <p>
                      Definitions and platform mechanics live in{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management (FSM)
                      </Link>
                      , and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      .
                    </p>
                    <p>
                      When you are ready to compare vendors, use our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup,{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      , and{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="hvac-plumbing-electrical" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="High-volume home and light commercial trades.">
                    HVAC, Plumbing, and Electrical
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HVAC companies handle seasonal demand spikes, equipment history per home, and recurring maintenance
                      agreements. Plumbing businesses mix emergency same-day calls with planned installs and often need
                      strong estimates and invoicing on site. Electrical contractors balance service calls with project
                      work and permit documentation.
                    </p>
                    <p>
                      All three rely on scheduling, dispatch, work orders, and mobile apps—but weight features differently.
                      Read our dedicated guides:{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        field service software for HVAC
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/field-service-software-for-plumbing" className={linkGreen}>
                        field service software for plumbing
                      </Link>
                      . Dispatch depth matters for emergency-heavy trades; see{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="landscaping-pest-appliance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Recurring routes and visit-based service.">
                    Landscaping, Pest Control, and Appliance Repair
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Landscaping and lawn care businesses often run recurring routes—same neighborhoods on set days—with
                      seasonal add-ons. Pest control combines scheduled treatments with callback visits. Appliance repair
                      is visit-heavy with parts ordering and warranty documentation.
                    </p>
                    <p>
                      These examples stress{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling
                      </Link>{" "}
                      and route efficiency more than complex sales pipelines. Mobile apps must make it easy to mark jobs
                      complete and capture photos; see{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>
                      . Billing may be subscription-like or per visit—tie-ins to the{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing hub
                      </Link>{" "}
                      help when you outgrow simple invoices.
                    </p>
                  </div>
                </section>
                <section id="commercial-facilities" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Multi-site contracts and SLAs.">
                    Commercial Maintenance and Facilities
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Commercial HVAC, electrical, fire and security, and facilities maintenance teams service many
                      properties under contract. Work orders track SLAs, asset tags, and compliance checklists. Dispatch
                      balances zones and technician certifications across a larger fleet.
                    </p>
                    <p>
                      See{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      . Growing commercial operators often compare{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>{" "}
                      against mid-market tools on our compare hub.
                    </p>
                  </div>
                </section>
                <section id="small-vs-growing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Same business model, different software fit.">
                    Small Crews vs. Growing Field Service Companies
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A two-truck plumbing company and a thirty-truck HVAC operation are both field service businesses,
                      but software fit differs. Small crews need fast adoption, simple scheduling, and same-day invoicing—
                      see{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>
                      . Larger teams need dispatch boards, reporting, and integrations that solo operators may never touch.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Owner-operator</strong> — May coordinate via calendar and
                          texts until job volume breaks; then adopt focused FSM.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Small team with dispatcher</strong> — Needs shared schedule,
                          mobile apps, and work order status the whole office trusts.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Multi-branch operator</strong> — Needs capacity planning,
                          utilization metrics, and consistent processes across locations.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Common operational failures—double-booking, lost notes, slow billing—are covered in{" "}
                      <Link
                        href="/field-service/guides/common-problems-field-service-software-solves"
                        className={linkGreen}
                      >
                        common problems field service software solves
                      </Link>
                      . For capability breadth, see{" "}
                      <Link
                        href="/field-service/guides/what-does-field-service-management-include"
                        className={linkGreen}
                      >
                        what does field service management include
                      </Link>{" "}
                      and the{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling hub
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Real-world field service examples.">FAQs</SectionTitle>
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
    title: "Examples of Field Service Businesses | BeltStack Guide",
    description:
      "See examples of field service businesses—HVAC, plumbing, landscaping, pest control, and commercial maintenance—and how workflows differ.",
  };
}
