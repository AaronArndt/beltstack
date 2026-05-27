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
    q: "What is the best invoicing software for agencies?",
    a: "HoneyBook is strong for agency client workflows with proposals and contracts in one branded experience. FreshBooks is a solid choice for recurring retainers and straightforward billing operations. Bonsai fits freelancers and lean agencies that want contracts and invoicing together.",
  },
  {
    q: "Do agencies need proposals and contracts with invoicing?",
    a: "Many do. Client-facing agencies often want one workflow from proposal to signed agreement to invoice, especially for project-based work. Separate tools work, but handoffs between proposal, signature, and billing create delays and version mismatches.",
  },
  {
    q: "Can agencies bill retainers automatically?",
    a: "Yes. Look for recurring invoice schedules, milestone billing, and reminder automation for monthly retainers. Verify how the tool handles rate changes, paused engagements, and partial months so finance does not fix schedules manually each cycle.",
  },
  {
    q: "Should agencies use CRM or invoicing software?",
    a: "Agencies often use both: CRM for pipeline and client management, invoicing tools for billing execution and A/R reporting. See our CRM invoicing guide for trade-offs when sales and finance need different systems.",
  },
  {
    q: "Where can I compare agency-focused picks?",
    a: "See our invoicing best-for agencies page, HoneyBook vs Bonsai comparison, and individual reviews linked in the Top Picks section of this guide.",
  },
  {
    q: "How do agencies handle time-based vs fixed-fee billing?",
    a: "Choose software that supports your primary model with easy exceptions. Retainer agencies need strong recurring billing; project shops need milestones and change-order friendly invoices; hybrid agencies need both without duplicate client records.",
  },
  {
    q: "What reporting do agency finance leads need?",
    a: "Revenue by client, retainer vs project mix, overdue retainer balances, and exportable data for accountants. Pipeline metrics belong in CRM; cash collection metrics belong in invoicing or accounting.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", rating: 4.4, bestFor: "Agency client workflows", reviewHref: getInvoicingReviewUrl("honeybook") },
  { name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", rating: 4.3, bestFor: "Proposals + contracts", reviewHref: getInvoicingReviewUrl("bonsai") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Retainer billing", reviewHref: getInvoicingReviewUrl("freshbooks") },
];

export default function BestInvoicingSoftwareForAgenciesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Best Invoicing Software for Agencies</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Invoicing Software for Agencies</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare invoicing tools for marketing, creative, and professional agencies: retainers, proposals, contracts, milestone billing, and client-ready payment experiences.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Agencies need more than basic invoice templates. Client onboarding, scoped proposals, recurring retainers, and clear payment status across multiple accounts are core requirements—not nice-to-have branding extras.
                    </p>
                    <p>
                      Billing also shapes client trust. A polished proposal-to-invoice flow signals professionalism; a disjointed stack of PDFs, separate payment links, and manual follow-up emails signals operational friction clients notice.
                    </p>
                    <p>
                      Agency tool choice often splits by team shape: client-facing studios prioritize HoneyBook-style workflows; operations-led agencies with finance staff may prefer FreshBooks or QuickBooks for A/R discipline and accounting sync.
                    </p>
                    <p>
                      See scenario picks on{" "}
                      <Link href="/invoicing/best-for/agencies" className={linkGreen}>invoicing best-for agencies</Link>,{" "}
                      our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup, and{" "}
                      <Link href="/invoicing/guides/can-crm-software-handle-invoicing" className={linkGreen}>can CRM software handle invoicing?</Link>
                    </p>
                  </div>
                </section>
                <section id="agency-needs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Billing features agencies should prioritize.">What Agencies Need from Invoicing Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Agency billing spans client experience and back-office control. Front-office features win deals; back-office features protect margin when multiple projects run concurrently under the same retainer.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Proposal and contract workflows tied to billing.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Recurring retainer invoices and milestone billing for projects.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Time tracking or project billing support for hybrid engagements.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Branded client experience, portals, and one-click payment links.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>A/R visibility by client account for finance review.</span></li>
                    </ul>
                    <p>
                      For retainer mechanics, see{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-recurring-billing" className={linkGreen}>how businesses handle recurring billing</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/recurring-invoicing-explained" className={linkGreen}>recurring invoicing explained</Link>.
                    </p>
                  </div>
                </section>
                <section id="top-picks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Agency tools worth evaluating first.">Top Picks for Agencies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getInvoicingReviewUrl("honeybook")} className={linkGreen}>HoneyBook</Link> and{" "}
                      <Link href={getInvoicingReviewUrl("bonsai")} className={linkGreen}>Bonsai</Link> are popular for client workflow depth—proposals, contracts, and payments in one client-facing flow. Compare them on{" "}
                      <Link href="/invoicing/compare/honeybook-vs-bonsai" className={linkGreen}>HoneyBook vs Bonsai</Link>.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> works well when billing operations need to stay simple and fast, especially for retainer-heavy agencies with straightforward terms and strong reminder automation.
                    </p>
                    <p>
                      Larger agencies with finance staff often add QuickBooks for reporting depth while keeping client-facing billing in a specialized tool. Read{" "}
                      <Link href="/invoicing/guides/can-accounting-software-replace-invoicing-software" className={linkGreen}>can accounting software replace invoicing software</Link>{" "}
                      before consolidating stacks.
                    </p>
                  </div>
                </section>
                <section id="agency-workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From signed scope to collected cash.">Typical Agency Billing Workflow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A healthy agency flow: scoped proposal, signed agreement, deposit or first retainer invoice, milestone or monthly billing, automated reminders, payment recorded, and reconciliation in accounting. Gaps usually appear at handoffs—especially when proposals live outside the invoicing system.
                    </p>
                    <p>
                      Standardize templates for retainers vs projects so account managers do not reinvent terms per client. Consistent terms speed approvals and reduce disputes when invoices arrive.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Agency invoicing software questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Best Invoicing Tools for Agencies" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/best-invoicing-software-for-agencies" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Agencies (2026) | BeltStack Guide",
    description:
      "Compare the best invoicing software for agencies: HoneyBook, Bonsai, and FreshBooks for retainers, proposals, contracts, milestone billing, and client payment workflows.",
    keywords: [
      "invoicing software agencies",
      "HoneyBook agencies",
      "agency retainer billing",
      "proposal and invoice software",
      "creative agency invoicing",
      "2026",
    ],
  };
}
