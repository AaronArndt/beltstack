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
    q: "What is the best payroll software for small businesses?",
    a: "The best fit depends on your headcount, whether you have contractors, your accounting software, and budget. Gusto, OnPay, Patriot Payroll, and QuickBooks Payroll are often recommended for small teams. See our best payroll software and best for small business guides for curated picks and comparisons.",
  },
  {
    q: "Do small businesses need payroll software?",
    a: "Once you have employees, you have payroll tax and filing obligations. Payroll software automates calculations, withholdings, tax filing, and recordkeeping, which reduces errors and saves time. Small businesses can run payroll manually or with spreadsheets, but software is usually more reliable and compliant.",
  },
  {
    q: "What payroll software is easiest for a small business to use?",
    a: "Platforms like Gusto, OnPay, and QuickBooks Payroll are often cited for straightforward setup and day-to-day use. Look for clear onboarding, simple pay run workflows, and good support. Our reviews and comparisons break down ease of use for each provider.",
  },
  {
    q: "What is the cheapest payroll software for small businesses?",
    a: "Options like Patriot Payroll and OnPay often offer lower base fees and transparent per-person pricing. Square Payroll can be cost-effective if you already use Square. See our payroll software pricing guide and best payroll software roundup for current comparisons.",
  },
  {
    q: "Can small businesses use payroll software for contractors too?",
    a: "Yes. Many payroll platforms support both W-2 employees and 1099 contractors—running employee payroll and contractor payments in one place, with 1099 forms at year-end. If you have a mix of employees and contractors, choose a provider that handles both.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for small businesses",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Best for simple payroll pricing",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
  {
    name: "Patriot Payroll",
    logoSrc: "/Logos/patriot.jpeg",
    rating: 4.3,
    bestFor: "Best for budget-conscious businesses",
    reviewHref: getPayrollReviewUrl("patriot-payroll"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best Payroll for Small Business", href: getPayrollBestForUrl("small-business") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Patriot Payroll Review", href: getPayrollReviewUrl("patriot-payroll") },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "How to Switch Payroll Providers guide", href: "/payroll/guides/how-to-switch-payroll-providers" },
];

