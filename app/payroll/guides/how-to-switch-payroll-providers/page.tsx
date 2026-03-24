import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl } from "@/lib/routes";

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
    q: "Is it hard to switch payroll providers?",
    a: "It takes preparation but is manageable. You need to export payroll records, set up the new system with employee and tax data, verify direct deposit and deductions, and time the cutover so no pay run or tax filing falls through the cracks. Many providers offer migration support or checklists. Planning ahead and choosing a quiet period (e.g. start of quarter or year) reduces stress.",
  },
  {
    q: "Can you switch payroll providers mid-year?",
    a: "Yes. Mid-year switches are common. The main complication is year-to-date payroll and tax data—you must ensure the new provider has correct YTD amounts so withholdings and tax filings stay accurate for the rest of the year. Export YTD summaries from the old provider and enter or import them into the new one. Some platforms help with this during onboarding.",
  },
  {
    q: "What payroll records do I need before switching?",
    a: "Gather employee and contractor details (names, SSNs or EINs, addresses, pay rates, bank accounts), payroll history and year-to-date summaries, tax IDs and filing info (federal EIN, state IDs), benefits and deduction setup, and any custom pay policies. Having these ready speeds up setup in the new system and reduces errors.",
  },
  {
    q: "Who files taxes when you change payroll providers?",
    a: "The new provider typically takes over tax filing once you have run at least one payroll with them and they have your tax information. Clarify with both the old and new provider: the old provider files for periods before the switch; the new provider files for periods after. Ensure no gap or duplicate filing for the transition period.",
  },
  {
    q: "What is the easiest payroll software to switch to?",
    a: "Platforms that offer straightforward setup, clear onboarding, and (where available) import or migration tools tend to be easier to switch to. Gusto, QuickBooks Payroll, OnPay, and Rippling are often cited for relatively simple setup and support. Compare features and read our reviews to find the best fit for your team size and needs.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best for simple switching",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for QuickBooks users",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: 4.7,
    bestFor: "Best for growing teams",
    reviewHref: getPayrollReviewUrl("rippling"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
];

export default function HowToSwitchPayrollProvidersPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Switch Payroll Providers</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Switch Payroll Providers
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how to move from one payroll provider to another without disrupting payroll, tax filings, or employee payments.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses switch payroll providers for better pricing, easier setup, stronger support, or better integrations with accounting and HR tools. Changing payroll systems can feel risky, but it is manageable with the right preparation. The biggest concerns are employee data, tax setup, direct deposit, and timing the transition correctly—all of which can be addressed with a clear plan.
                    </p>
                    <p>
                      To compare options before or after a switch, explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Why Businesses Switch ——— */}
                <section id="why-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common reasons to make a change.">Why Businesses Switch Payroll Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Current provider is too expensive</strong> — Base and per-person fees add up. Many businesses move to <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>, <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, or <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link> for more transparent, predictable pricing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll feels too manual or outdated</strong> — Older or basic systems require more data entry and offer fewer automations. Modern platforms like <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> and <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link> streamline runs and tax filing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Support is poor</strong> — Slow responses or limited channels push businesses to providers with better support and onboarding.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Business needs have changed</strong> — Adding employees, contractors, benefits, or multi-state payroll can make the current system a poor fit.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Better integrations elsewhere</strong> — Tighter integration with QuickBooks, Xero, or time-tracking tools may justify a switch.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Switching from basic payroll to payroll + HR</strong> — Moving to an all-in-one like Gusto or Rippling can consolidate payroll and HR in one place.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— What to Prepare ——— */}
                <section id="what-to-prepare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Gather these before you move.">What to Prepare Before Switching</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Before switching, collect:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Employee and contractor information</strong> — Names, SSNs or EINs, addresses, pay rates, pay frequency, and employment type (W-2 vs 1099).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll history</strong> — Recent pay stubs or run summaries so the new provider can verify setup.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Year-to-date payroll records</strong> — YTD wages, withholdings, and employer taxes so the new system can file correctly for the rest of the year.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax IDs and filing information</strong> — Federal EIN, state withholding and unemployment IDs, and any local tax IDs. Confirm which agency the old provider has been filing with.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Bank account and direct deposit details</strong> — Company bank account for tax deposits and employee/contractor accounts for payments. Re-verify with employees to avoid failed deposits.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Benefits and deductions information</strong> — Health, 401(k), garnishments, or other deductions so they continue correctly in the new system.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— When to Switch ——— */}
                <section id="when-to-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Timing the cutover.">When to Switch Payroll Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">At the beginning of a year</strong> — The cleanest time to switch. No year-to-date payroll or tax filings to carry over; the new provider starts fresh. Many businesses plan a January 1 cutover.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">At the end of a quarter</strong> — Another common choice. After the old provider has filed the quarter&apos;s returns and made deposits, you switch so the new provider takes over for the next quarter. You must transfer YTD data so the new provider&apos;s filings for the rest of the year are correct.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">After a payroll cycle closes</strong> — Switch right after a pay run has completed and taxes have been deposited for that period. That way there is no split pay run or confusion about who files what.
                    </p>
                    <p>
                      Mid-year switching is still possible but requires more care. You need to give the new provider accurate year-to-date payroll and tax information so they can file correctly for the remainder of the year and avoid duplicate or missed filings. Export YTD summaries from the outgoing provider and enter or import them during onboarding.
                    </p>
                  </div>
                </section>

                {/* ——— Step by Step ——— */}
                <section id="step-by-step" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A clear workflow for the transition.">How to Switch Payroll Providers Step by Step</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-4 list-decimal list-inside">
                      <li>
                        <strong className="text-[#1A2D48]">Choose a new provider.</strong> Compare features, pricing, and support using our <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link> and <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup. Confirm they support your pay frequency, employee and contractor mix, and state requirements.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Export payroll records from the old provider.</strong> Download or export employee data, payroll history, and year-to-date summaries. Keep copies in a safe place; you may need them for taxes or audits.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Set up employees, contractors, and tax information in the new system.</strong> Enter or import names, SSNs/EINs, pay rates, and tax IDs. Enter YTD amounts if switching mid-year so the new provider&apos;s filings are accurate.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Verify deductions, benefits, and direct deposit.</strong> Confirm that health, 401(k), garnishments, and other deductions are set up correctly. Re-enter or verify employee and contractor bank accounts for direct deposit to avoid failed payments.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Confirm tax settings and filing responsibilities.</strong> Ensure the new provider has the correct federal and state tax IDs and understands they will file and deposit for the periods after the cutover. Confirm with the old provider when they will stop filing.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Run the first payroll carefully.</strong> Process a test or small run if the platform allows, or run the first live payroll with extra review. Verify pay amounts, withholdings, and direct deposit before submitting.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Keep records from the old provider.</strong> Retain access to historical reports and tax filings from the outgoing provider for at least several years for compliance and reference.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* ——— Common Problems ——— */}
                <section id="common-problems" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Mistakes to avoid.">Common Problems When Switching Payroll Providers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Missing year-to-date data</strong> — If you don&apos;t transfer YTD wages and taxes, the new provider may under- or over-withhold or file incorrect returns. Always export and enter YTD when switching mid-year.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Duplicate or missed tax filings</strong> — Clarify with both providers who files for which period. A gap can mean penalties; duplicate filings can cause confusion and refund requests.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Direct deposit setup errors</strong> — Wrong account numbers or routing numbers lead to failed deposits. Have employees confirm their bank details in the new system.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Forgetting contractor setup</strong> — If you pay 1099 contractors, set them up in the new system and ensure payment history or YTD amounts are tracked for 1099 reporting at year-end.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Switching too close to payroll deadlines</strong> — Give yourself time to test the new system. Switching right before a pay date or tax deadline increases the risk of errors or missed filings.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Best Payroll If Switching ——— */}
                <section id="best-if-switching" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Platforms that make transition easier.">Best Payroll Software If You&apos;re Switching</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses often switch to providers that are easier to use or better aligned with their workflows—simpler setup, clearer pricing, or stronger integration with their accounting or HR tools. For a curated list of top picks, see our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>. For in-depth reviews of popular choices for switchers, check out{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>,{" "}
                      <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>,{" "}
                      <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>, and{" "}
                      <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Compare Before Switching ——— */}
                <section id="compare-before-switching" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="See how providers stack up before you move.">Compare Payroll Providers Before Switching</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Comparing providers first can help you avoid switching twice. We publish head-to-head payroll comparisons on features, pricing, and ease of use. Start at our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub, or jump to specific matchups:{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link>,{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link>, and{" "}
                      <Link href={getPayrollCompareUrl("rippling-vs-gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling vs Gusto</Link>.
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
                title="Popular Payroll Providers"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/how-to-switch-payroll-providers"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Switch Payroll Providers | BeltStack",
    description:
      "Learn how to switch payroll providers safely, including what records to prepare, when to switch, and how to compare payroll software before moving.",
  };
}
