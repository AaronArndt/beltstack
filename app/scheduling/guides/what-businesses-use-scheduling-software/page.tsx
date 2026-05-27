import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "What types of businesses use scheduling software?",
    a: "Consultants, agencies, salons, clinics, fitness studios, tutors, and professional services that book client time are the core users. Any business tired of email tag to find a slot benefits once volume makes manual scheduling error-prone.",
  },
  {
    q: "Do home service companies use scheduling software?",
    a: "Many use scheduling for inbound booking and reminders, but high-volume HVAC, plumbing, or electrical shops often graduate to field service software for dispatch and job billing. See scheduling vs field service software for boundaries.",
  },
  {
    q: "Is scheduling software only for customer-facing booking?",
    a: "No. Internal use cases—sales discovery, interviews, support callbacks—are common. Team routing and round-robin matter as much as public salon booking pages.",
  },
  {
    q: "Which scheduling tool fits salons and clinics?",
    a: "Setmore and SimplyBook.me are frequent picks for multi-staff service businesses with payments and recurring visits. Acuity suits consultants needing intake forms. Compare on our best scheduling software list.",
  },
  {
    q: "When should a business switch from spreadsheets to scheduling software?",
    a: "When multiple people touch the calendar, no-shows cost real revenue, or customers expect self-serve booking. Free tiers on Calendly or Setmore make the first move low-risk.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Salons & services", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Multi-service shops", reviewHref: getSchedulingReviewUrl("simplybookme") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Consultants", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/what-businesses-use-scheduling-software";

export default function WhatBusinessesUseSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">What Businesses Use Scheduling Software?</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Businesses Use Scheduling Software?
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Industries, team sizes, and workflows that fit scheduling tools—and when operations outgrow booking
                    software into field service or CRM-led stacks.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software shows up anywhere people book time with you: client appointments, sales calls,
                      classes, or support sessions. The common thread is predictable slots, repeat customers, and enough
                      volume that manual coordination wastes staff time or causes double bookings.
                    </p>
                    <p>
                      Buyers are usually owner-operators, office managers, or ops leads at small and mid-size businesses.
                      They are not shopping for enterprise ERP—they need a reliable booking front door that syncs
                      calendars and cuts no-shows.
                    </p>
                    <p>
                      For definitions and core features, read{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      . For the booking engine mechanics, see{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      .
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      list,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>comparisons</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for</Link> pages to match tools to
                      your trade.
                    </p>
                  </div>
                </section>
                <section id="professional-services" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Consultants, agencies, coaches.">Professional Services and Sales Teams</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Consultants, coaches, accountants, and agencies sell time in blocks. They need intake questions,
                      video links, and sometimes payment at booking.{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      dominate here; agencies with round-robin across reps often add{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>.
                    </p>
                    <p>
                      Internal sales and success teams use the same stack for discovery calls—see{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      . Choose with{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="service-businesses" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Salons, clinics, fitness, local services.">Service Businesses and Local Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Salons, spas, dental and wellness clinics, and fitness studios book multiple staff and service types.
                      Recurring appointments and payments at booking matter.{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> are
                      built for these workflows—detailed in{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .
                    </p>
                    <p>
                      Trade-specific guidance lives under{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> (for example
                      home inspectors or mobile mechanics). Start from the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> if you are new to the
                      vertical.
                    </p>
                  </div>
                </section>
                <section id="home-service" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="When booking is not enough.">Home Service and Field-Heavy Operations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HVAC, plumbing, electrical, and landscaping companies often start with online booking for inbound
                      leads. As job volume grows, dispatch boards, work orders, and invoicing usually move to field service
                      software. Do not confuse a booking page with running trucks—read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      .
                    </p>
                    <p>
                      Hybrid stacks can work: scheduling for sales or simple appointments, FSM for service jobs—with clear
                      calendar ownership. If you only need a calendar for internal meetings,{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-calendar-apps" className={linkGreen}>
                        scheduling software vs calendar apps
                      </Link>{" "}
                      explains when native calendars suffice.
                    </p>
                  </div>
                </section>
                <section id="when-to-adopt" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Signals you have outgrown manual booking.">When Businesses Adopt Scheduling Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Adoption usually follows pain: double-booked staff, high no-show rates, customers asking “do you
                      have a booking link?”, or admins spending hours on phone scheduling. Free tiers let solo operators
                      test without a big commitment.
                    </p>
                    <p>
                      Once you shortlist, compare vendors on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> and read all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> for related topics
                      like emergency same-day booking or route planning for mobile crews.
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
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Businesses Use Scheduling Software? | BeltStack Guide",
    description:
      "Industries and workflows that use scheduling software—consultants, salons, clinics, agencies—and when businesses need field service instead of booking tools.",
    keywords: [
      "businesses that use scheduling software",
      "appointment scheduling for small business",
      "salon scheduling software",
      "consultant booking software",
      "service business scheduling",
      "online appointment booking",
    ],
  };
}
