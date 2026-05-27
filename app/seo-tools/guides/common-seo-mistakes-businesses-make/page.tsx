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
    bestFor: "Catch indexing mistakes early",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Audit duplicate and thin pages",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Fix local listing drift",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const FAQ = [
  {
    q: "What is the most common SEO mistake small businesses make?",
    a: "Treating SEO as a one-time project instead of a weekly habit. Sites launch, nobody checks Search Console for six months, and indexing or GBP issues silently cap growth while owners blame “Google changed the algorithm.”",
  },
  {
    q: "Is buying SEO tools a mistake if I do not use them?",
    a: "Yes—unused subscriptions are a top waste pattern. Tie each tool to a named weekly task or cancel. Free Search Console plus disciplined GBP work beats an enterprise suite nobody opens.",
  },
  {
    q: "Are duplicate city pages bad for SEO?",
    a: "Pages that swap only the city name with no unique proof, photos, or FAQs usually hurt more than they help. Google treats them as thin duplicates; customers notice the template too.",
  },
  {
    q: "Should I keyword-stuff my Google Business Profile name?",
    a: "No. Adding services or cities to your business name violates GBP guidelines and risks suspension. Put keywords in services, descriptions, and website pages—not the legal name field.",
  },
  {
    q: "How do I know if my agency is making mistakes?",
    a: "Verify you own Search Console, demand reproducible issue lists with URLs, and compare reported rankings to manual checks in your top ZIPs. Rank PDFs without indexing or lead context are a red flag.",
  },
  {
    q: "When should I pause SEO and fix fundamentals first?",
    a: "When money pages are not indexed, HTTPS is broken, or GBP shows the wrong phone number. Run technical SEO audit basics before you publish another blog post.",
  },
  {
    q: "Can I recover from SEO mistakes quickly?",
    a: "Technical and listing fixes can show indexing gains in weeks. Trust damage from spammy links or guideline violations takes longer. Consistent weekly corrections beat annual panic overhauls.",
  },
];

export default function CommonSeoMistakesBusinessesMakePage() {
  const href = "/seo-tools/guides/common-seo-mistakes-businesses-make";
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
                  Common SEO Mistakes Businesses Make
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Common SEO Mistakes Businesses Make</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Recurring errors that cap organic growth—indexing neglect, GBP drift, thin location pages, tool shelfware, and measuring rankings instead of booked work. Fix fundamentals with{" "}
                <Link href="/seo-tools/guides/how-to-set-up-seo-for-a-small-business" className={link}>
                  how to set up SEO for a small business
                </Link>{" "}
                and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                roundup when you are ready to add software.
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="set-and-forget" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Treating SEO as launch-and-forget</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Many owners pay for a site rebuild, tick “SEO” off the list, and wonder why leads flatline. Search algorithms, competitors, and your own catalog change constantly. Without a weekly Search Console check and monthly content or listing touch, decay is the default state.
                </p>
                <p className="mt-4">
                  Adopt the cadence from{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>
                  : small shipped improvements beat annual “SEO projects” that never connect to CRM outcomes.
                </p>
              </section>

              <section id="indexing-blindness" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Ignoring indexing and technical health</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Publishing new service pages while old templates carry accidental noindex tags is more common than teams admit—especially after CMS migrations or agency handoffs.{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  coverage reports should be the first screen you open when traffic dips, not the last.
                </p>
                <p className="mt-4">
                  Walk through{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics for small business
                  </Link>{" "}
                  before you blame content quality. Add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>{" "}
                  crawls when URL count exceeds manual spot checks.
                </p>
              </section>

              <section id="local-mismatch" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">GBP, website, and citations that disagree</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Different phone numbers on GBP, the website footer, and Yelp; service areas that promise counties you do not dispatch to; categories copied from a competitor without matching licenses—these mistakes erode trust with Google and with callers who get voicemail chaos.
                </p>
                <p className="mt-4">
                  Align listings using{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>
                  . Use{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  when citation drift spans many directories—compare{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  for workflow fit.
                </p>
              </section>

              <section id="thin-pages" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Thin and duplicate location content</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Auto-generating “Plumber in [City]” pages for every town in a 100-mile radius feels productive but often produces duplicates with no photos, reviews, or local proof. Google demotes the cluster; humans bounce when the page could apply anywhere.
                </p>
                <p className="mt-4">
                  Publish where you have real jobs, unique FAQs, and dispatch capacity. Follow{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  for structure without template spam.
                </p>
              </section>

              <section id="tool-mistakes" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Tool mistakes: overlap, shelfware, and score chasing</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Paying for Semrush and Ahrefs simultaneously without distinct owners, buying enterprise crawl tiers for eight-page sites, or obsessing over a green audit score while money URLs stay excluded from the index—these patterns burn budget without shipping fixes.
                </p>
                <p className="mt-4">
                  Read{" "}
                  <Link href="/seo-tools/guides/free-vs-paid-seo-tools" className={link}>
                    free vs paid SEO tools
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  before you stack subscriptions. One primary suite plus a local specialist usually beats three overlapping logins.
                </p>
              </section>

              <section id="measurement" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measuring rankings instead of revenue</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Rank trackers are leading indicators; they are not the business outcome. Teams celebrate moving from position nine to six while call volume flatlines because the page does not convert or the phone routes to a full mailbox.
                </p>
                <p className="mt-4">
                  Tag organic and Maps leads in{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>
                  , track landing pages in Search Console, and review GBP call and direction actions monthly. Pair with{" "}
                  <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                    what SEO actually does for businesses
                  </Link>{" "}
                  to keep stakeholders focused on discovery that books work.
                </p>
              </section>

              <section id="recovery" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">A practical recovery order</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>Verify Search Console ownership and fix indexing blockers on top service URLs.</li>
                  <li>Reconcile GBP, website NAP, and top citations to one phone and service area story.</li>
                  <li>Consolidate or improve thin location pages—quality over count.</li>
                  <li>Assign one weekly SEO owner and one tool subscription with a defined checklist.</li>
                  <li>Report leads and jobs, not only keyword positions.</li>
                </ol>
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
              <GuideSidebar title="SEO tools to avoid mistakes" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Common SEO Mistakes Businesses Make (2026) | Fixes & Prevention | BeltStack",
    description:
      "Frequent SEO errors for SMBs—indexing neglect, GBP drift, thin city pages, tool overlap, and bad measurement—with recovery order and Search Console, Semrush, BrightLocal fixes.",
  };
}
