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
    q: "What is the best payroll software for hourly workers?",
    a: "Gusto, OnPay, QuickBooks Payroll, and Patriot Payroll all support hourly pay and overtime. The best fit depends on whether you need built-in time tracking, integrations with a time clock, or just manual entry. See our best for hourly employees and best payroll software guides.",
  },
  {
    q: "Does payroll software calculate overtime automatically?",
    a: "Yes. Full-service payroll products apply federal and state overtime rules (e.g. time-and-a-half after 40 hours per week) when you enter hours. Some also integrate with time-tracking tools so hours flow in automatically.",
  },
  {
    q: "Do I need time tracking for hourly payroll?",
    a: "Not always. You can enter hours manually each pay period. Time tracking (built-in or integrated) reduces errors and is useful when you have many hourly workers or need to track hours by job or location. Many payroll platforms offer both options.",
  },
  {
    q: "Can payroll software handle multiple pay rates for hourly workers?",
    a: "Yes. Most payroll software lets you set different hourly rates per employee (e.g. regular vs overtime, or different roles). Some support rate overrides per pay run. Check the provider for limits and how rate changes are handled.",
  },
  {
    q: "What payroll features matter most for hourly employees?",
    a: "Accurate hourly and overtime calculation, time tracking or easy manual entry, pay stubs that show hours and rates, and tax withholding and filing. Integrations with your existing time clock or scheduling tool can also matter.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Hourly + overtime + time tracking",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Hourly payroll + job costing",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Simple hourly payroll",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best for Hourly Employees", href: getPayrollBestForUrl("hourly-employees") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Payroll for Small Business guide", href: "/payroll/guides/payroll-for-small-business" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
];

export default function PayrollForHourlyWorkersPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Payroll for Hourly Workers</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Hourly Workers
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how payroll software handles hourly pay, overtime, and time tracking—and how to choose a platform that keeps hourly payroll accurate and compliant.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Hourly workers are common in retail, hospitality, field services, and many small businesses. Payroll for hourly employees means tracking hours, applying the right pay rates, calculating overtime correctly, and staying compliant with state and federal rules. Payroll software automates those calculations and tax withholding so you don’t have to do it by hand.
                    </p>
                    <p>
                      Explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll reviews</Link>,{" "}
                      <Link href={getPayrollBestForUrl("hourly-employees")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for hourly employees</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link> to compare options.
                    </p>
                  </div>
                </section>

                <section id="hourly-vs-salary" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How payroll software treats hourly pay.">Hourly Pay vs Salary in Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll software lets you set each employee as <strong className="text-[#1A2D48]">hourly</strong> or <strong className="text-[#1A2D48]">salaried</strong>. For hourly workers, you enter hours worked each pay period (or sync from a time-tracking tool). The system applies the hourly rate, calculates overtime when applicable (e.g. time-and-a-half after 40 hours per week under federal rules), and withholds taxes on the total. For salaried workers, you typically enter a fixed amount per pay period. Both types can coexist in the same payroll run.
                    </p>
                    <p>
                      State overtime rules can differ (e.g. daily overtime in California). Good payroll software applies the correct rules for each worker’s state. Check that your provider supports the states where your hourly employees work.
                    </p>
                  </div>
                </section>

                <section id="time-tracking" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Getting hours into payroll.">Time Tracking and Hourly Payroll</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      You can run hourly payroll in two main ways: <strong className="text-[#1A2D48]">manual entry</strong> (enter hours per employee each pay period) or <strong className="text-[#1A2D48]">time tracking</strong> (hours flow from a time clock or app into payroll). Manual entry is fine for a few hourly workers; time tracking reduces errors and saves time when you have many hourly employees or need to track by job or location.
                    </p>
                    <p>
                      Many payroll platforms offer built-in time tracking or integrate with tools like QuickBooks Time, When I Work, or TSheets. <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link> and <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> are strong options for hourly payroll with time tracking or integrations. See our{" "}
                      <Link href={getPayrollBestForUrl("hourly-employees")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best for hourly employees</Link> guide for more.
                    </p>
                  </div>
                </section>

                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that matter for hourly workers.">What to Look For in Payroll Software for Hourly Workers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hourly rate and overtime</strong> — Support for multiple rates and automatic overtime calculation (federal and state).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking</strong> — Built-in or integrated time tracking so hours flow into pay runs accurately.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pay stubs</strong> — Clear breakdown of hours, rates, overtime, and deductions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax filing</strong> — Automatic withholding and tax filing so you stay compliant.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Job or department reporting (optional)</strong> — If you need to allocate labor cost by job, look for reporting or accounting integration (e.g. QuickBooks job costing).</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="best-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Strong options for hourly payroll.">Best Payroll Software for Hourly Workers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>, <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, and <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> all support hourly pay and overtime well. Gusto and QuickBooks offer time tracking (built-in or via QuickBooks Time). <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link> is a lower-cost option for straightforward hourly payroll. Compare in our{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link> and{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link> articles.
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
              <GuideSidebar
                title="Payroll for Hourly Workers"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-hourly-workers"
        />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Hourly Workers | BeltStack",
    description:
      "Learn how payroll software handles hourly pay, overtime, and time tracking—and how to choose a platform that keeps hourly payroll accurate and compliant.",
  };
}
