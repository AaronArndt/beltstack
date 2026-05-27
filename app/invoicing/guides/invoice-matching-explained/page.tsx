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
    q: "What is invoice matching?",
    a: "Invoice matching is the process of comparing a vendor invoice to supporting records—purchase orders, contracts, receiving documents, or rate sheets—before payment is approved. The goal is to confirm that what you are being asked to pay matches what you ordered, received, and agreed to.",
  },
  {
    q: "Why is invoice matching important?",
    a: "Matching reduces overpayments, duplicate payments, and fraud by catching quantity, price, and terms discrepancies before cash leaves the business. It also improves audit readiness, vendor accountability, and month-end close accuracy.",
  },
  {
    q: "Who uses invoice matching?",
    a: "Accounts payable and finance teams use matching most often, especially where vendor purchasing, inventory receiving, or contract-based billing is common. Operations and purchasing often help resolve exceptions when documents do not align.",
  },
  {
    q: "Can small businesses use invoice matching?",
    a: "Yes. Even a lightweight two-way check—invoice versus purchase order or signed contract—adds meaningful control as vendor volume grows. Many invoicing and accounting tools support basic matching without enterprise AP software.",
  },
  {
    q: "What is the difference between 2-way and 3-way matching?",
    a: "Two-way matching compares the invoice to a purchase order (or contract). Three-way matching adds a receiving report or delivery confirmation so you only pay for goods or services actually received. Inventory-heavy businesses often require three-way matching.",
  },
  {
    q: "What happens when an invoice fails matching?",
    a: "The invoice is flagged as an exception and held from payment until AP, purchasing, or operations resolves the discrepancy. Common fixes include corrected invoices, partial receipts, or approved price variances documented in the system.",
  },
  {
    q: "Does invoice matching slow down vendor payments?",
    a: "Well-designed matching usually speeds overall AP performance by reducing rework, disputes, and recovery of incorrect payments. Bottlenecks appear when exception ownership is unclear or receiving data is recorded late.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "AP controls and reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Workflow automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
];

export default function InvoiceMatchingExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Invoice Matching Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Invoice Matching Explained</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what invoice matching is, how 2-way and 3-way matching work, and why AP teams use matching to prevent overpayments, duplicates, and fraud before cash goes out the door.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoice matching is a control process used before payment approval. Instead of paying every vendor invoice on arrival, finance teams verify that billed amounts align with what was ordered, received, and contractually agreed. Matching turns accounts payable from a reactive check-writing function into a governed workflow with clear evidence behind each disbursement.
                    </p>
                    <p>
                      At its core, matching asks a simple question: should we pay this amount, for these items, right now? The answer comes from comparing the vendor invoice to one or more source documents—a purchase order, contract, rate sheet, or goods receipt—line by line when volume warrants it. When records align, payment moves forward; when they do not, the invoice becomes an exception that requires human review.
                    </p>
                    <p>
                      Matching matters most as vendor count and invoice volume grow. Early-stage businesses may spot-check bills manually; mature operations need repeatable rules so AP clerks do not rely on memory to catch duplicate PO numbers, price creep, or quantity overbilling. Software can automate tolerance checks (for example, small freight variances) while routing larger mismatches to purchasing or operations.
                    </p>
                    <p>
                      For advanced controls, see{" "}
                      <Link href="/invoicing/guides/what-is-3-way-invoice-matching" className={linkGreen}>what is 3-way invoice matching</Link>{" "}
                      and payment reconciliation in{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>.
                    </p>
                  </div>
                </section>
                <section id="how-matching-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The basic verification flow.">How Invoice Matching Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most matching workflows follow the same sequence, whether handled in spreadsheets or AP automation. The invoice enters the queue, is linked to supporting records, and is either auto-approved within tolerance or held for exception resolution.
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Invoice arrives from vendor (email, portal, or EDI).</li>
                      <li>AP captures or imports invoice data and links it to PO, contract, or receipt.</li>
                      <li>System or clerk compares quantities, unit prices, tax, and totals.</li>
                      <li>Exceptions are flagged for purchasing, operations, or vendor correction.</li>
                      <li>Approved invoices move to payment scheduling and ledger posting.</li>
                    </ol>
                    <p>
                      Strong matching depends on upstream discipline: POs issued before orders ship, receiving recorded when goods arrive, and vendors referencing PO numbers on invoices. When receiving lags, three-way matching creates false exceptions and slows legitimate payments.
                    </p>
                    <p>
                      Many teams set matching tolerances—allowing minor rounding or freight differences while blocking material variances. Document those rules so auditors and new AP staff apply them consistently month to month.
                    </p>
                  </div>
                </section>
                <section id="matching-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common matching models by control level.">2-Way vs 3-Way Matching</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Two-way matching</strong> compares the vendor invoice to a purchase order or approved contract. It confirms you agreed to the price and quantity being billed. Service businesses, agencies, and vendors without formal receiving often use two-way matching because there is no physical receipt to verify.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Three-way matching</strong> adds a receiving report, packing slip, or delivery confirmation. AP checks that what was billed matches what was ordered and what actually arrived. Businesses with inventory, materials, or warehouse operations typically require three-way matching to avoid paying for short shipments or items still in transit.
                    </p>
                    <p>
                      Some organizations use four-way matching when inspection or quality acceptance is required before payment—common in construction, manufacturing, and regulated procurement. The fourth document is an inspection sign-off in addition to PO, receipt, and invoice.
                    </p>
                    <p>
                      Approval governance is covered in{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>.
                    </p>
                  </div>
                </section>
                <section id="benefits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational and financial outcomes.">Why Matching Improves Controls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Matching is one of the highest-return AP controls because it prevents errors at the point of payment rather than after cash has left. Recovery from duplicate or incorrect vendor payments is slow, relationship-sensitive, and sometimes impossible.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reduces duplicate and incorrect payments before disbursement.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Improves audit readiness with a documented approval trail.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Supports cleaner month-end close and more accurate cash forecasting.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Strengthens vendor accountability on pricing and fulfillment.</span></li>
                    </ul>
                    <p>
                      Finance leaders also use matching data to spot recurring vendor issues—systematic overbilling, late deliveries billed at full PO quantity, or POs created after the fact to justify invoices. Those patterns inform vendor negotiations and procurement policy updates.
                    </p>
                  </div>
                </section>
                <section id="common-exceptions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What AP teams resolve before paying.">Common Matching Exceptions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Quantity mismatches are the most frequent exception: the invoice bills 100 units but receiving shows 80. Price variances occur when unit cost on the invoice exceeds the PO without an approved change order. Tax, freight, and currency differences can also fail automated tolerance rules.
                    </p>
                    <p>
                      Duplicate invoices—same vendor, PO, and amount submitted twice—should be caught at matching or duplicate-detection stage. Missing PO references force manual research and slow the queue; requiring vendors to cite PO numbers on every bill reduces that friction.
                    </p>
                    <p>
                      Clear exception ownership prevents invoices from aging in limbo. Define whether purchasing, warehouse, or AP resolves each exception type and set target resolution times so vendor relationships stay healthy.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Invoice matching fundamentals.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools with AP Controls" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoice-matching-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoice Matching Explained: 2-Way vs 3-Way AP Controls | BeltStack",
    description:
      "Invoice matching compares vendor bills to POs, contracts, and receipts before payment. Learn 2-way vs 3-way matching, exception handling, and how matching reduces overpayments and fraud.",
  };
}
