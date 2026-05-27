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
    q: "Is AI replacing SEO?",
    a: "No—it is reshaping how search results look and how teams produce content. Google still crawls, indexes, and ranks pages. Businesses that keep technical health, local proof, and genuine expertise win; thin AI pages without real-world authority still struggle.",
  },
  {
    q: "Should I use AI to write all my SEO content?",
    a: "Use AI for outlines, drafts, and internal summaries—not as a substitute for verified service details, local proof, and original photos. Publish only what you would stand behind with a customer on the phone. Overlap with competitors who run the same prompts hurts differentiation.",
  },
  {
    q: "How does AI Overviews affect click-through rates?",
    a: "Some informational queries send fewer clicks to traditional blue links because Google summarizes answers on the SERP. Transactional and local intent—emergency plumber, HVAC repair near me—still drives calls and Maps actions. Measure impressions and clicks in Search Console, not assumptions from headlines.",
  },
  {
    q: "Do SEO tools use AI now?",
    a: "Yes. Semrush, Ahrefs, and others embed AI for briefs, audits, and content suggestions. Tools accelerate research; they do not replace Search Console, GBP hygiene, or citation accuracy. Compare options on the SEO tools compare hub before you pay for AI add-ons you will not use.",
  },
  {
    q: "Is local SEO safer from AI disruption?",
    a: "Mostly. Proximity, reviews, GBP activity, and service-area relevance still matter for Map Pack and localized organic results. Read local SEO for service businesses for the operating system that AI summaries have not replaced.",
  },
  {
    q: "What should SMBs prioritize in an AI-heavy SERP?",
    a: "Fix indexing, strengthen money pages with real proof, keep GBP active, and measure leads in CRM. Double down on intent where customers still click—local services, comparisons, and pages that require trust signals AI cannot fabricate.",
  },
  {
    q: "Can AI help with SEO reporting?",
    a: "It can summarize Search Console exports and draft client narratives, but ground truth still comes from Google data and your pipeline. See is Google Analytics an SEO tool for what on-site analytics adds—and what it cannot infer about rankings.",
  },
];

export default function HowAiIsChangingSeoPage() {
  const href = "/seo-tools/guides/how-ai-is-changing-seo";
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
                  How AI Is Changing SEO
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How AI Is Changing SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                What AI search features and generative workflows mean for SMBs—not hype, but what to keep doing. Ground strategy in{" "}
                <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                  what SEO actually does for businesses
                </Link>
                , then pick tools from the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>{" "}
                that match how you actually execute.
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="serp-shifts" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">How AI is changing the SERP—not the crawl</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Google still discovers pages through links and sitemaps, evaluates relevance and quality, and chooses what to show. What changed is presentation: AI-generated summaries, richer snippets, and more zero-click answers on informational queries. Your site can rank while earning fewer visits on some topics—that is a measurement problem as much as a ranking problem.
                </p>
                <p className="mt-4">
                  Use{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  to watch impressions, clicks, and average position together. A stable rank with falling CTR may mean SERP layout shifted, not that your SEO program failed.
                </p>
              </section>

              <section id="content-production" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">AI in content production: speed vs differentiation</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Teams use AI to draft outlines, meta descriptions, FAQ blocks, and internal link suggestions. The risk is sameness: ten competitors publishing interchangeable &quot;ultimate guides&quot; without local photos, licensing details, or job-site proof. AI should compress labor on structure; humans still supply what Google and customers use to trust a business.
                </p>
                <p className="mt-4">
                  For keyword and gap research,{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  and similar suites now bundle AI briefs—evaluate them on the{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tools compare hub
                  </Link>{" "}
                  against whether you will actually publish what they suggest.
                </p>
              </section>

              <section id="local-durability" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Why local and service SEO remain durable</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  When a pipe bursts, customers still search with urgency and choose based on proximity, reviews, and response time—not a paragraph summary. Map Pack, call buttons, and localized service pages retain strong commercial intent. Follow{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  for GBP, citations, and site alignment that AI summaries have not replaced.
                </p>
                <p className="mt-4">
                  Tools like{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  still matter for grid tracking and citation hygiene—see{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  when local visibility is your bottleneck.
                </p>
              </section>

              <section id="measurement" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measure leads, not AI anxiety</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  AI chatter pushes teams toward vanity metrics. Keep the stack practical: Search Console for search performance, on-site analytics for behavior—read{" "}
                  <Link href="/seo-tools/guides/is-google-analytics-an-seo-tool" className={link}>
                    is Google Analytics an SEO tool
                  </Link>{" "}
                  for limits—and{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  for whether organic produces booked work. Compare channel economics with{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>{" "}
                  when AI-driven CTR drops tempt you to abandon SEO entirely.
                </p>
              </section>

              <section id="workflow" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">A sane AI-augmented SEO workflow for SMBs</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Monthly rhythm that uses AI without outsourcing judgment:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Diagnose</strong> — Export Search Console queries; let AI cluster themes, but you decide which pages map to revenue.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Draft</strong> — AI outlines service or area pages; you add pricing signals, licensing, photos, and FAQs from real jobs.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Ship local proof</strong> — GBP posts, review responses, and citation checks stay manual or tool-assisted—not fully automated.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Review pipeline</strong> — Tag organic leads in CRM; pause content themes that rank but never convert.
                  </li>
                </ul>
              </section>

              <section id="what-not-to-do" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What not to do when AI hype spikes</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Do not flood your site with undifferentiated AI pages, ignore indexing errors because &quot;SEO is dead,&quot; or buy three overlapping AI writing subscriptions. Do not abandon organic for paid without tagging—many local businesses still win on Maps and service pages while competitors chase generic content volume.
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
              <GuideSidebar title="SEO tools in an AI SERP" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How AI Is Changing SEO (2026) | SERP Shifts & SMB Strategy | BeltStack",
    description:
      "How AI Overviews and generative workflows change SEO for SMBs—what still works for local and service businesses, sane AI content use, measurement, and when BrightLocal, Whitespark, or Semrush fit.",
    keywords: [
      "AI and SEO",
      "how AI is changing SEO",
      "AI Overviews SEO impact",
      "AI content for SEO",
      "local SEO and AI",
      "SEO strategy 2026",
    ],
  };
}
