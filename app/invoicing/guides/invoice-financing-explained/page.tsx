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
    q: "What is invoice financing?",
    a: "Invoice financing lets businesses access cash tied up in unpaid invoices—either by borrowing against receivables (invoice discounting) or selling them to a provider (factoring). You get liquidity sooner; the provider earns fees or a discount on what customers eventually pay.",
  },
  {
    q: "What is invoice factoring?",
    a: "Invoice factoring is when a business sells outstanding invoices to a factor at a discount in exchange for immediate cash. In many arrangements the factor collects from your customer; in others you retain collection with confidential discounting.",
  },
  {
    q: "When should a business use invoice financing?",
    a: "It is often used during growth phases, seasonal cash gaps, or when large customers pay on long terms and payroll or vendor obligations cannot wait. Fix collection bottlenecks first if late payment is preventable.",
  },
  {
    q: "Is invoice financing expensive?",
    a: "Costs vary by provider, customer credit quality, invoice age, and volume. Factor fees, advance rates, and reserve holdbacks can make effective annual cost significant—compare options and read contract terms before committing.",
  },
  {
    q: "Does invoice financing replace good collections?",
    a: "No. Strong invoicing, clear terms, reminders, and online payment options still matter. Financing bridges timing gaps; it does not fix chronic billing delays or weak customer credit policies.",
  },
  {
    q: "What is the difference between factoring and invoice discounting?",
    a: "Factoring typically involves selling receivables and may include customer notification and collection by the factor. Invoice discounting is often a loan secured against invoices while you retain collection responsibility.",
  },
  {
    q: "Will my customers know I use invoice financing?",
    a: "In traditional factoring, customers may receive payment instructions directed to the factor. Confidential or non-notification discounting arrangements exist but terms and eligibility differ by provider.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "A/R visibility for financing", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice and collections tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "A/R status reporting", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function InvoiceFinancingExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Invoice Financing Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Invoice Financing Explained</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what invoice financing and factoring are, how advances against receivables work, eligibility factors, and when financing makes sense versus fixing collections first.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoice financing helps businesses unlock cash from outstanding receivables instead of waiting for customer payment cycles to complete. Rather than waiting on Net 30 or Net 60 terms, you receive an advance—minus fees—from a lender or factor, then settle the arrangement when the customer pays.
                    </p>
                    <p>
                      Financing can stabilize payroll, vendor payments, and growth investments during seasonal dips or rapid scaling. It is not free money: fees, advance rates, reserve holdbacks, and contract terms vary widely. Businesses that use financing without fixing chronic billing delays often become dependent on advances.
                    </p>
                    <p>
                      Providers underwrite your customers’ credit quality as much as yours—large slow-paying but creditworthy customers may finance more easily than small risky accounts. Clean invoicing records, clear terms, and reliable A/R aging data improve approval odds and pricing.
                    </p>
                    <p>
                      Before financing, tighten core billing practices in{" "}
                      <Link href="/invoicing/guides/how-invoicing-affects-cash-flow" className={linkGreen}>how invoicing affects cash flow</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>.
                    </p>
                  </div>
                </section>
                <section id="financing-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common structures businesses evaluate.">Types of Invoice Financing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Structures differ in who collects from the customer, whether receivables are sold or borrowed against, and how much of the ledger is committed. Compare effective cost and customer experience—not just headline advance rate.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Invoice factoring:</strong> sell receivables to a factor for immediate cash; factor may collect from your customer.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Invoice discounting:</strong> borrow against receivables while you retain collection responsibility.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Selective invoice finance:</strong> finance specific invoices or customers rather than the full A/R ledger.</span></li>
                    </ul>
                    <p>
                      Recourse factoring leaves more risk with you if the customer does not pay; non-recourse shifts more risk to the factor at higher cost. Confidential arrangements aim to keep customers unaware of financing; traditional factoring may redirect payment to the factor.
                    </p>
                    <p>
                      Some banks and fintech lenders offer invoice-backed lines of credit tied to A/R balances. Terms resemble discounting but may integrate with existing banking relationships.
                    </p>
                  </div>
                </section>
                <section id="eligibility" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What providers typically review.">Eligibility and Underwriting Factors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Providers evaluate customer credit quality, invoice aging, industry risk, concentration (too much A/R from one customer), and billing documentation quality. Invoices to government or large enterprises may qualify more easily than early-stage consumer receivables.
                    </p>
                    <p>
                      Stale or disputed invoices rarely finance well. Providers want clear proof of delivery, signed contracts or POs, and invoices without liens or prior assignments. If your aging report is unreliable, fix reporting before applying—underwriting will mirror the same gaps.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/accounts-receivable-vs-invoicing" className={linkGreen}>accounts receivable vs invoicing</Link>{" "}
                      for how A/R data supports financing decisions and{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>{" "}
                      for operational hygiene.
                    </p>
                  </div>
                </section>
                <section id="tradeoffs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Benefits and risks to weigh.">Pros, Cons, and Decision Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Pros:</strong> faster liquidity, smoother payroll and vendor payments during growth, and ability to take on customers with longer terms without starving working capital.</p>
                    <p><strong className="text-[#1A2D48]">Cons:</strong> financing fees that reduce margin, customer notification in some factoring models, contractual minimums, and dependency risk if collections and terms are not improved in parallel.</p>
                    <p>
                      Before signing, compare effective annual cost across providers, understand advance rate and reserve release timing, and confirm what happens if a customer pays late or not at all. Ask whether financing is recourse or non-recourse and how disputes on underlying invoices are handled.
                    </p>
                    <p>
                      Use a simple checklist: Have we shortened invoicing lag and reminders? Is A/R aging accurate? Is the gap temporary (seasonal) or structural (terms too long)? If structural, consider term changes or deposits before recurring financing fees become a permanent expense line.
                    </p>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Options before selling or borrowing against receivables.">Alternatives to Invoice Financing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shorter payment terms, deposits, milestone billing, and early-payment discounts can improve cash without third-party fees. Line of credit or term loan may cost less if the business qualifies on overall credit—not just receivables.
                    </p>
                    <p>
                      Operational fixes—same-day invoicing, online payment links, automated reminders—often close liquidity gaps that owners assume require financing. Measure DSO before and after billing changes to see if financing is still necessary.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Invoice financing questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for A/R Visibility" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoice-financing-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoice Financing Explained: Factoring vs Discounting | BeltStack",
    description:
      "Invoice financing and factoring advance cash against unpaid invoices. Learn factoring vs discounting, eligibility, fees, pros and cons, and when to fix collections first.",
  };
}
