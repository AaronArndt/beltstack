import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getPayrollBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best payroll software overall",
    href: "/payroll/best-payroll-software",
    description: "Our full rankings of the best payroll software for small businesses, contractors, and growing companies.",
  },
  {
    label: "Best payroll for small business",
    href: getPayrollBestForUrl("small-business"),
    description: "Payroll that scales with your team—compliance, benefits, and reporting without enterprise complexity.",
  },
  {
    label: "Best payroll for contractors",
    href: getPayrollBestForUrl("contractors"),
    description: "Payroll and contractor management for trade and field teams.",
  },
  {
    label: "Best payroll for 1099 contractors",
    href: getPayrollBestForUrl("1099-contractors"),
    description: "Handle 1099s, contractor payments, and compliance for gig and contract workers.",
  },
  {
    label: "Best payroll for hourly employees",
    href: getPayrollBestForUrl("hourly-employees"),
    description: "Time tracking, overtime, and hourly pay for shift-based and hourly workers.",
  },
  {
    label: "Best payroll for growing businesses",
    href: getPayrollBestForUrl("growing-businesses"),
    description: "Payroll that grows with you as you add states, employees, and benefits.",
  },
  {
    label: "Best payroll for landscaping",
    href: getPayrollBestForUrl("landscaping"),
    description: "Payroll for landscaping and lawn care companies with seasonal and crew needs.",
  },
  {
    label: "Best payroll for plumbing",
    href: getPayrollBestForUrl("plumbing"),
    description: "Payroll for plumbing businesses and trade contractors.",
  },
  {
    label: "Best payroll for HVAC",
    href: getPayrollBestForUrl("hvac"),
    description: "Payroll for HVAC and climate control contractors and technicians.",
  },
  {
    label: "Best payroll for cleaning business",
    href: getPayrollBestForUrl("cleaning-business"),
    description: "Payroll for cleaning and janitorial companies with multiple sites and crews.",
  },
  {
    label: "Best payroll for painters",
    href: getPayrollBestForUrl("painters"),
    description: "Payroll for painting contractors and crews.",
  },
  {
    label: "Best payroll for pest control",
    href: getPayrollBestForUrl("pest-control"),
    description: "Payroll for pest control and extermination companies.",
  },
  {
    label: "Best payroll for lawn care",
    href: getPayrollBestForUrl("lawn-care"),
    description: "Payroll for lawn care and grounds maintenance businesses.",
  },
  {
    label: "Best payroll for tree service",
    href: getPayrollBestForUrl("tree-service"),
    description: "Payroll for arborists and tree care companies.",
  },
  {
    label: "Best payroll for remodeling contractors",
    href: getPayrollBestForUrl("remodeling-contractors"),
    description: "Payroll for remodeling and renovation contractors.",
  },
  {
    label: "Best payroll for general contractors",
    href: getPayrollBestForUrl("general-contractors"),
    description: "Payroll for general contractors and construction management.",
  },
  {
    label: "Best payroll for handyman business",
    href: getPayrollBestForUrl("handyman-business"),
    description: "Payroll for handyman and home repair businesses.",
  },
  {
    label: "Best payroll for construction",
    href: getPayrollBestForUrl("construction"),
    description: "Payroll for construction companies and trade crews.",
  },
  {
    label: "Best payroll for roofing",
    href: getPayrollBestForUrl("roofing"),
    description: "Payroll for roofing contractors and crews.",
  },
  {
    label: "Best payroll for electricians",
    href: getPayrollBestForUrl("electricians"),
    description: "Payroll for electrical contractors and technicians.",
  },
  {
    label: "Best payroll for pool service",
    href: getPayrollBestForUrl("pool-service"),
    description: "Payroll for pool cleaning and pool service companies.",
  },
  {
    label: "Best payroll for home services",
    href: getPayrollBestForUrl("home-services"),
    description: "Payroll for home service companies across trades.",
  },
  {
    label: "Best payroll for property management",
    href: getPayrollBestForUrl("property-management"),
    description: "Payroll for property management and real estate operations.",
  },
  {
    label: "Best payroll for maintenance companies",
    href: getPayrollBestForUrl("maintenance-companies"),
    description: "Payroll for maintenance and facilities companies.",
  },
  {
    label: "Best payroll for auto repair",
    href: getPayrollBestForUrl("auto-repair"),
    description: "Payroll for auto repair shops and mechanics.",
  },
  {
    label: "Best payroll for restaurants",
    href: getPayrollBestForUrl("restaurants"),
    description: "Payroll for restaurants, tips, and hospitality.",
  },
  {
    label: "Best payroll for retail",
    href: getPayrollBestForUrl("retail"),
    description: "Payroll for retail stores and multi-location retail.",
  },
  {
    label: "Best payroll for agriculture",
    href: getPayrollBestForUrl("agriculture"),
    description: "Payroll for farms, ranches, and agricultural workers.",
  },
  {
    label: "Best payroll for nonprofits",
    href: getPayrollBestForUrl("nonprofits"),
    description: "Payroll for nonprofits with compliance and reporting needs.",
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

export default function PayrollBestForPage() {
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
                    href="/payroll"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Payroll
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Payroll Software by Use Case
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Browse payroll software recommendations by scenario: trade, company size, budget, or use case. Find the best fit for your business.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              Payroll by use case
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

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More payroll resources.">
              Related links
            </SectionTitle>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Payroll hub
                </Link>
              </li>
              <li>
                <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Best payroll software
                </Link>
              </li>
              <li>
                <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Compare payroll software
                </Link>
              </li>
              <li>
                <Link href="/payroll/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Payroll guides
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
    title: "Best Payroll Software by Use Case | BeltStack",
    description:
      "Browse our best payroll software picks by use case: small business, contractors, trades, restaurants, retail, nonprofits, and more. Find the right payroll for your situation.",
  };
}
