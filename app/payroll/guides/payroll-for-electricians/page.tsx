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
    q: "What is the best payroll software for electricians?",
    a: "The best fit depends on your mix of field workers, apprentices, office staff, and subcontractors, whether you use QuickBooks for accounting, and your need for time tracking or labor reporting. Gusto, QuickBooks Payroll, OnPay, and Rippling are often strong fits. See our best payroll for electricians and best payroll software guides for curated picks.",
  },
  {
    q: "Can payroll software handle electricians and subcontractors?",
    a: "Yes. Most modern payroll platforms support both W-2 employees and 1099 subcontractors—running employee payroll and contractor payments in one system, with 1099 forms at year-end. Choose a provider that handles both cleanly to avoid misclassification and compliance issues.",
  },
  {
    q: "What payroll software works best with QuickBooks for electricians?",
    a: "QuickBooks Payroll integrates natively with QuickBooks so payroll posts to the right accounts and labor cost can flow into job costing. Many electrician businesses already use QuickBooks for accounting; adding QuickBooks Payroll keeps labor cost and books in one place. Gusto and OnPay also integrate with QuickBooks if you prefer a standalone payroll tool.",
  },
  {
    q: "Do electrician businesses need payroll software with time tracking?",
    a: "It depends. If you have hourly field technicians or apprentices, time tracking (or integration with a time-tracking app) helps ensure accurate pay and can feed job costing. Many payroll products offer built-in time tracking or integrate with tools like QuickBooks Time. If everyone is salary or you track time elsewhere, payroll-only may be enough.",
  },
  {
    q: "What payroll features matter most for electrician companies?",
    a: "Hourly payroll and overtime support, contractor support if you use subs, payroll tax automation, time tracking or integration, and accounting integration (especially QuickBooks) tend to matter most. Ease of use for small teams and support for growing businesses are also important. Compare providers on these factors before choosing.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for QuickBooks-based electrician businesses",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for small electrician businesses",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Best for simple payroll and contractor support",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best Payroll for Electricians", href: getPayrollBestForUrl("electricians") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Rippling Review", href: getPayrollReviewUrl("rippling") },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
];

