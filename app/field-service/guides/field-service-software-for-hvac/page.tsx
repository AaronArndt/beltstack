import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { getFieldServiceReviewUrl, getFieldServiceCompareUrl } from "@/lib/routes";

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
    q: "Do I need HVAC-specific field service software?",
    a: "You do not always need HVAC-only software, but platforms built or configured for HVAC and plumbing (like ServiceTitan, Service Fusion, FieldEdge, or Jobber with HVAC templates) usually handle maintenance agreements, seasonality, and equipment history better than generic tools.",
  },
  {
    q: "How should HVAC companies think about pricing for FSM?",
    a: "Budget for both licenses and implementation. Many HVAC teams find that improving dispatch, reducing no-shows, and sending invoices faster more than pays for the software. Model cost per truck and per agreement, then compare against time saved and increased close rates.",
  },
  {
    q: "Should we jump straight to an enterprise platform like ServiceTitan?",
    a: "If you only have a few trucks, start with something lighter like Jobber, Housecall Pro, or Service Fusion. ServiceTitan tends to make sense once you have many techs, a busy call center, and leadership that will actively use the analytics.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Best for HVAC home service teams",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Best for larger HVAC operations",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
  {
    name: "Service Fusion",
    logoSrc: "/Logos/servicefusion.jpg",
    rating: "4.4",
    bestFor: "Value for HVAC & plumbing",
    reviewHref: getFieldServiceReviewUrl("service-fusion"),
  },
];

export default function FieldServiceSoftwareForHvacPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
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
                      Field Service Software for HVAC Companies
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Software for HVAC Companies
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    How HVAC contractors use field service management software to run installs, maintenance agreements,
                    and emergency calls—from dispatch and technician routing to quotes, invoices, and customer history.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HVAC is one of the classic use cases for field service management software: you run seasonal tune‑ups,
                      maintenance agreements, emergency calls, and big-ticket installs with the same crews and trucks. As
                      the call volume climbs, the combination of seasonality and urgent jobs makes it hard to manage
                      everything with a whiteboard and a shared calendar.
                    </p>
                    <p>
                      FSM tools give HVAC businesses a single system for dispatching techs, tracking jobs and equipment,
                      and turning work into invoices. Platforms like{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("service-fusion")} className={linkGreen}>
                        Service Fusion
                      </Link>{" "}
                      are commonly used in HVAC shops of different sizes. This guide explains what to look for and how
                      to match tools to your stage of growth.
                    </p>
                    <p>
                      For concrete recommendations, see our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and comparisons like{" "}
                      <Link href={getFieldServiceCompareUrl("housecall-pro-vs-servicetitan")} className={linkGreen}>
                        Housecall Pro vs ServiceTitan
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceCompareUrl("servicetitan-vs-service-fusion")} className={linkGreen}>
                        ServiceTitan vs Service Fusion
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keeping a seasonal, emergency-heavy schedule under control.">
                    Dispatch and Scheduling for HVAC
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HVAC dispatch revolves around balancing planned work (maintenance and installs) with emergency
                      calls when systems fail. That makes the dispatch board the heart of your FSM system:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Seasonal scheduling of tune‑ups and maintenance agreements so you can smooth demand before and
                          after peak months.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Quickly inserting emergency calls into the day while minimizing windshield time and overtime.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="agreements" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why your maintenance plans should live in your FSM.">
                    Maintenance Agreements and Memberships
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Maintenance agreements and memberships are where many HVAC companies build predictable revenue.
                      FSM tools help you:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Track which customers have active plans, their equipment, and renewal dates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Generate seasonal maintenance jobs in bulk and slot them into the schedule.</span>
                      </li>
                    </ul>
                    <p>
                      Enterprise tools like ServiceTitan have deep membership analytics;{" "}
                      <Link href={getFieldServiceReviewUrl("service-fusion")} className={linkGreen}>
                        Service Fusion
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      offer solid agreement features at lower price points.
                    </p>
                  </div>
                </section>

                <section id="growth" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Matching tools to the number of trucks and techs you run.">
                    Growing from a Small HVAC Team to a Larger Operation
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A three‑truck shop does not need the same software as a 30‑truck operation—and forcing enterprise
                      workflows on a small crew can slow everyone down. As you grow:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Start with simpler tools like Housecall Pro or Service Fusion to get off paper and into a
                          common calendar, job history, and invoicing system.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Consider stepping up to ServiceTitan once you have a busy call center, multiple dispatchers,
                          and managers who will use advanced reporting daily.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Use our{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      to see how tools like Housecall Pro and ServiceTitan differ in depth and cost before you commit.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions from HVAC owners and managers.">FAQs</SectionTitle>
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

        <RelatedFieldServiceResources excludeHref="/field-service/guides/field-service-software-for-hvac" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Software for HVAC Companies | BeltStack Guide",
    description:
      "See how HVAC contractors use field service management software for dispatching, maintenance agreements, installs, and growth—from small teams to larger operations.",
  };
}

