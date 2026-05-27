import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl, getPayrollBestForUrl } from "@/lib/routes";

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
    q: "How is construction payroll different from regular payroll?",
    a: "Construction payroll usually includes job-level labor tracking, multiple project sites, variable classifications, higher overtime complexity, and public-works requirements like certified payroll and prevailing wage. Regular payroll in office-based businesses usually has fewer moving compliance variables per pay period.",
  },
  {
    q: "Why does construction payroll need job costing data?",
    a: "Labor is one of the largest cost drivers in construction. Without job-level payroll mapping, contractors cannot see which projects are profitable, where estimates missed, or where crew productivity is slipping.",
  },
  {
    q: "Do all construction companies need certified payroll workflows?",
    a: "No, but any company working on covered public projects often does. Private-only contractors may not need certified payroll reporting, though many still need stronger labor controls than non-construction businesses.",
  },
  {
    q: "What payroll software features matter most for construction?",
    a: "Time-to-payroll integration, job and class reporting, multi-state support, 1099 + W-2 handling, and compliance support for prevailing wage/certified payroll usually matter most.",
  },
  {
    q: "When should a contractor upgrade payroll systems?",
    a: "A good trigger is when payroll errors, compliance rework, or job-cost blind spots start affecting cash flow, payment cycles, or closeout risk. At that point, software with stronger controls usually pays for itself.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for job-costing alignment in SMBs",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "ADP",
    logoSrc: "/Logos/adp.jpeg",
    rating: 4.4,
    bestFor: "Best for growing construction orgs",
    reviewHref: getPayrollReviewUrl("adp"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best for simpler small-crew operations",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Payroll for Construction Companies guide", href: "/payroll/guides/payroll-for-construction-companies" },
  { label: "How Certified Payroll Works guide", href: "/payroll/guides/how-certified-payroll-works" },
  { label: "How Prevailing Wage Payroll Works guide", href: "/payroll/guides/how-prevailing-wage-payroll-works" },
  { label: "Best Payroll for Construction", href: getPayrollBestForUrl("construction") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
];

export default function HowConstructionPayrollDiffersPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Construction Payroll Differs</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Construction Payroll Differs
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how construction payroll differs from standard payroll operations and what systems contractors need for labor visibility and compliance.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In many service businesses, payroll is a predictable administrative function. In construction, payroll is operational infrastructure: it affects job costing, billing cadence, compliance posture, and whether project margins are visible early enough to act.
                    </p>
                    <p>
                      This guide breaks down the practical differences and how to evaluate payroll tools accordingly. For deeper public-works context, see{" "}
                      <Link href="/payroll/guides/how-certified-payroll-works" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">how certified payroll works</Link>.
                    </p>
                  </div>
                </section>

                <section id="job-level-labor" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Construction payroll must map labor to work, not just employees.">1) Job-Level Labor Tracking Is Core</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Construction payroll must tie hours and rates to projects, phases, and sometimes cost codes. Without that linkage, labor reporting is too late or too vague to support estimating, change-order discussions, or margin recovery.
                    </p>
                  </div>
                </section>

                <section id="classification-complexity" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Worker role and task classification directly impact pay.">2) Classification Complexity Is Higher</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Construction teams often switch tasks and rates within the same week. Payroll processes need controls for classification accuracy, especially on mixed crews and public work. Generic payroll setups that assume one role per worker frequently break in the field.
                    </p>
                  </div>
                </section>

                <section id="site-and-jurisdiction" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where work happens changes payroll obligations.">3) Multi-Site and Jurisdiction Rules Matter</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Construction payroll regularly spans multiple job sites, localities, and sometimes states. Tax setup, overtime rules, and labor standards can vary by jurisdiction. Systems need to support this operationally, not as an afterthought.
                    </p>
                  </div>
                </section>

                <section id="compliance-layer" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Public projects add a second compliance engine.">4) Certified Payroll and Prevailing Wage Add Reporting Load</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Covered projects require weekly certified payroll and prevailing wage compliance workflows that most non-construction businesses never encounter. That adds recurring documentation, validation, and audit risk to every payroll cycle.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/payroll/guides/how-prevailing-wage-payroll-works" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">how prevailing wage payroll works</Link>{" "}
                      for detailed mechanics.
                    </p>
                  </div>
                </section>

                <section id="crew-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Most contractors run mixed labor models.">5) W-2 and 1099 Mixes Are Common</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Construction payroll frequently includes employees, subcontractors, and temporary labor patterns in the same business. That creates higher classification and documentation risk than standard single-model payroll environments.
                    </p>
                    <p>
                      For classification-oriented planning, review{" "}
                      <Link href="/payroll/guides/payroll-for-contractors" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for contractors</Link>.
                    </p>
                  </div>
                </section>

                <section id="software-criteria" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How buying criteria should change for construction teams.">What to Look For in Construction Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reliable time-to-payroll integration by project and class.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Construction-ready reporting for labor, rates, and reconciliation.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Compliance support for prevailing wage and certified payroll workflows.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Scalability for growing crews, locations, and payroll approvals.</span></li>
                    </ul>
                    <p>
                      Compare options in our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">comparison hub</Link>{" "}
                      and curated{" "}
                      <Link href={getPayrollBestForUrl("construction")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for construction</Link>{" "}
                      page.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key buying and operations questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Payroll Software for Construction Teams" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedPayrollResources items={RELATED_RESOURCES_ITEMS} excludeHref="/payroll/guides/how-construction-payroll-differs" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Construction Payroll Differs | BeltStack",
    description:
      "Learn how construction payroll differs from standard payroll, including job costing, multi-site labor, and compliance-heavy reporting workflows.",
  };
}
