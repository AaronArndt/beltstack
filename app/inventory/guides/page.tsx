import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { INVENTORY_GUIDES } from "@/lib/data/inventoryGuides";

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

export default function InventoryGuidesPage() {
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
                    href="/inventory"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Inventory Management Software Guides
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Learn what inventory management software is, how businesses use it to track stock and orders across
              channels, and how these guides help ecommerce brands, retailers, manufacturers, and warehouses choose the
              right tools.
            </p>
            <GuideLastUpdated date="March 13, 2026" />
            <p className="mt-5 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Inventory management software replaces error-prone spreadsheets with a real-time view of what you have on
              hand, what&apos;s on order, and what&apos;s committed to customers. These guides explain how inventory
              tools work for small businesses, ecommerce, manufacturing, and warehouse operations—and how to compare
              platforms on features, integrations, and pricing. You can also explore our{" "}
              <Link
                href="/inventory"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                inventory management hub
              </Link>
              ,{" "}
              <Link
                href="/inventory/compare"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                inventory software comparisons
              </Link>
              , and{" "}
              <Link
                href="/inventory/best-inventory-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best inventory management software
              </Link>{" "}
              roundup to evaluate tools and find the best fit.
            </p>
          </div>
        </section>

        {/* ——— Inventory Guides ——— */}
        <section
          id="inventory-guides"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Educational guides on how inventory software works, who it's for, and how to choose a platform.">
              Inventory Management Guides
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INVENTORY_GUIDES.map((guide) => (
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

        {/* ——— Related Inventory Resources ——— */}
        <section
          id="related-resources"
          className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More ways to explore inventory software.">
              Related Inventory Resources
            </SectionTitle>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/inventory"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  Inventory Management Software Hub <span className="text-[#10B981]">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory/best-inventory-software"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  Best Inventory Management Software (2026) <span className="text-[#10B981]">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory/compare"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  Compare Inventory Software <span className="text-[#10B981]">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory/guides"
                  className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  Inventory Management Guides <span className="text-[#10B981]">→</span>
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
    title: "Inventory Management Software Guides | BeltStack",
    description:
      "Learn what inventory management software is, how it works for ecommerce, retail, manufacturing, and warehouses, and how to choose the right inventory tools for your business.",
  };
}

