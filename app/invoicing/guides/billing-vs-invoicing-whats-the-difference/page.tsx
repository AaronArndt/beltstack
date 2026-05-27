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
    q: "What is the main difference between billing and invoicing?",
    a: "Invoicing usually means sending a formal document requesting payment after goods or services are delivered. Billing is broader and can include recurring charges, statements, credits, and account-level balance management. In most small businesses, invoicing is one step inside a larger billing process.",
  },
  {
    q: "Are billing and invoicing interchangeable?",
    a: "People use them interchangeably in conversation, but operationally they are not always the same. Invoicing is a specific payment-request document workflow; billing may include invoicing plus subscription cycles, usage charges, and account statements. Mixing the terms internally can create ownership gaps when something goes unpaid.",
  },
  {
    q: "Do small businesses need separate billing and invoicing software?",
    a: "Not always. Many invoicing tools handle both simple billing and invoicing for service businesses and straightforward retainers. Businesses with complex subscription logic, multi-entity accounts, or heavy usage-based pricing often need stronger billing workflows and reporting.",
  },
  {
    q: "Where do receipts fit in?",
    a: "Invoices request payment; receipts confirm payment was received. Both should stay linked to the same invoice number for cleaner accounting and faster dispute resolution. If your team confuses invoices and receipts, customer communication and month-end reconciliation both suffer.",
  },
  {
    q: "How does this affect cash flow?",
    a: "When teams define billing and invoicing clearly, they reduce missed charges, send invoices faster, and follow up consistently. That discipline shortens days sales outstanding and makes cash forecasts more reliable. Unclear ownership is a common hidden cause of late collections.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service invoicing and reminders", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoicing plus accounting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Custom invoice workflows", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function BillingVsInvoicingGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Billing vs Invoicing</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Billing vs Invoicing: What&apos;s the Difference?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Understand how billing and invoicing differ in real operations, and why the distinction matters for payment speed, reporting, and customer communication.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Teams often use billing and invoicing as if they mean the same thing. In practice, invoicing is one part of billing operations. Invoicing is the creation and delivery of a formal payment request—usually a document with line items, terms, and a due date. Billing includes the broader system of charging customers, tracking account balances, applying credits, and managing recurring charge cycles.
                    </p>
                    <p>
                      The distinction matters when you assign ownership. If “billing” and “invoicing” are undefined, work can fall through the cracks: recurring charges never get invoiced, one-off jobs get billed twice, or collections follow the wrong contact. Clear roles help finance, operations, and client-facing teams stay aligned on what gets sent and when.
                    </p>
                    <p>
                      For foundational document concepts, start with{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>{" "}
                      and how it differs from estimates and receipts. If your process spans creation through collection, see{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>{" "}
                      for the full lifecycle view.
                    </p>
                    <p>
                      If you are evaluating tools, use our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>{" "}
                      to compare workflow depth, recurring billing support, and accounting sync.
                    </p>
                  </div>
                </section>
                <section id="definitions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Clear definitions reduce process confusion.">Definitions: Billing vs Invoicing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Invoicing</strong> is document-level: issuing an invoice with line items, terms, and due date. It answers “how much does this customer owe for this delivery or period?” A well-built invoice also includes the fields payers need for approval—see{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>.
                    </p>
                    <p><strong className="text-[#1A2D48]">Billing</strong> is system-level: managing all charges and payment obligations for an account, often including recurring invoices, credits, adjustments, and statements. Billing decides what to charge, when to charge it, and how balances roll forward—even when no single invoice has been sent yet.</p>
                    <p>
                      A practical example: a marketing agency on a monthly retainer has a billing cycle (recurring fee, usage overages, credits for paused work) and invoicing steps (generate the monthly invoice, attach line detail, send with payment link). The retainer amount might be set in billing rules; the invoice is how the customer sees and pays it.
                    </p>
                    <p>
                      Another example: a contractor finishing a milestone sends a progress invoice. Billing tracks the contract total, amounts previously invoiced, and remaining balance; invoicing is the specific document for that milestone. Using the wrong invoice type for the scenario creates confusion—see{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>.
                    </p>
                  </div>
                </section>
                <section id="when-each-applies" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Use-case differences by business model.">When Each Term Applies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The right emphasis depends on how you sell and deliver. A business that only invoices after discrete jobs may rarely think about “billing” as a separate function—but it still has billing decisions (rates, deposits, write-offs) even if they live in spreadsheets.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Project-based services</strong> usually emphasize invoicing after milestones or completion. Billing here is often contract-based: approved scope, change orders, and retainage. Progress and standard invoices are common—see milestone patterns in your contract before you send.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Subscription and retainer models</strong> lean more on billing workflows with recurring schedules, proration, upgrades, and account balances. Invoicing becomes the customer-facing output of those rules each cycle.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Mixed models</strong> need both: recurring billing plus ad-hoc invoices for extra work. Without a single source of truth, customers may receive overlapping charges or miss add-on fees entirely.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Product plus services</strong> may bill for shipped goods on one schedule and professional services on another. Terms and payment methods should be consistent on every document—see{" "}
                        <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.
                      </span></li>
                    </ul>
                    <p>
                      When customers pay online, invoicing and billing converge at settlement: the invoice carries the payment link, and billing records whether the account is current.{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>How online invoice payments work</Link>{" "}
                      covers that handoff in detail.
                    </p>
                  </div>
                </section>
                <section id="operational-impact" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why this distinction improves execution.">Operational Impact for Small Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses that define ownership clearly—who creates invoices, who runs billing cycles, who follows collections—usually reduce payment delays and disputes. Ambiguity shows up as duplicate sends, missed recurring charges, or AP teams rejecting invoices for missing references.
                    </p>
                    <p>
                      This clarity also improves reconciliation in{" "}
                      <Link href="/accounting" className={linkGreen}>accounting software</Link>. When billing adjustments (credits, write-offs) are tracked separately from invoice sends, month-end close is faster and audit questions are easier to answer.
                    </p>
                    <p>
                      For terms that affect due dates and follow-up cadence, see{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.{" "}
                      Pair terms with reminder discipline; many overdue balances are process problems, not customer unwillingness to pay.
                    </p>
                    <p>
                      Process defects often look like “slow payers” but trace back to billing gaps—charges never invoiced, wrong amounts on recurring plans, or invoices sent to the wrong approver. Fixing vocabulary and ownership is a low-cost way to improve cash flow before you change pricing or terms.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical habits that keep billing and invoicing aligned.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Document a simple RACI: who owns billing rules, who drafts invoices, who approves exceptions, and who owns collections. Even a one-page internal SOP prevents the “I thought you sent it” failure mode as teams grow.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Use one numbering and customer record system so invoices and account balances always tie back to the same client profile.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile billing cycles monthly: recurring charges generated, invoices sent, payments received, credits applied.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Review{" "}
                        <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>{" "}
                        quarterly—most are repeatable and fixable with templates.
                      </span></li>
                    </ul>
                    <p>
                      When volume justifies it, add{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>invoice approval workflows</Link>{" "}
                      for high-risk sends only, so routine invoices still go out same-day.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers for ops and finance teams.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Tools for Billing and Invoicing Workflows" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/billing-vs-invoicing-whats-the-difference" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Billing vs Invoicing: What's the Difference? | BeltStack Guide",
    description:
      "Billing vs invoicing explained for small businesses: definitions, when each applies, operational impact, and how both affect cash flow and collections.",
  };
}
