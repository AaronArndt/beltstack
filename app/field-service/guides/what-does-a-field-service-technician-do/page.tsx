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
    q: "Is a field service technician the same as a maintenance technician?",
    a: "Not always. Maintenance technicians often work at fixed sites on owned equipment. Field service technicians travel to customer locations, represent the company on-site, and usually tie their work to billable jobs, estimates, and customer communication.",
  },
  {
    q: "Do field service technicians need a college degree?",
    a: "Most trades prioritize licenses, apprenticeships, and certifications over a four-year degree. Some roles in medical equipment, IT field service, or specialized industrial work may require associate or bachelor credentials, but HVAC, plumbing, and electrical paths typically start with trade school or apprenticeship.",
  },
  {
    q: "What does a typical day look like for a field service tech?",
    a: "Morning starts with reviewing assigned jobs, loading parts, and confirming routes. On-site work includes diagnosis, repair or installation, customer walkthroughs, photos and signatures, and status updates. Afternoons may add emergency calls, paperwork, or inventory returns before the next day's schedule is set.",
  },
  {
    q: "Which trades hire the most field service technicians?",
    a: "HVAC, plumbing, electrical, appliance repair, pest control, landscaping, fire and security, and commercial equipment service are among the largest employers. See examples by industry in our guide to field service business types.",
  },
  {
    q: "How does software change what technicians do daily?",
    a: "Mobile apps replace paper work orders with digital job packets, push status updates to dispatch, and capture signatures and photos at the truck. Technicians spend less time on phone tag and more on billable work when the app matches how they actually move through a job.",
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

const PAGE_HREF = "/field-service/guides/what-does-a-field-service-technician-do";

export default function WhatDoesAFieldServiceTechnicianDoPage() {
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
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      What Does a Field Service Technician Do?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Does a Field Service Technician Do?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Understand the field service technician role: daily responsibilities, common trades, and the
                    technical and customer skills that define success on the road.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A field service technician is the person who shows up at a customer&apos;s home, business, or
                      job site to install, diagnose, repair, or maintain equipment. Unlike shop-floor or desk-bound
                      roles, the job is defined by travel, time on-site, and direct customer contact. The technician
                      is often the only face of the company the customer sees that day.
                    </p>
                    <p>
                      Employers range from one-truck contractors to national service brands. The work spans{" "}
                      <Link href="/field-service/guides/examples-of-field-service-businesses" className={linkGreen}>
                        many field service business types
                      </Link>
                      : HVAC and plumbing crews, appliance and elevator techs, pest control routes, commercial kitchen
                      service, and industrial equipment specialists. The tools change; the pattern of dispatch,
                      execute, document, and move on stays consistent.
                    </p>
                    <p>
                      Behind the technician, office teams use field service software for scheduling and billing. Read{" "}
                      <Link href="/field-service/guides/what-businesses-use-field-service-software" className={linkGreen}>
                        what businesses use field service software
                      </Link>{" "}
                      to see which operations invest in FSM platforms, and{" "}
                      <Link href="/field-service/guides/how-businesses-manage-field-technicians" className={linkGreen}>
                        how businesses manage field technicians
                      </Link>{" "}
                      for how managers set expectations, track performance, and support crews in the field.
                    </p>
                    <p>
                      If you are exploring the career path, pair this overview with{" "}
                      <Link href="/field-service/guides/how-to-become-a-field-service-technician" className={linkGreen}>
                        how to become a field service technician
                      </Link>{" "}
                      and our{" "}
                      <Link href="/field-service/guides/field-service-technician-salary-guide" className={linkGreen}>
                        field service technician salary guide
                      </Link>{" "}
                      for training routes and typical pay ranges by trade and experience level.
                    </p>
                  </div>
                </section>

                <section id="role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What employers expect on every visit.">Core Role and Responsibilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians receive job assignments with location, scope, and customer history. On arrival they
                      confirm access, assess the problem or installation requirements, and perform the work to company
                      and code standards. They explain findings to the customer, recommend follow-up when needed, and
                      close the visit with documentation the office can bill from.
                    </p>
                    <p>
                      Safety and compliance are non-negotiable: lockout/tagout on industrial jobs, gas and electrical
                      codes in trades work, PPE on construction sites. Technicians also protect company reputation
                      through punctuality, clear communication, and leaving the work area clean.
                    </p>
                    <p>
                      Senior techs may train apprentices, approve parts usage, or handle warranty callbacks. Lead roles
                      sometimes include light sales—presenting maintenance agreements or upgrade options—without
                      becoming full-time salespeople.
                    </p>
                  </div>
                </section>

                <section id="daily-tasks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From first call to end-of-day wrap-up.">Typical Daily Tasks</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most days start with a job list or dispatch board: confirm parts on the truck, review notes from
                      the last visit at repeat customers, and head to the first appointment. En route, techs may receive
                      schedule changes when emergencies or no-shows shift the board.
                    </p>
                    <p>
                      On-site tasks include testing and measurement, repair or replacement, completing checklists and
                      forms, capturing photos, collecting signatures, and updating job status in a mobile app. See{" "}
                      <Link href="/field-service/guides/how-field-service-technicians-use-software" className={linkGreen}>
                        how field service technicians use software
                      </Link>{" "}
                      for how work orders, status updates, and field documentation fit together.
                    </p>
                    <p>
                      Between jobs, technicians restock common parts, log drive time, and communicate blockers—missing
                      parts, access issues, jobs running long—to dispatch. End of day may include paperwork, vehicle
                      maintenance, and prep for tomorrow&apos;s route.
                    </p>
                  </div>
                </section>

                <section id="trades" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where field tech roles concentrate.">Common Trades and Specializations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Skilled trades—HVAC, plumbing, electrical—dominate residential and commercial service. Techs
                      specialize further: refrigeration, hydronics, low-voltage controls, or medical gas in healthcare
                      facilities. Each niche carries its own licensing and continuing education requirements covered in{" "}
                      <Link href="/field-service/guides/what-qualifications-field-technicians-need" className={linkGreen}>
                        what qualifications field technicians need
                      </Link>
                      .
                    </p>
                    <p>
                      Non-trade field service includes appliance repair, pool and spa service, fire alarm inspection,
                      copier and IT hardware break/fix, and heavy equipment service at construction sites. Route-based
                      work like pest control or lawn care shares the same dispatch-and-document rhythm with different
                      tools and seasonality.
                    </p>
                    <p>
                      Industrial and OEM field service often means factory-trained techs servicing branded equipment
                      under warranty or service contracts, with stricter parts traceability and remote diagnostic tools
                      tied to manufacturer systems.
                    </p>
                  </div>
                </section>

                <section id="skills" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Technical depth plus customer-facing polish.">Skills That Separate Good Technicians</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technical skills are table stakes: reading schematics, using diagnostic tools, troubleshooting
                      systematically, and knowing when to escalate. Trade math, code books, and manufacturer training
                      keep work safe and pass inspection.
                    </p>
                    <p>
                      Soft skills matter equally on customer sites. Technicians explain problems in plain language,
                      set realistic timelines, and stay calm when jobs run over or parts are back-ordered. Written
                      communication shows up in job notes dispatchers and billing staff rely on later.
                    </p>
                    <p>
                      Digital fluency is now part of the job. Comfortable use of mobile apps, GPS, and photo
                      documentation speeds the office side of service. Companies hiring today expect techs to update
                      status in real time rather than batch paperwork at week&apos;s end.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Career basics for aspiring and working techs.">FAQs</SectionTitle>
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
    title: "What Does a Field Service Technician Do? | BeltStack Guide",
    description:
      "Learn what field service technicians do daily: core responsibilities, common trades, essential skills, and how the role fits into service business operations.",
    keywords: [
      "field service technician",
      "field technician job description",
      "service technician duties",
      "HVAC technician role",
      "field service careers",
      "mobile technician work",
    ],
  };
}
