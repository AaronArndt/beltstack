import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-quicken-do-invoicing";

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
    q: "Does Quicken have invoicing for small business?",
    a: "Quicken is not built as a business invoicing and accounts receivable system. Some versions may offer limited bill or invoice-like features for personal use, but they do not replace QuickBooks, FreshBooks, or Wave for client billing workflows.",
  },
  {
    q: "What should I use instead of Quicken for invoicing?",
    a: "FreshBooks excels at freelancer invoicing; Wave offers free invoicing plus accounting; QuickBooks Online combines invoicing with full books. See invoicing software vs accounting software.",
  },
  {
    q: "Can freelancers use Quicken and a separate invoicing tool?",
    a: "You can, but duplicating customer and payment data creates extra work. Most freelancers consolidate into one business platform when volume grows.",
  },
  {
    q: "Is Quicken Simplifi good for invoicing?",
    a: "No—Simplifi targets personal cash flow and goals. Business billing belongs in dedicated accounting or invoicing software.",
  },
  {
    q: "Can Quicken send payment links like FreshBooks?",
    a: "Quicken does not offer client payment links, recurring invoice automation, or AR aging reports comparable to FreshBooks or QuickBooks. Use invoicing or accounting software built for client billing.",
  },
  {
    q: "What is the cheapest way to invoice if I use Quicken personally?",
    a: "Keep personal finance in Quicken and run business invoicing in Wave (free core tier) or a low-cost FreshBooks plan. See invoicing software vs accounting software for category fit.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Client invoicing", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoicing + books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free invoicing", reviewHref: getAccountingReviewUrl("wave") },
];

export default function CanQuickenDoInvoicingPage() {
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
                    <li><Link href="/accounting" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/accounting/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken Invoicing</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can Quicken Do Invoicing?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Quicken is not a business invoicing platform. Here is what it can and cannot do—and what to use for client billing.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Quicken cannot replace proper business invoicing software for most users.</strong> Client invoices need payment links, open AR tracking, estimates, and tie-in to business tax reporting—workflows Quicken does not prioritize.
                    </p>
                    <p>
                      Product category split: <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>. Invoicing depth:{" "}
                      <Link href="/accounting/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing vs accounting software</Link> and the <Link href="/invoicing" className={linkGreen}>invoicing software hub</Link>.
                    </p>
                    <p>
                      If you already pay for Quicken personally, adding invoicing software is usually cheaper than forcing Quicken to act like business accounting—see <Link href="/accounting/guides/can-businesses-use-quicken-for-free" className={linkGreen}>Quicken for business</Link> limits.
                    </p>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools built for sending invoices.">What to Use for Invoicing Instead</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> for service businesses.{" "}
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> for free invoicing plus books.{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> when you need invoicing and full accounting together. Browse{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>.
                    </p>
                  </div>
                </section>
                <section id="gaps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What business billing requires.">Invoicing Features Quicken Lacks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Branded invoices with line items and tax rules</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Online payment acceptance and automatic payment matching</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Estimates, recurring invoices, and late reminders</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Accounts receivable aging and business P&amp;L tie-in</span></li>
                    </ul>
                  </div>
                </section>
                <section id="dual-tool" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Personal Quicken, business invoicing elsewhere.">Running Quicken Plus Invoicing Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Some owners keep Quicken for household money and invoice clients in FreshBooks or Wave. Separate business bank accounts and record owner draws in the business ledger—see <Link href="/accounting/guides/do-quicken-and-quickbooks-work-together" className={linkGreen}>Quicken and QuickBooks together</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack reviews invoicing and accounting tools independently—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/invoicing" className={linkGreen}>invoicing software hub</Link>, <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>. We do not sell Quicken or FreshBooks licenses.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/invoicing-software-vs-accounting-software" className={linkGreen}>Invoicing vs accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting" className={linkGreen}>Accounting software hub</Link></span></li>
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
              <GuideSidebar title="Invoicing tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedAccountingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Can Quicken Do Invoicing? | BeltStack Guide",
    description:
      "Can Quicken do invoicing? No for most businesses—learn missing AR features, best alternatives (FreshBooks, Wave, QuickBooks), and dual-tool workflows in 2026.",
    keywords: ["Quicken invoicing", "Quicken business invoicing", "FreshBooks vs Quicken", "invoicing software"],
  };
}
