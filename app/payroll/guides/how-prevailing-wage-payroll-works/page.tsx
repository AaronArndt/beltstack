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
    q: "What is prevailing wage payroll?",
    a: "Prevailing wage payroll is payroll processed under wage rules that require minimum hourly rates and fringe amounts by worker classification on covered public projects. Employers must pay at least those determination rates and maintain compliant records.",
  },
  {
    q: "Is prevailing wage the same in every county?",
    a: "No. Rates vary by project location, labor classification, and determination period. The same contractor can run different prevailing wage rates across nearby projects if the determinations differ.",
  },
  {
    q: "How do fringes work in prevailing wage payroll?",
    a: "Fringes can be paid as cash in lieu on the paycheck or satisfied through approved bona fide benefit plans, depending on project rules. Payroll teams must document fringe treatment clearly and reconcile it to required totals.",
  },
  {
    q: "Do small contractors have to follow prevailing wage rules?",
    a: "If they perform covered work on qualifying public projects, yes. Company size does not remove the requirement. Compliance depends on contract terms and governing labor standards.",
  },
  {
    q: "What happens if prevailing wage is underpaid?",
    a: "Underpayments can trigger back-wage liability, payment withholding, penalties, and added audit scrutiny. Corrective payroll runs and documentation are usually required before full project closeout.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "ADP",
    logoSrc: "/Logos/adp.jpeg",
    rating: 4.4,
    bestFor: "Best for multi-state compliance workflows",
    reviewHref: getPayrollReviewUrl("adp"),
  },
  {
    name: "Paychex",
    logoSrc: "/Logos/paychex.jpeg",
    rating: 4.3,
    bestFor: "Best for support-heavy payroll teams",
    reviewHref: getPayrollReviewUrl("paychex"),
  },
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for contractor accounting alignment",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "How Certified Payroll Works guide", href: "/payroll/guides/how-certified-payroll-works" },
  { label: "How Construction Payroll Differs guide", href: "/payroll/guides/how-construction-payroll-differs" },
  { label: "Payroll for Construction Companies guide", href: "/payroll/guides/payroll-for-construction-companies" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "ADP Review", href: getPayrollReviewUrl("adp") },
  { label: "Paychex Review", href: getPayrollReviewUrl("paychex") },
];

export default function HowPrevailingWagePayrollWorksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Prevailing Wage Payroll Works</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Prevailing Wage Payroll Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how prevailing wage payroll works in real operations, including classifications, fringe treatment, and compliance controls for covered jobs.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prevailing wage payroll is where normal payroll operations intersect with labor law compliance. Teams need to pay workers accurately by project-specific rates, document classifications correctly, and preserve audit-ready records week after week.
                    </p>
                    <p>
                      This guide focuses on practical execution for construction and trade contractors. For related topics, see{" "}
                      <Link href="/payroll/guides/how-certified-payroll-works" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">how certified payroll works</Link>{" "}
                      and{" "}
                      <Link href="/payroll/guides/payroll-for-construction-companies" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for construction companies</Link>.
                    </p>
                  </div>
                </section>

                <section id="core-rules" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The three controls that drive most compliance outcomes.">Prevailing Wage Payroll Basics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Classification-specific rates</strong> must match the work performed, not just employee title.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Geography and determination rules</strong> control required rates by project and location.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Fringe handling</strong> must reconcile to benefit plans or cash-in-lieu calculations.</span></li>
                    </ul>
                  </div>
                </section>

                <section id="how-rates-are-applied" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where contractors often lose margin and time.">How Prevailing Wage Rates Are Applied</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Teams should apply rates based on the labor classification used on each project day. If employees perform mixed work, time should be split by classification where required. Blanket averaging usually fails audits and creates back-pay exposure.
                    </p>
                    <p>
                      Strong operations use foreman-approved time coding, project-level rate tables, and payroll pre-checks before finalizing each run.
                    </p>
                  </div>
                </section>

                <section id="fringes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A frequent source of non-compliance.">How Fringe Benefits Work in Prevailing Wage Payroll</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Fringe obligations can be met through approved benefit contributions, cash in lieu, or a hybrid approach based on governing rules. The operational priority is consistency: payroll outputs must tie to supportable records and project requirements.
                    </p>
                    <p>
                      Contractors that lack fringe reconciliation controls often pass payroll but fail downstream compliance review.
                    </p>
                  </div>
                </section>

                <section id="operating-controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Process controls that keep weekly runs clean.">Operational Controls That Matter Most</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Maintain a current rate matrix by project and classification.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Require supervisor approval on coded time before payroll close.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Run exception reports for rates below required minimums.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Archive payroll support docs by project week for audits.</span></li>
                    </ul>
                  </div>
                </section>

                <section id="software-fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Evaluating tools for real compliance workloads.">Choosing Payroll Software for Prevailing Wage Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Software should support job-level time imports, classification-aware reporting, reliable audit exports, and admin workflows that catch rate mismatches before checks are issued. Compare options in the{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparison hub</Link>{" "}
                      and validate workflows with real project data, not only demo scenarios.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions from payroll managers and owners.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Payroll Tools for Prevailing Wage Teams" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedPayrollResources items={RELATED_RESOURCES_ITEMS} excludeHref="/payroll/guides/how-prevailing-wage-payroll-works" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Prevailing Wage Payroll Works | BeltStack",
    description:
      "Learn how prevailing wage payroll works, including classifications, fringe treatment, and compliance controls for covered construction projects.",
  };
}
