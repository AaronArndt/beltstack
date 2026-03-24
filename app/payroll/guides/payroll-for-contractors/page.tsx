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
    q: "How do contractors run payroll?",
    a: "Contractor businesses that have W-2 employees run payroll like any other small business: calculate wages, withhold taxes, and file payroll tax returns. For 1099 subcontractors, they pay the gross amount and issue 1099 forms at year-end. Payroll software can handle both in one place—running employee pay runs and contractor payments, and automating tax filings and 1099s.",
  },
  {
    q: "Can payroll software pay 1099 contractors?",
    a: "Yes. Most modern payroll platforms support both W-2 employees and 1099 contractors. You enter contractor information, run contractor payments (often via direct deposit or check), and the software can generate 1099-NEC forms at year-end. Some also offer contractor self-service portals so subs can update their details and view payment history.",
  },
  {
    q: "Do contractor businesses need payroll software?",
    a: "Once you have even one W-2 employee, you have payroll tax and filing obligations, and payroll software simplifies calculations and compliance. If you only pay 1099 contractors, you still need to track payments and issue 1099s—software can automate that. For mixed teams (employees and subs), payroll software is especially useful so you manage everything in one system.",
  },
  {
    q: "What payroll software works best for contractor businesses?",
    a: "Look for platforms that handle both W-2 and 1099 payroll, offer contractor payments and 1099 filing, and integrate with accounting or job-costing tools. Gusto, OnPay, and QuickBooks Payroll are popular with contractor and trade businesses. See our best payroll for contractors guide and individual reviews to compare features and pricing.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for contractor businesses",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Best for simple contractor payroll",
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
  { label: "Best Payroll for Contractors", href: getPayrollBestForUrl("contractors") },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Deel Review", href: getPayrollReviewUrl("deel") },
  { label: "Rippling Review", href: getPayrollReviewUrl("rippling") },
  { label: "Payroll for 1099 Contractors guide", href: "/payroll/guides/payroll-software-for-1099-contractors" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
];

export default function PayrollForContractorsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Payroll for Contractors</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Contractors: How It Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how contractors and trade businesses manage payroll for employees and subcontractors, including tax requirements and payroll software options.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many contractor businesses pay both employees and subcontractors—electricians, plumbers, landscapers, HVAC contractors, and construction companies often have a mix of W-2 employees and 1099 subs. Payroll requirements differ for each: employees have taxes withheld and employer payroll taxes apply; contractors are paid a gross amount and handle their own taxes. Payroll software simplifies tax filings, reporting, and payments so you can run payroll and contractor payments in one place.
                    </p>
                    <p>
                      To compare payroll options for your trade, explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>, and{" "}
                      <Link href={getPayrollBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for contractors</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Employees vs Contractors ——— */}
                <section id="employees-vs-contractors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How W-2 and 1099 workers are treated differently.">Employees vs Contractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">W-2 employees</strong> — You withhold federal and state income tax, Social Security, and Medicare from their pay. You also pay employer-side payroll taxes (e.g. FICA, unemployment). Employees are typically eligible for benefits (health, workers&apos; comp, etc.) and you must follow wage and hour rules. Payroll software calculates withholdings, files employment tax returns, and makes tax deposits on your behalf.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">1099 contractors</strong> — They are self-employed; you pay them a gross amount and do not withhold taxes. They are responsible for their own income and self-employment taxes. You generally do not pay employer payroll taxes on their compensation or provide benefits. At year-end you issue 1099-NEC forms for payments over the reporting threshold. Misclassifying employees as contractors can lead to penalties, so proper classification matters.
                    </p>
                    <p>
                      The IRS and state agencies use factors like control, permanence, and type of work to distinguish employees from contractors. Getting it wrong can mean back taxes, interest, and penalties. When in doubt, use payroll software that supports both worker types and consider consulting a tax or HR professional.
                    </p>
                  </div>
                </section>

                {/* ——— Payroll Challenges ——— */}
                <section id="challenges" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common pain points for trade businesses.">Payroll Challenges for Contractor Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Contractor businesses often face:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Managing both W-2 and 1099 workers</strong> — Different pay cycles, tax rules, and reporting. You need a system that can run employee payroll and contractor payments without mixing them up.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Calculating payroll taxes</strong> — Withholdings, employer FICA, and state/local taxes must be correct each pay run. Errors can lead to penalties and employee disputes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Filing quarterly payroll taxes</strong> — Federal and state returns and deposits have strict deadlines. Missing a filing or deposit can trigger fines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Generating 1099 forms</strong> — Contractors who are paid $600 or more in a year must receive a 1099-NEC. You need to track payments and file with the IRS and state if required.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tracking labor costs across jobs</strong> — For job-based businesses, tying labor (employees and subs) to projects helps with estimating and profitability. Some payroll tools integrate with job costing or accounting software.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— How Payroll Software Helps ——— */}
                <section id="how-software-helps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What payroll platforms do for contractor businesses.">How Payroll Software Helps Contractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Payroll software can:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Automate payroll calculations</strong> — Gross-to-net for employees, correct withholdings and employer taxes, so you don&apos;t have to do the math by hand.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Handle contractor payments</strong> — Run contractor pay runs, often with direct deposit or check, and track amounts for 1099 reporting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">File payroll taxes</strong> — Federal and state employment tax returns and deposits on the required schedule.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Provide payroll reports</strong> — Labor cost, tax summaries, and reports for accounting or job costing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Integrate with accounting software</strong> — Sync to QuickBooks, Xero, or other <Link href="/accounting" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">accounting</Link> tools so payroll flows into your books and, where supported, job costing.</span>
                      </li>
                    </ul>
                    <p>
                      Many contractors also use accounting software for bookkeeping and <Link href="/invoicing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">invoicing software</Link> for billing clients.
                    </p>
                    <p>
                      Platforms like <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>, <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>, and <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link> support both employee and contractor payroll, with varying depth of contractor features and integrations. Our reviews break down how each handles 1099 payments and reporting.
                    </p>
                  </div>
                </section>

                {/* ——— Best Payroll Software for Contractors ——— */}
                <section id="best-for-contractors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools built for mixed W-2 and 1099 teams.">Best Payroll Software for Contractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Some payroll tools are better suited for contractor-heavy businesses: they make it easy to run employee and contractor pay in one place, support 1099 payments and year-end forms, and often integrate with accounting or job-costing software. For curated picks, see our{" "}
                      <Link href={getPayrollBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for contractors</Link> guide. For in-depth reviews, check out <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>, <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link>, and <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Payroll Tax Requirements ——— */}
                <section id="tax-requirements" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you must file and when.">Payroll Tax Requirements for Contractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Payroll tax filings for employees</strong> — If you have W-2 employees, you must withhold federal (and usually state) income tax, Social Security, and Medicare; pay employer FICA and often state unemployment tax; and file returns and make deposits on a set schedule (e.g. monthly or quarterly depending on size). Payroll software can calculate and file these for you.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Issuing 1099 forms for contractors</strong> — For each 1099 contractor you pay $600 or more in a calendar year, you must provide them with a 1099-NEC and file a copy with the IRS (and with the state if required). Deadlines are typically late January. Many payroll platforms track contractor payments and generate 1099s.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Quarterly filings</strong> — Employment tax returns (e.g. Form 941) are usually filed quarterly; deposit frequency can be monthly or semi-weekly depending on your liability. Missing a filing or deposit can result in penalties. Full-service payroll software files and deposits on your behalf so you stay in compliance.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Federal and state compliance</strong> — Rules vary by state (e.g. state income tax withholding, unemployment, local taxes). Payroll software keeps up with rates and forms so you don&apos;t have to track every jurisdiction manually. This is a high-level overview; consult a tax professional for your specific situation.
                    </p>
                  </div>
                </section>

                {/* ——— Choosing Payroll Software ——— */}
                <section id="choosing-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for when evaluating tools.">Choosing Payroll Software for a Contractor Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When evaluating payroll software for a contractor business, look for:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">1099 contractor payments</strong> — Support for paying contractors, tracking amounts, and generating 1099-NEC forms. Contractor self-service is a plus.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Job costing or labor tracking</strong> — If you run jobs or projects, the ability to assign labor (employees and/or contractors) to jobs helps with profitability and estimating. Integration with QuickBooks or other accounting software often enables this.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Accounting integrations</strong> — Sync payroll data to your books so you don&apos;t re-enter data. QuickBooks Payroll is built for QuickBooks users; Gusto and OnPay integrate with QuickBooks and others.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Transparent pricing</strong> — Clear base and per-person (and per-contractor) fees so you can budget. Avoid surprises from hidden fees for 1099 filing or multi-state.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Ease of use for small teams</strong> — You may not have a dedicated HR or payroll person. Choose a platform that is straightforward to set up and run each pay period.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Payroll Software Comparisons ——— */}
                <section id="comparisons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Side-by-side feature and pricing comparisons.">Payroll Software Comparisons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      We publish head-to-head payroll comparisons so you can see how platforms stack up on features, pricing, and contractor support. Browse our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> to compare Gusto vs OnPay, Gusto vs QuickBooks Payroll, and more.
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
                title="Payroll Software for Contractors"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-contractors"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Contractors Guide | BeltStack",
    description:
      "Learn how payroll works for contractor businesses, including managing employees and subcontractors and choosing the right payroll software.",
  };
}
