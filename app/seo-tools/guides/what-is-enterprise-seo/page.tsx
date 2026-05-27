import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: "4.6", bestFor: "Enterprise-scale research and audits", reviewHref: getSeoToolsReviewUrl("semrush") },
  { name: "Ahrefs", logoSrc: "/Logos/ahrefs.jpeg", rating: "4.6", bestFor: "Large-site crawl and link intelligence", reviewHref: getSeoToolsReviewUrl("ahrefs") },
  { name: "BrightLocal", logoSrc: "/Logos/brightlocal.jpeg", rating: "4.5", bestFor: "Multi-location local programs", reviewHref: getSeoToolsReviewUrl("brightlocal") },
];

const FAQ = [
  {
    q: "What is enterprise SEO?",
    a: "SEO at scale for large sites, many brands, or global markets—governed workflows, technical platforms, content operations, and reporting that coordinate dozens or hundreds of stakeholders. It is as much program management as keyword tactics.",
  },
  {
    q: "How is enterprise SEO different from SMB SEO?",
    a: "SMB SEO is often owner-led with a handful of money pages and one GBP. Enterprise SEO deals with crawl budget, faceted navigation, hreflang, template governance, legal review, and tool seats for multiple teams.",
  },
  {
    q: "Do small businesses need enterprise SEO tools?",
    a: "Usually no. Semrush and Ahrefs mid tiers cover most SMB needs. Enterprise contracts make sense when you exceed user limits, need API access, or manage thousands of URLs and locations.",
  },
  {
    q: "What tools do enterprise SEO teams use?",
    a: "Often a stack: enterprise Semrush or Ahrefs, dedicated crawlers, analytics, CDPs, and local platforms like BrightLocal for franchise location programs. Compare Semrush vs Ahrefs at contract scale.",
  },
  {
    q: "Is enterprise SEO the same as technical SEO?",
    a: "Technical SEO is one pillar. Enterprise programs also own content governance, international SEO, local store locators, and executive reporting—not only crawl errors.",
  },
  {
    q: "When should a growing SMB think about enterprise patterns?",
    a: "When you add many locations, acquire brands, or migrate platforms and need redirect governance, staging reviews, and role-based workflows before URL count and team size force reactive firefighting.",
  },
  {
    q: "How does enterprise SEO relate to local SEO at scale?",
    a: "Franchise and multi-location brands run local SEO playbooks per market inside an enterprise program—store locators, bulk GBP management, and citation APIs. Read what is local SEO for the local pillar definition.",
  },
];

export default function WhatIsEnterpriseSeoPage() {
  const href = "/seo-tools/guides/what-is-enterprise-seo";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">SEO Tools</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">What Is Enterprise SEO?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Enterprise SEO?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How large organizations run search as a coordinated program—technical scale, content governance, local footprints, and tooling beyond what a single-location SMB typically needs.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
                  <section id="definition" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Enterprise SEO is a program, not a project</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Enterprise SEO coordinates search visibility across large websites, multiple brands, countries, or franchise networks. Success depends on workflows—who owns templates, how releases are reviewed, how redirects are governed, and how executives see revenue impact—not on one consultant optimizing ten pages.
                    </p>
                    <p className="mt-4">
                      If you run a single-location service company, start with{" "}
                      <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                        SEO for beginners
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/how-small-businesses-use-seo" className={link}>
                        how small businesses use SEO
                      </Link>
                      . This guide explains the enterprise layer for context and scaling decisions.
                    </p>
                  </section>

                  <section id="pillars" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Pillars at enterprise scale</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li><strong className="text-[#1A2D48]">Technical platform</strong> — Crawl budget, JavaScript rendering, staging, hreflang, faceted navigation.</li>
                      <li><strong className="text-[#1A2D48]">Content operations</strong> — Templates, legal review, translation, and internal linking standards.</li>
                      <li><strong className="text-[#1A2D48]">Authority and PR</strong> — Link programs with brand and compliance guardrails.</li>
                      <li><strong className="text-[#1A2D48]">Local at scale</strong> — Store locators, bulk GBP, citation APIs for franchises.</li>
                      <li><strong className="text-[#1A2D48]">Measurement</strong> — Dashboards tying search to pipeline, not only rankings.</li>
                    </ul>
                  </section>

                  <section id="technical" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Technical complexity SMB guides skip</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Enterprise sites fight index bloat, parameter URLs, and migration risk. Technical SEO explained covers concepts; enterprise teams add release checklists and automated monitoring. Read{" "}
                      <Link href="/seo-tools/guides/how-technical-seo-tools-work" className={link}>
                        how technical SEO tools work
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/how-businesses-audit-their-seo" className={link}>
                        how businesses audit their SEO
                      </Link>{" "}
                      for audit mechanics that scale up with headcount.
                    </p>
                  </section>

                  <section id="tools" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Tooling and seat economics</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Enterprise contracts for{" "}
                      <Link href={getSeoToolsReviewUrl("semrush")} className={link}>Semrush</Link>{" "}
                      or{" "}
                      <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>Ahrefs</Link>{" "}
                      (<Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>compare</Link>) often include API access, higher crawl limits, and role-based accounts. Local footprint programs may add{" "}
                      <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>BrightLocal</Link>{" "}
                      at scale. Budget using{" "}
                      <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                        how to budget for SEO tools and subscriptions
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/how-much-seo-software-costs" className={link}>
                        how much SEO software costs
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="org" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Organization and governance</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Enterprise SEO usually spans marketing, product, engineering, and legal. RACI clarity prevents shipping noindexed production pages or duplicate meta templates across regions. Reporting should connect to{" "}
                      <Link href="/seo-tools/guides/how-businesses-measure-seo-roi" className={link}>
                        how businesses measure SEO ROI
                      </Link>{" "}
                      and{" "}
                      <Link href="/seo-tools/guides/how-seo-reporting-software-works" className={link}>
                        how SEO reporting software works
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="when-not" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">When enterprise thinking is premature</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      A ten-page contractor site does not need hreflang governance. Buying enterprise crawl quotas before GBP and service pages are solid is shelfware. Scale process when URL count, locations, or team size create real coordination cost—not because enterprise sounds more professional.
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
              <GuideSidebar title="Enterprise SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Is Enterprise SEO? (2026) | Scale, Tools & Governance | BeltStack",
    description:
      "Enterprise SEO explained—program pillars, technical scale, tooling, governance, local at scale, and when SMBs should not overbuy.",
    keywords: ["enterprise SEO", "enterprise SEO program", "large site SEO", "franchise SEO", "SEO governance"],
  };
}
