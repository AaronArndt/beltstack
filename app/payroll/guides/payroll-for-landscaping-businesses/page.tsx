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
    q: "What is the best payroll software for landscaping businesses?",
    a: "The best fit depends on your crew size, whether you have seasonal workers or subcontractors, and your budget. Gusto, OnPay, QuickBooks Payroll, and Patriot Payroll are often strong fits. See our best payroll for landscaping and best payroll software guides for curated picks.",
  },
  {
    q: "Can payroll software handle seasonal landscaping workers?",
    a: "Yes. Most payroll platforms let you add and remove employees as your season changes. You still need to run payroll on schedule, file taxes, and keep records for anyone you pay. Choose a provider that makes it easy to onboard and offboard seasonal staff without locking you into long-term contracts.",
  },
  {
    q: "What payroll software is best for hourly landscaping crews?",
    a: "Look for payroll software that handles hourly pay and overtime well, and that integrates with time tracking (built-in or via an app) so hours are accurate. Gusto, OnPay, QuickBooks Payroll, and Patriot Payroll all support hourly workers and are commonly used by small field-based teams.",
  },
  {
    q: "Do landscaping businesses need payroll software for subcontractors?",
    a: "If you pay 1099 subcontractors (e.g. for specialty work or peak season), payroll software that supports both employees and contractors simplifies payments and year-end 1099 forms. Not every landscaping company uses subs; if you do, choose a provider that handles both cleanly.",
  },
  {
    q: "What payroll software is easiest for a small landscaping company?",
    a: "Platforms like Gusto, OnPay, and Patriot Payroll are often cited for simple setup and straightforward pay runs. Look for clear pricing, easy onboarding of seasonal workers, and good support. Our reviews and comparisons break down ease of use for each provider.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for landscaping businesses",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Best for simple seasonal payroll",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
  {
    name: "Patriot Payroll",
    logoSrc: "/Logos/patriot.jpeg",
    rating: 4.3,
    bestFor: "Best for budget-conscious crews",
    reviewHref: getPayrollReviewUrl("patriot-payroll"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best Payroll for Landscaping", href: getPayrollBestForUrl("landscaping") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "Patriot Payroll Review", href: getPayrollReviewUrl("patriot-payroll") },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
];

export default function PayrollForLandscapingBusinessesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Payroll for Landscaping Businesses</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Landscaping Businesses
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how landscaping businesses manage payroll for crews, seasonal workers, and subcontractors, and how payroll software can simplify tax filing, time tracking, and labor costs.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Landscaping businesses often manage hourly crews, seasonal employees, and sometimes subcontractors. Payroll can be difficult because of changing schedules, overtime, and multiple job sites—making wage calculations, labor costs, and time tracking more complex. Payroll software helps simplify wage calculations, tax filing, and employee payments so owners and office staff can focus on running the business.
                    </p>
                    <p>
                      To explore options for your business, see our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>,{" "}
                      <Link href={getPayrollBestForUrl("landscaping")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for landscaping</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Why Payroll Is Different ——— */}
                <section id="why-different" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What makes landscaping payroll unique.">Why Payroll Is Different for Landscaping Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Landscaping payroll often involves:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly employees</strong> — Crews are commonly paid by the hour, so accurate time tracking and overtime rules matter.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Seasonal staffing</strong> — Busy seasons mean more workers; off-seasons mean fewer. Payroll volume and admin change throughout the year.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Overtime and changing schedules</strong> — Long days and variable hours can increase overtime and make scheduling—and payroll—more complex.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Subcontractors</strong> — Some companies also use 1099 subcontractors for specialty work or peak capacity, adding contractor payments and 1099 reporting to the mix.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— What to Look For ——— */}
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key selection factors for landscaping businesses.">What Landscaping Businesses Should Look For in Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Easy payroll for hourly workers</strong> — Support for hourly pay, overtime, and (where needed) time tracking so pay is accurate.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Support for seasonal staffing</strong> — Simple onboarding and offboarding so you can add or remove workers as the season changes without extra hassle.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support if needed</strong> — If you pay 1099 subcontractors, look for 1099 payments and year-end 1099 forms in one system.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll tax automation</strong> — Full-service tax filing and deposits so you stay compliant without manual deadlines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking integrations</strong> — Built-in or integrated time tracking so crew hours flow into payroll correctly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Accounting integrations</strong> — Sync to QuickBooks or other accounting software so payroll flows into your books.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Simple pricing for small teams</strong> — Transparent base and per-person costs so you know what you pay as crew size changes.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Seasonal Workers and Crews ——— */}
                <section id="seasonal-and-crews" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Managing seasonal payroll and compliance.">Payroll for Seasonal Workers and Landscaping Crews</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Some landscaping businesses hire more workers during busy seasons and scale back in the off-season. Payroll systems should make it easy to add or remove employees without locking you into long-term contracts or complex setup. Seasonal payroll still requires tax compliance and accurate recordkeeping—withholdings, employer taxes, and filings apply whenever you pay W-2 employees. For more on how small businesses run payroll and stay compliant, see our{" "}
                      <Link href="/payroll/guides/payroll-for-small-business" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for small business</Link> guide and our{" "}
                      <Link href="/payroll/guides/payroll-taxes-explained" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll tax filing explained</Link> guide.
                    </p>
                  </div>
                </section>

                {/* ——— Best Payroll for Landscaping ——— */}
                <section id="best-for-landscaping" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks for landscaping businesses.">Best Payroll Software for Landscaping Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For curated picks and who each tool is best for, see our{" "}
                      <Link href={getPayrollBestForUrl("landscaping")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for landscaping</Link> guide and our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup. Likely strong fits for landscaping include{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>,{" "}
                      <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>,{" "}
                      <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>, and{" "}
                      <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link>—each with different strengths on pricing, seasonal flexibility, and ease of use.
                    </p>
                  </div>
                </section>

                {/* ——— Simple Payroll Pricing ——— */}
                <section id="simple-pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why cost and simplicity matter.">Why Simple Payroll Pricing Matters for Landscaping Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many landscaping businesses are small and cost-sensitive. Payroll pricing that scales with employee count—clear base fees and per-person costs—helps you budget as crew size changes with the season. Paying for extra HR or admin features you don’t use may not make sense. For a breakdown of how providers price their services and what to expect, see our{" "}
                      <Link href="/payroll/guides/payroll-software-pricing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software pricing guide</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— How to Compare ——— */}
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate when choosing a provider.">How Landscaping Businesses Should Compare Payroll Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When comparing providers, look at:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pricing</strong> — Base and per-person cost; how it scales as you add or remove seasonal workers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly payroll support</strong> — Accurate hourly pay and overtime; time tracking if needed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Seasonal staffing flexibility</strong> — Easy to add and remove employees without long-term commitment.</span>
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
                        <span><strong className="text-[#1A2D48]">Integrations</strong> — Time tracking, accounting (e.g. QuickBooks), and any other tools you use.</span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub and matchups like{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link>,{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link>, and{" "}
                      <Link href={getPayrollCompareUrl("patriot-payroll-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll vs OnPay</Link> help you evaluate these factors side by side.
                    </p>
                  </div>
                </section>

                {/* ——— When to Upgrade ——— */}
                <section id="when-to-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signs you need a more capable platform.">When a Landscaping Business Should Upgrade Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>You may need a more capable platform when:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Crews are growing</strong> — Headcount or per-person limits make the current tool less viable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Scheduling gets more complex</strong> — Multiple job sites, more overtime, or approval workflows exceed what basic payroll offers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More admin time on payroll</strong> — You’re spending too much time on manual steps, corrections, or reporting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More contractor use</strong> — You need robust 1099 support, contractor self-service, or better reporting on labor mix.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More reporting or HR needs</strong> — Custom reports, labor analytics, onboarding, benefits, or workers’ comp in one place.</span>
                      </li>
                    </ul>
                    <p>
                      Tools like <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link> and <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link> offer broader HR, compliance, and scalability—often with custom pricing. Compare your current needs to what each platform provides before switching.
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
                title="Payroll Software for Landscaping Businesses"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-landscaping-businesses"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Landscaping Businesses | BeltStack",
    description:
      "Learn how landscaping businesses manage payroll for crews, seasonal workers, and subcontractors and how to choose payroll software for hourly workers and tax compliance.",
  };
}
