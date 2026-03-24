import Link from "next/link";
import { Footer } from "@/components/Footer";

const SCENARIOS = [
  {
    label: "Best inventory software for small business",
    href: "/inventory/best-for/small-business",
    description:
      "Top inventory tools for small businesses that want simple, reliable stock tracking, reordering, and reporting.",
  },
  {
    label: "Best inventory software for ecommerce",
    href: "/inventory/best-for/ecommerce",
    description:
      "Inventory platforms for ecommerce brands that need to sync stock across stores, marketplaces, and warehouses.",
  },
  {
    label: "Best inventory software for retail",
    href: "/inventory/best-for/retail",
    description:
      "Inventory tools for retailers that need to keep shelves stocked, link POS and ecommerce, and manage multiple locations.",
  },
  {
    label: "Best inventory software for manufacturing",
    href: "/inventory/best-for/manufacturing",
    description:
      "Manufacturing-focused inventory systems that connect raw materials, BOMs, work orders, and finished goods.",
  },
  {
    label: "Best inventory software for warehouses",
    href: "/inventory/best-for/warehouses",
    description:
      "Inventory and warehouse tools that support locations, scanners, and efficient picking, packing, and shipping.",
  },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function InventoryBestForIndexPage() {
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
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Inventory Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Find inventory software that fits your situation—small businesses, ecommerce brands, retailers,
              manufacturers, and warehouses.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              Inventory by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#57534E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Inventory Software by Use Case | BeltStack",
    description:
      "Browse our best inventory management software picks by use case, including small businesses, ecommerce, retail, manufacturing, and warehouses.",
  };
}

