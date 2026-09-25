import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { AFFILIATE_DISCLOSURE } from "@/lib/editorial";

export const metadata: Metadata = siteMetadata({
  path: "/about",
  title: "About BeltStack | Software Research for Small Businesses",
  description:
    "BeltStack is an independent software research and comparison site for small businesses, trades, contractors, and service operators.",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
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
                <li className="font-medium text-gray-700" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              About BeltStack
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
              BeltStack is an independent software research and comparison site. We help small businesses, trades, contractors, and local service operators shortlist tools for payroll, field service, CRM, accounting, and related operations work.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What we publish.">What BeltStack does</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E]">
              We publish reviews, roundups, side-by-side comparisons, alternatives pages, best-for guides, and category hubs so you can compare pricing, features, and workflow fit—not marketing slogans. BeltStack is the editorial publisher of this content.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Primary sources and editorial judgment.">How we research software</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E]">
              We research products using vendor pricing pages, product documentation, Help Centers, integration docs, and relevant policies, then evaluate how each tool fits practical small-business workflows. We do not assume firsthand use of every product we cover. Details are on our{" "}
              <Link href="/methodology" className={linkClass}>
                methodology
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="How the site is funded.">Independence and affiliates</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E]">{AFFILIATE_DISCLOSURE}</p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#57534E]">
              For how we rate products, handle sponsored placements, and review corrections, see{" "}
              <Link href="/methodology" className={linkClass}>
                how we review software
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Report an error or send a product update.">Corrections</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E]">
              If you spot a factual error, a pricing change, or a product update, email{" "}
              <a href="mailto:support@beltstack.com" className={linkClass}>
                support@beltstack.com
              </a>{" "}
              or use our{" "}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>
              . We review submissions against reliable sources and update pages when a correction is warranted.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Updates and editorial highlights.">Social media</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">
              Follow BeltStack on Instagram for software roundups, comparison tips, and small-business operations
              content between site updates.
            </p>
            <SocialLinks className="mt-4" />
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Start here.">Explore BeltStack</SectionTitle>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-[#57534E] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/software" className={linkClass}>
                  Software categories
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={linkClass}>
                  How we review software
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
