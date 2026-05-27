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
    q: "What is 3-way invoice matching?",
    a: "3-way invoice matching verifies a vendor invoice against a purchase order and a receiving document (goods receipt or delivery confirmation) before payment is approved. All three records must align on quantity, price, and terms—or the invoice is held as an exception.",
  },
  {
    q: "What are the three documents in 3-way matching?",
    a: "They are the purchase order (what you approved to buy), the receiving report or packing slip (what was delivered), and the vendor invoice (what the supplier billed). AP compares line items and totals across all three before releasing payment.",
  },
  {
    q: "When is 3-way matching required?",
    a: "It is standard in inventory-heavy businesses, manufacturing, wholesale distribution, and any operation where physical goods must be received before payment. Service-only vendors may use simpler two-way matching instead.",
  },
  {
    q: "What happens when documents do not match?",
    a: "The invoice is flagged as an exception and payment is held until AP, purchasing, or warehouse staff resolve the discrepancy—often by correcting the invoice, adjusting the PO, or documenting a partial receipt.",
  },
  {
    q: "Is 3-way matching only for large companies?",
    a: "No. Small and mid-sized businesses with regular vendor purchasing benefit as volume grows. Cloud accounting and AP tools make three-way matching accessible without a dedicated enterprise system.",
  },
  {
    q: "What is the difference between 2-way and 3-way matching?",
    a: "Two-way matching compares invoice to purchase order only. Three-way matching adds receiving confirmation so you do not pay for undelivered or short-shipped goods. The extra step matters whenever inventory or fulfillment is involved.",
  },
  {
    q: "Can partial deliveries pass 3-way matching?",
    a: "Yes, when receiving records reflect partial quantities and the invoice bills only what was received. Mismatches occur when the invoice bills the full PO quantity but receiving shows a partial delivery—or vice versa.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "PO and bill workflows", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Approval workflows", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice exception tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
];

export default function WhatIs3WayInvoiceMatchingPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Is 3-Way Invoice Matching?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">What Is 3-Way Invoice Matching?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what 3-way invoice matching is, how purchase orders, receiving reports, and vendor invoices are compared, and when businesses require three-way controls before releasing payment.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Three-way invoice matching is an accounts payable control that confirms you only pay for what you ordered and actually received. AP compares the vendor invoice to the purchase order and to a receiving document—packing slip, goods receipt, or delivery confirmation—before approving payment.
                    </p>
                    <p>
                      The control exists because purchase orders and invoices alone cannot prove delivery. A supplier can bill against an approved PO for goods that never arrived or arrived short. Adding receiving data closes that gap and is why inventory-heavy businesses treat three-way matching as standard practice rather than optional overhead.
                    </p>
                    <p>
                      Three-way matching does not require enterprise software. Many small and mid-sized teams run the same logic in cloud accounting tools: PO created at order time, receipt logged when goods hit the dock or warehouse, invoice matched at payment time. Consistency in timing matters more than system size.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href="/invoicing/guides/invoice-matching-explained" className={linkGreen}>invoice matching explained</Link>{" "}
                      for the broader matching framework and two-way versus three-way context.
                    </p>
                  </div>
                </section>
                <section id="three-documents" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The three records AP compares.">The Three Documents</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Each document answers a different question. Together they form the evidence chain AP needs to approve payment with confidence.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Purchase order:</strong> what you approved to buy—item, quantity, unit price, and terms.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Receiving report:</strong> what was delivered—often tied to PO line and receipt date.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Vendor invoice:</strong> what the supplier billed—should align to received quantity and PO pricing.</span></li>
                    </ul>
                    <p>
                      AP typically matches at line level: SKU or description, quantity received versus quantity billed, unit price, extended amount, tax, and freight. Header-level total matching alone misses partial shipments and line-level price errors.
                    </p>
                    <p>
                      Vendors should reference the PO number on every invoice. When they do not, matching queues slow down and exception rates rise. Procurement and AP policy should require PO citation as a condition of payment.
                    </p>
                  </div>
                </section>
                <section id="exception-handling" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How teams resolve mismatches.">Exception Handling Process</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Exceptions occur when quantity, unit price, tax, freight, or totals differ across the PO, receipt, and invoice. The invoice is held from payment until the discrepancy is explained and documented—either corrected on the vendor bill, adjusted in receiving, or approved as a valid variance.
                    </p>
                    <p>
                      Common resolutions include: vendor reissues invoice for received quantity only; warehouse updates receipt for a late delivery; purchasing approves a price change via change order; or AP writes off an immaterial variance within policy tolerance. Each resolution should leave an audit trail in the system.
                    </p>
                    <p>
                      AP routes exceptions to the right owner—purchasing for price and PO issues, warehouse for quantity and receipt timing, vendor management for recurring billing errors. Clear SLAs (for example, resolve within two business days) keep vendor relationships healthy and prevent exception backlogs.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>{" "}
                      for approval routing and segregation of duties.
                    </p>
                  </div>
                </section>
                <section id="who-needs-it" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Business types that benefit most.">Who Should Use 3-Way Matching</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses receiving physical goods, materials, or stocked inventory benefit most—retail, wholesale, manufacturing, construction supply, and any operation with a receiving dock or warehouse. If payment should not release until delivery is confirmed, three-way matching is the right control.
                    </p>
                    <p>
                      Service-only businesses often rely on two-way matching: invoice versus contract or PO, without a goods receipt. Agencies, consultancies, and SaaS vendors billing time or subscriptions rarely need receiving documents because nothing physical ships.
                    </p>
                    <p>
                      Hybrid businesses—those buying materials and subcontracted labor—may use three-way matching for materials and two-way for services on the same project. Document which vendors and categories require which model so AP applies controls consistently.
                    </p>
                  </div>
                </section>
                <section id="implementation-tips" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical steps to make matching reliable.">Implementation Tips</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Issue POs before orders ship, train receiving staff to log receipts promptly, and require PO numbers on vendor invoices. Late receiving is the top reason three-way matching feels broken when the process itself is sound.
                    </p>
                    <p>
                      Start with your highest-risk vendors—largest spend, most frequent exceptions, or weakest fulfillment track record—then expand coverage. Automate tolerance rules for immaterial freight or tax rounding so clerks focus on material mismatches.
                    </p>
                    <p>
                      Review exception reports monthly with purchasing and operations. Recurring patterns often point to vendor contract issues, weak receiving discipline, or PO practices that need policy updates—not individual clerk errors.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="3-way matching questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for AP Matching" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/what-is-3-way-invoice-matching" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is 3-Way Invoice Matching? PO, Receipt & Invoice | BeltStack",
    description:
      "3-way invoice matching compares purchase orders, receiving reports, and vendor invoices before payment. Learn the three documents, exception handling, and who needs this AP control.",
  };
}
