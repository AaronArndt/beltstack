import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { POS_GUIDES } from "@/lib/data/posGuides";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type GuideCardProps = { title: string; href: string; description: string };

function GuideCard({ title, href, description }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
    >
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
        Read guide →
      </span>
    </Link>
  );
}

export default function PosGuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— Hero ——— */}
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
                <li>
                  <Link
                    href="/pos"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    POS Software
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              POS Software Guides
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              These guides help businesses understand POS systems, compare options, and choose the right system for
              retail stores, restaurants, ecommerce, and multi-location operations.
            </p>
            <GuideLastUpdated date="March 13, 2026" />
            <p className="mt-5 text-[#57534E] text-base leading-relaxed max-w-3xl">
              A point-of-sale system is where sales happen—whether at a register, on a tablet, or online. These guides
              explain how POS software works, how it differs from payment processors, and how to evaluate features,
              pricing, and integrations. You can also explore our{" "}
              <Link
                href="/pos"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                POS software hub
              </Link>
              ,{" "}
              <Link
                href="/pos/compare"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                POS software comparisons
              </Link>
              , and{" "}
              <Link
                href="/pos/best-pos-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best POS software
              </Link>{" "}
              roundup to evaluate tools and find the best fit.
            </p>
          </div>
        </section>

        {/* ——— POS Guides ——— */}
        <section
          id="pos-guides"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Educational guides on how POS software works, who it's for, and how to choose a system.">
              POS Software Guides
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {POS_GUIDES.map((guide) => (
                <GuideCard
                  key={guide.href}
                  title={guide.title}
                  href={guide.href}
                  description={guide.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— Related POS Resources ——— */}
        <section
          id="related-resources"
          className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More ways to explore POS software.">
              Related POS Resources
            </SectionTitle>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/pos"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  POS Software Hub <span className="text-[#10B981]">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pos/best-pos-software"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  Best POS Software (2026) <span className="text-[#10B981]">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pos/compare"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  Compare POS Software <span className="text-[#10B981]">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pos/guides"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  POS Software Guides <span className="text-[#10B981]">→</span>
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

export function generateMetadata() {
  return {
    title: "POS Software Guides | BeltStack",
    description:
      "Learn how POS systems work for retail, restaurants, and ecommerce. Guides on choosing a POS, pricing, integrations, and comparing top platforms.",
  };
}
