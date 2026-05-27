import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingBestForUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-i-use-quickbooks-for-my-llc";

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
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ_ITEMS = [
  {
    q: "Is QuickBooks good for LLCs?",
    a: "Yes. LLCs are among the most common QuickBooks customers—single-member and multi-member. QuickBooks handles business books regardless of whether you are taxed as disregarded, partnership, or S corp (with CPA guidance on owner pay).",
  },
  {
    q: "How do I set up QuickBooks for my LLC?",
    a: "Create the company file with your LLC legal name, connect business bank accounts, set up chart of accounts with your CPA, and configure sales tax if applicable. Do not run personal expenses through the business file.",
  },
  {
    q: "LLC vs sole prop in QuickBooks—what changes?",
    a: "The software setup is similar; tax reporting and owner pay differ. LLCs taxed as S corps need payroll workflows; many sole props use owner draws. See how should an LLC pay themselves in QuickBooks.",
  },
  {
    q: "Can a single-member LLC use QuickBooks?",
    a: "Yes. Single-member LLCs frequently use QuickBooks for invoicing, expenses, and year-end Schedule C or corporate filings—confirm filing requirements with your CPA.",
  },
  {
    q: "Should my LLC use QuickBooks Online or Desktop?",
    a: "Most new LLCs choose QuickBooks Online for bank feeds, accountant access, and automatic updates. Desktop is niche—verify Intuit's current Desktop offering if you consider it.",
  },
  {
    q: "Can I use QuickBooks for an LLC without a business bank account?",
    a: "You should open a dedicated business bank account for clean books and liability hygiene. QuickBooks works best when business and personal transactions are separated.",
  },
  {
    q: "Does QuickBooks file LLC taxes?",
    a: "QuickBooks organizes data for your CPA; it does not file tax returns. Tax elections and forms depend on how your LLC is taxed.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "LLC books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Alternative", reviewHref: getAccountingReviewUrl("xero") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service LLCs", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function CanIUseQuickBooksForMyLLCPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks for LLC</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can I Use QuickBooks for My LLC?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Yes—LLCs commonly run QuickBooks for business books. Setup, bank accounts, and owner pay depend on how your LLC is taxed.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">You can use QuickBooks for your LLC.</strong> QuickBooks does not require a corporation—LLCs use it for the same reasons other small businesses do: separated books, invoicing, tax-ready reports, and accountant access.
                    </p>
                    <p>
                      Forming an LLC is a legal step; QuickBooks is an operational tool. The software does not know your tax election until your CPA maps accounts and owner pay correctly. Many LLCs start on <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> the same week they open a business bank account.
                    </p>
                    <p className="text-sm text-neutral-600 border-l-4 border-[#10B981] pl-4">
                      Entity structure, tax elections, and filing obligations are legal/tax matters—confirm with your CPA. BeltStack covers software setup, not legal advice.
                    </p>
                    <p>
                      Unincorporated owners comparing entity types: <Link href="/accounting/guides/can-i-use-quickbooks-without-an-llc" className={linkGreen}>can I use QuickBooks without an LLC</Link>. Owner compensation:{" "}
                      <Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>how should an LLC pay themselves in QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="setup" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="LLC-specific hygiene in QuickBooks.">Recommended LLC Setup</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Use the LLC&apos;s legal name on the QuickBooks company and invoices.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Maintain a dedicated business bank account—required for clean books and liability hygiene.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Grant your CPA accountant access for review and year-end entries.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Configure sales tax and payroll only when your LLC actually needs them.</span></li>
                    </ul>
                    <p>
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> ·{" "}
                      <Link href={getAccountingBestForUrl("small-business")} className={linkGreen}>best accounting for small business</Link>
                    </p>
                  </div>
                </section>
                <section id="tax-classification" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Software stays the same; tax treatment varies.">How Tax Classification Affects QuickBooks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A single-member LLC taxed as disregarded often uses owner draw accounts. Partnership-taxed LLCs need member equity structure. S corp LLCs usually require payroll for W-2 wages plus distributions. QuickBooks records the entries your CPA defines—it does not choose the election.
                    </p>
                    <p>
                      Monthly workflows: <Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>what businesses use QuickBooks for</Link>. Beginner path:{" "}
                      <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="common-mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep LLC books audit-ready.">LLC Mistakes to Avoid in QuickBooks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Paying personal expenses from the LLC card without documenting reimbursements.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Labeling owner transfers as payroll expense when they are draws.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Skipping reconciliation because the LLC is &quot;small.&quot;</span></li>
                    </ul>
                    <p>
                      Receipt discipline: <Link href="/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks" className={linkGreen}>receipts with QuickBooks</Link>. Subscription deduction:{" "}
                      <Link href="/accounting/guides/can-businesses-write-off-quickbooks" className={linkGreen}>writing off QuickBooks</Link> (general education, not tax advice).
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack tests QuickBooks for LLC-relevant workflows—separate banks, owner equity, accountant access—not legal entity advice. Our reviews are independent and workflow-based. See <Link href="/methodology" className={linkGreen}>methodology</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Open a business bank account, then create your QuickBooks company with the LLC legal name.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Schedule a CPA call to set chart of accounts and owner pay method before the first draw.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Read <Link href="/accounting/guides/do-you-still-need-an-accountant-if-you-use-quickbooks" className={linkGreen}>accountant vs QuickBooks</Link> to plan ongoing help.</span></li>
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
              <GuideSidebar title="LLC accounting" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Can I Use QuickBooks for My LLC? (2026 Guide) | BeltStack",
    description:
      "Yes—LLCs can use QuickBooks for business accounting. Setup steps, tax classification effects, common mistakes, and how owner pay works with your CPA.",
    keywords: [
      "QuickBooks for LLC",
      "LLC accounting software",
      "single member LLC QuickBooks",
      "LLC bookkeeping QuickBooks",
      "QuickBooks Online LLC setup",
    ],
  };
}
