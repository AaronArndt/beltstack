import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl, getHrReviewUrl, getHrCompareUrl } from "@/lib/routes";

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
    q: "Is payroll software the same as HR software?",
    a: "No. Payroll software focuses on paying employees and contractors, tax withholding, and filings. Core HR software (HRIS) focuses on employee records, onboarding, time off, org structure, and often performance or learning. Many products bundle both; some teams run dedicated payroll plus a separate HRIS.",
  },
  {
    q: "When should I buy payroll separate from HR?",
    a: "Consider standalone payroll when payroll complexity (multi-state, unions, tip credits) is the main pain and HR processes are still light. Consider an HR-first or all-in-one platform when onboarding, policies, time off, and employee self-service are already breaking at your headcount.",
  },
  {
    q: "Can I use Gusto for payroll and BambooHR for everything else?",
    a: "You can if integrations support your workflows, but you should map employee data sync (new hires, terminations, departments) and avoid two sources of truth for the same field. Many mid-size teams prefer one system of record and integrations that push payroll journal entries to accounting.",
  },
  {
    q: "What about Rippling and similar platforms?",
    a: "Rippling and comparable suites blur the line: they sell payroll, HR, device management, and apps in one account. Evaluate whether you need that breadth or whether a focused payroll plus lighter HR tool keeps admin simpler at your stage.",
  },
  {
    q: "Where do time tracking and scheduling fit?",
    a: "Some payroll tools include basic time clocks; others expect a dedicated time tracking or scheduling app that feeds approved hours into payroll. See our time tracking hub and payroll for hourly workers guide for how data should hand off.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: 4.8, bestFor: "Payroll + light HR", reviewHref: getPayrollReviewUrl("gusto") },
  { name: "BambooHR", logoSrc: "/Logos/bamboohr.png", rating: 4.5, bestFor: "HRIS depth", reviewHref: getHrReviewUrl("bamboohr") },
  { name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: 4.6, bestFor: "Unified stack", reviewHref: getPayrollReviewUrl("rippling") },
];

const RELATED_ITEMS = [
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "HR Software Hub", href: "/hr" },
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best HR Software", href: "/hr/best-hr-software" },
  { label: "Payroll Guides", href: "/payroll/guides" },
  { label: "HR Guides", href: "/hr/guides" },
  { label: "How Payroll Software Works", href: "/payroll/guides/how-payroll-software-works" },
  { label: "How to Choose HR Software", href: "/hr/guides/how-to-choose-hr-software" },
  { label: "PEO vs HR Software", href: "/hr/guides/peo-vs-hr-software" },
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
];

export default function PayrollSoftwareVsHrSoftwarePage() {
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
                      <Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Payroll
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Payroll Software vs HR Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll Software vs HR Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Understand what payroll systems do versus HRIS / HR platforms, when bundles beat best-of-breed, and how
                    to keep employee data consistent as you add headcount.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers searching payroll vs HR are usually doing one of two things: deciding whether a payroll-first
                      vendor is enough, or untangling overlapping demos that both claim to “handle employees.” Payroll is
                      regulated, date-driven, and tightly coupled to taxes and cash. HR software is people-process driven:
                      records, policies, lifecycle events, and often recruiting or performance. Overlap is real—onboarding,
                      PTO, and profiles—but the primary job of each category is different, and mixing them up leads to
                      buying either too little structure or too much tool for your stage.
                    </p>
                    <p>
                      This guide lives in our <Link href="/payroll/guides" className={linkGreen}>payroll guides</Link> hub and
                      is cross-linked from <Link href="/hr/guides" className={linkGreen}>HR guides</Link> so you can reach it
                      from either research path. For product depth, see{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className={linkGreen}>Gusto</Link>,{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>BambooHR</Link>, and{" "}
                      <Link href={getPayrollReviewUrl("rippling")} className={linkGreen}>Rippling</Link> reviews and
                      comparisons like <Link href={getPayrollCompareUrl("rippling-vs-gusto")} className={linkGreen}>
                        Rippling vs Gusto
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="payroll-scope" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Compensation, taxes, and compliance filings.">What Payroll Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll systems calculate gross-to-net pay, withhold and remit payroll taxes where supported, produce
                      pay stubs, and generate year-end forms for employees and contractors. Strong payroll also handles pay
                      schedules, multiple work locations, benefit deductions, garnishments, and audit trails that stand up when
                      agencies ask questions. Anything that touches <em>amounts paid</em> and <em>tax timing</em> typically
                      belongs here first.
                    </p>
                    <p>
                      If your team is hourly-heavy, payroll quality depends on clean hours—see{" "}
                      <Link href="/payroll/guides/payroll-for-hourly-workers" className={linkGreen}>payroll for hourly workers</Link>{" "}
                      and <Link href="/time-tracking" className={linkGreen}>time tracking software</Link> for the upstream
                      side.
                    </p>
                  </div>
                </section>
                <section id="hr-scope" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Records, lifecycle, and policy.">What HR Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HRIS / HR platforms centralize job titles, managers, departments, onboarding tasks, time-off balances,
                      and employee acknowledgements. They reduce “who reports to whom” chaos and give HR and managers
                      self-service instead of spreadsheet handoffs. They may include recruiting or performance modules; payroll
                      may be native, integrated, or absent—check the fine print per plan.
                    </p>
                    <p>
                      For evaluation frameworks, use{" "}
                      <Link href="/hr/guides/how-to-choose-hr-software" className={linkGreen}>how to choose HR software</Link>{" "}
                      and <Link href="/hr/guides/best-hr-software-for-small-business" className={linkGreen}>
                        best HR software for small business
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="bundles" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trade-offs between one vendor and two.">All-in-One vs Payroll + HRIS</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">All-in-one</strong> reduces login sprawl and can make new-hire data
                      flow seamless. Downsides: you may pay for modules you do not use yet, or accept lighter payroll or HR
                      depth in one area.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Split stack</strong> lets you pick best-in-class payroll (e.g. complex
                      multi-state) and a focused HRIS, at the cost of integration maintenance. Require a clear owner field for
                      employee ID mapping and documented sync rules.
                    </p>
                    <p>
                      PEO arrangements add a third model—see <Link href="/hr/guides/peo-vs-hr-software" className={linkGreen}>PEO vs HR software</Link>—when co-employment and bundled benefits are on the table.
                    </p>
                  </div>
                </section>
                <section id="trust" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Verify compliance claims in your context.">Practical, Verifiable Guidance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll and HR decisions carry legal and financial weight. Treat marketing slides as starting points:
                      confirm support for your states, worker types (W-2 vs 1099), and benefit carriers in implementation
                      calls. BeltStack separates explainer guides from vendor reviews so you can cross-check pricing and
                      feature lists on current provider pages and during trials—not from stale screenshots alone.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Payroll vs HR" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedPayrollResources items={RELATED_ITEMS} excludeHref="/payroll/guides/payroll-software-vs-hr-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll Software vs HR Software: What’s the Difference? | BeltStack",
    description:
      "Learn how payroll systems differ from HR / HRIS platforms, when all-in-one tools make sense, and how to integrate payroll, HR, and time data without duplicate records.",
  };
}
