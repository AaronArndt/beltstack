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
    q: "What makes an invoice look professional?",
    a: "Professional invoices are clear, consistent, and complete: branded layout, itemized charges, transparent totals, explicit terms, and easy payment instructions. They should answer what is owed, why, when it is due, and how to pay without a follow-up email. Consistency across every customer touchpoint reinforces credibility.",
  },
  {
    q: "Should every invoice include a logo and business details?",
    a: "Yes. Business identity details build trust and reduce payer confusion, especially for first-time customers or B2B approvals. Include legal name, address, tax ID where required, and a billing contact. Missing identity fields are a common reason AP teams reject or delay invoices.",
  },
  {
    q: "How detailed should invoice line items be?",
    a: "Detailed enough that approvers understand what they are paying for, without unnecessary clutter that obscures the total due. Scope references, quantities, service periods, and PO numbers usually help enterprise payers match invoices to purchase orders. For project billing, tie lines to milestones or phases when customers require it.",
  },
  {
    q: "Do professional invoices improve payment speed?",
    a: "They can. Clear structure and complete fields reduce back-and-forth, which often shortens approval and payment timelines. Payment links and explicit due dates matter as much as visual polish. Many “late” payments are actually approval or clarity delays.",
  },
  {
    q: "Can I use one template for all customers?",
    a: "Use a core template for consistency, then adjust terms, tax treatment, and references by customer type or project requirements. Standardization speeds issuance; targeted fields prevent rework for regulated or enterprise accounts. Store customer-specific defaults in your invoicing software when possible.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Branded invoice templates", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Custom fields and layouts", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Professional docs + accounting sync", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function HowToCreateProfessionalInvoicesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Create Professional Invoices</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Create Professional Invoices</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how to create professional invoices with clear branding, complete fields, and payment instructions that build trust, pass approvals faster, and reduce payment delays.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A professional invoice is not just visually polished. It is operationally clear: the payer can verify scope, amount, terms, and how to pay without emailing back for clarification. That clarity shortens approval cycles and reduces disputes after payment is due.
                    </p>
                    <p>
                      Small businesses often underestimate how much invoice quality affects cash flow. A missing PO number, ambiguous line description, or buried due date can add weeks in enterprise AP queues—even when the customer intends to pay on time.
                    </p>
                    <p>
                      Use the field checklist in{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>{" "}
                      as your baseline quality standard. If you are new to billing documents, start with{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>{" "}
                      for definitions and legal basics.
                    </p>
                    <p>
                      This guide covers layout, line items, and terms. Pair it with{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>{" "}
                      so design and collections reinforce each other.
                    </p>
                  </div>
                </section>
                <section id="layout-branding" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Visual trust signals that matter.">Layout and Branding Basics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Layout signals professionalism before anyone reads line items. Consistent branding across quotes, invoices, and receipts tells payers they are dealing with an established business—not a one-off document that might be fraudulent.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Use consistent logo, colors, and typography across all customer documents.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Keep spacing readable; avoid dense blocks of text that hide the total due.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Place total due prominently near payment instructions and due date.</span></li>
                    </ul>
                    <p>
                      Most invoicing software includes branded templates—compare options in{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-service-businesses" className={linkGreen}>best invoicing software for service businesses</Link>{" "}
                      if you are choosing a platform. Save one approved template as the default so every team member issues the same structure.
                    </p>
                  </div>
                </section>
                <section id="line-items" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Clarity that prevents approval delays.">Line Items and Scope References</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Each line should describe delivered work or products clearly enough that an approver who did not manage the project can still validate the charge. Vague lines like “services rendered” invite AP to request detail and stall payment.
                    </p>
                    <p>
                      For project billing, include references such as PO numbers, milestone names, service period dates, or contract IDs when customers require them. Match line descriptions to what was quoted or approved in writing so disputes are easier to resolve.
                    </p>
                    <p>
                      If you bill in phases, see{" "}
                      <Link href="/invoicing/guides/how-deposit-and-milestone-invoicing-works" className={linkGreen}>how deposit and milestone invoicing works</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>{" "}
                      for progress and final billing formats.
                    </p>
                  </div>
                </section>
                <section id="terms-payment" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Set expectations before payment is due.">Terms and Payment Instructions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      State due date and terms explicitly (for example Net 15 or Due on Receipt). Repeat terms in plain language near the total due, not only in fine print, so busy approvers see them immediately.
                    </p>
                    <p>
                      Include accepted payment methods and a direct payment link when available. List a billing contact email or phone for PO mismatches, tax questions, or partial-payment instructions—reducing “I would pay but I have a question” delays.
                    </p>
                    <p>
                      For term definitions, review{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.{" "}
                      Note late fees or interest only if your contract allows them and your jurisdiction permits enforcement.
                    </p>
                  </div>
                </section>
                <section id="quality-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Run before every send.">Pre-Send Quality Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A short checklist prevents expensive rework. Before sending, confirm customer legal name and bill-to address, invoice number and date, line math, tax treatment, PO reference, due date, and payment link. For recurring accounts, verify the invoice still matches the active contract rate.
                    </p>
                    <p>
                      Route high-value or non-standard invoices through{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>invoice approval workflows</Link>{" "}
                      when more than one person should validate scope. Catching errors pre-send is cheaper than credit memos and relationship repair post-send.
                    </p>
                    <p>
                      After send, track status and follow up on overdue balances—see{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>—so professional documents actually convert to cash.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Invoice quality and design questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Professional Documents" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-to-create-professional-invoices" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Create Professional Invoices | BeltStack Guide",
    description:
      "Create professional invoices with branded layout, clear line items, complete fields, payment terms, and a pre-send checklist—so approvals move faster and customers pay on time.",
  };
}