export default function PayrollForSmallBusinessPage() {
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
                    <li className="text-[#1A2D48] font-medium" aria-current="page">Payroll for Small Business</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Small Business
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how small businesses manage payroll, what features matter most, and how payroll software helps simplify taxes, employee payments, and compliance.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses often need payroll software that is simple, affordable, and reliable. Payroll tasks—calculating wages, withholdings, tax filings, and recordkeeping—can quickly become time-consuming when done manually. Payroll software helps small teams automate pay runs, tax filings, and recordkeeping so owners and admins can focus on running the business.
                    </p>
                    <p>
                      The right payroll tool depends on factors like number of employees, whether you pay contractors, payroll frequency, software integrations (e.g. accounting), and pricing. To explore options, see our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>,{" "}
                      <Link href={getPayrollBestForUrl("small-business")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for small business</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Why Small Businesses Use Payroll Software ——— */}
                <section id="why-use-payroll-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common needs for small teams.">Why Small Businesses Use Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small businesses use payroll software to:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Run payroll accurately</strong> — Calculate gross pay, withholdings, and net pay without manual errors. Software applies current tax rates and wage bases.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">File payroll taxes</strong> — Submit federal and state returns and make tax deposits on schedule. Full-service providers handle this so you stay compliant.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pay employees by direct deposit</strong> — Send net pay to employee bank accounts via ACH. Most platforms support direct deposit and optional check or pay card.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Generate pay stubs</strong> — Provide employees with itemized statements of gross pay, deductions, and net pay for each pay period.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Keep payroll records organized</strong> — Store pay history, tax filings, and reports in one place for audits, year-end, and reference.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— What Small Businesses Should Look For ——— */}
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key selection factors.">What Small Businesses Should Look For</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Simple setup</strong> — Onboarding that doesn’t require a long sales cycle or IT support. You should be able to add employees, enter tax info, and run a first payroll without jumping through hoops.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Easy-to-understand pricing</strong> — Clear base and per-person fees so you can budget. Avoid opaque or custom-only pricing unless you need enterprise features.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Automated tax filing</strong> — The provider files returns and makes deposits so you don’t have to track deadlines or forms yourself.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support</strong> — If you pay 1099 contractors, the platform should handle contractor payments and 1099 forms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Integrations with accounting software</strong> — Sync to QuickBooks, Xero, or other tools so payroll flows into your books without re-entry.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Good customer support</strong> — Responsive help when you have questions about setup, a pay run, or taxes. Phone, chat, or email—depending on what you prefer.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Payroll Challenges ——— */}
                <section id="challenges" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common pain points for small teams.">Payroll Challenges for Small Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Limited admin time</strong> — Owners or office managers often wear multiple hats. Payroll software that is quick to run and doesn’t require constant troubleshooting frees up time.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Handling payroll taxes correctly</strong> — Withholdings, employer taxes, and filing deadlines are easy to get wrong manually. Software reduces errors and keeps you on schedule.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Switching from spreadsheets or manual payroll</strong> — Moving to software means entering data once and trusting the system. Choosing a provider with a smooth onboarding process helps.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Managing both employees and contractors</strong> — Mixed W-2 and 1099 pay requires a platform that supports both and keeps reporting clear.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Choosing between lower-cost and more full-featured providers</strong> — Budget options may lack HR or benefits; full-featured tools cost more. Match the product to what you actually need.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Best Payroll Software for Small Businesses ——— */}
                <section id="best-for-small-business" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks and in-depth reviews.">Best Payroll Software for Small Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For a curated list of top picks and who each tool is best for, see our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup and our{" "}
                      <Link href={getPayrollBestForUrl("small-business")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for small business</Link> guide. Example tools that often fit small teams include{" "}
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>,{" "}
                      <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>,{" "}
                      <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link>, and{" "}
                      <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>—each with different strengths on pricing, ease of use, and integrations.
                    </p>
                  </div>
                </section>

                {/* ——— How Pricing Affects Small Businesses ——— */}
                <section id="pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What small teams care about when it comes to cost.">How Pricing Affects Small Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small teams often care about <strong className="text-[#1A2D48]">base monthly fees</strong>—the fixed cost before per-person charges—and <strong className="text-[#1A2D48]">per-employee pricing</strong>, which can add up as you grow. Watch for <strong className="text-[#1A2D48]">hidden payroll tax or filing fees</strong>; some entry-level plans charge extra for tax filing or 1099s. Finally, consider whether you need HR features (onboarding, PTO, benefits)—<strong className="text-[#1A2D48]">paying for HR you don’t use</strong> can inflate the bill. For a deeper look at how payroll software is priced, see our{" "}
                      <Link href="/payroll/guides/payroll-software-pricing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software pricing guide</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— QuickBooks or Square ——— */}
                <section id="quickbooks-square" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When your accounting or payments ecosystem drives the choice.">Best Payroll Software for Small Business Owners Using QuickBooks or Square</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ecosystem fit matters: if you already run your books in QuickBooks or your payments and POS in Square, payroll that lives in the same system can simplify workflow. <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> posts payroll to your QuickBooks accounts and job costing automatically. <Link href={getPayrollReviewUrl("square-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Square Payroll</Link> sits inside your Square account so payroll and payments are in one place. Compare options in our{" "}
                      <Link href={getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Square Payroll vs QuickBooks Payroll</Link> and{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link> comparisons.
                    </p>
                  </div>
                </section>

                {/* ——— How to Compare ——— */}
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate when choosing a provider.">How to Compare Payroll Providers for a Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When comparing providers, look at:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Price</strong> — Base fee plus per-person cost; any add-ons for tax filing, 1099s, or HR.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax automation</strong> — Full-service filing and deposits vs. DIY or extra fees.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support</strong> — Paying 1099s and generating 1099 forms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">HR features</strong> — Onboarding, PTO, benefits—only if you need them.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Ease of use</strong> — Setup and day-to-day pay runs; quality of support.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Integrations</strong> — QuickBooks, Xero, time tracking, or other tools you use.</span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub and head-to-head pages like{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link> and{" "}
                      <Link href={getPayrollCompareUrl("patriot-payroll-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll vs OnPay</Link> help you evaluate these factors side by side.
                    </p>
                  </div>
                </section>

                {/* ——— When to Upgrade ——— */}
                <section id="when-to-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signs you’ve outgrown a basic solution.">When a Small Business Should Upgrade Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>You may need a more capable platform when:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">You have more employees</strong> — Per-person cost or feature limits make the current tool less viable.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">You need multi-state payroll</strong> — Multiple state withholdings, unemployment, or local taxes require robust compliance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">You want benefits administration</strong> — Health, 401(k), or other benefits integrated with payroll.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">You need HR support</strong> — Onboarding, compliance, PTO, or performance tools in one place.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking or admin complexity grows</strong> — Integrated time tracking, approval workflows, or multi-location reporting become important.</span>
                      </li>
                    </ul>
                    <p>
                      Tools like <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link> or <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link> may make more sense as the business grows—they offer broader HR, compliance, and scalability, often with custom pricing. Compare your current needs to what each platform provides before switching.
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
                title="Payroll Software for Small Businesses"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-small-business"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Small Business | BeltStack",
    description:
      "Learn how payroll works for small businesses, what payroll software features matter most, and how to compare payroll providers by price, automation, and ease of use.",
  };
}
