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
    q: "What should I look for in invoicing software?",
    a: "Prioritize: ease of creating and sending invoices, recurring billing if you have retainers, online payment options and fees, invoice customization and branding, basic reporting, and integrations with your accounting or other tools. Match the feature set to your team size and workflow.",
  },
  {
    q: "How important is recurring billing?",
    a: "Very important if you bill clients monthly or on a fixed schedule. Recurring invoicing automates repeat bills and reminders so you don’t have to create each invoice manually. Most paid invoicing tools support it; free tiers may limit how many recurring invoices you can have.",
  },
  {
    q: "What about payment processing fees?",
    a: "Many platforms charge a percentage plus a fee per transaction for card and ACH payments. Compare rates and whether you can use your own payment processor. Total cost = software subscription plus payment fees based on volume.",
  },
  {
    q: "Do I need integrations with accounting software?",
    a: "If you use QuickBooks, Xero, or another accounting tool, check that your invoicing software can sync paid invoices and customer data. That avoids double entry and keeps your books in sync. Some businesses use one platform for both invoicing and accounting.",
  },
  {
    q: "How do I compare pricing across tools?",
    a: "Look at subscription tiers, client or invoice limits, and add-ons (e.g. payment processing, extra users). Free options like Wave have limits; paid tools like FreshBooks and Zoho Invoice scale by plan. Use our best invoicing software and comparison pages to compare.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Ease of use", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.jpeg", rating: 4.4, bestFor: "Value & automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", rating: 4.4, bestFor: "Client workflow", reviewHref: getInvoicingReviewUrl("honeybook") },
];

export default function HowToChooseInvoicingSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className={linkGreen}>Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing" className={linkGreen}>Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className={linkGreen}>Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-[#1A2D48] font-medium" aria-current="page">How to Choose Invoicing Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose Invoicing Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    What to evaluate before choosing: recurring billing, payment gateways, invoice customization, reporting, integrations, team size, and pricing.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choosing invoicing software starts with your workflow: how you bill (one-off vs recurring), how you want to get paid (links, bank transfer, etc.), and whether you need to connect to accounting or other tools. Then factor in team size, budget, and how much customization you need.
                    </p>
                    <p>
                      Use our <Link href="/invoicing" className={linkGreen}>invoicing hub</Link>, <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>, and <Link href="/invoicing/compare" className={linkGreen}>comparisons</Link> to narrow options. Read our <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>, <Link href={getInvoicingReviewUrl("zoho-invoice")} className={linkGreen}>Zoho Invoice</Link>, and <Link href={getInvoicingReviewUrl("honeybook")} className={linkGreen}>HoneyBook</Link> reviews for detailed feature and pricing breakdowns.
                    </p>
                  </div>
                </section>
                <section id="what-to-evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key factors when comparing tools.">What to Evaluate</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Recurring billing</strong> — Essential for retainers and subscriptions; check limits and automation.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment gateways</strong> — Built-in vs third-party; compare fees and supported methods.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Invoice customization</strong> — Branding, templates, and fields that matter to your clients.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Aged receivables, revenue, and exports for your accountant.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Integrations</strong> — Accounting, time tracking, and CRM if you use them.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Team size and pricing</strong> — Per-seat or per-client limits; avoid overpaying for unused capacity.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Popular Invoicing Platforms" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-to-choose-invoicing-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose Invoicing Software | BeltStack Guide",
    description:
      "What to evaluate when choosing invoicing software: recurring billing, payment gateways, customization, reporting, integrations, and pricing.",
  };
}
