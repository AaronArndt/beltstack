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
    q: "What is invoice management?",
    a: "Invoice management is the end-to-end process of creating, approving, sending, tracking, collecting, and reconciling invoices. It connects operations, finance, and customer communication so revenue is predictable and auditable.",
  },
  {
    q: "Is invoice management only for large companies?",
    a: "No. Small businesses benefit too, especially once invoice volume grows beyond what one person can track in spreadsheets or memory. The tipping point is usually multiple preparers, recurring billing, or frequent disputes.",
  },
  {
    q: "What are the key stages of invoice management?",
    a: "Drafting, validation, approvals, delivery, payment tracking, follow-up, and reconciliation are the core stages. Weakness at any stage shows up as overdue A/R even if other stages are strong.",
  },
  {
    q: "How does invoice management affect cash flow?",
    a: "Strong invoice management reduces invoice defects and overdue balances, which improves collection speed and forecast reliability. It also shortens the gap between delivery and send—a often-overlooked DSO lever.",
  },
  {
    q: "What software features support invoice management?",
    a: "Template controls, workflow routing, reminders, payment links, dispute tracking, and accounting sync are high-impact features. Compare platforms in our best invoicing software guide before you stitch together point tools.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoice lifecycle + books in one system", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service-business invoice process", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Workflow-driven invoice operations", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function WhatIsInvoiceManagementPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Is Invoice Management?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">What Is Invoice Management?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what invoice management includes, why it matters for finance operations, and how small businesses can build a scalable invoicing process.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoice management is not just issuing invoices. It is the full control system around billing quality, payment collection speed, and financial visibility from draft through close. It spans people, process, and software—not only the PDF you email.
                    </p>
                    <p>
                      Teams with strong invoice management usually have lower write-offs, fewer disputes, and better confidence in revenue reporting. They can answer basic questions quickly: what is outstanding, what is disputed, and what will land this month.
                    </p>
                    <p>
                      Start with document standards in{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>.{" "}
                      Then layer approvals, payments, and collections as volume grows.
                    </p>
                    <p>
                      Evaluate systems in our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      guide and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>{" "}
                      when spreadsheets stop scaling.
                    </p>
                  </div>
                </section>
                <section id="lifecycle" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The full invoice journey in operations.">Invoice Management Lifecycle</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Each stage has a measurable output. Treat invoice management like a pipeline: defects prevented early are cheaper than collections labor later.
                    </p>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li><strong className="text-[#1A2D48]">Create</strong> from work, order, or contract data—pull line items from approved scope when possible.</li>
                      <li><strong className="text-[#1A2D48]">Validate</strong> required fields, tax, and pricing logic against quote or rate card.</li>
                      <li><strong className="text-[#1A2D48]">Approve</strong> through workflows where risk warrants—see{" "}
                        <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>.
                      </li>
                      <li><strong className="text-[#1A2D48]">Send</strong> with clear terms and payment options per{" "}
                        <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>{" "}
                        and online pay guidance.
                      </li>
                      <li><strong className="text-[#1A2D48]">Track and remind</strong> on status; escalate overdue balances with a defined cadence.</li>
                      <li><strong className="text-[#1A2D48]">Collect and reconcile</strong> in accounting—match payments, fees, and credits to invoice numbers.</li>
                    </ol>
                    <p>
                      Recurring and progress models add branches to this lifecycle—see{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/billing-vs-invoicing-whats-the-difference" className={linkGreen}>billing vs invoicing</Link>.
                    </p>
                  </div>
                </section>
                <section id="key-controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Controls that improve quality and speed.">Key Invoice Management Controls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Controls should scale with risk—not with headcount alone. A five-person agency and a fifty-person firm may use the same principles but different thresholds for auto-approve and escalation.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Template standards:</strong> mandatory fields and terms locked per invoice type.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Risk-based approvals:</strong> human review for exceptions, auto-path for routine sends.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Collections visibility:</strong> aging buckets, owner per account, and reminder automation.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Audit trail:</strong> revisions, approvers, and dispute notes tied to invoice numbers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment channels:</strong> online pay plus clear offline instructions—see{" "}
                        <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.
                      </span></li>
                    </ul>
                    <p>
                      Audit against{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>{" "}
                      when controls exist on paper but overdue A/R is still rising.
                    </p>
                  </div>
                </section>
                <section id="small-business-implementation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to implement without overbuilding process.">Small Business Implementation Path</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Phase 1: one template, required fields, same-day send SLA, and a single A/R aging view. That alone fixes a large share of cash delays for teams under ~50 invoices per month.
                    </p>
                    <p>
                      Phase 2: automated reminders and online payment links. Phase 3: risk-based approvals and dispute reason tracking when multiple people create invoices or deal size grows.
                    </p>
                    <p>
                      Related guides:{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>invoice approval workflows</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>online invoice payments</Link>.
                    </p>
                    <p>
                      Avoid buying enterprise billing complexity before you need it—see{" "}
                      <Link href="/invoicing/guides/when-businesses-outgrow-simple-invoicing-tools" className={linkGreen}>when businesses outgrow simple invoicing tools</Link>{" "}
                      for upgrade signals.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operating rhythms that keep the system healthy.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run weekly A/R review: top overdue accounts, disputed invoices, and invoices stuck in draft or approval. Assign one owner per overdue account—not “the team.”
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Measure delivery-to-send time and dispute rate, not only total invoiced.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Keep quote, contract, and invoice language aligned so AP approvals are routine.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile processor deposits and bank cash weekly during payment rollout.</span></li>
                    </ul>
                    <p>
                      Invoice management succeeds when operations and finance share metrics—not when finance alone “owns collections” after a broken send.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Frequently asked questions from operations teams.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Software for Lifecycle Management" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/what-is-invoice-management" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is Invoice Management? | BeltStack Guide",
    description:
      "What is invoice management? Lifecycle stages, key controls, and a practical implementation path for small business invoicing, billing, and collections.",
  };
}
