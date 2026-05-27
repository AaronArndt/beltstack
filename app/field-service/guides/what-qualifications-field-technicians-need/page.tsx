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
    q: "Do qualification requirements differ by state?",
    a: "Yes. Plumbing, electrical, and HVAC licensing is state- or locally governed. A journeyperson card in one state may not reciprocate elsewhere. Always verify current rules with the licensing board where you will work before planning training.",
  },
  {
    q: "Can you work as a field tech with only soft skills?",
    a: "Pure soft skills are not enough for licensed trades—you need technical competence and legal credentials. Route-based or helper roles may emphasize driving record and customer communication first, but even those jobs require product training and safety certification.",
  },
  {
    q: "What soft skills do employers test in interviews?",
    a: "Punctuality, clear explanations, calm under customer pressure, and willingness to follow checklists. Some companies use ride-alongs or scenario questions about difficult homeowners or incomplete diagnostics.",
  },
  {
    q: "Are manufacturer certifications worth the cost?",
    a: "Worth it when your employer services that brand exclusively or bids warranty work that requires factory credentials. Less valuable if you rarely see that equipment line—prioritize baseline trade licenses first.",
  },
  {
    q: "How often do field techs renew licenses and certs?",
    a: "Renewal cycles vary: annual continuing education for some trade licenses, multi-year EPA credentials, periodic recertification for backflow or fire alarm work. Missed renewals can sideline you from billable jobs until caught up.",
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

const PAGE_HREF = "/field-service/guides/what-qualifications-field-technicians-need";

export default function WhatQualificationsFieldTechniciansNeedPage() {
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
                      What Qualifications Field Technicians Need
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Qualifications Field Technicians Need
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Licenses, certifications, and soft skills field technicians need by trade—plus how employers verify
                    credentials before putting techs on customer sites.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Qualifications for field technicians stack in three layers: legal permission to perform the work,
                      technical certifications that prove competence on specific systems, and soft skills that keep
                      customers safe and satisfied. Missing any layer creates risk—for the tech, the employer, and the
                      homeowner or facility manager watching the truck pull up.
                    </p>
                    <p>
                      Requirements are trade-specific and location-specific. A plumber in Texas and a plumber in
                      California follow different board rules. HVAC techs nationwide share EPA refrigerant requirements
                      but split on state contractor licenses. Build your checklist from the trade you chose, not generic
                      job posts alone.
                    </p>
                    <p>
                      Training timelines and apprenticeship routes are covered in{" "}
                      <Link href="/field-service/guides/how-to-become-a-field-service-technician" className={linkGreen}>
                        how to become a field service technician
                      </Link>
                      . Trade-specific operational context lives in{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        field service software for HVAC
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/field-service-software-for-plumbing" className={linkGreen}>
                        field service software for plumbing
                      </Link>{" "}
                      guides for how those businesses run day to day.
                    </p>
                    <p>
                      For role expectations and pay bands tied to credential level, see{" "}
                      <Link href="/field-service/guides/what-does-a-field-service-technician-do" className={linkGreen}>
                        what does a field service technician do
                      </Link>{" "}
                      and the{" "}
                      <Link href="/field-service/guides/field-service-technician-salary-guide" className={linkGreen}>
                        field service technician salary guide
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="licenses" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Legal requirements before solo billable work.">Trade Licenses and Registrations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Plumbing and electrical trades commonly require apprentice registration, verified field hours,
                      and journeyperson or master exams. Performing work above your license level exposes you and your
                      employer to fines, voided insurance claims, and customer lawsuits.
                    </p>
                    <p>
                      HVAC contractors may need state or local mechanical licenses; individual techs at minimum need EPA
                      Section 608 certification to handle refrigerant. Gas work often adds separate utility or state
                      credentials.
                    </p>
                    <p>
                      Low-voltage, fire alarm, and security techs face alarm installer licenses in many jurisdictions.
                      Medical gas, boiler, and elevator roles carry additional specialty permits tied to facility type.
                    </p>
                  </div>
                </section>

                <section id="certifications" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Beyond minimum legal bars.">Industry and Manufacturer Certifications</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      NATE and HVAC Excellence credentials validate residential and commercial HVAC knowledge. Employers
                      marketing quality install and service use them in hiring filters and customer brochures.
                    </p>
                    <p>
                      Plumbing techs may pursue backflow prevention assembly tester certification, medical gas installer
                      credentials, or pipe welding qualifications for industrial accounts. Each opens a narrower, often
                      higher-rate client segment.
                    </p>
                    <p>
                      OEM certifications—specific boiler lines, VRF systems, generator brands—are mandatory for warranty
                      work on those products. Factory training is usually paid by the employer when the line is strategic;
                      independent techs invest when building a specialty practice.
                    </p>
                  </div>
                </section>

                <section id="soft-skills" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What customers and dispatchers feel on every visit.">Soft Skills by Situation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Residential work demands empathy and plain-language explanations. Homeowners are often stressed,
                      uninformed about equipment, and sensitive to mess and time. Setting expectations upfront prevents
                      bad reviews even when the repair is technically correct.
                    </p>
                    <p>
                      Commercial and industrial sites emphasize protocol: PPE rules, sign-in procedures, escorts, and
                      documentation for compliance audits. Technicians who ignore site rules lose contracts regardless
                      of skill.
                    </p>
                    <p>
                      Universal habits: show up on time, call ahead when delayed, leave work areas cleaner than you found
                      them, and write job notes someone else can act on tomorrow. Soft skills are qualifications because
                      they determine callbacks and repeat business.
                    </p>
                  </div>
                </section>

                <section id="by-trade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick reference—not a substitute for board rules.">Qualification Snapshot by Trade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-neutral-800">HVAC:</strong> EPA 608; state or local HVAC/mechanical license
                      for contractors and often techs; NATE or manufacturer certs for heat pumps and controls; valid
                      driver&apos;s license; comfort explaining maintenance plans to homeowners.
                    </p>
                    <p>
                      <strong className="text-neutral-800">Plumbing:</strong> state plumbing license progression;
                      backflow certification where municipalities require it; OSHA awareness on construction jobs; ability
                      to diagnose under pressure without overselling unnecessary replacements.
                    </p>
                    <p>
                      <strong className="text-neutral-800">Electrical:</strong> state electrical license; NFPA 70E safety
                      practices; testing instrument proficiency; clear communication when power must stay off for safety.
                    </p>
                    <p>
                      <strong className="text-neutral-800">Route and equipment service:</strong> pest applicator licenses,
                      CDL where vehicle weight requires it, factory training for branded appliances; strong time
                      management across many short stops per day.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Credentials, compliance, and hiring.">FAQs</SectionTitle>
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
    title: "What Qualifications Field Technicians Need | BeltStack Guide",
    description:
      "Learn what qualifications field technicians need: trade licenses, EPA and industry certifications, soft skills by trade, and how employers verify credentials.",
    keywords: [
      "field technician qualifications",
      "HVAC technician license",
      "plumber certification requirements",
      "EPA 608 certification",
      "field service credentials",
      "technician soft skills",
    ],
  };
}
