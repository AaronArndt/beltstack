import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/methodology",
  title: `How BeltStack Reviews Software (${SEO_YEAR}) | Methodology`,
  description:
    "Learn how BeltStack evaluates software for small businesses, what we compare (pricing, features, pros and cons), and how we stay editorially independent.",
});

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
        {/* ——— Hero ——— */}
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
              BeltStack provides independent software reviews and comparisons for trade businesses and contractors. This page explains how we evaluate products, score features, and keep our recommendations unbiased.
            </p>
          </div>
        </section>

        {/* ——— How we score products ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Consistent criteria across all our reviews.">
              How we score products
            </SectionTitle>
            <ul className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Pricing</strong> — We compare published pricing, base and per-person fees, add-ons, and hidden costs so you can budget accurately.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Features</strong> — We evaluate payroll automation, tax handling, contractor support, integrations, and HR tools that matter to small businesses and trade teams.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Ease of use</strong> — Setup, day-to-day use, and clarity of the interface. We favor tools that get you running without lengthy implementation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Support</strong> — Availability of help (phone, chat, email), quality of documentation, and whether support is included or gated by plan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold shrink-0" aria-hidden>•</span>
                <span><strong className="text-[#1A2D48]">Contractor fit</strong> — For payroll and trade-focused content, we weigh 1099 support, job-costing integration, multi-state compliance, and workflows that match how contractors actually work.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ——— Editorial independence ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Our recommendations are our own.">
              Editorial independence
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We test and research software independently. Our ratings and “best for” recommendations are based on our evaluation criteria, not on partnerships or paid placement. Vendors do not pay for inclusion in our roundups or for favorable scores. When we recommend a product, it’s because we believe it fits the use case we describe.
            </p>
          </div>
        </section>

        {/* ——— Affiliate disclosure ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="How we may earn from links.">
              Affiliate disclosure
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We may earn a commission when you purchase or sign up through links on our site. This does not change how we score or recommend software. We do not allow affiliate relationships to influence which products we cover or how we rank them. Our goal is to help you choose the right tool for your business.
            </p>
          </div>
        </section>

        {/* ——— Update cadence ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Keeping our reviews current.">
              Update cadence and freshness
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We review and update our content on a regular cadence. Pricing, features, and product names are checked so you get current information. Major product or pricing changes may prompt an earlier update. We date our roundups and key pages so you can see when they were last refreshed.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
