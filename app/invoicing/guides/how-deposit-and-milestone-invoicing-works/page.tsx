import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "What is deposit invoicing?",
    a: "Deposit invoicing requests upfront payment before work begins or before major materials are purchased, usually defined as a percentage or fixed amount in the contract. It secures commitment and funds mobilization without waiting for full project completion. Deposits should always spell out how they apply to future invoices.",
  },
  {
    q: "What is milestone invoicing?",
    a: "Milestone invoicing bills specific project phases after agreed deliverables are completed, rather than waiting until the entire project is finished. Each milestone should have acceptance criteria so billing aligns with delivered value. This model is common in construction, agencies, and custom manufacturing.",
  },
  {
    q: "How much deposit should contractors charge?",
    a: "Deposit amounts vary by trade, risk, local norms, and what materials must be ordered before work starts. Many businesses use a percentage that covers mobilization and materials without over-collecting before delivery. Document the deposit in the contract and reference it on the first invoice.",
  },
  {
    q: "Should deposits be separate invoices or line items?",
    a: "Either approach can work. Separate invoices improve cash tracking and make deposit status obvious in A/R reports; line items on a progress invoice can simplify customer accounting in some cases. Choose the format your customer’s AP team prefers and stay consistent across projects.",
  },
  {
    q: "Can milestone invoices include retainage?",
    a: "Yes. Some contracts hold a retainage percentage until final completion, with milestone invoices billing the earned portion minus retained amounts. Retainage protects the customer while work is in progress; your books should track retained balances separately from earned revenue. Reconcile retainage at project close.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Progress billing and job costing", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Deposit + milestone templates", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Project-based billing workflows", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function HowDepositAndMilestoneInvoicingWorksPage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How Deposit &amp; Milestone Invoicing Works</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Deposit &amp; Milestone Invoicing Works</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how deposit and milestone invoicing funds work in progress, aligns billing with delivered value, and improves collections for contractors, agencies, and project-based businesses.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Deposit and milestone invoicing helps businesses fund work in progress without waiting for full project completion. Instead of carrying material and labor costs for months, you collect cash as the customer receives defined value—improving margin protection and predictability.
                    </p>
                    <p>
                      It is common in construction, remodeling, custom manufacturing, and fixed-bid professional services where delivery spans weeks or months. Agencies and consultants use similar patterns for phased retainers and statement-of-work deliverables.
                    </p>
                    <p>
                      Both models require contract clarity: what triggers each bill, how deposits apply to the final balance, and what acceptance looks like before you invoice the next phase. Ambiguous milestones are a leading cause of billing disputes on long jobs.
                    </p>
                    <p>
                      For contractor-specific workflows, see{" "}
                      <Link href="/invoicing/guides/invoicing-for-contractors" className={linkGreen}>invoicing for contractors</Link>,{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>, and{" "}
                      <Link href="/invoicing/guides/how-to-create-professional-invoices" className={linkGreen}>how to create professional invoices</Link>{" "}
                      for document quality on progress bills.
                    </p>
                  </div>
                </section>
                <section id="deposit-invoicing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Upfront billing before major delivery risk.">How Deposit Invoicing Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A deposit invoice is issued at contract signing or project kickoff. It secures commitment, covers mobilization costs, and reduces cash strain from materials purchased before the first progress payment arrives.
                    </p>
                    <p>
                      Deposits should be documented in contract language with clear application rules against future invoices—whether the deposit is a flat fee, a percentage of contract value, or tied to a specific phase. State refund conditions if the customer cancels before work starts.
                    </p>
                    <p>
                      On the invoice, label the charge as a deposit and reference the contract section that authorizes it. Your bookkeeper or accountant may record deposits as liabilities until earned; coordinate treatment with{" "}
                      <Link href="/invoicing/guides/accrual-vs-cash-accounting-for-invoices" className={linkGreen}>accrual vs cash accounting for invoices</Link>{" "}
                      so reporting stays accurate.
                    </p>
                  </div>
                </section>
                <section id="milestone-invoicing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Bill by delivered phase, not by calendar guesswork.">How Milestone Invoicing Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Milestone invoices are tied to defined deliverables—for example rough-in complete, design approved, or phase 2 installed—not arbitrary calendar dates. Each milestone should have acceptance criteria documented in the contract or statement of work so billing disputes are reduced.
                    </p>
                    <p>
                      Issue the milestone invoice promptly after acceptance. Delaying billing signals that completion was fuzzy and gives customers room to negotiate scope after the fact. Attach photos, sign-off emails, or inspection reports when your industry expects proof of completion.
                    </p>
                    <p>
                      Tie milestone billing to approval workflows when customers require sign-off. See{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>.{" "}
                      For collecting on open milestone balances, use{" "}
                      <Link href="/invoicing/guides/how-invoice-reminders-work" className={linkGreen}>how invoice reminders work</Link>.
                    </p>
                  </div>
                </section>
                <section id="cash-flow-control" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Protect margin while work is in progress.">Cash Flow and Reconciliation Considerations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Track deposits as liabilities or applied credits until earned, depending on your accounting method. Reconcile each milestone payment against project budget and remaining contract value so you never over-bill or under-collect relative to the signed scope.
                    </p>
                    <p>
                      Run a simple project billing schedule: contract total, deposits collected, milestones invoiced, payments received, and balance remaining. Review it weekly on active jobs so change orders do not silently erode margin.
                    </p>
                    <p>
                      For payment matching, see{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-partial-payments" className={linkGreen}>how businesses handle partial payments</Link>{" "}
                      when customers pay milestones in installments.
                    </p>
                  </div>
                </section>
                <section id="contract-schedule" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Document the billing plan before work starts.">Building a Deposit and Milestone Schedule</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Attach a billing schedule to every fixed-bid contract: deposit timing and amount, each milestone name, percentage or dollar value, and estimated invoice dates. Customers approve the schedule upfront, which reduces negotiation at each phase.
                    </p>
                    <p>
                      Include change-order rules: how scope additions adjust future milestones and whether new work requires a separate deposit. When retainage applies, show the held percentage on each milestone invoice so AP understands the net due.
                    </p>
                    <p>
                      Automate recurring admin where milestones repeat across similar jobs—templates in{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>{" "}
                      help—but keep human review on final amounts when job costs vary materially from estimate.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Deposit and milestone billing questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Project Billing" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-deposit-and-milestone-invoicing-works" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Deposit & Milestone Invoicing Works | BeltStack Guide",
    description:
      "Deposit and milestone invoicing for projects: how upfront and phase billing work, contract schedules, acceptance criteria, cash flow control, and reconciliation with partial payments.",
  };
}
