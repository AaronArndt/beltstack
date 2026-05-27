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
    q: "What is the best invoicing software for consultants?",
    a: "FreshBooks is a strong fit for many consultants because it supports hourly billing, retainers, and clean client invoices. Bonsai is useful when you also need contracts and proposals in one workflow. Wave can work for early-stage solo practices with simple billing.",
  },
  {
    q: "Should consultants bill hourly or by project?",
    a: "Both models are common. Choose software that supports your primary model, with easy switching for mixed engagements. Hybrid consultants often need time tracking plus fixed-fee milestones in the same client record.",
  },
  {
    q: "Do consultants need time tracking in invoicing software?",
    a: "If you bill hourly, yes. Time-to-invoice workflows reduce billing errors and speed up month-end invoicing. Even fixed-fee consultants sometimes track time internally to protect margin on scoped projects.",
  },
  {
    q: "Can consultants use free invoicing tools?",
    a: "Yes for early-stage practices with few clients. Paid tools often pay off once retainer volume, reminder automation, and expense pass-through on invoices become weekly habits rather than occasional tasks.",
  },
  {
    q: "Where can I compare consultant-focused options?",
    a: "See our invoicing best-for consultants page, this guide’s Top Picks section, and product reviews for FreshBooks, Bonsai, and Wave linked in the sidebar.",
  },
  {
    q: "How should consultants handle expense pass-through?",
    a: "Use software that attaches receipt-backed expenses to client invoices with clear labels. Clients approve charges faster when expenses map to agreed contract terms instead of appearing as vague line items.",
  },
  {
    q: "Do consultants need separate accounting software?",
    a: "Often yes once revenue grows or you hire help. Invoicing software can stand alone early; sync to QuickBooks or Xero when tax reporting, reconciliation, and multi-entity needs mature.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Hourly and retainer billing", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", rating: 4.3, bestFor: "Contracts + proposals", reviewHref: getInvoicingReviewUrl("bonsai") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Budget-conscious consultants", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function BestInvoicingSoftwareForConsultantsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Best Invoicing Software for Consultants</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Invoicing Software for Consultants</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare invoicing tools for consultants: hourly and retainer billing, time tracking, proposals, expense pass-through, and professional client invoices.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Consultants need invoicing software that supports flexible billing models, clear scope references, and reliable payment collection without heavy admin overhead. Your invoice is often the most frequent formal touchpoint clients see besides deliverables themselves.
                    </p>
                    <p>
                      Solo consultants usually optimize for speed: convert approved scope to invoice, send a payment link, automate reminders, and move on to billable work. Small firms add permissions so associates draft invoices while partners approve larger engagements.
                    </p>
                    <p>
                      Tool choice should follow how you sell—not just how you bill. If proposals and contracts are part of every engagement, an integrated platform like Bonsai may beat a pure invoicing tool. If you already have signed SOWs elsewhere, FreshBooks-style billing depth may matter more.
                    </p>
                    <p>
                      Compare picks on{" "}
                      <Link href="/invoicing/best-for/consultants" className={linkGreen}>invoicing best-for consultants</Link>{" "}
                      and read our{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-freelancers" className={linkGreen}>best invoicing software for freelancers</Link>{" "}
                      guide for solo-practice overlap.
                    </p>
                  </div>
                </section>
                <section id="consultant-needs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Billing capabilities consultants use most.">What Consultants Need</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Consultants juggle multiple billing models across clients. Software should make switching models painless—hourly this month, fixed milestone next—without duplicate setup or broken reporting.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Hourly, fixed-fee, and retainer billing support in one client record.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Time tracking tied to client projects and engagement codes.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Expense pass-through on invoices with receipt attachment when needed.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Automated reminders and online payment links with professional branding.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Optional proposals and contracts for new engagements.</span></li>
                    </ul>
                    <p>
                      Scope clarity reduces disputes. Reference SOW or PO numbers on every invoice and keep terms aligned with{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.
                    </p>
                  </div>
                </section>
                <section id="top-picks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Consultant tools to shortlist first.">Top Picks for Consultants</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> is a common default for consultants who want polished invoices, retainer schedules, and time-to-bill workflows without accounting complexity on day one.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("bonsai")} className={linkGreen}>Bonsai</Link> fits consultants who want proposals, contracts, and invoicing in one client-facing stack—especially independent strategists, designers, and fractional executives.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link> can work for early-stage practices with simpler billing. Review upgrade triggers in{" "}
                      <Link href="/invoicing/guides/free-vs-paid-invoicing-software" className={linkGreen}>free vs paid invoicing software</Link>{" "}
                      before client volume grows.
                    </p>
                  </div>
                </section>
                <section id="billing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match software to how you charge.">Billing Models and Tool Fit</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Hourly:</strong> prioritize time tracking, billable rate rules, and fast conversion of hours to invoice lines.</p>
                    <p><strong className="text-[#1A2D48]">Retainer:</strong> prioritize recurring schedules, clear period descriptions, and automated reminders when retainers slip overdue.</p>
                    <p><strong className="text-[#1A2D48]">Fixed project:</strong> prioritize milestone invoices, deposit support, and change-order friendly line items.</p>
                    <p>
                      For time-based operations, see{" "}
                      <Link href="/time-tracking/guides/tracking-billable-hours" className={linkGreen}>tracking billable hours</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-agencies" className={linkGreen}>best invoicing software for agencies</Link>{" "}
                      if you run a small consulting firm with retainer-heavy clients.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Consultant invoicing software questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Best Invoicing Tools for Consultants" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/best-invoicing-software-for-consultants" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Consultants (2026) | BeltStack Guide",
    description:
      "Compare the best invoicing software for consultants: FreshBooks, Bonsai, and Wave for hourly billing, retainers, time tracking, proposals, and professional client invoices.",
    keywords: [
      "invoicing software consultants",
      "consultant billing software",
      "FreshBooks consultants",
      "hourly consultant invoicing",
      "retainer billing consultants",
      "2026",
    ],
  };
}
