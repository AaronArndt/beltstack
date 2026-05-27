import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const FAQ_ITEMS = [
  {
    q: "What is certified payroll?",
    a: "Certified payroll is a required weekly payroll report used on many public works projects. Contractors typically submit Form WH-347 (or an approved equivalent) to show worker classifications, hours, wages, fringe benefits, and deductions for each project week.",
  },
  {
    q: "Who has to submit certified payroll reports?",
    a: "Prime contractors and subcontractors performing covered public works labor usually must submit weekly certified payroll. The requirement is common on federally funded projects under Davis-Bacon and on many state or local prevailing wage projects with similar rules.",
  },
  {
    q: "Is certified payroll the same as regular payroll?",
    a: "No. Regular payroll pays workers and handles taxes. Certified payroll adds project-specific compliance reporting, including classification-level wage details, fringe benefit handling, and formal attestations that labor standards were met.",
  },
  {
    q: "What is Form WH-347 used for?",
    a: "WH-347 is the U.S. Department of Labor's optional certified payroll form. It captures worker-level hours, rates, gross pay, deductions, and net pay, and it is paired with a statement of compliance signed by the contractor.",
  },
  {
    q: "What are common certified payroll mistakes?",
    a: "Common mistakes include wrong worker classifications, missing fringe calculations, rate mismatches by county or project determination, overtime errors, and late submissions. These issues can delay payment and trigger audits or back-wage findings.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "ADP",
    logoSrc: "/Logos/adp.jpeg",
    rating: 4.4,
    bestFor: "Best for larger compliance-heavy teams",
    reviewHref: getPayrollReviewUrl("adp"),
  },
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for QuickBooks-based contractors",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best for small teams needing cleaner payroll ops",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Payroll for Construction Companies guide", href: "/payroll/guides/payroll-for-construction-companies" },
  { label: "How Prevailing Wage Payroll Works guide", href: "/payroll/guides/how-prevailing-wage-payroll-works" },
  { label: "How Construction Payroll Differs guide", href: "/payroll/guides/how-construction-payroll-differs" },
  { label: "Payroll Tax Filing Explained guide", href: "/payroll/guides/payroll-taxes-explained" },
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "ADP Review", href: getPayrollReviewUrl("adp") },
];

export default function HowCertifiedPayrollWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How Certified Payroll Works</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Certified Payroll Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how certified payroll works on public works projects, what data must be reported weekly, and how contractors reduce compliance risk.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Certified payroll is a reporting requirement tied to labor standards on many government-funded projects. It is not only about paying people on time. It requires weekly, worker-level documentation showing that every laborer was paid correctly for their classification and location.
                    </p>
                    <p>
                      If your company handles public works, this guide explains the operational workflow from time collection to submission, common failure points, and where payroll software helps. For broader payroll evaluation, see our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>{" "}
                      and{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                <section id="what-it-is" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The compliance layer on top of payroll.">What Certified Payroll Is</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Certified payroll is a weekly submission that documents wages paid on covered public jobs. The most common format is WH-347 plus a signed statement of compliance. Agencies use it to verify that workers received at least required wage and fringe amounts under project labor standards.
                    </p>
                    <p>Typical fields include worker name/ID, classification, daily and weekly hours, base wage, fringe treatment, gross pay, deductions, and net pay.</p>
                  </div>
                </section>

                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How operations teams run it week to week.">Certified Payroll Workflow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Capture project-level time daily</strong> so each hour is tied to the right contract and classification.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Validate wage determination rates</strong> before payroll close, including county and labor class differences.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Run payroll and fringe calculations</strong> with documented deduction logic and overtime handling.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Generate and review WH-347 output</strong> for missing classifications, rate mismatches, and hour anomalies.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Submit before agency deadlines</strong> and retain an audit-ready copy with supporting timesheets.</span></li>
                    </ul>
                  </div>
                </section>

                <section id="required-data" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Data quality determines compliance outcomes.">What Data You Need Weekly</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Teams that pass compliance reviews consistently track these fields well:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Worker classification by task performed, not only by job title.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Daily hours, split by straight-time and overtime.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Prevailing wage and fringe treatment for each classification.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Deductions with documentation that matches policy and agreements.</span></li>
                    </ul>
                    <p>
                      Missing these details usually causes rejected submissions and payment delays. This is where integrated time + payroll systems have real operational value, especially compared to manual spreadsheet assembly.
                    </p>
                  </div>
                </section>

                <section id="software-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where software reduces risk and rework.">How Payroll Software Helps With Certified Payroll</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Software can materially improve certified payroll operations by:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Linking time entries to jobs and classifications before payroll runs.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Applying pay rules consistently across crews and projects.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Producing cleaner reports for WH-347 preparation and review.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Maintaining historical records for audits and back-wage investigations.</span></li>
                    </ul>
                    <p>
                      Compare platforms with construction-heavy payroll needs in our{" "}
                      <Link href="/payroll/guides/payroll-for-construction-companies" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">construction payroll guide</Link>{" "}
                      and specific reviews like{" "}
                      <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>{" "}
                      and{" "}
                      <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link>.
                    </p>
                  </div>
                </section>

                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where contractors usually get flagged.">Common Certified Payroll Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Using one classification for all hours on mixed-scope work.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Applying outdated wage determinations after project updates.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Fringe benefit math that does not reconcile to policy and payroll.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Late weekly submissions that hold up draw requests or pay apps.</span></li>
                    </ul>
                    <p>
                      Teams with recurring issues should standardize approval workflows and pre-submission checks before signing the weekly compliance statement.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers for owners and payroll admins.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Payroll Software for Certified Payroll Workflows" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedPayrollResources items={RELATED_RESOURCES_ITEMS} excludeHref="/payroll/guides/how-certified-payroll-works" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Certified Payroll Works | BeltStack",
    description:
      "Learn how certified payroll works, what WH-347 requires, and how contractors manage compliant weekly reporting on public works jobs.",
  };
}
