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
    q: "How long does it take to become a field service technician?",
    a: "Trade apprenticeships often run three to five years to journeyperson status. Accelerated trade school programs may place graduates in the field within months, but employers still expect supervised hours before solo dispatch on complex jobs.",
  },
  {
    q: "Can you become a field tech without an apprenticeship?",
    a: "Some employers hire helpers and train in-house, especially in appliance repair, pest control, or low-voltage work. Licensed trades—plumbing, electrical, HVAC in many states—still require formal hours and exams even if you skip a union apprenticeship.",
  },
  {
    q: "What certifications should new techs prioritize first?",
    a: "Start with what your target trade legally requires: EPA Section 608 for HVAC refrigerant, state licensing steps for plumbing and electrical, OSHA 10 for construction sites. Add manufacturer or NATE credentials once you know which equipment lines your employer services.",
  },
  {
    q: "Is field service a good career path long term?",
    a: "Skilled field techs with licenses remain in demand as experienced workers retire. Paths lead to lead tech, trainer, dispatcher, operations manager, or business owner. Pay progression is covered in our salary guide; soft skills and reliability often matter as much as technical depth.",
  },
  {
    q: "Should I work for a big company or small contractor first?",
    a: "Large employers offer structured training, benefits, and varied job types. Small shops expose you to end-to-end customer relationships and business basics faster. Many techs start at one and move to the other once they know their preferred pace and specialty.",
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

const PAGE_HREF = "/field-service/guides/how-to-become-a-field-service-technician";

export default function HowToBecomeAFieldServiceTechnicianPage() {
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
                      How to Become a Field Service Technician
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Become a Field Service Technician
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Training paths into field service: apprenticeships, trade school, certifications, and how to pick
                    an employer that develops technicians instead of burning them out.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Becoming a field service technician usually starts with choosing a trade or service niche—HVAC,
                      plumbing, electrical, appliances, commercial equipment, or route-based service—and matching that
                      choice to how your region licenses and trains workers. There is no single national pipeline; there
                      are overlapping paths that all end with someone competent alone at a customer site.
                    </p>
                    <p>
                      Most successful techs combine classroom or online theory with paid field hours under supervision.
                      Employers watch for reliability, safe habits, and communication with customers long before they
                      trust solo dispatch on high-stakes jobs.
                    </p>
                    <p>
                      Required credentials vary by trade and state—see{" "}
                      <Link href="/field-service/guides/what-qualifications-field-technicians-need" className={linkGreen}>
                        what qualifications field technicians need
                      </Link>{" "}
                      for licenses, certifications, and soft skills by trade. Compare typical pay bands in our{" "}
                      <Link href="/field-service/guides/field-service-technician-salary-guide" className={linkGreen}>
                        field service technician salary guide
                      </Link>{" "}
                      once you know which path you are pursuing.
                    </p>
                    <p>
                      Explore where graduates land:{" "}
                      <Link href="/field-service/guides/examples-of-field-service-businesses" className={linkGreen}>
                        examples of field service businesses
                      </Link>{" "}
                      shows industry variety, and{" "}
                      <Link href="/field-service/guides/what-does-a-field-service-technician-do" className={linkGreen}>
                        what does a field service technician do
                      </Link>{" "}
                      describes the day-to-day role you are training toward.
                    </p>
                  </div>
                </section>

                <section id="training-paths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trade school, community college, and employer programs.">Formal Training Paths</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Trade and technical schools offer six-month to two-year programs in HVAC, plumbing, electrical,
                      and diesel or industrial maintenance. Graduates leave with baseline tool skills, code awareness,
                      and credentials like EPA 608 that employers expect on résumés.
                    </p>
                    <p>
                      Community college certificates cost less per credit in many states and may stack toward associate
                      degrees if you later move into management or engineering support roles.
                    </p>
                    <p>
                      Manufacturer and distributor training—carrier academies, water heater labs, controls vendors—targets
                      working techs but some programs accept students placed through school partnerships. Treat them as
                      supplements to core licensing, not replacements.
                    </p>
                  </div>
                </section>

                <section id="apprenticeships" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Earn while you learn under journeyperson oversight.">Apprenticeships and OJT</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Registered apprenticeships combine paid work with structured hour tracking toward journeyperson
                      exams. Union and non-union programs exist in major trades; apply early because cohorts fill and
                      aptitude tests gate entry.
                    </p>
                    <p>
                      Non-registered but supervised on-the-job training is common at residential service companies hiring
                      helpers. Progression depends on clear milestones: ride-alongs, first solo maintenance visits, then
                      diagnostic calls with backup on phone.
                    </p>
                    <p>
                      Document hours and skills acquired. When you change employers, proof of supervised work speeds
                      licensing applications and pay negotiations.
                    </p>
                  </div>
                </section>

                <section id="certifications" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Credentials that unlock legal and higher-paid work.">Certifications and Licensing Steps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Plan licensing in sequence: apprentice or helper registration where required, accumulate verified
                      field hours, pass trade exams, then maintain continuing education for renewals. Skipping steps
                      limits the jobs you can legally perform even if your skills outpace your card.
                    </p>
                    <p>
                      Industry certifications—NATE for HVAC, manufacturer-specific heat pump or controls certs, backflow
                      tester licenses—signal specialization to employers and customers. Stack them after journeyperson
                      status unless a cert is entry-level (EPA 608 Type II is the classic example).
                    </p>
                    <p>
                      Soft certifications matter too: valid driver&apos;s license with clean record, OSHA 10 or 30 for
                      construction accounts, and basic first aid where contracts require it.
                    </p>
                  </div>
                </section>

                <section id="first-job" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choosing employers that invest in new techs.">Landing Your First Field Role</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Target employers with named training leads, ride-along periods, and clear license sponsorship
                      policies. Ask how performance is measured in the first ninety days—callbacks, safety incidents,
                      customer scores—not just revenue.
                    </p>
                    <p>
                      Interviewers should explain tools provided, on-call expectations, and whether you will run a
                      company vehicle. Red flags include immediate solo dispatch on complex installs with no backup
                      and vague answers about licensing support.
                    </p>
                    <p>
                      Learn the software stack early. Employers using modern FSM apps expect new hires to adopt mobile
                      workflows quickly—see{" "}
                      <Link href="/field-service/guides/how-field-service-technicians-use-software" className={linkGreen}>
                        how field service technicians use software
                      </Link>{" "}
                      so training feels familiar on day one.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Starting a field service career.">FAQs</SectionTitle>
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
    title: "How to Become a Field Service Technician | BeltStack Guide",
    description:
      "Learn how to become a field service technician: trade school vs apprenticeship, licensing steps, certifications, and how to land a first employer that trains well.",
    keywords: [
      "become field service technician",
      "HVAC apprenticeship",
      "trade school field service",
      "technician certification path",
      "field service career",
      "service technician training",
    ],
  };
}
