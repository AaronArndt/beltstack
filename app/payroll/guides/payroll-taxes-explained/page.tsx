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
    q: "What taxes are included in payroll taxes?",
    a: "Payroll taxes typically include federal income tax withholding, Social Security tax, Medicare tax (both employee and employer portions), federal unemployment tax (FUTA), and state payroll taxes such as state income tax withholding and state unemployment tax. Some localities also impose additional payroll-related taxes.",
  },
  {
    q: "Do small businesses have to pay payroll taxes?",
    a: "Yes. Once you have employees, you are generally required to withhold and remit payroll taxes and to pay employer-side taxes (e.g. FICA, unemployment). Small businesses are not exempt; the rules apply based on having employees and paying wages. Payroll software helps small businesses meet these obligations without a dedicated payroll staff.",
  },
  {
    q: "What is the difference between payroll taxes and income taxes?",
    a: "Payroll taxes are taxes tied to employment: withholdings from employee pay (income tax, Social Security, Medicare) and employer-paid taxes (matching FICA, unemployment). Income taxes broadly refer to taxes on income—including personal income tax that is withheld from paychecks as part of payroll. So income tax withholding is one type of payroll tax; Social Security, Medicare, and unemployment are other payroll taxes.",
  },
  {
    q: "Can payroll software file payroll taxes automatically?",
    a: "Yes. Full-service payroll software typically calculates withholdings and employer taxes, files required returns (e.g. Form 941), and makes tax deposits to the IRS and state agencies on your behalf. You provide employee and company information; the software handles rates, forms, and deadlines. Gusto, QuickBooks Payroll, OnPay, and similar platforms offer automated tax filing.",
  },
  {
    q: "What happens if payroll taxes are filed incorrectly?",
    a: "Errors can lead to penalties, interest, and in serious cases audits or legal action. Late or incorrect filings may trigger IRS and state penalties. If you discover an error, correct it as soon as possible—file an amended return or make a deposit and contact the agency if needed. Payroll software reduces errors by automating calculations and keeping up with rate and form changes.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best for automated tax filing",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Best for simple tax compliance",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for QuickBooks users",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
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

export default function PayrollTaxesExplainedPage() {
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
                    <li className="text-[#1A2D48] font-medium" aria-current="page">Payroll Taxes Explained</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll Taxes Explained
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Understand how payroll taxes work, what employers are responsible for, and how payroll software helps businesses file taxes correctly.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll taxes are required for businesses that employ workers. Employers must withhold certain taxes from employee paychecks and pay other taxes directly (e.g. employer share of Social Security and Medicare, unemployment tax). Payroll tax rules can be complex for small businesses, with federal, state, and sometimes local requirements. Payroll software simplifies the process by automating calculations and filings so you stay compliant without doing every calculation by hand.
                    </p>
                    <p>
                      To compare payroll platforms and their tax features, explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— What Are Payroll Taxes ——— */}
                <section id="what-are-payroll-taxes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Taxes tied to wages and employment.">What Are Payroll Taxes?</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll taxes include both taxes withheld from employees&apos; pay and taxes paid directly by employers. In simple terms:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Federal income tax</strong> — Withheld from employee pay based on withholding allowances and tax brackets. Employers remit these amounts to the IRS.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Social Security tax</strong> — A percentage of wages (up to an annual wage base) withheld from employees; employers pay a matching amount.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Medicare tax</strong> — A percentage of wages withheld from employees; employers pay a matching amount. Higher earners may have an additional Medicare tax.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Federal unemployment tax (FUTA)</strong> — Paid by employers (not withheld from employees) to fund unemployment benefits. Rates and wage bases are set by federal law.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">State payroll taxes</strong> — Often include state income tax withholding (where applicable), state unemployment tax, and sometimes local or disability taxes. Rules vary by state.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Employer Payroll Taxes ——— */}
                <section id="employer-taxes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Taxes the employer pays directly.">Payroll Taxes Employers Must Pay</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Employers are responsible for:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Matching Social Security and Medicare taxes</strong> — For each employee, employers pay a matching portion of FICA (Social Security and Medicare). The combined employee and employer rates are set by law; the employer remits both the withheld amount and the employer share.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Federal unemployment tax (FUTA)</strong> — Paid by the employer on wages up to the federal wage base. FUTA is not withheld from employee pay.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">State unemployment taxes</strong> — Most states levy unemployment tax on employers. Rates and wage bases vary by state and often by employer experience (e.g. layoff history).</span>
                      </li>
                    </ul>
                    <p>
                      Employer payroll tax rates and wage bases depend on state and workforce size. Payroll software applies current rates and keeps track of wage bases so you don&apos;t have to look them up each pay run.
                    </p>
                  </div>
                </section>

                {/* ——— Taxes Withheld From Employees ——— */}
                <section id="employee-withholding" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Amounts taken from employee pay.">Payroll Taxes Withheld From Employees</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Employers withhold the following from employee wages (where applicable):</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Federal income tax withholding</strong> — Based on the employee&apos;s W-4 and tax brackets. The employer remits withheld amounts to the IRS.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Social Security tax</strong> — A set percentage of wages, up to the annual wage base. Withheld from pay and remitted with the employer match.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Medicare tax</strong> — A set percentage of wages (and possibly an additional amount for higher earners). Withheld and remitted with the employer share.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">State income taxes</strong> — In states that tax income, employers withhold state (and sometimes local) income tax based on state forms and rules.</span>
                      </li>
                    </ul>
                    <p>
                      Withholding is calculated each pay period; the employer holds the amounts and remits them to the IRS and state agencies on a set schedule. Accurate calculations matter: under-withholding can leave employees with a tax bill at year-end, and errors can lead to penalties for the employer.
                    </p>
                  </div>
                </section>

                {/* ——— Payroll Tax Filing Deadlines ——— */}
                <section id="filing-deadlines" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When returns and deposits are due.">Payroll Tax Filing Deadlines</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Quarterly payroll tax filings</strong> — Federal Form 941 (employer&apos;s quarterly federal tax return) is typically due by the last day of the month after the end of each quarter. Tax deposits may be required monthly or semi-weekly depending on total liability. States have their own quarterly or other periodic filing and deposit schedules.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Annual forms</strong> — W-2s for employees are due to employees and the Social Security Administration by late January. 1099-NEC forms for contractors (when required) are also due in late January. Employers must file and furnish these on time to avoid penalties.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Employer reporting</strong> — Employers must keep records and file returns that reconcile wages paid, taxes withheld, and taxes paid. Missing a filing or deposit deadline can result in penalties and interest. Payroll software tracks deadlines and can file and deposit on your behalf.
                    </p>
                  </div>
                </section>

                {/* ——— Contractors vs Employees ——— */}
                <section id="contractors-vs-employees" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Different tax treatment for W-2 vs 1099.">Payroll Taxes for Contractors vs Employees</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">W-2 employees</strong> — Employers have full payroll tax responsibilities: withhold federal and state income tax, Social Security, and Medicare; pay the employer share of FICA; and pay federal and state unemployment tax. Employers file quarterly and annual returns and make deposits. For more on how contractor businesses handle both employee and contractor pay, see our <Link href="/payroll/guides/payroll-for-contractors" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for contractors</Link> guide.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">1099 contractors</strong> — Contractors are not employees; you do not withhold payroll taxes from their pay. They are responsible for their own income tax and self-employment tax (Social Security and Medicare). You pay them a gross amount and, when required, issue 1099-NEC forms at year-end. Misclassifying employees as contractors can lead to back taxes and penalties, so classification must be correct.
                    </p>
                  </div>
                </section>

                {/* ——— How Payroll Software Handles Taxes ——— */}
                <section id="how-software-handles-taxes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Automation from calculation to filing.">How Payroll Software Handles Payroll Taxes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Payroll software automates:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Payroll tax calculations</strong> — Applies current federal and state rates, wage bases, and withholding rules so each pay run has correct withholdings and employer taxes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax withholding</strong> — Calculates federal and state income tax withholding from W-4 and state forms, plus FICA, so employees are withheld correctly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax filing and payments</strong> — Files required returns (e.g. Form 941) and makes federal and state tax deposits on the required schedule. Full-service providers do this so you don&apos;t have to.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Year-end forms</strong> — Generates W-2s for employees and 1099-NEC for contractors (when applicable), and can file them with the IRS and state agencies.</span>
                      </li>
                    </ul>
                    <p>
                      Providers like <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>, <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>, <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, and <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link> offer automated tax calculation and filing. Our reviews detail how each handles multi-state, year-end forms, and compliance.
                    </p>
                  </div>
                </section>

                {/* ——— Best for Tax Compliance ——— */}
                <section id="best-for-tax-compliance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Platforms that prioritize tax automation.">Best Payroll Software for Tax Compliance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many payroll platforms specialize in automated tax filing and stay current with rate and form changes. For a curated list of top picks and how they handle tax compliance, see our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup. When comparing options, look for full-service tax filing, multi-state support, and clear reporting so you can rely on the software to keep you in compliance.
                    </p>
                  </div>
                </section>

                {/* ——— Compare for Tax Automation ——— */}
                <section id="compare-tax-automation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Evaluate tax features side by side.">Compare Payroll Software for Tax Automation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Our comparison pages help businesses evaluate tax automation features—what&apos;s included, how filing and deposits work, and how each platform handles multi-state or year-end forms. Browse our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub, or jump to{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link> and{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link> to see how tax handling compares.
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
                title="Payroll Software With Automated Tax Filing"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-taxes-explained"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll Taxes Explained | BeltStack",
    description:
      "Learn how payroll taxes work, what employers must pay, and how payroll software helps businesses calculate and file payroll taxes automatically.",
  };
}
