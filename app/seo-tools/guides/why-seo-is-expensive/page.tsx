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
    bestFor: "Free baseline before big spend",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Research that saves labor hours",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Local ops at multi-location scale",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const FAQ = [
  {
    q: "Why is SEO so expensive compared to ads?",
    a: "Ads buy placement immediately; SEO buys compounding visibility through ongoing work—technical fixes, content, listings, and trust signals. You are paying for durable demand, not a rented slot that stops when spend pauses.",
  },
  {
    q: "Is SEO expensive because of tools?",
    a: "Usually no—labor and content are the main cost. Tools can be a few hundred per month; agencies or internal salaries are often multiples of that. Software saves time but does not replace execution.",
  },
  {
    q: "Why do agencies charge high retainers?",
    a: "Senior strategists, writers, developers, and account management stack quickly. Cheap SEO often means templated tasks with little business context. Expensive SEO should map to shipped work you can verify in Search Console.",
  },
  {
    q: "Can small businesses afford SEO?",
    a: "Yes, if scope matches capacity: free Google tools, owner-run GBP and reviews, one great page per service, and optional modest software. See how to optimize SEO for free and can you do SEO yourself before enterprise retainers.",
  },
  {
    q: "Does competitive market make SEO cost more?",
    a: "Absolutely. Crowded keywords need better pages, more proof, and longer timelines. Local Map Pack competition adds citation and review programs. Underfunding in hard markets looks like SEO does not work—it is often under-resourced.",
  },
  {
    q: "What is the hidden cost of SEO?",
    a: "Opportunity cost of leadership time, photo shoots, citation cleanup after rebrands, and fixing technical debt from an old site. Budget those alongside subscriptions.",
  },
  {
    q: "How do I reduce SEO cost without hurting results?",
    a: "Fix basics first, buy one tool with a weekly owner, and measure booked jobs. Cancel unused tiers, avoid duplicate suites, and read how to budget for SEO tools and are SEO tools worth it before renewals.",
  },
];

export default function WhySeoIsExpensivePage() {
  const href = "/seo-tools/guides/why-seo-is-expensive";
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
                  Why SEO Is Expensive
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Why SEO Is Expensive</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                SEO feels costly because it bundles ongoing labor, competitive markets, and trust assets—not because a single tool invoice is large. Put pricing in context with{" "}
                <Link href="/seo-tools/guides/seo-pricing-explained" className={link}>
                  SEO pricing explained
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                  are SEO tools worth it
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="labor-not-logos" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Labor—not logos—drives most of the bill</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  A Semrush or Ahrefs subscription is visible on a card statement; the hours to fix crawl errors, rewrite service pages, respond to reviews, and coordinate photos are not. Those hours repeat monthly because competitors also improve—and Google&apos;s bar for helpful content rises.
                </p>
                <p className="mt-4">
                  Tools compress research time; they do not replace the mechanic who proves real jobs on the site or the ops lead who keeps GBP accurate. That is why{" "}
                  <Link href="/seo-tools/guides/can-you-do-seo-yourself" className={link}>
                    can you do SEO yourself
                  </Link>{" "}
                  matters: owner time is real spend even when cash outlay looks small.
                </p>
              </section>

              <section id="compounding-work" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">SEO is compounding work, not a one-time purchase</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Unlike a brochure redesign, SEO does not finish. Search Console surfaces new queries; competitors publish; listings drift after phone changes. Stopping work for six months often erases momentum—especially in local Map Pack markets where reviews and photos need freshness.
                </p>
                <p className="mt-4">
                  Businesses that run effective SEO treat it as an operating rhythm—see{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>
                  —not a campaign with an end date.
                </p>
              </section>

              <section id="competition" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Competition raises the minimum viable program</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  In saturated metros, thin service pages and stale GBP profiles lose to operators with proof, video, and consistent review velocity. Technical debt from an old WordPress theme can make even good copy invisible—run{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics for small business
                  </Link>{" "}
                  before you blame SEO as a channel.
                </p>
                <p className="mt-4">
                  Multi-location brands add citation hygiene and rank grids—where{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  labor saves more than forcing a general suite to approximate local ops.
                </p>
              </section>

              <section id="tools-misread" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Why tool spend is a smaller slice than you think</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Stacking overlapping suites is an avoidable expense—see{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools and subscriptions
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-much-seo-software-costs" className={link}>
                    how much SEO software costs
                  </Link>
                  . Compare{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  once, pick one flagship research product, and add local specialists only when Maps is the bottleneck.
                </p>
              </section>

              <section id="lower-cost-without-shortcuts" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Lower cost without toxic shortcuts</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Start with{" "}
                  <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                    how to optimize SEO for free
                  </Link>
                  : verified Search Console, aligned GBP, three strong service pages, and weekly review responses. Add paid research when free data cannot answer which competitor pages earn links and clicks.
                </p>
                <p className="mt-4">
                  Avoid link spam, fake addresses, and AI city-page floods—they create cleanup costs that dwarf honest programs. Measure cost per booked job in your CRM, not keyword count alone.
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
              <GuideSidebar title="Start lean, scale deliberately" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Why SEO Is Expensive (2026) | Labor, Competition & Tools | BeltStack",
    description:
      "Why SEO costs so much: ongoing labor vs software, competitive markets, compounding work, and how to lower spend with free Google tools, smart budgeting, and no spam shortcuts.",
  };
}
