import Link from "next/link";
import { Footer } from "@/components/Footer";

const SCENARIOS = [
  {
    label: "Best POS software for small business",
    href: "/pos/best-for/small-business",
    description:
      "Top POS systems for small businesses that want simple setup, transparent pricing, and integrated payments without long-term contracts.",
  },
  {
    label: "Best POS software for retail",
    href: "/pos/best-for/retail",
    description:
      "POS tools for retailers that need inventory management, reporting, and multi-location support to keep shelves stocked and understand what sells.",
  },
  {
    label: "Best POS software for restaurants",
    href: "/pos/best-for/restaurants",
    description:
      "Restaurant POS systems with table management, kitchen display, online ordering, and reporting built for food service.",
  },
  {
    label: "Best POS software for ecommerce",
    href: "/pos/best-for/ecommerce",
    description:
      "POS that unifies online and in-store sales so inventory and orders stay in sync across your storefront and register.",
  },
  {
    label: "Best POS software for multi-location",
    href: "/pos/best-for/multi-location",
    description:
      "POS systems that support multiple stores with centralized or per-location inventory and consolidated reporting.",
  },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function PosBestForIndexPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
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
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best POS Software by Use Case
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Find POS software that fits your situation—small businesses, retail stores, restaurants,
              ecommerce sellers, and multi-location operations. See our{" "}
              <Link
                href="/pos/best-pos-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best POS software
              </Link>{" "}
              roundup for top picks and our{" "}
              <Link
                href="/pos/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                POS guides
              </Link>{" "}
              for how to choose and use tools.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              POS by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed">{item.description}</p>
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
    title: "Best POS Software by Use Case | BeltStack",
    description:
      "Browse our best POS software picks by use case, including small business, retail, restaurants, ecommerce, and multi-location.",
  };
}
