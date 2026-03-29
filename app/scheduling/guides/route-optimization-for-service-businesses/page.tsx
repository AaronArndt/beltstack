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
    q: "Do I need route optimization if I use Calendly or Acuity?",
    a: "Often no for appointment-style businesses where clients come to you or meet virtually. Yes when technicians drive between many stops per day and travel time is a real constraint—then FSM or fleet-aware tools deserve a look, not only a booking link.",
  },
  {
    q: "Is Google Maps enough for small service routes?",
    a: "For a handful of stops, manual sequencing plus maps can work. When dispatch assigns eight jobs across three techs, you need shared visibility and consistent rules—or mistakes compound. Software buys coordination, not just lines on a map.",
  },
  {
    q: "Where does field service software fit?",
    a: "FSM ties jobs, parts, and billing to stops on the board. If you only optimize routes without job context, you may save miles but still miss SLA or invoice details. See our scheduling vs field service software guide for boundaries.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Local service booking", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/route-optimization-for-service-businesses";

export default function RouteOptimizationForServiceBusinessesPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Route Optimization</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Route Optimization &amp; Multi-Stop Scheduling for Service Businesses
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    When customer booking software is enough—and when you need sequencing, territories, and drive-time
                    awareness for trucks and mobile crews.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      “Route optimization” means different things to a salon (minimal) and an HVAC company running eight
                      maintenance stops before noon. This guide separates problems so you do not buy the wrong category:
                      lightweight scheduling versus operations-heavy field service.
                    </p>
                    <p>
                      Start with our{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      framework, then layer route thinking if technicians—not customers—are moving between jobs. For FSM
                      dispatch depth, read{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch and capacity planning for field service
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="when-booking-enough" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Salons, clinics, consultants.">When Booking Links Are Enough</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If each appointment is one place—your office, a Zoom link, or a single job site—standard scheduling
                      tools handle availability, reminders, and payments well. Compare tools in our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      guide.
                    </p>
                  </div>
                </section>
                <section id="when-routes-matter" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Trucks, zones, and multiple stops.">When Multi-Stop Routes Matter</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Routes matter when dispatch assigns work across a map, jobs have dependencies (parts, callbacks), and
                      missed windows cost revenue. Indicators include frequent “who is closest?” calls, overtime from
                      criss-crossing towns, and CSRs guessing drive time.
                    </p>
                    <p>
                      At that stage, evaluate{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service management software
                      </Link>{" "}
                      alongside scheduling—see{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="evaluation" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Questions for demos.">Evaluation Questions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>Can we define territories or skill tags so the right tech gets the stop?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>Does the board show travel buffers and realistic arrival windows—not only pinned dots?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>How do route changes notify technicians on mobile?</span>
                      </li>
                    </ul>
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
    title: "Route Optimization & Multi-Stop Scheduling for Service Businesses | BeltStack",
    description:
      "When scheduling booking links suffice vs when service businesses need route optimization, territories, and FSM-style dispatch for mobile crews.",
  };
}
