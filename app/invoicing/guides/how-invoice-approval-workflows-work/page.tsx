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
    q: "What is an invoice approval workflow?",
    a: "An invoice approval workflow is a defined process that routes invoices through review and sign-off steps before they are sent to customers or recorded for payment. It creates accountability when more than one person touches billing data.",
  },
  {
    q: "When do small businesses need approval workflows?",
    a: "Usually when multiple people create invoices, when project billing is complex, or when invoice errors are causing disputes and delays. Solo operators with low volume may only need a checklist—not a multi-step route.",
  },
  {
    q: "What should be checked during invoice approval?",
    a: "Scope alignment, rates, taxes, terms, PO and project references, and supporting documents are common review checkpoints. Approvers should confirm the invoice matches the approved quote or contract, not only arithmetic.",
  },
  {
    q: "Can approval workflows slow invoicing?",
    a: "Poorly designed workflows can. Effective workflows use risk-based routing so low-risk invoices move quickly while high-risk invoices get deeper review. Set escalation timers so approvals do not stall cash collection.",
  },
  {
    q: "Can invoicing software automate approvals?",
    a: "Many tools can automate approval routing with rules and statuses, improving consistency and audit visibility. Compare workflow depth in our best invoicing software guide before you rely on manual email chains.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoice control plus accounting tie-in", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Workflow-oriented invoicing setup", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Small-team invoice process consistency", reviewHref: getInvoicingReviewUrl("freshbooks") },
];

export default function HowInvoiceApprovalWorkflowsWorkPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Invoice Approval Workflows Work</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Invoice Approval Workflows Work</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how invoice approval workflows reduce billing errors, improve compliance, and keep invoice throughput fast as teams scale.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Approval workflows protect revenue by preventing incorrect invoices from reaching customers. They also create accountability in multi-person billing operations where ownership is otherwise unclear—especially when project managers, account leads, and finance all touch the same invoice.
                    </p>
                    <p>
                      The goal is not maximum checkpoints; it is fewer defects and a clear audit trail. A workflow that treats every $200 invoice like a $200,000 implementation will slow cash without reducing real risk.
                    </p>
                    <p>
                      If your team still struggles with core invoice quality, start with{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>invoice field standards</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>.{" "}
                      Approvals catch exceptions; templates prevent routine errors.
                    </p>
                    <p>
                      Tools with routing rules are compared in our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>.
                    </p>
                  </div>
                </section>
                <section id="core-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical flow from draft to approved invoice.">Core Workflow Steps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most outbound approval flows mirror this sequence. Inbound vendor bill approval is related but separate—this guide focuses on customer invoices you send for payment.
                    </p>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li><strong className="text-[#1A2D48]">Draft created</strong> from project, time, or order data—ideally pre-filled line items from approved scope.</li>
                      <li><strong className="text-[#1A2D48]">Validation</strong> runs for required fields, tax, terms, and rate consistency against contract or price list.</li>
                      <li><strong className="text-[#1A2D48]">Routing</strong> sends the invoice to approver(s) by rules: amount threshold, customer tier, discount exceptions.</li>
                      <li><strong className="text-[#1A2D48]">Decision:</strong> approve, reject, or request revision with comments visible to preparers.</li>
                      <li><strong className="text-[#1A2D48]">Send and track</strong> through payment lifecycle—status, reminders, and online pay per{" "}
                        <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.
                      </li>
                    </ol>
                    <p>
                      Document who can override validation warnings. Overrides without notes are where disputes and audit findings originate.
                    </p>
                  </div>
                </section>
                <section id="routing-rules" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where governance meets speed.">Approval Routing Rules That Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Risk-based routing is the difference between governance and gridlock. Define “low risk” objectively—under a dollar threshold, standard rate card, existing customer, no discount—so those invoices auto-approve or need only one reviewer.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">High-risk routes:</strong> large totals, non-standard discounts, new customers, or first invoice on a new project type go to senior reviewers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Auto-approve routine work:</strong> recurring retainers under threshold after the first cycle is validated.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Escalation timers:</strong> if approver silent 24–48 hours, escalate or default approve per policy—document the rule.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Exception tags:</strong> credit notes and progress bills on troubled projects always get human review.</span></li>
                    </ul>
                    <p>
                      Match routing to invoice type—progress and credit documents behave differently than standard sends; see{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>.
                    </p>
                  </div>
                </section>
                <section id="audit-trail" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Critical for finance leadership and compliance checks.">Audit Trail and Accountability</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Good workflows preserve who changed what, when, and why. That history helps resolve customer disputes—“we approved $10k, not $12k”—and supports internal controls during close and audit periods.
                    </p>
                    <p>
                      Require revision comments when amounts, terms, or tax change after first draft. Email approvals outside the system break the trail; centralize decisions in invoicing software when possible.
                    </p>
                    <p>
                      For full lifecycle governance, see{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.{" "}
                      Terms changes after approval should sync with{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>{" "}
                      on the customer record.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Design choices that keep throughput high.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Publish a one-page approval policy: who approves what, SLA hours, and how escalations work. Train project leads that approval is not optional for exceptions—even when the customer is pushing to start work.
                    </p>
                    <p>
                      Measure time from draft to send, not only approval queue length. Bottlenecks often sit in missing PO data before finance ever sees the invoice.
                    </p>
                    <p>
                      Review rejected invoices monthly; recurring rejection reasons belong in templates or CRM required fields, not repeated coaching alone.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common workflow design questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools With Workflow Controls" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-invoice-approval-workflows-work" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Invoice Approval Workflows Work | BeltStack Guide",
    description:
      "How invoice approval workflows work: routing rules, review checkpoints, audit trails, and best practices that prevent billing errors as your team scales.",
  };
}
