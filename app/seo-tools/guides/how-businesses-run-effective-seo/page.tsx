import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Google Search Console",
    logoSrc: "/Logos/google.jpeg",
    rating: 4.8,
    bestFor: "Weekly visibility checks",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Content and rank workflows",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Local rank and citation ops",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const FAQ = [
  {
    q: "What does effective SEO look like for a small business?",
    a: "A repeatable loop: fix technical blockers, align pages with how customers search, earn trust through reviews and proof, measure calls and forms—not just rankings. Effective programs ship small improvements every week instead of annual overhauls.",
  },
  {
    q: "Who should own SEO inside the company?",
    a: "Often the owner or ops lead sets priorities; marketing or an agency executes. Someone must own Search Console weekly and connect SEO leads to CRM tags so you know what booked.",
  },
  {
    q: "How often should we publish new pages?",
    a: "Quality beats volume. One strong service page that answers real objections beats ten thin city clones. Publish when you can add unique proof, photos, or FAQs—not to hit an arbitrary count.",
  },
  {
    q: "Do we need an agency to run SEO effectively?",
    a: "Not always. Many trades run effective programs in-house with Search Console, GBP discipline, and selective tool spend. Agencies help when you lack time, need technical migrations, or compete in crowded metros.",
  },
  {
    q: "How do tools fit into the operating rhythm?",
    a: "Tools inform the backlog; people ship the backlog. Use Search Console for coverage, Semrush or Ahrefs for keyword and competitor gaps, BrightLocal for local grids—then assign owners and due dates in a simple tracker.",
  },
  {
    q: "How long until SEO feels effective?",
    a: "Technical fixes can show indexing gains in weeks. Competitive local terms often take months of consistent GBP, reviews, and aligned pages. Treat SEO as compounding, not a switch.",
  },
  {
    q: "How do we know SEO is working?",
    a: "Track branded vs non-branded leads, Maps actions, and form fills by landing page. Rankings are a leading indicator; booked jobs and revenue are the lagging ones you actually care about.",
  },
];

export default function HowBusinessesRunEffectiveSeoPage() {
  const href = "/seo-tools/guides/how-businesses-run-effective-seo";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">
                    SEO Tools
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">
                    Guides
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  How Businesses Run Effective SEO
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Run Effective SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                The operating system behind SEO that actually books work—priorities, cadence, tools, and measurement—not a one-time audit deck. For local operators, pair this with{" "}
                <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                  local SEO for service businesses
                </Link>{" "}
                and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="operating-system" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Effective SEO is an operating system</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  High-performing businesses treat SEO like dispatch or collections: a weekly rhythm with clear owners, not a quarterly campaign. The loop is stable—discover problems, ship fixes, measure leads, adjust priorities—even when tactics change.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Foundation</strong> — Crawlable site, accurate contact data, fast mobile experience.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Relevance</strong> — Pages and GBP that mirror how buyers search for your services.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Trust</strong> — Reviews, photos, licenses, and third-party mentions that prove you show up.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Feedback</strong> — Search Console, GBP insights, and CRM tags that tie effort to booked work.
                  </li>
                </ul>
              </section>

              <section id="weekly-cadence" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">A practical weekly and monthly cadence</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  <strong className="text-[#1A2D48]">Weekly (30–60 minutes):</strong> Review Search Console coverage and top queries; respond to new reviews; add one GBP photo or post; close one site fix from your backlog (broken link, thin service copy, missing city mention).
                </p>
                <p className="mt-4">
                  <strong className="text-[#1A2D48]">Monthly (half day):</strong> Audit which service pages earn impressions but not clicks; check competitor pages for services you lack; for multi-location brands, spot citation or phone drift; refresh priority keyword list if you use{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  <strong className="text-[#1A2D48]">Quarterly:</strong> Technical pass after template or plugin changes—see{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics
                  </Link>
                  —and reconcile whether paid tools still match headcount and markets.
                </p>
              </section>

              <section id="roles" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Roles: who does what</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Effective teams avoid &quot;SEO by committee.&quot; The owner or GM sets which services and cities matter this quarter. Marketing or an agency drafts pages and tracks rankings. Operations ensures trucks, phones, and service areas on GBP match reality—Google punishes fantasy coverage.
                </p>
                <p className="mt-4">
                  Sales and dispatch feed keyword research with the phrases customers actually use on calls. That language should appear on service pages and in GBP services, not only in blog posts nobody searches.
                </p>
              </section>

              <section id="local-playbook" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local businesses: Maps plus site in one program</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  For contractors and home services, effective SEO usually means running Maps and organic together. Align{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization
                  </Link>{" "}
                  with{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>
                  . Use{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
                  </Link>{" "}
                  when the bottleneck is the local pack, not sitewide content.
                </p>
                <p className="mt-4">
                  When you need grid-based rank tracking or citation cleanup at scale, add{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or compare specialists in{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>
                  .
                </p>
              </section>

              <section id="measurement" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measure booked work, not vanity charts</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Rankings and audit scores are useful only if they predict revenue. Tag leads in your{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  by source—organic, Maps, paid, referral—and review which landing pages assisted closed jobs. Pair organic with{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>{" "}
                  when you need capacity this month while SEO compounds.
                </p>
              </section>

              <section id="trades-entry" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Trade-specific starting point</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Crew-based trades should start with{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>
                  —a phased playbook tuned to reviews, service areas, and realistic tool spend before you scale content.
                </p>
              </section>
            </div>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">FAQs</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <GuideFaqSection faqs={FAQ} />
            </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Tools for the SEO loop" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Businesses Run Effective SEO (2026) | Cadence, Roles & Tools | BeltStack",
    description:
      "The operating system behind SEO that books work—weekly cadence, roles, local Maps plus site alignment, tool choices, and CRM measurement for small businesses.",
  };
}
