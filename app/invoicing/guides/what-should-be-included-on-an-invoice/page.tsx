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
    q: "What are the minimum fields every invoice should have?",
    a: "At minimum: invoice number, invoice date, seller and customer details, line items, subtotal, taxes or fees, total due, due date, and payment instructions. Missing any of these increases the chance your invoice sits in a payer&apos;s queue while someone requests corrections.",
  },
  {
    q: "Do I need payment terms on every invoice?",
    a: "Yes. Clear terms reduce disputes and speed collections because they set expectations before payment is due. Terms should define due date, accepted payment methods, currency, and any late fee or early-pay discount policy.",
  },
  {
    q: "Should invoices include itemized line details?",
    a: "Usually yes. Itemization improves transparency and lowers approval friction, especially for B2B and project-based work. Vague single-line totals are a frequent trigger for disputes when the amount does not match an approved quote or PO.",
  },
  {
    q: "What invoice details help avoid delayed payment?",
    a: "PO numbers, contact names, tax details where required, and explicit payment instructions are frequent blockers when missing. Enterprise payers often cannot release funds until procurement and AP fields match their internal records.",
  },
  {
    q: "Can invoicing software enforce required invoice fields?",
    a: "Yes. Most modern tools let teams create templates with required fields, which improves consistency and reduces errors as more people create invoices. Pair templates with a pre-send checklist or approval step if your error rate is still high.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Custom invoice templates", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Template controls and automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoice plus accounting sync", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function WhatShouldBeIncludedOnAnInvoicePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Should Be Included on an Invoice?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">What Should Be Included on an Invoice?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn which invoice fields are essential for fast approvals, accurate records, and fewer payment disputes.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoices get delayed for predictable reasons: missing PO references, unclear line items, inconsistent terms, and weak payment instructions. A complete invoice template reduces back-and-forth and protects cash flow—especially when your customer&apos;s accounts payable team cannot release payment until every field matches their system.
                    </p>
                    <p>
                      Think of required fields as a checklist, not decoration. Each field answers a question AP will ask: who is billing, who is paying, what was delivered, what is owed, when it is due, and how to pay. Gaps force email threads that add days or weeks to collection.
                    </p>
                    <p>
                      For broader invoice concepts, see{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.{" "}
                      If you issue multiple document types, align fields across{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>standard, progress, and recurring invoices</Link>.
                    </p>
                    <p>
                      Tools with locked templates help enforce standards as more people create invoices. Compare options in our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      guide and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>side-by-side comparisons</Link>.
                    </p>
                  </div>
                </section>
                <section id="required-fields" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core details every invoice should include.">Required Invoice Fields</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Requirements vary by country and industry, but the list below covers what most small businesses need for fast approval and clean books. When in doubt, mirror what your largest customer&apos;s AP portal asks for—that reduces rejections.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Invoice number and issue date:</strong> unique, sequential IDs for tracking, reminders, and reconciliation; never reuse numbers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Seller and customer details:</strong> legal business name, address, tax ID where applicable, and bill-to contact so mail and portals route correctly.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Line items:</strong> description, quantity, unit rate, and extended amount—tied to quote or contract language when possible.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Totals:</strong> subtotal, taxes, fees, discounts, and total due in the invoice currency.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Due date and terms:</strong> Net 30, Due on Receipt, or milestone language—consistent with the signed agreement.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment instructions:</strong> accepted methods, bank details if relevant, and a secure online payment link when available.</span></li>
                    </ul>
                    <p>
                      Missing payment instructions is one of the most fixable causes of late pay. If you accept cards or ACH on invoices, explain how they work in{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.
                    </p>
                  </div>
                </section>
                <section id="optional-high-value" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fields that often speed B2B payment cycles.">High-Value Optional Fields</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Optional does not mean unnecessary for every business. If you sell to mid-market or enterprise buyers, these fields are often required for their internal controls—even when not legally mandatory on the invoice itself.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">PO and job codes:</strong> tie the invoice to procurement records; without them, payment may sit in “pending approval” indefinitely.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payer and approver contacts:</strong> name and email for the person who can unblock questions—reduces ghosting in AP queues.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Supporting attachments:</strong> timesheets, delivery proofs, or signed completion docs for milestone and T&amp;M work.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Discounts and late fees:</strong> only when disclosed in contract and applied consistently—see terms guidance in{" "}
                        <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.
                      </span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reference to prior documents:</strong> quote or contract number so totals match what procurement approved.</span></li>
                    </ul>
                    <p>
                      Capture these fields in your CRM or project tool at kickoff so they are available at invoice time—chasing a PO number after delivery is a common source of delay.
                    </p>
                  </div>
                </section>
                <section id="template-controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to keep quality consistent as volume grows.">Template and Process Controls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoicing software with locked templates and required fields helps prevent invoice defects before they reach the customer. Define one default template per invoice type (standard, progress, recurring) so preparers are not rebuilding layout each time.
                    </p>
                    <p>
                      Pair templates with a pre-send checklist: PO present, terms match contract, tax correct, payment link live. For multi-person teams, add approval only where risk warrants it—see{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>.
                    </p>
                    <p>
                      Review rejected or disputed invoices monthly and update templates when the same correction repeats. That feedback loop is how operations teams improve faster than relying on individual memory.
                    </p>
                    <p>
                      If defects persist, audit against{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>{" "}
                      and your A/R aging report—patterns usually point to one missing field or handoff.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Habits that keep invoices payable on first submission.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Treat the invoice as part of the customer deliverable, not an afterthought. The best teams capture billing metadata at project kickoff and validate it again at completion—before anyone hits send.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Mirror quote line descriptions on the invoice so approvers recognize scope instantly.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Send to the AP email or portal the customer specified—not only the project contact.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Include online payment options when margin allows; convenience often beats a few days of terms.</span></li>
                    </ul>
                    <p>
                      For lifecycle context beyond the document itself, see{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical questions teams ask most.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Better Invoice Quality" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/what-should-be-included-on-an-invoice" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Should Be Included on an Invoice? | BeltStack Guide",
    description:
      "What to include on an invoice: required fields, B2B extras, payment terms, and templates that reduce disputes, speed AP approval, and help you get paid faster.",
  };
}
