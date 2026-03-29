import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: 4.6, bestFor: "Tiered limits", reviewHref: getSeoToolsReviewUrl("semrush") },
  { name: "Ahrefs", logoSrc: "/Logos/ahrefs.jpeg", rating: 4.7, bestFor: "Credits model", reviewHref: getSeoToolsReviewUrl("ahrefs") },
  { name: "Moz Pro", logoSrc: "/Logos/mozpro.jpeg", rating: 4.2, bestFor: "Mid-market", reviewHref: getSeoToolsReviewUrl("moz-pro") },
];

const FAQ = [
  { q: "What drives SEO tool cost most?", a: "Tracked keywords, crawl credits, seats/user logins, and local rank-tracking grids. Under-model any of these and you hit overage invoices mid-quarter." },
  { q: "Can one shared login work?", a: "Often against terms and risky for audit trails; vendors increasingly enforce seat counts. Budget honestly for everyone who will run exports." },
  { q: "Do I need rank tracking in every zip?", a: "No—sample representative grids tied to population and competition, then expand only when strategy changes. Excessive grids inflate bills without better decisions." },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

export default function HowToBudgetForSeoToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">SEO Tools</Link></li><li aria-hidden>/</li>
                    <li><Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Budgeting for SEO Tools</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Budget for SEO Tools &amp; Subscriptions</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Seats, projects, crawl limits, and local tracking—plan annual stack cost with headroom so you are not surprised at renewal.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Buyer intent is CFO-friendly: translate feature grids into units your team will actually consume. Anchor decisions with{" "}
                    <Link href="/seo-tools/compare" className={link}>SEO tool comparisons</Link>,{" "}
                    <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>Semrush vs Ahrefs</Link>, and individual reviews. Pair tooling with operational guides like{" "}
                    <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>local SEO for service businesses</Link>.
                  </p>
                  <p>
                    If you also fund <Link href="/lead-generation" className={link}>lead generation</Link>, separate SEO tooling from ads platforms in budgets so neither starves mid-month.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to model in a spreadsheet.">Budget worksheet rows</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Base subscription × seats</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Add-ons: local grids, content templates, API</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Annual uplift assumptions (vendors rarely freeze price)</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Onboarding time (internal labor is a real cost)</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Prices change—re-verify before renewals.">Authoritative sourcing</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    BeltStack educational guides avoid stale dollar amounts in body copy; use vendor pricing pages at contract time and our reviews for capability trade-offs, not line-item quotes frozen in blog screenshots.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Compare tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSeoToolsResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Budget for SEO Tools & Subscriptions | BeltStack",
    description:
      "Plan SEO software spend: seats, crawl and keyword limits, local rank grids, and add-ons—before you commit to annual contracts.",
  };
}
