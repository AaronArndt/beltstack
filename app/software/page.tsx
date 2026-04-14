import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import {
  SOFTWARE_DIRECTORY_CATEGORY_GROUPS,
  SOFTWARE_DIRECTORY_EDITORIAL_TIPS,
  SOFTWARE_DIRECTORY_POPULAR_CATEGORIES,
  SOFTWARE_DIRECTORY_QUICK_JUMPS,
  SOFTWARE_DIRECTORY_TRADE_HUBS,
} from "@/lib/data/softwareDirectoryPage";

export const metadata: Metadata = siteMetadata({
  path: "/software",
  title: "Business Software Categories & Trade Hubs (2026) | BeltStack",
  description:
    "Browse software categories for small businesses and trades. Compare top picks, reviews, alternatives, and trade hubs—payroll, CRM, field service, and more.",
});

const sectionTitleClass = "text-[#1A2D48] text-2xl font-bold sm:text-3xl";
const sectionSubClass = "mt-1 text-[#57534E] text-sm sm:text-base";
const primaryLinkClass =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className={sectionTitleClass}>{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className={sectionSubClass}>{sub}</p>}
    </div>
  );
}

export default function SoftwareDirectoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="border-b border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <h1 className="max-w-3xl text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Find the right software for your business
            </h1>
            <p className="mt-3 max-w-3xl text-[#57534E] text-base leading-relaxed">
              Browse BeltStack software categories by workflow, or start from your trade to find a stack that fits how your team actually operates.
              Use this page to navigate category hubs, best-of lists, and key comparisons without the clutter of a giant directory.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {SOFTWARE_DIRECTORY_QUICK_JUMPS.map((jump) => (
                <a
                  key={jump.href}
                  href={jump.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {jump.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="popular-categories" className="border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="The most-used BeltStack category hubs for research and shortlist building.">
              Popular software categories
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SOFTWARE_DIRECTORY_POPULAR_CATEGORIES.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#10B981]/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] text-lg font-bold group-hover:text-[#10B981]">{category.name}</h3>
                  <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">{category.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                    Explore category →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="browse-by-category" className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Curated category groups to help you navigate by workflow without overload.">
              Browse by category group
            </SectionTitle>
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {SOFTWARE_DIRECTORY_CATEGORY_GROUPS.map((group) => (
                <section key={group.title} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                  <h3 className="text-[#1A2D48] text-lg font-bold">{group.title}</h3>
                  <ul className="mt-3 space-y-3">
                    {group.categories.map((category) => (
                      <li key={`${group.title}-${category.href}`}>
                        <Link href={category.href} className={primaryLinkClass}>
                          {category.name}
                        </Link>
                        {category.secondaryLinks && category.secondaryLinks.length > 0 && (
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                            {category.secondaryLinks.map((secondary) => (
                              <Link key={secondary.href} href={secondary.href} className="text-[#57534E] hover:text-[#1A2D48] hover:underline">
                                {secondary.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="browse-by-trade" className="border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Navigate software from an industry perspective with BeltStack trade hubs.">
              Browse by trade or industry
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SOFTWARE_DIRECTORY_TRADE_HUBS.map((trade) => (
                <Link
                  key={trade.href}
                  href={trade.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#10B981]/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] text-lg font-bold group-hover:text-[#10B981]">{trade.name}</h3>
                  <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">{trade.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                    View trade hub →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-choose-software" className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="A quick framework to narrow your options before you start demo calls.">
              How to choose business software
            </SectionTitle>
            <p className="max-w-3xl text-[#57534E] text-sm leading-relaxed sm:text-base">
              The right category choice usually matters more than the right vendor choice at the start. Use these steps to identify what to evaluate first.
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {SOFTWARE_DIRECTORY_EDITORIAL_TIPS.map((tip) => (
                <article key={tip.title} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                  <h3 className="text-[#1A2D48] text-base font-bold">{tip.title}</h3>
                  <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
