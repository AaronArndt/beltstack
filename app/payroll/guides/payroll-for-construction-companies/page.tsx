import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl, getPayrollBestForUrl } from "@/lib/routes";

// ——— Design (match review template / compare hub) ———
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
    q: "What is the best payroll software for construction companies?",
    a: "The best fit depends on your mix of employees and subcontractors, whether you use QuickBooks for job costing, and your need for time tracking or labor reporting. Gusto, QuickBooks Payroll, OnPay, and ADP are often strong fits. See our best payroll for construction and best payroll software guides for curated picks.",
  },
  {
    q: "Can payroll software handle subcontractors and employees?",
    a: "Yes. Most modern payroll platforms support both W-2 employees and 1099 subcontractors—running employee payroll and contractor payments in one system, with 1099 forms at year-end. Choose a provider that handles both cleanly to avoid misclassification and compliance issues.",
  },
  {
    q: "What payroll software works best with QuickBooks for construction?",
    a: "QuickBooks Payroll integrates natively with QuickBooks so payroll posts to the right accounts and job costing automatically. Many construction companies already use QuickBooks for accounting; adding QuickBooks Payroll keeps labor cost and books in one place. Gusto and OnPay also integrate with QuickBooks if you prefer a standalone payroll tool.",
  },
  {
    q: "Do construction companies need payroll software with time tracking?",
    a: "It depends. If you have hourly field crews, time tracking (or integration with a time-tracking app) helps ensure accurate pay and can feed job costing. Many payroll products offer built-in time tracking or integrate with tools like TSheets/QuickBooks Time. If everyone is salary or you track time elsewhere, payroll-only may be enough.",
  },
  {
    q: "What payroll features matter most for construction businesses?",
    a: "Contractor and employee support, payroll tax automation, labor or job-cost reporting, and accounting integration (especially QuickBooks) tend to matter most. Time tracking, multi-state support, and ease of use for small offices are also important. Compare providers on these factors before choosing.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for QuickBooks-based construction teams",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for small construction businesses",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "ADP",
    logoSrc: "/Logos/adp.jpeg",
    rating: 4.4,
    bestFor: "Best for growing construction teams",
    reviewHref: getPayrollReviewUrl("adp"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best Payroll for Construction", href: getPayrollBestForUrl("construction") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
];

export default function PayrollForConstructionCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li>
                      <Link href="/" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll/guides" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-[#1A2D48] font-medium" aria-current="page">Payroll for Construction Companies</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Construction Companies
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how construction companies manage payroll for field crews, office staff, and subcontractors, and how payroll software can simplify tax filing, labor tracking, and compliance.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Construction companies often manage a mix of W-2 employees (field crews, office staff) and 1099 subcontractors. Payroll can be more complex because of multiple job sites, hourly workers, overtime, and the need to tie labor to jobs for job costing. Payroll software helps reduce manual admin and improve tax compliance so owners and office managers can focus on running the business.
                    </p>
                    <p>
                      To explore options for your company, see our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>,{" "}
                      <Link href={getPayrollBestForUrl("construction")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for construction</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Why Payroll Is More Complex ——— */}
                <section id="why-complex" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What makes construction payroll different.">Why Payroll Is More Complex for Construction Companies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Construction payroll often involves:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Multiple job sites</strong> — Crews may work at different locations; labor cost may need to be tracked by job or project for estimating and profitability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly workers</strong> — Field crews are often paid by the hour, so accurate time tracking and overtime rules matter.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Overtime</strong> — Construction work frequently triggers overtime. Payroll must calculate it correctly and keep records for compliance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">W-2 employees vs 1099 subcontractors</strong> — Mixing both in one business adds complexity: different pay runs, tax treatment, and reporting (e.g. 1099s at year-end).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Administrative burden</strong> — Office managers and owners must keep payroll, tax filings, and labor reporting under control without a large back office. Software that automates calculations and filing reduces that burden.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— What to Look For ——— */}
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key selection factors for construction.">What Construction Businesses Should Look For in Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support</strong> — Pay 1099 subcontractors and generate 1099-NEC forms. Contractor self-service is a plus.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking integration</strong> — Built-in or integrated time tracking so hourly and overtime pay is accurate and can feed job costing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Job costing or labor reporting</strong> — Reports that tie labor cost to jobs or departments help with estimating and profitability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll tax automation</strong> — Full-service tax filing and deposits so you stay compliant without manual deadlines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Direct deposit</strong> — Pay employees and often contractors by ACH for speed and convenience.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Accounting integration</strong> — Sync to QuickBooks or other accounting software so payroll flows into your books and, where supported, job costing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Ease of use for small teams</strong> — Simple setup and day-to-day pay runs so a small office can run payroll without dedicated HR.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Crews and Subcontractors ——— */}
                <section id="crews-and-subs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Managing employees and subs in one system.">Payroll Software for Construction Crews and Subcontractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many construction businesses pay both employees and subcontractors. Payroll tools should support both cleanly: W-2 pay runs with withholdings and employer taxes, and 1099 contractor payments with year-end 1099 forms. Misclassification (treating employees as contractors or vice versa) and incorrect tax handling can create compliance issues and penalties. For more on how contractor businesses handle payroll and classification, see our{" "}
                      <Link href="/payroll/guides/payroll-for-contractors" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for contractors</Link> guide and our{" "}
                      <Link href={getPayrollBestForUrl("1099-contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for 1099 contractors</Link> guide.
                    </p>
                  </div>
                </section>

                {/* ——— Best Payroll for Construction ——— */}
                <section id="best-for-construction" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks for construction companies.">Best Payroll Software for Construction Companies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For curated picks and who each tool is best for, see our{" "}
                      <Link href={getPayrollBestForUrl("construction")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for construction</Link> guide and our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup. Likely strong fits for construction include{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>,{" "}
                      <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>,{" "}
                      <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, and{" "}
                      <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link>—each with different strengths on job costing, contractor support, and scalability.
                    </p>
                  </div>
                </section>

                {/* ——— QuickBooks Payroll ——— */}
                <section id="quickbooks-popular" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why many construction companies choose QuickBooks Payroll.">Why QuickBooks Payroll Is Popular in Construction</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many construction businesses already use QuickBooks for accounting and job costing. <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> integrates with QuickBooks so payroll posts to the right accounts and labor cost flows into job costing without manual re-entry. That can simplify admin and keep books and payroll in one place. If you’re comparing QuickBooks Payroll to a standalone option, see our{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link> comparison.
                    </p>
                  </div>
                </section>

                {/* ——— How to Compare ——— */}
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate when choosing a provider.">How Construction Companies Should Compare Payroll Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When comparing providers, look at:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll tax automation</strong> — Full-service filing and deposits vs. extra fees or DIY.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support</strong> — Paying 1099s and 1099 forms; contractor self-service.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Labor reporting</strong> — Reports by job, department, or project for estimating and profitability.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking integrations</strong> — Built-in or integrated time tracking for hourly and overtime.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pricing</strong> — Base and per-person cost; add-ons for time tracking or 1099.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Accounting integrations</strong> — QuickBooks, Xero, or other tools you use for job costing and books.</span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub and matchups like{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link>,{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs ADP</Link>, and{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link> help you evaluate these factors side by side.
                    </p>
                  </div>
                </section>

                {/* ——— When to Outgrow ——— */}
                <section id="when-to-outgrow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signs you need a more capable platform.">When Construction Companies Outgrow Basic Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>You may need a more capable platform when:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">You have more crews</strong> — Headcount and per-person cost or feature limits make the current tool less viable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Admin complexity grows</strong> — Multiple locations, approval workflows, or reporting needs exceed what basic payroll offers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Multi-state work</strong> — You need robust multi-state payroll and compliance support.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More HR needs</strong> — Onboarding, compliance, benefits, or workers’ comp administration in one place.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More reporting needs</strong> — Custom reports, labor analytics, or integration with project management tools.</span>
                      </li>
                    </ul>
                    <p>
                      Larger or growing construction companies may prefer <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>, <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link>, or <Link href={getPayrollReviewUrl("paychex")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Paychex</Link> for broader HR, compliance, and scalability—often with custom pricing. Compare your current needs to what each platform provides before switching.
                    </p>
                  </div>
                </section>

                {/* ——— FAQ ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Payroll Software for Construction Companies"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-construction-companies"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Construction Companies | BeltStack",
    description:
      "Learn how construction companies manage payroll for employees and subcontractors and how to choose payroll software for job costing, tax filing, and labor tracking.",
  };
}
