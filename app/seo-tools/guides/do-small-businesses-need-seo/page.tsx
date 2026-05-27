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
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Map Pack grids, citations, and GBP reporting",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    name: "Whitespark",
    logoSrc: "/Logos/whitespark.jpeg",
    rating: 4.5,
    bestFor: "Citation finder and local listing work",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Keyword research, audits, and rank tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
];

const FAQ = [
  {
    q: "Do small businesses need SEO?",
    a: "If customers search before they buy—and they do for most services and many retail categories—you need some form of SEO. That can start as free Search Console and GBP work; it does not require an agency on day one.",
  },
  {
    q: "When can a small business skip SEO?",
    a: "Rare cases: referral-only luxury with long sales cycles, closed B2B networks where search never influences deals, or products sold exclusively on marketplaces you do not control. Even then, branded search protection is cheap insurance.",
  },
  {
    q: "Is SEO worth it if I already get enough referrals?",
    a: "Referrals plateau and seasonality hurts. Organic search diversifies demand and lowers blended customer acquisition cost. You do not need to chase every keyword—own the services and cities that referrals cannot fill.",
  },
  {
    q: "How much time does SEO take for a small business?",
    a: "Plan two to four hours weekly for basics: listings, reviews, one site fix, and Search Console checks. Heavier content or multi-location programs need more—or a part-time specialist.",
  },
  {
    q: "Do I need SEO if I run Google Ads?",
    a: "Ads and SEO solve different economics. Ads rent placement; SEO compounds. Many SMBs run both until organic covers core services, then rebalance spend using CRM-tagged lead cost.",
  },
  {
    q: "What is the minimum SEO a small business should do?",
    a: "Verify Search Console, fix indexing blockers, maintain accurate GBP for local brands, publish clear service pages, and collect reviews consistently. That baseline beats competitors who treat listings as set-and-forget.",
  },
  {
    q: "Should I buy SEO tools before I do the work?",
    a: "No—tools accelerate research and audits; they do not replace execution. Add BrightLocal, Whitespark, or Semrush when a specific task repeats weekly and free data is not enough.",
  },
];

export default function DoSmallBusinessesNeedSeoPage() {
  const href = "/seo-tools/guides/do-small-businesses-need-seo";
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
                  Do Small Businesses Need SEO?
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Do Small Businesses Need SEO?</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                When organic search matters for your category, what “need” means in practice, and how little you can start with before paid tools or agencies make sense. For foundations, read{" "}
                <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                  SEO for beginners
                </Link>
                ; for outcomes, see{" "}
                <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                  what SEO actually does for businesses
                </Link>
                . Compare stacks on{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="short-answer" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The short answer: usually yes, often lightly</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Most small businesses need SEO because buyers research on Google before they call, visit, or add to cart. You do not need a six-figure program—you need accurate listings, a crawlable site, and pages that match how people search. Ignoring that cedes demand to competitors who show up in Maps and organic results while you rely on luck and word of mouth alone.
                </p>
              </section>

              <section id="when-it-matters" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When SEO matters most for SMBs</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">High-intent local services</strong> — Emergency trades, home services, clinics, and professional services where “near me” and city modifiers drive calls.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Considered purchases</strong> — Owners compare options online even if they buy offline; you need proof pages, not just a homepage.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Seasonal or cyclical demand</strong> — Organic can smooth valleys when referrals slow; ads alone get expensive if you pause spend.
                  </li>
                </ul>
                <p className="mt-4">
                  Service companies should treat{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  as the default playbook—not optional marketing fluff.
                </p>
              </section>

              <section id="when-you-can-wait" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When you can defer heavy SEO</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  You can defer big content programs if you are capacity-constrained and already booked from a waitlist—but still protect branded search and fix indexing errors via{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>
                  . Deferring entirely while competitors capture “your city + your service” queries is how referral-heavy shops suddenly feel empty in a slow quarter.
                </p>
              </section>

              <section id="seo-vs-ads" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">SEO vs ads: need both or either?</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Ads buy immediate visibility; SEO earns placement that does not reset when you stop bidding. Small businesses with thin margins often start with Maps and on-site basics, add ads when crews have capacity, and measure both in CRM. Neither replaces the other—they answer different time horizons.
                </p>
              </section>

              <section id="minimum-viable" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Minimum viable SEO for a small business</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>Verify site ownership and fix crawl or mobile issues Search Console surfaces.</li>
                  <li>Claim GBP; align categories, services, photos, and review responses with real work.</li>
                  <li>Publish one strong page per core service (and city if you are local).</li>
                  <li>Ask for reviews on the jobs you want more of—not random five-stars with no context.</li>
                  <li>Check quarterly whether impressions and calls trend up for priority queries.</li>
                </ol>
                <p className="mt-4">
                  That baseline is what{" "}
                  <Link href="/seo-tools/guides/how-small-businesses-use-seo" className={link}>
                    how small businesses use SEO
                  </Link>{" "}
                  describes as the operating model—repeatable tasks, not a one-time launch.
                </p>
              </section>

              <section id="tools-and-help" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Tools and help: what to add when basics stall</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Add{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  when citations or Map Pack tracking block growth; add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  when keyword and competitor research outgrows free tools. Use{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  and the{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    compare hub
                  </Link>{" "}
                  so you buy for the bottleneck you actually have.
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
              <GuideSidebar title="SEO tools when you need more than free" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Do Small Businesses Need SEO? (2026) | When It Matters | BeltStack",
    description:
      "Whether SMBs need SEO, when to start light vs invest heavily, minimum viable steps, SEO vs ads, and when BrightLocal, Whitespark, or Semrush justify cost.",
    keywords: [
      "do small businesses need SEO",
      "is SEO necessary for small business",
      "small business SEO worth it",
      "local SEO for small business",
      "SEO vs Google Ads small business",
      "minimum SEO for SMB",
    ],
  };
}
