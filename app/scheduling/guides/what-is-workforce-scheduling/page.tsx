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
  { q: "What is workforce scheduling?", a: "Workforce scheduling is the process of planning staff shifts and coverage to match demand while controlling labor cost and meeting policy requirements." },
  { q: "How is workforce scheduling different from appointment scheduling?", a: "Appointment scheduling manages customer booking slots. Workforce scheduling manages internal staffing, shifts, availability, and labor rules." },
  { q: "Who needs workforce scheduling software?", a: "Retail, hospitality, healthcare, services, and any business with shift-based staffing across teams or locations benefits from dedicated workforce scheduling tools." },
  { q: "What features are most important?", a: "Key features include shift templates, availability rules, open-shift management, overtime controls, compliance guardrails, and payroll/time-tracking integrations." },
  { q: "Does workforce scheduling replace payroll?", a: "No. It complements payroll by improving planned staffing accuracy and feeding cleaner shift and hour data into payroll workflows." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Shift-aware SMBs", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Team coordination", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Service staffing", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/what-is-workforce-scheduling";

export default function WhatIsWorkforceSchedulingPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">What Is Workforce Scheduling?</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Workforce Scheduling?
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical definition of workforce scheduling, core capabilities, and how buyers evaluate software for shift-based teams.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Workforce scheduling is the operational process of assigning the right people to the right shifts
                      at the right time. The goal is to meet demand while controlling labor cost and maintaining service quality.
                    </p>
                    <p>
                      Unlike basic calendars, workforce scheduling includes constraints such as role qualifications,
                      legal rules, overtime thresholds, and location coverage requirements. Those constraints are why
                      dedicated software is often required beyond spreadsheets.
                    </p>
                    <p>
                      If you are comparing related categories, review{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-workforce-management-software" className={linkGreen}>
                        scheduling vs workforce management software
                      </Link>
                      .
                    </p>
                    <p>
                      Continue research through the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>guide library</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. Related functions include{" "}
                      <Link href="/payroll" className={linkGreen}>payroll</Link>,{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>, and{" "}
                      <Link href="/crm" className={linkGreen}>CRM</Link>.
                    </p>
                  </div>
                </section>
                <section id="core-elements" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="The building blocks every workforce model needs.">Core Elements of Workforce Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Workforce scheduling combines demand planning with people constraints. Strong tools balance both
                      dimensions rather than optimizing only for full calendar coverage.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Shift templates and role-based staffing requirements</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Availability, leave, and preference management</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Coverage rules by location and business hours</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Compliance and overtime guardrails</span></li>
                    </ul>
                  </div>
                </section>
                <section id="software-capabilities" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Where software outperforms manual scheduling.">What Workforce Scheduling Software Typically Includes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most workforce tools offer drag-and-drop scheduling, open-shift workflows, conflict alerts, and
                      automated notifications for shift updates.
                    </p>
                    <p>
                      Mobile functionality is increasingly essential for frontline teams. See{" "}
                      <Link href="/scheduling/guides/mobile-scheduling-apps-explained" className={linkGreen}>
                        mobile scheduling apps
                      </Link>{" "}
                      for practical rollout guidance.
                    </p>
                  </div>
                </section>
                <section id="business-impact" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Measure outcomes by service and cost, not just coverage.">Business Impact of Better Workforce Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Effective workforce scheduling improves service consistency, reduces avoidable overtime, and lowers
                      manager time spent on reactive edits.
                    </p>
                    <p>
                      Integrated payroll and time-tracking data helps leadership verify whether schedule quality is
                      translating into real labor-cost improvements.
                    </p>
                  </div>
                </section>
                <section id="evaluation-checklist" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Buy software that fits your staffing model.">How Buyers Should Evaluate Workforce Scheduling Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prioritize fit across role complexity, location count, and policy requirements. Ask vendors for
                      examples matching your industry and team structure.
                    </p>
                    <p>
                      Then compare shortlisted products on reporting depth, integration quality, and manager adoption
                      speed instead of feature count alone.
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
    title: "What Is Workforce Scheduling? | BeltStack Guide",
    description:
      "Learn what workforce scheduling is, how it differs from appointment scheduling, and which software capabilities matter for shift-based teams.",
    keywords: [
      "what is workforce scheduling",
      "workforce scheduling software",
      "employee shift scheduling",
      "labor scheduling",
      "staff scheduling tools",
      "workforce schedule management",
    ],
  };
}
