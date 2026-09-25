import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { AFFILIATE_DISCLOSURE } from "@/lib/editorial";

export const metadata: Metadata = siteMetadata({
  path: "/methodology",
  title: `How BeltStack Reviews Software (${SEO_YEAR}) | Methodology`,
  description:
    "How BeltStack researches software for small businesses: primary sources, editorial ratings, affiliate policy, AI use, and how to submit corrections.",
});

const linkClass =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  How We Review Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              How We Review Software
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              BeltStack publishes independent software reviews, comparisons, and recommendations for small businesses, trades, contractors, and service operators. This page explains how we research products, what ratings mean, how we handle affiliate links, and how to send a correction.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Primary sources first.">How BeltStack researches software</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We research products using official vendor materials whenever they are available: pricing pages, product documentation, Help Centers, integration directories, and terms or policies that affect billing, contracts, or support. Secondary sources can add context; they do not replace primary documentation when that documentation exists.
            </p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We compare products around practical small-business workflows, note where similar tools solve different problems, and flag uncertainty when public information is incomplete. We distinguish documented facts from BeltStack editorial judgment.
            </p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We do not assume firsthand use of every product we cover. When firsthand product experience informs an article, we identify it.
            </p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              For advertised list prices versus the cost of a frozen small-team workflow, see the{" "}
              <Link href="/research/service-business-software-pricing" className={linkClass}>
                2026 advertised vs usable pricing study
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Six dimensions we use to evaluate products.">How BeltStack evaluates software</SectionTitle>
            <ul className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Pricing and value</strong> — Published pricing, add-ons, and whether cost is predictable for a typical small-business buyer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Features and capabilities</strong> — What the product actually does for the jobs you need done, not a marketing feature list.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Ease of adoption and administration</strong> — Setup, day-to-day usability, permissions, and whether a small team can run it without a dedicated admin. We score administration reality, not marketing claims about a “simple UI.”</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Support and documentation</strong> — Help Center quality, support channels, and whether help is gated by plan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Integrations and ecosystem</strong> — Connections to accounting, CRM, scheduling, payments, and other tools operators already use.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Business and workflow fit</strong> — How well the product matches the audience on the page—trades, service businesses, SMBs, or a specific scenario.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Editorial scores, not customer averages.">BeltStack ratings</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              BeltStack ratings are editorial evaluations. They summarize our assessment of a product; they are not averages of G2, Capterra, Trustpilot, or other user-review sites. A rating is related to our recommendations, but it is not the same thing as a ranking.
            </p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Standardized ratings use BeltStack Scoring Methodology v1.0: six equally weighted dimensions on a half-point scale (1.0–5.0). The overall score is the mean of those six numbers, rounded to one decimal place. There is no hidden weighting.
            </p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Standardized scores are attached as products are substantively re-reviewed against documented evidence—pricing pages, product catalogs, support matrices, and similar primary sources. Until a product is re-reviewed, its published score remains BeltStack’s current editorial rating. Incomplete evidence can delay a standardized score; we do not invent one to fill a gap.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Fit can outweigh a higher number.">Recommendations and rankings</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              “Best overall,” “best for,” and similar picks are BeltStack editorial selections. The highest numerical rating does not automatically win. A simpler or lower-priced product can be the better recommendation for a specific workflow, team size, or budget. Rankings consider pricing and value, relevant features, ease of adoption, support, integrations, and fit for the audience on the page.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Documentation-based research is the default.">Firsthand experience</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Most BeltStack coverage is based on documented product information and editorial evaluation of workflow fit. That is not the same as BeltStack personally using or running a trial of every product. When firsthand use informs a page, we say so. We do not imply hands-on testing otherwise.
            </p>
          </div>
        </section>

        <section
          id="editorial-independence"
          className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Money does not buy a better score.">Affiliate relationships</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">{AFFILIATE_DISCLOSURE}</p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Affiliate relationships do not determine ratings, rankings, best-overall or best-for selections, or comparison conclusions. If BeltStack uses sponsored or promotional placements, those will be labeled and kept separate from editorial recommendations. They will not change editorial scores.
            </p>
          </div>
        </section>

        <section
          id="affiliate-disclosure"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="How we may earn from links.">Affiliate disclosure</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">{AFFILIATE_DISCLOSURE}</p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Some outbound product links may be affiliate links. You do not pay extra when you use them.
            </p>
          </div>
        </section>

        <section
          id="ai-assisted-editorial-work"
          className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="AI can help the process; sources still decide the facts.">AI-assisted editorial work</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              AI tools may assist with organizing research, analyzing information, drafting, editing, and maintaining structured content. Factual claims about pricing, product capabilities, contracts, policies, integrations, and material product differences are checked against reliable sources, prioritizing official vendor documentation where it is available.
            </p>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Editorial recommendations remain BeltStack judgments. AI assistance does not make every sentence error-free, and it is not a substitute for the primary sources we rely on.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Dates should match real review work.">Freshness</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Software pricing and features change. BeltStack revisits important pages over time. When a page shows an editorial date such as last reviewed or pricing checked, that date should correspond to actual review of that information—not a calendar rollover. Always confirm time-sensitive pricing and terms on the vendor’s site before you buy.
            </p>
          </div>
        </section>

        <section
          id="corrections"
          className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="How to report an error or product update.">Corrections</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Readers and vendors can email{" "}
              <a href="mailto:support@beltstack.com" className={linkClass}>
                support@beltstack.com
              </a>{" "}
              with factual corrections, clarifications, pricing changes, or product updates. Include a supporting source when you can. BeltStack reviews submissions against reliable sources and prefers official vendor documentation. We update pages when a correction is warranted. We do not automatically accept every requested change. See{" "}
              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
