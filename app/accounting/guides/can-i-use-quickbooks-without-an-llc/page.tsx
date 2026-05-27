import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingBestForUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-i-use-quickbooks-without-an-llc";

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
    q: "Can a sole proprietor use QuickBooks?",
    a: "Yes. Sole proprietors are among the most common QuickBooks users. You do not need an LLC to open an account—you need a business purpose and accurate separation of personal vs business transactions. See how QuickBooks works for self-employed users for typical workflows.",
  },
  {
    q: "Should I put my personal name or business name on QuickBooks?",
    a: "Use the name you operate under—the DBA or legal name customers see on invoices. Sole props often use their personal name plus a DBA; LLCs use the registered entity name. This does not change tax filing—confirm entity questions with a CPA.",
  },
  {
    q: "Does QuickBooks require an EIN?",
    a: "You can often sign up with a Social Security Number as a sole proprietor. An EIN is recommended as you hire employees or open business bank accounts; many banks prefer an EIN for business checking. QuickBooks does not replace legal entity setup.",
  },
  {
    q: "Is Wave or FreshBooks better for unincorporated freelancers?",
    a: "Both work without an LLC. FreshBooks emphasizes client billing; Wave offers free core accounting. QuickBooks fits when you want full books and accountant familiarity. See best accounting for freelancers and our QuickBooks Online review.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Sole props & LLCs", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancers", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free simple books", reviewHref: getAccountingReviewUrl("wave") },
];

export default function CanIUseQuickBooksWithoutAnLLCPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Without LLC</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can I Use QuickBooks Without an LLC?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Yes—sole proprietors and unincorporated businesses can use QuickBooks. Entity type affects taxes and liability, not software eligibility.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      New freelancers and side-business owners often ask whether they need an LLC before buying QuickBooks. The software question and the legal entity question get tangled—especially when a bank asks for business documents at the same time you are choosing accounting tools.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">You can use QuickBooks without forming an LLC.</strong> QuickBooks Online is business accounting software; it does not check your Articles of Organization before signup. Millions of sole proprietors, freelancers, and side businesses use it while operating as unincorporated entities.
                    </p>
                    <p>
                      Confusing LLC status with software access is common. An LLC is a legal structure choice—liability protection and tax treatment—not a prerequisite for bookkeeping. For personal vs business product confusion, see <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>. Product fit and pricing:{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> and{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.
                    </p>
                    <p className="text-sm text-neutral-600">
                      BeltStack publishes software guidance, not legal or tax advice. Confirm entity and tax questions with a qualified CPA or attorney in your state.
                    </p>
                  </div>
                </section>
                <section id="setup" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How unincorporated owners typically configure QuickBooks.">Setup Tips for Sole Proprietors</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Open a <strong className="text-[#1A2D48]">dedicated business bank account</strong> even without an LLC—mixing personal and business spend is the bigger risk than entity type.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Connect only business accounts to QuickBooks bank feeds.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Use Schedule C–friendly expense categories; your CPA can map accounts at year-end.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Issue 1099s to contractors when thresholds apply—QuickBooks supports contractor tracking on appropriate tiers.</span></li>
                    </ul>
                    <p>
                      New to books? Start with <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link> and <Link href={getAccountingBestForUrl("freelancers")} className={linkGreen}>best accounting for freelancers</Link>.
                    </p>
                  </div>
                </section>
                <section id="llc-vs-no" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Software works either way—legal structure is separate.">LLC vs No LLC: What Changes (and What Does Not)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Forming an LLC may change how you file taxes and how you sign contracts; it does not change whether QuickBooks can track invoices and expenses. Whether QuickBooks is worth the subscription is a separate question—see{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> and our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link>.
                    </p>
                  </div>
                </section>
                <section id="entity-later" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Software stays; legal structure may change.">Forming an LLC Later</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many owners start unincorporated and form an LLC when revenue, liability, or tax planning warrants it. You can update your company name and chart of accounts in QuickBooks when that happens—you do not need to abandon your history if you migrate carefully with CPA guidance.
                    </p>
                    <p>
                      If you incorporate, read <Link href="/accounting/guides/can-i-use-quickbooks-for-my-llc" className={linkGreen}>can I use QuickBooks for my LLC</Link> and{" "}
                      <Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>how an LLC pays themselves in QuickBooks</Link> for owner draw workflows.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates accounting software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent accounting reviews—not paid placement lists. Editors test owner workflows like invoicing, bank reconciliation, and month-end reporting; compare headline pricing and add-ons honestly; and note where tools fit solos versus teams with accountants. Rankings reflect fit for small businesses, not vendor sponsorship.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Continue with these guides and reviews.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-does-quickbooks-work-for-self-employed-users" className={linkGreen}>QuickBooks for self-employed users</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingBestForUrl("freelancers")} className={linkGreen}>Best accounting for freelancers</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>Can I get QuickBooks for free?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>Accounting for small business</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>What does QuickBooks cost per month?</Link></span></li>
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
              <GuideSidebar title="Sole proprietor picks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Can I Use QuickBooks Without an LLC? | BeltStack Guide",
    description:
      "Yes—sole proprietors and freelancers can use QuickBooks without an LLC. Setup tips, bank separation, and when to form an entity later.",
  };
}