export default function PayrollForElectriciansPage() {
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
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Payroll for Electricians</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Electricians
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how electrical contractors and electrician businesses manage payroll for crews, apprentices, office staff, and subcontractors, and how payroll software can simplify taxes, time tracking, and labor costs.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Electrician businesses often manage hourly field crews, apprentices, office and admin staff, and sometimes subcontractors. Payroll can get complicated because of varying hours, overtime, multiple job sites, and labor tracking—making payroll tax compliance and accurate pay runs more important. Payroll software helps automate calculations, tax filings, direct deposit, and reporting so owners and office staff can focus on running the business.
                    </p>
                    <p>
                      To explore options for your business, see our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>,{" "}
                      <Link href={getPayrollBestForUrl("electricians")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for electricians</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Why Payroll Is Different ——— */}
                <section id="why-different" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What makes electrician payroll unique.">Why Payroll Is Different for Electrician Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Electrician payroll often involves:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly workers</strong> — Many electrician companies pay field technicians and apprentices by the hour, so accurate time tracking and overtime rules matter.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Overtime</strong> — Overtime can be common on job sites; payroll must calculate it correctly and keep records for compliance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Office staff and field workers</strong> — Companies may have both office/admin staff and field crews with different pay structures and schedules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">1099 subcontractors</strong> — Some businesses also use subcontractors for specialty work or peak capacity, adding contractor payments and 1099 reporting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Labor tracking by job site</strong> — Labor costs by job site may matter for profitability and estimating; payroll and accounting together can support that.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— What to Look For ——— */}
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key selection factors for electrician businesses.">What Electrician Businesses Should Look For in Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly payroll support</strong> — Reliable hourly pay and overtime calculations so field workers and apprentices are paid correctly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Overtime calculations</strong> — Automatic overtime rules (e.g. federal and state) so you stay compliant without manual math.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support if needed</strong> — If you pay 1099 subs: contractor payments and year-end 1099 forms in one system.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll tax automation</strong> — Full-service tax filing and deposits so you stay compliant without manual deadlines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking integrations</strong> — Built-in or integrated time tracking so field hours flow into payroll accurately.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Accounting integrations</strong> — Sync to QuickBooks or other accounting software so payroll and labor cost flow into your books.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Easy setup for small teams</strong> — Simple onboarding and day-to-day pay runs so a small office can run payroll without dedicated HR.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Support for growing businesses</strong> — Ability to scale as you add more field workers, job sites, or locations.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Electricians, Apprentices, Subcontractors ——— */}
                <section id="electricians-apprentices-subs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Managing mixed teams in one system.">Payroll for Electricians, Apprentices, and Subcontractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Electrical contractors may have mixed teams: W-2 employees (field technicians, apprentices, office staff) and 1099 subcontractors. Payroll systems should support both—employee pay runs with withholdings and employer taxes, and contractor payments with year-end 1099 forms. Apprentices and field workers often require accurate hourly payroll and overtime handling. Misclassification (treating employees as contractors or vice versa) and incorrect tax handling can create compliance issues and penalties. For more on how contractor businesses handle payroll and classification, see our{" "}
                      <Link href="/payroll/guides/payroll-for-contractors" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for contractors</Link> guide and our{" "}
                      <Link href={getPayrollBestForUrl("1099-contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for 1099 contractors</Link> guide.
                    </p>
                  </div>
                </section>

                {/* ——— Best Payroll for Electricians ——— */}
                <section id="best-for-electricians" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks for electrician businesses.">Best Payroll Software for Electricians</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For curated picks and who each tool is best for, see our{" "}
                      <Link href={getPayrollBestForUrl("electricians")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for electricians</Link> guide and our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup. Likely strong fits for electricians include{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>,{" "}
                      <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>,{" "}
                      <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, and{" "}
                      <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>—each with different strengths on QuickBooks integration, contractor support, and scalability.
                    </p>
                  </div>
                </section>

                {/* ——— Why QuickBooks Payroll Is Popular ——— */}
                <section id="quickbooks-popular" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why many electrician businesses choose QuickBooks Payroll.">Why QuickBooks Payroll Is Popular With Electricians</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many small electrician businesses already use QuickBooks for accounting. <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> integrates with QuickBooks so payroll and bookkeeping work together—payroll posts to the right accounts and labor cost can flow into job costing. That can simplify admin and give you better visibility into labor and payroll for job profitability. If you’re comparing QuickBooks Payroll to other options, see our{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link> and{" "}
                      <Link href={getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Square Payroll vs QuickBooks Payroll</Link> comparisons.
                    </p>
                  </div>
                </section>

                {/* ——— How to Compare ——— */}
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate when choosing a provider.">How Electrician Businesses Should Compare Payroll Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When comparing providers, look at:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pricing</strong> — Base and per-person cost; add-ons for time tracking or 1099.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly payroll support</strong> — Accurate hourly pay and overtime; time tracking if needed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Overtime handling</strong> — Automatic overtime rules and compliance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support</strong> — If you pay 1099s: contractor payments and 1099 forms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax automation</strong> — Full-service filing and deposits so you stay compliant.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Accounting integrations</strong> — QuickBooks, Xero, or other tools you use for books and job costing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Ease of use</strong> — Setup, pay run workflow, and support for small teams.</span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub and matchups like{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link>,{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link>,{" "}
                      <Link href={getPayrollCompareUrl("rippling-vs-gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling vs Gusto</Link>, and{" "}
                      <Link href={getPayrollCompareUrl("rippling-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling vs QuickBooks Payroll</Link> help you evaluate these factors side by side.
                    </p>
                  </div>
                </section>

                {/* ——— When to Upgrade ——— */}
                <section id="when-to-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signs you need a more capable platform.">When an Electrician Business Should Upgrade Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>You may need a more capable platform when:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">You have more field workers</strong> — Headcount or per-person limits make the current tool less viable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Admin complexity grows</strong> — Multiple job sites, approval workflows, or reporting needs exceed what basic payroll offers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More need for reporting</strong> — Labor by job, custom reports, or integration with project management.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More multi-state or compliance complexity</strong> — You need robust multi-state payroll and compliance support.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More need for HR tools or workforce management</strong> — Onboarding, benefits, workers’ comp, or scheduling in one place.</span>
                      </li>
                    </ul>
                    <p>
                      Tools like <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>, <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link>, and <Link href={getPayrollReviewUrl("paychex")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Paychex</Link> offer broader HR, compliance, and scalability—often with custom pricing. Compare your current needs to what each platform provides before switching.
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
                title="Payroll Software for Electricians"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-electricians"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Electricians | BeltStack",
    description:
      "Learn how electrician businesses manage payroll for field crews, apprentices, and subcontractors and how to choose payroll software for hourly workers and tax compliance.",
  };
}
