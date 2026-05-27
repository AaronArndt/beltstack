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
    q: "What are the most common invoice types?",
    a: "Standard, recurring, pro forma, progress, credit, and debit invoices are the most common across small and mid-sized businesses. Most teams use two or three types regularly and keep the rest for exceptions. Choosing the right type upfront reduces disputes and rework.",
  },
  {
    q: "What is a pro forma invoice?",
    a: "A pro forma invoice is an estimate-style document issued before final delivery. It usually is not a final tax invoice or payment-demand document in the same way as a standard invoice. Customers often use it for budget approval or import planning before work is complete.",
  },
  {
    q: "When should I use progress invoices?",
    a: "Use progress invoices for milestone-based or long projects where billing in phases improves cash flow and aligns payment with work completion. They should reference contract totals and prior billings so customers see remaining balance clearly.",
  },
  {
    q: "What is a credit invoice?",
    a: "A credit invoice (or credit note) reduces an amount previously invoiced, often used for returns, service corrections, or overbilling adjustments. It should reference the original invoice number so accounting can match the adjustment.",
  },
  {
    q: "Can invoicing software support multiple invoice types?",
    a: "Yes. Most tools support templates and workflows for recurring, milestone, and adjustment invoices with different terms and approval paths. Compare template flexibility in our best invoicing software roundup before you standardize on one platform.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service and recurring invoice types", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Project and progress billing", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Template flexibility by scenario", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function DifferentTypesOfInvoicesExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Different Types of Invoices Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Different Types of Invoices Explained</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn when to use standard, recurring, progress, pro forma, and adjustment invoices so your billing model fits your business workflow.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Using one invoice style for every scenario creates avoidable payment friction. Invoice type should match how work is delivered, how customers approve charges, and how you recognize revenue—not whatever template was open last.
                    </p>
                    <p>
                      The wrong type confuses AP teams: a pro forma treated as a tax invoice, or a progress bill that does not show contract balance, triggers rejections and disputes. Standardizing types in your invoicing tool keeps numbering, terms, and fields consistent.
                    </p>
                    <p>
                      For required fields across all invoice types, see{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>.{" "}
                      For billing vs invoicing language in recurring models, see{" "}
                      <Link href="/invoicing/guides/billing-vs-invoicing-whats-the-difference" className={linkGreen}>billing vs invoicing</Link>.
                    </p>
                    <p>
                      Compare tools that support multiple templates in our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      guide and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>.
                    </p>
                  </div>
                </section>
                <section id="standard-invoice" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The default document for most completed work.">Standard Invoice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A standard invoice is used for one-time transactions after delivery: a completed project phase, a product shipment, or a fixed-fee service. It includes line items, payment terms, due date, and total due.
                    </p>
                    <p>
                      This is the type most small businesses send daily. It should tie line descriptions to the approved quote or statement of work so approvers recognize scope. If you are new to invoicing basics, start with{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>.
                    </p>
                    <p>
                      Send standard invoices promptly after delivery—delay is a common self-inflicted DSO problem. Pair with online payment links when possible; see{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.
                    </p>
                  </div>
                </section>
                <section id="recurring-invoice" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="For subscriptions, retainers, and routine service cycles.">Recurring Invoice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring invoices are generated on a schedule for repeating charges: monthly retainers, SaaS-style subscriptions, or routine maintenance contracts. They reduce manual work and help customers expect consistent billing dates.
                    </p>
                    <p>
                      Recurring invoicing sits inside broader billing operations—proration, upgrades, pauses, and credits may change the amount before the invoice is issued. See{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-recurring-billing" className={linkGreen}>how businesses handle recurring billing</Link>{" "}
                      for operational patterns.
                    </p>
                    <p>
                      Use clear line descriptions each cycle so customers do not assume duplicate charges. Automate reminders and payment collection; terms should match your master agreement—see{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.
                    </p>
                  </div>
                </section>
                <section id="progress-invoice" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="For long projects with milestone billing.">Progress Invoice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Progress invoices are issued in phases as work advances—common for contractors, agencies, and implementation projects. Each invoice should show what milestone was completed, the amount billed this period, and remaining contract balance.
                    </p>
                    <p>
                      Customers approve progress bills faster when line items map to contract milestones and prior invoices are referenced. Missing that context is a frequent dispute trigger on long jobs.
                    </p>
                    <p>
                      Align progress billing with deposit and milestone terms in your contract. For deposit patterns, see{" "}
                      <Link href="/invoicing/guides/how-deposit-and-milestone-invoicing-works" className={linkGreen}>how deposit and milestone invoicing works</Link>.
                    </p>
                  </div>
                </section>
                <section id="proforma-invoice" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A pre-work pricing document, not final billing.">Pro Forma Invoice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A pro forma invoice outlines expected charges before final delivery. It is often used for customer budget approval, procurement intake, or international shipping estimates—not always as a formal tax or payment-demand document.
                    </p>
                    <p>
                      Label it clearly as pro forma so AP does not treat it as payable. When work is complete, issue a standard invoice that references the approved pro forma or quote number.
                    </p>
                    <p>
                      Do not assume pro forma replaces a final invoice at close—finance still needs the definitive document for A/R and tax reporting. Keep fields consistent with your standard template to reduce re-keying errors.
                    </p>
                  </div>
                </section>
                <section id="credit-debit-notes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Adjustment documents for corrections.">Credit and Debit Invoices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Credit notes (credit invoices) reduce amounts previously billed—returns, service credits, or overbilling corrections. Debit notes increase or correct underbilled amounts. Both should reference the original invoice number and explain the adjustment reason.
                    </p>
                    <p>
                      Use adjustment documents instead of editing sent invoices in place. Changing history breaks audit trails and confuses customers who already booked the original amount.
                    </p>
                    <p>
                      Route large credits through the same approval discipline as outbound invoices. For governance context, see{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions on choosing invoice types.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Software for Different Invoice Types" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/different-types-of-invoices-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Different Types of Invoices Explained | BeltStack Guide",
    description:
      "Different invoice types explained: standard, recurring, progress, pro forma, and credit or debit notes—when to use each and what to include on every send.",
  };
}
