import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

// ——— Design (match payroll guide pages) ———
function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const FAQ_ITEMS = [
  {
    q: "When is the best time to switch accounting software?",
    a: "Many businesses plan a switch at the start of a new fiscal year or quarter so opening balances are cleaner. That said, you can move mid-year if your current system is causing major issues; it just requires more careful setup.",
  },
  {
    q: "What data should I migrate to the new system?",
    a: "Most companies bring over chart of accounts, customers, vendors, open invoices and bills, bank and credit card balances, and a limited history of transactions. Your accountant can help decide how much historical detail is truly necessary.",
  },
  {
    q: "How long does it take to switch accounting platforms?",
    a: "Simple migrations can take a few days of focused work; more complex moves involving multiple entities, currencies, or integrations can take weeks. Planning ahead and testing in a sandbox environment reduce surprises.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.7,
    bestFor: "Popular destination when upgrading",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    rating: 4.6,
    bestFor: "Alternative to QuickBooks",
    reviewHref: getAccountingReviewUrl("xero"),
  },
  {
    name: "Zoho Books",
    logoSrc: "/Logos/zoho.png",
    rating: 4.4,
    bestFor: "Best for Zoho ecosystem",
    reviewHref: getAccountingReviewUrl("zoho-books"),
  },
];

export default function HowToSwitchAccountingSoftwareGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Article content ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Accounting
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How to Switch Accounting Software
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Switch Accounting Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how to plan a move from one accounting platform to another, migrate your data, and go live with
                    minimal disruption.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Switching accounting software can feel intimidating. Your books live at the center of payroll,
                      invoicing, bill pay, and taxes—so the idea of moving everything can trigger understandable anxiety.
                    </p>
                    <p>
                      With a clear plan and help from your accountant or bookkeeper, though, migrating from a legacy tool
                      to something like{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero
                      </Link>
                      , or{" "}
                      <Link
                        href={getAccountingReviewUrl("zoho-books")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Zoho Books
                      </Link>{" "}
                      is very doable. This guide walks through the key steps.
                    </p>
                  </div>
                </section>

                {/* ——— Why Businesses Switch ——— */}
                <section id="why-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common reasons companies move to a new platform.">
                    Why Businesses Switch Accounting Software
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Outgrowing a basic or free tool that no longer supports your complexity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Needing better reporting, multi-entity support, or integrations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Wanting to align with the tools your accountant or finance team prefers.</span>
                      </li>
                    </ul>
                    <p>
                      Before switching, confirm that your pain points truly come from the software—not from internal
                      processes that might be improved without a migration.
                    </p>
                  </div>
                </section>

                {/* ——— Preparing to Switch ——— */}
                <section id="prepare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Foundational work that makes migration smoother.">
                    How to Prepare Before You Switch
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Before moving data, you will want to:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Bring your existing books up to date and reconcile bank accounts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Decide on a cutover date (often month- or year-beginning).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Export key lists (chart of accounts, customers, vendors, items) from your current system.</span>
                      </li>
                    </ul>
                    <p>
                      If you are moving because your tools are too limited, you can use our{" "}
                      <Link
                        href="/accounting"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        accounting software hub
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/accounting/compare"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        comparisons
                      </Link>{" "}
                      to narrow down replacement options.
                    </p>
                  </div>
                </section>

                {/* ——— Migration Steps ——— */}
                <section id="migration-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A high-level playbook for moving platforms.">
                    Step-by-Step: How to Switch Accounting Software
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>
                        <strong className="text-[#1A2D48]">Confirm your destination platform</strong> and sign up for the
                        appropriate plan (e.g. QuickBooks Online, Xero, Zoho Books).
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Set up your chart of accounts</strong> in the new system, either
                        importing your existing chart or cleaning it up during migration.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Import customers, vendors, and opening balances</strong> as of
                        the cutover date.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Bring over open invoices and bills</strong> so your new system
                        reflects who owes you and whom you owe.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Reconnect bank feeds and payment apps</strong> and run a test
                        reconciliation to ensure everything lines up.
                      </li>
                    </ol>
                    <p>
                      For complex scenarios, consider working with an accountant or consultant who has migrated many
                      businesses to your chosen platform.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about switching accounting platforms.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: popular accounting platforms (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Popular Accounting Platforms" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/how-to-switch-accounting-software" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Switch Accounting Software | BeltStack Guide",
    description:
      "Learn when to switch accounting software, how to prepare your books, and the key steps for migrating to a new accounting platform.",
  };
}

